sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "binetsFormula",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _sqrt_1(5);
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_plusSign_2(1, _z), _n),
        _circumflexAccent_2(_hyphenMinus_2(1, _z), _n),
      ),
      _asterisk_2(_circumflexAccent_2(2, _n), _z),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet z = 5.sqrt;\n\t\t((1 + z) ^ n) - ((1 - z) ^ n) / ((2 ^ n) * z)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "dualZeckendorfRepresentation",
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
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _zeckendorfRepresentation_1(_n);
        let _i = 1;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _i,
              _hyphenMinus_2(_size_1(_z), 2),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _ampersand_2(
                _equalsSign_2(_at_2(_z, _i), 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _equalsSign_2(_at_2(_z, _plusSign_2(_i, 1)), 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_at_2(_z, _plusSign_2(_i, 2)), 0);
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
                _atPut_3(_z, _i, 0);
                _atPut_3(_z, _plusSign_2(_i, 1), 1);
                _atPut_3(_z, _plusSign_2(_i, 2), 1);
                return _ifTrue_2(
                  _greaterThanSign_2(_i, 2),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _i = _hyphenMinus_2(_i, 3);
                  }, []),
                );
              }, []),
            );
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        _ifTrue_2(
          _equalsSign_2(_at_2(_z, 1), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeFirst_1(_z);
          }, []),
        );
        return _z;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n = 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet z = zeckendorfRepresentation(n);\n\t\t\tlet i = 1;\n\t\t\t{ i <= (z.size - 2) }.whileTrue {\n\t\t\t\t(z[i] = 1 & { z[i + 1] = 0 & { z[i + 2] = 0 } }).ifTrue {\n\t\t\t\t\tz[i] := 0;\n\t\t\t\t\tz[i + 1] := 1;\n\t\t\t\t\tz[i + 2] := 1;\n\t\t\t\t\t(i > 2).ifTrue {\n\t\t\t\t\t\ti := i - 3\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\t(z[1] = 0).ifTrue {\n\t\t\t\tz.removeFirst\n\t\t\t};\n\t\t\tz\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacci",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_x, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fibonacci_1(_n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _sqrt_1(_plusSign_2(4, _square_1(_x)));
        let _b = _plusSign_2(_x, _a);
        let _c = _circumflexAccent_2(2, _hyphenMinus_2(0, _n));
        let _d = _circumflexAccent_2(2, _n);
        let _e = _circumflexAccent_2(_b, _n);
        let _f = _circumflexAccent_2(_b, _hyphenMinus_2(0, _n));
        let _g = _cos_1(_pi_1(_n));
        let _r = _solidus_2(
          _hyphenMinus_2(
            _asterisk_2(_c, _e),
            _asterisk_2(_asterisk_2(_d, _f), _g),
          ),
          _a,
        );
        /* Statements */
        return _if_3(
          _ampersand_2(
            _isInteger_1(_n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isInteger_1(_x);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _round_1(_r);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r;
          }, []),
        );
      }, []),
    );
  }, ["n", "x"]),
  "{ :n :x |\n\t\t(x = 1).if {\n\t\t\tn.fibonacci\n\t\t} {\n\t\t\tlet a = (4 + x.square).sqrt;\n\t\t\tlet b = x + a;\n\t\t\tlet c = 2 ^ (0 - n);\n\t\t\tlet d = 2 ^ n;\n\t\t\tlet e = b ^ n;\n\t\t\tlet f = b ^ (0 - n);\n\t\t\tlet g = n.pi.cos;\n\t\t\tlet r = ((c * e) - (d * f * g)) / a;\n\t\t\t(n.isInteger & { x.isInteger }).if {\n\t\t\t\tr.round\n\t\t\t} {\n\t\t\t\tr\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacci",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPositiveInteger_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asInteger_1(_fibonacciNumber_1(_n));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _phi = _goldenRatio_1(1);
        let _r = _solidus_2(
          _hyphenMinus_2(
            _circumflexAccent_2(_phi, _n),
            _asterisk_2(
              _cos_1(_pi_1(_n)),
              _circumflexAccent_2(_phi, _hyphenMinus_1(_n)),
            ),
          ),
          _sqrt_1(5),
        );
        /* Statements */
        return _r;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.isPositiveInteger.if {\n\t\t\tn.fibonacciNumber.asInteger\n\t\t} {\n\t\t\tlet phi = 1.goldenRatio;\n\t\t\tlet r = ((phi ^ n) - (n.pi.cos * (phi ^ n.-))) / 5.sqrt;\n\t\t\tr\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciEntryPoint",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(
          _percentSign_2(_fibonacci_1(_k), _n),
          0,
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
  "{ :n |\n\t\tlet k = 1;\n\t\t{ k.fibonacci % n != 0 }.whileTrue {\n\t\t\tk := k + 1\n\t\t};\n\t\tk\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _plusSign_2(_n, 1);
    /* Statements */
    return _at_2(_cachedFibonacciSequenceExtendedTo_2(_system, _m), _m);
  }, ["n"]),
  "{ :n |\n\t\tlet m = n + 1;\n\t\tsystem\n\t\t.cachedFibonacciSequenceExtendedTo(m)\n\t\t.at(m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciPolynomial",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_n, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_n, 1);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnivariatePolynomial_1([_n]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _UnivariatePolynomial_1([0, 1]);
        let _a = _fibonacciPolynomial_1(_hyphenMinus_2(_n, 1));
        let _b = _fibonacciPolynomial_1(_hyphenMinus_2(_n, 2));
        /* Statements */
        return _plusSign_2(_asterisk_2(_x, _a), _b);
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n = 0 | { n = 1 }).if {\n\t\t\tUnivariatePolynomial([n])\n\t\t} {\n\t\t\tlet x = UnivariatePolynomial([0 1]);\n\t\t\tlet a = fibonacciPolynomial(n - 1);\n\t\t\tlet b = fibonacciPolynomial(n - 2);\n\t\t\t(x * a) + b\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _lucasSequence_4(_n, "U", 1n, -1n);
  }, ["n"]),
  "{ :n |\n\t\tn.lucasSequence('U', 1L, -1L)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciSequenceUpTo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [0];
    let _n = 1;
    let _k = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_n, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _n);
        _n = _plusSign_2(_n, _at_2(_answer, _k));
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [0];\n\t\tlet n = 1;\n\t\tlet k = 1;\n\t\t{\n\t\t\tn <= self\n\t\t}.whileTrue {\n\t\t\tanswer.add(n);\n\t\t\tn := n + answer[k];\n\t\t\tk := k + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "fibonacciWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _floor_1(_goldenRatio_1(_self));
    let _b = _floor_1(_goldenRatio_1(_plusSign_2(_self, 1)));
    /* Statements */
    return _hyphenMinus_2(_plusSign_2(2, _a), _b);
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.goldenRatio.floor;\n\t\tlet b = (self + 1).goldenRatio.floor;\n\t\t2 + a - b\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "lucasInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 1),
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
        let _phi = _goldenRatio_1(1);
        /* Statements */
        return _round_1(_circumflexAccent_2(_phi, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet phi = 1.goldenRatio;\n\t\t\t(phi ^ self).round\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "lucasNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_phi, _self),
      _asterisk_2(
        _cos_1(_pi_1(_self)),
        _circumflexAccent_2(_phi, _negate_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet phi = 1.goldenRatio;\n\t\t(phi ^ self) + (self.pi.cos * (phi ^ self.negate))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "lucasSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([1, 1], [2, 1, 3], _self);
  }, ["self"]),
  "{ :self |\n\t\t[1 1].linearRecurrence([2 1 3], self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "lucasSequence",
  ["n", "p", "q", "a", "b"],
  sl.annotateFunction(function (_n, _p, _q, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _n, _p, _q, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_a];
    let _i = 1;
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
        let _c = _b;
        /* Statements */
        _add_2(_answer, _b);
        _b = _hyphenMinus_2(_asterisk_2(_p, _b), _asterisk_2(_q, _a));
        _a = _c;
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _answer;
  }, ["n", "p", "q", "a", "b"]),
  "{ :n :p :q :a :b |\n\t\tlet answer = [a];\n\t\tlet i = 1;\n\t\t{ i < n }.whileTrue {\n\t\t\tlet c = b;\n\t\t\tanswer.add(b);\n\t\t\tb := (p * b) - (q * a);\n\t\t\ta := c;\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "lucasSequence",
  ["n", "k", "p", "q"],
  sl.annotateFunction(function (_n, _k, _p, _q) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _n, _k, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_k, [
      _hyphenMinusGreaterThanSign_2(
        "U",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lucasSequence_5(_n, _p, _q, 0, 1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "V",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lucasSequence_5(_n, _p, _q, 2, _p);
        }, []),
      ),
    ]);
  }, ["n", "k", "p", "q"]),
  "{ :n :k :p :q |\n\t\tk.caseOf(\n\t\t\t[\n\t\t\t\t'U' -> { lucasSequence(n, p, q, 0, 1) },\n\t\t\t\t'V' -> { lucasSequence(n, p, q, 2, p) }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "pellLucasSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [2, 2], _self);
  }, ["self"]),
  "{ :self |\n\t\t[2 1].linearRecurrence([2 2], self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "pellNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _x = _sqrt_1(2);
    /* Statements */
    return _real_1(
      _solidus_2(
        _hyphenMinus_2(
          _circumflexAccent_2(_plusSign_2(1, _x), _n),
          _circumflexAccent_2(_hyphenMinus_2(1, _x), _n),
        ),
        _asterisk_2(2, _x),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self;\n\t\tlet x = 2.sqrt;\n\t\t((((1 + x) ^ n) - ((1 - x) ^ n)) / (2 * x)).real\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "pellSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [0, 1], _self);
  }, ["self"]),
  "{ :self |\n\t\t[2 1].linearRecurrence([0 1], self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "pisanoPeriod",
  ["n"],
  sl.annotateFunction(function (_n) {
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = [1, 0];
        let _a0 = _a;
        let _k = 0;
        /* Statements */
        _doWhileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = _percentSign_2(_sum_1(_a), _n);
            /* Statements */
            _a = _rotateLeft_1(_a);
            _atPut_3(_a, 2, _s);
            return _k = _plusSign_2(_k, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_a, _a0);
          }, []),
        );
        return _k;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n <= 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet a = [1 0];\n\t\t\tlet a0 = a;\n\t\t\tlet k = 0;\n\t\t\t{\n\t\t\t\tlet s = a.sum % n;\n\t\t\t\ta := a.rotateLeft;\n\t\t\t\ta[2] := s;\n\t\t\t\tk := k + 1\n\t\t\t}.doWhileTrue {\n\t\t\t\ta != a0\n\t\t\t};\n\t\t\tk\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "stolarskyArray",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _cachedStolarskyArray_1(_system);
    let _d = _cartesianIndexToDiagonalIndex_2(_m, _n);
    /* Statements */
    return _atIfAbsentPut_3(
      _c,
      _d,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _phi = _goldenRatio_1(1);
        let _g_1 = sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _floor_1(_plusSign_2(_asterisk_2(_x, _phi), 0.5));
        }, ["x"]);
        /* Statements */
        return _if_3(
          _equalsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_m, 1),
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
                let _z = _plusSign_2(
                  _stolarskyArray_2(_hyphenMinus_2(_m, 1), 1),
                  1,
                );
                let _rowContains_2 = sl.annotateFunction(function (_r, _x) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _r, _x";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _k = _stolarskyArray_2(_r, 1);
                  /* Statements */
                  _whileTrue_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSign_2(_k, _x);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _k = _g_1(_k);
                    }, []),
                  );
                  return _equalsSign_2(_k, _x);
                }, ["r", "x"]);
                /* Statements */
                _whileTrue_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _anySatisfy_2(
                      _to_2(1, _hyphenMinus_2(_m, 1)),
                      sl.annotateFunction(function (_r) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _r";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _rowContains_2(_r, _z);
                      }, ["r"]),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _z = _plusSign_2(_z, 1);
                  }, []),
                );
                return _z;
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _g_1(_stolarskyArray_2(_m, _hyphenMinus_2(_n, 1)));
          }, []),
        );
      }, []),
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet c = system.cachedStolarskyArray;\n\t\tlet d = cartesianIndexToDiagonalIndex(m, n);\n\t\tc.atIfAbsentPut(d) {\n\t\t\tlet phi = 1.goldenRatio;\n\t\t\tlet g = { :x |\n\t\t\t\t(x * phi + 0.5).floor\n\t\t\t};\n\t\t\t(n = 1).if {\n\t\t\t\t(m = 1).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\tlet z = stolarskyArray(m - 1, 1) + 1;\n\t\t\t\t\tlet rowContains = { :r :x |\n\t\t\t\t\t\tlet k = stolarskyArray(r, 1);\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tk < x\n\t\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\t\tk := g(k)\n\t\t\t\t\t\t};\n\t\t\t\t\t\tk = x\n\t\t\t\t\t};\n\t\t\t\t\t{\n\t\t\t\t\t\t1.to(m - 1).anySatisfy { :r |\n\t\t\t\t\t\t\tr.rowContains(z)\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tz := z + 1\n\t\t\t\t\t};\n\t\t\t\t\tz\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tg(stolarskyArray(m, n - 1))\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "stolarskyIndex",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _wythoffIndex_2(_n, _stolarskyArray_2);
  }, ["n"]),
  "{ :n |\n\t\tn.wythoffIndex(stolarskyArray:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffArray",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _floor_1(_asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _phi));
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
            return _floor_1(
              _asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _square_1(_phi)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _wythoffArray_2(_m, _hyphenMinus_2(_n, 2)),
              _wythoffArray_2(_m, _hyphenMinus_2(_n, 1)),
            );
          }, []),
        );
      }, []),
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet phi = 1.goldenRatio;\n\t\t(n = 1).if {\n\t\t\t((m * phi).floor * phi).floor\n\t\t} {\n\t\t\t(n = 2).if {\n\t\t\t\t((m * phi).floor * phi.square).floor\n\t\t\t} {\n\t\t\t\tm.wythoffArray(n - 2) + m.wythoffArray(n - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffIndex",
  ["n", "array:/2"],
  sl.annotateFunction(function (_n, _array_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _array_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = 1;
      let _m = 1;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_m, _n);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = 1;
          /* Statements */
          _whileTrue_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_m, _n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _c = _plusSign_2(_c, 1);
              return _m = _array_2(_r, _c);
            }, []),
          );
          return _if_3(
            _equalsSign_2(_m, _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1([_r, _c]);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _r = _plusSign_2(_r, 1);
              return _m = _array_2(_r, 1);
            }, []),
          );
        }, []),
      );
      return [_r, 1];
    }, ["return:/1"]));
  }, ["n", "array:/2"]),
  "{ :n :array:/2 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet r = 1;\n\t\t\tlet m = 1;\n\t\t\t{ m < n }.whileTrue {\n\t\t\t\tlet c = 1;\n\t\t\t\t{ m < n }.whileTrue {\n\t\t\t\t\tc := c + 1;\n\t\t\t\t\tm := array(r, c)\n\t\t\t\t};\n\t\t\t\t(m = n).if {\n\t\t\t\t\t[r, c].return\n\t\t\t\t} {\n\t\t\t\t\tr := r + 1;\n\t\t\t\t\tm := array(r, 1)\n\t\t\t\t}\n\t\t\t};\n\t\t\t[r, 1]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffIndex",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _wythoffIndex_2(_n, _wythoffArray_2);
  }, ["n"]),
  "{ :n |\n\t\tn.wythoffIndex(wythoffArray:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffLower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _goldenRatio_1(1)));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1.goldenRatio).floor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffPair",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return [
      _floor_1(_asterisk_2(_self, _phi)),
      _floor_1(_asterisk_2(_self, _square_1(_phi))),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet phi = 1.goldenRatio;\n\t\t[(self * phi).floor, (self * phi.square).floor]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "wythoffUpper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _square_1(_goldenRatio_1(1))));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1.goldenRatio.square).floor\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FibonacciNumbers",
  "zeckendorfRepresentation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _f = _fibonacciSequenceUpTo_1(_self);
        let _k = _hyphenMinus_2(_size_1(_f), 1);
        let _z = [];
        /* Statements */
        _removeFirst_1(_f);
        _toByDo_4(
          _k,
          2,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _at_2(_f, _i);
            /* Statements */
            _add_2(
              _z,
              _if_3(
                _lessThanSignEqualsSign_2(_n, _self),
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
                  return 0;
                }, []),
              ),
            );
            return _ifTrue_2(
              _lessThanSignEqualsSign_2(_n, _self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _self = _hyphenMinus_2(_self, _n);
              }, []),
            );
          }, ["i"]),
        );
        return _z;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self <= 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet f = self.fibonacciSequenceUpTo;\n\t\t\tlet k = f.size - 1;\n\t\t\tlet z = [];\n\t\t\tf.removeFirst;\n\t\t\tk.toByDo(2, -1) { :i |\n\t\t\t\tlet n = f[i];\n\t\t\t\tz.add((n <= self).if { 1 } { 0 });\n\t\t\t\t(n <= self).ifTrue {\n\t\t\t\t\tself := self - n\n\t\t\t\t}\n\t\t\t};\n\t\t\tz\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FibonacciNumbers",
  "cachedFibonacciSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "fibonacciSequence",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fibonacciSequence_1(200);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('fibonacciSequence') {\n\t\t\t200.fibonacciSequence\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FibonacciNumbers",
  "cachedFibonacciSequenceExtendedTo",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _cachedFibonacciSequence_1(_self);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_anInteger, _size_1(_answer)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _fibonacciSequence_1(_anInteger);
        return _atPut_3(_cache_1(_self), "fibonacciSequence", _answer);
      }, []),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet answer = self.cachedFibonacciSequence;\n\t\t(anInteger > answer.size).ifTrue {\n\t\t\tanswer := anInteger.fibonacciSequence;\n\t\t\tself.cache.atPut('fibonacciSequence', answer)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FibonacciNumbers",
  "cachedStolarskyArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "stolarskyArray",
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
  "{ :self |\n\t\tself.cached('stolarskyArray') {\n\t\t\tMap()\n\t\t}\n\t}",
);
