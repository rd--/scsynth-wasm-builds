sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erfAbramowitzStegun",
  ["x"],
  sl.annotateFunction(function (_x) {
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
        } /* Temporaries */
        let _p = 0.47047;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.3480242, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.0958798, _t), _t);
        let _a3 = _asterisk_2(_asterisk_2(_asterisk_2(0.7478556, _t), _t), _t);
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(_plusSign_2(_a1, _a2), _a3),
            _exp_1(_negate_1(_square_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_erf_1(_negate_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x >= 0).if {\n\t\t\tlet p = 0.47047;\n\t\t\tlet t = 1 / (1 + (p * x));\n\t\t\tlet a1 = 0.3480242 * t;\n\t\t\tlet a2 = -0.0958798 * t * t;\n\t\t\tlet a3 = 0.7478556 * t * t * t;\n\t\t\t1 - ((a1 + a2 + a3) * x.square.negate.exp)\n\t\t} {\n\t\t\tx.negate.erf.negate\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erf",
  ["x"],
  sl.annotateFunction(function (_x) {
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
        } /* Temporaries */
        let _p = 0.3275911;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.254829592, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.284496736, _t), _t);
        let _a3 = _asterisk_2(
          _asterisk_2(_asterisk_2(1.421413741, _t), _t),
          _t,
        );
        let _a4 = _asterisk_2(
          _asterisk_2(_asterisk_2(_asterisk_2(-1.453152027, _t), _t), _t),
          _t,
        );
        let _a5 = _asterisk_2(
          _asterisk_2(
            _asterisk_2(_asterisk_2(_asterisk_2(1.061405429, _t), _t), _t),
            _t,
          ),
          _t,
        );
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(
              _plusSign_2(_plusSign_2(_plusSign_2(_a1, _a2), _a3), _a4),
              _a5,
            ),
            _exp_1(_negate_1(_square_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_erf_1(_negate_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x >= 0).if {\n\t\t\tlet p = 0.3275911;\n\t\t\tlet t = 1 / (1 + (p * x));\n\t\t\tlet a1 = 0.254829592 * t;\n\t\t\tlet a2 = -0.284496736 * t * t;\n\t\t\tlet a3 = 1.421413741 * t * t * t;\n\t\t\tlet a4 = -1.453152027 * t * t * t * t;\n\t\t\tlet a5 = 1.061405429 * t * t * t * t * t;\n\t\t\t1 - ((a1 + a2 + a3 + a4 + a5) * x.square.negate.exp)\n\t\t} {\n\t\t\tx.negate.erf.negate\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erfc",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _erf_1(_x));
  }, ["x"]),
  "{ :x |\n\t\t1 - x.erf\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnel",
  ["x", "k", "n"],
  sl.annotateFunction(function (_x, _k, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _k, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    let x = _x;
    let n = _n;
    let f = (_k === "C") ? Math.cos : Math.sin;
    const pi = Math.PI;
    const dx = x / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const t = i * dx;
      const u = (i + 1) * dx;
      sum += (f(pi * (t ** 2) / 2) + f(pi * (u ** 2) / 2)) / 2 * dx;
    }
    return sum;
  }, ["x", "k", "n"]),
  "{ :x :k :n |\n\t\t<primitive:\n\t\tlet x = _x;\n\t\tlet n = _n;\n\t\tlet f = (_k === 'C') ? Math.cos : Math.sin;\n\t\tconst pi = Math.PI;\n\t\tconst dx = x / n;\n\t\tlet sum = 0;\n\t\tfor (let i = 0; i < n; i++) {\n\t\t\tconst t = i * dx;\n\t\t\tconst u = (i + 1) * dx;\n\t\t\tsum += (f(pi * (t ** 2) / 2) + f(pi * (u ** 2) / 2)) / 2 * dx;\n\t\t}\n\t\treturn sum;\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnelC",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _fresnel_3(_z, "C", 2000);
  }, ["z"]),
  "{ :z |\n\t\tfresnel(z, 'C', 2000)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnelS",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _fresnel_3(_z, "S", 2000);
  }, ["z"]),
  "{ :z |\n\t\tfresnel(z, 'S', 2000)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "lambertW",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _hyphenMinus_1(_exp_1(-1));
    /* Statements */
    return _if_3(
      _lessThanSign_2(_x, _z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "lambertW: undefined");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _max_2(4, _ceiling_1(_solidus_2(_log10_1(_x), 3)));
        let _w = _solidus_2(_asterisk_2(3, _log_1(_plusSign_2(_x, 1))), 4);
        /* Statements */
        _timesRepeat_2(
          _k,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _exp_1(_w);
            /* Statements */
            return _w = _hyphenMinus_2(
              _w,
              _solidus_2(
                _hyphenMinus_2(_asterisk_2(_w, _e), _x),
                _hyphenMinus_2(
                  _asterisk_2(_e, _plusSign_2(_w, 1)),
                  _solidus_2(
                    _asterisk_2(
                      _plusSign_2(_w, 2),
                      _hyphenMinus_2(_asterisk_2(_w, _e), _x),
                    ),
                    _plusSign_2(_asterisk_2(2, _w), 2),
                  ),
                ),
              ),
            );
          }, []),
        );
        return _w;
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet z = -1.exp.-;\n\t\t(x < z).if {\n\t\t\tx.error('lambertW: undefined')\n\t\t} {\n\t\t\tlet k = max(4, ceiling(log10(x) / 3));\n\t\t\tlet w = 3 * log(x + 1) / 4;\n\t\t\tk.timesRepeat {\n\t\t\t\tlet e = exp(w);\n\t\t\t\tw := w - (((w * e) - x) / ((e * (w + 1)) - (((w + 2) * ((w * e) - x)) / ((2 * w) + 2))))\n\t\t\t};\n\t\t\tw\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SpecialFunctions",
  "riemannXi",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.5;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _isSmallFloat_1(_z),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_z, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _riemannXi_1(_hyphenMinus_2(1, _z));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(0.5, _z), _hyphenMinus_2(_z, 1)),
                  _circumflexAccent_2(
                    _pi_1(1),
                    _asterisk_2(_hyphenMinus_2(0, _z), 0.5),
                  ),
                ),
                _zeta_1(_z),
              ),
              _gamma_1(_asterisk_2(0.5, _z)),
            );
          }, []),
        );
      }, []),
    );
  }, ["z"]),
  "{ :z |\n\t\tz.isZero.if {\n\t\t\t0.5\n\t\t} {\n\t\t\t(z.isSmallFloat & { z < 0 }).if {\n\t\t\t\triemannXi(1 - z)\n\t\t\t} {\n\t\t\t\t/* ((z - 1) * gamma((0.5 * z) + 1) * zeta(z)) / sqrt(1.pi ^ z) */\n\t\t\t\t0.5 * z * (z - 1) * (1.pi ^ ((0 - z) * 0.5)) * zeta(z) * gamma(0.5 * z)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SpecialFunctions",
  "zeta",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = 8;
    let _n = _round_1(
      _plusSign_2(
        _asterisk_2(1.3, _p),
        _asterisk_2(0.9, _abs_1(_imaginary_1(_s))),
      ),
    );
    let _e_1 = sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_2(
        _upOrDownTo_2(_k, _n),
        sl.annotateFunction(function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _binomial_2(_n, _j);
        }, ["j"]),
      );
    }, ["k"]);
    let _a = _solidus_2(
      1,
      _hyphenMinus_2(1, _circumflexAccent_2(2, _hyphenMinus_2(1, _s))),
    );
    let _b = _sum_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _circumflexAccent_2(-1, _hyphenMinus_2(_k, 1)),
          _circumflexAccent_2(_k, _s),
        );
      }, ["k"]),
    );
    let _c = _solidus_2(1, _circumflexAccent_2(2, _n));
    let _d = _sum_2(
      _upOrDownTo_2(_plusSign_2(_n, 1), _asterisk_2(2, _n)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _asterisk_2(
            _circumflexAccent_2(-1, _hyphenMinus_2(_k, 1)),
            _e_1(_hyphenMinus_2(_k, _n)),
          ),
          _circumflexAccent_2(_k, _s),
        );
      }, ["k"]),
    );
    /* Statements */
    return _asterisk_2(_a, _plusSign_2(_b, _asterisk_2(_c, _d)));
  }, ["s"]),
  "{ :s |\n\t\t/* http://numbers.computation.free.fr/Constants/Miscellaneous/zetaevaluations.pdf */\n\t\tlet p = 8;\n\t\tlet n = ((1.3 * p) + (0.9 * s.imaginary.abs)).round;\n\t\tlet e = { :k | (k .. n).sum { :j | binomial(n, j) } };\n\t\tlet a = 1 / (1 - (2 ^ (1 - s)));\n\t\tlet b = (1 .. n).sum { :k | (-1 ^ (k - 1)) / (k ^ s) };\n\t\tlet c = 1 / (2 ^ n);\n\t\tlet d = (n + 1 .. 2 * n).sum { :k | ((-1 ^ (k - 1)) * e(k - n)) / (k ^ s) };\n\t\ta * (b + (c * d))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "hypergeometric2F1",
  ["a", "b", "c", "z"],
  sl.annotateFunction(function (_a, _b, _c, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tolerance = 1E-10;
    let _iterationLimit = 1000;
    let _term = _solidus_2(_asterisk_2(_asterisk_2(_a, _b), _z), _c);
    let _value = _plusSign_2(1, _term);
    let _n = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_abs_1(_term), _tolerance),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_n, _iterationLimit);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _a = _plusSign_2(_a, 1);
        _b = _plusSign_2(_b, 1);
        _c = _plusSign_2(_c, 1);
        _n = _plusSign_2(_n, 1);
        _term = _asterisk_2(
          _term,
          _solidus_2(_solidus_2(_asterisk_2(_asterisk_2(_a, _b), _z), _c), _n),
        );
        return _value = _plusSign_2(_value, _term);
      }, []),
    );
    return _value;
  }, ["a", "b", "c", "z"]),
  "{ :a :b :c :z |\n\t\tlet tolerance = 1E-10;\n\t\tlet iterationLimit = 1000;\n\t\tlet term = a * b * z / c;\n\t\tlet value = 1 + term;\n\t\tlet n = 1;\n\t\t{\n\t\t\tterm.abs > tolerance & {\n\t\t\t\tn < iterationLimit\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\ta := a + 1;\n\t\t\tb := b + 1;\n\t\t\tc := c + 1;\n\t\t\tn := n + 1;\n\t\t\tterm := term * (a * b * z / c / n);\n\t\t\tvalue := value + term\n\t\t};\n\t\tvalue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "SpecialFunctions",
  "hypergeometric2F1",
  ["a", "b", "c", "z"],
  sl.annotateFunction(function (_a, _b, _c, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tolerance = 1E-10;
    let _iterationLimit = 1000;
    let _term = _solidus_2(_asterisk_2(_asterisk_2(_a, _b), _z), _c);
    let _value = _plusSign_2(1, _term);
    let _n = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_abs_1(_term), _tolerance),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_n, _iterationLimit);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _a = _plusSign_2(_a, 1);
        _b = _plusSign_2(_b, 1);
        _c = _plusSign_2(_c, 1);
        _n = _plusSign_2(_n, 1);
        _term = _asterisk_2(
          _term,
          _solidus_2(_solidus_2(_asterisk_2(_asterisk_2(_a, _b), _z), _c), _n),
        );
        return _value = _plusSign_2(_value, _term);
      }, []),
    );
    return _value;
  }, ["a", "b", "c", "z"]),
  "{ :a :b :c :z |\n\t\tlet tolerance = 1E-10;\n\t\tlet iterationLimit = 1000;\n\t\tlet term = a * b * z / c;\n\t\tlet value = 1 + term;\n\t\tlet n = 1;\n\t\t{\n\t\t\tterm.abs > tolerance & {\n\t\t\t\tn < iterationLimit\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\ta := a + 1;\n\t\t\tb := b + 1;\n\t\t\tc := c + 1;\n\t\t\tn := n + 1;\n\t\t\tterm := term * (a * b * z / c / n);\n\t\t\tvalue := value + term\n\t\t};\n\t\tvalue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "ellipticE",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_m, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_m, 1),
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
            return _error_2(_m, "ellipticE: invalid m");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = 0;
        let _limit = 50;
        let _kPrime = _sqrt_1(_hyphenMinus_2(1, _m));
        let _a0 = _one_1(_m);
        let _g0 = _kPrime;
        let _aN = _a0;
        let _gN = _g0;
        let _t = 0.25;
        let _partialSum = _hyphenMinus_2(1, _asterisk_2(0.5, _m));
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _not_1(_isVeryCloseTo_2(_aN, _gN)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_i, _limit);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _hyphenMinus_2(_aN, _gN);
            /* Statements */
            _partialSum = _hyphenMinus_2(
              _partialSum,
              _asterisk_2(_asterisk_2(_t, _d), _d),
            );
            _t = _asterisk_2(_t, 2);
            _a0 = _asterisk_2(0.5, _plusSign_2(_aN, _gN));
            _g0 = _sqrt_1(_asterisk_2(_aN, _gN));
            _aN = _a0;
            _gN = _g0;
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        _ifTrue_2(
          _equalsSign_2(_i, _limit),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _warning_2(_m, "ellipticE: did not converge");
          }, []),
        );
        return _solidus_2(_asterisk_2(_pi_1(0.5), _partialSum), _aN);
      }, []),
    );
  }, ["m"]),
  "{ :m |\n\t\t/* https://github.com/duetosymmetry/elliptic-integrals-js */\n\t\t(m >= 1).if {\n\t\t\t(m = 1).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tm.error('ellipticE: invalid m')\n\t\t\t}\n\t\t} {\n\t\t\tlet i = 0;\n\t\t\tlet limit = 50;\n\t\t\tlet kPrime = (1 - m).sqrt;\n\t\t\tlet a0 = m.one;\n\t\t\tlet g0 = kPrime;\n\t\t\tlet aN = a0;\n\t\t\tlet gN = g0;\n\t\t\tlet t = 0.25;\n\t\t\tlet partialSum = 1 - (0.5 * m);\n\t\t\t{ aN.isVeryCloseTo(gN).not & { i < limit } }.whileTrue {\n\t\t\t\tlet d = aN - gN;\n\t\t\t\tpartialSum := partialSum - (t * d * d);\n\t\t\t\tt := t * 2;\n\t\t\t\ta0 := 0.5 * (aN + gN);\n\t\t\t\tg0 := (aN * gN).sqrt;\n\t\t\t\taN := a0;\n\t\t\t\tgN := g0;\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\t(i = limit).ifTrue {\n\t\t\t\tm.warning('ellipticE: did not converge')\n\t\t\t};\n\t\t\t0.5.pi * partialSum / aN\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "ellipticE",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_m, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_m, 1),
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
            return _error_2(_m, "ellipticE: invalid m");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = 0;
        let _limit = 50;
        let _kPrime = _sqrt_1(_hyphenMinus_2(1, _m));
        let _a0 = _one_1(_m);
        let _g0 = _kPrime;
        let _aN = _a0;
        let _gN = _g0;
        let _t = 0.25;
        let _partialSum = _hyphenMinus_2(1, _asterisk_2(0.5, _m));
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _not_1(_isVeryCloseTo_2(_aN, _gN)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_i, _limit);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _hyphenMinus_2(_aN, _gN);
            /* Statements */
            _partialSum = _hyphenMinus_2(
              _partialSum,
              _asterisk_2(_asterisk_2(_t, _d), _d),
            );
            _t = _asterisk_2(_t, 2);
            _a0 = _asterisk_2(0.5, _plusSign_2(_aN, _gN));
            _g0 = _sqrt_1(_asterisk_2(_aN, _gN));
            _aN = _a0;
            _gN = _g0;
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        _ifTrue_2(
          _equalsSign_2(_i, _limit),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _warning_2(_m, "ellipticE: did not converge");
          }, []),
        );
        return _solidus_2(_asterisk_2(_pi_1(0.5), _partialSum), _aN);
      }, []),
    );
  }, ["m"]),
  "{ :m |\n\t\t/* https://github.com/duetosymmetry/elliptic-integrals-js */\n\t\t(m >= 1).if {\n\t\t\t(m = 1).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tm.error('ellipticE: invalid m')\n\t\t\t}\n\t\t} {\n\t\t\tlet i = 0;\n\t\t\tlet limit = 50;\n\t\t\tlet kPrime = (1 - m).sqrt;\n\t\t\tlet a0 = m.one;\n\t\t\tlet g0 = kPrime;\n\t\t\tlet aN = a0;\n\t\t\tlet gN = g0;\n\t\t\tlet t = 0.25;\n\t\t\tlet partialSum = 1 - (0.5 * m);\n\t\t\t{ aN.isVeryCloseTo(gN).not & { i < limit } }.whileTrue {\n\t\t\t\tlet d = aN - gN;\n\t\t\t\tpartialSum := partialSum - (t * d * d);\n\t\t\t\tt := t * 2;\n\t\t\t\ta0 := 0.5 * (aN + gN);\n\t\t\t\tg0 := (aN * gN).sqrt;\n\t\t\t\taN := a0;\n\t\t\t\tgN := g0;\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\t(i = limit).ifTrue {\n\t\t\t\tm.warning('ellipticE: did not converge')\n\t\t\t};\n\t\t\t0.5.pi * partialSum / aN\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "ellipticKFukushima",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Primitive */
    const m = _m;
    const D1 = 1.0 / 16.0, D2 = 1.0 / 32.0, D3 = 21.0 / 1024.0;
    const D4 = 31.0 / 2048.0, D5 = 6257.0 / 524288.0, D6 = 10293.0 / 1048576.0;
    const PIINV = 0.318309886;
    const mc = 1.0 - m;
    if (mc < 1.05e-8) {
      return 1.38629436 - 0.5 * Math.log(mc);
    }
    if (mc < 0.1) {
      const nome = mc *
        (D1 + mc * (D2 + mc * (D3 + mc * (D4 + mc * (D5 + mc * D6)))));
      const mx = mc - 0.05;
      const kkc = 1.59100345 +
        mx *
          (0.41600074 +
            mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));
      return -kkc * PIINV * Math.log(nome);
    }
    if (m <= 0.1) {
      const mx = m - 0.05;
      return 1.59100345 +
        mx *
          (0.41600074 +
            mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));
    }
    if (m <= 0.2) {
      const mx = m - 0.15;
      return 1.63525673 +
        mx *
          (0.47119063 +
            mx * (0.30972841 + mx * (0.25220831 + mx * 0.22672562)));
    }
    if (m <= 0.3) {
      const mx = m - 0.25;
      return 1.68575035 +
        mx *
          (0.54173185 +
            mx * (0.40152444 + mx * (0.36964247 + mx * 0.37606072)));
    }
    if (m <= 0.4) {
      const mx = m - 0.35;
      return 1.74435060 +
        mx *
          (0.63486428 +
            mx *
              (0.53984256 +
                mx * (0.57189271 + mx * (0.67029514 + mx * 0.83258659))));
    }
    if (m <= 0.5) {
      const mx = m - 0.45;
      return 1.81388394 +
        mx *
          (0.76316325 +
            mx *
              (0.76192861 +
                mx * (0.95107465 + mx * (1.31518067 + mx * 1.92856069))));
    }
    if (m <= 0.6) {
      const mx = m - 0.55;
      return 1.89892491 +
        mx *
          (0.95052179 +
            mx *
              (1.15107759 +
                mx * (1.75023911 + mx * (2.95267681 + mx * 5.28580040))));
    }
    if (m <= 0.7) {
      const mx = m - 0.65;
      return 2.00759840 +
        mx *
          (1.24845723 +
            mx *
              (1.92623466 +
                mx *
                  (3.75128964 +
                    mx * (8.11994455 + mx * (18.6657213 + mx * 44.6039248)))));
    }
    if (m <= 0.8) {
      const mx = m - 0.75;
      return 2.15651565 +
        mx *
          (1.79180564 +
            mx *
              (3.82675129 +
                mx *
                  (10.3867247 +
                    mx *
                      (31.4033141 +
                        mx *
                          (100.923704 +
                            mx * (337.326828 + mx * 1158.70793))))));
    }
    if (m <= 0.85) {
      const mx = m - 0.825;
      return 2.31812262 +
        mx *
          (2.61692015 +
            mx *
              (7.89793508 +
                mx *
                  (30.5023972 +
                    mx * (131.486937 + mx * (602.984764 + mx * 2877.02462)))));
    }
    const mx = m - 0.875;
    return 2.47359617 +
      mx *
        (3.72762424 +
          mx *
            (15.6073930 +
              mx *
                (84.1285084 +
                  mx *
                    (506.981820 +
                      mx *
                        (3252.27706 + mx * (21713.2424 + mx * 149037.045))))));
  }, ["m"]),
  "{ :m |\n\t\t/* https://observablehq.com/@dan-reznik/jacobi-elliptic-functions */\n\t\t<primitive:\n\t\tconst m = _m;\n\t\tconst D1 = 1.0 / 16.0, D2 = 1.0 / 32.0, D3 = 21.0 / 1024.0;\n\t\tconst D4 = 31.0 / 2048.0, D5 = 6257.0 / 524288.0, D6 = 10293.0 / 1048576.0;\n\t\tconst PIINV = 0.318309886;\n\t\tconst mc = 1.0 - m;\n\t\tif (mc < 1.05e-8) {\n\t\t\treturn 1.38629436 - 0.5 * Math.log(mc);\n\t\t}\n\t\tif (mc < 0.1) {\n\t\t\tconst nome = mc * (D1 + mc * (D2 + mc * (D3 + mc * (D4 + mc * (D5 + mc * D6)))))\n\t\t\tconst mx = mc - 0.05;\n\t\t\tconst kkc = 1.59100345 + mx * (0.41600074 + mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));\n\t\t\treturn -kkc * PIINV * Math.log(nome);\n\t\t}\n\t\tif (m <= 0.1) {\n\t\t\tconst mx = m - 0.05;\n\t\t\treturn 1.59100345 + mx * (0.41600074 + mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));\n\t\t}\n\t\tif (m <= 0.2) {\n\t\t\tconst mx = m - 0.15;\n\t\t\treturn 1.63525673 + mx * (0.47119063 + mx * (0.30972841 + mx * (0.25220831 + mx * 0.22672562)));\n\t\t}\n\t\tif (m <= 0.3) {\n\t\t\tconst mx = m - 0.25;\n\t\t\treturn 1.68575035 + mx * (0.54173185 + mx * (0.40152444 + mx * (0.36964247 + mx * 0.37606072)));\n\t\t}\n\t\tif (m <= 0.4) {\n\t\t\tconst mx = m - 0.35;\n\t\t\treturn 1.74435060 + mx * (0.63486428 + mx * (0.53984256 + mx * (0.57189271 + mx * (0.67029514 + mx * 0.83258659))));\n\t\t}\n\t\tif (m <= 0.5) {\n\t\t\tconst mx = m - 0.45;\n\t\t\treturn 1.81388394 + mx * (0.76316325 + mx * (0.76192861 + mx * (0.95107465 + mx * (1.31518067 + mx * 1.92856069))));\n\t\t}\n\t\tif (m <= 0.6) {\n\t\t\tconst mx = m - 0.55;\n\t\t\treturn 1.89892491 + mx * (0.95052179 + mx * (1.15107759 + mx * (1.75023911 + mx * (2.95267681 + mx * 5.28580040))));\n\t\t}\n\t\tif (m <= 0.7) {\n\t\t\tconst mx = m - 0.65;\n\t\t\treturn 2.00759840 + mx * (1.24845723 + mx * (1.92623466 + mx * (3.75128964 + mx * (8.11994455 + mx * (18.6657213 + mx * 44.6039248)))));\n\t\t}\n\t\tif (m <= 0.8) {\n\t\t\tconst mx = m - 0.75;\n\t\t\treturn 2.15651565 + mx * (1.79180564 + mx * (3.82675129 + mx * (10.3867247 + mx * (31.4033141 + mx * (100.923704 + mx * (337.326828 + mx * 1158.70793))))));\n\t\t}\n\t\tif (m <= 0.85) {\n\t\t\tconst mx = m - 0.825;\n\t\t\treturn 2.31812262 + mx * (2.61692015 + mx * (7.89793508 + mx * (30.5023972 + mx * (131.486937 + mx * (602.984764 + mx * 2877.02462)))));\n\t\t}\n\t\tconst mx = m - 0.875;\n\t\treturn 2.47359617 + mx * (3.72762424 + mx * (15.6073930 + mx * (84.1285084 + mx * (506.981820 + mx * (3252.27706 + mx * (21713.2424 + mx * 149037.045))))));\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "ellipticKFukushima",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Primitive */
    const m = _m;
    const D1 = 1.0 / 16.0, D2 = 1.0 / 32.0, D3 = 21.0 / 1024.0;
    const D4 = 31.0 / 2048.0, D5 = 6257.0 / 524288.0, D6 = 10293.0 / 1048576.0;
    const PIINV = 0.318309886;
    const mc = 1.0 - m;
    if (mc < 1.05e-8) {
      return 1.38629436 - 0.5 * Math.log(mc);
    }
    if (mc < 0.1) {
      const nome = mc *
        (D1 + mc * (D2 + mc * (D3 + mc * (D4 + mc * (D5 + mc * D6)))));
      const mx = mc - 0.05;
      const kkc = 1.59100345 +
        mx *
          (0.41600074 +
            mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));
      return -kkc * PIINV * Math.log(nome);
    }
    if (m <= 0.1) {
      const mx = m - 0.05;
      return 1.59100345 +
        mx *
          (0.41600074 +
            mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));
    }
    if (m <= 0.2) {
      const mx = m - 0.15;
      return 1.63525673 +
        mx *
          (0.47119063 +
            mx * (0.30972841 + mx * (0.25220831 + mx * 0.22672562)));
    }
    if (m <= 0.3) {
      const mx = m - 0.25;
      return 1.68575035 +
        mx *
          (0.54173185 +
            mx * (0.40152444 + mx * (0.36964247 + mx * 0.37606072)));
    }
    if (m <= 0.4) {
      const mx = m - 0.35;
      return 1.74435060 +
        mx *
          (0.63486428 +
            mx *
              (0.53984256 +
                mx * (0.57189271 + mx * (0.67029514 + mx * 0.83258659))));
    }
    if (m <= 0.5) {
      const mx = m - 0.45;
      return 1.81388394 +
        mx *
          (0.76316325 +
            mx *
              (0.76192861 +
                mx * (0.95107465 + mx * (1.31518067 + mx * 1.92856069))));
    }
    if (m <= 0.6) {
      const mx = m - 0.55;
      return 1.89892491 +
        mx *
          (0.95052179 +
            mx *
              (1.15107759 +
                mx * (1.75023911 + mx * (2.95267681 + mx * 5.28580040))));
    }
    if (m <= 0.7) {
      const mx = m - 0.65;
      return 2.00759840 +
        mx *
          (1.24845723 +
            mx *
              (1.92623466 +
                mx *
                  (3.75128964 +
                    mx * (8.11994455 + mx * (18.6657213 + mx * 44.6039248)))));
    }
    if (m <= 0.8) {
      const mx = m - 0.75;
      return 2.15651565 +
        mx *
          (1.79180564 +
            mx *
              (3.82675129 +
                mx *
                  (10.3867247 +
                    mx *
                      (31.4033141 +
                        mx *
                          (100.923704 +
                            mx * (337.326828 + mx * 1158.70793))))));
    }
    if (m <= 0.85) {
      const mx = m - 0.825;
      return 2.31812262 +
        mx *
          (2.61692015 +
            mx *
              (7.89793508 +
                mx *
                  (30.5023972 +
                    mx * (131.486937 + mx * (602.984764 + mx * 2877.02462)))));
    }
    const mx = m - 0.875;
    return 2.47359617 +
      mx *
        (3.72762424 +
          mx *
            (15.6073930 +
              mx *
                (84.1285084 +
                  mx *
                    (506.981820 +
                      mx *
                        (3252.27706 + mx * (21713.2424 + mx * 149037.045))))));
  }, ["m"]),
  "{ :m |\n\t\t/* https://observablehq.com/@dan-reznik/jacobi-elliptic-functions */\n\t\t<primitive:\n\t\tconst m = _m;\n\t\tconst D1 = 1.0 / 16.0, D2 = 1.0 / 32.0, D3 = 21.0 / 1024.0;\n\t\tconst D4 = 31.0 / 2048.0, D5 = 6257.0 / 524288.0, D6 = 10293.0 / 1048576.0;\n\t\tconst PIINV = 0.318309886;\n\t\tconst mc = 1.0 - m;\n\t\tif (mc < 1.05e-8) {\n\t\t\treturn 1.38629436 - 0.5 * Math.log(mc);\n\t\t}\n\t\tif (mc < 0.1) {\n\t\t\tconst nome = mc * (D1 + mc * (D2 + mc * (D3 + mc * (D4 + mc * (D5 + mc * D6)))))\n\t\t\tconst mx = mc - 0.05;\n\t\t\tconst kkc = 1.59100345 + mx * (0.41600074 + mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));\n\t\t\treturn -kkc * PIINV * Math.log(nome);\n\t\t}\n\t\tif (m <= 0.1) {\n\t\t\tconst mx = m - 0.05;\n\t\t\treturn 1.59100345 + mx * (0.41600074 + mx * (0.24579151 + mx * (0.17948148 + mx * 0.14455606)));\n\t\t}\n\t\tif (m <= 0.2) {\n\t\t\tconst mx = m - 0.15;\n\t\t\treturn 1.63525673 + mx * (0.47119063 + mx * (0.30972841 + mx * (0.25220831 + mx * 0.22672562)));\n\t\t}\n\t\tif (m <= 0.3) {\n\t\t\tconst mx = m - 0.25;\n\t\t\treturn 1.68575035 + mx * (0.54173185 + mx * (0.40152444 + mx * (0.36964247 + mx * 0.37606072)));\n\t\t}\n\t\tif (m <= 0.4) {\n\t\t\tconst mx = m - 0.35;\n\t\t\treturn 1.74435060 + mx * (0.63486428 + mx * (0.53984256 + mx * (0.57189271 + mx * (0.67029514 + mx * 0.83258659))));\n\t\t}\n\t\tif (m <= 0.5) {\n\t\t\tconst mx = m - 0.45;\n\t\t\treturn 1.81388394 + mx * (0.76316325 + mx * (0.76192861 + mx * (0.95107465 + mx * (1.31518067 + mx * 1.92856069))));\n\t\t}\n\t\tif (m <= 0.6) {\n\t\t\tconst mx = m - 0.55;\n\t\t\treturn 1.89892491 + mx * (0.95052179 + mx * (1.15107759 + mx * (1.75023911 + mx * (2.95267681 + mx * 5.28580040))));\n\t\t}\n\t\tif (m <= 0.7) {\n\t\t\tconst mx = m - 0.65;\n\t\t\treturn 2.00759840 + mx * (1.24845723 + mx * (1.92623466 + mx * (3.75128964 + mx * (8.11994455 + mx * (18.6657213 + mx * 44.6039248)))));\n\t\t}\n\t\tif (m <= 0.8) {\n\t\t\tconst mx = m - 0.75;\n\t\t\treturn 2.15651565 + mx * (1.79180564 + mx * (3.82675129 + mx * (10.3867247 + mx * (31.4033141 + mx * (100.923704 + mx * (337.326828 + mx * 1158.70793))))));\n\t\t}\n\t\tif (m <= 0.85) {\n\t\t\tconst mx = m - 0.825;\n\t\t\treturn 2.31812262 + mx * (2.61692015 + mx * (7.89793508 + mx * (30.5023972 + mx * (131.486937 + mx * (602.984764 + mx * 2877.02462)))));\n\t\t}\n\t\tconst mx = m - 0.875;\n\t\treturn 2.47359617 + mx * (3.72762424 + mx * (15.6073930 + mx * (84.1285084 + mx * (506.981820 + mx * (3252.27706 + mx * (21713.2424 + mx * 149037.045))))));\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "ellipticK",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _pi_1(1),
      _asterisk_2(
        2,
        _arithmeticGeometricMean_2(1, _sqrt_1(_hyphenMinus_2(1, _m))),
      ),
    );
  }, ["m"]),
  "{ :m |\n\t\t1.pi / (2 * arithmeticGeometricMean(1, (1 - m).sqrt))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "ellipticK",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _pi_1(1),
      _asterisk_2(
        2,
        _arithmeticGeometricMean_2(1, _sqrt_1(_hyphenMinus_2(1, _m))),
      ),
    );
  }, ["m"]),
  "{ :m |\n\t\t1.pi / (2 * arithmeticGeometricMean(1, (1 - m).sqrt))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "ellipticPi",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = 0;
    let _limit = 50;
    let _kPrime = _sqrt_1(_hyphenMinus_2(1, _m));
    let _a0 = 1;
    let _g0 = _kPrime;
    let _zeta0 = 0;
    let _aN = _a0;
    let _gN = _g0;
    let _deltaN = _solidus_2(_hyphenMinus_2(1, _n), _kPrime);
    let _epsilon = _solidus_2(_n, _hyphenMinus_2(1, _n));
    let _zetaN = _zeta0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _verticalLine_2(
            _not_1(_isVeryCloseTo_2(_aN, _gN)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _not_1(_isVeryCloseTo_2(_deltaN, 1));
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_i, _limit);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _zeta0 = _asterisk_2(0.5, _plusSign_2(_epsilon, _zetaN));
        _epsilon = _solidus_2(
          _plusSign_2(_asterisk_2(_deltaN, _epsilon), _zetaN),
          _plusSign_2(1, _deltaN),
        );
        _zetaN = _zeta0;
        _a0 = _asterisk_2(0.5, _plusSign_2(_aN, _gN));
        _g0 = _sqrt_1(_asterisk_2(_aN, _gN));
        _aN = _a0;
        _gN = _g0;
        _deltaN = _asterisk_2(
          _solidus_2(_asterisk_2(0.25, _gN), _aN),
          _plusSign_2(_plusSign_2(2, _deltaN), _solidus_2(1, _deltaN)),
        );
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_i, _limit),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _warning_2(
          [_n, _m],
          _DoubleQuotedString_1("ellipticPi: did not converge"),
        );
      }, []),
    );
    return _asterisk_2(_solidus_2(_pi_1(0.5), _aN), _plusSign_2(1, _zetaN));
  }, ["n", "m"]),
  '{ :n :m |\n\t\t/* https://github.com/duetosymmetry/elliptic-integrals-js */\n\t\tlet i = 0;\n\t\tlet limit = 50;\n\t\tlet kPrime = sqrt(1 - m);\n\t\tlet a0 = 1;\n\t\tlet g0 = kPrime;\n\t\tlet zeta0 = 0;\n\t\tlet aN = a0;\n\t\tlet gN = g0;\n\t\tlet deltaN = (1 - n) / kPrime;\n\t\tlet epsilon = n / (1 - n);\n\t\tlet zetaN = zeta0;\n\t\t{ aN.isVeryCloseTo(gN).not | { deltaN.isVeryCloseTo(1).not } & { i < limit } }.whileTrue {\n\t\t\tzeta0 := 0.5 * (epsilon + zetaN);\n\t\t\tepsilon := (deltaN * epsilon + zetaN) / (1 + deltaN);\n\t\t\tzetaN := zeta0;\n\t\t\ta0 := 0.5 * (aN + gN);\n\t\t\tg0 := sqrt(aN *gN);\n\t\t\taN := a0;\n\t\t\tgN := g0;\n\t\t\tdeltaN := 0.25 * gN / aN * (2 + deltaN + (1 / deltaN));\n\t\t\ti := i + 1\n\t\t};\n\t\t(i = limit).ifTrue {\n\t\t\t[n, m].warning("ellipticPi: did not converge")\n\t\t};\n\t\t0.5.pi / aN * (1 + zetaN)\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "ellipticPi",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = 0;
    let _limit = 50;
    let _kPrime = _sqrt_1(_hyphenMinus_2(1, _m));
    let _a0 = 1;
    let _g0 = _kPrime;
    let _zeta0 = 0;
    let _aN = _a0;
    let _gN = _g0;
    let _deltaN = _solidus_2(_hyphenMinus_2(1, _n), _kPrime);
    let _epsilon = _solidus_2(_n, _hyphenMinus_2(1, _n));
    let _zetaN = _zeta0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _verticalLine_2(
            _not_1(_isVeryCloseTo_2(_aN, _gN)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _not_1(_isVeryCloseTo_2(_deltaN, 1));
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_i, _limit);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _zeta0 = _asterisk_2(0.5, _plusSign_2(_epsilon, _zetaN));
        _epsilon = _solidus_2(
          _plusSign_2(_asterisk_2(_deltaN, _epsilon), _zetaN),
          _plusSign_2(1, _deltaN),
        );
        _zetaN = _zeta0;
        _a0 = _asterisk_2(0.5, _plusSign_2(_aN, _gN));
        _g0 = _sqrt_1(_asterisk_2(_aN, _gN));
        _aN = _a0;
        _gN = _g0;
        _deltaN = _asterisk_2(
          _solidus_2(_asterisk_2(0.25, _gN), _aN),
          _plusSign_2(_plusSign_2(2, _deltaN), _solidus_2(1, _deltaN)),
        );
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_i, _limit),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _warning_2(
          [_n, _m],
          _DoubleQuotedString_1("ellipticPi: did not converge"),
        );
      }, []),
    );
    return _asterisk_2(_solidus_2(_pi_1(0.5), _aN), _plusSign_2(1, _zetaN));
  }, ["n", "m"]),
  '{ :n :m |\n\t\t/* https://github.com/duetosymmetry/elliptic-integrals-js */\n\t\tlet i = 0;\n\t\tlet limit = 50;\n\t\tlet kPrime = sqrt(1 - m);\n\t\tlet a0 = 1;\n\t\tlet g0 = kPrime;\n\t\tlet zeta0 = 0;\n\t\tlet aN = a0;\n\t\tlet gN = g0;\n\t\tlet deltaN = (1 - n) / kPrime;\n\t\tlet epsilon = n / (1 - n);\n\t\tlet zetaN = zeta0;\n\t\t{ aN.isVeryCloseTo(gN).not | { deltaN.isVeryCloseTo(1).not } & { i < limit } }.whileTrue {\n\t\t\tzeta0 := 0.5 * (epsilon + zetaN);\n\t\t\tepsilon := (deltaN * epsilon + zetaN) / (1 + deltaN);\n\t\t\tzetaN := zeta0;\n\t\t\ta0 := 0.5 * (aN + gN);\n\t\t\tg0 := sqrt(aN *gN);\n\t\t\taN := a0;\n\t\t\tgN := g0;\n\t\t\tdeltaN := 0.25 * gN / aN * (2 + deltaN + (1 / deltaN));\n\t\t\ti := i + 1\n\t\t};\n\t\t(i = limit).ifTrue {\n\t\t\t[n, m].warning("ellipticPi: did not converge")\n\t\t};\n\t\t0.5.pi / aN * (1 + zetaN)\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "jacobianEllipticFunctions",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Primitive */
    const u = _u;
    const m = _m;
    const mc = 1.0 - m,
      uA = 1.76269 + mc * 1.16357,
      uT = 9.207e-4 - m * 4.604e-4;
    let u0 = u;
    let broke = false;
    let n;
    for (n = 0; n <= 20; n++) {
      if (u0 < uT) {
        broke = true;
        break;
      }
      u0 = u0 * 0.5;
    }
    if (!broke) {
      console.log("jacobianEllipticFunctions: too large input argument: u=", u);
    }
    const v = u0 * u0;
    let a = 1.0, b = v * 0.5, y, z, my, goto2 = false, j;
    if (u < uA) {
      for (j = 1; j <= n; j++) {
        y = b * (a * 2.0 - b);
        z = a * a;
        my = m * y;
        b = (y * 2.0) * (z - my);
        a = z * z - my * y;
      }
    } else {
      for (j = 1; j <= n; j++) {
        y = b * (a * 2.0 - b);
        z = a * a;
        my = m * y;
        if (z < my * 2.0) {
          goto2 = true;
          break;
        }
        b = (y * 2.0) * (z - my);
        a = z * z - my * y;
      }
    }
    if (!goto2) {
      b = b / a;
      y = b * (2.0 - b);
      return {
        u: u,
        m: m,
        sn: Math.sqrt(y),
        cn: 1.0 - b,
        dn: Math.sqrt(1.0 - m * y),
      };
    }
    let c = a - b, mc2 = mc * 2.0, m2 = m * 2.0;
    for (let i = j; i <= n; i++) {
      let x = c * c;
      z = a * a;
      let w = m * x * x - mc * z * z;
      let xz = x * z;
      c = mc2 * xz + w;
      a = m2 * xz - w;
    }
    c = c / a;
    let x = c * c;
    return {
      u: u,
      m: m,
      sn: Math.sqrt(1.0 - x),
      cn: c,
      dn: Math.sqrt(mc + m * x),
    };
  }, ["u", "m"]),
  '{ :u :m |\n\t\t/* https://observablehq.com/@dan-reznik/jacobi-elliptic-functions */\n\t\t<primitive:\n\t\tconst u = _u;\n\t\tconst m = _m;\n\t\tconst mc = 1.0 - m, uA = 1.76269 + mc * 1.16357, uT = 9.207e-4 - m * 4.604e-4;\n\t\tlet u0 = u;\n\t\tlet broke = false;\n\t\tlet n;\n\t\tfor (n = 0; n <= 20; n++) {\n\t\t\tif (u0 < uT) {\n\t\t\t\tbroke = true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tu0 = u0 * 0.5;\n\t\t}\n\t\tif (!broke) {\n\t\t\tconsole.log("jacobianEllipticFunctions: too large input argument: u=", u)\n\t\t};\n\t\tconst v = u0 * u0;\n\t\tlet a = 1.0, b = v * 0.5, y, z, my, goto2 = false, j;\n\t\tif (u < uA) {\n\t\t\tfor (j = 1; j <= n; j++) {\n\t\t\t\ty = b * (a * 2.0 - b);\n\t\t\t\tz = a * a;\n\t\t\t\tmy = m * y;\n\t\t\t\tb = (y * 2.0) * (z - my);\n\t\t\t\ta = z * z - my * y;\n\t\t\t}\n\t\t} else {\n\t\t\tfor (j = 1; j <= n; j++) {\n\t\t\t\ty = b * (a * 2.0 - b);\n\t\t\t\tz = a * a;\n\t\t\t\tmy = m * y;\n\t\t\t\tif (z < my * 2.0) {\n\t\t\t\t\tgoto2 = true;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\tb = (y * 2.0) * (z - my);\n\t\t\t\ta = z * z - my * y\n\t\t\t}\n\t\t}\n\t\tif (!goto2) {\n\t\t\tb = b / a; y = b * (2.0 - b);\n\t\t\treturn { u: u, m: m, sn: Math.sqrt(y), cn: 1.0 - b, dn: Math.sqrt(1.0 - m * y) };\n\t\t}\n\t\tlet c = a - b, mc2 = mc * 2.0, m2 = m * 2.0;\n\t\tfor (let i = j; i <= n; i++) {\n\t\t\tlet x = c * c;\n\t\t\tz = a * a;\n\t\t\tlet w = m * x * x - mc * z * z;\n\t\t\tlet xz = x * z;\n\t\t\tc = mc2 * xz + w;\n\t\t\ta = m2 * xz - w;\n\t\t}\n\t\tc = c / a;\n\t\tlet x = c * c;\n\t\treturn { u: u, m: m, sn: Math.sqrt(1.0 - x), cn: c, dn: Math.sqrt(mc + m * x) };\n\t\t>\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "jacobianEllipticFunctions",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Primitive */
    const u = _u;
    const m = _m;
    const mc = 1.0 - m,
      uA = 1.76269 + mc * 1.16357,
      uT = 9.207e-4 - m * 4.604e-4;
    let u0 = u;
    let broke = false;
    let n;
    for (n = 0; n <= 20; n++) {
      if (u0 < uT) {
        broke = true;
        break;
      }
      u0 = u0 * 0.5;
    }
    if (!broke) {
      console.log("jacobianEllipticFunctions: too large input argument: u=", u);
    }
    const v = u0 * u0;
    let a = 1.0, b = v * 0.5, y, z, my, goto2 = false, j;
    if (u < uA) {
      for (j = 1; j <= n; j++) {
        y = b * (a * 2.0 - b);
        z = a * a;
        my = m * y;
        b = (y * 2.0) * (z - my);
        a = z * z - my * y;
      }
    } else {
      for (j = 1; j <= n; j++) {
        y = b * (a * 2.0 - b);
        z = a * a;
        my = m * y;
        if (z < my * 2.0) {
          goto2 = true;
          break;
        }
        b = (y * 2.0) * (z - my);
        a = z * z - my * y;
      }
    }
    if (!goto2) {
      b = b / a;
      y = b * (2.0 - b);
      return {
        u: u,
        m: m,
        sn: Math.sqrt(y),
        cn: 1.0 - b,
        dn: Math.sqrt(1.0 - m * y),
      };
    }
    let c = a - b, mc2 = mc * 2.0, m2 = m * 2.0;
    for (let i = j; i <= n; i++) {
      let x = c * c;
      z = a * a;
      let w = m * x * x - mc * z * z;
      let xz = x * z;
      c = mc2 * xz + w;
      a = m2 * xz - w;
    }
    c = c / a;
    let x = c * c;
    return {
      u: u,
      m: m,
      sn: Math.sqrt(1.0 - x),
      cn: c,
      dn: Math.sqrt(mc + m * x),
    };
  }, ["u", "m"]),
  '{ :u :m |\n\t\t/* https://observablehq.com/@dan-reznik/jacobi-elliptic-functions */\n\t\t<primitive:\n\t\tconst u = _u;\n\t\tconst m = _m;\n\t\tconst mc = 1.0 - m, uA = 1.76269 + mc * 1.16357, uT = 9.207e-4 - m * 4.604e-4;\n\t\tlet u0 = u;\n\t\tlet broke = false;\n\t\tlet n;\n\t\tfor (n = 0; n <= 20; n++) {\n\t\t\tif (u0 < uT) {\n\t\t\t\tbroke = true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tu0 = u0 * 0.5;\n\t\t}\n\t\tif (!broke) {\n\t\t\tconsole.log("jacobianEllipticFunctions: too large input argument: u=", u)\n\t\t};\n\t\tconst v = u0 * u0;\n\t\tlet a = 1.0, b = v * 0.5, y, z, my, goto2 = false, j;\n\t\tif (u < uA) {\n\t\t\tfor (j = 1; j <= n; j++) {\n\t\t\t\ty = b * (a * 2.0 - b);\n\t\t\t\tz = a * a;\n\t\t\t\tmy = m * y;\n\t\t\t\tb = (y * 2.0) * (z - my);\n\t\t\t\ta = z * z - my * y;\n\t\t\t}\n\t\t} else {\n\t\t\tfor (j = 1; j <= n; j++) {\n\t\t\t\ty = b * (a * 2.0 - b);\n\t\t\t\tz = a * a;\n\t\t\t\tmy = m * y;\n\t\t\t\tif (z < my * 2.0) {\n\t\t\t\t\tgoto2 = true;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\tb = (y * 2.0) * (z - my);\n\t\t\t\ta = z * z - my * y\n\t\t\t}\n\t\t}\n\t\tif (!goto2) {\n\t\t\tb = b / a; y = b * (2.0 - b);\n\t\t\treturn { u: u, m: m, sn: Math.sqrt(y), cn: 1.0 - b, dn: Math.sqrt(1.0 - m * y) };\n\t\t}\n\t\tlet c = a - b, mc2 = mc * 2.0, m2 = m * 2.0;\n\t\tfor (let i = j; i <= n; i++) {\n\t\t\tlet x = c * c;\n\t\t\tz = a * a;\n\t\t\tlet w = m * x * x - mc * z * z;\n\t\t\tlet xz = x * z;\n\t\t\tc = mc2 * xz + w;\n\t\t\ta = m2 * xz - w;\n\t\t}\n\t\tc = c / a;\n\t\tlet x = c * c;\n\t\treturn { u: u, m: m, sn: Math.sqrt(1.0 - x), cn: c, dn: Math.sqrt(mc + m * x) };\n\t\t>\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "jacobiCn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _cn = _at_2(_r, "cn");
    /* Statements */
    return _cn;
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet cn = r['cn'];\n\t\tcn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "jacobiCn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _cn = _at_2(_r, "cn");
    /* Statements */
    return _cn;
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet cn = r['cn'];\n\t\tcn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "jacobiDn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _dn = _at_2(_r, "dn");
    /* Statements */
    return _dn;
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet dn = r['dn'];\n\t\tdn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "jacobiDn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _dn = _at_2(_r, "dn");
    /* Statements */
    return _dn;
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet dn = r['dn'];\n\t\tdn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "jacobiSn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _modulo_2 = sl.annotateFunction(function (_v, _d) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _v, _d";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_v, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2(_v, _d);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(_d, _percentSign_2(_negate_1(_v), _d));
        }, []),
      );
    }, ["v", "d"]);
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _sn = _at_2(_r, "sn");
    let _k = _ellipticKFukushima_1(_m);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_modulo_2(_solidus_2(_u, _k), 4), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_sn, -1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sn;
      }, []),
    );
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet modulo = { :v :d | (v > 0).if { v % d } { d - (-v % d) } };\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet sn = r['sn'];\n\t\tlet k = m.ellipticKFukushima;\n\t\t(modulo(u / k, 4) > 2).if {\n\t\t\tsn * -1\n\t\t} {\n\t\t\tsn\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "jacobiSn",
  ["u", "m"],
  sl.annotateFunction(function (_u, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _modulo_2 = sl.annotateFunction(function (_v, _d) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _v, _d";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_v, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2(_v, _d);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(_d, _percentSign_2(_negate_1(_v), _d));
        }, []),
      );
    }, ["v", "d"]);
    let _r = _jacobianEllipticFunctions_2(_u, _m);
    let _sn = _at_2(_r, "sn");
    let _k = _ellipticKFukushima_1(_m);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_modulo_2(_solidus_2(_u, _k), 4), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_sn, -1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sn;
      }, []),
    );
  }, ["u", "m"]),
  "{ :u :m |\n\t\tlet modulo = { :v :d | (v > 0).if { v % d } { d - (-v % d) } };\n\t\tlet r = jacobianEllipticFunctions(u, m);\n\t\tlet sn = r['sn'];\n\t\tlet k = m.ellipticKFukushima;\n\t\t(modulo(u / k, 4) > 2).if {\n\t\t\tsn * -1\n\t\t} {\n\t\t\tsn\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "SpecialFunctions",
  "fabiusFunction",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dyadicRationals_2 = sl.annotateFunction(function (_x, _n) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _circumflexAccent_2(2, _n);
      /* Statements */
      return _collect_2(
        _asList_1(_upOrDownTo_2(0, _asterisk_2(_x, _m))),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _reverseSolidus_2(_k, _m);
        }, ["k"]),
      );
    }, ["x", "n"]);
    /* Statements */
    return _asterisk_2(
      _solidus_2(
        _circumflexAccent_2(
          2,
          _solidus_2(_asterisk_2(_n, _plusSign_2(_n, 1)), 2),
        ),
        _factorial_1(_n),
      ),
      _sum_2(
        _dyadicRationals_2(_x, _n),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _circumflexAccent_2(
              -1,
              _digitSum_2(
                _asLargeInteger_1(_asterisk_2(_k, _circumflexAccent_2(2, _n))),
                2,
              ),
            ),
            _circumflexAccent_2(_hyphenMinus_2(_x, _k), _n),
          );
        }, ["k"]),
      ),
    );
  }, ["x", "n"]),
  "{ :x :n |\n\t\tlet dyadicRationals = { :x :n |\n\t\t\tlet m = 2 ^ n;\n\t\t\t[0 .. x * m].collect { :k |\n\t\t\t\tk \\ m\n\t\t\t}\n\t\t};\n\t\t(2 ^ (n * (n + 1) / 2))\n\t\t/\n\t\tn.factorial\n\t\t*\n\t\tdyadicRationals(x, n).sum { :k |\n\t\t\t(-1 ^ digitSum((k * (2 ^ n)).asLargeInteger, 2)) * ((x - k) ^ n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fabiusFunction",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _fabiusFunction_2(_asFraction_1(_x), _n);
  }, ["x", "n"]),
  "{ :x :n |\n\t\tx.asFraction.fabiusFunction(n)\n\t}",
);
