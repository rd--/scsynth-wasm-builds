sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "StableDistribution",
  "stableDistribution",
  ["self", "alpha", "beta", "mu", "sigma"],
  sl.annotateFunction(function (_self, _alpha, _beta, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _alpha, _beta, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_3(_self, _pi_1(-0.5), _pi_1(0.5));
    let _w = _exponentialDistribution_2(_self, 1);
    let _zeta = _asterisk_2(
      _negate_1(_beta),
      _tan_1(_solidus_2(_pi_1(_alpha), 2)),
    );
    let _xi = _if_3(
      _exclamationMarkEqualsSign_2(_alpha, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_solidus_2(1, _alpha), _arcTan_1(_negate_1(_zeta)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pi_1(_Fraction_2(1n, 2n));
      }, []),
    );
    let _x = _if_3(
      _exclamationMarkEqualsSign_2(_alpha, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _circumflexAccent_2(
              _plusSign_2(1, _square_1(_zeta)),
              _solidus_2(1, _asterisk_2(2, _alpha)),
            ),
            _solidus_2(
              _sin_1(_asterisk_2(_alpha, _plusSign_2(_u, _xi))),
              _circumflexAccent_2(_cos_1(_u), _solidus_2(1, _alpha)),
            ),
          ),
          _circumflexAccent_2(
            _solidus_2(
              _cos_1(
                _hyphenMinus_2(_u, _asterisk_2(_alpha, _plusSign_2(_u, _xi))),
              ),
              _w,
            ),
            _solidus_2(_hyphenMinus_2(1, _alpha), _alpha),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _solidus_2(1, _xi),
          _hyphenMinus_2(
            _asterisk_2(
              _plusSign_2(_pi_1(_Fraction_2(1n, 2n)), _asterisk_2(_beta, _u)),
              _tan_1(_u),
            ),
            _asterisk_2(
              _beta,
              _log_1(
                _plusSign_2(
                  _solidus_2(
                    _asterisk_2(
                      _asterisk_2(_pi_1(_Fraction_2(1n, 2n)), _w),
                      _cos_1(_u),
                    ),
                    _pi_1(_Fraction_2(1n, 2n)),
                  ),
                  _asterisk_2(_beta, _u),
                ),
              ),
            ),
          ),
        );
      }, []),
    );
    let _y = _if_3(
      _exclamationMarkEqualsSign_2(_alpha, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_sigma, _x), _mu);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _asterisk_2(_sigma, _x),
            _asterisk_2(
              _asterisk_2(_asterisk_2(_solidus_2(2, _pi_1(1)), _beta), _sigma),
              _log_1(_sigma),
            ),
          ),
          _mu,
        );
      }, []),
    );
    /* Statements */
    return _y;
  }, ["self", "alpha", "beta", "mu", "sigma"]),
  "{ :self :alpha :beta :mu :sigma | let u = nextRandomFloat(self,pi(-0.5), pi(0.5)); let w = exponentialDistribution(self,1); let zeta = *(negate(beta), tan((/(pi(alpha), 2)))); let xi = if((!=(alpha, 1)), { *((/(1, alpha)), arcTan(negate(zeta))) }, { pi(Fraction(1L, 2L)) }); let x = if((!=(alpha, 1)), { *(*((^((+(1, square(zeta))), (/(1, (*(2, alpha)))))), (/(sin(*(alpha, (+(u, xi)))), (^(cos(u), (/(1, alpha))))))), (^((/(cos(-(u, (*(alpha, (+(u, xi)))))), w)), (/((-(1, alpha)), alpha))))) }, { *((/(1, xi)), (-((*((+(pi(Fraction(1L, 2L)), (*(beta, u)))), tan(u))), (*(beta, log(+(/(*(*(pi(Fraction(1L, 2L)), w), cos(u)), pi(Fraction(1L, 2L))), (*(beta, u))))))))) }); let y = if((!=(alpha, 1)), { +((*(sigma, x)), mu) }, { +(+((*(sigma, x)), (*(*(*((/(2, pi(1))), beta), sigma), log(sigma)))), mu) }); y }",
);

sl.addType(
  false,
  "StableDistribution",
  "StableDistribution",
  ["Object", "ProbabilityDistribution"],
  ["alpha", "beta", "mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "StableDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "StableDistribution",
);

sl.addMethodToExistingType(
  "StableDistribution",
  "StableDistribution",
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
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stableDistribution_5(_rng, _alpha, _beta, _mu, _sigma);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let alpha = alpha(self); let beta = beta(self); let mu = mu(self); let sigma = sigma(self); !({ stableDistribution(rng,alpha, beta, mu, sigma) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "StableDistribution",
  "StableDistribution",
  ["alpha", "beta", "mu", "sigma"],
  sl.annotateFunction(function (_alpha, _beta, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _alpha, _beta, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newStableDistribution_0(),
      _alpha,
      _beta,
      _mu,
      _sigma,
    );
  }, ["alpha", "beta", "mu", "sigma"]),
  "{ :alpha :beta :mu :sigma | initializeSlots(newStableDistribution(),alpha, beta, mu, sigma) }",
);
