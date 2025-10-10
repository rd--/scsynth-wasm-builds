sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "StudentTDistribution",
  "studentTDistribution",
  ["self", "mu", "sigma", "nu"],
  sl.annotateFunction(function (_self, _mu, _sigma, _nu) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _mu, _sigma, _nu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gamma = _gammaDistribution_3(_self, _asterisk_2(0.5, _nu), 0.5);
    /* Statements */
    return _normalDistribution_3(
      _self,
      _mu,
      _asterisk_2(_sigma, _sqrt_1(_solidus_2(_nu, _gamma))),
    );
  }, ["self", "mu", "sigma", "nu"]),
  "{ :self :mu :sigma :nu |\n\t\tlet gamma = self.gammaDistribution(0.5 * nu, 0.5);\n\t\tself.normalDistribution(\n\t\t\tmu,\n\t\t\tsigma * (nu / gamma).sqrt\n\t\t)\n\t}",
);

sl.addType(
  false,
  "StudentTDistribution",
  "StudentTDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "sigma", "nu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "StudentTDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "StudentTDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "StudentTDistribution",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _nu = _nu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _asterisk_2(_square_1(_sigma), _nu);
      let _b = _square_1(_hyphenMinus_2(_x, _mu));
      let _t = _solidus_2(_a, _plusSign_2(_a, _b));
      let _r = _asterisk_2(
        _solidus_2(1, 2),
        _betaRegularized_3(_t, _solidus_2(_nu, 2), _solidus_2(1, 2)),
      );
      /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_x, _mu),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _r;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(1, _r);
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet nu = self.nu;\n\t\t{ :x |\n\t\t\tlet a = sigma.square * nu;\n\t\t\tlet b = (x - mu).square;\n\t\t\tlet t = a / (a + b);\n\t\t\tlet r = (1 / 2) * t.betaRegularized(nu / 2, 1 / 2);\n\t\t\t(x <= mu).if {\n\t\t\t\tr\n\t\t\t} {\n\t\t\t\t1 - r\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_nu_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _mu_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return NaN;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.nu > 1).if {\n\t\t\tself.mu\n\t\t} {\n\t\t\tNaN\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
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
  "StudentTDistribution",
  "StudentTDistribution",
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
  "StudentTDistribution",
  "StudentTDistribution",
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
    let _nu = _nu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _solidus_2(
        _square_1(_hyphenMinus_2(_x, _mu)),
        _square_1(_sigma),
      );
      /* Statements */
      return _solidus_2(
        _circumflexAccent_2(
          _solidus_2(_nu, _plusSign_2(_d, _nu)),
          _solidus_2(_plusSign_2(_nu, 1), 2),
        ),
        _asterisk_2(
          _asterisk_2(_sigma, _sqrt_1(_nu)),
          _beta_2(_solidus_2(_nu, 2), _solidus_2(1, 2)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet nu = self.nu;\n\t\t{ :x |\n\t\t\tlet d = (x - mu).square / sigma.square;\n\t\t\t((nu / (d + nu)) ^ ((nu + 1) / 2))\n\t\t\t/\n\t\t\t(sigma * nu.sqrt * (nu / 2).beta(1 / 2))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
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
    let _nu = _nu_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _studentTDistribution_4(_rng, _mu, _sigma, _nu);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet nu = self.nu;\n\t\t{\n\t\t\trng.studentTDistribution(mu, sigma, nu)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_nu_1(_self), 3),
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
        return NaN;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.nu > 3).if {\n\t\t\t0\n\t\t} {\n\t\t\tNaN\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "StudentTDistribution",
  "StudentTDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nu = _nu_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_nu, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_nu, _hyphenMinus_2(_nu, 2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_nu, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return Infinity;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return NaN;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet nu = self.nu;\n\t\t(nu > 2).if {\n\t\t\tnu / (nu - 2)\n\t\t} {\n\t\t\t(nu > 1).if {\n\t\t\t\tInfinity\n\t\t\t} {\n\t\t\t\tNaN\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "StudentTDistribution",
  "StudentTDistribution",
  ["mu", "sigma", "nu"],
  sl.annotateFunction(function (_mu, _sigma, _nu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _nu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newStudentTDistribution_0(), _mu, _sigma, _nu);
  }, ["mu", "sigma", "nu"]),
  "{ :mu :sigma :nu |\n\t\tnewStudentTDistribution().initializeSlots(mu, sigma, nu)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "StudentTDistribution",
  "StudentTDistribution",
  ["mu", "sigma", "nu"],
  sl.annotateFunction(function (_mu, _sigma, _nu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _nu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newStudentTDistribution_0(), _mu, _sigma, _nu);
  }, ["mu", "sigma", "nu"]),
  "{ :mu :sigma :nu |\n\t\tnewStudentTDistribution().initializeSlots(mu, sigma, nu)\n\t}",
);
