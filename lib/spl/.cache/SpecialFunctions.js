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
