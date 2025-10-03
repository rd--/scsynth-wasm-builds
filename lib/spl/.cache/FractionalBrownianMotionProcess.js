sl.addType(
  false,
  "FractionalBrownianMotionProcess",
  "FractionalBrownianMotionProcess",
  ["Object"],
  ["mu", "sigma", "h"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FractionalBrownianMotionProcess",
);

sl.addMethodToExistingType(
  "FractionalBrownianMotionProcess",
  "FractionalBrownianMotionProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _hoskingMethodRandomFunction_5(_r, _h_1(_self), true, _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | hoskingMethodRandomFunction(r,h(self), true, t, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractionalBrownianMotionProcess",
  "FractionalBrownianMotionProcess",
  ["h"],
  sl.annotateFunction(function (_h) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newFractionalBrownianMotionProcess_0(),
      0,
      1,
      _h,
    );
  }, ["h"]),
  "{ :h | initializeSlots(newFractionalBrownianMotionProcess(),0, 1, h) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractionalBrownianMotionProcess",
  "basicHoskingMethod",
  ["n", "h", "l", "cum", "snorm"],
  sl.annotateFunction(function (_n, _h, _l, _cum, _snorm) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _n, _h, _l, _cum, _snorm";
      throw new Error(errorMessage);
    } /* Primitive */
    function covariance(i, h) {
      if (i == 0) {
        return 1;
      }
      return (Math.pow(i - 1, 2 * h) - (2 * Math.pow(i, 2 * h)) +
        Math.pow(i + 1, 2 * h)) / 2;
    }
    const n = _n;
    const h = _h;
    const l = _l;
    const cum = _cum;
    const snorm = _snorm;
    const m = Math.pow(2, n);
    const phi = new Array(m);
    const psi = new Array(m);
    const cov = new Array(m);
    const output = new Array(m);
    output[0] = snorm();
    let v = 1;
    phi[0] = 0;
    for (let i = 0; i < m; i++) {
      cov[i] = covariance(i, h);
    }
    for (let i = 1; i < m; i++) {
      phi[i - 1] = cov[i];
      for (let j = 0; j < i - 1; j++) {
        psi[j] = phi[j];
        phi[i - 1] -= psi[j] * cov[i - j - 1];
      }
      phi[i - 1] /= v;
      for (let j = 0; j < i - 1; j++) {
        phi[j] = psi[j] - (phi[i - 1] * psi[i - j - 2]);
      }
      v *= 1 - (phi[i - 1] * phi[i - 1]);
      output[i] = 0;
      for (let j = 0; j < i; j++) {
        output[i] += phi[j] * output[i - j - 1];
      }
      output[i] += Math.sqrt(v) * snorm();
    }
    const scaling = Math.pow(l / m, h);
    for (let i = 0; i < m; i++) {
      output[i] = scaling * output[i];
      if (cum === 1 && i > 0) {
        output[i] += output[i - 1];
      }
    }
    return output;
  }, ["n", "h", "l", "cum", "snorm"]),
  "{ :n :h :l :cum :snorm | <primitive: function covariance(i, h) {\n\t\t\tif (i == 0) {\n\t\t\t\treturn 1;\n\t\t\t}\n\t\t\treturn (Math.pow(i - 1, 2 * h) - (2 * Math.pow(i, 2 * h)) + Math.pow(i + 1, 2 * h)) / 2;\n\t\t};\n\t\tconst n = _n;\n\t\tconst h = _h;\n\t\tconst l = _l;\n\t\tconst cum = _cum;\n\t\tconst snorm = _snorm;\n\t\tconst m = Math.pow(2, n);\n\t\tconst phi = new Array(m);\n\t\tconst psi = new Array(m);\n\t\tconst cov = new Array(m);\n\t\tconst output = new Array(m);\n\t\toutput[0] = snorm();\n\t\tlet v = 1;\n\t\tphi[0] = 0;\n\t\tfor (let i = 0; i < m; i++) {\n\t\t\tcov[i] = covariance(i, h);\n\t\t}\n\t\tfor (let i = 1; i < m; i++) {\n\t\t\tphi[i-1] = cov[i];\n\t\t\tfor (let j = 0; j < i - 1; j++) {\n\t\t\t\tpsi[j] = phi[j];\n\t\t\t\tphi[i - 1] -= psi[j] * cov[i - j - 1];\n\t\t\t}\n\t\t\tphi[i - 1] /= v;\n\t\t\tfor (let j = 0; j < i - 1; j++) {\n\t\t\t\tphi[j] = psi[j] - (phi[i - 1] * psi[i - j - 2]);\n\t\t\t}\n\t\t\tv *= 1 - (phi[i - 1] * phi[i - 1]);\n\t\t\toutput[i] = 0;\n\t\t\tfor (let j = 0; j < i; j++) {\n\t\t\t\toutput[i] += phi[j] * output[i - j - 1];\n\t\t\t}\n\t\t\toutput[i] += Math.sqrt(v) * snorm();\n\t\t}\n\t\tconst scaling = Math.pow(l / m, h);\n\t\tfor(let i = 0; i < m; i++) {\n\t\t\toutput[i] = scaling * output[i];\n\t\t\tif (cum === 1 && i > 0) {\n\t\t\t\toutput[i] += output[i - 1];\n\t\t\t}\n\t\t};\n\t\treturn output;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "FractionalBrownianMotionProcess",
  "hoskingMethod",
  ["self", "t", "m", "h", "k"],
  sl.annotateFunction(function (_self, _t, _m, _h, _k) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _t, _m, _h, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicHoskingMethod_5(
      _m,
      _h,
      _t,
      _boole_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normalDistribution_3(_self, 0, 1);
      }, []),
    );
  }, ["self", "t", "m", "h", "k"]),
  "{ :self :t :m :h :k | basicHoskingMethod(m,h, t, boole(k), { normalDistribution(self,0, 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "FractionalBrownianMotionProcess",
  "hoskingMethodRandomFunction",
  ["self", "h", "k", "t", "n"],
  sl.annotateFunction(function (_self, _h, _k, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _h, _k, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SplVar1, 1);
    let _tMax = _at_2(__SplVar1, 2);
    let _dt = _at_2(__SplVar1, 3);
    let _timeList = _asList_1(_thenTo_3(_tMin, _plusSign_2(_tMin, _dt), _tMax));
    let _l = _size_1(_timeList);
    let _m = _log_2(_nextPowerOfTwo_1(_l), 2);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _transpose_1([
          _timeList,
          _take_2(
            _hoskingMethod_5(_self, _hyphenMinus_2(_tMax, _tMin), _m, _h, _k),
            _l,
          ),
        ]);
      }, []),
      _n,
    ));
  }, ["self", "h", "k", "t", "n"]),
  "{ :self :h :k :t :n | let __SplVar1 = assertIsOfSize(t, 3); let tMin = at(__SplVar1, 1); let tMax = at(__SplVar1, 2); let dt = at(__SplVar1, 3); let timeList = asList(thenTo(tMin, +(tMin, dt), tMax)); let l = size(timeList); let m = log(nextPowerOfTwo(l),2); TemporalData(!({ transpose([timeList, take(hoskingMethod(self,-(tMax, tMin), m, h, k),l)]) }, n)) }",
);
