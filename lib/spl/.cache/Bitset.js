sl.addType(
  false,
  "Bitset",
  "Bitset",
  ["Object", "Iterable", "Collection", "Extensible", "Removable"],
  ["bytes", "tally"],
);

sl.copyTraitToType(
  "Object",
  "Bitset",
);

sl.copyTraitToType(
  "Iterable",
  "Bitset",
);

sl.copyTraitToType(
  "Collection",
  "Bitset",
);

sl.copyTraitToType(
  "Extensible",
  "Bitset",
);

sl.copyTraitToType(
  "Removable",
  "Bitset",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isBitset_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_size_1(_anObject), _tally_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_bytes_1(_anObject), _bytes_1(_self));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isBitset & {\n\t\t\tanObject.size = self.tally & {\n\t\t\t\tanObject.bytes = self.bytes\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "add",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  },
  "{ :self :anInteger |\n\t\tself.setBitAt(anInteger);\n\t\tanInteger\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _bitAt_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.bitAt(anInteger)\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "atPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _bitAtPut_3(_self, _anInteger, _aBit);
  },
  "{ :self :anInteger :aBit |\n\t\tself.bitAtPut(anInteger, aBit)\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "bitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _bitAnd_2(
      _bitShift_2(
        _at_2(_bytes_1(_self), _plus_2(_bitShift_2(_anInteger, -3), 1)),
        _minus_2(0, _bitAnd_2(_anInteger, 7)),
      ),
      1,
    );
  },
  "{ :self :anInteger |\n\t\tself.bytes[anInteger.bitShift(-3) + 1].bitShift(0 - anInteger.bitAnd(7)).bitAnd(1)\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "bitAtPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _caseOf_2(_aBit, [
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _clearBitAt_2(_self, _anInteger);
      }),
      _minusGreaterThan_2(function () {
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
        return _setBitAt_2(_self, _anInteger);
      }),
    ]);
    return _aBit;
  },
  "{ :self :anInteger :aBit |\n\t\taBit.caseOf([\n\t\t\t{ 0 } -> { self.clearBitAt(anInteger) },\n\t\t\t{ 1 } -> { self.setBitAt(anInteger) }\n\t\t]);\n\t\taBit\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "capacity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_size_1(_bytes_1(_self)), 8);
  },
  "{ :self |\n\t\tself.bytes.size * 8\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "clearBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _plus_2(_bitShift_2(_anInteger, -3), 1);
    let _value = _at_2(_bytes_1(_self), _index);
    let _mask = _bitShift_2(1, _bitAnd_2(_anInteger, 7));
    let _newValue = _minus_2(_bitOr_2(_value, _mask), _mask);
    /* Statements */
    return _if_3(_equals_2(_newValue, _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_bytes_1(_self), _index, _newValue);
      _tally_2(_self, _minus_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger |\n\t\tlet index = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[index];\n\t\tlet mask = 1.bitShift(anInteger.bitAnd(7));\n\t\tlet newValue = value.bitOr(mask) - mask;\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[index] := newValue;\n\t\t\tself.tally := self.tally - 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _remainingBits = _tally_1(_self);
    let _lowBits = _lowBitPerByteTable_1(_system);
    /* Statements */
    return _upToDo_3(1, _size_1(_bytes_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanEquals_2(1, _remainingBits), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _byte = _at_2(_bytes_1(_self), _index);
        /* Statements */
        return _ifFalse_2(_equals_2(_byte, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _byteOffset = _minus_2(_bitShift_2(_index, 3), 9);
          /* Statements */
          return _whileFalse_1(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _aBlock_1(_plus_2(_at_2(_lowBits, _byte), _byteOffset));
            _remainingBits = _minus_2(_remainingBits, 1);
            _byte = _bitAnd_2(_byte, _minus_2(_byte, 1));
            return _equals_2(_byte, 0);
          });
        });
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
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet remainingBits = self.tally;\n\t\tlet lowBits = system.lowBitPerByteTable;\n\t\t1.upToDo(self.bytes.size) { :index |\n\t\t\t(1 <= remainingBits).if {\n\t\t\t\tlet byte = self.bytes[index];\n\t\t\t\t(byte = 0).ifFalse {\n\t\t\t\t\tlet byteOffset = index.bitShift(3) - 9;\n\t\t\t\t\t{\n\t\t\t\t\t\taBlock(lowBits[byte] + byteOffset);\n\t\t\t\t\t\tremainingBits := remainingBits - 1;\n\t\t\t\t\t\tbyte := byte.bitAnd(byte - 1);\n\t\t\t\t\t\tbyte = 0\n\t\t\t\t\t}.whileFalse\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "includes",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_lessThan_2(-1, _anInteger), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_lessThan_2(_anInteger, _capacity_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_bitAt_2(_self, _anInteger), 1);
        });
      });
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger & {\n\t\t\t-1 < anInteger & {\n\t\t\t\tanInteger < self.capacity & {\n\t\t\t\t\tself.bitAt(anInteger) = 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_tally_1(_self), 0);
  },
  "{ :self |\n\t\tself.tally = 0\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
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
      return 0;
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _bytes_2(_self, _copy_1(_bytes_1(_self)));
  },
  "{ :self |\n\t\tself.bytes := self.bytes.copy\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "removeIfAbsent",
  ["self", "anInteger", "absentBlock:/0"],
  function (_self, _anInteger, _absentBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _absentBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_clearBitAt_2(_self, _anInteger), function () {
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
      return _absentBlock_0();
    });
  },
  "{ :self :anInteger :absentBlock:/0 |\n\t\tself.clearBitAt(anInteger).if {\n\t\t\tanInteger\n\t\t} {\n\t\t\tabsentBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _if_2(_greaterThan_2(_tally, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atAllPut_2(_bytes_1(_self), 0);
      return _tally_2(_self, 0);
    });
    return _self;
  },
  "{ :self |\n\t\t(tally > 0).if {\n\t\t\tself.bytes.atAllPut(0);\n\t\t\tself.tally := 0\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "setBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _plus_2(_bitShift_2(_anInteger, -3), 1);
    let _value = _at_2(_bytes_1(_self), _index);
    let _newValue = _bitOr_2(_bitShift_2(1, _bitAnd_2(_anInteger, 7)), _value);
    /* Statements */
    return _if_3(_equals_2(_newValue, _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_bytes_1(_self), _index, _newValue);
      _tally_2(_self, _plus_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger |\n\t\tlet index = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[index];\n\t\tlet newValue = 1.bitShift(anInteger.bitAnd(7)).bitOr(value);\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[index] := newValue;\n\t\t\tself.tally := self.tally + 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "Bitset",
  "Bitset",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _tally_1(_self);
  },
  "{ :self |\n\t\tself.tally\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Bitset",
  "Bitset",
  ["capacity"],
  function (_capacity) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _capacity";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newBitset_0(),
      _ByteArray_1(_dividedByDividedBy_2(_capacity, 8)),
      0,
    );
  },
  "{ :capacity |\n\t\tnewBitset().initializeSlots(\n\t\t\tByteArray(capacity // 8),\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bitset",
  "asBitset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Bitset_1(_roundUpTo_2(_max_1(_self), 8));
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Bitset(self.max.roundUpTo(8));\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);
