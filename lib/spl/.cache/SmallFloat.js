/* {- Requires: RegExp String -} */

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
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self === _aNumber;
  },
  "{ :self :aNumber |\n\t\t<primitive: return _self === _aNumber;>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _raisedToInteger_2(_self, _anObject);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isSmallFloat_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _raisedToSmallFloat_2(_self, _anObject);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asSmallFloat_1(_aFraction), _self);
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.asSmallFloat.aBlock(self)\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "atan2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isByte_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _hexString = _printString_2(_self, 16);
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 16), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plusSignPlusSign_2("0", _hexString);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _hexString;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "closeToBy",
  ["self", "aNumber", "epsilon"],
  function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_not_1(_isNumber_1(_aNumber)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifError_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_self, _aNumber);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return false;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_aNumber, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(_abs_1(_self), _epsilon);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _verticalLine_2(
            _equalsSign_2(_self, _asSmallFloat_1(_aNumber)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Temporaries */
              let _z = _abs_1(_self);
              /* Statements */
              return _if_3(_lessThanSign_2(_z, _epsilon), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _lessThanSign_2(_abs_1(_aNumber), _epsilon);
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
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
  "closeTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _closeToBy_3(_self, _aNumber, 0.0001);
  },
  "{ :self :aNumber |\n\t\tself.closeToBy(aNumber, 0.0001)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.cos(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cos(_self);>\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.cosh(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cosh(_self);>\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.cbrt(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.cbrt(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "even",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self % 2 === 0;
  },
  "{ :self |\n\t\t<primitive: return _self % 2 === 0;>\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.exp(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.exp(_self)>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self % 1;
  },
  "{ :self |\n\t\t<primitive: return _self % 1;>\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return sl.isBitwise(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isBitwise(_self);>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Number.isNaN(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isNaN(_self);>\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Number.isSafeInteger(_self);
  },
  "{ :self |\n\t\t<primitive: return Number.isSafeInteger(_self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, 0);
  },
  "{ :self |\n\t\tself = 0\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.log10(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.log10(_self)>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
  "nthRoot",
  ["self", "aPositiveInteger"],
  function (_self, _aPositiveInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPositiveInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_aPositiveInteger, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _sqrt_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _verticalLine_2(_not_1(_isInteger_1(_aPositiveInteger)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _negative_1(_aPositiveInteger);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _error_1("nthRoot: only defined for positive integer");
        },
      );
      return _if_3(_negative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_odd_1(_aPositiveInteger), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
            throw Error(errorMessage);
          }
          /* Statements */
          return _error_1("nthRoot: negative numbers do not have even roots.");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _circumflexAccent_2(_self, _solidus_2(1, _aPositiveInteger));
      });
    });
  },
  "{ :self :aPositiveInteger |\n\t\t(aPositiveInteger = 2).if {\n\t\t\tself.sqrt\n\t\t} {\n\t\t\t(aPositiveInteger.isInteger.not | {\n\t\t\t\taPositiveInteger.negative\n\t\t\t}).ifTrue {\n\t\t\t\t'nthRoot: only defined for positive integer'.error\n\t\t\t};\n\t\t\tself.negative.if {\n\t\t\t\taPositiveInteger.odd.if {\n\t\t\t\t\t(self.negated ^ (1 / aPositiveInteger)).negated\n\t\t\t\t} {\n\t\t\t\t\t'nthRoot: negative numbers do not have even roots.'.error\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself ^ (1 / aPositiveInteger)\n\t\t\t}\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "odd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.abs(_self % 2) === 1;
  },
  "{ :self |\n\t\t<primitive: return Math.abs(_self % 2) === 1;>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    if (Number.isFinite(_self)) {
      return _self.toString(_radix);
    }
    /* Statements */
    return _if_3(_positive_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "inf";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "(0 - inf)";
    });
  },
  "{ :self :radix |\n\t\t<primitive:\n\t\tif(Number.isFinite(_self)) {\n\t\t\treturn _self.toString(_radix);\n\t\t}\n\t\t>\n\t\tself.positive.if {\n\t\t\t'inf'\n\t\t} {\n\t\t\t'(0 - inf)'\n\t\t}\n\t}",
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
      throw Error(errorMessage);
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
    return _asterisk_2(_self, _nextRandomFloat_1(_system));
  },
  "{ :self |\n\t\tself * system.nextRandomFloat\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomFloat",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_self, _randomFloat_1(_hyphenMinus_2(_aNumber, _self)));
  },
  "{ :self :aNumber |\n\t\tself + (aNumber - self).randomFloat\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomFloat",
  ["min", "max", "countOrShape"],
  function (_min, _max, _countOrShape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _min, _max, _countOrShape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_countOrShape), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _exclamationMark_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _randomFloat_2(_min, _max);
      }, _countOrShape);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _fill_2(_countOrShape, function (_unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedIndex";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _randomFloat_2(_min, _max);
      });
    });
  },
  "{ :min :max :countOrShape |\n\t\tcountOrShape.isInteger.if {\n\t\t\t{ min.randomFloat(max) } ! countOrShape\n\t\t} {\n\t\t\tcountOrShape.fill { :unusedIndex |\n\t\t\t\tmin.randomFloat(max)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomFloatBipolar",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _randomFloat_2(_negated_1(_self), _self);
  },
  "{ :self |\n\t\tself.negated.randomFloat(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_randomFloat_2(1, _plusSign_2(_self, 1)));
  },
  "{ :self |\n\t\t1.randomFloat(self + 1).floor\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_randomFloat_2(_self, _plusSign_2(_anInteger, 1)));
  },
  "{ :self :anInteger |\n\t\tself.randomFloat(anInteger + 1).floor\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomInteger",
  ["min", "max", "countOrShape"],
  function (_min, _max, _countOrShape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _min, _max, _countOrShape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_countOrShape), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _exclamationMark_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _randomInteger_2(_min, _max);
      }, _countOrShape);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _fill_2(_countOrShape, function (_unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedIndex";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _randomInteger_2(_min, _max);
      });
    });
  },
  "{ :min :max :countOrShape |\n\t\tcountOrShape.isInteger.if {\n\t\t\t{ min.randomInteger(max) } ! countOrShape\n\t\t} {\n\t\t\tcountOrShape.fill { :unusedIndex |\n\t\t\t\tmin.randomInteger(max)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomIntegerExcluding",
  ["self", "anInteger", "excluded"],
  function (_self, _anInteger, _excluded) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _excluded";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _randomInteger_2(_self, _anInteger);
    /* Statements */
    return _if_3(_equalsSign_2(_answer, _excluded), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _anInteger;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer;
    });
  },
  "{ :self :anInteger :excluded |\n\t\tlet answer = self.randomInteger(anInteger);\n\t\t(answer = excluded).if {\n\t\t\tanInteger\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomIntegerExcludingZero",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _randomIntegerExcluding_3(_self, _anInteger, 0);
  },
  "{ :self :anInteger |\n\t\tself.randomIntegerExcluding(anInteger, 0)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_closeTo_2(_self, _rounded_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _rounded_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.closeTo(self.rounded).if {\n\t\t\tself.rounded\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.round(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.round(_self)>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.sign(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sign(_self);>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.sqrt(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.sqrt(_self)>\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Math.trunc(_self);
  },
  "{ :self |\n\t\t<primitive: return Math.trunc(_self)>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
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
    return _closeToBy_3(_self, _aNumber, 0.000000000001);
  },
  "{ :self :aNumber |\n\t\tself.closeToBy(aNumber, 0.000000000001)\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _parseDecimalInteger_1(_self);
  },
  "{ :self |\n\t\tself.parseDecimalInteger\n\t}",
);

