sl.addMethod(
  "SmallFloat",
  "SieveBenchmark",
  "sieveBenchmark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_sieveOfEratosthenes_1(_self));
  },
  "{ :self |\n\t\tself.sieveOfEratosthenes.size\n\t}",
);
