sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "heapSortBy",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = _Heap_1(_sortBlock_2);
    let _l = [];
    let _k = _size_1(_self);
    /* Statements */
    _addAll_2(_h, _self);
    _timesRepeat_2(
      _k,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_l, _removeFirst_1(_h));
      }, []),
    );
    return _l;
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tlet h = Heap(sortBlock:/2);\n\t\tlet l = [];\n\t\tlet k = self.size;\n\t\th.addAll(self);\n\t\tk.timesRepeat {\n\t\t\tl.add(h.removeFirst)\n\t\t};\n\t\tl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "heapSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _heapSortBy_2(_self, _lessThanSignEqualsSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.heapSortBy(<=|)\n\t}",
);

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
  "{ :self |\n\t\tself.asList.sort\n\t}",
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
  "{ :self :sortBlock:/2 |\n\t\tself.asList.sortBy(sortBlock:/2)\n\t}",
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
  "{ :self |\n\t\tlet negative = Map();\n\t\tlet positive = Map();\n\t\tself.collect { :each |\n\t\t\tlet d = each.integerDigits;\n\t\t\tlet rhs = d.last;\n\t\t\tlet lhsList = (d.size > 1).if { d.allButLast } { [0] };\n\t\t\tlet lhs = each.copySignTo(lhsList.fromDigits(10));\n\t\t\tlet map = each.isNegative.if { negative } { positive };\n\t\t\tmap.atIfPresentIfAbsent(lhs) { :entry |\n\t\t\t\tentry.add(rhs)\n\t\t\t} {\n\t\t\t\tmap.atPut(lhs, [rhs])\n\t\t\t}\n\t\t};\n\t\tnegative.associations.sort ++ positive.associations.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "canonicalSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_self, _canonicalPrecedes_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortBy(canonicalPrecedes:/2)\n\t}",
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
  "{ :self |\n\t\tself.indices\n\t}",
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
  "{ :self |\n\t\tself.isFinite & {\n\t\t\tself.isSortedBy(<=)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isSortedBetweenAnd(1, self.size)\n\t}",
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
      _lessThanSignEqualsSignVerticalLine_2,
      _startIndex,
      _endIndex,
    );
  }, ["self", "startIndex", "endIndex"]),
  "{ :self :startIndex :endIndex |\n\t\tself.isSortedByBetweenAnd(<=|, startIndex, endIndex)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.isSortedByBetweenAnd(aBlock:/2, 1, self.size)\n\t}",
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
  "{ :self :aBlock:/2 :startIndex :endIndex |\n\t\t(endIndex <= startIndex).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet previousElement = self[startIndex];\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(startIndex + 1).toDo(endIndex) { :index |\n\t\t\t\t\tlet element = self[index];\n\t\t\t\t\taBlock(previousElement, element).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t};\n\t\t\t\t\tpreviousElement := element\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isFinite & {\n\t\t\tself.isSortedBy(<)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "lexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_self, _precedes_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortBy(precedes:/2)\n\t}",
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
  "{ :self |\n\t\tlet a = self.increasingSubsequenceList.sort { :p :q |\n\t\t\tq.size < p.size\n\t\t};\n\t\tlet k = a.first.size;\n\t\ta.takeWhile { :each |\n\t\t\teach.size = k\n\t\t}.reverse\n\t}",
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
  "{ :self :aBlock:/2|\n\t\tself.sortedWithIndices(aBlock:/2).collect(value:/1)\n\t}",
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
    return _ordering_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.ordering(<|)\n\t}",
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
  "{ :self |\n\t\tlet i = 1;\n\t\tlet u = self.sortedWithIndices;\n\t\tlet v = [];\n\t\tu.split { :p :q |\n\t\t\tp.key = q.key\n\t\t}.do { :p |\n\t\t\tlet j = p.size;\n\t\t\tlet q = [i .. (i + j - 1)].mean;\n\t\t\tj.timesRepeat {\n\t\t\t\tv.add(q)\n\t\t\t};\n\t\t\ti := i + j\n\t\t};\n\t\tv.atAll(u.collect(value:/1).ordering)\n\t}",
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
  "{ :self |\n\t\tself.ordering.ordering\n\t}",
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
  "{ :self :mode |\n\t\tmode.caseOf([\n\t\t\t'Fractional' -> { self.rankingFractional },\n\t\t\t'Ordinal' -> { self.rankingOrdinal }\n\t\t])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sort",
  ["self", "sortBlock:/2", "keyBlock:/1"],
  sl.annotateFunction(function (_self, _sortBlock_2, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sortBlock_2, _keyBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _keyBlock_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sortBy_2(
          _self,
          _questionMark_2(
            _sortBlock_2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignVerticalLine_2;
            }, []),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sortByOn_3(
          _self,
          _questionMark_2(
            _sortBlock_2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignVerticalLine_2;
            }, []),
          ),
          _keyBlock_1,
        );
      }, []),
    );
  }, ["self", "sortBlock:/2", "keyBlock:/1"]),
  "{ :self :sortBlock:/2 :keyBlock:/1 |\n\t\tkeyBlock:/1.ifNil {\n\t\t\tself.sortBy(sortBlock:/2 ? { <| })\n\t\t} {\n\t\t\tself.sortByOn(sortBlock:/2 ? { <| }, keyBlock:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sort",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(
      _self,
      _questionMark_2(
        _sortBlock_2,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignVerticalLine_2;
        }, []),
      ),
    );
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.sortBy(sortBlock:/2 ? { <| })\n\t}",
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
    return _sortBy_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortBy(<|)\n\t}",
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
    return _sortByOn_3(_self, _lessThanSignVerticalLine_2, _keyBlock_1);
  }, ["self", "keyBlock:/1"]),
  "{ :self :keyBlock:/1 |\n\t\tself.sortByOn(<|, keyBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sorted",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_copy_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.copy.sortBy(sortBlock:/2)\n\t}",
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
  "{ :self |\n\t\tself.copy.sort\n\t}",
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
  "{ :self :sortBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\t[]\n\t\t} {\n\t\t\tself.withIndexCollect { :each :index |\n\t\t\t\teach -> index\n\t\t\t}.sorted { :p :q |\n\t\t\t\tsortBlock(p.key, q.key)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.sortedWithIndices(<)\n\t}",
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
  "{ :self :anInteger |\n\t\tself.sorted.first(anInteger)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "canonicalCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _size_1(_self);
    let _b = _size_1(_operand);
    let _c = _compare_2(_a, _b);
    /* Statements */
    return _if_3(
      _equalsSign_2(_c, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _compare_2(_self, _operand);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet a = self.size;\n\t\tlet b = operand.size;\n\t\tlet c = a.compare(b);\n\t\t(c = 0).if {\n\t\t\tself.compare(operand)\n\t\t} {\n\t\t\tc\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sort",
  "canonicalCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _size_1(_self);
    let _b = _size_1(_operand);
    let _c = _compare_2(_a, _b);
    /* Statements */
    return _if_3(
      _equalsSign_2(_c, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _compare_2(_self, _operand);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet a = self.size;\n\t\tlet b = operand.size;\n\t\tlet c = a.compare(b);\n\t\t(c = 0).if {\n\t\t\tself.compare(operand)\n\t\t} {\n\t\t\tc\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "canonicalPrecedes",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_canonicalCompare_2(_self, _operand), -1);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.canonicalCompare(operand) = -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sort",
  "canonicalPrecedes",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_canonicalCompare_2(_self, _operand), -1);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.canonicalCompare(operand) = -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "lexicographicOrder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_compare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.compare(operand).negate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sort",
  "lexicographicOrder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_compare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.compare(operand).negate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "canonicalOrder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_canonicalCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.canonicalCompare(operand).negate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sort",
  "canonicalOrder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_canonicalCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.canonicalCompare(operand).negate\n\t}",
);
