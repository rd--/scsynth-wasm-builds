sl.addMethod(
  "SmallFloat",
  "SieveBenchmark",
  "sieveBenchmark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _self;
    let _flags = _Array_1(_size);
    let _primeCount = 0;
    /* Statements */
    _atAllPut_2(_flags, true);
    _toDo_3(2, _size, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_at_2(_flags, _minus_2(_i, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _k = _plus_2(_i, _i);
        /* Statements */
        _primeCount = _plus_2(_primeCount, 1);
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThanEquals_2(_k, _size);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_flags, _minus_2(_k, 1), false);
          return _k = _plus_2(_k, _i);
        });
      });
    });
    return _primeCount;
  },
  "{ :self |\n\t\tlet size = self;\n\t\tlet flags = Array(size);\n\t\tlet primeCount = 0;\n\t\tflags.atAllPut(true);\n\t\t2.toDo(size) { :i |\n\t\t\tflags[i - 1].ifTrue{\n\t\t\t\tlet k = i + i;\n\t\t\t\tprimeCount := primeCount + 1;\n\t\t\t\t{ k <= size }.whileTrue {\n\t\t\t\t\tflags[k - 1] := false;\n\t\t\t\t\tk := k + i\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tprimeCount\n\t}",
);
