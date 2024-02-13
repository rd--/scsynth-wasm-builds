/* {- Requires: SmallFloat String -} */

sl.addType(
  true,
  "LargeInteger",
  "LargeInteger",
  ["Object", "Binary", "Magnitude", "Number", "Integer"],
  [],
);

sl.copyTraitToType(
  "Object",
  "LargeInteger",
);

sl.copyTraitToType(
  "Binary",
  "LargeInteger",
);

sl.copyTraitToType(
  "Magnitude",
  "LargeInteger",
);

sl.copyTraitToType(
  "Number",
  "LargeInteger",
);

sl.copyTraitToType(
  "Integer",
  "LargeInteger",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "equalsSignEqualsSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self === _anInteger;
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self === _anInteger;>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "equalsSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self === BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self === BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "tilde",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself = anInteger\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "lessThanSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self < BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self < BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "lessThanSignEqualsSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self <= BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self <= BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "plusSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self + BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self + BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "hyphenMinus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self - BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self - BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asterisk",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self * BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self * BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "solidus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _fraction = _reduced_1(
      _Fraction_2(_self, _asLargeInteger_1(_anInteger)),
    );
    /* Statements */
    return _if_3(_isInteger_1(_fraction), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _numerator_1(_fraction);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _fraction;
    });
  },
  "{ :self :anInteger |\n\t\tlet fraction = Fraction(self, anInteger.asLargeInteger).reduced;\n\t\tfraction.isInteger.if {\n\t\t\tfraction.numerator\n\t\t} {\n\t\t\tfraction\n\t\t}\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "solidusSolidus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self / BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self / BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "percentSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const i = BigInt(_anInteger);
    return ((_self % i) + i) % i;
  },
  "{ :self :anInteger |\n\t\t<primitive:\n\t\tconst i = BigInt(_anInteger);\n\t\treturn ((_self % i) + i) % i;\n\t\t>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "circumflexAccent",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self ** BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self ** BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return _self << _anObject;
    } else if (sl.isSmallFloat(_anObject)) {
      return _self << BigInt(_anObject);
    }
    /* Statements */
    return _error_2(
      _self,
      "shiftLeft: operand not a LargeInteger or SmallFloat",
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self << BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tself.error('shiftLeft: operand not a LargeInteger or SmallFloat')\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return sl.shiftRight(_self, _anObject);
    } else if (sl.isSmallFloat(_anObject)) {
      return sl.shiftRight(_self, BigInt(_anObject));
    }
    /* Statements */
    return _error_2(
      _self,
      "shiftRight: operand not a LargeInteger or SmallFloat",
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn sl.shiftRight(_self, _anObject);\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn sl.shiftRight(_self, BigInt(_anObject));\n\t\t}\n\t\t>\n\t\tself.error('shiftRight: operand not a LargeInteger or SmallFloat')\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asLargeInteger_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(aNumber.asLargeInteger, self)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSmallFloat_1(_self);
  },
  "{ :self |\n\t\tself.asSmallFloat\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asSmallFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Number(_self);
  },
  "{ :self |\n\t\t<primitive: return Number(_self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return _self & _anObject;
    } else if (sl.isSmallFloat(_anObject)) {
      return _self & BigInt(_anObject);
    }
    /* Statements */
    return _error_2(_self, "bitAnd: operand not a LargeInteger or SmallFloat");
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self & _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self & BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tself.error('bitAnd: operand not a LargeInteger or SmallFloat')\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return _self | _anObject;
    } else if (sl.isSmallFloat(_anObject)) {
      return _self | BigInt(_anObject);
    }
    /* Statements */
    return _error_2(_self, "bitOr: operand not a LargeInteger or SmallFloat");
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self | _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self | BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tself.error('bitOr: operand not a LargeInteger or SmallFloat')\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "bitXor",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return _self ^ _anObject;
    } else if (sl.isSmallFloat(_anObject)) {
      return _self ^ BigInt(_anObject);
    }
    /* Statements */
    return _error_2(_self, "bitXor: operand not a LargeInteger or SmallFloat");
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self ^ _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self ^ BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tself.error('bitXor: operand not a LargeInteger or SmallFloat')\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "even",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2), 0);
  },
  "{ :self |\n\t\t(self % 2) = 0\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "odd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2), 1);
  },
  "{ :self |\n\t\t(self % 2) = 1\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1n;
  },
  "{ :self |\n\t\t1n\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toString();
  },
  "{ :self |\n\t\t<primitive: return _self.toString();>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_printString_1(_self), "n");
  },
  "{ :self |\n\t\tself.printString ++ 'n'\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "quotient",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidusSolidus_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself // anInteger\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "remainder",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self % BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self % BigInt(_anInteger);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.bigIntSqrt(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.bigIntSqrt(_self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "toNumber",
  ["self", "precision"],
  function (_self, _precision) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _precision";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    BigInt.asIntN(_precision, _self);
  },
  "{ :self :precision |\n\t\t<primitive: BigInt.asIntN(_precision, _self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "unit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1n;
  },
  "{ :self |\n\t\t1n\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "veryCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself = aNumber\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 0n;
  },
  "{ :self |\n\t\t0n\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return BigInt(_self);
  },
  "{ :self |\n\t\t<primitive: return BigInt(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "LargeInteger",
  "parseLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return BigInt(_self);
  },
  "{ :self |\n\t\t<primitive: return BigInt(_self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "fnv1aHash",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _fnvPrime = 16777619;
    let _hash = _if_3(_negative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 3490449840;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 2166136261;
    });
    /* Statements */
    _do_2(_upTo_2(1, _digitLength_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _hash = _bitAnd_2(
        _assertIsSmallInteger_1(parseInt("FFFFFFFF", 16)),
        _asterisk_2(_bitXor_2(_hash, _digitAt_2(_self, _index)), _fnvPrime),
      );
    });
    return _hash;
  },
  "{ :self |\n\t\tlet fnvPrime = 16777619;\n\t\tlet hash = self.negative.if {\n\t\t\t3490449840\n\t\t} {\n\t\t\t2166136261\n\t\t};\n\t\t1.upTo(self.digitLength).do { :index |\n\t\t\thash := 16rFFFFFFFF.bitAnd(hash.bitXor(self.digitAt(index)) * fnvPrime)\n\t\t};\n\t\thash\n\t}",
);
