sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "GammaDistribution",
  "gammaDistribution",
  ["self", "alpha", "beta"],
  sl.annotateFunction(function (_self, _alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a, _afix, _c, _d, _u, _v, _x;
    /* Statements */
    _if_3(
      _lessThanSign_2(_alpha, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _a = _plusSign_2(_alpha, 1);
        return _afix = _circumflexAccent_2(
          _nextRandomFloat_1(_self),
          _solidus_2(1, _alpha),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _a = _alpha;
        return _afix = 1;
      }, []),
    );
    _d = _hyphenMinus_2(_a, _solidus_2(1, 3));
    _c = _solidus_2(1, _sqrt_1(_asterisk_2(9, _d)));
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _doWhileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _x = _normalDistribution_3(_self, 0, 1);
            return _v = _plusSign_2(1, _asterisk_2(_c, _x));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_v, 0);
          }, []),
        );
        _v = _asterisk_2(_asterisk_2(_v, _v), _v);
        _x = _asterisk_2(_x, _x);
        return _u = _nextRandomFloat_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _greaterThanSignEqualsSign_2(
            _u,
            _hyphenMinus_2(1, _asterisk_2(_asterisk_2(0.0331, _x), _x)),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _log_1(_u),
              _plusSign_2(
                _asterisk_2(0.5, _x),
                _asterisk_2(_d, _plusSign_2(_hyphenMinus_2(1, _v), _log_1(_v))),
              ),
            );
          }, []),
        );
      }, []),
    );
    return _asterisk_2(_asterisk_2(_asterisk_2(_afix, _d), _v), _beta);
  }, ["self", "alpha", "beta"]),
  "{ :self :alpha :beta | var a, afix, c, d, u, v, x;if((<(alpha, 1)), { a := +(alpha, 1); afix := ^(nextRandomFloat(self), (/(1, alpha))) }, { a := alpha; afix := 1 }); d := -(a, (/(1, 3))); c := /(1, sqrt((*(9, d)))); doWhileTrue({ doWhileTrue({ x := normalDistribution(self,0, 1); v := +(1, (*(c, x))) }, { <=(v, 0) }); v := *(*(v, v), v); x := *(x, x); u := nextRandomFloat(self) }, { |(>=(u, (-(1, (*(*(0.0331, x), x))))), { >=(log(u), (+((*(0.5, x)), (*(d, (+(-(1, v), log(v)))))))) }) }); *(*(*(afix, d), v), beta) }",
);

sl.addType(
  false,
  "GammaDistribution",
  "GammaDistribution",
  ["Object", "ProbabilityDistribution"],
  ["alpha", "beta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GammaDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "GammaDistribution",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _lowerIncompleteGamma_2(_solidus_2(_x, _beta), _alpha);
    }, ["x"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); { :x | lowerIncompleteGamma((/(x, beta)),alpha) } }",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_alpha_1(_self), _beta_1(_self));
  }, ["self"]),
  "{ :self | *(alpha(self), beta(self)) }",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
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
      let _alpha = _alpha_1(_self);
      let _beta = _beta_1(_self);
      /* Statements */
      return _solidus_2(
        _asterisk_2(
          _asterisk_2(
            _exp_1(_hyphenMinus_1(_solidus_2(_x, _beta))),
            _circumflexAccent_2(_x, _hyphenMinus_2(_alpha, 1)),
          ),
          _circumflexAccent_2(_beta, _hyphenMinus_1(_alpha)),
        ),
        _gamma_1(_alpha),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | { :x | let alpha = alpha(self); let beta = beta(self); /((*(*(exp(-((/(x, beta)))), (^(x, (-(alpha, 1))))), (^(beta, -(alpha))))), gamma(alpha)) } }",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
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
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gammaDistribution_3(_rng, _alpha, _beta);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let alpha = alpha(self); let beta = beta(self); !({ gammaDistribution(rng,alpha, beta) }, shape) }",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
  "survivalFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _upperIncompleteGamma_2(
      _solidus_2(_x, _beta_1(_self)),
      _alpha_1(_self),
    );
  }, ["self", "x"]),
  "{ :self :x | upperIncompleteGamma((/(x, beta(self))),alpha(self)) }",
);

sl.addMethodToExistingType(
  "GammaDistribution",
  "GammaDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_alpha_1(_self), _squared_1(_beta_1(_self)));
  }, ["self"]),
  "{ :self | *(alpha(self), squared(beta(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GammaDistribution",
  "ChiSquareDistribution",
  ["nu"],
  sl.annotateFunction(function (_nu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _nu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newGammaDistribution_0(), _solidus_2(_nu, 2), 2);
  }, ["nu"]),
  "{ :nu | initializeSlots(newGammaDistribution(),/(nu, 2), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "GammaDistribution",
  "ChiSquareDistribution",
  ["nu"],
  sl.annotateFunction(function (_nu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _nu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newGammaDistribution_0(), _solidus_2(_nu, 2), 2);
  }, ["nu"]),
  "{ :nu | initializeSlots(newGammaDistribution(),/(nu, 2), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GammaDistribution",
  "GammaDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newGammaDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta | initializeSlots(newGammaDistribution(),alpha, beta) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "GammaDistribution",
  "GammaDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newGammaDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta | initializeSlots(newGammaDistribution(),alpha, beta) }",
);
