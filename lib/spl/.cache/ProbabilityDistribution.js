/*  Requires: RandomNumberGenerator  */

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "normalDistributionCdf",
  ["mu", "sigma", "x"],
  function (_mu, _sigma, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      0.5,
      _erfc_1(
        _solidus_2(_hyphenMinus_2(_mu, _x), _asterisk_2(_sqrt_1(2), _sigma)),
      ),
    );
  },
  "{ :mu :sigma :x |\n\t\t0.5 * ((mu - x) / (2.sqrt * sigma)).erfc\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "normalDistributionPdf",
  ["mu", "sigma", "x"],
  function (_mu, _sigma, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  "{ :mu :sigma :x |\n\t\tlet n = (-0.5 * ((x - mu) / sigma).squared).exp;\n\t\tlet d = sigma * 2.pi.sqrt;\n\t\tn / d\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "poissonDistributionPdf",
  ["lambda", "x"],
  function (_lambda, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lambda, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exp_1(
      _hyphenMinus_2(
        _hyphenMinus_2(_asterisk_2(_x, _log_1(_lambda)), _lambda),
        _logGamma_1(_plusSign_2(_x, 1)),
      ),
    );
  },
  "{ :lambda :x |\n\t\t(x * lambda.log - lambda - (x + 1).logGamma).exp\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatEularianBetaDistribution",
  ["self", "x1", "x2", "p1", "p2"],
  function (_self, _x1, _x2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _x1, _x2, _p1, _p2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p1r = _solidus_2(1, _p1);
    let _p2r = _solidus_2(1, _p2);
    let _sum = 2;
    let _next = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_sum, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
  "{ :self :x1 :x2 :p1 :p2 |\n\t\tlet p1r = 1 / p1;\n\t\tlet p2r = 1 / p2;\n\t\tlet sum = 2;\n\t\tlet next = nil;\n\t\t{\n\t\t\tsum > 1\n\t\t}.whileTrue {\n\t\t\tnext := self.nextRandomFloat ^ p1r;\n\t\t\tsum := next + (self.nextRandomFloat ^ p2r)\n\t\t};\n\t\t((next / sum) * (x2 - x1)) + x1\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatCauchyDistribution",
  ["self", "mean", "spread"],
  function (_self, _mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mean, _spread";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = 0.5;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_r, 0.5);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _r = _nextRandomFloat_1(_self);
    });
    return _plusSign_2(
      _asterisk_2(_spread, _tan_1(_asterisk_2(_r, _pi))),
      _mean,
    );
  },
  "{ :self :mean :spread |\n\t\tlet r = 0.5;\n\t\t{\n\t\t\tr = 0.5\n\t\t}.whileTrue {\n\t\t\tr := self.nextRandomFloat\n\t\t};\n\t\tspread * (r * pi).tan + mean\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatGaussianDistribution",
  ["self", "mu", "sigma"],
  function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
  "{ :self :mu :sigma |\n\t\t(((-2 * self.nextRandomFloat.log).sqrt * (2.pi * self.nextRandomFloat).sin) * sigma) + mu\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLinearDistribution",
  ["self", "x1", "x2"],
  function (_self, _x1, _x2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x1, _x2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r1 = _nextRandomFloat_1(_self);
    let _r2 = _nextRandomFloat_1(_self);
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_r1, _r2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _r2 = _r1;
    });
    return _plusSign_2(_asterisk_2(_r2, _hyphenMinus_2(_x2, _x1)), _x1);
  },
  "{ :self :x1 :x2 |\n\t\tlet r1 = self.nextRandomFloat;\n\t\tlet r2 = self.nextRandomFloat;\n\t\t(r1 < r2).ifTrue {\n\t\t\tr2 := r1\n\t\t};\n\t\tr2 * (x2 - x1) + x1\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLogisticDistribution",
  ["self", "mean", "spread"],
  function (_self, _mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mean, _spread";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_log_1(_solidus_2(_u, _hyphenMinus_2(1, _u))), _spread),
      _mean,
    );
  },
  "{ :self :mean :spread |\n\t\tlet u = self.nextRandomFloat;\n\t\t(u / (1 - u)).log * spread + mean\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatParetoDistribution",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _circumflexAccent_2(_nextRandomFloat_1(_self), _solidus_2(-1, _shape)),
      _self,
    );
  },
  "{ :self :shape |\n\t\t(self.nextRandomFloat ^ (-1 / shape)) * self\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomIntegerPoissonDistribution",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = 0;
    let _r = _nextRandomFloat_1(_self);
    let _t = _exp_1(_negated_1(_n));
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_r, _t);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _k = _plusSign_2(_k, 1);
      return _r = _asterisk_2(_r, _nextRandomFloat_1(_self));
    });
    return _k;
  },
  "{ :self :n |\n\t\tlet k = 0;\n\t\tlet r = self.nextRandomFloat;\n\t\tlet t = n.negated.exp;\n\t\t{\n\t\t\tr > t\n\t\t}.whileTrue {\n\t\t\tk := k + 1;\n\t\t\tr := r * self.nextRandomFloat\n\t\t};\n\t\tk\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatWeibullDistribution",
  ["self", "location", "spread", "shape"],
  function (_self, _location, _spread, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _location, _spread, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = 1;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_r, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
  "{ :self :location :spread :shape |\n\t\tlet r = 1;\n\t\t{\n\t\t\tr = 1\n\t\t}.whileTrue {\n\t\t\tr := self.nextRandomFloat\n\t\t};\n\t\tspread * (r.log.negated ^ (1 / shape)) + location\n\t}",
);

