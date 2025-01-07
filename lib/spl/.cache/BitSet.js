/*  Requires: ByteArray  */

sl.addType(
  false,
  "BitSet",
  "BitSet",
  ["Object", "Iterable", "Collection", "Extensible", "Removable"],
  ["capacity", "bytes", "tally"],
);

sl.copyTraitToType(
  "Object",
  "BitSet",
);

sl.copyTraitToType(
  "Iterable",
  "BitSet",
);

sl.copyTraitToType(
  "Collection",
  "BitSet",
);

sl.copyTraitToType(
  "Extensible",
  "BitSet",
);

sl.copyTraitToType(
  "Removable",
  "BitSet",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isBitSet_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_size_1(_anObject), _tally_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_bytes_1(_anObject), _bytes_1(_self));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isBitSet & {\n\t\t\tanObject.size = self.tally & {\n\t\t\t\tanObject.bytes = self.bytes\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "add",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isInteger_1(_anInteger), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_includes_2(_self, _anInteger));
      });
    });
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  },
  "{ :self :anInteger |\n\t\tself.assert {\n\t\t\tanInteger.isInteger & {\n\t\t\t\tself.includes(anInteger).not\n\t\t\t}\n\t\t};\n\t\tself.setBitAt(anInteger);\n\t\tanInteger\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ascii = _ByteArray_1(_capacity_1(_self));
    /* Statements */
    _bitsDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_ascii, _plusSign_2(_index, 1), _plusSign_2(48, _each));
    });
    return _asciiString_1(_ascii);
  },
  "{ :self |\n\t\tlet ascii = ByteArray(self.capacity);\n\t\tself.bitsDo { :each :index |\n\t\t\tascii[index + 1] := 48 + each\n\t\t};\n\t\tascii.asciiString\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAt_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.bitAt(anInteger)\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "atPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAtPut_3(_self, _anInteger, _aBit);
  },
  "{ :self :anInteger :aBit |\n\t\tself.bitAtPut(anInteger, aBit)\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "bitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _byteIndex = _plusSign_2(_bitShift_2(_anInteger, -3), 1);
    let _bitIndex = _hyphenMinus_2(0, _bitAnd_2(_anInteger, 7));
    /* Statements */
    return _bitAnd_2(
      _bitShift_2(_at_2(_bytes_1(_self), _byteIndex), _bitIndex),
      1,
    );
  },
  "{ :self :anInteger |\n\t\tlet byteIndex = anInteger.bitShift(-3) + 1;\n\t\tlet bitIndex = 0 - anInteger.bitAnd(7);\n\t\tself.bytes[byteIndex].bitShift(bitIndex).bitAnd(1)\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "bitAtPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _caseOf_2(_aBit, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _clearBitAt_2(_self, _anInteger);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _setBitAt_2(_self, _anInteger);
      }),
    ]);
    return _aBit;
  },
  "{ :self :anInteger :aBit |\n\t\taBit.caseOf([\n\t\t\t{ 0 } -> { self.clearBitAt(anInteger) },\n\t\t\t{ 1 } -> { self.setBitAt(anInteger) }\n\t\t]);\n\t\taBit\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "bitNot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _bitsDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_self, _index, _hyphenMinus_2(1, _each));
    });
  },
  "{ :self |\n\t\tself.bitsDo { :each :index |\n\t\t\tself[index] := 1 - each\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "bitsDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_indices_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_at_2(_self, _index), _index);
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.indices.do { :index |\n\t\t\taBlock(self[index], index)\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "clearBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _byteIndex = _plusSign_2(_bitShift_2(_anInteger, -3), 1);
    let _value = _at_2(_bytes_1(_self), _byteIndex);
    let _mask = _bitShift_2(1, _bitAnd_2(_anInteger, 7));
    let _newValue = _hyphenMinus_2(_bitOr_2(_value, _mask), _mask);
    /* Statements */
    return _if_3(_equalsSign_2(_newValue, _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_bytes_1(_self), _byteIndex, _newValue);
      _tally_2(_self, _hyphenMinus_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger |\n\t\tlet byteIndex = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[byteIndex];\n\t\tlet mask = 1.bitShift(anInteger.bitAnd(7));\n\t\tlet newValue = value.bitOr(mask) - mask;\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[byteIndex] := newValue;\n\t\t\tself.tally := self.tally - 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "complement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _bitNot_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.copy;\n\t\tanswer.bitNot;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remainingBits = _tally_1(_self);
    let _lowBits = _lowBitPerByteTable_1(_system);
    /* Statements */
    return _toDo_3(1, _size_1(_bytes_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(1, _remainingBits), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _byte = _at_2(_bytes_1(_self), _index);
        /* Statements */
        return _ifFalse_2(_equalsSign_2(_byte, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _byteOffset = _hyphenMinus_2(_bitShift_2(_index, 3), 9);
          /* Statements */
          return _whileFalse_1(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _aBlock_1(_plusSign_2(_at_2(_lowBits, _byte), _byteOffset));
            _remainingBits = _hyphenMinus_2(_remainingBits, 1);
            _byte = _bitAnd_2(_byte, _hyphenMinus_2(_byte, 1));
            return _equalsSign_2(_byte, 0);
          });
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet remainingBits = self.tally;\n\t\tlet lowBits = system.lowBitPerByteTable;\n\t\t1.toDo(self.bytes.size) { :index |\n\t\t\t(1 <= remainingBits).if {\n\t\t\t\tlet byte = self.bytes[index];\n\t\t\t\t(byte = 0).ifFalse {\n\t\t\t\t\tlet byteOffset = index.bitShift(3) - 9;\n\t\t\t\t\t{\n\t\t\t\t\t\taBlock(lowBits[byte] + byteOffset);\n\t\t\t\t\t\tremainingBits := remainingBits - 1;\n\t\t\t\t\t\tbyte := byte.bitAnd(byte - 1);\n\t\t\t\t\t\tbyte = 0\n\t\t\t\t\t}.whileFalse\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "include",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  },
  "{ :self :anInteger |\n\t\tself.setBitAt(anInteger);\n\t\tanInteger\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "includes",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_bitAt_2(_self, _anInteger), 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :anInteger |\n\t\tself.includesIndex(anInteger).if {\n\t\t\tself.bitAt(anInteger) = 1\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "includesIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _lessThanSignEqualsSign_2(0, _anInteger),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_anInteger, _capacity_1(_self));
        },
      );
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger & {\n\t\t\t0 <= anInteger & {\n\t\t\t\tanInteger < self.capacity\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _upOrDownTo_2(0, _hyphenMinus_2(_capacity_1(_self), 1));
  },
  "{ :self |\n\t\t(0 .. self.capacity - 1)\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_tally_1(_self), 0);
  },
  "{ :self |\n\t\tself.tally = 0\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _bytes_2(_self, _copy_1(_bytes_1(_self)));
  },
  "{ :self |\n\t\tself.bytes := self.bytes.copy\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "removeIfAbsent",
  ["self", "anInteger", "absentBlock:/0"],
  function (_self, _anInteger, _absentBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _absentBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_clearBitAt_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _anInteger;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _absentBlock_0();
    });
  },
  "{ :self :anInteger :absentBlock:/0 |\n\t\tself.clearBitAt(anInteger).if {\n\t\t\tanInteger\n\t\t} {\n\t\t\tabsentBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _if_2(_greaterThanSign_2(_tally, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _atAllPut_2(_bytes_1(_self), 0);
      return _tally_2(_self, 0);
    });
    return _self;
  },
  "{ :self |\n\t\t(tally > 0).if {\n\t\t\tself.bytes.atAllPut(0);\n\t\t\tself.tally := 0\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "setBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _plusSign_2(_bitShift_2(_anInteger, -3), 1);
    let _value = _at_2(_bytes_1(_self), _index);
    let _newValue = _bitOr_2(_bitShift_2(1, _bitAnd_2(_anInteger, 7)), _value);
    /* Statements */
    return _if_3(_equalsSign_2(_newValue, _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_bytes_1(_self), _index, _newValue);
      _tally_2(_self, _plusSign_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger |\n\t\tlet index = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[index];\n\t\tlet newValue = 1.bitShift(anInteger.bitAnd(7)).bitOr(value);\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[index] := newValue;\n\t\t\tself.tally := self.tally + 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _tally_1(_self);
  },
  "{ :self |\n\t\tself.tally\n\t}",
);

