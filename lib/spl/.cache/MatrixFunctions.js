sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "adjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inverse_1(_self), _determinant_1(_self));
  }, ["self"]),
  "{ :self | *(inverse(self), determinant(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "antitranspose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL432 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL432, 1);
    let _n = _at_2(__SPL432, 2);
    let _answer = [];
    /* Statements */
    _downToDo_3(
      _n,
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _row = [];
        /* Statements */
        _downToDo_3(
          _m,
          1,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_row, _at_2(_at_2(_self, _j), _i));
          }, ["j"]),
        );
        return _add_2(_answer, _row);
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let __SPL432 = assertIsOfSize(shape(self), 2); let m = at(__SPL432, 1); let n = at(__SPL432, 2); let answer = []; downToDo(n, 1, { :i | let row = []; downToDo(m, 1, { :j | add(row,at(at(self, j), i)) }); add(answer,row) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "arrayRules",
  ["self", "zero"],
  sl.annotateFunction(function (_self, _zero) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _zero";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _shape_1(_self);
    let _answer = [];
    /* Statements */
    _withDeepIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_each, _zero),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _hyphenMinusGreaterThanSign_2(_index, _each),
            );
          }, []),
        );
      }, ["each", "index"]),
    );
    _ifTrue_2(
      _equalsSign_2(_atPath_2(_self, _shape), _zero),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_shape, _zero));
      }, []),
    );
    return _answer;
  }, ["self", "zero"]),
  "{ :self :zero | let shape = shape(self); let answer = []; withDeepIndexDo(self, { :each :index | ifFalse((=(each, zero)), { add(answer,->(index, each)) }) }); ifTrue((=(atPath(self,shape), zero)), { add(answer,->(shape, zero)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "bareissAlgorithm",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _size_1(_m);
      let _sign = 1;
      let _prev = 1;
      /* Statements */
      _toDo_3(
        1,
        _n,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _equalsSign_2(_at_2(_at_2(_m, _i), _i), 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _swapTo = null;
              /* Statements */
              _toDo_3(
                _plusSign_2(_i, 1),
                _n,
                sl.annotateFunction(function (_j) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ifTrue_2(
                    _tildeEqualsSign_2(_at_2(_at_2(_m, _j), _i), 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _swapTo = _j;
                    }, []),
                  );
                }, ["j"]),
              );
              return _ifNil_3(
                _swapTo,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(0);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _swapRows_3(_m, _i, _swapTo);
                  return _sign = _asterisk_2(_sign, -1);
                }, []),
              );
            }, []),
          );
          _toDo_3(
            _plusSign_2(_i, 1),
            _n,
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _toDo_3(
                _plusSign_2(_i, 1),
                _n,
                sl.annotateFunction(function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _atPut_3(
                    _at_2(_m, _j),
                    _k,
                    _solidusSolidus_2(
                      _hyphenMinus_2(
                        _asterisk_2(
                          _at_2(_at_2(_m, _j), _k),
                          _at_2(_at_2(_m, _i), _i),
                        ),
                        _asterisk_2(
                          _at_2(_at_2(_m, _j), _i),
                          _at_2(_at_2(_m, _i), _k),
                        ),
                      ),
                      _prev,
                    ),
                  );
                }, ["k"]),
              );
            }, ["j"]),
          );
          return _prev = _at_2(_at_2(_m, _i), _i);
        }, ["i"]),
      );
      return _asterisk_2(_sign, _at_2(_at_2(_m, _n), _n));
    }, ["return:/1"]));
  }, ["m"]),
  "{ :m | valueWithReturn({ :return:/1 | let n = size(m); let sign = 1; let prev = 1; toDo(1, n, { :i | ifTrue((=(at(at(m, i), i), 0)), { let swapTo = nil; toDo((+(i, 1)), n, { :j | ifTrue((~=(at(at(m, j), i), 0)), { swapTo := j }) }); ifNil(swapTo, { return(0) }, { swapRows(m,i, swapTo); sign := *(sign, -1) }) }); toDo((+(i, 1)), n, { :j | toDo((+(i, 1)), n, { :k | atPut(at(m, j), k, //((-((*(at(at(m, j), k), at(at(m, i), i))), (*(at(at(m, j), i), at(at(m, i), k))))), prev)) }) }); prev := at(at(m, i), i) }); *(sign, at(at(m, n), n)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "cauchyMatrix",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(
          _plusSign_2(_at_2(_x, _i), _at_2(_y, _j)),
          -1,
        );
      }, ["i", "j"]),
      _upOrDownTo_2(1, _size_1(_x)),
      _upOrDownTo_2(1, _size_1(_y)),
    );
  }, ["x", "y"]),
  "{ :x :y | table({ :i :j | ^((+(at(x, i), at(y, j))), -1) },upOrDownTo(1, size(x)), upOrDownTo(1, size(y))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "choleskyBanachiewiczAlgorithm",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL433 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _m = _at_2(__SPL433, 1);
    let _n = _at_2(__SPL433, 2);
    let _l = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _i,
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _sum = 0;
            /* Statements */
            _toDo_3(
              1,
              _k,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sum = _plusSign_2(
                  _sum,
                  _asterisk_2(
                    _at_2(_at_2(_l, _i), _j),
                    _at_2(_at_2(_l, _k), _j),
                  ),
                );
              }, ["j"]),
            );
            return _atPut_3(
              _at_2(_l, _i),
              _k,
              _if_3(
                _equalsSign_2(_i, _k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _sqrt_1(
                    _hyphenMinus_2(_at_2(_at_2(_a, _i), _i), _sum),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _asterisk_2(
                    _solidus_2(1, _at_2(_at_2(_l, _k), _k)),
                    _hyphenMinus_2(_at_2(_at_2(_a, _i), _k), _sum),
                  );
                }, []),
              ),
            );
          }, ["k"]),
        );
      }, ["i"]),
    );
    return _l;
  }, ["a"]),
  "{ :a | let __SPL433 = assertIsOfSize(shape(a), 2); let m = at(__SPL433, 1); let n = at(__SPL433, 2); let l = zeroMatrix([m, n]); toDo(1, m, { :i | toDo(1, i, { :k | let sum = 0; toDo(1, k, { :j | sum := +(sum, (*(at(at(l, i), j), at(at(l, k), j)))) }); atPut(at(l, i), k, if((=(i, k)), { sqrt((-(at(at(a, i), i), sum))) }, { *(/(1, at(at(l, k), k)), (-(at(at(a, i), k), sum))) })) }) }); l }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "choleskyDecomposition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _choleskyBanachiewiczAlgorithm_1(_self);
  }, ["self"]),
  "{ :self | choleskyBanachiewiczAlgorithm(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "conjugateGradientMethod",
  ["a", "b", "x", "epsilon", "n"],
  sl.annotateFunction(function (_a, _b, _x, _epsilon, _n) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _a, _b, _x, _epsilon, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _hyphenMinus_2(_b, _dot_2(_a, _x));
      let _p = _copy_1(_r);
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
          let _ap = _dot_2(_a, _p);
          let _alpha = _solidus_2(_dot_2(_p, _r), _dot_2(_p, _ap));
          /* Statements */
          _x = _plusSign_2(_x, _asterisk_2(_alpha, _p));
          _r = _hyphenMinus_2(_b, _dot_2(_a, _x));
          return _if_3(
            _lessThanSign_2(
              _sqrt_1(_sum_1(_circumflexAccent_2(_r, 2))),
              _epsilon,
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_x);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _beta = _solidus_2(
                _negate_1(_dot_2(_r, _ap)),
                _dot_2(_p, _ap),
              );
              /* Statements */
              return _p = _plusSign_2(_r, _asterisk_2(_beta, _p));
            }, []),
          );
        }, ["i"]),
      );
      return _x;
    }, ["return:/1"]));
  }, ["a", "b", "x", "epsilon", "n"]),
  "{ :a :b :x :epsilon :n | valueWithReturn({ :return:/1 | let r = -(b, dot(a,x)); let p = copy(r); toDo(1, n, { :i | let ap = dot(a,p); let alpha = /(dot(p,r), dot(p,ap)); x := +(x, (*(alpha, p))); r := -(b, dot(a,x)); if((<(sqrt(sum((^(r, 2)))), epsilon)), { return(x) }, { let beta = /(negate(dot(r,ap)), dot(p,ap)); p := +(r, (*(beta, p))) }) }); x }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "conjugateTranspose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _conjugate_1(_transpose_1(_self));
  }, ["self"]),
  "{ :self | conjugate(transpose(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "cramersRule",
  ["m", "d"],
  sl.annotateFunction(function (_m, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_m);
    let _divisor = _determinant_1(_m);
    let _numerators = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deepCopy_1(_m);
      }, []),
      _k,
    );
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
        return _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _at_2(_at_2(_numerators, _i), _j),
              _i,
              _at_2(_d, _j),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _collect_2(
      _Span_3(1, _k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_determinant_1(_at_2(_numerators, _i)), _divisor);
      }, ["i"]),
    );
  }, ["m", "d"]),
  "{ :m :d | let k = size(m); let divisor = determinant(m); let numerators = !({ deepCopy(m) }, k); toDo(1, k, { :i | toDo(1, k, { :j | atPut(at(at(numerators, i), j), i, at(d, j)) }) }); collect(Span(1, k, 1), { :i | /(determinant(at(numerators, i)), divisor) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "crossCovarianceMatrix",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL434 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _n = _at_2(__SPL434, 1);
    let _p = _at_2(__SPL434, 2);
    let __SPL435 = _assertIsOfSize_2(_shape_1(_b), 2);
    let _m = _at_2(__SPL435, 1);
    let _q = _at_2(__SPL435, 2);
    let _l = _List_2(_n, 1);
    /* Statements */
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_n, _m);
    }, []));
    return _asterisk_2(
      _solidus_2(1, _hyphenMinus_2(_n, 1)),
      _dot_2(
        _transpose_1(
          _hyphenMinus_2(_a, _outer_3(_asterisk_2, _l, _mean_1(_a))),
        ),
        _conjugate_1(
          _hyphenMinus_2(_a, _outer_3(_asterisk_2, _l, _mean_1(_a))),
        ),
      ),
    );
  }, ["a", "b"]),
  "{ :a :b | let __SPL434 = assertIsOfSize(shape(a), 2); let n = at(__SPL434, 1); let p = at(__SPL434, 2); let __SPL435 = assertIsOfSize(shape(b), 2); let m = at(__SPL435, 1); let q = at(__SPL435, 2); let l = List(n, 1); assert({ =(n, m) }); *((/(1, (-(n, 1)))), dot(transpose((-(a, (outer(*,l, mean(a)))))),conjugate((-(a, (outer(*,l, mean(a)))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "determinant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _size = _size_1(_self);
        let _array = _self;
        /* Statements */
        return _if_3(
          _equalsSign_2(_size, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              _asterisk_2(_at_3(_array, 1, 1), _at_3(_array, 2, 2)),
              _asterisk_2(_at_3(_array, 1, 2), _at_3(_array, 2, 1)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_size, 3),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(
                  _hyphenMinus_2(
                    _hyphenMinus_2(
                      _plusSign_2(
                        _plusSign_2(
                          _asterisk_2(
                            _asterisk_2(
                              _at_3(_array, 1, 1),
                              _at_3(_array, 2, 2),
                            ),
                            _at_3(_array, 3, 3),
                          ),
                          _asterisk_2(
                            _asterisk_2(
                              _at_3(_array, 1, 2),
                              _at_3(_array, 2, 3),
                            ),
                            _at_3(_array, 3, 1),
                          ),
                        ),
                        _asterisk_2(
                          _asterisk_2(_at_3(_array, 1, 3), _at_3(_array, 2, 1)),
                          _at_3(_array, 3, 2),
                        ),
                      ),
                      _asterisk_2(
                        _asterisk_2(_at_3(_array, 1, 3), _at_3(_array, 2, 2)),
                        _at_3(_array, 3, 1),
                      ),
                    ),
                    _asterisk_2(
                      _asterisk_2(_at_3(_array, 1, 2), _at_3(_array, 2, 1)),
                      _at_3(_array, 3, 3),
                    ),
                  ),
                  _asterisk_2(
                    _asterisk_2(_at_3(_array, 1, 1), _at_3(_array, 2, 3)),
                    _at_3(_array, 3, 2),
                  ),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _answer = 0;
                /* Statements */
                _plainChangesDo_2(
                  _asList_1(_upOrDownTo_2(1, _size)),
                  sl.annotateFunction(function (_p) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _p";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _sign = _permutationSymbol_1(_p);
                    let _entries = _withIndexCollect_2(
                      _p,
                      sl.annotateFunction(function (_i, _j) {
                        /* ArityCheck */
                        if (arguments.length !== 2) {
                          const errorMessage = "Arity: expected 2, _i, _j";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _at_2(_at_2(_array, _i), _j);
                      }, ["i", "j"]),
                    );
                    /* Statements */
                    return _answer = _plusSign_2(
                      _answer,
                      _asterisk_2(_product_1(_entries), _sign),
                    );
                  }, ["p"]),
                );
                return _answer;
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
        } /* Statements */
        return _error_2(
          _self,
          "List>>determinant: not defined at non-square matrices",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSquareMatrix(self), { let size = size(self); let array = self; if((=(size, 2)), { -((*(at(array, 1, 1), at(array, 2, 2))), (*(at(array, 1, 2), at(array, 2, 1)))) }, { if((=(size, 3)), { -(-(-(+(+((*(*(at(array, 1, 1), at(array, 2, 2)), at(array, 3, 3))), (*(*(at(array, 1, 2), at(array, 2, 3)), at(array, 3, 1)))), (*(*(at(array, 1, 3), at(array, 2, 1)), at(array, 3, 2)))), (*(*(at(array, 1, 3), at(array, 2, 2)), at(array, 3, 1)))), (*(*(at(array, 1, 2), at(array, 2, 1)), at(array, 3, 3)))), (*(*(at(array, 1, 1), at(array, 2, 3)), at(array, 3, 2)))) }, { let answer = 0; plainChangesDo(asList(upOrDownTo(1, size)), { :p | let sign = permutationSymbol(p); let entries = withIndexCollect(p, { :i :j | at(at(array, i), j) }); answer := +(answer, (*(product(entries), sign))) }); answer }) }) }, { error(self,'List>>determinant: not defined at non-square matrices') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "dot",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _inner_4(_asterisk_2, _self, _aList, _plusSign_2);
  }, ["self", "aList"]),
  "{ :self :aList | inner(*,self, aList, +) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "eigenvalues",
  ["m", "epsilon", "n"],
  sl.annotateFunction(function (_m, _epsilon, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _epsilon, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _deepCopy_1(_m);
    let _i = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _not_1(_isUpperTriangularMatrix_1(_x)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_i, _n);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL436 = _assertIsOfSize_2(_qrDecomposition_1(_x), 2);
        let _q = _at_2(__SPL436, 1);
        let _r = _at_2(__SPL436, 2);
        /* Statements */
        _x = _dot_2(_r, _q);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _diagonal_1(_x);
  }, ["m", "epsilon", "n"]),
  "{ :m :epsilon :n | let x = deepCopy(m); let i = 0; whileTrue({ &(not(isUpperTriangularMatrix(x)), { <(i, n) }) }, { let __SPL436 = assertIsOfSize(qrDecomposition(x), 2); let q = at(__SPL436, 1); let r = at(__SPL436, 2); x := dot(r,q); i := +(i, 1) }); diagonal(x) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "eigenvalues",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _eigenvalues_3(_m, 1E-15, 100);
  }, ["m"]),
  "{ :m | eigenvalues(m,1E-15, 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "frobeniusCompanionMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_self), 1);
    let _w = _solidus_2(_negate_1(_self), _last_1(_self));
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, _plusSign_2(_j, 1)),
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
              _equalsSign_2(_j, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_w, _i);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 0;
              }, []),
            );
          }, []),
        );
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self | let n = -(size(self), 1); let w = /(negate(self), last(self)); table({ :i :j | if((=(i, (+(j, 1)))), { 1 }, { if((=(j, n)), { at(w, i) }, { 0 }) }) },Span(1, n, 1), Span(1, n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "frobeniusNorm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_sum_1(_collect_2(_ravel_1(_self), _square_1)));
  }, ["self"]),
  "{ :self | sqrt(sum(collect(ravel(self),square:/1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gaussJordanInverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL437 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL437, 1);
    let _n = _at_2(__SPL437, 2);
    let _a = _zeroMatrix_1([_m, _asterisk_2(_m, 2)]);
    let _r = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _ifTrue_2(
      _tildeEqualsSign_2(_m, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "List>>gaussJordanInverse: matrix is not square",
        );
      }, []),
    );
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _replaceFromToWith_4(_at_2(_a, _i), 1, _m, _at_2(_self, _i));
        return _atPut_3(_at_2(_a, _i), _plusSign_2(_m, _i), 1);
      }, ["i"]),
    );
    _reducedRowEchelonForm_1(_a);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _tildeEqualsSign_2(
                _at_2(_at_2(_a, _i), _j),
                _boole_1(_equalsSign_2(_i, _j)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "List>>gaussJordanInverse: matrix is singular",
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _at_2(_r, _i),
                  _j,
                  _at_2(_at_2(_a, _i), _plusSign_2(_m, _j)),
                );
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _r;
  }, ["self"]),
  "{ :self | let __SPL437 = assertIsOfSize(shape(self), 2); let m = at(__SPL437, 1); let n = at(__SPL437, 2); let a = zeroMatrix([m, *(m, 2)]); let r = zeroMatrix([m, n]); ifTrue((~=(m, n)), { error(self,'List>>gaussJordanInverse: matrix is not square') }); toDo(1, m, { :i | replaceFromToWith(at(a, i),1, m, at(self, i)); atPut(at(a, i), +(m, i), 1) }); reducedRowEchelonForm(a); toDo(1, n, { :i | toDo(1, n, { :j | if((~=(at(at(a, i), j), boole((=(i, j))))), { error(self,'List>>gaussJordanInverse: matrix is singular') }, { atPut(at(r, i), j, at(at(a, i), +(m, j))) }) }) }); r }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gaussianElimination",
  ["m", "v"],
  sl.annotateFunction(function (_m, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _deepCopy_1(_m);
    /* Statements */
    _withIndexDo_2(
      _a,
      sl.annotateFunction(function (_each, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_each, _at_2(_v, _i));
      }, ["each", "i"]),
    );
    _reducedRowEchelonForm_1(_a);
    return _collect_2(_a, _last_1);
  }, ["m", "v"]),
  "{ :m :v | let a = deepCopy(m); withIndexDo(a, { :each :i | add(each,at(v, i)) }); reducedRowEchelonForm(a); collect(a,last:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gaussSeidelMethod",
  ["a", "b", "x", "epsilon", "maximumIterations"],
  sl.annotateFunction(function (_a, _b, _x, _epsilon, _maximumIterations) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _a, _b, _x, _epsilon, _maximumIterations";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _timesRepeat_2(
        _maximumIterations,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _y = _copy_1(_x);
          let _p = 0;
          let _q = 0;
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
              let _sum = 0;
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
                  return _ifFalse_2(
                    _equalsSign_2(_j, _i),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _sum = _plusSign_2(
                        _sum,
                        _asterisk_2(_at_2(_at_2(_a, _i), _j), _at_2(_x, _j)),
                      );
                    }, []),
                  );
                }, ["j"]),
              );
              return _atPut_3(
                _x,
                _i,
                _solidus_2(
                  _hyphenMinus_2(_at_2(_b, _i), _sum),
                  _at_2(_at_2(_a, _i), _i),
                ),
              );
            }, ["i"]),
          );
          _toDo_3(
            1,
            _n,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              _p = _plusSign_2(
                _p,
                _abs_1(_hyphenMinus_2(_at_2(_x, _i), _at_2(_y, _i))),
              );
              return _q = _plusSign_2(_q, _abs_1(_at_2(_y, _i)));
            }, ["i"]),
          );
          _ifTrue_2(
            _equalsSign_2(_q, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _q = 1;
            }, []),
          );
          return _ifTrue_2(
            _lessThanSign_2(_solidus_2(_p, _q), _epsilon),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_x);
            }, []),
          );
        }, []),
      );
      return _x;
    }, ["return:/1"]));
  }, ["a", "b", "x", "epsilon", "maximumIterations"]),
  "{ :a :b :x :epsilon :maximumIterations | let n = size(a); valueWithReturn({ :return:/1 | timesRepeat(maximumIterations, { let y = copy(x); let p = 0; let q = 0; toDo(1, n, { :i | let sum = 0; toDo(1, n, { :j | ifFalse((=(j, i)), { sum := +(sum, (*(at(at(a, i), j), at(x, j)))) }) }); atPut(x, i, /((-(at(b, i), sum)), at(at(a, i), i))) }); toDo(1, n, { :i | p := +(p, abs((-(at(x, i), at(y, i))))); q := +(q, abs(at(y, i))) }); ifTrue((=(q, 0)), { q := 1 }); ifTrue((<((/(p, q)), epsilon)), { return(x) }) }); x }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gaussSeidelMethod",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _numberSign_2(0, _size_1(_a));
    let _epsilon = 1E-9;
    let _maximumIterations = 100;
    /* Statements */
    return _gaussSeidelMethod_5(_a, _b, _x, _epsilon, _maximumIterations);
  }, ["a", "b"]),
  "{ :a :b | let x = #(0, size(a)); let epsilon = 1E-9; let maximumIterations = 100; gaussSeidelMethod(a,b, x, epsilon, maximumIterations) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gramMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dot_2(_self, _transpose_1(_self));
  }, ["self"]),
  "{ :self | dot(self,transpose(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "gramSchmidtProcess",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _deepCopy_1(_self);
    let __SPL438 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _n = _at_2(__SPL438, 1);
    let _m = _at_2(__SPL438, 2);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_a, _k, _normalize_1(_at_2(_a, _k)));
        return _toDo_3(
          _plusSign_2(_k, 1),
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _a,
              _j,
              _hyphenMinus_2(
                _at_2(_a, _j),
                _asterisk_2(
                  _dot_2(_at_2(_a, _j), _at_2(_a, _k)),
                  _at_2(_a, _k),
                ),
              ),
            );
          }, ["j"]),
        );
      }, ["k"]),
    );
    return _a;
  }, ["self"]),
  "{ :self | let a = deepCopy(self); let __SPL438 = assertIsOfSize(shape(a), 2); let n = at(__SPL438, 1); let m = at(__SPL438, 2); toDo(1, n, { :k | atPut(a, k, normalize(at(a, k))); toDo((+(k, 1)), n, { :j | atPut(a, j, -(at(a, j), (*(dot(at(a, j),at(a, k)), at(a, k))))) }) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "hadamardProduct",
  ["aMatrix", "anotherMatrix"],
  sl.annotateFunction(function (_aMatrix, _anotherMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aMatrix, _anotherMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_shape_1(_aMatrix), _shape_1(_anotherMatrix)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_aMatrix, _anotherMatrix);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>hadamardProduct: unequal shapes");
      }, []),
    );
  }, ["aMatrix", "anotherMatrix"]),
  "{ :aMatrix :anotherMatrix | if((=(shape(aMatrix), shape(anotherMatrix))), { *(aMatrix, anotherMatrix) }, { error(self,'List>>hadamardProduct: unequal shapes') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "hankelMatrix",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_c);
    let _r = _plusSignPlusSign_2(
      [_last_1(_c)],
      _numberSign_2(0, _hyphenMinus_2(_m, 1)),
    );
    /* Statements */
    return _hankelMatrix_2(_c, _r);
  }, ["c"]),
  "{ :c | let m = size(c); let r = ++([last(c)], (#(0, (-(m, 1))))); hankelMatrix(c, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "hankelMatrix",
  ["c", "r"],
  sl.annotateFunction(function (_c, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_c);
    let _n = _size_1(_r);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _hyphenMinus_2(_plusSign_2(_i, _j), 1);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_k, _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_c, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_r, _plusSign_2(_hyphenMinus_2(_k, _m), 1));
          }, []),
        );
      }, ["i", "j"]),
      _Span_3(1, _m, 1),
      _Span_3(1, _n, 1),
    );
  }, ["c", "r"]),
  "{ :c :r | let m = size(c); let n = size(r); table({ :i :j | let k = -(+(i, j), 1); if((<=(k, m)), { at(c, k) }, { at(r, +(-(k, m), 1)) }) },Span(1, m, 1), Span(1, n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "heldKarpAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const dist = _self;
    const n = dist.length;
    const subsetCount = 1 << n;
    const dp = Array.from(
      { length: subsetCount },
      () => Array(n).fill(Infinity),
    );
    const parent = Array.from({ length: subsetCount }, () => Array(n).fill(-1));
    dp[1][0] = 0;
    for (let mask = 1; mask < subsetCount; mask++) {
      if ((mask & 1) === 0) {
        continue;
      }
      for (let j = 1; j < n; j++) {
        if ((mask & (1 << j)) === 0) {
          continue;
        }
        const prevMask = mask ^ (1 << j);
        for (let k = 0; k < n; k++) {
          if ((prevMask & (1 << k)) === 0) {
            continue;
          }
          const cost = dp[prevMask][k] + dist[k][j];
          if (cost < dp[mask][j]) {
            dp[mask][j] = cost;
            parent[mask][j] = k;
          }
        }
      }
    }
    const fullMask = subsetCount - 1;
    let minCost = Infinity;
    let lastCity = 0;
    for (let j = 1; j < n; j++) {
      const cost = dp[fullMask][j] + dist[j][0];
      if (cost < minCost) {
        minCost = cost;
        lastCity = j;
      }
    }
    const tour = [];
    let mask = fullMask;
    let curr = lastCity;
    while (curr !== 0) {
      tour.push(curr + 1);
      const p = parent[mask][curr];
      mask ^= 1 << curr;
      curr = p;
    }
    tour.push(1);
    tour.reverse();
    tour.push(1);
    return _Tuple_1([minCost, tour]);
  }, ["self"]),
  "{ :self | <primitive: const dist = _self;\n\t\tconst n = dist.length;\n\t\tconst subsetCount = 1 << n;\n\t\tconst dp = Array.from({ length: subsetCount }, () => Array(n).fill(Infinity));\n\t\tconst parent = Array.from({ length: subsetCount }, () => Array(n).fill(-1));\n\t\tdp[1][0] = 0;\n\t\tfor (let mask = 1; mask < subsetCount; mask++) {\n\t\t\tif ((mask & 1) === 0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tfor (let j = 1; j < n; j++) {\n\t\t\t\tif ((mask & (1 << j)) === 0) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tconst prevMask = mask ^ (1 << j);\n\t\t\t\tfor (let k = 0; k < n; k++) {\n\t\t\t\t\tif ((prevMask & (1 << k)) === 0) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tconst cost = dp[prevMask][k] + dist[k][j];\n\t\t\t\t\tif (cost < dp[mask][j]) {\n\t\t\t\t\t\tdp[mask][j] = cost;\n\t\t\t\t\t\tparent[mask][j] = k;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tconst fullMask = subsetCount - 1;\n\t\tlet minCost = Infinity;\n\t\tlet lastCity = 0;\n\t\tfor (let j = 1; j < n; j++) {\n\t\t\tconst cost = dp[fullMask][j] + dist[j][0];\n\t\t\tif (cost < minCost) {\n\t\t\t\tminCost = cost;\n\t\t\t\tlastCity = j;\n\t\t\t}\n\t\t}\n\t\tconst tour = [];\n\t\tlet mask = fullMask;\n\t\tlet curr = lastCity;\n\t\twhile (curr !== 0) {\n\t\t\ttour.push(curr + 1);\n\t\t\tconst p = parent[mask][curr];\n\t\t\tmask ^= 1 << curr;\n\t\t\tcurr = p;\n\t\t}\n\t\ttour.push(1);\n\t\ttour.reverse();\n\t\ttour.push(1);\n\t\treturn _Tuple_1([minCost, tour]);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "homogeneousTranslationMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _plusSign_2(_size_1(_self), 1);
    let _answer = _identityMatrix_1(_k);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_at_2(_answer, _i), _k, _at_2(_self, _i));
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let k = +(size(self), 1); let answer = identityMatrix(k); toDo(1, size(self), { :i | atPut(at(answer, i), k, at(self, i)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "inverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _numberOfRows_1(_self);
        /* Statements */
        return _if_3(
          _equalsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL439 = _assertIsOfSize_2(
              _catenate_1(_contents_1(_self)),
              4,
            );
            let _a = _at_2(__SPL439, 1);
            let _b = _at_2(__SPL439, 2);
            let _c = _at_2(__SPL439, 3);
            let _d = _at_2(__SPL439, 4);
            let _r = _solidus_2(
              1,
              _hyphenMinus_2(_asterisk_2(_a, _d), _asterisk_2(_b, _c)),
            );
            let _m = [[_d, _hyphenMinus_1(_b)], [_hyphenMinus_1(_c), _a]];
            /* Statements */
            return _asterisk_2(_r, _m);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _contents_1(_self);
            let _i = _identityMatrix_1(_n);
            let _e = _rowReduce_1(_each_1(_plusSignPlusSign_2)(_m, _i));
            /* Statements */
            return _collect_2(
              _e,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _drop_2(_each, _n);
              }, ["each"]),
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
        return _error_2(_self, "Sequence>>inverse: matrix not square");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSquareMatrix(self), { let n = numberOfRows(self); if((=(n, 2)), { let __SPL439 = assertIsOfSize(catenate(contents(self)), 4); let a = at(__SPL439, 1); let b = at(__SPL439, 2); let c = at(__SPL439, 3); let d = at(__SPL439, 4); let r = /(1, (-((*(a, d)), (*(b, c))))); let m = [[d, -(b)], [-(c), a]]; *(r, m) }, { let m = contents(self); let i = identityMatrix(n); let e = rowReduce(((each(++) . (m, i)))); collect(e, { :each | drop(each,n) }) }) }, { error(self,'Sequence>>inverse: matrix not square') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isDiagonallyDominantMatrix",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL440 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL440, 1);
    let _n = _at_2(__SPL440, 2);
    /* Statements */
    return _allSatisfy_2(
      _Span_3(1, _m, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _abs_1(_at_2(_at_2(_self, _i), _i));
        let _z = _sum_1(
          _collect_2(
            _Span_3(1, _n, 1),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _equalsSign_2(_j, _i),
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
                  return _abs_1(_at_2(_at_2(_self, _i), _j));
                }, []),
              );
            }, ["j"]),
          ),
        );
        /* Statements */
        return _aBlock_2(_x, _z);
      }, ["i"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let __SPL440 = assertIsOfSize(shape(self), 2); let m = at(__SPL440, 1); let n = at(__SPL440, 2); allSatisfy(Span(1, m, 1), { :i | let x = abs(at(at(self, i), i)); let z = sum(collect(Span(1, n, 1), { :j | if((=(j, i)), { 0 }, { abs(at(at(self, i), j)) }) })); aBlock(x, z) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isDiagonallyDominantMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDiagonallyDominantMatrix_2(_self, _greaterThanSignEqualsSign_2);
  }, ["self"]),
  "{ :self | isDiagonallyDominantMatrix(self,>=) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isLowerTriangularMatrix",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL441 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _r = _at_2(__SPL441, 1);
        let _c = _at_2(__SPL441, 2);
        /* Statements */
        return _allSatisfy_2(
          _to_2(1, _hyphenMinus_2(_r, _k)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _to_2(_plusSign_2(_plusSign_2(_i, 1), _k), _c),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "k"]),
  "{ :self :k | &(isMatrix(self), { let __SPL441 = assertIsOfSize(shape(self), 2); let r = at(__SPL441, 1); let c = at(__SPL441, 2); allSatisfy(to(1,-(r, k)), { :i | allSatisfy(to((+(+(i, 1), k)),c), { :j | isVeryCloseTo(at(at(self, i), j),0) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isLowerTriangularMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLowerTriangularMatrix_2(_self, 0);
  }, ["self"]),
  "{ :self | isLowerTriangularMatrix(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isOrthogonalMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL442 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _p = _at_2(__SPL442, 1);
    let _q = _at_2(__SPL442, 2);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_p, _q),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(
          _dot_2(_transpose_1(_self), _self),
          _identityMatrix_1(_q),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(
          _dot_2(_self, _transpose_1(_self)),
          _identityMatrix_1(_p),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL442 = assertIsOfSize(shape(self), 2); let p = at(__SPL442, 1); let q = at(__SPL442, 2); if((>=(p, q)), { isVeryCloseTo(dot(transpose(self),self),identityMatrix(q)) }, { isVeryCloseTo(dot(self,transpose(self)),identityMatrix(p)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isUnitaryMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL443 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _p = _at_2(__SPL443, 1);
    let _q = _at_2(__SPL443, 2);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_p, _q),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(
          _dot_2(_conjugateTranspose_1(_self), _self),
          _identityMatrix_1(_q),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(
          _dot_2(_self, _conjugateTranspose_1(_self)),
          _identityMatrix_1(_p),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL443 = assertIsOfSize(shape(self), 2); let p = at(__SPL443, 1); let q = at(__SPL443, 2); if((>=(p, q)), { isVeryCloseTo(dot(conjugateTranspose(self),self),identityMatrix(q)) }, { isVeryCloseTo(dot(self,conjugateTranspose(self)),identityMatrix(p)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isUpperTriangularMatrix",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL444 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _r = _at_2(__SPL444, 1);
        let _c = _at_2(__SPL444, 2);
        /* Statements */
        return _allSatisfy_2(
          _to_2(_hyphenMinus_2(2, _k), _r),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _to_2(1, _plusSign_2(_hyphenMinus_2(_i, 1), _k)),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "k"]),
  "{ :self :k | &(isMatrix(self), { let __SPL444 = assertIsOfSize(shape(self), 2); let r = at(__SPL444, 1); let c = at(__SPL444, 2); allSatisfy(to((-(2, k)),r), { :i | allSatisfy(to(1,+(-(i, 1), k)), { :j | isVeryCloseTo(at(at(self, i), j),0) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isUpperTriangularMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isUpperTriangularMatrix_2(_self, 0);
  }, ["self"]),
  "{ :self | isUpperTriangularMatrix(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "kuhnMunkresAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const C = _self;
    const J = C.length;
    if (J === 0) {
      throw new Error("kuhnMunkresAlgorithm: empty list");
    }
    const W = C[0].length;
    if (J > W) {
      throw new Error("kuhnMunkresAlgorithm: invalid matrix");
    }
    function arrayOf(k, z) {
      const a = Array(k);
      for (let i = 0; i < k; i++) {
        a[i] = z;
      }
      return a;
    }
    const job = arrayOf(W + 1, -1);
    const ys = arrayOf(J, null);
    const yt = arrayOf(W + 1, null);
    const answers = [];
    const inf = Infinity;
    for (let j_cur = 0; j_cur < J; j_cur++) {
      let w_cur = W;
      job[w_cur] = j_cur;
      const min_to = arrayOf(W + 1, inf);
      const prv = arrayOf(W + 1, -1);
      const in_Z = Array(W + 1);
      while (job[w_cur] !== -1) {
        in_Z[w_cur] = true;
        const j = job[w_cur];
        let delta = inf;
        let w_next = null;
        for (let w = 0; w < W; w++) {
          if (!in_Z[w]) {
            const b = C[j][w] - ys[j] - yt[w];
            if (b < min_to[w]) {
              min_to[w] = b;
              prv[w] = w_cur;
            }
            if (min_to[w] < delta) {
              delta = min_to[w];
              w_next = w;
            }
          }
        }
        for (let w = 0; w <= W; w++) {
          if (in_Z[w]) {
            ys[job[w]] += delta;
            yt[w] -= delta;
          } else {
            min_to[w] -= delta;
          }
        }
        w_cur = w_next;
      }
      for (let w = null; w_cur != W; w_cur = w) {
        w = prv[w_cur];
        job[w_cur] = job[w];
      }
      answers.push(-yt[W]);
    }
    for (let i = 0; i < W; i++) {
      job[i] += 1;
    }
    return [answers, job.slice(0, W)];
  }, ["self"]),
  "{ :self | <primitive: const C = _self;\n\t\tconst J = C.length;\n\t\tif (J === 0) {\n\t\t\tthrow new Error('kuhnMunkresAlgorithm: empty list');\n\t\t}\n\t\tconst W = C[0].length;\n\t\tif (J > W) {\n\t\t\tthrow new Error('kuhnMunkresAlgorithm: invalid matrix');\n\t\t}\n\t\tfunction arrayOf(k, z) {\n\t\t\tconst a = Array(k);\n\t\t\tfor(let i = 0; i < k; i++) {\n\t\t\t\ta[i] = z;\n\t\t\t};\n\t\t\treturn a;\n\t\t}\n\t\tconst job = arrayOf(W + 1, -1);\n\t\tconst ys = arrayOf(J, null);\n\t\tconst yt = arrayOf(W + 1, null);\n\t\tconst answers = [];\n\t\tconst inf = Infinity;\n\t\tfor (let j_cur = 0; j_cur < J; j_cur++) {\n\t\t\tlet w_cur = W;\n\t\t\tjob[w_cur] = j_cur;\n\t\t\tconst min_to = arrayOf(W + 1, inf);\n\t\t\tconst prv = arrayOf(W + 1, -1);\n\t\t\tconst in_Z = Array(W + 1);\n\t\t\twhile (job[w_cur] !== -1) {\n\t\t\t\tin_Z[w_cur] = true;\n\t\t\t\tconst j = job[w_cur];\n\t\t\t\tlet delta = inf;\n\t\t\t\tlet w_next = null;\n\t\t\t\tfor (let w = 0; w < W; w++) {\n\t\t\t\t\tif (!in_Z[w]) {\n\t\t\t\t\t\tconst b = C[j][w] - ys[j] - yt[w];\n\t\t\t\t\t\tif (b < min_to[w]) {\n\t\t\t\t\t\t\tmin_to[w] = b;\n\t\t\t\t\t\t\tprv[w] = w_cur;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (min_to[w] < delta) {\n\t\t\t\t\t\t\tdelta = min_to[w];\n\t\t\t\t\t\t\tw_next = w;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (let w = 0; w <= W; w++) {\n\t\t\t\t\tif (in_Z[w]) {\n\t\t\t\t\t\tys[job[w]] += delta;\n\t\t\t\t\t\tyt[w] -= delta;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmin_to[w] -= delta;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tw_cur = w_next;\n\t\t\t}\n\t\t\tfor (let w = null; w_cur != W; w_cur = w) {\n\t\t\t\tw = prv[w_cur];\n\t\t\t\tjob[w_cur] = job[w];\n\t\t\t}\n\t\t\tanswers.push(-yt[W]);\n\t\t}\n\t\tfor (let i = 0; i < W; i++) {\n\t\t\tjob[i] += 1;\n\t\t}\n\t\treturn [answers, job.slice(0, W)];>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "kroneckerProduct",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_a);
    let _n = _size_1(_at_2(_a, 1));
    let _p = _size_1(_b);
    let _q = _size_1(_at_2(_b, 1));
    let _r = _asterisk_2(_m, _p);
    let _c = _asterisk_2(_n, _q);
    let _answer = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_c, 0);
      }, []),
      _r,
    );
    /* Statements */
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _p,
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _toDo_3(
                  1,
                  _q,
                  sl.annotateFunction(function (_l) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _l";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _atPut_3(
                      _at_2(
                        _answer,
                        _plusSign_2(_asterisk_2(_p, _hyphenMinus_2(_i, 1)), _k),
                      ),
                      _plusSign_2(_asterisk_2(_q, _hyphenMinus_2(_j, 1)), _l),
                      _asterisk_2(
                        _at_2(_at_2(_a, _i), _j),
                        _at_2(_at_2(_b, _k), _l),
                      ),
                    );
                  }, ["l"]),
                );
              }, ["k"]),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["a", "b"]),
  "{ :a :b | let m = size(a); let n = size(at(a, 1)); let p = size(b); let q = size(at(b, 1)); let r = *(m, p); let c = *(n, q); let answer = !({ List(c, 0) }, r); toDo(1, m, { :i | toDo(1, n, { :j | toDo(1, p, { :k | toDo(1, q, { :l | atPut(at(answer, +(*(p, (-(i, 1))), k)), +(*(q, (-(j, 1))), l), *(at(at(a, i), j), at(at(b, k), l))) }) }) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "lowerTriangularize",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>lowerTriangularize");
    let __SPL445 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _r = _at_2(__SPL445, 1);
    let _c = _at_2(__SPL445, 2);
    /* Statements */
    _do_2(
      _to_2(1, _hyphenMinus_2(_r, _k)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _to_2(_plusSign_2(_plusSign_2(_i, 1), _k), _c),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_at_2(_m, _i), _j, 0);
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _m;
  }, ["self", "k"]),
  "{ :self :k | let m = assertIsMatrix(self,'List>>lowerTriangularize'); let __SPL445 = assertIsOfSize(shape(m), 2); let r = at(__SPL445, 1); let c = at(__SPL445, 2); do(to(1,-(r, k)), { :i | do(to((+(+(i, 1), k)),c), { :j | atPut(at(m, i), j, 0) }) }); m }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "lowerTriangularize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lowerTriangularize_2(_self, 0);
  }, ["self"]),
  "{ :self | lowerTriangularize(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "luDecompositionPivotMatrix",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_m);
    let _p = _identityMatrix_1(_n);
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
        let _max = _at_2(_at_2(_m, _i), _i);
        let _row = _i;
        /* Statements */
        _toDo_3(
          _i,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _at_2(_at_2(_m, _j), _i);
            /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_e, _max),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _max = _e;
                return _row = _j;
              }, []),
            );
          }, ["j"]),
        );
        return _ifTrue_2(
          _tildeEqualsSign_2(_i, _row),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _swapWith_3(_p, _i, _row);
          }, []),
        );
      }, ["i"]),
    );
    return _p;
  }, ["m"]),
  "{ :m | let n = size(m); let p = identityMatrix(n); toDo(1, n, { :i | let max = at(at(m, i), i); let row = i; toDo(i, n, { :j | let e = at(at(m, j), i); ifTrue((>(e, max)), { max := e; row := j }) }); ifTrue((~=(i, row)), { swapWith(p,i, row) }) }); p }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "luDecomposition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsSquareMatrix_2(_self, "List>>luDecomposition");
    let _n = _size_1(_self);
    let _p = _luDecompositionPivotMatrix_1(_m);
    let _m2 = _dot_2(_p, _m);
    let _l = _identityMatrix_1(_n);
    let _u = _identityMatrix_1(_n);
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
        _toDo_3(
          1,
          _j,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _sum = 0;
            /* Statements */
            _toDo_3(
              1,
              _hyphenMinus_2(_i, 1),
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sum = _plusSign_2(
                  _sum,
                  _asterisk_2(
                    _at_2(_at_2(_u, _k), _j),
                    _at_2(_at_2(_l, _i), _k),
                  ),
                );
              }, ["k"]),
            );
            return _atPut_3(
              _at_2(_u, _i),
              _j,
              _hyphenMinus_2(_at_2(_at_2(_m2, _i), _j), _sum),
            );
          }, ["i"]),
        );
        return _toDo_3(
          _j,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _sum = 0;
            /* Statements */
            _toDo_3(
              1,
              _hyphenMinus_2(_j, 1),
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sum = _plusSign_2(
                  _sum,
                  _asterisk_2(
                    _at_2(_at_2(_u, _k), _j),
                    _at_2(_at_2(_l, _i), _k),
                  ),
                );
              }, ["k"]),
            );
            return _atPut_3(
              _at_2(_l, _i),
              _j,
              _solidus_2(
                _hyphenMinus_2(_at_2(_at_2(_m2, _i), _j), _sum),
                _at_2(_at_2(_u, _j), _j),
              ),
            );
          }, ["i"]),
        );
      }, ["j"]),
    );
    return [_l, _u, _p];
  }, ["self"]),
  "{ :self | let m = assertIsSquareMatrix(self,'List>>luDecomposition'); let n = size(self); let p = luDecompositionPivotMatrix(m); let m2 = dot(p,m); let l = identityMatrix(n); let u = identityMatrix(n); toDo(1, n, { :j | toDo(1, j, { :i | let sum = 0; toDo(1, -(i, 1), { :k | sum := +(sum, (*(at(at(u, k), j), at(at(l, i), k)))) }); atPut(at(u, i), j, -(at(at(m2, i), j), sum)) }); toDo(j, n, { :i | let sum = 0; toDo(1, -(j, 1), { :k | sum := +(sum, (*(at(at(u, k), j), at(at(l, i), k)))) }); atPut(at(l, i), j, /((-(at(at(m2, i), j), sum)), at(at(u, j), j))) }) }); [l, u, p] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "matchPairs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL446 = _assertIsOfSize_2(_kuhnMunkresAlgorithm_1(_self), 2);
    let __genSym461 = _at_2(__SPL446, 1);
    let _i = _at_2(__SPL446, 2);
    let _k = _size_1(_i);
    /* Statements */
    return _select_2(
      _transpose_1([_i, _Span_3(1, _k, 1)]),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tildeEqualsSign_2(_at_2(_each, 1), 0);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let __SPL446 = assertIsOfSize(kuhnMunkresAlgorithm(self), 2); let _ = at(__SPL446, 1); let i = at(__SPL446, 2); let k = size(i); select(transpose([i, Span(1, k, 1)]), { :each | ~=(at(each, 1), 0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "matrixCorrelation",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _covariance_2(_a, _b),
      _outer_3(_asterisk_2, _standardDeviation_1(_a), _standardDeviation_1(_b)),
    );
  }, ["a", "b"]),
  "{ :a :b | /(covariance(a,b), outer(*,standardDeviation(a), standardDeviation(b))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "matrixPower",
  ["m", "p"],
  sl.annotateFunction(function (_m, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL447 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _a = _at_2(__SPL447, 1);
    let _b = _at_2(__SPL447, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_a, _b),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _zeroMatrix_1([_b, _a]);
        /* Statements */
        _caseOf_3(
          _p,
          [
            _hyphenMinusGreaterThanSign_2(
              0,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _do_2(
                  _Span_3(1, _b, 1),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _do_2(
                      _Span_3(1, _a, 1),
                      sl.annotateFunction(function (_j) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _j";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _equalsSign_2(_i, _j),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _atPut_3(_at_2(_r, _i), _j, 1);
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _atPut_3(_at_2(_r, _i), _j, 0);
                          }, []),
                        );
                      }, ["j"]),
                    );
                  }, ["i"]),
                );
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
                return _do_2(
                  _Span_3(1, _b, 1),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _do_2(
                      _Span_3(1, _a, 1),
                      sl.annotateFunction(function (_j) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _j";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _atPut_3(
                          _at_2(_r, _i),
                          _j,
                          _at_2(_at_2(_m, _i), _j),
                        );
                      }, ["j"]),
                    );
                  }, ["i"]),
                );
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _r = _m;
            return _do_2(
              _Span_3(2, _p, 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _r = _dot_2(_r, _m);
              }, ["i"]),
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
        return _error_2(_m, "List>>matrixPower: invalid matrix");
      }, []),
    );
  }, ["m", "p"]),
  "{ :m :p | let __SPL447 = assertIsOfSize(shape(m), 2); let a = at(__SPL447, 1); let b = at(__SPL447, 2); if((=(a, b)), { let r = zeroMatrix([b, a]); caseOf(p, [->(0, { do(Span(1, b, 1), { :i | do(Span(1, a, 1), { :j | if((=(i, j)), { atPut(at(r, i), j, 1) }, { atPut(at(r, i), j, 0) }) }) }) }), ->(1, { do(Span(1, b, 1), { :i | do(Span(1, a, 1), { :j | atPut(at(r, i), j, at(at(m, i), j)) }) }) })], { r := m; do(Span(2, p, 1), { :i | r := dot(r,m) }) }); r }, { error(m,'List>>matrixPower: invalid matrix') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "matrixRank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(
      _rowReduce_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(
          _allSatisfy_2(
            _each,
            sl.annotateFunction(function (_item) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _item";
                throw new Error(errorMessage);
              } /* Statements */
              return _isVeryCloseTo_2(_item, 0);
            }, ["item"]),
          ),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | count(rowReduce(self), { :each | not(allSatisfy(each, { :item | isVeryCloseTo(item,0) })) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "minor",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL448 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL448, 1);
    let _n = _at_2(__SPL448, 2);
    /* Statements */
    return _determinant_1(
      _submatrix_3(
        _self,
        _without_2(_asList_1(_upOrDownTo_2(1, _m)), _i),
        _without_2(_asList_1(_upOrDownTo_2(1, _n)), _j),
      ),
    );
  }, ["self", "i", "j"]),
  "{ :self :i :j | let __SPL448 = assertIsOfSize(shape(self), 2); let m = at(__SPL448, 1); let n = at(__SPL448, 2); determinant(submatrix(self,without(asList(upOrDownTo(1, m)),i), without(asList(upOrDownTo(1, n)),j))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "minors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL449 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL449, 1);
    let _n = _at_2(__SPL449, 2);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _plusSign_2(_hyphenMinus_2(_m, _i), 1);
        let _c = _plusSign_2(_hyphenMinus_2(_n, _j), 1);
        /* Statements */
        return _determinant_1(
          _submatrix_3(
            _self,
            _without_2(_asList_1(_upOrDownTo_2(1, _m)), _r),
            _without_2(_asList_1(_upOrDownTo_2(1, _n)), _c),
          ),
        );
      }, ["i", "j"]),
      _Span_3(1, _m, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self | let __SPL449 = assertIsOfSize(shape(self), 2); let m = at(__SPL449, 1); let n = at(__SPL449, 2); table({ :i :j | let r = +(-(m, i), 1); let c = +(-(n, j), 1); determinant(submatrix(self,without(asList(upOrDownTo(1, m)),r), without(asList(upOrDownTo(1, n)),c))) },Span(1, m, 1), Span(1, n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "orthogonalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gramSchmidtProcess_1(_self);
  }, ["self"]),
  "{ :self | gramSchmidtProcess(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "permanent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _size = _numberOfRows_1(_self);
        let _array = _contents_1(_self);
        let _answer = 0;
        /* Statements */
        _plainChangesDo_2(
          _asList_1(_upOrDownTo_2(1, _size)),
          sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _sign = _permutationSymbol_1(_p);
            let _entries = _withIndexCollect_2(
              _p,
              sl.annotateFunction(function (_i, _j) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _i, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_at_2(_array, _i), _j);
              }, ["i", "j"]),
            );
            /* Statements */
            return _answer = _plusSign_2(_answer, _product_1(_entries));
          }, ["p"]),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "List>>permanent: not defined at non-square matrices",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSquareMatrix(self), { let size = numberOfRows(self); let array = contents(self); let answer = 0; plainChangesDo(asList(upOrDownTo(1, size)), { :p | let sign = permutationSymbol(p); let entries = withIndexCollect(p, { :i :j | at(at(array, i), j) }); answer := +(answer, product(entries)) }); answer }, { error(self,'List>>permanent: not defined at non-square matrices') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "pseudoInverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL450 = _assertIsOfSize_2(_singularValueDecomposition_1(_self), 3);
    let _u = _at_2(__SPL450, 1);
    let _s = _at_2(__SPL450, 2);
    let _v = _at_2(__SPL450, 3);
    let _i = _deepCollect_2(
      _s,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isZero_1(_x),
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
            return _solidus_2(1, _x);
          }, []),
        );
      }, ["x"]),
    );
    /* Statements */
    return _dot_2(_dot_2(_v, _i), _transpose_1(_u));
  }, ["self"]),
  "{ :self | let __SPL450 = assertIsOfSize(singularValueDecomposition(self), 3); let u = at(__SPL450, 1); let s = at(__SPL450, 2); let v = at(__SPL450, 3); let i = deepCollect(s, { :x | if(isZero(x), { 0 }, { /(1, x) }) }); dot(dot(v,i),transpose(u)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "qrDecomposition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL451 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL451, 1);
    let _n = _at_2(__SPL451, 2);
    let _qr = _deepCopy_1(_self);
    let _q = _zeroMatrix_1([_m, _n]);
    let _r = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _norm = 0;
        /* Statements */
        _toDo_3(
          _k,
          _m,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _norm = _hypotenuse_2(_norm, _at_2(_at_2(_qr, _i), _k));
          }, ["i"]),
        );
        _ifFalse_2(
          _isZero_1(_norm),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _lessThanSign_2(_at_2(_at_2(_qr, _k), _k), 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _norm = _negate_1(_norm);
              }, []),
            );
            _toDo_3(
              _k,
              _m,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _at_2(_qr, _i),
                  _k,
                  _solidus_2(_at_2(_at_2(_qr, _i), _k), _norm),
                );
              }, ["i"]),
            );
            _atPut_3(
              _at_2(_qr, _k),
              _k,
              _plusSign_2(_at_2(_at_2(_qr, _k), _k), 1),
            );
            return _toDo_3(
              _plusSign_2(_k, 1),
              _n,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _s = 0;
                /* Statements */
                _toDo_3(
                  _k,
                  _m,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _s = _plusSign_2(
                      _s,
                      _asterisk_2(
                        _at_2(_at_2(_qr, _i), _k),
                        _at_2(_at_2(_qr, _i), _j),
                      ),
                    );
                  }, ["i"]),
                );
                _s = _solidus_2(_negate_1(_s), _at_2(_at_2(_qr, _k), _k));
                return _toDo_3(
                  _k,
                  _m,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _atPut_3(
                      _at_2(_qr, _i),
                      _j,
                      _plusSign_2(
                        _at_2(_at_2(_qr, _i), _j),
                        _asterisk_2(_s, _at_2(_at_2(_qr, _i), _k)),
                      ),
                    );
                    return _ifTrue_2(
                      _lessThanSign_2(_i, _j),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _atPut_3(
                          _at_2(_r, _i),
                          _j,
                          _at_2(_at_2(_qr, _i), _j),
                        );
                      }, []),
                    );
                  }, ["i"]),
                );
              }, ["j"]),
            );
          }, []),
        );
        return _atPut_3(_at_2(_r, _k), _k, _negate_1(_norm));
      }, ["k"]),
    );
    _toByDo_4(
      _n,
      1,
      -1,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_at_2(_q, _k), _k, 1);
        return _toDo_3(
          _k,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _isZero_1(_at_2(_at_2(_qr, _k), _k)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _s = 0;
                /* Statements */
                _toDo_3(
                  _k,
                  _m,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _s = _plusSign_2(
                      _s,
                      _asterisk_2(
                        _at_2(_at_2(_qr, _i), _k),
                        _at_2(_at_2(_q, _i), _j),
                      ),
                    );
                  }, ["i"]),
                );
                _s = _solidus_2(_negate_1(_s), _at_2(_at_2(_qr, _k), _k));
                return _toDo_3(
                  _k,
                  _m,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _atPut_3(
                      _at_2(_q, _i),
                      _j,
                      _plusSign_2(
                        _at_2(_at_2(_q, _i), _j),
                        _asterisk_2(_s, _at_2(_at_2(_qr, _i), _k)),
                      ),
                    );
                  }, ["i"]),
                );
              }, []),
            );
          }, ["j"]),
        );
      }, ["k"]),
    );
    return [_q, _r];
  }, ["self"]),
  "{ :self | let __SPL451 = assertIsOfSize(shape(self), 2); let m = at(__SPL451, 1); let n = at(__SPL451, 2); let qr = deepCopy(self); let q = zeroMatrix([m, n]); let r = zeroMatrix([m, n]); toDo(1, n, { :k | let norm = 0; toDo(k, m, { :i | norm := hypotenuse(norm,at(at(qr, i), k)) }); ifFalse(isZero(norm), { ifTrue((<(at(at(qr, k), k), 0)), { norm := negate(norm) }); toDo(k, m, { :i | atPut(at(qr, i), k, /(at(at(qr, i), k), norm)) }); atPut(at(qr, k), k, +(at(at(qr, k), k), 1)); toDo((+(k, 1)), n, { :j | let s = 0; toDo(k, m, { :i | s := +(s, (*(at(at(qr, i), k), at(at(qr, i), j)))) }); s := /(negate(s), at(at(qr, k), k)); toDo(k, m, { :i | atPut(at(qr, i), j, +(at(at(qr, i), j), (*(s, at(at(qr, i), k))))); ifTrue((<(i, j)), { atPut(at(r, i), j, at(at(qr, i), j)) }) }) }) }); atPut(at(r, k), k, negate(norm)) }); toByDo(n, 1, -1, { :k | atPut(at(q, k), k, 1); toDo(k, n, { :j | ifFalse(isZero(at(at(qr, k), k)), { let s = 0; toDo(k, m, { :i | s := +(s, (*(at(at(qr, i), k), at(at(q, i), j)))) }); s := /(negate(s), at(at(qr, k), k)); toDo(k, m, { :i | atPut(at(q, i), j, +(at(at(q, i), j), (*(s, at(at(qr, i), k))))) }) }) }) }); [q, r] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "recurrenceMatrix",
  ["data", "dimension", "delay", "metric"],
  sl.annotateFunction(function (_data, _dimension, _delay, _metric) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _data, _dimension, _delay, _metric";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(
      _size_1(_data),
      _asterisk_2(_hyphenMinus_2(_dimension, 1), _delay),
    );
    let _m = _reshape_2([0], [_n, _n]);
    let __SPL452 = _assertIsOfSize_2(
      _caseOf_2(_metric, [
        _hyphenMinusGreaterThanSign_2(
          "Manhattan",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_abs_1, _sum_1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Euclidean",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [
              _square_1,
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sqrt_1(_sum_1(_x));
              }, ["x"]),
            ];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Supremum",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_abs_1, _max_1];
          }, []),
        ),
      ]),
      2,
    );
    let _f = _at_2(__SPL452, 1);
    let _g = _at_2(__SPL452, 2);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          _i,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _collect_2(
              _upOrDownTo_2(0, _hyphenMinus_2(_dimension, 1)),
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _value_2(
                  _f,
                  _hyphenMinus_2(
                    _at_2(_data, _plusSign_2(_i, _asterisk_2(_k, _delay))),
                    _at_2(_data, _plusSign_2(_j, _asterisk_2(_k, _delay))),
                  ),
                );
              }, ["k"]),
            );
            /* Statements */
            return _atPut_3(
              _at_2(_m, _i),
              _j,
              _atPut_3(_at_2(_m, _j), _i, _value_2(_g, _x)),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _m;
  }, ["data", "dimension", "delay", "metric"]),
  "{ :data :dimension :delay :metric | let n = -(size(data), (*((-(dimension, 1)), delay))); let m = reshape([0],[n, n]); let __SPL452 = assertIsOfSize(caseOf(metric,[->('Manhattan', { [abs:/1, sum:/1] }), ->('Euclidean', { [square:/1, { :x | sqrt(sum(x)) }] }), ->('Supremum', { [abs:/1, max:/1] })]), 2); let f = at(__SPL452, 1); let g = at(__SPL452, 2); toDo(1, n, { :i | toDo(i, n, { :j | let x = collect(upOrDownTo(0, -(dimension, 1)), { :k | value(f,-(at(data, +(i, (*(k, delay)))), at(data, +(j, (*(k, delay)))))) }); atPut(at(m, i), j, atPut(at(m, j), i, value(g,x))) }) }); m }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "recurrenceMatrix",
  ["data", "dimension", "delay", "metric", "theshold"],
  sl.annotateFunction(function (_data, _dimension, _delay, _metric, _theshold) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _data, _dimension, _delay, _metric, _theshold";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _recurrenceMatrix_4(_data, _dimension, _delay, _metric);
    /* Statements */
    return _boole_1(_lessThanSign_2(_m, _theshold));
  }, ["data", "dimension", "delay", "metric", "theshold"]),
  "{ :data :dimension :delay :metric :theshold | let m = recurrenceMatrix(data,dimension, delay, metric); boole((<(m, theshold))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "reducedRowEchelonForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _lead = 1;
      let __SPL453 = _assertIsOfSize_2(_shape_1(_self), 2);
      let _m = _at_2(__SPL453, 1);
      let _n = _at_2(__SPL453, 2);
      let _d = null;
      /* Statements */
      _toDo_3(
        1,
        _m,
        sl.annotateFunction(function (_r) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _r";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _r;
          /* Statements */
          _ifTrue_2(
            _greaterThanSign_2(_lead, _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_self);
            }, []),
          );
          _whileTrue_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isZero_1(_at_2(_at_2(_self, _i), _lead));
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _i = _plusSign_2(_i, 1);
              return _ifTrue_2(
                _greaterThanSign_2(_i, _m),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _i = _r;
                  _lead = _plusSign_2(_lead, 1);
                  return _ifTrue_2(
                    _greaterThanSign_2(_lead, _n),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _return_1(_self);
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
          _swapWith_3(_self, _i, _r);
          _d = _at_2(_at_2(_self, _r), _lead);
          _ifTrue_2(
            _greaterThanSign_2(_abs_1(_d), 1E-10),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _replace_2(
                _at_2(_self, _r),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _solidus_2(_each, _d);
                }, ["each"]),
              );
            }, []),
          );
          _toDo_3(
            1,
            _m,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _tildeEqualsSign_2(_i, _r),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _e = _at_2(_at_2(_self, _i), _lead);
                  /* Statements */
                  return _toDo_3(
                    1,
                    _n,
                    sl.annotateFunction(function (_c) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _c";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _atPut_3(
                        _at_2(_self, _i),
                        _c,
                        _hyphenMinus_2(
                          _at_2(_at_2(_self, _i), _c),
                          _asterisk_2(_at_2(_at_2(_self, _r), _c), _e),
                        ),
                      );
                    }, ["c"]),
                  );
                }, []),
              );
            }, ["i"]),
          );
          return _lead = _plusSign_2(_lead, 1);
        }, ["r"]),
      );
      return _self;
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self | valueWithReturn({ :return:/1 | let lead = 1; let __SPL453 = assertIsOfSize(shape(self), 2); let m = at(__SPL453, 1); let n = at(__SPL453, 2); let d = nil; toDo(1, m, { :r | let i = r; ifTrue((>(lead, n)), { return(self) }); whileTrue({ isZero(at(at(self, i), lead)) }, { i := +(i, 1); ifTrue((>(i, m)), { i := r; lead := +(lead, 1); ifTrue((>(lead, n)), { return(self) }) }) }); swapWith(self,i, r); d := at(at(self, r), lead); ifTrue((>(abs(d), 1E-10)), { replace(at(self, r), { :each | /(each, d) }) }); toDo(1, m, { :i | ifTrue((~=(i, r)), { let e = at(at(self, i), lead); toDo(1, n, { :c | atPut(at(self, i), c, -(at(at(self, i), c), (*(at(at(self, r), c), e)))) }) }) }); lead := +(lead, 1) }); self }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "rowCatenate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _k = _size_1(_first_1(_self));
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _row = [];
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
            return _addAll_2(_row, _at_2(_at_2(_self, _j), _i));
          }, ["j"]),
        );
        return _add_2(_answer, _row);
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let n = size(self); let k = size(first(self)); let answer = []; toDo(1, k, { :i | let row = []; toDo(1, n, { :j | addAll(row,at(at(self, j), i)) }); add(answer,row) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "rowReduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reducedRowEchelonForm_1(_deepCopy_1(_self));
  }, ["self"]),
  "{ :self | reducedRowEchelonForm(deepCopy(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "singularValueDecompositionQr",
  ["self", "tolerance"],
  sl.annotateFunction(function (_self, _tolerance) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tolerance";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _self;
    let __SPL454 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _m = _at_2(__SPL454, 1);
    let _n = _at_2(__SPL454, 2);
    let _loopMax = _asterisk_2(100, _max_2(_m, _n));
    let _loopCount = 0;
    let _u = _identityMatrix_1(_m);
    let _s = _conjugateTranspose_1(_a);
    let _v = _identityMatrix_1(_n);
    let _err = Infinity;
    let _ss = null;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_err, _tolerance),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_loopCount, _loopMax);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _q, _e, _f;
        /* Statements */
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL455 = _qrDecomposition_1(_conjugateTranspose_1(_s));
          /* Statements */
          _q = _at_2(__SPL455, 1);
          return _s = _at_2(__SPL455, 2);
        }, [])();
        _u = _dot_2(_u, _q);
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL456 = _qrDecomposition_1(_conjugateTranspose_1(_s));
          /* Statements */
          _q = _at_2(__SPL456, 1);
          return _s = _at_2(__SPL456, 2);
        }, [])();
        _v = _dot_2(_v, _q);
        _e = _norm_1(_catenate_1(_upperTriangularize_2(_deepCopy_1(_s), 1)));
        _f = _norm_1(_diagonal_1(_s));
        _err = _if_3(
          _verticalLineVerticalLine_2(
            _equalsSign_2(_f, 0),
            _equalsSign_2(_f, 1),
          ),
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
            return _solidus_2(_e, _f);
          }, []),
        );
        return _loopCount = _plusSign_2(_loopCount, 1);
      }, []),
    );
    _ss = _diagonal_1(_s);
    _s = _reshape_2([0], [_m, _n]);
    _toDo_3(
      1,
      _size_1(_ss),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _ssn = _at_2(_ss, _n);
        /* Statements */
        _atPut_3(_at_2(_s, _n), _n, _abs_1(_ssn));
        return _ifTrue_2(
          _lessThanSign_2(_ssn, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _m,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _at_2(_u, _i),
                  _n,
                  _negate_1(_at_2(_at_2(_u, _i), _n)),
                );
              }, ["i"]),
            );
          }, []),
        );
      }, ["n"]),
    );
    return [_u, _s, _v];
  }, ["self", "tolerance"]),
  "{ :self :tolerance | let a = self; let __SPL454 = assertIsOfSize(shape(a), 2); let m = at(__SPL454, 1); let n = at(__SPL454, 2); let loopMax = *(100, max(m,n)); let loopCount = 0; let u = identityMatrix(m); let s = conjugateTranspose(a); let v = identityMatrix(n); let err = Infinity; let ss = nil; whileTrue({ &(>(err, tolerance), { <(loopCount, loopMax) }) }, { var q, e, f;({ let __SPL455 = qrDecomposition(conjugateTranspose(s)); q := at(__SPL455, 1); s := at(__SPL455, 2) } . ()); u := dot(u,q); ({ let __SPL456 = qrDecomposition(conjugateTranspose(s)); q := at(__SPL456, 1); s := at(__SPL456, 2) } . ()); v := dot(v,q); e := norm(catenate(upperTriangularize(deepCopy(s),1))); f := norm(diagonal(s)); err := if((||(=(f, 0), (=(f, 1)))), { 0 }, { /(e, f) }); loopCount := +(loopCount, 1) }); ss := diagonal(s); s := reshape([0],[m, n]); toDo(1, size(ss), { :n | let ssn = at(ss, n); atPut(at(s, n), n, abs(ssn)); ifTrue((<(ssn, 0)), { toDo(1, m, { :i | atPut(at(u, i), n, negate(at(at(u, i), n))) }) }) }); [u, s, v] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "singularValueDecompositionGolubReinsch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let a = _self;
    /* https://github.com/danilosalvati/svd-js */
    // Define default parameters
    let withu = true; // 'f'
    let withv = true;
    let eps = Math.pow(2, -52);
    let tol = 1e-64 / eps;
    // Householders reduction to bidiagonal form
    const n = a[0].length;
    const m = a.length;
    if (m < n) {
      throw new TypeError("Invalid matrix: m < n");
    }
    let i, j, k, l, l1, c, f, g, h, s, x, y, z;
    g = 0;
    x = 0;
    const e = [];
    const u = [];
    const v = [];
    const mOrN = (withu === "f") ? m : n;
    // Initialize u
    for (i = 0; i < m; i++) {
      u[i] = new Array(mOrN).fill(0);
    }
    // Initialize v
    for (i = 0; i < n; i++) {
      v[i] = new Array(n).fill(0);
    }
    // Initialize q
    const q = new Array(n).fill(0);
    // Copy array a in u
    for (i = 0; i < m; i++) {
      for (j = 0; j < n; j++) {
        u[i][j] = a[i][j];
      }
    }
    for (i = 0; i < n; i++) {
      e[i] = g;
      s = 0;
      l = i + 1;
      for (j = i; j < m; j++) {
        s += Math.pow(u[j][i], 2);
      }
      if (s < tol) {
        g = 0;
      } else {
        f = u[i][i];
        g = f < 0 ? Math.sqrt(s) : -Math.sqrt(s);
        h = f * g - s;
        u[i][i] = f - g;
        for (j = l; j < n; j++) {
          s = 0;
          for (k = i; k < m; k++) {
            s += u[k][i] * u[k][j];
          }
          f = s / h;
          for (k = i; k < m; k++) {
            u[k][j] = u[k][j] + f * u[k][i];
          }
        }
      }
      q[i] = g;
      s = 0;
      for (j = l; j < n; j++) {
        s += Math.pow(u[i][j], 2);
      }
      if (s < tol) {
        g = 0;
      } else {
        f = u[i][i + 1];
        g = f < 0 ? Math.sqrt(s) : -Math.sqrt(s);
        h = f * g - s;
        u[i][i + 1] = f - g;
        for (j = l; j < n; j++) {
          e[j] = u[i][j] / h;
        }
        for (j = l; j < m; j++) {
          s = 0;
          for (k = l; k < n; k++) {
            s += u[j][k] * u[i][k];
          }
          for (k = l; k < n; k++) {
            u[j][k] = u[j][k] + s * e[k];
          }
        }
      }
      y = Math.abs(q[i]) + Math.abs(e[i]);
      if (y > x) {
        x = y;
      }
    }
    // Accumulation of right-hand transformations
    if (withv) {
      for (i = n - 1; i >= 0; i--) {
        if (g !== 0) {
          h = u[i][i + 1] * g;
          for (j = l; j < n; j++) {
            v[j][i] = u[i][j] / h;
          }
          for (j = l; j < n; j++) {
            s = 0;
            for (k = l; k < n; k++) {
              s += u[i][k] * v[k][j];
            }
            for (k = l; k < n; k++) {
              v[k][j] = v[k][j] + s * v[k][i];
            }
          }
        }
        for (j = l; j < n; j++) {
          v[i][j] = 0;
          v[j][i] = 0;
        }
        v[i][i] = 1;
        g = e[i];
        l = i;
      }
    }
    // Accumulation of left-hand transformations
    if (withu) {
      if (withu === "f") {
        for (i = n; i < m; i++) {
          for (j = n; j < m; j++) {
            u[i][j] = 0;
          }
          u[i][i] = 1;
        }
      }
      for (i = n - 1; i >= 0; i--) {
        l = i + 1;
        g = q[i];
        for (j = l; j < mOrN; j++) {
          u[i][j] = 0;
        }
        if (g !== 0) {
          h = u[i][i] * g;
          for (j = l; j < mOrN; j++) {
            s = 0;
            for (k = l; k < m; k++) {
              s += u[k][i] * u[k][j];
            }
            f = s / h;
            for (k = i; k < m; k++) {
              u[k][j] = u[k][j] + f * u[k][i];
            }
          }
          for (j = i; j < m; j++) {
            u[j][i] = u[j][i] / g;
          }
        } else {
          for (j = i; j < m; j++) {
            u[j][i] = 0;
          }
        }
        u[i][i] = u[i][i] + 1;
      }
    }
    // Diagonalization of the bidiagonal form
    eps = eps * x;
    let testConvergence;
    for (k = n - 1; k >= 0; k--) {
      for (let iteration = 0; iteration < 50; iteration++) {
        // test-f-splitting
        testConvergence = false;
        for (l = k; l >= 0; l--) {
          if (Math.abs(e[l]) <= eps) {
            testConvergence = true;
            break;
          }
          if (Math.abs(q[l - 1]) <= eps) {
            break;
          }
        }
        if (!testConvergence) { // cancellation of e[l] if l>0
          c = 0;
          s = 1;
          l1 = l - 1;
          for (i = l; i < k + 1; i++) {
            f = s * e[i];
            e[i] = c * e[i];
            if (Math.abs(f) <= eps) {
              break; // goto test-f-convergence
            }
            g = q[i];
            q[i] = Math.sqrt(f * f + g * g);
            h = q[i];
            c = g / h;
            s = -f / h;
            if (withu) {
              for (j = 0; j < m; j++) {
                y = u[j][l1];
                z = u[j][i];
                u[j][l1] = y * c + (z * s);
                u[j][i] = -y * s + (z * c);
              }
            }
          }
        }
        // test f convergence
        z = q[k];
        if (l === k) { // convergence
          if (z < 0) {
            // q[k] is made non-negative
            q[k] = -z;
            if (withv) {
              for (j = 0; j < n; j++) {
                v[j][k] = -v[j][k];
              }
            }
          }
          break; // break out of iteration loop and move on to next k value
        }
        // Shift from bottom 2x2 minor
        x = q[l];
        y = q[k - 1];
        g = e[k - 1];
        h = e[k];
        f = ((y - z) * (y + z) + (g - h) * (g + h)) / (2 * h * y);
        g = Math.sqrt(f * f + 1);
        f = ((x - z) * (x + z) + h * (y / (f < 0 ? (f - g) : (f + g)) - h)) / x;
        // Next QR transformation
        c = 1;
        s = 1;
        for (i = l + 1; i < k + 1; i++) {
          g = e[i];
          y = q[i];
          h = s * g;
          g = c * g;
          z = Math.sqrt(f * f + h * h);
          e[i - 1] = z;
          c = f / z;
          s = h / z;
          f = x * c + g * s;
          g = -x * s + g * c;
          h = y * s;
          y = y * c;
          if (withv) {
            for (j = 0; j < n; j++) {
              x = v[j][i - 1];
              z = v[j][i];
              v[j][i - 1] = x * c + z * s;
              v[j][i] = -x * s + z * c;
            }
          }
          z = Math.sqrt(f * f + h * h);
          q[i - 1] = z;
          c = f / z;
          s = h / z;
          f = c * g + s * y;
          x = -s * g + c * y;
          if (withu) {
            for (j = 0; j < m; j++) {
              y = u[j][i - 1];
              z = u[j][i];
              u[j][i - 1] = y * c + z * s;
              u[j][i] = -y * s + z * c;
            }
          }
        }
        e[l] = 0;
        e[k] = f;
        q[k] = x;
      }
    }
    // Number below eps should be zero
    for (i = 0; i < n; i++) {
      if (q[i] < eps) q[i] = 0;
    }
    return [u, q, v];
  }, ["self"]),
  "{ :self | <primitive: let a = _self\n\t\t/* https://github.com/danilosalvati/svd-js */\n\t\t// Define default parameters\n\t\tlet withu = true // 'f'\n\t\tlet withv = true\n\t\tlet eps = Math.pow(2, -52)\n\t\tlet tol = 1e-64 / eps\n\t\t// Householders reduction to bidiagonal form\n\t\tconst n = a[0].length\n\t\tconst m = a.length\n\t\tif (m < n) {\n\t\t\tthrow new TypeError('Invalid matrix: m < n')\n\t\t}\n\t\tlet i, j, k, l, l1, c, f, g, h, s, x, y, z\n\t\tg = 0\n\t\tx = 0\n\t\tconst e = []\n\t\tconst u = []\n\t\tconst v = []\n\t\tconst mOrN = (withu === 'f') ? m : n\n\t\t// Initialize u\n\t\tfor (i = 0; i < m; i++) {\n\t\t\tu[i] = new Array(mOrN).fill(0)\n\t\t}\n\t\t// Initialize v\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tv[i] = new Array(n).fill(0)\n\t\t}\n\t\t// Initialize q\n\t\tconst q = new Array(n).fill(0)\n\t\t// Copy array a in u\n\t\tfor (i = 0; i < m; i++) {\n\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\tu[i][j] = a[i][j]\n\t\t\t}\n\t\t}\n\t\tfor (i = 0; i < n; i++) {\n\t\t\te[i] = g\n\t\t\ts = 0\n\t\t\tl = i + 1\n\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\ts += Math.pow(u[j][i], 2)\n\t\t\t}\n\t\t\tif (s < tol) {\n\t\t\t\tg = 0\n\t\t\t} else {\n\t\t\t\tf = u[i][i]\n\t\t\t\tg = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)\n\t\t\t\th = f * g - s\n\t\t\t\tu[i][i] = f - g\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\ts = 0\n\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\ts += u[k][i] * u[k][j]\n\t\t\t\t\t}\n\t\t\t\t\tf = s / h\n\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\tu[k][j] = u[k][j] + f * u[k][i]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tq[i] = g\n\t\t\ts = 0\n\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\ts += Math.pow(u[i][j], 2)\n\t\t\t}\n\t\t\tif (s < tol) {\n\t\t\t\tg = 0\n\t\t\t} else {\n\t\t\t\tf = u[i][i + 1]\n\t\t\t\tg = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)\n\t\t\t\th = f * g - s\n\t\t\t\tu[i][i + 1] = f - g\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\te[j] = u[i][j] / h\n\t\t\t\t}\n\t\t\t\tfor (j = l; j < m; j++) {\n\t\t\t\t\ts = 0\n\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\ts += u[j][k] * u[i][k]\n\t\t\t\t\t}\n\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\tu[j][k] = u[j][k] + s * e[k]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\ty = Math.abs(q[i]) + Math.abs(e[i])\n\t\t\tif (y > x) {\n\t\t\t\tx = y\n\t\t\t}\n\t\t}\n\t\t// Accumulation of right-hand transformations\n\t\tif (withv) {\n\t\t\tfor (i = n - 1; i >= 0; i--) {\n\t\t\t\tif (g !== 0) {\n\t\t\t\t\th = u[i][i + 1] * g\n\t\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\t\tv[j][i] = u[i][j] / h\n\t\t\t\t\t}\n\t\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\t\ts = 0\n\t\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\t\ts += u[i][k] * v[k][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\t\tv[k][j] = v[k][j] + s * v[k][i]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\tv[i][j] = 0\n\t\t\t\t\tv[j][i] = 0\n\t\t\t\t}\n\t\t\t\tv[i][i] = 1\n\t\t\t\tg = e[i]\n\t\t\t\tl = i\n\t\t\t}\n\t\t}\n\t\t// Accumulation of left-hand transformations\n\t\tif (withu) {\n\t\t\tif (withu === 'f') {\n\t\t\t\tfor (i = n; i < m; i++) {\n\t\t\t\t\tfor (j = n; j < m; j++) {\n\t\t\t\t\t\tu[i][j] = 0\n\t\t\t\t\t}\n\t\t\t\t\tu[i][i] = 1\n\t\t\t\t}\n\t\t\t}\n\t\t\tfor (i = n - 1; i >= 0; i--) {\n\t\t\t\tl = i + 1\n\t\t\t\tg = q[i]\n\t\t\t\tfor (j = l; j < mOrN; j++) {\n\t\t\t\t\tu[i][j] = 0\n\t\t\t\t}\n\t\t\t\tif (g !== 0) {\n\t\t\t\t\th = u[i][i] * g\n\t\t\t\t\tfor (j = l; j < mOrN; j++) {\n\t\t\t\t\t\ts = 0\n\t\t\t\t\t\tfor (k = l; k < m; k++) {\n\t\t\t\t\t\t\ts += u[k][i] * u[k][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tf = s / h\n\t\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\t\tu[k][j] = u[k][j] + f * u[k][i]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\t\t\tu[j][i] = u[j][i] / g\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\t\t\tu[j][i] = 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tu[i][i] = u[i][i] + 1\n\t\t\t}\n\t\t}\n\t\t// Diagonalization of the bidiagonal form\n\t\teps = eps * x\n\t\tlet testConvergence\n\t\tfor (k = n - 1; k >= 0; k--) {\n\t\t\tfor (let iteration = 0; iteration < 50; iteration++) {\n\t\t\t\t// test-f-splitting\n\t\t\t\ttestConvergence = false\n\t\t\t\tfor (l = k; l >= 0; l--) {\n\t\t\t\t\tif (Math.abs(e[l]) <= eps) {\n\t\t\t\t\t\ttestConvergence = true\n\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tif (Math.abs(q[l - 1]) <= eps) {\n\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (!testConvergence) { // cancellation of e[l] if l>0\n\t\t\t\t\tc = 0\n\t\t\t\t\ts = 1\n\t\t\t\t\tl1 = l - 1\n\t\t\t\t\tfor (i = l; i < k + 1; i++) {\n\t\t\t\t\t\tf = s * e[i]\n\t\t\t\t\t\te[i] = c * e[i]\n\t\t\t\t\t\tif (Math.abs(f) <= eps) {\n\t\t\t\t\t\t\tbreak // goto test-f-convergence\n\t\t\t\t\t\t}\n\t\t\t\t\t\tg = q[i]\n\t\t\t\t\t\tq[i] = Math.sqrt(f * f + g * g)\n\t\t\t\t\t\th = q[i]\n\t\t\t\t\t\tc = g / h\n\t\t\t\t\t\ts = -f / h\n\t\t\t\t\t\tif (withu) {\n\t\t\t\t\t\t\tfor (j = 0; j < m; j++) {\n\t\t\t\t\t\t\t\ty = u[j][l1]\n\t\t\t\t\t\t\t\tz = u[j][i]\n\t\t\t\t\t\t\t\tu[j][l1] = y * c + (z * s)\n\t\t\t\t\t\t\t\tu[j][i] = -y * s + (z * c)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t// test f convergence\n\t\t\t\tz = q[k]\n\t\t\t\tif (l === k) { // convergence\n\t\t\t\t\tif (z < 0) {\n\t\t\t\t\t\t// q[k] is made non-negative\n\t\t\t\t\t\tq[k] = -z\n\t\t\t\t\t\tif (withv) {\n\t\t\t\t\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\t\t\t\t\tv[j][k] = -v[j][k]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tbreak // break out of iteration loop and move on to next k value\n\t\t\t\t}\n\t\t\t\t// Shift from bottom 2x2 minor\n\t\t\t\tx = q[l]\n\t\t\t\ty = q[k - 1]\n\t\t\t\tg = e[k - 1]\n\t\t\t\th = e[k]\n\t\t\t\tf = ((y - z) * (y + z) + (g - h) * (g + h)) / (2 * h * y)\n\t\t\t\tg = Math.sqrt(f * f + 1)\n\t\t\t\tf = ((x - z) * (x + z) + h * (y / (f < 0 ? (f - g) : (f + g)) - h)) / x\n\t\t\t\t// Next QR transformation\n\t\t\t\tc = 1\n\t\t\t\ts = 1\n\t\t\t\tfor (i = l + 1; i < k + 1; i++) {\n\t\t\t\t\tg = e[i]\n\t\t\t\t\ty = q[i]\n\t\t\t\t\th = s * g\n\t\t\t\t\tg = c * g\n\t\t\t\t\tz = Math.sqrt(f * f + h * h)\n\t\t\t\t\te[i - 1] = z\n\t\t\t\t\tc = f / z\n\t\t\t\t\ts = h / z\n\t\t\t\t\tf = x * c + g * s\n\t\t\t\t\tg = -x * s + g * c\n\t\t\t\t\th = y * s\n\t\t\t\t\ty = y * c\n\t\t\t\t\tif (withv) {\n\t\t\t\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\t\t\t\tx = v[j][i - 1]\n\t\t\t\t\t\t\tz = v[j][i]\n\t\t\t\t\t\t\tv[j][i - 1] = x * c + z * s\n\t\t\t\t\t\t\tv[j][i] = -x * s + z * c\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tz = Math.sqrt(f * f + h * h)\n\t\t\t\t\tq[i - 1] = z\n\t\t\t\t\tc = f / z\n\t\t\t\t\ts = h / z\n\t\t\t\t\tf = c * g + s * y\n\t\t\t\t\tx = -s * g + c * y\n\t\t\t\t\tif (withu) {\n\t\t\t\t\t\tfor (j = 0; j < m; j++) {\n\t\t\t\t\t\t\ty = u[j][i - 1]\n\t\t\t\t\t\t\tz = u[j][i]\n\t\t\t\t\t\t\tu[j][i - 1] = y * c + z * s\n\t\t\t\t\t\t\tu[j][i] = -y * s + z * c\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\te[l] = 0\n\t\t\t\te[k] = f\n\t\t\t\tq[k] = x\n\t\t\t}\n\t\t}\n\t\t// Number below eps should be zero\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tif (q[i] < eps) q[i] = 0\n\t\t}\n\t\treturn [ u, q, v ]>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "singularValueDecomposition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL457 = _assertIsOfSize_2(
      _singularValueDecompositionGolubReinsch_1(_self),
      3,
    );
    let _u = _at_2(__SPL457, 1);
    let _q = _at_2(__SPL457, 2);
    let _v = _at_2(__SPL457, 3);
    let _s = _diagonalMatrix_3(_q, 0, _shape_1(_self));
    /* Statements */
    return [_u, _s, _v];
  }, ["self"]),
  "{ :self | let __SPL457 = assertIsOfSize(singularValueDecompositionGolubReinsch(self), 3); let u = at(__SPL457, 1); let q = at(__SPL457, 2); let v = at(__SPL457, 3); let s = diagonalMatrix(q,0, shape(self)); [u, s, v] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "squareForm",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_u);
    let _n = _solidus_2(
      _plusSign_2(1, _sqrt_1(_plusSign_2(1, _asterisk_2(8, _k)))),
      2,
    );
    /* Statements */
    return _if_3(
      _isInteger_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _takeList_2(
          _u,
          _asList_1(_upOrDownTo_2(_hyphenMinus_2(_n, 1), 0)),
        );
        let _q = _collect_2(
          _p,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _padLeft_3(_each, [_n], 0);
          }, ["each"]),
        );
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
              _hyphenMinus_2(_i, 1),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_at_2(_q, _i), _j, _at_2(_at_2(_q, _j), _i));
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _q;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_u, "squareForm: invalid vector");
      }, []),
    );
  }, ["u"]),
  "{ :u | let k = size(u); let n = /((+(1, sqrt(+(1, (*(8, k)))))), 2); if(isInteger(n), { let p = takeList(u,asList(upOrDownTo(-(n, 1), 0))); let q = collect(p, { :each | padLeft(each,[n], 0) }); toDo(2, n, { :i | toDo(1, -(i, 1), { :j | atPut(at(q, i), j, at(at(q, j), i)) }) }); q }, { error(u,'squareForm: invalid vector') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "svd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _singularValueDecomposition_1(_self);
  }, ["self"]),
  "{ :self | singularValueDecomposition(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "swapColumns",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL458 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL458, 1);
    let _n = _at_2(__SPL458, 2);
    /* Statements */
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _at_2(_at_2(_self, _k), _i);
        /* Statements */
        _atPut_3(_at_2(_self, _k), _i, _at_2(_at_2(_self, _k), _j));
        return _atPut_3(_at_2(_self, _k), _j, _x);
      }, ["k"]),
    );
    return _self;
  }, ["self", "i", "j"]),
  "{ :self :i :j | let __SPL458 = assertIsOfSize(shape(self), 2); let m = at(__SPL458, 1); let n = at(__SPL458, 2); toDo(1, m, { :k | let x = at(at(self, k), i); atPut(at(self, k), i, at(at(self, k), j)); atPut(at(self, k), j, x) }); self }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "swapRows",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL459 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL459, 1);
    let _n = _at_2(__SPL459, 2);
    /* Statements */
    return _swapWith_3(_self, _i, _j);
  }, ["self", "i", "j"]),
  "{ :self :i :j | let __SPL459 = assertIsOfSize(shape(self), 2); let m = at(__SPL459, 1); let n = at(__SPL459, 2); swapWith(self,i, j) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "sylvesterMatrix",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _hyphenMinus_2(_size_1(_p), 1);
    let _n = _hyphenMinus_2(_size_1(_q), 1);
    let _d = _plusSign_2(_m, _n);
    let _x = _hyphenMinus_2(_hyphenMinus_2(_d, _m), 1);
    let _y = _hyphenMinus_2(_hyphenMinus_2(_d, _n), 1);
    let _a = _plusSignPlusSign_2(_reverse_1(_p), _numberSign_2(0, _x));
    let _b = _plusSignPlusSign_2(_reverse_1(_q), _numberSign_2(0, _y));
    /* Statements */
    return _catenate_1([
      _collect_2(
        _Span_3(0, _x, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _rotateRight_2(_a, _i);
        }, ["i"]),
      ),
      _collect_2(
        _Span_3(0, _y, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _rotateRight_2(_b, _i);
        }, ["i"]),
      ),
    ]);
  }, ["p", "q"]),
  "{ :p :q | let m = -(size(p), 1); let n = -(size(q), 1); let d = +(m, n); let x = -(-(d, m), 1); let y = -(-(d, n), 1); let a = ++(reverse(p), (#(0, x))); let b = ++(reverse(q), (#(0, y))); catenate([collect(Span(0, x, 1), { :i | rotateRight(a,i) }), collect(Span(0, y, 1), { :i | rotateRight(b,i) })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "toeplitzMatrix",
  ["c", "r"],
  sl.annotateFunction(function (_c, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_i, _j),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_c, _plusSign_2(_hyphenMinus_2(_i, _j), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_r, _plusSign_2(_hyphenMinus_2(_j, _i), 1));
          }, []),
        );
      }, ["i", "j"]),
      _upOrDownTo_2(1, _size_1(_r)),
      _upOrDownTo_2(1, _size_1(_c)),
    );
  }, ["c", "r"]),
  "{ :c :r | table({ :i :j | if((>=(i, j)), { at(c, +(-(i, j), 1)) }, { at(r, +(-(j, i), 1)) }) },upOrDownTo(1, size(r)), upOrDownTo(1, size(c))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "trace",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
        return _aBlock_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isArray_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _rank = _rank_1(_self);
            let _limit = _min_1(_shape_1(_self));
            /* Statements */
            return _aBlock_1(
              _collect_2(
                _Span_3(1, _limit, 1),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _atPath_2(_self, _numberSign_2(_each, _rank));
                }, ["each"]),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>trace: not an Array");
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | if(isVector(self), { aBlock(self) }, { if(isArray(self), { let rank = rank(self); let limit = min(shape(self)); aBlock(collect(Span(1, limit, 1), { :each | atPath(self,#(each, rank)) })) }, { error(self,'List>>trace: not an Array') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "trace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trace_2(_self, _sum_1);
  }, ["self"]),
  "{ :self | trace(self,sum:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "upperTriangularize",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>upperTriangularize");
    let __SPL460 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _r = _at_2(__SPL460, 1);
    let _c = _at_2(__SPL460, 2);
    /* Statements */
    _toDo_3(
      _hyphenMinus_2(2, _k),
      _r,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _plusSign_2(_hyphenMinus_2(_i, 1), _k),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_at_2(_m, _i), _j, 0);
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _m;
  }, ["self", "k"]),
  "{ :self :k | let m = assertIsMatrix(self,'List>>upperTriangularize'); let __SPL460 = assertIsOfSize(shape(m), 2); let r = at(__SPL460, 1); let c = at(__SPL460, 2); toDo((-(2, k)), r, { :i | toDo(1, +(-(i, 1), k), { :j | atPut(at(m, i), j, 0) }) }); m }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "upperTriangularize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _upperTriangularize_2(_self, 0);
  }, ["self"]),
  "{ :self | upperTriangularize(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "vandermondeMatrix",
  ["x", "k"],
  sl.annotateFunction(function (_x, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _m = _hyphenMinus_2(_k, 1);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_at_2(_x, _i), _j);
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(0, _m, 1),
    );
  }, ["x", "k"]),
  "{ :x :k | let n = size(x); let m = -(k, 1); table({ :i :j | ^(at(x, i), j) },Span(1, n, 1), Span(0, m, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "vandermondeMatrix",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _vandermondeMatrix_2(_x, _size_1(_x));
  }, ["x"]),
  "{ :x | vandermondeMatrix(x,size(x)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "exchangeMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _zeroMatrix_1([_self, _self]);
    /* Statements */
    _do_2(
      _Span_3(1, _self, 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _at_2(_answer, _plusSign_2(_hyphenMinus_2(_self, _each), 1)),
          _each,
          1,
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = zeroMatrix([self, self]); do(Span(1, self, 1), { :each | atPut(at(answer, +(-(self, each), 1)), each, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "hadamardMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
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
        return [1];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [[1, 1], [1, -1]];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isPowerOfTwo_1(_n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _kroneckerProduct_2(
                  [[1, 1], [1, -1]],
                  _hadamardMatrix_1(_solidus_2(_n, 2)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _n,
                  "@Integer>>hadamardMatrix: not power of two",
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n | if((=(n, 0)), { [1] }, { if((=(n, 2)), { [[1, 1], [1, -1]] }, { if(isPowerOfTwo(n), { kroneckerProduct([[1, 1], [1, -1]],hadamardMatrix((/(n, 2)))) }, { error(n,'@Integer>>hadamardMatrix: not power of two') }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "hankelMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _hankelMatrix_1(_asList_1(_upOrDownTo_2(1, _n)));
  }, ["n"]),
  "{ :n | hankelMatrix(asList(upOrDownTo(1, n))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "hilbertMatrix",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(1, _hyphenMinus_2(_plusSign_2(_i, _j), 1));
      }, ["i", "j"]),
      _Span_3(1, _m, 1),
      _Span_3(1, _n, 1),
    );
  }, ["m", "n"]),
  "{ :m :n | table({ :i :j | /(1, (-(+(i, j), 1))) },Span(1, m, 1), Span(1, n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "pascalMatrix",
  ["n", "l"],
  sl.annotateFunction(function (_n, _l) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _upOrDownTo_2(0, _hyphenMinus_2(_n, 1));
    /* Statements */
    return _table_3(
      _caseOf_2(_l, [
        _hyphenMinusGreaterThanSign_2(
          "LowerTriangular",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _binomial_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "UpperTriangular",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _swap_1(_binomial_2);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Symmetric",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_i, _j) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _i, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _binomial_2(_plusSign_2(_i, _j), _j);
            }, ["i", "j"]);
          }, []),
        ),
      ]),
      _m,
      _m,
    );
  }, ["n", "l"]),
  "{ :n :l | let m = upOrDownTo(0, -(n, 1)); table(caseOf(l,[->('LowerTriangular', { binomial:/2 }), ->('UpperTriangular', { swap(binomial:/2) }), ->('Symmetric', { { :i :j | binomial(+(i, j), j) } })]),m, m) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "pascalMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _pascalMatrix_2(_n, "Symmetric");
  }, ["n"]),
  "{ :n | pascalMatrix(n, 'Symmetric') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "walshMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = _hadamardMatrix_1(_n);
    let _z = _collect_2(_h, _zeroCrossingCount_1);
    let _p = _ordering_1(_z);
    /* Statements */
    return _commercialAtAsterisk_2(_h, _p);
  }, ["n"]),
  "{ :n | let h = hadamardMatrix(n); let z = collect(h,zeroCrossingCount:/1); let p = ordering(z); @*(h, p) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MatrixFunctions",
  "reflectionMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _asterisk_2(2, _self);
    /* Statements */
    return [[_cos_1(_n), _sin_1(_n)], [_sin_1(_n), _negate_1(_cos_1(_n))]];
  }, ["self"]),
  "{ :self | let n = *(2, self); [[cos(n), sin(n)], [sin(n), negate(cos(n))]] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MatrixFunctions",
  "rotationMatrix",
  ["self", "vector"],
  sl.annotateFunction(function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _vector,
      [
        _hyphenMinusGreaterThanSign_2(
          [1, 0, 0],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [[1, 0, 0], [
              0,
              _cos_1(_self),
              _hyphenMinus_2(0, _sin_1(_self)),
            ], [0, _sin_1(_self), _cos_1(_self)]];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          [0, 1, 0],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [[_cos_1(_self), 0, _sin_1(_self)], [0, 1, 0], [
              _hyphenMinus_2(0, _sin_1(_self)),
              0,
              _cos_1(_self),
            ]];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          [0, 0, 1],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [[_cos_1(_self), _hyphenMinus_2(0, _sin_1(_self)), 0], [
              _sin_1(_self),
              _cos_1(_self),
              0,
            ], [0, 0, 1]];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "rotationMatrix: vector not axis aligned");
      }, []),
    );
  }, ["self", "vector"]),
  "{ :self :vector | caseOf(vector, [->([1, 0, 0], { [[1, 0, 0], [0, cos(self), -(0, sin(self))], [0, sin(self), cos(self)]] }), ->([0, 1, 0], { [[cos(self), 0, sin(self)], [0, 1, 0], [-(0, sin(self)), 0, cos(self)]] }), ->([0, 0, 1], { [[cos(self), -(0, sin(self)), 0], [sin(self), cos(self), 0], [0, 0, 1]] })], { error(self,'rotationMatrix: vector not axis aligned') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MatrixFunctions",
  "rotationMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [[_cos_1(_self), _negate_1(_sin_1(_self))], [
      _sin_1(_self),
      _cos_1(_self),
    ]];
  }, ["self"]),
  "{ :self | [[cos(self), negate(sin(self))], [sin(self), cos(self)]] }",
);
