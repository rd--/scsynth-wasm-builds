sl.addType(
  false,
  "AsciiString",
  "AsciiString",
  [
    "Object",
    "Storeable",
    "Equatable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
  ],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "AsciiString",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "Sequenceable",
  "AsciiString",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "asAsciiString",
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
  "asByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "asHexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asAsciiString_1(_base16Encode_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.base16Encode.asAsciiString\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_answer, _index, _asCharacter_1(_each));
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := each.asCharacter\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "atIfAbsent",
  ["self", "anInteger", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _anInteger, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _asCharacter_1(
      _atIfAbsent_3(_contents_1(_self), _anInteger, _ifAbsent_0),
    );
  }, ["self", "anInteger", "ifAbsent:/0"]),
  "{ :self :anInteger :ifAbsent:/0 |\n\t\tself.contents.atIfAbsent(anInteger, ifAbsent:/0).asCharacter\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "atPut",
  ["self", "anInteger", "aCharacter"],
  sl.annotateFunction(function (_self, _anInteger, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aCharacter";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_contents_1(_self), _anInteger, _codePoint_1(_aCharacter));
  }, ["self", "anInteger", "aCharacter"]),
  "{ :self :anInteger :aCharacter |\n\t\tself.contents.atPut(anInteger, aCharacter.codePoint)\n\t}",
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
    return _asList_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asList\n\t}",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _contents_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_asCharacter_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each.asCharacter)\n\t\t}\n\t}",
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
    return _to_2(1, _size_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.contents.size)\n\t}",
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
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
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
  "{ :self |\n\t\tAsciiString:/1\n\t}",
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
      _storeString_1(_asciiString_1(_contents_1(_self))),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'AsciiString(%)'.format([self.contents.asciiString.storeString])\n\t}",
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
    return _initializeSlots_2(_newAsciiString_0(), _ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tnewAsciiString().initializeSlots(ByteArray(self))\n\t}",
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
    return _initializeSlots_2(_newAsciiString_0(), _asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tnewAsciiString().initializeSlots(self.asciiByteArray)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "AsciiString",
  "asAsciiString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _AsciiString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tAsciiString(self)\n\t}",
);
