/*  Requires: RegularExpression String  */

sl.addType(
  true,
  "SmallFloat",
  "SmallFloat",
  [
    "Object",
    "Equatable",
    "Comparable",
    "Json",
    "Magnitude",
    "Number",
    "Integer",
    "Binary",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SmallFloat",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isSmallFloat.if {\n\t\t\t\tself == anObject\n\t\t\t} {\n\t\t\t\tanObject.adaptToNumberAndApply(self, =)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self < _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self <= _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <=)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self + _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, +)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self - _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, -)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self * _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, *)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self / _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, /)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn ((_self % _anObject) + _anObject) % _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, %)\n\t}",
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
      _isSmallFloat_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
              _isNegative_1(_self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _circumflexAccent_2(_Complex_2(_self, 0), _anObject);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _raisedToSmallFloat_2(_self, _anObject);
              }, []),
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
        return _adaptToNumberAndApply_3(_anObject, _self, _circumflexAccent_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isSmallFloat.if {\n\t\t\tanObject.isInteger.if {\n\t\t\t\tself.raisedToInteger(anObject)\n\t\t\t} {\n\t\t\t\tself.isNegative.if {\n\t\t\t\t\tComplex(self, 0) ^ anObject\n\t\t\t\t} {\n\t\t\t\t\tself.raisedToSmallFloat(anObject)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tanObject.adaptToNumberAndApply(self, ^)\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <<)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_anObject)) {\n\t\t\treturn _self >> _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, >>)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_anObject)) {\n\t\t\treturn _self >>> _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, >>>)\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.abs(_self)>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isLargeInteger_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asSmallFloat_1(_anInteger), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "adaptToIntegerAndApply: ?");
      }, []),
    );
  }, ["self", "anInteger", "aBlock:/2"]),
  "{ :self :anInteger :aBlock:/2 |\n\t\tanInteger.isLargeInteger.if {\n\t\t\taBlock(anInteger.asSmallFloat, self)\n\t\t} {\n\t\t\tself.error('adaptToIntegerAndApply: ?')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "addI32",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _wrapExclusive_3(
      _plusSign_2(_a, _b),
      -2147483648,
      _plusSign_2(2147483647, 1),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\t(a + b).wrapExclusive(-2147483648, 2147483647 + 1)\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
    return _asSmallInteger_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asSmallInteger\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "asSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallInteger_1(_self),
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
        return _error_2(_self, "SmallFloat>>asSmallInteger: not integer");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSmallInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('SmallFloat>>asSmallInteger: not integer')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.assert {\n\t\t\tself.isSmallInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextRandomFloat_3(_system, 0, _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.nextRandomFloat(0, self)\n\t}",
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
  '{ :self :radix |\n\t\t<primitive:\n\t\tif(Object.is(_self, -0)) {\n\t\t\treturn "-0"\n\t\t};\n\t\tif(Number.isFinite(_self)) {\n\t\t\treturn _self.toString(_radix).toUpperCase();\n\t\t};\n\t\treturn _self.toString();\n\t\t>\n\t}',
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self & _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitAnd:/2)\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self)) {\n\t\t\treturn ~_self;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitNot:/1)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self | _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitOr:/2)\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "bitRotateLeftI32",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return (_self << _anInteger) | (_self >>> (32 - _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t<primitive: return (_self << _anInteger) | (_self >>> (32 - _anInteger));>\n\t}",
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
    return _exclamationMarkEqualsSign_2(
      _bitAnd_2(
        _self,
        _lessThanSignLessThanSign_2(1, _hyphenMinus_2(_anInteger, 1)),
      ),
      0,
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.bitAnd(1 << (anInteger - 1)) != 0\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self ^ _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitXor:/2)\n\t}",
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
  "{ :self |\n\t\tself.isByte.if {\n\t\t\tself\n\t\t\t.basicPrintString(16)\n\t\t\t.padLeft([2], '0')\n\t\t} {\n\t\t\tself.error(\n\t\t\t\t'SmallFloat>>byteHexString: not a byte'\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :x :n |\n\t\tlet f = { :x :n |\n\t\t\t(n = 0).if {\n\t\t\t\tx\n\t\t\t} {\n\t\t\t\tlet y = 3 * x;\n\t\t\t\t(y < 1).if {\n\t\t\t\t\tf(y, n - 1) / 2\n\t\t\t\t} {\n\t\t\t\t\t(y < 2).if {\n\t\t\t\t\t\t0.5\n\t\t\t\t\t} {\n\t\t\t\t\t\t0.5 + (f(y - 2, n - 1) / 2)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(x, n)\n\t}",
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
  "{ :x |\n\t\tx.cantorStaircase(12)\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "chop",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_self), _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
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
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\t(self.abs < epsilon).if {\n\t\t\t0\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "chop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _chop_2(_self, 1E-10);
  }, ["self"]),
  "{ :self |\n\t\tself.chop(1E-10)\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.cbrt(_self);>\n\t}",
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
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeFloat32(_self, _littleEndian);>\n\t}",
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
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeFloat64(_self, _littleEndian);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return sc.encodeInt8(_self);>\n\t}",
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
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeInt16(_self, _littleEndian);>\n\t}",
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
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeInt32(_self, _littleEndian);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.exp(_self)>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "fibonacci",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _sqrt_1(_plusSign_2(4, _square_1(_x)));
    let _b = _plusSign_2(_x, _a);
    let _c = _circumflexAccent_2(2, _hyphenMinus_2(0, _n));
    let _d = _circumflexAccent_2(2, _n);
    let _e = _circumflexAccent_2(_b, _n);
    let _f = _circumflexAccent_2(_b, _hyphenMinus_2(0, _n));
    let _g = _cos_1(_pi_1(_n));
    let _r = _solidus_2(
      _hyphenMinus_2(_asterisk_2(_c, _e), _asterisk_2(_asterisk_2(_d, _f), _g)),
      _a,
    );
    /* Statements */
    return _if_3(
      _ampersand_2(
        _isInteger_1(_n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isInteger_1(_x);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _round_1(_r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r;
      }, []),
    );
  }, ["n", "x"]),
  "{ :n :x |\n\t\tlet a = (4 + x.square).sqrt;\n\t\tlet b = x + a;\n\t\tlet c = 2 ^ (0 - n);\n\t\tlet d = 2 ^ n;\n\t\tlet e = b ^ n;\n\t\tlet f = b ^ (0 - n);\n\t\tlet g = n.pi.cos;\n\t\tlet r = ((c * e) - (d * f * g)) / a;\n\t\t(n.isInteger & { x.isInteger }).if {\n\t\t\tr.round\n\t\t} {\n\t\t\tr\n\t\t}\n\t}",
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
    let _r = _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_phi, _n),
        _asterisk_2(
          _cos_1(_pi_1(_n)),
          _circumflexAccent_2(_phi, _hyphenMinus_1(_n)),
        ),
      ),
      _sqrt_1(5),
    );
    /* Statements */
    return _if_3(
      _isInteger_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _round_1(_r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet phi = 1.goldenRatio;\n\t\tlet r = ((phi ^ n) - (n.pi.cos * (phi ^ n.-))) / 5.sqrt;\n\t\tn.isInteger.if {\n\t\t\tr.round\n\t\t} {\n\t\t\tr\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.floor(_self)>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self % 1;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self % 1;>\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.hypot(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, hypotenuse:/2)\n\t}",
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
  "{ :self |\n\t\t<primitive: return sl.isBitwise(_self);>\n\t}",
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
                } /* Temporaries */
                let _other = _asSmallFloat_1(_aNumber);
                /* Statements */
                return _verticalLine_2(
                  _equalsSign_2(_self, _other),
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
                        return _lessThanSign_2(_abs_1(_other), _epsilon);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(
                          _solidus_2(
                            _abs_1(_hyphenMinus_2(_self, _other)),
                            _max_2(_z, _abs_1(_other)),
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
  "{ :self :aNumber :epsilon |\n\t\taNumber.isNumber.not.if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self = 0).if {\n\t\t\t\taNumber.abs < epsilon\n\t\t\t} {\n\t\t\t\t(aNumber = 0).if {\n\t\t\t\t\tself.abs < epsilon\n\t\t\t\t} {\n\t\t\t\t\tlet other = aNumber.asSmallFloat;\n\t\t\t\t\tself = other | {\n\t\t\t\t\t\tlet z = self.abs;\n\t\t\t\t\t\t(z < epsilon).if {\n\t\t\t\t\t\t\tother.abs < epsilon\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(self - other).abs / (z.max(other.abs)) < epsilon\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self % 2 === 0;>\n\t}",
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
  "{ :self |\n\t\tself.isSmallInteger\n\t}",
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
  "{ :self |\n\t\t<primitive: return Number.isFinite(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isImmediate",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\t<primitive: return Number.isInteger(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "isInteger",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _abs_1(_hyphenMinus_2(_self, _round_1(_self))),
      _epsilon,
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\t(self - self.round).abs < epsilon\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\t<primitive: return Number.isNaN(_self);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.is(_self, -0);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.abs(_self % 2) === 1;>\n\t}",
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
  "{ :self |\n\t\tself.isInteger\n\t}",
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
  "{ :self |\n\t\t<primitive: return Number.isSafeInteger(_self);>\n\t}",
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
    if (_self >= 0) {
      return Math.log(_self);
    }
    /* Statements */
    return _log_1(_Complex_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\tif(_self >= 0) {\n\t\t\treturn Math.log(_self)\n\t\t}\n\t\t>\n\t\tComplex(self, 0).log\n\t}",
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
  "{ :self :base |\n\t\t<primitive: return Math.log(_self) / Math.log(_base)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.log2(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.log10(_self)>\n\t}",
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
        _circumflexAccent_2(_phi, _negate_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet phi = 1.goldenRatio;\n\t\t(phi ^ self) + (self.pi.cos * (phi ^ self.negate))\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.max(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, max:/2)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.min(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, min:/2)\n\t}",
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
  "{ :x |\n\t\tlet y = (x / 1).floor;\n\t\tlet p = x % 1;\n\t\tlet q = 1 - p;\n\t\tlet d = 0.5;\n\t\t{\n\t\t\ty + d > y\n\t\t}.whileTrue {\n\t\t\t(p < q).if {\n\t\t\t\tq := q - p\n\t\t\t} {\n\t\t\t\tp := p - q;\n\t\t\t\ty := y + d\n\t\t\t};\n\t\t\td := d / 2\n\t\t};\n\t\ty\n\t}",
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
  "{ :x |\n\t\tlet y = (x / 1).floor;\n\t\tlet bits = x % 1;\n\t\tlet lo = [0 1];\n\t\tlet hi = [1 1];\n\t\tlet iterationCount = 0;\n\t\t{\n\t\t\titerationCount < 152 & {\n\t\t\t\t(y + (lo[1] / lo[2])) < (y + (hi[1] / hi[2]))\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tlet bit = (2 * bits / 1).floor;\n\t\t\tbits := 2 * bits % 1;\n\t\t\t(bit > 0).if {\n\t\t\t\tlo := lo + hi\n\t\t\t} {\n\t\t\t\thi := hi + lo\n\t\t\t};\n\t\t\titerationCount := iterationCount + 1\n\t\t};\n\t\ty + (lo[1] / lo[2])\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "multiplyI32",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.imul(_m, _n);
  }, ["m", "n"]),
  "{ :m :n |\n\t\t/* <primitive: return ((_m & 0xffff) * _n) + ((((_m >>> 16) * _n) & 0xffff) << 16);> */\n\t\t<primitive: return Math.imul(_m, _n);>\n\t}",
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
  "{ :epsilon :tolerance :iterationCount :x0 :f:/1 :fPrime:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\titerationCount.timesRepeat {\n\t\t\t\tlet y = f(x0);\n\t\t\t\tlet yPrime = fPrime(x0);\n\t\t\t\tlet x1 = (yPrime.abs > epsilon).if {\n\t\t\t\t\tx0 - (y / yPrime)\n\t\t\t\t} {\n\t\t\t\t\t'newtonRaphsonMethod: y < ε'.error\n\t\t\t\t};\n\t\t\t\t((x1 - x0).abs <= tolerance).ifTrue {\n\t\t\t\t\tx1.return\n\t\t\t\t};\n\t\t\t\tx0 := x1\n\t\t\t};\n\t\t\t'newtonRaphsonMethod: failed to converge'.error\n\t\t}\n\t}",
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
            return _negate_1(
              _circumflexAccent_2(
                _negate_1(_self),
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
  "{ :self :aPositiveInteger |\n\t\t(aPositiveInteger.isInteger.not | {\n\t\t\taPositiveInteger.isNegative\n\t\t}).ifTrue {\n\t\t\t'nthRoot: only defined for positive integers'.error\n\t\t};\n\t\tself.isNegative.if {\n\t\t\taPositiveInteger.isOdd.if {\n\t\t\t\t(self.negate ^ (1 / aPositiveInteger)).negate\n\t\t\t} {\n\t\t\t\t'nthRoot: negative numbers do not have even roots.'.error\n\t\t\t}\n\t\t} {\n\t\t\tself ^ (1 / aPositiveInteger)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "numberExpand",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _truncate_1(_abs_1(_self));
    let _f = _fractionalPart_1(_abs_1(_self));
    let _d = _integerDigits_2(_i, _base);
    let _k = _size_1(_d);
    let _m = _collect_2(
      _upOrDownTo_2(_k, 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_base, _hyphenMinus_2(_each, 1));
      }, ["each"]),
    );
    let _l = _asterisk_2(_d, _m);
    /* Statements */
    _ifFalse_2(
      _equalsSign_2(_f, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_l, _k, _plusSign_2(_at_2(_l, _k), _f));
      }, []),
    );
    return _asterisk_2(_l, _sign_1(_self));
  }, ["self", "base"]),
  "{ :self :base |\n\t\tlet i = self.abs.truncate;\n\t\tlet f = self.abs.fractionalPart;\n\t\tlet d = i.integerDigits(base);\n\t\tlet k = d.size;\n\t\tlet m = (k .. 1).collect { :each | base ^ (each - 1) };\n\t\tlet l = (d * m);\n\t\t(f = 0).ifFalse {\n\t\t\tl[k] := l[k] + f\n\t\t};\n\t\tl * self.sign\n\t}",
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
  "{ :self |\n\t\t1\n\t}",
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
  "{ :self :anInteger |\n\t\tself.isInteger.if {\n\t\t\tself.printString\n\t\t} {\n\t\t\tself.printStringToFixed(anInteger)\n\t\t}\n\t}",
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
  "{ :self :anInteger |\n\t\t<primitive:\n\t\tif(sl.isSmallFloatInteger(_anInteger)) {\n\t\t\treturn _self.toFixed(_anInteger);\n\t\t}\n\t\t>\n\t\t'SmallFloat>>printStringToFixed: not integer precision'.error\n\t}",
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
  "{ :self :anInteger |\n\t\t<primitive:\n\t\tif(sl.isSmallFloatInteger(_anInteger)) {\n\t\t\treturn _self.toPrecision(_anInteger);\n\t\t}\n\t\t>\n\t\t'SmallFloat>>printStringToPrecision: not integer precision'.error\n\t}",
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
  "{ :self :aSmallFloat |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_aSmallFloat)) {\n\t\t\treturn Math.pow(_self, _aSmallFloat);\n\t\t}\n\t\t>\n\t\t'SmallFloat>>raisedToSmallFloat: not SmallFloat'.error\n\t}",
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
      _exclamationMarkEqualsSign_2(_base, 10),
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
        let _exponent = _round_1(_plusSign_2(_log10_1(_self), 1));
        /* Statements */
        return [
          _integerDigits_3(
            _round_1(
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
  "{ :self :base :size |\n\t\t(base != 10).if {\n\t\t\tself.error('SmallFloat>>realDigits: not implemented unless base=10')\n\t\t} {\n\t\t\tlet exponent = (self.log10 + 1).round;\n\t\t\t[\n\t\t\t\t(self * (10 ^ (size - exponent))).round.integerDigits(10, size),\n\t\t\t\texponent\n\t\t\t]\n\t\t}\n\t}",
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
      _isCloseTo_2(_self, _round_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _round_1(_self);
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
  "{ :self |\n\t\tself.isCloseTo(self.round).if {\n\t\t\tself.round\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self % _anObject;\n\t\t}\n\t\t>\n\t\tself.error('remainder')\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "replaceNaN",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNaN_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _y;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x;
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tx.isNaN.if {\n\t\t\ty\n\t\t} {\n\t\t\tx\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.round(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Math.round(_self)>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "roundTiesEven",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_fractionalPart_1(_n), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(2, _round_1(_solidus_2(_n, 2)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _round_1(_n);
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n.fractionalPart = 0.5).if {\n\t\t\t2 * (n / 2).round\n\t\t} {\n\t\t\tn.round\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.sign(_self);>\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tconst float = new Float64Array(1);\n\t\tconst bytes = new Uint8Array(float.buffer);\n\t\tfloat[0] = _self;\n\t\tconst sign = bytes[7] >> 7;\n\t\tconst exponent = ((bytes[7] & 0x7f) << 4 | bytes[6] >> 4) - 0x3ff;\n\t\tbytes[7] = 0x3f;\n\t\tbytes[6] |= 0xf0;\n\t\treturn [sign, exponent, float[0]];\n\t\t>\n\t}",
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
        return _uncheckedSqrt_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tComplex(self, 0).sqrt\n\t\t} {\n\t\t\tself.uncheckedSqrt\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.printString(10)\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.trunc(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Math.trunc(_self)>\n\t}",
);

sl.addMethodToExistingType(
  "SmallFloat",
  "SmallFloat",
  "uncheckedSqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sqrt(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Math.sqrt(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tconst f64 = new Float64Array(1);\n\t\tconst u32 = new Uint32Array(f64.buffer);\n\t\tf64[0] = _self;\n\t\treturn [u32[0], u32[1]];\n\t\t>\n\t}",
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
  "{ :self |\n\t\t0\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isFinite:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SmallFloat",
  "isNaN",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isNaN_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isNaN:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "isRadixIntegerString",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
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
        return _caseOf_3(
          _radix,
          [
            _hyphenMinusGreaterThanSign_2(
              2,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegularExpression_2(_self, "^[0-1+-]+$");
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              4,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegularExpression_2(_self, "^[0-3+-]+$");
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              8,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegularExpression_2(_self, "^[0-7+-]+$");
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              10,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegularExpression_2(_self, "^[0-9+-]+$");
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              16,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matchesRegularExpression_2(_self, "^[0-9A-Fa-f+-]+$");
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _c = _asList_1(_self);
            /* Statements */
            _ifTrue_2(
              _verticalLine_2(
                _equalsSign_2(_at_2(_c, 1), "-"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_at_2(_c, 1), "+");
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _removeAt_2(_c, 1);
              }, []),
            );
            return _allSatisfy_2(
              _collect_2(_c, _digitValue_1),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _greaterThanSignEqualsSign_2(_each, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSign_2(_each, _radix);
                  }, []),
                );
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.isEmpty.if {\n\t\t\tfalse\n\t\t} {\n\t\t\tradix.caseOf([\n\t\t\t\t2 -> {\n\t\t\t\t\tself.matchesRegularExpression('^[0-1+-]+$')\n\t\t\t\t},\n\t\t\t\t4 -> {\n\t\t\t\t\tself.matchesRegularExpression('^[0-3+-]+$')\n\t\t\t\t},\n\t\t\t\t8 -> {\n\t\t\t\t\tself.matchesRegularExpression('^[0-7+-]+$')\n\t\t\t\t},\n\t\t\t\t10 -> {\n\t\t\t\t\tself.matchesRegularExpression('^[0-9+-]+$')\n\t\t\t\t},\n\t\t\t\t16 -> {\n\t\t\t\t\tself.matchesRegularExpression('^[0-9A-Fa-f+-]+$')\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\tlet c = self.asList;\n\t\t\t\t(c[1] = '-' | { c[1] = '+' }).ifTrue {\n\t\t\t\t\tc.removeAt(1)\n\t\t\t\t};\n\t\t\t\tc.collect(digitValue:/1).allSatisfy { :each |\n\t\t\t\t\teach >= 0 & { each < radix }\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseDecimalInteger",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimalIntegerString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _uncheckedParseDecimalInteger_1(_self);
        /* Statements */
        return _if_3(
          _isNaN_1(_answer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _elseClause_0();
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
                return _elseClause_0();
              }, []),
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
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isDecimalIntegerString.if {\n\t\t\tlet answer = self.uncheckedParseDecimalInteger;\n\t\t\tanswer.isNaN.if {\n\t\t\t\telseClause()\n\t\t\t} {\n\t\t\t\tanswer.isSmallInteger.if {\n\t\t\t\t\tanswer\n\t\t\t\t} {\n\t\t\t\t\telseClause()\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
    } /* Statements */
    return _parseDecimalInteger_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseDecimalInteger: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseDecimalInteger {\n\t\t\tself.error('parseDecimalInteger: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseDecimalNumeral",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimalNumeralString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedParseNumber_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isDecimalNumeralString.if {\n\t\t\tself.uncheckedParseNumber\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseDecimalNumeral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDecimalNumeral_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseDecimalNumeral: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseDecimalNumeral {\n\t\t\tself.error('parseDecimalNumeral: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseNumber",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFloatString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedParseNumber_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isFloatString.if {\n\t\t\tself.uncheckedParseNumber\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
    return _parseNumber_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseNumber: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseNumber {\n\t\t\tself.error('parseNumber: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseScientificNotation",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScientificNotationString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedParseNumber_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isScientificNotationString.if {\n\t\t\tself.uncheckedParseNumber\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseScientificNotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseScientificNotation_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseScientificNotation: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseScientificNotation {\n\t\t\tself.error('parseScientificNotation: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseSexagesimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_splitBy_2(_self, ";"), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2(
      _collect_2(
        [_a, _b],
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_splitBy_2(_each, ","), _parseDecimalInteger_1);
        }, ["each"]),
      ),
      2,
    );
    let _p = _at_2(__SplVar2, 1);
    let _q = _at_2(__SplVar2, 2);
    let __SplVar3 = _assertIsOfSize_2(_collect_2([_p, _q], _size_1), 2);
    let _m = _at_2(__SplVar3, 1);
    let _n = _at_2(__SplVar3, 2);
    /* Statements */
    return _plusSign_2(
      _sum_1(
        _asterisk_2(
          _p,
          _circumflexAccent_2(60, _upOrDownTo_2(_hyphenMinus_2(_m, 1), 0)),
        ),
      ),
      _sum_1(_solidus_2(_q, _circumflexAccent_2(60, _Span_3(1, _n, 1)))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.splitBy(';');\n\t\tlet [p, q] = [a, b].collect { :each |\n\t\t\teach.splitBy(',').collect(parseDecimalInteger:/1)\n\t\t};\n\t\tlet [m, n] = [p, q].collect(size:/1);\n\t\t(p * (60 ^ (m - 1 .. 0))).sum + (q / (60 ^ 1:n)).sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "parseSmallInteger",
  ["self", "radix", "elseClause:/0"],
  sl.annotateFunction(function (_self, _radix, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _radix, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallInteger_1(_radix),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
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
                  return _isRadixIntegerString_2(_self, _radix);
                }, []),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _uncheckedParseInteger_2(_self, _radix);
            /* Statements */
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
                return _elseClause_0();
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _elseClause_0();
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "radix", "elseClause:/0"]),
  "{ :self :radix :elseClause:/0 |\n\t\tradix.isSmallInteger.if {\n\t\t\t(\n\t\t\t\tradix > 1 & {\n\t\t\t\t\tradix < 36 & {\n\t\t\t\t\t\tself.isRadixIntegerString(radix)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tlet answer = self.uncheckedParseInteger(radix);\n\t\t\t\tanswer.isSmallInteger.if {\n\t\t\t\t\tanswer\n\t\t\t\t} {\n\t\t\t\t\telseClause()\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\telseClause()\n\t\t\t}\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
    return _parseSmallInteger_3(
      _self,
      _radix,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseSmallInteger: invalid input");
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.parseSmallInteger(radix) {\n\t\t\tself.error('parseSmallInteger: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "uncheckedParseDecimalInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Number(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "uncheckedParseInteger",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.parseInt(_self, _radix);
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\t<primitive: return Number.parseInt(_self, _radix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SmallFloat",
  "uncheckedParseNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.parseFloat(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Number.parseFloat(_self);>\n\t}",
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
  "{ :self |\n\t\t(-1 ^ self[1]) * (2 ^ self[2]) * self[3]\n\t}",
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
  "{\n\t\t1.exp\n\t}",
);
