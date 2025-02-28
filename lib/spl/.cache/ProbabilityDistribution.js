/*  Requires: RandomNumberGenerator  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "normalDistributionCdf",
  ["x", "mu", "sigma"],
  function (_x, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      0.5,
      _erfc_1(
        _solidus_2(_hyphenMinus_2(_mu, _x), _asterisk_2(_sqrt_1(2), _sigma)),
      ),
    );
  },
  "{ :x :mu :sigma | *(0.5, erfc((/((-(mu, x)), (*(sqrt(2), sigma)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "normalDistributionPdf",
  ["x", "mu", "sigma"],
  function (_x, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _exp_1(
      _asterisk_2(
        -0.5,
        _squared_1(_solidus_2(_hyphenMinus_2(_x, _mu), _sigma)),
      ),
    );
    let _d = _asterisk_2(_sigma, _sqrt_1(_pi_1(2)));
    /* Statements */
    return _solidus_2(_n, _d);
  },
  "{ :x :mu :sigma | let n = exp((*(-0.5, squared((/((-(x, mu)), sigma)))))); let d = *(sigma, sqrt(pi(2))); /(n, d) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "poissonDistributionPdf",
  ["x", "lambda"],
  function (_x, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _exp_1(
      _hyphenMinus_2(
        _hyphenMinus_2(_asterisk_2(_x, _log_1(_lambda)), _lambda),
        _logGamma_1(_plusSign_2(_x, 1)),
      ),
    );
  },
  "{ :x :lambda | exp((-(-(*(x, log(lambda)), lambda), logGamma((+(x, 1)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "normalDistributionCdf",
  ["self", "mu", "sigma"],
  function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _normalDistributionCdf_3(_x, _mu, _sigma);
    });
  },
  "{ :self :mu :sigma | collect(self, { :x | normalDistributionCdf(x,mu, sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "normalDistributionPdf",
  ["self", "mu", "sigma"],
  function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _normalDistributionPdf_3(_x, _mu, _sigma);
    });
  },
  "{ :self :mu :sigma | collect(self, { :x | normalDistributionPdf(x,mu, sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "poissonDistributionPdf",
  ["x", "lambda"],
  function (_x, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _poissonDistributionPdf_2(_x, _lambda);
    });
  },
  "{ :x :lambda | collect(self, { :x | poissonDistributionPdf(x,lambda) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatEulerianBetaDistribution",
  ["self", "x1", "x2", "p1", "p2"],
  function (_self, _x1, _x2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _x1, _x2, _p1, _p2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p1r = _solidus_2(1, _p1);
    let _p2r = _solidus_2(1, _p2);
    let _sum = 2;
    let _next = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_sum, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _next = _circumflexAccent_2(_nextRandomFloat_1(_self), _p1r);
      return _sum = _plusSign_2(
        _next,
        _circumflexAccent_2(_nextRandomFloat_1(_self), _p2r),
      );
    });
    return _plusSign_2(
      _asterisk_2(_solidus_2(_next, _sum), _hyphenMinus_2(_x2, _x1)),
      _x1,
    );
  },
  "{ :self :x1 :x2 :p1 :p2 | let p1r = /(1, p1); let p2r = /(1, p2); let sum = 2; let next = nil; whileTrue({ >(sum, 1) }, { next := ^(nextRandomFloat(self), p1r); sum := +(next, (^(nextRandomFloat(self), p2r))) }); +((*((/(next, sum)), (-(x2, x1)))), x1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatCauchyDistribution",
  ["self", "mean", "spread"],
  function (_self, _mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mean, _spread";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = 0.5;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_r, 0.5);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _r = _nextRandomFloat_1(_self);
    });
    return _plusSign_2(_asterisk_2(_spread, _tan_1(_pi_1(_r))), _mean);
  },
  "{ :self :mean :spread | let r = 0.5; whileTrue({ =(r, 0.5) }, { r := nextRandomFloat(self) }); +(*(spread, tan(pi(r))), mean) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatGaussianDistribution",
  ["self", "mu", "sigma"],
  function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _asterisk_2(
          _sqrt_1(_asterisk_2(-2, _log_1(_nextRandomFloat_1(_self)))),
          _sin_1(_asterisk_2(_pi_1(2), _nextRandomFloat_1(_self))),
        ),
        _sigma,
      ),
      _mu,
    );
  },
  "{ :self :mu :sigma | +((*((*(sqrt((*(-2, log(nextRandomFloat(self))))), sin((*(pi(2), nextRandomFloat(self)))))), sigma)), mu) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLinearDistribution",
  ["self", "x1", "x2"],
  function (_self, _x1, _x2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x1, _x2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r1 = _nextRandomFloat_1(_self);
    let _r2 = _nextRandomFloat_1(_self);
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_r1, _r2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _r2 = _r1;
    });
    return _plusSign_2(_asterisk_2(_r2, _hyphenMinus_2(_x2, _x1)), _x1);
  },
  "{ :self :x1 :x2 | let r1 = nextRandomFloat(self); let r2 = nextRandomFloat(self); ifTrue((<(r1, r2)), { r2 := r1 }); +(*(r2, (-(x2, x1))), x1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLogisticDistribution",
  ["self", "mean", "spread"],
  function (_self, _mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mean, _spread";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_log_1(_solidus_2(_u, _hyphenMinus_2(1, _u))), _spread),
      _mean,
    );
  },
  "{ :self :mean :spread | let u = nextRandomFloat(self); +(*(log((/(u, (-(1, u))))), spread), mean) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatParetoDistribution",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _circumflexAccent_2(_nextRandomFloat_1(_self), _solidus_2(-1, _shape)),
      _self,
    );
  },
  "{ :self :shape | *((^(nextRandomFloat(self), (/(-1, shape)))), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomIntegerPoissonDistribution",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 0;
    let _r = _nextRandomFloat_1(_self);
    let _t = _exp_1(_negated_1(_n));
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_r, _t);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _k = _plusSign_2(_k, 1);
      return _r = _asterisk_2(_r, _nextRandomFloat_1(_self));
    });
    return _k;
  },
  "{ :self :n | let k = 0; let r = nextRandomFloat(self); let t = exp(negated(n)); whileTrue({ >(r, t) }, { k := +(k, 1); r := *(r, nextRandomFloat(self)) }); k }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatWeibullDistribution",
  ["self", "location", "spread", "shape"],
  function (_self, _location, _spread, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _location, _spread, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = 1;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_r, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _r = _nextRandomFloat_1(_self);
    });
    return _plusSign_2(
      _asterisk_2(
        _spread,
        _circumflexAccent_2(_negated_1(_log_1(_r)), _solidus_2(1, _shape)),
      ),
      _location,
    );
  },
  "{ :self :location :spread :shape | let r = 1; whileTrue({ =(r, 1) }, { r := nextRandomFloat(self) }); +(*(spread, (^(negated(log(r)), (/(1, shape))))), location) }",
);

