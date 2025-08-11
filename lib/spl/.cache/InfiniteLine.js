sl.addType(
  false,
  "InfiniteLine",
  "InfiniteLine",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitMethodsToType(
  "Object",
  "InfiniteLine",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_point_1(_self));
  }, ["self"]),
  "{ :self | size(point(self)) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
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
  "List",
  "InfiniteLine",
  "InfiniteLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL146 = _assertIsOfSize_2(_self, 2);
    let _p1 = _at_2(__SPL146, 1);
    let _p2 = _at_2(__SPL146, 2);
    /* Statements */
    return _InfiniteLine_2(_p1, _normalize_1(_hyphenMinus_2(_p2, _p1)));
  }, ["self"]),
  "{ :self | let __SPL146 = assertIsOfSize(self, 2); let p1 = at(__SPL146, 1); let p2 = at(__SPL146, 2); InfiniteLine(p1, normalize((-(p2, p1)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "InfiniteLine",
  "InfiniteLine",
  ["aPoint", "aVector"],
  sl.annotateFunction(function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newInfiniteLine_0(), _aPoint, _aVector);
  }, ["aPoint", "aVector"]),
  "{ :aPoint :aVector | initializeSlots(newInfiniteLine(),aPoint, aVector) }",
);
