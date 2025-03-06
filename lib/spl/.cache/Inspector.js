sl.addType(
  false,
  "Inspector",
  "Inspector",
  ["Object", "View"],
  ["inspectorPane", "inspectorList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Inspector",
);

sl.copyTraitMethodsToType(
  "View",
  "Inspector",
);

sl.addMethodToExistingType(
  "Inspector",
  "Inspector",
  "addInspector",
  ["self", "aValue", "index"],
  sl.annotateFunction(function (_self, _aValue, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aValue, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxIndices = 2048;
    let _fields = _inspectAsList_2(_aValue, _maxIndices);
    let _listChooser = _ListChooser_3(false, _concisePrintString_1(_aValue), 6);
    let _select = _select_1(_listChooser);
    /* Statements */
    _setEntries_2(
      _listChooser,
      _collect_2(
        _fields,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(
            _plusSignPlusSign_2(_key_1(_each), ": "),
            _concisePrintString_1(_value_1(_each)),
          );
        }, ["each"]),
      ),
    );
    _deselect_1(_select);
    _addEventListener_3(
      _select,
      "change",
      sl.annotateFunction(function (_event) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _event";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfPresent_3(
          _fields,
          _plusSign_2(_selectedIndex_1(_select), 1),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            _removeInspectorsFrom_2(_self, _plusSign_2(_index, 1));
            return _addInspector_3(
              _self,
              _value_1(_each),
              _plusSign_2(_index, 1),
            );
          }, ["each"]),
        );
      }, ["event"]),
    );
    _appendChild_2(_inspectorPane_1(_self), _listChooserPane_1(_listChooser));
    return _add_2(_inspectorList_1(_self), _listChooser);
  }, ["self", "aValue", "index"]),
  "{ :self :aValue :index | let maxIndices = 2048; let fields = inspectAsList(aValue,maxIndices); let listChooser = ListChooser(false, concisePrintString(aValue), 6); let select = select(listChooser); setEntries(listChooser,collect(fields, { :each | ++(++(key(each), ': '), concisePrintString(value(each))) })); deselect(select); addEventListener(select, 'change', { :event | atIfPresent(fields, +(selectedIndex(select), 1), { :each | removeInspectorsFrom(self,+(index, 1)); addInspector(self,value(each), +(index, 1)) }) }); appendChild(inspectorPane(self),listChooserPane(listChooser)); add(inspectorList(self),listChooser) }",
);

sl.addMethodToExistingType(
  "Inspector",
  "Inspector",
  "initialize",
  ["self", "aValue"],
  sl.annotateFunction(function (_self, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aValue";
      throw new Error(errorMessage);
    } /* Statements */
    _inspectorPane_2(
      _self,
      _createElement_2("div", _Record_1([["class", "inspectorPane"]])),
    );
    _inspectorList_2(_self, []);
    _addInspector_3(_self, _aValue, 1);
    return _self;
  }, ["self", "aValue"]),
  "{ :self :aValue | inspectorPane(self, createElement('div', Record([['class', 'inspectorPane']]))); inspectorList(self,[]); addInspector(self,aValue, 1); self }",
);

sl.addMethodToExistingType(
  "Inspector",
  "Inspector",
  "removeInspectorsFrom",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _lessThanSignEqualsSign_2(_index, _size_1(_inspectorList_1(_self))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _removeLast_2(
            _inspectorList_1(_self),
            _plusSign_2(
              _hyphenMinus_2(_size_1(_inspectorList_1(_self)), _index),
              1,
            ),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _remove_1(_listChooserPane_1(_each));
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | ifTrue((<=(index, size(inspectorList(self)))), { do(removeLast(inspectorList(self),+(-(size(inspectorList(self)), index), 1)), { :each | remove(listChooserPane(each)) }) }) }",
);

sl.addMethodToExistingType(
  "Inspector",
  "Inspector",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _inspectorPane_1(_self);
  }, ["self"]),
  "{ :self | inspectorPane(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Inspector",
  "Inspector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newInspector_0(), _self);
  }, ["self"]),
  "{ :self | initialize(newInspector(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Inspector",
  "inspect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _smallKansas = _smallKansas_1(_system);
    /* Statements */
    return _inspectorOn_3(_smallKansas, _self, _where_1(_smallKansas));
  }, ["self"]),
  "{ :self | let smallKansas = smallKansas(system); inspectorOn(smallKansas,self, where(smallKansas)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "Inspector",
  "inspectorOn",
  ["self", "aValue", "event"],
  sl.annotateFunction(function (_self, _aValue, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aValue, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(_self, _Inspector_1(_aValue), _event);
  }, ["self", "aValue", "event"]),
  "{ :self :aValue :event | addFrame(self,Inspector(aValue), event) }",
);
