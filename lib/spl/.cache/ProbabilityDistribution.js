/*  Requires: RandomNumberGenerator  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "normalDistributionCdf",
  ["x", "mu", "sigma"],
  sl.annotateFunction(function (_x, _mu, _sigma) {
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
  }, ["x", "mu", "sigma"]),
  "{ :x :mu :sigma | *(0.5, erfc((/((-(mu, x)), (*(sqrt(2), sigma)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "normalDistributionPdf",
  ["x", "mu", "sigma"],
  sl.annotateFunction(function (_x, _mu, _sigma) {
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
  }, ["x", "mu", "sigma"]),
  "{ :x :mu :sigma | let n = exp((*(-0.5, squared((/((-(x, mu)), sigma)))))); let d = *(sigma, sqrt(pi(2))); /(n, d) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "poissonDistributionPdf",
  ["x", "lambda"],
  sl.annotateFunction(function (_x, _lambda) {
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
  }, ["x", "lambda"]),
  "{ :x :lambda | exp((-(-(*(x, log(lambda)), lambda), logGamma((+(x, 1)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "weibullDistributionCdf",
  ["x", "gamma", "alpha", "mu"],
  sl.annotateFunction(function (_x, _gamma, _alpha, _mu) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _gamma, _alpha, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          1,
          _exp_1(
            _negated_1(
              _circumflexAccent_2(
                _solidus_2(_hyphenMinus_2(_x, _mu), _alpha),
                _gamma,
              ),
            ),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "gamma", "alpha", "mu"]),
  "{ :x :gamma :alpha :mu | if((>=(x, 0)), { -(1, exp(negated((^((/((-(x, mu)), alpha)), gamma))))) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "weibullDistributionCdf",
  ["x", "gamma"],
  sl.annotateFunction(function (_x, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _weibullDistributionCdf_4(_x, _gamma, 1, 0);
  }, ["x", "gamma"]),
  "{ :x :gamma | weibullDistributionCdf(x,gamma, 1, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "weibullDistributionPdf",
  ["x", "gamma", "alpha", "mu"],
  sl.annotateFunction(function (_x, _gamma, _alpha, _mu) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _gamma, _alpha, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, _mu),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _solidus_2(_gamma, _alpha),
            _circumflexAccent_2(
              _solidus_2(_hyphenMinus_2(_x, _mu), _alpha),
              _hyphenMinus_2(_gamma, 1),
            ),
          ),
          _exp_1(
            _negated_1(
              _circumflexAccent_2(
                _solidus_2(_hyphenMinus_2(_x, _mu), _alpha),
                _gamma,
              ),
            ),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "gamma", "alpha", "mu"]),
  "{ :x :gamma :alpha :mu | if((>=(x, mu)), { *(*((/(gamma, alpha)), (^((/((-(x, mu)), alpha)), (-(gamma, 1))))), exp(negated((^((/((-(x, mu)), alpha)), gamma))))) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "weibullDistributionPdf",
  ["x", "gamma"],
  sl.annotateFunction(function (_x, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _weibullDistributionPdf_4(_x, _gamma, 1, 0);
  }, ["x", "gamma"]),
  "{ :x :gamma | weibullDistributionPdf(x,gamma, 1, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "normalDistributionCdf",
  ["self", "mu", "sigma"],
  sl.annotateFunction(function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _normalDistributionCdf_3(_x, _mu, _sigma);
      }, ["x"]),
    );
  }, ["self", "mu", "sigma"]),
  "{ :self :mu :sigma | collect(self, { :x | normalDistributionCdf(x,mu, sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "normalDistributionPdf",
  ["self", "mu", "sigma"],
  sl.annotateFunction(function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _normalDistributionPdf_3(_x, _mu, _sigma);
      }, ["x"]),
    );
  }, ["self", "mu", "sigma"]),
  "{ :self :mu :sigma | collect(self, { :x | normalDistributionPdf(x,mu, sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ProbabilityDistribution",
  "poissonDistributionPdf",
  ["x", "lambda"],
  sl.annotateFunction(function (_x, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _poissonDistributionPdf_2(_x, _lambda);
      }, ["x"]),
    );
  }, ["x", "lambda"]),
  "{ :x :lambda | collect(self, { :x | poissonDistributionPdf(x,lambda) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatEulerianBetaDistribution",
  ["self", "x1", "x2", "p1", "p2"],
  sl.annotateFunction(function (_self, _x1, _x2, _p1, _p2) {
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
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_sum, 1);
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
    return _plusSign_2(
      _asterisk_2(_solidus_2(_next, _sum), _hyphenMinus_2(_x2, _x1)),
      _x1,
    );
  }, ["self", "x1", "x2", "p1", "p2"]),
  "{ :self :x1 :x2 :p1 :p2 | let p1r = /(1, p1); let p2r = /(1, p2); let sum = 2; let next = nil; whileTrue({ >(sum, 1) }, { next := ^(nextRandomFloat(self), p1r); sum := +(next, (^(nextRandomFloat(self), p2r))) }); +((*((/(next, sum)), (-(x2, x1)))), x1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatCauchyDistribution",
  ["self", "mean", "spread"],
  sl.annotateFunction(function (_self, _mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mean, _spread";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = 0.5;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_r, 0.5);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r = _nextRandomFloat_1(_self);
      }, []),
    );
    return _plusSign_2(_asterisk_2(_spread, _tan_1(_pi_1(_r))), _mean);
  }, ["self", "mean", "spread"]),
  "{ :self :mean :spread | let r = 0.5; whileTrue({ =(r, 0.5) }, { r := nextRandomFloat(self) }); +(*(spread, tan(pi(r))), mean) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatGaussianDistribution",
  ["self", "mu", "sigma"],
  sl.annotateFunction(function (_self, _mu, _sigma) {
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
  }, ["self", "mu", "sigma"]),
  "{ :self :mu :sigma | +((*((*(sqrt((*(-2, log(nextRandomFloat(self))))), sin((*(pi(2), nextRandomFloat(self)))))), sigma)), mu) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLinearDistribution",
  ["self", "x1", "x2"],
  sl.annotateFunction(function (_self, _x1, _x2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x1, _x2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r1 = _nextRandomFloat_1(_self);
    let _r2 = _nextRandomFloat_1(_self);
    /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_r1, _r2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r2 = _r1;
      }, []),
    );
    return _plusSign_2(_asterisk_2(_r2, _hyphenMinus_2(_x2, _x1)), _x1);
  }, ["self", "x1", "x2"]),
  "{ :self :x1 :x2 | let r1 = nextRandomFloat(self); let r2 = nextRandomFloat(self); ifTrue((<(r1, r2)), { r2 := r1 }); +(*(r2, (-(x2, x1))), x1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatLogisticDistribution",
  ["self", "mean", "spread"],
  sl.annotateFunction(function (_self, _mean, _spread) {
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
  }, ["self", "mean", "spread"]),
  "{ :self :mean :spread | let u = nextRandomFloat(self); +(*(log((/(u, (-(1, u))))), spread), mean) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatParetoDistribution",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _circumflexAccent_2(_nextRandomFloat_1(_self), _solidus_2(-1, _shape)),
      _self,
    );
  }, ["self", "shape"]),
  "{ :self :shape | *((^(nextRandomFloat(self), (/(-1, shape)))), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomIntegerPoissonDistribution",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 0;
    let _r = _nextRandomFloat_1(_self);
    let _t = _exp_1(_negated_1(_n));
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_r, _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _k = _plusSign_2(_k, 1);
        return _r = _asterisk_2(_r, _nextRandomFloat_1(_self));
      }, []),
    );
    return _k;
  }, ["self", "n"]),
  "{ :self :n | let k = 0; let r = nextRandomFloat(self); let t = exp(negated(n)); whileTrue({ >(r, t) }, { k := +(k, 1); r := *(r, nextRandomFloat(self)) }); k }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ProbabilityDistribution",
  "nextRandomFloatWeibullDistribution",
  ["self", "alpha", "beta", "mu"],
  sl.annotateFunction(function (_self, _alpha, _beta, _mu) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _alpha, _beta, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_r, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r = _nextRandomFloat_1(_self);
      }, []),
    );
    return _plusSign_2(
      _asterisk_2(
        _beta,
        _circumflexAccent_2(_negated_1(_log_1(_r)), _solidus_2(1, _alpha)),
      ),
      _mu,
    );
  }, ["self", "alpha", "beta", "mu"]),
  "{ :self :alpha :beta :mu | let r = 1; whileTrue({ =(r, 1) }, { r := nextRandomFloat(self) }); +(*(beta, (^(negated(log(r)), (/(1, alpha))))), mu) }",
);

sl.addType(
  false,
  "BernoulliDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BernoulliDistribution",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_x, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _p_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | if((<(x, 0)), { 0 }, { if((<(x, 1)), { -(1, p(self)) }, { 1 }) }) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _v = _asterisk_2(_hyphenMinus_2(1, _p), _p);
    /* Statements */
    return _plusSign_2(
      3,
      _solidus_2(_hyphenMinus_2(1, _asterisk_2(6, _v)), _v),
    );
  }, ["self"]),
  "{ :self | let p = p(self); let v = *((-(1, p)), p); +(3, (/((-(1, (*(6, v)))), v))) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _p_1(_self);
  }, ["self"]),
  "{ :self | p(self) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_p_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(p(self), 0.5)), { 1 }, { 0 }) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(1, _p);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_x, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _p;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | let p = p(self); if((=(x, 0)), { -(1, p) }, { if((=(x, 1)), { p }, { 0 }) }) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_lessThanSign_2(_nextRandomFloat_1(_rng), _p));
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let p = p(self); !({ boole((<(nextRandomFloat(rng), p))) }, shape) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _v = _asterisk_2(_hyphenMinus_2(1, _p), _p);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(1, _asterisk_2(2, _p)), _sqrt_1(_v));
  }, ["self"]),
  "{ :self | let p = p(self); let v = *((-(1, p)), p); /((-(1, (*(2, p)))), sqrt(v)) }",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _asterisk_2(_hyphenMinus_2(1, _p), _p);
  }, ["self"]),
  "{ :self | let p = p(self); *((-(1, p)), p) }",
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
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL1, 1);
    let _gamma = _at_2(__SPL1, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(1, _pi_1(1)),
        _arcTan_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma)),
      ),
      0.5,
    );
  }, ["self", "x"]),
  "{ :self :x | let __SPL1 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL1, 1); let gamma = at(__SPL1, 2); +(*((/(1, pi(1))), arcTan((/((-(x, x0)), gamma)))), 0.5) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asterisk_2(_pi_1(4), _gamma_1(_self)));
  }, ["self"]),
  "{ :self | log((*(pi(4), gamma(self)))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>mean: undefined");
  }, ["self"]),
  "{ :self | error(self,'CauchyDistribution>>mean: undefined') }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  }, ["self"]),
  "{ :self | x0(self) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "mode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  }, ["self"]),
  "{ :self | x0(self) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL2, 1);
    let _gamma = _at_2(__SPL2, 2);
    /* Statements */
    return _solidus_2(
      1,
      _asterisk_2(
        _pi_1(_gamma),
        _plusSign_2(1, _squared_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma))),
      ),
    );
  }, ["self", "x"]),
  "{ :self :x | let __SPL2 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL2, 1); let gamma = at(__SPL2, 2); /(1, (*(pi(gamma), (+(1, squared((/((-(x, x0)), gamma)))))))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "quantile",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _x0_1(_self),
      _asterisk_2(_gamma_1(_self), _tan_1(_pi_1(_hyphenMinus_2(_p, 0.5)))),
    );
  }, ["self", "p"]),
  "{ :self :p | +(x0(self), (*(gamma(self), tan(pi((-(p, 0.5))))))) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2([_x0_1(_self), _gamma_1(_self)], 2);
    let _x0 = _at_2(__SPL3, 1);
    let _gamma = _at_2(__SPL3, 2);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextRandomFloatCauchyDistribution_3(_rng, _x0, _gamma);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let __SPL3 = assertIsOfSize([x0(self), gamma(self)], 2); let x0 = at(__SPL3, 1); let gamma = at(__SPL3, 2); !({ nextRandomFloatCauchyDistribution(rng,x0, gamma) }, shape) }",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>variance: undefined");
  }, ["self"]),
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
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalDistributionCdf_3(_x, _mu_1(_self), _sigma_1(_self));
  }, ["self", "x"]),
  "{ :self :x | normalDistributionCdf(x,mu(self), sigma(self)) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mu_1(_self);
  }, ["self"]),
  "{ :self | mu(self) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalDistributionPdf_3(_x, _mu_1(_self), _sigma_1(_self));
  }, ["self", "x"]),
  "{ :self :x | normalDistributionPdf(x,mu(self), sigma(self)) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2([_mu_1(_self), _sigma_1(_self)], 2);
    let _mu = _at_2(__SPL4, 1);
    let _sigma = _at_2(__SPL4, 2);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextRandomFloatGaussianDistribution_3(_rng, _mu, _sigma);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let __SPL4 = assertIsOfSize([mu(self), sigma(self)], 2); let mu = at(__SPL4, 1); let sigma = at(__SPL4, 2); !({ nextRandomFloatGaussianDistribution(rng,mu, sigma) }, shape) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sigma_1(_self);
  }, ["self"]),
  "{ :self | sigma(self) }",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _squared_1(_sigma_1(_self));
  }, ["self"]),
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
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2([_min_1(_self), _max_1(_self)], 2);
    let _min = _at_2(__SPL5, 1);
    let _max = _at_2(__SPL5, 2);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_x, _min),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x, _max),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _hyphenMinus_2(_x, _min),
              _hyphenMinus_2(_max, _min),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | let __SPL5 = assertIsOfSize([min(self), max(self)], 2); let min = at(__SPL5, 1); let max = at(__SPL5, 2); if((<(x, min)), { 0 }, { if((>(x, max)), { 1 }, { /((-(x, min)), (-(max, min))) }) }) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_hyphenMinus_2(_max_1(_self), _min_1(_self)));
  }, ["self"]),
  "{ :self | log((-(max(self), min(self)))) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(9n, 5n);
  }, ["self"]),
  "{ :self | Fraction(9L, 5L) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  }, ["self"]),
  "{ :self | /((+(min(self), max(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_min_1(_self), _max_1(_self)), 2);
  }, ["self"]),
  "{ :self | /((+(min(self), max(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_x, _min_1(_self), _max_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | if(betweenAnd(x,min(self), max(self)), { 1 }, { 0 }) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_rng, _min_1(_self), _max_1(_self), _shape);
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | randomReal(rng,min(self), max(self), shape) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_variance_1(_self));
  }, ["self"]),
  "{ :self | sqrt(variance(self)) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "ProbabilityDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _squared_1(_hyphenMinus_2(_max_1(_self), _min_1(_self))),
      12,
    );
  }, ["self"]),
  "{ :self | /(squared((-(max(self), min(self)))), 12) }",
);

