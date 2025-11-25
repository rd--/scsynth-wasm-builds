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
  "{ :self |\n\t\tself.inverse * self.determinant\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
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
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet answer = [];\n\t\tn.downToDo(1) { :i |\n\t\t\tlet row = [];\n\t\t\tm.downToDo(1) { :j |\n\t\t\t\trow.add(self[j][i])\n\t\t\t};\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :zero |\n\t\tlet shape = self.shape;\n\t\tlet answer = [];\n\t\tself.withDeepIndexDo { :each :index |\n\t\t\t(each = zero).ifFalse {\n\t\t\t\tanswer.add(index -> each)\n\t\t\t}\n\t\t};\n\t\t(self.atPath(shape) = zero).ifTrue {\n\t\t\tanswer.add(shape -> zero)\n\t\t};\n\t\tanswer\n\t}",
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
                    _exclamationMarkEqualsSign_2(_at_2(_at_2(_m, _j), _i), 0),
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
  "{ :m |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet n = m.size;\n\t\t\tlet sign = 1;\n\t\t\tlet prev = 1;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\t(m[i][i] = 0).ifTrue {\n\t\t\t\t\tlet swapTo = nil;\n\t\t\t\t\t(i + 1).toDo(n) { :j |\n\t\t\t\t\t\t(m[j][i] != 0).ifTrue {\n\t\t\t\t\t\t\tswapTo := j\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tswapTo.ifNil {\n\t\t\t\t\t\t0.return\n\t\t\t\t\t} {\n\t\t\t\t\t\tm.swapRows(i, swapTo);\n\t\t\t\t\t\tsign := sign * -1\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t(i + 1).toDo(n) { :j |\n\t\t\t\t\t(i + 1).toDo(n) { :k |\n\t\t\t\t\t\tm[j][k] := ((m[j][k] * m[i][i]) - (m[j][i] * m[i][k])) // prev\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tprev := m[i][i]\n\t\t\t};\n\t\t\tsign * m[n][n]\n\t\t}\n\t}",
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
      _to_2(1, _size_1(_x)),
      _to_2(1, _size_1(_y)),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t{ :i :j |\n\t\t\t(x[i] + y[j]) ^ -1\n\t\t}.table(\n\t\t\t1.to(x.size),\n\t\t\t1.to(y.size)\n\t\t)\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
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
  "{ :a |\n\t\tlet [m, n] = a.shape;\n\t\tlet l = [m, n].zeroMatrix;\n\t\t1.toDo(m) { :i |\n\t\t\t1.toDo(i) { :k |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(k) { :j |\n\t\t\t\t\tsum := sum + (l[i][j] * l[k][j])\n\t\t\t\t};\n\t\t\t\tl[i][k] := (i = k).if {\n\t\t\t\t\t(a[i][i] - sum).sqrt\n\t\t\t\t} {\n\t\t\t\t\t1 / l[k][k] * (a[i][k] - sum)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tl\n\t}",
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
  "{ :self |\n\t\tself.choleskyBanachiewiczAlgorithm\n\t}",
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
  "{ :a :b :x :epsilon :n |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet r = b - a.dot(x);\n\t\t\tlet p = r.copy;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tlet ap = a.dot(p);\n\t\t\t\tlet alpha = p.dot(r) / p.dot(ap);\n\t\t\t\tx := x + (alpha * p);\n\t\t\t\tr := b - a.dot(x);\n\t\t\t\t((r ^ 2).sum.sqrt < epsilon).if {\n\t\t\t\t\tx.return\n\t\t\t\t} {\n\t\t\t\t\tlet beta = r.dot(ap).negate / p.dot(ap);\n\t\t\t\t\tp := r + (beta * p)\n\t\t\t\t}\n\t\t\t};\n\t\t\tx\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.transpose.conjugate\n\t}",
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
      _to_2(1, _k),
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
  "{ :m :d |\n\t\tlet k = m.size;\n\t\tlet divisor = m.determinant;\n\t\tlet numerators = { m.deepCopy } ! k;\n\t\t1.toDo(k) { :i |\n\t\t\t1.toDo(k) { :j |\n\t\t\t\tnumerators[i][j][i] := d[j]\n\t\t\t}\n\t\t};\n\t\t1.to(k).collect { :i |\n\t\t\tnumerators[i].determinant / divisor\n\t\t}\n\t}",
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
    let __SplVar3 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _n = _at_2(__SplVar3, 1);
    let _p = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2(_shape_1(_b), 2);
    let _m = _at_2(__SplVar4, 1);
    let _q = _at_2(__SplVar4, 2);
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
  "{ :a :b |\n\t\tlet [n, p] = a.shape;\n\t\tlet [m, q] = b.shape;\n\t\tlet l = List(n, 1);\n\t\t{ n = m }.assert;\n\t\t(1 / (n - 1)) * (a - (*.outer(l, a.mean))).transpose.dot((a - (*.outer(l, a.mean))).conjugate)\n\t}",
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
                  _iota_1(_size),
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
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.size;\n\t\t\tlet array = self;\n\t\t\t(size = 2).if {\n\t\t\t\t(array[1, 1] * array[2, 2]) - (array[1, 2] * array[2, 1])\n\t\t\t} {\n\t\t\t\t(size = 3).if {\n\t\t\t\t\t(array[1, 1] * array[2, 2] * array[3, 3]) +\n\t\t\t\t\t(array[1, 2] * array[2, 3] * array[3, 1]) +\n\t\t\t\t\t(array[1, 3] * array[2, 1] * array[3, 2]) -\n\t\t\t\t\t(array[1, 3] * array[2, 2] * array[3, 1]) -\n\t\t\t\t\t(array[1, 2] * array[2, 1] * array[3, 3]) -\n\t\t\t\t\t(array[1, 1] * array[2, 3] * array[3, 2])\n\t\t\t\t} {\n\t\t\t\t\tlet answer = 0;\n\t\t\t\t\tsize.iota.plainChangesDo { :p |\n\t\t\t\t\t\tlet sign = p.permutationSymbol;\n\t\t\t\t\t\tlet entries = p.withIndexCollect { :i :j |\n\t\t\t\t\t\t\tarray[i][j]\n\t\t\t\t\t\t};\n\t\t\t\t\t\tanswer := answer + (entries.product * sign)\n\t\t\t\t\t};\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('List>>determinant: not defined at non-square matrices')\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\t*.inner(self, aList, +)\n\t}",
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
        let __SplVar5 = _assertIsOfSize_2(_qrDecomposition_1(_x), 2);
        let _q = _at_2(__SplVar5, 1);
        let _r = _at_2(__SplVar5, 2);
        /* Statements */
        _x = _dot_2(_r, _q);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _diagonal_1(_x);
  }, ["m", "epsilon", "n"]),
  "{ :m :epsilon :n |\n\t\tlet x = m.deepCopy;\n\t\tlet i = 0;\n\t\t{\n\t\t\tx.isUpperTriangularMatrix.not & { i < n }\n\t\t}.whileTrue {\n\t\t\tlet [q, r] = x.qrDecomposition;\n\t\t\tx := r.dot(q);\n\t\t\ti := i + 1\n\t\t};\n\t\tx.diagonal\n\t}",
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
  "{ :m |\n\t\tm.eigenvalues(1E-15, 100)\n\t}",
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
      _to_2(1, _n),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size - 1;\n\t\tlet w = self.negate / self.last;\n\t\t{ :i :j |\n\t\t\t(i = (j + 1)).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(j = n).if {\n\t\t\t\t\tw[i]\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}.table(1.to(n), 1.to(n))\n\t}",
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
  "{ :self |\n\t\tself.ravel.collect(square:/1).sum.sqrt\n\t}",
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
    let __SplVar6 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar6, 1);
    let _n = _at_2(__SplVar6, 2);
    let _a = _zeroMatrix_1([_m, _asterisk_2(_m, 2)]);
    let _r = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_m, _n),
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
              _exclamationMarkEqualsSign_2(
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
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet a = [m, m * 2].zeroMatrix;\n\t\tlet r = [m, n].zeroMatrix;\n\t\t(m != n).ifTrue {\n\t\t\tself.error('List>>gaussJordanInverse: matrix is not square')\n\t\t};\n\t\t1.toDo(m) { :i |\n\t\t\ta[i].replaceFromToWith(1, m, self[i]);\n\t\t\ta[i][m + i] := 1\n\t\t};\n\t\ta.reducedRowEchelonForm;\n\t\t1.toDo(n) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t(a[i][j] != (i = j).boole).if {\n\t\t\t\t\tself.error('List>>gaussJordanInverse: matrix is singular')\n\t\t\t\t} {\n\t\t\t\t\tr[i][j] := a[i][m + j]\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tr\n\t}",
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
  "{ :m :v |\n\t\tlet a = m.deepCopy;\n\t\ta.withIndexDo { :each :i |\n\t\t\teach.add(v[i])\n\t\t};\n\t\ta.reducedRowEchelonForm;\n\t\ta.collect(last:/1)\n\t}",
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
  "{ :a :b :x :epsilon :maximumIterations |\n\t\tlet n = a.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tmaximumIterations.timesRepeat {\n\t\t\t\tlet y = x.copy;\n\t\t\t\tlet p = 0;\n\t\t\t\tlet q = 0;\n\t\t\t\t1.toDo(n) { :i |\n\t\t\t\t\tlet sum = 0;\n\t\t\t\t\t1.toDo(n) { :j |\n\t\t\t\t\t\t(j = i).ifFalse {\n\t\t\t\t\t\t\tsum := sum + (a[i][j] * x[j])\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tx[i] := (b[i] - sum) / a[i][i]\n\t\t\t\t};\n\t\t\t\t1.toDo(n) { :i |\n\t\t\t\t\tp := p + (x[i] - y[i]).abs;\n\t\t\t\t\tq := q + y[i].abs\n\t\t\t\t};\n\t\t\t\t(q = 0).ifTrue {\n\t\t\t\t\tq := 1\n\t\t\t\t};\n\t\t\t\t((p / q) < epsilon).ifTrue {\n\t\t\t\t\tx.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tx\n\t\t}\n\t}",
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
    let _x = _List_2(_size_1(_a), 0);
    let _epsilon = 1E-9;
    let _maximumIterations = 100;
    /* Statements */
    return _gaussSeidelMethod_5(_a, _b, _x, _epsilon, _maximumIterations);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet x = List(a.size, 0);\n\t\tlet epsilon = 1E-9;\n\t\tlet maximumIterations = 100;\n\t\ta.gaussSeidelMethod(b, x, epsilon, maximumIterations)\n\t}",
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
  "{ :self |\n\t\tself.dot(self.transpose)\n\t}",
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
    let __SplVar7 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _n = _at_2(__SplVar7, 1);
    let _m = _at_2(__SplVar7, 2);
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
  "{ :self |\n\t\tlet a = self.deepCopy;\n\t\tlet [n, m] = a.shape;\n\t\t1.toDo(n) { :k |\n\t\t\ta[k] := a[k].normalize;\n\t\t\t(k + 1).toDo(n) { :j |\n\t\t\t\ta[j] := a[j] - (a[j].dot(a[k]) * a[k])\n\t\t\t}\n\t\t};\n\t\ta\n\t}",
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
  "{ :aMatrix :anotherMatrix |\n\t\t(aMatrix.shape = anotherMatrix.shape).if {\n\t\t\taMatrix * anotherMatrix\n\t\t} {\n\t\t\tself.error('List>>hadamardProduct: unequal shapes')\n\t\t}\n\t}",
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
      _List_2(_hyphenMinus_2(_m, 1), 0),
    );
    /* Statements */
    return _hankelMatrix_2(_c, _r);
  }, ["c"]),
  "{ :c |\n\t\tlet m = c.size;\n\t\tlet r = [c.last] ++ List(m - 1, 0);\n\t\thankelMatrix(c, r)\n\t}",
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
      _to_2(1, _m),
      _to_2(1, _n),
    );
  }, ["c", "r"]),
  "{ :c :r |\n\t\tlet m = c.size;\n\t\tlet n = r.size;\n\t\t{ :i :j |\n\t\t\tlet k = i + j - 1;\n\t\t\t(k <= m).if {\n\t\t\t\tc[k]\n\t\t\t} {\n\t\t\t\tr[k - m + 1]\n\t\t\t}\n\t\t}.table(1.to(m), 1.to(n))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "hilbertMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_self, 2);
    let _m = _at_2(__SplVar8, 1);
    let _n = _at_2(__SplVar8, 2);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(1, _hyphenMinus_2(_plusSign_2(_i, _j), 1));
      }, ["i", "j"]),
      _to_2(1, _m),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self;\n\t\t{ :i :j |\n\t\t\t1 / (i + j - 1)\n\t\t}.table(1.to(m), 1.to(n))\n\t}",
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
    return [minCost, tour];
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\tconst dist = _self;\n\t\tconst n = dist.length;\n\t\tconst subsetCount = 1 << n;\n\t\tconst dp = Array.from({ length: subsetCount }, () => Array(n).fill(Infinity));\n\t\tconst parent = Array.from({ length: subsetCount }, () => Array(n).fill(-1));\n\t\tdp[1][0] = 0;\n\t\tfor (let mask = 1; mask < subsetCount; mask++) {\n\t\t\tif ((mask & 1) === 0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tfor (let j = 1; j < n; j++) {\n\t\t\t\tif ((mask & (1 << j)) === 0) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tconst prevMask = mask ^ (1 << j);\n\t\t\t\tfor (let k = 0; k < n; k++) {\n\t\t\t\t\tif ((prevMask & (1 << k)) === 0) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tconst cost = dp[prevMask][k] + dist[k][j];\n\t\t\t\t\tif (cost < dp[mask][j]) {\n\t\t\t\t\t\tdp[mask][j] = cost;\n\t\t\t\t\t\tparent[mask][j] = k;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tconst fullMask = subsetCount - 1;\n\t\tlet minCost = Infinity;\n\t\tlet lastCity = 0;\n\t\tfor (let j = 1; j < n; j++) {\n\t\t\tconst cost = dp[fullMask][j] + dist[j][0];\n\t\t\tif (cost < minCost) {\n\t\t\t\tminCost = cost;\n\t\t\t\tlastCity = j;\n\t\t\t}\n\t\t}\n\t\tconst tour = [];\n\t\tlet mask = fullMask;\n\t\tlet curr = lastCity;\n\t\twhile (curr !== 0) {\n\t\t\ttour.push(curr + 1);\n\t\t\tconst p = parent[mask][curr];\n\t\t\tmask ^= 1 << curr;\n\t\t\tcurr = p;\n\t\t}\n\t\ttour.push(1);\n\t\ttour.reverse();\n\t\ttour.push(1);\n\t\treturn [minCost, tour];\n\t\t>\n\t}",
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
  "{ :self |\n\t\tlet k = self.size + 1;\n\t\tlet answer = k.identityMatrix;\n\t\t1.toDo(self.size) { :i |\n\t\t\tanswer[i][k] := self[i]\n\t\t};\n\t\tanswer\n\t}",
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
            let __SplVar9 = _assertIsOfSize_2(_catenate_1(_self), 4);
            let _a = _at_2(__SplVar9, 1);
            let _b = _at_2(__SplVar9, 2);
            let _c = _at_2(__SplVar9, 3);
            let _d = _at_2(__SplVar9, 4);
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
            let _m = _self;
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
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet n = self.numberOfRows;\n\t\t\t(n = 2).if {\n\t\t\t\tlet [a, b, c, d] = self.catenate;\n\t\t\t\tlet r = 1 / ((a * d) - (b * c));\n\t\t\t\tlet m = [[d, b.-], [c.-, a]];\n\t\t\t\tr * m\n\t\t\t} {\n\t\t\t\tlet m = self;\n\t\t\t\tlet i = n.identityMatrix;\n\t\t\t\tlet e = (m ++.each i).rowReduce;\n\t\t\t\te.collect { :each |\n\t\t\t\t\teach.drop(n)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Sequence>>inverse: matrix not square')\n\t\t}\n\t}",
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
    let __SplVar10 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar10, 1);
    let _n = _at_2(__SplVar10, 2);
    /* Statements */
    return _allSatisfy_2(
      _to_2(1, _m),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _abs_1(_at_2(_at_2(_self, _i), _i));
        let _z = _sum_1(
          _collect_2(
            _to_2(1, _n),
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
  "{ :self :aBlock:/2 |\n\t\tlet [m, n] = self.shape;\n\t\t1.to(m).allSatisfy { :i |\n\t\t\tlet x = self[i][i].abs;\n\t\t\tlet z = 1.to(n).collect { :j |\n\t\t\t\t(j = i).if { 0 } { self[i][j].abs }\n\t\t\t}.sum;\n\t\t\taBlock(x, z)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isDiagonallyDominantMatrix(>=)\n\t}",
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
        let __SplVar11 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _r = _at_2(__SplVar11, 1);
        let _c = _at_2(__SplVar11, 2);
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
  "{ :self :k |\n\t\tself.isMatrix & {\n\t\t\tlet [r, c] = self.shape;\n\t\t\t1.to(r - k).allSatisfy { :i |\n\t\t\t\t(i + 1 + k).to(c).allSatisfy { :j |\n\t\t\t\t\tself[i][j].isVeryCloseTo(0)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isLowerTriangularMatrix(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "isNormalMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _self;
    let _b = _conjugateTranspose_1(_a);
    /* Statements */
    return _equalsSign_2(_dot_2(_a, _b), _dot_2(_b, _a));
  }, ["self"]),
  "{ :self |\n\t\tlet a = self;\n\t\tlet b = a.conjugateTranspose;\n\t\ta.dot(b) = b.dot(a)\n\t}",
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
    let __SplVar12 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _p = _at_2(__SplVar12, 1);
    let _q = _at_2(__SplVar12, 2);
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
  "{ :self |\n\t\tlet [p, q] = self.shape;\n\t\t(p >= q).if {\n\t\t\tself.transpose.dot(self).isVeryCloseTo(q.identityMatrix)\n\t\t} {\n\t\t\tself.dot(self.transpose).isVeryCloseTo(p.identityMatrix)\n\t\t}\n\t}",
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
    let __SplVar13 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _p = _at_2(__SplVar13, 1);
    let _q = _at_2(__SplVar13, 2);
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
  "{ :self |\n\t\tlet [p, q] = self.shape;\n\t\t(p >= q).if {\n\t\t\tself.conjugateTranspose.dot(self).isVeryCloseTo(q.identityMatrix)\n\t\t} {\n\t\t\tself.dot(self.conjugateTranspose).isVeryCloseTo(p.identityMatrix)\n\t\t}\n\t}",
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
        let __SplVar14 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _r = _at_2(__SplVar14, 1);
        let _c = _at_2(__SplVar14, 2);
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
  "{ :self :k |\n\t\tself.isMatrix & {\n\t\t\tlet [r, c] = self.shape;\n\t\t\t(2 - k).to(r).allSatisfy { :i |\n\t\t\t\t1.to(i - 1 + k).allSatisfy { :j |\n\t\t\t\t\tself[i][j].isVeryCloseTo(0)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isUpperTriangularMatrix(0)\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tconst C = _self;\n\t\tconst J = C.length;\n\t\tif (J === 0) {\n\t\t\tthrow new Error('kuhnMunkresAlgorithm: empty list');\n\t\t}\n\t\tconst W = C[0].length;\n\t\tif (J > W) {\n\t\t\tthrow new Error('kuhnMunkresAlgorithm: invalid matrix');\n\t\t}\n\t\tfunction arrayOf(k, z) {\n\t\t\tconst a = Array(k);\n\t\t\tfor(let i = 0; i < k; i++) {\n\t\t\t\ta[i] = z;\n\t\t\t};\n\t\t\treturn a;\n\t\t}\n\t\tconst job = arrayOf(W + 1, -1);\n\t\tconst ys = arrayOf(J, null);\n\t\tconst yt = arrayOf(W + 1, null);\n\t\tconst answers = [];\n\t\tconst inf = Infinity;\n\t\tfor (let j_cur = 0; j_cur < J; j_cur++) {\n\t\t\tlet w_cur = W;\n\t\t\tjob[w_cur] = j_cur;\n\t\t\tconst min_to = arrayOf(W + 1, inf);\n\t\t\tconst prv = arrayOf(W + 1, -1);\n\t\t\tconst in_Z = Array(W + 1);\n\t\t\twhile (job[w_cur] !== -1) {\n\t\t\t\tin_Z[w_cur] = true;\n\t\t\t\tconst j = job[w_cur];\n\t\t\t\tlet delta = inf;\n\t\t\t\tlet w_next = null;\n\t\t\t\tfor (let w = 0; w < W; w++) {\n\t\t\t\t\tif (!in_Z[w]) {\n\t\t\t\t\t\tconst b = C[j][w] - ys[j] - yt[w];\n\t\t\t\t\t\tif (b < min_to[w]) {\n\t\t\t\t\t\t\tmin_to[w] = b;\n\t\t\t\t\t\t\tprv[w] = w_cur;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (min_to[w] < delta) {\n\t\t\t\t\t\t\tdelta = min_to[w];\n\t\t\t\t\t\t\tw_next = w;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (let w = 0; w <= W; w++) {\n\t\t\t\t\tif (in_Z[w]) {\n\t\t\t\t\t\tys[job[w]] += delta;\n\t\t\t\t\t\tyt[w] -= delta;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmin_to[w] -= delta;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tw_cur = w_next;\n\t\t\t}\n\t\t\tfor (let w = null; w_cur != W; w_cur = w) {\n\t\t\t\tw = prv[w_cur];\n\t\t\t\tjob[w_cur] = job[w];\n\t\t\t}\n\t\t\tanswers.push(-yt[W]);\n\t\t}\n\t\tfor (let i = 0; i < W; i++) {\n\t\t\tjob[i] += 1;\n\t\t}\n\t\treturn [answers, job.slice(0, W)];\n\t\t>\n\t}",
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
  "{ :a :b |\n\t\tlet m = a.size;\n\t\tlet n = a[1].size;\n\t\tlet p = b.size;\n\t\tlet q = b[1].size;\n\t\tlet r = m * p;\n\t\tlet c = n * q;\n\t\tlet answer = { List(c, 0) } ! r;\n\t\t1.toDo(m) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t1.toDo(p) { :k |\n\t\t\t\t\t1.toDo(q) { :l |\n\t\t\t\t\t\tanswer[p * (i - 1) + k][q * (j - 1) + l] := a[i][j] * b[k][l]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
    let __SplVar15 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _r = _at_2(__SplVar15, 1);
    let _c = _at_2(__SplVar15, 2);
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_r, _k),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          _plusSign_2(_plusSign_2(_i, 1), _k),
          _c,
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
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('List>>lowerTriangularize');\n\t\tlet [r, c] = m.shape;\n\t\t1.toDo(r - k) { :i |\n\t\t\t(i + 1 + k).toDo(c) { :j |\n\t\t\t\tm[i][j] := 0\n\t\t\t}\n\t\t};\n\t\tm\n\t}",
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
  "{ :self |\n\t\tself.lowerTriangularize(0)\n\t}",
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
          _exclamationMarkEqualsSign_2(_i, _row),
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
  "{ :m |\n\t\tlet n = m.size;\n\t\tlet p = n.identityMatrix;\n\t\t1.toDo(n) { :i |\n\t\t\tlet max = m[i][i];\n\t\t\tlet row = i;\n\t\t\ti.toDo(n) { :j |\n\t\t\t\tlet e = m[j][i];\n\t\t\t\t(e > max).ifTrue {\n\t\t\t\t\tmax := e;\n\t\t\t\t\trow := j\n\t\t\t\t}\n\t\t\t};\n\t\t\t(i != row).ifTrue {\n\t\t\t\tp.swapWith(i, row)\n\t\t\t}\n\t\t};\n\t\tp\n\t}",
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
  "{ :self |\n\t\tlet m = self.assertIsSquareMatrix('List>>luDecomposition');\n\t\tlet n = self.size;\n\t\tlet p = m.luDecompositionPivotMatrix;\n\t\tlet m2 = p.dot(m);\n\t\tlet l = n.identityMatrix;\n\t\tlet u = n.identityMatrix;\n\t\t1.toDo(n) { :j |\n\t\t\t1.toDo(j) { :i |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(i - 1) { :k |\n\t\t\t\t\tsum := sum + (u[k][j] * l[i][k])\n\t\t\t\t};\n\t\t\t\tu[i][j] := m2[i][j] - sum\n\t\t\t};\n\t\t\tj.toDo(n) { :i |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(j - 1) { :k |\n\t\t\t\t\tsum := sum + (u[k][j] * l[i][k])\n\t\t\t\t};\n\t\t\t\tl[i][j] := (m2[i][j] - sum) / u[j][j]\n\t\t\t}\n\t\t};\n\t\t[l, u, p]\n\t}",
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
    let __SplVar16 = _assertIsOfSize_2(_kuhnMunkresAlgorithm_1(_self), 2);
    let __SplUnused31 = _at_2(__SplVar16, 1);
    let _i = _at_2(__SplVar16, 2);
    let _k = _size_1(_i);
    /* Statements */
    return _select_2(
      _transpose_1([_i, _to_2(1, _k)]),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_at_2(_each, 1), 0);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [_, i] = self.kuhnMunkresAlgorithm;\n\t\tlet k = i.size;\n\t\t[i, 1.to(k)].transpose.select { :each |\n\t\t\teach[1] != 0\n\t\t}\n\t}",
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
  "{ :a :b |\n\t\ta.covariance(b) / *.outer(a.standardDeviation, b.standardDeviation)\n\t}",
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
    let __SplVar17 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _a = _at_2(__SplVar17, 1);
    let _b = _at_2(__SplVar17, 2);
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
                return _toDo_3(
                  1,
                  _b,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _toDo_3(
                      1,
                      _a,
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
                return _toDo_3(
                  1,
                  _b,
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _toDo_3(
                      1,
                      _a,
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
            return _toDo_3(
              2,
              _p,
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
  "{ :m :p |\n\t\tlet [a, b] = m.shape;\n\t\t(a = b).if {\n\t\t\tlet r = [b, a].zeroMatrix;\n\t\t\tp.caseOf(\n\t\t\t\t[\n\t\t\t\t\t0 -> {\n\t\t\t\t\t\t1.toDo(b) { :i |\n\t\t\t\t\t\t\t1.toDo(a) { :j |\n\t\t\t\t\t\t\t\t(i = j).if {\n\t\t\t\t\t\t\t\t\tr[i][j] := 1\n\t\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t\tr[i][j] := 0\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\t1.toDo(b) { :i |\n\t\t\t\t\t\t\t1.toDo(a) { :j |\n\t\t\t\t\t\t\t\tr[i][j] := m[i][j]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t) {\n\t\t\t\tr := m;\n\t\t\t\t2.toDo(p) { :i |\n\t\t\t\t\tr := r.dot(m)\n\t\t\t\t}\n\t\t\t};\n\t\t\tr\n\t\t} {\n\t\t\tm.error('List>>matrixPower: invalid matrix')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.rowReduce.count { :each |\n\t\t\teach.allSatisfy { :item |\n\t\t\t\titem.isVeryCloseTo(0)\n\t\t\t}.not\n\t\t}\n\t}",
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
    let __SplVar18 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar18, 1);
    let _n = _at_2(__SplVar18, 2);
    /* Statements */
    return _determinant_1(
      _submatrix_3(
        _self,
        _without_2(_iota_1(_m), _i),
        _without_2(_iota_1(_n), _j),
      ),
    );
  }, ["self", "i", "j"]),
  "{ :self :i :j |\n\t\tlet [m, n] = self.shape;\n\t\tself.submatrix(\n\t\t\tm.iota.without(i),\n\t\t\tn.iota.without(j)\n\t\t).determinant\n\t}",
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
    let __SplVar19 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar19, 1);
    let _n = _at_2(__SplVar19, 2);
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
            _without_2(_iota_1(_m), _r),
            _without_2(_iota_1(_n), _c),
          ),
        );
      }, ["i", "j"]),
      _to_2(1, _m),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t{ :i :j |\n\t\t\tlet r = m - i + 1;\n\t\t\tlet c = n - j + 1;\n\t\t\tself.submatrix(\n\t\t\t\tm.iota.without(r),\n\t\t\t\tn.iota.without(c)\n\t\t\t).determinant\n\t\t}.table(1.to(m), 1.to(n))\n\t}",
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
  "{ :self |\n\t\tself.gramSchmidtProcess\n\t}",
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
        let _array = _self;
        let _answer = 0;
        /* Statements */
        _plainChangesDo_2(
          _iota_1(_size),
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
        return _ifEmpty_3(
          _self,
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
            return _error_2(
              _self,
              "List>>permanent: not defined at non-square matrices",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.numberOfRows;\n\t\t\tlet array = self;\n\t\t\tlet answer = 0;\n\t\t\tsize.iota.plainChangesDo { :p |\n\t\t\t\tlet sign = p.permutationSymbol;\n\t\t\t\tlet entries = p.withIndexCollect { :i :j |\n\t\t\t\t\tarray[i][j]\n\t\t\t\t};\n\t\t\t\tanswer := answer + entries.product\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.ifEmpty {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tself.error('List>>permanent: not defined at non-square matrices')\n\t\t\t}\n\t\t}\n\t}",
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
    let __SplVar20 = _assertIsOfSize_2(_singularValueDecomposition_1(_self), 3);
    let _u = _at_2(__SplVar20, 1);
    let _s = _at_2(__SplVar20, 2);
    let _v = _at_2(__SplVar20, 3);
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
  "{ :self |\n\t\tlet [u, s, v] = self.singularValueDecomposition;\n\t\tlet i = s.deepCollect { :x |\n\t\t\tx.isZero.if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t1 / x\n\t\t\t}\n\t\t};\n\t\tv.dot(i).dot(u.transpose)\n\t}",
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
    let __SplVar21 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar21, 1);
    let _n = _at_2(__SplVar21, 2);
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
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet qr = self.deepCopy;\n\t\tlet q = [m, n].zeroMatrix;\n\t\tlet r = [m, n].zeroMatrix;\n\t\t1.toDo(n) { :k |\n\t\t\tlet norm = 0;\n\t\t\tk.toDo(m) { :i |\n\t\t\t\tnorm := norm.hypotenuse(qr[i][k])\n\t\t\t};\n\t\t\tnorm.isZero.ifFalse {\n\t\t\t\t(qr[k][k] < 0).ifTrue {\n\t\t\t\t\tnorm := norm.negate\n\t\t\t\t};\n\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\tqr[i][k] := qr[i][k] / norm\n\t\t\t\t};\n\t\t\t\tqr[k][k] := qr[k][k] + 1;\n\t\t\t\t(k + 1).toDo(n) { :j |\n\t\t\t\t\tlet s = 0;\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\ts := s + (qr[i][k] * qr[i][j])\n\t\t\t\t\t};\n\t\t\t\t\ts := s.negate / qr[k][k];\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\tqr[i][j] := qr[i][j] + (s * qr[i][k]);\n\t\t\t\t\t\t(i < j).ifTrue {\n\t\t\t\t\t\t\tr[i][j] := qr[i][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tr[k][k] := norm.negate\n\t\t};\n\t\tn.toByDo(1, -1) { :k |\n\t\t\tq[k][k] := 1;\n\t\t\tk.toDo(n) { :j |\n\t\t\t\tqr[k][k].isZero.ifFalse {\n\t\t\t\t\tlet s = 0;\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\ts := s + (qr[i][k] * q[i][j])\n\t\t\t\t\t};\n\t\t\t\t\ts := s.negate / qr[k][k];\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\tq[i][j] := q[i][j] + (s * qr[i][k])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[q, r]\n\t}",
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
    let __SplVar22 = _assertIsOfSize_2(
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
    let _f = _at_2(__SplVar22, 1);
    let _g = _at_2(__SplVar22, 2);
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
              _to_2(0, _hyphenMinus_2(_dimension, 1)),
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
  "{ :data :dimension :delay :metric |\n\t\tlet n = data.size - ((dimension - 1) * delay);\n\t\tlet m = [0].reshape([n n]);\n\t\tlet [f, g] = metric.caseOf([\n\t\t\t'Manhattan' -> { [abs:/1, sum:/1] },\n\t\t\t'Euclidean' -> { [square:/1, { :x | x.sum.sqrt }] },\n\t\t\t'Supremum' -> { [abs:/1, max:/1] }\n\t\t]);\n\t\t1.toDo(n) { :i |\n\t\t\ti.toDo(n) { :j |\n\t\t\t\tlet x = 0.to(dimension - 1).collect { :k |\n\t\t\t\t\tf.value(data[i + (k * delay)] - data[j + (k * delay)])\n\t\t\t\t};\n\t\t\t\tm[i][j] := m[j][i] := g.value(x)\n\t\t\t}\n\t\t};\n\t\tm\n\t}",
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
  "{ :data :dimension :delay :metric :theshold |\n\t\tlet m = data.recurrenceMatrix(dimension, delay, metric);\n\t\t(m < theshold).boole\n\t}",
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
      let __SplVar23 = _assertIsOfSize_2(_shape_1(_self), 2);
      let _m = _at_2(__SplVar23, 1);
      let _n = _at_2(__SplVar23, 2);
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
                _exclamationMarkEqualsSign_2(_i, _r),
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
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet lead = 1;\n\t\t\tlet [m, n] = self.shape;\n\t\t\tlet d = nil;\n\t\t\t1.toDo(m) { :r |\n\t\t\t\tlet i = r;\n\t\t\t\t(lead > n).ifTrue {\n\t\t\t\t\tself.return\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\tself[i][lead].isZero\n\t\t\t\t}.whileTrue {\n\t\t\t\t\ti := i + 1;\n\t\t\t\t\t(i > m).ifTrue {\n\t\t\t\t\t\ti := r;\n\t\t\t\t\t\tlead := lead + 1;\n\t\t\t\t\t\t(lead > n).ifTrue {\n\t\t\t\t\t\t\tself.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tself.swapWith(i, r);\n\t\t\t\td := self[r][lead];\n\t\t\t\t(d.abs > 1E-10).ifTrue {\n\t\t\t\t\tself[r].replace { :each |\n\t\t\t\t\t\teach / d\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t1.toDo(m) { :i |\n\t\t\t\t\t(i != r).ifTrue {\n\t\t\t\t\t\tlet e = self[i][lead];\n\t\t\t\t\t\t1.toDo(n) { :c |\n\t\t\t\t\t\t\tself[i][c] := self[i][c] - (self[r][c] * e)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tlead := lead + 1\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet k = self.first.size;\n\t\tlet answer = [];\n\t\t1.toDo(k) { :i |\n\t\t\tlet row = [];\n\t\t\t1.toDo(n) { :j |\n\t\t\t\trow.addAll(self[j][i])\n\t\t\t};\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.deepCopy.reducedRowEchelonForm\n\t}",
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
    let __SplVar24 = _assertIsOfSize_2(_shape_1(_a), 2);
    let _m = _at_2(__SplVar24, 1);
    let _n = _at_2(__SplVar24, 2);
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
          let __SplVar25 = _qrDecomposition_1(_conjugateTranspose_1(_s));
          /* Statements */
          _q = _at_2(__SplVar25, 1);
          return _s = _at_2(__SplVar25, 2);
        }, [])();
        _u = _dot_2(_u, _q);
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar26 = _qrDecomposition_1(_conjugateTranspose_1(_s));
          /* Statements */
          _q = _at_2(__SplVar26, 1);
          return _s = _at_2(__SplVar26, 2);
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
  "{ :self :tolerance |\n\t\tlet a = self;\n\t\tlet [m, n] = a.shape;\n\t\tlet loopMax = 100 * m.max(n);\n\t\tlet loopCount = 0;\n\t\tlet u = m.identityMatrix;\n\t\tlet s = a.conjugateTranspose;\n\t\tlet v = n.identityMatrix;\n\t\tlet err = Infinity;\n\t\tlet ss = nil;\n\t\t{\n\t\t\terr > tolerance & {\n\t\t\t\tloopCount < loopMax\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tvar q, e, f;\n\t\t\t[q, s] := qrDecomposition(s.conjugateTranspose);\n\t\t\tu := u.dot(q);\n\t\t\t[q, s] := qrDecomposition(s.conjugateTranspose);\n\t\t\tv := v.dot(q);\n\t\t\te := s.deepCopy.upperTriangularize(1).catenate.norm;\n\t\t\tf := s.diagonal.norm;\n\t\t\terr := (f = 0 || (f = 1)).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\te / f\n\t\t\t};\n\t\t\tloopCount := loopCount + 1\n\t\t};\n\t\tss := s.diagonal;\n\t\ts := [0].reshape([m, n]);\n\t\t1.toDo(ss.size) { :n |\n\t\t\tlet ssn = ss[n];\n\t\t\ts[n][n] := ssn.abs;\n\t\t\t(ssn < 0).ifTrue {\n\t\t\t\t1.toDo(m) { :i |\n\t\t\t\t\tu[i][n] := u[i][n].negate\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[u, s, v]\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\tlet a = _self\n\t\t/* https://github.com/danilosalvati/svd-js */\n\t\t// Define default parameters\n\t\tlet withu = true // 'f'\n\t\tlet withv = true\n\t\tlet eps = Math.pow(2, -52)\n\t\tlet tol = 1e-64 / eps\n\t\t// Householders reduction to bidiagonal form\n\t\tconst n = a[0].length\n\t\tconst m = a.length\n\t\tif (m < n) {\n\t\t\tthrow new TypeError('Invalid matrix: m < n')\n\t\t}\n\t\tlet i, j, k, l, l1, c, f, g, h, s, x, y, z\n\t\tg = 0\n\t\tx = 0\n\t\tconst e = []\n\t\tconst u = []\n\t\tconst v = []\n\t\tconst mOrN = (withu === 'f') ? m : n\n\t\t// Initialize u\n\t\tfor (i = 0; i < m; i++) {\n\t\t\tu[i] = new Array(mOrN).fill(0)\n\t\t}\n\t\t// Initialize v\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tv[i] = new Array(n).fill(0)\n\t\t}\n\t\t// Initialize q\n\t\tconst q = new Array(n).fill(0)\n\t\t// Copy array a in u\n\t\tfor (i = 0; i < m; i++) {\n\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\tu[i][j] = a[i][j]\n\t\t\t}\n\t\t}\n\t\tfor (i = 0; i < n; i++) {\n\t\t\te[i] = g\n\t\t\ts = 0\n\t\t\tl = i + 1\n\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\ts += Math.pow(u[j][i], 2)\n\t\t\t}\n\t\t\tif (s < tol) {\n\t\t\t\tg = 0\n\t\t\t} else {\n\t\t\t\tf = u[i][i]\n\t\t\t\tg = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)\n\t\t\t\th = f * g - s\n\t\t\t\tu[i][i] = f - g\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\ts = 0\n\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\ts += u[k][i] * u[k][j]\n\t\t\t\t\t}\n\t\t\t\t\tf = s / h\n\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\tu[k][j] = u[k][j] + f * u[k][i]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tq[i] = g\n\t\t\ts = 0\n\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\ts += Math.pow(u[i][j], 2)\n\t\t\t}\n\t\t\tif (s < tol) {\n\t\t\t\tg = 0\n\t\t\t} else {\n\t\t\t\tf = u[i][i + 1]\n\t\t\t\tg = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)\n\t\t\t\th = f * g - s\n\t\t\t\tu[i][i + 1] = f - g\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\te[j] = u[i][j] / h\n\t\t\t\t}\n\t\t\t\tfor (j = l; j < m; j++) {\n\t\t\t\t\ts = 0\n\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\ts += u[j][k] * u[i][k]\n\t\t\t\t\t}\n\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\tu[j][k] = u[j][k] + s * e[k]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\ty = Math.abs(q[i]) + Math.abs(e[i])\n\t\t\tif (y > x) {\n\t\t\t\tx = y\n\t\t\t}\n\t\t}\n\t\t// Accumulation of right-hand transformations\n\t\tif (withv) {\n\t\t\tfor (i = n - 1; i >= 0; i--) {\n\t\t\t\tif (g !== 0) {\n\t\t\t\t\th = u[i][i + 1] * g\n\t\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\t\tv[j][i] = u[i][j] / h\n\t\t\t\t\t}\n\t\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\t\ts = 0\n\t\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\t\ts += u[i][k] * v[k][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfor (k = l; k < n; k++) {\n\t\t\t\t\t\t\tv[k][j] = v[k][j] + s * v[k][i]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (j = l; j < n; j++) {\n\t\t\t\t\tv[i][j] = 0\n\t\t\t\t\tv[j][i] = 0\n\t\t\t\t}\n\t\t\t\tv[i][i] = 1\n\t\t\t\tg = e[i]\n\t\t\t\tl = i\n\t\t\t}\n\t\t}\n\t\t// Accumulation of left-hand transformations\n\t\tif (withu) {\n\t\t\tif (withu === 'f') {\n\t\t\t\tfor (i = n; i < m; i++) {\n\t\t\t\t\tfor (j = n; j < m; j++) {\n\t\t\t\t\t\tu[i][j] = 0\n\t\t\t\t\t}\n\t\t\t\t\tu[i][i] = 1\n\t\t\t\t}\n\t\t\t}\n\t\t\tfor (i = n - 1; i >= 0; i--) {\n\t\t\t\tl = i + 1\n\t\t\t\tg = q[i]\n\t\t\t\tfor (j = l; j < mOrN; j++) {\n\t\t\t\t\tu[i][j] = 0\n\t\t\t\t}\n\t\t\t\tif (g !== 0) {\n\t\t\t\t\th = u[i][i] * g\n\t\t\t\t\tfor (j = l; j < mOrN; j++) {\n\t\t\t\t\t\ts = 0\n\t\t\t\t\t\tfor (k = l; k < m; k++) {\n\t\t\t\t\t\t\ts += u[k][i] * u[k][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tf = s / h\n\t\t\t\t\t\tfor (k = i; k < m; k++) {\n\t\t\t\t\t\t\tu[k][j] = u[k][j] + f * u[k][i]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\t\t\tu[j][i] = u[j][i] / g\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tfor (j = i; j < m; j++) {\n\t\t\t\t\t\tu[j][i] = 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tu[i][i] = u[i][i] + 1\n\t\t\t}\n\t\t}\n\t\t// Diagonalization of the bidiagonal form\n\t\teps = eps * x\n\t\tlet testConvergence\n\t\tfor (k = n - 1; k >= 0; k--) {\n\t\t\tfor (let iteration = 0; iteration < 50; iteration++) {\n\t\t\t\t// test-f-splitting\n\t\t\t\ttestConvergence = false\n\t\t\t\tfor (l = k; l >= 0; l--) {\n\t\t\t\t\tif (Math.abs(e[l]) <= eps) {\n\t\t\t\t\t\ttestConvergence = true\n\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tif (Math.abs(q[l - 1]) <= eps) {\n\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (!testConvergence) { // cancellation of e[l] if l>0\n\t\t\t\t\tc = 0\n\t\t\t\t\ts = 1\n\t\t\t\t\tl1 = l - 1\n\t\t\t\t\tfor (i = l; i < k + 1; i++) {\n\t\t\t\t\t\tf = s * e[i]\n\t\t\t\t\t\te[i] = c * e[i]\n\t\t\t\t\t\tif (Math.abs(f) <= eps) {\n\t\t\t\t\t\t\tbreak // goto test-f-convergence\n\t\t\t\t\t\t}\n\t\t\t\t\t\tg = q[i]\n\t\t\t\t\t\tq[i] = Math.sqrt(f * f + g * g)\n\t\t\t\t\t\th = q[i]\n\t\t\t\t\t\tc = g / h\n\t\t\t\t\t\ts = -f / h\n\t\t\t\t\t\tif (withu) {\n\t\t\t\t\t\t\tfor (j = 0; j < m; j++) {\n\t\t\t\t\t\t\t\ty = u[j][l1]\n\t\t\t\t\t\t\t\tz = u[j][i]\n\t\t\t\t\t\t\t\tu[j][l1] = y * c + (z * s)\n\t\t\t\t\t\t\t\tu[j][i] = -y * s + (z * c)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t// test f convergence\n\t\t\t\tz = q[k]\n\t\t\t\tif (l === k) { // convergence\n\t\t\t\t\tif (z < 0) {\n\t\t\t\t\t\t// q[k] is made non-negative\n\t\t\t\t\t\tq[k] = -z\n\t\t\t\t\t\tif (withv) {\n\t\t\t\t\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\t\t\t\t\tv[j][k] = -v[j][k]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tbreak // break out of iteration loop and move on to next k value\n\t\t\t\t}\n\t\t\t\t// Shift from bottom 2x2 minor\n\t\t\t\tx = q[l]\n\t\t\t\ty = q[k - 1]\n\t\t\t\tg = e[k - 1]\n\t\t\t\th = e[k]\n\t\t\t\tf = ((y - z) * (y + z) + (g - h) * (g + h)) / (2 * h * y)\n\t\t\t\tg = Math.sqrt(f * f + 1)\n\t\t\t\tf = ((x - z) * (x + z) + h * (y / (f < 0 ? (f - g) : (f + g)) - h)) / x\n\t\t\t\t// Next QR transformation\n\t\t\t\tc = 1\n\t\t\t\ts = 1\n\t\t\t\tfor (i = l + 1; i < k + 1; i++) {\n\t\t\t\t\tg = e[i]\n\t\t\t\t\ty = q[i]\n\t\t\t\t\th = s * g\n\t\t\t\t\tg = c * g\n\t\t\t\t\tz = Math.sqrt(f * f + h * h)\n\t\t\t\t\te[i - 1] = z\n\t\t\t\t\tc = f / z\n\t\t\t\t\ts = h / z\n\t\t\t\t\tf = x * c + g * s\n\t\t\t\t\tg = -x * s + g * c\n\t\t\t\t\th = y * s\n\t\t\t\t\ty = y * c\n\t\t\t\t\tif (withv) {\n\t\t\t\t\t\tfor (j = 0; j < n; j++) {\n\t\t\t\t\t\t\tx = v[j][i - 1]\n\t\t\t\t\t\t\tz = v[j][i]\n\t\t\t\t\t\t\tv[j][i - 1] = x * c + z * s\n\t\t\t\t\t\t\tv[j][i] = -x * s + z * c\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tz = Math.sqrt(f * f + h * h)\n\t\t\t\t\tq[i - 1] = z\n\t\t\t\t\tc = f / z\n\t\t\t\t\ts = h / z\n\t\t\t\t\tf = c * g + s * y\n\t\t\t\t\tx = -s * g + c * y\n\t\t\t\t\tif (withu) {\n\t\t\t\t\t\tfor (j = 0; j < m; j++) {\n\t\t\t\t\t\t\ty = u[j][i - 1]\n\t\t\t\t\t\t\tz = u[j][i]\n\t\t\t\t\t\t\tu[j][i - 1] = y * c + z * s\n\t\t\t\t\t\t\tu[j][i] = -y * s + z * c\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\te[l] = 0\n\t\t\t\te[k] = f\n\t\t\t\tq[k] = x\n\t\t\t}\n\t\t}\n\t\t// Number below eps should be zero\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tif (q[i] < eps) q[i] = 0\n\t\t}\n\t\treturn [ u, q, v ]\n\t\t>\n\t}",
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
    let __SplVar27 = _assertIsOfSize_2(
      _singularValueDecompositionGolubReinsch_1(_self),
      3,
    );
    let _u = _at_2(__SplVar27, 1);
    let _q = _at_2(__SplVar27, 2);
    let _v = _at_2(__SplVar27, 3);
    let _s = _diagonalMatrix_3(_q, 0, _shape_1(_self));
    /* Statements */
    return [_u, _s, _v];
  }, ["self"]),
  "{ :self |\n\t\tlet [u, q, v] = self.singularValueDecompositionGolubReinsch;\n\t\tlet s = q.diagonalMatrix(0, self.shape);\n\t\t[u, s, v]\n\t}",
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
        let _p = _takeList_2(_u, _toBy_3(_hyphenMinus_2(_n, 1), 0, -1));
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
  "{ :u |\n\t\tlet k = u.size;\n\t\tlet n = (1 + sqrt(1 + (8 * k))) / 2;\n\t\tn.isInteger.if {\n\t\t\tlet p = u.takeList((n - 1).toBy(0, -1));\n\t\t\tlet q = p.collect { :each |\n\t\t\t\teach.padLeft([n], 0)\n\t\t\t};\n\t\t\t2.toDo(n) { :i |\n\t\t\t\t1.toDo(i - 1) { :j |\n\t\t\t\t\tq[i][j] := q[j][i]\n\t\t\t\t}\n\t\t\t};\n\t\t\tq\n\t\t} {\n\t\t\tu.error('squareForm: invalid vector')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.singularValueDecomposition\n\t}",
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
    let __SplVar28 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar28, 1);
    let _n = _at_2(__SplVar28, 2);
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
  "{ :self :i :j |\n\t\tlet [m, n] = self.shape;\n\t\t1.toDo(m) { :k |\n\t\t\tlet x = self[k][i];\n\t\t\tself[k][i] := self[k][j];\n\t\t\tself[k][j] := x\n\t\t};\n\t\tself\n\t}",
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
    let __SplVar29 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar29, 1);
    let _n = _at_2(__SplVar29, 2);
    /* Statements */
    return _swapWith_3(_self, _i, _j);
  }, ["self", "i", "j"]),
  "{ :self :i :j |\n\t\tlet [m, n] = self.shape;\n\t\tself.swapWith(i, j)\n\t}",
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
    let _a = _plusSignPlusSign_2(_reverse_1(_p), _List_2(_x, 0));
    let _b = _plusSignPlusSign_2(_reverse_1(_q), _List_2(_y, 0));
    /* Statements */
    return _catenate_1([
      _collect_2(
        _to_2(0, _x),
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
        _to_2(0, _y),
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
  "{ :p :q |\n\t\tlet m = p.size - 1;\n\t\tlet n = q.size - 1;\n\t\tlet d = m + n;\n\t\tlet x = d - m - 1;\n\t\tlet y = d - n - 1;\n\t\tlet a = p.reverse ++ List(x, 0);\n\t\tlet b = q.reverse ++ List(y, 0);\n\t\t[\n\t\t\t0.to(x).collect { :i | a.rotateRight(i) },\n\t\t\t0.to(y).collect { :i | b.rotateRight(i) }\n\t\t].catenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "thomasAlgorithm",
  ["a", "b", "c", "d", "x", "n"],
  sl.annotateFunction(function (_a, _b, _c, _d, _x, _n) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _b, _c, _d, _x, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    let a = _a, b = _b, c = _c, d = _d, x = _x, n = _n;
    for (let i = 1; i < n; i++) {
      let m = a[i] / b[i - 1];
      b[i] -= m * c[i - 1];
      d[i] -= m * d[i - 1];
    }
    x[n - 1] = d[n - 1] / b[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      x[i] = (d[i] - c[i] * x[i + 1]) / b[i];
    }
    return x;
  }, ["a", "b", "c", "d", "x", "n"]),
  "{ :a :b :c :d :x :n |\n\t\t<primitive:\n\t\tlet a = _a, b = _b, c = _c, d = _d, x = _x, n = _n;\n\t\tfor (let i = 1; i < n; i++) {\n\t\t\tlet m = a[i] / b[i - 1];\n\t\t\tb[i] -= m * c[i - 1];\n\t\t\td[i] -= m * d[i - 1];\n\t\t}\n\t\tx[n - 1] = d[n - 1] / b[n - 1];\n\t\tfor (let i = n - 2; i >= 0; i--) {\n\t\t\tx[i] = (d[i] - c[i] * x[i + 1]) / b[i];\n\t\t};\n\t\treturn x\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MatrixFunctions",
  "thomasAlgorithm",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    let _x = _List_1(_n);
    /* Statements */
    _thomasAlgorithm_6(_a, _b, _c, _d, _x, _n);
    return _x;
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d |\n\t\tlet n = a.size;\n\t\tlet x = List(n);\n\t\tthomasAlgorithm(a, b, c, d, x, n);\n\t\tx\n\t}",
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
      _to_2(1, _size_1(_r)),
      _to_2(1, _size_1(_c)),
    );
  }, ["c", "r"]),
  "{ :c :r |\n\t\t{ :i :j |\n\t\t\t(i >= j).if {\n\t\t\t\tc[i - j + 1]\n\t\t\t} {\n\t\t\t\tr[j - i + 1]\n\t\t\t}\n\t\t}.table(1.to(r.size), 1.to(c.size))\n\t}",
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
                _to_2(1, _limit),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _atPath_2(_self, _List_2(_rank, _each));
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
  "{ :self :aBlock:/1 |\n\t\tself.isVector.if {\n\t\t\taBlock(self)\n\t\t} {\n\t\t\tself.isArray.if {\n\t\t\t\tlet rank = self.rank;\n\t\t\t\tlet limit = self.shape.min;\n\t\t\t\taBlock(\n\t\t\t\t\t1.to(limit).collect { :each |\n\t\t\t\t\t\tself.atPath(List(rank, each))\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.error('List>>trace: not an Array')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.trace(sum:/1)\n\t}",
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
    let __SplVar30 = _assertIsOfSize_2(_shape_1(_m), 2);
    let _r = _at_2(__SplVar30, 1);
    let _c = _at_2(__SplVar30, 2);
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
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('List>>upperTriangularize');\n\t\tlet [r, c] = m.shape;\n\t\t(2 - k).toDo(r) { :i |\n\t\t\t1.toDo(i - 1 + k) { :j |\n\t\t\t\tm[i][j] := 0\n\t\t\t}\n\t\t};\n\t\tm\n\t}",
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
  "{ :self |\n\t\tself.upperTriangularize(0)\n\t}",
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
      _to_2(1, _n),
      _to_2(0, _m),
    );
  }, ["x", "k"]),
  "{ :x :k |\n\t\tlet n = x.size;\n\t\tlet m = k - 1;\n\t\t{ :i :j |\n\t\t\tx[i] ^ j\n\t\t}.table(1.to(n), 0.to(m))\n\t}",
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
  "{ :x |\n\t\tx.vandermondeMatrix(x.size)\n\t}",
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
    _toDo_3(
      1,
      _self,
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
  "{ :self |\n\t\tlet answer = [self, self].zeroMatrix;\n\t\t1.toDo(self) { :each |\n\t\t\tanswer[self - each + 1][each] := 1\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :n |\n\t\t(n = 0).if {\n\t\t\t[1]\n\t\t} {\n\t\t\t(n = 2).if {\n\t\t\t\t[1 1; 1 -1]\n\t\t\t} {\n\t\t\t\tn.isPowerOfTwo.if {\n\t\t\t\t\t[1 1; 1 -1].kroneckerProduct((n / 2).hadamardMatrix)\n\t\t\t\t} {\n\t\t\t\t\tn.error('@Integer>>hadamardMatrix: not power of two')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
    return _hankelMatrix_1(_iota_1(_n));
  }, ["n"]),
  "{ :n |\n\t\tn.iota.hankelMatrix\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "hilbertMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hilbertMatrix_1([_self, _self]);
  }, ["self"]),
  "{ :self |\n\t\t[self, self].hilbertMatrix\n\t}",
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
    let _m = _to_2(0, _hyphenMinus_2(_n, 1));
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
  "{ :n :l |\n\t\tlet m = 0.to(n - 1);\n\t\tl.caseOf([\n\t\t\t'LowerTriangular' -> { binomial:/2 },\n\t\t\t'UpperTriangular' -> { binomial:/2.swap },\n\t\t\t'Symmetric' -> {\n\t\t\t\t{ :i :j |\n\t\t\t\t\tbinomial(i + j, j)\n\t\t\t\t}\n\t\t\t}\n\t\t]).table(m, m)\n\t}",
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
  "{ :n |\n\t\tpascalMatrix(n, 'Symmetric')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MatrixFunctions",
  "walshFunction",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_walshMatrix_1(_circumflexAccent_2(2, _n)), _m);
  }, ["n", "m"]),
  "{ :n :m |\n\t\t(2 ^ n).walshMatrix.at(m)\n\t}",
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
    return _atAll_2(_h, _p);
  }, ["n"]),
  "{ :n |\n\t\tlet h = n.hadamardMatrix;\n\t\tlet z = h.collect(zeroCrossingCount:/1);\n\t\tlet p = z.ordering;\n\t\th.atAll(p)\n\t}",
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
  "{ :self |\n\t\tlet n = 2 * self;\n\t\t[\n\t\t\t[n.cos, n.sin],\n\t\t\t[n.sin, n.cos.negate]\n\t\t]\n\t}",
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
  "{ :self :vector |\n\t\tvector.caseOf([\n\t\t\t[1 0 0] -> {\n\t\t\t\t[\n\t\t\t\t\t[1,0,0],\n\t\t\t\t\t[0,self.cos,0 - self.sin],\n\t\t\t\t\t[0,self.sin,self.cos]\n\t\t\t\t]\n\t\t\t},\n\t\t\t[0 1 0] -> {\n\t\t\t\t[\n\t\t\t\t\t[self.cos,0,self.sin],\n\t\t\t\t\t[0,1,0],\n\t\t\t\t\t[0 - self.sin,0,self.cos]\n\t\t\t\t]\n\t\t\t},\n\t\t\t[0 0 1] -> {\n\t\t\t\t[\n\t\t\t\t\t[self.cos,0 - self.sin,0],\n\t\t\t\t\t[self.sin,self.cos,0],\n\t\t\t\t\t[0,0,1]\n\t\t\t\t]\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('rotationMatrix: vector not axis aligned')\n\t\t}\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t[self.cos, self.sin.negate],\n\t\t\t[self.sin, self.cos]\n\t\t]\n\t}",
);
