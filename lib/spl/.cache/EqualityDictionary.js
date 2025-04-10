sl.addType(
  false,
  "EqualityDictionary",
  "EqualityDictionary",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
  ],
  ["keys", "values"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Collection",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Removable",
  "EqualityDictionary",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "EqualityDictionary",
);

sl.addMethodToExistingType(
  "EqualityDictionary",
  "EqualityDictionary",
  "comparator",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2;
  }, ["unused"]),
  "{ :unused | = }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "EqualityDictionary",
  "EqualityDictionary",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newEqualityDictionary_0(), [], []);
  }, []),
  "{ initializeSlots(newEqualityDictionary(),[], []) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EqualityDictionary",
  "asEqualityDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _EqualityDictionary_0();
    /* Statements */
    _keys_2(_d, _collect_2(_self, _key_1));
    _values_2(_d, _collect_2(_self, _value_1));
    return _d;
  }, ["self"]),
  "{ :self | let d = EqualityDictionary(); keys(d, collect(self,key:/1)); values(d, collect(self,value:/1)); d }",
);