sl.addType(
  false,
  "CauchyDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["x0", "gamma"],
);

sl.copyTraitToType(
  "Object",
  "CauchyDistribution",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym113 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2),
      _x0 = _at_2(__genSym113, 1),
      _gamma = _at_2(__genSym113, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(1, _pi),
        _arcTan_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma)),
      ),
      0.5,
    );
  },
  "{ :self :x |\n\t\tlet [x0, gamma] = [self.x0, self.gamma];\n\t\t(1 / pi) * ((x - x0) / gamma).arcTan + 0.5\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _log_1(_asterisk_2(_pi_1(4), _gamma_1(_self)));
  },
  "{ :self |\n\t\t(4.pi * self.gamma).log\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "CauchyDistribution>>mean: undefined");
  },
  "{ :self |\n\t\tself.error('CauchyDistribution>>mean: undefined')\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _x0_1(_self);
  },
  "{ :self |\n\t\tself.x0\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _x0_1(_self);
  },
  "{ :self |\n\t\tself.x0\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym114 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2),
      _x0 = _at_2(__genSym114, 1),
      _gamma = _at_2(__genSym114, 2);
    /* Statements */
    return _solidus_2(
      1,
      _asterisk_2(
        _pi_1(_gamma),
        _plusSign_2(1, _squared_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma))),
      ),
    );
  },
  "{ :self :x |\n\t\tlet [x0, gamma] = [self.x0, self.gamma];\n\t\t1 / (gamma.pi * (1 + ((x - x0) / gamma).squared))\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "quantile",
  ["self", "p"],
  function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _x0_1(_self),
      _asterisk_2(_gamma_1(_self), _tan_1(_pi_1(_hyphenMinus_2(_p, 0.5)))),
    );
  },
  "{ :self :p |\n\t\tself.x0 + (self.gamma * (p - 0.5).pi.tan)\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym115 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2),
      _x0 = _at_2(__genSym115, 1),
      _gamma = _at_2(__genSym115, 2);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextRandomFloatCauchyDistribution_3(_system, _x0, _gamma);
    }, _shape);
  },
  "{ :self :shape |\n\t\tlet [x0, gamma] = [self.x0, self.gamma];\n\t\t{\n\t\t\tsystem.nextRandomFloatCauchyDistribution(x0, gamma)\n\t\t} ! shape\n\t}",
);

sl.addMethod(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "CauchyDistribution>>variance: undefined");
  },
  "{ :self |\n\t\tself.error('CauchyDistribution>>variance: undefined')\n\t}",
);

