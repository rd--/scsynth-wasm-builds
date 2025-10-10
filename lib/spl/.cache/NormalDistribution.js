sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "NormalDistribution",
  "boxMullerTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    let _v = _nextRandomFloat_1(_self);
    let _r = _sqrt_1(_asterisk_2(-2, _log_1(_u)));
    let _z = _asterisk_2(_pi_1(2), _v);
    /* Statements */
    return [_asterisk_2(_r, _sin_1(_z)), _asterisk_2(_r, _cos_1(_z))];
  }, ["self"]),
  "{ :self |\n\t\tlet u = self.nextRandomFloat;\n\t\tlet v = self.nextRandomFloat;\n\t\tlet r = (-2 * u.log).sqrt;\n\t\tlet z = 2.pi * v;\n\t\t[\n\t\t\tr * z.sin,\n\t\t\tr * z.cos\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "NormalDistribution",
  "marsagliaPolarMethod",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = null;
    let _v = null;
    let _w = null;
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _u = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_self), 2), 1);
      _v = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_self), 2), 1);
      _w = _plusSign_2(_asterisk_2(_u, _u), _asterisk_2(_v, _v));
      return _greaterThanSignEqualsSign_2(_w, 1);
    }, []));
    return [
      _asterisk_2(_u, _sqrt_1(_solidus_2(_asterisk_2(-2, _log_1(_w)), _w))),
      _asterisk_2(_v, _sqrt_1(_solidus_2(_asterisk_2(-2, _log_1(_w)), _w))),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet u = nil;\n\t\tlet v = nil;\n\t\tlet w = nil;\n\t\t{\n\t\t\tu := self.nextRandomFloat * 2 - 1;\n\t\t\tv := self.nextRandomFloat * 2 - 1;\n\t\t\tw := (u * u) + (v * v);\n\t\t\tw >= 1\n\t\t}.whileTrue;\n\t\t[\n\t\t\tu * (-2 * w.log / w).sqrt,\n\t\t\tv * (-2 * w.log / w).sqrt\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "NormalDistribution",
  "normalDistribution",
  ["self", "mu", "sigma"],
  sl.annotateFunction(function (_self, _mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    let _v = _nextRandomFloat_1(_self);
    let _x = _asterisk_2(
      _sqrt_1(_asterisk_2(-2, _log_1(_u))),
      _sin_1(_asterisk_2(_pi_1(2), _v)),
    );
    /* Statements */
    return _plusSign_2(_asterisk_2(_x, _sigma), _mu);
  }, ["self", "mu", "sigma"]),
  "{ :self :mu :sigma |\n\t\t/* Box-Muller */\n\t\tlet u = self.nextRandomFloat;\n\t\tlet v = self.nextRandomFloat;\n\t\tlet x = (-2 * u.log).sqrt * (2.pi * v).sin;\n\t\t(x * sigma) + mu\n\t}",
);

sl.addType(
  false,
  "NormalDistribution",
  "NormalDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NormalDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "NormalDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "NormalDistribution",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
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
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        0.5,
        _erfc_1(
          _solidus_2(_hyphenMinus_2(_mu, _x), _asterisk_2(_sqrt_1(2), _sigma)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{ :x |\n\t\t\t0.5 * ((mu - x) / (2.sqrt * sigma)).erfc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
  "inverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _greaterThanSignEqualsSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_p, 1);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _mu,
            _asterisk_2(_standardNormalDistributionInverseCdf_1(_p), _sigma),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "inverseCdf");
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{ :p |\n\t\t\t(p >= 0 & { p <= 1 }).if {\n\t\t\t\t/* mu - (2.sqrt * sigma * (2 * p).inverseErfc) */\n\t\t\t\tmu + (p.standardNormalDistributionInverseCdf * sigma)\n\t\t\t} {\n\t\t\t\tself.error('inverseCdf')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
  "inverseSurvivalFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    /* Statements */
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
            _mu,
            _asterisk_2(
              _asterisk_2(_sqrt_1(2), _sigma),
              _inverseErfc_1(_asterisk_2(2, _p)),
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
              return Infinity;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return -Infinity;
            }, []),
          );
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{ :p |\n\t\t\t(p > 0 & { p < 1 }).if {\n\t\t\t\tmu + (2.sqrt * sigma * (2 * p).inverseErfc)\n\t\t\t} {\n\t\t\t\t(p <= 0).if {\n\t\t\t\t\tInfinity\n\t\t\t\t} {\n\t\t\t\t\t-Infinity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
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
  "NormalDistribution",
  "NormalDistribution",
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
    let _d = _asterisk_2(_sigma, _sqrt_1(_pi_1(2)));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _exp_1(
          _asterisk_2(
            -0.5,
            _square_1(_solidus_2(_hyphenMinus_2(_x, _mu), _sigma)),
          ),
        ),
        _d,
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet d = sigma * 2.pi.sqrt;\n\t\t{ :x |\n\t\t\t(-0.5 * ((x - mu) / sigma).square).exp / d\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
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
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normalDistribution_3(_rng, _mu, _sigma);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{\n\t\t\trng.normalDistribution(mu, sigma)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
  "survivalFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        0.5,
        _erfc_1(
          _solidus_2(_hyphenMinus_2(_x, _mu), _asterisk_2(_sqrt_1(2), _sigma)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\t{ :x |\n\t\t\t0.5 * ((x - mu) / (2.sqrt * sigma)).erfc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
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
  "{ :self |\n\t\tself.sigma\n\t}",
);

sl.addMethodToExistingType(
  "NormalDistribution",
  "NormalDistribution",
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
  "NormalDistribution",
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
  "{ :mu :sigma |\n\t\tnewNormalDistribution().initializeSlots(mu, sigma)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "NormalDistribution",
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
  "{ :mu :sigma |\n\t\tnewNormalDistribution().initializeSlots(mu, sigma)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NormalDistribution",
  "standardNormalDistributionInverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ratEval_3 = sl.annotateFunction(function (_a, _b, _x) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _a, _b, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _last_1(_a);
      let _v = _last_1(_b);
      /* Statements */
      _downToDo_3(
        _hyphenMinus_2(_size_1(_a), 1),
        1,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _u = _plusSign_2(_asterisk_2(_x, _u), _at_2(_a, _i));
        }, ["i"]),
      );
      _downToDo_3(
        _hyphenMinus_2(_size_1(_b), 1),
        1,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _v = _plusSign_2(_asterisk_2(_x, _v), _at_2(_b, _i));
        }, ["i"]),
      );
      return _solidus_2(_u, _v);
    }, ["a", "b", "x"]);
    let _small_1 = sl.annotateFunction(function (_q) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _q";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        3.387132872796366608,
        133.14166789178437745,
        1971.5909503065514427,
        13731.693765509461125,
        45921.953931549871457,
        67265.770927008700853,
        33430.575583588128105,
        2509.0809287301226727,
      ];
      let _b = [
        1.0,
        42.313330701600911252,
        687.1870074920579083,
        5394.1960214247511077,
        21213.794301586595867,
        39307.89580009271061,
        28729.085735721942674,
        5226.495278852854561,
      ];
      let _r = _hyphenMinus_2(0.180625, _asterisk_2(_q, _q));
      let _x = _asterisk_2(_q, _ratEval_3(_a, _b, _r));
      /* Statements */
      return _x;
    }, ["q"]);
    let _intermediate_1 = sl.annotateFunction(function (_r) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _r";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        1.42343711074968357734,
        4.6303378461565452959,
        5.7694972214606914055,
        3.64784832476320460504,
        1.27045825245236838258,
        0.24178072517745061177,
        0.0227238449892691845833,
        7.7454501427834140764E-4,
      ];
      let _b = [
        1.0,
        2.05319162663775882187,
        1.6763848301838038494,
        0.68976733498510000455,
        0.14810397642748007459,
        0.0151986665636164571966,
        5.475938084995344946E-4,
        1.05075007164441684324E-9,
      ];
      let _x = _ratEval_3(_a, _b, _hyphenMinus_2(_r, 1.6));
      /* Statements */
      return _x;
    }, ["r"]);
    let _tail_1 = sl.annotateFunction(function (_r) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _r";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        6.6579046435011037772,
        5.4637849111641143699,
        1.7848265399172913358,
        0.29656057182850489123,
        0.026532189526576123093,
        0.0012426609473880784386,
        2.71155556874348757815E-5,
        2.01033439929228813265E-7,
      ];
      let _b = [
        1.0,
        0.59983220655588793769,
        0.13692988092273580531,
        0.0148753612908506148525,
        7.868691311456132591E-4,
        1.8463183175100546818E-5,
        1.4215117583164458887E-7,
        2.04426310338993978564E-15,
      ];
      let _x = _ratEval_3(_a, _b, _hyphenMinus_2(_r, 5.0));
      /* Statements */
      return _x;
    }, ["r"]);
    let _p = _self;
    let _dP = _hyphenMinus_2(_p, 0.5);
    /* Statements */
    return _if_3(
      _equalsSign_2(_p, 1),
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
        return _if_3(
          _equalsSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -Infinity;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _lessThanSignEqualsSign_2(_abs_1(_dP), 0.425),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _small_1(_dP);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _pp = _if_3(
                  _lessThanSign_2(_p, 0.5),
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
                    return _hyphenMinus_2(1, _p);
                  }, []),
                );
                let _r = _sqrt_1(_hyphenMinus_1(_log_1(_pp)));
                let _x = _if_3(
                  _lessThanSignEqualsSign_2(_r, 5.0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _intermediate_1(_r);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _tail_1(_r);
                  }, []),
                );
                /* Statements */
                return _if_3(
                  _lessThanSign_2(_p, 0.5),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_1(_x);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _x;
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet ratEval = { :a :b :x |\n\t\t\tlet u = a.last;\n\t\t\tlet v = b.last;\n\t\t\t(a.size - 1).downToDo(1) { :i |\n\t\t\t\tu := (x * u) + a[i]\n\t\t\t};\n\t\t\t(b.size - 1).downToDo(1) { :i |\n\t\t\t\tv := (x * v) + b[i]\n\t\t\t};\n\t\t\tu / v\n\t\t};\n\t\tlet small = { :q |\n\t\t\tlet a = [\n\t\t\t\t3.387132872796366608, 133.14166789178437745,\n\t\t\t\t1971.5909503065514427, 13731.693765509461125,\n\t\t\t\t45921.953931549871457, 67265.770927008700853,\n\t\t\t\t33430.575583588128105, 2509.0809287301226727\n\t\t\t];\n\t\t\tlet b = [\n\t\t\t\t1.0, 42.313330701600911252,\n\t\t\t\t687.1870074920579083, 5394.1960214247511077,\n\t\t\t\t21213.794301586595867, 39307.89580009271061,\n\t\t\t\t28729.085735721942674, 5226.495278852854561\n\t\t\t];\n\t\t\tlet r = 0.180625 - (q * q);\n\t\t\tlet x = q * ratEval(a, b, r);\n\t\t\tx\n\t\t};\n\t\tlet intermediate = { :r |\n\t\t\tlet a = [\n\t\t\t\t1.42343711074968357734, 4.6303378461565452959,\n\t\t\t\t5.7694972214606914055, 3.64784832476320460504,\n\t\t\t\t1.27045825245236838258, 0.24178072517745061177,\n\t\t\t\t0.0227238449892691845833, 7.7454501427834140764E-4\n\t\t\t];\n\t\t\tlet b = [ 1.0, 2.05319162663775882187,\n\t\t\t\t1.6763848301838038494, 0.68976733498510000455,\n\t\t\t\t0.14810397642748007459, 0.0151986665636164571966,\n\t\t\t\t5.475938084995344946E-4, 1.05075007164441684324E-9\n\t\t\t];\n\t\t\tlet x = ratEval(a, b, r - 1.6);\n\t\t\tx\n\t\t};\n\t\tlet tail = { :r |\n\t\t\tlet a = [ 6.6579046435011037772, 5.4637849111641143699,\n\t\t\t\t1.7848265399172913358, 0.29656057182850489123,\n\t\t\t\t0.026532189526576123093, 0.0012426609473880784386,\n\t\t\t\t2.71155556874348757815E-5, 2.01033439929228813265E-7\n\t\t\t];\n\t\t\tlet b = [ 1.0, 0.59983220655588793769,\n\t\t\t\t0.13692988092273580531, 0.0148753612908506148525,\n\t\t\t\t7.868691311456132591E-4, 1.8463183175100546818E-5,\n\t\t\t\t1.4215117583164458887E-7, 2.04426310338993978564E-15\n\t\t\t];\n\t\t\tlet x = ratEval(a, b, r - 5.0);\n\t\t\tx\n\t\t};\n\t\tlet p = self;\n\t\tlet dP = p - 0.5;\n\t\t(p = 1).if {\n\t\t\tInfinity\n\t\t} {\n\t\t\t(p = 0).if {\n\t\t\t\t-Infinity\n\t\t\t} {\n\t\t\t\t(dP.abs <= 0.425).if {\n\t\t\t\t\tsmall(dP)\n\t\t\t\t} {\n\t\t\t\t\tlet pp = (p < 0.5).if { p } { 1 - p };\n\t\t\t\t\tlet r = pp.log.-.sqrt;\n\t\t\t\t\tlet x = (r <= 5.0).if {\n\t\t\t\t\t\tintermediate(r)\n\t\t\t\t\t} {\n\t\t\t\t\t\ttail(r)\n\t\t\t\t\t};\n\t\t\t\t\t(p < 0.5).if {\n\t\t\t\t\t\tx.-\n\t\t\t\t\t} {\n\t\t\t\t\t\tx\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "NormalDistribution",
  "standardNormalDistributionInverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ratEval_3 = sl.annotateFunction(function (_a, _b, _x) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _a, _b, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _last_1(_a);
      let _v = _last_1(_b);
      /* Statements */
      _downToDo_3(
        _hyphenMinus_2(_size_1(_a), 1),
        1,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _u = _plusSign_2(_asterisk_2(_x, _u), _at_2(_a, _i));
        }, ["i"]),
      );
      _downToDo_3(
        _hyphenMinus_2(_size_1(_b), 1),
        1,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _v = _plusSign_2(_asterisk_2(_x, _v), _at_2(_b, _i));
        }, ["i"]),
      );
      return _solidus_2(_u, _v);
    }, ["a", "b", "x"]);
    let _small_1 = sl.annotateFunction(function (_q) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _q";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        3.387132872796366608,
        133.14166789178437745,
        1971.5909503065514427,
        13731.693765509461125,
        45921.953931549871457,
        67265.770927008700853,
        33430.575583588128105,
        2509.0809287301226727,
      ];
      let _b = [
        1.0,
        42.313330701600911252,
        687.1870074920579083,
        5394.1960214247511077,
        21213.794301586595867,
        39307.89580009271061,
        28729.085735721942674,
        5226.495278852854561,
      ];
      let _r = _hyphenMinus_2(0.180625, _asterisk_2(_q, _q));
      let _x = _asterisk_2(_q, _ratEval_3(_a, _b, _r));
      /* Statements */
      return _x;
    }, ["q"]);
    let _intermediate_1 = sl.annotateFunction(function (_r) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _r";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        1.42343711074968357734,
        4.6303378461565452959,
        5.7694972214606914055,
        3.64784832476320460504,
        1.27045825245236838258,
        0.24178072517745061177,
        0.0227238449892691845833,
        7.7454501427834140764E-4,
      ];
      let _b = [
        1.0,
        2.05319162663775882187,
        1.6763848301838038494,
        0.68976733498510000455,
        0.14810397642748007459,
        0.0151986665636164571966,
        5.475938084995344946E-4,
        1.05075007164441684324E-9,
      ];
      let _x = _ratEval_3(_a, _b, _hyphenMinus_2(_r, 1.6));
      /* Statements */
      return _x;
    }, ["r"]);
    let _tail_1 = sl.annotateFunction(function (_r) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _r";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = [
        6.6579046435011037772,
        5.4637849111641143699,
        1.7848265399172913358,
        0.29656057182850489123,
        0.026532189526576123093,
        0.0012426609473880784386,
        2.71155556874348757815E-5,
        2.01033439929228813265E-7,
      ];
      let _b = [
        1.0,
        0.59983220655588793769,
        0.13692988092273580531,
        0.0148753612908506148525,
        7.868691311456132591E-4,
        1.8463183175100546818E-5,
        1.4215117583164458887E-7,
        2.04426310338993978564E-15,
      ];
      let _x = _ratEval_3(_a, _b, _hyphenMinus_2(_r, 5.0));
      /* Statements */
      return _x;
    }, ["r"]);
    let _p = _self;
    let _dP = _hyphenMinus_2(_p, 0.5);
    /* Statements */
    return _if_3(
      _equalsSign_2(_p, 1),
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
        return _if_3(
          _equalsSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -Infinity;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _lessThanSignEqualsSign_2(_abs_1(_dP), 0.425),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _small_1(_dP);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _pp = _if_3(
                  _lessThanSign_2(_p, 0.5),
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
                    return _hyphenMinus_2(1, _p);
                  }, []),
                );
                let _r = _sqrt_1(_hyphenMinus_1(_log_1(_pp)));
                let _x = _if_3(
                  _lessThanSignEqualsSign_2(_r, 5.0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _intermediate_1(_r);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _tail_1(_r);
                  }, []),
                );
                /* Statements */
                return _if_3(
                  _lessThanSign_2(_p, 0.5),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_1(_x);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _x;
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet ratEval = { :a :b :x |\n\t\t\tlet u = a.last;\n\t\t\tlet v = b.last;\n\t\t\t(a.size - 1).downToDo(1) { :i |\n\t\t\t\tu := (x * u) + a[i]\n\t\t\t};\n\t\t\t(b.size - 1).downToDo(1) { :i |\n\t\t\t\tv := (x * v) + b[i]\n\t\t\t};\n\t\t\tu / v\n\t\t};\n\t\tlet small = { :q |\n\t\t\tlet a = [\n\t\t\t\t3.387132872796366608, 133.14166789178437745,\n\t\t\t\t1971.5909503065514427, 13731.693765509461125,\n\t\t\t\t45921.953931549871457, 67265.770927008700853,\n\t\t\t\t33430.575583588128105, 2509.0809287301226727\n\t\t\t];\n\t\t\tlet b = [\n\t\t\t\t1.0, 42.313330701600911252,\n\t\t\t\t687.1870074920579083, 5394.1960214247511077,\n\t\t\t\t21213.794301586595867, 39307.89580009271061,\n\t\t\t\t28729.085735721942674, 5226.495278852854561\n\t\t\t];\n\t\t\tlet r = 0.180625 - (q * q);\n\t\t\tlet x = q * ratEval(a, b, r);\n\t\t\tx\n\t\t};\n\t\tlet intermediate = { :r |\n\t\t\tlet a = [\n\t\t\t\t1.42343711074968357734, 4.6303378461565452959,\n\t\t\t\t5.7694972214606914055, 3.64784832476320460504,\n\t\t\t\t1.27045825245236838258, 0.24178072517745061177,\n\t\t\t\t0.0227238449892691845833, 7.7454501427834140764E-4\n\t\t\t];\n\t\t\tlet b = [ 1.0, 2.05319162663775882187,\n\t\t\t\t1.6763848301838038494, 0.68976733498510000455,\n\t\t\t\t0.14810397642748007459, 0.0151986665636164571966,\n\t\t\t\t5.475938084995344946E-4, 1.05075007164441684324E-9\n\t\t\t];\n\t\t\tlet x = ratEval(a, b, r - 1.6);\n\t\t\tx\n\t\t};\n\t\tlet tail = { :r |\n\t\t\tlet a = [ 6.6579046435011037772, 5.4637849111641143699,\n\t\t\t\t1.7848265399172913358, 0.29656057182850489123,\n\t\t\t\t0.026532189526576123093, 0.0012426609473880784386,\n\t\t\t\t2.71155556874348757815E-5, 2.01033439929228813265E-7\n\t\t\t];\n\t\t\tlet b = [ 1.0, 0.59983220655588793769,\n\t\t\t\t0.13692988092273580531, 0.0148753612908506148525,\n\t\t\t\t7.868691311456132591E-4, 1.8463183175100546818E-5,\n\t\t\t\t1.4215117583164458887E-7, 2.04426310338993978564E-15\n\t\t\t];\n\t\t\tlet x = ratEval(a, b, r - 5.0);\n\t\t\tx\n\t\t};\n\t\tlet p = self;\n\t\tlet dP = p - 0.5;\n\t\t(p = 1).if {\n\t\t\tInfinity\n\t\t} {\n\t\t\t(p = 0).if {\n\t\t\t\t-Infinity\n\t\t\t} {\n\t\t\t\t(dP.abs <= 0.425).if {\n\t\t\t\t\tsmall(dP)\n\t\t\t\t} {\n\t\t\t\t\tlet pp = (p < 0.5).if { p } { 1 - p };\n\t\t\t\t\tlet r = pp.log.-.sqrt;\n\t\t\t\t\tlet x = (r <= 5.0).if {\n\t\t\t\t\t\tintermediate(r)\n\t\t\t\t\t} {\n\t\t\t\t\t\ttail(r)\n\t\t\t\t\t};\n\t\t\t\t\t(p < 0.5).if {\n\t\t\t\t\t\tx.-\n\t\t\t\t\t} {\n\t\t\t\t\t\tx\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);
