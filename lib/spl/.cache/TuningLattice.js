/* {- Requires: Bag Fraction -} */

sl.addMethod(
  "Fraction",
  "TuningLattice",
  "latticePrimes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _includeAll_2(_answer, _primeFactors_1(_numerator_1(_self)));
    _includeAll_2(_answer, _primeFactors_1(_denominator_1(_self)));
    return _sort_1(_asArray_1(_without_2(_answer, 2)));
  },
  "{ :self |\n\t\tlet answer = Set();\n\t\tanswer.includeAll(self.numerator.primeFactors);\n\t\tanswer.includeAll(self.denominator.primeFactors);\n\t\tanswer.without(2).asArray.sort\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _pf1 = _primeFactors_1(_numerator_1(_self));
    let _pf2 = _collect_2(_primeFactors_1(_denominator_1(_self)), _negated_1);
    let _pf3 = _asBag_1(_plusPlus_2(_pf1, _pf2));
    /* Statements */
    return _collect_2(_primes, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _minus_2(
        _occurrencesOf_2(_pf3, _each),
        _occurrencesOf_2(_pf3, _negated_1(_each)),
      );
    });
  },
  "{ :self :primes |\n\t\tlet pf1 = self.numerator.primeFactors;\n\t\tlet pf2 = self.denominator.primeFactors.collect(negated:/1);\n\t\tlet pf3 = (pf1 ++ pf2).asBag;\n\t\tprimes.collect { :each |\n\t\t\tpf3.occurrencesOf(each) - pf3.occurrencesOf(each.negated)\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _includesAllOf_2(_primes, _latticePrimes_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _joinSeparatedBy_2(
          _collect_2(_latticeVector_2(_self, _primes), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _padLeft_3(_asString_1(_each), 2, " ");
          }),
          " ",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return "*";
      },
    );
  },
  "{ :self :primes |\n\t\tprimes.includesAllOf(self.latticePrimes).if {\n\t\t\tself.latticeVector(primes).collect { :each |\n\t\t\t\teach.asString.padLeft(2, ' ')\n\t\t\t}.joinSeparatedBy(' ')\n\t\t} {\n\t\t\t'*'\n\t\t}\n\t}",
);

sl.addMethod(
  "Array",
  "TuningLattice",
  "latticeCoordinates",
  ["self", "unitVector"],
  function (_self, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _unitVector";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(
      _withCollect_3(
        _self,
        _first_2(_unitVector, _size_1(_self)),
        function (_count, _unit) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _count, _unit";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _times_2(_count, _unit);
        },
      ),
    );
  },
  "{ :self :unitVector |\n\t\tself.withCollect(unitVector.first(self.size)) { :count :unit |\n\t\t\tcount * unit\n\t\t}.sum\n\t}",
);

sl.addMethod(
  "Array",
  "TuningLattice",
  "latticeDistance",
  ["self", "anArray"],
  function (_self, _anArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_abs_1(_minus_2(_self, _anArray)));
  },
  "{ :self :anArray |\n\t\t(self - anArray).abs.sum\n\t}",
);

sl.addMethod(
  "Array",
  "TuningLattice",
  "wilsonLatticeCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _latticeCoordinates_2(_self, [
      _commercialAt_2(20, 0),
      _commercialAt_2(0, 20),
      _commercialAt_2(4, 3),
      _commercialAt_2(-3, 4),
      _commercialAt_2(-1, 2),
    ]);
  },
  "{ :self |\n\t\tself.latticeCoordinates([20@0, 0@20, 4@3, -3@4, -1@2])\n\t}",
);

sl.extendTraitWithMethod(
  "Tuning",
  "TuningLattice",
  "latticeEdges",
  ["self", "vertices"],
  function (_self, _vertices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _indices = _asArray_1(_upOrDownTo_2(1, _size_1(_self)));
    let _answer = [];
    /* Statements */
    _combinationsAtATimeDo_3(_indices, 2, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let __genSym16 = _assertIsOfSize_2(_each, 2),
        _i = _at_2(__genSym16, 1),
        _j = _at_2(__genSym16, 2);
      /* Statements */
      return _ifTrue_2(
        _equals_2(
          _latticeDistance_2(_at_2(_vertices, _i), _at_2(_vertices, _j)),
          1,
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _copy_1(_each));
        },
      );
    });
    return _answer;
  },
  "{ :self :vertices |\n\t\tlet indices = [1 .. self.size];\n\t\tlet answer = [];\n\t\tindices.combinationsAtATimeDo(2) { :each |\n\t\t\tlet [i, j] = each;\n\t\t\t(vertices[i].latticeDistance(vertices[j]) = 1).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Tuning",
  "TuningLattice",
  "latticePrimes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _do_2(_ratios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _includeAll_2(_answer, _latticePrimes_1(_each));
    });
    return _sort_1(_asArray_1(_answer));
  },
  "{ :self |\n\t\tlet answer = Set();\n\t\tself.ratios.do { :each |\n\t\t\tanswer.includeAll(each.latticePrimes)\n\t\t};\n\t\tanswer.asArray.sort\n\t}",
);

sl.extendTraitWithMethod(
  "Tuning",
  "TuningLattice",
  "latticeVertices",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_ratios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _latticeVector_2(_each, _primes);
    });
  },
  "{ :self :primes |\n\t\tself.ratios.collect { :each |\n\t\t\teach.latticeVector(primes)\n\t\t}\n\t}",
);
