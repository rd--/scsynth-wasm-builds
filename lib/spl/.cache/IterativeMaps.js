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
  "{ :x | -(1, (*(2, sqrt(abs(x))))) }",
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
      let __SPL1 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL1, 1);
      let _y = _at_2(__SPL1, 2);
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
  "{ :a :b :c :d | { :v | let __SPL1 = assertIsOfSize(v, 2); let x = at(__SPL1, 1); let y = at(__SPL1, 2); [-(sin((*(a, y))), cos((*(b, x)))), -(sin((*(c, x))), cos((*(d, y))))] } }",
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
      let __SPL2 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL2, 1);
      let _y = _at_2(__SPL2, 2);
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
  "{ :a :b | { :v | let __SPL2 = assertIsOfSize(v, 2); let x = at(__SPL2, 1); let y = at(__SPL2, 2); [y, -(-((*(a, y)), (*(b, x))), (*(*(y, y), y)))] } }",
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
  "{ :beta | { :x | %((*(beta, x)), 1) } }",
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
      let __SPL3 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL3, 1);
      let _y = _at_2(__SPL3, 2);
      let _m = _hyphenMinus_2(_y, _asterisk_2(_x, _x));
      /* Statements */
      return [
        _hyphenMinus_2(_asterisk_2(_x, _c), _asterisk_2(_m, _s)),
        _plusSign_2(_asterisk_2(_x, _s), _asterisk_2(_m, _c)),
      ];
    }, ["v"]);
  }, ["a"]),
  "{ :a | let s = sin(a); let c = cos(a); { :v | let __SPL3 = assertIsOfSize(v, 2); let x = at(__SPL3, 1); let y = at(__SPL3, 2); let m = -(y, (*(x, x))); [-((*(x, c)), (*(m, s))), +((*(x, s)), (*(m, c)))] } }",
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
      let __SPL4 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL4, 1);
      let _y = _at_2(__SPL4, 2);
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
  "{ :a :b | { :v | let __SPL4 = assertIsOfSize(v, 2); let x = at(__SPL4, 1); let y = at(__SPL4, 2); [-(+(y, 1), (*(*(a, x), x))), *(b, x)] } }",
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
  "{ :r | { :x | *(*(r, x), (-(1, x))) } }",
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
      let __SPL5 = _assertIsOfSize_2(_v, 2);
      let _x = _at_2(__SPL5, 1);
      let _y = _at_2(__SPL5, 2);
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
  "{ :a :b :c | { :v | let __SPL5 = assertIsOfSize(v, 2); let x = at(__SPL5, 1); let y = at(__SPL5, 2); [-(y, (*(sign(x), sqrt(abs((-(*(b, x), c))))))), -(a, x)] } }",
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
      let __SPL6 = _assertIsOfSize_2(_v, 2);
      let _p = _at_2(__SPL6, 1);
      let _theta = _at_2(__SPL6, 2);
      let _pPrime = _percentSign_2(
        _plusSign_2(_p, _asterisk_2(_k, _sin_1(_theta))),
        _pi_1(2),
      );
      /* Statements */
      return [_pPrime, _percentSign_2(_plusSign_2(_theta, _pPrime), _pi_1(2))];
    }, ["v"]);
  }, ["k"]),
  "{ :k | { :v | let __SPL6 = assertIsOfSize(v, 2); let p = at(__SPL6, 1); let theta = at(__SPL6, 2); let pPrime = %((+(p, (*(k, sin(theta))))), pi(2)); [pPrime, %((+(theta, pPrime)), pi(2))] } }",
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
  "{ :mu | { :x | if((<(x, 0.5)), { *(mu, x) }, { *(mu, (-(1, x))) }) } }",
);
