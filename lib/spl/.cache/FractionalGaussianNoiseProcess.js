sl.addType(
  false,
  "FractionalGaussianNoiseProcess",
  "FractionalGaussianNoiseProcess",
  ["Object"],
  ["mu", "sigma", "h"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FractionalGaussianNoiseProcess",
);

sl.addMethodToExistingType(
  "FractionalGaussianNoiseProcess",
  "FractionalGaussianNoiseProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _hoskingMethodRandomFunction_5(_r, _h_1(_self), false, _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | hoskingMethodRandomFunction(r,h(self), false, t, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractionalGaussianNoiseProcess",
  "FractionalGaussianNoiseProcess",
  ["h"],
  sl.annotateFunction(function (_h) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newFractionalGaussianNoiseProcess_0(), 0, 1, _h);
  }, ["h"]),
  "{ :h | initializeSlots(newFractionalGaussianNoiseProcess(),0, 1, h) }",
);
