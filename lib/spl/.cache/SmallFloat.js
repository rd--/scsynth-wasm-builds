sl.addType(
  true,
  "SmallFloat",
  "SmallFloat",
  ["Object", "Json", "Magnitude", "Number", "Integer", "Binary"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SmallFloat",
);

sl.copyTraitToType(
  "Json",
  "SmallFloat",
);

sl.copyTraitToType(
  "Magnitude",
  "SmallFloat",
);

sl.copyTraitToType(
  "Number",
  "SmallFloat",
);

sl.copyTraitToType(
  "Integer",
  "SmallFloat",
);

sl.copyTraitToType(
  "Binary",
  "SmallFloat",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isSmallFloat_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSignEqualsSign_2(_self, _anObject);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToNumberAndApply_3(_anObject, _self, _equalsSign_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isSmallFloat.if {\n\t\t\t\tself == anObject\n\t\t\t} {\n\t\t\t\tanObject.adaptToNumberAndApply(self, =)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self < _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _lessThanSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self < _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self <= _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _lessThanSignEqualsSign_2,
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self <= _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <=)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self + _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _plusSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self + _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, +)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self - _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self - _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, -)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self * _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _asterisk_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self * _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, *)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self / _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _solidus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self / _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, /)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return ((_self % _anObject) + _anObject) % _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _percentSign_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn ((_self % _anObject) + _anObject) % _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, %)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _raisedToInteger_2(_self, _anObject);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isSmallFloat_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _raisedToSmallFloat_2(_self, _anObject);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToNumberAndApply_3(_anObject, _self, _circumflexAccent_2);
      });
    });
  },
  "{ :self :anObject |\n\t\tanObject.isInteger.if {\n\t\t\tself.raisedToInteger(anObject)\n\t\t} {\n\t\t\tanObject.isSmallFloat.if {\n\t\t\t\tself.raisedToSmallFloat(anObject)\n\t\t\t} {\n\t\t\t\tanObject.adaptToNumberAndApply(self, ^)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self << _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _lessThanSignLessThanSign_2,
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <<)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return sl.shiftRight(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(
      _anObject,
      _self,
      _greaterThanSignGreaterThanSign_2,
    );
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn sl.shiftRight(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, >>)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.abs(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.abs(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.acos(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.acos(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcCosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.acosh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.acosh(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.asin(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.asin(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcSinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.asinh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.asinh(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.atan(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.atan(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "arcTan",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atan2_2(_anObject, _self);
  },
  "{ :self :anObject |\n\t\tanObject.atan2(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_self);
  },
  "{ :self |\n\t\tself.truncated\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return BigInt(_self);
  },
  "{ :self |\n\t\t<primitive: return BigInt(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "asSmallFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "assertIsSmallInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isSmallInteger_1(_self);
    });
  },
  "{ :self |\n\t\tself.assert {\n\t\t\tself.isSmallInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "atRandom",
  ["self", "shape", "rng"],
  function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _randomInteger_4(_rng, 1, _self, _shape);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _randomReal_4(_rng, 0, _self, _shape);
    });
  },
  "{ :self :shape :rng |\n\t\tself.isInteger.if {\n\t\t\trng.randomInteger(1, self, shape)\n\t\t} {\n\t\t\trng.randomReal(0, self, shape)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "basicSqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.sqrt(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sqrt(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "atan2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.atan2(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _atan2_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.atan2(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, atan2:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self & _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitAnd_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self & _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitAnd:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "bitNot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self)) {
      return ~_self;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitNot_1);
  },
  "{ :self |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self)) {\n\t\t\treturn ~_self;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitNot:/1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self | _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitOr_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self | _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitOr:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "bitTest",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _tildeEqualsSign_2(
      _bitAnd_2(
        _self,
        _lessThanSignLessThanSign_2(1, _hyphenMinus_2(_anInteger, 1)),
      ),
      0,
    );
  },
  "{ :self :anInteger |\n\t\tself.bitAnd(1 << (anInteger - 1)) ~= 0\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "bitXor",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isBitwise(_self) && sl.isBitwise(_anObject)) {
      return _self ^ _anObject;
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _bitXor_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self ^ _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, bitXor:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "byteHexString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isByte_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _hexString = _printString_2(_self, 16);
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 16), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSignPlusSign_2("0", _hexString);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hexString;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "byteHexString: not a byte");
    });
  },
  "{ :self |\n\t\tself.isByte.if {\n\t\t\tlet hexString = self.printString(16);\n\t\t\t(self < 16).if {\n\t\t\t\t'0' ++ hexString\n\t\t\t} {\n\t\t\t\thexString\n\t\t\t}\n\t\t} {\n\t\t\tself.error('byteHexString: not a byte')\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cantorStaircase",
  ["x", "n"],
  function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_2 = function (_x, _n) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_n, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _x;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _y = _asterisk_2(3, _x);
        /* Statements */
        return _if_3(_lessThanSign_2(_y, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _solidus_2(_f_2(_y, _hyphenMinus_2(_n, 1)), 2);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_lessThanSign_2(_y, 2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 0.5;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _plusSign_2(
              0.5,
              _solidus_2(_f_2(_hyphenMinus_2(_y, 2), _hyphenMinus_2(_n, 1)), 2),
            );
          });
        });
      });
    };
    /* Statements */
    return _f_2(_x, _n);
  },
  "{ :x :n |\n\t\tlet f = { :x :n |\n\t\t\t(n = 0).if {\n\t\t\t\tx\n\t\t\t} {\n\t\t\t\tlet y = 3 * x;\n\t\t\t\t(y < 1).if {\n\t\t\t\t\tf(y, n - 1) / 2\n\t\t\t\t} {\n\t\t\t\t\t(y < 2).if {\n\t\t\t\t\t\t0.5\n\t\t\t\t\t} {\n\t\t\t\t\t\t0.5 + (f(y - 2, n - 1) / 2)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(x, n)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cantorStaircase",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cantorStaircase_2(_x, 12);
  },
  "{ :x |\n\t\tx.cantorStaircase(12)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.cos(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cos(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cosecant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(1, _sin_1(_self));
  },
  "{ :self |\n\t\t1 / self.sin\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.cosh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cosh(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cotangent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(1, _tan_1(_self));
  },
  "{ :self |\n\t\t1 / self.tan\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "cubeRoot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.cbrt(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cbrt(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.exp(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.exp(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "fibonacci",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :n |\n\t\tlet phi = 1.goldenRatio;\n\t\t((phi ^ n) - (n.pi.cos * (phi ^ n.-))) / 5.sqrt\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.floor(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.floor(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self % 1;
  },
  "{ :self |\n\t\t<primitive: return _self % 1;>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "hypot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.hypot(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _hypot_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.hypot(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, hypot:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.isBitwise(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isBitwise(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_not_1(_isNumber_1(_aNumber)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifError_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_self, _aNumber);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_aNumber, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(_abs_1(_self), _epsilon);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _verticalLine_2(
            _equalsSign_2(_self, _asSmallFloat_1(_aNumber)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let _z = _abs_1(_self);
              /* Statements */
              return _if_3(_lessThanSign_2(_z, _epsilon), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _lessThanSign_2(
                  _solidus_2(
                    _abs_1(_hyphenMinus_2(_self, _aNumber)),
                    _max_2(_z, _abs_1(_aNumber)),
                  ),
                  _epsilon,
                );
              });
            },
          );
        });
      });
    });
  },
  "{ :self :aNumber :epsilon |\n\t\taNumber.isNumber.not.if {\n\t\t\t{ self = aNumber }.ifError { false }\n\t\t} {\n\t\t\t(self = 0).if {\n\t\t\t\taNumber.abs < epsilon\n\t\t\t} {\n\t\t\t\t(aNumber = 0).if {\n\t\t\t\t\tself.abs < epsilon\n\t\t\t\t} {\n\t\t\t\t\tself = aNumber.asSmallFloat | {\n\t\t\t\t\t\tlet z = self.abs;\n\t\t\t\t\t\t(z < epsilon).if {\n\t\t\t\t\t\t\taNumber.abs < epsilon\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(self - aNumber).abs / (z.max(aNumber.abs)) < epsilon\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.0001);
  },
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.0001)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isEven",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self % 2 === 0;
  },
  "{ :self |\n\t\t<primitive: return _self % 2 === 0;>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isFinite",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.isFinite(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isFinite(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isInteger_1(_self);
  },
  "{ :self |\n\t\tself.isInteger\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.isInteger(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isInteger(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isNaN",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.isNaN(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isNaN(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isNegativeZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Object.is(_self, -0);
  },
  "{ :self |\n\t\t<primitive: return Object.is(_self, -0);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isOdd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.abs(_self % 2) === 1;
  },
  "{ :self |\n\t\t<primitive: return Math.abs(_self % 2) === 1;>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isSmallInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.isSafeInteger(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isSafeInteger(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isVeryCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.000000000001);
  },
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.000000000001)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.log(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.log(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "log",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.log(_self) / Math.log(_base);
  },
  "{ :self :base |\n\t\t<primitive: return Math.log(_self) / Math.log(_base)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.log2(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.log2(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.log10(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.log10(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lucasNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_phi, _self),
      _asterisk_2(
        _cos_1(_pi_1(_self)),
        _circumflexAccent_2(_phi, _negated_1(_self)),
      ),
    );
  },
  "{ :self |\n\t\tlet phi = 1.goldenRatio;\n\t\t(phi ^ self) + (self.pi.cos * (phi ^ self.negated))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) return Math.min(_self, _anObject);
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _min_2);
  },
  "{ :self :anObject |\n\t\t<primitive: if(sl.isSmallFloat(_anObject)) { return Math.min(_self, _anObject); }>\n\t\tanObject.adaptToNumberAndApply(self, min:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.max(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _max_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.max(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, max:/2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "minkowskiQuestionMark",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _y = _floor_1(_solidus_2(_x, 1));
    let _p = _percentSign_2(_x, 1);
    let _q = _hyphenMinus_2(1, _p);
    let _d = 0.5;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_plusSign_2(_y, _d), _y);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _if_3(_lessThanSign_2(_p, _q), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _q = _hyphenMinus_2(_q, _p);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _p = _hyphenMinus_2(_p, _q);
        return _y = _plusSign_2(_y, _d);
      });
      return _d = _solidus_2(_d, 2);
    });
    return _y;
  },
  "{ :x |\n\t\tlet y = (x / 1).floor;\n\t\tlet p = x % 1;\n\t\tlet q = 1 - p;\n\t\tlet d = 0.5;\n\t\t{\n\t\t\ty + d > y\n\t\t}.whileTrue {\n\t\t\t(p < q).if {\n\t\t\t\tq := q - p\n\t\t\t} {\n\t\t\t\tp := p - q;\n\t\t\t\ty := y + d\n\t\t\t};\n\t\t\td := d / 2\n\t\t};\n\t\ty\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "minkowskiQuestionMarkInverse",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _y = _floor_1(_solidus_2(_x, 1));
    let _bits = _percentSign_2(_x, 1);
    let _lo = [0, 1];
    let _hi = [1, 1];
    let _iterationCount = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_lessThanSign_2(_iterationCount, 152), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(
          _plusSign_2(_y, _solidus_2(_at_2(_lo, 1), _at_2(_lo, 2))),
          _plusSign_2(_y, _solidus_2(_at_2(_hi, 1), _at_2(_hi, 2))),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _bit = _floor_1(_solidus_2(_asterisk_2(2, _bits), 1));
      /* Statements */
      _bits = _percentSign_2(_asterisk_2(2, _bits), 1);
      _if_3(_greaterThanSign_2(_bit, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lo = _plusSign_2(_lo, _hi);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hi = _plusSign_2(_hi, _lo);
      });
      return _iterationCount = _plusSign_2(_iterationCount, 1);
    });
    return _plusSign_2(_y, _solidus_2(_at_2(_lo, 1), _at_2(_lo, 2)));
  },
  "{ :x |\n\t\tlet y = (x / 1).floor;\n\t\tlet bits = x % 1;\n\t\tlet lo = [0 1];\n\t\tlet hi = [1 1];\n\t\tlet iterationCount = 0;\n\t\t{\n\t\t\titerationCount < 152 & {\n\t\t\t\t(y + (lo[1] / lo[2])) < (y + (hi[1] / hi[2]))\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tlet bit = (2 * bits / 1).floor;\n\t\t\tbits := 2 * bits % 1;\n\t\t\t(bit > 0).if {\n\t\t\t\tlo := lo + hi\n\t\t\t} {\n\t\t\t\thi := hi + lo\n\t\t\t};\n\t\t\titerationCount := iterationCount + 1\n\t\t};\n\t\ty + (lo[1] / lo[2])\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "nthRoot",
  ["self", "aPositiveInteger"],
  function (_self, _aPositiveInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPositiveInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_aPositiveInteger, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sqrt_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _verticalLine_2(_not_1(_isInteger_1(_aPositiveInteger)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _isNegative_1(_aPositiveInteger);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_1("nthRoot: only defined for positive integers");
        },
      );
      return _if_3(_isNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isOdd_1(_aPositiveInteger), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _negated_1(
            _circumflexAccent_2(
              _negated_1(_self),
              _solidus_2(1, _aPositiveInteger),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_1("nthRoot: negative numbers do not have even roots.");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _circumflexAccent_2(_self, _solidus_2(1, _aPositiveInteger));
      });
    });
  },
  "{ :self :aPositiveInteger |\n\t\t(aPositiveInteger = 2).if {\n\t\t\tself.sqrt\n\t\t} {\n\t\t\t(aPositiveInteger.isInteger.not | {\n\t\t\t\taPositiveInteger.isNegative\n\t\t\t}).ifTrue {\n\t\t\t\t'nthRoot: only defined for positive integers'.error\n\t\t\t};\n\t\t\tself.isNegative.if {\n\t\t\t\taPositiveInteger.isOdd.if {\n\t\t\t\t\t(self.negated ^ (1 / aPositiveInteger)).negated\n\t\t\t\t} {\n\t\t\t\t\t'nthRoot: negative numbers do not have even roots.'.error\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself ^ (1 / aPositiveInteger)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "Number",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "printString",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (Object.is(_self, -0)) {
      return "-0";
    }
    if (Number.isFinite(_self)) {
      return _self.toString(_radix);
    }
    /* Statements */
    return _if_3(_isPositive_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "inf";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "(0 - inf)";
    });
  },
  "{ :self :radix |\n\t\t<primitive:\n\t\tif(Object.is(_self, -0)) {\n\t\t\treturn \"-0\"\n\t\t};\n\t\tif(Number.isFinite(_self)) {\n\t\t\treturn _self.toString(_radix);\n\t\t}\n\t\t>\n\t\tself.isPositive.if {\n\t\t\t'inf'\n\t\t} {\n\t\t\t'(0 - inf)'\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "raisedToSmallFloat",
  ["self", "aSmallFloat"],
  function (_self, _aSmallFloat) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSmallFloat";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_aSmallFloat)) {
      return Math.pow(_self, _aSmallFloat);
    }
    /* Statements */
    return _error_1("SmallFloat>>raisedToSmallFloat: not SmallFloat");
  },
  "{ :self :aSmallFloat |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_aSmallFloat)) {\n\t\t\treturn Math.pow(_self, _aSmallFloat);\n\t\t}\n\t\t>\n\t\t'SmallFloat>>raisedToSmallFloat: not SmallFloat'.error\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "reduce",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCloseTo_2(_self, _rounded_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _rounded_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isCloseTo(self.rounded).if {\n\t\t\tself.rounded\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "remainder",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return _self % _anObject;
    }
    /* Statements */
    return _error_2(_self, "remainder");
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self % _anObject;\n\t\t}\n\t\t>\n\t\tself.error('remainder')\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.round(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.round(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "secant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(1, _cos_1(_self));
  },
  "{ :self |\n\t\t1 / self.cos\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.sign(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sign(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "signExponentMantissa",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.signExponentMantissa(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.signExponentMantissa(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.sin(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sin(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "sinc",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_sin_1(_self), _self);
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.sin / self\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.sinh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sinh(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sqrt_1(_Complex_2(_self, 0));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _basicSqrt_1(_self);
    });
  },
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tComplex(self, 0).sqrt\n\t\t} {\n\t\t\tself.basicSqrt\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _printString_2(_self, 10);
  },
  "{ :self |\n\t\tself.printString(10)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.tan(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.tan(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.tanh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.tanh(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.trunc(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.trunc(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "weierstrassFunction",
  ["x", "a", "m"],
  function (_x, _a, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _m";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_collect_2(_upOrDownTo_2(1, _m), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _sin_1(_asterisk_2(_asterisk_2(_pi, _circumflexAccent_2(_k, _a)), _x)),
        _asterisk_2(_pi, _circumflexAccent_2(_k, _a)),
      );
    }));
  },
  "{ :x :a :m |\n\t\t1:m.collect { :k |\n\t\t\t(pi * (k ^ a) * x).sin / (pi * (k ^ a))\n\t\t}.sum\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "SmallFloat",
  "isSmallInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "basicParseDecimalInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number(_self);
  },
  "{ :self |\n\t\t<primitive: return Number(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "basicParseInteger",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.parseInt(_self, _radix);
  },
  "{ :self :radix |\n\t\t<primitive: return Number.parseInt(_self, _radix);>\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "basicParseNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.parseFloat(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.parseFloat(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "parseDecimalInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _basicParseDecimalInteger_1(_self);
    /* Statements */
    return _if_3(_isNaN_1(_answer), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "parseDecimalInteger: not a number");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isSmallInteger_1(_answer), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "parseDecimalInteger: not an integer");
      });
    });
  },
  "{ :self |\n\t\tlet answer = self.basicParseDecimalInteger;\n\t\tanswer.isNaN.if {\n\t\t\tself.error('parseDecimalInteger: not a number')\n\t\t} {\n\t\t\tanswer.isSmallInteger.if {\n\t\t\t\tanswer\n\t\t\t} {\n\t\t\t\tself.error('parseDecimalInteger: not an integer')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "parseInteger",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _assertIsSmallInteger_1(_radix);
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_radix, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_lessThanSign_2(_radix, 36), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _matchesRegExp_2(_self, "^[0-9a-zA-Z-]+$");
        });
      });
    });
    return _assertIsSmallInteger_1(_basicParseInteger_2(_self, _radix));
  },
  "{ :self :radix |\n\t\tradix.assertIsSmallInteger;\n\t\tself.assert {\n\t\t\tradix > 1 & {\n\t\t\t\tradix < 36 & {\n\t\t\t\t\tself.matchesRegExp('^[0-9a-zA-Z-]+$')\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.basicParseInteger(radix).assertIsSmallInteger\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "parseNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _matchesRegExp_2(_self, "^[0-9e.+-]+$");
    });
    return _basicParseNumber_1(_self);
  },
  "{ :self |\n\t\tself.assert {\n\t\t\tself.matchesRegExp('^[0-9e.+-]+$')\n\t\t};\n\t\tself.basicParseNumber\n\t}",
);

sl.addMethod(
  "List",
  "SmallFloat",
  "fromSignExponentMantissa",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _asterisk_2(
        _circumflexAccent_2(-1, _at_2(_self, 1)),
        _circumflexAccent_2(2, _at_2(_self, 2)),
      ),
      _at_2(_self, 3),
    );
  },
  "{ :self |\n\t\t(-1 ^ self[1]) * (2 ^ self[2]) * self[3]\n\t}",
);

sl.addMethod(
  "Void",
  "SmallFloat",
  "eulersNumber",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exp_1(1);
  },
  "{\n\t\t1.exp\n\t}",
);

globalThis._inf = Infinity;
globalThis._pi = 3.1415926535897932384626433;
globalThis._e = 2.71828182845904523536028747135266249775724709369995;
globalThis._epsilon = 0.000000000000001;
