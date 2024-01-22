/* {- Requires: Random Iterator Stream -} */

sl.addMethod(
  "Array",
  "Sfc32",
  "basicSfc32RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.sfc32Generator(_self[0], _self[1], _self[2], _self[3]);
  },
  "{ :self |\n\t\t<primitive: return sl.sfc32Generator(_self[0], _self[1], _self[2], _self[3]);>\n\t}",
);

sl.addMethod(
  "Array",
  "Sfc32",
  "sfc32RandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_size_1(_self), 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _basicSfc32RandomNumberGenerator_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Array>>sfc32RandomNumberGenerator: invalid seed");
    });
  },
  "{ :self |\n\t\t(self.size = 4).if {\n\t\t\tself.basicSfc32RandomNumberGenerator\n\t\t} {\n\t\t\t'Array>>sfc32RandomNumberGenerator: invalid seed'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "murmur3Generator",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.murmur3Generator(_self, _seed);
  },
  "{ :self :seed |\n\t\t<primitive: return sl.murmur3Generator(_self, _seed);>\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "murmur3",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _murmur3_2(_self, 2166136261);
  },
  "{ :self |\n\t\tself.murmur3(2166136261)\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "murmur3",
  ["self", "seed"],
  function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _generator = _murmur3Generator_2(_self, _seed);
    /* Statements */
    return [
      _value_1(_generator),
      _value_1(_generator),
      _value_1(_generator),
      _value_1(_generator),
    ];
  },
  "{ :self :seed |\n\t\tlet generator = self.murmur3Generator(seed);\n\t\t[\n\t\t\tgenerator.value,\n\t\t\tgenerator.value,\n\t\t\tgenerator.value,\n\t\t\tgenerator.value\n\t\t]\n\t}",
);

sl.addType(
  false,
  "Sfc32",
  "Sfc32",
  ["Object", "Random", "Iterator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitToType(
  "Object",
  "Sfc32",
);

sl.copyTraitToType(
  "Random",
  "Sfc32",
);

sl.copyTraitToType(
  "Iterator",
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
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  },
  "{ :self :aNumber |\n\t\tself.seed := aNumber;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethod(
  "Sfc32",
  "Sfc32",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _value_1(_block_1(_self));
  },
  "{ :self |\n\t\tself.block.value\n\t}",
);

sl.addMethod(
  "Sfc32",
  "Sfc32",
  "randomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _block_2(_self, _sfc32RandomNumberGenerator_1(_seed_1(_self)));
  },
  "{ :self |\n\t\tself.block := self.seed.sfc32RandomNumberGenerator\n\t}",
);

sl.addMethod(
  "String",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newSfc32_0(), _murmur3_2(_self, 2166136261));
  },
  "{ :self |\n\t\tnewSfc32().initialize(self.murmur3(2166136261))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Sfc32",
  "Random",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_self);
  },
  "{ :self |\n\t\tSfc32(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Sfc32",
  "Sfc32",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_asWords_1(_truncated_1(_self)));
  },
  "{ :self |\n\t\tSfc32(self.truncated.asWords)\n\t}",
);

sl.addMethod(
  "Void",
  "Sfc32",
  "Random",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_0();
  },
  "{\n\t\tSfc32()\n\t}",
);

sl.addMethod(
  "Void",
  "Sfc32",
  "Sfc32",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sfc32_1(_unixTimeInMilliseconds_1(_system));
  },
  "{\n\t\tSfc32(system.unixTimeInMilliseconds)\n\t}",
);
