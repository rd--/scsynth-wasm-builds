sl.addType(
  false,
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ExtremeValueDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ExtremeValueDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "ExtremeValueDistribution",
);

sl.addMethodToExistingType(
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
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
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _exp_1(
        _hyphenMinus_1(
          _exp_1(_solidus_2(_hyphenMinus_1(_hyphenMinus_2(_x, _alpha)), _beta)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); { :x | exp(-(exp((/(-((-(x, alpha))), beta))))) } }",
);

sl.addMethodToExistingType(
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
  "inverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _beta = _beta_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
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
          return -Infinity;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _greaterThanSignEqualsSign_2(_p, 1),
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
              return _hyphenMinus_2(
                _alpha,
                _asterisk_2(_beta, _log_1(_hyphenMinus_1(_log_1(_p)))),
              );
            }, []),
          );
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); { :p | if((<=(p, 0)), { -Infinity }, { if((>=(p, 1)), { Infinity }, { -(alpha, (*(beta, log(-(log(p)))))) }) }) } }",
);

sl.addMethodToExistingType(
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
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
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _solidus_2(_hyphenMinus_2(_x, _alpha), _beta);
      /* Statements */
      return _asterisk_2(
        _solidus_2(1, _beta),
        _exp_1(_hyphenMinus_1(_plusSign_2(_z, _exp_1(_hyphenMinus_1(_z))))),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let beta = beta(self); { :x | let z = /((-(x, alpha)), beta); *((/(1, beta)), exp(-((+(z, exp(-(z))))))) } }",
);

sl.addMethodToExistingType(
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
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
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _nextRandomFloat_1(_rng);
        /* Statements */
        return _hyphenMinus_2(
          _alpha,
          _asterisk_2(_beta, _log_1(_hyphenMinus_1(_log_1(_u)))),
        );
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let alpha = alpha(self); let beta = beta(self); !({ let u = nextRandomFloat(rng); -(alpha, (*(beta, log(-(log(u)))))) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newExtremeValueDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta | initializeSlots(newExtremeValueDistribution(),alpha, beta) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "ExtremeValueDistribution",
  "ExtremeValueDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newExtremeValueDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta | initializeSlots(newExtremeValueDistribution(),alpha, beta) }",
);
