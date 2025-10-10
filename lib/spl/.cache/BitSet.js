/*  Requires: ByteArray  */

sl.addType(
  false,
  "BitSet",
  "BitSet",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
  ],
  ["capacity", "bytes", "tally"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "BitSet",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isBitSet_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_anObject), _tally_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_bytes_1(_anObject), _bytes_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isBitSet & {\n\t\t\tanObject.size = self.tally & {\n\t\t\t\tanObject.bytes = self.bytes\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "add",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
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
        return _ampersand_2(
          _isInteger_1(_anInteger),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_includes_2(_self, _anInteger));
          }, []),
        );
      }, []),
    );
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.assert {\n\t\t\tanInteger.isInteger & {\n\t\t\t\tself.includes(anInteger).not\n\t\t\t}\n\t\t};\n\t\tself.setBitAt(anInteger);\n\t\tanInteger\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ascii = _ByteArray_1(_capacity_1(_self));
    /* Statements */
    _bitsDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_ascii, _plusSign_2(_index, 1), _plusSign_2(48, _each));
      }, ["each", "index"]),
    );
    return _asciiString_1(_ascii);
  }, ["self"]),
  "{ :self |\n\t\tlet ascii = ByteArray(self.capacity);\n\t\tself.bitsDo { :each :index |\n\t\t\tascii[index + 1] := 48 + each\n\t\t};\n\t\tascii.asciiString\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "at",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAt_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.bitAt(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "atPut",
  ["self", "anInteger", "aBit"],
  sl.annotateFunction(function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAtPut_3(_self, _anInteger, _aBit);
  }, ["self", "anInteger", "aBit"]),
  "{ :self :anInteger :aBit |\n\t\tself.bitAtPut(anInteger, aBit)\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitAt",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
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
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet byteIndex = anInteger.bitShift(-3) + 1;\n\t\tlet bitIndex = 0 - anInteger.bitAnd(7);\n\t\tself.bytes[byteIndex].bitShift(bitIndex).bitAnd(1)\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitAtPut",
  ["self", "anInteger", "aBit"],
  sl.annotateFunction(function (_self, _anInteger, _aBit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBit";
      throw new Error(errorMessage);
    } /* Statements */
    _caseOf_2(_aBit, [
      _hyphenMinusGreaterThanSign_2(
        0,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _clearBitAt_2(_self, _anInteger);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _setBitAt_2(_self, _anInteger);
        }, []),
      ),
    ]);
    return _aBit;
  }, ["self", "anInteger", "aBit"]),
  "{ :self :anInteger :aBit |\n\t\taBit.caseOf([\n\t\t\t0 -> { self.clearBitAt(anInteger) },\n\t\t\t1 -> { self.setBitAt(anInteger) }\n\t\t]);\n\t\taBit\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitNot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitsDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _hyphenMinus_2(1, _each));
      }, ["each", "index"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.bitsDo { :each :index |\n\t\t\tself[index] := 1 - each\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "bitsDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _indices_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_at_2(_self, _index), _index);
      }, ["index"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.indices.do { :index |\n\t\t\taBlock(self[index], index)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "clearBitAt",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
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
    return _if_3(
      _equalsSign_2(_newValue, _value),
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
        _atPut_3(_bytes_1(_self), _byteIndex, _newValue);
        _tally_2(_self, _hyphenMinus_2(_tally_1(_self), 1));
        return true;
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet byteIndex = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[byteIndex];\n\t\tlet mask = 1.bitShift(anInteger.bitAnd(7));\n\t\tlet newValue = value.bitOr(mask) - mask;\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[byteIndex] := newValue;\n\t\t\tself.tally := self.tally - 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "complement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _bitNot_1(_answer);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.copy;\n\t\tanswer.bitNot;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remainingBits = _tally_1(_self);
    let _lowBits = _lowBitPerByteTable_1(_system);
    /* Statements */
    return _toDo_3(
      1,
      _size_1(_bytes_1(_self)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(1, _remainingBits),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _byte = _at_2(_bytes_1(_self), _index);
            /* Statements */
            return _ifFalse_2(
              _equalsSign_2(_byte, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _byteOffset = _hyphenMinus_2(_bitShift_2(_index, 3), 9);
                /* Statements */
                return _whileFalse_1(sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _aBlock_1(_plusSign_2(_at_2(_lowBits, _byte), _byteOffset));
                  _remainingBits = _hyphenMinus_2(_remainingBits, 1);
                  _byte = _bitAnd_2(_byte, _hyphenMinus_2(_byte, 1));
                  return _equalsSign_2(_byte, 0);
                }, []));
              }, []),
            );
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
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet remainingBits = self.tally;\n\t\tlet lowBits = system.lowBitPerByteTable;\n\t\t1.toDo(self.bytes.size) { :index |\n\t\t\t(1 <= remainingBits).if {\n\t\t\t\tlet byte = self.bytes[index];\n\t\t\t\t(byte = 0).ifFalse {\n\t\t\t\t\tlet byteOffset = index.bitShift(3) - 9;\n\t\t\t\t\t{\n\t\t\t\t\t\taBlock(lowBits[byte] + byteOffset);\n\t\t\t\t\t\tremainingBits := remainingBits - 1;\n\t\t\t\t\t\tbyte := byte.bitAnd(byte - 1);\n\t\t\t\t\t\tbyte = 0\n\t\t\t\t\t}.whileFalse\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "include",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _setBitAt_2(_self, _anInteger);
    return _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.setBitAt(anInteger);\n\t\tanInteger\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "includes",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_bitAt_2(_self, _anInteger), 1);
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
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.includesIndex(anInteger).if {\n\t\t\tself.bitAt(anInteger) = 1\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "includesIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(0, _anInteger),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_anInteger, _capacity_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isInteger & {\n\t\t\t0 <= anInteger & {\n\t\t\t\tanInteger < self.capacity\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _upOrDownTo_2(0, _hyphenMinus_2(_capacity_1(_self), 1));
  }, ["self"]),
  "{ :self |\n\t\t(0 .. self.capacity - 1)\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_tally_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.tally = 0\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, _anObject),
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
        return 0;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _bytes_2(_self, _copy_1(_bytes_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.bytes := self.bytes.copy\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "removeIfAbsent",
  ["self", "anInteger", "absentBlock:/0"],
  sl.annotateFunction(function (_self, _anInteger, _absentBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _absentBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _clearBitAt_2(_self, _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anInteger;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _absentBlock_0();
      }, []),
    );
  }, ["self", "anInteger", "absentBlock:/0"]),
  "{ :self :anInteger :absentBlock:/0 |\n\t\tself.clearBitAt(anInteger).if {\n\t\t\tanInteger\n\t\t} {\n\t\t\tabsentBlock()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _if_2(
      _greaterThanSign_2(_tally, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atAllPut_2(_bytes_1(_self), 0);
        return _tally_2(_self, 0);
      }, []),
    );
    return _self;
  }, ["self"]),
  "{ :self |\n\t\t(tally > 0).if {\n\t\t\tself.bytes.atAllPut(0);\n\t\t\tself.tally := 0\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "setBitAt",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _plusSign_2(_bitShift_2(_anInteger, -3), 1);
    let _value = _at_2(_bytes_1(_self), _index);
    let _newValue = _bitOr_2(_bitShift_2(1, _bitAnd_2(_anInteger, 7)), _value);
    /* Statements */
    return _if_3(
      _equalsSign_2(_newValue, _value),
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
        _atPut_3(_bytes_1(_self), _index, _newValue);
        _tally_2(_self, _plusSign_2(_tally_1(_self), 1));
        return true;
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet index = anInteger.bitShift(-3) + 1;\n\t\tlet value = self.bytes[index];\n\t\tlet newValue = 1.bitShift(anInteger.bitAnd(7)).bitOr(value);\n\t\t(newValue = value).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.bytes[index] := newValue;\n\t\t\tself.tally := self.tally + 1;\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tally_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.tally\n\t}",
);