sl.addType(
  false,
  "NormalDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["mu", "sigma"],
);

sl.copyTraitToType(
  "Object",
  "NormalDistribution",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _normalDistributionCdf_3(_mu_1(_self), _sigma_1(_self), _x);
  },
  "{ :self :x |\n\t\tnormalDistributionCdf(self.mu, self.sigma, x)\n\t}",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _mu_1(_self);
  },
  "{ :self |\n\t\tself.mu\n\t}",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _normalDistributionPdf_3(_mu_1(_self), _sigma_1(_self), _x);
  },
  "{ :self :x |\n\t\tnormalDistributionPdf(self.mu, self.sigma, x)\n\t}",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym116 = _assertIsOfSize_2([_mu_1(_self), _sigma_1(_self)], 2),
      _mu = _at_2(__genSym116, 1),
      _sigma = _at_2(__genSym116, 2);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextRandomFloatGaussianDistribution_3(_system, _mu, _sigma);
    }, _shape);
  },
  "{ :self :shape |\n\t\tlet [mu, sigma] = [self.mu, self.sigma];\n\t\t{\n\t\t\tsystem.nextRandomFloatGaussianDistribution(mu, sigma)\n\t\t} ! shape\n\t}",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sigma_1(_self);
  },
  "{ :self |\n\t\tself.sigma\n\t}",
);

sl.addMethod(
  "NormalDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _squared_1(_sigma_1(_self));
  },
  "{ :self |\n\t\tself.sigma.squared\n\t}",
);

sl.addType(
  false,
  "UniformDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["min", "max"],
);

sl.copyTraitToType(
  "Object",
  "UniformDistribution",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym117 = _assertIsOfSize_2([_min_1(_self), _max_1(_self)], 2),
      _min = _at_2(__genSym117, 1),
      _max = _at_2(__genSym117, 2);
    /* Statements */
    return _if_3(_lessThanSign_2(_x, _min), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_x, _max), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _solidus_2(_hyphenMinus_2(_x, _min), _hyphenMinus_2(_max, _min));
      });
    });
  },
  "{ :self :x |\n\t\tlet [min, max] = [self.min, self.max];\n\t\t(x < min).if {\n\t\t\t0\n\t\t} {\n\t\t\t(x > max).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(x - min) / (max - min)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _log_1(_hyphenMinus_2(_max_1(_self), _min_1(_self)));
  },
  "{ :self |\n\t\t(self.max - self.min).log\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "kurtosis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fraction_2(
      9,
      5,
    );
  },
  "{ :self |\n\t\t9/5\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  },
  "{ :self |\n\t\t(self.min + self.max) / 2\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  },
  "{ :self |\n\t\t(self.min + self.max) / 2\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_x, _min_1(_self), _max_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self :x |\n\t\tx.betweenAnd(self.min, self.max).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _randomReal_4(_system, _min_1(_self), _max_1(_self), _shape);
  },
  "{ :self :shape |\n\t\tsystem.randomReal(self.min, self.max, shape)\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "skewness",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_variance_1(_self));
  },
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
);

sl.addMethod(
  "UniformDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _squared_1(_hyphenMinus_2(_max_1(_self), _min_1(_self))),
      12,
    );
  },
  "{ :self |\n\t\t(self.max - self.min).squared / 12\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "CauchyDistribution",
  ["x0", "gamma"],
  function (_x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x0, _gamma";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newCauchyDistribution_0(), _x0, _gamma);
  },
  "{ :x0 :gamma |\n\t\tnewCauchyDistribution().initializeSlots(x0, gamma)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "NormalDistribution",
  ["mu", "sigma"],
  function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newNormalDistribution_0(), _mu, _sigma);
  },
  "{ :mu :sigma |\n\t\tnewNormalDistribution().initializeSlots(mu, sigma)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "UniformDistribution",
  ["min", "max"],
  function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newUniformDistribution_0(), _min, _max);
  },
  "{ :min :max |\n\t\tnewUniformDistribution().initializeSlots(min, max)\n\t}",
);
