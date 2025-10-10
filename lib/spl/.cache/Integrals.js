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
  "{ :f:/1 :i :epsilon |\n\t\tlet mem = { :a :fa :b :fb |\n\t\t\tlet m = (a + b) / 2;\n\t\t\tlet fm = f(m);\n\t\t\tlet s = (b - a).abs / 6 * (fa + (4 * fm) + fb);\n\t\t\t[m fm s]\n\t\t};\n\t\tlet rec = { :a :fa :b :fb :epsilon :whole :m :fm |\n\t\t\tlet [lm, flm, left] = mem(a, fa, m, fm);\n\t\t\tlet [rm, frm, right] = mem(m, fm, b, fb);\n\t\t\tlet delta = left + right - whole;\n\t\t\t(delta.abs <= (epsilon * 15)).if {\n\t\t\t\tleft + right + (delta / 15)\n\t\t\t} {\n\t\t\t\trec(a, fa, m, fm, epsilon / 2, left, lm, flm)\n\t\t\t\t+\n\t\t\t\trec(m, fm, b, fb, epsilon / 2, right, rm, frm)\n\t\t\t}\n\t\t};\n\t\tlet a = i[1];\n\t\tlet b = i[2];\n\t\tlet fa = f(a);\n\t\tlet fb = f(b);\n\t\tlet [m, fm, whole] = mem(a, fa, b, fb);\n\t\trec(a, fa, b, fb, epsilon, whole, m, fm)\n\t}",
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
  "{ :f:/1 :i |\n\t\tadaptiveSimpsonsMethod(f:/1, i, 1E-9)\n\t}",
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
  "{ :f:/1 :interval :n |\n\t\tlet [a, b] = interval.minMax;\n\t\tlet stepSize = (b - a) / n;\n\t\tlet integral = (f(a) + f(b)) / 2;\n\t\tlet x = a + stepSize;\n\t\t{ x < b }.whileTrue {\n\t\t\tintegral := integral + f(x);\n\t\t\tx := x + stepSize\n\t\t};\n\t\tintegral * stepSize\n\t}",
);
