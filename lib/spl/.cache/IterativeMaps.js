sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "bakersMap",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = 0.5;
    let _beta = _hyphenMinus_2(1, _alpha);
    /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar1, 1);
      let _y = _at_2(__SplVar1, 2);
      /* Statements */
      return _if_3(
        _lessThanSign_2(_y, _alpha),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2(
            [_asterisk_2(_a, _x), _solidus_2(_y, _alpha)],
            1,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2([
            _plusSign_2(_hyphenMinus_2(1, _b), _asterisk_2(_b, _x)),
            _solidus_2(_hyphenMinus_2(_y, _alpha), _beta),
          ], 1);
        }, []),
      );
    }, ["v"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet alpha = 0.5;\n\t\tlet beta = 1 - alpha;\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\t(y < alpha).if {\n\t\t\t\t[a * x, y / alpha] % 1\n\t\t\t} {\n\t\t\t\t[(1 - b) + (b * x), (y - alpha) / beta] % 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "bakersMap",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _bakersMap_2(_c, _c);
  }, ["c"]),
  "{ :c |\n\t\tbakersMap(c, c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "circleMap",
  ["k", "omega"],
  sl.annotateFunction(function (_k, _omega) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _omega";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _solidus_2(_k, _pi_1(2));
    /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return _percentSign_2(
        _hyphenMinus_2(
          _plusSign_2(_theta, _omega),
          _asterisk_2(_a, _sin_1(_asterisk_2(_pi_1(2), _theta))),
        ),
        1,
      );
    }, ["theta"]);
  }, ["k", "omega"]),
  "{ :k :omega |\n\t\tlet a = k / 2.pi;\n\t\t{ :theta |\n\t\t\t(theta + omega - (a * (2.pi * theta).sin)) % 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "cuspMap",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _asterisk_2(2, _sqrt_1(_abs_1(_x))));
  }, ["x"]),
  "{ :x |\n\t\t1 - (2 * x.abs.sqrt)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "deJongMap",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar2 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar2, 1);
      let _y = _at_2(__SplVar2, 2);
      /* Statements */
      return [
        _hyphenMinus_2(
          _sin_1(_asterisk_2(_a, _y)),
          _cos_1(_asterisk_2(_b, _x)),
        ),
        _hyphenMinus_2(
          _sin_1(_asterisk_2(_c, _x)),
          _cos_1(_asterisk_2(_d, _y)),
        ),
      ];
    }, ["v"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d |\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\t(a * y).sin - (b * x).cos,\n\t\t\t\t(c * x).sin - (d * y).cos\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "duffingMap",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar3 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar3, 1);
      let _y = _at_2(__SplVar3, 2);
      /* Statements */
      return [
        _y,
        _hyphenMinus_2(
          _hyphenMinus_2(_asterisk_2(_a, _y), _asterisk_2(_b, _x)),
          _asterisk_2(_asterisk_2(_y, _y), _y),
        ),
      ];
    }, ["v"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\ty,\n\t\t\t\t(a * y) - (b * x) - (y * y * y)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "dyadicMap",
  ["beta"],
  sl.annotateFunction(function (_beta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _percentSign_2(_asterisk_2(_beta, _x), 1);
    }, ["x"]);
  }, ["beta"]),
  "{ :beta |\n\t\t{ :x |\n\t\t\t(beta * x) % 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "gaussIteratedMap",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _exp_1(_asterisk_2(_negate_1(_alpha), _square_1(_x))),
        _beta,
      );
    }, ["x"]);
  }, ["alpha", "beta"]),
  "{ :alpha :beta |\n\t\t{ :x |\n\t\t\t(-alpha * x.square).exp + beta\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "henonAreaPreservingMap",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _sin_1(_a);
    let _c = _cos_1(_a);
    /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar4 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar4, 1);
      let _y = _at_2(__SplVar4, 2);
      let _m = _hyphenMinus_2(_y, _asterisk_2(_x, _x));
      /* Statements */
      return [
        _hyphenMinus_2(_asterisk_2(_x, _c), _asterisk_2(_m, _s)),
        _plusSign_2(_asterisk_2(_x, _s), _asterisk_2(_m, _c)),
      ];
    }, ["v"]);
  }, ["a"]),
  "{ :a |\n\t\tlet s = a.sin;\n\t\tlet c = a.cos;\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\tlet m = y - (x * x);\n\t\t\t[\n\t\t\t\t(x * c) - (m * s),\n\t\t\t\t(x * s) + (m * c)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "henonMap",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar5 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar5, 1);
      let _y = _at_2(__SplVar5, 2);
      /* Statements */
      return [
        _hyphenMinus_2(
          _plusSign_2(_y, 1),
          _asterisk_2(_asterisk_2(_a, _x), _x),
        ),
        _asterisk_2(_b, _x),
      ];
    }, ["v"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\ty + 1 - (a * x * x),\n\t\t\t\tb * x\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "ikedaMap",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar6 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar6, 1);
      let _y = _at_2(__SplVar6, 2);
      let _t = _hyphenMinus_2(
        0.4,
        _solidus_2(
          6,
          _plusSign_2(_plusSign_2(1, _square_1(_x)), _square_1(_y)),
        ),
      );
      /* Statements */
      return [
        _plusSign_2(
          1,
          _asterisk_2(
            _u,
            _hyphenMinus_2(
              _asterisk_2(_x, _cos_1(_t)),
              _asterisk_2(_y, _sin_1(_t)),
            ),
          ),
        ),
        _asterisk_2(
          _u,
          _plusSign_2(_asterisk_2(_x, _sin_1(_t)), _asterisk_2(_y, _cos_1(_t))),
        ),
      ];
    }, ["v"]);
  }, ["u"]),
  "{ :u |\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\tlet t = 0.4 - (6 / (1 + x.square + y.square));\n\t\t\t[\n\t\t\t\t1 + (u * ((x * t.cos) - (y * t.sin))),\n\t\t\t\tu * ((x * t.sin) + (y * t.cos))\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "katsuraFukudaMap",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _asterisk_2(
        _asterisk_2(_asterisk_2(4, _x), _hyphenMinus_2(1, _x)),
        _hyphenMinus_2(1, _asterisk_2(_square_1(_k), _x)),
      );
      let _b = _square_1(
        _hyphenMinus_2(1, _asterisk_2(_square_1(_k), _square_1(_x))),
      );
      /* Statements */
      return _solidus_2(_a, _b);
    }, ["x"]);
  }, ["k"]),
  "{ :k |\n\t\t{ :x |\n\t\t\tlet a = 4 * x * (1 - x) * (1 - (k.square * x));\n\t\t\tlet b = (1 - (k.square * x.square)).square;\n\t\t\ta / b\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "logisticMap",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_asterisk_2(_r, _x), _hyphenMinus_2(1, _x));
    }, ["x"]);
  }, ["r"]),
  "{ :r |\n\t\t{ :x |\n\t\t\tr * x * (1 - x)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "martinMap",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar7 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar7, 1);
      let _y = _at_2(__SplVar7, 2);
      /* Statements */
      return [
        _hyphenMinus_2(
          _y,
          _asterisk_2(
            _sign_1(_x),
            _sqrt_1(_abs_1(_hyphenMinus_2(_asterisk_2(_b, _x), _c))),
          ),
        ),
        _hyphenMinus_2(_a, _x),
      ];
    }, ["v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\ty - (x.sign * (b * x - c).abs.sqrt),\n\t\t\t\ta - x\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "procacciaSchuster",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _percentSign_2(_plusSign_2(_x, _asterisk_2(_u, _square_1(_x))), 1);
    }, ["x"]);
  }, ["u"]),
  "{ :u |\n\t\t{ :x |\n\t\t\t(x + (u * x.square)) % 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "standardMap",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar8 = _assertIsOfSize_2(_v, 2);
      let _p = _at_2(__SplVar8, 1);
      let _theta = _at_2(__SplVar8, 2);
      let _pPrime = _percentSign_2(
        _plusSign_2(_p, _asterisk_2(_k, _sin_1(_theta))),
        _pi_1(2),
      );
      /* Statements */
      return [_pPrime, _percentSign_2(_plusSign_2(_theta, _pPrime), _pi_1(2))];
    }, ["v"]);
  }, ["k"]),
  "{ :k |\n\t\t{ :v |\n\t\t\tlet [p, theta] = v;\n\t\t\tlet pPrime = (p + (k * theta.sin)) % 2.pi;\n\t\t\t[pPrime, (theta + pPrime) % 2.pi]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IterativeMaps",
  "tentMap",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(_mu, _x);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(_mu, _hyphenMinus_2(1, _x));
        }, []),
      );
    }, ["x"]);
  }, ["mu"]),
  "{ :mu |\n\t\t{ :x |\n\t\t\t(x < 0.5).if {\n\t\t\t\tmu * x\n\t\t\t} {\n\t\t\t\tmu * (1 - x)\n\t\t\t}\n\t\t}\n\t}",
);
