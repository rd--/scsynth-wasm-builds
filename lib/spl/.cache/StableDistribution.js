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
  "{ :self :alpha :beta :mu :sigma |\n\t\tlet u = self.nextRandomFloat(-0.5.pi, 0.5.pi);\n\t\tlet w = self.exponentialDistribution(1);\n\t\tlet zeta = beta.negate * (alpha.pi / 2).tan;\n\t\tlet xi = (alpha != 1).if {\n\t\t\t(1 / alpha) * zeta.negate.arcTan\n\t\t} {\n\t\t\t1/2.pi\n\t\t};\n\t\tlet x = (alpha != 1).if {\n\t\t\t((1 + zeta.square) ^ (1 / (2 * alpha)))\n\t\t\t*\n\t\t\t(sin(alpha * (u + xi)) / (cos(u) ^ (1 / alpha)))\n\t\t\t*\n\t\t\t((cos(u - (alpha * (u + xi))) / w) ^ ((1 - alpha) / alpha))\n\t\t} {\n\t\t\t(1 / xi)\n\t\t\t*\n\t\t\t(\n\t\t\t\t((1/2.pi + (beta * u)) * tan(u))\n\t\t\t\t-\n\t\t\t\t(beta * log(1/2.pi * w * cos(u) / 1/2.pi + (beta * u)))\n\t\t\t)\n\t\t};\n\t\tlet y = (alpha != 1).if {\n\t\t\t(sigma * x) + mu\n\t\t} {\n\t\t\t(sigma * x) + ((2 / 1.pi) * beta * sigma * log(sigma)) + mu\n\t\t};\n\t\ty\n\t}",
);

sl.addType(
  false,
  "StableDistribution",
  "StableDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta", "mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "StableDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self :rng :shape |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{\n\t\t\trng.stableDistribution(alpha, beta, mu, sigma)\n\t\t} ! shape\n\t}",
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
  "{ :alpha :beta :mu :sigma |\n\t\tnewStableDistribution().initializeSlots(alpha, beta, mu, sigma)\n\t}",
);
