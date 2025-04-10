sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "InverseGaussianDistribution",
  "inverseGaussianDistribution",
  ["self", "mu", "lambda"],
  sl.annotateFunction(function (_self, _mu, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mu, _lambda";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _normalDistribution_3(_self, 0, 1);
    let _y = _asterisk_2(_v, _v);
    let _x = _hyphenMinus_2(
      _plusSign_2(
        _mu,
        _solidus_2(
          _asterisk_2(_asterisk_2(_mu, _mu), _y),
          _asterisk_2(2, _lambda),
        ),
      ),
      _asterisk_2(
        _solidus_2(_mu, _asterisk_2(2, _lambda)),
        _sqrt_1(
          _plusSign_2(
            _asterisk_2(_asterisk_2(_asterisk_2(4, _mu), _lambda), _y),
            _asterisk_2(_asterisk_2(_asterisk_2(_mu, _mu), _y), _y),
          ),
        ),
      ),
    );
    let _z = _nextRandomFloat_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_z, _solidus_2(_mu, _plusSign_2(_mu, _x))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_asterisk_2(_mu, _mu), _x);
      }, []),
    );
  }, ["self", "mu", "lambda"]),
  "{ :self :mu :lambda | let v = normalDistribution(self,0, 1); let y = *(v, v); let x = -(+(mu, (/((*(*(mu, mu), y)), (*(2, lambda))))), (*((/(mu, (*(2, lambda)))), sqrt((+((*(*(*(4, mu), lambda), y)), (*(*(*(mu, mu), y), y)))))))); let z = nextRandomFloat(self); if((<=(z, (/(mu, (+(mu, x)))))), { x }, { /((*(mu, mu)), x) }) }",
);

sl.addType(
  false,
  "InverseGaussianDistribution",
  "InverseGaussianDistribution",
  ["Object"],
  ["mu", "lambda"],
);

sl.copyTraitMethodsToType(
  "Object",
  "InverseGaussianDistribution",
);

sl.addMethodToExistingType(
  "InverseGaussianDistribution",
  "InverseGaussianDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _lambda = _lambda_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _inverseGaussianDistribution_3(_rng, _mu, _lambda);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let mu = mu(self); let lambda = lambda(self); !({ inverseGaussianDistribution(rng,mu, lambda) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "InverseGaussianDistribution",
  "InverseGaussianDistribution",
  ["mu", "lambda"],
  sl.annotateFunction(function (_mu, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newInverseGaussianDistribution_0(),
      _mu,
      _lambda,
    );
  }, ["mu", "lambda"]),
  "{ :mu :lambda | initializeSlots(newInverseGaussianDistribution(),mu, lambda) }",
);
