sl.addType(
  true,
  "ByteArray",
  "ByteArray",
  [
    "Object",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
    "PrimitiveSequence",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "Collection",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "PrimitiveSequence",
  "ByteArray",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "asciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new TextDecoder("ascii").decode(_self);
  }, ["self"]),
  "{ :self | <primitive: return new TextDecoder('ascii').decode(_self);>\n }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "atPut",
  ["self", "anInteger", "aByte"],
  sl.annotateFunction(function (_self, _anInteger, _aByte) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aByte";
      throw new Error(errorMessage);
    } /* Primitive */
    if (Number.isInteger(_anInteger) && sl.isByte(_aByte)) {
      _self[_anInteger - 1] = _aByte;
      return _aByte;
    }
    /* Statements */
    return _error_2(_self, "atPut: index not an integer or value not a byte");
  }, ["self", "anInteger", "aByte"]),
  "{ :self :anInteger :aByte | <primitive: if(Number.isInteger(_anInteger) && sl.isByte(_aByte)) {\n\t\t\t_self[_anInteger - 1] = _aByte;\n\t\t\treturn _aByte;\n\t\t}>\nerror(self,'atPut: index not an integer or value not a byte') }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "base16Encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _map = _asciiByteArray_1("0123456789ABCDEF");
    let _array = _ByteArray_1(_asterisk_2(_size_1(_self), 2));
    let _index = 1;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(
          _array,
          _index,
          _at_2(_map, _plusSign_2(_bitShiftRight_2(_each, 4), 1)),
        );
        _atPut_3(
          _array,
          _plusSign_2(_index, 1),
          _at_2(_map, _plusSign_2(_bitAnd_2(_each, 15), 1)),
        );
        return _index = _plusSign_2(_index, 2);
      }, ["each"]),
    );
    return _asciiString_1(_array);
  }, ["self"]),
  "{ :self | let map = asciiByteArray('0123456789ABCDEF'); let array = ByteArray(*(size(self), 2)); let index = 1; do(self, { :each | atPut(array, index, at(map, +(bitShiftRight(each,4), 1))); atPut(array, +(index, 1), at(map, +(bitAnd(each,15), 1))); index := +(index, 2) }); asciiString(array) }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "base64Encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const binaryString = Array.from(_self, function (x) {
      return String.fromCodePoint(x);
    }).join("");
    return btoa(binaryString);
  }, ["self"]),
  "{ :self | <primitive: const binaryString = Array.from(_self, function(x) {\n\t\t\treturn String.fromCodePoint(x)\n\t\t}).join('');\n\t\treturn btoa(binaryString);>\n }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "bitCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, _bitCount_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = 0; do(self, { :each | answer := +(answer, bitCount(each)) }); answer }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "crc16",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = [
      0,
      49345,
      49537,
      320,
      49921,
      960,
      640,
      49729,
      50689,
      1728,
      1920,
      51009,
      1280,
      50625,
      50305,
      1088,
      52225,
      3264,
      3456,
      52545,
      3840,
      53185,
      52865,
      3648,
      2560,
      51905,
      52097,
      2880,
      51457,
      2496,
      2176,
      51265,
      55297,
      6336,
      6528,
      55617,
      6912,
      56257,
      55937,
      6720,
      7680,
      57025,
      57217,
      8000,
      56577,
      7616,
      7296,
      56385,
      5120,
      54465,
      54657,
      5440,
      55041,
      6080,
      5760,
      54849,
      53761,
      4800,
      4992,
      54081,
      4352,
      53697,
      53377,
      4160,
      61441,
      12480,
      12672,
      61761,
      13056,
      62401,
      62081,
      12864,
      13824,
      63169,
      63361,
      14144,
      62721,
      13760,
      13440,
      62529,
      15360,
      64705,
      64897,
      15680,
      65281,
      16320,
      16000,
      65089,
      64001,
      15040,
      15232,
      64321,
      14592,
      63937,
      63617,
      14400,
      10240,
      59585,
      59777,
      10560,
      60161,
      11200,
      10880,
      59969,
      60929,
      11968,
      12160,
      61249,
      11520,
      60865,
      60545,
      11328,
      58369,
      9408,
      9600,
      58689,
      9984,
      59329,
      59009,
      9792,
      8704,
      58049,
      58241,
      9024,
      57601,
      8640,
      8320,
      57409,
      40961,
      24768,
      24960,
      41281,
      25344,
      41921,
      41601,
      25152,
      26112,
      42689,
      42881,
      26432,
      42241,
      26048,
      25728,
      42049,
      27648,
      44225,
      44417,
      27968,
      44801,
      28608,
      28288,
      44609,
      43521,
      27328,
      27520,
      43841,
      26880,
      43457,
      43137,
      26688,
      30720,
      47297,
      47489,
      31040,
      47873,
      31680,
      31360,
      47681,
      48641,
      32448,
      32640,
      48961,
      32000,
      48577,
      48257,
      31808,
      46081,
      29888,
      30080,
      46401,
      30464,
      47041,
      46721,
      30272,
      29184,
      45761,
      45953,
      29504,
      45313,
      29120,
      28800,
      45121,
      20480,
      37057,
      37249,
      20800,
      37633,
      21440,
      21120,
      37441,
      38401,
      22208,
      22400,
      38721,
      21760,
      38337,
      38017,
      21568,
      39937,
      23744,
      23936,
      40257,
      24320,
      40897,
      40577,
      24128,
      23040,
      39617,
      39809,
      23360,
      39169,
      22976,
      22656,
      38977,
      34817,
      18624,
      18816,
      35137,
      19200,
      35777,
      35457,
      19008,
      19968,
      36545,
      36737,
      20288,
      36097,
      19904,
      19584,
      35905,
      17408,
      33985,
      34177,
      17728,
      34561,
      18368,
      18048,
      34369,
      33281,
      17088,
      17280,
      33601,
      16640,
      33217,
      32897,
      16448,
    ];
    let _crc = 0;
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _octet = _at_2(_self, _index);
        let _tableIndex = _plusSign_2(
          _bitAnd_2(_bitXor_2(_crc, _octet), 255),
          1,
        );
        /* Statements */
        return _crc = _bitXor_2(
          _bitShiftRight_2(_crc, 8),
          _at_2(_table, _tableIndex),
        );
      }, ["index"]),
    );
    return _crc;
  }, ["self"]),
  "{ :self | let table = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8000, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16000, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32000, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448]; let crc = 0; indicesDo(self, { :index | let octet = at(self, index); let tableIndex = +(bitAnd(bitXor(crc,octet),255), 1); crc := bitXor(bitShiftRight(crc,8),at(table, tableIndex)) }); crc }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "fnv1aHash",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fnvPrime = 16777619n;
    let _fnvOffsetBasis = 2166136261n;
    let _hash = _fnvOffsetBasis;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _hash = _asterisk_2(_bitXor_2(_hash, _each), _fnvPrime);
        return _hash = _bitAnd_2(4294967295, _hash);
      }, ["each"]),
    );
    return _hash;
  }, ["self"]),
  "{ :self | let fnvPrime = 16777619L; let fnvOffsetBasis = 2166136261L; let hash = fnvOffsetBasis; do(self, { :each | hash := *(bitXor(hash,each), fnvPrime); hash := bitAnd(4294967295,hash) }); hash }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Uint8Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ByteArray_1;
  }, ["self"]),
  "{ :self | ByteArray:/1 }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "storageType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Byte";
  }, ["self"]),
  "{ :self | 'Byte' }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "utf8String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new TextDecoder("utf-8").decode(_self).normalize("NFC");
  }, ["self"]),
  "{ :self | <primitive: return new TextDecoder('utf-8').decode(_self).normalize('NFC');>\n }",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "utf16String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new TextDecoder("utf-16").decode(_self).normalize("NFC");
  }, ["self"]),
  "{ :self | <primitive: return new TextDecoder('utf-16').decode(_self).normalize('NFC');>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "asciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asciiString_1(_asByteArray_1(_self));
  }, ["self"]),
  "{ :self | asciiString(asByteArray(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "utf8String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _utf8String_1(_asByteArray_1(_self));
  }, ["self"]),
  "{ :self | utf8String(asByteArray(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "utf16String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return String.fromCodePoint(..._self);
  }, ["self"]),
  "{ :self | <primitive: return String.fromCodePoint(..._self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ByteArray",
  "ByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Uint8Array(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "asByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ByteArray_1(_self);
  }, ["self"]),
  "{ :self | ByteArray(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "basicByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Uint8Array(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "ByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _ByteArray_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _isSmallFloatVector_1(_self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _allSatisfy_2(_self, _isByte_1);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _basicByteArray_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>asByteArray: invalid");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { ByteArray(0) }, { if((&(isSmallFloatVector(self), { allSatisfy(self,isByte:/1) })), { basicByteArray(self) }, { error(self,'List>>asByteArray: invalid') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@ArithmeticProgression",
  "ByteArray",
  "asByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asByteArray_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | asByteArray(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "base16Decode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseBase16_1(_self);
  }, ["self"]),
  "{ :self | parseBase16(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "base64Decode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const binaryString = atob(_self);
    return Uint8Array.from(binaryString, function (m) {
      return m.codePointAt(0);
    });
  }, ["self"]),
  "{ :self | <primitive: const binaryString = atob(_self);\n\t\treturn Uint8Array.from(binaryString, function(m) {\n\t\t\treturn m.codePointAt(0)\n\t\t});>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "crc16",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _crc16_1(_utf8ByteArray_1(_self));
  }, ["self"]),
  "{ :self | crc16(utf8ByteArray(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "parseBase16Into",
  ["self", "where"],
  sl.annotateFunction(function (_self, _where) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _where";
      throw new Error(errorMessage);
    } /* Primitive */
    for (let i = 0; i < _self.length; i++) {
      _where[i] = parseInt(_self.substr(i * 2, 2), 16);
    }
    return _where;
  }, ["self", "where"]),
  "{ :self :where | <primitive: for(let i = 0; i < _self.length; i++) {\n\t\t\t_where[i] = parseInt(_self.substr(i * 2, 2), 16);\n\t\t};\n\t\treturn _where;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "parseBase64",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _base64Decode_1(_self);
  }, ["self"]),
  "{ :self | base64Decode(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "parseBase16",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseBase16Into_2(
      _self,
      _ByteArray_1(_solidus_2(_size_1(_self), 2)),
    );
  }, ["self"]),
  "{ :self | parseBase16Into(self,ByteArray(/(size(self), 2))) }",
);
