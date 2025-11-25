sl.addType(
  false,
  "QuantityArray",
  "QuantityArray",
  ["Object", "Storeable", "Equatable"],
  ["magnitudeArray", "unitOrUnitList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "QuantityArray",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "QuantityArray",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "QuantityArray",
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
  "{ :self |\n\t\t(self.unitList.size = self.columnCount).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('invalid parameters')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.magnitudeArray.dimensions.last\n\t}",
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
  "{ :self |\n\t\tlet m = self.magnitudeArray;\n\t\tlet u = self.unitList;\n\t\tlet d = m.arrayDepth;\n\t\tm.atLevelCollect(d - 1) { :each |\n\t\t\teach.withCollect(u, Quantity:/2)\n\t\t}\n\t}",
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
        return _List_2(_last_1(_d), _u);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet u = self.unitOrUnitList;\n\t\tu.isList.if {\n\t\t\tu\n\t\t} {\n\t\t\tlet d = self.magnitudeArray.dimensions;\n\t\t\tList(d.last, u)\n\t\t}\n\t}",
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
  "{ :magnitudeArray :unitOrUnitList |\n\t\tnewQuantityArray()\n\t\t.initializeSlots(magnitudeArray, unitOrUnitList)\n\t\t.assertIsValid\n\t}",
);
