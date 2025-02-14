sl.addType(
  false,
  "HalfLine",
  "HalfLine",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitToType(
  "Object",
  "HalfLine",
);

sl.addMethod(
  "HalfLine",
  "HalfLine",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "HalfLine",
  "HalfLine",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_point_1(_self));
  },
  "{ :self |\n\t\tself.point.size\n\t}",
);

sl.addMethod(
  "List",
  "HalfLine",
  "HalfLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHalfLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector |\n\t\tnewHalfLine().initializeSlots(aPoint, aVector)\n\t}",
);
