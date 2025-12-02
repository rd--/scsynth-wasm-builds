/*
IntegerPartitions : [Object, Equatable, Storeable] { | contents:<List> |

}

+List {

	IntegerPartitions { :self |
		newIntegerPartitions().initializeSlots(self)
	}

}
 */

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitions",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tn.integerPartitionsDescendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitions",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_1(
      _collect_2(
        _k,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionsExactly_2(_n, _each);
        }, ["each"]),
      ),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\tk.collect { :each |\n\t\t\tn.integerPartitionsExactly(each)\n\t\t}.++\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsDescendingDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _d = _List_2(_n, 1);
    let _k = 1;
    /* Statements */
    _atPut_3(_d, 1, _n);
    _aBlock_1(_copyFromTo_3(_d, 1, 1));
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_k, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _k;
        let _m = _at_2(_d, _k);
        let _nPrime = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_m, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _k = _hyphenMinus_2(_k, 1);
            return _m = _at_2(_d, _k);
          }, []),
        );
        _nPrime = _hyphenMinus_2(_plusSign_2(_m, _l), _k);
        _m = _hyphenMinus_2(_m, 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_m, _nPrime);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_d, _k, _m);
            _nPrime = _hyphenMinus_2(_nPrime, _m);
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        _atPut_3(_d, _k, _nPrime);
        return _aBlock_1(_copyFromTo_3(_d, 1, _k));
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet d = List(n, 1);\n\t\tlet k = 1;\n\t\td[1] := n;\n\t\taBlock(d.copyFromTo(1, 1));\n\t\t{\n\t\t\tk != n\n\t\t}.whileTrue {\n\t\t\tlet l = k;\n\t\t\tlet m = d[k];\n\t\t\tlet nPrime = nil;\n\t\t\t{\n\t\t\t\tm = 1\n\t\t\t}.whileTrue {\n\t\t\t\tk := k - 1;\n\t\t\t\tm := d[k]\n\t\t\t};\n\t\t\tnPrime := m + l - k;\n\t\t\tm := m - 1;\n\t\t\t{\n\t\t\t\tm < nPrime\n\t\t\t}.whileTrue {\n\t\t\t\td[k] := m;\n\t\t\t\tnPrime := nPrime - m;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\td[k] := nPrime;\n\t\t\taBlock(d.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsAscendingDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _a = _List_2(_n, 0);
    let _k = 2;
    let _y = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_k, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x, _l;
        /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        _x = _plusSign_2(_at_2(_a, _k), 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_asterisk_2(2, _x), _y);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_a, _k, _x);
            _y = _hyphenMinus_2(_y, _x);
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        _l = _plusSign_2(_k, 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_x, _y);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_a, _k, _x);
            _atPut_3(_a, _l, _y);
            _aBlock_1(_copyFromTo_3(_a, 1, _l));
            _x = _plusSign_2(_x, 1);
            return _y = _hyphenMinus_2(_y, 1);
          }, []),
        );
        _y = _hyphenMinus_2(_plusSign_2(_y, _x), 1);
        _atPut_3(_a, _k, _plusSign_2(_y, 1));
        return _aBlock_1(_copyFromTo_3(_a, 1, _k));
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet a = List(n, 0);\n\t\tlet k = 2;\n\t\tlet y = n - 1;\n\t\t{\n\t\t\tk != 1\n\t\t}.whileTrue {\n\t\t\tvar x, l;\n\t\t\tk := k - 1;\n\t\t\tx := a[k] + 1;\n\t\t\t{\n\t\t\t\t(2 * x) <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ty := y - x;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tl := k + 1;\n\t\t\t{\n\t\t\t\tx <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ta[l] := y;\n\t\t\t\taBlock(a.copyFromTo(1, l));\n\t\t\t\tx := x + 1;\n\t\t\t\ty := y - 1\n\t\t\t};\n\t\t\ty := y + x - 1;\n\t\t\ta[k] := y + 1;\n\t\t\taBlock(a.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsAscending",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsAscendingDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.integerPartitionsAscendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsExactly",
  ["j", "i"],
  sl.annotateFunction(function (_j, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _j, _i";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_3 = sl.annotateFunction(function (_t, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _t, _m, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _equalsSign_2(_m, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_t, _n);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [[_t]];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _verticalLine_2(
              _lessThanSign_2(_n, _m),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(
                  _lessThanSign_2(_n, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _verticalLine_2(
                      _lessThanSign_2(_m, 1),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(_t, 1);
                      }, []),
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
              return [];
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _collect_2(
                  _f_3(_t, _hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, _t)),
                  sl.annotateFunction(function (_r) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _r";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return (_plusSignPlusSign_2([_t], _r));
                  }, ["r"]),
                ),
                _f_3(_hyphenMinus_2(_t, 1), _m, _n),
              );
            }, []),
          );
        }, []),
      );
    }, ["t", "m", "n"]);
    /* Statements */
    return _f_3(_plusSign_2(_hyphenMinus_2(_j, _i), 1), _i, _j);
  }, ["j", "i"]),
  "{ :j :i |\n\t\tlet f = { :t :m :n |\n\t\t\t(m = 1 & { t = n }).if {\n\t\t\t\t[[t]]\n\t\t\t} {\n\t\t\t\t(n < m | { n < 1 | { m < 1 | { t < 1 } } }).if {\n\t\t\t\t\t[]\n\t\t\t\t} {\n\t\t\t\t\tf(t, m - 1, n - t).collect { :r |\n\t\t\t\t\t\t([t] ++ r)\n\t\t\t\t\t} ++ f(t - 1, m, n)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(j - i + 1, i, j)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsOdd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _integerPartitions_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(_each, _isOdd_1);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.integerPartitions.select { :each |\n\t\t\teach.allSatisfy(isOdd:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsRecursive",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectCatenate_2(
      _to_2(1, _n),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerPartitionsExactly_2(_n, _k);
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n |\n\t\t1.to(n).collectCatenate { :k |\n\t\t\tn.integerPartitionsExactly(k)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionsStrict",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_integerPartitions_1(_self), _isDuplicateFree_1);
  }, ["self"]),
  "{ :self |\n\t\tself.integerPartitions.select(isDuplicateFree:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionUnrankHeinzAscending",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _primePi_1(_primeFactors_1(_n));
  }, ["n"]),
  "{ :n |\n\t\tn.primeFactors.primePi\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionUnrankKarttunenAscending",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = [];
    let _b = _percentSign_2(_n, 2);
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _greaterThanSignGreaterThanSign_2(_n, 1);
        return _if_3(
          _equalsSign_2(_percentSign_2(_n, 2), _b),
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
            _b = _percentSign_2(_n, 2);
            return _add_2(_p, _i);
          }, []),
        );
      }, []),
    );
    return _p;
  }, ["n"]),
  "{ :n |\n\t\tlet p = [];\n\t\tlet b = n % 2;\n\t\tlet i = 1;\n\t\t{ n != 0 }.whileTrue {\n\t\t\tn := n >> 1;\n\t\t\t((n % 2) = b).if {\n\t\t\t\ti := i + 1\n\t\t\t} {\n\t\t\t\tb := n % 2;\n\t\t\t\tp.add(i)\n\t\t\t}\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "integerPartitionUnrank",
  ["n", "method"],
  sl.annotateFunction(function (_n, _method) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _method";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_method, [
      _hyphenMinusGreaterThanSign_2(
        "HeinzAscending",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionUnrankHeinzAscending_1(_n);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Heinz",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _reverse_1(_integerPartitionUnrankHeinzAscending_1(_n));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "KarttunenAscending",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionUnrankKarttunenAscending_1(_n);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Karttunen",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _reverse_1(_integerPartitionUnrankKarttunenAscending_1(_n));
        }, []),
      ),
    ]);
  }, ["n", "method"]),
  "{ :n :method |\n\t\tmethod.caseOf(\n\t\t\t[\n\t\t\t\t'HeinzAscending' -> {\n\t\t\t\t\tn.integerPartitionUnrankHeinzAscending\n\t\t\t\t},\n\t\t\t\t'Heinz' -> {\n\t\t\t\t\tn.integerPartitionUnrankHeinzAscending.reverse\n\t\t\t\t},\n\t\t\t\t'KarttunenAscending' -> {\n\t\t\t\t\tn.integerPartitionUnrankKarttunenAscending\n\t\t\t\t},\n\t\t\t\t'Karttunen' -> {\n\t\t\t\t\tn.integerPartitionUnrankKarttunenAscending.reverse\n\t\t\t\t}\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionFunctionP",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p_2 = sl.annotateFunction(function (_n, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_k, _n),
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
          } /* Statements */
          return _if_3(
            _equalsSign_2(_k, _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
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
                  } /* Statements */
                  return _plusSign_2(
                    _p_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_k, 1)),
                    _p_2(_hyphenMinus_2(_n, _k), _k),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["n", "k"]);
    /* Statements */
    return _p_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet p = { :n :k |\n\t\t\t(k > n).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(k = n).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t(k = 0).if {\n\t\t\t\t\t\t0\n\t\t\t\t\t} {\n\t\t\t\t\t\tp(n - 1, k - 1) + p(n - k, k)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp(self, anInteger)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionFunctionP",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_plusSign_2(_n, 1));
    /* Statements */
    _atPut_3(_a, 1, 1n);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = 1;
        let _s = 1;
        /* Statements */
        _atPut_3(_a, _plusSign_2(_i, 1), 0n);
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_s, _i);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(
              _isOdd_1(_k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _a,
                  _plusSign_2(_i, 1),
                  _plusSign_2(
                    _at_2(_a, _plusSign_2(_i, 1)),
                    _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
                  ),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _a,
                  _plusSign_2(_i, 1),
                  _hyphenMinus_2(
                    _at_2(_a, _plusSign_2(_i, 1)),
                    _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
                  ),
                );
              }, []),
            );
            return _if_3(
              _greaterThanSign_2(_k, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _s = _plusSign_2(_s, _k);
                return _k = _hyphenMinus_1(_k);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _k = _hyphenMinus_2(1, _k);
                return _s = _solidus_2(
                  _asterisk_2(_k, _hyphenMinus_2(_asterisk_2(3, _k), 1)),
                  2,
                );
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _at_2(_a, _plusSign_2(_n, 1));
  }, ["n"]),
  "{ :n |\n\t\tlet a = List(n + 1);\n\t\ta[1] := 1L;\n\t\t1.toDo(n) { :i |\n\t\t\tlet k = 1;\n\t\t\tlet s = 1;\n\t\t\ta[i + 1] := 0L;\n\t\t\t{\n\t\t\t\ts <= i\n\t\t\t}.whileTrue {\n\t\t\t\tk.isOdd.if {\n\t\t\t\t\ta[i + 1] := a[i + 1] + a[i - s + 1]\n\t\t\t\t} {\n\t\t\t\t\ta[i + 1] := a[i + 1] - a[i - s + 1]\n\t\t\t\t};\n\t\t\t\t(k > 0).if {\n\t\t\t\t\ts := s + k;\n\t\t\t\t\tk := k.-\n\t\t\t\t} {\n\t\t\t\t\tk := 1 - k;\n\t\t\t\t\ts := k * (3 * k - 1) / 2\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ta[n + 1]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionFunctionQ",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_2(
          _to_2(1, _n),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _partitionFunctionQ_2(_n, _k);
          }, ["k"]),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n < 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t1.to(n).sum { :k |\n\t\t\t\tpartitionFunctionQ(n, k)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionFunctionQ",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionFunctionP_2(_hyphenMinus_2(_n, _binomial_2(_k, 2)), _k);
  }, ["n", "k"]),
  "{ :n :k |\n\t\tpartitionFunctionP(n - k.binomial(2), k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionsP",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionFunctionP_1(_n);
  }, ["n"]),
  "{ :n |\n\t\tn.partitionFunctionP\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerPartition",
  "partitionsQ",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionFunctionQ_1(_n);
  }, ["n"]),
  "{ :n |\n\t\tn.partitionFunctionQ\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "bulgarianSolitaire",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [_size_1(_self)];
    let _b = _without_2(_hyphenMinus_2(_self, 1), 0);
    /* Statements */
    return _reverseSort_1(_plusSignPlusSign_2(_a, _b));
  }, ["self"]),
  "{ :self |\n\t\tlet a = [self.size];\n\t\tlet b = (self - 1).without(0);\n\t\t(a ++ b).reverseSort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "conjugatePartition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _j = _size_1(_self);
    let _done = false;
    /* Statements */
    _if_3(
      _lessThanSignEqualsSign_2(_j, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _done;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _j);
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _not_1(_done),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSignEqualsSign_2(
                      _size_1(_answer),
                      _at_2(_self, _j),
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
                _j = _hyphenMinus_2(_j, 1);
                return _ifTrue_2(
                  _equalsSign_2(_j, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _done = true;
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet j = self.size;\n\t\tlet done = false;\n\t\t(j <= 0).if {\n\t\t\tanswer\n\t\t} {\n\t\t\t{\n\t\t\t\tdone\n\t\t\t}.whileFalse {\n\t\t\t\tanswer.add(j);\n\t\t\t\t{\n\t\t\t\t\tdone.not & {\n\t\t\t\t\t\tanswer.size >= self[j]\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tj := j - 1;\n\t\t\t\t\t(j = 0).ifTrue {\n\t\t\t\t\t\tdone := true\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "ferrersDiagram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_self);
    /* Statements */
    return _LineDrawing_1(
      _toCollect_3(
        0,
        _hyphenMinus_2(_m, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _toCollect_3(
            1,
            _at_2(_self, _hyphenMinus_2(_m, _i)),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _Disk_2([_j, _i], 0.25);
            }, ["j"]),
          );
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.size;\n\t\t0.toCollect(m - 1) { :i |\n\t\t\t1.toCollect(self[m - i]) { :j |\n\t\t\t\tDisk([j, i], 0.25)\n\t\t\t}\n\t\t}.LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "heinzNumber",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_prime_1(_p));
  }, ["p"]),
  "{ :p |\n\t\tp.prime.product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "integerPartitionRankKarttunenAscending",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = 0;
    let _parity = _percentSign_2(_size_1(_p), 2);
    let _q = 1;
    let _j = 1;
    /* Statements */
    _do_2(
      _p,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _runLength = _plusSign_2(_hyphenMinus_2(_i, _j), 1);
        /* Statements */
        _ifTrue_2(
          _exclamationMarkEqualsSign_2(0, _parity),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _plusSign_2(
              _n,
              _asterisk_2(
                _hyphenMinus_2(_circumflexAccent_2(2, _runLength), 1),
                _q,
              ),
            );
          }, []),
        );
        _q = _lessThanSignLessThanSign_2(_q, _runLength);
        _j = _i;
        return _parity = _hyphenMinus_2(1, _parity);
      }, ["i"]),
    );
    return _n;
  }, ["p"]),
  "{ :p |\n\t\tlet n = 0;\n\t\tlet parity = p.size % 2;\n\t\tlet q = 1;\n\t\tlet j = 1;\n\t\tp.do { :i |\n\t\t\tlet runLength = (i - j) + 1;\n\t\t\t(0 != parity).ifTrue {\n\t\t\t\tn := n + (((2 ^ runLength) - 1) * q)\n\t\t\t};\n\t\t\tq := q << runLength;\n\t\t\tj := i;\n\t\t\tparity := 1 - parity\n\t\t};\n\t\tn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerPartition",
  "integerPartitionRank",
  ["p", "method"],
  sl.annotateFunction(function (_p, _method) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _method";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_method, [
      _hyphenMinusGreaterThanSign_2(
        "Heinz",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _heinzNumber_1(_p);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "KarttunenAscending",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionRankKarttunenAscending_1(_p);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Karttunen",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionRankKarttunenAscending_1(_reverse_1(_p));
        }, []),
      ),
    ]);
  }, ["p", "method"]),
  "{ :p :method |\n\t\tmethod.caseOf(\n\t\t\t[\n\t\t\t\t'Heinz' -> {\n\t\t\t\t\tp.heinzNumber\n\t\t\t\t},\n\t\t\t\t'KarttunenAscending' -> {\n\t\t\t\t\tp.integerPartitionRankKarttunenAscending\n\t\t\t\t},\n\t\t\t\t'Karttunen' -> {\n\t\t\t\t\tp.reverse.integerPartitionRankKarttunenAscending\n\t\t\t\t}\n\t\t\t]\n\t\t)\n\t}",
);
