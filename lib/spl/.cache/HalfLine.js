sl.addType(
  false,
  "HalfLine",
  "HalfLine",
  ["Object", "Equatable"],
  ["point", "vector"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HalfLine",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HalfLine",
);

sl.addMethodToExistingType(
  "HalfLine",
  "HalfLine",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethodToExistingType(
  "HalfLine",
  "HalfLine",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_point_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.point.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HalfLine",
  "HalfLine",
  ["aPoint", "aVector"],
  sl.annotateFunction(function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHalfLine_0(), _aPoint, _aVector);
  }, ["aPoint", "aVector"]),
  "{ :aPoint :aVector |\n\t\tnewHalfLine().initializeSlots(aPoint, aVector)\n\t}",
);
