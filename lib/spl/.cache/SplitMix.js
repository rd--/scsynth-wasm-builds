/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addMethod(
  "SmallFloat",
  "SplitMix",
  "splitMix32RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.splitMix32Generator(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.splitMix32Generator(_self);>\n\t}",
);

sl.addType(
  false,
  "SplitMix",
  "SplitMix",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitToType(
  "Object",
  "SplitMix",
);

sl.copyTraitToType(
  "Iterator",
  "SplitMix",
);

sl.copyTraitToType(
  "RandomNumberGenerator",
  "SplitMix",
);

sl.copyTraitToType(
  "Stream",
  "SplitMix",
);

sl.addMethod(
  "SplitMix",
  "SplitMix",
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
  "SplitMix",
  "SplitMix",
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
  "SplitMix",
  "SplitMix",
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
    return _block_2(_self, _splitMix32RandomNumberGenerator_1(_seed_1(_self)));
  },
  "{ :self |\n\t\tself.block := self.seed.splitMix32RandomNumberGenerator\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SplitMix",
  "SplitMix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newSplitMix_0(), _self);
  },
  "{ :self |\n\t\tnewSplitMix().initialize(self)\n\t}",
);

sl.addMethod(
  "Void",
  "SplitMix",
  "SplitMix",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SplitMix_1(_unixTimeInMilliseconds_1(_system));
  },
  "{\n\t\tSplitMix(system.unixTimeInMilliseconds)\n\t}",
);
