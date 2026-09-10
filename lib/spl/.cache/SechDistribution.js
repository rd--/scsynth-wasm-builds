sl.addType(
  false,
  "SechDistribution",
  "SechDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SechDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SechDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "SechDistribution",
);

sl.addMethodToExistingType(
  "SechDistribution",
  "SechDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _asterisk_2(
          _arcTan_1(
            _exp_1(
              _solidus_2(
                _pi_1(_hyphenMinus_2(_x, _mu)),
                _asterisk_2(2, _sigma),
              ),
            ),
          ),
          2,
        ),
        _pi_1(1),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{ :x |\n\t\t\t(((x - mu).pi / (2 * sigma)).exp.arcTan * 2) / 1.pi\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SechDistribution",
  "SechDistribution",
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
  "SechDistribution",
  "SechDistribution",
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
  "SechDistribution",
  "SechDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _p = _asterisk_2(2, _sigma);
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _sech_1(_solidus_2(_pi_1(_hyphenMinus_2(_x, _mu)), _p)),
        _p,
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet p = 2 * sigma;\n\t\t{ :x |\n\t\t\t((x - mu).pi / p).sech / p\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SechDistribution",
  "SechDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _square_1(_sigma_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sigma.square\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SechDistribution",
  "SechDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSechDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma |\n\t\tnewSechDistribution().initializeSlots(mu, sigma)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "SechDistribution",
  "SechDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSechDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma |\n\t\tnewSechDistribution().initializeSlots(mu, sigma)\n\t}",
);
