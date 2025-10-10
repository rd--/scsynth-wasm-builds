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
  "{ :self :nu :lambda |\n\t\t(lambda = 0).if {\n\t\t\t(nu = 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tself.gammaDistribution(nu / 2, 2)\n\t\t\t}\n\t\t} {\n\t\t\tlet r = self.poissonDistribution(lambda / 2);\n\t\t\t(r > 0).ifTrue {\n\t\t\t\tr := self.gammaDistribution(r, 2)\n\t\t\t};\n\t\t\t(nu > 0).ifTrue {\n\t\t\t\tr := r + self.gammaDistribution(nu / 2, 2)\n\t\t\t};\n\t\t\tr\n\t\t}\n\t}",
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
  "{ :self :rng :shape |\n\t\tlet nu = self.nu;\n\t\tlet lambda = self.lambda;\n\t\t{\n\t\t\trng.noncentralChiSquareDistribution(nu, lambda)\n\t\t} ! shape\n\t}",
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
  "{ :nu :lambda |\n\t\tnewNoncentralChiSquareDistribution().initializeSlots(nu, lambda)\n\t}",
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
  "{ :nu :lambda |\n\t\tnewNoncentralChiSquareDistribution().initializeSlots(nu, lambda)\n\t}",
);
