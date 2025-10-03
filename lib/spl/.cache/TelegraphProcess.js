sl.addType(
  false,
  "TelegraphProcess",
  "TelegraphProcess",
  ["Object"],
  ["mu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TelegraphProcess",
);

sl.addMethodToExistingType(
  "TelegraphProcess",
  "TelegraphProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let __SplVar1 = _assertIsOfSize_2(_t, 3);
    let _tMin = _at_2(__SplVar1, 1);
    let _tMax = _at_2(__SplVar1, 2);
    let _dt = _at_2(__SplVar1, 3);
    let _ts = _asList_1(_thenTo_3(_tMin, _plusSign_2(_tMin, _dt), _tMax));
    let _k = _size_1(_ts);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = 1;
        let _e = _exponentialDistribution_2(_r, _mu);
        /* Statements */
        return _transpose_1([
          _ts,
          _collect_2(
            _ts,
            sl.annotateFunction(function (_t) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _t";
                throw new Error(errorMessage);
              } /* Statements */
              _ifTrue_2(
                _greaterThanSignEqualsSign_2(_t, _e),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _a = _negate_1(_a);
                  return _e = _plusSign_2(
                    _e,
                    _exponentialDistribution_2(_r, _mu),
                  );
                }, []),
              );
              return _a;
            }, ["t"]),
          ),
        ]);
      }, []),
      _n,
    ));
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n | let mu = mu(self); let __SplVar1 = assertIsOfSize(t, 3); let tMin = at(__SplVar1, 1); let tMax = at(__SplVar1, 2); let dt = at(__SplVar1, 3); let ts = asList(thenTo(tMin, +(tMin, dt), tMax)); let k = size(ts); TemporalData(!({ let a = 1; let e = exponentialDistribution(r,mu); transpose([ts, collect(ts, { :t | ifTrue((>=(t, e)), { a := negate(a); e := +(e, exponentialDistribution(r,mu)) }); a })]) }, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TelegraphProcess",
  "TelegraphProcess",
  ["mu"],
  sl.annotateFunction(function (_mu) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTelegraphProcess_0(), _mu);
  }, ["mu"]),
  "{ :mu | initializeSlots(newTelegraphProcess(),mu) }",
);
