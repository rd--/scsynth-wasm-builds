sl.addTrait("ImplicitFloat", "ImplicitFloat");

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exp_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).exp\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "circumflexAccent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exp_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).exp\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(
      _SmallFloat_1(_self),
      _SmallFloat_1(_aNumber),
      _epsilon,
    );
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon |\n\t\tSmallFloat(self).isCloseToBy(\n\t\t\tSmallFloat(aNumber),\n\t\t\tepsilon\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "nthRoot",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _nthRoot_2(_SmallFloat_1(_self), _SmallFloat_1(_aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tSmallFloat(self).nthRoot(\n\t\t\tSmallFloat(aNumber)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "log",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_2(_SmallFloat_1(_self), _SmallFloat_1(_base));
  }, ["self", "base"]),
  "{ :self :base |\n\t\tSmallFloat(self).log(\n\t\t\tSmallFloat(base)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).log\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).log2\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log10_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).log10\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "printStringToFixed",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _printStringToFixed_2(_SmallFloat_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tSmallFloat(self).printStringToFixed(anInteger)\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "realExponent",
  ["x", "b"],
  sl.annotateFunction(function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_2(_abs_1(_SmallFloat_1(_x)), _SmallFloat_1(_b));
  }, ["x", "b"]),
  "{ :x :b |\n\t\tSmallFloat(x).abs.log(\n\t\t\tSmallFloat(b)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "squareRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).sqrt\n\t}",
);

sl.addMethodToExistingTrait(
  "ImplicitFloat",
  "ImplicitFloat",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_SmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSmallFloat(self).sqrt\n\t}",
);
