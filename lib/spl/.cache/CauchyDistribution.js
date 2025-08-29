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
  "{ :self :x0 :gamma | let u = nextRandomFloat(self); +(x0, (*(gamma, tan(pi((-(u, 0.5))))))) }",
);

sl.addType(
  false,
  "CauchyDistribution",
  "CauchyDistribution",
  ["Object", "ProbabilityDistribution"],
  ["x0", "gamma"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | let x0 = x0(self); let gamma = gamma(self); { :x | +(*((/(1, pi(1))), arcTan((/((-(x, x0)), gamma)))), 0.5) } }",
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
  "{ :self | log((*(pi(4), gamma(self)))) }",
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
  "{ :self | error(self,'CauchyDistribution>>mean: undefined') }",
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
  "{ :self | x0(self) }",
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
  "{ :self | x0(self) }",
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
  "{ :self | let x0 = x0(self); let gamma = gamma(self); { :x | /(1, (*(pi(gamma), (+(1, square((/((-(x, x0)), gamma)))))))) } }",
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
  "{ :self | let x0 = x0(self); let gamma = gamma(self); { :p | +(x0, (*(gamma, tan(pi((-(p, 0.5))))))) } }",
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
  "{ :self :rng :shape | let x0 = x0(self); let gamma = gamma(self); !({ cauchyDistribution(rng,x0, gamma) }, shape) }",
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
  "{ :self | error(self,'CauchyDistribution>>variance: undefined') }",
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
  "{ :x0 :gamma | initializeSlots(newCauchyDistribution(),x0, gamma) }",
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
  "{ :x0 :gamma | initializeSlots(newCauchyDistribution(),x0, gamma) }",
);
