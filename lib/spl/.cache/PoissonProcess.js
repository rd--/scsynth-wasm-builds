sl.addType(
  false,
  "PoissonProcess",
  "PoissonProcess",
  ["Object"],
  ["mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PoissonProcess",
);

sl.addMethodToExistingType(
  "PoissonProcess",
  "PoissonProcess",
  "asStream",
  ["self", "r", "t0"],
  sl.annotateFunction(function (_self, _r, _t0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _t0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _t = _t0;
    let _k = 0;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [_t, _k];
        /* Statements */
        _t = _plusSign_2(_t, _exponentialDistribution_2(_r, _mu));
        _k = _plusSign_2(_k, 1);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _t = _t0;
        return _k = 0;
      }, []),
    );
  }, ["self", "r", "t0"]),
  "{ :self :r :t0 | let mu = mu(self); let t = t0; let k = 0; BlockStream({ let answer = [t, k]; t := +(t, exponentialDistribution(r,mu)); k := +(k, 1); answer }, { t := t0; k := 0 }) }",
);

sl.addMethodToExistingType(
  "PoissonProcess",
  "PoissonProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_t, 2);
    let _tMin = _at_2(__SplVar1, 1);
    let _tMax = _at_2(__SplVar1, 2);
    /* Statements */
    return _timeSeriesRandomFunction_3(_asStream_3(_self, _r, _tMin), _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let __SplVar1 = assertIsOfSize(t, 2); let tMin = at(__SplVar1, 1); let tMax = at(__SplVar1, 2); timeSeriesRandomFunction(asStream(self,r, tMin),t, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PoissonProcess",
  "PoissonProcess",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPoissonProcess_0(), _mu);
  }, ["mu"]),
  "{ :mu | initializeSlots(newPoissonProcess(),mu) }",
);
