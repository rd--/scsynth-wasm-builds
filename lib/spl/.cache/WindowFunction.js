/*  Requires: Interval  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _asterisk_2(2, _self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(1, _asterisk_2(2, _self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { if((>(self, 0)), { -(1, (*(2, self))) }, { +(1, (*(2, self))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettHannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.62;
        let _a1 = 0.48;
        let _a2 = 0.38;
        /* Statements */
        return _plusSign_2(
          _hyphenMinus_2(_a0, _asterisk_2(_a1, _abs_1(_self))),
          _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(2), _self))),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { let a0 = 0.62; let a1 = 0.48; let a2 = 0.38; +(-(a0, (*(a1, abs(self)))), (*(a2, cos((*(pi(2), self)))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanNuttallWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [0.3635819, 0.4891775, 0.1365995, 0.0106411];
    /* Statements */
    return _generalCosineWindow_2(_x, _a);
  }, ["x"]),
  "{ :x | let a = [0.3635819, 0.4891775, 0.1365995, 0.0106411]; generalCosineWindow(x, a) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = 0.42;
    let _a1 = 0.5;
    let _a2 = 0.08;
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(_a0, _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x)))),
          _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | let a0 = 0.42; let a1 = 0.5; let a2 = 0.08; if((>(abs(x), 0.5)), { 0 }, { +(+(a0, (*(a1, cos((*(pi(2), x)))))), (*(a2, cos((*(pi(4), x)))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.35875;
        let _a1 = 0.48829;
        let _a2 = 0.14128;
        let _a3 = 0.01168;
        /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _a0,
              _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x))),
            ),
            _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
          ),
          _asterisk_2(_a3, _cos_1(_asterisk_2(_pi_1(6), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>(abs(x), 0.5)), { 0 }, { let a0 = 0.35875; let a1 = 0.48829; let a2 = 0.14128; let a3 = 0.01168; +(+(+(a0, (*(a1, cos((*(pi(2), x)))))), (*(a2, cos((*(pi(4), x)))))), (*(a3, cos((*(pi(6), x)))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bohmanWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _sign_1(_x);
        let _a = _asterisk_2(_m, _sin_1(_asterisk_2(_pi_1(2), _x)));
        let _b = _asterisk_2(
          _asterisk_2(_asterisk_2(_m, _pi_1(2)), _x),
          _cos_1(_asterisk_2(_pi_1(2), _x)),
        );
        let _c = _asterisk_2(_pi_1(1), _cos_1(_asterisk_2(_pi_1(2), _x)));
        /* Statements */
        return _solidus_2(_plusSign_2(_hyphenMinus_2(_a, _b), _c), _pi_1(1));
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>(abs(x), 0.5)), { 0 }, { let m = sign(x); let a = *(m, sin((*(pi(2), x)))); let b = *(*(*(m, pi(2)), x), cos((*(pi(2), x)))); let c = *(pi(1), cos((*(pi(2), x)))); /((+(-(a, b), c)), pi(1)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_cos_1(_pi_1(_self)), _alpha);
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { ^(cos(pi(self)), alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosineWindow_2(_self, 1);
  }, ["self"]),
  "{ :self | cosineWindow(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "flatTopWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.21557895;
        let _a1 = 0.41663158;
        let _a2 = 0.277263158;
        let _a3 = 0.083578947;
        let _a4 = 0.006947368;
        /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(
                _a0,
                _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x))),
              ),
              _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
            ),
            _asterisk_2(_a3, _cos_1(_asterisk_2(_pi_1(6), _x))),
          ),
          _asterisk_2(_a4, _cos_1(_asterisk_2(_pi_1(8), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>(abs(x), 0.5)), { 0 }, { let a0 = 0.21557895; let a1 = 0.41663158; let a2 = 0.277263158; let a3 = 0.083578947; let a4 = 0.006947368; +(+(+(+(a0, (*(a1, cos((*(pi(2), x)))))), (*(a2, cos((*(pi(4), x)))))), (*(a3, cos((*(pi(6), x)))))), (*(a4, cos((*(pi(8), x)))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  sl.annotateFunction(function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exp_1(
          _negate_1(
            _solidus_2(_square_1(_self), _asterisk_2(2, _square_1(_sigma))),
          ),
        );
      }, []),
    );
  }, ["self", "sigma"]),
  "{ :self :sigma | if((>(abs(self), 0.5)), { 0 }, { exp(negate((/(square(self), (*(2, square(sigma))))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gaussianWindow_2(_self, _solidus_2(3, 10));
  }, ["self"]),
  "{ :self | gaussianWindow(self,/(3, 10)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "generalCosineWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _at_2(_a, 1);
        /* Statements */
        _toDo_3(
          2,
          _size_1(_a),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _asterisk_2(_hyphenMinus_2(_k, 1), 2);
            /* Statements */
            return _y = _plusSign_2(
              _y,
              _asterisk_2(_at_2(_a, _k), _cos_1(_asterisk_2(_pi_1(_n), _x))),
            );
          }, ["k"]),
        );
        return _y;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a | if((>(abs(x), 0.5)), { 0 }, { let y = at(a, 1); toDo(2, size(a), { :k | let n = *((-(k, 1)), 2); y := +(y, (*(at(a, k), cos((*(pi(n), x)))))) }); y }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(_solidus_2(21, 46), _cos_1(_asterisk_2(_pi_1(2), _self))),
          _solidus_2(25, 46),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { +(*((/(21, 46)), cos((*(pi(2), self)))), (/(25, 46))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _cos_1(_asterisk_2(_pi_1(2), _self));
        /* Statements */
        return _plusSign_2(_hyphenMinus_2(_alpha, _asterisk_2(_alpha, _c)), _c);
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { let c = cos((*(pi(2), self))); +(-(alpha, (*(alpha, c))), c) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  }, ["self"]),
  "{ :self | hannWindow(self,0.5) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _besselI_2(
            0,
            _asterisk_2(
              _asterisk_2(
                _sqrt_1(_hyphenMinus_2(1, _asterisk_2(2, _x))),
                _sqrt_1(_plusSign_2(1, _asterisk_2(2, _x))),
              ),
              _a,
            ),
          ),
          _besselI_2(0, _a),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a | if((<=(abs(x), 0.5)), { /(besselI(0,*(*(sqrt((-(1, (*(2, x))))), sqrt((+(1, (*(2, x)))))), a)), besselI(0,a)) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _kaiserWindow_2(_x, 3);
  }, ["x"]),
  "{ :x | kaiserWindow(x,3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "lanczosWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _asterisk_2(_pi_1(2), _x);
            /* Statements */
            return _solidus_2(_sin_1(_z), _z);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | if((=(x, 0)), { 1 }, { if((<=(abs(x), 0.5)), { let z = *(pi(2), x); /(sin(z), z) }, { 0 }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "nuttallWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [0.355768, 0.487396, 0.144232, 0.012604];
    /* Statements */
    return _generalCosineWindow_2(_x, _a);
  }, ["x"]),
  "{ :x | let a = [0.355768, 0.487396, 0.144232, 0.012604]; generalCosineWindow(x, a) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "parzenWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_abs_1(_x), 0.5);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(0.25, 0.5));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            -2,
            _cube_1(_hyphenMinus_2(_asterisk_2(2, _x), 1)),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(-0.5, -0.25));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(2, _cube_1(_plusSign_2(_asterisk_2(2, _x), 1)));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(-0.25, 0));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _hyphenMinus_2(
              _hyphenMinus_2(0, _asterisk_2(48, _cube_1(_x))),
              _asterisk_2(24, _square_1(_x)),
            ),
            1,
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(0, 0.25));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _hyphenMinus_2(
              _asterisk_2(48, _cube_1(_x)),
              _asterisk_2(24, _square_1(_x)),
            ),
            1,
          );
        }, []),
      ),
    ]);
  }, ["x"]),
  "{ :x | which([->({ >(abs(x), 0.5) }, { 0 }), ->({ between(x,--(0.25, 0.5)) }, { *(-2, cube((-((*(2, x)), 1)))) }), ->({ between(x,--(-0.5, -0.25)) }, { *(2, cube((+((*(2, x)), 1)))) }), ->({ between(x,--(-0.25, 0)) }, { +(-(-(0, (*(48, cube(x)))), (*(24, square(x)))), 1) }), ->({ between(x,--(0, 0.25)) }, { +(-((*(48, cube(x))), (*(24, square(x)))), 1) })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "planckTaperWindow",
  ["x", "epsilon"],
  sl.annotateFunction(function (_x, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1 = -0.5;
    let _x2 = _asterisk_2(-0.5, _hyphenMinus_2(1, _asterisk_2(2, _epsilon)));
    let _x3 = _asterisk_2(0.5, _hyphenMinus_2(1, _asterisk_2(2, _epsilon)));
    let _x4 = 0.5;
    /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _x1);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_x, _x2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _z = _plusSign_2(
            _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_x, _x1)),
            _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_x, _x2)),
          );
          /* Statements */
          return _solidus_2(1, _plusSign_2(_exp_1(_z), 1));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _x3);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_x, _x4);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _z = _plusSign_2(
            _solidus_2(_hyphenMinus_2(_x3, _x4), _hyphenMinus_2(_x, _x3)),
            _solidus_2(_hyphenMinus_2(_x3, _x4), _hyphenMinus_2(_x, _x4)),
          );
          /* Statements */
          return _solidus_2(1, _plusSign_2(_exp_1(_z), 1));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
    ]);
  }, ["x", "epsilon"]),
  "{ :x :epsilon | let x1 = -0.5; let x2 = *(-0.5, (-(1, (*(2, epsilon))))); let x3 = *(0.5, (-(1, (*(2, epsilon))))); let x4 = 0.5; which([->({ <=(x, x1) }, { 0 }), ->({ <(x, x2) }, { let z = +((/((-(x2, x1)), (-(x, x1)))), (/((-(x2, x1)), (-(x, x2))))); /(1, (+(exp(z), 1))) }), ->({ <=(x, x3) }, { 1 }), ->({ <(x, x4) }, { let z = +((/((-(x3, x4)), (-(x, x3)))), (/((-(x3, x4)), (-(x, x4))))); /(1, (+(exp(z), 1))) }), ->({ true }, { 0 })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "raisedCosinePulse",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _sincNormalized_1(_x),
        _solidus_2(
          _cos_1(_asterisk_2(_pi_1(_alpha), _x)),
          _hyphenMinus_2(
            1,
            _circumflexAccent_2(_asterisk_2(_asterisk_2(2, _alpha), _x), 2),
          ),
        ),
      );
    }, ["x"]);
  }, ["alpha"]),
  "{ :alpha | { :x | *(sincNormalized(x), (/(cos((*(pi(alpha), x))), (-(1, (^((*(*(2, alpha), x)), 2))))))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "sincWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sincNormalized_1(_asterisk_2(_asterisk_2(_x, _a), 2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a | if((<=(abs(x), 0.5)), { sincNormalized((*(*(x, a), 2))) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "tukeyWindow",
  ["x", "alpha"],
  sl.annotateFunction(function (_x, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_abs_1(_x), 0.5);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_alpha, 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_alpha, 1.0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hannWindow_1(_x);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(
              _hyphenMinus_2(_hyphenMinus_2(_alpha, _asterisk_2(2, _x)), 1),
              0,
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(_x, -0.5);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            0.5,
            _plusSign_2(
              _cos_1(
                _solidus_2(
                  _asterisk_2(
                    _pi_1(2),
                    _plusSign_2(
                      _plusSign_2(_hyphenMinus_2(0, _solidus_2(_alpha, 2)), _x),
                      0.5,
                    ),
                  ),
                  _alpha,
                ),
              ),
              1,
            ),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(
              _hyphenMinus_2(_plusSign_2(_alpha, _asterisk_2(2, _x)), 1),
              0,
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_x, 0.5);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            0.5,
            _plusSign_2(
              _cos_1(
                _solidus_2(
                  _asterisk_2(
                    _pi_1(2),
                    _hyphenMinus_2(_plusSign_2(_solidus_2(_alpha, 2), _x), 0.5),
                  ),
                  _alpha,
                ),
              ),
              1,
            ),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
    ]);
  }, ["x", "alpha"]),
  "{ :x :alpha | which([->({ >(abs(x), 0.5) }, { 0 }), ->({ <=(alpha, 0) }, { 1 }), ->({ >=(alpha, 1.0) }, { hannWindow(x) }), ->({ &(>((-(-(alpha, (*(2, x))), 1)), 0), { >=(x, -0.5) }) }, { *(0.5, (+(cos((/((*(pi(2), (+(+(-(0, (/(alpha, 2))), x), 0.5)))), alpha))), 1))) }), ->({ &(>((-(+(alpha, (*(2, x))), 1)), 0), { <=(x, 0.5) }) }, { *(0.5, (+(cos((/((*(pi(2), (-(+((/(alpha, 2)), x), 0.5)))), alpha))), 1))) }), ->({ true }, { 1 })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "tukeyWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _tukeyWindow_2(_x, _solidus_2(2, 3));
  }, ["x"]),
  "{ :x | tukeyWindow(x, /(2, 3)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(_square_1(_alpha), _asterisk_2(4, _square_1(_self))),
          _square_1(_alpha),
        );
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { /((-(square(alpha), (*(4, square(self))))), square(alpha)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _welchWindow_2(_self, 1);
  }, ["self"]),
  "{ :self | welchWindow(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bartlettWindow_1);
  }, ["self"]),
  "{ :self | collect(self,bartlettWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bartlettHannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bartlettHannWindow_1);
  }, ["self"]),
  "{ :self | collect(self,bartlettHannWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanWindow_1);
  }, ["self"]),
  "{ :self | collect(self,blackmanWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanHarrisWindow_1);
  }, ["self"]),
  "{ :self | collect(self,blackmanHarrisWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanNuttallWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanNuttallWindow_1);
  }, ["self"]),
  "{ :self | collect(self,blackmanNuttallWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bohmanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bohmanWindow_1);
  }, ["self"]),
  "{ :self | collect(self,bohmanWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _cosineWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | collect(self, { :each | cosineWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _dirichletWindow_1);
  }, ["self"]),
  "{ :self | collect(self,dirichletWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  sl.annotateFunction(function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _gaussianWindow_2(_each, _sigma);
      }, ["each"]),
    );
  }, ["self", "sigma"]),
  "{ :self :sigma | collect(self, { :each | gaussianWindow(each,sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _gaussianWindow_1);
  }, ["self"]),
  "{ :self | collect(self,gaussianWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hammingWindow_1);
  }, ["self"]),
  "{ :self | collect(self,hammingWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hannWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | collect(self, { :each | hannWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  }, ["self"]),
  "{ :self | hannWindow(self,0.5) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "kaiserWindow",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _kaiserWindow_2(_each, _a);
      }, ["each"]),
    );
  }, ["self", "a"]),
  "{ :self :a | collect(self, { :each | kaiserWindow(each,a) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "lanczosWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _lanczosWindow_1);
  }, ["self"]),
  "{ :self | collect(self,lanczosWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "nuttallWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _nuttallWindow_1);
  }, ["self"]),
  "{ :self | collect(self,nuttallWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "parzenWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _parzenWindow_1);
  }, ["self"]),
  "{ :self | collect(self,parzenWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "planckTaperWindow",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckTaperWindow_2(_x, _epsilon);
      }, ["x"]),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon | collect(self, { :x | planckTaperWindow(x,epsilon) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "sincWindow",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sincWindow_2(_each, _a);
      }, ["each"]),
    );
  }, ["self", "a"]),
  "{ :self :a | collect(self, { :each | sincWindow(each,a) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "tukeyWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tukeyWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | collect(self, { :each | tukeyWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "tukeyWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tukeyWindow_1);
  }, ["self"]),
  "{ :self | collect(self,tukeyWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _welchWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha | collect(self, { :each | welchWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _welchWindow_1);
  }, ["self"]),
  "{ :self | collect(self,welchWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hammingWindowTable",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(_n, _hammingWindow_1);
  }, ["n"]),
  "{ :n | windowTable(n,hammingWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hannWindowTable",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(_n, _hannWindow_1);
  }, ["n"]),
  "{ :n | windowTable(n,hannWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "kaiserWindowTable",
  ["n", "alpha"],
  sl.annotateFunction(function (_n, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(
      _n,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _kaiserWindow_2(_x, _alpha);
      }, ["x"]),
    );
  }, ["n", "alpha"]),
  "{ :n :alpha | windowTable(n, { :x | kaiserWindow(x,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "welchWindowTable",
  ["n", "alpha"],
  sl.annotateFunction(function (_n, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(
      _n,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _welchWindow_2(_x, _alpha);
      }, ["x"]),
    );
  }, ["n", "alpha"]),
  "{ :n :alpha | windowTable(n, { :x | welchWindow(x,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "windowTable",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _n, _f_1);
  }, ["n", "f:/1"]),
  "{ :n :f:/1 | discretize(Interval(-0.5, 0.5),n, f:/1) }",
);
