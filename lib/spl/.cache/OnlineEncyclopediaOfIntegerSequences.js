sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA001317",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _iterate_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _bitXor_2(_x, _bitShiftLeft_2(_x, 1));
      }, ["x"]),
      1,
      _n,
    );
  }, ["n"]),
  "{ :n |\n\t\t{ :x |\n\t\t\tx.bitXor(x.bitShiftLeft(1))\n\t\t}.iterate(1, n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA003961",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isPrime_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _prime_1(_plusSign_2(_primePi_1(_n), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _product_2(
              _factorInteger_1(_n),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _circumflexAccent_2(
                  _oeisA003961_1(_at_2(_x, 1)),
                  _at_2(_x, 2),
                );
              }, ["x"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tn.isPrime.if {\n\t\t\t\t(n.primePi + 1).prime\n\t\t\t} {\n\t\t\t\tn.factorInteger.product { :x |\n\t\t\t\t\toeisA003961(x[1]) ^ x[2]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA005940",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _doudnaSequenceFunction_1(_hyphenMinus_2(_n, 1));
  }, ["n"]),
  "{ :n |\n\t\t(n - 1).doudnaSequenceFunction\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA007814",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerExponent_2(_n, 2);
  }, ["n"]),
  "{ :n |\n\t\tn.integerExponent(2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA007949",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerExponent_2(_n, 3);
  }, ["n"]),
  "{ :n |\n\t\tn.integerExponent(3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA014486",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _catalanUnrank_1(_n);
  }, ["n"]),
  "{ :n |\n\t\tn.catalanUnrank\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA020652",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = 1;
    let _j = 1;
    let _k = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _k = _plusSign_2(_k, 1);
        return _c = _plusSign_2(_c, _eulerPhi_1(_k));
      }, []),
    );
    _c = _hyphenMinus_2(_c, _eulerPhi_1(_k));
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_gcd_2(_j, _k), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(_c, 1);
          }, []),
        );
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return (_hyphenMinus_2(_j, 1));
  }, ["n"]),
  "{ :n |\n\t\tlet c = 1;\n\t\tlet j = 1;\n\t\tlet k = 2;\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\tk := k + 1;\n\t\t\tc := c + k.eulerPhi\n\t\t};\n\t\tc := c - k.eulerPhi;\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\t(j.gcd(k) = 1).ifTrue {\n\t\t\t\tc := c + 1\n\t\t\t};\n\t\t\tj := j + 1\n\t\t};\n\t\t(j - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA020653",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = 0;
    let _k = 2;
    let _j = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _c = _plusSign_2(_c, _eulerPhi_1(_k));
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    _c = _hyphenMinus_2(_c, _eulerPhi_1(_hyphenMinus_2(_k, 1)));
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_gcd_2(_j, _hyphenMinus_2(_k, 1)), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(_c, 1);
          }, []),
        );
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return (_hyphenMinus_2(_k, _j));
  }, ["n"]),
  "{ :n |\n\t\tlet c = 0;\n\t\tlet k = 2;\n\t\tlet j = 1;\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\tc := c + k.eulerPhi;\n\t\t\tk := k + 1\n\t\t};\n\t\tc := c - (k - 1).eulerPhi;\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\t(j.gcd(k - 1) = 1).ifTrue {\n\t\t\t\tc := c + 1\n\t\t\t};\n\t\t\tj := j + 1\n\t\t};\n\t\t(k - j)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA036044",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromDigits_2(
      _reverse_1(_hyphenMinus_2(1, _binaryExpansion_1(_n))),
      2,
    );
  }, ["n"]),
  "{ :n |\n\t\t(1 - n.binaryExpansion)\n\t\t.reverse\n\t\t.fromDigits(2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA038567",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(
          _sum_1(_eulerPhi_1(_rangeOrRelativeRange_3(1, _k, 1))),
          _n,
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
    return _k;
  }, ["n"]),
  "{ :n |\n\t\tlet k = 0;\n\t\t{\n\t\t\t1:k.eulerPhi.sum <= n\n\t\t}.whileTrue {\n\t\t\tk := k + 1\n\t\t};\n\t\tk\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA038568",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = 1;
    let _k = 2;
    let _j = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _c = _plusSign_2(_c, _asterisk_2(2, _eulerPhi_1(_k)));
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    _c = _hyphenMinus_2(_c, _asterisk_2(2, _eulerPhi_1(_hyphenMinus_2(_k, 1))));
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_gcd_2(_j, _hyphenMinus_2(_k, 1)), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(_c, 2);
          }, []),
        );
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return _if_3(
      _greaterThanSign_2(_c, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_hyphenMinus_2(_j, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_hyphenMinus_2(_k, 1));
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet c = 1;\n\t\tlet k = 2;\n\t\tlet j = 1;\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\tc := c + (2 * k.eulerPhi);\n\t\t\tk := k + 1\n\t\t};\n\t\tc := c - (2 * (k - 1).eulerPhi);\n\t\t{\n\t\t\tc < n\n\t\t}.whileTrue {\n\t\t\t(j.gcd(k - 1) = 1).ifTrue {\n\t\t\t\tc := c + 2\n\t\t\t};\n\t\t\tj := j + 1\n\t\t};\n\t\t(c > n).if {\n\t\t\t(j - 1)\n\t\t} {\n\t\t\t(k - 1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA038569",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = 1;
    let _k = 2;
    let _j = 1;
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
        } /* Statements */
        _c = _plusSign_2(_c, _asterisk_2(2, _eulerPhi_1(_k)));
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    _c = _hyphenMinus_2(_c, _asterisk_2(2, _eulerPhi_1(_hyphenMinus_2(_k, 1))));
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
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_gcd_2(_j, _hyphenMinus_2(_k, 1)), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(_c, 2);
          }, []),
        );
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return _if_3(
      _greaterThanSign_2(_c, _plusSign_2(_n, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_hyphenMinus_2(_k, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_hyphenMinus_2(_j, 1));
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet c = 1;\n\t\tlet k = 2;\n\t\tlet j = 1;\n\t\t{\n\t\t\tc <= n\n\t\t}.whileTrue {\n\t\t\tc := c + (2 * k.eulerPhi);\n\t\t\tk := k + 1\n\t\t};\n\t\tc := c - (2 * (k - 1).eulerPhi);\n\t\t{\n\t\t\tc <= n\n\t\t}.whileTrue {\n\t\t\t(j.gcd(k - 1) = 1).ifTrue {\n\t\t\t\tc := c + 2\n\t\t\t};\n\t\t\tj := j + 1\n\t\t};\n\t\t(c > (n + 1)).if {\n\t\t\t(k - 1)\n\t\t} {\n\t\t\t(j - 1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA004718",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _reverse_1(_binaryExpansion_1(_n));
    let _z = 0;
    let __SplVar1 = _assertIsOfSize_2([0, 0], 2);
    let _p = _at_2(__SplVar1, 1);
    let _q = _at_2(__SplVar1, 2);
    /* Statements */
    _do_2(
      _b,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _z = _plusSign_2(_z, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isEven_1(_z),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _p = _plusSign_2(_p, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _q = _plusSign_2(_q, 1);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _hyphenMinus_2(_p, _q);
  }, ["n"]),
  "{ :n |\n\t\tlet b = n.binaryExpansion.reverse;\n\t\tlet z = 0;\n\t\tlet [p, q] = [0, 0];\n\t\tb.do { :i |\n\t\t\t(i = 0).if {\n\t\t\t\tz := z + 1\n\t\t\t} {\n\t\t\t\tz.isEven.if {\n\t\t\t\t\tp := p + 1\n\t\t\t\t} {\n\t\t\t\t\tq := q + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp - q\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA071156",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _oeisA085198_1(_oeisA014486_1(_n));
  }, ["n"]),
  "{ :n |\n\t\tn.oeisA014486.oeisA085198\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA080300",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDyckWord_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _catalanRank_1(_n);
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
  }, ["n"]),
  "{ :n |\n\t\tn.isDyckWord.if {\n\t\t\tn.catalanRank\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA085198",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = 0;
    let _h = 1;
    let _i = 2;
    let _fi = 1;
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
        return _if_3(
          _isOdd_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _solidus_2(_hyphenMinus_2(_n, 1), 2);
            return _h = _hyphenMinus_2(_h, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _solidus_2(_n, 2);
            _s = _plusSign_2(_s, _asterisk_2(_h, _fi));
            _h = _plusSign_2(_h, 1);
            _fi = _asterisk_2(_fi, _i);
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
      }, []),
    );
    return _s;
  }, ["n"]),
  "{ :n |\n\t\tlet s = 0;\n\t\tlet h = 1;\n\t\tlet i = 2;\n\t\tlet fi = 1;\n\t\t{ n != 0 }.whileTrue {\n\t\t\tn.isOdd.if {\n\t\t\t\tn := (n - 1) / 2;\n\t\t\t\th := h - 1\n\t\t\t} {\n\t\t\t\tn := n / 2;\n\t\t\t\ts := s + (h * fi);\n\t\t\t\th := h + 1;\n\t\t\t\tfi := fi * i;\n\t\t\t\ti := i + 1\n\t\t\t}\n\t\t};\n\t\ts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA101369",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _sqrt_1(2);
    /* Statements */
    return _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _n,
          _floor_1(_hyphenMinus_2(_solidus_2(_n, _m), _solidus_2(1, _m))),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(1, _floor_1(_solidus_2(_n, _m)));
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet m = 2.sqrt;\n\t\tn.isEven.if {\n\t\t\tn + (n / m - (1 / m)).floor\n\t\t} {\n\t\t\t1 + (n / m).floor\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA122111",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _catenate_1(
      _collect_2(
        _factorInteger_1(_n),
        sl.annotateFunction(function (_f) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _f";
            throw new Error(errorMessage);
          } /* Statements */
          return _List_2(_at_2(_f, 2), _primePi_1(_at_2(_f, 1)));
        }, ["f"]),
      ),
    );
    let _m = _max_1(_p);
    /* Statements */
    return _product_2(
      _rangeOrRelativeRange_3(1, _m, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _prime_1(_sum_2(
          _p,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _boole_1(_greaterThanSignEqualsSign_2(_j, _i));
          }, ["j"]),
        ));
      }, ["i"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet p = n.factorInteger.collect { :f |\n\t\t\tList(f[2], f[1].primePi)\n\t\t}.catenate;\n\t\tlet m = p.max;\n\t\t1:m.product { :i |\n\t\t\tp.sum { :j |\n\t\t\t\t(j >= i).boole\n\t\t\t}.prime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA343029",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _reverse_1(_binaryExpansion_1(_n));
    let _z = 0;
    let _p = 0;
    /* Statements */
    _do_2(
      _b,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _z = _plusSign_2(_z, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _isEven_1(_z),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _p = _plusSign_2(_p, 1);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _p;
  }, ["n"]),
  "{ :n |\n\t\tlet b = n.binaryExpansion.reverse;\n\t\tlet z = 0;\n\t\tlet p = 0;\n\t\tb.do { :i |\n\t\t\t(i = 0).if {\n\t\t\t\tz := z + 1\n\t\t\t} {\n\t\t\t\tz.isEven.ifTrue {\n\t\t\t\t\tp := p + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA343030",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _reverse_1(_binaryExpansion_1(_n));
    let _z = 0;
    let _q = 0;
    /* Statements */
    _do_2(
      _b,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _z = _plusSign_2(_z, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _isOdd_1(_z),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _q = _plusSign_2(_q, 1);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _q;
  }, ["n"]),
  "{ :n |\n\t\tlet b = n.binaryExpansion.reverse;\n\t\tlet z = 0;\n\t\tlet q = 0;\n\t\tb.do { :i |\n\t\t\t(i = 0).if {\n\t\t\t\tz := z + 1\n\t\t\t} {\n\t\t\t\tz.isOdd.ifTrue {\n\t\t\t\t\tq := q + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tq\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisFunctionDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "oeisFunctionDictionary",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([[
          "A001317",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA001317_1(_n);
          }, ["n"]),
        ], [
          "A003961",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA003961_1(_n);
          }, ["n"]),
        ], [
          "A005940",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA005940_1(_n);
          }, ["n"]),
        ], [
          "A007814",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA007814_1(_n);
          }, ["n"]),
        ], [
          "A007949",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA007949_1(_n);
          }, ["n"]),
        ], [
          "A014486",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA014486_1(_n);
          }, ["n"]),
        ], [
          "A020652",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA020652_1(_n);
          }, ["n"]),
        ], [
          "A020653",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA020653_1(_n);
          }, ["n"]),
        ], [
          "A036044",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA036044_1(_n);
          }, ["n"]),
        ], [
          "A038567",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA038567_1(_n);
          }, ["n"]),
        ], [
          "A038568",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA038568_1(_n);
          }, ["n"]),
        ], [
          "A038569",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA038569_1(_n);
          }, ["n"]),
        ], [
          "A071156",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA071156_1(_n);
          }, ["n"]),
        ], [
          "A080300",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA080300_1(_n);
          }, ["n"]),
        ], [
          "A085198",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA085198_1(_n);
          }, ["n"]),
        ], [
          "A101369",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA101369_1(_n);
          }, ["n"]),
        ], [
          "A122111",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA122111_1(_n);
          }, ["n"]),
        ], [
          "A343029",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA343029_1(_n);
          }, ["n"]),
        ], [
          "A343030",
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _oeisA343030_1(_n);
          }, ["n"]),
        ]]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('oeisFunctionDictionary') {\n\t\t\t(\n\t\t\t\t'A001317': { :n | n.oeisA001317 },\n\t\t\t\t'A003961': { :n | n.oeisA003961 },\n\t\t\t\t'A005940': { :n | n.oeisA005940 },\n\t\t\t\t'A007814': { :n | n.oeisA007814 },\n\t\t\t\t'A007949': { :n | n.oeisA007949 },\n\t\t\t\t'A014486': { :n | n.oeisA014486 },\n\t\t\t\t'A020652': { :n | n.oeisA020652 },\n\t\t\t\t'A020653': { :n | n.oeisA020653 },\n\t\t\t\t'A036044': { :n | n.oeisA036044 },\n\t\t\t\t'A038567': { :n | n.oeisA038567 },\n\t\t\t\t'A038568': { :n | n.oeisA038568 },\n\t\t\t\t'A038569': { :n | n.oeisA038569 },\n\t\t\t\t'A071156': { :n | n.oeisA071156 },\n\t\t\t\t'A080300': { :n | n.oeisA080300 },\n\t\t\t\t'A085198': { :n | n.oeisA085198 },\n\t\t\t\t'A101369': { :n | n.oeisA101369 },\n\t\t\t\t'A122111': { :n | n.oeisA122111 },\n\t\t\t\t'A343029': { :n | n.oeisA343029 },\n\t\t\t\t'A343030': { :n | n.oeisA343030 }\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_oeisFunctionDictionary_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.oeisFunctionDictionary.at(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA004001Terms",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _Map_1(sl.annotateFunction(function (_n) {
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
            _at_2(_a, _at_2(_a, _hyphenMinus_2(_n, 1))),
            _at_2(_a, _hyphenMinus_2(_n, _at_2(_a, _hyphenMinus_2(_n, 1)))),
          );
        }, []),
      );
    }, ["n"]));
    /* Statements */
    return _atAllPath_2(_a, [_rangeOrRelativeRange_3(1, _k, 1)]);
  }, ["k"]),
  "{ :k |\n\t\tlet a = Map { :n |\n\t\t\t(n <= 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\ta[a[n - 1]] + a[n - a[n - 1]]\n\t\t\t}\n\t\t};\n\t\ta[1:k]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA306246Terms",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _o = _List_2(_m, 0);
    let _p = null;
    let _q = null;
    /* Statements */
    return _collect_2(
      _rangeOrRelativeRange_3(1, _m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _if_3(
          _lessThanSignEqualsSign_2(_n, 2),
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
            return _plusSign_2(_q, _p);
          }, []),
        );
        /* Statements */
        _q = _p;
        _p = _atPut_3(
          _o,
          _plusSign_2(1, _v),
          _plusSign_2(_at_2(_o, _plusSign_2(1, _v)), 1),
        );
        return _v;
      }, ["n"]),
    );
  }, ["m"]),
  "{ :m |\n\t\tlet o = List(m, 0);\n\t\tlet p = nil;\n\t\tlet q = nil;\n\t\t1:m.collect { :n |\n\t\t\tlet v = (n <= 2).if {\n\t\t\t\tn\n\t\t\t} {\n\t\t\t\tq + p\n\t\t\t};\n\t\t\tq := p;\n\t\t\tp := o[1 + v] := o[1 + v] + 1;\n\t\t\tv\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisA051135Terms",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _asterisk_2(_plusSign_2(_k, 2), 2);
    let _a = _oeisA004001Terms_1(_m);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_plusSign_2(_k, 1), _max_1(_a)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_k, "oeisA051135Terms");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _List_2(_max_1(_a), 0);
        /* Statements */
        _do_2(
          _a,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_b, _i, _plusSign_2(_at_2(_b, _i), 1));
          }, ["i"]),
        );
        return _first_2(_b, _k);
      }, []),
    );
  }, ["k"]),
  "{ :k |\n\t\tlet m = (k + 2) * 2;\n\t\tlet a = m.oeisA004001Terms;\n\t\t(k + 1 > a.max).if {\n\t\t\tk.error('oeisA051135Terms')\n\t\t} {\n\t\t\tlet b = List(a.max, 0);\n\t\t\ta.do { :i |\n\t\t\t\tb[i] := b[i] + 1\n\t\t\t};\n\t\t\tb.first(k)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisTerms",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_self, [
      _hyphenMinusGreaterThanSign_2(
        "A004001",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _oeisA004001Terms_1(_k);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "A306246",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _oeisA306246Terms_1(_k);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "A051135",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _oeisA051135Terms_1(_k);
        }, []),
      ),
    ]);
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t'A004001' -> { k.oeisA004001Terms },\n\t\t\t\t'A306246' -> { k.oeisA306246Terms },\n\t\t\t\t'A051135' -> { k.oeisA051135Terms }\n\t\t\t]\n\t\t)\n\t}",
);

