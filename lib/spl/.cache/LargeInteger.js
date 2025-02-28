/*  Requires: SmallFloat String  */

sl.addType(
  true,
  "LargeInteger",
  "LargeInteger",
  ["Object", "Binary", "Magnitude", "Number", "Integer"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "LargeInteger",
);

sl.copyTraitMethodsToType(
  "Binary",
  "LargeInteger",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "LargeInteger",
);

sl.copyTraitMethodsToType(
  "Number",
  "LargeInteger",
);

sl.copyTraitMethodsToType(
  "Integer",
  "LargeInteger",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "equalsSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject | <primitive: return _self === _anObject;>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self === BigInt(_anObject);
    } else {
      return false;
    }
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self === BigInt(_anObject);\n\t\t} else {\n\t\t\treturn false;\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject | =(self, anObject) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self < BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _lessThanSign_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self < BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, <) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self <= BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, <=) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self + BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _plusSign_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self + BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, +) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self - BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _hyphenMinus_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self - BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, -) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self * BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _asterisk_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self * BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, *) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _fraction = _Fraction_2(_self, _asLargeInteger_1(_anObject));
      /* Statements */
      return _if_3(_isInteger_1(_fraction), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numerator_1(_fraction);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fraction;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntegerAndApply_3(_anObject, _self, _solidus_2);
    });
  },
  "{ :self :anObject | if(isInteger(anObject), { let fraction = Fraction(self, asLargeInteger(anObject)); if(isInteger(fraction), { numerator(fraction) }, { fraction }) }, { adaptToIntegerAndApply(anObject,self, /) }) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self / BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _solidusSolidus_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self / BigInt(_anObject);\n\t\t};>\nadaptToIntegerAndApply(anObject,self, //) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      const i = BigInt(_anObject);
      return ((_self % i) + i) % i;
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _percentSign_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\tconst i = BigInt(_anObject);\n\t\t\treturn ((_self % i) + i) % i;\n\t\t}>\nadaptToIntegerAndApply(anObject,self, %) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {
      return _self ** BigInt(_anObject);
    }
    /* Statements */
    return _adaptToIntegerAndApply_3(_anObject, _self, _circumflexAccent_2);
  },
  "{ :self :anObject | <primitive: if (sl.isLargeInteger(_anObject) || sl.isSmallFloatInteger(_anObject)) {\n\t\t\treturn _self ** BigInt(_anObject);\n\t\t}>\nadaptToIntegerAndApply(anObject,self, ^) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _raisedToInteger_2(_self, _anObject);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_anObject, _self, _circumflexAccent_2);
    });
  },
  "{ :self :anObject | if(isInteger(anObject), { raisedToInteger(self,anObject) }, { adaptToNumberAndApply(anObject,self, ^) }) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self << BigInt(_anObject);\n\t\t}>\nerror(self,'shiftLeft: operand not a LargeInteger or SmallFloat') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self >> _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self >> BigInt(_anObject);\n\t\t}>\nerror(self,'shiftRight: operand not a LargeInteger or SmallFloat') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asLargeInteger_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 | aBlock(asLargeInteger(aNumber), self) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallFloat_1(_self);
  },
  "{ :self | asSmallFloat(self) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSmallInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asSmallFloat_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self | if(isSmallInteger(self), { asSmallFloat(self) }, { self }) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "asSmallFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number(_self);
  },
  "{ :self | <primitive: return Number(_self);>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "atRandom",
  ["self", "shape", "rng"],
  function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomInteger_4(_rng, 1, _asSmallFloat_1(_self), _shape);
  },
  "{ :self :shape :rng | randomInteger(rng,1, asSmallFloat(self), shape) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "basicPrintString",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString(_radix).toUpperCase();
  },
  "{ :self :radix | <primitive: return _self.toString(_radix).toUpperCase();>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self & _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self & BigInt(_anObject);\n\t\t}>\nerror(self,'bitAnd: operand not a LargeInteger or SmallFloat') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self | _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self | BigInt(_anObject);\n\t\t}>\nerror(self,'bitOr: operand not a LargeInteger or SmallFloat') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "bitXor",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
  "{ :self :anObject | <primitive: if(sl.isLargeInteger(_anObject)) {\n\t\t\treturn _self ^ _anObject;\n\t\t} else if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self ^ BigInt(_anObject);\n\t\t}>\nerror(self,'bitXor: operand not a LargeInteger or SmallFloat') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "floorLog",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(_numberOfDigitsInBase_2(_self, _radix), 1);
    });
  },
  "{ :self :radix | if((<=(self, 0)), { error(self,'LargeInteger>>floorLog: is only defined for x > 0') }, { -(numberOfDigitsInBase(self,radix), 1) }) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "highBitOfMagnitude",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _realLength = _digitLength_1(_self);
      let _lastDigit = _digitAt_2(_self, _realLength);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_lastDigit, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _realLength = _hyphenMinus_2(_realLength, 1);
        return _ifTrue_2(_equalsSign_2(_realLength, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
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
  "{ :self | valueWithReturn({ :return:/1 | let realLength = digitLength(self); let lastDigit = digitAt(self,realLength); whileTrue({ =(lastDigit, 0) }, { realLength := -(realLength, 1); ifTrue((=(realLength, 0)), { return(0) }) }); +(highBitOfByte(asSmallFloat(lastDigit)), (*(8, (-(realLength, 1))))) }) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isEven",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2n), 0n);
  },
  "{ :self | =((%(self, 2L)), 0L) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isExact",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isInteger",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isLiteral",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isOdd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_percentSign_2(_self, 2n), 1n);
  },
  "{ :self | =((%(self, 2L)), 1L) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isRational",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isSmallInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(
      _abs_1(_self),
      _hyphenMinus_2(_circumflexAccent_2(2n, 53), 1),
    );
  },
  "{ :self | <=(abs(self), (-(^(2L, 53), 1))) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isVeryCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _aNumber);
  },
  "{ :self :aNumber | =(self, aNumber) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 0n);
  },
  "{ :self | =(self, 0L) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "nthRoot",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _nthRoot_2(_asSmallFloat_1(_self), _asSmallFloat_1(_aNumber));
  },
  "{ :self :aNumber | nthRoot(asSmallFloat(self),asSmallFloat(aNumber)) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asFloat_1(_self));
  },
  "{ :self | log(asFloat(self)) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_asFloat_1(_self));
  },
  "{ :self | log2(asFloat(self)) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log10_1(_asFloat_1(_self));
  },
  "{ :self | log10(asFloat(self)) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "one",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1n;
  },
  "{ :unused | 1L }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_1(_self);
  },
  "{ :self | storeString(self) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "quotient",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidusSolidus_2(_self, _anInteger);
  },
  "{ :self :anInteger | //(self, anInteger) }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "raisedToInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ** BigInt(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self ** BigInt(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "remainder",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self % BigInt(_anInteger);
  },
  "{ :self :anInteger | <primitive: return _self % BigInt(_anInteger);>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  "{ :self | <primitive: if (_self < 2n) {\n\t\t\treturn _self;\n\t\t}\n\t\tif (_self < 16n) {\n\t\t\treturn BigInt(Math.sqrt(Number(_self)) | 0);\n\t\t}\n\t\tlet x0, x1;\n\t\tif (_self < 4503599627370496n) {\n\t\t\tx1 = BigInt(Math.sqrt(Number(_self)) | 0) - 3n;\n\t\t} else {\n\t\t\tconst vlen = _self.toString().length;\n\t\t\tif (!(vlen & 1)) {\n\t\t\t\tx1 = 10n ** (BigInt(vlen / 2));\n\t\t\t} else {\n\t\t\t\tx1 = 4n * 10n ** (BigInt((vlen / 2) | 0));\n\t\t\t}\n\t\t}\n\t\tdo {\n\t\t\tx0 = x1;\n\t\t\tx1 = ((_self / x0) + x0) >> 1n;\n\t\t} while ((x0 !== x1 && x0 !== (x1 - 1n)));\n\t\treturn x0;>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_basicPrintString_2(_self, 10), "L");
  },
  "{ :self | ++(basicPrintString(self,10), 'L') }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "toNumber",
  ["self", "precision"],
  function (_self, _precision) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _precision";
      throw new Error(errorMessage);
    } /* Primitive */
    BigInt.asIntN(_precision, _self);
  },
  "{ :self :precision | <primitive: BigInt.asIntN(_precision, _self);>\n }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "unit",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1n;
  },
  "{ :unused | 1L }",
);

sl.addMethodToExistingType(
  "LargeInteger",
  "LargeInteger",
  "zero",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 0n;
  },
  "{ :unused | 0L }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return BigInt(_self);
  },
  "{ :self | <primitive: return BigInt(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "LargeInteger",
  "basicParseLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return BigInt(_self);
  },
  "{ :self | <primitive: return BigInt(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "LargeInteger",
  "parseLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_endsWith_2(_self, "L"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseLargeInteger_1(_allButLast_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseLargeInteger_1(_self);
    });
  },
  "{ :self | if(endsWith(self,'L'), { basicParseLargeInteger(allButLast(self)) }, { basicParseLargeInteger(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "LargeInteger",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0n;
    /* Statements */
    _withIndexDo_2(_self, function (_each, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _i";
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
  "{ :self | let answer = 0L; withIndexDo(self, { :each :i | answer := +(answer, (<<(each, (*(-(i, 1L), 8))))) }); answer }",
);
