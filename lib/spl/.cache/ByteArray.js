sl.addType(
  true,
  "ByteArray",
  "ByteArray",
  [
    "@Object",
    "@New",
    "@Copy",
    "@Store",
    "@Equal",
    "@Compare",
    "@Do",
    "@At",
    "@Indices",
    "@Put",
    "@Collect",
    "@Collection",
    "@Sequence",
    "@PrimitiveArray",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "@Object",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@New",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Store",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Compare",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Do",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@At",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Indices",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Put",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Collect",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Collection",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@Sequence",
  "ByteArray",
);

sl.copyTraitMethodsToType(
  "@PrimitiveArray",
  "ByteArray",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "String",
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
  "base16Encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _map = _asciiByteArray_1("0123456789ABCDEF");
    let _array = _ByteArray_2(_asterisk_2(_size_1(_self), 2), 0);
    let _index = 1;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _putInPlace_3(
          _array,
          _index,
          _at_2(_map, _plusSign_2(_bitShiftRight_2(_each, 4), 1)),
        );
        _putInPlace_3(
          _array,
          _plusSign_2(_index, 1),
          _at_2(_map, _plusSign_2(_bitAnd_2(_each, 15), 1)),
        );
        return _index = _plusSign_2(_index, 2);
      }, ["each"]),
    );
    return _asciiString_1(_array);
  }, ["self"]),
  "{ :self |\n\t\tlet map = '0123456789ABCDEF'.asciiByteArray;\n\t\tlet array = ByteArray(self.size * 2, 0);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tarray[index] := map[each.bitShiftRight(4) + 1];\n\t\t\tarray[index + 1] := map[each.bitAnd(15) + 1];\n\t\t\tindex := index + 2\n\t\t};\n\t\tarray.asciiString\n\t}",
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
    } /* Statements */
    let _answer = 0;
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
  "crc16",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
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
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        let _octet = _at_2(_self, _index);
        let _tableIndex = _plusSign_2(
          _bitAnd_2(_bitXor_2(_crc, _octet), 255),
          1,
        );
        return _crc = _bitXor_2(
          _bitShiftRight_2(_crc, 8),
          _at_2(_table, _tableIndex),
        );
      }, ["index"]),
    );
    return _crc;
  }, ["self"]),
  "{ :self |\n\t\tlet table = [\n\t\t\t16b0000 16bC0C1 16bC181 16b0140 16bC301 16b03C0 16b0280 16bC241\n\t\t\t16bC601 16b06C0 16b0780 16bC741 16b0500 16bC5C1 16bC481 16b0440\n\t\t\t16bCC01 16b0CC0 16b0D80 16bCD41 16b0F00 16bCFC1 16bCE81 16b0E40\n\t\t\t16b0A00 16bCAC1 16bCB81 16b0B40 16bC901 16b09C0 16b0880 16bC841\n\t\t\t16bD801 16b18C0 16b1980 16bD941 16b1B00 16bDBC1 16bDA81 16b1A40\n\t\t\t16b1E00 16bDEC1 16bDF81 16b1F40 16bDD01 16b1DC0 16b1C80 16bDC41\n\t\t\t16b1400 16bD4C1 16bD581 16b1540 16bD701 16b17C0 16b1680 16bD641\n\t\t\t16bD201 16b12C0 16b1380 16bD341 16b1100 16bD1C1 16bD081 16b1040\n\t\t\t16bF001 16b30C0 16b3180 16bF141 16b3300 16bF3C1 16bF281 16b3240\n\t\t\t16b3600 16bF6C1 16bF781 16b3740 16bF501 16b35C0 16b3480 16bF441\n\t\t\t16b3C00 16bFCC1 16bFD81 16b3D40 16bFF01 16b3FC0 16b3E80 16bFE41\n\t\t\t16bFA01 16b3AC0 16b3B80 16bFB41 16b3900 16bF9C1 16bF881 16b3840\n\t\t\t16b2800 16bE8C1 16bE981 16b2940 16bEB01 16b2BC0 16b2A80 16bEA41\n\t\t\t16bEE01 16b2EC0 16b2F80 16bEF41 16b2D00 16bEDC1 16bEC81 16b2C40\n\t\t\t16bE401 16b24C0 16b2580 16bE541 16b2700 16bE7C1 16bE681 16b2640\n\t\t\t16b2200 16bE2C1 16bE381 16b2340 16bE101 16b21C0 16b2080 16bE041\n\t\t\t16bA001 16b60C0 16b6180 16bA141 16b6300 16bA3C1 16bA281 16b6240\n\t\t\t16b6600 16bA6C1 16bA781 16b6740 16bA501 16b65C0 16b6480 16bA441\n\t\t\t16b6C00 16bACC1 16bAD81 16b6D40 16bAF01 16b6FC0 16b6E80 16bAE41\n\t\t\t16bAA01 16b6AC0 16b6B80 16bAB41 16b6900 16bA9C1 16bA881 16b6840\n\t\t\t16b7800 16bB8C1 16bB981 16b7940 16bBB01 16b7BC0 16b7A80 16bBA41\n\t\t\t16bBE01 16b7EC0 16b7F80 16bBF41 16b7D00 16bBDC1 16bBC81 16b7C40\n\t\t\t16bB401 16b74C0 16b7580 16bB541 16b7700 16bB7C1 16bB681 16b7640\n\t\t\t16b7200 16bB2C1 16bB381 16b7340 16bB101 16b71C0 16b7080 16bB041\n\t\t\t16b5000 16b90C1 16b9181 16b5140 16b9301 16b53C0 16b5280 16b9241\n\t\t\t16b9601 16b56C0 16b5780 16b9741 16b5500 16b95C1 16b9481 16b5440\n\t\t\t16b9C01 16b5CC0 16b5D80 16b9D41 16b5F00 16b9FC1 16b9E81 16b5E40\n\t\t\t16b5A00 16b9AC1 16b9B81 16b5B40 16b9901 16b59C0 16b5880 16b9841\n\t\t\t16b8801 16b48C0 16b4980 16b8941 16b4B00 16b8BC1 16b8A81 16b4A40\n\t\t\t16b4E00 16b8EC1 16b8F81 16b4F40 16b8D01 16b4DC0 16b4C80 16b8C41\n\t\t\t16b4400 16b84C1 16b8581 16b4540 16b8701 16b47C0 16b4680 16b8641\n\t\t\t16b8201 16b42C0 16b4380 16b8341 16b4100 16b81C1 16b8081 16b4040\n\t\t];\n\t\tlet crc = 0;\n\t\tself.indicesDo { :index |\n\t\t\tlet octet = self[index];\n\t\t\tlet tableIndex = crc.bitXor(octet).bitAnd(16bFF) + 1;\n\t\t\tcrc := crc.bitShiftRight(8).bitXor(table[tableIndex])\n\t\t};\n\t\tcrc\n\t}",
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
    } /* Statements */
    let _fnvPrime = 16777619n;
    let _fnvOffsetBasis = 2166136261n;
    let _hash = _fnvOffsetBasis;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _hash = _asterisk_2(_bitXor_2(_hash, _each), _fnvPrime);
        return _hash = _bitAnd_2(4294967295n, _hash);
      }, ["each"]),
    );
    return _normalInteger_1(_hash);
  }, ["self"]),
  "{ :self |\n\t\tlet fnvPrime = 16777619L; /* 16b01000193 */\n\t\tlet fnvOffsetBasis = 2166136261L; /* 16b811C9DC5 */\n\t\tlet hash = fnvOffsetBasis;\n\t\tself.do { :each |\n\t\t\thash := hash.bitXor(each) * fnvPrime;\n\t\t\thash := 4294967295L.bitAnd(hash) /* 16bFFFFFFFF */\n\t\t};\n\t\thash.normalInteger\n\t}",
);

