sl.addType(
  false,
  "WienerProcess",
  "WienerProcess",
  ["Object"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WienerProcess",
);

sl.addMethodToExistingType(
  "WienerProcess",
  "WienerProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _a_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _mu;
    }, ["y", "t"]);
    let _b_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _sigma;
    }, ["y", "t"]);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _transposed_1(_eulerMaruyamaMethod_5(_r, _a_2, _b_2, _t, 0));
      }, []),
      _n,
    ));
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let mu = mu(self); let sigma = sigma(self); let a = { :y :t | mu }; let b = { :y :t | sigma }; TemporalData(!({ transposed(eulerMaruyamaMethod(r,a:/2, b:/2, t, 0)) }, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "WienerProcess",
  "WienerProcess",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newWienerProcess_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma | initializeSlots(newWienerProcess(),mu, sigma) }",
);
