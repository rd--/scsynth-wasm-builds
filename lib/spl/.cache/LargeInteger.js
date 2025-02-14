/*  Requires: SmallFloat String  */

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
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self === BigInt(_anObject);
    } else {
      return false;
    }
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self === BigInt(_anObject);\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self < BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _lessThanSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self < BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, <)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self <= BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(
      _anObject,
      _self,
      _lessThanSignEqualsSign_2,
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self <= BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, <=)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self + BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _plusSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self + BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, +)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self - BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self - BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, -)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self * BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _asterisk_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self * BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, *)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _fraction = _Fraction_2(_self, _asLargeInteger_1(_anObject));
      /* Statements */
      return _if_3(_isInteger_1(_fraction), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _numerator_1(_fraction);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _fraction;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntegerAndApply_3(_anObject, _self, _solidus_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isInteger.if {\n\t\t\tlet fraction = Fraction(self, anObject.asLargeInteger);\n\t\t\tfraction.isInteger.if {\n\t\t\t\tfraction.numerator\n\t\t\t} {\n\t\t\t\tfraction\n\t\t\t}\n\t\t} {\n\t\t\tanObject.adaptToIntegerAndApply(self, /)\n\t\t}\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self / BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _solidusSolidus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self / BigInt(_anObject);\n\t\t};\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, //)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      const i = BigInt(_anObject);
      return ((_self % i) + i) % i;
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _percentSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\tconst i = BigInt(_anObject);\n\t\t\treturn ((_self % i) + i) % i;\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, %)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self ** BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _circumflexAccent_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self ** BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToIntegerAndApply(self, ^)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _raisedToInteger_2(_self, _anObject);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_anObject, _self, _circumflexAccent_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isInteger.if {\n\t\t\tself.raisedToInteger(anObject)\n\t\t} {\n\t\t\tanObject.adaptToNumberAndApply(self, ^)\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject)) {
      return _self >> _anObject;
    } else if (sl.isSmallFloat(_anObject)) {
      return _self >> BigInt(_anObject);
    }
    /* Statements */
    return _error_2(
      _self,
      "shiftRight: operand not a LargeInteger or SmallFloat",
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self >> _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self >> BigInt(_anObject);\n\t\t}\n\t\t>\n\t\tself.error('shiftRight: operand not a LargeInteger or SmallFloat')\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallFloat_1(_self);
  },
  "{ :self |\n\t\tself.asSmallFloat\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSmallInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _asSmallFloat_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isSmallInteger.if {\n\t\t\tself.asSmallFloat\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Number(_self);
  },
  "{ :self |\n\t\t<primitive: return Number(_self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "atRandom",
  ["self", "shape", "rng"],
  function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomInteger_4(_rng, 1, _asSmallFloat_1(_self), _shape);
  },
  "{ :self :shape :rng |\n\t\trng.randomInteger(1, self.asSmallFloat, shape)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "basicPrintString",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString(_radix).toUpperCase();
  },
  "{ :self :radix |\n\t\t<primitive: return _self.toString(_radix).toUpperCase();>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
  "floorLog",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        "LargeInteger>>floorLog: is only defined for x > 0",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(_numberOfDigitsInBase_2(_self, _radix), 1);
    });
  },
  "{ :self :radix |\n\t\t(self <= 0).if {\n\t\t\tself.error('LargeInteger>>floorLog: is only defined for x > 0')\n\t\t} {\n\t\t\tself.numberOfDigitsInBase(radix) - 1\n\t\t}\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "highBitOfMagnitude",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _realLength = _digitLength_1(_self);
      let _lastDigit = _digitAt_2(_self, _realLength);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_lastDigit, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _realLength = _hyphenMinus_2(_realLength, 1);
        return _ifTrue_2(_equalsSign_2(_realLength, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(0);
        });
      });
      return _plusSign_2(
        _highBitOfByte_1(_asSmallFloat_1(_lastDigit)),
        _asterisk_2(8, _hyphenMinus_2(_realLength, 1)),
      );
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet realLength = self.digitLength;\n\t\t\tlet lastDigit = self.digitAt(realLength);\n\t\t\t{\n\t\t\t\tlastDigit = 0\n\t\t\t}.whileTrue {\n\t\t\t\trealLength := realLength - 1;\n\t\t\t\t(realLength = 0).ifTrue {\n\t\t\t\t\t0.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tlastDigit.asSmallFloat.highBitOfByte + (8 * (realLength - 1))\n\t\t}\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isEven",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2n), 0n);
  },
  "{ :self |\n\t\t(self % 2L) = 0L\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isExact",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isInteger",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isLiteral",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isOdd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2n), 1n);
  },
  "{ :self |\n\t\t(self % 2L) = 1L\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isRational",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isSmallInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(
      _abs_1(_self),
      _hyphenMinus_2(_circumflexAccent_2(2n, 53), 1),
    );
  },
  "{ :self |\n\t\tself.abs <= (2L ^ 53 - 1)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isVeryCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself = aNumber\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 0n);
  },
  "{ :self |\n\t\tself = 0L\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "nthRoot",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _nthRoot_2(_asSmallFloat_1(_self), _asSmallFloat_1(_aNumber));
  },
  "{ :self :aNumber |\n\t\tself.asSmallFloat.nthRoot(aNumber.asSmallFloat)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asFloat_1(_self));
  },
  "{ :self |\n\t\tself.asFloat.log\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_asFloat_1(_self));
  },
  "{ :self |\n\t\tself.asFloat.log2\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _log10_1(_asFloat_1(_self));
  },
  "{ :self |\n\t\tself.asFloat.log10\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "one",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1n;
  },
  "{ :unused |\n\t\t1L\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_1(_self);
  },
  "{ :self |\n\t\tself.storeString\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _solidusSolidus_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself // anInteger\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "raisedToInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ** BigInt(_anInteger);
  },
  "{ :self :anInteger |\n\t\t<primitive: return _self ** BigInt(_anInteger);>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self < 2n) {
      return _self;
    }
    if (_self < 16n) {
      return BigInt(Math.sqrt(Number(_self)) | 0);
    }
    let x0, x1;
    if (_self < 4503599627370496n) {
      x1 = BigInt(Math.sqrt(Number(_self)) | 0) - 3n;
    } else {
      const vlen = _self.toString().length;
      if (!(vlen & 1)) {
        x1 = 10n ** (BigInt(vlen / 2));
      } else {
        x1 = 4n * 10n ** (BigInt((vlen / 2) | 0));
      }
    }
    do {
      x0 = x1;
      x1 = ((_self / x0) + x0) >> 1n;
    } while ((x0 !== x1 && x0 !== (x1 - 1n)));
    return x0;
  },
  "{ :self |\n\t\t<primitive:\n\t\t/* https://github.com/Aisse-258/bigint-isqrt */\n\t\tif (_self < 2n) {\n\t\t\treturn _self;\n\t\t}\n\t\tif (_self < 16n) {\n\t\t\treturn BigInt(Math.sqrt(Number(_self)) | 0);\n\t\t}\n\t\tlet x0, x1;\n\t\tif (_self < 4503599627370496n) {\n\t\t\tx1 = BigInt(Math.sqrt(Number(_self)) | 0) - 3n;\n\t\t} else {\n\t\t\tconst vlen = _self.toString().length;\n\t\t\tif (!(vlen & 1)) {\n\t\t\t\tx1 = 10n ** (BigInt(vlen / 2));\n\t\t\t} else {\n\t\t\t\tx1 = 4n * 10n ** (BigInt((vlen / 2) | 0));\n\t\t\t}\n\t\t}\n\t\tdo {\n\t\t\tx0 = x1;\n\t\t\tx1 = ((_self / x0) + x0) >> 1n;\n\t\t} while ((x0 !== x1 && x0 !== (x1 - 1n)));\n\t\treturn x0;\n\t\t>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_basicPrintString_2(_self, 10), "L");
  },
  "{ :self |\n\t\tself.basicPrintString(10) ++ 'L'\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    BigInt.asIntN(_precision, _self);
  },
  "{ :self :precision |\n\t\t<primitive: BigInt.asIntN(_precision, _self);>\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "unit",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1n;
  },
  "{ :unused |\n\t\t1L\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "LargeInteger",
  "zero",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 0n;
  },
  "{ :unused |\n\t\t0L\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return BigInt(_self);
  },
  "{ :self |\n\t\t<primitive: return BigInt(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "LargeInteger",
  "basicParseLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_endsWith_2(_self, "L"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseLargeInteger_1(_allButLast_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseLargeInteger_1(_self);
    });
  },
  "{ :self |\n\t\tself.endsWith('L').if {\n\t\t\tself.allButLast.basicParseLargeInteger\n\t\t} {\n\t\t\tself.basicParseLargeInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "ByteArray",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0n;
    /* Statements */
    _withIndexDo_2(_self, function (_each, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _plusSign_2(
        _answer,
        _lessThanSignLessThanSign_2(
          _each,
          _asterisk_2(_hyphenMinus_2(_i, 1n), 8),
        ),
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0L;\n\t\tself.withIndexDo { :each :i |\n\t\t\tanswer := answer + (each << (i - 1L * 8))\n\t\t};\n\t\tanswer\n\t}",
);
