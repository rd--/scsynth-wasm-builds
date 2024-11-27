/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "Sfc32",
  "Sfc32",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitToType(
  "Object",
  "Sfc32",
);

sl.copyTraitToType(
  "Iterator",
  "Sfc32",
);

sl.copyTraitToType(
  "RandomNumberGenerator",
  "Sfc32",
);

sl.copyTraitToType(
  "Stream",
  "Sfc32",
);

sl.addMethod(
  "Sfc32",
  "Sfc32",
  "initialize",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _seed_2(_self, _asSfc32State_1(_anObject));
    _reset_1(_self);
    return _self;
  },
  "{ :self :anObject |\n\t\tself.seed := anObject.asSfc32State;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethod(
  "Sfc32",
  "Sfc32",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_block_1(_self));
  },
  "{ :self |\n\t\tself.block.value\n\t}",
);

sl.addMethod(
  "Sfc32",
  "Sfc32",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _block_2(_self, _sfc32RandomNumberGeneratorBlock_1(_seed_1(_self)));
  },
  "{ :self |\n\t\tself.block := self.seed.sfc32RandomNumberGeneratorBlock\n\t}",
);

sl.addMethod(
  "List",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("List>>asSfc32State: invalid list");
    });
  },
  "{ :self |\n\t\t(self.size = 4).if {\n\t\t\tself\n\t\t} {\n\t\t\t'List>>asSfc32State: invalid list'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Sfc32",
  "basicSfc32RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.sfc32Generator(_self[0], _self[1], _self[2], _self[3]);
  },
  "{ :self |\n\t\t<primitive: return sl.sfc32Generator(_self[0], _self[1], _self[2], _self[3]);>\n\t}",
);

sl.addMethod(
  "List",
  "Sfc32",
  "sfc32RandomNumberGeneratorBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicSfc32RandomNumberGenerator_1(_asSfc32State_1(_self));
  },
  "{ :self |\n\t\tself.asSfc32State.basicSfc32RandomNumberGenerator\n\t}",
);

sl.addMethod(
  "List",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newSfc32_0(), _asSfc32State_1(_self));
  },
  "{ :self |\n\t\tnewSfc32().initialize(self.asSfc32State)\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _seed"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _generator_0 = _murmurHashGenerator_2(_self, _seed);
    /* Statements */
    return [_generator_0(), _generator_0(), _generator_0(), _generator_0()];
  },
  "{ :self :seed |\n\t\tlet generator:/0 = self.murmurHashGenerator(seed);\n\t\t[\n\t\t\tgenerator(),\n\t\t\tgenerator(),\n\t\t\tgenerator(),\n\t\t\tgenerator()\n\t\t]\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asSfc32State_2(_self, 2166136261);
  },
  "{ :self |\n\t\tself.asSfc32State(2166136261)\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "hash",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_murmurHashGenerator_2(_self, 2166136261));
  },
  "{ :self |\n\t\tself.murmurHashGenerator(2166136261).value\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "murmurHashGenerator",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _seed"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.murmur3Generator(_self, _seed);
  },
  "{ :self :seed |\n\t\t<primitive: return sl.murmur3Generator(_self, _seed);>\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_asSfc32State_2(_self, 2166136261));
  },
  "{ :self |\n\t\tSfc32(self.asSfc32State(2166136261))\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sfc32",
  "asSfc32State",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asSfc32State_1(_asWords_1(_truncated_1(_self)));
  },
  "{ :self |\n\t\tself.truncated.asWords.asSfc32State\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_asSfc32State_1(_self));
  },
  "{ :self |\n\t\tSfc32(self.asSfc32State)\n\t}",
);

sl.addMethod(
  "Void",
  "Sfc32",
  "Sfc32",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage =
        "Arity: expected 0, "; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_asSfc32State_1(_unixTimeInMilliseconds_1(_system)));
  },
  "{\n\t\tSfc32(system.unixTimeInMilliseconds.asSfc32State)\n\t}",
);
