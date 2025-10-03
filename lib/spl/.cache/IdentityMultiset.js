/*  Requires: Multiset  */

sl.addType(
  false,
  "IdentityMultiset",
  "IdentityMultiset",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Multiset",
  ],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Collection",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Removable",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "IdentityMultiset",
);

sl.copyTraitMethodsToType(
  "Multiset",
  "IdentityMultiset",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "addWithOccurrences",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isImmediate_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1(
          "IdentityMultiset>>addWithOccurrences: non-immediate entry",
        );
      }, []),
    );
    return _basicAddWithOccurrences_3(_self, _anObject, _anInteger);
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger | ifFalse(isImmediate(anObject), { error('IdentityMultiset>>addWithOccurrences: non-immediate entry') }); basicAddWithOccurrences(self,anObject, anInteger) }",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "asIdentityMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "asMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self | contents(self) }",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "asIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentitySet_1(_indices_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | asIdentitySet(indices(contents(self))) }",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _copy_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | contents(self, copy(contents(self))) }",
);

sl.addMethodToExistingType(
  "IdentityMultiset",
  "IdentityMultiset",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentityMultiset_0;
  }, ["self"]),
  "{ :self | IdentityMultiset:/0 }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "IdentityMultiset",
  "IdentityMultiset",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentityMultiset_1(_Map_0());
  }, []),
  "{ IdentityMultiset(Map()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "IdentityMultiset",
  "IdentityMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newIdentityMultiset_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newIdentityMultiset(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "IdentityMultiset",
  "asIdentityMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentityMultiset_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = IdentityMultiset(); addAll(answer,self); answer }",
);
