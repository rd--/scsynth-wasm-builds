sl.addType(
  false,
  "Missing",
  "Missing",
  ["Object"],
  ["reason", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Missing",
);

sl.addMethodToExistingType(
  "Missing",
  "Missing",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["aString", "anObject"],
  function (_aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aString, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMissing_0(), _aString, _anObject);
  },
  "{ :aString :anObject | initializeSlots(newMissing(),aString, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Missing_2(_self, null);
  },
  "{ :self | Missing(self, nil) }",
);
