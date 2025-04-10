/*  Requires: RegExp String  */

sl.addType(
  true,
  "SmallFloat",
  "SmallFloat",
  ["Object", "Json", "Magnitude", "Number", "Integer", "Binary"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Json",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Number",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Integer",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Binary",
  "SmallFloat",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSmallFloat_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_self, _anObject);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToNumberAndApply_3(_anObject, _self, _equalsSign_2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isNumber(anObject), { if(isSmallFloat(anObject), { ==(self, anObject) }, { adaptToNumberAndApply(anObject,self, =) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self < _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _lessThanSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self < _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, <) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self <= _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _lessThanSignEqualsSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self <= _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, <=) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self + _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _plusSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self + _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, +) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self - _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _hyphenMinus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self - _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, -) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self * _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _asterisk_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self * _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, *) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self / _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _solidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self / _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, /) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return ((_self % _anObject) + _anObject) % _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _percentSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn ((_self % _anObject) + _anObject) % _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, %) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "circumflexAccent",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _raisedToInteger_2(_self, _anObject);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSmallFloat_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _raisedToSmallFloat_2(_self, _anObject);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToNumberAndApply_3(
              _anObject,
              _self,
              _circumflexAccent_2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isInteger(anObject), { raisedToInteger(self,anObject) }, { if(isSmallFloat(anObject), { raisedToSmallFloat(self,anObject) }, { adaptToNumberAndApply(anObject,self, ^) }) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_anObject)) {
      return _self << _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _lessThanSignLessThanSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, <<) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_anObject)) {
      return _self >> _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _greaterThanSignGreaterThanSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_anObject)) {\n\t\t\treturn _self >> _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, >>) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "greaterThanSignGreaterThanSignGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_anObject)) {
      return _self >>> _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _greaterThanSignGreaterThanSignGreaterThanSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_anObject)) {\n\t\t\treturn _self >>> _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, >>>) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.abs(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.abs(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.acos(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.acos(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcCosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.acosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.acosh(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.asin(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.asin(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcSinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.asinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.asinh(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.atan(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.atan(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "arcTan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_anObject, _self);
  }, ["self", "anObject"]),
  "{ :self :anObject | atan2(anObject,self) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "asFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncated_1(_self);
  }, ["self"]),
  "{ :self | truncated(self) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "asSmallFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "assertIsSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSmallInteger_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | assert(self, { isSmallInteger(self) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "atRandom",
  ["self", "shape", "rng"],
  sl.annotateFunction(function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_3(_rng, [0, _self], _shape);
  }, ["self", "shape", "rng"]),
  "{ :self :shape :rng | randomReal(rng,[0, self], shape) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "basicPrintString",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Primitive */
    if (Object.is(_self, -0)) {
      return "-0";
    }
    if (Number.isFinite(_self)) {
      return _self.toString(_radix).toUpperCase();
    }
    return _self.toString();
  }, ["self", "radix"]),
  '{ :self :radix | <primitive: if(Object.is(_self, -0)) {\n\t\t\treturn "-0"\n\t\t};\n\t\tif(Number.isFinite(_self)) {\n\t\t\treturn _self.toString(_radix).toUpperCase();\n\t\t};\n\t\treturn _self.toString();>\n }',
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "basicSqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sqrt(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sqrt(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.atan2(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _atan2_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.atan2(_self, _anObject);\n\t\t}>\nadaptToNumberAndApply(anObject,self, atan2:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self & _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitAnd_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self & _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, bitAnd:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitNot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_self)) {
      return ~_self;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitNot_1);
  }, ["self"]),
  "{ :self | <primitive: if(sl.isBitwise(_self)) {\n\t\t\treturn ~_self;\n\t\t}>\nadaptToNumberAndApply(anObject,self, bitNot:/1) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self | _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitOr_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self | _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, bitOr:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitTest",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _tildeEqualsSign_2(
      _bitAnd_2(
        _self,
        _lessThanSignLessThanSign_2(1, _hyphenMinus_2(_anInteger, 1)),
      ),
      0,
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | ~=(bitAnd(self,<<(1, (-(anInteger, 1)))), 0) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitXor",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self ^ _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitXor_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self ^ _anObject;\n\t\t}>\nadaptToNumberAndApply(anObject,self, bitXor:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "byteHexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isByte_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _padLeft_3(_basicPrintString_2(_self, 16), [2], "0");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "SmallFloat>>byteHexString: not a byte");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isByte(self), { padLeft(basicPrintString(self,16),[2], '0') }, { error(self,'SmallFloat>>byteHexString: not a byte') }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cantorStaircase",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = sl.annotateFunction(function (_x, _n) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_n, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _x;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _y = _asterisk_2(3, _x);
          /* Statements */
          return _if_3(
            _lessThanSign_2(_y, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(_f_2(_y, _hyphenMinus_2(_n, 1)), 2);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _lessThanSign_2(_y, 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 0.5;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    0.5,
                    _solidus_2(
                      _f_2(_hyphenMinus_2(_y, 2), _hyphenMinus_2(_n, 1)),
                      2,
                    ),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["x", "n"]);
    /* Statements */
    return _f_2(_x, _n);
  }, ["x", "n"]),
  "{ :x :n | let f = { :x :n | if((=(n, 0)), { x }, { let y = *(3, x); if((<(y, 1)), { /(f(y, -(n, 1)), 2) }, { if((<(y, 2)), { 0.5 }, { +(0.5, (/(f(-(y, 2), -(n, 1)), 2))) }) }) }) }; f(x, n) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cantorStaircase",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _cantorStaircase_2(_x, 12);
  }, ["x"]),
  "{ :x | cantorStaircase(x,12) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.cos(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.cos(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cosecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sin_1(_self));
  }, ["self"]),
  "{ :self | /(1, sin(self)) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.cosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.cosh(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cotangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _tan_1(_self));
  }, ["self"]),
  "{ :self | /(1, tan(self)) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "cubeRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.cbrt(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.cbrt(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "encodeFloat32",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeFloat32(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian | <primitive: return sc.encodeFloat32(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "encodeFloat64",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeFloat64(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian | <primitive: return sc.encodeFloat64(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "encodeInt8",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeInt8(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.encodeInt8(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "encodeInt16",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeInt16(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian | <primitive: return sc.encodeInt16(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "encodeInt32",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeInt32(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian | <primitive: return sc.encodeInt32(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.exp(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.exp(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "fibonacci",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_phi, _n),
        _asterisk_2(
          _cos_1(_pi_1(_n)),
          _circumflexAccent_2(_phi, _hyphenMinus_1(_n)),
        ),
      ),
      _sqrt_1(5),
    );
  }, ["n"]),
  "{ :n | let phi = goldenRatio(1); /((-((^(phi, n)), (*(cos(pi(n)), (^(phi, -(n))))))), sqrt(5)) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.floor(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.floor(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "fractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self % 1;
  }, ["self"]),
  "{ :self | <primitive: return _self % 1;>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "hypotenuse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.hypot(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _hypotenuse_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.hypot(_self, _anObject);\n\t\t}>\nadaptToNumberAndApply(anObject,self, hypotenuse:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isBitwise(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isBitwise(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _not_1(_isNumber_1(_aNumber)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_aNumber, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_abs_1(_self), _epsilon);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(
                  _equalsSign_2(_self, _asSmallFloat_1(_aNumber)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _z = _abs_1(_self);
                    /* Statements */
                    return _if_3(
                      _lessThanSign_2(_z, _epsilon),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(
                          _solidus_2(
                            _abs_1(_hyphenMinus_2(_self, _aNumber)),
                            _max_2(_z, _abs_1(_aNumber)),
                          ),
                          _epsilon,
                        );
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon | if(not(isNumber(aNumber)), { false }, { if((=(self, 0)), { <(abs(aNumber), epsilon) }, { if((=(aNumber, 0)), { <(abs(self), epsilon) }, { |(=(self, asSmallFloat(aNumber)), { let z = abs(self); if((<(z, epsilon)), { <(abs(aNumber), epsilon) }, { <(/(abs((-(self, aNumber))), (max(z,abs(aNumber)))), epsilon) }) }) }) }) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.0001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | isCloseToBy(self,aNumber, 0.0001) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isEven",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self % 2 === 0;
  }, ["self"]),
  "{ :self | <primitive: return _self % 2 === 0;>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isExact",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSmallInteger_1(_self);
  }, ["self"]),
  "{ :self | isSmallInteger(self) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isFinite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isFinite(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number.isFinite(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isImmediate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isInteger(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number.isInteger(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isNaN",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isNaN(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number.isNaN(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isNegativeZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.is(_self, -0);
  }, ["self"]),
  "{ :self | <primitive: return Object.is(_self, -0);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isOdd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.abs(_self % 2) === 1;
  }, ["self"]),
  "{ :self | <primitive: return Math.abs(_self % 2) === 1;>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_self);
  }, ["self"]),
  "{ :self | isInteger(self) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isSafeInteger(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number.isSafeInteger(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isVeryCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.000000000001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | isCloseToBy(self,aNumber, 0.000000000001) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.log(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.log(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "log",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.log(_self) / Math.log(_base);
  }, ["self", "base"]),
  "{ :self :base | <primitive: return Math.log(_self) / Math.log(_base)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.log2(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.log2(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.log10(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.log10(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "lucasNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_phi, _self),
      _asterisk_2(
        _cos_1(_pi_1(_self)),
        _circumflexAccent_2(_phi, _negated_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self | let phi = goldenRatio(1); +((^(phi, self)), (*(cos(pi(self)), (^(phi, negated(self)))))) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.min(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _min_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.min(_self, _anObject);\n\t\t}>\nadaptToNumberAndApply(anObject,self, min:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.max(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _max_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.max(_self, _anObject);\n\t\t}>\nadaptToNumberAndApply(anObject,self, max:/2) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "minkowskiQuestionMark",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _y = _floor_1(_solidus_2(_x, 1));
    let _p = _percentSign_2(_x, 1);
    let _q = _hyphenMinus_2(1, _p);
    let _d = 0.5;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_plusSign_2(_y, _d), _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _if_3(
          _lessThanSign_2(_p, _q),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _q = _hyphenMinus_2(_q, _p);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _p = _hyphenMinus_2(_p, _q);
            return _y = _plusSign_2(_y, _d);
          }, []),
        );
        return _d = _solidus_2(_d, 2);
      }, []),
    );
    return _y;
  }, ["x"]),
  "{ :x | let y = floor((/(x, 1))); let p = %(x, 1); let q = -(1, p); let d = 0.5; whileTrue({ >(+(y, d), y) }, { if((<(p, q)), { q := -(q, p) }, { p := -(p, q); y := +(y, d) }); d := /(d, 2) }); y }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "minkowskiQuestionMarkInverse",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _y = _floor_1(_solidus_2(_x, 1));
    let _bits = _percentSign_2(_x, 1);
    let _lo = [0, 1];
    let _hi = [1, 1];
    let _iterationCount = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_iterationCount, 152),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _plusSign_2(_y, _solidus_2(_at_2(_lo, 1), _at_2(_lo, 2))),
              _plusSign_2(_y, _solidus_2(_at_2(_hi, 1), _at_2(_hi, 2))),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _bit = _floor_1(_solidus_2(_asterisk_2(2, _bits), 1));
        /* Statements */
        _bits = _percentSign_2(_asterisk_2(2, _bits), 1);
        _if_3(
          _greaterThanSign_2(_bit, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lo = _plusSign_2(_lo, _hi);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hi = _plusSign_2(_hi, _lo);
          }, []),
        );
        return _iterationCount = _plusSign_2(_iterationCount, 1);
      }, []),
    );
    return _plusSign_2(_y, _solidus_2(_at_2(_lo, 1), _at_2(_lo, 2)));
  }, ["x"]),
  "{ :x | let y = floor((/(x, 1))); let bits = %(x, 1); let lo = [0, 1]; let hi = [1, 1]; let iterationCount = 0; whileTrue({ &(<(iterationCount, 152), { <((+(y, (/(at(lo, 1), at(lo, 2))))), (+(y, (/(at(hi, 1), at(hi, 2)))))) }) }, { let bit = floor((/(*(2, bits), 1))); bits := %(*(2, bits), 1); if((>(bit, 0)), { lo := +(lo, hi) }, { hi := +(hi, lo) }); iterationCount := +(iterationCount, 1) }); +(y, (/(at(lo, 1), at(lo, 2)))) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "newtonRaphsonMethod",
  ["epsilon", "tolerance", "iterationCount", "x0", "f:/1", "fPrime:/1"],
  sl.annotateFunction(
    function (_epsilon, _tolerance, _iterationCount, _x0, _f_1, _fPrime_1) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _epsilon, _tolerance, _iterationCount, _x0, _f_1, _fPrime_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _timesRepeat_2(
          _iterationCount,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _y = _f_1(_x0);
            let _yPrime = _fPrime_1(_x0);
            let _x1 = _if_3(
              _greaterThanSign_2(_abs_1(_yPrime), _epsilon),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(_x0, _solidus_2(_y, _yPrime));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_1("newtonRaphsonMethod: y < ε");
              }, []),
            );
            /* Statements */
            _ifTrue_2(
              _lessThanSignEqualsSign_2(
                _abs_1(_hyphenMinus_2(_x1, _x0)),
                _tolerance,
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_x1);
              }, []),
            );
            return _x0 = _x1;
          }, []),
        );
        return _error_1("newtonRaphsonMethod: failed to converge");
      }, ["return:/1"]));
    },
    ["epsilon", "tolerance", "iterationCount", "x0", "f:/1", "fPrime:/1"],
  ),
  "{ :epsilon :tolerance :iterationCount :x0 :f:/1 :fPrime:/1 | valueWithReturn({ :return:/1 | timesRepeat(iterationCount, { let y = f(x0); let yPrime = fPrime(x0); let x1 = if((>(abs(yPrime), epsilon)), { -(x0, (/(y, yPrime))) }, { error('newtonRaphsonMethod: y < ε') }); ifTrue((<=(abs((-(x1, x0))), tolerance)), { return(x1) }); x0 := x1 }); error('newtonRaphsonMethod: failed to converge') }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "nthRoot",
  ["self", "aPositiveInteger"],
  sl.annotateFunction(function (_self, _aPositiveInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPositiveInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _verticalLine_2(
        _not_1(_isInteger_1(_aPositiveInteger)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isNegative_1(_aPositiveInteger);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("nthRoot: only defined for positive integers");
      }, []),
    );
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_aPositiveInteger),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negated_1(
              _circumflexAccent_2(
                _negated_1(_self),
                _solidus_2(1, _aPositiveInteger),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1(
              "nthRoot: negative numbers do not have even roots.",
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_self, _solidus_2(1, _aPositiveInteger));
      }, []),
    );
  }, ["self", "aPositiveInteger"]),
  "{ :self :aPositiveInteger | ifTrue((|(not(isInteger(aPositiveInteger)), { isNegative(aPositiveInteger) })), { error('nthRoot: only defined for positive integers') }); if(isNegative(self), { if(isOdd(aPositiveInteger), { negated((^(negated(self), (/(1, aPositiveInteger))))) }, { error('nthRoot: negative numbers do not have even roots.') }) }, { ^(self, (/(1, aPositiveInteger))) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "printStringToAtMostPlaces",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _printString_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _printStringToFixed_2(_self, _anInteger);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | if(isInteger(self), { printString(self) }, { printStringToFixed(self,anInteger) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "printStringToFixed",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloatInteger(_anInteger)) {
      return _self.toFixed(_anInteger);
    }
    /* Statements */
    return _error_1("SmallFloat>>printStringToFixed: not integer precision");
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: if(sl.isSmallFloatInteger(_anInteger)) {\n\t\t\treturn _self.toFixed(_anInteger);\n\t\t}>\nerror('SmallFloat>>printStringToFixed: not integer precision') }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "printStringToPrecision",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloatInteger(_anInteger)) {
      return _self.toPrecision(_anInteger);
    }
    /* Statements */
    return _error_1(
      "SmallFloat>>printStringToPrecision: not integer precision",
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: if(sl.isSmallFloatInteger(_anInteger)) {\n\t\t\treturn _self.toPrecision(_anInteger);\n\t\t}>\nerror('SmallFloat>>printStringToPrecision: not integer precision') }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "raisedToSmallFloat",
  ["self", "aSmallFloat"],
  sl.annotateFunction(function (_self, _aSmallFloat) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSmallFloat";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_aSmallFloat)) {
      return Math.pow(_self, _aSmallFloat);
    }
    /* Statements */
    return _error_1("SmallFloat>>raisedToSmallFloat: not SmallFloat");
  }, ["self", "aSmallFloat"]),
  "{ :self :aSmallFloat | <primitive: if(sl.isSmallFloat(_aSmallFloat)) {\n\t\t\treturn Math.pow(_self, _aSmallFloat);\n\t\t}>\nerror('SmallFloat>>raisedToSmallFloat: not SmallFloat') }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "realDigits",
  ["self", "base", "size"],
  sl.annotateFunction(function (_self, _base, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _tildeEqualsSign_2(_base, 10),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "SmallFloat>>realDigits: not implemented unless base=10",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _exponent = _rounded_1(_plusSign_2(_log10_1(_self), 1));
        /* Statements */
        return [
          _integerDigits_3(
            _rounded_1(
              _asterisk_2(
                _self,
                _circumflexAccent_2(10, _hyphenMinus_2(_size, _exponent)),
              ),
            ),
            10,
            _size,
          ),
          _exponent,
        ];
      }, []),
    );
  }, ["self", "base", "size"]),
  "{ :self :base :size | if((~=(base, 10)), { error(self,'SmallFloat>>realDigits: not implemented unless base=10') }, { let exponent = rounded((+(log10(self), 1))); [integerDigits(rounded((*(self, (^(10, (-(size, exponent))))))),10, size), exponent] }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "reduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCloseTo_2(_self, _rounded_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rounded_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isCloseTo(self,rounded(self)), { rounded(self) }, { self }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "remainder",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self % _anObject;
    }
    /* Statements */
    return _error_2(_self, "remainder");
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self % _anObject;\n\t\t}>\nerror(self,'remainder') }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "rounded",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.round(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.round(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "secant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _cos_1(_self));
  }, ["self"]),
  "{ :self | /(1, cos(self)) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sign(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sign(_self);>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "signExponentMantissa",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const float = new Float64Array(1);
    const bytes = new Uint8Array(float.buffer);
    float[0] = _self;
    const sign = bytes[7] >> 7;
    const exponent = ((bytes[7] & 0x7f) << 4 | bytes[6] >> 4) - 0x3ff;
    bytes[7] = 0x3f;
    bytes[6] |= 0xf0;
    return [sign, exponent, float[0]];
  }, ["self"]),
  "{ :self | <primitive: const float = new Float64Array(1);\n\t\tconst bytes = new Uint8Array(float.buffer);\n\t\tfloat[0] = _self;\n\t\tconst sign = bytes[7] >> 7;\n\t\tconst exponent = ((bytes[7] & 0x7f) << 4 | bytes[6] >> 4) - 0x3ff;\n\t\tbytes[7] = 0x3f;\n\t\tbytes[6] |= 0xf0;\n\t\treturn [sign, exponent, float[0]];>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sin(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sin(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sinc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_sin_1(_self), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { 1 }, { /(sin(self), self) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sincNormalized",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sinc_1(_pi_1(_self));
  }, ["self"]),
  "{ :self | sinc(pi(self)) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sinh(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sqrt_1(_Complex_2(_self, 0));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicSqrt_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isNegative(self), { sqrt(Complex(self, 0)) }, { basicSqrt(self) }) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, 10);
  }, ["self"]),
  "{ :self | printString(self,10) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.tan(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.tan(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.tanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.tanh(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "truncated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.trunc(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.trunc(_self)>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "unsigned32BitWordList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const f64 = new Float64Array(1);
    const u32 = new Uint32Array(f64.buffer);
    f64[0] = _self;
    return [u32[0], u32[1]];
  }, ["self"]),
  "{ :self | <primitive: const f64 = new Float64Array(1);\n\t\tconst u32 = new Uint32Array(f64.buffer);\n\t\tf64[0] = _self;\n\t\treturn [u32[0], u32[1]];>\n }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "weierstrassFunction",
  ["x", "a", "m"],
  sl.annotateFunction(function (_x, _a, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(
      _to_2(1, _m),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _sin_1(_asterisk_2(_pi_1(_circumflexAccent_2(_k, _a)), _x)),
          _pi_1(_circumflexAccent_2(_k, _a)),
        );
      }, ["k"]),
    ));
  }, ["x", "a", "m"]),
  "{ :x :a :m | sum(collect(to(1, m), { :k | /(sin((*(pi((^(k, a))), x))), pi((^(k, a)))) })) }",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "SmallFloat",
  "isSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SmallFloat",
  "isFinite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isFinite_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,isFinite:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "basicParseDecimalInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "basicParseInteger",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.parseInt(_self, _radix);
  }, ["self", "radix"]),
  "{ :self :radix | <primitive: return Number.parseInt(_self, _radix);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "basicParseNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.parseFloat(_self);
  }, ["self"]),
  "{ :self | <primitive: return Number.parseFloat(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseDecimalInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _basicParseDecimalInteger_1(_self);
    /* Statements */
    return _if_3(
      _isNaN_1(_answer),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseDecimalInteger: not a number");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSmallInteger_1(_answer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "parseDecimalInteger: not an integer");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let answer = basicParseDecimalInteger(self); if(isNaN(answer), { error(self,'parseDecimalInteger: not a number') }, { if(isSmallInteger(answer), { answer }, { error(self,'parseDecimalInteger: not an integer') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesRegExp_2(_self, "^[0-9eE.+-]+$");
      }, []),
    );
    return _basicParseNumber_1(_self);
  }, ["self"]),
  "{ :self | assert(self, { matchesRegExp(self,'^[0-9eE.+-]+$') }); basicParseNumber(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseSmallInteger",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsSmallInteger_1(_radix);
    _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_radix, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSign_2(_radix, 36),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegExp_2(_self, "^[0-9a-zA-Z-]+$");
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _assertIsSmallInteger_1(_basicParseInteger_2(_self, _radix));
  }, ["self", "radix"]),
  "{ :self :radix | assertIsSmallInteger(radix); assert(self, { &(>(radix, 1), { &(<(radix, 36), { matchesRegExp(self,'^[0-9a-zA-Z-]+$') }) }) }); assertIsSmallInteger(basicParseInteger(self,radix)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SmallFloat",
  "fromSignExponentMantissa",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(
        _circumflexAccent_2(-1, _at_2(_self, 1)),
        _circumflexAccent_2(2, _at_2(_self, 2)),
      ),
      _at_2(_self, 3),
    );
  }, ["self"]),
  "{ :self | *(*((^(-1, at(self, 1))), (^(2, at(self, 2)))), at(self, 3)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SmallFloat",
  "eulersNumber",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _exp_1(1);
  }, []),
  "{ exp(1) }",
);
