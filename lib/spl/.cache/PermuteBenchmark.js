sl.addType(
  false,
  "PermuteBenchmark",
  "PermuteBenchmark",
  ["Object"],
  ["count", "v"],
);

sl.copyTraitToType(
  "Object",
  "PermuteBenchmark",
);

sl.addMethod(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "benchmark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _count_2(_self, 0);
    _v_2(_self, [0, 0, 0, 0, 0, 0]);
    _permute_2(_self, 6);
    return _count_1(_self);
  },
  "{ :self |\n\t\tself.count := 0;\n\t\tself.v := [0, 0, 0, 0, 0, 0];\n\t\tself.permute(6);\n\t\tself.count\n\t}",
);

sl.addMethod(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "verifyResult",
  ["self", "result"],
  function (_self, _result) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _result";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_result, 8660);
  },
  "{ :self :result |\n\t\tresult = 8660\n\t}",
);

sl.addMethod(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "permute",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _count_2(_self, _plusSign_2(_count_1(_self), 1));
    return _ifTrue_2(_tildeEqualsSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _permute_2(_self, _hyphenMinus_2(_n, 1));
      return _downToDo_3(_n, 1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _swapWith_3(_self, _n, _i);
        _permute_2(_self, _hyphenMinus_2(_n, 1));
        return _swapWith_3(_self, _n, _i);
      });
    });
  },
  "{ :self :n |\n\t\tself.count := self.count + 1;\n\t\t(n ~= 0).ifTrue {\n\t\t\tself.permute(n - 1);\n\t\t\tn.downToDo(1) { :i |\n\t\t\t\tself.swapWith(n,i);\n\t\t\t\tself.permute(n - 1);\n\t\t\t\tself.swapWith(n,i)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "PermuteBenchmark",
  "PermuteBenchmark",
  "swapWith",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _tmp = _at_2(_v_1(_self), _i);
    /* Statements */
    _atPut_3(_v_1(_self), _i, _at_2(_v_1(_self), _j));
    return _atPut_3(_v_1(_self), _j, _tmp);
  },
  "{ :self :i :j |\n\t\tlet tmp = self.v[i];\n\t\tself.v[i] := self.v[j];\n\t\tself.v[j] := tmp\n\t}",
);

sl.addMethod(
  "Void",
  "PermuteBenchmark",
  "PermuteBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _benchmark_1(_newPermuteBenchmark_0());
  },
  "{\n\t\tnewPermuteBenchmark().benchmark\n\t}",
);
