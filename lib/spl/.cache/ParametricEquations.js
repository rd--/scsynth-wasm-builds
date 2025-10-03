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
  "{ :t | let r = /(*((/(1, 4)), (+(+((*(10, (^(cos(t), 3)))), (*(11, cos(t)))), (^((*(*(-3, (-((*(21, (^(cos(t), 2)))), 16))), (^((-((*(2, (^(cos(t), 2)))), 1)), 2)))), (/(1, 2))))))), (+(-((*(2, (^(cos(t), 4)))), (^(cos(t), 2))), 2))); if(isComplex(r), { nil }, { fromPolarCoordinates([r, t]) }) }",
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
  "{ :a :n | { :theta | let r = *(a, (^(theta, (/(1, n))))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :a | { :t | let x = *(a, sin(t)); let y = /((*(*(a, square(cos(t))), (+(2, cos(t))))), (+(3, square(sin(t))))); [x, y] } }",
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
    let _a = _cube_1(_cos_1(_t));
    let _x = _asterisk_2(_a, _cos_1(_asterisk_2(3, _t)));
    let _y = _asterisk_2(_a, _sin_1(_asterisk_2(3, _t)));
    /* Statements */
    return [_x, _y];
  }, ["t"]),
  "{ :t | let a = cube(cos(t)); let x = *(a, cos((*(3, t)))); let y = *(a, sin((*(3, t)))); [x, y] }",
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
  "{ :a | { :t | let r = +(sec(t), (*(a, cos(t)))); fromPolarCoordinates([r, t]) } }",
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
  "{ :r | { :t | [*(r, (-(t, sin(t)))), *(r, (-(1, cos(t))))] } }",
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
  "{ :r :s | { :theta | let a = *(r, sqrt(2)); let b = *(s, abs(sin((*(2, theta))))); let rho = if(isVeryCloseTo(b,0), { r }, { let c = sqrt((-(1, (*(square(s), square(sin((*(2, theta))))))))); let d = sqrt((-(1, c))); *((/(a, b)), d) }); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :a | { :theta | let r = /((*(*(*(3, a), sin(theta)), cos(theta))), (+(cube(sin(theta)), cube(cos(theta))))); fromPolarCoordinates([r, theta]) } }",
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
  "{ :a :b | { :theta | let rho = -((*(b, square(theta))), a); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :r | let a = ^(r, Fraction(2L, 3L)); { :t | let b = *(t, pi(2)); let c = /(b, r); let x = +(sin(b), (*(a, sin(c)))); let y = +(cos(b), (*(a, cos(c)))); [x, y] } }",
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
  "{ :tP :rP | let a = *(pi(2), (-(1, (/(1, tP))))); { :t | let r = sqrt((-(+(1, (^(rP, 2))), (*(*(2, rP), cos(*(a, t))))))); let b = /((*(rP, sin(*(a, t)))), r); let c = /((-(+(1, (^(r, 2))), (^(rP, 2)))), (*(2, r))); let d = sin(*(pi(2), t)); let e = cos(*(pi(2), t)); let x = *(r, (-((*(d, b)), (*(e, c))))); let y = *(r, (-(0, (+((*(d, c)), (*(e, b))))))); [x, y] } }",
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
      let _rho = _asterisk_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_asterisk_2(2, _t), _tan_1(_t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | let rho = *(a, square(cos(t))); let theta = -((*(2, t)), tan(t)); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :a | { :theta | let u = +(1, square(sin(theta))); let x = /((*(a, cos(theta))), u); let y = /((*(*(a, sin(theta)), cos(theta))), u); [x, y] } }",
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
  "{ :a | { :theta | let u = tan((/(theta, 2))); let x = *((/(a, 2)), (-(u, (/((^(u, 5)), 5))))); let y = *((/(a, 4)), square((+(1, square(u))))); [x, y] } }",
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
  "{ :a :b | { :t | let r = +(b, (*(a, cos(t)))); fromPolarCoordinates([r, t]) } }",
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
      let _rho = _solidus_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_tan_1(_t), _asterisk_2(2, _t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | let rho = /(a, square(cos(t))); let theta = -(tan(t), (*(2, t))); fromPolarCoordinates([rho, theta]) } }",
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
  "{ :a | let m = /((*(2, a)), pi(1)); { :t | [*(*(m, t), cot(t)), *(m, t)] } }",
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
  "{ :n | { :theta | let a = +(/(*(n, (-(theta, pi(1)))), pi(2)), 0.5); let b = /(*(pi(2), floor(a)), n); let c = cos((-(theta, b))); let d = *(2, cos((/(pi(1), n)))); let r = +(c, sqrt((+(+(1, d), (^(c, 2)))))); fromPolarCoordinates([r, theta]) } }",
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
        _asterisk_2(_a, _cot_1(_theta)),
        _asterisk_2(_asterisk_2(_b, _sin_1(_theta)), _cos_1(_theta)),
      ];
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b | { :theta | [*(a, cot(theta)), *(*(b, sin(theta)), cos(theta))] } }",
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
  "{ :a :k | { :t | let x = *(a, (-(t, (*(k, tanh(t)))))); let y = *(a, (/(k, cosh(t)))); [x, y] } }",
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
        _hyphenMinus_2(_asterisk_2(4, _cos_1(_theta)), _sec_1(_theta)),
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let r = *((/(a, 2)), (-((*(4, cos(theta))), sec(theta)))); fromPolarCoordinates([r, theta]) } }",
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
        _plusSign_2(1, _square_1(_theta)),
      );
      /* Statements */
      return [_x, _y];
    }, ["theta"]);
  }, ["a"]),
  "{ :a | { :theta | let x = *(*(2, a), theta); let y = /((*(2, a)), (+(1, square(theta)))); [x, y] } }",
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
  "{ :x :y | -(-(+(+(-(+((*(6, (^(x, 4)))), (*(4, (^(y, 4))))), (*(21, (^(x, 3))))), (*(*(6, (^(x, 2))), (^(y, 2))))), (*(19, (^(x, 2))))), (*(*(11, x), (^(y, 2))))), (*(3, (^(y, 2))))) }",
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
  "{ :a :b | { :x :y | -(+(+((^(x, 3)), (*(a, x))), b), (^(y, 2))) } }",
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
  "{ :m :n | { :x :y | -((*(cos(*(pi(n), x)), cos(*(pi(m), y)))), (*(cos(*(pi(m), x)), cos(*(pi(n), y))))) } }",
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
  "{ :c :r | let __SplVar1 = assertIsOfSize(c, 2); let x0 = at(__SplVar1, 1); let y0 = at(__SplVar1, 2); { :t | let x = +(x0, (*(r, cos(t)))); let y = +(y0, (*(r, sin(t)))); [x, y] } }",
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
  "{ :c :r :theta | let __SplVar2 = assertIsOfSize(r, 2); let a = at(__SplVar2, 1); let b = at(__SplVar2, 2); let __SplVar3 = assertIsOfSize(c, 2); let x0 = at(__SplVar3, 1); let y0 = at(__SplVar3, 2); let p = cos(theta); let q = sin(theta); { :t | let x = -(+(x0, (*(*(a, p), cos(t)))), (*(*(b, q), sin(t)))); let y = +(+(y0, (*(*(a, q), cos(t)))), (*(*(b, p), sin(t)))); [x, y] } }",
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
  "{ :f :p :a :d | let __SplVar4 = assertIsOfSize(f, 4); let f1 = at(__SplVar4, 1); let f2 = at(__SplVar4, 2); let f3 = at(__SplVar4, 3); let f4 = at(__SplVar4, 4); let __SplVar5 = assertIsOfSize(p, 4); let p1 = at(__SplVar5, 1); let p2 = at(__SplVar5, 2); let p3 = at(__SplVar5, 3); let p4 = at(__SplVar5, 4); let __SplVar6 = assertIsOfSize(a, 4); let a1 = at(__SplVar6, 1); let a2 = at(__SplVar6, 2); let a3 = at(__SplVar6, 3); let a4 = at(__SplVar6, 4); let __SplVar7 = assertIsOfSize(/(d, 100), 4); let d1 = at(__SplVar7, 1); let d2 = at(__SplVar7, 2); let d3 = at(__SplVar7, 3); let d4 = at(__SplVar7, 4); { :t | let x = (+((*(*(a1, sin(+((*(t, f1)), p1))), exp((*(*(-1, d1), t))))), (*(*(a2, sin(+((*(t, f2)), p2))), exp((*(*(-1, d2), t))))))); let y = (+((*(*(a3, sin(+((*(t, f3)), p3))), exp((*(*(-1, d3), t))))), (*(*(a4, sin(+((*(t, f4)), p4))), exp((*(*(-1, d4), t))))))); [x, y] } }",
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
  "{ :self | let __SplVar8 = assertIsOfSize(self, 4); let f = at(__SplVar8, 1); let p = at(__SplVar8, 2); let a = at(__SplVar8, 3); let d = at(__SplVar8, 4); harmonographCurve([1, 0, f, 0], [0, 0, p, 0], [1, 0, a, 0], [d, 0, d, 0]) }",
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
  "{ :self | let __SplVar9 = assertIsOfSize(self, 4); let f = at(__SplVar9, 1); let p = at(__SplVar9, 2); let a = at(__SplVar9, 3); let d = at(__SplVar9, 4); harmonographCurve([1, f, 1, f], [0, p, pi(Fraction(1L, 2L)), +(p, pi(Fraction(1L, 2L)))], [1, a, 1, a], [d, d, d, d]) }",
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
    let __SplVar10 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SplVar10, 1);
    let _b = _at_2(__SplVar10, 2);
    let _c = _at_2(__SplVar10, 3);
    let _d = _at_2(__SplVar10, 4);
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
  "{ :self | let __SplVar10 = assertIsOfSize(self, 4); let a = at(__SplVar10, 1); let b = at(__SplVar10, 2); let c = at(__SplVar10, 3); let d = at(__SplVar10, 4); { :x | -(-(-((/(d, x)), (*(a, square(x)))), (*(b, x))), c) } }",
);
