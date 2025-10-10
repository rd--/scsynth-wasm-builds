sl.extendTypeOrTraitWithMethod(
  "Block",
  "Optimization",
  "gradientDescentMethod",
  ["f:/1", "x", "alpha", "tolerance"],
  sl.annotateFunction(function (_f_1, _x, _alpha, _tolerance) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_1, _x, _alpha, _tolerance";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gradientOf_1 = sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_p, 2);
      let _x = _at_2(__SplVar1, 1);
      let _y = _at_2(__SplVar1, 2);
      let _a = _asterisk_2(
        _asterisk_2(2, _hyphenMinus_2(_x, 1)),
        _exp_1(_asterisk_2(_asterisk_2(-1, _y), _y)),
      );
      let _b = _asterisk_2(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(4, _x),
            _exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)),
          ),
          _y,
        ),
        _plusSign_2(_y, 2),
      );
      let _c = _asterisk_2(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(-2, _hyphenMinus_2(_x, 1)),
            _hyphenMinus_2(_x, 1),
          ),
          _y,
        ),
        _exp_1(_asterisk_2(_asterisk_2(-1, _y), _y)),
      );
      let _d = _asterisk_2(
        _exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)),
        _plusSign_2(_y, 2),
      );
      let _e = _asterisk_2(_exp_1(_asterisk_2(_asterisk_2(-2, _x), _x)), _y);
      /* Statements */
      return [_hyphenMinus_2(_a, _b), _plusSign_2(_plusSign_2(_c, _d), _e)];
    }, ["p"]);
    let _n = _size_1(_x);
    let _g0 = _f_1(_x);
    let _fi = _gradientOf_1(_x);
    let _delG = 0;
    let _b = null;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _delG = _plusSign_2(
          _delG,
          _asterisk_2(_at_2(_fi, _i), _at_2(_fi, _i)),
        );
      }, ["i"]),
    );
    _delG = _sqrt_1(_delG);
    _b = _solidus_2(_alpha, _delG);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_delG, _tolerance);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _g1 = null;
        /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _x,
              _i,
              _hyphenMinus_2(_at_2(_x, _i), _asterisk_2(_b, _at_2(_fi, _i))),
            );
          }, ["i"]),
        );
        _fi = _gradientOf_1(_x);
        _delG = 0;
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _delG = _plusSign_2(
              _delG,
              _asterisk_2(_at_2(_fi, _i), _at_2(_fi, _i)),
            );
          }, ["i"]),
        );
        _delG = _sqrt_1(_delG);
        _b = _solidus_2(_alpha, _delG);
        _g1 = _f_1(_x);
        return _if_3(
          _greaterThanSign_2(_g1, _g0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _alpha = _solidus_2(_alpha, 2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _g0 = _g1;
          }, []),
        );
      }, []),
    );
    return _x;
  }, ["f:/1", "x", "alpha", "tolerance"]),
  "{ :f:/1 :x :alpha :tolerance |\n\t\tlet gradientOf = { :p |\n\t\t\tlet [x, y] = p;\n\t\t\tlet a = 2 * (x - 1) * (-1 * y * y).exp;\n\t\t\tlet b = 4 * x * (-2 * x * x).exp * y * (y + 2);\n\t\t\tlet c = -2 * (x - 1) * (x - 1) * y * (-1 * y * y).exp;\n\t\t\tlet d = (-2 * x * x).exp * (y + 2);\n\t\t\tlet e = (-2 * x * x).exp * y;\n\t\t\t[a - b, c + d + e]\n\t\t};\n\t\tlet n = x.size;\n\t\tlet g0 = f(x);\n\t\tlet fi = gradientOf(x);\n\t\tlet delG = 0;\n\t\tlet b = nil;\n\t\t1.toDo(n) { :i |\n\t\t\tdelG := delG + (fi[i] * fi[i])\n\t\t};\n\t\tdelG := delG.sqrt;\n\t\tb := alpha / delG;\n\t\t{ delG > tolerance }.whileTrue {\n\t\t\tlet g1 = nil;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tx[i] := x[i] - (b * fi[i])\n\t\t\t};\n\t\t\tfi := gradientOf(x);\n\t\t\tdelG := 0;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tdelG := delG + (fi[i] * fi[i])\n\t\t\t};\n\t\t\tdelG := delG.sqrt;\n\t\t\tb := alpha / delG;\n\t\t\tg1 := f(x);\n\t\t\t(g1 > g0).if {\n\t\t\t\talpha := alpha / 2\n\t\t\t} {\n\t\t\t\tg0 := g1\n\t\t\t}\n\t\t};\n\t\tx\n\t}",
);
