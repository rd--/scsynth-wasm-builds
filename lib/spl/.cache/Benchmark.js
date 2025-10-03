sl.addType(
  false,
  "Benchmark",
  "Benchmark",
  ["Object"],
  ["name", "verification", "benchmark"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Benchmark",
);

sl.addMethodToExistingType(
  "Benchmark",
  "Benchmark",
  "run",
  ["self", "parameter"],
  sl.annotateFunction(function (_self, _parameter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameter";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(
      _timing_1(sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_2(_benchmark_1(_self), _parameter);
      }, [])),
      2,
    );
    let _elapsedTime = _at_2(__SplVar1, 1);
    let _answer = _at_2(__SplVar1, 2);
    /* Statements */
    return _postLine_1(
      _stringJoin_1([
        _name_1(_self),
        ": Parameter = ",
        _parameter,
        ", Verified = ",
        _equalsSign_2(_answer, _at_2(_verification_1(_self), _parameter)),
        ", Elapsed Time = ",
        _elapsedTime,
      ]),
    );
  }, ["self", "parameter"]),
  "{ :self :parameter | let __SplVar1 = assertIsOfSize(timing({ value(benchmark(self),parameter) }), 2); let elapsedTime = at(__SplVar1, 1); let answer = at(__SplVar1, 2); postLine(stringJoin([name(self), ': Parameter = ', parameter, ', Verified = ', =(answer, at(verification(self), parameter)), ', Elapsed Time = ', elapsedTime])) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Benchmark",
  "Benchmark",
  ["self", "verification", "benchmark:/1"],
  sl.annotateFunction(function (_self, _verification, _benchmark_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _verification, _benchmark_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newBenchmark_0(),
      _self,
      _verification,
      _benchmark_1,
    );
  }, ["self", "verification", "benchmark:/1"]),
  "{ :self :verification :benchmark:/1 | initializeSlots(newBenchmark(),self, verification, benchmark:/1) }",
);
