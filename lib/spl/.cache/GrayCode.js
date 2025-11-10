sl.addType(
  false,
  "GrayCode",
  "GrayCode",
  ["Object", "Equatable"],
  ["sequence", "alphabet"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GrayCode",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "GrayCode",
);

sl.addMethodToExistingType(
  "GrayCode",
  "GrayCode",
  "isBeckettGrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isBeckettGrayCode_1(_sequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sequence.isBeckettGrayCode\n\t}",
);

sl.addMethodToExistingType(
  "GrayCode",
  "GrayCode",
  "isCyclicGrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCyclicGrayCode_1(_sequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sequence.isCyclicGrayCode\n\t}",
);

sl.addMethodToExistingType(
  "GrayCode",
  "GrayCode",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_sequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sequence.size\n\t}",
);

sl.addMethodToExistingType(
  "GrayCode",
  "GrayCode",
  "transitionSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _grayCodeTransitionSequence_1(_sequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sequence.grayCodeTransitionSequence\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "GrayCode",
  ["sequence", "alphabet"],
  sl.annotateFunction(function (_sequence, _alphabet) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _sequence, _alphabet";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newGrayCode_0(), _sequence, _alphabet);
  }, ["sequence", "alphabet"]),
  "{ :sequence :alphabet |\n\t\tnewGrayCode().initializeSlots(sequence, alphabet)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "GrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _GrayCode_1(_grayCodeFromTransitionSequence_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _GrayCode_2(_self, _sort_1(_nub_1(_anyOne_1(_self))));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tGrayCode(self.grayCodeFromTransitionSequence)\n\t\t} {\n\t\t\tGrayCode(self, self.anyOne.nub.sort)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Binary",
  "GrayCode",
  "grayEncode",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _integerDigits_2(_n, _b);
    let _k = _size_1(_d);
    let _shift = 0;
    let _gray = _List_1(_k);
    /* Statements */
    _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(
          _gray,
          _i,
          _percentSign_2(_plusSign_2(_at_2(_d, _i), _shift), _b),
        );
        return _shift = _hyphenMinus_2(
          _plusSign_2(_shift, _b),
          _at_2(_gray, _i),
        );
      }, ["i"]),
    );
    return _fromDigits_2(_gray, _b);
  }, ["n", "b"]),
  "{ :n :b |\n\t\tlet d = n.integerDigits(b);\n\t\tlet k = d.size;\n\t\tlet shift = 0;\n\t\tlet gray = List(k);\n\t\t1.toDo(k) { :i |\n\t\t\tgray[i] := (d[i] + shift) % b;\n\t\t\tshift := shift + b - gray[i]\n\t\t};\n\t\tgray.fromDigits(b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Binary",
  "GrayCode",
  "grayEncode",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitXor_2(_n, _bitShiftRight_2(_n, 1));
  }, ["n"]),
  "{ :n |\n\t\tn.bitXor(n.bitShiftRight(1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Binary",
  "GrayCode",
  "grayDecode",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _bitShiftRight_2(_n, 1);
        return _exclamationMarkEqualsSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _bitXor_2(_answer, _n);
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = n;\n\t\t{\n\t\t\tn := n.bitShiftRight(1);\n\t\t\tn != 0\n\t\t}.whileTrue {\n\t\t\tanswer := answer.bitXor(n)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Binary",
  "GrayCode",
  "GrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _circumflexAccent_2(2, _self);
    /* Statements */
    return _GrayCode_1(
      _integerDigits_3(
        _grayEncode_1(_to_2(0, _hyphenMinus_2(_n, 1))),
        2,
        _self,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = 2 ^ self;\n\t\tGrayCode(\n\t\t\t0.to(n - 1).grayEncode.integerDigits(2, self)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "grayCodeFromOneIndexedTransitionSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _max_1(_self);
    let _v = _List_2(_k, 0);
    let _c = [_copy_1(_v)];
    /* Statements */
    _allButLastDo_2(
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_v, _i, _hyphenMinus_2(1, _at_2(_v, _i)));
        return _add_2(_c, _copy_1(_v));
      }, ["i"]),
    );
    return _c;
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.max;\n\t\tlet v = List(k, 0);\n\t\tlet c = [v.copy];\n\t\tself.allButLastDo { :i |\n\t\t\tv[i] := 1 - v[i];\n\t\t\tc.add(v.copy)\n\t\t};\n\t\tc\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "grayCodeFromTransitionSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_min_1(_self), [
      _hyphenMinusGreaterThanSign_2(
        0,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _grayCodeFromTransitionSequence_1(_plusSign_2(_self, 1));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _grayCodeFromOneIndexedTransitionSequence_1(_self);
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself.min.caseOf(\n\t\t\t[\n\t\t\t\t0 -> { (self + 1).grayCodeFromTransitionSequence },\n\t\t\t\t1 -> { self.grayCodeFromOneIndexedTransitionSequence }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "grayCodeTransitionSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _collect_2(
      _to_2(2, _plusSign_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _detectIndex_2(
          _hyphenMinus_2(
            _atWrap_2(_self, _i),
            _at_2(_self, _hyphenMinus_2(_i, 1)),
          ),
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_x, 0);
          }, ["x"]),
        );
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\t2.to(n + 1).collect { :i |\n\t\t\t(self.atWrap(i) - self.at(i - 1))\n\t\t\t.detectIndex { :x |\n\t\t\t\tx != 0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "isBeckettGrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isCyclicGrayCode_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_first_1(_self), _isZero_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SplVar1, 1);
            let _n = _at_2(__SplVar1, 2);
            let _k = _solidusSolidus_2(_hyphenMinus_2(_m, 1), 2);
            let _d = _allButLast_1(
              _sortOn_2(
                _collect_2(
                  _Span_3(2, _m, 1),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      _at_2(_self, _i),
                      _at_2(_self, _hyphenMinus_2(_i, 1)),
                    );
                  }, ["i"]),
                ),
                _min_1,
              ),
            );
            /* Statements */
            return _equalsSign_2(_abs_1(_first_2(_d, _k)), _last_2(_d, _k));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCyclicGrayCode & {\n\t\t\tself.first.allSatisfy(isZero:/1) & {\n\t\t\t\tlet [m, n] = self.shape;\n\t\t\t\tlet k = (m - 1) // 2;\n\t\t\t\tlet d = 2:m.collect { :i |\n\t\t\t\t\tself[i] - self[i - 1]\n\t\t\t\t}.sortOn(min:/1).allButLast;\n\t\t\t\td.first(k).abs = d.last(k)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "isCyclicGrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isGrayCode_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _abs_1(_sum_1(_hyphenMinus_2(_last_1(_self), _first_1(_self)))),
          1,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isGrayCode & {\n\t\t\t(self.last - self.first).sum.abs = 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GrayCode",
  "isGrayCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_m, _circumflexAccent_2(2, _n)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_self, _isBitVector_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _Span_3(2, _m, 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _abs_1(
                    _sum_1(
                      _hyphenMinus_2(
                        _at_2(_self, _i),
                        _at_2(_self, _hyphenMinus_2(_i, 1)),
                      ),
                    ),
                  ),
                  1,
                );
              }, ["i"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(m = (2 ^ n)) & {\n\t\t\tself.allSatisfy(isBitVector:/1) & {\n\t\t\t\t2:m.allSatisfy { :i |\n\t\t\t\t\t(self[i] - self[i - 1]).sum.abs = 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "GrayCode",
  "savageWinklerAlgorithmSubpath",
  ["n", "j"],
  sl.annotateFunction(function (_n, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pi_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [1];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _x = _plusSignPlusSign_2(_pi_1(_hyphenMinus_2(_n, 1)), [_n]);
          let _y = _atAll_2(_x, _x);
          let _z = _rotateRight_2(_y, 1);
          /* Statements */
          return _z;
        }, []),
      );
    }, ["n"]);
    let _p_3 = sl.annotateFunction(function (_n, _j, _reverse) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _n, _j, _reverse";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _equalsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_j, 0);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _not_1(_reverse),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [[0], [1]];
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [[1], [0]];
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
            _ampersand_2(
              _greaterThanSignEqualsSign_2(_j, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSign_2(_j, _n);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _r = [];
              let _o = _pi_1(_hyphenMinus_2(_n, 1));
              /* Statements */
              _if_3(
                _not_1(_reverse),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _do_2(
                    _p_3(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_j, 1), false),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _t = _plusSignPlusSign_2([1], _atAll_2(_x, _o));
                      /* Statements */
                      return _add_2(_r, _t);
                    }, ["x"]),
                  );
                  return _do_2(
                    _p_3(_hyphenMinus_2(_n, 1), _j, false),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _t = _plusSignPlusSign_2([0], _x);
                      /* Statements */
                      return _add_2(_r, _t);
                    }, ["x"]),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _do_2(
                    _p_3(_hyphenMinus_2(_n, 1), _j, true),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _t = _plusSignPlusSign_2([0], _x);
                      /* Statements */
                      return _add_2(_r, _t);
                    }, ["x"]),
                  );
                  return _do_2(
                    _p_3(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_j, 1), true),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _t = _plusSignPlusSign_2([1], _atAll_2(_x, _o));
                      /* Statements */
                      return _add_2(_r, _t);
                    }, ["x"]),
                  );
                }, []),
              );
              return _r;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [];
            }, []),
          );
        }, []),
      );
    }, ["n", "j", "reverse"]);
    /* Statements */
    return _if_3(
      _isEven_1(_j),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _p_3(_n, _j, false);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _p_3(_n, _j, true);
      }, []),
    );
  }, ["n", "j"]),
  "{ :n :j |\n\t\tlet pi = { :n |\n\t\t\t(n <= 1).if {\n\t\t\t\t[1]\n\t\t\t} {\n\t\t\t\tlet x = pi(n - 1) ++ [n];\n\t\t\t\tlet y = x.atAll(x);\n\t\t\t\tlet z = y.rotateRight(1);\n\t\t\t\tz\n\t\t\t}\n\t\t};\n\t\tlet p = { :n :j :reverse |\n\t\t\t(n = 1 & { j = 0 }).if {\n\t\t\t\treverse.not.if {\n\t\t\t\t\t[0; 1]\n\t\t\t\t} {\n\t\t\t\t\t[1; 0]\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(j >= 0 & { j < n }).if {\n\t\t\t\t\tlet r = [];\n\t\t\t\t\tlet o = pi(n - 1);\n\t\t\t\t\treverse.not.if {\n\t\t\t\t\t\tp(n - 1, j - 1, false).do { :x |\n\t\t\t\t\t\t\tlet t = [1] ++ x.atAll(o);\n\t\t\t\t\t\t\tr.add(t)\n\t\t\t\t\t\t};\n\t\t\t\t\t\tp(n - 1, j, false).do { :x |\n\t\t\t\t\t\t\tlet t = [0] ++ x;\n\t\t\t\t\t\t\tr.add(t)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tp(n - 1, j, true).do { :x |\n\t\t\t\t\t\t\tlet t = [0] ++ x;\n\t\t\t\t\t\t\tr.add(t)\n\t\t\t\t\t\t};\n\t\t\t\t\t\tp(n - 1, j - 1, true).do { :x |\n\t\t\t\t\t\t\tlet t = [1] ++ x.atAll(o);\n\t\t\t\t\t\t\tr.add(t)\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tr\n\t\t\t\t} {\n\t\t\t\t\t[]\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tj.isEven.if {\n\t\t\tp(n, j, false)\n\t\t} {\n\t\t\tp(n, j, true)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "GrayCode",
  "savageWinklerAlgorithm",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "savageWinklerAlgorithm");
      }, []),
    );
    return _catenate_1(
      _collect_2(
        _to_2(0, _hyphenMinus_2(_n, 1)),
        sl.annotateFunction(function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _savageWinklerAlgorithmSubpath_2(_n, _j);
        }, ["j"]),
      ),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n < 0).ifTrue {\n\t\t\tn.error('savageWinklerAlgorithm')\n\t\t};\n\t\t0.to(n - 1).collect { :j |\n\t\t\tsavageWinklerAlgorithmSubpath(n, j)\n\t\t}.catenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "GrayCode",
  "binaryReflectedGrayCode",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_circumflexAccent_2(2, _n), 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerDigits_3(_grayEncode_1(_i), 2, _n);
      }, ["i"]),
    );
  }, ["n"]),
  "{ :n |\n\t\t0.to((2 ^ n) - 1).collect { :i |\n\t\t\ti.grayEncode.integerDigits(2, n)\n\t\t}\n\t}",
);
