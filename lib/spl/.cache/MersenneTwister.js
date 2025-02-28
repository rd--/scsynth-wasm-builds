/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "MersenneTwister",
  "MersenneTwister",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  },
  "{ :self :aNumber | seed(self, aNumber); reset(self); self }",
);

sl.addMethodToExistingType(
  "MersenneTwister",
  "MersenneTwister",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_block_1(_self));
  },
  "{ :self | value(block(self)) }",
);

sl.addMethodToExistingType(
  "MersenneTwister",
  "MersenneTwister",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_2(_self, _mt53RandomNumberGenerator_1(_seed_1(_self)));
  },
  "{ :self | block(self, mt53RandomNumberGenerator(seed(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MersenneTwister",
  "mt53RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const mt = new sl.MersenneTwister(_self);
    return function () {
      return mt.genrand_res53();
    };
  },
  "{ :self | <primitive: const mt = new sl.MersenneTwister(_self);\n\t\treturn function () {\n\t\t\treturn mt.genrand_res53();\n\t\t};>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MersenneTwister",
  "MersenneTwister",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newMersenneTwister_0(), _self);
  },
  "{ :self | initialize(newMersenneTwister(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "MersenneTwister",
  "MersenneTwister",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _MersenneTwister_1(_unixTimeInMilliseconds_1(_system));
  },
  "{ MersenneTwister(unixTimeInMilliseconds(system)) }",
);