sl.addType(
  false,
  "WeibullDistribution",
  "ProbabilityDistribution",
  ["Object"],
  ["alpha", "beta", "mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeibullDistribution",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _weibullDistributionCdf_4(
      _x,
      _alpha_1(_self),
      _beta_1(_self),
      _mu_1(_self),
    );
  }, ["self", "x"]),
  "{ :self :x | weibullDistributionCdf(x,alpha(self), beta(self), mu(self)) }",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "ProbabilityDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _beta_1(_self),
        _gamma_1(_plusSign_2(1, _solidus_2(1, _alpha_1(_self)))),
      ),
      _mu_1(_self),
    );
  }, ["self"]),
  "{ :self | +(*(beta(self), gamma((+(1, (/(1, alpha(self))))))), mu(self)) }",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "ProbabilityDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _beta_1(_self),
        _circumflexAccent_2(_log_1(2), _solidus_2(1, _alpha_1(_self))),
      ),
      _mu_1(_self),
    );
  }, ["self"]),
  "{ :self | +(*(beta(self), (^(log(2), (/(1, alpha(self)))))), mu(self)) }",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _weibullDistributionPdf_4(
      _x,
      _alpha_1(_self),
      _beta_1(_self),
      _mu_1(_self),
    );
  }, ["self", "x"]),
  "{ :self :x | weibullDistributionPdf(x,alpha(self), beta(self), mu(self)) }",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "ProbabilityDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL6 = _assertIsOfSize_2([
      _alpha_1(_self),
      _beta_1(_self),
      _mu_1(_self),
    ], 3);
    let _alpha = _at_2(__SPL6, 1);
    let _beta = _at_2(__SPL6, 2);
    let _mu = _at_2(__SPL6, 3);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextRandomFloatWeibullDistribution_4(_rng, _alpha, _beta, _mu);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let __SPL6 = assertIsOfSize([alpha(self), beta(self), mu(self)], 3); let alpha = at(__SPL6, 1); let beta = at(__SPL6, 2); let mu = at(__SPL6, 3); !({ nextRandomFloatWeibullDistribution(rng,alpha, beta, mu) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "BernoulliDistribution",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBernoulliDistribution_0(), _p);
  }, ["p"]),
  "{ :p | initializeSlots(newBernoulliDistribution(),p) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "CauchyDistribution",
  ["x0", "gamma"],
  sl.annotateFunction(function (_x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x0, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCauchyDistribution_0(), _x0, _gamma);
  }, ["x0", "gamma"]),
  "{ :x0 :gamma | initializeSlots(newCauchyDistribution(),x0, gamma) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "NormalDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newNormalDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma | initializeSlots(newNormalDistribution(),mu, sigma) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "UniformDistribution",
  ["min", "max"],
  sl.annotateFunction(function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newUniformDistribution_0(), _min, _max);
  }, ["min", "max"]),
  "{ :min :max | initializeSlots(newUniformDistribution(),min, max) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ProbabilityDistribution",
  "WeibullDistribution",
  ["alpha", "beta", "mu"],
  sl.annotateFunction(function (_alpha, _beta, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newWeibullDistribution_0(), _alpha, _beta, _mu);
  }, ["alpha", "beta", "mu"]),
  "{ :alpha :beta :mu | initializeSlots(newWeibullDistribution(),alpha, beta, mu) }",
);
