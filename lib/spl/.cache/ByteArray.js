sl.addType(
  true,
  "ByteArray",
  "ByteArray",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequence",
    "PrimitiveSequence",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "ByteArray",
);

sl.copyTraitToType(
  "Iterable",
  "ByteArray",
);

sl.copyTraitToType(
  "Indexable",
  "ByteArray",
);

sl.copyTraitToType(
  "Collection",
  "ByteArray",
);

sl.copyTraitToType(
  "Sequence",
  "ByteArray",
);

sl.copyTraitToType(
  "PrimitiveSequence",
  "ByteArray",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "asciiString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new TextDecoder("ascii").decode(_self);
  },
  "{ :self |\n\t\t<primitive: return new TextDecoder('ascii').decode(_self);>\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "atPut",
  ["self", "anInteger", "aByte"],
  function (_self, _anInteger, _aByte) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aByte";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (Number.isInteger(_anInteger) && sl.isByte(_aByte)) {
      _self[_anInteger - 1] = _aByte;
      return _aByte;
    }
    /* Statements */
    return _error_2(_self, "atPut: index not an integer or value not a byte");
  },
  "{ :self :anInteger :aByte |\n\t\t<primitive:\n\t\tif(Number.isInteger(_anInteger) && sl.isByte(_aByte)) {\n\t\t\t_self[_anInteger - 1] = _aByte;\n\t\t\treturn _aByte;\n\t\t}>\n\t\tself.error('atPut: index not an integer or value not a byte')\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "base64Encoded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    const binString = Array.from(_self, function (x) {
      return String.fromCodePoint(x);
    }).join("");
    return btoa(binString);
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst binString = Array.from(_self, function(x) {\n\t\t\treturn String.fromCodePoint(x)\n\t\t}).join('');\n\t\treturn btoa(binString);\n\t\t>\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "crc16",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _table = [
      _assertIsSmallInteger_1(parseInt("0000", 16)),
      _assertIsSmallInteger_1(parseInt("C0C1", 16)),
      _assertIsSmallInteger_1(parseInt("C181", 16)),
      _assertIsSmallInteger_1(parseInt("0140", 16)),
      _assertIsSmallInteger_1(parseInt("C301", 16)),
      _assertIsSmallInteger_1(parseInt("03C0", 16)),
      _assertIsSmallInteger_1(parseInt("0280", 16)),
      _assertIsSmallInteger_1(parseInt("C241", 16)),
      _assertIsSmallInteger_1(parseInt("C601", 16)),
      _assertIsSmallInteger_1(parseInt("06C0", 16)),
      _assertIsSmallInteger_1(parseInt("0780", 16)),
      _assertIsSmallInteger_1(parseInt("C741", 16)),
      _assertIsSmallInteger_1(parseInt("0500", 16)),
      _assertIsSmallInteger_1(parseInt("C5C1", 16)),
      _assertIsSmallInteger_1(parseInt("C481", 16)),
      _assertIsSmallInteger_1(parseInt("0440", 16)),
      _assertIsSmallInteger_1(parseInt("CC01", 16)),
      _assertIsSmallInteger_1(parseInt("0CC0", 16)),
      _assertIsSmallInteger_1(parseInt("0D80", 16)),
      _assertIsSmallInteger_1(parseInt("CD41", 16)),
      _assertIsSmallInteger_1(parseInt("0F00", 16)),
      _assertIsSmallInteger_1(parseInt("CFC1", 16)),
      _assertIsSmallInteger_1(parseInt("CE81", 16)),
      _assertIsSmallInteger_1(parseInt("0E40", 16)),
      _assertIsSmallInteger_1(parseInt("0A00", 16)),
      _assertIsSmallInteger_1(parseInt("CAC1", 16)),
      _assertIsSmallInteger_1(parseInt("CB81", 16)),
      _assertIsSmallInteger_1(parseInt("0B40", 16)),
      _assertIsSmallInteger_1(parseInt("C901", 16)),
      _assertIsSmallInteger_1(parseInt("09C0", 16)),
      _assertIsSmallInteger_1(parseInt("0880", 16)),
      _assertIsSmallInteger_1(parseInt("C841", 16)),
      _assertIsSmallInteger_1(parseInt("D801", 16)),
      _assertIsSmallInteger_1(parseInt("18C0", 16)),
      _assertIsSmallInteger_1(parseInt("1980", 16)),
      _assertIsSmallInteger_1(parseInt("D941", 16)),
      _assertIsSmallInteger_1(parseInt("1B00", 16)),
      _assertIsSmallInteger_1(parseInt("DBC1", 16)),
      _assertIsSmallInteger_1(parseInt("DA81", 16)),
      _assertIsSmallInteger_1(parseInt("1A40", 16)),
      _assertIsSmallInteger_1(parseInt("1E00", 16)),
      _assertIsSmallInteger_1(parseInt("DEC1", 16)),
      _assertIsSmallInteger_1(parseInt("DF81", 16)),
      _assertIsSmallInteger_1(parseInt("1F40", 16)),
      _assertIsSmallInteger_1(parseInt("DD01", 16)),
      _assertIsSmallInteger_1(parseInt("1DC0", 16)),
      _assertIsSmallInteger_1(parseInt("1C80", 16)),
      _assertIsSmallInteger_1(parseInt("DC41", 16)),
      _assertIsSmallInteger_1(parseInt("1400", 16)),
      _assertIsSmallInteger_1(parseInt("D4C1", 16)),
      _assertIsSmallInteger_1(parseInt("D581", 16)),
      _assertIsSmallInteger_1(parseInt("1540", 16)),
      _assertIsSmallInteger_1(parseInt("D701", 16)),
      _assertIsSmallInteger_1(parseInt("17C0", 16)),
      _assertIsSmallInteger_1(parseInt("1680", 16)),
      _assertIsSmallInteger_1(parseInt("D641", 16)),
      _assertIsSmallInteger_1(parseInt("D201", 16)),
      _assertIsSmallInteger_1(parseInt("12C0", 16)),
      _assertIsSmallInteger_1(parseInt("1380", 16)),
      _assertIsSmallInteger_1(parseInt("D341", 16)),
      _assertIsSmallInteger_1(parseInt("1100", 16)),
      _assertIsSmallInteger_1(parseInt("D1C1", 16)),
      _assertIsSmallInteger_1(parseInt("D081", 16)),
      _assertIsSmallInteger_1(parseInt("1040", 16)),
      _assertIsSmallInteger_1(parseInt("F001", 16)),
      _assertIsSmallInteger_1(parseInt("30C0", 16)),
      _assertIsSmallInteger_1(parseInt("3180", 16)),
      _assertIsSmallInteger_1(parseInt("F141", 16)),
      _assertIsSmallInteger_1(parseInt("3300", 16)),
      _assertIsSmallInteger_1(parseInt("F3C1", 16)),
      _assertIsSmallInteger_1(parseInt("F281", 16)),
      _assertIsSmallInteger_1(parseInt("3240", 16)),
      _assertIsSmallInteger_1(parseInt("3600", 16)),
      _assertIsSmallInteger_1(parseInt("F6C1", 16)),
      _assertIsSmallInteger_1(parseInt("F781", 16)),
      _assertIsSmallInteger_1(parseInt("3740", 16)),
      _assertIsSmallInteger_1(parseInt("F501", 16)),
      _assertIsSmallInteger_1(parseInt("35C0", 16)),
      _assertIsSmallInteger_1(parseInt("3480", 16)),
      _assertIsSmallInteger_1(parseInt("F441", 16)),
      _assertIsSmallInteger_1(parseInt("3C00", 16)),
      _assertIsSmallInteger_1(parseInt("FCC1", 16)),
      _assertIsSmallInteger_1(parseInt("FD81", 16)),
      _assertIsSmallInteger_1(parseInt("3D40", 16)),
      _assertIsSmallInteger_1(parseInt("FF01", 16)),
      _assertIsSmallInteger_1(parseInt("3FC0", 16)),
      _assertIsSmallInteger_1(parseInt("3E80", 16)),
      _assertIsSmallInteger_1(parseInt("FE41", 16)),
      _assertIsSmallInteger_1(parseInt("FA01", 16)),
      _assertIsSmallInteger_1(parseInt("3AC0", 16)),
      _assertIsSmallInteger_1(parseInt("3B80", 16)),
      _assertIsSmallInteger_1(parseInt("FB41", 16)),
      _assertIsSmallInteger_1(parseInt("3900", 16)),
      _assertIsSmallInteger_1(parseInt("F9C1", 16)),
      _assertIsSmallInteger_1(parseInt("F881", 16)),
      _assertIsSmallInteger_1(parseInt("3840", 16)),
      _assertIsSmallInteger_1(parseInt("2800", 16)),
      _assertIsSmallInteger_1(parseInt("E8C1", 16)),
      _assertIsSmallInteger_1(parseInt("E981", 16)),
      _assertIsSmallInteger_1(parseInt("2940", 16)),
      _assertIsSmallInteger_1(parseInt("EB01", 16)),
      _assertIsSmallInteger_1(parseInt("2BC0", 16)),
      _assertIsSmallInteger_1(parseInt("2A80", 16)),
      _assertIsSmallInteger_1(parseInt("EA41", 16)),
      _assertIsSmallInteger_1(parseInt("EE01", 16)),
      _assertIsSmallInteger_1(parseInt("2EC0", 16)),
      _assertIsSmallInteger_1(parseInt("2F80", 16)),
      _assertIsSmallInteger_1(parseInt("EF41", 16)),
      _assertIsSmallInteger_1(parseInt("2D00", 16)),
      _assertIsSmallInteger_1(parseInt("EDC1", 16)),
      _assertIsSmallInteger_1(parseInt("EC81", 16)),
      _assertIsSmallInteger_1(parseInt("2C40", 16)),
      _assertIsSmallInteger_1(parseInt("E401", 16)),
      _assertIsSmallInteger_1(parseInt("24C0", 16)),
      _assertIsSmallInteger_1(parseInt("2580", 16)),
      _assertIsSmallInteger_1(parseInt("E541", 16)),
      _assertIsSmallInteger_1(parseInt("2700", 16)),
      _assertIsSmallInteger_1(parseInt("E7C1", 16)),
      _assertIsSmallInteger_1(parseInt("E681", 16)),
      _assertIsSmallInteger_1(parseInt("2640", 16)),
      _assertIsSmallInteger_1(parseInt("2200", 16)),
      _assertIsSmallInteger_1(parseInt("E2C1", 16)),
      _assertIsSmallInteger_1(parseInt("E381", 16)),
      _assertIsSmallInteger_1(parseInt("2340", 16)),
      _assertIsSmallInteger_1(parseInt("E101", 16)),
      _assertIsSmallInteger_1(parseInt("21C0", 16)),
      _assertIsSmallInteger_1(parseInt("2080", 16)),
      _assertIsSmallInteger_1(parseInt("E041", 16)),
      _assertIsSmallInteger_1(parseInt("A001", 16)),
      _assertIsSmallInteger_1(parseInt("60C0", 16)),
      _assertIsSmallInteger_1(parseInt("6180", 16)),
      _assertIsSmallInteger_1(parseInt("A141", 16)),
      _assertIsSmallInteger_1(parseInt("6300", 16)),
      _assertIsSmallInteger_1(parseInt("A3C1", 16)),
      _assertIsSmallInteger_1(parseInt("A281", 16)),
      _assertIsSmallInteger_1(parseInt("6240", 16)),
      _assertIsSmallInteger_1(parseInt("6600", 16)),
      _assertIsSmallInteger_1(parseInt("A6C1", 16)),
      _assertIsSmallInteger_1(parseInt("A781", 16)),
      _assertIsSmallInteger_1(parseInt("6740", 16)),
      _assertIsSmallInteger_1(parseInt("A501", 16)),
      _assertIsSmallInteger_1(parseInt("65C0", 16)),
      _assertIsSmallInteger_1(parseInt("6480", 16)),
      _assertIsSmallInteger_1(parseInt("A441", 16)),
      _assertIsSmallInteger_1(parseInt("6C00", 16)),
      _assertIsSmallInteger_1(parseInt("ACC1", 16)),
      _assertIsSmallInteger_1(parseInt("AD81", 16)),
      _assertIsSmallInteger_1(parseInt("6D40", 16)),
      _assertIsSmallInteger_1(parseInt("AF01", 16)),
      _assertIsSmallInteger_1(parseInt("6FC0", 16)),
      _assertIsSmallInteger_1(parseInt("6E80", 16)),
      _assertIsSmallInteger_1(parseInt("AE41", 16)),
      _assertIsSmallInteger_1(parseInt("AA01", 16)),
      _assertIsSmallInteger_1(parseInt("6AC0", 16)),
      _assertIsSmallInteger_1(parseInt("6B80", 16)),
      _assertIsSmallInteger_1(parseInt("AB41", 16)),
      _assertIsSmallInteger_1(parseInt("6900", 16)),
      _assertIsSmallInteger_1(parseInt("A9C1", 16)),
      _assertIsSmallInteger_1(parseInt("A881", 16)),
      _assertIsSmallInteger_1(parseInt("6840", 16)),
      _assertIsSmallInteger_1(parseInt("7800", 16)),
      _assertIsSmallInteger_1(parseInt("B8C1", 16)),
      _assertIsSmallInteger_1(parseInt("B981", 16)),
      _assertIsSmallInteger_1(parseInt("7940", 16)),
      _assertIsSmallInteger_1(parseInt("BB01", 16)),
      _assertIsSmallInteger_1(parseInt("7BC0", 16)),
      _assertIsSmallInteger_1(parseInt("7A80", 16)),
      _assertIsSmallInteger_1(parseInt("BA41", 16)),
      _assertIsSmallInteger_1(parseInt("BE01", 16)),
      _assertIsSmallInteger_1(parseInt("7EC0", 16)),
      _assertIsSmallInteger_1(parseInt("7F80", 16)),
      _assertIsSmallInteger_1(parseInt("BF41", 16)),
      _assertIsSmallInteger_1(parseInt("7D00", 16)),
      _assertIsSmallInteger_1(parseInt("BDC1", 16)),
      _assertIsSmallInteger_1(parseInt("BC81", 16)),
      _assertIsSmallInteger_1(parseInt("7C40", 16)),
      _assertIsSmallInteger_1(parseInt("B401", 16)),
      _assertIsSmallInteger_1(parseInt("74C0", 16)),
      _assertIsSmallInteger_1(parseInt("7580", 16)),
      _assertIsSmallInteger_1(parseInt("B541", 16)),
      _assertIsSmallInteger_1(parseInt("7700", 16)),
      _assertIsSmallInteger_1(parseInt("B7C1", 16)),
      _assertIsSmallInteger_1(parseInt("B681", 16)),
      _assertIsSmallInteger_1(parseInt("7640", 16)),
      _assertIsSmallInteger_1(parseInt("7200", 16)),
      _assertIsSmallInteger_1(parseInt("B2C1", 16)),
      _assertIsSmallInteger_1(parseInt("B381", 16)),
      _assertIsSmallInteger_1(parseInt("7340", 16)),
      _assertIsSmallInteger_1(parseInt("B101", 16)),
      _assertIsSmallInteger_1(parseInt("71C0", 16)),
      _assertIsSmallInteger_1(parseInt("7080", 16)),
      _assertIsSmallInteger_1(parseInt("B041", 16)),
      _assertIsSmallInteger_1(parseInt("5000", 16)),
      _assertIsSmallInteger_1(parseInt("90C1", 16)),
      _assertIsSmallInteger_1(parseInt("9181", 16)),
      _assertIsSmallInteger_1(parseInt("5140", 16)),
      _assertIsSmallInteger_1(parseInt("9301", 16)),
      _assertIsSmallInteger_1(parseInt("53C0", 16)),
      _assertIsSmallInteger_1(parseInt("5280", 16)),
      _assertIsSmallInteger_1(parseInt("9241", 16)),
      _assertIsSmallInteger_1(parseInt("9601", 16)),
      _assertIsSmallInteger_1(parseInt("56C0", 16)),
      _assertIsSmallInteger_1(parseInt("5780", 16)),
      _assertIsSmallInteger_1(parseInt("9741", 16)),
      _assertIsSmallInteger_1(parseInt("5500", 16)),
      _assertIsSmallInteger_1(parseInt("95C1", 16)),
      _assertIsSmallInteger_1(parseInt("9481", 16)),
      _assertIsSmallInteger_1(parseInt("5440", 16)),
      _assertIsSmallInteger_1(parseInt("9C01", 16)),
      _assertIsSmallInteger_1(parseInt("5CC0", 16)),
      _assertIsSmallInteger_1(parseInt("5D80", 16)),
      _assertIsSmallInteger_1(parseInt("9D41", 16)),
      _assertIsSmallInteger_1(parseInt("5F00", 16)),
      _assertIsSmallInteger_1(parseInt("9FC1", 16)),
      _assertIsSmallInteger_1(parseInt("9E81", 16)),
      _assertIsSmallInteger_1(parseInt("5E40", 16)),
      _assertIsSmallInteger_1(parseInt("5A00", 16)),
      _assertIsSmallInteger_1(parseInt("9AC1", 16)),
      _assertIsSmallInteger_1(parseInt("9B81", 16)),
      _assertIsSmallInteger_1(parseInt("5B40", 16)),
      _assertIsSmallInteger_1(parseInt("9901", 16)),
      _assertIsSmallInteger_1(parseInt("59C0", 16)),
      _assertIsSmallInteger_1(parseInt("5880", 16)),
      _assertIsSmallInteger_1(parseInt("9841", 16)),
      _assertIsSmallInteger_1(parseInt("8801", 16)),
      _assertIsSmallInteger_1(parseInt("48C0", 16)),
      _assertIsSmallInteger_1(parseInt("4980", 16)),
      _assertIsSmallInteger_1(parseInt("8941", 16)),
      _assertIsSmallInteger_1(parseInt("4B00", 16)),
      _assertIsSmallInteger_1(parseInt("8BC1", 16)),
      _assertIsSmallInteger_1(parseInt("8A81", 16)),
      _assertIsSmallInteger_1(parseInt("4A40", 16)),
      _assertIsSmallInteger_1(parseInt("4E00", 16)),
      _assertIsSmallInteger_1(parseInt("8EC1", 16)),
      _assertIsSmallInteger_1(parseInt("8F81", 16)),
      _assertIsSmallInteger_1(parseInt("4F40", 16)),
      _assertIsSmallInteger_1(parseInt("8D01", 16)),
      _assertIsSmallInteger_1(parseInt("4DC0", 16)),
      _assertIsSmallInteger_1(parseInt("4C80", 16)),
      _assertIsSmallInteger_1(parseInt("8C41", 16)),
      _assertIsSmallInteger_1(parseInt("4400", 16)),
      _assertIsSmallInteger_1(parseInt("84C1", 16)),
      _assertIsSmallInteger_1(parseInt("8581", 16)),
      _assertIsSmallInteger_1(parseInt("4540", 16)),
      _assertIsSmallInteger_1(parseInt("8701", 16)),
      _assertIsSmallInteger_1(parseInt("47C0", 16)),
      _assertIsSmallInteger_1(parseInt("4680", 16)),
      _assertIsSmallInteger_1(parseInt("8641", 16)),
      _assertIsSmallInteger_1(parseInt("8201", 16)),
      _assertIsSmallInteger_1(parseInt("42C0", 16)),
      _assertIsSmallInteger_1(parseInt("4380", 16)),
      _assertIsSmallInteger_1(parseInt("8341", 16)),
      _assertIsSmallInteger_1(parseInt("4100", 16)),
      _assertIsSmallInteger_1(parseInt("81C1", 16)),
      _assertIsSmallInteger_1(parseInt("8081", 16)),
      _assertIsSmallInteger_1(parseInt("4040", 16)),
    ];
    let _crc = 0;
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _octet = _at_2(_self, _index);
      let _tableIndex = _plusSign_2(
        _bitAnd_2(
          _bitXor_2(_crc, _octet),
          _assertIsSmallInteger_1(parseInt("FF", 16)),
        ),
        1,
      );
      /* Statements */
      return _crc = _bitXor_2(
        _bitShiftRight_2(_crc, 8),
        _at_2(_table, _tableIndex),
      );
    });
    return _crc;
  },
  "{ :self |\n\t\tlet table = [\n\t\t\t16r0000 16rC0C1 16rC181 16r0140 16rC301 16r03C0 16r0280 16rC241\n\t\t\t16rC601 16r06C0 16r0780 16rC741 16r0500 16rC5C1 16rC481 16r0440\n\t\t\t16rCC01 16r0CC0 16r0D80 16rCD41 16r0F00 16rCFC1 16rCE81 16r0E40\n\t\t\t16r0A00 16rCAC1 16rCB81 16r0B40 16rC901 16r09C0 16r0880 16rC841\n\t\t\t16rD801 16r18C0 16r1980 16rD941 16r1B00 16rDBC1 16rDA81 16r1A40\n\t\t\t16r1E00 16rDEC1 16rDF81 16r1F40 16rDD01 16r1DC0 16r1C80 16rDC41\n\t\t\t16r1400 16rD4C1 16rD581 16r1540 16rD701 16r17C0 16r1680 16rD641\n\t\t\t16rD201 16r12C0 16r1380 16rD341 16r1100 16rD1C1 16rD081 16r1040\n\t\t\t16rF001 16r30C0 16r3180 16rF141 16r3300 16rF3C1 16rF281 16r3240\n\t\t\t16r3600 16rF6C1 16rF781 16r3740 16rF501 16r35C0 16r3480 16rF441\n\t\t\t16r3C00 16rFCC1 16rFD81 16r3D40 16rFF01 16r3FC0 16r3E80 16rFE41\n\t\t\t16rFA01 16r3AC0 16r3B80 16rFB41 16r3900 16rF9C1 16rF881 16r3840\n\t\t\t16r2800 16rE8C1 16rE981 16r2940 16rEB01 16r2BC0 16r2A80 16rEA41\n\t\t\t16rEE01 16r2EC0 16r2F80 16rEF41 16r2D00 16rEDC1 16rEC81 16r2C40\n\t\t\t16rE401 16r24C0 16r2580 16rE541 16r2700 16rE7C1 16rE681 16r2640\n\t\t\t16r2200 16rE2C1 16rE381 16r2340 16rE101 16r21C0 16r2080 16rE041\n\t\t\t16rA001 16r60C0 16r6180 16rA141 16r6300 16rA3C1 16rA281 16r6240\n\t\t\t16r6600 16rA6C1 16rA781 16r6740 16rA501 16r65C0 16r6480 16rA441\n\t\t\t16r6C00 16rACC1 16rAD81 16r6D40 16rAF01 16r6FC0 16r6E80 16rAE41\n\t\t\t16rAA01 16r6AC0 16r6B80 16rAB41 16r6900 16rA9C1 16rA881 16r6840\n\t\t\t16r7800 16rB8C1 16rB981 16r7940 16rBB01 16r7BC0 16r7A80 16rBA41\n\t\t\t16rBE01 16r7EC0 16r7F80 16rBF41 16r7D00 16rBDC1 16rBC81 16r7C40\n\t\t\t16rB401 16r74C0 16r7580 16rB541 16r7700 16rB7C1 16rB681 16r7640\n\t\t\t16r7200 16rB2C1 16rB381 16r7340 16rB101 16r71C0 16r7080 16rB041\n\t\t\t16r5000 16r90C1 16r9181 16r5140 16r9301 16r53C0 16r5280 16r9241\n\t\t\t16r9601 16r56C0 16r5780 16r9741 16r5500 16r95C1 16r9481 16r5440\n\t\t\t16r9C01 16r5CC0 16r5D80 16r9D41 16r5F00 16r9FC1 16r9E81 16r5E40\n\t\t\t16r5A00 16r9AC1 16r9B81 16r5B40 16r9901 16r59C0 16r5880 16r9841\n\t\t\t16r8801 16r48C0 16r4980 16r8941 16r4B00 16r8BC1 16r8A81 16r4A40\n\t\t\t16r4E00 16r8EC1 16r8F81 16r4F40 16r8D01 16r4DC0 16r4C80 16r8C41\n\t\t\t16r4400 16r84C1 16r8581 16r4540 16r8701 16r47C0 16r4680 16r8641\n\t\t\t16r8201 16r42C0 16r4380 16r8341 16r4100 16r81C1 16r8081 16r4040\n\t\t];\n\t\tlet crc = 0;\n\t\tself.indicesDo { :index |\n\t\t\tlet octet = self[index];\n\t\t\tlet tableIndex = crc.bitXor(octet).bitAnd(16rFF) + 1;\n\t\t\tcrc := crc.bitShiftRight(8).bitXor(table[tableIndex])\n\t\t};\n\t\tcrc\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "hex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _map = _asciiByteArray_1("0123456789abcdef");
    let _array = _ByteArray_1(_asterisk_2(_size_1(_self), 2));
    let _index = 1;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
    });
    return _asciiString_1(_array);
  },
  "{ :self |\n\t\tlet map = '0123456789abcdef'.asciiByteArray;\n\t\tlet array = ByteArray(self.size * 2);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tarray[index] := map[each.bitShiftRight(4) + 1];\n\t\t\tarray[index + 1] := map[each.bitAnd(15) + 1];\n\t\t\tindex := index + 2\n\t\t};\n\t\tarray.asciiString\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Uint8Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ByteArray_1;
  },
  "{ :self |\n\t\tByteArray:/1\n\t}",
);

