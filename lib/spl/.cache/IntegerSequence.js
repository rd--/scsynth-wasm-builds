sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "noergaardInfinityNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _w = _integerDigits_2(_n, 2);
    let _a = 1;
    let _b = 0;
    /* Statements */
    _toDo_3(
      1,
      _size_1(_w),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_at_2(_w, _i), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b = _asterisk_2(_b, -1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b = _plusSign_2(_b, 1);
          }, []),
        );
      }, ["i"]),
    );
    return _clearZeroSignBit_1(_b);
  }, ["n"]),
  "{ :n |\n\t\tlet w = n.integerDigits(2);\n\t\tlet a = 1;\n\t\tlet b = 0;\n\t\t1.toDo(w.size) { :i |\n\t\t\t(w[i] = 0).if {\n\t\t\t\tb := b * -1\n\t\t\t} {\n\t\t\t\tb := b + 1\n\t\t\t}\n\t\t};\n\t\tb.clearZeroSignBit\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "aliquotSequence",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _n;
    let _b = _aliquotSum_1(_a);
    let _r = [_a];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_i, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _exclamationMarkEqualsSign_2(_b, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _not_1(_includes_2(_r, _b)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSign_2(_a, 1);
                  }, []),
                );
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
        _add_2(_r, _b);
        _i = _plusSign_2(_i, 1);
        _a = _b;
        return _ifTrue_2(
          _greaterThanSign_2(_a, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b = _aliquotSum_1(_a);
          }, []),
        );
      }, []),
    );
    return _r;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet a = n;\n\t\tlet b = a.aliquotSum;\n\t\tlet r = [a];\n\t\tlet i = 1;\n\t\t{\n\t\t\ti < k & {\n\t\t\t\tb != n & {\n\t\t\t\t\tr.includes(b).not & {\n\t\t\t\t\t\ta > 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tr.add(b);\n\t\t\ti := i + 1;\n\t\t\ta := b;\n\t\t\t(a > 0).ifTrue {\n\t\t\t\tb := a.aliquotSum\n\t\t\t}\n\t\t};\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "aliquotSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _aliquotSequence_2(_n, 21);
  }, ["n"]),
  "{ :n |\n\t\taliquotSequence(n, 21)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "baumSweetSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a_1 = _memoize_2(
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_i, 2),
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
            } /* Temporaries */
            let _k = _i;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_percentSign_2(_k, 4), 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _k = _solidus_2(_k, 4);
              }, []),
            );
            return _if_3(
              _isOdd_1(_k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _a_1(_solidus_2(_hyphenMinus_2(_k, 1), 2));
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
      }, ["i"]),
      true,
    );
    /* Statements */
    return _toCollect_3(0, _hyphenMinus_2(_n, 1), _a_1);
  }, ["n"]),
  "{ :n |\n\t\tlet a:/1 = { :i |\n\t\t\t(i < 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet k = i;\n\t\t\t\t{ (k % 4) = 0 }.whileTrue {\n\t\t\t\t\tk := k / 4\n\t\t\t\t};\n\t\t\t\tk.isOdd.if {\n\t\t\t\t\ta((k - 1) / 2)\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}.memoize(true);\n\t\t0.toCollect(n - 1, a:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "beattySequence",
  ["n", "theta"],
  sl.annotateFunction(function (_n, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_to_2(1, _n), _theta));
  }, ["n", "theta"]),
  "{ :n :theta |\n\t\t(1.to(n) * theta).floor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "bernoulliNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_bernoulliSequence_1(_plusSign_2(_k, 1)));
  }, ["k"]),
  "{ :k |\n\t\t(k + 1).bernoulliSequence.last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "bernoulliSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_k);
    let _b = _List_1(_k);
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_a, _plusSign_2(_n, 1), _Fraction_2(1, _plusSign_2(_n, 1)));
        _toByDo_4(
          _n,
          1,
          -1,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _a,
              _j,
              _asterisk_2(
                _j,
                _hyphenMinus_2(_at_2(_a, _j), _at_2(_a, _plusSign_2(_j, 1))),
              ),
            );
          }, ["j"]),
        );
        return _atPut_3(_b, _plusSign_2(_n, 1), _at_2(_a, 1));
      }, ["n"]),
    );
    _ifTrue_2(
      _greaterThanSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_b, 2, _Fraction_2(-1n, 2n));
      }, []),
    );
    return _b;
  }, ["k"]),
  "{ :k |\n\t\tlet a = List(k);\n\t\tlet b = List(k);\n\t\t0.toDo(k - 1) { :n |\n\t\t\ta[n + 1] := Fraction(1, n + 1);\n\t\t\tn.toByDo(1, -1) { :j |\n\t\t\t\ta[j] := j * (a[j] - a[j + 1])\n\t\t\t};\n\t\t\tb[n + 1] := a[1]\n\t\t};\n\t\t(k > 1).ifTrue {\n\t\t\tb[2] := -1/2\n\t\t};\n\t\tb\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "calkinWilfSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_self);
    /* Statements */
    _atPut_3(_answer, 1, _Fraction_2(1n, 1n));
    _toDo_3(
      2,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _at_2(_answer, _hyphenMinus_2(_i, 1));
        let _t = _plusSign_2(
          _hyphenMinus_2(_asterisk_2(_floor_1(_p), 2), _p),
          1,
        );
        /* Statements */
        return _atPut_3(_answer, _i, _solidus_2(1, _t));
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self);\n\t\tanswer[1] := 1/1;\n\t\t2.toDo(self) { :i |\n\t\t\tlet p = answer[i - 1];\n\t\t\tlet t = p.floor * 2 - p + 1;\n\t\t\tanswer[i] := 1 / t\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "cantorNumbers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _n = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_digitCount_3(_n, 3, 1), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _n);
          }, []),
        );
        return _n = _plusSign_2(_n, 1);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet n = 0;\n\t\t{ answer.size < self }.whileTrue {\n\t\t\t(n.digitCount(3, 1) = 0).ifTrue {\n\t\t\t\tanswer.add(n)\n\t\t\t};\n\t\t\tn := n + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "champernowneSequence",
  ["b", "n"],
  sl.annotateFunction(function (_b, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_answer, _integerDigits_2(_i, _b));
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _take_2(_answer, _n);
  }, ["b", "n"]),
  "{ :b :n |\n\t\tlet answer = [];\n\t\tlet i = 0;\n\t\t{ answer.size < n }.whileTrue {\n\t\t\tanswer.addAll(i.integerDigits(b));\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer.take(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "collatzSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestWhileList_3(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_asterisk_2(3, _n), 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(_n, 2);
          }, []),
        );
      }, ["n"]),
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 1);
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t{ :n |\n\t\t\tn.isOdd.if {\n\t\t\t\t3 * n + 1\n\t\t\t} {\n\t\t\t\tn / 2\n\t\t\t}\n\t\t}.nestWhileList(self) { :n |\n\t\t\tn > 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "connellSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      0,
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          _plusSign_2(
            _asterisk_2(2, _to_2(1, _plusSign_2(_n, 1))),
            _circumflexAccent_2(_n, 2),
          ),
          1,
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self) { :n |\n\t\t\t2 * 1.to(n + 1) + (n ^ 2) - 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "doudnaSequenceFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _integerDigits_2(_n, 2);
    let _b = _reverse_1(_a);
    let _c = _indicesOf_2(_b, 1);
    let _d = _to_2(1, _digitCount_3(_n, 2, 1));
    let _e = _plusSign_2(_hyphenMinus_2(_c, _d), 1);
    /* Statements */
    return _product_1(_prime_1(_e));
  }, ["n"]),
  "{ :n |\n\t\tlet a = n.integerDigits(2);\n\t\tlet b = a.reverse;\n\t\tlet c = b.indicesOf(1);\n\t\tlet d = 1.to(n.digitCount(2, 1));\n\t\tlet e = c - d + 1;\n\t\te.prime.product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "doudnaSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(0, _hyphenMinus_2(_n, 1), _doudnaSequenceFunction_1);
  }, ["n"]),
  "{ :n |\n\t\t0.toCollect(n - 1, doudnaSequenceFunction:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "ehrenfeuchtMycielskiSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["n"]),
  "{ :n |\n\t\t[]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "ekgSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = [1, 2];
    let _i = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = 3;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_gcd_2(_at_2(_l, _i), _k), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includes_2(_l, _k);
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
        _add_2(_l, _k);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _l;
  }, ["n"]),
  "{ :n |\n\t\tlet l = [1 2];\n\t\tlet i = 2;\n\t\t{ i < n }.whileTrue {\n\t\t\tlet k = 3;\n\t\t\t{\n\t\t\t\tgcd(l[i], k) = 1 | {\n\t\t\t\t\tl.includes(k)\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tl.add(k);\n\t\t\ti := i + 1\n\t\t};\n\t\tl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "entringerTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _memoize_1(sl.annotateFunction(function (_n, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isZero_1(_k),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _boole_1(_isZero_1(_n));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _f_2(_n, _hyphenMinus_2(_k, 1)),
            _f_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_n, _k)),
          );
        }, []),
      );
    }, ["n", "k"]));
    /* Statements */
    return _triangularArray_2(_to_2(0, _hyphenMinus_2(_self, 1)), _f_2);
  }, ["self"]),
  "{ :self |\n\t\tlet f:/2 = { :n :k |\n\t\t\tk.isZero.if {\n\t\t\t\tn.isZero.boole\n\t\t\t} {\n\t\t\t\tf(n, k - 1) + f(n - 1, n - k)\n\t\t\t}\n\t\t}.memoize;\n\t\t0.to(self - 1).triangularArray(f:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "entringerNumber",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _last_1(_entringerTriangle_1(_plusSign_2(_n, 1))),
      _plusSign_2(_k, 1),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t(n + 1).entringerTriangle.last.at(k + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "erdosSelfridgeFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _plusSign_2(_n, 2);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _factorInteger_1(_binomial_2(_m, _n));
        /* Statements */
        return _lessThanSignEqualsSign_2(_at_2(_at_2(_z, 1), 1), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _m = _plusSign_2(_m, 1);
      }, []),
    );
    return _m;
  }, ["n"]),
  "{ :n |\n\t\tlet m = n + 2;\n\t\t{\n\t\t\tlet z = factorInteger(binomial(m, n));\n\t\t\tz[1][1] <= n\n\t\t}.whileTrue {\n\t\t\tm := m + 1\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "eulerUpDownNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _abs_1(_eulerNumber_1(_n));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _plusSign_2(_n, 1);
        let _b = _circumflexAccent_2(2, _a);
        let _c = _bernoulliNumber_1(_a);
        let _d = _asterisk_2(_asterisk_2(_b, _hyphenMinus_2(_b, 1)), _c);
        /* Statements */
        return _abs_1(_solidus_2(_d, _a));
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.isEven.if {\n\t\t\tn.eulerNumber.abs\n\t\t} {\n\t\t\tlet a = n + 1;\n\t\t\tlet b = 2 ^ a;\n\t\t\tlet c = a.bernoulliNumber;\n\t\t\tlet d = b * (b - 1) * c;\n\t\t\t(d / a).abs\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "fareySequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2([0, 1, 1, _n], 4);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
    let _answer = [_Fraction_2(_a, _b)];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _floor_1(_solidus_2(_plusSign_2(_n, _b), _d));
        /* Statements */
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar2 = [
            _c,
            _d,
            _hyphenMinus_2(_asterisk_2(_k, _c), _a),
            _hyphenMinus_2(_asterisk_2(_k, _d), _b),
          ];
          /* Statements */
          _a = _at_2(__SplVar2, 1);
          _b = _at_2(__SplVar2, 2);
          _c = _at_2(__SplVar2, 3);
          return _d = _at_2(__SplVar2, 4);
        }, [])();
        return _add_2(_answer, _Fraction_2(_a, _b));
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet [a, b, c, d] = [0, 1, 1, n];\n\t\tlet answer = [Fraction(a, b)];\n\t\t{\n\t\t\tc <= n\n\t\t}.whileTrue {\n\t\t\tlet k = ((n + b) / d).floor;\n\t\t\t[a, b, c, d] := [c, d, k * c - a, k * d - b];\n\t\t\tanswer.add(Fraction(a, b))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "finesSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      0,
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(
          _collect_2(
            _to_2(0, _n),
            sl.annotateFunction(function (_m) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _m";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _asterisk_2(
                  _circumflexAccent_2(-1, _plusSign_2(_m, _n)),
                  _solidus_2(
                    _solidus_2(
                      _exclamationMark_1(_plusSign_2(_n, _m)),
                      _exclamationMark_1(_n),
                    ),
                    _exclamationMark_1(_m),
                  ),
                ),
                _solidus_2(
                  _plusSign_2(_hyphenMinus_2(_n, _m), 1),
                  _plusSign_2(_n, 1),
                ),
              );
            }, ["m"]),
          ),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self) { :n |\n\t\t\t0.to(n).collect { :m |\n\t\t\t\t(-1 ^ (m + n))\n\t\t\t\t*\n\t\t\t\t((n + m).! / n.! / m.!)\n\t\t\t\t*\n\t\t\t\t((n - m + 1) / (n + 1))\n\t\t\t}.sum\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "grahlSequenceStanely",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = 1;
        let _j = 1;
        let _b = _IdentitySet_0();
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _hyphenMinus_2(_n, _asterisk_2(2, _i)),
              0,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _at_2(
              _answer,
              _plusSign_2(_hyphenMinus_2(_n, _asterisk_2(2, _i)), 1),
            );
            let _y = _at_2(_answer, _plusSign_2(_hyphenMinus_2(_n, _i), 1));
            let _z = _hyphenMinus_2(_asterisk_2(_y, 2), _x);
            /* Statements */
            _i = _plusSign_2(_i, 1);
            return _ifTrue_2(
              _ampersand_2(
                _lessThanSignEqualsSign_2(_x, _y),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSignEqualsSign_2(_y, _z);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _include_2(_b, _z);
                return _whileTrue_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _includes_2(_b, _j);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _j = _plusSign_2(_j, 1);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
        return _add_2(_answer, _j);
      }, ["n"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\t0.toDo(self - 1) { :n |\n\t\t\tlet i = 1;\n\t\t\tlet j = 1;\n\t\t\tlet b = IdentitySet();\n\t\t\t{ n - (2 * i) >= 0 }.whileTrue {\n\t\t\t\tlet x = answer[n - (2 * i) + 1];\n\t\t\t\tlet y = answer[n - i + 1];\n\t\t\t\tlet z = (y * 2) - x;\n\t\t\t\ti := i + 1;\n\t\t\t\t(\n\t\t\t\t\tx <= y & {\n\t\t\t\t\t\ty <= z\n\t\t\t\t\t}\n\t\t\t\t).ifTrue {\n\t\t\t\t\tb.include(z);\n\t\t\t\t\t{ b.includes(j) }.whileTrue {\n\t\t\t\t\t\tj := j + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.add(j)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "grahlSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = 1;
        let _j = 1;
        let _b = _IdentitySet_0();
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _hyphenMinus_2(_n, _asterisk_2(2, _i)),
              0,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _at_2(
              _answer,
              _plusSign_2(_hyphenMinus_2(_n, _asterisk_2(2, _i)), 1),
            );
            let _y = _at_2(_answer, _plusSign_2(_hyphenMinus_2(_n, _i), 1));
            let _z = _hyphenMinus_2(_asterisk_2(_y, 2), _x);
            /* Statements */
            _include_2(_b, _z);
            _i = _plusSign_2(_i, 1);
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includes_2(_b, _j);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _remove_2(_b, _j);
                return _j = _plusSign_2(_j, 1);
              }, []),
            );
          }, []),
        );
        return _add_2(_answer, _j);
      }, ["n"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\t0.toDo(self - 1) { :n |\n\t\t\tlet i = 1;\n\t\t\tlet j = 1;\n\t\t\tlet b = IdentitySet();\n\t\t\t{ n - (2 * i) >= 0 }.whileTrue {\n\t\t\t\tlet x = answer[n - (2 * i) + 1];\n\t\t\t\tlet y = answer[n - i + 1];\n\t\t\t\tlet z = (y * 2) - x;\n\t\t\t\tb.include(z);\n\t\t\t\ti := i + 1;\n\t\t\t\t{ b.includes(j) }.whileTrue {\n\t\t\t\t\tb.remove(j);\n\t\t\t\t\tj := j + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.add(j)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "grahlSequence",
  ["self", "kind"],
  sl.annotateFunction(function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_kind, [
      _hyphenMinusGreaterThanSign_2(
        "Stanley",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _grahlSequenceStanely_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Grahl",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _grahlSequence_1(_self);
        }, []),
      ),
    ]);
  }, ["self", "kind"]),
  "{ :self :kind |\n\t\tkind.caseOf(\n\t\t\t[\n\t\t\t\t'Stanley' -> { self.grahlSequenceStanely },\n\t\t\t\t'Grahl' -> { self.grahlSequence }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gijswijtsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k_1 = sl.annotateFunction(function (_s) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _s";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = 1;
      /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _size_1(_s),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = 1;
            let _y = _last_2(_s, _m);
            let _kk = _solidusSolidus_2(_size_1(_s), _m);
            /* Statements */
            _ifTrue_2(
              _lessThanSignEqualsSign_2(_kk, _z),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_z);
              }, []),
            );
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _k = _size_1(_s);
                let _a = _plusSign_2(
                  _hyphenMinus_2(_k, _asterisk_2(_plusSign_2(_i, 1), _m)),
                  1,
                );
                let _b = _hyphenMinus_2(_k, _asterisk_2(_i, _m));
                /* Statements */
                return _ampersand_2(
                  _lessThanSign_2(_asterisk_2(_i, _m), _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_copyFromTo_3(_s, _a, _b), _y);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i = _plusSign_2(_i, 1);
              }, []),
            );
            return _z = _max_2(_z, _i);
          }, ["m"]),
        );
        return null;
      }, ["return:/1"]));
    }, ["s"]);
    let _answer = [1];
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
        return _add_2(_answer, _k_1(_answer));
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet k = { :s |\n\t\t\tlet z = 1;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t1.toDo(s.size) { :m |\n\t\t\t\t\tlet i = 1;\n\t\t\t\t\tlet y = s.last(m);\n\t\t\t\t\tlet kk = s.size // m;\n\t\t\t\t\t(kk <= z).ifTrue {\n\t\t\t\t\t\tz.return\n\t\t\t\t\t};\n\t\t\t\t\t{\n\t\t\t\t\t\tlet k = s.size;\n\t\t\t\t\t\tlet a = k - ((i + 1) * m) + 1;\n\t\t\t\t\t\tlet b = k - (i * m);\n\t\t\t\t\t\t(i * m < k) & { s.copyFromTo(a, b) = y }\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\ti := i + 1\n\t\t\t\t\t};\n\t\t\t\t\tz := max(z, i)\n\t\t\t\t};\n\t\t\t\tnil\n\t\t\t}\n\t\t};\n\t\tlet answer = [1];\n\t\t2.toDo(n) { :i |\n\t\t\tanswer.add(k(answer))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "goebelsSequence",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_m);
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _plusSign_2(_n, 1),
          _if_3(
            _lessThanSign_2(_n, 2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1n;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _sum_2(
                  _to_2(0, _hyphenMinus_2(_n, 1)),
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(
                      _at_2(_a, _plusSign_2(_k, 1)),
                      2,
                    );
                  }, ["k"]),
                ),
                _hyphenMinus_2(_n, 1),
              );
            }, []),
          ),
        );
      }, ["n"]),
    );
    return _a;
  }, ["m"]),
  "{ :m |\n\t\tlet a = List(m);\n\t\t0.toDo(m - 1) { :n |\n\t\t\ta[n + 1] := (n < 2).if {\n\t\t\t\t1L\n\t\t\t} {\n\t\t\t\t0.to(n - 1).sum { :k |\n\t\t\t\t\ta[k + 1] ^ 2\n\t\t\t\t} / (n - 1)\n\t\t\t}\n\t\t};\n\t\ta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "golombsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 1);
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
        return _atPut_3(
          _a,
          _i,
          _plusSign_2(
            1,
            _at_2(
              _a,
              _hyphenMinus_2(_i, _at_2(_a, _at_2(_a, _hyphenMinus_2(_i, 1)))),
            ),
          ),
        );
      }, ["i"]),
    );
    return _a;
  }, ["n"]),
  "{ :n |\n\t\tlet a = List(n, 1);\n\t\t2.toDo(n) { :i |\n\t\t\ta[i] := 1 + a[i - a[a[i - 1]]]\n\t\t};\n\t\ta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gouldsNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _hammingWeight_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t2 ^ self.hammingWeight\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gouldsSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(0, _hyphenMinus_2(_k, 1)), _gouldsNumber_1);
  }, ["k"]),
  "{ :k |\n\t\t0.to(k - 1).collect(gouldsNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "hammersleyPointSet",
  ["d", "n"],
  sl.annotateFunction(function (_d, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_d, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _to_2(1, _n),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return [_vanDerCorputNumber_2(_i, 2), _Fraction_2(_i, _n)];
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_d, "hammersleyPointSet");
      }, []),
    );
  }, ["d", "n"]),
  "{ :d :n |\n\t\t(d = 2).if {\n\t\t\t1.to(n).collect { :i |\n\t\t\t\t[i.vanDerCorputNumber(2), Fraction(i, n)]\n\t\t\t}\n\t\t} {\n\t\t\td.unimplementedCase('hammersleyPointSet')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmonicNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_reciprocal_1(_to_2(1, _self)));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self).reciprocal.sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmoniousNumber",
  ["d", "n"],
  sl.annotateFunction(function (_d, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = 2;
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x = _circumflexAccent_2(
          _plusSign_2(1, _x),
          _solidus_2(1, _plusSign_2(_d, 1)),
        );
      }, []),
    );
    return _x;
  }, ["d", "n"]),
  "{ :d :n |\n\t\tlet x = 2;\n\t\tn.timesRepeat {\n\t\t\tx := (1 + x) ^ (1 / (d + 1))\n\t\t};\n\t\tx\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmoniousNumber",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _harmoniousNumber_2(_d, 25);
  }, ["d"]),
  "{ :d |\n\t\td.harmoniousNumber(25)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "hofstadterQSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _memoize_2(
      sl.annotateFunction(function (_n) {
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
            return _plusSign_2(
              _f_1(_hyphenMinus_2(_n, _f_1(_hyphenMinus_2(_n, 1)))),
              _f_1(_hyphenMinus_2(_n, _f_1(_hyphenMinus_2(_n, 2)))),
            );
          }, []),
        );
      }, ["n"]),
      true,
    );
    /* Statements */
    return _collect_2(_to_2(1, _self), _f_1);
  }, ["self"]),
  "{ :self |\n\t\tlet f:/1 = { :n |\n\t\t\t(n <= 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tf(n - f(n - 1)) + f(n - f(n - 2))\n\t\t\t}\n\t\t}.memoize(true);\n\t\t1.to(self).collect(f:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "josephusProblem",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_k, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromDigits_2(_rotateLeft_2(_integerDigits_2(_n, 2), 1), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
            return _n;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _mod_2(
              _plusSign_2(_josephusProblem_2(_hyphenMinus_2(_n, 1), _k), _k),
              _n,
            );
            /* Statements */
            return _if_3(
              _exclamationMarkEqualsSign_2(_m, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _m;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _n;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t(k = 2).if {\n\t\t\tfromDigits(rotateLeft(integerDigits(n, 2), 1), 2)\n\t\t} {\n\t\t\t(n <= 1).if {\n\t\t\t\tn\n\t\t\t} {\n\t\t\t\tlet m = mod(josephusProblem(n - 1, k) + k, n);\n\t\t\t\t(m != 0).if {\n\t\t\t\t\tm\n\t\t\t\t} {\n\t\t\t\t\tn\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "josephusSequence",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = [];
    /* Statements */
    _iterate_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _rotateLeft_2(_x, _k);
        /* Statements */
        _add_2(_z, _removeLast_1(_y));
        return _y;
      }, ["x"]),
      _asList_1(_nonemptyRange_3(1, _n, 1)),
      _n,
    );
    return _z;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet z = [];\n\t\t{ :x |\n\t\t\tlet y = x.rotateLeft(k);\n\t\t\tz.add(y.removeLast);\n\t\t\ty\n\t\t}.iterate([1 .. n], n);\n\t\tz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "jugglerMap",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.5;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1.5;
      }, []),
    );
    /* Statements */
    return _floor_1(_circumflexAccent_2(_n, _e));
  }, ["n"]),
  "{ :n |\n\t\tlet e = n.isEven.if { 0.5 } { 1.5 };\n\t\t(n ^ e).floor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "jugglerSequence",
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
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = [_n];
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_n, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _jugglerMap_1(_n);
            return _add_2(_a, _n);
          }, []),
        );
        return _a;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n < 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet a = [n];\n\t\t\t{ n != 1 }.whileTrue {\n\t\t\t\tn := n.jugglerMap;\n\t\t\t\ta.add(n)\n\t\t\t};\n\t\t\ta\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "inventorySequence",
  ["terms"],
  sl.annotateFunction(function (_terms) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _terms";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _number = 0;
    let _answer = [0];
    let _inventory = _asIdentityMultiset_1([0]);
    /* Statements */
    _toDo_3(
      2,
      _terms,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _count = _occurrencesOf_2(_inventory, _number);
        /* Statements */
        _number = _if_3(
          _equalsSign_2(_count, 0),
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
            return _plusSign_2(_number, 1);
          }, []),
        );
        _add_2(_answer, _count);
        return _add_2(_inventory, _count);
      }, ["n"]),
    );
    return _answer;
  }, ["terms"]),
  "{ :terms |\n\t\tlet number = 0;\n\t\tlet answer = [0];\n\t\tlet inventory = [0].asIdentityMultiset;\n\t\t2.toDo(terms) { :n |\n\t\t\tlet count = inventory.occurrencesOf(number);\n\t\t\tnumber := (count = 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tnumber + 1\n\t\t\t};\n\t\t\tanswer.add(count);\n\t\t\tinventory.add(count)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isHarshadNumber",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _divisible_2(_self, _sum_1(_integerDigits_2(_self, _base)));
  }, ["self", "base"]),
  "{ :self :base |\n\t\tself.divisible(\n\t\t\tself.integerDigits(base).sum\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isHarshadNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isHarshadNumber_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.isHarshadNumber(10)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isPoliteNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPositive_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isPowerOfTwo_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPositive & {\n\t\t\tself.isPowerOfTwo.not\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isPracticalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _product = 1;
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(_n, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isOdd_1(_n);
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
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return true;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _factors = _factorInteger_1(_n);
            let __SplVar3 = _assertIsOfSize_2(_transpose_1(_factors), 2);
            let _p = _at_2(__SplVar3, 1);
            let _e = _at_2(__SplVar3, 2);
            let _i = 1;
            let _ok = true;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _ok,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSignEqualsSign_2(_i, _size_1(_p));
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
                  _greaterThanSign_2(
                    _at_2(_p, _i),
                    _plusSign_2(1, _divisorSigma_2(1, _product)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ok = false;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _product = _asterisk_2(
                      _product,
                      _circumflexAccent_2(_at_2(_p, _i), _at_2(_e, _i)),
                    );
                    return _i = _plusSign_2(_i, 1);
                  }, []),
                );
              }, []),
            );
            return _ok;
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet product = 1;\n\t\t(\n\t\t\tn < 1 | {\n\t\t\t\tn > 1 & {\n\t\t\t\t\tn.isOdd\n\t\t\t\t}\n\t\t\t}\n\t\t).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(n = 1).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tlet factors = factorInteger(n);\n\t\t\t\tlet [p, e] = factors.transpose;\n\t\t\t\tlet i = 1;\n\t\t\t\tlet ok = true;\n\t\t\t\t{\n\t\t\t\t\tok & {\n\t\t\t\t\t\ti <= p.size\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\t(p[i] > (1 + divisorSigma(1, product))).if {\n\t\t\t\t\t\tok := false\n\t\t\t\t\t} {\n\t\t\t\t\t\tproduct := product * (p[i] ^ e[i]);\n\t\t\t\t\t\ti := i + 1\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tok\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "jacobsthalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_circumflexAccent_2(2, _n), _circumflexAccent_2(-1, _n)),
      3,
    );
  }, ["n"]),
  "{ :n |\n\t\t((2 ^ n) - (-1 ^ n)) / 3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "kaprekarSequenceStep",
  ["self", "base", "fixedLength"],
  sl.annotateFunction(function (_self, _base, _fixedLength) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _fixedLength";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _integerDigits_2(_self, _base);
    /* Statements */
    _ifNotNil_2(
      _fixedLength,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _d = _padLeft_3(_d, [_fixedLength], 0);
      }, []),
    );
    return _hyphenMinus_2(
      _fromDigits_2(_sort_2(_d, _greaterThanSign_2), _base),
      _fromDigits_2(_sort_2(_d, _lessThanSign_2), _base),
    );
  }, ["self", "base", "fixedLength"]),
  "{ :self :base :fixedLength |\n\t\tlet d = self.integerDigits(base);\n\t\tfixedLength.ifNotNil {\n\t\t\td := d.padLeft([fixedLength], 0)\n\t\t};\n\t\td.sort(>).fromDigits(base) - d.sort(<).fromDigits(base)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "kaprekarSequence",
  ["self", "base", "fixedLength"],
  sl.annotateFunction(function (_self, _base, _fixedLength) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _fixedLength";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_answer, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _self);
        return _self = _kaprekarSequenceStep_3(_self, _base, _fixedLength);
      }, []),
    );
    return _answer;
  }, ["self", "base", "fixedLength"]),
  "{ :self :base :fixedLength |\n\t\tlet answer = [];\n\t\t{ answer.includes(self) }.whileFalse {\n\t\t\tanswer.add(self);\n\t\t\tself := self.kaprekarSequenceStep(base, fixedLength)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "kaprekarSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kaprekarSequence_3(_self, 10, null);
  }, ["self"]),
  "{ :self |\n\t\tself.kaprekarSequence(10, nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "kolakoskiSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [1, 2, 2];
    /* Statements */
    return _take_2(
      _injectInto_3(
        _asList_1(_nonemptyRange_3(3, _n, 1)),
        _a,
        sl.annotateFunction(function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(
            _i,
            _List_2(_at_2(_i, _j), _mod_3(_j, 2, 1)),
          );
        }, ["i", "j"]),
      ),
      _n,
    );
  }, ["n"]),
  "{ :n |\n\t\tlet a = [1 2 2];\n\t\t[3 .. n].injectInto(a) { :i :j |\n\t\t\ti ++ List(i[j], mod(j, 2, 1))\n\t\t}.take(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lookAndSaySequence",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _flatten_1(
          _collect_2(
            _split_2(_n, _equalsSign_2),
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return [_size_1(_x), _first_1(_x)];
            }, ["x"]),
          ),
        );
      }, ["n"]),
      [1],
      _hyphenMinus_2(_m, 1),
    );
  }, ["m"]),
  "{ :m |\n\t\t{ :n |\n\t\t\tn.split(=).collect { :x |\n\t\t\t\t[x.size, x.first]\n\t\t\t}.flatten\n\t\t}.nestList([1], m - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "mallowsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 1);
    /* Statements */
    _toDo_3(
      3,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _i,
          _plusSign_2(
            _at_2(_a, _at_2(_a, _hyphenMinus_2(_i, 2))),
            _at_2(_a, _hyphenMinus_2(_i, _at_2(_a, _hyphenMinus_2(_i, 2)))),
          ),
        );
      }, ["i"]),
    );
    return _a;
  }, ["n"]),
  "{ :n |\n\t\tlet a = List(n, 1);\n\t\t3.toDo(n) { :i |\n\t\t\ta[i] := a[a[i - 2]] + a[i - a[i - 2]]\n\t\t};\n\t\ta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "mersennePrimeExponent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2([
      2,
      3,
      5,
      7,
      13,
      17,
      19,
      31,
      61,
      89,
      107,
      127,
      521,
      607,
      1279,
      2203,
      2281,
      3217,
      4253,
      4423,
      9689,
      9941,
      11213,
      19937,
      21701,
      23209,
      44497,
      86243,
      110503,
      132049,
      216091,
      756839,
      859433,
      1257787,
      1398269,
      2976221,
      3021377,
      6972593,
      13466917,
      20996011,
      24036583,
      25964951,
      30402457,
      32582657,
      37156667,
      42643801,
      43112609,
      57885161,
      74207281,
      77232917,
    ], _self);
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\t2 3 5 7 13 17 19 31 61 89\n\t\t\t107 127 521 607 1279 2203 2281 3217 4253 4423\n\t\t\t9689 9941 11213 19937 21701 23209 44497 86243 110503 132049\n\t\t\t216091 756839 859433 1257787 1398269 2976221 3021377 6972593 13466917 20996011\n\t\t\t24036583 25964951 30402457 32582657 37156667 42643801 43112609 57885161 74207281 77232917\n\t\t].at(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "moserDeBruijnSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromDigits_2(_riffle_2(_integerDigits_2(_n, 2), [0]), 2);
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self - 1) { :n |\n\t\t\tn.integerDigits(2).riffle([0]).fromDigits(2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "motzkinNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_motzkinSequence_1(_k));
  }, ["k"]),
  "{ :k |\n\t\tk.motzkinSequence.last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "motzkinSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = [1, 1];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _solidus_2(
          _plusSign_2(_asterisk_2(2, _n), 1),
          _plusSign_2(_n, 2),
        );
        let _b = _solidus_2(
          _hyphenMinus_2(_asterisk_2(3, _n), 3),
          _plusSign_2(_n, 2),
        );
        let _c = _plusSign_2(
          _asterisk_2(_a, _at_2(_s, _n)),
          _asterisk_2(_b, _at_2(_s, _hyphenMinus_2(_n, 1))),
        );
        /* Statements */
        return _add_2(_s, _c);
      }, ["n"]),
    );
    return _s;
  }, ["k"]),
  "{ :k |\n\t\tlet s = [1, 1];\n\t\t2.toDo(k - 1) { :n |\n\t\t\tlet a = ((2 * n) + 1) / (n + 2);\n\t\t\tlet b = ((3 * n) - 3) / (n + 2);\n\t\t\tlet c = (a * s[n]) + (b * s[n - 1]);\n\t\t\ts.add(c)\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "narayanaSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1, 1];
    /* Statements */
    _toDo_3(
      4,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _plusSign_2(
            _at_2(_answer, _hyphenMinus_2(_i, 1)),
            _at_2(_answer, _hyphenMinus_2(_i, 3)),
          ),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [1 1 1];\n\t\t4.toDo(self) { :i |\n\t\t\tanswer.add(answer[i - 1] + answer[i - 3])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "noergaardInfinitySequence",
  ["self", "variant"],
  sl.annotateFunction(function (_self, _variant) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _variant";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_variant, [
      _hyphenMinusGreaterThanSign_2(
        0,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _f_1 = _memoize_2(
            sl.annotateFunction(function (_n) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _n";
                throw new Error(errorMessage);
              } /* Statements */
              return _which_1([
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_n, 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return 0;
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 2), 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(0, _f_1(_solidusSolidus_2(_n, 2)));
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 2), 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(
                      _f_1(_solidusSolidus_2(_hyphenMinus_2(_n, 1), 2)),
                      1,
                    );
                  }, []),
                ),
              ]);
            }, ["n"]),
            true,
          );
          /* Statements */
          return _toCollect_3(0, _hyphenMinus_2(_self, 1), _f_1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _f_1 = _memoize_2(
            sl.annotateFunction(function (_n) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _n";
                throw new Error(errorMessage);
              } /* Statements */
              return _which_1([
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_n, 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return 0;
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(0, _f_1(_solidusSolidus_2(_n, 3)));
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(_f_1(_solidusSolidus_2(_n, 3)), 2);
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 2);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(_f_1(_solidusSolidus_2(_n, 3)), 1);
                  }, []),
                ),
              ]);
            }, ["n"]),
            true,
          );
          /* Statements */
          return _toCollect_3(0, _hyphenMinus_2(_self, 1), _f_1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        2,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _f_1 = _memoize_2(
            sl.annotateFunction(function (_n) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _n";
                throw new Error(errorMessage);
              } /* Statements */
              return _which_1([
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_n, 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return 0;
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(0, _f_1(_solidusSolidus_2(_n, 3)));
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(_f_1(_solidusSolidus_2(_n, 3)), 3);
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_percentSign_2(_n, 3), 2);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(-2, _f_1(_solidusSolidus_2(_n, 3)));
                  }, []),
                ),
              ]);
            }, ["n"]),
            true,
          );
          /* Statements */
          return _toCollect_3(0, _hyphenMinus_2(_self, 1), _f_1);
        }, []),
      ),
    ]);
  }, ["self", "variant"]),
  "{ :self :variant |\n\t\tvariant.caseOf(\n\t\t\t[\n\t\t\t\t0 -> {\n\t\t\t\t\tlet f:/1 = { :n |\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{ n = 0 } -> { 0 },\n\t\t\t\t\t\t\t{ n % 2 = 0 } -> { 0 - f(n // 2) },\n\t\t\t\t\t\t\t{ n % 2 = 1 } -> { f((n - 1) // 2) + 1 }\n\t\t\t\t\t\t].which\n\t\t\t\t\t}.memoize(true);\n\t\t\t\t\t0.toCollect(self - 1, f:/1)\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tlet f:/1 = { :n |\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{ n = 0 } ->  { 0 },\n\t\t\t\t\t\t\t{ n % 3 = 0 } -> { 0 - f(n // 3) },\n\t\t\t\t\t\t\t{ n % 3 = 1 } -> { f(n // 3) - 2 },\n\t\t\t\t\t\t\t{ n % 3 = 2 } -> { f(n // 3) - 1 }\n\t\t\t\t\t\t].which\n\t\t\t\t\t}.memoize(true);\n\t\t\t\t\t0.toCollect(self - 1, f:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tlet f:/1 = { :n |\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{ n = 0 } ->  { 0 },\n\t\t\t\t\t\t\t{ n % 3 = 0 } -> { 0 - f(n // 3) },\n\t\t\t\t\t\t\t{ n % 3 = 1 } -> { f(n // 3) - 3 },\n\t\t\t\t\t\t\t{ n % 3 = 2 } -> { -2 - f(n // 3) }\n\t\t\t\t\t\t].which\n\t\t\t\t\t}.memoize(true);\n\t\t\t\t\t0.toCollect(self - 1, f:/1)\n\t\t\t\t}\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "noergaardInfinitySequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noergaardInfinitySequence_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.noergaardInfinitySequence(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "noergaardRhythmicInfinitySystem",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = [3];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _z,
          _fibonacci_1(
            _plusSign_2(
              _size_1(_split_2(_integerDigits_2(_i, 2), _equalsSign_2)),
              4,
            ),
          ),
        );
      }, ["i"]),
    );
    return _z;
  }, ["n"]),
  "{ :n |\n\t\tlet z = [3];\n\t\t1.toDo(n - 1) { :i |\n\t\t\tz.add(\n\t\t\t\t(i.integerDigits(2).split(=).size + 4).fibonacci\n\t\t\t)\n\t\t};\n\t\tz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "padovanSequence",
  ["self", "initial"],
  sl.annotateFunction(function (_self, _initial) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _initial";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_initial);
    /* Statements */
    _toDo_3(
      4,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _plusSign_2(
            _at_2(_answer, _hyphenMinus_2(_i, 2)),
            _at_2(_answer, _hyphenMinus_2(_i, 3)),
          ),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "initial"]),
  "{ :self :initial |\n\t\tlet answer = initial.copy;\n\t\t4.toDo(self) { :i |\n\t\t\tanswer.add(answer[i - 2] + answer[i - 3])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "padovanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 1, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.padovanSequence([1 1 1])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "periodDoublingSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _ceiling_1(_log_2(_n, 2));
    /* Statements */
    return _first_2(
      _last_1(
        _substitutionSystem_3(
          [
            _hyphenMinusGreaterThanSign_2(0, [0, 1]),
            _hyphenMinusGreaterThanSign_2(1, [0, 0]),
          ],
          [0, 1],
          _k,
        ),
      ),
      _n,
    );
  }, ["n"]),
  "{ :n |\n\t\tlet k = n.log(2).ceiling;\n\t\t[\n\t\t\t0 -> [0 1],\n\t\t\t1 -> [0 0]\n\t\t].substitutionSystem([0 1], k)\n\t\t.last\n\t\t.first(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "perrinSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [3, 0, 2]);
  }, ["self"]),
  "{ :self |\n\t\tself.padovanSequence([3 0 2])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "politeness",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_hyphenMinus_2(_count_2(_divisors_1(_n), _isOdd_1), 1), 0);
  }, ["n"]),
  "{ :n |\n\t\t(n.divisors.count(isOdd:/1) - 1).max(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "recamanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _seen = _IdentitySet_1([0]);
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _hyphenMinus_2(_at_2(_answer, _n), _n);
        /* Statements */
        _ifTrue_2(
          _verticalLine_2(
            _lessThanSignEqualsSign_2(_next, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includes_2(_seen, _next);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _next = _plusSign_2(_at_2(_answer, _n), _n);
          }, []),
        );
        _atPut_3(_answer, _plusSign_2(_n, 1), _next);
        return _include_2(_seen, _next);
      }, ["n"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self, 0);\n\t\tlet seen = IdentitySet([0]);\n\t\t1.toDo(self - 1) { :n |\n\t\t\tlet next = answer[n] - n;\n\t\t\t(\n\t\t\t\t(next <= 0) | {\n\t\t\t\t\tseen.includes(next)\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tnext := answer[n] + n\n\t\t\t};\n\t\t\tanswer[n + 1] := next;\n\t\t\tseen.include(next)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "regularPaperfoldingSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _plusSign_2(_n, 1);
        let _b = _circumflexAccent_2(2, _integerExponent_2(_a, 2));
        let _c = _solidus_2(_hyphenMinus_2(_solidus_2(_a, _b), 1), 2);
        /* Statements */
        return _boole_1(_isEven_1(_c));
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self - 1) { :n |\n\t\t\tlet a = n + 1;\n\t\t\tlet b = 2 ^ integerExponent(a, 2);\n\t\t\tlet c = ((a / b) - 1) / 2;\n\t\t\tc.isEven.boole\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "repunit",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_circumflexAccent_2(_b, _n), 1),
      _hyphenMinus_2(_b, 1),
    );
  }, ["n", "b"]),
  "{ :n :b |\n\t\t(b ^ n - 1) / (b - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "schroderNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_schroderSequence_1(_k));
  }, ["k"]),
  "{ :k |\n\t\tk.schroderSequence.last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "schroderSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = [1, 2];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _solidus_2(
          _hyphenMinus_2(_asterisk_2(6, _n), 3),
          _plusSign_2(_n, 1),
        );
        let _b = _solidus_2(_hyphenMinus_2(_n, 2), _plusSign_2(_n, 1));
        let _c = _hyphenMinus_2(
          _asterisk_2(_a, _at_2(_s, _n)),
          _asterisk_2(_b, _at_2(_s, _hyphenMinus_2(_n, 1))),
        );
        /* Statements */
        return _add_2(_s, _c);
      }, ["n"]),
    );
    return _s;
  }, ["k"]),
  "{ :k |\n\t\tlet s = [1, 2];\n\t\t2.toDo(k - 1) { :n |\n\t\t\tlet a = ((6 * n) - 3) / (n + 1);\n\t\t\tlet b = (n - 2) / (n + 1);\n\t\t\tlet c = (a * s[n]) - (b * s[n - 1]);\n\t\t\ts.add(c)\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "seidelTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _entringerTriangle_1(_self);
    /* Statements */
    _toByDo_4(
      2,
      _self,
      2,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _reverseInPlace_1(_at_2(_answer, _i));
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.entringerTriangle;\n\t\t2.toByDo(self, 2) { :i |\n\t\t\tanswer[i].reverseInPlace\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "selfCountingNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_plusSign_2(0.5, _sqrt_1(_asterisk_2(2, _n))));
  }, ["n"]),
  "{ :n |\n\t\t(0.5 + (2 * n).sqrt).floor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "selfCountingSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(1, _k, _selfCountingNumber_1);
  }, ["k"]),
  "{ :k |\n\t\t1.toCollect(k, selfCountingNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "somosSequence",
  ["k", "m"],
  sl.annotateFunction(function (_k, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_m);
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _plusSign_2(_n, 1),
          _if_3(
            _lessThanSign_2(_n, _k),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1n;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _sum_2(
                  _to_2(1, _floor_1(_solidus_2(_k, 2))),
                  sl.annotateFunction(function (_j) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _j";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _asterisk_2(
                      _at_2(_a, _plusSign_2(_hyphenMinus_2(_n, _j), 1)),
                      _at_2(
                        _a,
                        _plusSign_2(
                          _hyphenMinus_2(_n, _hyphenMinus_2(_k, _j)),
                          1,
                        ),
                      ),
                    );
                  }, ["j"]),
                ),
                _at_2(_a, _plusSign_2(_hyphenMinus_2(_n, _k), 1)),
              );
            }, []),
          ),
        );
      }, ["n"]),
    );
    return _a;
  }, ["k", "m"]),
  "{ :k :m |\n\t\tlet a = List(m);\n\t\t0.toDo(m - 1) { :n |\n\t\t\ta[n + 1] := (n < k).if {\n\t\t\t\t1L\n\t\t\t} {\n\t\t\t\t1.to((k / 2).floor).sum { :j |\n\t\t\t\t\ta[n - j + 1] * a[n - (k - j) + 1]\n\t\t\t\t} / a[n - k + 1]\n\t\t\t}\n\t\t};\n\t\ta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sortingNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _ceiling_1(_log_2(_n, 2));
    /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(_asterisk_2(_n, _m), _circumflexAccent_2(2, _m)),
      1,
    );
  }, ["n"]),
  "{ :n |\n\t\tlet m = n.log(2).ceiling;\n\t\t(n * m) - (2 ^ m) + 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "stanleySequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _n = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_digitCount_3(_n, 3, 2), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _n);
          }, []),
        );
        return _n = _plusSign_2(_n, 1);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet n = 0;\n\t\t{ answer.size < self }.whileTrue {\n\t\t\t(n.digitCount(3, 2) = 0).ifTrue {\n\t\t\t\tanswer.add(n)\n\t\t\t};\n\t\t\tn := n + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sternBrocotNumber",
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
        _lessThanSign_2(_n, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _n;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isEven_1(_n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _f_1(_solidus_2(_n, 2));
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _m = _solidus_2(_hyphenMinus_2(_n, 1), 2);
              /* Statements */
              return _plusSign_2(_f_1(_m), _f_1(_plusSign_2(_m, 1)));
            }, []),
          );
        }, []),
      );
    }, ["n"]);
    /* Statements */
    return _f_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tlet f = { :n |\n\t\t\t(n < 2).if {\n\t\t\t\tn\n\t\t\t} {\n\t\t\t\tn.isEven.if {\n\t\t\t\t\tf(n / 2)\n\t\t\t\t} {\n\t\t\t\t\tlet m = (n - 1) / 2;\n\t\t\t\t\tf(m) + f(m + 1)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sternBrocotSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1];
    let _index = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _at_2(_answer, _index);
        /* Statements */
        _add_2(
          _answer,
          _plusSign_2(_c, _at_2(_answer, _hyphenMinus_2(_index, 1))),
        );
        _add_2(_answer, _c);
        return _index = _plusSign_2(_index, 1);
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [1 1];\n\t\tlet index = 2;\n\t\t{\n\t\t\tanswer.size < n\n\t\t}.whileTrue {\n\t\t\tlet c = answer[index];\n\t\t\tanswer.add(c + answer[index - 1]);\n\t\t\tanswer.add(c);\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sylvestersSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_hyphenMinus_2(_circumflexAccent_2(_x, 2), _x), 1);
      }, ["x"]),
      2n,
      _hyphenMinus_2(_n, 1),
    );
  }, ["n"]),
  "{ :n |\n\t\t{ :x |\n\t\t\t(x ^ 2) - x + 1\n\t\t}.nestList(2L, n - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "szekeresSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_fromDigits_2(_integerDigits_2(_n, 2), 3), 1);
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self - 1) { :n |\n\t\t\tfromDigits(integerDigits(n, 2), 3) + 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "toothpickSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a_1 = _memoize_1(sl.annotateFunction(function (_n) {
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
          return 0;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _m = _circumflexAccent_2(
            2,
            _hyphenMinus_2(_size_1(_integerDigits_2(_n, 2)), 1),
          );
          let _k = _solidus_2(
            _plusSign_2(_asterisk_2(2, _circumflexAccent_2(_m, 2)), 1),
            3,
          );
          /* Statements */
          return _if_3(
            _equalsSign_2(_n, _m),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _k;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinus_2(
                _plusSign_2(
                  _plusSign_2(_k, _asterisk_2(2, _a_1(_hyphenMinus_2(_n, _m)))),
                  _a_1(_plusSign_2(_hyphenMinus_2(_n, _m), 1)),
                ),
                1,
              );
            }, []),
          );
        }, []),
      );
    }, ["n"]));
    /* Statements */
    return _toCollect_3(0, _hyphenMinus_2(_self, 1), _a_1);
  }, ["self"]),
  "{ :self |\n\t\tlet a:/1 = { :n |\n\t\t\t(n = 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet m = 2 ^ (n.integerDigits(2).size - 1);\n\t\t\t\tlet k = (2 * (m ^ 2) + 1) / 3;\n\t\t\t\t(n = m).if {\n\t\t\t\t\tk\n\t\t\t\t} {\n\t\t\t\t\tk + (2 * a(n - m)) + a(n - m + 1) - 1\n\t\t\t\t}\n\t\t\t}\n\t\t}.memoize;\n\t\t0.toCollect(self - 1, a:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "thueMorse",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_digitCount_3(_index, 2, 1), 2);
  }, ["index"]),
  "{ :index |\n\t\tindex.digitCount(2, 1) % 2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "thueMorseSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_k, 0),
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
        let _answer = _List_1(_k);
        let _i = 2;
        let _iMax = 1;
        /* Statements */
        _atPut_3(_answer, 1, 0);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _lessThanSignEqualsSign_2(_i, _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSignEqualsSign_2(_i, _asterisk_2(2, _iMax));
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(
                  _answer,
                  _i,
                  _hyphenMinus_2(1, _at_2(_answer, _hyphenMinus_2(_i, _iMax))),
                );
                return _i = _plusSign_2(_i, 1);
              }, []),
            );
            return _iMax = _asterisk_2(_iMax, 2);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["k"]),
  "{ :k |\n\t\t(k <= 0).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = List(k);\n\t\t\tlet i =2;\n\t\t\tlet iMax = 1;\n\t\t\tanswer[1] := 0;\n\t\t\t{\n\t\t\t\ti <= k\n\t\t\t}.whileTrue {\n\t\t\t\t{\n\t\t\t\t\ti <= k & {\n\t\t\t\t\t\ti <= (2 * iMax)\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tanswer[i] := 1 - answer[i - iMax];\n\t\t\t\t\ti := i + 1\n\t\t\t\t};\n\t\t\t\tiMax := iMax * 2\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "vanDerCorputNumber",
  ["n", "base"],
  sl.annotateFunction(function (_n, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = 0;
    let _q = 1;
    let _nn = _n;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_nn, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _p = _plusSign_2(_asterisk_2(_p, _base), _percentSign_2(_nn, _base));
        _q = _asterisk_2(_q, _base);
        return _nn = _solidusSolidus_2(_nn, _base);
      }, []),
    );
    return _Fraction_2(_p, _q);
  }, ["n", "base"]),
  "{ :n :base |\n\t\tlet p = 0;\n\t\tlet q = 1;\n\t\tlet nn = n;\n\t\t{\n\t\t\tnn = 0\n\t\t}.whileFalse {\n\t\t\tp := (p * base) + (nn % base);\n\t\t\tq := q * base;\n\t\t\tnn := nn // base\n\t\t};\n\t\tFraction(p, q)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "vanDerLaanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 0, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.padovanSequence([1 0 1])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "vanEckSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = [0, 0];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _findLast_2(
          _nonemptyRange_3(1, _hyphenMinus_2(_i, 1), 1),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_l, _i), _at_2(_l, _m));
          }, ["m"]),
        );
        /* Statements */
        return _add_2(
          _l,
          _if_3(
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
              return _hyphenMinus_2(_i, _k);
            }, []),
          ),
        );
      }, ["i"]),
    );
    return _l;
  }, ["n"]),
  "{ :n |\n\t\tlet l = [0 0];\n\t\t2.toDo(n - 1) { :i |\n\t\t\tlet k = (1 .. i - 1).findLast { :m |\n\t\t\t\tl[i] = l[m]\n\t\t\t};\n\t\t\tl.add(\n\t\t\t\t(k = 0).if { 0 } { i - k }\n\t\t\t)\n\t\t};\n\t\tl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "yellowstonePermutation",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = [1, 2, 3];
    let _i = 3;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = 4;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_gcd_2(_at_2(_l, _hyphenMinus_2(_i, 1)), _k), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(
                  _greaterThanSign_2(_gcd_2(_at_2(_l, _i), _k), 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _includes_2(_l, _k);
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
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        _add_2(_l, _k);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _l;
  }, ["n"]),
  "{ :n |\n\t\tlet l = [1 2 3];\n\t\tlet i = 3;\n\t\t{ i < n }.whileTrue {\n\t\t\tlet k = 4;\n\t\t\t{\n\t\t\t\tgcd(l[i - 1], k) = 1 | {\n\t\t\t\t\tgcd(l[i], k) > 1 | {\n\t\t\t\t\t\tl.includes(k)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tl.add(k);\n\t\t\ti := i + 1\n\t\t};\n\t\tl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "haltonSequence",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(_collect_2(
      _self,
      sl.annotateFunction(function (_b) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _vanDerCorputNumber_2(_to_2(1, _k), _b);
      }, ["b"]),
    ));
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.collect { :b |\n\t\t\t1.to(k).vanDerCorputNumber(b)\n\t\t}.transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n", "k0"],
  sl.annotateFunction(function (_alpha, _n, _k0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _n, _k0";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(
      _collect_2(
        _alpha,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _kroneckerSequence_3(_each, _n, _k0);
        }, ["each"]),
      ),
    );
  }, ["alpha", "n", "k0"]),
  "{ :alpha :n :k0 |\n\t\talpha.collect { :each |\n\t\t\teach.kroneckerSequence(n, k0)\n\t\t}.transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n"],
  sl.annotateFunction(function (_alpha, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(
      _collect_2(
        _alpha,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _kroneckerSequence_2(_each, _n);
        }, ["each"]),
      ),
    );
  }, ["alpha", "n"]),
  "{ :alpha :n |\n\t\talpha.collect { :each |\n\t\t\teach.kroneckerSequence(n)\n\t\t}.transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "locallyCatenativeSequence",
  ["w", "i", "n", "f"],
  sl.annotateFunction(function (_w, _i, _n, _f) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _i, _n, _f";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _copy_1(_w);
    let _k = _size_1(_i);
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _size_1(_u);
        /* Statements */
        return _add_2(
          _u,
          _catenate_1(_toCollect_3(
            1,
            _k,
            sl.annotateFunction(function (_m) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _m";
                throw new Error(errorMessage);
              } /* Statements */
              return _value_2(
                _at_2(_f, _m),
                _at_2(_u, _plusSign_2(_hyphenMinus_2(_j, _at_2(_i, _m)), 1)),
              );
            }, ["m"]),
          )),
        );
      }, []),
    );
    return _u;
  }, ["w", "i", "n", "f"]),
  "{ :w :i :n :f |\n\t\tlet u = w.copy;\n\t\tlet k = i.size;\n\t\tn.timesRepeat {\n\t\t\tlet j = u.size;\n\t\t\tu.add(\n\t\t\t\t1.toCollect(k) { :m |\n\t\t\t\t\tf[m].value(u[j - i[m] + 1])\n\t\t\t\t}.catenate\n\t\t\t)\n\t\t};\n\t\tu\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "locallyCatenativeSequence",
  ["w", "i", "n"],
  sl.annotateFunction(function (_w, _i, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _w, _i, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _locallyCatenativeSequence_4(
      _w,
      _i,
      _n,
      _List_2(_size_1(_w), _identity_1),
    );
  }, ["w", "i", "n"]),
  "{ :w :i :n |\n\t\tlocallyCatenativeSequence(w, i, n, List(w.size, identity:/1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "stanleySequence",
  ["s1", "m", "mmm"],
  sl.annotateFunction(function (_s1, _m, _mmm) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _s1, _m, _mmm";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t1 = _size_1(_s1);
    let _s2 = _flatten_1(_List_2(_plusSign_2(_t1, _m), _s1));
    let _chvec = _List_2(_plusSign_2(_mmm, 1), 0);
    let _swi = null;
    /* Statements */
    _toDo_3(
      1,
      _t1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_chvec, _plusSign_2(_at_2(_s2, _i), 1), 1);
      }, ["i"]),
    );
    _toDo_3(
      _plusSign_2(_t1, 1),
      _plusSign_2(_t1, _m),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        _toDoWithBreak_3(
          _plusSign_2(_at_2(_s2, _hyphenMinus_2(_n, 1)), 1),
          _mmm,
          sl.annotateFunction(function (_i, _break_0) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _break_0";
              throw new Error(errorMessage);
            } /* Statements */
            _swi = -1;
            _toDoWithBreak_3(
              1,
              _hyphenMinus_2(_n, 2),
              sl.annotateFunction(function (_j, _break_0) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _j, _break_0";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _p = _at_2(_s2, _hyphenMinus_2(_n, _j));
                let _k = _hyphenMinus_2(_asterisk_2(2, _p), _i);
                /* Statements */
                _ifTrue_2(
                  _lessThanSign_2(_k, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _break_0();
                  }, []),
                );
                return _ifTrue_2(
                  _ampersand_2(
                    _lessThanSignEqualsSign_2(_k, _mmm),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(
                        _at_2(_chvec, _plusSign_2(_k, 1)),
                        1,
                      );
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _swi = 1;
                    return _break_0();
                  }, []),
                );
              }, ["j", "break:/0"]),
            );
            return _ifTrue_2(
              _equalsSign_2(_swi, -1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_s2, _n, _i);
                _atPut_3(_chvec, _plusSign_2(_i, 1), 1);
                return _break_0();
              }, []),
            );
          }, ["i", "break:/0"]),
        );
        return _ifTrue_2(
          _equalsSign_2(_swi, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _warning_2(
              _s1,
              _plusSignPlusSign_2("stanleySequence: no solution at n=", _n),
            );
          }, []),
        );
      }, ["n"]),
    );
    return _first_2(_s2, _m);
  }, ["s1", "m", "mmm"]),
  "{ :s1 :m :mmm |\n\t\t/* https://oeis.org/A185256 */\n\t\tlet t1 = s1.size;\n\t\tlet s2 = List(t1 + m, s1).flatten;\n\t\tlet chvec = List(mmm + 1, 0);\n\t\tlet swi = nil;\n\t\t1.toDo(t1) { :i |\n\t\t\tchvec[s2[i] + 1] := 1\n\t\t};\n\t\t(t1 + 1).toDo(t1 + m) { :n |\n\t\t\t(s2[n - 1] + 1).toDoWithBreak(mmm) { :i :break:/0 |\n\t\t\t\tswi := -1;\n\t\t\t\t1.toDoWithBreak(n - 2) { :j :break:/0 |\n\t\t\t\t\tlet p = s2[n - j];\n\t\t\t\t\tlet k = 2 * p - i;\n\t\t\t\t\t(k < 0).ifTrue {\n\t\t\t\t\t\tbreak()\n\t\t\t\t\t};\n\t\t\t\t\t(\n\t\t\t\t\t\tk <= mmm & {\n\t\t\t\t\t\t\tchvec[k + 1] = 1\n\t\t\t\t\t\t}\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\tswi := 1;\n\t\t\t\t\t\tbreak()\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t(swi = -1).ifTrue {\n\t\t\t\t\ts2[n] := i;\n\t\t\t\t\tchvec[i + 1] := 1;\n\t\t\t\t\tbreak()\n\t\t\t\t}\n\t\t\t};\n\t\t\t(swi = 1).ifTrue {\n\t\t\t\ts1.warning('stanleySequence: no solution at n=' ++ n)\n\t\t\t}\n\t\t};\n\t\ts2.first(m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "stanleySequence",
  ["s1", "m"],
  sl.annotateFunction(function (_s1, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _stanleySequence_3(_s1, _m, 4000);
  }, ["s1", "m"]),
  "{ :s1 :m |\n\t\tstanleySequence(s1, m, 4000)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n"],
  sl.annotateFunction(function (_alpha, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(
      _asterisk_2(_to_2(0, _hyphenMinus_2(_n, 1)), _alpha),
      1,
    );
  }, ["alpha", "n"]),
  "{ :alpha :n |\n\t\t(0.to(n - 1) * alpha) % 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n", "k0"],
  sl.annotateFunction(function (_alpha, _n, _k0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _n, _k0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _List_1(_n);
    /* Statements */
    _atPut_3(_s, 1, _k0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _s,
          _i,
          _percentSign_2(
            _plusSign_2(_at_2(_s, _hyphenMinus_2(_i, 1)), _alpha),
            1,
          ),
        );
      }, ["i"]),
    );
    return _s;
  }, ["alpha", "n", "k0"]),
  "{ :alpha :n :k0 |\n\t\tlet s = List(n);\n\t\ts[1] := k0;\n\t\t2.toDo(n) { :i |\n\t\t\ts[i] := (s[i - 1] + alpha) % 1\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "signatureSequence",
  ["theta", "n", "p", "q"],
  sl.annotateFunction(function (_theta, _n, _p, _q) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _theta, _n, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(
      _collect_2(
        _sortOn_2(
          _catenate_1(_table_3(
            sl.annotateFunction(function (_i, _j) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _i, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return [_plusSign_2(_i, _asterisk_2(_j, _theta)), _i];
            }, ["i", "j"]),
            _rangeOrRelativeRange_3(1, _p, 1),
            _rangeOrRelativeRange_3(1, _q, 1),
          )),
          _first_1,
        ),
        _second_1,
      ),
      _n,
    );
  }, ["theta", "n", "p", "q"]),
  "{ :theta :n :p :q |\n\t\t{ :i :j |\n\t\t\t[i + (j * theta), i]\n\t\t}.table(1:p, 1:q)\n\t\t.catenate\n\t\t.sortOn(first:/1)\n\t\t.collect(second:/1)\n\t\t.take(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "signatureSequence",
  ["theta", "n"],
  sl.annotateFunction(function (_theta, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _theta, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _ceiling_1(_sqrt_1(_n));
    let _s = [];
    let _z = _s;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _s = _take_2(
          _collect_2(
            _sortOn_2(
              _catenate_1(_table_3(
                sl.annotateFunction(function (_i, _j) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _i, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return [_i, _plusSign_2(_i, _asterisk_2(_j, _theta))];
                }, ["i", "j"]),
                _rangeOrRelativeRange_3(1, _m, 1),
                _rangeOrRelativeRange_3(1, _m, 1),
              )),
              _second_1,
            ),
            _first_1,
          ),
          _n,
        );
        return _exclamationMarkEqualsSign_2(_s, _z);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _z = _s;
        return _m = _asterisk_2(2, _m);
      }, []),
    );
    return _s;
  }, ["theta", "n"]),
  "{ :theta :n |\n\t\tlet m = n.sqrt.ceiling;\n\t\tlet s = [];\n\t\tlet z = s;\n\t\t{\n\t\t\ts := { :i :j |\n\t\t\t\t[i, i + (j * theta)]\n\t\t\t}.table(1:m, 1:m)\n\t\t\t.catenate\n\t\t\t.sortOn(second:/1)\n\t\t\t.collect(first:/1)\n\t\t\t.take(n);\n\t\t\ts != z\n\t\t}.whileTrue {\n\t\t\tz := s;\n\t\t\tm := 2 * m\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "tagSystem",
  ["m", "r", "i", "k"],
  sl.annotateFunction(function (_m, _r, _i, _k) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _m, _r, _i, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _word = _i;
    let _answer = [_word];
    let _rules = _asMap_1(_r);
    let _j = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSignEqualsSign_2(_size_1(_word), _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_j, _k);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _initial = _first_1(_word);
        let _suffix = _allButFirst_2(_word, _m);
        /* Statements */
        _word = _plusSignPlusSign_2(_suffix, _at_2(_rules, _initial));
        _add_2(_answer, _word);
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return _answer;
  }, ["m", "r", "i", "k"]),
  "{ :m :r :i :k |\n\t\tlet word = i;\n\t\tlet answer = [word];\n\t\tlet rules = r.asMap;\n\t\tlet j = 2;\n\t\t{ word.size >= m & { j <= k } }.whileTrue {\n\t\t\tlet initial = word.first;\n\t\t\tlet suffix = word.allButFirst(m);\n\t\t\tword := suffix ++ rules.at(initial);\n\t\t\tanswer.add(word);\n\t\t\tj := j + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "isMarkovTriple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _sum_1(_square_1(_self)),
      _asterisk_2(3, _product_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.square.sum = (3 * self.product)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "nextMarkovTriple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar4, 1);
    let _y = _at_2(__SplVar4, 2);
    let _z = _at_2(__SplVar4, 3);
    /* Statements */
    return _sort_1([
      _x,
      _y,
      _hyphenMinus_2(_asterisk_2(_asterisk_2(3, _x), _y), _z),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\t[x, y, 3 * x * y - z].sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "markovTripleNeighbours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar5, 1);
    let _y = _at_2(__SplVar5, 2);
    let _z = _at_2(__SplVar5, 3);
    /* Statements */
    return _nub_1([
      _nextMarkovTriple_1([_x, _y, _z]),
      _nextMarkovTriple_1([_x, _z, _y]),
      _nextMarkovTriple_1([_z, _y, _x]),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\t[\n\t\t\t[x, y, z].nextMarkovTriple,\n\t\t\t[x, z, y].nextMarkovTriple,\n\t\t\t[z, y, x].nextMarkovTriple\n\t\t].nub\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isMarkovNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _markovNumberSequence_1(100);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, _max_1(_u)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_self, "isMarkovNumber");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_u, _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet u = 100.markovNumberSequence;\n\t\t(self > u.max).if {\n\t\t\tself.unimplementedCase('isMarkovNumber')\n\t\t} {\n\t\t\tu.includes(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lagrangeNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _markovNumber_1(_n);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(9, _solidus_2(4, _square_1(_m))));
  }, ["n"]),
  "{ :n |\n\t\tlet m = n.markovNumber;\n\t\t(9 - (4 / m.square)).sqrt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_markovNumberSequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.markovNumberSequence.last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberGenerator",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _SortedList_1([1]);
    /* Statements */
    _timesRepeat_2(
      _k,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _size_1(_m),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _i,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _at_2(_m, _i);
                let _y = _at_2(_m, _j);
                let _a = _solidus_2(
                  _plusSign_2(
                    _asterisk_2(_asterisk_2(3, _x), _y),
                    _sqrt_1(
                      _plusSign_2(
                        _hyphenMinus_2(
                          _asterisk_2(-4, _circumflexAccent_2(_x, 2)),
                          _asterisk_2(4, _circumflexAccent_2(_y, 2)),
                        ),
                        _asterisk_2(
                          _asterisk_2(9, _circumflexAccent_2(_x, 2)),
                          _circumflexAccent_2(_y, 2),
                        ),
                      ),
                    ),
                  ),
                  2,
                );
                /* Statements */
                return _ifTrue_2(
                  _isInteger_1(_a),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _addIfNotPresent_2(_m, _a);
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
    return _contents_1(_m);
  }, ["k"]),
  "{ :k |\n\t\tlet m = SortedList([1]);\n\t\tk.timesRepeat {\n\t\t\t1.toDo(m.size) { :i |\n\t\t\t\t1.toDo(i) { :j |\n\t\t\t\t\tlet x = m[i];\n\t\t\t\t\tlet y = m[j];\n\t\t\t\t\tlet a = (3 * x * y + sqrt((-4 * (x ^ 2)) - (4 * (y ^ 2)) + (9 * (x ^ 2) * (y ^ 2)))) / 2;\n\t\t\t\t\ta.isInteger.ifTrue {\n\t\t\t\t\t\tm.addIfNotPresent(a)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tm.contents\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2([
      1,
      2,
      5,
      13,
      29,
      34,
      89,
      169,
      194,
      233,
      433,
      610,
      985,
      1325,
      1597,
      2897,
      4181,
      5741,
      6466,
      7561,
      9077,
      10946,
      14701,
      28657,
      33461,
      37666,
      43261,
      51641,
      62210,
      75025,
      96557,
      135137,
      195025,
      196418,
      294685,
      426389,
      499393,
      514229,
      646018,
      925765,
      1136689,
      1278818,
      1346269,
      1441889,
      1686049,
      2012674,
      2423525,
      2922509,
      3276509,
      3524578,
      4400489,
      6625109,
      7453378,
      8399329,
      9227465,
      9647009,
      11485154,
      13782649,
      16609837,
      16964653,
      20031170,
      21531778,
      24157817,
      38613965,
      43484701,
      48928105,
      63245986,
      78442645,
      94418953,
      111242465,
      137295677,
      144059117,
      165580141,
      205272962,
      225058681,
      253191266,
      285018617,
      298045301,
      321534781,
      375981346,
      433494437,
      447626321,
      537169541,
      576298801,
      647072098,
      780291637,
      941038565,
      981277621,
      1134903170,
      1311738121,
      1405695061,
      1475706146,
      1873012681,
      2151239746,
      2561077037,
      2971215073,
      3057250481,
      3778847945,
      4434764269,
      4801489937,
    ], _self);
  }, ["self"]),
  "{ :self |\n\t\t/* https://oeis.org/A002559/b002559.txt */\n\t\t[1, 2, 5, 13, 29, 34, 89, 169, 194, 233, 433, 610, 985, 1325, 1597, 2897, 4181, 5741, 6466, 7561, 9077, 10946, 14701, 28657, 33461, 37666, 43261, 51641, 62210, 75025, 96557, 135137, 195025, 196418, 294685, 426389, 499393, 514229, 646018, 925765, 1136689, 1278818, 1346269, 1441889, 1686049, 2012674, 2423525, 2922509, 3276509, 3524578, 4400489, 6625109, 7453378, 8399329, 9227465, 9647009, 11485154, 13782649, 16609837, 16964653, 20031170, 21531778, 24157817, 38613965, 43484701, 48928105, 63245986, 78442645, 94418953, 111242465, 137295677, 144059117, 165580141, 205272962, 225058681, 253191266, 285018617, 298045301, 321534781, 375981346, 433494437, 447626321, 537169541, 576298801, 647072098, 780291637, 941038565, 981277621, 1134903170, 1311738121, 1405695061, 1475706146, 1873012681, 2151239746, 2561077037, 2971215073, 3057250481, 3778847945, 4434764269, 4801489937].first(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberTree",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _unfoldTree_3(
      _n,
      [1, 1, 1],
      sl.annotateFunction(function (_triple) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _triple";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _sum_1(_triple);
        /* Statements */
        return _select_2(
          _markovTripleNeighbours_1(_triple),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_sum_1(_each), _k);
          }, ["each"]),
        );
      }, ["triple"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.unfoldTree(\n\t\t\t[1 1 1],\n\t\t\t{ :triple |\n\t\t\t\tlet k = triple.sum;\n\t\t\t\ttriple\n\t\t\t\t.markovTripleNeighbours\n\t\t\t\t.select { :each |\n\t\t\t\t\teach.sum > k\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "IntegerSequence",
  "eulerTransform",
  ["a:/1"],
  sl.annotateFunction(function (_a_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b_1 = _memoize_2(
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
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = _sum_2(
              _to_2(1, _n),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  _sum_2(
                    _divisors_1(_j),
                    sl.annotateFunction(function (_d) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _d";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _asterisk_2(_d, _a_1(_d));
                    }, ["d"]),
                  ),
                  _b_1(_hyphenMinus_2(_n, _j)),
                );
              }, ["j"]),
            );
            /* Statements */
            return _solidusSolidus_2(_s, _n);
          }, []),
        );
      }, ["n"]),
      true,
    );
    /* Statements */
    return _b_1;
  }, ["a:/1"]),
  "{ :a:/1 |\n\t\tlet b:/1 = { :n |\n\t\t\t(n = 0).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet s = 1.to(n).sum { :j |\n\t\t\t\t\tj.divisors.sum { :d |\n\t\t\t\t\t\td * a(d)\n\t\t\t\t\t} * b(n - j)\n\t\t\t\t};\n\t\t\t\ts // n\n\t\t\t}\n\t\t}.memoize(true);\n\t\tb:/1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "IntegerSequence",
  "runLengthTransform",
  ["x", "f:/1"],
  sl.annotateFunction(function (_x, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _x,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(
          _collect_2(_runLengthsOf_2(_binaryExpansion_1(_n), 1), _f_1),
        );
      }, ["n"]),
    );
  }, ["x", "f:/1"]),
  "{ :x :f:/1 |\n\t\tx.collect { :n |\n\t\t\tn.binaryExpansion\n\t\t\t.runLengthsOf(1)\n\t\t\t.collect(f:/1).product\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "runLengthTransform",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _runLengthTransform_2(_Range_3(0, _hyphenMinus_2(_n, 1), 1), _f_1);
  }, ["n", "f:/1"]),
  "{ :n :f:/1 |\n\t\trunLengthTransform(Range(0, n - 1, 1), f:/1)\n\t}",
);
