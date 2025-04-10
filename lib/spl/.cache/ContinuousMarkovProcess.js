sl.addType(
  false,
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  ["Object"],
  ["p0", "q"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ContinuousMarkovProcess",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "asStream",
  ["self", "r", "t0"],
  sl.annotateFunction(function (_self, _r, _t0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _t0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p0 = _AliasMethod_1(_p0_1(_self));
    let _m = _collect_2(_transitionMatrix_1(_self), _AliasMethod_1);
    let _h = _transitionRateVector_1(_self);
    let _t = _t0;
    let _x = _nextRandom_2(_p0, _r);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = [_t, _x];
        /* Statements */
        _x = _nextRandom_2(_at_2(_m, _x), _r);
        _t = _plusSign_2(_t, _exponentialDistribution_2(_r, _at_2(_h, _x)));
        return _z;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _t = _t0;
        return _x = _nextRandom_2(_p0, _r);
      }, []),
    );
  }, ["self", "r", "t0"]),
  "{ :self :r :t0 | let p0 = AliasMethod(p0(self)); let m = collect(transitionMatrix(self),AliasMethod:/1); let h = transitionRateVector(self); let t = t0; let x = nextRandom(p0,r); BlockStream({ let z = [t, x]; x := nextRandom(at(m, x),r); t := +(t, exponentialDistribution(r,at(h, x))); z }, { t := t0; x := nextRandom(p0,r) }) }",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "initialProbabilities",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _p0_1(_self);
  }, ["self"]),
  "{ :self | p0(self) }",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "holdingTimeMean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _transitionRateVector_1(_self));
  }, ["self"]),
  "{ :self | /(1, transitionRateVector(self)) }",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL307 = _assertIsOfSize_2(_t, 2);
    let _tMin = _at_2(__SPL307, 1);
    let _tMax = _at_2(__SPL307, 2);
    /* Statements */
    return _timeSeriesRandomFunction_3(_asStream_3(_self, _r, _tMin), _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let __SPL307 = assertIsOfSize(t, 2); let tMin = at(__SPL307, 1); let tMax = at(__SPL307, 2); timeSeriesRandomFunction(asStream(self,r, tMin),t, n) }",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "transitionMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _q = _q_1(_self);
    let __SPL308 = _assertIsOfSize_2(_shape_1(_q), 2);
    let _m = _at_2(__SPL308, 1);
    let _n = _at_2(__SPL308, 2);
    let _t = _zeroMatrix_2(_m, _n);
    /* Statements */
    _do_2(
      _to_2(1, _m),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _h = _abs_1(_at_2(_at_2(_q, _i), _i));
        let _r = _if_3(
          _equalsSign_2(_h, 0),
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
            return _solidus_2(1, _h);
          }, []),
        );
        /* Statements */
        _do_2(
          _to_2(1, _n),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _tildeEqualsSign_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _at_2(_t, _i),
                  _j,
                  _asterisk_2(_at_2(_at_2(_q, _i), _j), _r),
                );
              }, []),
            );
          }, ["j"]),
        );
        return _atPut_3(
          _at_2(_t, _i),
          _i,
          _abs_1(_hyphenMinus_2(1, _sum_1(_at_2(_t, _i)))),
        );
      }, ["i"]),
    );
    return _t;
  }, ["self"]),
  "{ :self | let q = q(self); let __SPL308 = assertIsOfSize(shape(q), 2); let m = at(__SPL308, 1); let n = at(__SPL308, 2); let t = zeroMatrix(m, n); do(to(1, m), { :i | let h = abs(at(at(q, i), i)); let r = if((=(h, 0)), { 0 }, { /(1, h) }); do(to(1, n), { :j | ifTrue((~=(i, j)), { atPut(at(t, i), j, *(at(at(q, i), j), r)) }) }); atPut(at(t, i), i, abs((-(1, sum(at(t, i)))))) }); t }",
);

sl.addMethodToExistingType(
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  "transitionRateVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_diagonal_1(_q_1(_self)));
  }, ["self"]),
  "{ :self | abs(diagonal(q(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  ["p0", "q"],
  sl.annotateFunction(function (_p0, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p0, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newContinuousMarkovProcess_0(), _p0, _q);
  }, ["p0", "q"]),
  "{ :p0 :q | initializeSlots(newContinuousMarkovProcess(),p0, q) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousMarkovProcess",
  "ContinuousMarkovProcess",
  ["p0", "m", "mu"],
  sl.annotateFunction(function (_p0, _m, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p0, _m, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_m);
    let _q = _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, _j),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_1(_at_2(_mu, _i));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_at_2(_at_2(_m, _i), _j), _at_2(_mu, _i));
          }, []),
        );
      }, ["i", "j"]),
      _to_2(1, _n),
      _to_2(1, _n),
    );
    /* Statements */
    return _ContinuousMarkovProcess_2(_p0, _q);
  }, ["p0", "m", "mu"]),
  "{ :p0 :m :mu | let n = size(m); let q = table({ :i :j | if((=(i, j)), { -(at(mu, i)) }, { *(at(at(m, i), j), at(mu, i)) }) },to(1, n), to(1, n)); ContinuousMarkovProcess(p0, q) }",
);
