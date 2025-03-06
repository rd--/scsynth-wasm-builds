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
      let __SPL1 = _assertIsOfSize_2(_v, 3);
      let _x = _at_2(__SPL1, 1);
      let _y = _at_2(__SPL1, 2);
      let _z = _at_2(__SPL1, 3);
      /* Statements */
      return [
        _asterisk_2(_sigma, _hyphenMinus_2(_y, _x)),
        _hyphenMinus_2(_asterisk_2(_x, _hyphenMinus_2(_rho, _z)), _y),
        _hyphenMinus_2(_asterisk_2(_x, _y), _asterisk_2(_beta, _z)),
      ];
    }, ["t", "v"]);
  }, ["rho", "sigma", "beta"]),
  "{ :rho :sigma :beta | { :t :v | let __SPL1 = assertIsOfSize(v, 3); let x = at(__SPL1, 1); let y = at(__SPL1, 2); let z = at(__SPL1, 3); [*(sigma, (-(y, x))), -(*(x, (-(rho, z))), y), -((*(x, y)), (*(beta, z)))] } }",
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
      let __SPL2 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL2, 1);
      let _y = _at_2(__SPL2, 2);
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
  "{ :gamma :delta :omega | { :t :v | let __SPL2 = assertIsOfSize(v, 2); let x = at(__SPL2, 1); let y = at(__SPL2, 2); [y, +(-(-(x, (^(x, 3))), (*(delta, y))), (*(gamma, cos(*(omega, t)))))] } }",
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
      let __SPL3 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL3, 1);
      let _y = _at_2(__SPL3, 2);
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
  "{ :mu | { :t :v | let __SPL3 = assertIsOfSize(v, 2); let x = at(__SPL3, 1); let y = at(__SPL3, 2); [y, -((*(*(mu, (-(1, (^(x, 2))))), y)), x)] } }",
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
