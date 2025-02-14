sl.addType(
  false,
  "InfiniteLine",
  "InfiniteLine",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitToType(
  "Object",
  "InfiniteLine",
);

sl.addMethod(
  "InfiniteLine",
  "InfiniteLine",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "InfiniteLine",
  "InfiniteLine",
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
  "InfiniteLine",
  "InfiniteLine",
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
  "InfiniteLine",
  "InfiniteLine",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "List",
  "InfiniteLine",
  "InfiniteLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newInfiniteLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector |\n\t\tnewInfiniteLine().initializeSlots(aPoint, aVector)\n\t}",
);