sl.addMethod(
  "String",
  "SmallFloat",
  "asNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _parseNumber_1(_self);
  },
  "{ :self |\n\t\tself.parseNumber\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _basicParseDecimalInteger_1(_self);
    /* Statements */
    return _if_3(_isNaN_1(_answer), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "parseDecimalInteger: not a number");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isSmallInteger_1(_answer), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsSmallInteger_1(_radix);
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_radix, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_lessThanSign_2(_radix, 36), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _matchesRegExp_2(_self, "^[0-9e.+-]+$");
    });
    return _basicParseNumber_1(_self);
  },
  "{ :self |\n\t\tself.assert {\n\t\t\tself.matchesRegExp('^[0-9e.+-]+$')\n\t\t};\n\t\tself.basicParseNumber\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _exp_1(1);
  },
  "{\n\t\t1.exp\n\t}",
);

sl.addMethod(
  "Void",
  "SmallFloat",
  "smallFloatEpsilon",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Number.EPSILON;
  },
  "{\n\t\t<primitive: return Number.EPSILON;>\n\t}",
);

globalThis._inf = Infinity;
globalThis._pi = 3.1415926535897932384626433;
globalThis._e = 2.71828182845904523536028747135266249775724709369995;
globalThis._epsilon = 0.000000000000001;
