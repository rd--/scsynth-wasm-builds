sl.addType(
  false,
  "LaplaceDistribution",
  "LaplaceDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "beta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LaplaceDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LaplaceDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "LaplaceDistribution",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
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
      let _y = _solidus_2(
        _exp_1(_solidus_2(_negate_1(_abs_1(_hyphenMinus_2(_x, _mu))), _beta)),
        2,
      );
      /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_x, _mu),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(1, _y);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _y;
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\tlet y = ((x - mu).abs.negate / beta).exp / 2;\n\t\t\t(x >= mu).if {\n\t\t\t\t1 - y\n\t\t\t} {\n\t\t\t\ty\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_log_1(_asterisk_2(2, _beta_1(_self))), 1);
  }, ["self"]),
  "{ :self |\n\t\t(2 * self.beta).log + 1\n\t}",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
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
  "LaplaceDistribution",
  "LaplaceDistribution",
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
  "LaplaceDistribution",
  "LaplaceDistribution",
  "mode",
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
  "LaplaceDistribution",
  "LaplaceDistribution",
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
      } /* Statements */
      return _solidus_2(
        _exp_1(_solidus_2(_negate_1(_abs_1(_hyphenMinus_2(_x, _mu))), _beta)),
        _asterisk_2(2, _beta),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\t((x - mu).abs.negate / beta).exp / (2 * beta)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
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
        } /* Temporaries */
        let _u = _hyphenMinus_2(_nextRandomFloat_1(_rng), 0.5);
        /* Statements */
        return _hyphenMinus_2(
          _mu,
          _asterisk_2(
            _asterisk_2(_beta, _sign_1(_u)),
            _log_1(_hyphenMinus_2(1, _asterisk_2(2, _abs_1(_u)))),
          ),
        );
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet mu = self.mu;\n\t\tlet beta = self.beta;\n\t\t{\n\t\t\tlet u = rng.nextRandomFloat - 0.5;\n\t\t\tmu - (beta * u.sign * (1 - (2 * u.abs)).log)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
  "skewness",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["unused"]),
  "{ :unused |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "LaplaceDistribution",
  "LaplaceDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(2, _square_1(_beta_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t2 * self.beta.square\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LaplaceDistribution",
  "LaplaceDistribution",
  ["mu", "beta"],
  sl.annotateFunction(function (_mu, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLaplaceDistribution_0(), _mu, _beta);
  }, ["mu", "beta"]),
  "{ :mu :beta |\n\t\tnewLaplaceDistribution().initializeSlots(mu, beta)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "LaplaceDistribution",
  "LaplaceDistribution",
  ["mu", "beta"],
  sl.annotateFunction(function (_mu, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLaplaceDistribution_0(), _mu, _beta);
  }, ["mu", "beta"]),
  "{ :mu :beta |\n\t\tnewLaplaceDistribution().initializeSlots(mu, beta)\n\t}",
);
