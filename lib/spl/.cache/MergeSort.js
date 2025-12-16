sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeFirstMiddleLastIntoBy",
  ["self", "first", "middle", "last", "destination", "sortBlock:/2"],
  sl.annotateFunction(
    function (_self, _first, _middle, _last, _destination, _sortBlock_2) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _first, _middle, _last, _destination, _sortBlock_2";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _first;
      let _i2 = _plusSign_2(_middle, 1);
      let _val1 = _at_2(_self, _i1);
      let _val2 = _at_2(_self, _i2);
      let _out = _hyphenMinus_2(_first, 1);
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _lessThanSignEqualsSign_2(_i1, _middle),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_i2, _last);
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
            _sortBlock_2(_val1, _val2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _out = _plusSign_2(_out, 1);
              _i1 = _plusSign_2(_i1, 1);
              _atPut_3(_destination, _out, _val1);
              return _val1 = _at_2(_self, _i1);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _out = _plusSign_2(_out, 1);
              _i2 = _plusSign_2(_i2, 1);
              _atPut_3(_destination, _out, _val2);
              return _val2 = _atWrap_2(_self, _i2);
            }, []),
          );
        }, []),
      );
      return _if_3(
        _lessThanSignEqualsSign_2(_i1, _middle),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _replaceFromToWithStartingAt_5(
            _destination,
            _plusSign_2(_out, 1),
            _last,
            _self,
            _i1,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _replaceFromToWithStartingAt_5(
            _destination,
            _plusSign_2(_out, 1),
            _last,
            _self,
            _i2,
          );
        }, []),
      );
    },
    ["self", "first", "middle", "last", "destination", "sortBlock:/2"],
  ),
  "{ :self :first :middle :last :destination :sortBlock:/2 |\n\t\tlet i1 = first;\n\t\tlet i2 = middle + 1;\n\t\tlet val1 = self[i1];\n\t\tlet val2 = self[i2];\n\t\tlet out = first - 1;\n\t\t{\n\t\t\ti1 <= middle & {\n\t\t\t\ti2 <= last\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tsortBlock(val1, val2).if {\n\t\t\t\tout := out + 1;\n\t\t\t\ti1 := i1 + 1;\n\t\t\t\tdestination[out] := val1;\n\t\t\t\tval1 := self[i1]\n\t\t\t} {\n\t\t\t\tout := out + 1;\n\t\t\t\ti2 := i2 + 1;\n\t\t\t\tdestination[out] := val2;\n\t\t\t\tval2 := self.atWrap(i2)\n\t\t\t}\n\t\t};\n\t\t(i1 <= middle).if {\n\t\t\tdestination.replaceFromToWithStartingAt(out + 1, last, self, i1)\n\t\t} {\n\t\t\tdestination.replaceFromToWithStartingAt(out + 1, last, self, i2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortFromToBy",
  ["self", "startIndex", "stopIndex", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _startIndex, _stopIndex, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _startIndex, _stopIndex, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSignEqualsSign_2(_size, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_startIndex, _stopIndex);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifFalse_2(
          _lessThanSignEqualsSign_2(1, _startIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _startIndex);
          }, []),
        );
        _ifFalse_2(
          _lessThanSignEqualsSign_2(_stopIndex, _size),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _stopIndex);
          }, []),
        );
        _ifFalse_2(
          _lessThanSign_2(_startIndex, _stopIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _startIndex);
          }, []),
        );
        _mergeSortFromToIntoBy_5(
          _copy_1(_self),
          _startIndex,
          _stopIndex,
          _self,
          _sortBlock_2,
        );
        return _self;
      }, []),
    );
  }, ["self", "startIndex", "stopIndex", "sortBlock:/2"]),
  "{ :self :startIndex :stopIndex :sortBlock:/2 |\n\t\tlet size = self.size;\n\t\t(\n\t\t\tsize <= 1 | {\n\t\t\t\tstartIndex = stopIndex\n\t\t\t}\n\t\t).if {\n\t\t\tself\n\t\t} {\n\t\t\t(1 <= startIndex).ifFalse {\n\t\t\t\tself.errorSubscriptBounds(startIndex)\n\t\t\t};\n\t\t\t(stopIndex <= size).ifFalse {\n\t\t\t\tself.errorSubscriptBounds(stopIndex)\n\t\t\t};\n\t\t\t(startIndex < stopIndex).ifFalse {\n\t\t\t\tself.errorSubscriptBounds(startIndex)\n\t\t\t};\n\t\t\tself.copy.mergeSortFromToIntoBy(startIndex, stopIndex, self, sortBlock:/2);\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortFromToIntoBy",
  ["self", "firstIndex", "lastIndex", "destination", "sortBlock:/2"],
  sl.annotateFunction(
    function (_self, _firstIndex, _lastIndex, _destination, _sortBlock_2) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _firstIndex, _lastIndex, _destination, _sortBlock_2";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _hyphenMinus_2(_lastIndex, _firstIndex);
      /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_n, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _self;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _firstObject = _at_2(_self, _firstIndex);
              let _lastObject = _at_2(_self, _lastIndex);
              /* Statements */
              _if_3(
                _sortBlock_2(_firstObject, _lastObject),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _atPut_3(_destination, _lastIndex, _lastObject);
                  return _atPut_3(_destination, _firstIndex, _firstObject);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _atPut_3(_destination, _lastIndex, _firstObject);
                  return _atPut_3(_destination, _firstIndex, _lastObject);
                }, []),
              );
              return _self;
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _n = _solidusSolidus_2(_plusSign_2(_firstIndex, _lastIndex), 2);
          _mergeSortFromToIntoBy_5(
            _destination,
            _firstIndex,
            _n,
            _self,
            _sortBlock_2,
          );
          _mergeSortFromToIntoBy_5(
            _destination,
            _plusSign_2(_n, 1),
            _lastIndex,
            _self,
            _sortBlock_2,
          );
          return _mergeFirstMiddleLastIntoBy_6(
            _self,
            _firstIndex,
            _n,
            _lastIndex,
            _destination,
            _sortBlock_2,
          );
        }, []),
      );
    },
    ["self", "firstIndex", "lastIndex", "destination", "sortBlock:/2"],
  ),
  "{ :self :firstIndex :lastIndex :destination :sortBlock:/2 |\n\t\tlet n = lastIndex - firstIndex;\n\t\t(n <= 1).if {\n\t\t\t(n = 0).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tlet firstObject = self[firstIndex];\n\t\t\t\tlet lastObject = self[lastIndex];\n\t\t\t\tsortBlock(firstObject, lastObject).if {\n\t\t\t\t\tdestination[lastIndex] := lastObject;\n\t\t\t\t\tdestination[firstIndex] := firstObject\n\t\t\t\t} {\n\t\t\t\t\tdestination[lastIndex] := firstObject;\n\t\t\t\t\tdestination[firstIndex] := lastObject\n\t\t\t\t};\n\t\t\t\tself\n\t\t\t}\n\t\t} {\n\t\t\tn := firstIndex + lastIndex // 2;\n\t\t\tdestination.mergeSortFromToIntoBy(firstIndex, n, self, sortBlock:/2);\n\t\t\tdestination.mergeSortFromToIntoBy(n + 1, lastIndex, self, sortBlock:/2);\n\t\t\tself.mergeFirstMiddleLastIntoBy(firstIndex, n, lastIndex, destination, sortBlock:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortBy",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortFromToBy_4(_self, 1, _size_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.mergeSortFromToBy(1, self.size, sortBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSort",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortBy_2(_self, _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.mergeSortBy(sortBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortBy_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.mergeSortBy(<)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortWithIndices",
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
        return _mergeSortBy_2(
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
  "{ :self :sortBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\t[]\n\t\t} {\n\t\t\tself.withIndexCollect { :each :index |\n\t\t\t\teach -> index\n\t\t\t}.mergeSortBy { :p :q |\n\t\t\t\tsortBlock(p.key, q.key)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortWithIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortWithIndices_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.mergeSortWithIndices(<)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MergeSort",
  "mergeSortWithMonitor",
  ["self", "left", "right", "monitorBlock:/1"],
  sl.annotateFunction(function (_self, _left, _right, _monitorBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _left, _right, _monitorBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_left, _right),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _middle = _solidusSolidus_2(_plusSign_2(_left, _right), 2);
        let _i = _left;
        let _endI = _middle;
        let _j = _plusSign_2(_middle, 1);
        /* Statements */
        _mergeSortWithMonitor_4(_self, _left, _middle, _monitorBlock_1);
        _mergeSortWithMonitor_4(
          _self,
          _plusSign_2(_middle, 1),
          _right,
          _monitorBlock_1,
        );
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSignEqualsSign_2(_i, _endI),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_j, _right);
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
              _lessThanSign_2(_at_2(_self, _i), _at_2(_self, _j)),
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
                } /* Temporaries */
                let _x = _at_2(_self, _j);
                /* Statements */
                _downToDo_3(
                  _hyphenMinus_2(_j, 1),
                  _i,
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _atPut_3(
                      _self,
                      _plusSign_2(_k, 1),
                      _at_2(_self, _k),
                    );
                  }, ["k"]),
                );
                _atPut_3(_self, _i, _x);
                _monitorBlock_1(_self);
                _i = _plusSign_2(_i, 1);
                _endI = _plusSign_2(_endI, 1);
                return _j = _plusSign_2(_j, 1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _self;
  }, ["self", "left", "right", "monitorBlock:/1"]),
  "{ :self :left :right :monitorBlock:/1 |\n\t\t(left < right).ifTrue {\n\t\t\tlet middle = (left + right) // 2;\n\t\t\tlet i = left;\n\t\t\tlet endI = middle;\n\t\t\tlet j = middle + 1;\n\t\t\tmergeSortWithMonitor(self, left, middle, monitorBlock:/1);\n\t\t\tmergeSortWithMonitor(self, middle + 1, right, monitorBlock:/1);\n\t\t\t{ i <= endI & { j <= right } }.whileTrue {\n\t\t\t\t(self[i] < self[j]).if {\n\t\t\t\t\ti := i + 1\n\t\t\t\t} {\n\t\t\t\t\tlet x = self[j];\n\t\t\t\t\t(j - 1).downToDo(i) { :k |\n\t\t\t\t\t\tself[k + 1] := self[k]\n\t\t\t\t\t};\n\t\t\t\t\tself[i] := x;\n\t\t\t\t\tmonitorBlock(self);\n\t\t\t\t\ti := i + 1;\n\t\t\t\t\tendI := endI + 1;\n\t\t\t\t\tj := j + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MergeSort",
  "mergeSortWithMonitor",
  ["self", "monitorBlock:/1"],
  sl.annotateFunction(function (_self, _monitorBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _monitorBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortWithMonitor_4(_self, 1, _size_1(_self), _monitorBlock_1);
  }, ["self", "monitorBlock:/1"]),
  "{ :self :monitorBlock:/1 |\n\t\tmergeSortWithMonitor(self, 1, self.size, monitorBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MergeSort",
  "mergeSortMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortTracingState_2(_self, _mergeSortWithMonitor_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortTracingState(\n\t\t\tmergeSortWithMonitor:/2\n\t\t)\n\t}",
);
