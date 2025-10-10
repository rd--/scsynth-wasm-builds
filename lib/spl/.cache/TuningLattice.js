/*  Requires: Fraction RatioTuning  */

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "tuningLatticePrimes",
  ["self", "includeOctave"],
  sl.annotateFunction(function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _includeAll_2(_answer, _primeFactors_1(_numerator_1(_self)));
    _includeAll_2(_answer, _primeFactors_1(_denominator_1(_self)));
    _ifFalse_2(
      _includeOctave,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _without_2(_answer, 2);
      }, []),
    );
    return _sort_1(_asList_1(_answer));
  }, ["self", "includeOctave"]),
  "{ :self :includeOctave |\n\t\tlet answer = Set();\n\t\tanswer.includeAll(self.numerator.primeFactors);\n\t\tanswer.includeAll(self.denominator.primeFactors);\n\t\tincludeOctave.ifFalse {\n\t\t\tanswer.without(2)\n\t\t};\n\t\tanswer.asList.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "tuningLatticeVector",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAll_2(
        _primes,
        _tuningLatticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _pf1 = _primeFactors_1(_numerator_1(_self));
        let _pf2 = _negate_1(_primeFactors_1(_denominator_1(_self)));
        let _pf3 = _plusSignPlusSign_2(_pf1, _pf2);
        /* Statements */
        return _collect_2(
          _primes,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              _occurrencesOf_2(_pf3, _each),
              _occurrencesOf_2(_pf3, _negate_1(_each)),
            );
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "Fraction>>tuningLatticeVector: incomplete primes",
        );
      }, []),
    );
  }, ["self", "primes"]),
  "{ :self :primes |\n\t\tprimes.includesAll(\n\t\t\tself.tuningLatticePrimes(primes.includes(2))\n\t\t).if {\n\t\t\tlet pf1 = self.numerator.primeFactors;\n\t\t\tlet pf2 = self.denominator.primeFactors.negate;\n\t\t\tlet pf3 = pf1 ++ pf2;\n\t\t\tprimes.collect { :each |\n\t\t\t\tpf3.occurrencesOf(each) - pf3.occurrencesOf(each.negate)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Fraction>>tuningLatticeVector: incomplete primes')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "tuningLatticeVectorString",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAll_2(
        _primes,
        _tuningLatticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unwords_1(
          _collect_2(
            _tuningLatticeVector_2(_self, _primes),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _padLeft_3(_asString_1(_each), [2], " ");
            }, ["each"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "*";
      }, []),
    );
  }, ["self", "primes"]),
  "{ :self :primes |\n\t\tprimes.includesAll(\n\t\t\tself.tuningLatticePrimes(primes.includes(2))\n\t\t).if {\n\t\t\tself.tuningLatticeVector(primes).collect { :each |\n\t\t\t\teach.asString.padLeft([2], ' ')\n\t\t\t}.unwords\n\t\t} {\n\t\t\t'*'\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TuningLattice",
  "tuningLatticeDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_abs_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\t(self - aList).abs.sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "gradyTuningLatticeCoordinates",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(
        _first_2([[40, 0], [0, 40], [13, 11], [-14, 18], [-8, 4], [-5, 32], [
          7,
          25,
        ], [20, 6]], _n),
        40,
      ),
      _m,
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\t[\n\t\t\t40 0;\n\t\t\t0 40;\n\t\t\t13 11;\n\t\t\t-14 18;\n\t\t\t-8 4;\n\t\t\t-5 32;\n\t\t\t7 25;\n\t\t\t20 6\n\t\t].first(n) / 40 * m\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "gradyTuningLatticeCoordinates",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _gradyTuningLatticeCoordinates_2(_m, 8);
  }, ["m"]),
  "{ :m |\n\t\tm.gradyTuningLatticeCoordinates(8)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "wilsonTuningLatticeCoordinates",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(
        _first_2([[20, 0], [0, 20], [4, 3], [-3, 4], [-1, 2]], _n),
        20,
      ),
      _m,
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\t[\n\t\t\t20 0;\n\t\t\t0 20;\n\t\t\t4 3;\n\t\t\t-3 4;\n\t\t\t-1 2\n\t\t].first(n) / 20 * m\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "wilsonTuningLatticeCoordinates",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _wilsonTuningLatticeCoordinates_2(_m, 5);
  }, ["m"]),
  "{ :m |\n\t\tm.wilsonTuningLatticeCoordinates(5)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticeEdges",
  ["self", "vertexCoordinates"],
  sl.annotateFunction(function (_self, _vertexCoordinates) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertexCoordinates";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indices = _iota_1(_size_1(_self));
    let _answer = [];
    /* Statements */
    _combinationsAtATimeDo_3(
      _indices,
      2,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SplVar1, 1);
        let _j = _at_2(__SplVar1, 2);
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(
            _manhattanDistance_2(
              _at_2(_vertexCoordinates, _i),
              _at_2(_vertexCoordinates, _j),
            ),
            1,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "vertexCoordinates"]),
  "{ :self :vertexCoordinates |\n\t\tlet indices = self.size.iota;\n\t\tlet answer = [];\n\t\tindices.combinationsAtATimeDo(2) { :each |\n\t\t\tlet [i, j] = each;\n\t\t\t(vertexCoordinates[i].manhattanDistance(vertexCoordinates[j]) = 1).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticeGraph",
  ["self", "primes", "unitVector"],
  sl.annotateFunction(function (_self, _primes, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _primes, _unitVector";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dimensionCount = _size_1(_primes);
    let _basisVector = _first_2(_unitVector, _dimensionCount);
    let _primesList = _tuningLatticeVertexCoordinates_2(_self, _primes);
    let _edgeList = _tuningLatticeEdges_2(_self, _primesList);
    let _coordinateList = _collect_2(
      _primesList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(_asterisk_2(_each, _basisVector));
      }, ["each"]),
    );
    /* Statements */
    return _vertexCoordinates_2(
      _Graph_2(_asList_1(_upOrDownTo_2(1, _size_1(_primesList))), _edgeList),
      _coordinateList,
    );
  }, ["self", "primes", "unitVector"]),
  "{ :self :primes :unitVector |\n\t\tlet dimensionCount = primes.size;\n\t\tlet basisVector = unitVector.first(dimensionCount);\n\t\tlet primesList = self.tuningLatticeVertexCoordinates(primes);\n\t\tlet edgeList = self.tuningLatticeEdges(primesList);\n\t\tlet coordinateList = primesList.collect { :each |\n\t\t\t(each * basisVector).sum\n\t\t};\n\t\tGraph(\n\t\t\t[1 .. primesList.size],\n\t\t\tedgeList\n\t\t).vertexCoordinates(coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticeGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuningLatticeGraph_3(
      _self,
      _tuningLatticeDerivedPrimesVector_2(_self, [3, 5, 7, 11, 13, 17, 19, 23]),
      _gradyTuningLatticeCoordinates_1(1),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.tuningLatticeGraph(\n\t\t\tself.tuningLatticeDerivedPrimesVector(\n\t\t\t\t[3 5 7 11 13 17 19 23]\n\t\t\t),\n\t\t\t1.gradyTuningLatticeCoordinates\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticePrimes",
  ["self", "includeOctave"],
  sl.annotateFunction(function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _do_2(
      _asRatios_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(
          _answer,
          _tuningLatticePrimes_2(_each, _includeOctave),
        );
      }, ["each"]),
    );
    return _sort_1(_asList_1(_answer));
  }, ["self", "includeOctave"]),
  "{ :self :includeOctave |\n\t\tlet answer = Set();\n\t\tself.asRatios.do { :each |\n\t\t\tanswer.includeAll(each.tuningLatticePrimes(includeOctave))\n\t\t};\n\t\tanswer.asList.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticeDerivedPrimesVector",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _upperLimit = _last_1(_primes);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_primeLimit_1(_self), _upperLimit),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _primes;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tuningPrimes = _tuningLatticePrimes_2(_self, false);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_size_1(_tuningPrimes), _size_1(_primes)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tuningPrimes;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
        );
      }, []),
    );
  }, ["self", "primes"]),
  "{ :self :primes |\n\t\tlet upperLimit = primes.last;\n\t\t(self.primeLimit <= upperLimit).if {\n\t\t\tprimes\n\t\t} {\n\t\t\tlet tuningPrimes = self.tuningLatticePrimes(false);\n\t\t\t(tuningPrimes.size <= primes.size).if {\n\t\t\t\ttuningPrimes\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "tuningLatticeVertexCoordinates",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _asRatios_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tuningLatticeVector_2(_each, _primes);
      }, ["each"]),
    );
  }, ["self", "primes"]),
  "{ :self :primes |\n\t\tself.asRatios.collect { :each |\n\t\t\teach.tuningLatticeVector(primes)\n\t\t}\n\t}",
);
