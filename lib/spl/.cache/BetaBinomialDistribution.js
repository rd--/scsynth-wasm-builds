sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "BetaBinomialDistribution",
  "betaBinomialDistribution",
  ["self", "alpha", "beta", "n"],
  sl.annotateFunction(function (_self, _alpha, _beta, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _alpha, _beta, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _betaDistribution_3(_self, _alpha, _beta);
    /* Statements */
    return _binomialDistribution_3(_self, _n, _p);
  }, ["self", "alpha", "beta", "n"]),
  "{ :self :alpha :beta :n | let p = betaDistribution(self,alpha, beta); binomialDistribution(self,n, p) }",
);

sl.addType(
  false,
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  ["Object", "ProbabilityDistribution"],
  ["alpha", "beta", "n"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BetaBinomialDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "BetaBinomialDistribution",
);

sl.addMethodToExistingType(
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _n = _n_1(_self);
    /* Statements */
    return _solidus_2(_asterisk_2(_n, _alpha), _plusSign_2(_alpha, _beta));
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); let n = n(self); /((*(n, alpha)), (+(alpha, beta))) }",
);

sl.addMethodToExistingType(
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _n = _n_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _binomial_2(_n, _x),
        _solidus_2(
          _beta_2(
            _plusSign_2(_x, _alpha),
            _plusSign_2(_hyphenMinus_2(_n, _x), _beta),
          ),
          _beta_2(_alpha, _beta),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); let n = n(self); { :x | *(binomial(n, x), (/(beta(+(x, alpha), +(-(n, x), beta)), beta(alpha, beta)))) } }",
);

sl.addMethodToExistingType(
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _n = _n_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betaBinomialDistribution_4(_rng, _alpha, _beta, _n);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let alpha = alpha(self); let beta = beta(self); let n = n(self); !({ betaBinomialDistribution(rng,alpha, beta, n) }, shape) }",
);

sl.addMethodToExistingType(
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
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

sl.addMethodToExistingType(
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _n = _n_1(_self);
    /* Statements */
    return _solidus_2(
      _asterisk_2(
        _asterisk_2(_asterisk_2(_n, _alpha), _beta),
        _plusSign_2(_n, _asterisk_2(_alpha, _beta)),
      ),
      _plusSign_2(
        _circumflexAccent_2(_plusSign_2(_alpha, _beta), 2),
        _plusSign_2(_plusSign_2(1, _alpha), _beta),
      ),
    );
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); let n = n(self); /((*(*(*(n, alpha), beta), (+(n, (*(alpha, beta)))))), (+((^((+(alpha, beta)), 2)), (+(+(1, alpha), beta))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  ["alpha", "beta", "n"],
  sl.annotateFunction(function (_alpha, _beta, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newBetaBinomialDistribution_0(),
      _alpha,
      _beta,
      _n,
    );
  }, ["alpha", "beta", "n"]),
  "{ :alpha :beta :n | initializeSlots(newBetaBinomialDistribution(),alpha, beta, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "BetaBinomialDistribution",
  "BetaBinomialDistribution",
  ["alpha", "beta", "n"],
  sl.annotateFunction(function (_alpha, _beta, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newBetaBinomialDistribution_0(),
      _alpha,
      _beta,
      _n,
    );
  }, ["alpha", "beta", "n"]),
  "{ :alpha :beta :n | initializeSlots(newBetaBinomialDistribution(),alpha, beta, n) }",
);
