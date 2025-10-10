sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ExponentialDistribution",
  "exponentialDistribution",
  ["self", "lambda"],
  sl.annotateFunction(function (_self, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lambda";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _solidus_2(_log_1(_hyphenMinus_2(1, _u)), _hyphenMinus_1(_lambda));
  }, ["self", "lambda"]),
  "{ :self :lambda |\n\t\tlet u = self.nextRandomFloat;\n\t\t(1 - u).log / lambda.-\n\t}",
);

sl.addType(
  false,
  "ExponentialDistribution",
  "ExponentialDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["lambda"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ExponentialDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ExponentialDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "ExponentialDistribution",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
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
            _exp_1(_asterisk_2(_asterisk_2(-1, _x), _lambda)),
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
  "{ :self |\n\t\tlet lambda = self.lambda;\n\t\t{ :x |\n\t\t\t(x >= 0).if {\n\t\t\t\t1 - (-1 * x * lambda).exp\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "beta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _lambda_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t1 / self.lambda\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "hazardFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
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
          return _lambda;
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
  "{ :self |\n\t\tlet lambda = self.lambda;\n\t\t{ :x |\n\t\t\t(x >= 0).if {\n\t\t\t\tlambda\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "inverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _lessThanSign_2(_p, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_p, 0);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(-1, _log_1(_hyphenMinus_2(1, _p))),
            _lambda,
          );
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
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\tlet lambda = self.lambda;\n\t\t{ :p |\n\t\t\t(p < 1 & { p >= 0 }).if {\n\t\t\t\t-1 * (1 - p).log / lambda\n\t\t\t} {\n\t\t\t\tInfinity\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "inverseSurvivalFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _lessThanSignEqualsSign_2(_p, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_p, 0);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(-1, _solidus_2(_log_1(_p), _lambda));
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
              return 0;
            }, []),
          );
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\tlet lambda = self.lambda;\n\t\t{ :p |\n\t\t\t(p <= 1 & { p >= 0 }).if {\n\t\t\t\t-1 * (p.log / lambda)\n\t\t\t} {\n\t\t\t\t(p <= 0).if {\n\t\t\t\t\tInfinity\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "kurtosis",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 9;
  }, ["unused"]),
  "{ :unused |\n\t\t9\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _beta_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.beta\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_log_1(2), _lambda_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t2.log / self.lambda\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _lambda = _lambda_1(_self);
      /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _exp_1(_asterisk_2(_asterisk_2(-1, _x), _lambda)),
            _lambda,
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
  "{ :self |\n\t\t{ :x |\n\t\t\tlet lambda = self.lambda;\n\t\t\t(x >= 0).if {\n\t\t\t\t(-1 * x * lambda).exp * lambda\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exponentialDistribution_2(_rng, _lambda);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet lambda = self.lambda;\n\t\t{\n\t\t\trng.exponentialDistribution(lambda)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "skewness",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["unused"]),
  "{ :unused |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _beta_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.beta\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "survivalFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lambda = _lambda_1(_self);
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
          return _exp_1(_asterisk_2(_asterisk_2(-1, _x), _lambda));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet lambda = self.lambda;\n\t\t{ :x |\n\t\t\t(x >= 0).if {\n\t\t\t\t(-1 * x * lambda).exp\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ExponentialDistribution",
  "ExponentialDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _square_1(_lambda_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t1 / self.lambda.square\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ExponentialDistribution",
  "ExponentialDistribution",
  ["lambda"],
  sl.annotateFunction(function (_lambda) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newExponentialDistribution_0(), _lambda);
  }, ["lambda"]),
  "{ :lambda |\n\t\tnewExponentialDistribution().initializeSlots(lambda)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "ExponentialDistribution",
  "ExponentialDistribution",
  ["lambda"],
  sl.annotateFunction(function (_lambda) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newExponentialDistribution_0(), _lambda);
  }, ["lambda"]),
  "{ :lambda |\n\t\tnewExponentialDistribution().initializeSlots(lambda)\n\t}",
);
