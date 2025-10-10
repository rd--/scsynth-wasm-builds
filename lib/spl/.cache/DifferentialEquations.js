sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "aizawaEquation",
  ["a", "b", "c", "d", "e", "f"],
  sl.annotateFunction(function (_a, _b, _c, _d, _e, _f) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _b, _c, _d, _e, _f";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar1, 1);
      let _y = _at_2(__SplVar1, 2);
      let _z = _at_2(__SplVar1, 3);
      /* Statements */
      return [
        _hyphenMinus_2(
          _asterisk_2(_hyphenMinus_2(_z, _b), _x),
          _asterisk_2(_d, _y),
        ),
        _plusSign_2(
          _asterisk_2(_d, _x),
          _asterisk_2(_hyphenMinus_2(_z, _b), _y),
        ),
        _plusSign_2(
          _hyphenMinus_2(
            _hyphenMinus_2(
              _plusSign_2(_c, _asterisk_2(_a, _z)),
              _solidus_2(_cube_1(_z), 3),
            ),
            _asterisk_2(
              _plusSign_2(_square_1(_x), _square_1(_y)),
              _plusSign_2(1, _asterisk_2(_e, _z)),
            ),
          ),
          _asterisk_2(_asterisk_2(_f, _z), _cube_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c", "d", "e", "f"]),
  "{ :a :b :c :d :e :f |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\t((z - b) * x) - (d * y),\n\t\t\t\t(d * x) + ((z - b) * y),\n\t\t\t\tc + (a * z) - (z.cube / 3) - ((x.square + y.square) * (1 + (e * z))) + (f * z * x.cube)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "arneodoEquation",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar2 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar2, 1);
      let _y = _at_2(__SplVar2, 2);
      let _z = _at_2(__SplVar2, 3);
      /* Statements */
      return [
        _y,
        _z,
        _plusSign_2(
          _hyphenMinus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(0, _asterisk_2(_a, _x)),
              _asterisk_2(_b, _y),
            ),
            _z,
          ),
          _asterisk_2(_c, _cube_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\t0 - (a * x) - (b * y) - z + (c * x.cube)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "coulletEquation",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar3 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar3, 1);
      let _y = _at_2(__SplVar3, 2);
      let _z = _at_2(__SplVar3, 3);
      /* Statements */
      return [
        _y,
        _z,
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
            _asterisk_2(_c, _z),
          ),
          _asterisk_2(_d, _cube_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\t(a * x) + (b * y) + (c * z) + (d * x.cube)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "dequanLiEquation",
  ["a", "c", "d", "e", "k", "f"],
  sl.annotateFunction(function (_a, _c, _d, _e, _k, _f) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _c, _d, _e, _k, _f";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar4 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar4, 1);
      let _y = _at_2(__SplVar4, 2);
      let _z = _at_2(__SplVar4, 3);
      /* Statements */
      return [
        _plusSign_2(
          _asterisk_2(_a, _hyphenMinus_2(_y, _x)),
          _asterisk_2(_asterisk_2(_d, _x), _z),
        ),
        _hyphenMinus_2(
          _plusSign_2(_asterisk_2(_k, _x), _asterisk_2(_f, _y)),
          _asterisk_2(_x, _z),
        ),
        _hyphenMinus_2(
          _plusSign_2(_asterisk_2(_c, _z), _asterisk_2(_x, _y)),
          _asterisk_2(_asterisk_2(_e, _x), _x),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "c", "d", "e", "k", "f"]),
  "{ :a :c :d :e :k :f |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\t(a * (y - x)) + (d * x * z),\n\t\t\t\t(k * x) + (f * y) - (x * z),\n\t\t\t\t(c * z) + (x * y) - (e * x * x)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "doublePendulumEquation",
  ["g", "l", "m"],
  sl.annotateFunction(function (_g, _l, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g, _l, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_l, 2);
    let _l1 = _at_2(__SplVar5, 1);
    let _l2 = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_m, 2);
    let _m1 = _at_2(__SplVar6, 1);
    let _m2 = _at_2(__SplVar6, 2);
    /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar7 = _assertIsOfSize_2(_v, 4);
      let _theta1 = _at_2(__SplVar7, 1);
      let _omega1 = _at_2(__SplVar7, 2);
      let _theta2 = _at_2(__SplVar7, 3);
      let _omega2 = _at_2(__SplVar7, 4);
      let _a = _asterisk_2(
        _asterisk_2(_g, _plusSign_2(_asterisk_2(2, _m1), _m2)),
        _sin_1(_theta1),
      );
      let _b = _asterisk_2(
        _asterisk_2(_g, _m2),
        _sin_1(_hyphenMinus_2(_theta1, _asterisk_2(2, _theta2))),
      );
      let _c = _asterisk_2(
        _asterisk_2(
          _asterisk_2(_asterisk_2(2, _m2), _circumflexAccent_2(_omega2, 2)),
          _l2,
        ),
        _sin_1(_hyphenMinus_2(_theta1, _theta2)),
      );
      let _d = _asterisk_2(
        _asterisk_2(_asterisk_2(_m2, _circumflexAccent_2(_omega1, 2)), _l1),
        _sin_1(_asterisk_2(2, _hyphenMinus_2(_theta1, _theta2))),
      );
      let _e = _hyphenMinus_2(
        _plusSign_2(_asterisk_2(2, _m1), _m2),
        _asterisk_2(
          _m2,
          _cos_1(_asterisk_2(2, _hyphenMinus_2(_theta1, _theta2))),
        ),
      );
      let _f = _asterisk_2(
        _asterisk_2(_plusSign_2(_m1, _m2), _circumflexAccent_2(_omega1, 2)),
        _l1,
      );
      let _h = _asterisk_2(
        _asterisk_2(_g, _plusSign_2(_m1, _m2)),
        _cos_1(_theta1),
      );
      let _i = _asterisk_2(
        _asterisk_2(_asterisk_2(_m2, _circumflexAccent_2(_omega2, 2)), _l2),
        _cos_1(_hyphenMinus_2(_theta1, _theta2)),
      );
      let _j = _asterisk_2(2, _sin_1(_hyphenMinus_2(_theta1, _theta2)));
      /* Statements */
      return [
        _omega1,
        _solidus_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_hyphenMinus_2(_hyphenMinus_2(0, _a), _b), _c),
            _d,
          ),
          _asterisk_2(_l1, _e),
        ),
        _omega2,
        _solidus_2(
          _asterisk_2(_plusSign_2(_plusSign_2(_f, _h), _i), _j),
          _asterisk_2(_l2, _e),
        ),
      ];
    }, ["t", "v"]);
  }, ["g", "l", "m"]),
  "{ :g :l :m |\n\t\t/* https://github.com/myphysicslab/myphysicslab/blob/master/src/sims/pendulum/DoublePendulumSim.ts */\n\t\tlet [l1, l2] = l;\n\t\tlet [m1, m2] = m;\n\t\t{ :t :v |\n\t\t\tlet [theta1, omega1, theta2, omega2] = v;\n\t\t\tlet a = g * ((2 * m1) + m2) * sin(theta1);\n\t\t\tlet b = g * m2 * sin(theta1 - (2 * theta2));\n\t\t\tlet c = 2 * m2 * (omega2 ^ 2) * l2 * sin(theta1 - theta2);\n\t\t\tlet d = m2 * (omega1 ^ 2) * l1 * sin(2 * (theta1 - theta2));\n\t\t\tlet e = (2 * m1) + m2 - (m2 * cos(2 * (theta1 - theta2)));\n\t\t\tlet f = (m1 + m2) * (omega1 ^ 2) * l1;\n\t\t\tlet h = g * (m1 + m2) * cos(theta1);\n\t\t\tlet i = m2 * (omega2 ^ 2) * l2 * cos(theta1 - theta2);\n\t\t\tlet j = 2 * sin(theta1 - theta2);\n\t\t\t[\n\t\t\t\tomega1,\n\t\t\t\t(0 - a - b - c - d) / (l1 * e),\n\t\t\t\tomega2,\n\t\t\t\t((f + h + i) * j) / (l2 * e)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "duffingEquation",
  ["gamma", "delta", "omega"],
  sl.annotateFunction(function (_gamma, _delta, _omega) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gamma, _delta, _omega";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar8 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar8, 1);
      let _y = _at_2(__SplVar8, 2);
      /* Statements */
      return [
        _y,
        _plusSign_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_x, _circumflexAccent_2(_x, 3)),
            _asterisk_2(_delta, _y),
          ),
          _asterisk_2(_gamma, _cos_1(_asterisk_2(_omega, _t))),
        ),
      ];
    }, ["t", "v"]);
  }, ["gamma", "delta", "omega"]),
  "{ :gamma :delta :omega |\n\t\t{ :t :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\ty,\n\t\t\t\tx - (x ^ 3) - (delta * y) + (gamma * (omega * t).cos)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "henonHeilesEquation",
  ["lambda"],
  sl.annotateFunction(function (_lambda) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar9 = _assertIsOfSize_2(_v, 4);
      let _x = _at_2(__SplVar9, 1);
      let _y = _at_2(__SplVar9, 2);
      let _px = _at_2(__SplVar9, 3);
      let _py = _at_2(__SplVar9, 4);
      /* Statements */
      return [
        _px,
        _py,
        _hyphenMinus_2(
          _hyphenMinus_2(0, _x),
          _asterisk_2(_asterisk_2(_asterisk_2(_lambda, 2), _x), _y),
        ),
        _hyphenMinus_2(
          _hyphenMinus_2(0, _y),
          _asterisk_2(
            _lambda,
            _hyphenMinus_2(_asterisk_2(_x, _x), _asterisk_2(_y, _y)),
          ),
        ),
      ];
    }, ["t", "v"]);
  }, ["lambda"]),
  "{ :lambda |\n\t\t{ :t :v |\n\t\t\tlet [x, y, px, py] = v;\n\t\t\t[\n\t\t\t\tpx,\n\t\t\t\tpy,\n\t\t\t\t0 - x - (lambda * 2 * x * y),\n\t\t\t\t0 - y - (lambda * ((x * x) - (y * y)))\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "lorenzEquation",
  ["rho", "sigma", "beta"],
  sl.annotateFunction(function (_rho, _sigma, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rho, _sigma, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar10 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar10, 1);
      let _y = _at_2(__SplVar10, 2);
      let _z = _at_2(__SplVar10, 3);
      /* Statements */
      return [
        _asterisk_2(_sigma, _hyphenMinus_2(_y, _x)),
        _hyphenMinus_2(_asterisk_2(_x, _hyphenMinus_2(_rho, _z)), _y),
        _hyphenMinus_2(_asterisk_2(_x, _y), _asterisk_2(_beta, _z)),
      ];
    }, ["t", "v"]);
  }, ["rho", "sigma", "beta"]),
  "{ :rho :sigma :beta |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\tsigma * (y - x),\n\t\t\t\tx * (rho - z) - y,\n\t\t\t\t(x * y) - (beta * z)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "lotkaVolterraEquations",
  ["alpha", "beta", "gamma", "delta"],
  sl.annotateFunction(function (_alpha, _beta, _gamma, _delta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _alpha, _beta, _gamma, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar11 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar11, 1);
      let _y = _at_2(__SplVar11, 2);
      /* Statements */
      return [
        _hyphenMinus_2(
          _asterisk_2(_alpha, _x),
          _asterisk_2(_asterisk_2(_beta, _x), _y),
        ),
        _plusSign_2(
          _hyphenMinus_2(0, _asterisk_2(_gamma, _y)),
          _asterisk_2(_asterisk_2(_delta, _x), _y),
        ),
      ];
    }, ["t", "v"]);
  }, ["alpha", "beta", "gamma", "delta"]),
  "{ :alpha :beta :gamma :delta |\n\t\t{ :t :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\t(alpha * x) - (beta * x * y),\n\t\t\t\t0 - (gamma * y) + (delta * x * y)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "noseHooverEquation",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar12 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar12, 1);
      let _y = _at_2(__SplVar12, 2);
      let _z = _at_2(__SplVar12, 3);
      /* Statements */
      return [
        _plusSign_2(_hyphenMinus_2(0, _y), _asterisk_2(_x, _z)),
        _x,
        _asterisk_2(_alpha, _hyphenMinus_2(_asterisk_2(_x, _x), 1)),
      ];
    }, ["t", "v"]);
  }, ["alpha"]),
  "{ :alpha |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\t0 - y + (x * z),\n\t\t\t\tx,\n\t\t\t\talpha * ((x * x) - 1)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "pendulumEquation",
  ["g", "l", "m", "b", "a", "k"],
  sl.annotateFunction(function (_g, _l, _m, _b, _a, _k) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _g, _l, _m, _b, _a, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar13 = _assertIsOfSize_2(_v, 2);
      let _theta1 = _at_2(__SplVar13, 1);
      let _theta2 = _at_2(__SplVar13, 2);
      let _mll = _asterisk_2(_asterisk_2(_m, _l), _l);
      let _z1 = _asterisk_2(_negate_1(_solidus_2(_g, _l)), _sin_1(_theta1));
      let _z2 = _hyphenMinus_2(_z1, _asterisk_2(_solidus_2(_b, _mll), _theta2));
      let _z3 = _plusSign_2(
        _z2,
        _asterisk_2(_solidus_2(_a, _mll), _cos_1(_asterisk_2(_k, _t))),
      );
      /* Statements */
      return [_theta2, _z3];
    }, ["t", "v"]);
  }, ["g", "l", "m", "b", "a", "k"]),
  "{ :g :l :m :b :a :k |\n\t\t/* https://github.com/myphysicslab/myphysicslab/blob/master/src/sims/pendulum/PendulumSim.ts */\n\t\t{ :t :v |\n\t\t\tlet [theta1, theta2] = v;\n\t\t\tlet mll = m * l * l;\n\t\t\tlet z1 = (g / l).negate * sin(theta1);\n\t\t\tlet z2 = z1 - ((b / mll) * theta2);\n\t\t\tlet z3 = z2 + ((a / mll) * cos(k * t));\n\t\t\t[\n\t\t\t\ttheta2,\n\t\t\t\tz3\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "rosslerEquation",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar14 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar14, 1);
      let _y = _at_2(__SplVar14, 2);
      let _z = _at_2(__SplVar14, 3);
      /* Statements */
      return [
        _hyphenMinus_2(_hyphenMinus_2(0, _y), _z),
        _plusSign_2(_x, _asterisk_2(_a, _y)),
        _plusSign_2(_b, _asterisk_2(_z, _hyphenMinus_2(_x, _c))),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\t0 - y - z,\n\t\t\t\tx + (a * y),\n\t\t\t\tb + (z * (x - c))\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "rucklidgeEquation",
  ["k", "a"],
  sl.annotateFunction(function (_k, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar15 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SplVar15, 1);
      let _y = _at_2(__SplVar15, 2);
      let _z = _at_2(__SplVar15, 3);
      /* Statements */
      return [
        _hyphenMinus_2(
          _plusSign_2(
            _hyphenMinus_2(0, _asterisk_2(_k, _x)),
            _asterisk_2(_a, _y),
          ),
          _asterisk_2(_y, _z),
        ),
        _x,
        _plusSign_2(_hyphenMinus_2(0, _z), _asterisk_2(_y, _y)),
      ];
    }, ["t", "v"]);
  }, ["k", "a"]),
  "{ :k :a |\n\t\t{ :t :v |\n\t\t\tlet [x, y, z] = v;\n\t\t\t[\n\t\t\t\t0 - (k * x) + (a * y) - (y * z),\n\t\t\t\tx,\n\t\t\t\t0 - z + (y * y)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DifferentialEquations",
  "vanDerPolEquation",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar16 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SplVar16, 1);
      let _y = _at_2(__SplVar16, 2);
      /* Statements */
      return [
        _y,
        _hyphenMinus_2(
          _asterisk_2(
            _asterisk_2(_mu, _hyphenMinus_2(1, _circumflexAccent_2(_x, 2))),
            _y,
          ),
          _x,
        ),
      ];
    }, ["t", "v"]);
  }, ["mu"]),
  "{ :mu |\n\t\t{ :t :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[\n\t\t\t\ty,\n\t\t\t\t(mu * (1 - (x ^ 2)) * y) - x\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "DifferentialEquations",
  "eulerMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  sl.annotateFunction(function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _x0;
    let _y = _y0;
    let _vx = [_x0];
    let _vy = [_y0];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_x, _x1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _plusSign_2(_x, _h);
        _y = _plusSign_2(_y, _asterisk_2(_h, _self_2(_x, _y)));
        _add_2(_vx, _x);
        return _add_2(_vy, _y);
      }, []),
    );
    return [_vx, _vy];
  }, ["self:/2", "y0", "x0", "x1", "h"]),
  "{ :self:/2 :y0 :x0 :x1 :h |\n\t\tlet x = x0;\n\t\tlet y = y0;\n\t\tlet vx = [x0];\n\t\tlet vy = [y0];\n\t\t{\n\t\t\tx < x1\n\t\t}.whileTrue {\n\t\t\tx := x + h;\n\t\t\ty := y + (h * self(x, y));\n\t\t\tvx.add(x);\n\t\t\tvy.add(y)\n\t\t};\n\t\t[vx, vy]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "DifferentialEquations",
  "rungeKuttaMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  sl.annotateFunction(function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _self_2;
    let _x = _x0;
    let _y = _y0;
    let _vx = [_x0];
    let _vy = [_y0];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_x, _x1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k1 = _asterisk_2(_h, _f_2(_x, _y));
        let _k2 = _asterisk_2(
          _h,
          _f_2(
            _plusSign_2(_x, _asterisk_2(0.5, _h)),
            _plusSign_2(_y, _asterisk_2(0.5, _k1)),
          ),
        );
        let _k3 = _asterisk_2(
          _h,
          _f_2(
            _plusSign_2(_x, _asterisk_2(0.5, _h)),
            _plusSign_2(_y, _asterisk_2(0.5, _k2)),
          ),
        );
        let _k4 = _asterisk_2(
          _h,
          _f_2(_plusSign_2(_x, _h), _plusSign_2(_y, _k3)),
        );
        /* Statements */
        _x = _plusSign_2(_x, _h);
        _y = _plusSign_2(
          _y,
          _solidus_2(
            _plusSign_2(
              _plusSign_2(
                _plusSign_2(_plusSign_2(_plusSign_2(_k1, _k2), _k2), _k3),
                _k3,
              ),
              _k4,
            ),
            6,
          ),
        );
        _add_2(_vx, _x);
        return _add_2(_vy, _y);
      }, []),
    );
    return [_vx, _vy];
  }, ["self:/2", "y0", "x0", "x1", "h"]),
  "{ :self:/2 :y0 :x0 :x1 :h |\n\t\tlet f:/2 = self:/2;\n\t\tlet x = x0;\n\t\tlet y = y0;\n\t\tlet vx = [x0];\n\t\tlet vy = [y0];\n\t\t{\n\t\t\tx < x1\n\t\t}.whileTrue {\n\t\t\tlet k1 = h * f(x, y);\n\t\t\tlet k2 = h * f(x + (0.5 * h), y + (0.5 * k1));\n\t\t\tlet k3 = h * f(x + (0.5 * h), y + (0.5 * k2));\n\t\t\tlet k4 = h * f(x + h, y + k3);\n\t\t\tx := x + h;\n\t\t\ty := y + ((k1 + k2 + k2 + k3 + k3 + k4) / 6);\n\t\t\tvx.add(x);\n\t\t\tvy.add(y)\n\t\t};\n\t\t[vx, vy]\n\t}",
);
