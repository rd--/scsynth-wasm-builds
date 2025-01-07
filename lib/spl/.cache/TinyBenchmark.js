sl.addMethod(
  "Void",
  "TinyBenchmark",
  "tinyBenchmarks",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _t1 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _benchmark_1(_n1);
      });
      return _lessThanSign_2(_t1, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _n1 = _asterisk_2(_n1, 2);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _t2 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _r2 = _benchFib_1(_n2);
      });
      return _lessThanSign_2(_t2, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
  "{\n\t\tlet n1 = 1;\n\t\tlet n2 = 28;\n\t\tlet t1 = nil;\n\t\tlet t2 = nil;\n\t\tlet r2 = nil;\n\t\t{\n\t\t\tt1 := system.millisecondsToRun {\n\t\t\t\tn1.benchmark\n\t\t\t};\n\t\t\tt1 < 1000\n\t\t}.whileTrue {\n\t\t\tn1 := n1 * 2\n\t\t};\n\t\t{\n\t\t\tt2 := system.millisecondsToRun {\n\t\t\t\tr2 := n2.benchFib\n\t\t\t};\n\t\t\tt2 < 1000\n\t\t}.whileTrue {\n\t\t\tn2 := n2 + 1\n\t\t};\n\t\t[\n\t\t\t((n1 * 500000 * 1000) // t1.roundTo(100)).asStringWithCommas,\n\t\t\t'bytecodes/sec;',\n\t\t\t((r2 * 1000) // t2.roundTo(100)).asStringWithCommas,\n\t\t\t'sends/sec'\n\t\t].join(' ')\n\t}",
);
