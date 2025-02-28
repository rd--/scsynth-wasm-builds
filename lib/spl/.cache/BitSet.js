/*  Requires: ByteArray  */

sl.addType(
  false,
  "BitSet",
  "BitSet",
  ["Object", "Iterable", "Collection", "Extensible", "Removable"],
  ["capacity", "bytes", "tally"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Collection",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Removable",
  "BitSet",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isBitSet_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_size_1(_anObject), _tally_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_bytes_1(_anObject), _bytes_1(_self));
        },
      );
    });
  },
  "{ :self :anObject | &(isBitSet(anObject), { &(=(size(anObject), tally(self)), { =(bytes(anObject), bytes(self)) }) }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "add",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isInteger_1(_anInteger), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_includes_2(_self, _anInteger));
      });
    });
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  },
  "{ :self :anInteger | assert(self, { &(isInteger(anInteger), { not(includes(self,anInteger)) }) }); setBitAt(self,anInteger); anInteger }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; do(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ascii = _ByteArray_1(_capacity_1(_self));
    /* Statements */
    _bitsDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_ascii, _plusSign_2(_index, 1), _plusSign_2(48, _each));
    });
    return _asciiString_1(_ascii);
  },
  "{ :self | let ascii = ByteArray(capacity(self)); bitsDo(self, { :each :index | atPut(ascii, +(index, 1), +(48, each)) }); asciiString(ascii) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAt_2(_self, _anInteger);
  },
  "{ :self :anInteger | bitAt(self,anInteger) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "atPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAtPut_3(_self, _anInteger, _aBit);
  },
  "{ :self :anInteger :aBit | bitAtPut(self,anInteger, aBit) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
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
  "{ :self :anInteger | let byteIndex = +(bitShift(anInteger,-3), 1); let bitIndex = -(0, bitAnd(anInteger,7)); bitAnd(bitShift(at(bytes(self), byteIndex),bitIndex),1) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitAtPut",
  ["self", "anInteger", "aBit"],
  function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      throw new Error(errorMessage);
    } /* Statements */
    _caseOf_2(_aBit, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _clearBitAt_2(_self, _anInteger);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _setBitAt_2(_self, _anInteger);
      }),
    ]);
    return _aBit;
  },
  "{ :self :anInteger :aBit | caseOf(aBit,[->({ 0 }, { clearBitAt(self,anInteger) }), ->({ 1 }, { setBitAt(self,anInteger) })]); aBit }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitNot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitsDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_self, _index, _hyphenMinus_2(1, _each));
    });
  },
  "{ :self | bitsDo(self, { :each :index | atPut(self, index, -(1, each)) }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitsDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_indices_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_at_2(_self, _index), _index);
    });
  },
  "{ :self :aBlock:/2 | do(indices(self), { :index | aBlock(at(self, index), index) }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "clearBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
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
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_bytes_1(_self), _byteIndex, _newValue);
      _tally_2(_self, _hyphenMinus_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger | let byteIndex = +(bitShift(anInteger,-3), 1); let value = at(bytes(self), byteIndex); let mask = bitShift(1,bitAnd(anInteger,7)); let newValue = -(bitOr(value,mask), mask); if((=(newValue, value)), { false }, { atPut(bytes(self), byteIndex, newValue); tally(self, -(tally(self), 1)); true }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "complement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _bitNot_1(_answer);
    return _answer;
  },
  "{ :self | let answer = copy(self); bitNot(answer); answer }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remainingBits = _tally_1(_self);
    let _lowBits = _lowBitPerByteTable_1(_system);
    /* Statements */
    return _toDo_3(1, _size_1(_bytes_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(1, _remainingBits), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _byte = _at_2(_bytes_1(_self), _index);
        /* Statements */
        return _ifFalse_2(_equalsSign_2(_byte, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _byteOffset = _hyphenMinus_2(_bitShift_2(_index, 3), 9);
          /* Statements */
          return _whileFalse_1(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
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
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      });
    });
  },
  "{ :self :aBlock:/1 | let remainingBits = tally(self); let lowBits = lowBitPerByteTable(system); toDo(1, size(bytes(self)), { :index | if((<=(1, remainingBits)), { let byte = at(bytes(self), index); ifFalse((=(byte, 0)), { let byteOffset = -(bitShift(index,3), 9); whileFalse({ aBlock(+(at(lowBits, byte), byteOffset)); remainingBits := -(remainingBits, 1); byte := bitAnd(byte,-(byte, 1)); =(byte, 0) }) }) }, { self }) }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "include",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  },
  "{ :self :anInteger | setBitAt(self,anInteger); anInteger }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "includes",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_bitAt_2(_self, _anInteger), 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :anInteger | if(includesIndex(self,anInteger), { =(bitAt(self,anInteger), 1) }, { false }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "includesIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _lessThanSignEqualsSign_2(0, _anInteger),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_anInteger, _capacity_1(_self));
        },
      );
    });
  },
  "{ :self :anInteger | &(isInteger(anInteger), { &(<=(0, anInteger), { <(anInteger, capacity(self)) }) }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _upOrDownTo_2(0, _hyphenMinus_2(_capacity_1(_self), 1));
  },
  "{ :self | upOrDownTo(0, -(capacity(self), 1)) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_tally_1(_self), 0);
  },
  "{ :self | =(tally(self), 0) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self :anObject | if(includes(self,anObject), { 1 }, { 0 }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _bytes_2(_self, _copy_1(_bytes_1(_self)));
  },
  "{ :self | bytes(self, copy(bytes(self))) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "removeIfAbsent",
  ["self", "anInteger", "absentBlock:/0"],
  function (_self, _anInteger, _absentBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _absentBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_clearBitAt_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anInteger;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _absentBlock_0();
    });
  },
  "{ :self :anInteger :absentBlock:/0 | if(clearBitAt(self,anInteger), { anInteger }, { absentBlock() }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _if_2(_greaterThanSign_2(_tally, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _atAllPut_2(_bytes_1(_self), 0);
      return _tally_2(_self, 0);
    });
    return _self;
  },
  "{ :self | if((>(tally, 0)), { atAllPut(bytes(self),0); tally(self, 0) }); self }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "setBitAt",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
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
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_bytes_1(_self), _index, _newValue);
      _tally_2(_self, _plusSign_2(_tally_1(_self), 1));
      return true;
    });
  },
  "{ :self :anInteger | let index = +(bitShift(anInteger,-3), 1); let value = at(bytes(self), index); let newValue = bitOr(bitShift(1,bitAnd(anInteger,7)),value); if((=(newValue, value)), { false }, { atPut(bytes(self), index, newValue); tally(self, +(tally(self), 1)); true }) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tally_1(_self);
  },
  "{ :self | tally(self) }",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  "{ :self | ++(++(++(storeString(asList(self)), '.asBitSet('), capacity(self)), ')') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "BitSet",
  "BitSet",
  ["capacity"],
  function (_capacity) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _capacity";
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
  "{ :capacity | let byteCount = min(capacity,+(//(capacity, 8), 1)); initializeSlots(newBitSet(),capacity, ByteArray(byteCount), 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _BitSet_1(_capacity);
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :capacity | let answer = BitSet(capacity); addAll(answer,self); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _plusSign_2(_max_1(_self), 1));
  },
  "{ :self | asBitSet(self,+(max(self), 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
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
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_each, _oneCodePoint), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinus_2(_index, 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(_each, _zeroCodePoint),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
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
  "{ :self :capacity | let answer = BitSet(size(self)); let ascii = asciiByteArray(self); let zeroCodePoint = codePoint('0'); let oneCodePoint = codePoint('1'); withIndexDo(ascii, { :each :index | if((=(each, oneCodePoint)), { add(answer,-(index, 1)) }, { ifTrue((~=(each, zeroCodePoint)), { error(self,++('String>>asBitSet: not 0 or 1: ', each)) }) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _size_1(_self));
  },
  "{ :self | asBitSet(self,size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _tildeEqualsSign_2(_asterisk_2(_size_1(_self), 8), _capacity),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBitSet: incorrect capacity");
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
  "{ :self :capacity | if((~=(*(size(self), 8), capacity)), { error(self,'asBitSet: incorrect capacity') }, { initializeSlots(newBitSet(),capacity, self, bitCount(self)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _asterisk_2(_size_1(_self), 8));
  },
  "{ :self | asBitSet(self,*(size(self), 8)) }",
);
