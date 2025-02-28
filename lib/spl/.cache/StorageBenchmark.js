sl.addType(
  false,
  "StorageBenchark",
  "StorageBenchmark",
  ["Object"],
  ["count"],
);

sl.copyTraitMethodsToType(
  "Object",
  "StorageBenchark",
);

sl.addMethodToExistingType(
  "StorageBenchark",
  "StorageBenchmark",
  "benchmark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _random = _SomRandom_0();
    /* Statements */
    _count_2(_self, 0);
    _buildTreeDepthWith_3(_self, 7, _random);
    return _count_1(_self);
  },
  "{ :self | let random = SomRandom(); count(self, 0); buildTreeDepthWith(self,7, random); count(self) }",
);

sl.addMethodToExistingType(
  "StorageBenchark",
  "StorageBenchmark",
  "buildTreeDepthWith",
  ["self", "depth", "random"],
  function (_self, _depth, _random) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _random";
      throw new Error(errorMessage);
    } /* Statements */
    _count_2(_self, _plusSign_2(_count_1(_self), 1));
    return _if_3(_equalsSign_2(_depth, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _List_1(_plusSign_2(_percentSign_2(_next_1(_random), 10), 1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _fill_2(4, function (_unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _buildTreeDepthWith_3(_self, _hyphenMinus_2(_depth, 1), _random);
      });
    });
  },
  "{ :self :depth :random | count(self, +(count(self), 1)); if((=(depth, 1)), { List(+(%(next(random), 10), 1)) }, { fill(4, { :unusedIndex | buildTreeDepthWith(self,-(depth, 1), random) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "StorageBenchmark",
  "StorageBenchark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _benchmark_1(_newStorageBenchark_0());
  },
  "{ benchmark(newStorageBenchark()) }",
);
