sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "ampersandCurve",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _solidus_2(
      _asterisk_2(
        _solidus_2(1, 4),
        _plusSign_2(
          _plusSign_2(
            _asterisk_2(10, _circumflexAccent_2(_cos_1(_t), 3)),
            _asterisk_2(11, _cos_1(_t)),
          ),
          _circumflexAccent_2(
            _asterisk_2(
              _asterisk_2(
                -3,
                _hyphenMinus_2(
                  _asterisk_2(21, _circumflexAccent_2(_cos_1(_t), 2)),
                  16,
                ),
              ),
              _circumflexAccent_2(
                _hyphenMinus_2(
                  _asterisk_2(2, _circumflexAccent_2(_cos_1(_t), 2)),
                  1,
                ),
                2,
              ),
            ),
            _solidus_2(1, 2),
          ),
        ),
      ),
      _plusSign_2(
        _hyphenMinus_2(
          _asterisk_2(2, _circumflexAccent_2(_cos_1(_t), 4)),
          _circumflexAccent_2(_cos_1(_t), 2),
        ),
        2,
      ),
    );
    /* Statements */
    return _if_3(
      _isComplex_1(_r),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromPolarCoordinates_1([_r, _t]);
      }, []),
    );
  }, ["t"]),
  "{ :t |\n\t\tlet r =\n\t\t(1 / 4)\n\t\t*\n\t\t(\n\t\t\t(10 * (cos(t) ^ 3))\n\t\t\t+\n\t\t\t(11 * cos(t))\n\t\t\t+\n\t\t\t((-3 * ((21 * (cos(t) ^ 2)) - 16) * (((2 * (cos(t) ^ 2)) - 1) ^ 2)) ^ (1 / 2))\n\t\t)\n\t\t/\n\t\t((2 * (cos(t) ^ 4)) - (cos(t) ^ 2) + 2);\n\t\tr.isComplex.if {\n\t\t\tnil\n\t\t} {\n\t\t\t[r, t].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "archimedeanSpiral",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_a, _circumflexAccent_2(_theta, _solidus_2(1, _n)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "n"]),
  "{ :a :n |\n\t\t{ :theta |\n\t\t\tlet r = a * (theta ^ (1 / n));\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "bicorn",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(_a, _sin_1(_t));
      let _y = _solidus_2(
        _asterisk_2(
          _asterisk_2(_a, _square_1(_cos_1(_t))),
          _plusSign_2(2, _cos_1(_t)),
        ),
        _plusSign_2(3, _square_1(_sin_1(_t))),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet x = a * t.sin;\n\t\t\tlet y = (a * t.cos.square * (2 + t.cos)) / (3 + t.sin.square);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "bifoliate",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(
        _a,
        _solidus_2(
          _asterisk_2(
            _asterisk_2(8, _cos_1(_theta)),
            _square_1(_sin_1(_theta)),
          ),
          _plusSign_2(3, _cos_1(_asterisk_2(4, _theta))),
        ),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = a * ((8 * theta.cos * theta.sin.square) / (3 + (4 * theta).cos));\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "bifolium",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(
        _asterisk_2(_asterisk_2(4, _a), _square_1(_sin_1(_theta))),
        _cos_1(_theta),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = 4 * a * theta.sin.square * theta.cos;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "botanicCurve",
  ["c", "d"],
  sl.annotateFunction(function (_c, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _plusSign_2(1, _asterisk_2(_d, _sin_1(_asterisk_2(_c, _theta))));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["c", "d"]),
  "{ :c :d |\n\t\t{ :theta |\n\t\t\tlet r = 1 + (d * (c * theta).sin);\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "butterflyCurve",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _exp_1(_cos_1(_t));
    let _b = _asterisk_2(2, _cos_1(_asterisk_2(4, _t)));
    let _c = _circumflexAccent_2(_sin_1(_solidus_2(_t, 12)), 5);
    /* Statements */
    return _asterisk_2(
      [_sin_1(_t), _cos_1(_t)],
      _hyphenMinus_2(_hyphenMinus_2(_a, _b), _c),
    );
  }, ["t"]),
  "{ :t |\n\t\tlet a = t.cos.exp;\n\t\tlet b = 2 * (4 * t).cos;\n\t\tlet c = (t / 12).sin ^ 5;\n\t\t[t.sin, t.cos] * (a - b - c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "catenaryCurve",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenaryCurve_2(_a, _a);
  }, ["a"]),
  "{ :a |\n\t\tcatenaryCurve(a, a)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "catenaryCurve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return [_theta, _asterisk_2(_b, _cosh_1(_solidus_2(_theta, _a)))];
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\t[\n\t\t\t\ttheta,\n\t\t\t\tb * (theta / a).cosh\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cayleysSextic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _cube_1(_cos_1(_t));
    let _x = _asterisk_2(_a, _cos_1(_asterisk_2(3, _t)));
    let _y = _asterisk_2(_a, _sin_1(_asterisk_2(3, _t)));
    /* Statements */
    return [_x, _y];
  }, ["t"]),
  "{ :t |\n\t\tlet a = t.cos.cube;\n\t\tlet x = a * (3 * t).cos;\n\t\tlet y = a * (3 * t).sin;\n\t\t[x, y]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cissoidOfDiocles",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _tan_1(_theta);
      let _x = _solidus_2(
        _asterisk_2(_asterisk_2(2, _a), _circumflexAccent_2(_t, 2)),
        _plusSign_2(1, _circumflexAccent_2(_t, 2)),
      );
      let _y = _asterisk_2(_t, _x);
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet t = theta.tan;\n\t\t\tlet x = 2 * a * (t ^ 2) / (1 + (t ^ 2));\n\t\t\tlet y = t * x;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cleliaCurve",
  ["r", "c"],
  sl.annotateFunction(function (_r, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(
          _asterisk_2(_r, _cos_1(_theta)),
          _cos_1(_asterisk_2(_c, _theta)),
        ),
        _asterisk_2(
          _asterisk_2(_r, _cos_1(_theta)),
          _sin_1(_asterisk_2(_c, _theta)),
        ),
        _asterisk_2(_r, _sin_1(_theta)),
      ];
    }, ["theta"]);
  }, ["r", "c"]),
  "{ :r :c |\n\t\t{ :theta |\n\t\t\t[\n\t\t\t\tr * theta.cos * (c * theta).cos,\n\t\t\t\tr * theta.cos * (c * theta).sin,\n\t\t\t\tr * theta.sin\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cochleoid",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_theta, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [1, 0];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _r = _solidus_2(_asterisk_2(_a, _sin_1(_theta)), _theta);
          /* Statements */
          return _fromPolarCoordinates_1([_r, _theta]);
        }, []),
      );
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\t(theta = 0).if {\n\t\t\t\t[1, 0]\n\t\t\t} {\n\t\t\t\tlet r = (a * theta.sin) / theta;\n\t\t\t\t[r, theta].fromPolarCoordinates\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "conchoidOfDeSluze",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _plusSign_2(_sec_1(_t), _asterisk_2(_a, _cos_1(_t)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _t]);
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet r = t.sec + (a * t.cos);\n\t\t\t[r, t].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "conchoidOfDurer",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _plusSign_2(
        _solidus_2(
          _asterisk_2(_b, _cos_1(_t)),
          _hyphenMinus_2(_cos_1(_t), _sin_1(_t)),
        ),
        _asterisk_2(_a, _cos_1(_t)),
      );
      let _y = _asterisk_2(_a, _sin_1(_t));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :t |\n\t\t\tlet x = ((b * t.cos) / (t.cos - t.sin)) + (a * t.cos);\n\t\t\tlet y = a * t.sin;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cycloid",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(_r, _hyphenMinus_2(_t, _sin_1(_t))),
        _asterisk_2(_r, _hyphenMinus_2(1, _cos_1(_t))),
      ];
    }, ["t"]);
  }, ["r"]),
  "{ :r |\n\t\t{ :t |\n\t\t\t[\n\t\t\t\tr * (t - t.sin),\n\t\t\t\tr * (1 - t.cos)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "epicycloid",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _epitrochoid_3(_a, _b, _b);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tepitrochoid(a, b, b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "epitrochoid",
  ["a", "b", "h"],
  sl.annotateFunction(function (_a, _b, _h) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _plusSign_2(_a, _b);
      let _q = _solidus_2(_p, _b);
      /* Statements */
      return [
        _hyphenMinus_2(
          _asterisk_2(_p, _cos_1(_theta)),
          _asterisk_2(_h, _cos_1(_asterisk_2(_q, _theta))),
        ),
        _hyphenMinus_2(
          _asterisk_2(_p, _sin_1(_theta)),
          _asterisk_2(_h, _sin_1(_asterisk_2(_q, _theta))),
        ),
      ];
    }, ["theta"]);
  }, ["a", "b", "h"]),
  "{ :a :b :h |\n\t\t{ :theta |\n\t\t\tlet p = a + b;\n\t\t\tlet q = p / b;\n\t\t\t[\n\t\t\t\t(p * theta.cos) - (h * (q * theta).cos),\n\t\t\t\t(p * theta.sin) - (h * (q * theta).sin)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "eulerSpiral",
  ["theta"],
  sl.annotateFunction(function (_theta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return [_fresnelC_1(_theta), _fresnelS_1(_theta)];
  }, ["theta"]),
  "{ :theta |\n\t\t[theta.fresnelC, theta.fresnelS]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "fernandezGuastiSquircle",
  ["r", "s"],
  sl.annotateFunction(function (_r, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _asterisk_2(_r, _sqrt_1(2));
      let _b = _asterisk_2(_s, _abs_1(_sin_1(_asterisk_2(2, _theta))));
      let _rho = _if_3(
        _isVeryCloseTo_2(_b, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _r;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = _sqrt_1(
            _hyphenMinus_2(
              1,
              _asterisk_2(
                _square_1(_s),
                _square_1(_sin_1(_asterisk_2(2, _theta))),
              ),
            ),
          );
          let _d = _sqrt_1(_hyphenMinus_2(1, _c));
          /* Statements */
          return _asterisk_2(_solidus_2(_a, _b), _d);
        }, []),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["r", "s"]),
  "{ :r :s |\n\t\t{ :theta |\n\t\t\tlet a = r * 2.sqrt;\n\t\t\tlet b = s * (2 * theta).sin.abs;\n\t\t\tlet rho = b.isVeryCloseTo(0).if {\n\t\t\t\tr\n\t\t\t} {\n\t\t\t\tlet c = (1 - (s.square * (2 * theta).sin.square)).sqrt;\n\t\t\t\tlet d = (1 - c).sqrt;\n\t\t\t\t(a / b) * d\n\t\t\t};\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "foliumOfDescartes",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _solidus_2(
        _asterisk_2(
          _asterisk_2(_asterisk_2(3, _a), _sin_1(_theta)),
          _cos_1(_theta),
        ),
        _plusSign_2(_cube_1(_sin_1(_theta)), _cube_1(_cos_1(_theta))),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = (3 * a * theta.sin * theta.cos) / (theta.sin.cube + theta.cos.cube);\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "freethsNephroid",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(
        _a,
        _plusSign_2(1, _asterisk_2(2, _sin_1(_asterisk_2(0.5, _theta)))),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = a * (1 + (2 * (0.5 * theta).sin));\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "galileanSpiral",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _hyphenMinus_2(_asterisk_2(_b, _square_1(_theta)), _a);
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet rho = (b * theta.square) - a;\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "geocentricOrbitCurve",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _circumflexAccent_2(_r, _Fraction_2(2n, 3n));
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _b = _asterisk_2(_t, _pi_1(2));
      let _c = _solidus_2(_b, _r);
      let _x = _plusSign_2(_sin_1(_b), _asterisk_2(_a, _sin_1(_c)));
      let _y = _plusSign_2(_cos_1(_b), _asterisk_2(_a, _cos_1(_c)));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["r"]),
  "{ :r |\n\t\tlet a = r ^ 2/3;\n\t\t{ :t |\n\t\t\tlet b = t * 2.pi;\n\t\t\tlet c = b / r;\n\t\t\tlet x = b.sin + (a * c.sin);\n\t\t\tlet y = b.cos + (a * c.cos);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "geocentricOrbitCurve",
  ["tP", "rP"],
  sl.annotateFunction(function (_tP, _rP) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tP, _rP";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(_pi_1(2), _hyphenMinus_2(1, _solidus_2(1, _tP)));
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _sqrt_1(
        _hyphenMinus_2(
          _plusSign_2(1, _circumflexAccent_2(_rP, 2)),
          _asterisk_2(_asterisk_2(2, _rP), _cos_1(_asterisk_2(_a, _t))),
        ),
      );
      let _b = _solidus_2(_asterisk_2(_rP, _sin_1(_asterisk_2(_a, _t))), _r);
      let _c = _solidus_2(
        _hyphenMinus_2(
          _plusSign_2(1, _circumflexAccent_2(_r, 2)),
          _circumflexAccent_2(_rP, 2),
        ),
        _asterisk_2(2, _r),
      );
      let _d = _sin_1(_asterisk_2(_pi_1(2), _t));
      let _e = _cos_1(_asterisk_2(_pi_1(2), _t));
      let _x = _asterisk_2(
        _r,
        _hyphenMinus_2(_asterisk_2(_d, _b), _asterisk_2(_e, _c)),
      );
      let _y = _asterisk_2(
        _r,
        _hyphenMinus_2(
          0,
          _plusSign_2(_asterisk_2(_d, _c), _asterisk_2(_e, _b)),
        ),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["tP", "rP"]),
  "{ :tP :rP |\n\t\tlet a = 2.pi * (1 - (1 / tP));\n\t\t{ :t |\n\t\t\tlet r = (1 + (rP ^ 2) - (2 * rP * cos(a * t))).sqrt;\n\t\t\tlet b = (rP * sin(a * t)) / r;\n\t\t\tlet c = (1 + (r ^ 2) - (rP ^ 2)) / (2 * r);\n\t\t\tlet d = sin(2.pi * t);\n\t\t\tlet e = cos(2.pi * t);\n\t\t\tlet x = r * ((d * b) - (e * c));\n\t\t\tlet y = r * (0 - ((d * c) + (e * b)));\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "hippopede",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(
        2,
        _real_1(
          _sqrt_1(
            _hyphenMinus_2(
              _a,
              _asterisk_2(_b, _circumflexAccent_2(_sin_1(_theta), 2)),
            ),
          ),
        ),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet r = 2 * (a - (b * (theta.sin ^ 2))).sqrt.real;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "hypocycloid",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _hypotrochoid_3(_a, _b, _b);
  }, ["a", "b"]),
  "{ :a :b |\n\t\thypotrochoid(a, b, b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "hypotrochoid",
  ["a", "b", "h"],
  sl.annotateFunction(function (_a, _b, _h) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _hyphenMinus_2(_a, _b);
    let _d = _solidus_2(_c, _b);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _plusSign_2(
          _asterisk_2(_c, _cos_1(_t)),
          _asterisk_2(_h, _cos_1(_asterisk_2(_t, _d))),
        ),
        _hyphenMinus_2(
          _asterisk_2(_c, _sin_1(_t)),
          _asterisk_2(_h, _sin_1(_asterisk_2(_t, _d))),
        ),
      ];
    }, ["t"]);
  }, ["a", "b", "h"]),
  "{ :a :b :h |\n\t\tlet c = a - b;\n\t\tlet d = c / b;\n\t\t{ :t |\n\t\t\t[\n\t\t\t\t(c * t.cos) + (h * (t * d).cos),\n\t\t\t\t(c * t.sin) - (h * (t * d).sin)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "inverseNorwichSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _asterisk_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_asterisk_2(2, _t), _tan_1(_t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet rho = a * t.cos.square;\n\t\t\tlet theta = (2 * t) - t.tan;\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "lemniscate",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _plusSign_2(1, _square_1(_sin_1(_theta)));
      let _x = _solidus_2(_asterisk_2(_a, _cos_1(_theta)), _u);
      let _y = _solidus_2(
        _asterisk_2(_asterisk_2(_a, _sin_1(_theta)), _cos_1(_theta)),
        _u,
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\t/*let rho = a * (2 * theta).cos.sqrt;\n\t\t\t[rho theta].fromPolarCoordinates*/\n\t\t\tlet u = 1 + theta.sin.square;\n\t\t\tlet x = (a * theta.cos) / u;\n\t\t\tlet y = (a * theta.sin * theta.cos) / u;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "lHospitalQuintic",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _tan_1(_solidus_2(_theta, 2));
      let _x = _asterisk_2(
        _solidus_2(_a, 2),
        _hyphenMinus_2(_u, _solidus_2(_circumflexAccent_2(_u, 5), 5)),
      );
      let _y = _asterisk_2(
        _solidus_2(_a, 4),
        _square_1(_plusSign_2(1, _square_1(_u))),
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet u = (theta / 2).tan;\n\t\t\tlet x = (a / 2) * (u - ((u ^ 5) / 5));\n\t\t\tlet y = (a / 4) * (1 + u.square).square;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "limacon",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _plusSign_2(_b, _asterisk_2(_a, _cos_1(_t)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _t]);
    }, ["t"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :t |\n\t\t\tlet r = b + (a * t.cos);\n\t\t\t[r, t].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "lissajousCurve",
  ["delta", "a", "b"],
  sl.annotateFunction(function (_delta, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _delta, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _sin_1(_plusSign_2(_asterisk_2(_a, _t), _delta));
      let _y = _sin_1(_asterisk_2(_b, _t));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["delta", "a", "b"]),
  "{ :delta :a :b |\n\t\t{ :t |\n\t\t\tlet x = ((a * t) + delta).sin;\n\t\t\tlet y = (b * t).sin;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "logarithmicSpiral",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_a, _exp_1(_asterisk_2(_b, _theta)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet r = a * (b * theta).exp;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "norwichSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _solidus_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_tan_1(_t), _asterisk_2(2, _t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet rho = a / t.cos.square;\n\t\t\tlet theta = t.tan - (2 * t);\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "plateauCurve",
  ["a", "m", "n"],
  sl.annotateFunction(function (_a, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _sin_1(_asterisk_2(_hyphenMinus_2(_m, _n), _t));
      let _x = _solidus_2(
        _asterisk_2(_a, _sin_1(_asterisk_2(_plusSign_2(_m, _n), _t))),
        _p,
      );
      let _y = _solidus_2(
        _asterisk_2(
          _asterisk_2(_asterisk_2(2, _a), _sin_1(_asterisk_2(_m, _t))),
          _sin_1(_asterisk_2(_n, _t)),
        ),
        _p,
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "m", "n"]),
  "{ :a :m :n |\n\t\t{ :t |\n\t\t\tlet p = ((m - n) * t).sin;\n\t\t\tlet x = (a * ((m + n) * t).sin) / p;\n\t\t\tlet y = (2 * a * (m * t).sin * (n * t).sin) / p;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "quadratrixOfHippias",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(_asterisk_2(2, _a), _pi_1(1));
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(_asterisk_2(_m, _t), _cot_1(_t)),
        _asterisk_2(_m, _t),
      ];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\tlet m = (2 * a) / 1.pi;\n\t\t{ :t |\n\t\t\t[\n\t\t\t\tm * t * t.cot,\n\t\t\t\tm * t\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "reuleauxPolygonCurve",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _plusSign_2(
        _solidus_2(_asterisk_2(_n, _hyphenMinus_2(_theta, _pi_1(1))), _pi_1(2)),
        0.5,
      );
      let _b = _solidus_2(_asterisk_2(_pi_1(2), _floor_1(_a)), _n);
      let _c = _cos_1(_hyphenMinus_2(_theta, _b));
      let _d = _asterisk_2(2, _cos_1(_solidus_2(_pi_1(1), _n)));
      let _r = _plusSign_2(
        _c,
        _sqrt_1(_plusSign_2(_plusSign_2(1, _d), _circumflexAccent_2(_c, 2))),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["n"]),
  "{ :n |\n\t\t{ :theta |\n\t\t\tlet a = n * (theta - 1.pi) / 2.pi + 0.5;\n\t\t\tlet b = 2.pi * a.floor / n;\n\t\t\tlet c = (theta - b).cos;\n\t\t\tlet d = 2 * (1.pi / n).cos;\n\t\t\tlet r = c + (1 + d + (c ^ 2)).sqrt;\n\t\t\t[r theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "rhodonea",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_a, _cos_1(_asterisk_2(_n, _theta)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "n"]),
  "{ :a :n |\n\t\t{ :theta |\n\t\t\tlet r = a * (n * theta).cos;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "satelliteCurve",
  ["r", "alpha", "k"],
  sl.annotateFunction(function (_r, _alpha, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _alpha, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(
        _r,
        _hyphenMinus_2(
          _asterisk_2(
            _asterisk_2(_cos_1(_alpha), _cos_1(_theta)),
            _cos_1(_asterisk_2(_k, _theta)),
          ),
          _asterisk_2(_sin_1(_theta), _sin_1(_asterisk_2(_k, _theta))),
        ),
      );
      let _y = _asterisk_2(
        _r,
        _plusSign_2(
          _asterisk_2(
            _asterisk_2(_cos_1(_alpha), _sin_1(_theta)),
            _cos_1(_asterisk_2(_k, _theta)),
          ),
          _asterisk_2(_cos_1(_theta), _sin_1(_asterisk_2(_k, _theta))),
        ),
      );
      let _z = _asterisk_2(
        _asterisk_2(_r, _sin_1(_alpha)),
        _cos_1(_asterisk_2(_k, _theta)),
      );
      /* Statements */
      return [_x, _y, _z];
    }, ["theta"]);
  }, ["r", "alpha", "k"]),
  "{ :r :alpha :k |\n\t\t{ :theta |\n\t\t\tlet x = r * ((alpha.cos * theta.cos * (k * theta).cos) - (theta.sin * (k * theta).sin));\n\t\t\tlet y = r * ((alpha.cos * theta.sin * (k * theta).cos) + (theta.cos * (k * theta).sin));\n\t\t\tlet z = r * alpha.sin * (k * theta).cos;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "seiffertsSpiral",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _sqrt_1(_m);
    /* Statements */
    return sl.annotateFunction(function (_s) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _s";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _jacobiSn_2(_s, _m);
      let _theta = _asterisk_2(_k, _s);
      let _z = _jacobiCn_2(_s, _m);
      /* Statements */
      return _fromCylindricalCoordinates_1([_rho, _theta, _z]);
    }, ["s"]);
  }, ["m"]),
  "{ :m |\n\t\tlet k = m.sqrt;\n\t\t{ :s |\n\t\t\tlet rho = jacobiSn(s, m);\n\t\t\tlet theta = k * s;\n\t\t\tlet z = jacobiCn(s, m);\n\t\t\t[rho theta z].fromCylindricalCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "semicubicalParabola",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _square_1(_t);
      let _y = _asterisk_2(_a, _cube_1(_t));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet x = t.square;\n\t\t\tlet y = a * t.cube;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "serpentineCurve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(_a, _cot_1(_theta)),
        _asterisk_2(_asterisk_2(_b, _sin_1(_theta)), _cos_1(_theta)),
      ];
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\t[\n\t\t\t\ta * theta.cot,\n\t\t\t\tb * theta.sin * theta.cos\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "sinusoidalSpiral",
  ["n", "a"],
  sl.annotateFunction(function (_n, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _nthRoot_2(
        _asterisk_2(
          _asterisk_2(2, _circumflexAccent_2(_a, _n)),
          _cos_1(_asterisk_2(_n, _theta)),
        ),
        _n,
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["n", "a"]),
  "{ :n :a |\n\t\t{ :theta |\n\t\t\tlet r = (2 * (a ^ n) * (n * theta).cos).nthRoot(n);\n\t\t\t[r theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "sphericalSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _c = _arcTan_1(_asterisk_2(_t, _a));
      let _d = _cos_1(_c);
      let _x = _asterisk_2(_cos_1(_t), _d);
      let _y = _asterisk_2(_sin_1(_t), _d);
      let _z = _hyphenMinus_1(_sin_1(_c));
      /* Statements */
      return [_x, _y, _z];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet c = (t * a).arcTan;\n\t\t\tlet d = c.cos;\n\t\t\tlet x = t.cos * d;\n\t\t\tlet y = t.sin * d;\n\t\t\tlet z = c.sin.-;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "sphericalTrochoid",
  ["omega", "a", "b", "d"],
  sl.annotateFunction(function (_omega, _a, _b, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _omega, _a, _b, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _q = _solidus_2(_a, _b);
    let _i = _cos_1(_omega);
    let _j = _sin_1(_omega);
    /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _plusSign_2(
        _hyphenMinus_2(_a, _asterisk_2(_b, _i)),
        _asterisk_2(_asterisk_2(_d, _i), _cos_1(_asterisk_2(_q, _theta))),
      );
      let _x = _plusSign_2(
        _asterisk_2(_p, _cos_1(_theta)),
        _asterisk_2(
          _asterisk_2(_d, _sin_1(_theta)),
          _sin_1(_asterisk_2(_q, _theta)),
        ),
      );
      let _y = _hyphenMinus_2(
        _asterisk_2(_p, _sin_1(_theta)),
        _asterisk_2(
          _asterisk_2(_d, _cos_1(_theta)),
          _sin_1(_asterisk_2(_q, _theta)),
        ),
      );
      let _z = _asterisk_2(
        _j,
        _hyphenMinus_2(_b, _asterisk_2(_d, _cos_1(_asterisk_2(_q, _theta)))),
      );
      /* Statements */
      return [_x, _y, _z];
    }, ["theta"]);
  }, ["omega", "a", "b", "d"]),
  "{ :omega :a :b :d |\n\t\tlet q = a / b;\n\t\tlet i = omega.cos;\n\t\tlet j = omega.sin;\n\t\t{ :theta |\n\t\t\tlet p = a - (b * i) + (d * i * (q * theta).cos);\n\t\t\tlet x = (p * theta.cos) + (d * theta.sin * (q * theta).sin);\n\t\t\tlet y = (p * theta.sin) - (d * theta.cos * (q * theta).sin);\n\t\t\tlet z = j * (b - (d * (q * theta).cos));\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "strophoid",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _asterisk_2(
        _a,
        _solidus_2(
          _sin_1(_hyphenMinus_2(_asterisk_2(2, _theta), _a)),
          _sin_1(_hyphenMinus_2(_theta, _a)),
        ),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet rho = a * ((2 * theta - a).sin / (theta - a).sin);\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "superellipseCurve",
  ["a", "b", "n"],
  sl.annotateFunction(function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _solidus_2(2, _n);
      let _c = _cos_1(_t);
      let _s = _sin_1(_t);
      let _x = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_c), _m), _a),
        _sign_1(_c),
      );
      let _y = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_s), _m), _b),
        _sign_1(_s),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "b", "n"]),
  "{ :a :b :n |\n\t\t{ :t |\n\t\t\tlet m = 2 / n;\n\t\t\tlet c = t.cos;\n\t\t\tlet s = t.sin;\n\t\t\tlet x = (c.abs ^ m) * a * c.sign;\n\t\t\tlet y = (s.abs ^ m) * b * s.sign;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "superformulaCurve",
  ["a", "b", "m", "n1", "n2", "n3"],
  sl.annotateFunction(function (_a, _b, _m, _n1, _n2, _n3) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _b, _m, _n1, _n2, _n3";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _circumflexAccent_2(
        _abs_1(_solidus_2(_cos_1(_solidus_2(_asterisk_2(_m, _u), 4)), _a)),
        _n2,
      );
      let _q = _circumflexAccent_2(
        _abs_1(_solidus_2(_sin_1(_solidus_2(_asterisk_2(_m, _u), 4)), _b)),
        _n3,
      );
      let _r = _circumflexAccent_2(_plusSign_2(_p, _q), _solidus_2(-1, _n1));
      let _x = _asterisk_2(_r, _cos_1(_u));
      let _y = _asterisk_2(_r, _sin_1(_u));
      /* Statements */
      return [_x, _y];
    }, ["u"]);
  }, ["a", "b", "m", "n1", "n2", "n3"]),
  "{ :a :b :m :n1 :n2 :n3 |\n\t\t{ :u |\n\t\t\tlet p = ((m * u / 4).cos / a).abs ^ n2;\n\t\t\tlet q = ((m * u / 4).sin / b).abs ^ n3;\n\t\t\tlet r = (p + q) ^ (-1 / n1);\n\t\t\tlet x = r * u.cos;\n\t\t\tlet y = r * u.sin;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "syntractrix",
  ["a", "k"],
  sl.annotateFunction(function (_a, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(
        _a,
        _hyphenMinus_2(_t, _asterisk_2(_k, _tanh_1(_t))),
      );
      let _y = _asterisk_2(_a, _solidus_2(_k, _cosh_1(_t)));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "k"]),
  "{ :a :k |\n\t\t{ :t |\n\t\t\tlet x = a * (t - (k * tanh(t)));\n\t\t\tlet y = a * (k / cosh(t));\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "tschirnhausenCubic",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(
        _asterisk_2(9, _a),
        _hyphenMinus_2(1, _asterisk_2(_asterisk_2(3, _t), _t)),
      );
      let _y = _asterisk_2(_t, _x);
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet x = 9 * a * (1 - (3 * t * t));\n\t\t\tlet y = t * x;\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "tractrix",
  ["theta"],
  sl.annotateFunction(function (_theta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_theta, _tanh_1(_theta)),
      _solidus_2(1, _cosh_1(_theta)),
    ];
  }, ["theta"]),
  "{ :theta |\n\t\t[\n\t\t\ttheta - theta.tanh,\n\t\t\t1 / theta.cosh\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "tractrixSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(
          _asterisk_2(_a, _cos_1(_t)),
          _cos_1(_hyphenMinus_2(_t, _tan_1(_t))),
        ),
        _asterisk_2(
          _asterisk_2(_a, _cos_1(_t)),
          _sin_1(_hyphenMinus_2(_t, _tan_1(_t))),
        ),
      ];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\t[\n\t\t\t\ta * cos(t) * cos(t - tan(t)),\n\t\t\t\ta * cos(t) * sin(t - tan(t))\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "trifolium",
  ["r", "a", "b"],
  sl.annotateFunction(function (_r, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _plusSign_2(
        _plusSign_2(
          _asterisk_2(_asterisk_2(4, _r), _cube_1(_cos_1(_theta))),
          _asterisk_2(_hyphenMinus_2(_a, _asterisk_2(3, _r)), _cos_1(_theta)),
        ),
        _asterisk_2(_b, _sin_1(_theta)),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["r", "a", "b"]),
  "{ :r :a :b |\n\t\t{ :theta |\n\t\t\tlet rho = (4 * r * theta.cos.cube) + ((a - (3 * r)) * theta.cos) + (b * theta.sin);\n\t\t\t[rho, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "trifolium",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_negate_1(_a), _cos_1(_asterisk_2(3, _theta)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = -a * (3 * theta).cos;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "trisectrixOfMaclaurin",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(
        _solidus_2(_a, 2),
        _hyphenMinus_2(_asterisk_2(4, _cos_1(_theta)), _sec_1(_theta)),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = (a / 2) * ((4 * theta.cos) - theta.sec);\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "trochoid",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _hyphenMinus_2(
        _asterisk_2(_a, _theta),
        _asterisk_2(_b, _sin_1(_theta)),
      );
      let _y = _hyphenMinus_2(_a, _asterisk_2(_b, _cos_1(_theta)));
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet x = (a * theta) - (b * theta.sin);\n\t\t\tlet y = a - (b * theta.cos);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "witchOfAgnesi",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(_asterisk_2(2, _a), _theta);
      let _y = _solidus_2(
        _asterisk_2(2, _a),
        _plusSign_2(1, _square_1(_theta)),
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet x = 2 * a * theta;\n\t\t\tlet y = (2 * a) / (1 + theta.square);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "ampersandImplicitCurve",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _hyphenMinus_2(
        _plusSign_2(
          _plusSign_2(
            _hyphenMinus_2(
              _plusSign_2(
                _asterisk_2(6, _circumflexAccent_2(_x, 4)),
                _asterisk_2(4, _circumflexAccent_2(_y, 4)),
              ),
              _asterisk_2(21, _circumflexAccent_2(_x, 3)),
            ),
            _asterisk_2(
              _asterisk_2(6, _circumflexAccent_2(_x, 2)),
              _circumflexAccent_2(_y, 2),
            ),
          ),
          _asterisk_2(19, _circumflexAccent_2(_x, 2)),
        ),
        _asterisk_2(_asterisk_2(11, _x), _circumflexAccent_2(_y, 2)),
      ),
      _asterisk_2(3, _circumflexAccent_2(_y, 2)),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t(6 * (x ^ 4))\n\t\t+\n\t\t(4 * (y ^ 4))\n\t\t-\n\t\t(21 * (x ^ 3))\n\t\t+\n\t\t(6 * (x ^ 2) * (y ^ 2))\n\t\t+\n\t\t(19 * (x ^ 2))\n\t\t-\n\t\t(11 * x * (y ^ 2))\n\t\t-\n\t\t(3 * (y ^ 2))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "bicuspidCurve",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _hyphenMinus_2(
        _circumflexAccent_2(_x, 2),
        _circumflexAccent_2(_a, 2),
      );
      let _q = _circumflexAccent_2(_hyphenMinus_2(_x, _a), 2);
      let _r = _circumflexAccent_2(
        _hyphenMinus_2(_circumflexAccent_2(_y, 2), _circumflexAccent_2(_a, 2)),
        2,
      );
      /* Statements */
      return _plusSign_2(_asterisk_2(_p, _q), _r);
    }, ["x", "y"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :x :y |\n\t\t\tlet p = (x ^ 2) - (a ^ 2);\n\t\t\tlet q = (x - a) ^ 2;\n\t\t\tlet r = ((y ^ 2) - (a ^ 2)) ^ 2;\n\t\t\tp * q + r\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "bowCurve",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_x, 4),
        _asterisk_2(_circumflexAccent_2(_x, 2), _y),
      ),
      _circumflexAccent_2(_y, 3),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t(x ^ 4) - ((x ^ 2) * y) + (y ^ 3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "cassiniOval",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _hyphenMinus_2(
          _circumflexAccent_2(
            _plusSign_2(
              _plusSign_2(
                _circumflexAccent_2(_x, 2),
                _circumflexAccent_2(_y, 2),
              ),
              _circumflexAccent_2(_a, 2),
            ),
            2,
          ),
          _asterisk_2(
            _asterisk_2(4, _circumflexAccent_2(_a, 2)),
            _circumflexAccent_2(_x, 2),
          ),
        ),
        _circumflexAccent_2(_b, 4),
      );
    }, ["x", "y"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :x :y |\n\t\t\t(((x ^ 2) + (y ^ 2) + (a ^ 2)) ^ 2)\n\t\t\t-\n\t\t\t(4 * (a ^ 2) * (x ^ 2))\n\t\t\t-\n\t\t\t(b ^ 4)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "ellipticCurve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(
          _plusSign_2(_circumflexAccent_2(_x, 3), _asterisk_2(_a, _x)),
          _b,
        ),
        _circumflexAccent_2(_y, 2),
      );
    }, ["x", "y"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :x :y |\n\t\t\t(x ^ 3) + (a * x) + b - (y ^ 2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "spiricSection",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _square_1(
          _plusSign_2(
            _plusSign_2(
              _hyphenMinus_2(
                _plusSign_2(_square_1(_x), _square_1(_y)),
                _square_1(_a),
              ),
              _square_1(_b),
            ),
            _square_1(_c),
          ),
        ),
        _asterisk_2(
          _asterisk_2(4, _square_1(_b)),
          _plusSign_2(_square_1(_x), _square_1(_c)),
        ),
      );
    }, ["x", "y"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :x :y |\n\t\t\t(x.square + y.square - a.square + b.square + c.square).square - (4 * b.square * (x.square + c.square))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "squareChladniPlateEquation",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _asterisk_2(
          _cos_1(_asterisk_2(_pi_1(_n), _x)),
          _cos_1(_asterisk_2(_pi_1(_m), _y)),
        ),
        _asterisk_2(
          _cos_1(_asterisk_2(_pi_1(_m), _x)),
          _cos_1(_asterisk_2(_pi_1(_n), _y)),
        ),
      );
    }, ["x", "y"]);
  }, ["m", "n"]),
  "{ :m :n |\n\t\t{ :x :y |\n\t\t\t(cos(n.pi * x) * cos(m.pi * y))\n\t\t\t-\n\t\t\t(cos(m.pi * x) * cos(n.pi * y))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "stirrupCurve",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _circumflexAccent_2(
      _hyphenMinus_2(_circumflexAccent_2(_x, 2), 1),
      2,
    );
    let _b = _asterisk_2(
      _asterisk_2(_hyphenMinus_2(_y, 1), _hyphenMinus_2(_y, 2)),
      _plusSign_2(_y, 5),
    );
    /* Statements */
    return _hyphenMinus_2(_a, _asterisk_2(_circumflexAccent_2(_y, 2), _b));
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet a = ((x ^ 2) - 1) ^ 2;\n\t\tlet b = (y - 1) * (y - 2) * (y + 5);\n\t\ta - ((y ^ 2) * b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "trottCurve",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(
      144,
      _plusSign_2(_circumflexAccent_2(_x, 4), _circumflexAccent_2(_y, 4)),
    );
    let _b = _asterisk_2(
      225,
      _plusSign_2(_circumflexAccent_2(_x, 2), _circumflexAccent_2(_y, 2)),
    );
    let _c = _asterisk_2(
      _asterisk_2(350, _circumflexAccent_2(_x, 2)),
      _circumflexAccent_2(_y, 2),
    );
    /* Statements */
    return _plusSign_2(_plusSign_2(_hyphenMinus_2(_a, _b), _c), 81);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet a = 144 * ((x ^ 4) + (y ^ 4));\n\t\tlet b = 225 * ((x ^ 2) + (y ^ 2));\n\t\tlet c = 350 * (x ^ 2) * (y ^ 2);\n\t\ta - b + c + 81\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "wattsCurve",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aa = _asterisk_2(_a, _a);
    let _bb = _asterisk_2(_b, _b);
    let _cc = _asterisk_2(_c, _c);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _xx = _asterisk_2(_x, _x);
      let _yy = _asterisk_2(_y, _y);
      let _r = _plusSign_2(_xx, _yy);
      /* Statements */
      return _plusSign_2(
        _asterisk_2(
          _r,
          _square_1(
            _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_r, _aa), _bb), _cc),
          ),
        ),
        _asterisk_2(
          _asterisk_2(_asterisk_2(4, _aa), _yy),
          _hyphenMinus_2(_r, _bb),
        ),
      );
    }, ["x", "y"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\tlet aa = a * a;\n\t\tlet bb = b * b;\n\t\tlet cc = c * c;\n\t\t{ :x :y |\n\t\t\tlet xx = x * x;\n\t\t\tlet yy = y * y;\n\t\t\tlet r = xx + yy;\n\t\t\t(r * (r - aa - bb + cc).square)\n\t\t\t+\n\t\t\t(4 * aa * yy * (r - bb))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "circleCurve",
  ["c", "r"],
  sl.annotateFunction(function (_c, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_c, 2);
    let _x0 = _at_2(__SplVar1, 1);
    let _y0 = _at_2(__SplVar1, 2);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _plusSign_2(_x0, _asterisk_2(_r, _cos_1(_t)));
      let _y = _plusSign_2(_y0, _asterisk_2(_r, _sin_1(_t)));
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["c", "r"]),
  "{ :c :r |\n\t\tlet [x0, y0] = c;\n\t\t{ :t |\n\t\t\tlet x = x0 + (r * t.cos);\n\t\t\tlet y = y0 + (r * t.sin);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "ellipseCurve",
  ["c", "r", "theta"],
  sl.annotateFunction(function (_c, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _c, _r, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_r, 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    let __SplVar3 = _assertIsOfSize_2(_c, 2);
    let _x0 = _at_2(__SplVar3, 1);
    let _y0 = _at_2(__SplVar3, 2);
    let _p = _cos_1(_theta);
    let _q = _sin_1(_theta);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _hyphenMinus_2(
        _plusSign_2(_x0, _asterisk_2(_asterisk_2(_a, _p), _cos_1(_t))),
        _asterisk_2(_asterisk_2(_b, _q), _sin_1(_t)),
      );
      let _y = _plusSign_2(
        _plusSign_2(_y0, _asterisk_2(_asterisk_2(_a, _q), _cos_1(_t))),
        _asterisk_2(_asterisk_2(_b, _p), _sin_1(_t)),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["c", "r", "theta"]),
  "{ :c :r :theta |\n\t\tlet [a, b] = r;\n\t\tlet [x0, y0] = c;\n\t\tlet p = theta.cos;\n\t\tlet q = theta.sin;\n\t\t{ :t |\n\t\t\tlet x = x0 + (a * p * t.cos) - (b * q * t.sin);\n\t\t\tlet y = y0 + (a * q * t.cos) + (b * p * t.sin);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "harmonographCurve",
  ["f", "p", "a", "d"],
  sl.annotateFunction(function (_f, _p, _a, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f, _p, _a, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_f, 4);
    let _f1 = _at_2(__SplVar4, 1);
    let _f2 = _at_2(__SplVar4, 2);
    let _f3 = _at_2(__SplVar4, 3);
    let _f4 = _at_2(__SplVar4, 4);
    let __SplVar5 = _assertIsOfSize_2(_p, 4);
    let _p1 = _at_2(__SplVar5, 1);
    let _p2 = _at_2(__SplVar5, 2);
    let _p3 = _at_2(__SplVar5, 3);
    let _p4 = _at_2(__SplVar5, 4);
    let __SplVar6 = _assertIsOfSize_2(_a, 4);
    let _a1 = _at_2(__SplVar6, 1);
    let _a2 = _at_2(__SplVar6, 2);
    let _a3 = _at_2(__SplVar6, 3);
    let _a4 = _at_2(__SplVar6, 4);
    let __SplVar7 = _assertIsOfSize_2(_solidus_2(_d, 100), 4);
    let _d1 = _at_2(__SplVar7, 1);
    let _d2 = _at_2(__SplVar7, 2);
    let _d3 = _at_2(__SplVar7, 3);
    let _d4 = _at_2(__SplVar7, 4);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _plusSign_2(
        _asterisk_2(
          _asterisk_2(_a1, _sin_1(_plusSign_2(_asterisk_2(_t, _f1), _p1))),
          _exp_1(_asterisk_2(_asterisk_2(-1, _d1), _t)),
        ),
        _asterisk_2(
          _asterisk_2(_a2, _sin_1(_plusSign_2(_asterisk_2(_t, _f2), _p2))),
          _exp_1(_asterisk_2(_asterisk_2(-1, _d2), _t)),
        ),
      );
      let _y = _plusSign_2(
        _asterisk_2(
          _asterisk_2(_a3, _sin_1(_plusSign_2(_asterisk_2(_t, _f3), _p3))),
          _exp_1(_asterisk_2(_asterisk_2(-1, _d3), _t)),
        ),
        _asterisk_2(
          _asterisk_2(_a4, _sin_1(_plusSign_2(_asterisk_2(_t, _f4), _p4))),
          _exp_1(_asterisk_2(_asterisk_2(-1, _d4), _t)),
        ),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["f", "p", "a", "d"]),
  "{ :f :p :a :d |\n\t\tlet [f1, f2, f3, f4] = f;\n\t\tlet [p1, p2, p3, p4] = p;\n\t\tlet [a1, a2, a3, a4] = a;\n\t\tlet [d1, d2, d3, d4] = d / 100;\n\t\t{ :t |\n\t\t\tlet x = (\n\t\t\t\t(a1 * sin((t * f1) + p1) * (-1 * d1 * t).exp)\n\t\t\t\t+\n\t\t\t\t(a2 * sin((t * f2) + p2) * (-1 * d2 * t).exp)\n\t\t\t);\n\t\t\tlet y = (\n\t\t\t\t(a3 * sin((t * f3) + p3) * (-1 * d3 * t).exp)\n\t\t\t\t+\n\t\t\t\t(a4 * sin((t * f4) + p4) * (-1 * d4 * t).exp)\n\t\t\t);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "lateralHarmonographCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_self, 4);
    let _f = _at_2(__SplVar8, 1);
    let _p = _at_2(__SplVar8, 2);
    let _a = _at_2(__SplVar8, 3);
    let _d = _at_2(__SplVar8, 4);
    /* Statements */
    return _harmonographCurve_4([1, 0, _f, 0], [0, 0, _p, 0], [1, 0, _a, 0], [
      _d,
      0,
      _d,
      0,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [f, p, a, d] = self;\n\t\tharmonographCurve([1 0 f 0], [0 0 p 0], [1 0 a 0], [d 0 d 0])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "rotaryHarmonographCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar9 = _assertIsOfSize_2(_self, 4);
    let _f = _at_2(__SplVar9, 1);
    let _p = _at_2(__SplVar9, 2);
    let _a = _at_2(__SplVar9, 3);
    let _d = _at_2(__SplVar9, 4);
    /* Statements */
    return _harmonographCurve_4(
      [1, _f, 1, _f],
      [
        0,
        _p,
        _pi_1(_Fraction_2(1n, 2n)),
        _plusSign_2(_p, _pi_1(_Fraction_2(1n, 2n))),
      ],
      [1, _a, 1, _a],
      [_d, _d, _d, _d],
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [f, p, a, d] = self;\n\t\tharmonographCurve([1 f 1 f], [0, p, 1/2.pi, p + 1/2.pi], [1 a 1 a], [d d d d])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "tridentCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SplVar10, 1);
    let _b = _at_2(__SplVar10, 2);
    let _c = _at_2(__SplVar10, 3);
    let _d = _at_2(__SplVar10, 4);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _asterisk_2(_x, _y),
              _asterisk_2(_a, _circumflexAccent_2(_x, 3)),
            ),
            _asterisk_2(_b, _circumflexAccent_2(_x, 2)),
          ),
          _asterisk_2(_c, _x),
        ),
        _d,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self;\n\t\t{ :x :y |\n\t\t\t(x * y) + (a * (x ^ 3)) + (b * (x ^ 2)) + (c * x) - d\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ParametricEquations",
  "tridentOfNewton",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SplVar11, 1);
    let _b = _at_2(__SplVar11, 2);
    let _c = _at_2(__SplVar11, 3);
    let _d = _at_2(__SplVar11, 4);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _hyphenMinus_2(
          _hyphenMinus_2(_solidus_2(_d, _x), _asterisk_2(_a, _square_1(_x))),
          _asterisk_2(_b, _x),
        ),
        _c,
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self;\n\t\t{ :x |\n\t\t\t(d / x) - (a * x.square) - (b * x) - c\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ParametricEquations",
  "torusKnotCurve",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _plusSign_2(_p, _cos_1(_asterisk_2(_q, _t)));
      let _x = _asterisk_2(_r, _cos_1(_asterisk_2(_p, _t)));
      let _y = _asterisk_2(_r, _sin_1(_asterisk_2(_p, _t)));
      let _z = _sin_1(_asterisk_2(_q, _t));
      /* Statements */
      return [_x, _y, _z];
    }, ["t"]);
  }, ["p", "q"]),
  "{ :p :q |\n\t\t{ :t |\n\t\t\tlet r = p + (q * t).cos;\n\t\t\tlet x = r * (p * t).cos;\n\t\t\tlet y = r * (p * t).sin;\n\t\t\tlet z = (q * t).sin;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "catenoid",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _asterisk_2(_c, _cosh_1(_solidus_2(_v, _c)));
      let _x = _asterisk_2(_a, _cos_1(_u));
      let _y = _asterisk_2(_a, _sin_1(_u));
      let _z = _v;
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["c"]),
  "{ :c |\n\t\t{ :u :v |\n\t\t\tlet a = c * (v / c).cosh;\n\t\t\tlet x = a * u.cos;\n\t\t\tlet y = a * u.sin;\n\t\t\tlet z = v;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "dinisSurface",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _plusSign_2(_cos_1(_v), _log_1(_tan_1(_asterisk_2(0.5, _v))));
      /* Statements */
      return [
        _asterisk_2(_asterisk_2(_a, _cos_1(_u)), _sin_1(_v)),
        _asterisk_2(_asterisk_2(_a, _sin_1(_u)), _sin_1(_v)),
        _plusSign_2(_asterisk_2(_a, _i), _asterisk_2(_b, _u)),
      ];
    }, ["u", "v"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :u :v |\n\t\t\tlet i = v.cos + (0.5 * v).tan.log;\n\t\t\t[\n\t\t\t\ta * u.cos * v.sin,\n\t\t\t\ta * u.sin * v.sin,\n\t\t\t\t(a * i) + (b * u)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "ellipsoid",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(_asterisk_2(_a, _cos_1(_u)), _sin_1(_v));
      let _y = _asterisk_2(_asterisk_2(_b, _sin_1(_u)), _sin_1(_v));
      let _z = _asterisk_2(_c, _cos_1(_v));
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :u :v |\n\t\t\tlet x = a * u.cos * v.sin;\n\t\t\tlet y = b * u.sin * v.sin;\n\t\t\tlet z = c * v.cos;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "ellipticParaboloid",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _sqrt_1(_u);
      let _x = _asterisk_2(_asterisk_2(_a, _p), _cos_1(_v));
      let _y = _asterisk_2(_asterisk_2(_b, _p), _sin_1(_v));
      let _z = _u;
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :u :v |\n\t\t\tlet p = u.sqrt;\n\t\t\tlet x = a * p * v.cos;\n\t\t\tlet y = b * p * v.sin;\n\t\t\tlet z = u;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "helicoid",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(_v, _cos_1(_asterisk_2(_a, _u)));
      let _y = _asterisk_2(_v, _sin_1(_asterisk_2(_a, _u)));
      let _z = _u;
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :u :v |\n\t\t\tlet x = v * (a * u).cos;\n\t\t\tlet y = v * (a * u).sin;\n\t\t\tlet z = u;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "hyperbolicHelicoid",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _plusSign_2(1, _asterisk_2(_cosh_1(_u), _cosh_1(_v)));
      let _x = _asterisk_2(_sinh_1(_v), _cos_1(_asterisk_2(_t, _u)));
      let _y = _asterisk_2(_sinh_1(_v), _sin_1(_asterisk_2(_t, _u)));
      let _z = _asterisk_2(_cosh_1(_v), _sinh_1(_u));
      /* Statements */
      return _solidus_2([_x, _y, _z], _a);
    }, ["u", "v"]);
  }, ["t"]),
  "{ :t |\n\t\t{ :u :v |\n\t\t\tlet a = 1 + (u.cosh * v.cosh);\n\t\t\tlet x = v.sinh * (t * u).cos;\n\t\t\tlet y = v.sinh * (t * u).sin;\n\t\t\tlet z = v.cosh * u.sinh;\n\t\t\t[x, y, z] / a\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "moebiusStrip",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _plusSign_2(
        _r,
        _asterisk_2(_solidus_2(_v, 2), _cos_1(_solidus_2(_u, 2))),
      );
      let _x = _asterisk_2(_a, _cos_1(_u));
      let _y = _asterisk_2(_a, _sin_1(_u));
      let _z = _asterisk_2(_solidus_2(_v, 2), _sin_1(_solidus_2(_u, 2)));
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["r"]),
  "{ :r |\n\t\t{ :u :v |\n\t\t\tlet a = r + ((v / 2) * (u / 2).cos);\n\t\t\tlet x = a * u.cos;\n\t\t\tlet y = a * u.sin;\n\t\t\tlet z = (v / 2) * (u / 2).sin;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "pleuckersConoid",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _asterisk_2(_v, _cos_1(_u));
      let _y = _asterisk_2(_v, _sin_1(_u));
      let _z = _sin_1(_asterisk_2(_n, _u));
      /* Statements */
      return [_x, _y, _z];
    }, ["u", "v"]);
  }, ["n"]),
  "{ :n |\n\t\t{ :u :v |\n\t\t\tlet x = v * u.cos;\n\t\t\tlet y = v * u.sin;\n\t\t\tlet z = (n * u).sin;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "pseudosphere",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _plusSign_2(_cos_1(_v), _log_1(_tan_1(_asterisk_2(0.5, _v))));
    /* Statements */
    return [
      _asterisk_2(_sech_1(_u), _cos_1(_v)),
      _asterisk_2(_sech_1(_u), _sin_1(_v)),
      _hyphenMinus_2(_u, _tanh_1(_u)),
    ];
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet i = v.cos + (0.5 * v).tan.log;\n\t\t[\n\t\t\tu.sech * v.cos,\n\t\t\tu.sech * v.sin,\n\t\t\tu - u.tanh\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "torus",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta, _phi) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _theta, _phi";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _plusSign_2(_r, _sin_1(_theta));
      let _x = _asterisk_2(_a, _cos_1(_phi));
      let _y = _asterisk_2(_a, _sin_1(_phi));
      let _z = _cos_1(_theta);
      /* Statements */
      return [_x, _y, _z];
    }, ["theta", "phi"]);
  }, ["r"]),
  "{ :r |\n\t\t{ :theta :phi |\n\t\t\tlet a = r + theta.sin;\n\t\t\tlet x = a * phi.cos;\n\t\t\tlet y = a * phi.sin;\n\t\t\tlet z = theta.cos;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ParametricEquations",
  "umbilicTorus",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _hyphenMinus_2(_solidus_2(_u, 3), _asterisk_2(2, _v));
    let _b = _plusSign_2(_solidus_2(_u, 3), _v);
    let _c = _plusSign_2(
      _plusSign_2(7, _cos_1(_a)),
      _asterisk_2(2, _cos_1(_b)),
    );
    let _x = _asterisk_2(_c, _sin_1(_u));
    let _y = _asterisk_2(_c, _cos_1(_u));
    let _z = _plusSign_2(_sin_1(_a), _asterisk_2(2, _sin_1(_b)));
    /* Statements */
    return [_x, _y, _z];
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet a = (u / 3) - (2 * v);\n\t\tlet b = (u / 3) + v;\n\t\tlet c = 7 + a.cos + (2 * b.cos);\n\t\tlet x = c * u.sin;\n\t\tlet y = c * u.cos;\n\t\tlet z = a.sin + (2 * b.sin);\n\t\t[x, y, z]\n\t}",
);
