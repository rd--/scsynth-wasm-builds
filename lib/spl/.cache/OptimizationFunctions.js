sl.extendTypeOrTraitWithMethod(
  "Block",
  "OptimizationFunctions",
  "gradientDescentMethod",
  ["f:/1", "x", "alpha", "tolerance"],
  sl.annotateFunction(function (_f_1, _x, _alpha, _tolerance) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_1, _x, _alpha, _tolerance";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gradientOf_1 = sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_p, 2);
      let _x = _at_2(__SplVar1, 1);
      let _y = _at_2(__SplVar1, 2);
      let _a = _asterisk_2(
        _asterisk_2(2, _hyphenMinus_2(_x, 1)),
        _exp_1(_asterisk_2(_asterisk_2(-1, _y), _y)),
      );
      let _b = _asterisk_2(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(4, _x),
            _exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)),
          ),
          _y,
        ),
        _plusSign_2(_y, 2),
      );
      let _c = _asterisk_2(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(-2, _hyphenMinus_2(_x, 1)),
            _hyphenMinus_2(_x, 1),
          ),
          _y,
        ),
        _exp_1(_asterisk_2(_asterisk_2(-1, _y), _y)),
      );
      let _d = _asterisk_2(
        _exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)),
        _plusSign_2(_y, 2),
      );
      let _e = _asterisk_2(_exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)), _y);
      /* Statements */
      return [_hyphenMinus_2(_a, _b), _plusSign_2(_plusSign_2(_c, _d), _e)];
    }, ["p"]);
    let _n = _size_1(_x);
    let _g0 = _f_1(_x);
    let _fi = _gradientOf_1(_x);
    let _delG = 0;
    let _b = null;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _delG = _plusSign_2(
          _delG,
          _asterisk_2(_at_2(_fi, _i), _at_2(_fi, _i)),
        );
      }, ["i"]),
    );
    _delG = _sqrt_1(_delG);
    _b = _solidus_2(_alpha, _delG);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_delG, _tolerance);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _g1 = null;
        /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _x,
              _i,
              _hyphenMinus_2(_at_2(_x, _i), _asterisk_2(_b, _at_2(_fi, _i))),
            );
          }, ["i"]),
        );
        _fi = _gradientOf_1(_x);
        _delG = 0;
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _delG = _plusSign_2(
              _delG,
              _asterisk_2(_at_2(_fi, _i), _at_2(_fi, _i)),
            );
          }, ["i"]),
        );
        _delG = _sqrt_1(_delG);
        _b = _solidus_2(_alpha, _delG);
        _g1 = _f_1(_x);
        return _if_3(
          _greaterThanSign_2(_g1, _g0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _alpha = _solidus_2(_alpha, 2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _g0 = _g1;
          }, []),
        );
      }, []),
    );
    return _x;
  }, ["f:/1", "x", "alpha", "tolerance"]),
  "{ :f:/1 :x :alpha :tolerance |\n\t\tlet gradientOf = { :p |\n\t\t\tlet [x, y] = p;\n\t\t\tlet a = 2 * (x - 1) * (-1 * y * y).exp;\n\t\t\tlet b = 4 * x * (-2 * x * x).exp * y * (y + 2);\n\t\t\tlet c = -2 * (x - 1) * (x - 1) * y * (-1 * y * y).exp;\n\t\t\tlet d = (-2 * x * x).exp * (y + 2);\n\t\t\tlet e = (-2 * x * x).exp * y;\n\t\t\t[a - b, c + d + e]\n\t\t};\n\t\tlet n = x.size;\n\t\tlet g0 = f(x);\n\t\tlet fi = gradientOf(x);\n\t\tlet delG = 0;\n\t\tlet b = nil;\n\t\t1.toDo(n) { :i |\n\t\t\tdelG := delG + (fi[i] * fi[i])\n\t\t};\n\t\tdelG := delG.sqrt;\n\t\tb := alpha / delG;\n\t\t{ delG > tolerance }.whileTrue {\n\t\t\tlet g1 = nil;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tx[i] := x[i] - (b * fi[i])\n\t\t\t};\n\t\t\tfi := gradientOf(x);\n\t\t\tdelG := 0;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tdelG := delG + (fi[i] * fi[i])\n\t\t\t};\n\t\t\tdelG := delG.sqrt;\n\t\t\tb := alpha / delG;\n\t\t\tg1 := f(x);\n\t\t\t(g1 > g0).if {\n\t\t\t\talpha := alpha / 2\n\t\t\t} {\n\t\t\t\tg0 := g1\n\t\t\t}\n\t\t};\n\t\tx\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "OptimizationFunctions",
  "nelderMeadMethod",
  ["f:/1", "x0", "parameters"],
  sl.annotateFunction(function (_f_1, _x0, _parameters) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _f_1, _x0, _parameters";
      throw new Error(errorMessage);
    } /* Primitive */
    const f = _f_1;
    const x0 = _x0;
    let parameters = _parameters || {};
    function weightedSum(ret, w1, v1, w2, v2) {
      for (let j = 0; j < ret.length; ++j) {
        ret[j] = w1 * v1[j] + w2 * v2[j];
      }
    }
    const maxIterations = parameters.maxIterations || x0.length * 200;
    const nonZeroDelta = parameters.nonZeroDelta || 1.05;
    const zeroDelta = parameters.zeroDelta || 0.001;
    const minErrorDelta = parameters.minErrorDelta || 1e-6;
    const minTolerance = parameters.minTolerance || 1e-5;
    const rho = parameters.rho !== undefined ? parameters.rho : 1;
    const chi = parameters.chi !== undefined ? parameters.chi : 2;
    const psi = parameters.psi !== undefined ? parameters.psi : -0.5;
    const sigma = parameters.sigma !== undefined ? parameters.sigma : 0.5;
    let maxDiff;
    const N = x0.length;
    const simplex = new Array(N + 1);
    simplex[0] = x0;
    simplex[0].fx = f(x0);
    simplex[0].id = 0;
    for (let i = 0; i < N; ++i) {
      const point = x0.slice();
      point[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;
      simplex[i + 1] = point;
      simplex[i + 1].fx = f(point);
      simplex[i + 1].id = i + 1;
    }
    function updateSimplex(value) {
      for (let i = 0; i < value.length; i++) {
        simplex[N][i] = value[i];
      }
      simplex[N].fx = value.fx;
    }
    const sortOrder = (a, b) => a.fx - b.fx;
    const centroid = x0.slice();
    const reflected = x0.slice();
    const contracted = x0.slice();
    const expanded = x0.slice();
    for (let iteration = 0; iteration < maxIterations; ++iteration) {
      simplex.sort(sortOrder);
      if (parameters.history) {
        const sortedSimplex = simplex.map((x) => {
          const state = x.slice();
          state.fx = x.fx;
          state.id = x.id;
          return state;
        });
        sortedSimplex.sort((a, b) => a.id - b.id);
        parameters.history.push({
          x: simplex[0].slice(),
          fx: simplex[0].fx,
          simplex: sortedSimplex,
        });
      }
      maxDiff = 0;
      for (let i = 0; i < N; ++i) {
        maxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));
      }
      if (
        Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta &&
        maxDiff < minTolerance
      ) {
        break;
      }
      for (let i = 0; i < N; ++i) {
        centroid[i] = 0;
        for (let j = 0; j < N; ++j) {
          centroid[i] += simplex[j][i];
        }
        centroid[i] /= N;
      }
      const worst = simplex[N];
      weightedSum(reflected, 1 + rho, centroid, -rho, worst);
      reflected.fx = f(reflected);
      if (reflected.fx < simplex[0].fx) {
        weightedSum(expanded, 1 + chi, centroid, -chi, worst);
        expanded.fx = f(expanded);
        if (expanded.fx < reflected.fx) {
          updateSimplex(expanded);
        } else {
          updateSimplex(reflected);
        }
      } else if (reflected.fx >= simplex[N - 1].fx) {
        let shouldReduce = false;
        if (reflected.fx > worst.fx) {
          weightedSum(contracted, 1 + psi, centroid, -psi, worst);
          contracted.fx = f(contracted);
          if (contracted.fx < worst.fx) {
            updateSimplex(contracted);
          } else {
            shouldReduce = true;
          }
        } else {
          weightedSum(contracted, 1 - psi * rho, centroid, psi * rho, worst);
          contracted.fx = f(contracted);
          if (contracted.fx < reflected.fx) {
            updateSimplex(contracted);
          } else {
            shouldReduce = true;
          }
        }
        if (shouldReduce) {
          if (sigma >= 1) {
            break;
          }
          for (let i = 1; i < simplex.length; ++i) {
            weightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);
            simplex[i].fx = f(simplex[i]);
          }
        }
      } else {
        updateSimplex(reflected);
      }
    }
    simplex.sort(sortOrder);
    return { fx: simplex[0].fx, x: simplex[0] };
  }, ["f:/1", "x0", "parameters"]),
  "{ :f:/1 :x0 :parameters |\n\t\t/* https://github.com/benfred/fmin */\n\t\t<primitive:\n\t\tconst f = _f_1;\n\t\tconst x0 = _x0;\n\t\tlet parameters = _parameters || {};\n\t\tfunction weightedSum(ret, w1, v1, w2, v2) {\n\t\t\tfor (let j = 0; j < ret.length; ++j) {\n\t\t\t\tret[j] = w1 * v1[j] + w2 * v2[j];\n\t\t\t}\n\t\t}\n\t\tconst maxIterations = parameters.maxIterations || x0.length * 200;\n\t\tconst nonZeroDelta = parameters.nonZeroDelta || 1.05;\n\t\tconst zeroDelta = parameters.zeroDelta || 0.001;\n\t\tconst minErrorDelta = parameters.minErrorDelta || 1e-6;\n\t\tconst minTolerance = parameters.minTolerance || 1e-5;\n\t\tconst rho = parameters.rho !== undefined ? parameters.rho : 1;\n\t\tconst chi = parameters.chi !== undefined ? parameters.chi : 2;\n\t\tconst psi = parameters.psi !== undefined ? parameters.psi : -0.5;\n\t\tconst sigma = parameters.sigma !== undefined ? parameters.sigma : 0.5;\n\t\tlet maxDiff;\n\t\tconst N = x0.length;\n\t\tconst simplex = new Array(N + 1);\n\t\tsimplex[0] = x0;\n\t\tsimplex[0].fx = f(x0);\n\t\tsimplex[0].id = 0;\n\t\tfor (let i = 0; i < N; ++i) {\n\t\t\tconst point = x0.slice();\n\t\t\tpoint[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;\n\t\t\tsimplex[i + 1] = point;\n\t\t\tsimplex[i + 1].fx = f(point);\n\t\t\tsimplex[i + 1].id = i + 1;\n\t\t}\n\t\tfunction updateSimplex(value) {\n\t\t\tfor (let i = 0; i < value.length; i++) {\n\t\t\t\tsimplex[N][i] = value[i];\n\t\t\t}\n\t\t\tsimplex[N].fx = value.fx;\n\t\t}\n\t\tconst sortOrder = (a, b) => a.fx - b.fx;\n\t\tconst centroid = x0.slice();\n\t\tconst reflected = x0.slice();\n\t\tconst contracted = x0.slice();\n\t\tconst expanded = x0.slice();\n\t\tfor (let iteration = 0; iteration < maxIterations; ++iteration) {\n\t\t\tsimplex.sort(sortOrder);\n\t\t\tif (parameters.history) {\n\t\t\t\tconst sortedSimplex = simplex.map((x) => {\n\t\t\t\t\tconst state = x.slice();\n\t\t\t\t\tstate.fx = x.fx;\n\t\t\t\t\tstate.id = x.id;\n\t\t\t\t\treturn state;\n\t\t\t\t});\n\t\t\t\tsortedSimplex.sort((a, b) => a.id - b.id);\n\t\t\t\tparameters.history.push({\n\t\t\t\t\tx: simplex[0].slice(),\n\t\t\t\t\tfx: simplex[0].fx,\n\t\t\t\t\tsimplex: sortedSimplex,\n\t\t\t\t});\n\t\t\t}\n\t\t\tmaxDiff = 0;\n\t\t\tfor (let i = 0; i < N; ++i) {\n\t\t\t\tmaxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));\n\t\t\t}\n\t\t\tif (Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta && maxDiff < minTolerance) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tfor (let i = 0; i < N; ++i) {\n\t\t\t\tcentroid[i] = 0;\n\t\t\t\tfor (let j = 0; j < N; ++j) {\n\t\t\t\t\tcentroid[i] += simplex[j][i];\n\t\t\t\t}\n\t\t\t\tcentroid[i] /= N;\n\t\t\t}\n\t\t\tconst worst = simplex[N];\n\t\t\tweightedSum(reflected, 1 + rho, centroid, -rho, worst);\n\t\t\treflected.fx = f(reflected);\n\t\t\tif (reflected.fx < simplex[0].fx) {\n\t\t\t\tweightedSum(expanded, 1 + chi, centroid, -chi, worst);\n\t\t\t\texpanded.fx = f(expanded);\n\t\t\t\tif (expanded.fx < reflected.fx) {\n\t\t\t\t\tupdateSimplex(expanded);\n\t\t\t\t} else {\n\t\t\t\t\tupdateSimplex(reflected);\n\t\t\t\t}\n\t\t\t} else if (reflected.fx >= simplex[N - 1].fx) {\n\t\t\t\tlet shouldReduce = false;\n\t\t\t\tif (reflected.fx > worst.fx) {\n\t\t\t\t\tweightedSum(contracted, 1 + psi, centroid, -psi, worst);\n\t\t\t\t\tcontracted.fx = f(contracted);\n\t\t\t\t\tif (contracted.fx < worst.fx) {\n\t\t\t\t\t\tupdateSimplex(contracted);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshouldReduce = true;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tweightedSum(contracted, 1 - psi * rho, centroid, psi * rho, worst);\n\t\t\t\t\tcontracted.fx = f(contracted);\n\t\t\t\t\tif (contracted.fx < reflected.fx) {\n\t\t\t\t\t\tupdateSimplex(contracted);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshouldReduce = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (shouldReduce) {\n\t\t\t\t\tif (sigma >= 1) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tfor (let i = 1; i < simplex.length; ++i) {\n\t\t\t\t\t\tweightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);\n\t\t\t\t\t\tsimplex[i].fx = f(simplex[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tupdateSimplex(reflected);\n\t\t\t}\n\t\t}\n\t\tsimplex.sort(sortOrder);\n\t\treturn { fx: simplex[0].fx, x: simplex[0] };\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "OptimizationFunctions",
  "nelderMeadMethod",
  ["f:/1", "x0"],
  sl.annotateFunction(function (_f_1, _x0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f_1, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return _nelderMeadMethod_3(_f_1, _x0, _Record_0());
  }, ["f:/1", "x0"]),
  "{ :f:/1 :x0 |\n\t\tnelderMeadMethod(f:/1, x0, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OptimizationFunctions",
  "ackleyFunction",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _size_1(_x);
      let _p = _asterisk_2(
        _asterisk_2(-1, _a),
        _exp_1(
          _asterisk_2(
            _asterisk_2(-1, _b),
            _sqrt_1(
              _asterisk_2(_solidus_2(1, _d), _sum_1(_asterisk_2(_x, _x))),
            ),
          ),
        ),
      );
      let _q = _asterisk_2(
        -1,
        _exp_1(
          _asterisk_2(_solidus_2(1, _d), _sum_1(_cos_1(_asterisk_2(_c, _x)))),
        ),
      );
      /* Statements */
      return _plusSign_2(_plusSign_2(_plusSign_2(_p, _q), _a), _exp_1(1));
    }, ["x"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :x |\n\t\t\tlet d = x.size;\n\t\t\tlet p = -1 * a * exp(-1 * b * sqrt((1 / d) * sum(x * x)));\n\t\t\tlet q = -1 * exp((1 / d) * sum(cos(c * x)));\n\t\t\tp + q + a + exp(1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OptimizationFunctions",
  "himmelblausFunction",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _square_1(_hyphenMinus_2(_plusSign_2(_square_1(_x), _y), 11)),
      _square_1(_hyphenMinus_2(_plusSign_2(_x, _square_1(_y)), 7)),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t(x.square + y - 11).square + (x + y.square - 7).square\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OptimizationFunctions",
  "rosenbrockFunction",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _size_1(_x);
      /* Statements */
      return _sum_2(
        _to_2(1, _hyphenMinus_2(_n, 1)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _asterisk_2(
              100,
              _square_1(
                _hyphenMinus_2(
                  _at_2(_x, _plusSign_2(_i, 1)),
                  _square_1(_at_2(_x, _i)),
                ),
              ),
            ),
            _square_1(_hyphenMinus_2(1, _at_2(_x, _i))),
          );
        }, ["i"]),
      );
    }, ["x"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :x |\n\t\t\tlet n = x.size;\n\t\t\t1.to(n - 1).sum { :i |\n\t\t\t\t100 * (x[i + 1] - x[i].square).square + (1 - x[i]).square\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "OptimizationFunctions",
  "goldsteinPriceFunction",
  ["v"],
  sl.annotateFunction(function (_v) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_v, 2);
    let _x = _at_2(__SplVar2, 1);
    let _y = _at_2(__SplVar2, 2);
    let _f1 = _plusSign_2(_plusSign_2(_x, _y), 1);
    let _f2 = _plusSign_2(
      _plusSign_2(
        _hyphenMinus_2(
          _plusSign_2(
            _hyphenMinus_2(19, _asterisk_2(14, _x)),
            _asterisk_2(3, _square_1(_x)),
          ),
          _asterisk_2(14, _y),
        ),
        _asterisk_2(_asterisk_2(6, _x), _y),
      ),
      _asterisk_2(3, _square_1(_y)),
    );
    let _f3 = _hyphenMinus_2(_asterisk_2(2, _x), _asterisk_2(3, _y));
    let _f4 = _plusSign_2(
      _hyphenMinus_2(
        _plusSign_2(
          _plusSign_2(
            _hyphenMinus_2(18, _asterisk_2(32, _x)),
            _asterisk_2(12, _square_1(_x)),
          ),
          _asterisk_2(48, _y),
        ),
        _asterisk_2(_asterisk_2(36, _x), _y),
      ),
      _asterisk_2(27, _square_1(_y)),
    );
    let _f5 = _plusSign_2(1, _asterisk_2(_square_1(_f1), _f2));
    let _f6 = _plusSign_2(30, _asterisk_2(_square_1(_f3), _f4));
    /* Statements */
    return _asterisk_2(_f5, _f6);
  }, ["v"]),
  "{ :v |\n\t\tlet [x, y] = v;\n\t\tlet f1 = x + y + 1;\n\t\tlet f2 = 19 - (14 * x) + (3 * x.square) - (14 * y) + (6 * x * y) + (3 * y.square);\n\t\tlet f3 = (2 * x) - (3 * y);\n\t\tlet f4 = 18 - (32 * x) + (12 * x.square) + (48 * y) - (36 * x * y) + (27 * y.square);\n\t\tlet f5 = 1 + (f1.square * f2);\n\t\tlet f6 = 30 + (f3.square * f4);\n\t\tf5 * f6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "OptimizationFunctions",
  "griewankFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _i = _to_2(1, _n);
    let _a = _solidus_2(_sum_1(_circumflexAccent_2(_x, 2)), 4000);
    let _b = _product_1(_cos_1(_solidus_2(_x, _sqrt_1(_i))));
    /* Statements */
    return _plusSign_2(_hyphenMinus_2(_a, _b), 1);
  }, ["x"]),
  "{ :x |\n\t\tlet n = x.size;\n\t\tlet i = 1.to(n);\n\t\tlet a = (x ^ 2).sum / 4000;\n\t\tlet b = (x / i.sqrt).cos.product;\n\t\ta - b + 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "OptimizationFunctions",
  "rastriginFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _a = 10;
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_a, _n),
      _sum_2(
        _to_2(1, _n),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            _square_1(_at_2(_x, _i)),
            _asterisk_2(_a, _cos_1(_asterisk_2(_pi_1(2), _at_2(_x, _i)))),
          );
        }, ["i"]),
      ),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet n = x.size;\n\t\tlet a = 10;\n\t\t(a * n) + 1.to(n).sum { :i |\n\t\t\tx[i].square - (a * (2.pi * x[i]).cos)\n\t\t}\n\t}",
);
