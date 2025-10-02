/*  Requires: Collection Integer Number  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "bernoulliPolynomial",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _bernoulliSequence_1(_plusSign_2(_n, 1));
    let _c = _collect_2(
      _Span_3(0, _n, 1),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_binomial_2(_n, _k), _at_2(_b, _plusSign_2(_k, 1)));
      }, ["k"]),
    );
    /* Statements */
    return _UnivariatePolynomial_1(_reverse_1(_c));
  }, ["n"]),
  "{ :n | let b = bernoulliSequence((+(n, 1))); let c = collect(Span(0, n, 1), { :k | *(binomial(n, k), at(b, +(k, 1))) }); UnivariatePolynomial(reverse(c)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "binomial",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_k, _n, _binomial_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _isNonNegativeInteger_1(_n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _isNonNegativeInteger_1(_k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSignEqualsSign_2(_k, _n);
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
            return _normal_1(_integerBinomial_2(_asLargeInteger_1(_n), _k));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _binomialGamma_2(_n, _k);
          }, []),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k | if(isCollection(k), { adaptToNumberAndApply(k,n, binomial:/2) }, { if((&(isNonNegativeInteger(n), { &(isNonNegativeInteger(k), { <=(k, n) }) })), { normal(integerBinomial(asLargeInteger(n),k)) }, { binomialGamma(n,k) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "binomialGamma",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _gamma_1(_plusSign_2(_n, 1));
    let _b = _gamma_1(_plusSign_2(_k, 1));
    let _c = _gamma_1(_plusSign_2(_hyphenMinus_2(_n, _k), 1));
    /* Statements */
    return _solidus_2(_a, _asterisk_2(_b, _c));
  }, ["n", "k"]),
  "{ :n :k | let a = gamma((+(n, 1))); let b = gamma((+(k, 1))); let c = gamma((+(-(n, k), 1))); /(a, (*(b, c))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "binomialPascal",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 1;
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_b, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _solidus_2(
          _asterisk_2(_answer, _hyphenMinus_2(_a, _i)),
          _plusSign_2(_i, 1),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["a", "b"]),
  "{ :a :b | let answer = 1; toDo(0, -(b, 1), { :i | answer := /(*(answer, (-(a, i))), (+(i, 1))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "trinomial",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _upOrDownTo_2(0, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _binomial_2(_n, _i),
          _binomial_2(
            _hyphenMinus_2(_n, _i),
            _hyphenMinus_2(_k, _asterisk_2(2, _i)),
          ),
        );
      }, ["i"]),
    );
  }, ["n", "k"]),
  "{ :n :k | sum(upOrDownTo(0, n), { :i | *(binomial(n, i), binomial(-(n, i), -(k, (*(2, i))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "bernoulliTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _hyphenMinus_2(_self, 1);
    /* Statements */
    return _collect_2(
      _Span_3(0, _m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _Span_3(0, _n, 1),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_1(
              _collect_2(
                _Span_3(0, _k, 1),
                sl.annotateFunction(function (_p) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _p";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _binomial_2(_n, _p);
                }, ["p"]),
              ),
            );
          }, ["k"]),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | let m = -(self, 1); collect(Span(0, m, 1), { :n | collect(Span(0, n, 1), { :k | sum(collect(Span(0, k, 1), { :p | binomial(n,p) })) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "catalanNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(_one_1(_self), _plusSign_2(_self, 1)),
      _binomial_2(_asterisk_2(2, _self), _self),
    );
  }, ["self"]),
  "{ :self | *((/(one(self), (+(self, 1)))), binomial((*(2, self)),self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "catalanTriangle",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _accumulate_1(_x);
        /* Statements */
        return _plusSignPlusSign_2(_y, [_last_1(_y)]);
      }, ["x"]),
      [1],
      _r,
    );
  }, ["r"]),
  "{ :r | nestList({ :x | let y = accumulate(x); ++(y, [last(y)]) },[1], r) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "catalanTriangle",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(_plusSign_2(_hyphenMinus_2(_n, _k), 1), _plusSign_2(_n, 1)),
      _binomial_2(_plusSign_2(_n, _k), _k),
    );
  }, ["n", "k"]),
  "{ :n :k | *((/((+(-(n, k), 1)), (+(n, 1)))), binomial((+(n, k)),k)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "centeredHexagonalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(_asterisk_2(3, _square_1(_n)), _asterisk_2(3, _n)),
      1,
    );
  }, ["n"]),
  "{ :n | +(-((*(3, square(n))), (*(3, n))), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "centeredPolygonalNumber",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_solidus_2(_asterisk_2(_k, _n), 2), _hyphenMinus_2(_n, 1)),
      1,
    );
  }, ["k", "n"]),
  "{ :k :n | +(*((/((*(k, n)), 2)), (-(n, 1))), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "delannoyNumber",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _collect_2(
        _upOrDownTo_2(0, _min_2(_m, _n)),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _binomial_2(_hyphenMinus_2(_plusSign_2(_m, _n), _k), _m),
            _binomial_2(_m, _k),
          );
        }, ["k"]),
      ),
    );
  }, ["m", "n"]),
  "{ :m :n | sum(collect(upOrDownTo(0, min(m,n)), { :k | *(binomial((-(+(m, n), k)),m), binomial(m,k)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "delannoySequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _antidiagonalIndicesDo_2(
      _k,
      sl.annotateFunction(function (_m, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _m, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _delannoyNumber_2(_hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, 1)),
        );
      }, ["m", "n"]),
    );
    return _answer;
  }, ["k"]),
  "{ :k | let answer = []; antidiagonalIndicesDo(k, { :m :n | add(answer,delannoyNumber(-(m, 1), -(n, 1))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "eulerNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOdd_1(_self),
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
        let _f_1 = _memoize_2(
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _solidus_2(_m, 2);
            /* Statements */
            return _if_3(
              _equalsSign_2(_n, 0),
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
                return _negate_1(
                  _sum_1(
                    _collect_2(
                      _Span_3(1, _n, 1),
                      sl.annotateFunction(function (_k) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _k";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _asterisk_2(
                          _binomial_2(_asterisk_2(2, _n), _asterisk_2(2, _k)),
                          _f_1(_asterisk_2(2, _hyphenMinus_2(_n, _k))),
                        );
                      }, ["k"]),
                    ),
                  ),
                );
              }, []),
            );
          }, ["m"]),
          false,
        );
        /* Statements */
        return _f_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isOdd(self), { 0 }, { let f:/1 = memoize({ :m | let n = /(m, 2); if((=(n, 0)), { 1 }, { negate(sum(collect(Span(1, n, 1), { :k | *(binomial(*(2, n), *(2, k)), f(*(2, (-(n, k))))) }))) }) },false); f(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "generalizedPentagonalNumbers",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([1, 2, -2, -1, 1], [0, 1, 2, 5, 7], _n);
  }, ["n"]),
  "{ :n | linearRecurrence([1, 2, -2, -1, 1], [0, 1, 2, 5, 7], n) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "hexagonalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _asterisk_2(2, _n);
    /* Statements */
    return _solidus_2(_asterisk_2(_m, _hyphenMinus_2(_m, 1)), 2);
  }, ["n"]),
  "{ :n | let m = *(2, n); /((*(m, (-(m, 1)))), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "integerBinomial",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numerator = 1n;
    let _denominator = 1n;
    /* Statements */
    _toByDo_4(
      _n,
      _plusSign_2(_max_2(_k, _hyphenMinus_2(_n, _k)), 1),
      -1,
      sl.annotateFunction(function (_factor) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _factor";
          throw new Error(errorMessage);
        } /* Statements */
        return _numerator = _asterisk_2(_numerator, _factor);
      }, ["factor"]),
    );
    _toDo_3(
      1,
      _min_2(_k, _hyphenMinus_2(_n, _k)),
      sl.annotateFunction(function (_factor) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _factor";
          throw new Error(errorMessage);
        } /* Statements */
        return _denominator = _asterisk_2(_denominator, _factor);
      }, ["factor"]),
    );
    return _solidusSolidus_2(_numerator, _denominator);
  }, ["n", "k"]),
  "{ :n :k | let numerator = 1L; let denominator = 1L; toByDo(n, +(max(k,-(n, k)), 1), -1, { :factor | numerator := *(numerator, factor) }); toDo(1, min(k,-(n, k)), { :factor | denominator := *(denominator, factor) }); //(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "lassalleNumber",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_m, _one_1(_m));
    /* Statements */
    _toDo_3(
      2,
      _m,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _sum_1(
          _collect_2(
            _upOrDownTo_2(1, _hyphenMinus_2(_n, 1)),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _asterisk_2(
                  _asterisk_2(
                    _circumflexAccent_2(-1, _j),
                    _binomial_2(
                      _hyphenMinus_2(_asterisk_2(2, _n), 1),
                      _hyphenMinus_2(_asterisk_2(2, _j), 1),
                    ),
                  ),
                  _at_2(_a, _j),
                ),
                _catalanNumber_1(_hyphenMinus_2(_n, _j)),
              );
            }, ["j"]),
          ),
        );
        /* Statements */
        return _atPut_3(
          _a,
          _n,
          _asterisk_2(
            _circumflexAccent_2(-1, _hyphenMinus_2(_n, 1)),
            _plusSign_2(_catalanNumber_1(_n), _z),
          ),
        );
      }, ["n"]),
    );
    return _at_2(_a, _m);
  }, ["m"]),
  "{ :m | let a = List(m, one(m)); toDo(2, m, { :n | let z = sum(collect(upOrDownTo(1, (-(n, 1))), { :j | *(*(*(^(-1, j), binomial((-(*(2, n), 1)),-(*(2, j), 1))), at(a, j)), catalanNumber((-(n, j)))) })); atPut(a, n, *(^(-1, (-(n, 1))), (+(catalanNumber(n), z)))) }); at(a, m) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "leibnizHarmonicTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _Span_3(1, _self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _Span_3(1, _n, 1),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _Fraction_2(1, _asterisk_2(_binomial_2(_n, _k), _k));
          }, ["k"]),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | collect(Span(1, self, 1), { :n | collect(Span(1, n, 1), { :k | Fraction(1, *(binomial(n,k), k)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "lobbNumber",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_m, 0, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidusSolidus_2(
          _asterisk_2(
            _binomial_2(_asterisk_2(2, _n), _plusSign_2(_m, _n)),
            _plusSign_2(_asterisk_2(2, _m), 1),
          ),
          _plusSign_2(_plusSign_2(_m, _n), 1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Integer>>lobbNumber: domain error");
      }, []),
    );
  }, ["m", "n"]),
  "{ :m :n | if(betweenAnd(m,0, n), { //((*(binomial((*(2, n)),+(m, n)), (+(*(2, m), 1)))), (+(+(m, n), 1))) }, { error('@Integer>>lobbNumber: domain error') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "mersenneNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_circumflexAccent_2(2, _n), 1);
  }, ["n"]),
  "{ :n | -((^(2, n)), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "multichoose",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _multinomial_1([_hyphenMinus_2(_n, 1), _k]);
  }, ["n", "k"]),
  "{ :n :k | multinomial([-(n, 1), k]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "narayanaNumber",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_k, 1, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidusSolidus_2(
          _asterisk_2(
            _binomial_2(_n, _k),
            _binomial_2(_n, _hyphenMinus_2(_k, 1)),
          ),
          _n,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("narayanaNumber: domain error");
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k | if(betweenAnd(k,1, n), { //(*(binomial(n,k), binomial(n, -(k, 1))), n) }, { error('narayanaNumber: domain error') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "pascalTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _hyphenMinus_2(_self, 1);
    /* Statements */
    return _collect_2(
      _Span_3(0, _m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _Span_3(0, _n, 1),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _binomial_2(_n, _k);
          }, ["k"]),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | let m = -(self, 1); collect(Span(0, m, 1), { :n | collect(Span(0, n, 1), { :k | binomial(n,k) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
  "{ :self :anInteger | let p = { :n :k | if((>(k, n)), { 0 }, { if((=(k, n)), { 1 }, { if((=(k, 0)), { 0 }, { +(p(-(n, 1), -(k, 1)), p(-(n, k), k)) }) }) }) }; p(self, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
  "{ :n | let a = List(+(n, 1)); atPut(a, 1, 1L); toDo(1, n, { :i | let k = 1; let s = 1; atPut(a, +(i, 1), 0L); whileTrue({ <=(s, i) }, { if(isOdd(k), { atPut(a, +(i, 1), +(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }, { atPut(a, +(i, 1), -(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }); if((>(k, 0)), { s := +(s, k); k := -(k) }, { k := -(1, k); s := /(*(k, (-(*(3, k), 1))), 2) }) }) }); at(a, +(n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
          _Span_3(1, _n, 1),
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
  "{ :n | if((<(n, 1)), { 1 }, { sum(Span(1, n, 1), { :k | partitionFunctionQ(n, k) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
  "{ :n :k | partitionFunctionP(-(n, binomial(k,2)), k) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
  "{ :n | partitionFunctionP(n) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
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
  "{ :n | partitionFunctionQ(n) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "pentagonalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hyphenMinus_2(_asterisk_2(3, _square_1(_n)), _n), 2);
  }, ["n"]),
  "{ :n | /((-(*(3, square(n)), n)), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "polygonalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _binomial_2(_plusSign_2(_n, 1), 2);
  }, ["n"]),
  "{ :n | binomial(+(n, 1), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "pyramidalNumber",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _hyphenMinus_2(
          _plusSign_2(
            _asterisk_2(3, _square_1(_n)),
            _asterisk_2(_cube_1(_n), _hyphenMinus_2(_r, 2)),
          ),
          _asterisk_2(_n, _hyphenMinus_2(_r, 5)),
        ),
        6,
      );
    }, ["n"]);
  }, ["r"]),
  "{ :r | { :n | /((-(+((*(3, square(n))), (*(cube(n), (-(r, 2))))), (*(n, (-(r, 5)))))), 6) } }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "pyramidalNumber",
  ["r", "n"],
  sl.annotateFunction(function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _pyramidalNumber_1(_r);
    /* Statements */
    return _if_3(
      _isCollection_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_n, _f_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_n);
      }, []),
    );
  }, ["r", "n"]),
  "{ :r :n | let f:/1 = pyramidalNumber(r); if(isCollection(n), { collect(n,f:/1) }, { f(n) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "subfactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _collect_2(
        _upOrDownTo_2(0, _self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _asterisk_2(
              _factorial_1(_each),
              _circumflexAccent_2(-1, _hyphenMinus_2(_self, _each)),
            ),
            _binomial_2(_self, _each),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self | sum(collect(upOrDownTo(0, self), { :each | *(*(factorial(each), (^(-1, (-(self, each))))), binomial(self,each)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "superCatalanNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_n, 2),
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
          return _solidus_2(
            _hyphenMinus_2(
              _asterisk_2(
                _asterisk_2(3, _hyphenMinus_2(_asterisk_2(2, _n), 3)),
                _f_1(_hyphenMinus_2(_n, 1)),
              ),
              _asterisk_2(_hyphenMinus_2(_n, 3), _f_1(_hyphenMinus_2(_n, 2))),
            ),
            _n,
          );
        }, []),
      );
    }, ["n"]);
    /* Statements */
    return _value_2(_memoize_2(_f_1, true), _self);
  }, ["self"]),
  "{ :self | let f = { :n | if((<=(n, 2)), { 1 }, { /((-((*(*(3, (-(*(2, n), 3))), f(-(n, 1)))), (*((-(n, 3)), f(-(n, 2)))))), n) }) }; value(memoize(f:/1,true),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "take",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
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
        return _integerBinomial_2(_n, _k);
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k | if((>(k, n)), { 0 }, { integerBinomial(n,k) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "tetrahedralNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _collect_2(
        _Span_3(1, _n, 1),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_asterisk_2(_k, _plusSign_2(_k, 1)), 2);
        }, ["k"]),
      ),
    );
  }, ["n"]),
  "{ :n | sum(collect(Span(1, n, 1), { :k | /((*(k, (+(k, 1)))), 2) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "triangularNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _binomial_2(_plusSign_2(_n, 1), 2);
  }, ["n"]),
  "{ :n | binomial((+(n, 1)),2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Binomial",
  "multinomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _factorialOrGamma_1(_sum_1(_self)),
      _product_1(_factorialOrGamma_1(_self)),
    );
  }, ["self"]),
  "{ :self | /(factorialOrGamma(sum(self)), product(factorialOrGamma(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Binomial",
  "gouldsNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _collect_2(
        _upOrDownTo_2(0n, _n),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2(_binomial_2(_n, _k), 2n);
        }, ["k"]),
      ),
    );
  }, ["n"]),
  "{ :n | sum(collect(upOrDownTo(0L, n), { :k | %(binomial(n, k), 2L) })) }",
);