sl.addType(
  false,
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  ["Object", "Storeable", "Equatable"],
  ["identifier", "contents", "bFile"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OeisEntry",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "OeisEntry",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "OeisEntry",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "bFileData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _bFile_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "bFileData: not fetched");
      }, []),
      sl.annotateFunction(function (_bFile) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _bFile";
          throw new Error(errorMessage);
        } /* Statements */
        return _column_2(_bFile, 2);
      }, ["bFile"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.bFile.ifNil {\n\t\t\tself.error('bFileData: not fetched')\n\t\t} { :bFile |\n\t\t\tbFile.column(2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "bFileUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(
      _format_2("https://oeis.org/%/b%.txt", [
        _identifier_1(_self),
        _allButFirst_1(_identifier_1(_self)),
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\tUrl(\n\t\t\t'https://oeis.org/%/b%.txt'.format(\n\t\t\t\t[\n\t\t\t\t\tself.identifier,\n\t\t\t\t\tself.identifier.allButFirst\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "data",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _splitBy_2(_lookupField_2(_self, "data"), ","),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _normal_1(_parseLargeInteger_1(_x));
      }, ["x"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('data')\n\t\t.splitBy(',')\n\t\t.collect { :x |\n\t\t\tx.parseLargeInteger.normal\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_identifier_1(_self), _identifier_1(_operand));
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\taBlock(self.identifier, operand.identifier)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _allFulfilled_1([_fetchContents_1(_self), _fetchBFile_1(_self)]),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, ["unused"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.fetchContents,\n\t\t\tself.fetchBFile\n\t\t].allFulfilled.then { :unused |\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetchContents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _contents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _fetchMimeType_2(_jsonUrl_1(_self), "application/json"),
          sl.annotateFunction(function (_data) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _data";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar2 = _assertIsOfSize_2(_data, 1);
            let _entry = _at_2(__SplVar2, 1);
            /* Statements */
            return _contents_2(_self, _entry);
          }, ["data"]),
        );
      }, []),
      sl.annotateFunction(function (_contents) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _contents";
          throw new Error(errorMessage);
        } /* Statements */
        return _resolvedPromise_1(_contents);
      }, ["contents"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.contents.ifNil {\n\t\t\tself.jsonUrl.fetchMimeType(\n\t\t\t\t'application/json'\n\t\t\t).then { :data |\n\t\t\t\tlet [entry] = data;\n\t\t\t\tself.contents := entry\n\t\t\t}\n\t\t} { :contents |\n\t\t\tcontents.resolvedPromise\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "fetchBFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _cachedFetchMimeType_3(
        _bFileUrl_1(_self),
        "OnlineEncyclopediaOfIntegerSequences",
        "text/plain",
      ),
      sl.annotateFunction(function (_data) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _data";
          throw new Error(errorMessage);
        } /* Statements */
        _bFile_2(_self, _oeisParseBFile_1(_data));
        return _self;
      }, ["data"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.bFileUrl.cachedFetchMimeType(\n\t\t\t'OnlineEncyclopediaOfIntegerSequences',\n\t\t\t'text/plain'\n\t\t).then { :data |\n\t\t\tself.bFile := data.oeisParseBFile;\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isChanged",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "changed");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('changed')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "cons");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('cons')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isCore",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "core");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('core')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isEigensequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "eigen");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('eigen')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isFinite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "fini");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('fini')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isHard",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "hard");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('hard')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isIrregularTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "tabf");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('tabf')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isMultiplicative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "mult");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('mult')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isNice",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "nice");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('nice')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isNonNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "nonn");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('nonn')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "tabl");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('tabl')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOeisIdentifier_1(_identifier_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.identifier.isOeisIdentifier\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "isWalk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keywords_1(_self), "walk");
  }, ["self"]),
  "{ :self |\n\t\tself.keywords.includes('walk')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "jsonUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(
      _format_2("https://oeis.org/search?q=id:%&fmt=json", [
        _identifier_1(_self),
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\tUrl(\n\t\t\t'https://oeis.org/search?q=id:%&fmt=json'.format(\n\t\t\t\t[\n\t\t\t\t\tself.identifier\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "keywords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_lookupField_2(_self, "keyword"), ",");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('keyword').splitBy(',')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "lookupField",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _contents_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _fetchContents_1(_self);
        return _error_2(_self, "lookupField: contents not fetched");
      }, []),
      sl.annotateFunction(function (_contents) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _contents";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_contents, _key);
      }, ["contents"]),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.contents.ifNil {\n\t\t\tself.fetchContents;\n\t\t\tself.error('lookupField: contents not fetched')\n\t\t} { :contents |\n\t\t\tcontents.at(key)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lookupField_2(_self, "name");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('name')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "number",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lookupField_2(_self, "number");
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('number')\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "offset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDecimalInteger_1(
      _at_2(_splitBy_2(_lookupField_2(_self, "offset"), ","), 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lookupField('offset')\n\t\t.splitBy(',')\n\t\t.at(1)\n\t\t.parseDecimalInteger\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "stableKeywords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _unstable = ["changed", "new"];
    /* Statements */
    return _reject_2(
      _keywords_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_unstable, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet unstable = ['changed', 'new'];\n\t\tself.keywords.reject { :each |\n\t\t\tunstable.includes(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("OeisEntry(%)", [_storeString_1(_identifier_1(_self))]);
  }, ["self"]),
  "{ :self |\n\t\t'OeisEntry(%)'.format([self.identifier.storeString])\n\t}",
);

sl.addMethodToExistingType(
  "OeisEntry",
  "OnlineEncyclopediaOfIntegerSequences",
  "then",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_fetch_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.fetch.then(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "OeisEntry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _oeisEntries_1(_system),
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newOeisEntry_0(), _self, null, null);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.oeisEntries.atIfAbsentPut(self) {\n\t\t\tnewOeisEntry().initializeSlots(self, nil, nil)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "isOeisIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _characters_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_c), 7),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_c, 1), "A"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _rangeOrRelativeRange_3(2, 7, 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isDigit_1(_at_2(_c, _i));
              }, ["i"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.characters;\n\t\tc.size = 7 & {\n\t\t\tc[1] = 'A' & {\n\t\t\t\t2:7.allSatisfy { :i |\n\t\t\t\t\tc[i].isDigit\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisParseBFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _reject_2(
        _lines_1(_self),
        sl.annotateFunction(function (_s) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _s";
            throw new Error(errorMessage);
          } /* Statements */
          return _verticalLine_2(
            _isEmpty_1(_s),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _beginsWith_2(_s, "#");
            }, []),
          );
        }, ["s"]),
      ),
      sl.annotateFunction(function (_s) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _s";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _splitBy_2(_s, " "),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _normal_1(_parseLargeInteger_1(_n));
          }, ["n"]),
        );
      }, ["s"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.lines.reject { :s |\n\t\t\ts.isEmpty | {\n\t\t\t\ts.beginsWith('#')\n\t\t\t}\n\t\t}.collect { :s |\n\t\t\ts.splitBy(' ').collect { :n |\n\t\t\t\tn.parseLargeInteger.normal\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDecimalInteger_1(_allButFirst_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.allButFirst.parseDecimalInteger\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "OeisEntry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OeisEntry_1(_oeisIdentifier_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tOeisEntry(self.oeisIdentifier)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2("A", _padLeft_3(_asString_1(_self), [6], "0"));
  }, ["self"]),
  "{ :self |\n\t\t'A' ++ self.asString.padLeft([6], '0')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "splOeisReferences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "splOeisReferences",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asRecord_1(
          _deleteMissing_1(
            _collect_2(
              _names_2(_helpIndex_1(_self), "Reference"),
              sl.annotateFunction(function (_n) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _n";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _r = _oeisReferences_1(_readHelpFile_2(_self, _n));
                /* Statements */
                return _ifEmpty_3(
                  _r,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return null;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinusGreaterThanSign_2(_n, _r);
                  }, []),
                );
              }, ["n"]),
            ),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('splOeisReferences') {\n\t\t\tself.helpIndex.names('Reference').collect { :n |\n\t\t\t\tlet r = self.readHelpFile(n).oeisReferences;\n\t\t\t\tr.ifEmpty {\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\tn -> r\n\t\t\t\t}\n\t\t\t}.deleteMissing.asRecord\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "splOeisEntryListing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _splOeisReferences_1(_self);
    let _e = _sort_1(_nub_1(_catenate_1(_values_1(_r))));
    /* Statements */
    _do_2(
      _e,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _keys_1(_select_2(
          _r,
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2(_x, _k);
          }, ["x"]),
        ));
        /* Statements */
        return _postLine_1(
          _format_2("- %: %", [
            _k,
            _stringIntercalate_2(
              _collect_2(
                _v,
                sl.annotateFunction(function (_x) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _x";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2("`%`", [_x]);
                }, ["x"]),
              ),
              ", ",
            ),
          ]),
        );
      }, ["k"]),
    );
    return null;
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.splOeisReferences;\n\t\tlet e = r.values.catenate.nub.sort;\n\t\te.do { :k |\n\t\t\tlet v = r.select { :x |\n\t\t\t\tx.includes(k)\n\t\t\t}.keys;\n\t\t\t'- %: %'.format(\n\t\t\t\t[\n\t\t\t\t\tk,\n\t\t\t\t\tv.collect { :x |\n\t\t\t\t\t\t'`%`'.format([x])\n\t\t\t\t\t}.stringIntercalate(', ')\n\t\t\t\t]\n\t\t\t).postLine\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "splOeisMethodListing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _splOeisReferences_1(_self),
      sl.annotateFunction(function (_k, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _k, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _postLine_1(
          _format_2("- `%`: %", [
            _k,
            _if_3(
              _isEmpty_1(_v),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "...";
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _unwords_1(_v);
              }, []),
            ),
          ]),
        );
      }, ["k", "v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.splOeisReferences.keysAndValuesDo { :k :v |\n\t\t\t'- `%`: %'.format(\n\t\t\t\t[\n\t\t\t\t\tk,\n\t\t\t\t\tv.isEmpty.if {\n\t\t\t\t\t\t'...'\n\t\t\t\t\t} {\n\t\t\t\t\t\tv.unwords\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t).postLine\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisEntries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "oeisEntries",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Map_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('oeisEntries') {\n\t\t\tMap()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisSequenceData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "OeisSequenceData");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('OeisSequenceData')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "OeisSequenceData"],
      ["category", "Math/IntegerSequences"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/oeis/oeis.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
sl.extendTypeOrTraitWithMethod(
  "List",
  "OnlineEncyclopediaOfIntegerSequences",
  "oeisFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _oeisFunction_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(oeisFunction:/1)\n\t}",
);
