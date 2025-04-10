sl.addType(
  false,
  "LogNormalDistribution",
  "LogNormalDistribution",
  ["Object", "ProbabilityDistribution"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LogNormalDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "LogNormalDistribution",
);

sl.addMethodToExistingType(
  "LogNormalDistribution",
  "LogNormalDistribution",
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
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _greaterThanSign_2(_x, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isFinite_1(_x);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _d = _solidus_2(_hyphenMinus_2(_log_1(_x), _mu), _sigma);
          /* Statements */
          return _solidus_2(
            _exp_1(_asterisk_2(_asterisk_2(-0.5, _d), _d)),
            _asterisk_2(_asterisk_2(_x, _sqrt_1(_pi_1(2))), _sigma),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0.0;
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let mu = mu(self); let sigma = sigma(self); { :x | if((&(>(x, 0), { isFinite(x) })), { let d = /((-(log(x), mu)), sigma); /(exp((*(*(-0.5, d), d))), (*(*(x, sqrt(pi(2))), sigma))) }, { 0.0 }) } }",
);

sl.addMethodToExistingType(
  "LogNormalDistribution",
  "LogNormalDistribution",
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
        return _exp_1(_normalDistribution_3(_rng, _mu, _sigma));
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let mu = mu(self); let sigma = sigma(self); !({ exp(normalDistribution(rng,mu, sigma)) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LogNormalDistribution",
  "LogNormalDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLogNormalDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma | initializeSlots(newLogNormalDistribution(),mu, sigma) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "LogNormalDistribution",
  "LogNormalDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLogNormalDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma | initializeSlots(newLogNormalDistribution(),mu, sigma) }",
);
