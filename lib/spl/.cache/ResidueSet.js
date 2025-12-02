/*  Requires: BitSet Set  */

sl.addType(
  false,
  "ResidueSet",
  "ResidueSet",
  ["Object", "Storeable", "Equatable", "Iterable", "Collection", "Extensible"],
  ["contents", "modulus"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ResidueSet",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "ResidueSet",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ResidueSet",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "ResidueSet",
);

sl.copyTraitMethodsToType(
  "Collection",
  "ResidueSet",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "ResidueSet",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "plus",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _plusSign_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents + anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "plusSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _plusSign_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents + anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "subtract",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _hyphenMinus_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents - anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "hyphenMinus",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _hyphenMinus_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents - anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "times",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _asterisk_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents * anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "asterisk",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(
      _asterisk_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tResidueSet(\n\t\t\tself.contents * anInteger,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "asBitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBitSet_2(_contents_1(_self), _modulus_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asBitSet(self.modulus)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "asBitString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asString_1(_asBitSet_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet.asString\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _positionVector_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.positionVector\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "asIdentitySet",
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
  "ResidueSet",
  "ResidueSet",
  "bitVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _positions = _contents_1(_self);
    /* Statements */
    return _collect_2(
      _to_2(0, _modulus_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_includes_2(_positions, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet positions = self.contents;\n\t\t0.to(self.modulus).collect { :each |\n\t\t\tpositions.includes(each).boole\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "boxNotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boxNotation_1(_asBitSet_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet.boxNotation\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "complement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asResidueSet_1(_complement_1(_asBitSet_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet.complement.asResidueSet\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "include",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _include_2(
      _contents_1(_self),
      _percentSign_2(_anInteger, _modulus_1(_self)),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.contents.include(anInteger % self.modulus)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "positionVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_asList_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asList.sort\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
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
  "ResidueSet",
  "ResidueSet",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("ResidueSet(%, %)", [
      _storeString_1(_positionVector_1(_self)),
      _printString_1(_modulus_1(_self)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'ResidueSet(%, %)'.format(\n\t\t\t[\n\t\t\t\tself.positionVector.storeString,\n\t\t\t\tself.modulus.printString\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ResidueSet",
  "ResidueSet",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ResidueSet_2([], _modulus_1(_self));
    }, []);
  }, ["self"]),
  "{ :self |\n\t\t{\n\t\t\tResidueSet([], self.modulus)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ResidueSet",
  "leastResidueSystem",
  ["modulus"],
  sl.annotateFunction(function (_modulus) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(_to_2(0, _hyphenMinus_2(_modulus, 1)), _modulus);
  }, ["modulus"]),
  "{ :modulus |\n\t\tResidueSet(\n\t\t\t0.to(modulus - 1),\n\t\t\tmodulus\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ResidueSet",
  "asResidueSet",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(_self, _modulus);
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tResidueSet(self, modulus)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ResidueSet",
  "ResidueSet",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _initializeSlots_3(_newResidueSet_0(), _IdentitySet_0(), _modulus);
    /* Statements */
    _includeAll_2(_r, _percentSign_2(_self, _modulus));
    return _r;
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet r = newResidueSet().initializeSlots(IdentitySet(), modulus);\n\t\tr.includeAll(self % modulus);\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BitSet",
  "ResidueSet",
  "asResidueSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ResidueSet_2(_positionVector_1(_self), _capacity_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tResidueSet(\n\t\t\tself.positionVector,\n\t\t\tself.capacity\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ResidueSet",
  "asResidueSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asResidueSet_1(_asBitSet_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asBitSet.asResidueSet\n\t}",
);
