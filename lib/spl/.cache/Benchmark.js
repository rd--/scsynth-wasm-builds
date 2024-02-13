sl.addType(
  false,
  "Benchmark",
  "Benchmark",
  ["Object"],
  ["name", "verification", "benchmark"],
);

sl.copyTraitToType(
  "Object",
  "Benchmark",
);

sl.addMethod(
  "Benchmark",
  "Benchmark",
  "run",
  ["self", "parameter"],
  function (_self, _parameter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameter";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = null;
    let _elapsedTime = null;
    /* Statements */
    _elapsedTime = _millisecondsToRun_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer = _value_2(_benchmark_1(_self), _parameter);
    });
    return _postLine_1(
      _join_1([
        _name_1(_self),
        ": Parameter = ",
        _parameter,
        ", Verified = ",
        _equalsSign_2(_answer, _at_2(_verification_1(_self), _parameter)),
        ", Elapsed Time = ",
        _elapsedTime,
      ]),
    );
  },
  "{ :self :parameter |\n\t\tlet answer = nil;\n\t\tlet elapsedTime = nil;\n\t\telapsedTime := {\n\t\t\tanswer := self.benchmark.value(parameter)\n\t\t}.millisecondsToRun;\n\t\t[\n\t\t\tself.name,\n\t\t\t': Parameter = ', parameter,\n\t\t\t', Verified = ', answer = self.verification[parameter],\n\t\t\t', Elapsed Time = ', elapsedTime\n\t\t].join.postLine\n\t}",
);

sl.addMethod(
  "String",
  "Benchmark",
  "Benchmark",
  ["self", "verification", "benchmark:/1"],
  function (_self, _verification, _benchmark_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _verification, _benchmark_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newBenchmark_0(),
      _self,
      _verification,
      _benchmark_1,
    );
  },
  "{ :self :verification :benchmark:/1 |\n\t\tnewBenchmark().initializeSlots(self, verification, benchmark:/1)\n\t}",
);