sl.addType(
  false,
  "CauchyDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["x0", "gamma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CauchyDistribution",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL238 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL238, 1);
    let _gamma = _at_2(__SPL238, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(1, _pi_1(1)),
        _arcTan_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma)),
      ),
      0.5,
    );
  },
  "{ :self :x | let __SPL238 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL238, 1); let gamma = at(__SPL238, 2); +(*((/(1, pi(1))), arcTan((/((-(x, x0)), gamma)))), 0.5) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asterisk_2(_pi_1(4), _gamma_1(_self)));
  },
  "{ :self | log((*(pi(4), gamma(self)))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>mean: undefined");
  },
  "{ :self | error(self,'CauchyDistribution>>mean: undefined') }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  },
  "{ :self | x0(self) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  },
  "{ :self | x0(self) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL239 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL239, 1);
    let _gamma = _at_2(__SPL239, 2);
    /* Statements */
    return _solidus_2(
      1,
      _asterisk_2(
        _pi_1(_gamma),
        _plusSign_2(1, _squared_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma))),
      ),
    );
  },
  "{ :self :x | let __SPL239 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL239, 1); let gamma = at(__SPL239, 2); /(1, (*(pi(gamma), (+(1, squared((/((-(x, x0)), gamma)))))))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "quantile",
  ["self", "p"],
  function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _x0_1(_self),
      _asterisk_2(_gamma_1(_self), _tan_1(_pi_1(_hyphenMinus_2(_p, 0.5)))),
    );
  },
  "{ :self :p | +(x0(self), (*(gamma(self), tan(pi((-(p, 0.5))))))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL240 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL240, 1);
    let _gamma = _at_2(__SPL240, 2);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextRandomFloatCauchyDistribution_3(_rng, _x0, _gamma);
    }, _shape);
  },
  "{ :self :rng :shape | let __SPL240 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL240, 1); let gamma = at(__SPL240, 2); !({ nextRandomFloatCauchyDistribution(rng,x0, gamma) }, shape) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>variance: undefined");
  },
  "{ :self | error(self,'CauchyDistribution>>variance: undefined') }",
);