sl.addMethod(
  "ByteArray",
  "ByteArray",
  "utf8String",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new TextDecoder("utf8").decode(_self).normalize("NFC");
  },
  "{ :self |\n\t\t<primitive: return new TextDecoder('utf8').decode(_self).normalize('NFC');>\n\t}",
);

sl.addMethod(
  "List",
  "ByteArray",
  "asByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_ByteArray_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tByteArray(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "Range",
  "ByteArray",
  "asByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_ByteArray_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tByteArray(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "ByteArray",
  "ByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Uint8Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "ByteArray",
  "base64Decoded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    const binString = atob(_self);
    return Uint8Array.from(binString, function (m) {
      return m.codePointAt(0);
    });
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst binString = atob(_self);\n\t\treturn Uint8Array.from(binString, function(m) {\n\t\t\treturn m.codePointAt(0)\n\t\t});\n\t\t>\n\t}",
);

sl.addMethod(
  "String",
  "ByteArray",
  "crc16",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _crc16_1(_utf8ByteArray_1(_self));
  },
  "{ :self |\n\t\tself.utf8ByteArray.crc16\n\t}",
);

sl.addMethod(
  "String",
  "ByteArray",
  "parseHexString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    const bytes = new Uint8Array(_self.length / 2);
    for (let i = 0; i < _self.length; i++) {
      bytes[i] = parseInt(_self.substr(i * 2, 2), 16);
    }
    return bytes;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst bytes = new Uint8Array(_self.length / 2);\n\t\tfor(let i = 0; i < _self.length; i ++) {\n\t\t\tbytes[i] = parseInt(_self.substr(i * 2, 2), 16);\n\t\t}\n\t\treturn bytes;\n\t\t>\n\t}",
);
