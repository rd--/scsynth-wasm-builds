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
  "equals",
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
  "lessThan",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _lessThan_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self < _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lessThanEquals",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _lessThanEquals_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self <= _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <=)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "plus",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _plus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self + _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, +)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "minus",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _minus_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self - _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, -)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "times",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _times_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self * _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, *)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "dividedBy",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _dividedBy_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn _self / _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, /)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "modulo",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _modulo_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn ((_self % _anObject) + _anObject) % _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, %)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "raisedTo",
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
      return Math.pow(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _raisedTo_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.pow(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, ^)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "lessThanLessThan",
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
    return _adaptToNumberAndApply_3(_anObject, _self, _lessThanLessThan_2);
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isBitwise(_self) && sl.isBitwise(_anObject)) {\n\t\t\treturn _self << _anObject;\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, <<)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "greaterThanGreaterThan",
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
      _greaterThanGreaterThan_2,
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
  "arCosh",
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
    return _atan2_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.atan2(anObject)\n\t}",
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
    if (sl.isSmallFloat(_anObject)) return Math.atan2(_self, _anObject);
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _atan2_2);
  },
  "{ :self :anObject |\n\t\t<primitive: if(sl.isSmallFloat(_anObject)) { return Math.atan2(_self, _anObject); }>\n\t\tanObject.adaptToNumberAndApply(self, atan2:/2)\n\t}",
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
    return _tildeEquals_2(
      _bitAnd_2(_self, _lessThanLessThan_2(1, _minus_2(_anInteger, 1))),
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
      return _if_3(_lessThan_2(_self, 16), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plusPlus_2("0", _hexString);
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
        return _equals_2(_self, _aNumber);
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
      return _if_3(_equals_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThan_2(_abs_1(_aNumber), _epsilon);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equals_2(_aNumber, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThan_2(_abs_1(_self), _epsilon);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _or_2(
            _equals_2(_self, _asSmallFloat_1(_aNumber)),
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
              return _if_3(_lessThan_2(_z, _epsilon), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _lessThan_2(_abs_1(_aNumber), _epsilon);
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _lessThan_2(
                  _dividedBy_2(
                    _abs_1(_minus_2(_self, _aNumber)),
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
  "{ :self :aNumber :epsilon |\n\t\taNumber.isNumber.not.if {\n\t\t\t{ self = aNumber }.ifError { false }\n\t\t} {\n\t\t\t(self = 0).if {\n\t\t\t\taNumber.abs < epsilon\n\t\t\t} {\n\t\t\t\t(aNumber = 0).if {\n\t\t\t\t\tself.abs < epsilon\n\t\t\t\t} {\n\t\t\t\t\t(self = aNumber.asSmallFloat) | {\n\t\t\t\t\t\tlet z = self.abs;\n\t\t\t\t\t\t(z < epsilon).if {\n\t\t\t\t\t\t\taNumber.abs < epsilon\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(self - aNumber).abs / (z.max(aNumber.abs)) < epsilon\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
    return _equals_2(_self, 0);
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
  "raisedToInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself ^ anInteger\n\t}",
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
    return _times_2(_self, _randomFloat_1(_system));
  },
  "{ :self |\n\t\tself * system.randomFloat\n\t}",
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
    return _plus_2(_self, _randomFloat_1(_minus_2(_aNumber, _self)));
  },
  "{ :self :aNumber |\n\t\tself + (aNumber - self).randomFloat\n\t}",
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
    return _floor_1(_randomFloat_2(1, _plus_2(_self, 1)));
  },
  "{ :self |\n\t\t1.randomFloat(self + 1).floor\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "SmallFloat",
  "randomInteger",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_randomFloat_2(_self, _plus_2(_aNumber, 1)));
  },
  "{ :self :aNumber |\n\t\tself.randomFloat(aNumber + 1).floor\n\t}",
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
      return _and_2(_greaterThan_2(_radix, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_lessThan_2(_radix, 36), function () {
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