sl.addMethod(
  "BitSet",
  "BitSet",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_storeString_1(_asList_1(_self)), ".asBitSet("),
        _capacity_1(_self),
      ),
      ")",
    );
  },
  "{ :self |\n\t\tself.asList.storeString ++ '.asBitSet(' ++ self.capacity ++ ')'\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "BitSet",
  "BitSet",
  ["capacity"],
  function (_capacity) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _capacity";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _byteCount = _min_2(
      _capacity,
      _plusSign_2(_solidusSolidus_2(_capacity, 8), 1),
    );
    /* Statements */
    return _initializeSlots_4(
      _newBitSet_0(),
      _capacity,
      _ByteArray_1(_byteCount),
      0,
    );
  },
  "{ :capacity |\n\t\tlet byteCount = capacity.min(capacity // 8 + 1);\n\t\tnewBitSet().initializeSlots(\n\t\t\tcapacity,\n\t\t\tByteArray(byteCount),\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _BitSet_1(_capacity);
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :capacity |\n\t\tlet answer = BitSet(capacity);\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _plusSign_2(_max_1(_self), 1));
  },
  "{ :self |\n\t\tself.asBitSet(self.max + 1)\n\t}",
);

sl.addMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _BitSet_1(_size_1(_self));
    let _ascii = _asciiByteArray_1(_self);
    let _zeroCodePoint = _codePoint_1("0");
    let _oneCodePoint = _codePoint_1("1");
    /* Statements */
    _withIndexDo_2(_ascii, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_each, _oneCodePoint), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinus_2(_index, 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(_each, _zeroCodePoint),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2("String>>asBitSet: not 0 or 1: ", _each),
            );
          },
        );
      });
    });
    return _answer;
  },
  "{ :self :capacity |\n\t\tlet answer = BitSet(self.size);\n\t\tlet ascii = self.asciiByteArray;\n\t\tlet zeroCodePoint = '0'.codePoint;\n\t\tlet oneCodePoint = '1'.codePoint;\n\t\tascii.withIndexDo { :each :index |\n\t\t\t(each = oneCodePoint).if {\n\t\t\t\tanswer.add(index - 1)\n\t\t\t} {\n\t\t\t\t(each ~= zeroCodePoint).ifTrue {\n\t\t\t\t\tself.error('String>>asBitSet: not 0 or 1: ' ++ each)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _size_1(_self));
  },
  "{ :self |\n\t\tself.asBitSet(self.size)\n\t}",
);

sl.addMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _tildeEqualsSign_2(_asterisk_2(_size_1(_self), 8), _capacity),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBitSet: incorrect capacity");
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(
          _newBitSet_0(),
          _capacity,
          _self,
          _bitCount_1(_self),
        );
      },
    );
  },
  "{ :self :capacity |\n\t\t(self.size * 8 ~= capacity).if {\n\t\t\tself.error('asBitSet: incorrect capacity')\n\t\t} {\n\t\t\tnewBitSet().initializeSlots(\n\t\t\t\tcapacity,\n\t\t\t\tself,\n\t\t\t\tself.bitCount\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _asterisk_2(_size_1(_self), 8));
  },
  "{ :self |\n\t\tself.asBitSet(self.size * 8)\n\t}",
);
