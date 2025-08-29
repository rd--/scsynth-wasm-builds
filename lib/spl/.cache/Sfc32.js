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
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _seed_2(_self, _asSfc32State_1(_anObject));
    _reset_1(_self);
    return _self;
  }, ["self", "anObject"]),
  "{ :self :anObject | seed(self, asSfc32State(anObject)); reset(self); self }",
);

sl.addMethodToExistingType(
  "Sfc32",
  "Sfc32",
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
  "{ :self | value(block(self)) }",
);

sl.addMethodToExistingType(
  "Sfc32",
  "Sfc32",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_2(_self, _sfc32RandomNumberGeneratorBlock_1(_seed_1(_self)));
  }, ["self"]),
  "{ :self | block(self, sfc32RandomNumberGeneratorBlock(seed(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "asSfc32State",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("List>>asSfc32State: invalid list");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(size(self), 4)), { self }, { error('List>>asSfc32State: invalid list') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "basicSfc32RandomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self | <primitive: let a = _self[0];\n\t\tlet b = _self[1];\n\t\tlet c = _self[2];\n\t\tlet d = _self[3];\n\t\treturn function () {\n\t\t\ta |= 0;\n\t\t\tb |= 0;\n\t\t\tc |= 0;\n\t\t\td |= 0;\n\t\t\tconst t = (a + b | 0) + d | 0;\n\t\t\td = d + 1 | 0;\n\t\t\ta = b ^ b >>> 9;\n\t\t\tb = c + (c << 3) | 0;\n\t\t\tc = c << 21 | c >>> 11;\n\t\t\tc = c + t | 0;\n\t\t\treturn (t >>> 0) / 4294967296;\n\t\t};>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "sfc32RandomNumberGeneratorBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicSfc32RandomNumberGenerator_1(_asSfc32State_1(_self));
  }, ["self"]),
  "{ :self | basicSfc32RandomNumberGenerator(asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sfc32",
  "Sfc32",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newSfc32_0(), _asSfc32State_1(_self));
  }, ["self"]),
  "{ :self | initialize(newSfc32(),asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self", "seed"],
  sl.annotateFunction(function (_self, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _seed";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _generator_0 = _murmurHashGenerator_2(_self, _seed);
    /* Statements */
    return [_generator_0(), _generator_0(), _generator_0(), _generator_0()];
  }, ["self", "seed"]),
  "{ :self :seed | let generator:/0 = murmurHashGenerator(self,seed); [generator(), generator(), generator(), generator()] }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "asSfc32State",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSfc32State_2(_self, 2166136261);
  }, ["self"]),
  "{ :self | asSfc32State(self,2166136261) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sfc32",
  "Sfc32",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_2(_self, 2166136261));
  }, ["self"]),
  "{ :self | Sfc32(asSfc32State(self,2166136261)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sfc32",
  "asSfc32State",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSfc32State_1(_asWords_1(_truncate_1(_self)));
  }, ["self"]),
  "{ :self | asSfc32State(asWords(truncate(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sfc32",
  "Sfc32",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_1(_self));
  }, ["self"]),
  "{ :self | Sfc32(asSfc32State(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Sfc32",
  "Sfc32",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sfc32_1(_asSfc32State_1(_absoluteTime_1(_system)));
  }, []),
  "{ Sfc32(asSfc32State(absoluteTime(system))) }",
);
