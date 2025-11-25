sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "contiguousSubsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _select_2(
      _substrings_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _size_1(_each);
        /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_k, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_k, _n);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tself.substrings.select { :each |\n\t\t\tlet k = each.size;\n\t\t\tk > 1 & { k != n }\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "includesScatteredSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _powerSetDo_2(
        _to_2(1, _size_1(_self)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _isArithmeticProgression_3(_each, 1, _equalsSign_2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _equalsSign_2(_commercialAtAsterisk_2(_self, _each), _aList),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(true);
                }, []),
              );
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.to(self.size).powerSetDo { :each |\n\t\t\t\teach.isArithmeticProgression(1, =).ifFalse {\n\t\t\t\t\t(self @* each = aList).ifTrue {\n\t\t\t\t\t\ttrue.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "includesSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = 1;
      /* Statements */
      _do_2(
        _aList,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _i = _indexOfStartingAtBy_4(_self, _each, _i, _equalsSign_2);
          return _ifTrue_2(
            _equalsSign_2(_i, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet i = 1;\n\t\t\taList.do { :each |\n\t\t\t\ti := self.indexOfStartingAtBy(each, i, =);\n\t\t\t\t(i = 0).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "includesSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _k = _size_1(_aList);
    let _c = _first_1(_aList);
    /* Statements */
    return _anySatisfy_2(
      _indicesOf_2(_self, _c),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(_hyphenMinus_2(_plusSign_2(_i, _k), 1), _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _to_2(1, _k),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _at_2(_self, _hyphenMinus_2(_plusSign_2(_i, _j), 1)),
                  _at_2(_aList, _j),
                );
              }, ["j"]),
            );
          }, []),
        );
      }, ["i"]),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet n = self.size;\n\t\tlet k = aList.size;\n\t\tlet c = aList.first;\n\t\tself.indicesOf(c).anySatisfy { :i |\n\t\t\t(i + k - 1) <= n & {\n\t\t\t\t1.to(k).allSatisfy { :j |\n\t\t\t\t\tself[i + j - 1] = aList[j]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "indexOfSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfSubstringStartingAt_3(_self, _aList, 1);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.indexOfSubstringStartingAt(aList, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "indexOfSubstringStartingAt",
  ["self", "aList", "start"],
  sl.annotateFunction(function (_self, _aList, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _start";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_aList);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _first = _at_2(_aList, 1);
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _toDo_3(
            _max_2(_start, 1),
            _plusSign_2(_hyphenMinus_2(_size_1(_self), _k), 1),
            sl.annotateFunction(function (_startIndex) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _startIndex";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _equalsSign_2(_at_2(_self, _startIndex), _first),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _index = 2;
                  /* Statements */
                  _whileTrue_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _ampersand_2(
                        _lessThanSignEqualsSign_2(_index, _k),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _equalsSign_2(
                            _at_2(
                              _self,
                              _hyphenMinus_2(
                                _plusSign_2(_startIndex, _index),
                                1,
                              ),
                            ),
                            _at_2(_aList, _index),
                          );
                        }, []),
                      );
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _index = _plusSign_2(_index, 1);
                    }, []),
                  );
                  return _ifFalse_2(
                    _lessThanSignEqualsSign_2(_index, _k),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _return_1(_startIndex);
                    }, []),
                  );
                }, []),
              );
            }, ["startIndex"]),
          );
          return 0;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aList", "start"]),
  "{ :self :aList :start |\n\t\tlet k = aList.size;\n\t\t(k = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet first = aList[1];\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tstart.max(1).toDo(self.size - k + 1) { :startIndex |\n\t\t\t\t\t(self[startIndex] = first).ifTrue {\n\t\t\t\t\t\tlet index = 2;\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tindex <= k & {\n\t\t\t\t\t\t\t\tself[startIndex + index - 1] = aList[index]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\t\tindex := index + 1\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(index <= k).ifFalse {\n\t\t\t\t\t\t\tstartIndex.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "indicesOfSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
      _to_2(1, _size_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_commercialAtAsterisk_2(_self, _each), _aList),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet answer = [];\n\t\t1.to(self.size).powerSetDo { :each |\n\t\t\t(self @* each = aList).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "indicesOfSubstringStartingAt",
  ["self", "aList", "initialIndex"],
  sl.annotateFunction(function (_self, _aList, _initialIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _initialIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _index = _hyphenMinus_2(_initialIndex, 1);
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _indexOfSubstringStartingAt_3(
          _self,
          _aList,
          _plusSign_2(_index, 1),
        );
        return _equalsSign_2(_index, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _index);
      }, []),
    );
    return _answer;
  }, ["self", "aList", "initialIndex"]),
  "{ :self :aList :initialIndex |\n\t\tlet answer = [];\n\t\tlet index = initialIndex - 1;\n\t\t{\n\t\t\tindex := self.indexOfSubstringStartingAt(aList, index + 1);\n\t\t\tindex = 0\n\t\t}.whileFalse {\n\t\t\tanswer.add(index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "indicesOfSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesOfSubstringStartingAt_3(_self, _aList, 1);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.indicesOfSubstringStartingAt(aList, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "increasingSubsequenceList",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _increasing_2 = sl.annotateFunction(function (_done, _remaining) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _done, _remaining";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isEmpty_1(_remaining),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [_done];
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _if_3(
                  _aBlock_2(_last_1(_done), _first_1(_remaining)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _increasing_2(
                      _plusSignPlusSign_2(_done, [_first_1(_remaining)]),
                      _allButFirst_1(_remaining),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return [];
                  }, []),
                ),
                _increasing_2(_done, _allButFirst_1(_remaining)),
              );
            }, []),
          );
        }, ["done", "remaining"]);
        /* Statements */
        return _collectCatenate_2(
          _to_2(1, _size_1(_self)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _increasing_2(
              _last_2(_first_2(_self, _i), 1),
              _drop_2(_self, _i),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\t(self.size < 2).if {\n\t\t\t[self]\n\t\t} {\n\t\t\tlet increasing = { :done :remaining |\n\t\t\t\tremaining.isEmpty.if {\n\t\t\t\t\t[done]\n\t\t\t\t} {\n\t\t\t\t\taBlock(done.last, remaining.first).if {\n\t\t\t\t\t\tincreasing(\n\t\t\t\t\t\t\tdone ++ [remaining.first],\n\t\t\t\t\t\t\tremaining.allButFirst\n\t\t\t\t\t\t)\n\t\t\t\t\t} {\n\t\t\t\t\t\t[]\n\t\t\t\t\t} ++ increasing(done, remaining.allButFirst)\n\t\t\t\t}\n\t\t\t};\n\t\t\t1.to(self.size).collectCatenate { :i |\n\t\t\t\tincreasing(self.first(i).last(1), self.drop(i))\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "increasingSubsequenceList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _increasingSubsequenceList_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.increasingSubsequenceList(<|)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonPrefixSize",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _min_2(_size_1(_u), _size_1(_v));
    let _k = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_hyphenMinus_2(_k, 1), _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_u, _k), _at_2(_v, _k));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _hyphenMinus_2(_k, 1);
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet n = min(u.size, v.size);\n\t\tlet k = 1;\n\t\t{ k - 1 < n & { u[k] = v[k] } }.whileTrue {\n\t\t\tk := k + 1\n\t\t};\n\t\tk - 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonPrefix",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_u, 1, _longestCommonPrefixSize_2(_u, _v));
  }, ["u", "v"]),
  "{ :u :v |\n\t\tu.copyFromTo(1, longestCommonPrefixSize(u, v))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonSubsequence",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _plusSign_2(_size_1(_a), 1);
    let _n = _plusSign_2(_size_1(_b), 1);
    let _lengths = _zeroMatrix_1([_m, _n]);
    let _answer = [];
    /* Statements */
    _withIndexCollect_2(
      _a,
      sl.annotateFunction(function (_x, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _b,
          sl.annotateFunction(function (_y, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _y, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_x, _y),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_4(
                  _lengths,
                  _plusSign_2(_i, 1),
                  _plusSign_2(_j, 1),
                  _plusSign_2(_at_3(_lengths, _i, _j), 1),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_4(
                  _lengths,
                  _plusSign_2(_i, 1),
                  _plusSign_2(_j, 1),
                  _max_2(
                    _at_3(_lengths, _plusSign_2(_i, 1), _j),
                    _at_3(_lengths, _i, _plusSign_2(_j, 1)),
                  ),
                );
              }, []),
            );
          }, ["y", "j"]),
        );
      }, ["x", "i"]),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersandAmpersand_2(
          _greaterThanSign_2(_m, 1),
          _greaterThanSign_2(_n, 1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(
            _at_3(_lengths, _m, _n),
            _at_3(_lengths, _hyphenMinus_2(_m, 1), _n),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _m = _hyphenMinus_2(_m, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(
                _at_3(_lengths, _m, _n),
                _at_3(_lengths, _m, _hyphenMinus_2(_n, 1)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _n = _hyphenMinus_2(_n, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifFalse_2(
                  _equalsSign_2(
                    _at_2(_a, _hyphenMinus_2(_m, 1)),
                    _at_2(_b, _hyphenMinus_2(_n, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1(
                      "@Sequenceable>>longestCommonSubsequence: error?",
                    );
                  }, []),
                );
                _addFirst_2(_answer, _at_2(_a, _hyphenMinus_2(_m, 1)));
                _m = _hyphenMinus_2(_m, 1);
                return _n = _hyphenMinus_2(_n, 1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet m = a.size + 1;\n\t\tlet n = b.size + 1;\n\t\tlet lengths = [m, n].zeroMatrix;\n\t\tlet answer = [];\n\t\ta.withIndexCollect { :x :i |\n\t\t\tb.withIndexCollect { :y :j |\n\t\t\t\t(x = y).if {\n\t\t\t\t\tlengths[i + 1, j + 1] := lengths[i, j] + 1\n\t\t\t\t} {\n\t\t\t\t\tlengths[i + 1, j + 1] := lengths[i + 1, j].max(lengths[i, j + 1])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t{\n\t\t\t(m > 1) && (n > 1)\n\t\t}.whileTrue {\n\t\t\t(lengths[m, n] = lengths[m - 1, n]).if {\n\t\t\t\tm := m - 1\n\t\t\t} {\n\t\t\t\t(lengths[m, n] = lengths[m, n -  1]).if {\n\t\t\t\t\tn := n - 1\n\t\t\t\t} {\n\t\t\t\t\t(a[m - 1] = b[n - 1]).ifFalse {\n\t\t\t\t\t\t'@Sequenceable>>longestCommonSubsequence: error?'.error\n\t\t\t\t\t};\n\t\t\t\t\tanswer.addFirst(a[m - 1]);\n\t\t\t\t\tm := m - 1;\n\t\t\t\t\tn := n - 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonSubstringList",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _find_1 = sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _intersection_2(
        _partition_3(_self, _k, 1),
        _partition_3(_aList, _k, 1),
      );
    }, ["k"]);
    let _n = _min_2(_size_1(_self), _size_1(_aList));
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toByDo_4(
        _n,
        1,
        -1,
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _common = _find_1(_k);
          /* Statements */
          return _ifFalse_2(
            _isEmpty_1(_common),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_common);
            }, []),
          );
        }, ["k"]),
      );
      return [];
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet find = { :k |\n\t\t\tself.partition(k, 1).intersection(aList.partition(k, 1))\n\t\t};\n\t\tlet n = self.size.min(aList.size);\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tn.toByDo(1, -1) { :k |\n\t\t\t\tlet common = find(k);\n\t\t\t\tcommon.isEmpty.ifFalse {\n\t\t\t\t\tcommon.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t[]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _common = _longestCommonSubstringList_2(_self, _aList);
    /* Statements */
    return _if_3(
      _isEmpty_1(_common),
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
        return _first_1(_common);
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet common = self.longestCommonSubstringList(aList);\n\t\tcommon.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tcommon.first\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonSuffixSize",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _size_1(_u);
    let _b = _size_1(_v);
    let _n = _min_2(_a, _b);
    let _k = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_k, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _at_2(_u, _hyphenMinus_2(_a, _k)),
              _at_2(_v, _hyphenMinus_2(_b, _k)),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _k;
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet a = u.size;\n\t\tlet b = v.size;\n\t\tlet n = min(a, b);\n\t\tlet k = 0;\n\t\t{ k < n & { u[a - k] = v[b - k] } }.whileTrue {\n\t\t\tk := k + 1\n\t\t};\n\t\tk\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestCommonSuffix",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_u);
    /* Statements */
    return _copyFromTo_3(
      _u,
      _plusSign_2(_hyphenMinus_2(_n, _longestCommonSuffixSize_2(_u, _v)), 1),
      _n,
    );
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet n = u.size;\n\t\tu.copyFromTo(n - longestCommonSuffixSize(u, v) + 1, n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "longestIncreasingSubsequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    let _n = _size_1(_x);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _List_2(_n, 0);
        let _m = _List_2(_plusSign_2(_n, 1), 0);
        let _l = 0;
        let _answer = [];
        let _k = null;
        /* Statements */
        _toDo_3(
          0,
          _hyphenMinus_2(_n, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _lo = 1;
            let _hi = _l;
            let _z = null;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_lo, _hi);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _mid = _ceiling_1(_solidus_2(_plusSign_2(_lo, _hi), 2));
                /* Statements */
                return _if_3(
                  _lessThanSign_2(
                    _at_2(_x, _plusSign_2(_at_2(_m, _plusSign_2(_mid, 1)), 1)),
                    _at_2(_x, _plusSign_2(_i, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lo = _plusSign_2(_mid, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hi = _hyphenMinus_2(_mid, 1);
                  }, []),
                );
              }, []),
            );
            _z = _lo;
            _atPut_3(_p, _plusSign_2(_i, 1), _at_2(_m, _z));
            _atPut_3(_m, _plusSign_2(_z, 1), _i);
            return _ifTrue_2(
              _greaterThanSign_2(_z, _l),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _l = _z;
              }, []),
            );
          }, ["i"]),
        );
        _k = _at_2(_m, _plusSign_2(_l, 1));
        _timesRepeat_2(
          _l,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _addFirst_2(_answer, _at_2(_x, _plusSign_2(_k, 1)));
            return _k = _at_2(_p, _plusSign_2(_k, 1));
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet x = self;\n\t\tlet n = x.size;\n\t\t(n < 2).if {\n\t\t\tx\n\t\t} {\n\t\t\tlet p = List(n, 0);\n\t\t\tlet m = List(n + 1, 0);\n\t\t\tlet l = 0;\n\t\t\tlet answer = [];\n\t\t\tlet k = nil;\n\t\t\t0.toDo(n - 1) { :i |\n\t\t\t\tlet lo = 1;\n\t\t\t\tlet hi = l;\n\t\t\t\tlet z = nil;\n\t\t\t\t{\n\t\t\t\t\tlo <= hi\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlet mid = ((lo + hi) / 2).ceiling;\n\t\t\t\t\t(x[m[mid + 1] + 1] < x[i + 1]).if {\n\t\t\t\t\t\tlo := mid + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\thi := mid - 1\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tz := lo;\n\t\t\t\tp[i + 1] := m[z];\n\t\t\t\tm[z + 1] := i;\n\t\t\t\t(z > l).ifTrue {\n\t\t\t\t\tl := z\n\t\t\t\t}\n\t\t\t};\n\t\t\tk := m[l + 1];\n\t\t\tl.timesRepeat {\n\t\t\t\tanswer.addFirst(x[k + 1]);\n\t\t\t\tk := p[k + 1]\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "orderedSubstrings",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
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
        } /* Temporaries */
        let _answer = [];
        let _run = [_first_1(_self)];
        /* Statements */
        _toDo_3(
          2,
          _size_1(_self),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _item = _at_2(_self, _i);
            /* Statements */
            return _if_3(
              _aBlock_2(_at_2(_self, _hyphenMinus_2(_i, 1)), _item),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_run, _item);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _copy_1(_run));
                _removeAll_1(_run);
                return _add_2(_run, _item);
              }, []),
            );
          }, ["i"]),
        );
        _add_2(_answer, _run);
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tlet run = [self.first];\n\t\t\t2.toDo(self.size) { :i |\n\t\t\t\tlet item = self[i];\n\t\t\t\taBlock(self[i - 1], item).if {\n\t\t\t\t\trun.add(item)\n\t\t\t\t} {\n\t\t\t\t\tanswer.add(run.copy);\n\t\t\t\t\trun.removeAll;\n\t\t\t\t\trun.add(item)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.add(run);\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "noncontiguousSubsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
      _asList_1(_nonemptyRange_3(1, _size_1(_self), 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _ampersand_2(
            _greaterThanSign_2(_size_1(_each), 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _not_1(
                _adjacentPairsAllSatisfy_2(
                  _each,
                  sl.annotateFunction(function (_i, _j) {
                    /* ArityCheck */
                    if (arguments.length !== 2) {
                      const errorMessage = "Arity: expected 2, _i, _j";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_hyphenMinus_2(_j, _i), 1);
                  }, ["i", "j"]),
                ),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _atAll_2(_self, _each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\t[1 .. self.size].powerSetDo { :each |\n\t\t\t(\n\t\t\t\teach.size > 1 & {\n\t\t\t\t\teach.adjacentPairsAllSatisfy { :i :j |\n\t\t\t\t\t\t(j - i) = 1\n\t\t\t\t\t}.not\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tanswer.add(self.atAll(each))\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "orderedSubstrings",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _orderedSubstrings_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self |\n\t\tself.orderedSubstrings(<|)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "sequenceCount",
  ["self", "subsequence"],
  sl.annotateFunction(function (_self, _subsequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subsequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_sequencePosition_2(_self, _subsequence));
  }, ["self", "subsequence"]),
  "{ :self :subsequence |\n\t\tself.sequencePosition(subsequence).size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "sequencePosition",
  ["self", "subsequence"],
  sl.annotateFunction(function (_self, _subsequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subsequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_size_1(_subsequence), 1);
    /* Statements */
    return _collect_2(
      _indicesOfSubstring_2(_self, _subsequence),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return [_each, _plusSign_2(_each, _k)];
      }, ["each"]),
    );
  }, ["self", "subsequence"]),
  "{ :self :subsequence |\n\t\tlet k = subsequence.size - 1;\n\t\tself.indicesOfSubstring(subsequence).collect { :each |\n\t\t\t[each, each + k]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "subsequencesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
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
        } /* Temporaries */
        let _k = _size_1(_self);
        /* Statements */
        return _powerSetDo_2(
          _asList_1(_nonemptyRange_3(1, _k, 1)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_commercialAtAsterisk_2(_self, _each));
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet k = self.size;\n\t\t\t[1 .. k].powerSetDo { :each |\n\t\t\t\taBlock(self @* each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "subsequences",
  ["self", "aPredicate:/1"],
  sl.annotateFunction(function (_self, _aPredicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPredicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _subsequencesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aPredicate_1(_each),
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
  }, ["self", "aPredicate:/1"]),
  "{ :self :aPredicate:/1 |\n\t\tlet answer = [];\n\t\tself.subsequencesDo { :each |\n\t\t\taPredicate(each).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "subsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _subsequences_2(_self, _constant_1(true));
  }, ["self"]),
  "{ :self |\n\t\tself.subsequences(true.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "substringsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      0,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _partitionDo_4(_self, _each, 1, _aBlock_1);
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t0.toDo(self.size) { :each |\n\t\t\tself.partitionDo(each, 1, aBlock:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "substrings",
  ["self", "aPredicate:/1"],
  sl.annotateFunction(function (_self, _aPredicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPredicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _substringsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aPredicate_1(_each),
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
  }, ["self", "aPredicate:/1"]),
  "{ :self :aPredicate:/1 |\n\t\tlet answer = [];\n\t\tself.substringsDo { :each |\n\t\t\taPredicate(each).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "substrings",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _substrings_2(_self, _constant_1(true));
  }, ["self"]),
  "{ :self |\n\t\tself.substrings(true.constant)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "SequenceAlignment",
  "substringsInCommon",
  ["self", "aList", "k"],
  sl.annotateFunction(function (_self, _aList, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _intersection_2(
      _partition_3(_self, _k, 1),
      _partition_3(_aList, _k, 1),
    );
  }, ["self", "aList", "k"]),
  "{ :self :aList :k |\n\t\tself.partition(k, 1).intersection(aList.partition(k, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "contiguousSubsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharactersList_2(_self, _contiguousSubsequences_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharactersList(\n\t\t\tcontiguousSubsequences:/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "includesSubsequence",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubsequence_2(
      _characters_1(_self),
      _characters_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself\n\t\t.characters\n\t\t.includesSubsequence(\n\t\t\taString.characters\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "includesSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.includes(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.includes(_aString);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "indexOfSubstringStartingAt",
  ["self", "aString", "anInteger"],
  sl.annotateFunction(function (_self, _aString, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.indexOf(_aString, _anInteger - 1) + 1;
  }, ["self", "aString", "anInteger"]),
  "{ :self :aString :anInteger |\n\t\t<primitive: return _self.indexOf(_aString, _anInteger - 1) + 1;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "indexOfSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.indexOf(_aString) + 1;
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.indexOf(_aString) + 1;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "longestCommonSubsequence",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(
      _self,
      sl.annotateFunction(function (_c) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _longestCommonSubsequence_2(_c, _characters_1(_aString));
      }, ["c"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.onCharacters { :c |\n\t\t\tc.longestCommonSubsequence(\n\t\t\t\taString.characters\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "longestCommonSubstringList",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _longestCommonSubstringList_2(
        _characters_1(_self),
        _characters_1(_aString),
      ),
      _stringCatenate_1,
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself\n\t\t.characters\n\t\t.longestCommonSubstringList(aString.characters)\n\t\t.collect(stringCatenate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "longestCommonSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(
      _self,
      sl.annotateFunction(function (_c) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _longestCommonSubstring_2(_c, _characters_1(_aString));
      }, ["c"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.onCharacters { :c |\n\t\t\tc.longestCommonSubstring(\n\t\t\t\taString.characters\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "longestIncreasingSubsequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(_self, _longestIncreasingSubsequence_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharacters(\n\t\t\tlongestIncreasingSubsequence:/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "noncontiguousSubsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharactersList_2(_self, _noncontiguousSubsequences_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharactersList(\n\t\t\tnoncontiguousSubsequences:/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "subsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharactersList_2(_self, _subsequences_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharactersList(\n\t\t\tsubsequences:/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SequenceAlignment",
  "substrings",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharactersList_2(_self, _substrings_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharactersList(\n\t\t\tsubstrings:/1\n\t\t)\n\t}",
);
