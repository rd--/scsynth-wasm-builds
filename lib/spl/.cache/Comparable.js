sl.addTrait("Comparable", "Comparable");

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "lessThanSignVerticalLine",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "lessThanSignEqualsSignVerticalLine",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "verticalLineGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "verticalLineGreaterThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "precedes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "precedesOrEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "succeeds",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "succeedsOrEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Comparable",
  "Comparable",
  "compare",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Comparable>>compare");
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Comparable>>compare')\n\t}",
);
