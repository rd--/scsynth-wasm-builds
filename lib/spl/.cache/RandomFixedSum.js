sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomFixedSum",
  "katoYamasakiAlgorithm",
  ["self", "u", "m"],
  sl.annotateFunction(function (_self, _u, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_u, 3);
    let _umin = _at_2(__SplVar1, 1);
    let _umax = _at_2(__SplVar1, 2);
    let _targetUtil = _at_2(__SplVar1, 3);
    let _sets = [];
    /* Statements */
    _timesRepeat_2(
      _m,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _taskSet = [];
        let _totalUtil = 0;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_totalUtil, _targetUtil);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _nextRandomFloat_3(_self, _umin, _umax);
            /* Statements */
            _ifTrue_2(
              _greaterThanSign_2(_plusSign_2(_z, _totalUtil), _targetUtil),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _z = _hyphenMinus_2(_targetUtil, _totalUtil);
              }, []),
            );
            _totalUtil = _plusSign_2(_totalUtil, _z);
            return _add_2(_taskSet, _z);
          }, []),
        );
        return _add_2(_sets, _taskSet);
      }, []),
    );
    return _sets;
  }, ["self", "u", "m"]),
  "{ :self :u :m |\n\t\tlet [umin, umax, targetUtil] = u;\n\t\tlet sets = [];\n\t\tm.timesRepeat {\n\t\t\tlet taskSet = [];\n\t\t\tlet totalUtil = 0;\n\t\t\t{\n\t\t\t\ttotalUtil < targetUtil\n\t\t\t}.whileTrue {\n\t\t\t\tlet z = self.nextRandomFloat(umin, umax);\n\t\t\t\t((z + totalUtil) > targetUtil).ifTrue {\n\t\t\t\t\tz := targetUtil - totalUtil\n\t\t\t\t};\n\t\t\t\ttotalUtil := totalUtil + z;\n\t\t\t\ttaskSet.add(z)\n\t\t\t};\n\t\t\tsets.add(taskSet)\n\t\t};\n\t\tsets\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomFixedSum",
  "randomRealFixedSum",
  ["self", "u", "shape"],
  sl.annotateFunction(function (_self, _u, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _u, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _allButLast_1(_shape);
    let _m = _product_1(_k);
    let _n = _last_1(_shape);
    /* Statements */
    return _reshapeList_2(_staffordsAlgorithm_4(_self, _n, _u, _m), _k);
  }, ["self", "u", "shape"]),
  "{ :self :u :shape |\n\t\tlet k = shape.allButLast;\n\t\tlet m = k.product;\n\t\tlet n = shape.last;\n\t\tself.staffordsAlgorithm(n, u, m).reshapeList(k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomFixedSum",
  "staffordsAlgorithm",
  ["self", "n", "u", "nsets"],
  sl.annotateFunction(function (_self, _n, _u, _nsets) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _n, _u, _nsets";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range_3 = sl.annotateFunction(function (_i, _j, _k) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _i, _j, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _asList_1(_Range_3(_i, _hyphenMinus_2(_j, _k), _k));
    }, ["i", "j", "k"]);
    let _k = _min_2(_floor_1(_u), _hyphenMinus_2(_n, 1));
    let _s1 = _hyphenMinus_2(_u, _range_3(_k, _hyphenMinus_2(_k, _n), -1));
    let _s2 = _hyphenMinus_2(_range_3(_plusSign_2(_k, _n), _k, -1), _u);
    let _tiny = _smallFloatEpsilon_1(1);
    let _huge = _smallFloatMax_1(1);
    let _w = _zeroMatrix_1([_n, _plusSign_2(_n, 1)]);
    let _t = _zeroMatrix_1([_hyphenMinus_2(_n, 1), _n]);
    let _m = _nsets;
    let _x = _zeroMatrix_1([_n, _m]);
    let _rt = _randomReal_3(_self, [0, 1], [_hyphenMinus_2(_n, 1), _m]);
    let _rs = _randomReal_3(_self, [0, 1], [_hyphenMinus_2(_n, 1), _m]);
    let _j = _List_2(_m, _plusSign_2(_k, 1));
    let _sm = _List_2(_m, 0);
    let _pr = _List_2(_m, 1);
    let _s = _List_2(_m, _u);
    /* Statements */
    _atPut_3(_at_2(_w, 1), 2, _huge);
    _do_2(
      _range_3(2, _plusSign_2(_n, 1), 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t1 = _solidus_2(
          _asterisk_2(
            _atAll_2(
              _at_2(_w, _plusSign_2(_hyphenMinus_2(_i, 2), 1)),
              _plusSign_2(_range_3(1, _plusSign_2(_i, 1), 1), 1),
            ),
            _atAll_2(_s1, _plusSign_2(_range_3(0, _i, 1), 1)),
          ),
          _i,
        );
        let _t2 = _solidus_2(
          _asterisk_2(
            _atAll_2(
              _at_2(_w, _plusSign_2(_hyphenMinus_2(_i, 2), 1)),
              _plusSign_2(_range_3(0, _i, 1), 1),
            ),
            _atAll_2(
              _s2,
              _plusSign_2(_range_3(_hyphenMinus_2(_n, _i), _n, 1), 1),
            ),
          ),
          _i,
        );
        let _t3 = _plusSign_2(_plusSign_2(_t1, _t2), _tiny);
        let _t4 = _boole_1(
          _greaterThanSign_2(
            _atAll_2(
              _s2,
              _plusSign_2(_range_3(_hyphenMinus_2(_n, _i), _n, 1), 1),
            ),
            _atAll_2(_s1, _plusSign_2(_range_3(0, _i, 1), 1)),
          ),
        );
        let _t5 = _plusSign_2(
          _asterisk_2(_solidus_2(_t2, _t3), _t4),
          _asterisk_2(
            _hyphenMinus_2(1, _solidus_2(_t1, _t3)),
            _hyphenMinus_2(1, _t4),
          ),
        );
        /* Statements */
        _atAllPutAll_3(
          _at_2(_w, _plusSign_2(_hyphenMinus_2(_i, 1), 1)),
          _plusSign_2(_range_3(1, _plusSign_2(_i, 1), 1), 1),
          _plusSign_2(_t1, _t2),
        );
        return _atAllPutAll_3(
          _at_2(_t, _plusSign_2(_hyphenMinus_2(_i, 2), 1)),
          _plusSign_2(_range_3(0, _i, 1), 1),
          _t5,
        );
      }, ["i"]),
    );
    _do_2(
      _range_3(_hyphenMinus_2(_n, 1), 0, -1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _boole_1(
          _lessThanSignEqualsSign_2(
            _at_2(
              _rt,
              _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_n, _i), 1), 1),
            ),
            _atAll_2(
              _at_2(_t, _plusSign_2(_hyphenMinus_2(_i, 1), 1)),
              _plusSign_2(_hyphenMinus_2(_j, 1), 1),
            ),
          ),
        );
        let _sx = _circumflexAccent_2(
          _at_2(_rs, _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_n, _i), 1), 1)),
          _solidus_2(1, _i),
        );
        /* Statements */
        _sm = _plusSign_2(
          _sm,
          _asterisk_2(
            _asterisk_2(_hyphenMinus_2(1, _sx), _pr),
            _solidus_2(_s, _plusSign_2(_i, 1)),
          ),
        );
        _pr = _asterisk_2(_sx, _pr);
        _atPut_3(
          _x,
          _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_n, _i), 1), 1),
          _plusSign_2(_sm, _asterisk_2(_pr, _e)),
        );
        _s = _hyphenMinus_2(_s, _e);
        return _j = _hyphenMinus_2(_j, _e);
      }, ["i"]),
    );
    _atPut_3(
      _x,
      _plusSign_2(_hyphenMinus_2(_n, 1), 1),
      _plusSign_2(_sm, _asterisk_2(_pr, _s)),
    );
    return _collect_2(
      _transpose_1(_x),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _shuffle_2(_each, _self);
      }, ["each"]),
    );
  }, ["self", "n", "u", "nsets"]),
  "{ :self :n :u :nsets |\n\t\t/* https://github.com/jlelli/taskgen/ */\n\t\tlet range = { :i :j :k |\n\t\t\tRange(i, j - k, k).asList\n\t\t};\n\t\tlet k = u.floor.min(n - 1);\n\t\tlet s1 = u - range(k, k - n, -1);\n\t\tlet s2 = range(k + n, k, -1) - u;\n\t\tlet tiny = 1.smallFloatEpsilon;\n\t\tlet huge = 1.smallFloatMax;\n\t\tlet w = [n, n + 1].zeroMatrix;\n\t\tlet t = [n - 1, n].zeroMatrix;\n\t\tlet m = nsets;\n\t\tlet x = [n, m].zeroMatrix;\n\t\tlet rt = self.randomReal([0 1], [n - 1, m]);\n\t\tlet rs = self.randomReal([0 1], [n - 1, m]);\n\t\tlet j = List(m, k + 1);\n\t\tlet sm = List(m, 0);\n\t\tlet pr = List(m, 1);\n\t\tlet s = List(m, u);\n\t\tw[1][2] := huge;\n\t\trange(2, n + 1, 1).do { :i |\n\t\t\tlet t1 = w.at(i - 2 + 1).atAll(range(1, i + 1, 1) + 1) * s1.atAll(range(0, i, 1) + 1) / i;\n\t\t\tlet t2 = w.at(i - 2 + 1).atAll(range(0, i, 1) + 1) * s2.atAll(range(n - i, n, 1) + 1) / i;\n\t\t\tlet t3 = t1 + t2 + tiny;\n\t\t\tlet t4 = (s2.atAll(range(n - i, n, 1) + 1) > s1.atAll(range(0, i, 1) + 1)).boole;\n\t\t\tlet t5 = ((t2 / t3) * t4) + ((1 - (t1 / t3)) * (1 - t4));\n\t\t\tw.at(i - 1 + 1).atAllPutAll(range(1, i + 1, 1) + 1, t1 + t2);\n\t\t\tt.at(i - 2 + 1).atAllPutAll(range(0, i, 1) + 1, t5)\n\t\t};\n\t\trange(n - 1, 0, -1).do { :i |\n\t\t\tlet e = (rt.at((n - i) - 1 + 1) <= t.at(i - 1 + 1).atAll(j - 1 + 1)).boole;\n\t\t\tlet sx = rs.at((n - i) - 1 + 1) ^ (1 / i);\n\t\t\tsm := sm + ((1 - sx) * pr * (s / (i + 1)));\n\t\t\tpr := sx * pr;\n\t\t\tx.atPut((n - i) - 1 + 1, sm + (pr * e));\n\t\t\ts := s - e;\n\t\t\tj := j - e\n\t\t};\n\t\tx.atPut(n - 1 + 1, sm + (pr * s));\n\t\tx.transpose.collect { :each |\n\t\t\teach.shuffle(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomFixedSum",
  "uUnifastAlgorithm",
  ["self", "n", "u"],
  sl.annotateFunction(function (_self, _n, _u) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _u";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _utilizations = _List_1(_n);
    let _sumU = _u;
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _nextRandomFloat_1(_self);
        let _nextSumU = _asterisk_2(
          _sumU,
          _circumflexAccent_2(_z, _solidus_2(1, _hyphenMinus_2(_n, _i))),
        );
        /* Statements */
        _atPut_3(_utilizations, _i, _hyphenMinus_2(_sumU, _nextSumU));
        return _sumU = _nextSumU;
      }, ["i"]),
    );
    _atPut_3(_utilizations, _n, _sumU);
    return _utilizations;
  }, ["self", "n", "u"]),
  "{ :self :n :u |\n\t\tlet utilizations = List(n);\n\t\tlet sumU = u;\n\t\t1.toDo(n - 1) { :i |\n\t\t\tlet z = self.nextRandomFloat;\n\t\t\tlet nextSumU = sumU * (z ^ (1 / (n - i)));\n\t\t\tutilizations[i] := sumU - nextSumU;\n\t\t\tsumU := nextSumU\n\t\t};\n\t\tutilizations[n] := sumU;\n\t\tutilizations\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "RandomFixedSum",
  "uUnifastDiscardAlgorithm",
  ["self", "n", "u", "m"],
  sl.annotateFunction(function (_self, _n, _u, _m) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _n, _u, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sets = [];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_sets), _m);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _utilizations = [];
        let _sumU = _u;
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_n, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _nextRandomFloat_1(_self);
            let _nextSumU = _asterisk_2(
              _sumU,
              _circumflexAccent_2(_z, _solidus_2(1, _hyphenMinus_2(_n, _i))),
            );
            /* Statements */
            _add_2(_utilizations, _hyphenMinus_2(_sumU, _nextSumU));
            return _sumU = _nextSumU;
          }, ["i"]),
        );
        _add_2(_utilizations, _sumU);
        return _ifTrue_2(
          _allSatisfy_2(
            _utilizations,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_each, 1);
            }, ["each"]),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_sets, _utilizations);
          }, []),
        );
      }, []),
    );
    return _sets;
  }, ["self", "n", "u", "m"]),
  "{ :self :n :u :m |\n\t\tlet sets = [];\n\t\t{\n\t\t\tsets.size < m\n\t\t}.whileTrue {\n\t\t\tlet utilizations = [];\n\t\t\tlet sumU = u;\n\t\t\t1.toDo(n - 1) { :i |\n\t\t\t\tlet z = self.nextRandomFloat;\n\t\t\t\tlet nextSumU = sumU * (z ^ (1 / (n - i)));\n\t\t\t\tutilizations.add(sumU - nextSumU);\n\t\t\t\tsumU := nextSumU\n\t\t\t};\n\t\t\tutilizations.add(sumU);\n\t\t\tutilizations.allSatisfy { :each |\n\t\t\t\teach <= 1\n\t\t\t}.ifTrue {\n\t\t\t\tsets.add(utilizations)\n\t\t\t}\n\t\t};\n\t\tsets\n\t}",
);
