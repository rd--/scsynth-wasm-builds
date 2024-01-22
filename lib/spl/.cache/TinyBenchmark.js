sl.addMethod(
  "Void",
  "TinyBenchmark",
  "tinyBenchmarks",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _t1, _t2, _r, _n1, _n2;
    /* Statements */
    _n1 = 1;
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _t1 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _benchmark_1(_n1);
      });
      return _lessThan_2(_t1, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _n1 = _times_2(_n1, 2);
    });
    _n2 = 28;
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _t2 = _millisecondsToRun_2(_system, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _r = _benchFib_1(_n2);
      });
      return _lessThan_2(_t2, 1000);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _n2 = _plus_2(_n2, 1);
    });
    return _join_1([
      _asStringWithCommas_1(
        _dividedByDividedBy_2(
          _times_2(_times_2(_n1, 500000), 1000),
          _roundTo_2(_t1, 100),
        ),
      ),
      " bytecodes/sec; ",
      _asStringWithCommas_1(
        _dividedByDividedBy_2(_times_2(_r, 1000), _roundTo_2(_t2, 100)),
      ),
      " sends/sec",
    ]);
  },
  "{\n\t\t| t1 t2 r n1 n2 |\n\t\tn1 := 1;\n\t\t{\n\t\t\tt1 := system.millisecondsToRun {\n\t\t\t\tn1.benchmark\n\t\t\t};\n\t\t\tt1 < 1000\n\t\t}.whileTrue {\n\t\t\tn1 := n1 * 2\n\t\t};\n\t\tn2 := 28;\n\t\t{\n\t\t\tt2 := system.millisecondsToRun {\n\t\t\t\tr := n2.benchFib\n\t\t\t};\n\t\t\tt2 < 1000\n\t\t}.whileTrue {\n\t\t\tn2 := n2 + 1\n\t\t};\n\t\t[\n\t\t\t((n1 * 500000 * 1000) // t1.roundTo(100)).asStringWithCommas,\n\t\t\t' bytecodes/sec; ',\n\t\t\t((r * 1000) // t2.roundTo(100)).asStringWithCommas,\n\t\t\t' sends/sec'\n\t\t].join\n\t}",
);