sl.addMethodToExistingType(
  "ByteArray",
  "ByteArray",
  "putInPlace",
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
    return _error_2(_self, "put!: index not an integer or value not a byte");
  }, ["self", "anInteger", "aByte"]),
  "{ :self :anInteger :aByte |\n\t\t<primitive:\n\t\tif(Number.isInteger(_anInteger) && sl.isByte(_aByte)) {\n\t\t\t_self[_anInteger - 1] = _aByte;\n\t\t\treturn _aByte;\n\t\t}>\n\t\tself.error('put!: index not an integer or value not a byte')\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
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
    return _zeroByteArray_1;
  }, ["self"]),
  "{ :self |\n\t\tzeroByteArray/1\n\t}",
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
    return _asciiString_1(_ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self).asciiString\n\t}",
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
    return _utf8String_1(_ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self).utf8String\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ByteArray",
  "ByteArray",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isByte_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_3(_n, "ByteArray", [_x]);
      }, []),
    );
    return _uncheckedByteArray_2(_n, _x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\tx.isByte.ifFalse {\n\t\t\tn.error('ByteArray', [x])\n\t\t};\n\t\tuncheckedByteArray(n, x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ByteArray",
  "constantByteArray",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isByte_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_3(_n, "ByteArray", [_x]);
      }, []),
    );
    return _uncheckedByteArray_2(_n, _x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\tx.isByte.ifFalse {\n\t\t\tn.error('ByteArray', [x])\n\t\t};\n\t\tuncheckedByteArray(n, x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ByteArray",
  "uncheckedByteArray",
  ["self", "aByte"],
  sl.annotateFunction(function (_self, _aByte) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aByte";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self).fill(_aByte);
  }, ["self", "aByte"]),
  "{ :self :aByte |\n\t\t<primitive: return new Uint8Array(_self).fill(_aByte);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ByteArray",
  "zeroByteArray",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ByteArray_2(_n, 0);
  }, ["n"]),
  "{ :n |\n\t\tByteArray(n, 0)\n\t}",
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
        return _ByteArray_2(0, 0);
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
            return _uncheckedByteArray_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>ByteArray: invalid");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tByteArray(0, 0)\n\t\t} {\n\t\t\t(\n\t\t\t\tself.isSmallFloatVector & {\n\t\t\t\t\tself.allSatisfy(isByte/1)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tself.uncheckedByteArray\n\t\t\t} {\n\t\t\t\tself.error('List>>ByteArray: invalid')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "listToByteArray",
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
        return _ByteArray_2(0, 0);
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
            return _uncheckedByteArray_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>ByteArray: invalid");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tByteArray(0, 0)\n\t\t} {\n\t\t\t(\n\t\t\t\tself.isSmallFloatVector & {\n\t\t\t\t\tself.allSatisfy(isByte/1)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tself.uncheckedByteArray\n\t\t\t} {\n\t\t\t\tself.error('List>>ByteArray: invalid')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ByteArray",
  "uncheckedByteArray",
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
  "@ArithmeticProgression",
  "ByteArray",
  "ByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ByteArray_1(_List_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self.List)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@ArithmeticProgression",
  "ByteArray",
  "arithmeticProgressionToByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ByteArray_1(_List_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self.List)\n\t}",
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
    return _base16DecodeInto_2(
      _self,
      _ByteArray_2(_solidus_2(_size_1(_self), 2), 0),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.base16DecodeInto(\n\t\t\tByteArray(self.size / 2, 0)\n\t\t)\n\t}",
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
    return _base16DecodeInto_2(
      _self,
      _ByteArray_2(_solidus_2(_size_1(_self), 2), 0),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.base16DecodeInto(\n\t\t\tByteArray(self.size / 2, 0)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ByteArray",
  "base16DecodeInto",
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
  "parseBase64",
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
