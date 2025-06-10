sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "sorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | sort(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "sorted",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_asList_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 | sortBy(asList(self),sortBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "stemLeafPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _negative = _Map_0();
    let _positive = _Map_0();
    /* Statements */
    _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _integerDigits_1(_each);
        let _rhs = _last_1(_d);
        let _lhsList = _if_3(
          _greaterThanSign_2(_size_1(_d), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allButLast_1(_d);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [0];
          }, []),
        );
        let _lhs = _copySignTo_2(_each, _fromDigits_2(_lhsList, 10));
        let _map = _if_3(
          _isNegative_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negative;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _positive;
          }, []),
        );
        /* Statements */
        return _atIfPresentIfAbsent_4(
          _map,
          _lhs,
          sl.annotateFunction(function (_entry) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _entry";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_entry, _rhs);
          }, ["entry"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_map, _lhs, [_rhs]);
          }, []),
        );
      }, ["each"]),
    );
    return _plusSignPlusSign_2(
      _sort_1(_associations_1(_negative)),
      _sort_1(_associations_1(_positive)),
    );
  }, ["self"]),
  "{ :self | let negative = Map(); let positive = Map(); collect(self, { :each | let d = integerDigits(each); let rhs = last(d); let lhsList = if((>(size(d), 1)), { allButLast(d) }, { [0] }); let lhs = copySignTo(each,fromDigits(lhsList,10)); let map = if(isNegative(each), { negative }, { positive }); atIfPresentIfAbsent(map, lhs, { :entry | add(entry,rhs) }, { atPut(map,lhs, [rhs]) }) }); ++(sort(associations(negative)), sort(associations(positive))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "indicesSorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_self);
  }, ["self"]),
  "{ :self | indices(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isMonotonicallyIncreasing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isFinite_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSortedBy_2(_self, _lessThanSignEqualsSign_2);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isFinite(self), { isSortedBy(self,<=) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isSorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedBetweenAnd_3(_self, 1, _size_1(_self));
  }, ["self"]),
  "{ :self | isSortedBetweenAnd(self,1, size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isSortedBetweenAnd",
  ["self", "startIndex", "endIndex"],
  sl.annotateFunction(function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedByBetweenAnd_4(
      _self,
      _lessThanSignEqualsSign_2,
      _startIndex,
      _endIndex,
    );
  }, ["self", "startIndex", "endIndex"]),
  "{ :self :startIndex :endIndex | isSortedByBetweenAnd(self,<=, startIndex, endIndex) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isSortedBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedByBetweenAnd_4(_self, _aBlock_2, 1, _size_1(_self));
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | isSortedByBetweenAnd(self,aBlock:/2, 1, size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isSortedByBetweenAnd",
  ["self", "aBlock:/2", "startIndex", "endIndex"],
  sl.annotateFunction(function (_self, _aBlock_2, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_2, _startIndex, _endIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_endIndex, _startIndex),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _previousElement = _at_2(_self, _startIndex);
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _toDo_3(
            _plusSign_2(_startIndex, 1),
            _endIndex,
            sl.annotateFunction(function (_index) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _index";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _element = _at_2(_self, _index);
              /* Statements */
              _ifFalse_2(
                _aBlock_2(_previousElement, _element),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
              return _previousElement = _element;
            }, ["index"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aBlock:/2", "startIndex", "endIndex"]),
  "{ :self :aBlock:/2 :startIndex :endIndex | if((<=(endIndex, startIndex)), { true }, { let previousElement = at(self, startIndex); valueWithReturn({ :return:/1 | toDo((+(startIndex, 1)), endIndex, { :index | let element = at(self, index); ifFalse(aBlock(previousElement, element), { return(false) }); previousElement := element }); true }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "isStrictlyIncreasing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isFinite_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSortedBy_2(_self, _lessThanSign_2);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isFinite(self), { isSortedBy(self,<) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "longestIncreasingSubsequenceList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _sort_2(
      _increasingSubsequenceList_1(_self),
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_q), _size_1(_p));
      }, ["p", "q"]),
    );
    let _k = _size_1(_first_1(_a));
    /* Statements */
    return _reverse_1(_takeWhile_2(
      _a,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_each), _k);
      }, ["each"]),
    ));
  }, ["self"]),
  "{ :self | let a = sort(increasingSubsequenceList(self), { :p :q | <(size(q), size(p)) }); let k = size(first(a)); reverse(takeWhile(a, { :each | =(size(each), k) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "ordering",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_sortedWithIndices_2(_self, _aBlock_2), _value_1);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | collect(sortedWithIndices(self,aBlock:/2),value:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "ordering",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ordering_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self | ordering(self,<) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "rankingFractional",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = 1;
    let _u = _sortedWithIndices_1(_self);
    let _v = [];
    /* Statements */
    _do_2(
      _split_2(
        _u,
        sl.annotateFunction(function (_p, _q) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _p, _q";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_key_1(_p), _key_1(_q));
        }, ["p", "q"]),
      ),
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _size_1(_p);
        let _q = _mean_1(
          _asList_1(_upOrDownTo_2(_i, _hyphenMinus_2(_plusSign_2(_i, _j), 1))),
        );
        /* Statements */
        _timesRepeat_2(
          _j,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_v, _q);
          }, []),
        );
        return _i = _plusSign_2(_i, _j);
      }, ["p"]),
    );
    return _atAll_2(_v, _ordering_1(_collect_2(_u, _value_1)));
  }, ["self"]),
  "{ :self | let i = 1; let u = sortedWithIndices(self); let v = []; do(split(u, { :p :q | =(key(p), key(q)) }), { :p | let j = size(p); let q = mean(asList(upOrDownTo(i, (-(+(i, j), 1))))); timesRepeat(j, { add(v,q) }); i := +(i, j) }); atAll(v,ordering(collect(u,value:/1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "rankingOrdinal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ordering_1(_ordering_1(_self));
  }, ["self"]),
  "{ :self | ordering(ordering(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "ranking",
  ["self", "mode"],
  sl.annotateFunction(function (_self, _mode) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mode";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_mode, [
      _hyphenMinusGreaterThanSign_2(
        "Fractional",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _rankingFractional_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Ordinal",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _rankingOrdinal_1(_self);
        }, []),
      ),
    ]);
  }, ["self", "mode"]),
  "{ :self :mode | caseOf(mode,[->('Fractional', { rankingFractional(self) }), ->('Ordinal', { rankingOrdinal(self) })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_self, _lessThanSignEqualsSign_2);
  }, ["self"]),
  "{ :self | sortBy(self,<=) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sort",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _aBlock_2,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sort_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sortBy_2(_self, _aBlock_2);
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | ifNil(aBlock:/2, { sort(self) }, { sortBy(self,aBlock:/2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sortOn",
  ["self", "keyBlock:/1"],
  sl.annotateFunction(function (_self, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOnBy_3(_self, _keyBlock_1, _lessThanSignEqualsSign_2);
  }, ["self", "keyBlock:/1"]),
  "{ :self :keyBlock:/1 | sortOnBy(self,keyBlock:/1, <=) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sorted",
  ["self", "aSortBlock:/2"],
  sl.annotateFunction(function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_copy_1(_self), _aSortBlock_2);
  }, ["self", "aSortBlock:/2"]),
  "{ :self :aSortBlock:/2 | sortBy(copy(self),aSortBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_copy_1(_self));
  }, ["self"]),
  "{ :self | sort(copy(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sortedWithIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedWithIndices_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self | sortedWithIndices(self,<) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sortedWithIndices",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sorted_2(
          _withIndexCollect_2(
            _self,
            sl.annotateFunction(function (_each, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _each, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinusGreaterThanSign_2(_each, _index);
            }, ["each", "index"]),
          ),
          sl.annotateFunction(function (_p, _q) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _p, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _sortBlock_2(_key_1(_p), _key_1(_q));
          }, ["p", "q"]),
        );
      }, []),
    );
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 | ifEmpty(self, { [] }, { sorted(withIndexCollect(self, { :each :index | ->(each, index) }), { :p :q | sortBlock(key(p), key(q)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "takeSmallest",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2(_sorted_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | first(sorted(self),anInteger) }",
);
