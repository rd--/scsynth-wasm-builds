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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["aString", "anObject"],
  sl.annotateFunction(function (_aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aString, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMissing_0(), _aString, _anObject);
  }, ["aString", "anObject"]),
  "{ :aString :anObject | initializeSlots(newMissing(),aString, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Missing_2(_self, null);
  }, ["self"]),
  "{ :self | Missing(self, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Missing",
  "deleteMissing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, _isMissingOrNil_1);
  }, ["self"]),
  "{ :self | reject(self,isMissingOrNil:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Missing",
  "Missing",
  "isMissingOrNil",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.extendTypeOrTraitWithMethod(
  "Nil",
  "Missing",
  "isMissingOrNil",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Missing",
  "isMissingOrNil",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused | false }",
);
