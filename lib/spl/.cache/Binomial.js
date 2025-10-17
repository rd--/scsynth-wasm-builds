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
  "{ :n |\n\t\tlet b = (n + 1).bernoulliSequence;\n\t\tlet c = 0:n.collect { :k |\n\t\t\tbinomial(n, k) * b[k + 1]\n\t\t};\n\t\tUnivariatePolynomial(c.reverse)\n\t}",
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
  "{ :n :k |\n\t\tk.isCollection.if {\n\t\t\tk.adaptToNumberAndApply(n, binomial:/2)\n\t\t} {\n\t\t\t(\n\t\t\t\tn.isNonNegativeInteger & {\n\t\t\t\t\tk.isNonNegativeInteger & {\n\t\t\t\t\t\tk <= n\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tn.asLargeInteger.integerBinomial(k).normal\n\t\t\t} {\n\t\t\t\tn.binomialGamma(k)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :n :k |\n\t\tlet a = (n + 1).gamma;\n\t\tlet b = (k + 1).gamma;\n\t\tlet c = (n - k + 1).gamma;\n\t\ta / (b * c)\n\t}",
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
  "{ :a :b |\n\t\tlet answer = 1;\n\t\t0.toDo(b - 1) { :i |\n\t\t\tanswer := answer * (a - i) / (i + 1)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :n :k |\n\t\t(0 .. n).sum { :i |\n\t\t\tbinomial(n, i)\n\t\t\t*\n\t\t\tbinomial(n - i, k - (2 * i))\n\t\t}\n\t}",
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
    return _triangularArray_2(
      _Span_3(0, _m, 1),
      sl.annotateFunction(function (_n, _k) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _n, _k";
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
      }, ["n", "k"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = self - 1;\n\t\t0:m.triangularArray { :n :k |\n\t\t\t0:k.collect { :p |\n\t\t\t\tn.binomial(p)\n\t\t\t}.sum\n\t\t}\n\t}",
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
  "{ :self |\n\t\t(self.one / (self + 1)) * (2 * self).binomial(self)\n\t}",
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
  "{ :r |\n\t\t{ :x |\n\t\t\tlet y = x.accumulate;\n\t\t\ty ++ [y.last]\n\t\t}.nestList([1], r)\n\t}",
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
  "{ :n :k |\n\t\t((n - k + 1) / (n + 1)) * (n + k).binomial(k)\n\t}",
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
  "{ :n |\n\t\t(3 * n.square) - (3 * n) + 1\n\t}",
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
  "{ :k :n |\n\t\t((k * n) / 2) * (n - 1) + 1\n\t}",
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
            _integerBinomial_2(_hyphenMinus_2(_plusSign_2(_m, _n), _k), _m),
            _integerBinomial_2(_m, _k),
          );
        }, ["k"]),
      ),
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\t(0 .. m.min(n)).collect { :k |\n\t\t\t(m + n - k).integerBinomial(m) * m.integerBinomial(k)\n\t\t}.sum\n\t}",
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
  "{ :k |\n\t\tlet answer = [];\n\t\tk.antidiagonalIndicesDo { :m :n |\n\t\t\tanswer.add(delannoyNumber(m - 1, n - 1))\n\t\t};\n\t\tanswer\n\t}",
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
                          _integerBinomial_2(
                            _asterisk_2(2, _n),
                            _asterisk_2(2, _k),
                          ),
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
  "{ :self |\n\t\tself.isOdd.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet f:/1 = { :m |\n\t\t\t\tlet n = m / 2;\n\t\t\t\t(n = 0).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t1:n.collect { :k |\n\t\t\t\t\t\tintegerBinomial(2 * n, 2 * k) * f(2 * (n - k))\n\t\t\t\t\t}.sum.negate\n\t\t\t\t}\n\t\t\t}.memoize(false);\n\t\t\tf(self)\n\t\t}\n\t}",
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
  "{ :n |\n\t\tlinearRecurrence([1 2 -2 -1 1], [0 1 2 5 7], n)\n\t}",
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
  "{ :n |\n\t\tlet m = 2 * n;\n\t\t(m * (m - 1)) / 2\n\t}",
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
  "{ :n :k |\n\t\tlet numerator = 1L;\n\t\tlet denominator = 1L;\n\t\tn.toByDo(k.max(n - k) + 1, -1) { :factor |\n\t\t\tnumerator := numerator * factor\n\t\t};\n\t\t1.toDo(k.min(n - k)) { :factor |\n\t\t\tdenominator := denominator * factor\n\t\t};\n\t\tnumerator // denominator\n\t}",
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
  "{ :m |\n\t\tlet a = List(m, m.one);\n\t\t2.toDo(m) { :n |\n\t\t\tlet z = (1 .. (n - 1)).collect { :j |\n\t\t\t\t-1 ^ j * (2 * n - 1).binomial(2 * j - 1) * a[j] * (n - j).catalanNumber\n\t\t\t}.sum;\n\t\t\ta[n] := -1 ^ (n - 1) * (n.catalanNumber + z)\n\t\t};\n\t\ta[m]\n\t}",
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
    return _triangularArray_2(
      _Span_3(1, _self, 1),
      sl.annotateFunction(function (_n, _k) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _n, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(1, _asterisk_2(_binomial_2(_n, _k), _k));
      }, ["n", "k"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t1:self.triangularArray { :n :k |\n\t\t\tFraction(1, n.binomial(k) * k)\n\t\t}\n\t}",
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
  "{ :m :n |\n\t\tm.betweenAnd(0, n).if {\n\t\t\t((2 * n).binomial(m + n) * (2 * m + 1)) // (m + n + 1)\n\t\t} {\n\t\t\t'@Integer>>lobbNumber: domain error'.error\n\t\t}\n\t}",
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
  "{ :n |\n\t\t(2 ^ n) - 1\n\t}",
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
  "{ :n :k |\n\t\t[n - 1, k].multinomial\n\t}",
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
  "{ :n :k |\n\t\tk.betweenAnd(1, n).if {\n\t\t\tn.binomial(k) * binomial(n, k - 1) // n\n\t\t} {\n\t\t\t'narayanaNumber: domain error'.error\n\t\t}\n\t}",
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
    } /* Statements */
    return _triangularArray_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_self, 1)),
      _binomial_2,
    );
  }, ["self"]),
  "{ :self |\n\t\t(0 .. self - 1).triangularArray(binomial:/2)\n\t}",
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
  "{ :self :anInteger |\n\t\tlet p = { :n :k |\n\t\t\t(k > n).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(k = n).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t(k = 0).if {\n\t\t\t\t\t\t0\n\t\t\t\t\t} {\n\t\t\t\t\t\tp(n - 1, k - 1) + p(n - k, k)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp(self, anInteger)\n\t}",
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
  "{ :n |\n\t\tlet a = List(n + 1);\n\t\ta[1] := 1L;\n\t\t1.toDo(n) { :i |\n\t\t\tlet k = 1;\n\t\t\tlet s = 1;\n\t\t\ta[i + 1] := 0L;\n\t\t\t{\n\t\t\t\ts <= i\n\t\t\t}.whileTrue {\n\t\t\t\tk.isOdd.if {\n\t\t\t\t\ta[i + 1] := a[i + 1] + a[i - s + 1]\n\t\t\t\t} {\n\t\t\t\t\ta[i + 1] := a[i + 1] - a[i - s + 1]\n\t\t\t\t};\n\t\t\t\t(k > 0).if {\n\t\t\t\t\ts := s + k;\n\t\t\t\t\tk := k.-\n\t\t\t\t} {\n\t\t\t\t\tk := 1 - k;\n\t\t\t\t\ts := k * (3 * k - 1) / 2\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ta[n + 1]\n\t}",
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
  "{ :n |\n\t\t(n < 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t1:n.sum { :k |\n\t\t\t\tpartitionFunctionQ(n, k)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :n :k |\n\t\tpartitionFunctionP(n - k.binomial(2), k)\n\t}",
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
  "{ :n |\n\t\tn.partitionFunctionP\n\t}",
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
  "{ :n |\n\t\tn.partitionFunctionQ\n\t}",
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
  "{ :n |\n\t\t(3 * n.square - n) / 2\n\t}",
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
  "{ :n |\n\t\tbinomial(n + 1, 2)\n\t}",
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
  "{ :r |\n\t\t{ :n |\n\t\t\t((3 * n.square) + (n.cube * (r - 2)) - (n * (r - 5))) / 6\n\t\t}\n\t}",
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
  "{ :r :n |\n\t\tlet f:/1 = r.pyramidalNumber;\n\t\tn.isCollection.if {\n\t\t\tn.collect(f:/1)\n\t\t} {\n\t\t\tf(n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qBinomialDirect",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _product_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_m, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polynomial_1(_Map_1([[0, 1], [_hyphenMinus_2(_n, _i), -1]]));
      }, ["i"]),
    );
    let _b = _product_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_m, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polynomial_1(_Map_1([[0, 1], [_plusSign_2(_i, 1), -1]]));
      }, ["i"]),
    );
    /* Statements */
    return _polynomialQuotient_2(_a, _b);
  }, ["n", "m"]),
  "{ :n :m |\n\t\tlet a = (0 .. m - 1).product { :i |\n\t\t\tPolynomial([0: 1, (n - i): -1])\n\t\t};\n\t\tlet b = (0 .. m - 1).product { :i |\n\t\t\tPolynomial([0: 1, (i + 1): -1])\n\t\t};\n\t\ta.polynomialQuotient(b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qBinomialCyclotomic",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_m, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polynomial_1([]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Polynomial_1([1]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _product_2(
              _Span_3(2, _n, 1),
              sl.annotateFunction(function (_d) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _d";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _a = _floor_1(_solidus_2(_n, _d));
                let _b = _floor_1(_solidus_2(_m, _d));
                let _c = _floor_1(_solidus_2(_hyphenMinus_2(_n, _m), _d));
                /* Statements */
                return _if_3(
                  _equalsSign_2(_a, _plusSign_2(_b, _c)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _Polynomial_1([1]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _cyclotomic_1(_d);
                  }, []),
                );
              }, ["d"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "m"]),
  "{ :n :m |\n\t\t/* https://arminstraub.com/math/qbinomials-mma */\n\t\t(m > n).if {\n\t\t\tPolynomial([])\n\t\t} {\n\t\t\t(n < 2).if {\n\t\t\t\tPolynomial([1])\n\t\t\t} {\n\t\t\t\t2:n.product { :d |\n\t\t\t\t\tlet a = floor(n / d);\n\t\t\t\t\tlet b = floor(m / d);\n\t\t\t\t\tlet c = floor((n - m) / d);\n\t\t\t\t\t(a = (b + c)).if {\n\t\t\t\t\t\tPolynomial([1])\n\t\t\t\t\t} {\n\t\t\t\t\t\tcyclotomic(d)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qBinomial",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _qBinomialCyclotomic_2(_n, _m);
  }, ["n", "m"]),
  "{ :n :m |\n\t\tqBinomialCyclotomic(n, m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qBinomial",
  ["n", "m", "q"],
  sl.annotateFunction(function (_n, _m, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _m, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_qBinomial_2(_n, _m), _q);
  }, ["n", "m", "q"]),
  "{ :n :m :q |\n\t\tqBinomial(n, m).at(q)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qFactorial",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polynomial_1([1]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_2(
          _Span_3(2, _n, 1),
          sl.annotateFunction(function (_d) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _d";
              throw new Error(errorMessage);
            } /* Statements */
            return _circumflexAccent_2(
              _cyclotomic_1(_d),
              _floor_1(_solidus_2(_n, _d)),
            );
          }, ["d"]),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t/* https://arminstraub.com/math/qbinomials-mma */\n\t\t(n < 2).if {\n\t\t\tPolynomial([1])\n\t\t} {\n\t\t\t2:n.product { :d |\n\t\t\t\td.cyclotomic ^ floor(n / d)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "qFactorial",
  ["n", "q"],
  sl.annotateFunction(function (_n, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_qFactorial_1(_n), _q);
  }, ["n", "q"]),
  "{ :n :q |\n\t\tn.qFactorial.at(q)\n\t}",
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
  "{ :self |\n\t\t(0 .. self).collect { :each |\n\t\t\teach.factorial * (-1 ^ (self - each)) * self.binomial(each)\n\t\t}.sum\n\t}",
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
  "{ :self |\n\t\tlet f = { :n |\n\t\t\t(n <= 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t((3 * (2 * n - 3) * f(n - 1)) - ((n - 3) * f(n - 2))) / n\n\t\t\t}\n\t\t};\n\t\tf:/1.memoize(true).value(self)\n\t}",
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
  "{ :n :k |\n\t\t(k > n).if {\n\t\t\t0\n\t\t} {\n\t\t\tn.integerBinomial(k)\n\t\t}\n\t}",
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
  "{ :n |\n\t\t1:n.collect { :k |\n\t\t\t(k * (k + 1)) / 2\n\t\t}.sum\n\t}",
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
  "{ :n |\n\t\t(n + 1).binomial(2)\n\t}",
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
  "{ :self |\n\t\tself.sum.factorialOrGamma / self.factorialOrGamma.product\n\t}",
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
  "{ :n |\n\t\t(0L .. n).collect { :k |\n\t\t\tbinomial(n, k) % 2L\n\t\t}.sum\n\t}",
);
