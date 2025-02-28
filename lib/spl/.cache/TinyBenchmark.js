sl.extendTypeOrTraitWithMethod(
  "Void",
  "TinyBenchmark",
  "tinyBenchmarks",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n1 = 1;
    let _n2 = 28;
    let _t1 = null;
    let _t2 = null;
    let _r2 = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _t1 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _benchmark_1(_n1);
      });
      return _lessThanSign_2(_t1, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n1 = _asterisk_2(_n1, 2);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _t2 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r2 = _benchFib_1(_n2);
      });
      return _lessThanSign_2(_t2, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n2 = _plusSign_2(_n2, 1);
    });
    return _join_2([
      _asStringWithCommas_1(
        _solidusSolidus_2(
          _asterisk_2(_asterisk_2(_n1, 500000), 1000),
          _roundTo_2(_t1, 100),
        ),
      ),
      "bytecodes/sec;",
      _asStringWithCommas_1(
        _solidusSolidus_2(_asterisk_2(_r2, 1000), _roundTo_2(_t2, 100)),
      ),
      "sends/sec",
    ], " ");
  },
  "{ let n1 = 1; let n2 = 28; let t1 = nil; let t2 = nil; let r2 = nil; whileTrue({ t1 := millisecondsToRun(system, { benchmark(n1) }); <(t1, 1000) }, { n1 := *(n1, 2) }); whileTrue({ t2 := millisecondsToRun(system, { r2 := benchFib(n2) }); <(t2, 1000) }, { n2 := +(n2, 1) }); join([asStringWithCommas((//((*(*(n1, 500000), 1000)), roundTo(t1,100)))), 'bytecodes/sec;', asStringWithCommas((//((*(r2, 1000)), roundTo(t2,100)))), 'sends/sec'],' ') }",
);
