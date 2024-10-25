/*  Requires: BitSet Set  */

sl.addType(
  false,
  "ResidueSet",
  "ResidueSet",
  ["Object", "Iterable", "Collection"],
  ["modulus", "contents"],
);

sl.copyTraitToType(
  "Object",
  "ResidueSet",
);

sl.copyTraitToType(
  "Iterable",
  "ResidueSet",
);

sl.copyTraitToType(
  "Collection",
  "ResidueSet",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
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
  "ResidueSet",
  "ResidueSet",
  "plusSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_2(
      _plusSign_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  },
  "{ :self :anInteger |\n\t\t(self.contents + anInteger).asResidueSet(self.modulus)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "hyphenMinus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_2(
      _hyphenMinus_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  },
  "{ :self :anInteger |\n\t\t(self.contents - anInteger).asResidueSet(self.modulus)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "asterisk",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_2(
      _asterisk_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  },
  "{ :self :anInteger |\n\t\t(self.contents * anInteger).asResidueSet(self.modulus)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "asBitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBitSet_2(_contents_1(_self), _modulus_1(_self));
  },
  "{ :self |\n\t\tself.contents.asBitSet(self.modulus)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "asBitString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asString_1(_asBitSet_1(_self));
  },
  "{ :self |\n\t\tself.asBitSet.asString\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sort_1(_asList_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.asList.sort\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "asSet",
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
  "ResidueSet",
  "ResidueSet",
  "complement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_1(_complement_1(_asBitSet_1(_self)));
  },
  "{ :self |\n\t\tself.asBitSet.complement.asResidueSet\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
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
    return _do_2(_contents_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
  "include",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _include_2(
      _contents_1(_self),
      _percentSign_2(_anInteger, _modulus_1(_self)),
    );
  },
  "{ :self :anInteger |\n\t\tself.contents.include(anInteger % self.modulus)\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
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
  "ResidueSet",
  "ResidueSet",
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
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_storeString_1(_asList_1(_self)), ".asResidueSet("),
        _printString_1(_modulus_1(_self)),
      ),
      ")",
    );
  },
  "{ :self |\n\t\tself.asList.storeString ++ '.asResidueSet(' ++ self.modulus.printString ++ ')'\n\t}",
);

sl.addMethod(
  "ResidueSet",
  "ResidueSet",
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
    return (function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ResidueSet_1(_modulus_1(_self));
    });
  },
  "{ :self |\n\t\t{\n\t\t\tResidueSet(self.modulus)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ResidueSet",
  "leastResidueSystem",
  ["modulus"],
  function (_modulus) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _modulus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_modulus, 1)),
      _modulus,
    );
  },
  "{ :modulus |\n\t\t(0 .. modulus - 1).asResidueSet(modulus)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ResidueSet",
  "ResidueSet",
  ["modulus"],
  function (_modulus) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _modulus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newResidueSet_0(), _modulus, _Set_0());
  },
  "{ :modulus |\n\t\tnewResidueSet().initializeSlots(modulus, Set())\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ResidueSet",
  "asResidueSet",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ResidueSet_1(_modulus);
    /* Statements */
    _includeAll_2(_answer, _percentSign_2(_self, _modulus));
    return _answer;
  },
  "{ :self :modulus |\n\t\tlet answer = ResidueSet(modulus);\n\t\tanswer.includeAll(self % modulus);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "BitSet",
  "ResidueSet",
  "asResidueSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_2(_asList_1(_self), _capacity_1(_self));
  },
  "{ :self |\n\t\tself.asList.asResidueSet(self.capacity)\n\t}",
);

sl.addMethod(
  "String",
  "ResidueSet",
  "asResidueSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asResidueSet_1(_asBitSet_1(_self));
  },
  "{ :self |\n\t\tself.asBitSet.asResidueSet\n\t}",
);
