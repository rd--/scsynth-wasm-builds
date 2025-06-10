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
      let __SPL12 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL12, 1);
      let _y = _at_2(__SPL12, 2);
      let _z = _at_2(__SPL12, 3);
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
  "{ :a :b :c | { :t :v | let __SPL12 = assertIsOfSize(v, 3); let x = at(__SPL12, 1); let y = at(__SPL12, 2); let z = at(__SPL12, 3); [y, z, +(-(-(-(0, (*(a, x))), (*(b, y))), z), (*(c, cubed(x))))] } }",
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
      let __SPL13 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL13, 1);
      let _y = _at_2(__SPL13, 2);
      let _z = _at_2(__SPL13, 3);
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
  "{ :a :b :c :d | { :t :v | let __SPL13 = assertIsOfSize(v, 3); let x = at(__SPL13, 1); let y = at(__SPL13, 2); let z = at(__SPL13, 3); [y, z, +(+(+((*(a, x)), (*(b, y))), (*(c, z))), (*(d, cubed(x))))] } }",
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
      let __SPL14 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL14, 1);
      let _y = _at_2(__SPL14, 2);
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
  "{ :gamma :delta :omega | { :t :v | let __SPL14 = assertIsOfSize(v, 2); let x = at(__SPL14, 1); let y = at(__SPL14, 2); [y, +(-(-(x, (^(x, 3))), (*(delta, y))), (*(gamma, cos((*(omega, t))))))] } }",
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
      let __SPL15 = _assertIsOfSize_2(_v, 4);
      let _x = _at_2(__SPL15, 1);
      let _y = _at_2(__SPL15, 2);
      let _px = _at_2(__SPL15, 3);
      let _py = _at_2(__SPL15, 4);
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
  "{ :lambda | { :t :v | let __SPL15 = assertIsOfSize(v, 4); let x = at(__SPL15, 1); let y = at(__SPL15, 2); let px = at(__SPL15, 3); let py = at(__SPL15, 4); [px, py, -(-(0, x), (*(*(*(lambda, 2), x), y))), -(-(0, y), (*(lambda, (-((*(x, x)), (*(y, y)))))))] } }",
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
      let __SPL16 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL16, 1);
      let _y = _at_2(__SPL16, 2);
      let _z = _at_2(__SPL16, 3);
      /* Statements */
      return [
        _asterisk_2(_sigma, _hyphenMinus_2(_y, _x)),
        _hyphenMinus_2(_asterisk_2(_x, _hyphenMinus_2(_rho, _z)), _y),
        _hyphenMinus_2(_asterisk_2(_x, _y), _asterisk_2(_beta, _z)),
      ];
    }, ["t", "v"]);
  }, ["rho", "sigma", "beta"]),
  "{ :rho :sigma :beta | { :t :v | let __SPL16 = assertIsOfSize(v, 3); let x = at(__SPL16, 1); let y = at(__SPL16, 2); let z = at(__SPL16, 3); [*(sigma, (-(y, x))), -(*(x, (-(rho, z))), y), -((*(x, y)), (*(beta, z)))] } }",
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
      let __SPL17 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL17, 1);
      let _y = _at_2(__SPL17, 2);
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
  "{ :alpha :beta :gamma :delta | { :t :v | let __SPL17 = assertIsOfSize(v, 2); let x = at(__SPL17, 1); let y = at(__SPL17, 2); [-((*(alpha, x)), (*(*(beta, x), y))), +(-(0, (*(gamma, y))), (*(*(delta, x), y)))] } }",
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
      let __SPL18 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL18, 1);
      let _y = _at_2(__SPL18, 2);
      let _z = _at_2(__SPL18, 3);
      /* Statements */
      return [
        _hyphenMinus_2(_hyphenMinus_2(0, _y), _z),
        _plusSign_2(_x, _asterisk_2(_a, _y)),
        _plusSign_2(_b, _asterisk_2(_z, _hyphenMinus_2(_x, _c))),
      ];
    }, ["t", "v"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | { :t :v | let __SPL18 = assertIsOfSize(v, 3); let x = at(__SPL18, 1); let y = at(__SPL18, 2); let z = at(__SPL18, 3); [-(-(0, y), z), +(x, (*(a, y))), +(b, (*(z, (-(x, c)))))] } }",
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
      let __SPL19 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL19, 1);
      let _y = _at_2(__SPL19, 2);
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
  "{ :mu | { :t :v | let __SPL19 = assertIsOfSize(v, 2); let x = at(__SPL19, 1); let y = at(__SPL19, 2); [y, -((*(*(mu, (-(1, (^(x, 2))))), y)), x)] } }",
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
