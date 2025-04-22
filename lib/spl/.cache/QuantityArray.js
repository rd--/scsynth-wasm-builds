sl.addType(
  false,
  "QuantityArray",
  "QuantityArray",
  ["Object"],
  ["magnitudeArray", "unitOrUnitList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "QuantityArray",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "assertIsValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_unitList_1(_self)), _columnCount_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "invalid parameters");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(size(unitList(self)), columnCount(self))), { self }, { error(self,'invalid parameters') }) }",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "columnCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_dimensions_1(_magnitudeArray_1(_self)));
  }, ["self"]),
  "{ :self | last(dimensions(magnitudeArray(self))) }",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _magnitudeArray_1(_self);
    let _u = _unitList_1(_self);
    let _d = _arrayDepth_1(_m);
    /* Statements */
    return _atLevelCollect_3(
      _m,
      _hyphenMinus_2(_d, 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_each, _u, _Quantity_2);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let m = magnitudeArray(self); let u = unitList(self); let d = arrayDepth(m); atLevelCollect(m, -(d, 1), { :each | withCollect(each,u, Quantity:/2) }) }",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "QuantityArray",
  "QuantityArray",
  "unitList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _unitOrUnitList_1(_self);
    /* Statements */
    return _if_3(
      _isList_1(_u),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _u;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _dimensions_1(_magnitudeArray_1(_self));
        /* Statements */
        return _numberSign_2(_u, _last_1(_d));
      }, []),
    );
  }, ["self"]),
  "{ :self | let u = unitOrUnitList(self); if(isList(u), { u }, { let d = dimensions(magnitudeArray(self)); #(u, last(d)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "QuantityArray",
  "QuantityArray",
  ["magnitudeArray", "unitOrUnitList"],
  sl.annotateFunction(function (_magnitudeArray, _unitOrUnitList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _magnitudeArray, _unitOrUnitList";
      throw new Error(errorMessage);
    } /* Statements */
    return _assertIsValid_1(
      _initializeSlots_3(
        _newQuantityArray_0(),
        _magnitudeArray,
        _unitOrUnitList,
      ),
    );
  }, ["magnitudeArray", "unitOrUnitList"]),
  "{ :magnitudeArray :unitOrUnitList | assertIsValid(initializeSlots(newQuantityArray(),magnitudeArray, unitOrUnitList)) }",
);
