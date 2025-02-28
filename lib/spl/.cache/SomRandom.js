sl.addType(
  false,
  "SomRandom",
  "SomRandom",
  ["Object"],
  ["seed"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SomRandom",
);

sl.addMethodToExistingType(
  "SomRandom",
  "SomRandom",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seed_2(
      _self,
      _bitAnd_2(_plusSign_2(_asterisk_2(_seed_1(_self), 1309), 13849), 65535),
    );
  },
  "{ :self | seed(self, bitAnd((+((*(seed(self), 1309)), 13849)),65535)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SomRandom",
  "SomRandom",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSomRandom_0(), 74755);
  },
  "{ initializeSlots(newSomRandom(),74755) }",
);
