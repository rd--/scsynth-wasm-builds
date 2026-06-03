sl.addType(
  false,
  "HyperbolicDistribution",
  "HyperbolicDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta", "delta", "mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HyperbolicDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HyperbolicDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "HyperbolicDistribution",
);

sl.addMethodToExistingType(
  "HyperbolicDistribution",
  "HyperbolicDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _delta = _delta_1(_self);
    let _mu = _mu_1(_self);
    let _p = _sqrt_1(_hyphenMinus_2(_square_1(_alpha), _square_1(_beta)));
    let _q = _asterisk_2(
      _asterisk_2(_asterisk_2(2, _alpha), _delta),
      _besselK_2(1, _asterisk_2(_p, _delta)),
    );
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _b = _asterisk_2(_beta, _hyphenMinus_2(_x, _mu));
      let _a = _asterisk_2(
        _alpha,
        _sqrt_1(
          _plusSign_2(_square_1(_delta), _square_1(_hyphenMinus_2(_x, _mu))),
        ),
      );
      /* Statements */
      return _solidus_2(_asterisk_2(_exp_1(_hyphenMinus_2(_b, _a)), _p), _q);
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet delta = self.delta;\n\t\tlet mu = self.mu;\n\t\tlet p = (alpha.square - beta.square).sqrt;\n\t\tlet q = 2 * alpha * delta * besselK(1, p * delta);\n\t\t{ :x |\n\t\t\tlet b = beta * (x - mu);\n\t\t\tlet a = alpha * (delta.square + (x - mu).square).sqrt;\n\t\t\t(b - a).exp * p / q\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicDistribution",
  "HyperbolicDistribution",
  ["alpha", "beta", "delta", "mu"],
  sl.annotateFunction(function (_alpha, _beta, _delta, _mu) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _alpha, _beta, _delta, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newHyperbolicDistribution_0(),
      _alpha,
      _beta,
      _delta,
      _mu,
    );
  }, ["alpha", "beta", "delta", "mu"]),
  "{ :alpha :beta :delta :mu |\n\t\tnewHyperbolicDistribution().initializeSlots(alpha, beta, delta, mu)\n\t}",
);
