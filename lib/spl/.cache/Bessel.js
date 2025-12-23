sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Bessel",
  "besselJ",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _x,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _besselJ_2(_n, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _besselJ0_1(_x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_n, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _besselJ1_1(_x);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_n, 2),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_x, 0),
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
                        return _hyphenMinus_2(
                          _solidus_2(_asterisk_2(2, _besselJ1_1(_x)), _x),
                          _besselJ0_1(_x),
                        );
                      }, []),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_2(
                      _n,
                      "@Integer>>besselJ: only defined for n=0, n=1 and n=2",
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "x"]),
  "{ :n :x |\n\t\tx.isCollection.if {\n\t\t\tx.collect { :each |\n\t\t\t\tn.besselJ(each)\n\t\t\t}\n\t\t} {\n\t\t\t(n = 0).if {\n\t\t\t\tbesselJ0(x)\n\t\t\t} {\n\t\t\t\t(n = 1).if {\n\t\t\t\t\tbesselJ1(x)\n\t\t\t\t} {\n\t\t\t\t\t(n = 2).if {\n\t\t\t\t\t\t(x = 0).if {\n\t\t\t\t\t\t\t0\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t2 * besselJ1(x) / x - besselJ0(x)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tn.error('@Integer>>besselJ: only defined for n=0, n=1 and n=2')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselI",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Primitive */
    const horner = function (arr, v) {
      let z = 0;
      for (let i = 0; i < arr.length; ++i) z = v * z + arr[i];
      return z;
    };
    const b0_a = [
      1.0,
      3.5156229,
      3.0899424,
      1.2067492,
      0.2659732,
      0.360768e-1,
      0.45813e-2,
    ].reverse();
    const b0_b = [
      0.39894228,
      0.1328592e-1,
      0.225319e-2,
      -0.157565e-2,
      0.916281e-2,
      -0.2057706e-1,
      0.2635537e-1,
      -0.1647633e-1,
      0.392377e-2,
    ].reverse();
    const bessel0 = function (x) {
      if (x <= 3.75) return horner(b0_a, x * x / (3.75 * 3.75));
      return Math.exp(Math.abs(x)) / Math.sqrt(Math.abs(x)) *
        horner(b0_b, 3.75 / Math.abs(x));
    };
    const b1_a = [
      0.5,
      0.87890594,
      0.51498869,
      0.15084934,
      0.2658733e-1,
      0.301532e-2,
      0.32411e-3,
    ].reverse();
    const b1_b = [
      0.39894228,
      -0.3988024e-1,
      -0.362018e-2,
      0.163801e-2,
      -0.1031555e-1,
      0.2282967e-1,
      -0.2895312e-1,
      0.1787654e-1,
      -0.420059e-2,
    ].reverse();
    const bessel1 = function (x) {
      if (x < 3.75) return x * horner(b1_a, x * x / (3.75 * 3.75));
      return (x < 0 ? -1 : 1) * Math.exp(Math.abs(x)) / Math.sqrt(Math.abs(x)) *
        horner(b1_b, 3.75 / Math.abs(x));
    };
    const besseli = function (x, n) {
      n = Math.round(n);
      if (n === 0) return bessel0(x);
      if (n === 1) return bessel1(x);
      if (n < 0) return NaN;
      if (Math.abs(x) === 0) return 0;
      if (x === Infinity) return Infinity;
      let ret = 0.0, j, tox = 2 / Math.abs(x), bip = 0.0, bi = 1.0, bim = 0.0;
      const m = 2 * Math.round((n + Math.round(Math.sqrt(40 * n))) / 2);
      for (j = m; j > 0; j--) {
        bim = j * tox * bi + bip;
        bip = bi;
        bi = bim;
        if (Math.abs(bi) > 1E10) {
          bi *= 1E-10;
          bip *= 1E-10;
          ret *= 1E-10;
        }
        if (j === n) ret = bip;
      }
      ret *= besseli(x, 0) / bi;
      return x < 0 && (n % 2) ? -ret : ret;
    };
    return besseli(_x, _n);
  }, ["n", "x"]),
  "{ :n :x |\n\t\t<primitive:\n\t\t/* https://git.sheetjs.com/SheetJS/bessel */\n\t\tconst horner = function(arr, v) { let z = 0; for(let i = 0; i < arr.length; ++i) z = v * z + arr[i]; return z; }\n\t\tconst b0_a = [1.0, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.360768e-1, 0.45813e-2].reverse();\n\t\tconst b0_b = [0.39894228, 0.1328592e-1, 0.225319e-2, -0.157565e-2, 0.916281e-2, -0.2057706e-1, 0.2635537e-1, -0.1647633e-1, 0.392377e-2].reverse();\n\t\tconst bessel0 = function(x) {\n\t\t\tif(x <= 3.75) return horner(b0_a, x*x/(3.75*3.75));\n\t\t\treturn Math.exp(Math.abs(x))/Math.sqrt(Math.abs(x))*horner(b0_b, 3.75/Math.abs(x));\n\t\t}\n\t\tconst b1_a = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.2658733e-1, 0.301532e-2, 0.32411e-3].reverse();\n\t\tconst b1_b = [0.39894228, -0.3988024e-1, -0.362018e-2, 0.163801e-2, -0.1031555e-1, 0.2282967e-1, -0.2895312e-1, 0.1787654e-1, -0.420059e-2].reverse();\n\t\tconst bessel1 = function(x) {\n\t\t\tif(x < 3.75) return x * horner(b1_a, x*x/(3.75*3.75));\n\t\t\treturn (x < 0 ? -1 : 1) * Math.exp(Math.abs(x))/Math.sqrt(Math.abs(x))*horner(b1_b, 3.75/Math.abs(x));\n\t\t}\n\t\tconst besseli = function(x, n) {\n\t\t\tn = Math.round(n);\n\t\t\tif(n === 0) return bessel0(x);\n\t\t\tif(n === 1) return bessel1(x);\n\t\t\tif(n < 0) return NaN;\n\t\t\tif(Math.abs(x) === 0) return 0;\n\t\t\tif(x === Infinity) return Infinity;\n\t\t\tlet ret = 0.0, j, tox = 2 / Math.abs(x), bip = 0.0, bi=1.0, bim=0.0;\n\t\t\tconst m=2*Math.round((n+Math.round(Math.sqrt(40*n)))/2);\n\t\t\tfor (j=m;j>0;j--) {\n\t\t\t\tbim=j*tox*bi + bip;\n\t\t\t\tbip=bi; bi=bim;\n\t\t\t\tif (Math.abs(bi) > 1E10) {\n\t\t\t\t\tbi *= 1E-10;\n\t\t\t\t\tbip *= 1E-10;\n\t\t\t\t\tret *= 1E-10;\n\t\t\t\t}\n\t\t\t\tif(j === n) ret = bip;\n\t\t\t}\n\t\t\tret *= besseli(x, 0) / bi;\n\t\t\treturn x < 0 && (n%2) ? -ret : ret;\n\t\t};\n\t\treturn besseli(_x, _n);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselJ0",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    _x = _abs_1(_x);
    return _if_3(
      _greaterThanSign_2(_x, 8),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_besselAsympt0_1(_x), 2);
        let _p0 = _at_2(__SplVar1, 1);
        let _q0 = _at_2(__SplVar1, 2);
        let _nn = _hyphenMinus_2(_x, _pi_1(0.25));
        /* Statements */
        return _asterisk_2(
          _sqrt_1(_solidus_2(_solidus_2(2, _pi_1(1)), _x)),
          _hyphenMinus_2(
            _asterisk_2(_p0, _cos_1(_nn)),
            _asterisk_2(_q0, _sin_1(_nn)),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _xsq = _asterisk_2(_x, _x);
        let _p1 = 26857.86856980014981415848441;
        let _q1 = 1.0;
        /* Statements */
        _p1 = _plusSign_2(
          -40504123.71833132706360663322,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          25071582855.36881945555156435,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -8085222034853.793871199468171,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          1434354939140344.111664316553,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -136762035308817138.6865416609,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          6382059341072356562.289432465,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -117915762910761053603.8440800,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          493378725179413356181.6813446,
          _asterisk_2(_xsq, _p1),
        );
        _q1 = 1.0;
        _q1 = _plusSign_2(
          1363.063652328970604442810507,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          1114636.098462985378182402543,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          669998767.2982239671814028660,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          312304311494.1213172572469442,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          112775673967979.8507056031594,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          30246356167094626.98627330784,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          5428918384092285160.200195092,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          493378725179413356211.3278438,
          _asterisk_2(_xsq, _q1),
        );
        return _solidus_2(_p1, _q1);
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\tx := x.abs;\n\t\t(x > 8).if {\n\t\t\tlet [p0, q0] = besselAsympt0(x);\n\t\t\tlet nn = x - 0.25.pi;\n\t\t\t(2 / 1.pi / x).sqrt * ((p0 * nn.cos) - (q0 * nn.sin))\n\t\t} {\n\t\t\tlet xsq = x * x;\n\t\t\tlet p1 = 26857.86856980014981415848441;\n\t\t\tlet q1 = 1.0;\n\t\t\tp1 := -40504123.71833132706360663322 + (xsq * p1);\n\t\t\tp1 := 25071582855.36881945555156435 + (xsq * p1);\n\t\t\tp1 := -8085222034853.793871199468171 + (xsq * p1);\n\t\t\tp1 := 1434354939140344.111664316553 + (xsq * p1);\n\t\t\tp1 := -136762035308817138.6865416609 + (xsq * p1);\n\t\t\tp1 := 6382059341072356562.289432465 + (xsq * p1);\n\t\t\tp1 := -117915762910761053603.8440800 + (xsq * p1);\n\t\t\tp1 := 493378725179413356181.6813446 + (xsq * p1);\n\t\t\tq1 := 1.0;\n\t\t\tq1 := 1363.063652328970604442810507 + (xsq * q1);\n\t\t\tq1 := 1114636.098462985378182402543 + (xsq * q1);\n\t\t\tq1 := 669998767.2982239671814028660 + (xsq * q1);\n\t\t\tq1 := 312304311494.1213172572469442 + (xsq * q1);\n\t\t\tq1 := 112775673967979.8507056031594 + (xsq * q1);\n\t\t\tq1 := 30246356167094626.98627330784 + (xsq * q1);\n\t\t\tq1 := 5428918384092285160.200195092 + (xsq * q1);\n\t\t\tq1 := 493378725179413356211.3278438 + (xsq * q1);\n\t\t\tp1 / q1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselJ1",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sign = _sign_1(_x);
    /* Statements */
    _x = _abs_1(_x);
    return _if_3(
      _greaterThanSign_2(_x, 8),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_besselAsympt1_1(_x), 2);
        let _p0 = _at_2(__SplVar2, 1);
        let _q0 = _at_2(__SplVar2, 2);
        let _nn = _hyphenMinus_2(_x, _solidus_2(_pi_1(3), 4));
        /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _sqrt_1(_solidus_2(_solidus_2(2, _pi_1(1)), _x)),
            _hyphenMinus_2(
              _asterisk_2(_p0, _cos_1(_nn)),
              _asterisk_2(_q0, _sin_1(_nn)),
            ),
          ),
          _sign,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _xsq = _asterisk_2(_x, _x);
        let _p1 = 2701.122710892323414856790990;
        let _q1 = 1.0;
        /* Statements */
        _p1 = _plusSign_2(
          -4695753.530642995859767162166,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          3413234182.301700539091292655,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -1322983480332.126453125473247,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          290879526383477.5409737601689,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -35888175699101060.50743641413,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          2316433580634002297.931815435,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(
          -66721065689249162980.20941484,
          _asterisk_2(_xsq, _p1),
        );
        _p1 = _plusSign_2(581199354001606143928.050809, _asterisk_2(_xsq, _p1));
        _q1 = _plusSign_2(
          1606.931573481487801970916749,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          1501793.594998585505921097578,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          1013863514.358673989967045588,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          524371026216.7649715406728642,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          208166122130760.7351240184229,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          60920613989175217.46105196863,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          11857707121903209998.37113348,
          _asterisk_2(_xsq, _q1),
        );
        _q1 = _plusSign_2(
          1162398708003212287858.529400,
          _asterisk_2(_xsq, _q1),
        );
        return _solidus_2(_asterisk_2(_x, _p1), _q1);
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet sign = x.sign;\n\t\tx := x.abs;\n\t\t(x > 8).if {\n\t\t\tlet [p0, q0] = besselAsympt1(x);\n\t\t\tlet nn = x - (3.pi / 4);\n\t\t\t(2 / 1.pi / x).sqrt * ((p0 * nn.cos) - (q0 * nn.sin)) * sign\n\t\t} {\n\t\t\tlet xsq = x * x;\n\t\t\tlet p1 = 2701.122710892323414856790990;\n\t\t\tlet q1 = 1.0;\n\t\t\tp1 := -4695753.530642995859767162166 + (xsq * p1);\n\t\t\tp1 := 3413234182.301700539091292655 + (xsq * p1);\n\t\t\tp1 := -1322983480332.126453125473247 + (xsq * p1);\n\t\t\tp1 := 290879526383477.5409737601689 + (xsq * p1);\n\t\t\tp1 := -35888175699101060.50743641413 + (xsq * p1);\n\t\t\tp1 := 2316433580634002297.931815435 + (xsq * p1);\n\t\t\tp1 := -66721065689249162980.20941484 + (xsq * p1);\n\t\t\tp1 := 581199354001606143928.050809 + (xsq * p1);\n\t\t\tq1 := 1606.931573481487801970916749 + (xsq * q1);\n\t\t\tq1 := 1501793.594998585505921097578 + (xsq * q1);\n\t\t\tq1 := 1013863514.358673989967045588 + (xsq * q1);\n\t\t\tq1 := 524371026216.7649715406728642 + (xsq * q1);\n\t\t\tq1 := 208166122130760.7351240184229 + (xsq * q1);\n\t\t\tq1 := 60920613989175217.46105196863 + (xsq * q1);\n\t\t\tq1 := 11857707121903209998.37113348 + (xsq * q1);\n\t\t\tq1 := 1162398708003212287858.529400 + (xsq * q1);\n\t\t\tx * p1 / q1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselY",
  ["n", "z"],
  sl.annotateFunction(function (_n, _z) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    const horner = function (arr, v) {
      let z = 0;
      for (let i = 0; i < arr.length; ++i) z = v * z + arr[i];
      return z;
    };
    const W = 0.636619772;
    const b0_a1a = [
      -2957821389.0,
      7062834065.0,
      -512359803.6,
      10879881.29,
      -86327.92757,
      228.4622733,
    ].reverse();
    const b0_a2a = [
      40076544269.0,
      745249964.8,
      7189466.438,
      47447.26470,
      226.1030244,
      1.0,
    ].reverse();
    const b0_a1b = [
      1.0,
      -0.1098628627e-2,
      0.2734510407e-4,
      -0.2073370639e-5,
      0.2093887211e-6,
    ].reverse();
    const b0_a2b = [
      -0.1562499995e-1,
      0.1430488765e-3,
      -0.6911147651e-5,
      0.7621095161e-6,
      -0.934945152e-7,
    ].reverse();
    const besselj = function (x, n) {
      return _besselJ_2(n, x);
    };
    const bessel0 = function (x) {
      let a = 0, a1 = 0, a2 = 0, y = x * x, xx = x - 0.785398164;
      if (x < 8) {
        a1 = horner(b0_a1a, y);
        a2 = horner(b0_a2a, y);
        a = a1 / a2 + W * besselj(x, 0) * Math.log(x);
      } else {
        y = 64 / y;
        a1 = horner(b0_a1b, y);
        a2 = horner(b0_a2b, y);
        a = Math.sqrt(W / x) * (Math.sin(xx) * a1 + Math.cos(xx) * a2 * 8 / x);
      }
      return a;
    };
    const b1_a1a = [
      -0.4900604943e13,
      0.1275274390e13,
      -0.5153438139e11,
      0.7349264551e9,
      -0.4237922726e7,
      0.8511937935e4,
    ].reverse();
    const b1_a2a = [
      0.2499580570e14,
      0.4244419664e12,
      0.3733650367e10,
      0.2245904002e8,
      0.1020426050e6,
      0.3549632885e3,
      1,
    ].reverse();
    const b1_a1b = [
      1.0,
      0.183105e-2,
      -0.3516396496e-4,
      0.2457520174e-5,
      -0.240337019e-6,
    ].reverse();
    const b1_a2b = [
      0.04687499995,
      -0.2002690873e-3,
      0.8449199096e-5,
      -0.88228987e-6,
      0.105787412e-6,
    ].reverse();
    const bessel1 = function (x) {
      let a = 0, a1 = 0, a2 = 0, y = x * x, xx = x - 2.356194491;
      if (x < 8) {
        a1 = x * horner(b1_a1a, y);
        a2 = horner(b1_a2a, y);
        a = a1 / a2 + W * (besselj(x, 1) * Math.log(x) - 1 / x);
      } else {
        y = 64 / y;
        a1 = horner(b1_a1b, y);
        a2 = horner(b1_a2b, y);
        a = Math.sqrt(W / x) * (Math.sin(xx) * a1 + Math.cos(xx) * a2 * 8 / x);
      }
      return a;
    };
    const bessel_iter = function (x, n, f0, f1, sign) {
      if (n === 0) return f0;
      if (n === 1) return f1;
      const tdx = 2 / x;
      let f2 = f1;
      for (let o = 1; o < n; ++o) {
        f2 = f1 * o * tdx + sign * f0;
        f0 = f1;
        f1 = f2;
      }
      return f2;
    };
    const bessel_wrap = function (bessel0, bessel1, _name, nonzero, sign) {
      return function bessel(x, n) {
        if (nonzero) {
          if (x === 0) return (nonzero == 1 ? -Infinity : Infinity);
          else if (x < 0) return NaN;
        }
        if (n === 0) return bessel0(x);
        if (n === 1) return bessel1(x);
        if (n < 0) return NaN;
        n |= 0;
        const b0 = bessel0(x), b1 = bessel1(x);
        return bessel_iter(x, n, b0, b1, sign);
      };
    };
    return bessel_wrap(bessel0, bessel1, "BESSELY", 1, -1)(_z, _n);
  }, ["n", "z"]),
  "{ :n :z |\n\t\t<primitive:\n\t\t/* https://git.sheetjs.com/SheetJS/bessel */\n\t\tconst horner = function(arr, v) { let z = 0; for(let i = 0; i < arr.length; ++i) z = v * z + arr[i]; return z; }\n\t\tconst W = 0.636619772;\n\t\tconst b0_a1a = [-2957821389.0, 7062834065.0, -512359803.6, 10879881.29, -86327.92757, 228.4622733].reverse();\n\t\tconst b0_a2a = [40076544269.0, 745249964.8, 7189466.438, 47447.26470, 226.1030244, 1.0].reverse();\n\t\tconst b0_a1b = [1.0, -0.1098628627e-2, 0.2734510407e-4, -0.2073370639e-5, 0.2093887211e-6].reverse();\n\t\tconst b0_a2b = [-0.1562499995e-1, 0.1430488765e-3, -0.6911147651e-5, 0.7621095161e-6, -0.934945152e-7].reverse();\n\t\tconst besselj = function(x, n) { return _besselJ_2(n, x); };\n\t\tconst bessel0 = function(x) {\n\t\t\tlet a=0, a1=0, a2=0, y = x * x, xx = x - 0.785398164;\n\t\t\tif(x < 8) {\n\t\t\t\ta1 = horner(b0_a1a, y);\n\t\t\t\ta2 = horner(b0_a2a, y);\n\t\t\t\ta = a1/a2 + W * besselj(x,0) * Math.log(x);\n\t\t\t} else {\n\t\t\t\ty = 64 / y;\n\t\t\t\ta1 = horner(b0_a1b, y);\n\t\t\t\ta2 = horner(b0_a2b, y);\n\t\t\t\ta = Math.sqrt(W/x)*(Math.sin(xx)*a1+Math.cos(xx)*a2*8/x);\n\t\t\t}\n\t\t\treturn a;\n\t\t}\n\t\tconst b1_a1a = [-0.4900604943e13, 0.1275274390e13, -0.5153438139e11, 0.7349264551e9, -0.4237922726e7, 0.8511937935e4].reverse();\n\t\tconst b1_a2a = [0.2499580570e14, 0.4244419664e12, 0.3733650367e10, 0.2245904002e8, 0.1020426050e6, 0.3549632885e3, 1].reverse();\n\t\tconst b1_a1b = [1.0, 0.183105e-2, -0.3516396496e-4, 0.2457520174e-5, -0.240337019e-6].reverse();\n\t\tconst b1_a2b = [0.04687499995, -0.2002690873e-3, 0.8449199096e-5, -0.88228987e-6, 0.105787412e-6].reverse();\n\t\tconst bessel1 = function(x) {\n\t\t\tlet a=0, a1=0, a2=0, y = x*x, xx = x - 2.356194491;\n\t\t\tif(x < 8) {\n\t\t\t\ta1 = x*horner(b1_a1a, y);\n\t\t\t\ta2 = horner(b1_a2a, y);\n\t\t\t\ta = a1/a2 + W * (besselj(x,1) * Math.log(x) - 1 / x);\n\t\t\t} else {\n\t\t\t\ty = 64 / y;\n\t\t\t\ta1=horner(b1_a1b, y);\n\t\t\t\ta2=horner(b1_a2b, y);\n\t\t\t\ta=Math.sqrt(W/x)*(Math.sin(xx)*a1+Math.cos(xx)*a2*8/x);\n\t\t\t}\n\t\t\treturn a;\n\t\t}\n\t\tconst bessel_iter = function(x, n, f0, f1, sign) {\n\t\t\tif(n === 0) return f0;\n\t\t\tif(n === 1) return f1;\n\t\t\tconst tdx = 2 / x;\n\t\t\tlet f2 = f1;\n\t\t\tfor(let o = 1; o < n; ++o) {\n\t\t\t\tf2 = f1 * o * tdx + sign * f0;\n\t\t\t\tf0 = f1; f1 = f2;\n\t\t\t}\n\t\t\treturn f2;\n\t\t}\n\t\tconst bessel_wrap = function(bessel0, bessel1, _name, nonzero, sign) {\n\t\t\treturn function bessel(x,n) {\n\t\t\t\tif(nonzero) {\n\t\t\t\t\tif(x === 0) return (nonzero == 1 ? -Infinity : Infinity);\n\t\t\t\t\telse if(x < 0) return NaN;\n\t\t\t\t}\n\t\t\t\tif(n === 0) return bessel0(x);\n\t\t\t\tif(n === 1) return bessel1(x);\n\t\t\t\tif(n < 0) return NaN;\n\t\t\t\tn|=0;\n\t\t\t\tconst b0 = bessel0(x), b1 = bessel1(x);\n\t\t\t\treturn bessel_iter(x, n, b0, b1, sign);\n\t\t\t};\n\t\t}\n\t\treturn bessel_wrap(bessel0, bessel1, 'BESSELY', 1, -1)(_z, _n);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselAsympt0",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xsq = _solidus_2(64, _asterisk_2(_x, _x));
    let _p2 = 0.0;
    let _q2 = 1.0;
    let _p3 = -0.0;
    let _q3 = 1.0;
    /* Statements */
    _p2 = _plusSign_2(2485.271928957404011288128951, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(153982.6532623911470917825993, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(2016135.283049983642487182349, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(8413041.456550439208464315611, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(12332384.76817638145232406055, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(5393485.083869438325262122897, _asterisk_2(_xsq, _p2));
    _q2 = _plusSign_2(2615.700736920839685159081813, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(156001.7276940030940592769933, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(2025066.801570134013891035236, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(8426449.050629797331554404810, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(12338310.22786324960844856182, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(5393485.083869438325560444960, _asterisk_2(_xsq, _q2));
    _p3 = _plusSign_2(-4.887199395841261531199129300, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(-226.2630641933704113967255053, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(-2365.956170779108192723612816, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(-8239.066313485606568803548860, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(-10381.41698748464093880530341, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(-3984.617357595222463506790588, _asterisk_2(_xsq, _p3));
    _q3 = _plusSign_2(408.7714673983499223402830260, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(15704.89191515395519392882766, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(156021.3206679291652539287109, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(533291.3634216897168722255057, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(666745.4239319826986004038103, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(255015.5108860942382983170882, _asterisk_2(_xsq, _q3));
    return [
      _solidus_2(_p2, _q2),
      _solidus_2(_solidus_2(_asterisk_2(8, _p3), _q3), _x),
    ];
  }, ["x"]),
  "{ :x |\n\t\tlet xsq = 64 / (x * x);\n\t\tlet p2 = 0.0;\n\t\tlet q2 = 1.0;\n\t\tlet p3 = -0.0;\n\t\tlet q3 = 1.0;\n\t\tp2 := 2485.271928957404011288128951 + (xsq * p2);\n\t\tp2 := 153982.6532623911470917825993 + (xsq * p2);\n\t\tp2 := 2016135.283049983642487182349 + (xsq * p2);\n\t\tp2 := 8413041.456550439208464315611 + (xsq * p2);\n\t\tp2 := 12332384.76817638145232406055 + (xsq * p2);\n\t\tp2 := 5393485.083869438325262122897 + (xsq * p2);\n\t\tq2 := 2615.700736920839685159081813 + (xsq * q2);\n\t\tq2 := 156001.7276940030940592769933 + (xsq * q2);\n\t\tq2 := 2025066.801570134013891035236 + (xsq * q2);\n\t\tq2 := 8426449.050629797331554404810 + (xsq * q2);\n\t\tq2 := 12338310.22786324960844856182 + (xsq * q2);\n\t\tq2 := 5393485.083869438325560444960 + (xsq * q2);\n\t\tp3 := -4.887199395841261531199129300 + (xsq * p3);\n\t\tp3 := -226.2630641933704113967255053 + (xsq * p3);\n\t\tp3 := -2365.956170779108192723612816 + (xsq * p3);\n\t\tp3 := -8239.066313485606568803548860 + (xsq * p3);\n\t\tp3 := -10381.41698748464093880530341 + (xsq * p3);\n\t\tp3 := -3984.617357595222463506790588 + (xsq * p3);\n\t\tq3 := 408.7714673983499223402830260 + (xsq * q3);\n\t\tq3 := 15704.89191515395519392882766 + (xsq * q3);\n\t\tq3 := 156021.3206679291652539287109 + (xsq * q3);\n\t\tq3 := 533291.3634216897168722255057 + (xsq * q3);\n\t\tq3 := 666745.4239319826986004038103 + (xsq * q3);\n\t\tq3 := 255015.5108860942382983170882 + (xsq * q3);\n\t\t[p2 / q2, 8 * p3 / q3 / x]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Bessel",
  "besselAsympt1",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xsq = _solidus_2(64.0, _asterisk_2(_x, _x));
    let _p2 = -1611.616644324610116477412898;
    let _q2 = 1.0;
    let _p3 = 35.26513384663603218592175580;
    let _q3 = 1.0;
    /* Statements */
    _p2 = _plusSign_2(-109824.0554345934672737413139, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(-1523529.351181137383255105722, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(-6603373.248364939109255245434, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(-9942246.505077641195658377899, _asterisk_2(_xsq, _p2));
    _p2 = _plusSign_2(-4435757.816794127857114720794, _asterisk_2(_xsq, _p2));
    _q2 = _plusSign_2(-1455.009440190496182453565068, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(-107263.8599110382011903063867, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(-1511809.506634160881644546358, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(-6585339.479723087072826915069, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(-9934124.389934585658967556309, _asterisk_2(_xsq, _q2));
    _q2 = _plusSign_2(-4435757.816794127856828016962, _asterisk_2(_xsq, _q2));
    _p3 = _plusSign_2(1706.375429020768002061283546, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(18494.26287322386679652009819, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(66178.83658127083517939992166, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(85145.16067533570196555001171, _asterisk_2(_xsq, _p3));
    _p3 = _plusSign_2(33220.91340985722351859704442, _asterisk_2(_xsq, _p3));
    _q3 = _plusSign_2(863.8367769604990967475517183, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(37890.22974577220264142952256, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(400294.4358226697511708610813, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(1419460.669603720892855755253, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(1819458.042243997298924553839, _asterisk_2(_xsq, _q3));
    _q3 = _plusSign_2(708712.8194102874357377502472, _asterisk_2(_xsq, _q3));
    return [
      _solidus_2(_p2, _q2),
      _solidus_2(_solidus_2(_asterisk_2(8, _p3), _q3), _x),
    ];
  }, ["x"]),
  "{ :x |\n\t\tlet xsq = 64.0 / (x * x);\n\t\tlet p2 = -1611.616644324610116477412898;\n\t\tlet q2 = 1.0;\n\t\tlet p3 = 35.26513384663603218592175580;\n\t\tlet q3 = 1.0;\n\t\tp2 := -109824.0554345934672737413139 + (xsq * p2);\n\t\tp2 := -1523529.351181137383255105722 + (xsq * p2);\n\t\tp2 := -6603373.248364939109255245434 + (xsq * p2);\n\t\tp2 := -9942246.505077641195658377899 + (xsq * p2);\n\t\tp2 := -4435757.816794127857114720794 + (xsq * p2);\n\t\tq2 := -1455.009440190496182453565068 + (xsq * q2);\n\t\tq2 := -107263.8599110382011903063867 + (xsq * q2);\n\t\tq2 := -1511809.506634160881644546358 + (xsq * q2);\n\t\tq2 := -6585339.479723087072826915069 + (xsq * q2);\n\t\tq2 := -9934124.389934585658967556309 + (xsq * q2);\n\t\tq2 := -4435757.816794127856828016962 + (xsq * q2);\n\t\tp3 := 1706.375429020768002061283546 + (xsq * p3);\n\t\tp3 := 18494.26287322386679652009819 + (xsq * p3);\n\t\tp3 := 66178.83658127083517939992166 + (xsq * p3);\n\t\tp3 := 85145.16067533570196555001171 + (xsq * p3);\n\t\tp3 := 33220.91340985722351859704442 + (xsq * p3);\n\t\tq3 := 863.8367769604990967475517183 + (xsq * q3);\n\t\tq3 := 37890.22974577220264142952256 + (xsq * q3);\n\t\tq3 := 400294.4358226697511708610813 + (xsq * q3);\n\t\tq3 := 1419460.669603720892855755253 + (xsq * q3);\n\t\tq3 := 1819458.042243997298924553839 + (xsq * q3);\n\t\tq3 := 708712.8194102874357377502472 + (xsq * q3);\n\t\t[p2 / q2, 8 * p3 / q3 / x]\n\t}",
);
