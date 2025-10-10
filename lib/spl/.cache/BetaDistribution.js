sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "BetaDistribution",
  "betaDistribution",
  ["self", "alpha", "beta"],
  sl.annotateFunction(function (_self, _alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _gammaDistribution_3(_self, _alpha, 1);
    let _y = _gammaDistribution_3(_self, _beta, 1);
    /* Statements */
    return _solidus_2(_x, _plusSign_2(_x, _y));
  }, ["self", "alpha", "beta"]),
  "{ :self :alpha :beta |\n\t\tlet x = self.gammaDistribution(alpha, 1);\n\t\tlet y = self.gammaDistribution(beta, 1);\n\t\tx / (x + y)\n\t}",
);

sl.addType(
  false,
  "BetaDistribution",
  "BetaDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["alpha", "beta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BetaDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BetaDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "BetaDistribution",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
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
      return _betaRegularized_3(_x, _alpha, _beta);
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\tx.betaRegularized(alpha, beta)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
  "mean",
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
    return _solidus_2(_alpha, _plusSign_2(_alpha, _beta));
  }, ["self"]),
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\talpha / (alpha + beta)\n\t}",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
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
      } /* Statements */
      return _if_3(
        _betweenAnd_3(_x, 0, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _b = _solidus_2(
            _asterisk_2(_gamma_1(_alpha), _gamma_1(_beta)),
            _gamma_1(_plusSign_2(_alpha, _beta)),
          );
          /* Statements */
          return _solidus_2(
            _asterisk_2(
              _circumflexAccent_2(_x, _hyphenMinus_2(_alpha, 1)),
              _circumflexAccent_2(
                _hyphenMinus_2(1, _x),
                _hyphenMinus_2(_beta, 1),
              ),
            ),
            _b,
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
  "{ :self |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\t{ :x |\n\t\t\tx.betweenAnd(0, 1).if {\n\t\t\t\tlet b = (alpha.gamma * beta.gamma) / (alpha + beta).gamma;\n\t\t\t\t((x ^ (alpha - 1)) * ((1 - x) ^ (beta - 1))) / b\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
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
        } /* Statements */
        return _betaDistribution_3(_rng, _alpha, _beta);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet alpha = self.alpha;\n\t\tlet beta = self.beta;\n\t\t{\n\t\t\trng.betaDistribution(alpha, beta)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "BetaDistribution",
  "BetaDistribution",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BetaDistribution",
  "BetaDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newBetaDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta |\n\t\tnewBetaDistribution().initializeSlots(alpha, beta)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "BetaDistribution",
  "BetaDistribution",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newBetaDistribution_0(), _alpha, _beta);
  }, ["alpha", "beta"]),
  "{ :alpha :beta |\n\t\tnewBetaDistribution().initializeSlots(alpha, beta)\n\t}",
);
