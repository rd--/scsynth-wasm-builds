/*  Requires: Bag Fraction RatioTuning  */

sl.addMethod(
  "Fraction",
  "TuningLattice",
  "latticePrimes",
  ["self", "includeOctave"],
  function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_1(_equalsSign_2);
    /* Statements */
    _includeAll_2(_answer, _primeFactors_1(_numerator_1(_self)));
    _includeAll_2(_answer, _primeFactors_1(_denominator_1(_self)));
    _ifFalse_2(_includeOctave, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _without_2(_answer, 2);
    });
    return _sort_1(_asList_1(_answer));
  },
  "{ :self :includeOctave |\n\t\tlet answer = Set(=);\n\t\tanswer.includeAll(self.numerator.primeFactors);\n\t\tanswer.includeAll(self.denominator.primeFactors);\n\t\tincludeOctave.ifFalse {\n\t\t\tanswer.without(2)\n\t\t};\n\t\tanswer.asList.sort\n\t}",
);

sl.addMethod(
  "Fraction",
  "TuningLattice",
  "latticeVector",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAllOf_2(
        _primes,
        _latticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _pf1 = _primeFactors_1(_numerator_1(_self));
        let _pf2 = _negated_1(_primeFactors_1(_denominator_1(_self)));
        let _pf3 = _plusSignPlusSign_2(_pf1, _pf2);
        /* Statements */
        return _collect_2(_primes, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            _occurrencesOf_2(_pf3, _each),
            _occurrencesOf_2(_pf3, _negated_1(_each)),
          );
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Fraction>>latticeVector: incomplete primes");
      },
    );
  },
  "{ :self :primes |\n\t\tprimes.includesAllOf(\n\t\t\tself.latticePrimes(primes.includes(2))\n\t\t).if {\n\t\t\tlet pf1 = self.numerator.primeFactors;\n\t\t\tlet pf2 = self.denominator.primeFactors.negated;\n\t\t\tlet pf3 = pf1 ++ pf2;\n\t\t\tprimes.collect { :each |\n\t\t\t\tpf3.occurrencesOf(each) - pf3.occurrencesOf(each.negated)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Fraction>>latticeVector: incomplete primes')\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "TuningLattice",
  "latticeVectorString",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAllOf_2(
        _primes,
        _latticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _join_2(
          _collect_2(_latticeVector_2(_self, _primes), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _padLeft_3(_asString_1(_each), 2, " ");
          }),
          " ",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return "*";
      },
    );
  },
  "{ :self :primes |\n\t\tprimes.includesAllOf(\n\t\t\tself.latticePrimes(primes.includes(2))\n\t\t).if {\n\t\t\tself.latticeVector(primes).collect { :each |\n\t\t\t\teach.asString.padLeft(2, ' ')\n\t\t\t}.join(' ')\n\t\t} {\n\t\t\t'*'\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "TuningLattice",
  "latticeDistance",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_abs_1(_hyphenMinus_2(_self, _aList)));
  },
  "{ :self :aList |\n\t\t(self - aList).abs.sum\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "TuningLattice",
  "gradyLatticeCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2([[40, 0], [0, 40], [13, 11], [-14, 18], [-8, 4], [-5, 32], [
        7,
        25,
      ], [20, 6]], 40),
      _self,
    );
  },
  "{ :self |\n\t\t[\n\t\t\t40 0;\n\t\t\t0 40;\n\t\t\t13 11;\n\t\t\t-14 18;\n\t\t\t-8 4;\n\t\t\t-5 32;\n\t\t\t7 25;\n\t\t\t20 6\n\t\t] / 40 * self\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "TuningLattice",
  "wilsonLatticeCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2([[20, 0], [0, 20], [4, 3], [-3, 4], [-1, 2]], 20),
      _self,
    );
  },
  "{ :self |\n\t\t[\n\t\t\t20 0;\n\t\t\t0 20;\n\t\t\t4 3;\n\t\t\t-3 4;\n\t\t\t-1 2\n\t\t] / 20 * self\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeEdges",
  ["self", "vertexCoordinates"],
  function (_self, _vertexCoordinates) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertexCoordinates";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indices = _iota_1(_size_1(_self));
    let _answer = [];
    /* Statements */
    _combinationsAtATimeDo_3(_indices, 2, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym192 = _assertIsOfSize_2(_each, 2),
        _i = _at_2(__genSym192, 1),
        _j = _at_2(__genSym192, 2);
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(
          _manhattanDistance_2(
            _at_2(_vertexCoordinates, _i),
            _at_2(_vertexCoordinates, _j),
          ),
          1,
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_answer, _copy_1(_each));
        },
      );
    });
    return _answer;
  },
  "{ :self :vertexCoordinates |\n\t\tlet indices = self.size.iota;\n\t\tlet answer = [];\n\t\tindices.combinationsAtATimeDo(2) { :each |\n\t\t\tlet [i, j] = each;\n\t\t\t(vertexCoordinates[i].manhattanDistance(vertexCoordinates[j]) = 1).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeGraph",
  ["self", "primes", "unitVector"],
  function (_self, _primes, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _primes, _unitVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primesList = _latticeVertexCoordinates_2(_self, _primes);
    let _edgeList = _latticeEdges_2(_self, _primesList);
    let _coordinateList = _collect_2(_primesList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _v = _first_2(_unitVector, _size_1(_each));
      /* Statements */
      return _sum_1(_withCollect_3(_each, _v, function (_count, _unit) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _count, _unit";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_count, _unit);
      }));
    });
    /* Statements */
    return _vertexCoordinates_2(
      _Graph_2(_asList_1(_upOrDownTo_2(1, _size_1(_primesList))), _edgeList),
      _coordinateList,
    );
  },
  "{ :self :primes :unitVector |\n\t\tlet primesList = self.latticeVertexCoordinates(primes);\n\t\tlet edgeList = self.latticeEdges(primesList);\n\t\tlet coordinateList = primesList.collect { :each |\n\t\t\tlet v = unitVector.first(each.size);\n\t\t\teach.withCollect(v) { :count :unit |\n\t\t\t\tcount * unit\n\t\t\t}.sum\n\t\t};\n\t\tGraph(\n\t\t\t[1 .. primesList.size],\n\t\t\tedgeList\n\t\t).vertexCoordinates(coordinateList)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _latticeGraph_3(
      _self,
      _latticeDerivedPrimesVector_2(_self, [3, 5, 7, 11, 13, 17, 19, 23]),
      _gradyLatticeCoordinates_1(1),
    );
  },
  "{ :self |\n\t\tself.latticeGraph(\n\t\t\tself.latticeDerivedPrimesVector(\n\t\t\t\t[3 5 7 11 13 17 19 23]\n\t\t\t),\n\t\t\t1.gradyLatticeCoordinates\n\t\t)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticePrimes",
  ["self", "includeOctave"],
  function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_1(_equalsSign_2);
    /* Statements */
    _do_2(_asRatios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _includeAll_2(_answer, _latticePrimes_2(_each, _includeOctave));
    });
    return _sort_1(_asList_1(_answer));
  },
  "{ :self :includeOctave |\n\t\tlet answer = Set(=);\n\t\tself.asRatios.do { :each |\n\t\t\tanswer.includeAll(each.latticePrimes(includeOctave))\n\t\t};\n\t\tanswer.asList.sort\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeDerivedPrimesVector",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _upperLimit = _last_1(_primes);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_limit_1(_self), _upperLimit),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _primes;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tuningPrimes = _latticePrimes_2(_self, false);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_size_1(_tuningPrimes), _size_1(_primes)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _tuningPrimes;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          },
        );
      },
    );
  },
  "{ :self :primes |\n\t\tlet upperLimit = primes.last;\n\t\t(self.limit <= upperLimit).if {\n\t\t\tprimes\n\t\t} {\n\t\t\tlet tuningPrimes = self.latticePrimes(false);\n\t\t\t(tuningPrimes.size <= primes.size).if {\n\t\t\t\ttuningPrimes\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeVertexCoordinates",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_asRatios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _latticeVector_2(_each, _primes);
    });
  },
  "{ :self :primes |\n\t\tself.asRatios.collect { :each |\n\t\t\teach.latticeVector(primes)\n\t\t}\n\t}",
);
