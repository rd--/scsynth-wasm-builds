sl.addType(
  false,
  "SomRandom",
  "SomRandom",
  ["Object"],
  ["seed"],
);

sl.copyTraitToType(
  "Object",
  "SomRandom",
);

sl.addMethod(
  "SomRandom",
  "SomRandom",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _seed_2(
      _self,
      _bitAnd_2(_plusSign_2(_asterisk_2(_seed_1(_self), 1309), 13849), 65535),
    );
  },
  "{ :self |\n\t\tself.seed := ((self.seed * 1309) + 13849).bitAnd(65535)\n\t}",
);

sl.addType(
  false,
  "Void",
  "SomRandom",
  [],
  [],
);

sl.addMethod(
  "Void",
  "SomRandom",
  "SomRandom",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSomRandom_0(), 74755);
  },
  "{\n\t\tnewSomRandom().initializeSlots(74755)\n\t}",
);
