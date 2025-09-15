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
      let __SPL1 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL1, 1);
      let _y = _at_2(__SPL1, 2);
      let _z = _at_2(__SPL1, 3);
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
  "{ :a :b :c :d :e :f | { :t :v | let __SPL1 = assertIsOfSize(v, 3); let x = at(__SPL1, 1); let y = at(__SPL1, 2); let z = at(__SPL1, 3); [-((*((-(z, b)), x)), (*(d, y))), +((*(d, x)), (*((-(z, b)), y))), +(-(-(+(c, (*(a, z))), (/(cube(z), 3))), (*((+(square(x), square(y))), (+(1, (*(e, z))))))), (*(*(f, z), cube(x))))] } }",
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
      let __SPL2 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL2, 1);
      let _y = _at_2(__SPL2, 2);
      let _z = _at_2(__SPL2, 3);
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
  "{ :a :b :c | { :t :v | let __SPL2 = assertIsOfSize(v, 3); let x = at(__SPL2, 1); let y = at(__SPL2, 2); let z = at(__SPL2, 3); [y, z, +(-(-(-(0, (*(a, x))), (*(b, y))), z), (*(c, cube(x))))] } }",
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
      let __SPL3 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL3, 1);
      let _y = _at_2(__SPL3, 2);
      let _z = _at_2(__SPL3, 3);
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
  "{ :a :b :c :d | { :t :v | let __SPL3 = assertIsOfSize(v, 3); let x = at(__SPL3, 1); let y = at(__SPL3, 2); let z = at(__SPL3, 3); [y, z, +(+(+((*(a, x)), (*(b, y))), (*(c, z))), (*(d, cube(x))))] } }",
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
      let __SPL4 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL4, 1);
      let _y = _at_2(__SPL4, 2);
      let _z = _at_2(__SPL4, 3);
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
  "{ :a :c :d :e :k :f | { :t :v | let __SPL4 = assertIsOfSize(v, 3); let x = at(__SPL4, 1); let y = at(__SPL4, 2); let z = at(__SPL4, 3); [+((*(a, (-(y, x)))), (*(*(d, x), z))), -(+((*(k, x)), (*(f, y))), (*(x, z))), -(+((*(c, z)), (*(x, y))), (*(*(e, x), x)))] } }",
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
    let __SPL5 = _assertIsOfSize_2(_l, 2);
    let _l1 = _at_2(__SPL5, 1);
    let _l2 = _at_2(__SPL5, 2);
    let __SPL6 = _assertIsOfSize_2(_m, 2);
    let _m1 = _at_2(__SPL6, 1);
    let _m2 = _at_2(__SPL6, 2);
    /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL7 = _assertIsOfSize_2(_v, 4);
      let _theta1 = _at_2(__SPL7, 1);
      let _omega1 = _at_2(__SPL7, 2);
      let _theta2 = _at_2(__SPL7, 3);
      let _omega2 = _at_2(__SPL7, 4);
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
  "{ :g :l :m | let __SPL5 = assertIsOfSize(l, 2); let l1 = at(__SPL5, 1); let l2 = at(__SPL5, 2); let __SPL6 = assertIsOfSize(m, 2); let m1 = at(__SPL6, 1); let m2 = at(__SPL6, 2); { :t :v | let __SPL7 = assertIsOfSize(v, 4); let theta1 = at(__SPL7, 1); let omega1 = at(__SPL7, 2); let theta2 = at(__SPL7, 3); let omega2 = at(__SPL7, 4); let a = *(*(g, (+((*(2, m1)), m2))), sin(theta1)); let b = *(*(g, m2), sin(-(theta1, (*(2, theta2))))); let c = *(*(*(*(2, m2), (^(omega2, 2))), l2), sin(-(theta1, theta2))); let d = *(*(*(m2, (^(omega1, 2))), l1), sin(*(2, (-(theta1, theta2))))); let e = -(+((*(2, m1)), m2), (*(m2, cos(*(2, (-(theta1, theta2))))))); let f = *(*((+(m1, m2)), (^(omega1, 2))), l1); let h = *(*(g, (+(m1, m2))), cos(theta1)); let i = *(*(*(m2, (^(omega2, 2))), l2), cos(-(theta1, theta2))); let j = *(2, sin(-(theta1, theta2))); [omega1, /((-(-(-(-(0, a), b), c), d)), (*(l1, e))), omega2, /((*((+(+(f, h), i)), j)), (*(l2, e)))] } }",
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
      let __SPL8 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL8, 1);
      let _y = _at_2(__SPL8, 2);
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
  "{ :gamma :delta :omega | { :t :v | let __SPL8 = assertIsOfSize(v, 2); let x = at(__SPL8, 1); let y = at(__SPL8, 2); [y, +(-(-(x, (^(x, 3))), (*(delta, y))), (*(gamma, cos((*(omega, t))))))] } }",
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
      let __SPL9 = _assertIsOfSize_2(_v, 4);
      let _x = _at_2(__SPL9, 1);
      let _y = _at_2(__SPL9, 2);
      let _px = _at_2(__SPL9, 3);
      let _py = _at_2(__SPL9, 4);
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
  "{ :lambda | { :t :v | let __SPL9 = assertIsOfSize(v, 4); let x = at(__SPL9, 1); let y = at(__SPL9, 2); let px = at(__SPL9, 3); let py = at(__SPL9, 4); [px, py, -(-(0, x), (*(*(*(lambda, 2), x), y))), -(-(0, y), (*(lambda, (-((*(x, x)), (*(y, y)))))))] } }",
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
      let __SPL10 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL10, 1);
      let _y = _at_2(__SPL10, 2);
      let _z = _at_2(__SPL10, 3);
      /* Statements */
      return [
        _asterisk_2(_sigma, _hyphenMinus_2(_y, _x)),
        _hyphenMinus_2(_asterisk_2(_x, _hyphenMinus_2(_rho, _z)), _y),
        _hyphenMinus_2(_asterisk_2(_x, _y), _asterisk_2(_beta, _z)),
      ];
    }, ["t", "v"]);
  }, ["rho", "sigma", "beta"]),
  "{ :rho :sigma :beta | { :t :v | let __SPL10 = assertIsOfSize(v, 3); let x = at(__SPL10, 1); let y = at(__SPL10, 2); let z = at(__SPL10, 3); [*(sigma, (-(y, x))), -(*(x, (-(rho, z))), y), -((*(x, y)), (*(beta, z)))] } }",
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
      let __SPL11 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL11, 1);
      let _y = _at_2(__SPL11, 2);
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
  "{ :alpha :beta :gamma :delta | { :t :v | let __SPL11 = assertIsOfSize(v, 2); let x = at(__SPL11, 1); let y = at(__SPL11, 2); [-((*(alpha, x)), (*(*(beta, x), y))), +(-(0, (*(gamma, y))), (*(*(delta, x), y)))] } }",
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
      let __SPL12 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL12, 1);
      let _y = _at_2(__SPL12, 2);
      let _z = _at_2(__SPL12, 3);
      /* Statements */
      return [
        _plusSign_2(_hyphenMinus_2(0, _y), _asterisk_2(_x, _z)),
        _x,
        _asterisk_2(_alpha, _hyphenMinus_2(_asterisk_2(_x, _x), 1)),
      ];
    }, ["t", "v"]);
  }, ["alpha"]),
  "{ :alpha | { :t :v | let __SPL12 = assertIsOfSize(v, 3); let x = at(__SPL12, 1); let y = at(__SPL12, 2); let z = at(__SPL12, 3); [+(-(0, y), (*(x, z))), x, *(alpha, (-((*(x, x)), 1)))] } }",
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
      let __SPL13 = _assertIsOfSize_2(_v, 2);
      let _theta1 = _at_2(__SPL13, 1);
      let _theta2 = _at_2(__SPL13, 2);
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
  "{ :g :l :m :b :a :k | { :t :v | let __SPL13 = assertIsOfSize(v, 2); let theta1 = at(__SPL13, 1); let theta2 = at(__SPL13, 2); let mll = *(*(m, l), l); let z1 = *(negate((/(g, l))), sin(theta1)); let z2 = -(z1, (*((/(b, mll)), theta2))); let z3 = +(z2, (*((/(a, mll)), cos(*(k, t))))); [theta2, z3] } }",
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
      let __SPL14 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL14, 1);
      let _y = _at_2(__SPL14, 2);
      let _z = _at_2(__SPL14, 3);
      /* Statements */
      return [
        _hyphenMinus_2(_hyphenMinus_2(0, _y), _z),
        _plusSign_2(_x, _asterisk_2(_a, _y)),
        _plusSign_2(_b, _asterisk_2(_z, _hyphenMinus_2(_x, _c))),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | { :t :v | let __SPL14 = assertIsOfSize(v, 3); let x = at(__SPL14, 1); let y = at(__SPL14, 2); let z = at(__SPL14, 3); [-(-(0, y), z), +(x, (*(a, y))), +(b, (*(z, (-(x, c)))))] } }",
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
      let __SPL15 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL15, 1);
      let _y = _at_2(__SPL15, 2);
      let _z = _at_2(__SPL15, 3);
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
  "{ :k :a | { :t :v | let __SPL15 = assertIsOfSize(v, 3); let x = at(__SPL15, 1); let y = at(__SPL15, 2); let z = at(__SPL15, 3); [-(+(-(0, (*(k, x))), (*(a, y))), (*(y, z))), x, +(-(0, z), (*(y, y)))] } }",
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
      let __SPL16 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL16, 1);
      let _y = _at_2(__SPL16, 2);
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
  "{ :mu | { :t :v | let __SPL16 = assertIsOfSize(v, 2); let x = at(__SPL16, 1); let y = at(__SPL16, 2); [y, -((*(*(mu, (-(1, (^(x, 2))))), y)), x)] } }",
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
  "{ :self:/2 :y0 :x0 :x1 :h | let x = x0; let y = y0; let vx = [x0]; let vy = [y0]; whileTrue({ <(x, x1) }, { x := +(x, h); y := +(y, (*(h, self(x, y)))); add(vx,x); add(vy,y) }); [vx, vy] }",
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
  "{ :self:/2 :y0 :x0 :x1 :h | let f:/2 = self:/2; let x = x0; let y = y0; let vx = [x0]; let vy = [y0]; whileTrue({ <(x, x1) }, { let k1 = *(h, f(x, y)); let k2 = *(h, f(+(x, (*(0.5, h))), +(y, (*(0.5, k1))))); let k3 = *(h, f(+(x, (*(0.5, h))), +(y, (*(0.5, k2))))); let k4 = *(h, f(+(x, h), +(y, k3))); x := +(x, h); y := +(y, (/((+(+(+(+(+(k1, k2), k2), k3), k3), k4)), 6))); add(vx,x); add(vy,y) }); [vx, vy] }",
);
