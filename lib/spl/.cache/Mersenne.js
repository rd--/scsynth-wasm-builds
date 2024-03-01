/* {- Requires: Random Iterator Stream -} */

sl.addMethod(
  "SmallFloat",
  "Mersenne",
  "mt53RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.mersenneTwister53Generator(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.mersenneTwister53Generator(_self);>\n\t}",
);

sl.addType(
  false,
  "Mersenne",
  "Mersenne",
  ["Object", "Iterator", "Random", "Stream"],
  ["seed", "block"],
);

sl.copyTraitToType(
  "Object",
  "Mersenne",
);

sl.copyTraitToType(
  "Iterator",
  "Mersenne",
);

sl.copyTraitToType(
  "Random",
  "Mersenne",
);

sl.copyTraitToType(
  "Stream",
  "Mersenne",
);

sl.addMethod(
  "Mersenne",
  "Mersenne",
  "initialize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  },
  "{ :self :aNumber |\n\t\tself.seed := aNumber;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethod(
  "Mersenne",
  "Mersenne",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_block_1(_self));
  },
  "{ :self |\n\t\tself.block.value\n\t}",
);

sl.addMethod(
  "Mersenne",
  "Mersenne",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _block_2(_self, _mt53RandomNumberGenerator_1(_seed_1(_self)));
  },
  "{ :self |\n\t\tself.block := self.seed.mt53RandomNumberGenerator\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Mersenne",
  "Mersenne",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newMersenne_0(), _self);
  },
  "{ :self |\n\t\tnewMersenne().initialize(self)\n\t}",
);

sl.addMethod(
  "Void",
  "Mersenne",
  "Mersenne",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Mersenne_1(_unixTimeInMilliseconds_1(_system));
  },
  "{\n\t\tMersenne(system.unixTimeInMilliseconds)\n\t}",
);
