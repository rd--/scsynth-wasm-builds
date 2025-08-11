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
  "{ :a :n | { :theta | let r = *(a, (^(theta, (/(1, n))))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :c :d | { :theta | let r = +(1, (*(d, sin((*(c, theta)))))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :t | let a = exp(cos(t)); let b = *(2, cos((*(4, t)))); let c = ^(sin((/(t, 12))), 5); *([sin(t), cos(t)], (-(-(a, b), c))) }",
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
  "{ :a | catenaryCurve(a, a) }",
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
  "{ :a :b | { :theta | [theta, *(b, cosh((/(theta, a))))] } }",
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
    let _a = _cubed_1(_cos_1(_t));
    let _x = _asterisk_2(_a, _cos_1(_asterisk_2(3, _t)));
    let _y = _asterisk_2(_a, _sin_1(_asterisk_2(3, _t)));
    /* Statements */
    return [_x, _y];
  }, ["t"]),
  "{ :t | let a = cubed(cos(t)); let x = *(a, cos((*(3, t)))); let y = *(a, sin((*(3, t)))); [x, y] }",
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
  "{ :a | { :theta | let t = tan(theta); let x = /(*(*(2, a), (^(t, 2))), (+(1, (^(t, 2))))); let y = *(t, x); [x, y] } }",
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
  "{ :r :c | { :theta | [*(*(r, cos(theta)), cos((*(c, theta)))), *(*(r, cos(theta)), sin((*(c, theta)))), *(r, sin(theta))] } }",
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
  "{ :a | { :theta | if((=(theta, 0)), { [1, 0] }, { let r = /((*(a, sin(theta))), theta); fromPolarCoordinates([r, theta]) }) } }",
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
  "{ :a :b | epitrochoid(a, b, b) }",
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
  "{ :a :b :h | { :theta | let p = +(a, b); let q = /(p, b); [-((*(p, cos(theta))), (*(h, cos((*(q, theta)))))), -((*(p, sin(theta))), (*(h, sin((*(q, theta))))))] } }",
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
  "{ :theta | [fresnelC(theta), fresnelS(theta)] }",
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
        _plusSign_2(_cubed_1(_sin_1(_theta)), _cubed_1(_cos_1(_theta))),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let r = /((*(*(*(3, a), sin(theta)), cos(theta))), (+(cubed(sin(theta)), cubed(cos(theta))))); fromPolarCoordinates([r, theta]) } }",
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
      let _rho = _hyphenMinus_2(_asterisk_2(_b, _squared_1(_theta)), _a);
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b | { :theta | let rho = -((*(b, squared(theta))), a); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :a :b | { :theta | let r = *(2, real(sqrt((-(a, (*(b, (^(sin(theta), 2))))))))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :a :b | hypotrochoid(a, b, b) }",
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
  "{ :a :b :h | let c = -(a, b); let d = /(c, b); { :t | [+((*(c, cos(t))), (*(h, cos((*(t, d)))))), -((*(c, sin(t))), (*(h, sin((*(t, d))))))] } }",
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
      let _rho = _asterisk_2(_a, _squared_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_asterisk_2(2, _t), _tan_1(_t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | let rho = *(a, squared(cos(t))); let theta = -((*(2, t)), tan(t)); fromPolarCoordinates([rho, theta]) } }",
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
      let _u = _plusSign_2(1, _squared_1(_sin_1(_theta)));
      let _x = _solidus_2(_asterisk_2(_a, _cos_1(_theta)), _u);
      let _y = _solidus_2(
        _asterisk_2(_asterisk_2(_a, _sin_1(_theta)), _cos_1(_theta)),
        _u,
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let u = +(1, squared(sin(theta))); let x = /((*(a, cos(theta))), u); let y = /((*(*(a, sin(theta)), cos(theta))), u); [x, y] } }",
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
        _squared_1(_plusSign_2(1, _squared_1(_u))),
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let u = tan((/(theta, 2))); let x = *((/(a, 2)), (-(u, (/((^(u, 5)), 5))))); let y = *((/(a, 4)), squared((+(1, squared(u))))); [x, y] } }",
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
  "{ :delta :a :b | { :t | let x = sin((+((*(a, t)), delta))); let y = sin((*(b, t))); [x, y] } }",
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
  "{ :a :b | { :theta | let r = *(a, exp((*(b, theta)))); fromPolarCoordinates([r, theta]) } }",
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
      let _rho = _solidus_2(_a, _squared_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_tan_1(_t), _asterisk_2(2, _t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | let rho = /(a, squared(cos(t))); let theta = -(tan(t), (*(2, t))); fromPolarCoordinates([rho, theta]) } }",
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
        _asterisk_2(_asterisk_2(_m, _t), _cotangent_1(_t)),
        _asterisk_2(_m, _t),
      ];
    }, ["t"]);
  }, ["a"]),
  "{ :a | let m = /((*(2, a)), pi(1)); { :t | [*(*(m, t), cotangent(t)), *(m, t)] } }",
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
  "{ :a :n | { :theta | let r = *(a, cos((*(n, theta)))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :r :alpha :k | { :theta | let x = *(r, (-((*(*(cos(alpha), cos(theta)), cos((*(k, theta))))), (*(sin(theta), sin((*(k, theta)))))))); let y = *(r, (+((*(*(cos(alpha), sin(theta)), cos((*(k, theta))))), (*(cos(theta), sin((*(k, theta)))))))); let z = *(*(r, sin(alpha)), cos((*(k, theta)))); [x, y, z] } }",
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
        _asterisk_2(_a, _cotangent_1(_theta)),
        _asterisk_2(_asterisk_2(_b, _sin_1(_theta)), _cos_1(_theta)),
      ];
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b | { :theta | [*(a, cotangent(theta)), *(*(b, sin(theta)), cos(theta))] } }",
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
  "{ :n :a | { :theta | let r = nthRoot((*(*(2, (^(a, n))), cos((*(n, theta))))),n); fromPolarCoordinates([r, theta]) } }",
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
  "{ :omega :a :b :d | let q = /(a, b); let i = cos(omega); let j = sin(omega); { :theta | let p = +(-(a, (*(b, i))), (*(*(d, i), cos((*(q, theta)))))); let x = +((*(p, cos(theta))), (*(*(d, sin(theta)), sin((*(q, theta)))))); let y = -((*(p, sin(theta))), (*(*(d, cos(theta)), sin((*(q, theta)))))); let z = *(j, (-(b, (*(d, cos((*(q, theta)))))))); [x, y, z] } }",
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
  "{ :a | { :theta | let rho = *(a, (/(sin((-(*(2, theta), a))), sin((-(theta, a)))))); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :a :b :n | { :t | let m = /(2, n); let c = cos(t); let s = sin(t); let x = *(*((^(abs(c), m)), a), sign(c)); let y = *(*((^(abs(s), m)), b), sign(s)); [x, y] } }",
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
  "{ :a :b :m :n1 :n2 :n3 | { :u | let p = ^(abs((/(cos((/(*(m, u), 4))), a))), n2); let q = ^(abs((/(sin((/(*(m, u), 4))), b))), n3); let r = ^((+(p, q)), (/(-1, n1))); let x = *(r, cos(u)); let y = *(r, sin(u)); [x, y] } }",
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
  "{ :a | { :t | let x = *(*(9, a), (-(1, (*(*(3, t), t))))); let y = *(t, x); [x, y] } }",
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
  "{ :theta | [-(theta, tanh(theta)), /(1, cosh(theta))] }",
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
  "{ :a | { :t | [*(*(a, cos(t)), cos(-(t, tan(t)))), *(*(a, cos(t)), sin(-(t, tan(t))))] } }",
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
        _hyphenMinus_2(_asterisk_2(4, _cos_1(_theta)), _secant_1(_theta)),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let r = *((/(a, 2)), (-((*(4, cos(theta))), secant(theta)))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :a :b | { :theta | let x = -((*(a, theta)), (*(b, sin(theta)))); let y = -(a, (*(b, cos(theta)))); [x, y] } }",
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
        _plusSign_2(1, _squared_1(_theta)),
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let x = *(*(2, a), theta); let y = /((*(2, a)), (+(1, squared(theta)))); [x, y] } }",
);
