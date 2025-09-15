/*  Requires: Bag  */

sl.addType(
  false,
  "IdentityBag",
  "IdentityBag",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Bag",
  ],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Collection",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Removable",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "IdentityBag",
);

sl.copyTraitMethodsToType(
  "Bag",
  "IdentityBag",
);

sl.addMethodToExistingType(
  "IdentityBag",
  "IdentityBag",
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
        return _error_1("IdentityBag>>addWithOccurrences: non-immediate entry");
      }, []),
    );
    return _basicAddWithOccurrences_3(_self, _anObject, _anInteger);
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger | ifFalse(isImmediate(anObject), { error('IdentityBag>>addWithOccurrences: non-immediate entry') }); basicAddWithOccurrences(self,anObject, anInteger) }",
);

sl.addMethodToExistingType(
  "IdentityBag",
  "IdentityBag",
  "asIdentityBag",
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
  "IdentityBag",
  "IdentityBag",
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
  "IdentityBag",
  "IdentityBag",
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
  "IdentityBag",
  "IdentityBag",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentityBag_0;
  }, ["self"]),
  "{ :self | IdentityBag:/0 }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "IdentityBag",
  "IdentityBag",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentityBag_1(_Map_0());
  }, []),
  "{ IdentityBag(Map()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "IdentityBag",
  "IdentityBag",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newIdentityBag_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newIdentityBag(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "IdentityBag",
  "asIdentityBag",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentityBag_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = IdentityBag(); addAll(answer,self); answer }",
);
