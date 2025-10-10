sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "WeibullDistribution",
  "weibullDistribution",
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
        _circumflexAccent_2(_negate_1(_log_1(_r)), _solidus_2(1, _alpha)),
      ),
      _mu,
    );
  }, ["self", "alpha", "beta", "mu"]),
  "{ :self :alpha :beta :mu |\n\t\tlet r = 1;\n\t\t{\n\t\t\tr = 1\n\t\t}.whileTrue {\n\t\t\tr := self.nextRandomFloat\n\t\t};\n\t\tbeta * (r.log.negate ^ (1 / alpha)) + mu\n\t}",
);

sl.addType(
  false,
  "WeibullDistribution",
  "WeibullDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta", "mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeibullDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "WeibullDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "WeibullDistribution",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _mu = _mu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
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
              _negate_1(
                _circumflexAccent_2(
                  _solidus_2(_hyphenMinus_2(_x, _mu), _beta),
                  _alpha,
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
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet mu = self.mu;\n\t\t{ :x |\n\t\t\t(x >= 0).if {\n\t\t\t\t1 - (((x - mu) / beta) ^ alpha).negate.exp\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
  "hazardFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _mu = _mu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_x, _mu),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(
              _alpha,
              _circumflexAccent_2(
                _solidus_2(_plusSign_2(_hyphenMinus_1(_mu), _x), _beta),
                _plusSign_2(-1, _alpha),
              ),
            ),
            _beta,
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
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet mu = self.mu;\n\t\t{ :x |\n\t\t\t(x > mu).if {\n\t\t\t\t(alpha * (((mu.- + x) / beta) ^ (-1 + alpha))) / beta\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
  "inverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _greaterThanSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_p, 1);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _mu_1(_self),
            _asterisk_2(
              _beta_1(_self),
              _circumflexAccent_2(
                _hyphenMinus_1(_log_1(_hyphenMinus_2(1, _p))),
                _solidus_2(1, _alpha_1(_self)),
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
          return _if_3(
            _lessThanSignEqualsSign_2(_p, 0),
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
              return Infinity;
            }, []),
          );
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :p |\n\t\t\t(p > 0 & { p < 1 }).if {\n\t\t\t\tself.mu + (self.beta * ((1 - p).log.- ^ (1 / self.alpha)))\n\t\t\t} {\n\t\t\t\t(p <= 0).if {\n\t\t\t\t\tself.mu\n\t\t\t\t} {\n\t\t\t\t\tInfinity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
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
  "{ :self |\n\t\tself.beta * (1 + (1 / self.alpha)).gamma + self.mu\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
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
  "{ :self |\n\t\tself.beta * (2.log ^ (1 / self.alpha)) + self.mu\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
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
    let _mu = _mu_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
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
              _solidus_2(_alpha, _beta),
              _circumflexAccent_2(
                _solidus_2(_hyphenMinus_2(_x, _mu), _beta),
                _hyphenMinus_2(_alpha, 1),
              ),
            ),
            _exp_1(
              _negate_1(
                _circumflexAccent_2(
                  _solidus_2(_hyphenMinus_2(_x, _mu), _beta),
                  _alpha,
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
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet mu = self.mu;\n\t\t{ :x |\n\t\t\t(x >= mu).if {\n\t\t\t\t(alpha / beta) * (((x - mu) / beta) ^ (alpha - 1)) * (((x - mu) / beta) ^ alpha).negate.exp\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "WeibullDistribution",
  "WeibullDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    let _mu = _mu_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _weibullDistribution_4(_rng, _alpha, _beta, _mu);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\tlet mu = self.mu;\n\t\t{\n\t\t\trng.weibullDistribution(alpha, beta, mu)\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "WeibullDistribution",
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
  "{ :alpha :beta :mu |\n\t\tnewWeibullDistribution().initializeSlots(alpha, beta, mu)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "WeibullDistribution",
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
  "{ :alpha :beta :mu |\n\t\tnewWeibullDistribution().initializeSlots(alpha, beta, mu)\n\t}",
);
