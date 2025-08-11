sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "SkewNormalDistribution",
  "skewNormalDistribution",
  ["self", "mu", "sigma", "alpha"],
  sl.annotateFunction(function (_self, _mu, _sigma, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _mu, _sigma, _alpha";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_asterisk_2(_x, _sigma), _mu);
    }, ["x"]);
    let _u1 = _normalDistribution_3(_self, 0, 1);
    /* Statements */
    return _if_3(
      _equalsSign_2(_alpha, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_u1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u2 = _normalDistribution_3(_self, 0, 1);
        let __SPL453 = _assertIsOfSize_2(
          [_max_2(_u1, _u2), _min_2(_u1, _u2)],
          2,
        );
        let _u = _at_2(__SPL453, 1);
        let _v = _at_2(__SPL453, 2);
        /* Statements */
        return _if_3(
          _equalsSign_2(_alpha, -1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _f_1(_v);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_alpha, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_1(_u);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_1(
                  _solidus_2(
                    _plusSign_2(
                      _asterisk_2(_plusSign_2(1, _alpha), _u),
                      _asterisk_2(_hyphenMinus_2(1, _alpha), _v),
                    ),
                    _asterisk_2(
                      _sqrt_1(_plusSign_2(1, _asterisk_2(_alpha, _alpha))),
                      _sqrt_1(2),
                    ),
                  ),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "mu", "sigma", "alpha"]),
  "{ :self :mu :sigma :alpha | let f = { :x | +(*(x, sigma), mu) }; let u1 = normalDistribution(self,0, 1); if((=(alpha, 0)), { f(u1) }, { let u2 = normalDistribution(self,0, 1); let __SPL453 = assertIsOfSize([max(u1,u2), min(u1,u2)], 2); let u = at(__SPL453, 1); let v = at(__SPL453, 2); if((=(alpha, -1)), { f(v) }, { if((=(alpha, 1)), { f(u) }, { f(/((+((*((+(1, alpha)), u)), (*((-(1, alpha)), v)))), (*(sqrt((+(1, (*(alpha, alpha))))), sqrt(2))))) }) }) }) }",
);

sl.addType(
  false,
  "SkewNormalDistribution",
  "SkewNormalDistribution",
  ["Object", "ProbabilityDistribution"],
  ["mu", "sigma", "alpha"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SkewNormalDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "SkewNormalDistribution",
);

sl.addMethodToExistingType(
  "SkewNormalDistribution",
  "SkewNormalDistribution",
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
    let _alpha = _alpha_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _asterisk_2(
          _exp_1(
            _hyphenMinus_1(
              _solidus_2(
                _squared_1(_hyphenMinus_2(_x, _mu)),
                _asterisk_2(2, _squared_1(_sigma)),
              ),
            ),
          ),
          _erfc_1(
            _hyphenMinus_1(
              _solidus_2(
                _asterisk_2(_alpha, _hyphenMinus_2(_x, _mu)),
                _asterisk_2(_sqrt_1(2), _sigma),
              ),
            ),
          ),
        ),
        _asterisk_2(_sqrt_1(_pi_1(2)), _sigma),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let mu = mu(self); let sigma = sigma(self); let alpha = alpha(self); { :x | /((*(exp(-((/(squared((-(x, mu))), (*(2, squared(sigma))))))), erfc(-((/((*(alpha, (-(x, mu)))), (*(sqrt(2), sigma)))))))), (*(sqrt(pi(2)), sigma))) } }",
);

sl.addMethodToExistingType(
  "SkewNormalDistribution",
  "SkewNormalDistribution",
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
    let _alpha = _alpha_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _skewNormalDistribution_4(_rng, _mu, _sigma, _alpha);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let mu = mu(self); let sigma = sigma(self); let alpha = alpha(self); !({ skewNormalDistribution(rng,mu, sigma, alpha) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SkewNormalDistribution",
  "SkewNormalDistribution",
  ["mu", "sigma", "alpha"],
  sl.annotateFunction(function (_mu, _sigma, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newSkewNormalDistribution_0(),
      _mu,
      _sigma,
      _alpha,
    );
  }, ["mu", "sigma", "alpha"]),
  "{ :mu :sigma :alpha | initializeSlots(newSkewNormalDistribution(),mu, sigma, alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "SkewNormalDistribution",
  "SkewNormalDistribution",
  ["mu", "sigma", "alpha"],
  sl.annotateFunction(function (_mu, _sigma, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newSkewNormalDistribution_0(),
      _mu,
      _sigma,
      _alpha,
    );
  }, ["mu", "sigma", "alpha"]),
  "{ :mu :sigma :alpha | initializeSlots(newSkewNormalDistribution(),mu, sigma, alpha) }",
);
