/*  Requires: Multiset  */

sl.addType(
  false,
  "IdentityMultiset",
  "IdentityMultiset",
  [
    "Object",
    "Storeable",
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
  "Storeable",
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
  "{ :self :anObject :anInteger |\n\t\tanObject.isImmediate.ifFalse {\n\t\t\t'IdentityMultiset>>addWithOccurrences: non-immediate entry'.error\n\t\t};\n\t\tself.basicAddWithOccurrences(anObject, anInteger)\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.contents\n\t}",
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
  "{ :self |\n\t\tself.contents.indices.asIdentitySet\n\t}",
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
  "{ :self |\n\t\tself.contents := self.contents.copy\n\t}",
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
  "{ :self |\n\t\tIdentityMultiset:/0\n\t}",
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
  "{\n\t\tIdentityMultiset(\n\t\t\tMap()\n\t\t)\n\t}",
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
  "{ :self |\n\t\tnewIdentityMultiset().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IdentityMultiset",
  "IdentityMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentityMultiset_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asIdentityMultiset\n\t}",
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
  "{ :self |\n\t\tlet answer = IdentityMultiset();\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);
