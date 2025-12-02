sl.extendTypeOrTraitWithMethod(
  "Block",
  "Sort",
  "compareOn",
  ["f:/1"],
  sl.annotateFunction(function (_f_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      return _compare_2(_f_1(_a), _f_1(_b));
    }, ["a", "b"]);
  }, ["f:/1"]),
  "{ :f:/1 |\n\t\t{ :a :b |\n\t\t\tcompare(f(a), f(b))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Sort",
  "reverseCompareOn",
  ["f:/1"],
  sl.annotateFunction(function (_f_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      return _compare_2(_f_1(_b), _f_1(_a));
    }, ["a", "b"]);
  }, ["f:/1"]),
  "{ :f:/1 |\n\t\t{ :a :b |\n\t\t\tcompare(f(b), f(a))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "alphabet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_nub_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.nub.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "countingSort",
  ["input", "key:/1", "k"],
  sl.annotateFunction(function (_input, _key_1, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _key_1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_input);
    let _count = _List_2(_k, 0);
    let _output = _List_1(_n);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _key_1(_at_2(_input, _i));
        /* Statements */
        return _atPut_3(_count, _j, _plusSign_2(_at_2(_count, _j), 1));
      }, ["i"]),
    );
    _toDo_3(
      2,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _count,
          _i,
          _plusSign_2(_at_2(_count, _i), _at_2(_count, _hyphenMinus_2(_i, 1))),
        );
      }, ["i"]),
    );
    _downToDo_3(
      _n,
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _key_1(_at_2(_input, _i));
        /* Statements */
        _atPut_3(_count, _j, _hyphenMinus_2(_at_2(_count, _j), 1));
        return _atPut_3(
          _output,
          _plusSign_2(_at_2(_count, _j), 1),
          _at_2(_input, _i),
        );
      }, ["i"]),
    );
    return _output;
  }, ["input", "key:/1", "k"]),
  "{ :input :key:/1 :k |\n\t\tlet n = input.size;\n\t\tlet count = List(k, 0);\n\t\tlet output = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = key(input[i]);\n\t\t\tcount[j] := count[j] + 1\n\t\t};\n\t\t2.toDo(k) { :i |\n\t\t\tcount[i] := count[i] + count[i - 1]\n\t\t};\n\t\tn.downToDo(1) { :i |\n\t\t\tlet j = key(input[i]);\n\t\t\tcount[j] := count[j] - 1;\n\t\t\toutput[count[j] + 1] := input[i]\n\t\t};\n\t\toutput\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "countingSort",
  ["input", "key:/1"],
  sl.annotateFunction(function (_input, _key_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _key_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 1;
    /* Statements */
    _do_2(
      _input,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _k = _max_2(_k, _key_1(_each));
      }, ["each"]),
    );
    return _countingSort_3(_input, _key_1, _k);
  }, ["input", "key:/1"]),
  "{ :input :key:/1 |\n\t\tlet k = 1;\n\t\tinput.do { :each |\n\t\t\tk := max(k, key(each))\n\t\t};\n\t\tcountingSort(input, key:/1, k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "countingSort",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _countingSort_3(_input, _identity_1, _max_1(_input));
  }, ["input"]),
  "{ :input |\n\t\tcountingSort(input, identity:/1, input.max)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Sort",
  "heapSort",
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
    return _heapSort_2(_self, _lessThanSignEqualsSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.heapSort(<=|)\n\t}",
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
    return _sortBy_2(_copyList_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.copyList.sortBy(sortBlock:/2)\n\t}",
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
    return _sortComparing_2(_self, _canonicalCompare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(canonicalCompare:/2)\n\t}",
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
  "lexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _size_1(_operand);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _min_2(_n, _m),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = _compare_2(_at_2(_self, _i), _at_2(_operand, _i));
          /* Statements */
          return _ifTrue_2(
            _exclamationMarkEqualsSign_2(_c, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_c);
            }, []),
          );
        }, ["i"]),
      );
      return _compare_2(_n, _m);
    }, ["return:/1"]));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet n = self.size;\n\t\tlet m = operand.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(n.min(m)) { :i |\n\t\t\t\tlet c = self[i].compare(operand[i]);\n\t\t\t\t(c != 0).ifTrue {\n\t\t\t\t\tc.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tn.compare(m)\n\t\t}\n\t}",
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
        let _q = _mean_1(_to_2(_i, _hyphenMinus_2(_plusSign_2(_i, _j), 1)));
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
  "{ :self |\n\t\tlet i = 1;\n\t\tlet u = self.sortedWithIndices;\n\t\tlet v = [];\n\t\tu.split { :p :q |\n\t\t\tp.key = q.key\n\t\t}.do { :p |\n\t\t\tlet j = p.size;\n\t\t\tlet q = i.to(i + j - 1).mean;\n\t\t\tj.timesRepeat {\n\t\t\t\tv.add(q)\n\t\t\t};\n\t\t\ti := i + j\n\t\t};\n\t\tv.atAll(u.collect(value:/1).ordering)\n\t}",
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
  "reverseColexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_colexicographicCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.colexicographicCompare(operand).negate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "reverseLexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_lexicographicCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.lexicographicCompare(operand).negate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "reverseSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_self, _verticalLineGreaterThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortBy(|>)\n\t}",
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
    return _sortComparing_2(_self, _compare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(compare:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sort",
  "sortComparingEach",
  ["self", "blockList"],
  sl.annotateFunction(function (_self, _blockList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _blockList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_blockList);
    /* Statements */
    return _sortComparing_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = 0;
        let _index = 1;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_answer, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_index, _n);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _f_2 = _at_2(_blockList, _index);
            let _c = _f_2(_a, _b);
            /* Statements */
            _index = _plusSign_2(_index, 1);
            return _answer = _c;
          }, []),
        );
        return _answer;
      }, ["a", "b"]),
    );
  }, ["self", "blockList"]),
  "{ :self :blockList |\n\t\tlet n = blockList.size;\n\t\tself.sortComparing { :a :b |\n\t\t\tlet answer = 0;\n\t\t\tlet index = 1;\n\t\t\t{ answer = 0 & { index <= n } }.whileTrue {\n\t\t\t\tlet f:/2 = blockList[index];\n\t\t\t\tlet c = f(a, b);\n\t\t\t\tindex := index + 1;\n\t\t\t\tanswer := c\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
    return _sortBy_2(_copyList_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.copyList.sortBy(sortBlock:/2)\n\t}",
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
  "colexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _size_1(_operand);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        0,
        _hyphenMinus_2(_min_2(_n, _m), 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = _compare_2(
            _at_2(_self, _hyphenMinus_2(_n, _i)),
            _at_2(_operand, _hyphenMinus_2(_m, _i)),
          );
          /* Statements */
          return _ifTrue_2(
            _exclamationMarkEqualsSign_2(_c, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_c);
            }, []),
          );
        }, ["i"]),
      );
      return _compare_2(_n, _m);
    }, ["return:/1"]));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet n = self.size;\n\t\tlet m = operand.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t0.toDo(n.min(m) - 1) { :i |\n\t\t\t\tlet c = self[n - i].compare(operand[m - i]);\n\t\t\t\t(c != 0).ifTrue {\n\t\t\t\t\tc.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tn.compare(m)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sort",
  "colexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _size_1(_operand);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        0,
        _hyphenMinus_2(_min_2(_n, _m), 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = _compare_2(
            _at_2(_self, _hyphenMinus_2(_n, _i)),
            _at_2(_operand, _hyphenMinus_2(_m, _i)),
          );
          /* Statements */
          return _ifTrue_2(
            _exclamationMarkEqualsSign_2(_c, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_c);
            }, []),
          );
        }, ["i"]),
      );
      return _compare_2(_n, _m);
    }, ["return:/1"]));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet n = self.size;\n\t\tlet m = operand.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t0.toDo(n.min(m) - 1) { :i |\n\t\t\t\tlet c = self[n - i].compare(operand[m - i]);\n\t\t\t\t(c != 0).ifTrue {\n\t\t\t\t\tc.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tn.compare(m)\n\t\t}\n\t}",
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
    return _negate_1(_lexicographicCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.lexicographicCompare(operand).negate\n\t}",
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
    return _negate_1(_lexicographicCompare_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.lexicographicCompare(operand).negate\n\t}",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "colexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparing_2(_self, _colexicographicCompare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(colexicographicCompare:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gradedColexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparingEach_2(_collect_2(_self, _reverseSort_1), [
      _compareOn_1(_sum_1),
      _compareOn_1(_size_1),
      _colexicographicCompare_2,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.collect(reverseSort:/1)\n\t\t.sortComparingEach(\n\t\t\t[\n\t\t\t\tsum:/1.compareOn,\n\t\t\t\tsize:/1.compareOn,\n\t\t\t\tcolexicographicCompare:/2\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gradedLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparingEach_2(_collect_2(_self, _reverseSort_1), [
      _compareOn_1(_sum_1),
      _lexicographicCompare_2,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.collect(reverseSort:/1)\n\t\t.sortComparingEach(\n\t\t\t[\n\t\t\t\tsum:/1.compareOn,\n\t\t\t\tlexicographicCompare:/2\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gradedReflectedColexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparingEach_2(_collect_2(_self, _sort_1), [
      _compareOn_1(_sum_1),
      _compareOn_1(_size_1),
      _lexicographicCompare_2,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.collect(sort:/1)\n\t\t.sortComparingEach(\n\t\t\t[\n\t\t\t\tsum:/1.compareOn,\n\t\t\t\tsize:/1.compareOn,\n\t\t\t\tlexicographicCompare:/2\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gradedReflectedLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparingEach_2(_collect_2(_self, _sort_1), [
      _compareOn_1(_sum_1),
      _colexicographicCompare_2,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.collect(sort:/1)\n\t\t.sortComparingEach(\n\t\t\t[\n\t\t\t\tsum:/1.compareOn,\n\t\t\t\tcolexicographicCompare:/2\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gradedReverseLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparingEach_2(_collect_2(_self, _reverseSort_1), [
      _compareOn_1(_sum_1),
      _reverseLexicographicCompare_2,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.collect(reverseSort:/1)\n\t\t.sortComparingEach(\n\t\t\t[\n\t\t\t\tsum:/1.compareOn,\n\t\t\t\treverseLexicographicCompare:/2\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "lexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparing_2(_self, _lexicographicCompare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(lexicographicCompare:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reflectedColexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_colexicographicSort_1(_self), _reverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.colexicographicSort.collect(reverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reflectedLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_lexicographicSort_1(_self), _reverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.lexicographicSort.collect(reverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reverseColexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparing_2(_self, _reverseColexicographicCompare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(reverseColexicographicCompare:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reverseLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortComparing_2(_self, _reverseLexicographicCompare_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortComparing(reverseLexicographicCompare:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reverseReflectedColexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_reverseColexicographicSort_1(_self), _reverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.reverseColexicographicSort.collect(reverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "reverseReflectedLexicographicSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_reverseLexicographicSort_1(_self), _reverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.reverseLexicographicSort.collect(reverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bubbleSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_s), 1);
    let _isSorted = false;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSorted;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = 1;
        /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_at_2(_s, _j), _at_2(_s, _plusSign_2(_j, 1))),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _swapWith_3(_s, _j, _plusSign_2(_j, 1));
                _f_1(_s);
                return _t = _j;
              }, []),
            );
          }, ["j"]),
        );
        _isSorted = _equalsSign_2(_t, 1);
        return _n = _t;
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size - 1;\n\t\tlet isSorted = false;\n\t\t{ isSorted }.whileFalse {\n\t\t\tlet t = 1;\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t(s[j] > s[j + 1]).ifTrue {\n\t\t\t\t\ts.swapWith(j, j + 1);\n\t\t\t\t\tf(s);\n\t\t\t\t\tt := j\n\t\t\t\t}\n\t\t\t};\n\t\t\tisSorted := t = 1;\n\t\t\tn := t\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bubbleSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _bubbleSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.bubbleSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bubbleSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _bubbleSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.bubbleSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "insertionSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _i,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_at_2(_s, _i), _at_2(_s, _j)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _removeAt_2(_s, _i);
                /* Statements */
                _insertAt_3(_s, _x, _j);
                return _f_1(_s);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size;\n\t\t2.toDo(n) { :i |\n\t\t\t1.toDo(i) { :j |\n\t\t\t\t(s[i] < s[j]).ifTrue {\n\t\t\t\t\tlet x = s.removeAt(i);\n\t\t\t\t\ts.insertAt(x, j);\n\t\t\t\t\tf(s)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "insertionSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _insertionSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.insertionSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "insertionSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _insertionSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.insertionSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shellSort",
  ["s", "t", "f:/1"],
  sl.annotateFunction(function (_s, _t, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _s, _t, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    /* Statements */
    _do_2(
      _t,
      sl.annotateFunction(function (_h) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _h";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          _plusSign_2(_h, 1),
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _hyphenMinus_2(_j, _h);
            let _r = _at_2(_s, _j);
            let _continue = true;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _continue,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSign_2(_i, 0);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _lessThanSign_2(_r, _at_2(_s, _i)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _swapWith_3(_s, _i, _plusSign_2(_i, _h));
                    _i = _hyphenMinus_2(_i, _h);
                    return _f_1(_s);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _continue = false;
                  }, []),
                );
              }, []),
            );
            return _atPut_3(_s, _plusSign_2(_i, _h), _r);
          }, ["j"]),
        );
      }, ["h"]),
    );
    return _s;
  }, ["s", "t", "f:/1"]),
  "{ :s :t :f:/1 |\n\t\tlet n = s.size;\n\t\tt.do { :h |\n\t\t\t(h + 1).toDo(n) { :j |\n\t\t\t\tlet i = j - h;\n\t\t\t\tlet r = s[j];\n\t\t\t\tlet continue = true;\n\t\t\t\t{ continue & { i > 0 } }.whileTrue {\n\t\t\t\t\t(r < s[i]).if {\n\t\t\t\t\t\ts.swapWith(i, i + h);\n\t\t\t\t\t\ti := i - h;\n\t\t\t\t\t\tf(s)\n\t\t\t\t\t} {\n\t\t\t\t\t\tcontinue := false\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ts[i + h] := r\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shellSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _shellSort_3(_s, [5, 3, 1], _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.shellSort([5, 3, 1], nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shellSortMatrix",
  ["s", "t"],
  sl.annotateFunction(function (_s, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _shellSort_3(
      _s,
      _t,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s", "t"]),
  "{ :s :t |\n\t\tlet m = [s.copy];\n\t\ts.shellSort(t) { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shellSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _shellSortMatrix_2(_s, [5, 3, 1]);
  }, ["s"]),
  "{ :s |\n\t\ts.shellSortMatrix([5, 3, 1])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "combSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    let _gap = _n;
    let _continue = true;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _continue;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _swaps = false;
        /* Statements */
        _gap = _floor_1(_solidus_2(_gap, 1.25));
        _toDo_3(
          1,
          _hyphenMinus_2(_n, _gap),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(
                _at_2(_s, _i),
                _at_2(_s, _plusSign_2(_i, _gap)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _swapWith_3(_s, _i, _plusSign_2(_i, _gap));
                _f_1(_s);
                return _swaps = true;
              }, []),
            );
          }, ["i"]),
        );
        return _ifTrue_2(
          _ampersand_2(
            _not_1(_swaps),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_gap, 1);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _continue = false;
          }, []),
        );
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size;\n\t\tlet gap = n;\n\t\tlet continue = true;\n\t\t{ continue }.whileTrue {\n\t\t\tlet swaps = false;\n\t\t\tgap := (gap / 1.25).floor;\n\t\t\t1.toDo(n - gap) { :i |\n\t\t\t\t(s[i] > s[i + gap]).ifTrue {\n\t\t\t\t\ts.swapWith(i, i + gap);\n\t\t\t\t\tf(s);\n\t\t\t\t\tswaps := true\n\t\t\t\t}\n\t\t\t};\n\t\t\t(swaps.not & { gap <= 1 }).ifTrue {\n\t\t\t\tcontinue := false\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "combSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _combSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.combSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "combSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _combSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.combSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "selectionSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    /* Statements */
    _toByDo_4(
      _n,
      1,
      -1,
      sl.annotateFunction(function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _indexOf_2(_s, _maxFromTo_3(_s, 1, _j));
        /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_m, _j),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _swapWith_3(_s, _j, _m);
            return _f_1(_s);
          }, []),
        );
      }, ["j"]),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size;\n\t\tn.toByDo(1, -1) { :j |\n\t\t\tlet m = s.indexOf(s.maxFromTo(1, j));\n\t\t\t(m != j).ifTrue {\n\t\t\t\ts.swapWith(j, m);\n\t\t\t\tf(s)\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "selectionSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectionSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.selectionSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "selectionSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _selectionSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.selectionSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "cycleSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isPermutationList_1(_s),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_s, "cycleSort: not permutation list");
      }, []),
    );
    _toDo_3(
      1,
      _size_1(_s),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_i, _at_2(_s, _i)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _i;
            let _continue = true;
            let _y = null;
            /* Statements */
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _continue;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _at_2(_s, _n);
                /* Statements */
                _atPut_3(
                  _s,
                  _n,
                  _if_3(
                    _exclamationMarkEqualsSign_2(_n, _i),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _y;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return null;
                    }, []),
                  ),
                );
                _f_1(_s);
                _y = _x;
                _n = _y;
                return _ifTrue_2(
                  _equalsSign_2(_n, _i),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _atPut_3(_s, _n, _y);
                    _f_1(_s);
                    return _continue = false;
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\ts.isPermutationList.ifFalse {\n\t\t\ts.error('cycleSort: not permutation list')\n\t\t};\n\t\t1.toDo(s.size) { :i |\n\t\t\t(i != s[i]).ifTrue {\n\t\t\t\tlet n = i;\n\t\t\t\tlet continue = true;\n\t\t\t\tlet y = nil;\n\t\t\t\t{ continue }.whileTrue {\n\t\t\t\t\tlet x = s[n];\n\t\t\t\t\ts[n] := (n != i).if { y } { nil } ;\n\t\t\t\t\tf(s);\n\t\t\t\t\ty := x;\n\t\t\t\t\tn := y;\n\t\t\t\t\t(n = i).ifTrue {\n\t\t\t\t\t\ts[n] := y;\n\t\t\t\t\t\tf(s);\n\t\t\t\t\t\tcontinue := false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "cycleSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _cycleSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.cycleSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "cycleSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _cycleSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.cycleSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bitonicMerge",
  ["a", "low", "count", "direction", "observe:/1"],
  sl.annotateFunction(function (_a, _low, _count, _direction, _observe_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _a, _low, _count, _direction, _observe_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _greaterThanSign_2(_count, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _solidus_2(_count, 2);
        /* Statements */
        _toDo_3(
          _low,
          _hyphenMinus_2(_plusSign_2(_low, _k), 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _verticalLine_2(
                _ampersand_2(
                  _equalsSign_2(_direction, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSign_2(
                      _at_2(_a, _i),
                      _at_2(_a, _plusSign_2(_i, _k)),
                    );
                  }, []),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _equalsSign_2(_direction, 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSign_2(
                        _at_2(_a, _i),
                        _at_2(_a, _plusSign_2(_i, _k)),
                      );
                    }, []),
                  );
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _swapWith_3(_a, _i, _plusSign_2(_i, _k));
                return _observe_1(_a);
              }, []),
            );
          }, ["i"]),
        );
        _bitonicMerge_5(_a, _low, _k, _direction, _observe_1);
        return _bitonicMerge_5(
          _a,
          _plusSign_2(_low, _k),
          _k,
          _direction,
          _observe_1,
        );
      }, []),
    );
  }, ["a", "low", "count", "direction", "observe:/1"]),
  "{ :a :low :count :direction :observe:/1 |\n\t\t(count > 1).ifTrue {\n\t\t\tlet k = count / 2;\n\t\t\tlow.toDo(low + k - 1) { :i |\n\t\t\t\t((direction = 1 & { a[i] > a[i + k] }) | { direction = 0 & { a[i] < a[i + k] } }).ifTrue {\n\t\t\t\t\ta.swapWith(i, i + k);\n\t\t\t\t\tobserve(a)\n\t\t\t\t}\n\t\t\t};\n\t\t\tbitonicMerge(a, low, k, direction, observe:/1);\n\t\t\tbitonicMerge(a, low + k, k, direction, observe:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bitonicSort",
  ["a", "low", "count", "direction", "observe:/1"],
  sl.annotateFunction(function (_a, _low, _count, _direction, _observe_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _a, _low, _count, _direction, _observe_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _greaterThanSign_2(_count, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _solidus_2(_count, 2);
        /* Statements */
        _bitonicSort_5(_a, _low, _k, 1, _observe_1);
        _bitonicSort_5(_a, _plusSign_2(_low, _k), _k, 0, _observe_1);
        return _bitonicMerge_5(_a, _low, _count, _direction, _observe_1);
      }, []),
    );
  }, ["a", "low", "count", "direction", "observe:/1"]),
  "{ :a :low :count :direction :observe:/1 |\n\t\t(count > 1).ifTrue {\n\t\t\tlet k = count / 2;\n\t\t\tbitonicSort(a, low, k, 1, observe:/1);\n\t\t\tbitonicSort(a, low + k, k, 0, observe:/1);\n\t\t\tbitonicMerge(a, low, count, direction, observe:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bitonicSort",
  ["a", "f:/1"],
  sl.annotateFunction(function (_a, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    /* Statements */
    return _if_3(
      _isPowerOfTwo_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _bitonicSort_5(_a, 1, _size_1(_a), 1, _f_1);
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_a, "bitonicSort: size must be power of two");
      }, []),
    );
  }, ["a", "f:/1"]),
  "{ :a :f:/1 |\n\t\tlet n = a.size;\n\t\tn.isPowerOfTwo.if {\n\t\t\tbitonicSort(a, 1, a.size, 1, f:/1);\n\t\t\ta\n\t\t} {\n\t\t\ta.error('bitonicSort: size must be power of two')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bitonicSort",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitonicSort_2(_a, _constant_1(null));
  }, ["a"]),
  "{ :a |\n\t\ta.bitonicSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "bitonicSortMatrix",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_a)];
    /* Statements */
    _bitonicSort_2(
      _a,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_a));
      }, ["x"]),
    );
    return _m;
  }, ["a"]),
  "{ :a |\n\t\tlet m = [a.copy];\n\t\ta.bitonicSort { :x |\n\t\t\tm.add(a.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "radixSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shift = 1;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSorted_1(_s);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _zeroes = [];
        let _ones = [];
        let _continue = true;
        let _o = _copy_1(_s);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _continue,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _exclamationMarkEqualsSign_2(_size_1(_o), 0);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _item = _removeFirst_1(_o);
            /* Statements */
            _if_3(
              _equalsSign_2(_bitAnd_2(_item, _shift), 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_zeroes, _item);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_ones, _item);
              }, []),
            );
            _withIndexDo_2(
              _plusSignPlusSign_2(_plusSignPlusSign_2(_zeroes, _o), _ones),
              sl.annotateFunction(function (_each, _index) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _each, _index";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_s, _index, _each);
              }, ["each", "index"]),
            );
            _f_1(_s);
            return _continue = _not_1(_isSorted_1(_s));
          }, []),
        );
        return _ifTrue_2(
          _continue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _f_1(_s);
            return _shift = _lessThanSignLessThanSign_2(_shift, 1);
          }, []),
        );
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet shift = 1;\n\t\t{ s.isSorted }.whileFalse {\n\t\t\tlet zeroes = [];\n\t\t\tlet ones = [];\n\t\t\tlet continue = true;\n\t\t\tlet o = s.copy;\n\t\t\t{ continue & { o.size != 0 } }.whileTrue {\n\t\t\t\tlet item = o.removeFirst;\n\t\t\t\t(item.bitAnd(shift) = 0).if {\n\t\t\t\t\tzeroes.add(item)\n\t\t\t\t} {\n\t\t\t\t\tones.add(item)\n\t\t\t\t};\n\t\t\t\t(zeroes ++ o ++ ones).withIndexDo { :each :index |\n\t\t\t\t\ts[index] := each\n\t\t\t\t};\n\t\t\t\tf(s);\n\t\t\t\tcontinue := s.isSorted.not\n\t\t\t};\n\t\t\tcontinue.ifTrue {\n\t\t\t\tf(s);\n\t\t\t\tshift := shift << 1\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "radixSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _radixSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.radixSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "radixSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _radixSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.radixSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "oddEvenSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    let _sorted = false;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sorted;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _sorted = true;
        return _toDo_3(
          1,
          2,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _toByDo_4(
              _j,
              _hyphenMinus_2(_n, 1),
              2,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _greaterThanSign_2(
                    _at_2(_s, _i),
                    _at_2(_s, _plusSign_2(_i, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _swapWith_3(_s, _i, _plusSign_2(_i, 1));
                    _f_1(_s);
                    return _sorted = false;
                  }, []),
                );
              }, ["i"]),
            );
          }, ["j"]),
        );
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size;\n\t\tlet sorted = false;\n\t\t{ sorted }.whileFalse {\n\t\t\tsorted := true;\n\t\t\t1.toDo(2) { :j |\n\t\t\t\tj.toByDo(n - 1, 2) { :i |\n\t\t\t\t\t(s[i] > s[i + 1]).ifTrue {\n\t\t\t\t\t\ts.swapWith(i, i + 1);\n\t\t\t\t\t\tf(s);\n\t\t\t\t\t\tsorted := false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "oddEvenSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _oddEvenSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.oddEvenSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "oddEvenSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _oddEvenSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.oddEvenSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gnomeSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _verticalLine_2(
            _equalsSign_2(_i, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(
                _at_2(_s, _i),
                _at_2(_s, _hyphenMinus_2(_i, 1)),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _plusSign_2(_i, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _swapWith_3(_s, _i, _hyphenMinus_2(_i, 1));
            _f_1(_s);
            return _i = _hyphenMinus_2(_i, 1);
          }, []),
        );
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet n = s.size;\n\t\tlet i = 1;\n\t\t{ i <= n }.whileTrue {\n\t\t\t(i = 1 | { s[i] >= s[i - 1] }).if {\n\t\t\t\ti := i + 1\n\t\t\t} {\n\t\t\t\ts.swapWith(i, i - 1);\n\t\t\t\tf(s);\n\t\t\t\ti := i - 1\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gnomeSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _gnomeSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.gnomeSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "gnomeSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _gnomeSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.gnomeSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shuffleSort",
  ["s", "f:/1"],
  sl.annotateFunction(function (_s, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _begin = 1;
    let _end = _hyphenMinus_2(_size_1(_s), 1);
    let _finished = false;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _finished;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _finished = true;
        _toDo_3(
          _begin,
          _end,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_at_2(_s, _i), _at_2(_s, _plusSign_2(_i, 1))),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _swapWith_3(_s, _i, _plusSign_2(_i, 1));
                _f_1(_s);
                return _finished = false;
              }, []),
            );
          }, ["i"]),
        );
        _ifFalse_2(
          _finished,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _finished = true;
            _end = _hyphenMinus_2(_end, 1);
            return _downToDo_3(
              _end,
              _begin,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _greaterThanSign_2(
                    _at_2(_s, _i),
                    _at_2(_s, _plusSign_2(_i, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _swapWith_3(_s, _i, _plusSign_2(_i, 1));
                    _f_1(_s);
                    return _finished = false;
                  }, []),
                );
              }, ["i"]),
            );
          }, []),
        );
        return _begin = _plusSign_2(_begin, 1);
      }, []),
    );
    return _s;
  }, ["s", "f:/1"]),
  "{ :s :f:/1 |\n\t\tlet begin = 1;\n\t\tlet end = s.size - 1;\n\t\tlet finished = false;\n\t\t{ finished }.whileFalse {\n\t\t\tfinished := true;\n\t\t\tbegin.toDo(end) { :i |\n\t\t\t\t(s[i] > s[i + 1]).ifTrue {\n\t\t\t\t\ts.swapWith(i, i + 1);\n\t\t\t\t\tf(s);\n\t\t\t\t\tfinished := false\n\t\t\t\t}\n\t\t\t};\n\t\t\tfinished.ifFalse {\n\t\t\t\tfinished := true;\n\t\t\t\tend := end - 1;\n\t\t\t\tend.downToDo(begin) { :i |\n\t\t\t\t\t(s[i] > s[i + 1]).ifTrue {\n\t\t\t\t\t\ts.swapWith(i, i + 1);\n\t\t\t\t\t\tf(s);\n\t\t\t\t\t\tfinished := false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tbegin := begin + 1\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shuffleSort",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _shuffleSort_2(_s, _constant_1(null));
  }, ["s"]),
  "{ :s |\n\t\ts.shuffleSort(nil.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sort",
  "shuffleSortMatrix",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [_copy_1(_s)];
    /* Statements */
    _shuffleSort_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_m, _copy_1(_x));
      }, ["x"]),
    );
    return _m;
  }, ["s"]),
  "{ :s |\n\t\tlet m = [s.copy];\n\t\ts.shuffleSort { :x |\n\t\t\tm.add(x.copy)\n\t\t};\n\t\tm\n\t}",
);
