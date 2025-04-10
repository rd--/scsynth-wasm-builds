sl.addType(
  false,
  "TolerantDictionary",
  "TolerantDictionary",
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
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Collection",
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Removable",
  "TolerantDictionary",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "TolerantDictionary",
);

sl.addMethodToExistingType(
  "TolerantDictionary",
  "TolerantDictionary",
  "comparator",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _tilde_2;
  }, ["unused"]),
  "{ :unused | ~ }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "TolerantDictionary",
  "TolerantDictionary",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newTolerantDictionary_0(), [], []);
  }, []),
  "{ initializeSlots(newTolerantDictionary(),[], []) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TolerantDictionary",
  "asTolerantDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _TolerantDictionary_0();
    /* Statements */
    _keys_2(_d, _collect_2(_self, _key_1));
    _values_2(_d, _collect_2(_self, _value_1));
    return _d;
  }, ["self"]),
  "{ :self | let d = TolerantDictionary(); keys(d, collect(self,key:/1)); values(d, collect(self,value:/1)); d }",
);
