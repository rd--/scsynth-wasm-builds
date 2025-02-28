/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "Sfc32",
  "Sfc32",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Sfc32",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "Sfc32",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "Sfc32",
);

sl.copyTraitMethodsToType(
  "Stream",
  "Sfc32",
);

sl.addMethodToExistingType(
  "Sfc32",
  "Sfc32",
  "initialize",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _seed_2(_self, _asSfc32State_1(_anObject));
    _reset_1(_self);
    return _self;
  },
  "{ :self :anObject | seed(self, asSfc32State(anObject)); reset(self); self }",
);

sl.addMethodToExistingType(
  "Sfc32",
  "Sfc32",
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
  "Sfc32",
  "Sfc32",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_2(_self, _sfc32RandomNumberGeneratorBlock_1(_seed_1(_self)));
  },
  "{ :self | block(self, sfc32RandomNumberGeneratorBlock(seed(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("List>>asSfc32State: invalid list");
    });
  },
  "{ :self | if((=(size(self), 4)), { self }, { error('List>>asSfc32State: invalid list') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "basicSfc32RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let a = _self[0];
    let b = _self[1];
    let c = _self[2];
    let d = _self[3];
    return function () {
      a |= 0;
      b |= 0;
      c |= 0;
      d |= 0;
      const t = (a + b | 0) + d | 0;
      d = d + 1 | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = c << 21 | c >>> 11;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    };
  },
  "{ :self | <primitive: let a = _self[0];\n\t\tlet b = _self[1];\n\t\tlet c = _self[2];\n\t\tlet d = _self[3];\n\t\treturn function () {\n\t\t\ta |= 0;\n\t\t\tb |= 0;\n\t\t\tc |= 0;\n\t\t\td |= 0;\n\t\t\tconst t = (a + b | 0) + d | 0;\n\t\t\td = d + 1 | 0;\n\t\t\ta = b ^ b >>> 9;\n\t\t\tb = c + (c << 3) | 0;\n\t\t\tc = c << 21 | c >>> 11;\n\t\t\tc = c + t | 0;\n\t\t\treturn (t >>> 0) / 4294967296;\n\t\t};>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "sfc32RandomNumberGeneratorBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicSfc32RandomNumberGenerator_1(_asSfc32State_1(_self));
  },
  "{ :self | basicSfc32RandomNumberGenerator(asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newSfc32_0(), _asSfc32State_1(_self));
  },
  "{ :self | initialize(newSfc32(),asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _generator_0 = _murmurHashGenerator_2(_self, _seed);
    /* Statements */
    return [_generator_0(), _generator_0(), _generator_0(), _generator_0()];
  },
  "{ :self :seed | let generator:/0 = murmurHashGenerator(self,seed); [generator(), generator(), generator(), generator()] }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSfc32State_2(_self, 2166136261);
  },
  "{ :self | asSfc32State(self,2166136261) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "hash",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_murmurHashGenerator_2(_self, 2166136261));
  },
  "{ :self | value(murmurHashGenerator(self,2166136261)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "murmurHashGenerator",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      throw new Error(errorMessage);
    } /* Primitive */
    let h = _seed >>> 0; /* h = 2166136261 >>> 0 */
    for (let k, i = 0; i < _self.length; i++) {
      k = Math.imul(_self.charCodeAt(i), 3432918353);
      k = k << 15 | k >>> 17; /* 0xcc9e2d51 */
      h ^= Math.imul(k, 461845907);
      h = h << 13 | h >>> 19; /* 0x1b873593 */
      h = Math.imul(h, 5) + 3864292196 | 0; /* 0xe6546b64 */
    }
    h ^= _self.length;
    return function () {
      h ^= h >>> 16;
      h = Math.imul(h, 2246822507); /* 0x85ebcab6 */
      h ^= h >>> 13;
      h = Math.imul(h, 3266489909); /* 0xc2b2ae35 */
      h ^= h >>> 16;
      return h >>> 0;
    };
  },
  "{ :self :seed | <primitive: let h = _seed >>> 0; /* h = 2166136261 >>> 0 */\n\t\tfor (let k, i = 0; i < _self.length; i++) {\n\t\t\tk = Math.imul(_self.charCodeAt(i), 3432918353);\n\t\t\tk = k << 15 | k >>> 17; /* 0xcc9e2d51 */\n\t\t\th ^= Math.imul(k, 461845907);\n\t\t\th = h << 13 | h >>> 19; /* 0x1b873593 */\n\t\t\th = Math.imul(h, 5) + 3864292196 | 0; /* 0xe6546b64 */\n\t\t}\n\t\th ^= _self.length;\n\t\treturn function () {\n\t\t\th ^= h >>> 16;\n\t\t\th = Math.imul(h, 2246822507); /* 0x85ebcab6 */\n\t\t\th ^= h >>> 13;\n\t\t\th = Math.imul(h, 3266489909); /* 0xc2b2ae35 */\n\t\t\th ^= h >>> 16;\n\t\t\treturn h >>> 0;\n\t\t};>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_2(_self, 2166136261));
  },
  "{ :self | Sfc32(asSfc32State(self,2166136261)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSfc32State_1(_asWords_1(_truncated_1(_self)));
  },
  "{ :self | asSfc32State(asWords(truncated(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_1(_self));
  },
  "{ :self | Sfc32(asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Sfc32",
  "Sfc32",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_1(_unixTimeInMilliseconds_1(_system)));
  },
  "{ Sfc32(asSfc32State(unixTimeInMilliseconds(system))) }",
);
