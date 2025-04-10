/*  Requires: Bag Fraction RatioTuning  */

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "latticePrimes",
  ["self", "includeOctave"],
  sl.annotateFunction(function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_1(_equalsSign_2);
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
  "{ :self :includeOctave | let answer = Set(=); includeAll(answer,primeFactors(numerator(self))); includeAll(answer,primeFactors(denominator(self))); ifFalse(includeOctave, { without(answer,2) }); sort(asList(answer)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "latticeVector",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAllOf_2(
        _primes,
        _latticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _pf1 = _primeFactors_1(_numerator_1(_self));
        let _pf2 = _negated_1(_primeFactors_1(_denominator_1(_self)));
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
              _occurrencesOf_2(_pf3, _negated_1(_each)),
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
        return _error_2(_self, "Fraction>>latticeVector: incomplete primes");
      }, []),
    );
  }, ["self", "primes"]),
  "{ :self :primes | if(includesAllOf(primes,latticePrimes(self,includes(primes,2))), { let pf1 = primeFactors(numerator(self)); let pf2 = negated(primeFactors(denominator(self))); let pf3 = ++(pf1, pf2); collect(primes, { :each | -(occurrencesOf(pf3,each), occurrencesOf(pf3,negated(each))) }) }, { error(self,'Fraction>>latticeVector: incomplete primes') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TuningLattice",
  "latticeVectorString",
  ["self", "primes"],
  sl.annotateFunction(function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAllOf_2(
        _primes,
        _latticePrimes_2(_self, _includes_2(_primes, 2)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unwords_1(
          _collect_2(
            _latticeVector_2(_self, _primes),
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
  "{ :self :primes | if(includesAllOf(primes,latticePrimes(self,includes(primes,2))), { unwords(collect(latticeVector(self,primes), { :each | padLeft(asString(each),[2], ' ') })) }, { '*' }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TuningLattice",
  "latticeDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_abs_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList | sum(abs((-(self, aList)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "gradyLatticeCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2([[40, 0], [0, 40], [13, 11], [-14, 18], [-8, 4], [-5, 32], [
        7,
        25,
      ], [20, 6]], 40),
      _self,
    );
  }, ["self"]),
  "{ :self | *(/([[40, 0], [0, 40], [13, 11], [-14, 18], [-8, 4], [-5, 32], [7, 25], [20, 6]], 40), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TuningLattice",
  "wilsonLatticeCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2([[20, 0], [0, 20], [4, 3], [-3, 4], [-1, 2]], 20),
      _self,
    );
  }, ["self"]),
  "{ :self | *(/([[20, 0], [0, 20], [4, 3], [-3, 4], [-1, 2]], 20), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeEdges",
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
        let __SPL282 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SPL282, 1);
        let _j = _at_2(__SPL282, 2);
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
  "{ :self :vertexCoordinates | let indices = iota(size(self)); let answer = []; combinationsAtATimeDo(indices, 2, { :each | let __SPL282 = assertIsOfSize(each, 2); let i = at(__SPL282, 1); let j = at(__SPL282, 2); ifTrue((=(manhattanDistance(at(vertexCoordinates, i),at(vertexCoordinates, j)), 1)), { add(answer,copy(each)) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeGraph",
  ["self", "primes", "unitVector"],
  sl.annotateFunction(function (_self, _primes, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _primes, _unitVector";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primesList = _latticeVertexCoordinates_2(_self, _primes);
    let _edgeList = _latticeEdges_2(_self, _primesList);
    let _coordinateList = _collect_2(
      _primesList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _first_2(_unitVector, _size_1(_each));
        /* Statements */
        return _sum_1(
          _withCollect_3(
            _each,
            _v,
            sl.annotateFunction(function (_count, _unit) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _count, _unit";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(_count, _unit);
            }, ["count", "unit"]),
          ),
        );
      }, ["each"]),
    );
    /* Statements */
    return _vertexCoordinates_2(
      _Graph_2(_asList_1(_upOrDownTo_2(1, _size_1(_primesList))), _edgeList),
      _coordinateList,
    );
  }, ["self", "primes", "unitVector"]),
  "{ :self :primes :unitVector | let primesList = latticeVertexCoordinates(self,primes); let edgeList = latticeEdges(self,primesList); let coordinateList = collect(primesList, { :each | let v = first(unitVector,size(each)); sum(withCollect(each, v, { :count :unit | *(count, unit) })) }); vertexCoordinates(Graph(asList(upOrDownTo(1, size(primesList))), edgeList),coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _latticeGraph_3(
      _self,
      _latticeDerivedPrimesVector_2(_self, [3, 5, 7, 11, 13, 17, 19, 23]),
      _gradyLatticeCoordinates_1(1),
    );
  }, ["self"]),
  "{ :self | latticeGraph(self,latticeDerivedPrimesVector(self,[3, 5, 7, 11, 13, 17, 19, 23]), gradyLatticeCoordinates(1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticePrimes",
  ["self", "includeOctave"],
  sl.annotateFunction(function (_self, _includeOctave) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _includeOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_1(_equalsSign_2);
    /* Statements */
    _do_2(
      _asRatios_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(_answer, _latticePrimes_2(_each, _includeOctave));
      }, ["each"]),
    );
    return _sort_1(_asList_1(_answer));
  }, ["self", "includeOctave"]),
  "{ :self :includeOctave | let answer = Set(=); do(asRatios(self), { :each | includeAll(answer,latticePrimes(each,includeOctave)) }); sort(asList(answer)) }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeDerivedPrimesVector",
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
      _lessThanSignEqualsSign_2(_limit_1(_self), _upperLimit),
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
        let _tuningPrimes = _latticePrimes_2(_self, false);
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
  "{ :self :primes | let upperLimit = last(primes); if((<=(limit(self), upperLimit)), { primes }, { let tuningPrimes = latticePrimes(self,false); if((<=(size(tuningPrimes), size(primes))), { tuningPrimes }, { nil }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "TuningLattice",
  "latticeVertexCoordinates",
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
        return _latticeVector_2(_each, _primes);
      }, ["each"]),
    );
  }, ["self", "primes"]),
  "{ :self :primes | collect(asRatios(self), { :each | latticeVector(each,primes) }) }",
);
