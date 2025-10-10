sl.addType(
  false,
  "PermuteBenchmark",
  "PermuteBenchmark",
  ["Object"],
  ["count", "v"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PermuteBenchmark",
);

sl.addMethodToExistingType(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "benchmark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _count_2(_self, 0);
    _v_2(_self, [0, 0, 0, 0, 0, 0]);
    _permute_2(_self, 6);
    return _count_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.count := 0;\n\t\tself.v := [0, 0, 0, 0, 0, 0];\n\t\tself.permute(6);\n\t\tself.count\n\t}",
);

sl.addMethodToExistingType(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "verifyResult",
  ["self", "result"],
  sl.annotateFunction(function (_self, _result) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _result";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_result, 8660);
  }, ["self", "result"]),
  "{ :self :result |\n\t\tresult = 8660\n\t}",
);

sl.addMethodToExistingType(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "permute",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _count_2(_self, _plusSign_2(_count_1(_self), 1));
    return _ifTrue_2(
      _exclamationMarkEqualsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _permute_2(_self, _hyphenMinus_2(_n, 1));
        return _toByDo_4(
          _n,
          1,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _swapWith_3(_self, _n, _i);
            _permute_2(_self, _hyphenMinus_2(_n, 1));
            return _swapWith_3(_self, _n, _i);
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.count := self.count + 1;\n\t\t(n != 0).ifTrue {\n\t\t\tself.permute(n - 1);\n\t\t\tn.toByDo(1, -1) { :i |\n\t\t\t\tself.swapWith(n,i);\n\t\t\t\tself.permute(n - 1);\n\t\t\t\tself.swapWith(n,i)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "swapWith",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tmp = _at_2(_v_1(_self), _i);
    /* Statements */
    _atPut_3(_v_1(_self), _i, _at_2(_v_1(_self), _j));
    return _atPut_3(_v_1(_self), _j, _tmp);
  }, ["self", "i", "j"]),
  "{ :self :i :j |\n\t\tlet tmp = self.v[i];\n\t\tself.v[i] := self.v[j];\n\t\tself.v[j] := tmp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "PermuteBenchmark",
  "PermuteBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _benchmark_1(_newPermuteBenchmark_0());
  }, []),
  "{\n\t\tnewPermuteBenchmark().benchmark\n\t}",
);
