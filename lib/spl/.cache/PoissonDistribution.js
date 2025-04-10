sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "PoissonDistribution",
  "poissonDistribution",
  ["self", "mu"],
  sl.annotateFunction(function (_self, _mu) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 0;
    let _r = _nextRandomFloat_1(_self);
    let _t = _exp_1(_negated_1(_mu));
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
  }, ["self", "mu"]),
  "{ :self :mu | let k = 0; let r = nextRandomFloat(self); let t = exp(negated(mu)); whileTrue({ >(r, t) }, { k := +(k, 1); r := *(r, nextRandomFloat(self)) }); k }",
);

sl.addType(
  false,
  "PoissonDistribution",
  "PoissonDistribution",
  ["Object", "ProbabilityDistribution"],
  ["mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PoissonDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "PoissonDistribution",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(
        _collect_2(
          _upOrDownTo_2(0, _x),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _asterisk_2(
                _exp_1(_hyphenMinus_1(_mu)),
                _circumflexAccent_2(_mu, _i),
              ),
              _exclamationMark_1(_i),
            );
          }, ["i"]),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let mu = mu(self); { :x | sum(collect(upOrDownTo(0, x), { :i | /((*(exp(-(mu)), (^(mu, i)))), !(i)) })) } }",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(3, _solidus_2(1, _mu_1(_self)));
  }, ["self"]),
  "{ :self | +(3, (/(1, mu(self)))) }",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
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
  "PoissonDistribution",
  "PoissonDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _exp_1(
        _hyphenMinus_2(
          _hyphenMinus_2(_asterisk_2(_x, _log_1(_mu)), _mu),
          _logGamma_1(_plusSign_2(_x, 1)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let mu = mu(self); { :x | exp((-(-(*(x, log(mu)), mu), logGamma((+(x, 1)))))) } }",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _poissonDistribution_2(_rng, _mu);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let mu = mu(self); !({ poissonDistribution(rng,mu) }, shape) }",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sqrt_1(_mu_1(_self)));
  }, ["self"]),
  "{ :self | /(1, sqrt(mu(self))) }",
);

sl.addMethodToExistingType(
  "PoissonDistribution",
  "PoissonDistribution",
  "variance",
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

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PoissonDistribution",
  "PoissonDistribution",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPoissonDistribution_0(), _mu);
  }, ["mu"]),
  "{ :mu | initializeSlots(newPoissonDistribution(),mu) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "PoissonDistribution",
  "PoissonDistribution",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPoissonDistribution_0(), _mu);
  }, ["mu"]),
  "{ :mu | initializeSlots(newPoissonDistribution(),mu) }",
);
