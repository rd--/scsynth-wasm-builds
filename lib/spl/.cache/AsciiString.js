sl.addType(
  false,
  "AsciiString",
  "AsciiString",
  [
    "Object",
    "Store",
    "Equal",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequence",
  ],
  ["byteArray"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Store",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Equal",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Collection",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Sequence",
  "AsciiString",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "AsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "atIfAbsent",
  ["self", "anInteger", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _anInteger, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _Character_1(
      _atIfAbsent_3(_byteArray_1(_self), _anInteger, _ifAbsent_0),
    );
  }, ["self", "anInteger", "ifAbsent/0"]),
  "{ :self :anInteger :ifAbsent/0 |\n\t\tself.byteArray.atIfAbsent(anInteger, ifAbsent/0).Character\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "ByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_byteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.byteArray.copy\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "asciiStringToByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_byteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.byteArray.copy\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "codePoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1(_byteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.byteArray.List\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _byteArray_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_Character_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.byteArray.do { :each |\n\t\t\taBlock(each.Character)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "hexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _AsciiString_1(_base16Encode_1(_byteArray_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.byteArray.base16Encode.AsciiString\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _to_2(1, _size_1(_byteArray_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.byteArray.size)\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _List_1(_size_1(_self));
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _putInPlace_3(_answer, _index, _Character_1(_each));
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := each.Character\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "asciiStringToList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _List_1(_size_1(_self));
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _putInPlace_3(_answer, _index, _Character_1(_each));
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := each.Character\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "putInPlace",
  ["self", "anInteger", "aCharacter"],
  sl.annotateFunction(function (_self, _anInteger, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aCharacter";
      throw new Error(errorMessage);
    } /* Statements */
    return _putInPlace_3(
      _byteArray_1(_self),
      _anInteger,
      _codePoint_1(_aCharacter),
    );
  }, ["self", "anInteger", "aCharacter"]),
  "{ :self :anInteger :aCharacter |\n\t\tself.byteArray.put!(anInteger, aCharacter.codePoint)\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_byteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.byteArray.size\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _AsciiString_1;
  }, ["self"]),
  "{ :self |\n\t\tAsciiString/1\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("AsciiString(%)", [
      _storeString_1(_asciiString_1(_byteArray_1(_self))),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'AsciiString(%)'.format([self.byteArray.asciiString.storeString])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "AsciiString",
  "uncheckedAsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newAsciiString_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewAsciiString().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "AsciiString",
  "uncheckedByteArrayToAsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newAsciiString_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewAsciiString().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "AsciiString",
  "AsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedAsciiString_1(_ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self).uncheckedAsciiString\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "AsciiString",
  "AsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedAsciiString_1(_asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asciiByteArray.uncheckedAsciiString\n\t}",
);
