sl.addType(
  false,
  "AsciiString",
  "AsciiString",
  ["Object", "Iterable", "Indexable", "Collection", "Sequence"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "AsciiString",
);

sl.copyTraitToType(
  "Iterable",
  "AsciiString",
);

sl.copyTraitToType(
  "Indexable",
  "AsciiString",
);

sl.copyTraitToType(
  "Collection",
  "AsciiString",
);

sl.copyTraitToType(
  "Sequence",
  "AsciiString",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
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
    return _copy_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "asHex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asAsciiString_1(_hex_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.hex.asAsciiString\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _asCharacter_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := each.asCharacter\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "at",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asCharacter_1(_at_2(_contents_1(_self), _anInteger));
  },
  "{ :self :anInteger |\n\t\tself.contents.at(anInteger).asCharacter\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "atPut",
  ["self", "anInteger", "aCharacter"],
  function (_self, _anInteger, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aCharacter";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_contents_1(_self), _anInteger, _codePoint_1(_aCharacter));
  },
  "{ :self :anInteger :aCharacter |\n\t\tself.contents.atPut(anInteger, aCharacter.codePoint)\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_asCharacter_1(_each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do { :each |\n\t\t\taBlock(each.asCharacter)\n\t\t}\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _to_2(1, _size_1(_contents_1(_self)));
  },
  "{ :self |\n\t\t1.to(self.contents.size)\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
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
    return _AsciiString_1;
  },
  "{ :self |\n\t\tAsciiString:/1\n\t}",
);

sl.addMethod(
  "AsciiString",
  "AsciiString",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_asciiString_1(_contents_1(_self))),
      ".asAsciiString",
    );
  },
  "{ :self |\n\t\tself.contents.asciiString.storeString ++ '.asAsciiString'\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "AsciiString",
  "AsciiString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newAsciiString_0(), _ByteArray_1(_self));
  },
  "{ :self |\n\t\tnewAsciiString().initializeSlots(ByteArray(self))\n\t}",
);

sl.addMethod(
  "String",
  "AsciiString",
  "asAsciiString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newAsciiString_0(), _asciiByteArray_1(_self));
  },
  "{ :self |\n\t\tnewAsciiString().initializeSlots(self.asciiByteArray)\n\t}",
);
