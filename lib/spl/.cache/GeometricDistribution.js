sl.addType(
  false,
  "GeometricDistribution",
  "GeometricDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeometricDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "GeometricDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "GeometricDistribution",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            1,
            _circumflexAccent_2(
              _hyphenMinus_2(1, _p),
              _plusSign_2(1, _floor_1(_x)),
            ),
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
  "{ :self |\n\t\tlet p = self.p;\n\t\t{ :x |\n\t\t\t(x >= 0).if {\n\t\t\t\t1 - ((1 - p) ^ (1 + x.floor))\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _plusSign_2(-1, _solidus_2(1, _p));
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\t-1 + (1 / p)\n\t}",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _p_1(_self);
      /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _circumflexAccent_2(_hyphenMinus_2(1, _p), _x),
            _p,
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
  "{ :self |\n\t\t{ :x |\n\t\t\tlet p = self.p;\n\t\t\t(x >= 0).if {\n\t\t\t\t((1 - p) ^ x) * p\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = 0;
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _nextRandomFloat_3(_rng, 0, 1),
              _p,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        return _i;
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet p = self.p;\n\t\t{\n\t\t\tlet i = 0;\n\t\t\t{\n\t\t\t\trng.nextRandomFloat(0, 1) <= p\n\t\t\t}.whileFalse {\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\ti\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(2, _p), _sqrt_1(_hyphenMinus_2(1, _p)));
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\t(2 - p) / (1 - p).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "GeometricDistribution",
  "GeometricDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(1, _p), _square_1(_p));
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\t(1 - p) / p.square\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GeometricDistribution",
  "GeometricDistribution",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeometricDistribution_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewGeometricDistribution().initializeSlots(p)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "GeometricDistribution",
  "GeometricDistribution",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeometricDistribution_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewGeometricDistribution().initializeSlots(p)\n\t}",
);
