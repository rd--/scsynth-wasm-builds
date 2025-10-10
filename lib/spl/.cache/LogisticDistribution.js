sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "LogisticDistribution",
  "logisticDistribution",
  ["self", "mu", "beta"],
  sl.annotateFunction(function (_self, _mu, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _beta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_log_1(_solidus_2(_u, _hyphenMinus_2(1, _u))), _beta),
      _mu,
    );
  }, ["self", "mu", "beta"]),
  "{ :self :mu :beta |\n\t\tlet u = self.nextRandomFloat;\n\t\t(u / (1 - u)).log * beta + mu\n\t}",
);

sl.addType(
  false,
  "LogisticDistribution",
  "LogisticDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "beta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LogisticDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LogisticDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "LogisticDistribution",
);

sl.addMethodToExistingType(
  "LogisticDistribution",
  "LogisticDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _beta = _beta_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _exp_1(
        _hyphenMinus_1(_solidus_2(_hyphenMinus_2(_x, _mu), _beta)),
      );
      /* Statements */
      return _solidus_2(1, _plusSign_2(1, _z));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\tlet z = ((x - mu) / beta).-.exp;\n\t\t\t1 / (1 + z)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LogisticDistribution",
  "LogisticDistribution",
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
  "{ :self |\n\t\tself.mu\n\t}",
);

sl.addMethodToExistingType(
  "LogisticDistribution",
  "LogisticDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mu_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.mu\n\t}",
);

sl.addMethodToExistingType(
  "LogisticDistribution",
  "LogisticDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _beta = _beta_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _exp_1(
        _hyphenMinus_1(_solidus_2(_hyphenMinus_2(_x, _mu), _beta)),
      );
      /* Statements */
      return _solidus_2(_z, _asterisk_2(_square_1(_plusSign_2(1, _z)), _beta));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\tlet z = ((x - mu) / beta).-.exp;\n\t\t\tz / ((1 + z).square * beta)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LogisticDistribution",
  "LogisticDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _beta = _beta_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _logisticDistribution_3(_rng, _mu, _beta);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{\n\t\t\trng.logisticDistribution(mu, beta)\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LogisticDistribution",
  "LogisticDistribution",
  ["mu", "beta"],
  sl.annotateFunction(function (_mu, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLogisticDistribution_0(), _mu, _beta);
  }, ["mu", "beta"]),
  "{ :mu :beta |\n\t\tnewLogisticDistribution().initializeSlots(mu, beta)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "LogisticDistribution",
  "LogisticDistribution",
  ["mu", "beta"],
  sl.annotateFunction(function (_mu, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLogisticDistribution_0(), _mu, _beta);
  }, ["mu", "beta"]),
  "{ :mu :beta |\n\t\tnewLogisticDistribution().initializeSlots(mu, beta)\n\t}",
);
