sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "NoncentralBetaDistribution",
  "noncentralBetaDistribution",
  ["self", "alpha", "beta", "delta"],
  sl.annotateFunction(function (_self, _alpha, _beta, _delta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _alpha, _beta, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_delta, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betaDistribution_3(_self, _alpha, _beta);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _noncentralChiSquareDistribution_3(
          _self,
          _asterisk_2(2, _alpha),
          _delta,
        );
        /* Statements */
        return _solidus_2(
          _x,
          _plusSign_2(_x, _gammaDistribution_3(_self, _beta, 2)),
        );
      }, []),
    );
  }, ["self", "alpha", "beta", "delta"]),
  "{ :self :alpha :beta :delta | if((=(delta, 0)), { betaDistribution(self,alpha, beta) }, { let x = noncentralChiSquareDistribution(self,*(2, alpha), delta); /(x, (+(x, gammaDistribution(self,beta, 2)))) }) }",
);

sl.addType(
  false,
  "NoncentralBetaDistribution",
  "NoncentralBetaDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta", "delta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NoncentralBetaDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "NoncentralBetaDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "NoncentralBetaDistribution",
);

sl.addMethodToExistingType(
  "NoncentralBetaDistribution",
  "NoncentralBetaDistribution",
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
    let _delta = _delta_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _noncentralBetaDistribution_4(_rng, _alpha, _beta, _delta);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let alpha = alpha(self); let beta = beta(self); let delta = delta(self); !({ noncentralBetaDistribution(rng,alpha, beta, delta) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NoncentralBetaDistribution",
  "NoncentralBetaDistribution",
  ["alpha", "beta", "delta"],
  sl.annotateFunction(function (_alpha, _beta, _delta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newNoncentralBetaDistribution_0(),
      _alpha,
      _beta,
      _delta,
    );
  }, ["alpha", "beta", "delta"]),
  "{ :alpha :beta :delta | initializeSlots(newNoncentralBetaDistribution(),alpha, beta, delta) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "NoncentralBetaDistribution",
  "NoncentralBetaDistribution",
  ["alpha", "beta", "delta"],
  sl.annotateFunction(function (_alpha, _beta, _delta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newNoncentralBetaDistribution_0(),
      _alpha,
      _beta,
      _delta,
    );
  }, ["alpha", "beta", "delta"]),
  "{ :alpha :beta :delta | initializeSlots(newNoncentralBetaDistribution(),alpha, beta, delta) }",
);
