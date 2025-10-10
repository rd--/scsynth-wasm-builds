sl.addType(
  false,
  "LevyDistribution",
  "LevyDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LevyDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LevyDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "LevyDistribution",
);

sl.addMethodToExistingType(
  "LevyDistribution",
  "LevyDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _a = _sqrt_1(_solidus_2(_sigma, _pi_1(2)));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _b = _exp_1(
        _negate_1(_solidus_2(_sigma, _asterisk_2(2, _hyphenMinus_2(_x, _mu)))),
      );
      let _c = _circumflexAccent_2(_hyphenMinus_2(_x, _mu), _solidus_2(3, 2));
      /* Statements */
      return _asterisk_2(_a, _solidus_2(_b, _c));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet a = (sigma / 2.pi).sqrt;\n\t\t{ :x |\n\t\t\tlet b = (sigma / (2 * (x - mu))).negate.exp;\n\t\t\tlet c = (x - mu) ^ (3 / 2);\n\t\t\ta * (b / c)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LevyDistribution",
  "LevyDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _f_1 = _inverseCdf_1(_NormalDistribution_2(0, 1));
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _nextRandomFloat_3(_rng, 0, 1);
        /* Statements */
        return _plusSign_2(
          _solidus_2(
            _sigma,
            _square_1(_f_1(_hyphenMinus_2(1, _solidus_2(_u, 2)))),
          ),
          _mu,
        );
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet f:/1 = NormalDistribution(0, 1).inverseCdf;\n\t\t{\n\t\t\tlet u = rng.nextRandomFloat(0, 1);\n\t\t\t(sigma / f(1 - (u / 2)).square) + mu\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LevyDistribution",
  "LevyDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLevyDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma |\n\t\tnewLevyDistribution().initializeSlots(mu, sigma)\n\t}",
);
