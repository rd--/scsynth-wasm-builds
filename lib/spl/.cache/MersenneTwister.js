/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "MersenneTwister",
  "MersenneTwister",
  ["Object", "Equatable", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MersenneTwister",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "MersenneTwister",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "MersenneTwister",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "MersenneTwister",
);

sl.copyTraitMethodsToType(
  "Stream",
  "MersenneTwister",
);

sl.addMethodToExistingType(
  "MersenneTwister",
  "MersenneTwister",
  "initialize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.seed := aNumber;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "MersenneTwister",
  "MersenneTwister",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_block_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.block.value\n\t}",
);

sl.addMethodToExistingType(
  "MersenneTwister",
  "MersenneTwister",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_2(_self, _mt53RandomNumberGenerator_1(_seed_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.block := self.seed.mt53RandomNumberGenerator\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MersenneTwister",
  "mt53RandomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const mt = new sl.MersenneTwister(_self);
    return function () {
      return mt.genrand_res53();
    };
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\tconst mt = new sl.MersenneTwister(_self);\n\t\treturn function () {\n\t\t\treturn mt.genrand_res53();\n\t\t};\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MersenneTwister",
  "MersenneTwister",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newMersenneTwister_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewMersenneTwister().initialize(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "MersenneTwister",
  "MersenneTwister",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _MersenneTwister_1(_absoluteTime_1(_system));
  }, []),
  "{\n\t\tMersenneTwister(system.absoluteTime)\n\t}",
);
