sl.addType(
  true,
  "ByteArray",
  "ByteArray",
  [
    "Object",
    "Equatable",
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
  "Equatable",
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
  "{ :self |\n\t\t<primitive: return new TextDecoder('ascii').decode(_self);>\n\t}",
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
  "{ :self :anInteger :aByte |\n\t\t<primitive:\n\t\tif(Number.isInteger(_anInteger) && sl.isByte(_aByte)) {\n\t\t\t_self[_anInteger - 1] = _aByte;\n\t\t\treturn _aByte;\n\t\t}>\n\t\tself.error('atPut: index not an integer or value not a byte')\n\t}",
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
  "{ :self |\n\t\tlet map = '0123456789ABCDEF'.asciiByteArray;\n\t\tlet array = ByteArray(self.size * 2);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tarray[index] := map[each.bitShiftRight(4) + 1];\n\t\t\tarray[index + 1] := map[each.bitAnd(15) + 1];\n\t\t\tindex := index + 2\n\t\t};\n\t\tarray.asciiString\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tconst binaryString = Array.from(_self, function(x) {\n\t\t\treturn String.fromCodePoint(x)\n\t\t}).join('');\n\t\treturn btoa(binaryString);\n\t\t>\n\t}",
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
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.do { :each |\n\t\t\tanswer := answer + each.bitCount\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
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
  "{ :self |\n\t\tlet table = [\n\t\t\t16r0000 16rC0C1 16rC181 16r0140 16rC301 16r03C0 16r0280 16rC241\n\t\t\t16rC601 16r06C0 16r0780 16rC741 16r0500 16rC5C1 16rC481 16r0440\n\t\t\t16rCC01 16r0CC0 16r0D80 16rCD41 16r0F00 16rCFC1 16rCE81 16r0E40\n\t\t\t16r0A00 16rCAC1 16rCB81 16r0B40 16rC901 16r09C0 16r0880 16rC841\n\t\t\t16rD801 16r18C0 16r1980 16rD941 16r1B00 16rDBC1 16rDA81 16r1A40\n\t\t\t16r1E00 16rDEC1 16rDF81 16r1F40 16rDD01 16r1DC0 16r1C80 16rDC41\n\t\t\t16r1400 16rD4C1 16rD581 16r1540 16rD701 16r17C0 16r1680 16rD641\n\t\t\t16rD201 16r12C0 16r1380 16rD341 16r1100 16rD1C1 16rD081 16r1040\n\t\t\t16rF001 16r30C0 16r3180 16rF141 16r3300 16rF3C1 16rF281 16r3240\n\t\t\t16r3600 16rF6C1 16rF781 16r3740 16rF501 16r35C0 16r3480 16rF441\n\t\t\t16r3C00 16rFCC1 16rFD81 16r3D40 16rFF01 16r3FC0 16r3E80 16rFE41\n\t\t\t16rFA01 16r3AC0 16r3B80 16rFB41 16r3900 16rF9C1 16rF881 16r3840\n\t\t\t16r2800 16rE8C1 16rE981 16r2940 16rEB01 16r2BC0 16r2A80 16rEA41\n\t\t\t16rEE01 16r2EC0 16r2F80 16rEF41 16r2D00 16rEDC1 16rEC81 16r2C40\n\t\t\t16rE401 16r24C0 16r2580 16rE541 16r2700 16rE7C1 16rE681 16r2640\n\t\t\t16r2200 16rE2C1 16rE381 16r2340 16rE101 16r21C0 16r2080 16rE041\n\t\t\t16rA001 16r60C0 16r6180 16rA141 16r6300 16rA3C1 16rA281 16r6240\n\t\t\t16r6600 16rA6C1 16rA781 16r6740 16rA501 16r65C0 16r6480 16rA441\n\t\t\t16r6C00 16rACC1 16rAD81 16r6D40 16rAF01 16r6FC0 16r6E80 16rAE41\n\t\t\t16rAA01 16r6AC0 16r6B80 16rAB41 16r6900 16rA9C1 16rA881 16r6840\n\t\t\t16r7800 16rB8C1 16rB981 16r7940 16rBB01 16r7BC0 16r7A80 16rBA41\n\t\t\t16rBE01 16r7EC0 16r7F80 16rBF41 16r7D00 16rBDC1 16rBC81 16r7C40\n\t\t\t16rB401 16r74C0 16r7580 16rB541 16r7700 16rB7C1 16rB681 16r7640\n\t\t\t16r7200 16rB2C1 16rB381 16r7340 16rB101 16r71C0 16r7080 16rB041\n\t\t\t16r5000 16r90C1 16r9181 16r5140 16r9301 16r53C0 16r5280 16r9241\n\t\t\t16r9601 16r56C0 16r5780 16r9741 16r5500 16r95C1 16r9481 16r5440\n\t\t\t16r9C01 16r5CC0 16r5D80 16r9D41 16r5F00 16r9FC1 16r9E81 16r5E40\n\t\t\t16r5A00 16r9AC1 16r9B81 16r5B40 16r9901 16r59C0 16r5880 16r9841\n\t\t\t16r8801 16r48C0 16r4980 16r8941 16r4B00 16r8BC1 16r8A81 16r4A40\n\t\t\t16r4E00 16r8EC1 16r8F81 16r4F40 16r8D01 16r4DC0 16r4C80 16r8C41\n\t\t\t16r4400 16r84C1 16r8581 16r4540 16r8701 16r47C0 16r4680 16r8641\n\t\t\t16r8201 16r42C0 16r4380 16r8341 16r4100 16r81C1 16r8081 16r4040\n\t\t];\n\t\tlet crc = 0;\n\t\tself.indicesDo { :index |\n\t\t\tlet octet = self[index];\n\t\t\tlet tableIndex = crc.bitXor(octet).bitAnd(16rFF) + 1;\n\t\t\tcrc := crc.bitShiftRight(8).bitXor(table[tableIndex])\n\t\t};\n\t\tcrc\n\t}",
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
  "{ :self |\n\t\tlet fnvPrime = 16777619L;\n\t\tlet fnvOffsetBasis = 2166136261L;\n\t\tlet hash = fnvOffsetBasis;\n\t\tself.do { :each |\n\t\t\thash := hash.bitXor(each) * fnvPrime;\n\t\t\thash := 16rFFFFFFFF.bitAnd(hash)\n\t\t};\n\t\thash\n\t}",
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
  "{ :self |\n\t\tByteArray:/1\n\t}",
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
  "{ :self |\n\t\t'Byte'\n\t}",
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
  "{ :self |\n\t\t<primitive: return new TextDecoder('utf-8').decode(_self).normalize('NFC');>\n\t}",
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
  "{ :self |\n\t\t<primitive: return new TextDecoder('utf-16').decode(_self).normalize('NFC');>\n\t}",
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
  "{ :self |\n\t\tself.asByteArray.asciiString\n\t}",
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
  "{ :self |\n\t\tself.asByteArray.utf8String\n\t}",
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
  "{ :self |\n\t\t<primitive: return String.fromCodePoint(..._self);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
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
  "{ :self |\n\t\tByteArray(self)\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tByteArray(0)\n\t\t} {\n\t\t\t(\n\t\t\t\tself.isSmallFloatVector & {\n\t\t\t\t\tself.allSatisfy(isByte:/1)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tself.basicByteArray\n\t\t\t} {\n\t\t\t\tself.error('List>>asByteArray: invalid')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.asList.asByteArray\n\t}",
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
  "{ :self |\n\t\tself.parseBase16\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tconst binaryString = atob(_self);\n\t\treturn Uint8Array.from(binaryString, function(m) {\n\t\t\treturn m.codePointAt(0)\n\t\t});\n\t\t>\n\t}",
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
  "{ :self |\n\t\tself.utf8ByteArray.crc16\n\t}",
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
  "{ :self :where |\n\t\t<primitive:\n\t\tfor(let i = 0; i < _self.length; i++) {\n\t\t\t_where[i] = parseInt(_self.substr(i * 2, 2), 16);\n\t\t};\n\t\treturn _where;\n\t\t>\n\t}",
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
  "{ :self |\n\t\tself.base64Decode\n\t}",
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
  "{ :self |\n\t\tself.parseBase16Into(\n\t\t\tByteArray(self.size / 2)\n\t\t)\n\t}",
);
