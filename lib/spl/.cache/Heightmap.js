/*  Requires: RandomNumberGenerator  */

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Heightmap",
  "diamondSquareAlgorithm",
  ["self", "k", "h", "c"],
  sl.annotateFunction(function (_self, _k, _h, _c) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _k, _h, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_circumflexAccent_2(2, _k), 1);
    let _ds = _circumflexAccent_2(2, _hyphenMinus_2(0, _h));
    let _average_5 = sl.annotateFunction(function (_d, _i, _j, _v, _offsets) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage = "Arity: expected 5, _d, _i, _j, _v, _offsets";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _at_2(_shape_1(_d), 1);
      let _res = 0;
      let _k = 0;
      /* Statements */
      _do_2(
        _offsets,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar1 = _assertIsOfSize_2(_each, 2);
          let _p = _at_2(__SplVar1, 1);
          let _q = _at_2(__SplVar1, 2);
          let _pp = _plusSign_2(_i, _asterisk_2(_p, _v));
          let _qq = _plusSign_2(_j, _asterisk_2(_q, _v));
          /* Statements */
          return _ifTrue_2(
            _ampersand_2(
              _betweenAnd_3(_pp, 0, _hyphenMinus_2(_n, 1)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _betweenAnd_3(_qq, 0, _hyphenMinus_2(_n, 1));
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _res = _plusSign_2(
                _res,
                _at_2(_at_2(_d, _plusSign_2(_pp, 1)), _plusSign_2(_qq, 1)),
              );
              return _k = _plusSign_2(_k, 1);
            }, []),
          );
        }, ["each"]),
      );
      return _solidus_2(_res, _k);
    }, ["d", "i", "j", "v", "offsets"]);
    let _step_3 = sl.annotateFunction(function (_d, _w, _s) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _d, _w, _s";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _at_2(_shape_1(_d), 1);
      let _v = _solidusSolidus_2(_w, 2);
      let _diamond = [[-1, -1], [-1, 1], [1, 1], [1, -1]];
      let _square = [[-1, 0], [0, -1], [1, 0], [0, 1]];
      /* Statements */
      _do_2(
        _Range_1([_v, _hyphenMinus_2(_n, 1), _w]),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _Range_1([_v, _hyphenMinus_2(_n, 1), _w]),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _atPut_3(
                _at_2(_d, _plusSign_2(_i, 1)),
                _plusSign_2(_j, 1),
                _plusSign_2(
                  _average_5(_d, _i, _j, _v, _diamond),
                  _nextRandomFloat_3(_self, _hyphenMinus_2(0, _s), _s),
                ),
              );
            }, ["j"]),
          );
        }, ["i"]),
      );
      _do_2(
        _Range_1([_v, _hyphenMinus_2(_n, 1), _w]),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _Range_1([0, _hyphenMinus_2(_n, 1), _w]),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _atPut_3(
                _at_2(_d, _plusSign_2(_i, 1)),
                _plusSign_2(_j, 1),
                _plusSign_2(
                  _average_5(_d, _i, _j, _v, _square),
                  _nextRandomFloat_3(_self, _hyphenMinus_2(0, _s), _s),
                ),
              );
            }, ["j"]),
          );
        }, ["i"]),
      );
      return _do_2(
        _Range_1([0, _hyphenMinus_2(_n, 1), _w]),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _Range_1([_v, _hyphenMinus_2(_n, 1), _w]),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _atPut_3(
                _at_2(_d, _plusSign_2(_i, 1)),
                _plusSign_2(_j, 1),
                _plusSign_2(
                  _average_5(_d, _i, _j, _v, _square),
                  _nextRandomFloat_3(_self, _hyphenMinus_2(0, _s), _s),
                ),
              );
            }, ["j"]),
          );
        }, ["i"]),
      );
    }, ["d", "w", "s"]);
    let _d = _zeroMatrix_1([_n, _n]);
    let _w = _hyphenMinus_2(_n, 1);
    let _s = 1;
    /* Statements */
    _atPut_3(_at_2(_d, _n), 1, _at_2(_c, 1));
    _atPut_3(_at_2(_d, _n), _n, _at_2(_c, 2));
    _atPut_3(_at_2(_d, 1), _n, _at_2(_c, 3));
    _atPut_3(_at_2(_d, 1), 1, _at_2(_c, 4));
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_w, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _step_3(_d, _w, _s);
        _w = _solidusSolidus_2(_w, 2);
        return _s = _asterisk_2(_s, _ds);
      }, []),
    );
    return _d;
  }, ["self", "k", "h", "c"]),
  "{ :self :k :h :c |\n\t\tlet n = (2 ^ k) + 1;\n\t\tlet ds = 2 ^ (0 - h);\n\t\tlet average = { :d :i :j :v :offsets |\n\t\t\tlet n = d.shape[1];\n\t\t\tlet res = 0;\n\t\t\tlet k = 0;\n\t\t\toffsets.do { :each |\n\t\t\t\tlet [p, q] = each;\n\t\t\t\tlet pp = i + (p * v);\n\t\t\t\tlet qq = j + (q * v);\n\t\t\t\t(pp.betweenAnd(0, n - 1) & { qq.betweenAnd(0, n - 1) }).ifTrue {\n\t\t\t\t\tres := res + d[pp + 1][qq + 1];\n\t\t\t\t\tk := k + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tres / k\n\t\t};\n\t\tlet step = { :d :w :s |\n\t\t\tlet n = d.shape[1];\n\t\t\tlet v = w // 2;\n\t\t\tlet diamond = [-1 -1; -1 1; 1 1; 1 -1];\n\t\t\tlet square = [-1 0; 0 -1; 1 0; 0 1];\n\t\t\tRange([v, n - 1, w]).do { :i |\n\t\t\t\tRange([v, n - 1, w]).do { :j |\n\t\t\t\t\td[i + 1][j + 1] := average(d, i, j, v, diamond) + self.nextRandomFloat(0 - s, s)\n\t\t\t\t}\n\t\t\t};\n\t\t\tRange([v, n - 1, w]).do { :i |\n\t\t\t\tRange([0, n - 1, w]).do { :j |\n\t\t\t\t\td[i + 1][j + 1] := average(d, i, j, v, square) + self.nextRandomFloat(0 - s, s)\n\t\t\t\t}\n\t\t\t};\n\t\t\tRange([0, n - 1, w]).do { :i |\n\t\t\t\tRange([v, n - 1, w]).do { :j |\n\t\t\t\t\td[i + 1][j + 1] := average(d, i, j, v, square) + self.nextRandomFloat(0 - s, s)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet d = [n n].zeroMatrix;\n\t\tlet w = n - 1;\n\t\tlet s = 1;\n\t\td[n][1] := c[1];\n\t\td[n][n] := c[2];\n\t\td[1][n] := c[3];\n\t\td[1][1] := c[4];\n\t\t{ w > 1 }.whileTrue {\n\t\t\tstep(d, w, s);\n\t\t\tw := w // 2;\n\t\t\ts := s * ds\n\t\t};\n\t\td\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Heightmap",
  "diamondSquareAlgorithm",
  ["self", "k", "h"],
  sl.annotateFunction(function (_self, _k, _h) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return _diamondSquareAlgorithm_4(_self, _k, _h, [0, 0, 0, 0]);
  }, ["self", "k", "h"]),
  "{ :self :k :h |\n\t\tself.diamondSquareAlgorithm(k, h, [0 0 0 0])\n\t}",
);
