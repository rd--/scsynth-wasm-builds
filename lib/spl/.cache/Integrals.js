sl.extendTypeOrTraitWithMethod(
  "Block",
  "Integrals",
  "adaptiveSimpsonsMethod",
  ["f:/1", "i", "epsilon"],
  sl.annotateFunction(function (_f_1, _i, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _f_1, _i, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mem_4 = sl.annotateFunction(function (_a, _fa, _b, _fb) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _a, _fa, _b, _fb";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _solidus_2(_plusSign_2(_a, _b), 2);
      let _fm = _f_1(_m);
      let _s = _asterisk_2(
        _solidus_2(_abs_1(_hyphenMinus_2(_b, _a)), 6),
        _plusSign_2(_plusSign_2(_fa, _asterisk_2(4, _fm)), _fb),
      );
      /* Statements */
      return [_m, _fm, _s];
    }, ["a", "fa", "b", "fb"]);
    let _rec_8 = sl.annotateFunction(
      function (_a, _fa, _b, _fb, _epsilon, _whole, _m, _fm) {
        /* ArityCheck */
        if (arguments.length !== 8) {
          const errorMessage =
            "Arity: expected 8, _a, _fa, _b, _fb, _epsilon, _whole, _m, _fm";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_mem_4(_a, _fa, _m, _fm), 3);
        let _lm = _at_2(__SplVar1, 1);
        let _flm = _at_2(__SplVar1, 2);
        let _left = _at_2(__SplVar1, 3);
        let __SplVar2 = _assertIsOfSize_2(_mem_4(_m, _fm, _b, _fb), 3);
        let _rm = _at_2(__SplVar2, 1);
        let _frm = _at_2(__SplVar2, 2);
        let _right = _at_2(__SplVar2, 3);
        let _delta = _hyphenMinus_2(_plusSign_2(_left, _right), _whole);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_abs_1(_delta), _asterisk_2(_epsilon, 15)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _plusSign_2(_left, _right),
              _solidus_2(_delta, 15),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _rec_8(
                _a,
                _fa,
                _m,
                _fm,
                _solidus_2(_epsilon, 2),
                _left,
                _lm,
                _flm,
              ),
              _rec_8(
                _m,
                _fm,
                _b,
                _fb,
                _solidus_2(_epsilon, 2),
                _right,
                _rm,
                _frm,
              ),
            );
          }, []),
        );
      },
      ["a", "fa", "b", "fb", "epsilon", "whole", "m", "fm"],
    );
    let _a = _at_2(_i, 1);
    let _b = _at_2(_i, 2);
    let _fa = _f_1(_a);
    let _fb = _f_1(_b);
    let __SplVar3 = _assertIsOfSize_2(_mem_4(_a, _fa, _b, _fb), 3);
    let _m = _at_2(__SplVar3, 1);
    let _fm = _at_2(__SplVar3, 2);
    let _whole = _at_2(__SplVar3, 3);
    /* Statements */
    return _rec_8(_a, _fa, _b, _fb, _epsilon, _whole, _m, _fm);
  }, ["f:/1", "i", "epsilon"]),
  "{ :f:/1 :i :epsilon | let mem = { :a :fa :b :fb | let m = /((+(a, b)), 2); let fm = f(m); let s = *(/(abs((-(b, a))), 6), (+(+(fa, (*(4, fm))), fb))); [m, fm, s] }; let rec = { :a :fa :b :fb :epsilon :whole :m :fm | let __SplVar1 = assertIsOfSize(mem(a, fa, m, fm), 3); let lm = at(__SplVar1, 1); let flm = at(__SplVar1, 2); let left = at(__SplVar1, 3); let __SplVar2 = assertIsOfSize(mem(m, fm, b, fb), 3); let rm = at(__SplVar2, 1); let frm = at(__SplVar2, 2); let right = at(__SplVar2, 3); let delta = -(+(left, right), whole); if((<=(abs(delta), (*(epsilon, 15)))), { +(+(left, right), (/(delta, 15))) }, { +(rec(a, fa, m, fm, /(epsilon, 2), left, lm, flm), rec(m, fm, b, fb, /(epsilon, 2), right, rm, frm)) }) }; let a = at(i, 1); let b = at(i, 2); let fa = f(a); let fb = f(b); let __SplVar3 = assertIsOfSize(mem(a, fa, b, fb), 3); let m = at(__SplVar3, 1); let fm = at(__SplVar3, 2); let whole = at(__SplVar3, 3); rec(a, fa, b, fb, epsilon, whole, m, fm) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Integrals",
  "adaptiveSimpsonsMethod",
  ["f:/1", "i"],
  sl.annotateFunction(function (_f_1, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f_1, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptiveSimpsonsMethod_3(_f_1, _i, 1E-9);
  }, ["f:/1", "i"]),
  "{ :f:/1 :i | adaptiveSimpsonsMethod(f:/1, i, 1E-9) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Integrals",
  "trapezoidalRule",
  ["f:/1", "interval", "n"],
  sl.annotateFunction(function (_f_1, _interval, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _f_1, _interval, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_minMax_1(_interval), 2);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _stepSize = _solidus_2(_hyphenMinus_2(_b, _a), _n);
    let _integral = _solidus_2(_plusSign_2(_f_1(_a), _f_1(_b)), 2);
    let _x = _plusSign_2(_a, _stepSize);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_x, _b);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _integral = _plusSign_2(_integral, _f_1(_x));
        return _x = _plusSign_2(_x, _stepSize);
      }, []),
    );
    return _asterisk_2(_integral, _stepSize);
  }, ["f:/1", "interval", "n"]),
  "{ :f:/1 :interval :n | let __SplVar4 = assertIsOfSize(minMax(interval), 2); let a = at(__SplVar4, 1); let b = at(__SplVar4, 2); let stepSize = /((-(b, a)), n); let integral = /((+(f(a), f(b))), 2); let x = +(a, stepSize); whileTrue({ <(x, b) }, { integral := +(integral, f(x)); x := +(x, stepSize) }); *(integral, stepSize) }",
);
