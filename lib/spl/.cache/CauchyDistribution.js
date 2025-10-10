sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "CauchyDistribution",
  "cauchyDistribution",
  ["self", "x0", "gamma"],
  sl.annotateFunction(function (_self, _x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x0, _gamma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _plusSign_2(
      _x0,
      _asterisk_2(_gamma, _tan_1(_pi_1(_hyphenMinus_2(_u, 0.5)))),
    );
  }, ["self", "x0", "gamma"]),
  "{ :self :x0 :gamma |\n\t\tlet u = self.nextRandomFloat;\n\t\tx0 + (gamma * (u - 0.5).pi.tan)\n\t}",
);

sl.addType(
  false,
  "CauchyDistribution",
  "CauchyDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["x0", "gamma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CauchyDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "CauchyDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "CauchyDistribution",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x0 = _x0_1(_self);
    let _gamma = _gamma_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _asterisk_2(
          _solidus_2(1, _pi_1(1)),
          _arcTan_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma)),
        ),
        0.5,
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet x0 = self.x0;\n\t\tlet gamma = self.gamma;\n\t\t{ :x |\n\t\t\t(1 / 1.pi) * ((x - x0) / gamma).arcTan + 0.5\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asterisk_2(_pi_1(4), _gamma_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t(4.pi * self.gamma).log\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>mean: undefined");
  }, ["self"]),
  "{ :self |\n\t\tself.error('CauchyDistribution>>mean: undefined')\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.x0\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "mode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x0_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.x0\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x0 = _x0_1(_self);
    let _gamma = _gamma_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        1,
        _asterisk_2(
          _pi_1(_gamma),
          _plusSign_2(
            1,
            _square_1(_solidus_2(_hyphenMinus_2(_x, _x0), _gamma)),
          ),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet x0 = self.x0;\n\t\tlet gamma = self.gamma;\n\t\t{ :x |\n\t\t\t1 / (gamma.pi * (1 + ((x - x0) / gamma).square))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "quantile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x0 = _x0_1(_self);
    let _gamma = _gamma_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _x0,
        _asterisk_2(_gamma, _tan_1(_pi_1(_hyphenMinus_2(_p, 0.5)))),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self |\n\t\tlet x0 = self.x0;\n\t\tlet gamma = self.gamma;\n\t\t{ :p |\n\t\t\tx0 + (gamma * (p - 0.5).pi.tan)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x0 = _x0_1(_self);
    let _gamma = _gamma_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cauchyDistribution_3(_rng, _x0, _gamma);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet x0 = self.x0;\n\t\tlet gamma = self.gamma;\n\t\t{\n\t\t\trng.cauchyDistribution(x0, gamma)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "CauchyDistribution",
  "CauchyDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "CauchyDistribution>>variance: undefined");
  }, ["self"]),
  "{ :self |\n\t\tself.error('CauchyDistribution>>variance: undefined')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "CauchyDistribution",
  "CauchyDistribution",
  ["x0", "gamma"],
  sl.annotateFunction(function (_x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x0, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCauchyDistribution_0(), _x0, _gamma);
  }, ["x0", "gamma"]),
  "{ :x0 :gamma |\n\t\tnewCauchyDistribution().initializeSlots(x0, gamma)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "CauchyDistribution",
  "CauchyDistribution",
  ["x0", "gamma"],
  sl.annotateFunction(function (_x0, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x0, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCauchyDistribution_0(), _x0, _gamma);
  }, ["x0", "gamma"]),
  "{ :x0 :gamma |\n\t\tnewCauchyDistribution().initializeSlots(x0, gamma)\n\t}",
);
