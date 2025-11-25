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
  "{ :self :r :t0 |\n\t\tlet p0 = AliasMethod(self.p0);\n\t\tlet m = self.transitionMatrix.collect(AliasMethod:/1);\n\t\tlet h = self.transitionRateVector;\n\t\tlet t = t0;\n\t\tlet x = p0.nextRandom(r);\n\t\tBlockStream {\n\t\t\tlet z = [t, x];\n\t\t\tx := m[x].nextRandom(r);\n\t\t\tt := t + r.exponentialDistribution(h[x]);\n\t\t\tz\n\t\t} {\n\t\t\tt := t0;\n\t\t\tx := p0.nextRandom(r)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.p0\n\t}",
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
  "{ :self |\n\t\t1 / self.transitionRateVector\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_t, 2);
    let _tMin = _at_2(__SplVar1, 1);
    let _tMax = _at_2(__SplVar1, 2);
    /* Statements */
    return _timeSeriesRandomFunction_3(_asStream_3(_self, _r, _tMin), _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n |\n\t\tlet [tMin, tMax] = t;\n\t\tself.asStream(r, tMin).timeSeriesRandomFunction(t, n)\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_q), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    let _t = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _toDo_3(
      1,
      _m,
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
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_i, _j),
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
  "{ :self |\n\t\tlet q = self.q;\n\t\tlet [m, n] = q.shape;\n\t\tlet t = [m, n].zeroMatrix;\n\t\t1.toDo(m) { :i |\n\t\t\tlet h = q[i][i].abs;\n\t\t\tlet r = (h = 0).if { 0 } { 1 / h };\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t(i != j).ifTrue {\n\t\t\t\t\tt[i][j] := q[i][j] * r\n\t\t\t\t}\n\t\t\t};\n\t\t\tt[i][i] := (1 - t[i].sum).abs\n\t\t};\n\t\tt\n\t}",
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
  "{ :self |\n\t\tself.q.diagonal.abs\n\t}",
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
  "{ :p0 :q |\n\t\tnewContinuousMarkovProcess().initializeSlots(p0, q)\n\t}",
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
  "{ :p0 :m :mu |\n\t\tlet n = m.size;\n\t\tlet q = { :i :j |\n\t\t\t(i = j).if {\n\t\t\t\tmu[i].-\n\t\t\t} {\n\t\t\t\tm[i][j] * mu[i]\n\t\t\t}\n\t\t}.table(1.to(n), 1.to(n));\n\t\tContinuousMarkovProcess(p0, q)\n\t}",
);
