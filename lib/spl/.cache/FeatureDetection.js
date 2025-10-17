sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "contourDetect",
  ["self", "delta"],
  sl.annotateFunction(function (_self, _delta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _atPin_2(_self, _hyphenMinus_2(_i, 1));
        let _b = _at_2(_self, _i);
        let _c = _atPin_2(_self, _plusSign_2(_i, 1));
        /* Statements */
        return _ifTrue_2(
          _verticalLine_2(
            _not_1(_greaterThanSign_2(_abs_1(_b), _delta)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _greaterThanSign_2(_b, 0),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _verticalLine_2(
                    _lessThanSign_2(_a, 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSign_2(_c, 0);
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
            return _add_2(_answer, _hyphenMinusGreaterThanSign_2([_i], 1));
          }, []),
        );
      }, ["i"]),
    );
    return _SparseArray_3(_answer, [_size_1(_self)], 0);
  }, ["self", "delta"]),
  "{ :self :delta |\n\t\tlet answer = [];\n\t\t1.toDo(self.size) { :i |\n\t\t\tlet a = self.atPin(i - 1);\n\t\t\tlet b = self.at(i);\n\t\t\tlet c = self.atPin(i + 1);\n\t\t\t(\n\t\t\t\t(b.abs > delta).not | {\n\t\t\t\t\tb > 0 & { a < 0 | { c < 0 } }\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tanswer.add([i] -> 1)\n\t\t\t}\n\t\t};\n\t\tSparseArray(answer, [self.size], 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "contourDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contourDetect_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.contourDetect(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "crossingDetect",
  ["self", "delta"],
  sl.annotateFunction(function (_self, _delta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _p = _sign_1(_at_2(_self, 1));
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
        let _q = _sign_1(_at_2(_self, _i));
        /* Statements */
        return _ifFalse_2(
          _isZero_1(_q),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifFalse_2(
              _greaterThanSign_2(_abs_1(_plusSign_2(_p, _q)), _delta),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _hyphenMinusGreaterThanSign_2([_i], 1));
              }, []),
            );
            return _p = _q;
          }, []),
        );
      }, ["i"]),
    );
    return _SparseArray_3(_answer, [_size_1(_self)], 0);
  }, ["self", "delta"]),
  "{ :self :delta |\n\t\tlet answer = [];\n\t\tlet p = self[1].sign;\n\t\t2.toDo(self.size) { :i |\n\t\t\tlet q = self[i].sign;\n\t\t\tq.isZero.ifFalse {\n\t\t\t\t((p + q).abs > delta).ifFalse {\n\t\t\t\t\tanswer.add([i] -> 1)\n\t\t\t\t};\n\t\t\t\tp := q\n\t\t\t}\n\t\t};\n\t\tSparseArray(answer, [self.size], 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "crossingDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _crossingDetect_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.crossingDetect(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "findPeaks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _peakDetect_1(_self);
    let _z = 0;
    let _answer = [];
    /* Statements */
    _collect_2(
      _upOrDownTo_2(1, _size_1(_self)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _q = _at_2(_p, _i);
        /* Statements */
        _ifTrue_2(
          _ampersand_2(
            _equalsSign_2(_q, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_z, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, [_i, _at_2(_self, _i)]);
          }, []),
        );
        return _z = _q;
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.peakDetect;\n\t\tlet z = 0;\n\t\tlet answer = [];\n\t\t(1 .. self.size).collect { :i |\n\t\t\tlet q = p[i];\n\t\t\t(q = 1 & { z = 0 }).ifTrue {\n\t\t\t\tanswer.add([i, self[i]])\n\t\t\t};\n\t\t\tz := q\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "isLocalMinimaBy",
  ["self", "i", "delta", "aBlock:/2"],
  sl.annotateFunction(function (_self, _i, _delta, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _i, _delta, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _y = _at_2(_self, _i);
    let _y0 = _y;
    let _y1 = _y;
    let _j = _hyphenMinus_2(_i, 1);
    let _k = _plusSign_2(_i, 1);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSignEqualsSign_2(_j, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _abs_1(_hyphenMinus_2(_y0, _y)),
              _delta,
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
        _y0 = _at_2(_self, _j);
        return _j = _hyphenMinus_2(_j, 1);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(_k, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _abs_1(_hyphenMinus_2(_y1, _y)),
              _delta,
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
        _y1 = _at_2(_self, _k);
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _ampersand_2(
      _aBlock_2(_y, _y0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_y, _y1);
      }, []),
    );
  }, ["self", "i", "delta", "aBlock:/2"]),
  "{ :self :i :delta :aBlock:/2 |\n\t\tlet n = self.size;\n\t\tlet y = self[i];\n\t\tlet y0 = y;\n\t\tlet y1 = y;\n\t\tlet j = i - 1;\n\t\tlet k = i + 1;\n\t\t{\n\t\t\tj >= 1 & { (y0 - y).abs <= delta }\n\t\t}.whileTrue {\n\t\t\ty0 := self[j];\n\t\t\tj := j - 1\n\t\t};\n\t\t{\n\t\t\tk <= n & { (y1 - y).abs <= delta }\n\t\t}.whileTrue {\n\t\t\ty1 := self[k];\n\t\t\tk := k + 1\n\t\t};\n\t\taBlock(y, y0) & { aBlock(y, y1) }\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "isLocalMinimaBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _normal_1(
      _SparseArray_3(
        _collect_2(
          _localMinimaByIndices_2(_self, _aBlock_2),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinusGreaterThanSign_2([_i], true);
          }, ["i"]),
        ),
        [_size_1(_self)],
        false,
      ),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tSparseArray(\n\t\t\tself.localMinimaByIndices(aBlock:/2).collect { :i |\n\t\t\t\t[i] -> true\n\t\t\t},\n\t\t\t[self.size],\n\t\t\tfalse\n\t\t).normal\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "maxDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(
      _collect_2(
        _upOrDownTo_2(1, _size_1(_self)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _isLocalMinimaBy_4(_self, _i, 0, _greaterThanSignEqualsSign_2);
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t(1 .. self.size).collect { :i |\n\t\t\tself.isLocalMinimaBy(i, 0, >=)\n\t\t}.boole\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "minDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(
      _collect_2(
        _upOrDownTo_2(1, _size_1(_self)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _isLocalMinimaBy_4(_self, _i, 0, _lessThanSignEqualsSign_2);
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t(1 .. self.size).collect { :i |\n\t\t\tself.isLocalMinimaBy(i, 0, <=)\n\t\t}.boole\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "peakDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _maxDetect_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.maxDetect\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "zeroCrossingCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(_zeroCrossingDetect_1(_self), _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.zeroCrossingDetect.count(identity:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "zeroCrossingDetect",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_size_1(_self), false);
    let _p = _sign_1(_at_2(_self, 1));
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
        let _q = _sign_1(_at_2(_self, _i));
        /* Statements */
        return _ifFalse_2(
          _isZero_1(_q),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _isZero_1(_plusSign_2(_p, _q)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_answer, _i, true);
              }, []),
            );
            return _p = _q;
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size, false);\n\t\tlet p = self[1].sign;\n\t\t2.toDo(self.size) { :i |\n\t\t\tlet q = self[i].sign;\n\t\t\tq.isZero.ifFalse {\n\t\t\t\t(p + q).isZero.ifTrue {\n\t\t\t\t\tanswer[i] := true\n\t\t\t\t};\n\t\t\t\tp := q\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "zeroCrossingRate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _solidus_2(1, _hyphenMinus_2(_n, 1));
    let _b = _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_greaterThanSignEqualsSign_2(_each, 0));
      }, ["each"]),
    );
    /* Statements */
    return _asterisk_2(_sum_1(_abs_1(_differences_1(_b))), _m);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = 1 / (n - 1);\n\t\tlet b = self.collect { :each |\n\t\t\t(each >= 0).boole\n\t\t};\n\t\tb.differences.abs.sum * m\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "findRepeat",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _hyphenMinus_2(_k, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _allSatisfy_2(
              _upOrDownTo_2(_i, _k),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(
                  _at_2(_self, _j),
                  _at_2(_self, _mod_3(_j, _i, 1)),
                );
              }, ["j"]),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_copyFromTo_3(_self, 1, _i));
            }, []),
          );
        }, ["i"]),
      );
      return _self;
    }, ["return:/1"]));
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet k = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(k - 1) { :i |\n\t\t\t\t(i .. k).allSatisfy { :j |\n\t\t\t\t\taBlock(self[j], self[j.mod(i, 1)])\n\t\t\t\t}.ifTrue {\n\t\t\t\t\tself.copyFromTo(1, i).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "FeatureDetection",
  "findRepeat",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _hyphenMinus_2(_k, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _allSatisfy_2(
              _upOrDownTo_2(_i, _k),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(
                  _at_2(_self, _j),
                  _at_2(_self, _mod_3(_j, _i, 1)),
                );
              }, ["j"]),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_copyFromTo_3(_self, 1, _i));
            }, []),
          );
        }, ["i"]),
      );
      return _self;
    }, ["return:/1"]));
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet k = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(k - 1) { :i |\n\t\t\t\t(i .. k).allSatisfy { :j |\n\t\t\t\t\taBlock(self[j], self[j.mod(i, 1)])\n\t\t\t\t}.ifTrue {\n\t\t\t\t\tself.copyFromTo(1, i).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "findRepeat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _findRepeat_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.findRepeat(=)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "FeatureDetection",
  "findRepeat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _findRepeat_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.findRepeat(=)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "findTransientRepeat",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _plusSign_2(_hyphenMinus_2(_k, _asterisk_2(_n, 2)), 1);
      /* Statements */
      _toDo_3(
        1,
        _m,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _part = _sliceFromTo_3(_self, _i, _k);
          let _repeat = _findRepeat_1(_part);
          /* Statements */
          return _ifTrue_2(
            _ampersand_2(
              _exclamationMarkEqualsSignEqualsSign_2(_repeat, _part),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(
                  _asterisk_2(_size_1(_repeat), _n),
                  _plusSign_2(_hyphenMinus_2(_k, _i), 1),
                );
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1([
                _copyFromTo_3(_self, 1, _hyphenMinus_2(_i, 1)),
                _asList_1(_repeat),
              ]);
            }, []),
          );
        }, ["i"]),
      );
      return [_self, []];
    }, ["return:/1"]));
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet k = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet m = k - (n * 2) + 1;\n\t\t\t1.toDo(m) { :i |\n\t\t\t\tlet part = self.sliceFromTo(i, k);\n\t\t\t\tlet repeat = part.findRepeat;\n\t\t\t\t(repeat !== part & { (repeat.size * n) <= (k - i + 1) }).ifTrue {\n\t\t\t\t\t[self.copyFromTo(1, i - 1), repeat.asList].return\n\t\t\t\t}\n\t\t\t};\n\t\t\t[self, []]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "FeatureDetection",
  "findTransientRepeat",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _plusSign_2(_hyphenMinus_2(_k, _asterisk_2(_n, 2)), 1);
      /* Statements */
      _toDo_3(
        1,
        _m,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _part = _sliceFromTo_3(_self, _i, _k);
          let _repeat = _findRepeat_1(_part);
          /* Statements */
          return _ifTrue_2(
            _ampersand_2(
              _exclamationMarkEqualsSignEqualsSign_2(_repeat, _part),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(
                  _asterisk_2(_size_1(_repeat), _n),
                  _plusSign_2(_hyphenMinus_2(_k, _i), 1),
                );
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1([
                _copyFromTo_3(_self, 1, _hyphenMinus_2(_i, 1)),
                _asList_1(_repeat),
              ]);
            }, []),
          );
        }, ["i"]),
      );
      return [_self, []];
    }, ["return:/1"]));
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet k = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet m = k - (n * 2) + 1;\n\t\t\t1.toDo(m) { :i |\n\t\t\t\tlet part = self.sliceFromTo(i, k);\n\t\t\t\tlet repeat = part.findRepeat;\n\t\t\t\t(repeat !== part & { (repeat.size * n) <= (k - i + 1) }).ifTrue {\n\t\t\t\t\t[self.copyFromTo(1, i - 1), repeat.asList].return\n\t\t\t\t}\n\t\t\t};\n\t\t\t[self, []]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FeatureDetection",
  "findRepeat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_1(_findRepeat_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.findRepeat.stringJoin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FeatureDetection",
  "findTransientRepeat",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _findTransientRepeat_2(_contents_1(_self), _n),
      _stringJoin_1,
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.contents.findTransientRepeat(n).collect(stringJoin:/1)\n\t}",
);
