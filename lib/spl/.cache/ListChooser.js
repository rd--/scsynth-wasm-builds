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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _caseRule_1 = _if_3(_ignoreCase_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asLowerCase_1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _identity_1;
    });
    let _filter_1 = _ifNil_3(_filterText_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return (function (_unusedString) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedString";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _matchString = _caseRule_1(_value_1(_filterText_1(_self)));
      /* Statements */
      return (function (_aString) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aString";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesSubstring_2(_caseRule_1(_aString), _matchString);
      });
    });
    /* Statements */
    _removeAll_1(_select_1(_self));
    _appendChildren_2(
      _select_1(_self),
      _collect_2(_select_2(_entries_1(_self), _filter_1), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _TextOption_1(_each);
      }),
    );
    return _deselect_1(_select_1(_self));
  },
  "{ :self | let caseRule:/1 = if(ignoreCase(self), { asLowerCase:/1 }, { identity:/1 }); let filter:/1 = ifNil(filterText(self), { { :unusedString | true } }, { let matchString = caseRule(value(filterText(self))); { :aString | includesSubstring(caseRule(aString),matchString) } }); removeAll(select(self)); appendChildren(select(self),collect(select(entries(self),filter:/1), { :each | TextOption(each) })); deselect(select(self)) }",
);

sl.addMethodToExistingType(
  "ListChooser",
  "ListChooser",
  "initialize",
  ["self", "withFilter", "titleText", "listSize"],
  function (_self, _withFilter, _titleText, _listSize) {
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
    _ifNotNil_2(_titleText, function () {
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
    });
    _if_3(_withFilter, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _filterText_2(
        _self,
        _TextInput_2("", _Record_1([["class", "filterText"]])),
      );
      _addEventListener_3(_filterText_1(_self), "change", function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _applyFilter_1(_self);
      });
      return _appendChild_2(_listChooserPane_1(_self), _filterText_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _filterText_2(_self, null);
    });
    _select_2(_self, _createElement_1("select"));
    _size_2(_select_1(_self), _listSize);
    _appendChild_2(_listChooserPane_1(_self), _select_1(_self));
    return _self;
  },
  "{ :self :withFilter :titleText :listSize | ignoreCase(self, true); listChooserPane(self, createElement('div', Record([['class', 'listChooserPane']]))); ifNotNil(titleText, { let title = TextButton(titleText, Record([['class', 'listTitle']])); appendChild(listChooserPane(self),title) }); if(withFilter, { filterText(self, TextInput('', Record([['class', 'filterText']]))); addEventListener(filterText(self), 'change', { :event | applyFilter(self) }); appendChild(listChooserPane(self),filterText(self)) }, { filterText(self, nil) }); select(self, createElement('select')); size(select(self), listSize); appendChild(listChooserPane(self),select(self)); self }",
);

sl.addMethodToExistingType(
  "ListChooser",
  "ListChooser",
  "setEntries",
  ["self", "entries"],
  function (_self, _entries) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entries";
      throw new Error(errorMessage);
    } /* Statements */
    _entries_2(_self, _entries);
    return _applyFilter_1(_self);
  },
  "{ :self :entries | entries(self, entries); applyFilter(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Boolean",
  "ListChooser",
  "ListChooser",
  ["self", "title", "listSize"],
  function (_self, _title, _listSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _title, _listSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_4(_newListChooser_0(), _self, _title, _listSize);
  },
  "{ :self :title :listSize | initialize(newListChooser(),self, title, listSize) }",
);
