sl.addType(
  false,
  "BernoulliProcess",
  "RandomProcess",
  ["Object"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BernoulliProcess",
);

sl.addMethodToExistingType(
  "BernoulliProcess",
  "RandomProcess",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "BernoulliProcess",
  "RandomProcess",
  "nextRandom",
  ["self", "randomNumberGenerator"],
  sl.annotateFunction(function (_self, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(
      _lessThanSign_2(_nextRandomFloat_1(_randomNumberGenerator), _p_1(_self)),
    );
  }, ["self", "randomNumberGenerator"]),
  "{ :self :randomNumberGenerator | boole((<(nextRandomFloat(randomNumberGenerator), p(self)))) }",
);

sl.addType(
  false,
  "WienerProcess",
  "RandomProcess",
  ["Object"],
  ["mu", "sigma", "x"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WienerProcess",
);

sl.addMethodToExistingType(
  "WienerProcess",
  "RandomProcess",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x_2(_self, _mu_1(_self));
  }, ["self"]),
  "{ :self | x(self, mu(self)) }",
);

sl.addMethodToExistingType(
  "WienerProcess",
  "RandomProcess",
  "nextRandom",
  ["self", "randomNumberGenerator"],
  sl.annotateFunction(function (_self, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _plusSign_2(
      _x_1(_self),
      _nextRandomFloatGaussianDistribution_3(
        _randomNumberGenerator,
        _mu_1(_self),
        _sigma_1(_self),
      ),
    );
    /* Statements */
    _x_2(_self, _answer);
    return _answer;
  }, ["self", "randomNumberGenerator"]),
  "{ :self :randomNumberGenerator | let answer = +(x(self), nextRandomFloatGaussianDistribution(randomNumberGenerator,mu(self), sigma(self))); x(self, answer); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomProcess",
  "BernoulliProcess",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBernoulliProcess_0(), _p);
  }, ["p"]),
  "{ :p | initializeSlots(newBernoulliProcess(),p) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomProcess",
  "WienerProcess",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newWienerProcess_0(), _mu, _sigma, _mu);
  }, ["mu", "sigma"]),
  "{ :mu :sigma | initializeSlots(newWienerProcess(),mu, sigma, mu) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomProcess",
  "randomFunction",
  ["self", "process", "timeSpecification", "count"],
  sl.annotateFunction(function (_self, _process, _timeSpecification, _count) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _process, _timeSpecification, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_timeSpecification, 3);
    let _tMin = _at_2(__SPL1, 1);
    let _tMax = _at_2(__SPL1, 2);
    let _tStep = _at_2(__SPL1, 3);
    /* Statements */
    return _TemporalData_1(
      _collect_2(
        _upOrDownTo_2(1, _count),
        sl.annotateFunction(function (_unused) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _unused";
            throw new Error(errorMessage);
          } /* Statements */
          _reset_1(_process);
          return _collect_2(
            _thenTo_3(_tMin, _plusSign_2(_tMin, _tStep), _tMax),
            sl.annotateFunction(function (_t) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _t";
                throw new Error(errorMessage);
              } /* Statements */
              return [_t, _nextRandom_2(_process, _self)];
            }, ["t"]),
          );
        }, ["unused"]),
      ),
    );
  }, ["self", "process", "timeSpecification", "count"]),
  "{ :self :process :timeSpecification :count | let __SPL1 = assertIsOfSize(timeSpecification, 3); let tMin = at(__SPL1, 1); let tMax = at(__SPL1, 2); let tStep = at(__SPL1, 3); TemporalData(collect(upOrDownTo(1, count), { :unused | reset(process); collect(thenTo(tMin, +(tMin, tStep), tMax), { :t | [t, nextRandom(process,self)] }) })) }",
);
