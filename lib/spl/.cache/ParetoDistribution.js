sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ParetoDistribution",
  "paretoDistribution",
  ["self", "k", "alpha"],
  sl.annotateFunction(function (_self, _k, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _alpha";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _solidus_2(-1, _alpha);
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _asterisk_2(_k, _circumflexAccent_2(_u, _e));
  }, ["self", "k", "alpha"]),
  "{ :self :k :alpha | let e = /(-1, alpha); let u = nextRandomFloat(self); *(k, (^(u, e))) }",
);

sl.addType(
  false,
  "ParetoDistribution",
  "ParetoDistribution",
  ["Object", "ProbabilityDistribution"],
  ["k", "alpha"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ParetoDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "ParetoDistribution",
);

sl.addMethodToExistingType(
  "ParetoDistribution",
  "ParetoDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _k_1(_self);
    let _alpha = _alpha_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(1, _circumflexAccent_2(_solidus_2(_k, _x), _alpha));
    }, ["x"]);
  }, ["self"]),
  "{ :self | let k = k(self); let alpha = alpha(self); { :x | -(1, (^((/(k, x)), alpha))) } }",
);

sl.addMethodToExistingType(
  "ParetoDistribution",
  "ParetoDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k = _k_1(_self);
      let _alpha = _alpha_1(_self);
      /* Statements */
      return _solidus_2(
        _asterisk_2(_alpha, _circumflexAccent_2(_k, _alpha)),
        _circumflexAccent_2(_x, _plusSign_2(_alpha, 1)),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | { :x | let k = k(self); let alpha = alpha(self); /((*(alpha, (^(k, alpha)))), (^(x, (+(alpha, 1))))) } }",
);

sl.addMethodToExistingType(
  "ParetoDistribution",
  "ParetoDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _k_1(_self);
    let _alpha = _alpha_1(_self);
    let _e = _solidus_2(-1, _alpha);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _nextRandomFloat_1(_rng);
        /* Statements */
        return _asterisk_2(_k, _circumflexAccent_2(_u, _e));
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let k = k(self); let alpha = alpha(self); let e = /(-1, alpha); !({ let u = nextRandomFloat(rng); *(k, (^(u, e))) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ParetoDistribution",
  "ParetoDistribution",
  ["k", "alpha"],
  sl.annotateFunction(function (_k, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newParetoDistribution_0(), _k, _alpha);
  }, ["k", "alpha"]),
  "{ :k :alpha | initializeSlots(newParetoDistribution(),k, alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "ParetoDistribution",
  "ParetoDistribution",
  ["k", "alpha"],
  sl.annotateFunction(function (_k, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newParetoDistribution_0(), _k, _alpha);
  }, ["k", "alpha"]),
  "{ :k :alpha | initializeSlots(newParetoDistribution(),k, alpha) }",
);
