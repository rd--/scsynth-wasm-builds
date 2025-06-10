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
  "{ :self :delta | let answer = []; toDo(1, size(self), { :i | let a = atPin(self,-(i, 1)); let b = at(self,i); let c = atPin(self,+(i, 1)); ifTrue((|(not((>(abs(b), delta))), { &(>(b, 0), { |(<(a, 0), { <(c, 0) }) }) })), { add(answer,->([i], 1)) }) }); SparseArray(answer, [size(self)], 0) }",
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
  "{ :self | contourDetect(self,0) }",
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
  "{ :self :delta | let answer = []; let p = sign(at(self, 1)); toDo(2, size(self), { :i | let q = sign(at(self, i)); ifFalse(isZero(q), { ifFalse((>(abs((+(p, q))), delta)), { add(answer,->([i], 1)) }); p := q }) }); SparseArray(answer, [size(self)], 0) }",
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
  "{ :self | crossingDetect(self,0) }",
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
  "{ :self | let p = peakDetect(self); let z = 0; let answer = []; collect(upOrDownTo(1, size(self)), { :i | let q = at(p, i); ifTrue((&(=(q, 1), { =(z, 0) })), { add(answer,[i, at(self, i)]) }); z := q }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FeatureDetection",
  "findRepeatBy",
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
        _k,
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
  "{ :self :aBlock:/2 | let k = size(self); valueWithReturn({ :return:/1 | toDo(1, k, { :i | ifTrue(allSatisfy(upOrDownTo(i, k), { :j | aBlock(at(self, j), at(self, mod(j,i, 1))) }), { return(copyFromTo(self,1, i)) }) }); self }) }",
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
    return _findRepeatBy_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | findRepeatBy(self,=) }",
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
  "{ :self :i :delta :aBlock:/2 | let n = size(self); let y = at(self, i); let y0 = y; let y1 = y; let j = -(i, 1); let k = +(i, 1); whileTrue({ &(>=(j, 1), { <=(abs((-(y0, y))), delta) }) }, { y0 := at(self, j); j := -(j, 1) }); whileTrue({ &(<=(k, n), { <=(abs((-(y1, y))), delta) }) }, { y1 := at(self, k); k := +(k, 1) }); &(aBlock(y, y0), { aBlock(y, y1) }) }",
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
  "{ :self :aBlock:/2 | normal(SparseArray(collect(localMinimaByIndices(self,aBlock:/2), { :i | ->([i], true) }), [size(self)], false)) }",
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
  "{ :self | boole(collect(upOrDownTo(1, size(self)), { :i | isLocalMinimaBy(self,i, 0, >=) })) }",
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
  "{ :self | boole(collect(upOrDownTo(1, size(self)), { :i | isLocalMinimaBy(self,i, 0, <=) })) }",
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
  "{ :self | maxDetect(self) }",
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
  "{ :self | count(zeroCrossingDetect(self),identity:/1) }",
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
  "{ :self | let answer = List(size(self), false); let p = sign(at(self, 1)); toDo(2, size(self), { :i | let q = sign(at(self, i)); ifFalse(isZero(q), { ifTrue(isZero((+(p, q))), { atPut(answer, i, true) }); p := q }) }); answer }",
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
  "{ :self | let n = size(self); let m = /(1, (-(n, 1))); let b = collect(self, { :each | boole((>=(each, 0))) }); *(sum(abs(differences(b))), m) }",
);