sl.addMethodToExistingType(
  "BitSet",
  "BitSet",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\tself.asList.storeString ++ '.asBitSet(' ++ self.capacity ++ ')'\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "BitSet",
  "BitSet",
  ["capacity"],
  sl.annotateFunction(function (_capacity) {
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
  }, ["capacity"]),
  "{ :capacity |\n\t\tlet byteCount = capacity.min(capacity // 8 + 1);\n\t\tnewBitSet().initializeSlots(\n\t\t\tcapacity,\n\t\t\tByteArray(byteCount),\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  sl.annotateFunction(function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _BitSet_1(_capacity);
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  }, ["self", "capacity"]),
  "{ :self :capacity |\n\t\tlet answer = BitSet(capacity);\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "BitSet",
  "asBitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _plusSign_2(_max_1(_self), 1));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet(self.max + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self", "capacity", "elseClause:/0"],
  sl.annotateFunction(function (_self, _capacity, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _capacity, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isBitString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _BitSet_1(_size_1(_self));
        let _ascii = _asciiByteArray_1(_self);
        let _zeroCodePoint = _codePoint_1("0");
        let _oneCodePoint = _codePoint_1("1");
        /* Statements */
        _withIndexDo_2(
          _ascii,
          sl.annotateFunction(function (_each, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_each, _oneCodePoint),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _hyphenMinus_2(_index, 1));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _exclamationMarkEqualsSign_2(_each, _zeroCodePoint),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_2(
                      _self,
                      _plusSignPlusSign_2("asBitSet: not 0 or 1: ", _each),
                    );
                  }, []),
                );
              }, []),
            );
          }, ["each", "index"]),
        );
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
  }, ["self", "capacity", "elseClause:/0"]),
  "{ :self :capacity :elseClause:/0 |\n\t\tself.isBitString.if {\n\t\t\tlet answer = BitSet(self.size);\n\t\t\tlet ascii = self.asciiByteArray;\n\t\t\tlet zeroCodePoint = '0'.codePoint;\n\t\t\tlet oneCodePoint = '1'.codePoint;\n\t\t\tascii.withIndexDo { :each :index |\n\t\t\t\t(each = oneCodePoint).if {\n\t\t\t\t\tanswer.add(index - 1)\n\t\t\t\t} {\n\t\t\t\t\t(each != zeroCodePoint).ifTrue {\n\t\t\t\t\t\tself.error('asBitSet: not 0 or 1: ' ++ each)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  sl.annotateFunction(function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_3(
      _self,
      _capacity,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBitSet: invalid string");
      }, []),
    );
  }, ["self", "capacity"]),
  "{ :self :capacity |\n\t\tself.asBitSet(capacity) {\n\t\t\tself.error('asBitSet: invalid string')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "asBitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet(self.size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "parseBitSet",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_3(_self, _size_1(_self), _elseClause_0);
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.asBitSet(self.size, elseClause:/0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "BitSet",
  "parseBitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet(self.size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self", "capacity"],
  sl.annotateFunction(function (_self, _capacity) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _capacity";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_asterisk_2(_size_1(_self), 8), _capacity),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBitSet: incorrect capacity");
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self", "capacity"]),
  "{ :self :capacity |\n\t\t(self.size * 8 != capacity).if {\n\t\t\tself.error('asBitSet: incorrect capacity')\n\t\t} {\n\t\t\tnewBitSet().initializeSlots(\n\t\t\t\tcapacity,\n\t\t\t\tself,\n\t\t\t\tself.bitCount\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "BitSet",
  "asBitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_self, _asterisk_2(_size_1(_self), 8));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet(self.size * 8)\n\t}",
);
