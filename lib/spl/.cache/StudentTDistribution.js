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
  "{ :self :mu :sigma :nu | let gamma = gammaDistribution(self,*(0.5, nu), 0.5); normalDistribution(self,mu, *(sigma, sqrt((/(nu, gamma))))) }",
);

sl.addType(
  false,
  "StudentTDistribution",
  "StudentTDistribution",
  ["Object", "ProbabilityDistribution"],
  ["mu", "sigma", "nu"],
);

sl.copyTraitMethodsToType(
  "Object",
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
      let _a = _asterisk_2(_squared_1(_sigma), _nu);
      let _b = _squared_1(_hyphenMinus_2(_x, _mu));
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
  "{ :self | let mu = mu(self); let sigma = sigma(self); let nu = nu(self); { :x | let a = *(squared(sigma), nu); let b = squared((-(x, mu))); let t = /(a, (+(a, b))); let r = *((/(1, 2)), betaRegularized(t,/(nu, 2), /(1, 2))); if((<=(x, mu)), { r }, { -(1, r) }) } }",
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
  "{ :self | if((>(nu(self), 1)), { mu(self) }, { NaN }) }",
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
  "{ :self | mu(self) }",
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
  "{ :self | mu(self) }",
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
        _squared_1(_hyphenMinus_2(_x, _mu)),
        _squared_1(_sigma),
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
  "{ :self | let mu = mu(self); let sigma = sigma(self); let nu = nu(self); { :x | let d = /(squared((-(x, mu))), squared(sigma)); /((^((/(nu, (+(d, nu)))), (/((+(nu, 1)), 2)))), (*(*(sigma, sqrt(nu)), beta((/(nu, 2)),/(1, 2))))) } }",
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
  "{ :self :rng :shape | let mu = mu(self); let sigma = sigma(self); let nu = nu(self); !({ studentTDistribution(rng,mu, sigma, nu) }, shape) }",
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
  "{ :self | if((>(nu(self), 3)), { 0 }, { NaN }) }",
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
  "{ :self | let nu = nu(self); if((>(nu, 2)), { /(nu, (-(nu, 2))) }, { if((>(nu, 1)), { Infinity }, { NaN }) }) }",
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
  "{ :mu :sigma :nu | initializeSlots(newStudentTDistribution(),mu, sigma, nu) }",
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
  "{ :mu :sigma :nu | initializeSlots(newStudentTDistribution(),mu, sigma, nu) }",
);
