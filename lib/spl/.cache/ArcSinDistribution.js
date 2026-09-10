sl.addType(
  false,
  "ArcSinDistribution",
  "ArcSinDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["minMax"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ArcSinDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ArcSinDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "ArcSinDistribution",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _xMin = _at_2(__SplVar1, 1);
    let _xMax = _at_2(__SplVar1, 2);
    let _p = _solidus_2(2, _pi_1(1));
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_x, _xMax),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _lessThanSignEqualsSign_2(_x, _xMin),
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
              return _asterisk_2(
                _p,
                _arcSin_1(
                  _sqrt_1(
                    _solidus_2(
                      _hyphenMinus_2(_x, _xMin),
                      _hyphenMinus_2(_xMax, _xMin),
                    ),
                  ),
                ),
              );
            }, []),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [xMin, xMax] = self.minMax;\n\t\tlet p = 2 / 1.pi;\n\t\t{ :x |\n\t\t\t(x >= xMax).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(x <= xMin).if {\n\t\t\t\t\t0\n\t\t\t\t} {\n\t\t\t\t\tp * ((x - xMin) / (xMax - xMin)).sqrt.arcSin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar2 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _xMin = _at_2(__SplVar2, 1);
    let _xMax = _at_2(__SplVar2, 2);
    return _log_1(_pi_1(_solidus_2(_hyphenMinus_2(_xMax, _xMin), 4)));
  }, ["self"]),
  "{ :self |\n\t\tlet [xMin, xMax] = self.minMax;\n\t\t((xMax - xMin) / 4).pi .log\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar3 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _xMin = _at_2(__SplVar3, 1);
    let _xMax = _at_2(__SplVar3, 2);
    return _solidus_2(_plusSign_2(_xMin, _xMax), 2);
  }, ["self"]),
  "{ :self |\n\t\tlet [xMin, xMax] = self.minMax;\n\t\t(xMin + xMax) / 2\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mean_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.mean\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar4 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _xMin = _at_2(__SplVar4, 1);
    let _xMax = _at_2(__SplVar4, 2);
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _verticalLine_2(
          _lessThanSign_2(_x, _xMin),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_x, _xMax);
          }, []),
        ),
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
          return _solidus_2(
            1,
            _pi_1(
              _sqrt_1(
                _asterisk_2(
                  _hyphenMinus_2(_xMax, _x),
                  _hyphenMinus_2(_x, _xMin),
                ),
              ),
            ),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [xMin, xMax] = self.minMax;\n\t\t{ :x |\n\t\t\t(x < xMin | { x > xMax }).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t1 / ((xMax - x) * (x - xMin)).sqrt.pi\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "skewness",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["unused"]),
  "{ :unused |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "ArcSinDistribution",
  "ArcSinDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar5 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _xMin = _at_2(__SplVar5, 1);
    let _xMax = _at_2(__SplVar5, 2);
    return _solidus_2(_square_1(_hyphenMinus_2(_xMax, _xMin)), 8);
  }, ["self"]),
  "{ :self |\n\t\tlet [xMin, xMax] = self.minMax;\n\t\t(xMax - xMin).square / 8\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ArcSinDistribution",
  "ArcSinDistribution",
  ["minMax"],
  sl.annotateFunction(function (_minMax) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _minMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newArcSinDistribution_0(), _minMax);
  }, ["minMax"]),
  "{ :minMax |\n\t\tnewArcSinDistribution().initializeSlots(minMax)\n\t}",
);
