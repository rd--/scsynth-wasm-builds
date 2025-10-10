sl.addType(
  false,
  "Missing",
  "Missing",
  ["Object", "Equatable"],
  ["reason", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Missing",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :aString :anObject |\n\t\tnewMissing().initializeSlots(aString, anObject)\n\t}",
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
  "{ :self |\n\t\tMissing(self, nil)\n\t}",
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
  "{ :self |\n\t\tself.reject(isMissingOrNil:/1)\n\t}",
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
  "{ :unused |\n\t\ttrue\n\t}",
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
  "{ :unused |\n\t\ttrue\n\t}",
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
  "{ :unused |\n\t\tfalse\n\t}",
);
