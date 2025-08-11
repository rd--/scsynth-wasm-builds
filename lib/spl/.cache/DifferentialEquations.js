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
      let __SPL303 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL303, 1);
      let _y = _at_2(__SPL303, 2);
      let _z = _at_2(__SPL303, 3);
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
              _solidus_2(_cubed_1(_z), 3),
            ),
            _asterisk_2(
              _plusSign_2(_squared_1(_x), _squared_1(_y)),
              _plusSign_2(1, _asterisk_2(_e, _z)),
            ),
          ),
          _asterisk_2(_asterisk_2(_f, _z), _cubed_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c", "d", "e", "f"]),
  "{ :a :b :c :d :e :f | { :t :v | let __SPL303 = assertIsOfSize(v, 3); let x = at(__SPL303, 1); let y = at(__SPL303, 2); let z = at(__SPL303, 3); [-((*((-(z, b)), x)), (*(d, y))), +((*(d, x)), (*((-(z, b)), y))), +(-(-(+(c, (*(a, z))), (/(cubed(z), 3))), (*((+(squared(x), squared(y))), (+(1, (*(e, z))))))), (*(*(f, z), cubed(x))))] } }",
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
      let __SPL304 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL304, 1);
      let _y = _at_2(__SPL304, 2);
      let _z = _at_2(__SPL304, 3);
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
          _asterisk_2(_c, _cubed_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | { :t :v | let __SPL304 = assertIsOfSize(v, 3); let x = at(__SPL304, 1); let y = at(__SPL304, 2); let z = at(__SPL304, 3); [y, z, +(-(-(-(0, (*(a, x))), (*(b, y))), z), (*(c, cubed(x))))] } }",
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
      let __SPL305 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL305, 1);
      let _y = _at_2(__SPL305, 2);
      let _z = _at_2(__SPL305, 3);
      /* Statements */
      return [
        _y,
        _z,
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
            _asterisk_2(_c, _z),
          ),
          _asterisk_2(_d, _cubed_1(_x)),
        ),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d | { :t :v | let __SPL305 = assertIsOfSize(v, 3); let x = at(__SPL305, 1); let y = at(__SPL305, 2); let z = at(__SPL305, 3); [y, z, +(+(+((*(a, x)), (*(b, y))), (*(c, z))), (*(d, cubed(x))))] } }",
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
      let __SPL306 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL306, 1);
      let _y = _at_2(__SPL306, 2);
      let _z = _at_2(__SPL306, 3);
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
  "{ :a :c :d :e :k :f | { :t :v | let __SPL306 = assertIsOfSize(v, 3); let x = at(__SPL306, 1); let y = at(__SPL306, 2); let z = at(__SPL306, 3); [+((*(a, (-(y, x)))), (*(*(d, x), z))), -(+((*(k, x)), (*(f, y))), (*(x, z))), -(+((*(c, z)), (*(x, y))), (*(*(e, x), x)))] } }",
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
    let __SPL307 = _assertIsOfSize_2(_l, 2);
    let _l1 = _at_2(__SPL307, 1);
    let _l2 = _at_2(__SPL307, 2);
    let __SPL308 = _assertIsOfSize_2(_m, 2);
    let _m1 = _at_2(__SPL308, 1);
    let _m2 = _at_2(__SPL308, 2);
    /* Statements */
    return sl.annotateFunction(function (_t, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _v";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL309 = _assertIsOfSize_2(_v, 4);
      let _theta1 = _at_2(__SPL309, 1);
      let _omega1 = _at_2(__SPL309, 2);
      let _theta2 = _at_2(__SPL309, 3);
      let _omega2 = _at_2(__SPL309, 4);
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
  "{ :g :l :m | let __SPL307 = assertIsOfSize(l, 2); let l1 = at(__SPL307, 1); let l2 = at(__SPL307, 2); let __SPL308 = assertIsOfSize(m, 2); let m1 = at(__SPL308, 1); let m2 = at(__SPL308, 2); { :t :v | let __SPL309 = assertIsOfSize(v, 4); let theta1 = at(__SPL309, 1); let omega1 = at(__SPL309, 2); let theta2 = at(__SPL309, 3); let omega2 = at(__SPL309, 4); let a = *(*(g, (+((*(2, m1)), m2))), sin(theta1)); let b = *(*(g, m2), sin(-(theta1, (*(2, theta2))))); let c = *(*(*(*(2, m2), (^(omega2, 2))), l2), sin(-(theta1, theta2))); let d = *(*(*(m2, (^(omega1, 2))), l1), sin(*(2, (-(theta1, theta2))))); let e = -(+((*(2, m1)), m2), (*(m2, cos(*(2, (-(theta1, theta2))))))); let f = *(*((+(m1, m2)), (^(omega1, 2))), l1); let h = *(*(g, (+(m1, m2))), cos(theta1)); let i = *(*(*(m2, (^(omega2, 2))), l2), cos(-(theta1, theta2))); let j = *(2, sin(-(theta1, theta2))); [omega1, /((-(-(-(-(0, a), b), c), d)), (*(l1, e))), omega2, /((*((+(+(f, h), i)), j)), (*(l2, e)))] } }",
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
      let __SPL310 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL310, 1);
      let _y = _at_2(__SPL310, 2);
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
  "{ :gamma :delta :omega | { :t :v | let __SPL310 = assertIsOfSize(v, 2); let x = at(__SPL310, 1); let y = at(__SPL310, 2); [y, +(-(-(x, (^(x, 3))), (*(delta, y))), (*(gamma, cos((*(omega, t))))))] } }",
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
      let __SPL311 = _assertIsOfSize_2(_v, 4);
      let _x = _at_2(__SPL311, 1);
      let _y = _at_2(__SPL311, 2);
      let _px = _at_2(__SPL311, 3);
      let _py = _at_2(__SPL311, 4);
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
  "{ :lambda | { :t :v | let __SPL311 = assertIsOfSize(v, 4); let x = at(__SPL311, 1); let y = at(__SPL311, 2); let px = at(__SPL311, 3); let py = at(__SPL311, 4); [px, py, -(-(0, x), (*(*(*(lambda, 2), x), y))), -(-(0, y), (*(lambda, (-((*(x, x)), (*(y, y)))))))] } }",
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
      let __SPL312 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL312, 1);
      let _y = _at_2(__SPL312, 2);
      let _z = _at_2(__SPL312, 3);
      /* Statements */
      return [
        _asterisk_2(_sigma, _hyphenMinus_2(_y, _x)),
        _hyphenMinus_2(_asterisk_2(_x, _hyphenMinus_2(_rho, _z)), _y),
        _hyphenMinus_2(_asterisk_2(_x, _y), _asterisk_2(_beta, _z)),
      ];
    }, ["t", "v"]);
  }, ["rho", "sigma", "beta"]),
  "{ :rho :sigma :beta | { :t :v | let __SPL312 = assertIsOfSize(v, 3); let x = at(__SPL312, 1); let y = at(__SPL312, 2); let z = at(__SPL312, 3); [*(sigma, (-(y, x))), -(*(x, (-(rho, z))), y), -((*(x, y)), (*(beta, z)))] } }",
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
      let __SPL313 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL313, 1);
      let _y = _at_2(__SPL313, 2);
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
  "{ :alpha :beta :gamma :delta | { :t :v | let __SPL313 = assertIsOfSize(v, 2); let x = at(__SPL313, 1); let y = at(__SPL313, 2); [-((*(alpha, x)), (*(*(beta, x), y))), +(-(0, (*(gamma, y))), (*(*(delta, x), y)))] } }",
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
      let __SPL314 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL314, 1);
      let _y = _at_2(__SPL314, 2);
      let _z = _at_2(__SPL314, 3);
      /* Statements */
      return [
        _plusSign_2(_hyphenMinus_2(0, _y), _asterisk_2(_x, _z)),
        _x,
        _asterisk_2(_alpha, _hyphenMinus_2(_asterisk_2(_x, _x), 1)),
      ];
    }, ["t", "v"]);
  }, ["alpha"]),
  "{ :alpha | { :t :v | let __SPL314 = assertIsOfSize(v, 3); let x = at(__SPL314, 1); let y = at(__SPL314, 2); let z = at(__SPL314, 3); [+(-(0, y), (*(x, z))), x, *(alpha, (-((*(x, x)), 1)))] } }",
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
      let __SPL315 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL315, 1);
      let _y = _at_2(__SPL315, 2);
      let _z = _at_2(__SPL315, 3);
      /* Statements */
      return [
        _hyphenMinus_2(_hyphenMinus_2(0, _y), _z),
        _plusSign_2(_x, _asterisk_2(_a, _y)),
        _plusSign_2(_b, _asterisk_2(_z, _hyphenMinus_2(_x, _c))),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | { :t :v | let __SPL315 = assertIsOfSize(v, 3); let x = at(__SPL315, 1); let y = at(__SPL315, 2); let z = at(__SPL315, 3); [-(-(0, y), z), +(x, (*(a, y))), +(b, (*(z, (-(x, c)))))] } }",
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
      let __SPL316 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL316, 1);
      let _y = _at_2(__SPL316, 2);
      let _z = _at_2(__SPL316, 3);
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
  "{ :k :a | { :t :v | let __SPL316 = assertIsOfSize(v, 3); let x = at(__SPL316, 1); let y = at(__SPL316, 2); let z = at(__SPL316, 3); [-(+(-(0, (*(k, x))), (*(a, y))), (*(y, z))), x, +(-(0, z), (*(y, y)))] } }",
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
      let __SPL317 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL317, 1);
      let _y = _at_2(__SPL317, 2);
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
  "{ :mu | { :t :v | let __SPL317 = assertIsOfSize(v, 2); let x = at(__SPL317, 1); let y = at(__SPL317, 2); [y, -((*(*(mu, (-(1, (^(x, 2))))), y)), x)] } }",
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