sl.addType(
  false,
  "NormalDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NormalDistribution",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalDistributionCdf_3(_x, _mu_1(_self), _sigma_1(_self));
  },
  "{ :self :x | normalDistributionCdf(x,mu(self), sigma(self)) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mu_1(_self);
  },
  "{ :self | mu(self) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalDistributionPdf_3(_x, _mu_1(_self), _sigma_1(_self));
  },
  "{ :self :x | normalDistributionPdf(x,mu(self), sigma(self)) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL241 = _assertIsOfSize_2([_mu_1(_self), _sigma_1(_self)], 2);
    let _mu = _at_2(__SPL241, 1);
    let _sigma = _at_2(__SPL241, 2);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextRandomFloatGaussianDistribution_3(_rng, _mu, _sigma);
    }, _shape);
  },
  "{ :self :rng :shape | let __SPL241 = assertIsOfSize([mu(self), sigma(self)], 2); let mu = at(__SPL241, 1); let sigma = at(__SPL241, 2); !({ nextRandomFloatGaussianDistribution(rng,mu, sigma) }, shape) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sigma_1(_self);
  },
  "{ :self | sigma(self) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _squared_1(_sigma_1(_self));
  },
  "{ :self | squared(sigma(self)) }",
);

sl.addType(
  false,
  "UniformDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["min", "max"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UniformDistribution",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL242 = _assertIsOfSize_2([_min_1(_self), _max_1(_self)], 2);
    let _min = _at_2(__SPL242, 1);
    let _max = _at_2(__SPL242, 2);
    /* Statements */
    return _if_3(_lessThanSign_2(_x, _min), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_x, _max), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_hyphenMinus_2(_x, _min), _hyphenMinus_2(_max, _min));
      });
    });
  },
  "{ :self :x | let __SPL242 = assertIsOfSize([min(self), max(self)], 2); let min = at(__SPL242, 1); let max = at(__SPL242, 2); if((<(x, min)), { 0 }, { if((>(x, max)), { 1 }, { /((-(x, min)), (-(max, min))) }) }) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_hyphenMinus_2(_max_1(_self), _min_1(_self)));
  },
  "{ :self | log((-(max(self), min(self)))) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "kurtosis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(9n, 5n);
  },
  "{ :self | Fraction(9L, 5L) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  },
  "{ :self | /((+(min(self), max(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  },
  "{ :self | /((+(min(self), max(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_betweenAnd_3(_x, _min_1(_self), _max_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self :x | if(betweenAnd(x,min(self), max(self)), { 1 }, { 0 }) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_rng, _min_1(_self), _max_1(_self), _shape);
  },
  "{ :self :rng :shape | randomReal(rng,min(self), max(self), shape) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "skewness",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self | 0 }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_variance_1(_self));
  },
  "{ :self | sqrt(variance(self)) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _squared_1(_hyphenMinus_2(_max_1(_self), _min_1(_self))),
      12,
    );
  },
  "{ :self | /(squared((-(max(self), min(self)))), 12) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "CauchyDistribution",
  ["x0", "gamma"],
  function (_x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x0, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCauchyDistribution_0(), _x0, _gamma);
  },
  "{ :x0 :gamma | initializeSlots(newCauchyDistribution(),x0, gamma) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "NormalDistribution",
  ["mu", "sigma"],
  function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newNormalDistribution_0(), _mu, _sigma);
  },
  "{ :mu :sigma | initializeSlots(newNormalDistribution(),mu, sigma) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "UniformDistribution",
  ["min", "max"],
  function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newUniformDistribution_0(), _min, _max);
  },
  "{ :min :max | initializeSlots(newUniformDistribution(),min, max) }",
);
