sl.addType(
  false,
  "HalfLine",
  "HalfLine",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HalfLine",
);

sl.addMethodToExistingType(
  "HalfLine",
  "HalfLine",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "HalfLine",
  "HalfLine",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_point_1(_self));
  },
  "{ :self | size(point(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HalfLine",
  "HalfLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHalfLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector | initializeSlots(newHalfLine(),aPoint, aVector) }",
);
