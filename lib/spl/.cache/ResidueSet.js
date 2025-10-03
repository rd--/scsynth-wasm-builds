/*  Requires: BitSet Set  */

sl.addType(
  false,
  "ResidueSet",
  "ResidueSet",
  ["Object", "Equatable", "Iterable", "Collection", "Extensible"],
  ["modulus", "contents"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "plusSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _asResidueSet_2(
      _plusSign_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | asResidueSet((+(contents(self), anInteger)),modulus(self)) }",
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
    return _asResidueSet_2(
      _hyphenMinus_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | asResidueSet((-(contents(self), anInteger)),modulus(self)) }",
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
    return _asResidueSet_2(
      _asterisk_2(_contents_1(_self), _anInteger),
      _modulus_1(_self),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | asResidueSet((*(contents(self), anInteger)),modulus(self)) }",
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
  "{ :self | asBitSet(contents(self),modulus(self)) }",
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
  "{ :self | asString(asBitSet(self)) }",
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
    return _sort_1(_asList_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | sort(asList(contents(self))) }",
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
  "{ :self | copy(contents(self)) }",
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
  "{ :self | asResidueSet(complement(asBitSet(self))) }",
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
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1) }",
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
  "{ :self :anInteger | include(contents(self),%(anInteger, modulus(self))) }",
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
  "{ :self | size(contents(self)) }",
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
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_storeString_1(_asList_1(_self)), ".asResidueSet("),
        _printString_1(_modulus_1(_self)),
      ),
      ")",
    );
  }, ["self"]),
  "{ :self | ++(++(++(storeString(asList(self)), '.asResidueSet('), printString(modulus(self))), ')') }",
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
      return _ResidueSet_1(_modulus_1(_self));
    }, []);
  }, ["self"]),
  "{ :self | { ResidueSet(modulus(self)) } }",
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
    return _asResidueSet_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_modulus, 1)),
      _modulus,
    );
  }, ["modulus"]),
  "{ :modulus | asResidueSet(upOrDownTo(0, -(modulus, 1)),modulus) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ResidueSet",
  "ResidueSet",
  ["modulus"],
  sl.annotateFunction(function (_modulus) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newResidueSet_0(), _modulus, _IdentitySet_0());
  }, ["modulus"]),
  "{ :modulus | initializeSlots(newResidueSet(),modulus, IdentitySet()) }",
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
    } /* Temporaries */
    let _answer = _ResidueSet_1(_modulus);
    /* Statements */
    _includeAll_2(_answer, _percentSign_2(_self, _modulus));
    return _answer;
  }, ["self", "modulus"]),
  "{ :self :modulus | let answer = ResidueSet(modulus); includeAll(answer,%(self, modulus)); answer }",
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
    return _asResidueSet_2(_asList_1(_self), _capacity_1(_self));
  }, ["self"]),
  "{ :self | asResidueSet(asList(self),capacity(self)) }",
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
  "{ :self | asResidueSet(asBitSet(self)) }",
);
