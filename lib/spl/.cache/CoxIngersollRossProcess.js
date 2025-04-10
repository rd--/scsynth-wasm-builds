sl.addType(
  false,
  "CoxIngersollRossProcess",
  "CoxIngersollRossProcess",
  ["Object"],
  ["mu", "sigma", "theta", "x0"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CoxIngersollRossProcess",
);

sl.addMethodToExistingType(
  "CoxIngersollRossProcess",
  "CoxIngersollRossProcess",
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
    let _theta = _theta_1(_self);
    let _x0 = _x0_1(_self);
    let _a_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_sigma, _hyphenMinus_2(_mu, _y));
    }, ["y", "t"]);
    let _b_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_sigma, _sqrt_1(_y));
    }, ["y", "t"]);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _transposed_1(_eulerMaruyamaMethod_5(_r, _a_2, _b_2, _t, _x0));
      }, []),
      _n,
    ));
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let mu = mu(self); let sigma = sigma(self); let theta = theta(self); let x0 = x0(self); let a = { :y :t | *(sigma, (-(mu, y))) }; let b = { :y :t | *(sigma, sqrt(y)) }; TemporalData(!({ transposed(eulerMaruyamaMethod(r,a:/2, b:/2, t, x0)) }, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "CoxIngersollRossProcess",
  "CoxIngersollRossProcess",
  ["mu", "sigma", "theta", "x0"],
  sl.annotateFunction(function (_mu, _sigma, _theta, _x0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _mu, _sigma, _theta, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newCoxIngersollRossProcess_0(),
      _mu,
      _sigma,
      _theta,
      _x0,
    );
  }, ["mu", "sigma", "theta", "x0"]),
  "{ :mu :sigma :theta :x0 | initializeSlots(newCoxIngersollRossProcess(),mu, sigma, theta, x0) }",
);
