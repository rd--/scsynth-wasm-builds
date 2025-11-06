sl.addType(
  false,
  "Scale",
  "Scale",
  ["Object"],
  ["startIndex", "intervals", "description"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Scale",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _asterisk_2(
      _plusSignPlusSign_2([0], _prefixSum_1(_intervals_1(_self))),
      3,
    );
    /* Statements */
    return _LineDrawing_2([
      _collect_2(
        _i,
        sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _Line_1([[_x, -1], [_x, 1]]);
        }, ["x"]),
      ),
      _Line_1([[_min_1(_i), 0], [_max_1(_i), 0]]),
    ], _Record_1([["height", 50]]));
  }, ["self"]),
  "{ :self |\n\t\tlet i = [0] ++ self.intervals.prefixSum * 3;\n\t\t[\n\t\t\ti.collect { :x |\n\t\t\t\tLine([x -1; x 1])\n\t\t\t},\n\t\t\tLine([[i.min, 0], [i.max, 0]])\n\t\t].LineDrawing(\n\t\t\theight: 50\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "degreeToKey",
  ["self", "scaleDegree"],
  sl.annotateFunction(function (_self, _scaleDegree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scaleDegree";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_scaleDegree),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _scaleDegree,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _fractionalDegreeToKey_2(_self, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fractionalDegreeToKey_2(_self, _scaleDegree);
      }, []),
    );
  }, ["self", "scaleDegree"]),
  "{ :self :scaleDegree |\n\t\tscaleDegree.isCollection.if {\n\t\t\tscaleDegree.collect { :each |\n\t\t\t\tself.fractionalDegreeToKey(each)\n\t\t\t}\n\t\t} {\n\t\t\tself.fractionalDegreeToKey(scaleDegree)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _drawing_1(_asLineDrawing_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asLineDrawing.drawing\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "fractionalDegreeToKey",
  ["self", "scaleDegree"],
  sl.annotateFunction(function (_self, _scaleDegree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scaleDegree";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _accidental = _round_1(
      _asterisk_2(_fractionalPart_1(_scaleDegree), 10),
    );
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_accidental, 5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _accidental = _negate_1(_hyphenMinus_2(10, _accidental));
      }, []),
    );
    return _integerDegreeToKey_3(_self, _round_1(_scaleDegree), _accidental);
  }, ["self", "scaleDegree"]),
  "{ :self :scaleDegree |\n\t\tlet accidental = (scaleDegree.fractionalPart * 10).round;\n\t\t(accidental > 5).ifTrue {\n\t\t\taccidental := (10 - accidental).negate\n\t\t};\n\t\tself.integerDegreeToKey(scaleDegree.round, accidental)\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "integerDegreeToKey",
  ["self", "scaleDegree", "accidental"],
  sl.annotateFunction(function (_self, _scaleDegree, _accidental) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scaleDegree, _accidental";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stepsPerOctave = _tuningSize_1(_self);
    let _tuningIndices = _tuningIndices_1(_self);
    let _baseKey = _plusSign_2(
      _asterisk_2(
        _stepsPerOctave,
        _quotientBy_3(
          _hyphenMinus_2(_scaleDegree, 1),
          _size_1(_self),
          _floor_1,
        ),
      ),
      _atWrap_2(_tuningIndices, _scaleDegree),
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_accidental, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _baseKey;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _baseKey,
          _asterisk_2(_accidental, _solidus_2(12, _stepsPerOctave)),
        );
      }, []),
    );
  }, ["self", "scaleDegree", "accidental"]),
  "{ :self :scaleDegree :accidental |\n\t\tlet stepsPerOctave = self.tuningSize;\n\t\tlet tuningIndices = self.tuningIndices;\n\t\tlet baseKey = (stepsPerOctave * ((scaleDegree - 1).quotientBy(self.size, floor:/1))) + tuningIndices.atWrap(scaleDegree);\n\t\t(accidental = 0).if {\n\t\t\tbaseKey\n\t\t} {\n\t\t\tbaseKey + (accidental * (12 / stepsPerOctave))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "intervalsBy",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_anInteger, 1, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _intervals = _intervals_1(_self);
        let _k = _hyphenMinus_2(_anInteger, 1);
        /* Statements */
        return _collect_2(
          _to_2(1, _size_1(_self)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_2(
              _to_2(_i, _plusSign_2(_i, _k)),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atWrap_2(_intervals, _j);
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "intervalsBy: invalid step size");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.betweenAnd(1, self.size).if {\n\t\t\tlet intervals = self.intervals;\n\t\t\tlet k = anInteger - 1;\n\t\t\t1.to(self.size).collect { :i |\n\t\t\t\ti.to(i + k).sum { :j |\n\t\t\t\t\tintervals.atWrap(j)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('intervalsBy: invalid step size')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "intervalClass",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_nub_1(_intervalsBy_2(_self, _anInteger)));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.intervalsBy(anInteger).nub.sort\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "intervalClasses",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _to_2(1, _size_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _intervalClass_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.size).collect { :each |\n\t\t\tself.intervalClass(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "intervalVariety",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_intervalClass_2(_self, _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.intervalClass(anInteger).size\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_stepArity_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.stepArity = 2\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isImproper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isProper_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isProper.not\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isMomentOfSymmetry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _collect_2(
        _to_2(1, _hyphenMinus_2(_size_1(_self), 1)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _intervalClass_2(_self, _each);
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_each), 2);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.size - 1).collect { :each |\n\t\t\tself.intervalClass(each)\n\t\t}.allSatisfy { :each |\n\t\t\teach.size = 2\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isProper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedBy_2(
      _intervalClasses_1(_self),
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _p,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _q,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_i, _j);
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, ["p", "q"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.intervalClasses.isSortedBy { :p :q |\n\t\t\tp.allSatisfy { :i |\n\t\t\t\tq.allSatisfy { :j |\n\t\t\t\t\ti <= j\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isStrictlyProper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedBy_2(
      _intervalClasses_1(_self),
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _p,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _q,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_i, _j);
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, ["p", "q"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.intervalClasses.isSortedBy { :p :q |\n\t\t\tp.allSatisfy { :i |\n\t\t\t\tq.allSatisfy { :j |\n\t\t\t\t\ti < j\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "isTernary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_stepArity_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.stepArity = 3\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "nameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_description_1(_self), ", ");
  }, ["self"]),
  "{ :self |\n\t\tself.description.splitBy(', ')\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_intervals_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.intervals.size\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "stepArity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_nub_1(_intervals_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.intervals.nub.size\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "textDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _opening = "├";
    let _separator = "┼";
    let _closing = "┤";
    let _dash = "─";
    /* Statements */
    return _stringJoin_1([
      _opening,
      _intersperse_2(
        _collect_2(
          _intervals_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _numberSign_2(_dash, _hyphenMinus_2(_each, 1));
          }, ["each"]),
        ),
        _separator,
      ),
      _closing,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet opening = '├';\n\t\tlet separator = '┼';\n\t\tlet closing = '┤';\n\t\tlet dash = '─';\n\t\t[\n\t\t\topening,\n\t\t\tself.intervals.collect { :each |\n\t\t\t\tdash # (each - 1)\n\t\t\t}.intersperse(separator),\n\t\t\tclosing\n\t\t].stringJoin\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "tuningIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = _startIndex_1(_self);
    let _answer = [_sum];
    let _tuningSize = _tuningSize_1(_self);
    /* Statements */
    _allButLastDo_2(
      _intervals_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _sum = _mod_3(_plusSign_2(_sum, _each), _tuningSize, 1);
        return _add_2(_answer, _sum);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet sum = self.startIndex;\n\t\tlet answer = [sum];\n\t\tlet tuningSize = self.tuningSize;\n\t\tself.intervals.allButLastDo { :each |\n\t\t\tsum := (sum + each).mod(tuningSize, 1);\n\t\t\tanswer.add(sum)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Scale",
  "Scale",
  "tuningSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_intervals_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.intervals.sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Scale",
  "Scale",
  ["startIndex", "intervals", "description"],
  sl.annotateFunction(function (_startIndex, _intervals, _description) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _startIndex, _intervals, _description";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newScale_0(),
      _startIndex,
      _intervals,
      _description,
    );
  }, ["startIndex", "intervals", "description"]),
  "{ :startIndex :intervals :description |\n\t\tnewScale().initializeSlots(startIndex, intervals, description)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Scale",
  "asScale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Scale_3(1, _self, "*undescribed scale*");
  }, ["self"]),
  "{ :self |\n\t\tScale(1, self, '*undescribed scale*')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Scale",
  "namedScale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answers = _namedScales_1(_self);
    /* Statements */
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_answers), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedScale: no such singular scale");
      }, []),
    );
    return _at_2(_answers, 1);
  }, ["self"]),
  "{ :self |\n\t\tlet answers = self.namedScales;\n\t\t(answers.size != 1).ifTrue {\n\t\t\tself.error('namedScale: no such singular scale')\n\t\t};\n\t\tanswers[1]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Scale",
  "namedScales",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _select_2(
      _scalaScaleArchive_1(_system),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_nameList_1(_each), _self);
      }, ["each"]),
    );
    /* Statements */
    _ifTrue_2(
      _isEmpty_1(_answer),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedScales: no such scale");
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = system.scalaScaleArchive.select { :each |\n\t\t\teach.nameList.includes(self)\n\t\t};\n\t\tanswer.isEmpty.ifTrue {\n\t\t\tself.error('namedScales: no such scale')\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scale",
  "momentOfSymmetry",
  ["generator", "period", "maxDepth"],
  sl.annotateFunction(function (_generator, _period, _maxDepth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _generator, _period, _maxDepth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _generator;
    let _j = _hyphenMinus_2(_period, _generator);
    let _nextPair_1 = sl.annotateFunction(function (_pair) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _pair";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_pair, 2);
      let _i = _at_2(__SplVar1, 1);
      let _j = _at_2(__SplVar1, 2);
      /* Statements */
      return _if_3(
        _lessThanSign_2(_i, _j),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [_i, _hyphenMinus_2(_j, _i)];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [_hyphenMinus_2(_i, _j), _j];
        }, []),
      );
    }, ["pair"]);
    let _depth = 1;
    let _answer = [[_i, _j]];
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _previousLevel = _last_1(_answer);
      let _k = _max_2(_i, _j);
      let __SplVar2 = _assertIsOfSize_2(_nextPair_1([_i, _j]), 2);
      let _p = _at_2(__SplVar2, 1);
      let _q = _at_2(__SplVar2, 2);
      let _nextLevel = _copyReplaceAllWith_3(_previousLevel, [_k], [_p, _q]);
      /* Statements */
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = [_p, _q];
        /* Statements */
        _i = _at_2(__SplVar3, 1);
        return _j = _at_2(__SplVar3, 2);
      }, [])();
      _depth = _plusSign_2(_depth, 1);
      return _if_3(
        _verticalLine_2(
          _verticalLine_2(
            _verticalLine_2(
              _tilde_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _tilde_2(_i, 0);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _tilde_2(_j, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_depth, _maxDepth);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_answer, _nextLevel);
          return true;
        }, []),
      );
    }, []));
    return _answer;
  }, ["generator", "period", "maxDepth"]),
  "{ :generator :period :maxDepth |\n\t\tlet i = generator;\n\t\tlet j = period - generator;\n\t\tlet nextPair = { :pair |\n\t\t\tlet [i, j] = pair;\n\t\t\t(i < j).if { [i, j - i] } { [i - j, j] }\n\t\t};\n\t\tlet depth = 1;\n\t\tlet answer = [[i, j]];\n\t\t{\n\t\t\tlet previousLevel = answer.last;\n\t\t\tlet k = i.max(j);\n\t\t\tlet [p, q] = [i, j].nextPair;\n\t\t\tlet nextLevel = previousLevel.copyReplaceAllWith([k], [p, q]);\n\t\t\t[i, j] := [p, q];\n\t\t\tdepth := depth + 1;\n\t\t\t( i ~ j | { i ~ 0 } | { j ~ 0 } | { depth > maxDepth } ).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tanswer.add(nextLevel);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scale",
  "momentOfSymmetry",
  ["generator", "period"],
  sl.annotateFunction(function (_generator, _period) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _generator, _period";
      throw new Error(errorMessage);
    } /* Statements */
    return _momentOfSymmetry_3(_generator, _period, 24);
  }, ["generator", "period"]),
  "{ :generator :period |\n\t\tmomentOfSymmetry(generator, period, 24)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scale",
  "momentOfSymmetryPattern",
  ["generator", "period", "alpha", "beta"],
  sl.annotateFunction(function (_generator, _period, _alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _generator, _period, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _hyphenMinus_2(_period, _generator);
    let _y = _hyphenMinus_2(_period, _asterisk_2(_x, 2));
    /* Statements */
    return _momentOfSymmetryXy_4(_x, _y, _alpha, _beta);
  }, ["generator", "period", "alpha", "beta"]),
  "{ :generator :period :alpha :beta |\n\t\tlet x = period - generator;\n\t\tlet y = period - (x * 2);\n\t\tmomentOfSymmetryXy(x, y, alpha, beta)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scale",
  "momentOfSymmetryPattern",
  ["generator", "period"],
  sl.annotateFunction(function (_generator, _period) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _generator, _period";
      throw new Error(errorMessage);
    } /* Statements */
    return _momentOfSymmetryPattern_4(_generator, _period, "L", "s");
  }, ["generator", "period"]),
  "{ :generator :period |\n\t\tgenerator.momentOfSymmetryPattern(period, 'L', 's')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scale",
  "momentOfSymmetryXy",
  ["x", "y", "l", "s"],
  sl.annotateFunction(function (_x, _y, _l, _s) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _l, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = "";
    /* Statements */
    _if_3(
      _verticalLine_2(
        _equalsSign_2(_x, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_y, 1);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_x, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_y, 1);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSignPlusSign_2(_l, _s);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _ampersand_2(
                _equalsSign_2(_x, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _greaterThanSign_2(_y, 1);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _stringJoin_1([_l, _numberSign_2(_s, _y)]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _ampersand_2(
                    _greaterThanSign_2(_x, 1),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_y, 1);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _answer = _stringJoin_1([_numberSign_2(_l, _x), _s]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1("momentOfSymmetryXy");
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _gcd_2(_x, _y);
        /* Statements */
        return _if_3(
          _exclamationMarkEqualsSign_2(_k, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _stringJoin_1(
              _numberSign_2(
                _momentOfSymmetryXy_4(
                  _solidusSolidus_2(_x, _k),
                  _solidusSolidus_2(_y, _k),
                  _l,
                  _s,
                ),
                _k,
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_k, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _m1 = _min_2(_x, _y);
                let _m2 = _max_2(_x, _y);
                let _z = _percentSign_2(_m2, _m1);
                let _w = _hyphenMinus_2(_m1, _z);
                let _prescale = _momentOfSymmetryXy_4(_z, _w, _l, _s);
                let _lRule = "";
                let _sRule = "";
                /* Statements */
                _ifTrue_2(
                  _lessThanSign_2(_x, _y),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _reverse_1(_prescale);
                  }, []),
                );
                _if_3(
                  _greaterThanSign_2(_x, _y),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _lRule = _stringJoin_1([
                      _numberSign_2(_l, _ceiling_1(_solidus_2(_m2, _m1))),
                      _s,
                    ]);
                    return _sRule = _stringJoin_1([
                      _numberSign_2(_l, _floor_1(_solidus_2(_m2, _m1))),
                      _s,
                    ]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _lRule = _stringJoin_1([
                      _l,
                      _numberSign_2(_s, _ceiling_1(_solidus_2(_m2, _m1))),
                    ]);
                    return _sRule = _stringJoin_1([
                      _l,
                      _numberSign_2(_s, _floor_1(_solidus_2(_m2, _m1))),
                    ]);
                  }, []),
                );
                return _do_2(
                  _contents_1(_prescale),
                  sl.annotateFunction(function (_step) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _step";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_step, _l),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _answer = _plusSignPlusSign_2(_answer, _lRule);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _equalsSign_2(_step, _s),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _answer = _plusSignPlusSign_2(
                              _answer,
                              _sRule,
                            );
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _error_1("momentOfSymmetryXy");
                          }, []),
                        );
                      }, []),
                    );
                  }, ["step"]),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_1("momentOfSymmetryXy");
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["x", "y", "l", "s"]),
  "{ :x :y :l :s |\n\t\tlet answer = '';\n\t\t(x = 1 | { y = 1 }).if {\n\t\t\t(x = 1 & { y = 1 }).if {\n\t\t\t\tanswer := l ++ s\n\t\t\t} {\n\t\t\t\t(x = 1 & { y > 1 }).if {\n\t\t\t\t\tanswer := [l, s # y].stringJoin\n\t\t\t\t} {\n\t\t\t\t\t(x > 1 & { y = 1 }).if {\n\t\t\t\t\t\tanswer := [l # x, s].stringJoin\n\t\t\t\t\t} {\n\t\t\t\t\t\t'momentOfSymmetryXy'.error\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tlet k = x.gcd(y);\n\t\t\t(k != 1).if {\n\t\t\t\tanswer := (momentOfSymmetryXy(x // k, y // k, l, s) # k).stringJoin\n\t\t\t} {\n\t\t\t\t(k = 1).if {\n\t\t\t\t\tlet m1 = min(x, y);\n\t\t\t\t\tlet m2 = max(x, y);\n\t\t\t\t\tlet z = m2 % m1;\n\t\t\t\t\tlet w = m1 - z;\n\t\t\t\t\tlet prescale = momentOfSymmetryXy(z, w, l, s);\n\t\t\t\t\tlet lRule = '';\n\t\t\t\t\tlet sRule = '';\n\t\t\t\t\t(x < y).ifTrue {\n\t\t\t\t\t\tprescale.reverse\n\t\t\t\t\t};\n\t\t\t\t\t(x > y).if {\n\t\t\t\t\t\tlRule := [l # ceiling(m2 / m1), s].stringJoin;\n\t\t\t\t\t\tsRule := [l # floor(m2 / m1), s].stringJoin\n\t\t\t\t\t} {\n\t\t\t\t\t\tlRule := [l, s # ceiling(m2 / m1)].stringJoin;\n\t\t\t\t\t\tsRule := [l, s # floor(m2 / m1)].stringJoin\n\t\t\t\t\t};\n\t\t\t\t\tprescale.contents.do { :step |\n\t\t\t\t\t\t(step = l).if {\n\t\t\t\t\t\t\tanswer := answer ++ lRule\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(step = s).if {\n\t\t\t\t\t\t\t\tanswer := answer ++ sRule\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t'momentOfSymmetryXy'.error\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t'momentOfSymmetryXy'.error\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Scale",
  "horogramDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circularPartitionsDrawing_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.circularPartitionsDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Scale",
  "horogramDrawingTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _period = _sum_1(_anyOne_1(_self));
    /* Statements */
    return _integerPartitionsTable_1(
      _plusSignPlusSign_2(_self, [_numberSign_2(1, _period)]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet period = self.anyOne.sum;\n\t\t(self ++ [1 # period]).integerPartitionsTable\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Scale",
  "rectangularHorogramDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rectangularPartitionsDrawing_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.rectangularPartitionsDrawing\n\t}",
);
