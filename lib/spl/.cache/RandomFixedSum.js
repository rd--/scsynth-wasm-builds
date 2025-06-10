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
    let __SPL330 = _assertIsOfSize_2(_u, 3);
    let _umin = _at_2(__SPL330, 1);
    let _umax = _at_2(__SPL330, 2);
    let _targetUtil = _at_2(__SPL330, 3);
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
  "{ :self :u :m | let __SPL330 = assertIsOfSize(u, 3); let umin = at(__SPL330, 1); let umax = at(__SPL330, 2); let targetUtil = at(__SPL330, 3); let sets = []; timesRepeat(m, { let taskSet = []; let totalUtil = 0; whileTrue({ <(totalUtil, targetUtil) }, { let z = nextRandomFloat(self,umin, umax); ifTrue((>((+(z, totalUtil)), targetUtil)), { z := -(targetUtil, totalUtil) }); totalUtil := +(totalUtil, z); add(taskSet,z) }); add(sets,taskSet) }); sets }",
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
  "{ :self :u :shape | let k = allButLast(shape); let m = product(k); let n = last(shape); reshapeList(staffordsAlgorithm(self,n, u, m),k) }",
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
    let _k = _min_1(_asTuple_1([_floor_1(_u), _hyphenMinus_2(_n, 1)]));
    let _s1 = _hyphenMinus_2(_u, _range_3(_k, _hyphenMinus_2(_k, _n), -1));
    let _s2 = _hyphenMinus_2(_range_3(_plusSign_2(_k, _n), _k, -1), _u);
    let _tiny = _smallFloatEpsilon_1(1);
    let _huge = _smallFloatMax_1(1);
    let _w = _zeroMatrix_2(_n, _plusSign_2(_n, 1));
    let _t = _zeroMatrix_2(_hyphenMinus_2(_n, 1), _n);
    let _m = _nsets;
    let _x = _zeroMatrix_2(_n, _m);
    let _rt = _randomReal_3(_self, [0, 1], [_hyphenMinus_2(_n, 1), _m]);
    let _rs = _randomReal_3(_self, [0, 1], [_hyphenMinus_2(_n, 1), _m]);
    let _j = _numberSign_2(_plusSign_2(_k, 1), _m);
    let _sm = _numberSign_2(0, _m);
    let _pr = _numberSign_2(1, _m);
    let _s = _numberSign_2(_u, _m);
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
      _transposed_1(_x),
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
  "{ :self :n :u :nsets | let range = { :i :j :k | asList(Range(i, -(j, k), k)) }; let k = min(asTuple([floor(u), -(n, 1)])); let s1 = -(u, range(k, -(k, n), -1)); let s2 = -(range(+(k, n), k, -1), u); let tiny = smallFloatEpsilon(1); let huge = smallFloatMax(1); let w = zeroMatrix(n, +(n, 1)); let t = zeroMatrix(-(n, 1), n); let m = nsets; let x = zeroMatrix(n, m); let rt = randomReal(self,[0, 1], [-(n, 1), m]); let rs = randomReal(self,[0, 1], [-(n, 1), m]); let j = #((+(k, 1)), m); let sm = #(0, m); let pr = #(1, m); let s = #(u, m); atPut(at(w, 1), 2, huge); do(range(2, +(n, 1), 1), { :i | let t1 = /(*(atAll(at(w,+(-(i, 2), 1)),+(range(1, +(i, 1), 1), 1)), atAll(s1,+(range(0, i, 1), 1))), i); let t2 = /(*(atAll(at(w,+(-(i, 2), 1)),+(range(0, i, 1), 1)), atAll(s2,+(range(-(n, i), n, 1), 1))), i); let t3 = +(+(t1, t2), tiny); let t4 = boole((>(atAll(s2,+(range(-(n, i), n, 1), 1)), atAll(s1,+(range(0, i, 1), 1))))); let t5 = +((*((/(t2, t3)), t4)), (*((-(1, (/(t1, t3)))), (-(1, t4))))); atAllPutAll(at(w,+(-(i, 1), 1)),+(range(1, +(i, 1), 1), 1), +(t1, t2)); atAllPutAll(at(t,+(-(i, 2), 1)),+(range(0, i, 1), 1), t5) }); do(range(-(n, 1), 0, -1), { :i | let e = boole((<=(at(rt,+(-((-(n, i)), 1), 1)), atAll(at(t,+(-(i, 1), 1)),+(-(j, 1), 1))))); let sx = ^(at(rs,+(-((-(n, i)), 1), 1)), (/(1, i))); sm := +(sm, (*(*((-(1, sx)), pr), (/(s, (+(i, 1))))))); pr := *(sx, pr); atPut(x,+(-((-(n, i)), 1), 1), +(sm, (*(pr, e)))); s := -(s, e); j := -(j, e) }); atPut(x,+(-(n, 1), 1), +(sm, (*(pr, s)))); collect(transposed(x), { :each | shuffle(each,self) }) }",
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
  "{ :self :n :u | let utilizations = List(n); let sumU = u; toDo(1, -(n, 1), { :i | let z = nextRandomFloat(self); let nextSumU = *(sumU, (^(z, (/(1, (-(n, i))))))); atPut(utilizations, i, -(sumU, nextSumU)); sumU := nextSumU }); atPut(utilizations, n, sumU); utilizations }",
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
  "{ :self :n :u :m | let sets = []; whileTrue({ <(size(sets), m) }, { let utilizations = []; let sumU = u; toDo(1, -(n, 1), { :i | let z = nextRandomFloat(self); let nextSumU = *(sumU, (^(z, (/(1, (-(n, i))))))); add(utilizations,-(sumU, nextSumU)); sumU := nextSumU }); add(utilizations,sumU); ifTrue(allSatisfy(utilizations, { :each | <=(each, 1) }), { add(sets,utilizations) }) }); sets }",
);
