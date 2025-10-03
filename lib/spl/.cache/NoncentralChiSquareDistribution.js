sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "NoncentralChiSquareDistribution",
  "noncentralChiSquareDistribution",
  ["self", "nu", "lambda"],
  sl.annotateFunction(function (_self, _nu, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _nu, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_lambda, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_nu, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _gammaDistribution_3(_self, _solidus_2(_nu, 2), 2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _poissonDistribution_2(_self, _solidus_2(_lambda, 2));
        /* Statements */
        _ifTrue_2(
          _greaterThanSign_2(_r, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r = _gammaDistribution_3(_self, _r, 2);
          }, []),
        );
        _ifTrue_2(
          _greaterThanSign_2(_nu, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r = _plusSign_2(
              _r,
              _gammaDistribution_3(_self, _solidus_2(_nu, 2), 2),
            );
          }, []),
        );
        return _r;
      }, []),
    );
  }, ["self", "nu", "lambda"]),
  "{ :self :nu :lambda | if((=(lambda, 0)), { if((=(nu, 0)), { 0 }, { gammaDistribution(self,/(nu, 2), 2) }) }, { let r = poissonDistribution(self,/(lambda, 2)); ifTrue((>(r, 0)), { r := gammaDistribution(self,r, 2) }); ifTrue((>(nu, 0)), { r := +(r, gammaDistribution(self,/(nu, 2), 2)) }); r }) }",
);

sl.addType(
  false,
  "NoncentralChiSquareDistribution",
  "NoncentralChiSquareDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["nu", "lambda"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NoncentralChiSquareDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "NoncentralChiSquareDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "NoncentralChiSquareDistribution",
);

sl.addMethodToExistingType(
  "NoncentralChiSquareDistribution",
  "NoncentralChiSquareDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nu = _nu_1(_self);
    let _lambda = _lambda_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _noncentralChiSquareDistribution_3(_rng, _nu, _lambda);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let nu = nu(self); let lambda = lambda(self); !({ noncentralChiSquareDistribution(rng,nu, lambda) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NoncentralChiSquareDistribution",
  "NoncentralChiSquareDistribution",
  ["nu", "lambda"],
  sl.annotateFunction(function (_nu, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nu, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newNoncentralChiSquareDistribution_0(),
      _nu,
      _lambda,
    );
  }, ["nu", "lambda"]),
  "{ :nu :lambda | initializeSlots(newNoncentralChiSquareDistribution(),nu, lambda) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "NoncentralChiSquareDistribution",
  "NoncentralChiSquareDistribution",
  ["nu", "lambda"],
  sl.annotateFunction(function (_nu, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nu, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newNoncentralChiSquareDistribution_0(),
      _nu,
      _lambda,
    );
  }, ["nu", "lambda"]),
  "{ :nu :lambda | initializeSlots(newNoncentralChiSquareDistribution(),nu, lambda) }",
);
