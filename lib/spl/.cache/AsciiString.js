sl.addType(
  false,
  "AsciiString",
  "AsciiString",
  ["Object", "Iterable", "Indexable", "Collection", "Sequenceable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | copy(contents(self)) }",
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
    return _asAsciiString_1(_asHexString_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | asAsciiString(asHexString(contents(self))) }",
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
  "{ :self | let answer = List(size(self)); withIndexDo(self, { :each :index | atPut(answer, index, asCharacter(each)) }); answer }",
);

sl.addMethodToExistingType(
  "AsciiString",
  "AsciiString",
  "at",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _asCharacter_1(_at_2(_contents_1(_self), _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger | asCharacter(at(contents(self),anInteger)) }",
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
  "{ :self :anInteger :aCharacter | atPut(contents(self),anInteger, codePoint(aCharacter)) }",
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
  "{ :self :aBlock:/1 | do(contents(self), { :each | aBlock(asCharacter(each)) }) }",
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
  "{ :self | to(1,size(contents(self))) }",
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
  "{ :self | size(contents(self)) }",
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
  "{ :self | AsciiString:/1 }",
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
    return _plusSignPlusSign_2(
      _storeString_1(_asciiString_1(_contents_1(_self))),
      ".asAsciiString",
    );
  }, ["self"]),
  "{ :self | ++(storeString(asciiString(contents(self))), '.asAsciiString') }",
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
  "{ :self | initializeSlots(newAsciiString(),ByteArray(self)) }",
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
    return _initializeSlots_2(_newAsciiString_0(), _asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self | initializeSlots(newAsciiString(),asciiByteArray(self)) }",
);
