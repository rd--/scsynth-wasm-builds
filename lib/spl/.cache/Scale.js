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
  "{ :self | let i = *(++([0], prefixSum(intervals(self))), 3); LineDrawing([collect(i, { :x | Line([[x, -1], [x, 1]]) }), Line([[min(i), 0], [max(i), 0]])], Record([['height', 50]])) }",
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
  "{ :self :scaleDegree | if(isCollection(scaleDegree), { collect(scaleDegree, { :each | fractionalDegreeToKey(self,each) }) }, { fractionalDegreeToKey(self,scaleDegree) }) }",
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
    let _accidental = _rounded_1(
      _asterisk_2(_fractionPart_1(_scaleDegree), 10),
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
        return _accidental = _negated_1(_hyphenMinus_2(10, _accidental));
      }, []),
    );
    return _integerDegreeToKey_3(_self, _rounded_1(_scaleDegree), _accidental);
  }, ["self", "scaleDegree"]),
  "{ :self :scaleDegree | let accidental = rounded((*(fractionPart(scaleDegree), 10))); ifTrue((>(accidental, 5)), { accidental := negated((-(10, accidental))) }); integerDegreeToKey(self,rounded(scaleDegree), accidental) }",
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
  "{ :self :scaleDegree :accidental | let stepsPerOctave = tuningSize(self); let tuningIndices = tuningIndices(self); let baseKey = +((*(stepsPerOctave, (quotientBy((-(scaleDegree, 1)),size(self), floor:/1)))), atWrap(tuningIndices,scaleDegree)); if((=(accidental, 0)), { baseKey }, { +(baseKey, (*(accidental, (/(12, stepsPerOctave))))) }) }",
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
          _upOrDownTo_2(1, _size_1(_self)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_1(
              _collect_2(
                _upOrDownTo_2(_i, _plusSign_2(_i, _k)),
                sl.annotateFunction(function (_j) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _atWrap_2(_intervals, _j);
                }, ["j"]),
              ),
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
  "{ :self :anInteger | if(betweenAnd(anInteger,1, size(self)), { let intervals = intervals(self); let k = -(anInteger, 1); collect(upOrDownTo(1, size(self)), { :i | sum(collect(upOrDownTo(i, +(i, k)), { :j | atWrap(intervals,j) })) }) }, { error(self,'intervalsBy: invalid step size') }) }",
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
  "{ :self :anInteger | sort(nub(intervalsBy(self,anInteger))) }",
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
  "{ :self | collect(to(1,size(self)), { :each | intervalClass(self,each) }) }",
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
  "{ :self :anInteger | size(intervalClass(self,anInteger)) }",
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
  "{ :self | =(stepArity(self), 2) }",
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
  "{ :self | not(isProper(self)) }",
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
  "{ :self | allSatisfy(collect(to(1,-(size(self), 1)), { :each | intervalClass(self,each) }), { :each | =(size(each), 2) }) }",
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
  "{ :self | isSortedBy(intervalClasses(self), { :p :q | allSatisfy(p, { :i | allSatisfy(q, { :j | <=(i, j) }) }) }) }",
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
  "{ :self | isSortedBy(intervalClasses(self), { :p :q | allSatisfy(p, { :i | allSatisfy(q, { :j | <(i, j) }) }) }) }",
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
  "{ :self | =(stepArity(self), 3) }",
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
  "{ :self | splitBy(description(self),', ') }",
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
  "{ :self | size(intervals(self)) }",
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
  "{ :self | size(nub(intervals(self))) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | let opening = '├'; let separator = '┼'; let closing = '┤'; let dash = '─'; stringJoin([opening, intersperse(collect(intervals(self), { :each | #(dash, (-(each, 1))) }),separator), closing]) }",
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
  "{ :self | let sum = startIndex(self); let answer = [sum]; let tuningSize = tuningSize(self); allButLastDo(intervals(self), { :each | sum := mod((+(sum, each)),tuningSize, 1); add(answer,sum) }); answer }",
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
  "{ :self | sum(intervals(self)) }",
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
  "{ :startIndex :intervals :description | initializeSlots(newScale(),startIndex, intervals, description) }",
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
  "{ :self | Scale(1, self, '*undescribed scale*') }",
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
      _tildeEqualsSign_2(_size_1(_answers), 1),
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
  "{ :self | let answers = namedScales(self); ifTrue((~=(size(answers), 1)), { error(self,'namedScale: no such singular scale') }); at(answers, 1) }",
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
  "{ :self | let answer = select(scalaScaleArchive(system), { :each | includes(nameList(each),self) }); ifTrue(isEmpty(answer), { error(self,'namedScales: no such scale') }); answer }",
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
      let __SPL1 = _assertIsOfSize_2(_pair, 2);
      let _i = _at_2(__SPL1, 1);
      let _j = _at_2(__SPL1, 2);
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
      let __SPL2 = _assertIsOfSize_2(_nextPair_1([_i, _j]), 2);
      let _p = _at_2(__SPL2, 1);
      let _q = _at_2(__SPL2, 2);
      let _nextLevel = _copyReplaceAllWith_3(_previousLevel, [_k], [_p, _q]);
      /* Statements */
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL3 = [_p, _q];
        /* Statements */
        _i = _at_2(__SPL3, 1);
        return _j = _at_2(__SPL3, 2);
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
  "{ :generator :period :maxDepth | let i = generator; let j = -(period, generator); let nextPair = { :pair | let __SPL1 = assertIsOfSize(pair, 2); let i = at(__SPL1, 1); let j = at(__SPL1, 2); if((<(i, j)), { [i, -(j, i)] }, { [-(i, j), j] }) }; let depth = 1; let answer = [[i, j]]; whileTrue({ let previousLevel = last(answer); let k = max(i,j); let __SPL2 = assertIsOfSize(nextPair([i, j]), 2); let p = at(__SPL2, 1); let q = at(__SPL2, 2); let nextLevel = copyReplaceAllWith(previousLevel,[k], [p, q]); ({ let __SPL3 = [p, q]; i := at(__SPL3, 1); j := at(__SPL3, 2) } . ()); depth := +(depth, 1); if((|(|(|(~(i, j), { ~(i, 0) }), { ~(j, 0) }), { >(depth, maxDepth) })), { false }, { add(answer,nextLevel); true }) }); answer }",
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
  "{ :generator :period | momentOfSymmetry(generator, period, 24) }",
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
  "{ :generator :period :alpha :beta | let x = -(period, generator); let y = -(period, (*(x, 2))); momentOfSymmetryXy(x, y, alpha, beta) }",
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
  "{ :generator :period | momentOfSymmetryPattern(generator,period, 'L', 's') }",
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
          _tildeEqualsSign_2(_k, 1),
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
  "{ :x :y :l :s | let answer = ''; if((|(=(x, 1), { =(y, 1) })), { if((&(=(x, 1), { =(y, 1) })), { answer := ++(l, s) }, { if((&(=(x, 1), { >(y, 1) })), { answer := stringJoin([l, #(s, y)]) }, { if((&(>(x, 1), { =(y, 1) })), { answer := stringJoin([#(l, x), s]) }, { error('momentOfSymmetryXy') }) }) }) }, { let k = gcd(x,y); if((~=(k, 1)), { answer := stringJoin((#(momentOfSymmetryXy(//(x, k), //(y, k), l, s), k))) }, { if((=(k, 1)), { let m1 = min(x, y); let m2 = max(x, y); let z = %(m2, m1); let w = -(m1, z); let prescale = momentOfSymmetryXy(z, w, l, s); let lRule = ''; let sRule = ''; ifTrue((<(x, y)), { reverse(prescale) }); if((>(x, y)), { lRule := stringJoin([#(l, ceiling(/(m2, m1))), s]); sRule := stringJoin([#(l, floor(/(m2, m1))), s]) }, { lRule := stringJoin([l, #(s, ceiling(/(m2, m1)))]); sRule := stringJoin([l, #(s, floor(/(m2, m1)))]) }); do(contents(prescale), { :step | if((=(step, l)), { answer := ++(answer, lRule) }, { if((=(step, s)), { answer := ++(answer, sRule) }, { error('momentOfSymmetryXy') }) }) }) }, { error('momentOfSymmetryXy') }) }) }); answer }",
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
  "{ :self | circularPartitionsDrawing(self) }",
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
  "{ :self | let period = sum(anyOne(self)); integerPartitionsTable((++(self, [#(1, period)]))) }",
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
  "{ :self | rectangularPartitionsDrawing(self) }",
);
