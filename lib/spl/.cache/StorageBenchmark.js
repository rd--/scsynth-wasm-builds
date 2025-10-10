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
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\tlet random = SomRandom();\n\t\tself.count := 0;\n\t\tself.buildTreeDepthWith(7, random);\n\t\tself.count\n\t}",
);

sl.addMethodToExistingType(
  "StorageBenchark",
  "StorageBenchmark",
  "buildTreeDepthWith",
  ["self", "depth", "random"],
  sl.annotateFunction(function (_self, _depth, _random) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _random";
      throw new Error(errorMessage);
    } /* Statements */
    _count_2(_self, _plusSign_2(_count_1(_self), 1));
    return _if_3(
      _equalsSign_2(_depth, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_1(_plusSign_2(_percentSign_2(_next_1(_random), 10), 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fill_2(
          4,
          sl.annotateFunction(function (_unusedIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _unusedIndex";
              throw new Error(errorMessage);
            } /* Statements */
            return _buildTreeDepthWith_3(
              _self,
              _hyphenMinus_2(_depth, 1),
              _random,
            );
          }, ["unusedIndex"]),
        );
      }, []),
    );
  }, ["self", "depth", "random"]),
  "{ :self :depth :random |\n\t\tself.count := self.count + 1;\n\t\t(depth = 1).if {\n\t\t\tList(random.next % 10 + 1)\n\t\t} {\n\t\t\t4.fill { :unusedIndex |\n\t\t\t\tself.buildTreeDepthWith(depth - 1, random)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "StorageBenchmark",
  "StorageBenchark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _benchmark_1(_newStorageBenchark_0());
  }, []),
  "{\n\t\tnewStorageBenchark().benchmark\n\t}",
);
