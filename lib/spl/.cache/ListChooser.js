/*  Requires: TextElement  */

sl.addType(
  false,
  "ListChooser",
  "ListChooser",
  ["Object"],
  ["listChooserPane", "filterText", "select", "entries", "ignoreCase"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ListChooser",
);

sl.addMethodToExistingType(
  "ListChooser",
  "ListChooser",
  "applyFilter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _caseRule_1 = _if_3(
      _ignoreCase_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asLowerCase_1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _identity_1;
      }, []),
    );
    let _filter_1 = _ifNil_3(
      _filterText_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_unusedString) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unusedString";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, ["unusedString"]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _matchString = _caseRule_1(_value_1(_filterText_1(_self)));
        /* Statements */
        return sl.annotateFunction(function (_aString) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _aString";
            throw new Error(errorMessage);
          } /* Statements */
          return _includesSubstring_2(_caseRule_1(_aString), _matchString);
        }, ["aString"]);
      }, []),
    );
    /* Statements */
    _removeAll_1(_select_1(_self));
    _appendChildren_2(
      _select_1(_self),
      _collect_2(
        _select_2(_entries_1(_self), _filter_1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _TextOption_1(_each);
        }, ["each"]),
      ),
    );
    return _deselect_1(_select_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tlet caseRule:/1 = self.ignoreCase.if {\n\t\t\tasLowerCase:/1\n\t\t} {\n\t\t\tidentity:/1\n\t\t};\n\t\tlet filter:/1 = self.filterText.ifNil {\n\t\t\t{ :unusedString |\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tlet matchString = self.filterText.value.caseRule;\n\t\t\t{ :aString |\n\t\t\t\taString.caseRule.includesSubstring(matchString)\n\t\t\t}\n\t\t};\n\t\tself.select.removeAll;\n\t\tself.select.appendChildren(self.entries.select(filter:/1).collect { :each |\n\t\t\tTextOption(each)\n\t\t});\n\t\tself.select.deselect\n\t}",
);

sl.addMethodToExistingType(
  "ListChooser",
  "ListChooser",
  "initialize",
  ["self", "withFilter", "titleText", "listSize"],
  sl.annotateFunction(function (_self, _withFilter, _titleText, _listSize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _withFilter, _titleText, _listSize";
      throw new Error(errorMessage);
    } /* Statements */
    _ignoreCase_2(_self, true);
    _listChooserPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "listChooserPane"]])),
    );
    _ifNotNil_2(
      _titleText,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _title = _TextButton_2(
          _titleText,
          _Record_1([["class", "listTitle"]]),
        );
        /* Statements */
        return _appendChild_2(_listChooserPane_1(_self), _title);
      }, []),
    );
    _if_3(
      _withFilter,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _filterText_2(
          _self,
          _TextInput_2("", _Record_1([["class", "filterText"]])),
        );
        _addEventListener_3(
          _filterText_1(_self),
          "change",
          sl.annotateFunction(function (_event) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _event";
              throw new Error(errorMessage);
            } /* Statements */
            return _applyFilter_1(_self);
          }, ["event"]),
        );
        return _appendChild_2(_listChooserPane_1(_self), _filterText_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _filterText_2(_self, null);
      }, []),
    );
    _select_2(_self, _createElement_1("select"));
    _size_2(_select_1(_self), _listSize);
    _appendChild_2(_listChooserPane_1(_self), _select_1(_self));
    return _self;
  }, ["self", "withFilter", "titleText", "listSize"]),
  "{ :self :withFilter :titleText :listSize |\n\t\tself.ignoreCase := true;\n\t\tself.listChooserPane := 'div'.createElement(\n\t\t\tclass: 'listChooserPane'\n\t\t);\n\t\ttitleText.ifNotNil {\n\t\t\tlet title = TextButton(\n\t\t\t\ttitleText,\n\t\t\t\t(class: 'listTitle')\n\t\t\t);\n\t\t\tself.listChooserPane.appendChild(title)\n\t\t};\n\t\twithFilter.if {\n\t\t\tself.filterText := TextInput(\n\t\t\t\t'',\n\t\t\t\t(class: 'filterText')\n\t\t\t);\n\t\t\tself.filterText.addEventListener('change') { :event |\n\t\t\t\tself.applyFilter\n\t\t\t};\n\t\t\tself.listChooserPane.appendChild(self.filterText)\n\t\t} {\n\t\t\tself.filterText := nil\n\t\t};\n\t\tself.select := 'select'.createElement;\n\t\tself.select.size := listSize;\n\t\tself.listChooserPane.appendChild(self.select);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "ListChooser",
  "ListChooser",
  "setEntries",
  ["self", "entries"],
  sl.annotateFunction(function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    _entries_2(_self, _entries);
    return _applyFilter_1(_self);
  }, ["self", "entries"]),
  "{ :self :entries |\n\t\tself.entries := entries;\n\t\tself.applyFilter\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Boolean",
  "ListChooser",
  "ListChooser",
  ["self", "title", "listSize"],
  sl.annotateFunction(function (_self, _title, _listSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _listSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_4(_newListChooser_0(), _self, _title, _listSize);
  }, ["self", "title", "listSize"]),
  "{ :self :title :listSize |\n\t\tnewListChooser().initialize(self, title, listSize)\n\t}",
);
