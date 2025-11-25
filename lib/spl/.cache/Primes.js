/*  Requires: Cache Collection Fraction Integer  */

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "assertIsPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.assert {\n\t\t\tself.isPrime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "carmichaelLambda",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _eulerPhi_1(_n);
        /* Statements */
        return _if_3(
          _verticalLine_2(
            _includes_2([1, 2, 4], _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _isOdd_1(_n),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _isPrimePower_1(_n);
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
            return _e;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isInteger_1(_log_2(_n, 2)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _solidus_2(_e, 2);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lcm_1(
                  _collect_2(
                    _factorInteger_1(_n),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _carmichaelLambda_1(
                        _circumflexAccent_2(_at_2(_x, 1), _at_2(_x, 2)),
                      );
                    }, ["x"]),
                  ),
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
        return _error_2(_n, "carmichaelLambda: negative");
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n > 0).if {\n\t\t\tlet e = n.eulerPhi;\n\t\t\t(\n\t\t\t\t[1 2 4].includes(n) | {\n\t\t\t\t\tn.isOdd & {\n\t\t\t\t\t\tn.isPrimePower\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\te\n\t\t\t} {\n\t\t\t\tn.log(2).isInteger.if {\n\t\t\t\t\te / 2\n\t\t\t\t} {\n\t\t\t\t\tn.factorInteger.collect { :x |\n\t\t\t\t\t\t(x[1] ^ x[2]).carmichaelLambda\n\t\t\t\t\t}.lcm\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tn.error('carmichaelLambda: negative')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "copelandErdosSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = 1;
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
        _addAll_2(_answer, _integerDigits_2(_prime_1(_i), 10));
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _take_2(_answer, _n);
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tlet i = 1;\n\t\t{ answer.size < n }.whileTrue {\n\t\t\tanswer.addAll(\n\t\t\t\ti.prime.integerDigits(10)\n\t\t\t);\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer.take(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "distinctPrimeFactors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_asSet_1(_primeFactorization_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactorization.asSet.asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "euclidNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(1, _primorial_1(_n));
  }, ["n"]),
  "{ :n |\n\t\t1 + n.primorial\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "factorInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2([-1, 0, 1], _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [[_self, 1]];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNegative_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _factorInteger_1(_negate_1(_self));
            /* Statements */
            _addFirst_2(_answer, [-1, 1]);
            return _answer;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _sortedElements_1(_primeFactorization_1(_self)),
              _keyValue_1,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t[-1 0 1].includes(self).if {\n\t\t\t[[self, 1]]\n\t\t} {\n\t\t\tself.isNegative.if {\n\t\t\t\tlet answer = self.negate.factorInteger;\n\t\t\t\tanswer.addFirst([-1, 1]);\n\t\t\t\tanswer\n\t\t\t} {\n\t\t\t\tself.primeFactorization.sortedElements.collect(keyValue:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "fortunateNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _primorial_1(_n);
    /* Statements */
    return _hyphenMinus_2(_nextPrime_1(_plusSign_2(_p, 1)), _p);
  }, ["n"]),
  "{ :n |\n\t\tlet p = primorial(n);\n\t\tnextPrime(p + 1) - p\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "indexOfPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _binarySearch_2(
      _cachedPrimesListExtendedToPrime_2(_system, _self),
      _self,
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.cachedPrimesListExtendedToPrime(self).binarySearch(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "interprime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _prime_1(_plusSign_2(_n, 1));
    let _b = _prime_1(_plusSign_2(_n, 2));
    /* Statements */
    return _solidus_2(_plusSign_2(_a, _b), 2);
  }, ["n"]),
  "{ :n |\n\t\tlet a = (n + 1).prime;\n\t\tlet b = (n + 2).prime;\n\t\t(a + b) / 2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isAlmostPrime",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_primeFactors_1(_self)), _k);
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.primeFactors.size = k\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isBalancedPrime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPrime_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_primeBalance_1(_n), 0);
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n >= 3) & {\n\t\t\tn.isPrime & {\n\t\t\t\tn.primeBalance = 0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isCarmichaelNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _carmichaelLambda_1(_n);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_percentSign_2(_n, _m), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isPrime_1(_n));
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet m = n.carmichaelLambda;\n\t\t((n % m) = 1) & {\n\t\t\tn.isPrime.not\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isChenPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPrime_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _isPrime_1(_plusSign_2(_self, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isSemiprime_1(_plusSign_2(_self, 2));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPrime & {\n\t\t\t(self + 2).isPrime | {\n\t\t\t\t(self + 2).isSemiprime\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isComposite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isPrime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isPrime.not\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isCoprime",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_gcd_2(_self, _anInteger), 1);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.gcd(anInteger) = 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isFullReptendPrime",
  ["n", "p"],
  sl.annotateFunction(function (_n, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_multiplicativeOrder_2(_p, _n), _hyphenMinus_2(_n, 1));
  }, ["n", "p"]),
  "{ :n :p |\n\t\tmultiplicativeOrder(p, n) = (n - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isFullReptendPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, 7),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPrime_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2(_primitiveRootList_1(_self), 10);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself = 7 | {\n\t\t\tself.isPrime & {\n\t\t\t\tself.primitiveRootList.includes(10)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isPowerfulNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _valuesAndCounts_1(_primeFactorization_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_each, 1);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactorization.valuesAndCounts.allSatisfy { :each |\n\t\t\teach > 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCachedPrime_2(_system, _self),
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
        } /* Statements */
        return _isPrimeTrialDivision_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.isCachedPrime(self).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.isPrimeTrialDivision\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isPrimeTrialDivision",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsInteger_2(_self, "isPrimeTrialDivision");
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 1),
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
          _equalsSign_2(_percentSign_2(_self, 2), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_self, 2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _limit = _floor_1(_sqrt_1(_self));
            /* Statements */
            return _noneSatisfy_2(
              _toBy_3(3, _limit, 2),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_percentSign_2(_self, _each), 0);
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.assertIsInteger('isPrimeTrialDivision');\n\t\t(self <= 1).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self % 2 = 0).if {\n\t\t\t\tself = 2\n\t\t\t} {\n\t\t\t\tlet limit = self.sqrt.floor;\n\t\t\t\t3.toBy(limit, 2).noneSatisfy { :each |\n\t\t\t\t\tself % each = 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isPrimeWilson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 2),
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
        return _divisible_2(
          _plusSign_2(_factorial_1(_hyphenMinus_2(_self, 1)), 1),
          _self,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 2).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t((self - 1).factorial + 1).divisible(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isPythagoreanPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPrime_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_percentSign_2(_hyphenMinus_2(_self, 1), 4), 0);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPrime & {\n\t\t\t((self - 1) % 4) = 0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isLesserCousinPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPrime_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_plusSign_2(_self, 4));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPrime & {\n\t\t\t(self + 4).isPrime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isLesserTwinPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPrime_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_plusSign_2(_self, 2), _nextPrime_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPrime & {\n\t\t\tself + 2 = self.nextPrime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isSemiprime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_sum_1(_column_2(_factorInteger_1(_n), 2)), 2);
  }, ["n"]),
  "{ :n |\n\t\tn.factorInteger.column(2).sum = 2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isSternPrime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPrime_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _floor_1(_sqrt_1(_solidus_2(_n, 2)));
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _greaterThanSign_2(_k, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _not_1(
                  _isPrime_1(_hyphenMinus_2(_n, _asterisk_2(2, _square_1(_k)))),
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
            return _k = _hyphenMinus_2(_k, 1);
          }, []),
        );
        return _isZero_1(_k);
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.isPrime & {\n\t\t\tlet k = (n / 2).sqrt.floor;\n\t\t\t{\n\t\t\t\tk > 0 & {\n\t\t\t\t\t(n - (2 * k.square)).isPrime.not\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tk := k - 1\n\t\t\t};\n\t\t\tk.isZero\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isStrongPseudoprime",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _not_1(_isEven_1(_n)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _not_1(_isPrime_1(_n)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = _integerExponent_2(_hyphenMinus_2(_n, 1), 2);
            let _d = _solidus_2(
              _hyphenMinus_2(_n, 1),
              _circumflexAccent_2(2, _s),
            );
            /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_powerMod_3(_b, _d, _n), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _anySatisfy_2(
                  _to_2(1, _s),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _z = _asterisk_2(
                      _d,
                      _circumflexAccent_2(2, _hyphenMinus_2(_i, 1)),
                    );
                    /* Statements */
                    return _equalsSign_2(
                      _powerMod_3(_b, _z, _n),
                      _hyphenMinus_2(_n, 1),
                    );
                  }, ["i"]),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "b"]),
  "{ :n :b |\n\t\tn.isEven.not & {\n\t\t\tn.isPrime.not & {\n\t\t\t\tlet s = integerExponent(n - 1, 2);\n\t\t\t\tlet d = (n - 1) / (2 ^ s);\n\t\t\t\tpowerMod(b, d, n) = 1 | {\n\t\t\t\t\t1.to(s).anySatisfy { :i |\n\t\t\t\t\t\tlet z = d * (2 ^ (i - 1));\n\t\t\t\t\t\tpowerMod(b, z, n) = (n - 1)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isStrongPrime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPrime_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_primeBalance_1(_n), 0);
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n >= 3) & {\n\t\t\tn.isPrime & {\n\t\t\t\tn.primeBalance > 0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "isWeakPrime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPrime_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_primeBalance_1(_n), 0);
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n >= 3) & {\n\t\t\tn.isPrime & {\n\t\t\t\tn.primeBalance < 0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "leastPrimeFactor",
  ["n"],
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
          return _lessThanSign_2(_n, 2);
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
          return _divisible_2(_n, 2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 2;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _divisible_2(_n, 3);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 3;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _divisible_2(_n, 5);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 5;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
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
          } /* Statements */
          return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _return_1";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _inc = [4, 2, 4, 2, 4, 6, 2, 6];
            let _k = 7;
            let _i = 1;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_asterisk_2(_k, _k), _n);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifTrue_2(
                  _divisible_2(_n, _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _return_1(_k);
                  }, []),
                );
                _k = _plusSign_2(_k, _at_2(_inc, _i));
                return _i = _if_3(
                  _lessThanSign_2(_i, 8),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(_i, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return 1;
                  }, []),
                );
              }, []),
            );
            return _n;
          }, ["return:/1"]));
        }, []),
      ),
    ]);
  }, ["n"]),
  "{ :n |\n\t\t[\n\t\t\t{ n < 2 } -> { 0 },\n\t\t\t{ divisible(n, 2) } -> { 2 },\n\t\t\t{ divisible(n, 3) } -> { 3 },\n\t\t\t{ divisible(n, 5) } -> { 5 },\n\t\t\t{ true } -> {\n\t\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t\tlet inc = [4 2 4 2 4 6 2 6];\n\t\t\t\t\tlet k = 7;\n\t\t\t\t\tlet i = 1;\n\t\t\t\t\t{ k * k <= n }.whileTrue {\n\t\t\t\t\t\tdivisible(n, k).ifTrue {\n\t\t\t\t\t\t\tk.return\n\t\t\t\t\t\t};\n\t\t\t\t\t\tk := k + inc[i];\n\t\t\t\t\t\ti := (i < 8).if { i + 1 } { 1 }\n\t\t\t\t\t};\n\t\t\t\t\tn\n\t\t\t\t}\n\t\t\t}\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "leastPrimeFactorList",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lp = _List_2(_n, 0);
    let _pr = [];
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = 1;
        let _break = false;
        /* Statements */
        _ifTrue_2(
          _equalsSign_2(_at_2(_lp, _i), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_lp, _i, _i);
            return _add_2(_pr, _i);
          }, []),
        );
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _break,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSign_2(_asterisk_2(_i, _at_2(_pr, _j)), _n);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_lp, _asterisk_2(_i, _at_2(_pr, _j)), _at_2(_pr, _j));
            _ifTrue_2(
              _equalsSign_2(_at_2(_pr, _j), _at_2(_lp, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _break = true;
              }, []),
            );
            return _j = _plusSign_2(_j, 1);
          }, []),
        );
      }, ["i"]),
    );
    return [_lp, _pr];
  }, ["n"]),
  "{ :n |\n\t\tlet lp = List(n, 0);\n\t\tlet pr = [];\n\t\t2.toDo(n) { :i |\n\t\t\tlet j = 1;\n\t\t\tlet break = false;\n\t\t\t(lp[i] = 0).ifTrue {\n\t\t\t\tlp[i] := i;\n\t\t\t\tpr.add(i)\n\t\t\t};\n\t\t\t{\n\t\t\t\tbreak | {\n\t\t\t\t\ti * pr[j] > n\n\t\t\t\t}\n\t\t\t}.whileFalse {\n\t\t\t\tlp[i * pr[j]] := pr[j];\n\t\t\t\t(pr[j] = lp[i]).ifTrue {\n\t\t\t\t\tbreak := true\n\t\t\t\t};\n\t\t\t\tj := j + 1\n\t\t\t}\n\t\t};\n\t\t[lp, pr]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "leastPrimeGreaterThanOrEqualTo",
  ["self", "extendCache"],
  sl.annotateFunction(function (_self, _extendCache) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _extendCache";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _self;
    /* Statements */
    _ifTrue_2(
      _ampersand_2(
        _isEven_1(_answer),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _exclamationMarkEqualsSign_2(_answer, 2);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, []),
    );
    _ifTrue_2(
      _extendCache,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cachedPrimesListExtendedToPrime_2(_system, _self);
      }, []),
    );
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrimeTrialDivision_1(_answer);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 2);
      }, []),
    );
    return _answer;
  }, ["self", "extendCache"]),
  "{ :self :extendCache |\n\t\tlet answer = self;\n\t\t(\n\t\t\tanswer.isEven & {\n\t\t\t\tanswer != 2\n\t\t\t}\n\t\t).ifTrue {\n\t\t\tanswer := answer + 1\n\t\t};\n\t\textendCache.ifTrue {\n\t\t\tsystem.cachedPrimesListExtendedToPrime(self)\n\t\t};\n\t\t{\n\t\t\tanswer.isPrimeTrialDivision\n\t\t}.whileFalse {\n\t\t\tanswer := answer + 2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "leastPrimeGreaterThanOrEqualTo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _leastPrimeGreaterThanOrEqualTo_2(_self, false);
  }, ["self"]),
  "{ :self |\n\t\tself.leastPrimeGreaterThanOrEqualTo(false)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "liouvilleLambda",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEven_1(_size_1(_primeFactors_1(_self))),
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
        return -1;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactors.size.isEven.if {\n\t\t\t1\n\t\t} {\n\t\t\t-1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "mangoldtLambda",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primeFactors = _factorInteger_1(_n);
    let _isPrimePower = _ampersand_2(
      _equalsSign_2(_size_1(_primeFactors), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_at_2(_at_2(_primeFactors, 1), 1));
      }, []),
    );
    /* Statements */
    return _if_3(
      _isPrimePower,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _log_1(_at_2(_at_2(_primeFactors, 1), 1));
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
  "{ :n |\n\t\tlet primeFactors = n.factorInteger;\n\t\tlet isPrimePower = primeFactors.size = 1 & {\n\t\t\tprimeFactors[1][1].isPrime\n\t\t};\n\t\tisPrimePower.if {\n\t\t\tprimeFactors[1][1].log\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "mertensFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _to_2(1, _self),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _moebiusMu_1(_k);
      }, ["k"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.to(self).sum { :k |\n\t\t\tk.moebiusMu\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "millerRabinPrimalityTest",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d, _s, _a, _x, _r;
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _equalsSign_2(_self, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        }, []),
      );
      _ifTrue_2(
        _lessThanSignEqualsSign_2(_self, 3),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(true);
        }, []),
      );
      _ifTrue_2(
        _isEven_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        }, []),
      );
      _d = _hyphenMinus_2(_self, 1);
      _s = 0;
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_reverseSolidusReverseSolidus_2(_d, 2), 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _d = _solidus_2(_d, 2);
          return _s = _plusSign_2(_s, 1);
        }, []),
      );
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _k = _hyphenMinus_2(_k, 1);
          return _greaterThanSignEqualsSign_2(_k, 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _a = _randomLargeInteger_3(
            _system,
            _asterisk_2(_one_1(_self), 2),
            _hyphenMinus_2(_self, 2),
          );
          _x = _reverseSolidusReverseSolidus_2(
            _circumflexAccent_2(_a, _d),
            _self,
          );
          return _ifFalse_2(
            _equalsSign_2(_x, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _r = -1;
              _whileTrue_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _r = _plusSign_2(_r, 1);
                  return _ampersand_2(
                    _lessThanSign_2(_r, _s),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _exclamationMarkEqualsSign_2(
                        _x,
                        _hyphenMinus_2(_self, 1),
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
                  return _x = _reverseSolidusReverseSolidus_2(
                    _circumflexAccent_2(_x, 2),
                    _self,
                  );
                }, []),
              );
              return _ifTrue_2(
                _exclamationMarkEqualsSign_2(_x, _hyphenMinus_2(_self, 1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, []),
          );
        }, []),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "k"]),
  "{ :self :k |\n\t\tvar d, s, a, x, r;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self = 1).ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t(self <= 3).ifTrue {\n\t\t\t\ttrue.return\n\t\t\t};\n\t\t\tself.isEven.ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\td := self - 1;\n\t\t\ts := 0;\n\t\t\t{\n\t\t\t\td \\\\ 2 = 0\n\t\t\t}.whileTrue {\n\t\t\t\td := d / 2;\n\t\t\t\ts := s + 1\n\t\t\t};\n\t\t\t{\n\t\t\t\tk := k - 1;\n\t\t\t\tk >= 0\n\t\t\t}.whileTrue {\n\t\t\t\ta := system.randomLargeInteger(self.one * 2, self - 2);\n\t\t\t\tx := (a ^ d) \\\\ self;\n\t\t\t\t(x = 1).ifFalse {\n\t\t\t\t\tr := -1;\n\t\t\t\t\t{\n\t\t\t\t\t\tr := r + 1;\n\t\t\t\t\t\tr < s & {\n\t\t\t\t\t\t\tx != (self - 1)\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tx := (x ^ 2) \\\\ self\n\t\t\t\t\t};\n\t\t\t\t\t(x != (self - 1)).ifTrue {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "moebiusMu",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareFree_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _liouvilleLambda_1(_self);
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
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareFree.if {\n\t\t\tself.liouvilleLambda\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "nearestPrime",
  ["n"],
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
        return 2;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _nextPrime_1(_n);
        let _b = _prime_1(_hyphenMinus_2(_primePi_1(_a), 1));
        /* Statements */
        return _if_3(
          _lessThanSign_2(_a, _hyphenMinus_2(_asterisk_2(2, _n), _b)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _a;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b;
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n <= 2).if {\n\t\t\t2\n\t\t} {\n\t\t\tlet a = n.nextPrime;\n\t\t\tlet b = (a.primePi - 1).prime;\n\t\t\t(a < (2 * n - b)).if {\n\t\t\t\ta\n\t\t\t} {\n\t\t\t\tb\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "nextPrime",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _sign_1(_k);
    let _m = _caseOf_2(_s, [
      _hyphenMinusGreaterThanSign_2(
        1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _nextPrime_1(_n);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        -1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _previousPrime_1(_n);
        }, []),
      ),
    ]);
    /* Statements */
    return _if_3(
      _equalsSign_2(_abs_1(_k), 1),
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
        return _nextPrime_2(_m, _hyphenMinus_2(_k, _s));
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet s = k.sign;\n\t\tlet m = s.caseOf(\n\t\t\t[\n\t\t\t\t1 -> { n.nextPrime },\n\t\t\t\t-1 -> { n.previousPrime }\n\t\t\t]\n\t\t);\n\t\t(k.abs = 1).if {\n\t\t\tm\n\t\t} {\n\t\t\tm.nextPrime(k - s)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "nextPrime",
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
        return 2;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _plusSign_2(_floor_1(_n), 1);
        _ifTrue_2(
          _isEven_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _plusSign_2(_n, 1);
          }, []),
        );
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isPrime_1(_n);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _plusSign_2(_n, 2);
          }, []),
        );
        return _n;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n < 2).if {\n\t\t\t2\n\t\t} {\n\t\t\tn := n.floor + 1;\n\t\t\tn.isEven.ifTrue {\n\t\t\t\tn := n + 1\n\t\t\t};\n\t\t\t{\n\t\t\t\tn.isPrime\n\t\t\t}.whileFalse {\n\t\t\t\tn := n + 2\n\t\t\t};\n\t\t\tn\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "previousPrime",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_n, "previousPrime");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _hyphenMinus_2(_ceiling_1(_n), 1);
        _ifTrue_2(
          _isEven_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _hyphenMinus_2(_n, 1);
          }, []),
        );
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isPrime_1(_n);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _hyphenMinus_2(_n, 2);
          }, []),
        );
        return _n;
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n <= 3).if {\n\t\t\t(n = 3).if {\n\t\t\t\t2\n\t\t\t} {\n\t\t\t\tn.error('previousPrime')\n\t\t\t}\n\t\t} {\n\t\t\tn := n.ceiling - 1;\n\t\t\tn.isEven.ifTrue {\n\t\t\t\tn := n - 1\n\t\t\t};\n\t\t\t{\n\t\t\t\tn.isPrime\n\t\t\t}.whileFalse {\n\t\t\t\tn := n - 2\n\t\t\t};\n\t\t\tn\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "prime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primesList = _cachedPrimesListExtendedToIndex_2(_system, _self);
    /* Statements */
    return _at_2(_primesList, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet primesList = system.cachedPrimesListExtendedToIndex(self);\n\t\tprimesList[self]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeBalance",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _primePi_1(_n);
    let _a = _prime_1(_hyphenMinus_2(_k, 1));
    let _b = _prime_1(_plusSign_2(_k, 1));
    /* Statements */
    return _lessThanSignEqualsSignGreaterThanSign_2(
      _hyphenMinus_2(_n, _a),
      _hyphenMinus_2(_b, _n),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet k = n.primePi;\n\t\tlet a = (k - 1).prime;\n\t\tlet b = (k + 1).prime;\n\t\t(n - a) <=> (b - n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeDistance",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_hyphenMinus_2(_n, _nearestPrime_1(_n)));
  }, ["n"]),
  "{ :n |\n\t\t(n - n.nearestPrime).abs\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeGap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_prime_1(_plusSign_2(_self, 1)), _prime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t(self + 1).prime - self.prime\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeDivisors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _column_2(_factorInteger_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.factorInteger.column(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeExponents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _factorInteger_1(_self);
    let _n = _at_2(_last_1(_p), 1);
    let _m = _matrixToMap_1(_p);
    /* Statements */
    return _collect_2(
      _primesUpTo_1(_n),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _m,
          _each,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.factorInteger;\n\t\tlet n = p.last.at(1);\n\t\tlet m = p.matrixToMap;\n\t\tn.primesUpTo.collect { :each |\n\t\t\tm.atIfAbsent(each) {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeFactorization",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Multiset_1(_primeFactors_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactors.Multiset\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeFactors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 1),
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
        } /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _index = 1;
          let _prime = 2;
          let _k = _self;
          let _answer = [];
          /* Statements */
          _repeatForever_1(sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _prime = _prime_1(_index);
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_percentSign_2(_k, _prime), 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _prime);
                _k = _solidusSolidus_2(_k, _prime);
                return _ifTrue_2(
                  _equalsSign_2(_k, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _return_1(_answer);
                  }, []),
                );
              }, []),
            );
            _ifTrue_2(
              _greaterThanSign_2(_square_1(_prime), _k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _normal_1(_k));
                return _return_1(_answer);
              }, []),
            );
            return _index = _plusSign_2(_index, 1);
          }, []));
          return _answer;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet index = 1;\n\t\t\t\tlet prime = 2;\n\t\t\t\tlet k = self;\n\t\t\t\tlet answer = [];\n\t\t\t\t{\n\t\t\t\t\tprime := index.prime;\n\t\t\t\t\t{\n\t\t\t\t\t\tk % prime = 0\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tanswer.add(prime);\n\t\t\t\t\t\tk := k // prime;\n\t\t\t\t\t\t(k = 1).ifTrue {\n\t\t\t\t\t\t\tanswer.return\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\t(prime.square > k).ifTrue {\n\t\t\t\t\t\tanswer.add(k.normal);\n\t\t\t\t\t\tanswer.return\n\t\t\t\t\t};\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}.repeatForever;\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeFactorsTrialDivision",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _m = 3;
    let _answer = [];
    /* Statements */
    _whileTrue_2(
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
        _add_2(_answer, 2);
        return _n = _solidusSolidus_2(_n, 2);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_asterisk_2(_m, _m), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_percentSign_2(_n, _m), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _m);
            return _n = _solidusSolidus_2(_n, _m);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _m = _plusSign_2(_m, 2);
          }, []),
        );
      }, []),
    );
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _n);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet n = self;\n\t\tlet m = 3;\n\t\tlet answer = [];\n\t\t{\n\t\t\tn % 2 = 0\n\t\t}.whileTrue {\n\t\t\tanswer.add(2);\n\t\t\tn := n // 2\n\t\t};\n\t\t{\n\t\t\tm * m <= n\n\t\t}.whileTrue {\n\t\t\t(n % m = 0).if {\n\t\t\t\tanswer.add(m);\n\t\t\t\tn := n // m\n\t\t\t} {\n\t\t\t\tm := m + 2\n\t\t\t}\n\t\t};\n\t\t(n != 1).ifTrue {\n\t\t\tanswer.add(n)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeFactorsWheel",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _inc = [4, 2, 4, 2, 4, 6, 2, 6];
    let _factors = [];
    let _k = 7;
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _divisible_2(_n, 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_factors, 2);
        return _n = _solidus_2(_n, 2);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _divisible_2(_n, 3);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_factors, 3);
        return _n = _solidus_2(_n, 3);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _divisible_2(_n, 5);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_factors, 5);
        return _n = _solidus_2(_n, 5);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_asterisk_2(_k, _k), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _divisible_2(_n, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_factors, _k);
            return _n = _solidus_2(_n, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _k = _plusSign_2(_k, _at_2(_inc, _i));
            return _i = _if_3(
              _lessThanSign_2(_i, 8),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _plusSign_2(_i, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
            );
          }, []),
        );
      }, []),
    );
    _ifTrue_2(
      _greaterThanSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_factors, _n);
      }, []),
    );
    return _factors;
  }, ["n"]),
  "{ :n |\n\t\tlet inc = [4 2 4 2 4 6 2 6];\n\t\tlet factors = [];\n\t\tlet k = 7;\n\t\tlet i = 1;\n\t\t{ divisible(n, 2) }.whileTrue {\n\t\t\tfactors.add(2);\n\t\t\tn := n / 2\n\t\t};\n\t\t{ divisible(n, 3) }.whileTrue {\n\t\t\tfactors.add(3);\n\t\t\tn := n / 3\n\t\t};\n\t\t{ divisible(n, 5) }.whileTrue {\n\t\t\tfactors.add(5);\n\t\t\tn := n / 5\n\t\t};\n\t\t{ k * k <= n }.whileTrue {\n\t\t\tdivisible(n, k).if {\n\t\t\t\tfactors.add(k);\n\t\t\t\tn := n / k\n\t\t\t} {\n\t\t\t\tk := k + inc[i];\n\t\t\t\ti := (i < 8).if { i + 1 } { 1 }\n\t\t\t}\n\t\t};\n\t\t(n > 1).ifTrue {\n\t\t\tfactors.add(n)\n\t\t};\n\t\tfactors\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeNu",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_valuesAndCounts_1(_primeFactorization_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactorization.valuesAndCounts.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeOmega",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_primeFactors_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactors.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primePi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _wheelSieveDo_2(
      _self,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, ["unusedItem"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.wheelSieveDo { :unusedItem |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _maxIfEmpty_2(
      _primeFactors_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.primeFactors.maxIfEmpty {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeSignature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_2(_column_2(_factorInteger_1(_self), 2), _greaterThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.factorInteger.column(2).sort(>)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primesBetweenAnd",
  ["iMin", "iMax"],
  sl.annotateFunction(function (_iMin, _iMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iMin, _iMax";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _startIndex = _if_3(
      _isPrime_1(_iMin),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _indexOfPrime_1(_iMin);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _indexOfPrime_1(_nextPrime_1(_iMin));
      }, []),
    );
    /* Statements */
    return _copyFromTo_3(
      _cachedPrimesList_1(_system),
      _startIndex,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_iMax)), 1),
    );
  }, ["iMin", "iMax"]),
  "{ :iMin :iMax |\n\t\tlet startIndex = iMin.isPrime.if {\n\t\t\tiMin.indexOfPrime\n\t\t} {\n\t\t\tiMin.nextPrime.indexOfPrime\n\t\t};\n\t\tsystem.cachedPrimesList.copyFromTo(\n\t\t\tstartIndex,\n\t\t\tiMax.nextPrime.indexOfPrime - 1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primesList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_cachedPrimesListExtendedToIndex_2(_system, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.cachedPrimesListExtendedToIndex(self).take(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "wheelSieveDo",
  ["limit", "aBlock:/1"],
  sl.annotateFunction(function (_limit, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _limit, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _greaterThanSignEqualsSign_2(_limit, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _List_2(_plusSign_2(_limit, 1), false);
        let _k = 9;
        let _p1 = 11;
        let _p2 = 121;
        let _z = [
          2,
          4,
          2,
          4,
          6,
          2,
          6,
          4,
          2,
          4,
          6,
          6,
          2,
          6,
          4,
          2,
          6,
          4,
          6,
          8,
          4,
          2,
          4,
          2,
          4,
          8,
          6,
          4,
          6,
          2,
          4,
          6,
          2,
          6,
          6,
          4,
          2,
          4,
          6,
          2,
          6,
          4,
          2,
          4,
          2,
          10,
          2,
          10,
        ];
        let _w = 0;
        let _j = 3;
        /* Statements */
        _atPut_3(_c, 1, true);
        _atPut_3(_c, 2, true);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_k, _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_c, _plusSign_2(_k, 1), true);
            return _k = _plusSign_2(_k, 6);
          }, []),
        );
        _k = 25;
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_k, _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_c, _plusSign_2(_k, 1), true);
            return _k = _plusSign_2(_k, 10);
          }, []),
        );
        _k = 49;
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_k, _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_c, _plusSign_2(_k, 1), true);
            return _k = _plusSign_2(_k, 14);
          }, []),
        );
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_p2, _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _p2;
            let _ok = true;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_i, _limit);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_c, _plusSign_2(_i, 1), true);
                return _i = _plusSign_2(_i, _asterisk_2(2, _p1));
              }, []),
            );
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ok;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _p1 = _plusSign_2(_p1, _at_2(_z, _plusSign_2(_w, 1)));
                _w = _percentSign_2(_plusSign_2(_w, 1), 48);
                return _ok = _at_2(_c, _plusSign_2(_p1, 1));
              }, []),
            );
            return _p2 = _asterisk_2(_p1, _p1);
          }, []),
        );
        _aBlock_1(2);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_j, _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifFalse_2(
              _at_2(_c, _plusSign_2(_j, 1)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_1(_j);
              }, []),
            );
            return _j = _plusSign_2(_j, 2);
          }, []),
        );
        return null;
      }, []),
    );
  }, ["limit", "aBlock:/1"]),
  "{ :limit :aBlock:/1 |\n\t\t(limit >= 2).ifTrue {\n\t\t\tlet c = List(limit + 1, false);\n\t\t\tlet k = 9;\n\t\t\tlet p1 = 11;\n\t\t\tlet p2 = 121;\n\t\t\t/* First differences of 11-rough numbers: not divisible by 2, 3, 5 or 7. https://oeis.org/A049296 */\n\t\t\tlet z = [2 4 2 4 6 2 6 4 2 4 6 6 2 6 4 2 6 4 6 8 4 2 4 2 4 8 6 4 6 2 4 6 2 6 6 4 2 4 6 2 6 4 2 4 2 10 2 10];\n\t\t\tlet w = 0;\n\t\t\tlet j = 3;\n\t\t\tc[1] := true;\n\t\t\tc[2] := true;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 6\n\t\t\t};\n\t\t\tk := 25;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 10\n\t\t\t};\n\t\t\tk := 49;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 14\n\t\t\t};\n\t\t\t{ p2 <= limit }.whileTrue {\n\t\t\t\tlet i = p2;\n\t\t\t\tlet ok = true;\n\t\t\t\t{ i <= limit }.whileTrue {\n\t\t\t\t\tc[i + 1] := true;\n\t\t\t\t\ti := i + (2 * p1)\n\t\t\t\t};\n\t\t\t\t{ ok }.whileTrue {\n\t\t\t\t\tp1 := p1 + z[w + 1];\n\t\t\t\t\tw := (w + 1) % 48;\n\t\t\t\t\tok := c[p1 + 1]\n\t\t\t\t};\n\t\t\t\tp2 := p1 * p1\n\t\t\t};\n\t\t\taBlock(2);\n\t\t\t{ j <= limit }.whileTrue {\n\t\t\t\tc[j + 1].ifFalse {\n\t\t\t\t\taBlock(j)\n\t\t\t\t};\n\t\t\t\tj := j + 2\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "wheelSieve",
  ["limit"],
  sl.annotateFunction(function (_limit) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = [];
    /* Statements */
    _wheelSieveDo_2(
      _limit,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_p, _i);
      }, ["i"]),
    );
    return _p;
  }, ["limit"]),
  "{ :limit |\n\t\tlet p = [];\n\t\tlimit.wheelSieveDo { :i |\n\t\t\tp.add(i)\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primesUpTo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _cachedPrimesList_1(_system),
      1,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.cachedPrimesList.copyFromTo(\n\t\t\t1,\n\t\t\tself.nextPrime.indexOfPrime - 1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primesUpToDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1);
    let _primesList = _cachedPrimesListExtendedToIndex_2(_system, _k);
    /* Statements */
    return _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_primesList, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet k = self.nextPrime.indexOfPrime - 1;\n\t\tlet primesList = system.cachedPrimesListExtendedToIndex(k);\n\t\t1.toDo(k) { :index |\n\t\t\taBlock(primesList[index])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primitiveRootList",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _eulerPhi_1(_n);
    let _p = _primeFactors_1(_e);
    /* Statements */
    return _select_2(
      _select_2(
        _to_2(1, _hyphenMinus_2(_n, 1)),
        sl.annotateFunction(function (_g) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _g";
            throw new Error(errorMessage);
          } /* Statements */
          return _isCoprime_2(_g, _n);
        }, ["g"]),
      ),
      sl.annotateFunction(function (_g) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _g";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _collect_2(
            _p,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _powerMod_3(_g, _solidus_2(_e, _i), _n);
            }, ["i"]),
          ),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_m, 1);
          }, ["m"]),
        );
      }, ["g"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet e = n.eulerPhi;\n\t\tlet p = e.primeFactors;\n\t\t1.to(n - 1).select { :g |\n\t\t\tg.isCoprime(n)\n\t\t}.select { :g |\n\t\t\tp.collect { :i |\n\t\t\t\tg.powerMod(e / i, n)\n\t\t\t}.allSatisfy { :m |\n\t\t\t\tm > 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primorial",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_2(_to_2(1, _n), _prime_1);
  }, ["n"]),
  "{ :n |\n\t\t1.to(n).product(prime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "radical",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_primeDivisors_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.primeDivisors.product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfAtkinDo",
  ["limit", "aBlock:/1"],
  sl.annotateFunction(function (_limit, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _limit, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_plusSign_2(_limit, 1), false);
    let _k = _integerSquareRoot_1(_limit);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_limit, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_a, 2, true);
      }, []),
    );
    _ifTrue_2(
      _greaterThanSign_2(_limit, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_a, 3, true);
      }, []),
    );
    _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _plusSign_2(
              _asterisk_2(_asterisk_2(4, _x), _x),
              _asterisk_2(_y, _y),
            );
            /* Statements */
            _ifTrue_2(
              _ampersand_2(
                _lessThanSignEqualsSign_2(_n, _limit),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _verticalLine_2(
                    _equalsSign_2(_percentSign_2(_n, 12), 1),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_percentSign_2(_n, 12), 5);
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
                return _atPut_3(_a, _n, _not_1(_at_2(_a, _n)));
              }, []),
            );
            _n = _plusSign_2(
              _asterisk_2(_asterisk_2(3, _x), _x),
              _asterisk_2(_y, _y),
            );
            _ifTrue_2(
              _ampersand_2(
                _lessThanSignEqualsSign_2(_n, _limit),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_percentSign_2(_n, 12), 7);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_a, _n, _not_1(_at_2(_a, _n)));
              }, []),
            );
            _n = _hyphenMinus_2(
              _asterisk_2(_asterisk_2(3, _x), _x),
              _asterisk_2(_y, _y),
            );
            return _ifTrue_2(
              _ampersand_2(
                _greaterThanSign_2(_x, _y),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _lessThanSignEqualsSign_2(_n, _limit),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_percentSign_2(_n, 12), 11);
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
                return _atPut_3(_a, _n, _not_1(_at_2(_a, _n)));
              }, []),
            );
          }, ["y"]),
        );
      }, ["x"]),
    );
    _toDo_3(
      5,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _at_2(_a, _i),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toByDo_4(
              _asterisk_2(_i, _i),
              _limit,
              _asterisk_2(_i, _i),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_a, _j, false);
              }, ["j"]),
            );
          }, []),
        );
      }, ["i"]),
    );
    _toDo_3(
      2,
      _limit,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _at_2(_a, _i),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_i);
          }, []),
        );
      }, ["i"]),
    );
    return null;
  }, ["limit", "aBlock:/1"]),
  "{ :limit :aBlock:/1 |\n\t\tlet a = List(limit + 1, false);\n\t\tlet k = limit.integerSquareRoot;\n\t\t(limit > 2).ifTrue {\n\t\t\ta[2] := true\n\t\t};\n\t\t(limit > 3).ifTrue {\n\t\t\ta[3] := true\n\t\t};\n\t\t1.toDo(k) { :x |\n\t\t\t1.toDo(k) { :y |\n\t\t\t\tlet n = (4 * x * x) + (y * y);\n\t\t\t\t(n <= limit & { n % 12 = 1 | { n % 12 = 5 } }).ifTrue {\n\t\t\t\t\ta[n] := a[n].not\n\t\t\t\t};\n\t\t\t\tn := (3 * x * x) + (y * y);\n\t\t\t\t(n <= limit & { n % 12 = 7 }).ifTrue {\n\t\t\t\t\ta[n] := a[n].not\n\t\t\t\t};\n\t\t\t\tn := (3 * x * x) - (y * y);\n\t\t\t\t(x > y & { n <= limit & { n % 12 = 11 } }).ifTrue {\n\t\t\t\t\ta[n] := a[n].not\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t5.toDo(k) { :i |\n\t\t\ta[i].ifTrue {\n\t\t\t\t(i * i).toByDo(limit, i * i) { :j |\n\t\t\t\t\ta[j] := false\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t2.toDo(limit) { :i |\n\t\t\ta[i].ifTrue {\n\t\t\t\taBlock(i)\n\t\t\t}\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfAtkin",
  ["limit"],
  sl.annotateFunction(function (_limit) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = [];
    /* Statements */
    _sieveOfAtkinDo_2(
      _limit,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_p, _i);
      }, ["i"]),
    );
    return _p;
  }, ["limit"]),
  "{ :limit |\n\t\tlet p = [];\n\t\tlimit.sieveOfAtkinDo { :i |\n\t\t\tp.add(i)\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfEratosthenesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _self;
    let _flags = _List_2(_size, true);
    /* Statements */
    return _toDo_3(
      2,
      _size,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _at_2(_flags, _hyphenMinus_2(_i, 1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _k = _plusSign_2(_i, _i);
            /* Statements */
            _aBlock_1(_i);
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_k, _size);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_flags, _hyphenMinus_2(_k, 1), false);
                return _k = _plusSign_2(_k, _i);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet size = self;\n\t\tlet flags = List(size, true);\n\t\t2.toDo(size) { :i |\n\t\t\tflags[i - 1].ifTrue {\n\t\t\t\tlet k = i + i;\n\t\t\t\taBlock(i);\n\t\t\t\t{\n\t\t\t\t\tk <= size\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tflags[k - 1] := false;\n\t\t\t\t\tk := k + i\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfEratosthenes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _sieveOfEratosthenesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.sieveOfEratosthenesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfPritchard",
  ["limit"],
  sl.annotateFunction(function (_limit) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next_2 = sl.annotateFunction(function (_c, _x) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _c, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _indexOf_2(_c, _x);
      /* Statements */
      return _at_2(_c, _plusSign_2(_i, 1));
    }, ["c", "x"]);
    let _previous_2 = sl.annotateFunction(function (_c, _x) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _c, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _indexOf_2(_c, _x);
      /* Statements */
      return _at_2(_c, _hyphenMinus_2(_i, 1));
    }, ["c", "x"]);
    let _extend_3 = sl.annotateFunction(function (_c, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _c, _m, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _w = 1;
      let _x = _plusSign_2(_m, 1);
      /* Statements */
      return _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _n);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_c, _x);
          _w = _next_2(_c, _w);
          return _x = _plusSign_2(_m, _w);
        }, []),
      );
    }, ["c", "m", "n"]);
    let _deleteMultiples_3 = sl.annotateFunction(function (_a, _m, _p) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _a, _m, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _w = _p;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_asterisk_2(_p, _w), _m);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _w = _next_2(_a, _w);
        }, []),
      );
      return _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_w, 1);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _w = _previous_2(_a, _w);
          return _remove_2(_a, _asterisk_2(_p, _w));
        }, []),
      );
    }, ["a", "m", "p"]);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_limit, 2),
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
        let _k = 1;
        let _wList = _SortedList_1([1]);
        let _length = 2;
        let _p = 3;
        let _pList = _SortedList_1([2]);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_square_1(_p), _limit);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _lessThanSign_2(_length, _limit),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _n = _min_2(_limit, _asterisk_2(_p, _length));
                /* Statements */
                _extend_3(_wList, _length, _n);
                return _length = _n;
              }, []),
            );
            _deleteMultiples_3(_wList, _length, _p);
            _add_2(_pList, _p);
            _k = _plusSign_2(_k, 1);
            return _p = _next_2(_wList, 1);
          }, []),
        );
        _ifTrue_2(
          _lessThanSign_2(_length, _limit),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _extend_3(_wList, _length, _limit);
          }, []),
        );
        _addAll_2(_pList, _wList);
        _remove_2(_pList, 1);
        return _contents_1(_pList);
      }, []),
    );
  }, ["limit"]),
  "{ :limit |\n\t\tlet next = { :c :x |\n\t\t\tlet i = c.indexOf(x);\n\t\t\tc[i + 1]\n\t\t};\n\t\tlet previous = { :c :x |\n\t\t\tlet i = c.indexOf(x);\n\t\t\tc[i - 1]\n\t\t};\n\t\tlet extend = { :c :m :n |\n\t\t\tlet w = 1;\n\t\t\tlet x = m + 1;\n\t\t\t{ x <= n }.whileTrue {\n\t\t\t\tc.add(x);\n\t\t\t\tw := c.next(w);\n\t\t\t\tx := m + w\n\t\t\t}\n\t\t};\n\t\tlet deleteMultiples = { :a :m :p |\n\t\t\tlet w = p;\n\t\t\t{ p * w <= m }.whileTrue {\n\t\t\t\tw := a.next(w)\n\t\t\t};\n\t\t\t{ w > 1 }.whileTrue {\n\t\t\t\tw := a.previous(w);\n\t\t\t\ta.remove(p * w)\n\t\t\t}\n\t\t};\n\t\t(limit < 2).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet k = 1;\n\t\t\tlet wList = SortedList([1]);\n\t\t\tlet length = 2;\n\t\t\tlet p = 3;\n\t\t\tlet pList = SortedList([2]);\n\t\t\t{ p.square <= limit}.whileTrue {\n\t\t\t\t(length < limit).ifTrue {\n\t\t\t\t\tlet n = limit.min(p * length);\n\t\t\t\t\textend(wList, length, n);\n\t\t\t\t\tlength := n\n\t\t\t\t};\n\t\t\t\tdeleteMultiples(wList, length, p);\n\t\t\t\tpList.add(p);\n\t\t\t\tk := k + 1;\n\t\t\t\tp := wList.next(1)\n\t\t\t};\n\t\t\t(length < limit).ifTrue {\n\t\t\t\textend(wList, length, limit)\n\t\t\t};\n\t\t\tpList.addAll(wList);\n\t\t\tpList.remove(1);\n\t\t\tpList.contents\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "sieveOfSundaram",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _plusSign_2(_solidusSolidus_2(_hyphenMinus_2(_n, 3), 2), 1);
    let _z = _List_2(_k, true);
    let _m = _plusSign_2(
      _solidusSolidus_2(_hyphenMinus_2(_integerSquareRoot_1(_n), 3), 2),
      1,
    );
    let _a = [2];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_m, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _plusSign_2(_asterisk_2(2, _i), 3);
        let _s = _solidusSolidus_2(_hyphenMinus_2(_asterisk_2(_p, _p), 3), 2);
        /* Statements */
        return _toByDo_4(
          _s,
          _hyphenMinus_2(_k, 1),
          _p,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_z, _plusSign_2(_j, 1), false);
          }, ["j"]),
        );
      }, ["i"]),
    );
    _withIndexDo_2(
      _z,
      sl.annotateFunction(function (_b, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _b, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _b,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _a,
              _plusSign_2(_asterisk_2(_hyphenMinus_2(_i, 1), 2), 3),
            );
          }, []),
        );
      }, ["b", "i"]),
    );
    return _a;
  }, ["n"]),
  "{ :n |\n\t\tlet k = (n - 3) // 2 + 1;\n\t\tlet z = List(k, true);\n\t\tlet m = (integerSquareRoot(n) - 3) // 2 + 1;\n\t\tlet a = [2];\n\t\t0.toDo(m - 1) { :i |\n\t\t\tlet p = 2 * i + 3;\n\t\t\tlet s = ((p * p) - 3) // 2;\n\t\t\ts.toByDo(k - 1, p) { :j |\n\t\t\t\tz[j + 1] := false\n\t\t\t}\n\t\t};\n\t\tz.withIndexDo { :b :i |\n\t\t\tb.ifTrue {\n\t\t\t\ta.add(i - 1 * 2 + 3)\n\t\t\t}\n\t\t};\n\t\ta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Primes",
  "isPrimePower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primeFactors = _factorInteger_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_primeFactors), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_at_2(_at_2(_primeFactors, 1), 1));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet primeFactors = self.factorInteger;\n\t\tprimeFactors.size = 1 & {\n\t\t\tprimeFactors[1][1].isPrime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Primes",
  "factorInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    let _a = _factorInteger_1(_n);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _factorInteger_1(_d);
        /* Statements */
        _do_2(
          _b,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_each, 2, _negate_1(_at_2(_each, 2)));
          }, ["each"]),
        );
        return _if_3(
          _equalsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _sortBy_2(
              _plusSignPlusSign_2(_a, _b),
              _lessThanSignVerticalLine_2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\tlet a = n.factorInteger;\n\t\t(d = 1).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet b = d.factorInteger;\n\t\t\tb.do { :each |\n\t\t\t\teach[2] := each[2].negate\n\t\t\t};\n\t\t\t(n = 1).if {\n\t\t\t\tb\n\t\t\t} {\n\t\t\t\t(a ++ b).sortBy(<|)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Primes",
  "primeFactors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _primeFactors_1(_numerator_1(_self)),
      _collect_2(
        _primeFactors_1(_denominator_1(_self)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ReducedFraction_2(1, _each);
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.primeFactors ++ self.denominator.primeFactors.collect { :each |\n\t\t\tReducedFraction(1, each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Primes",
  "primeLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(
      _primeLimit_1(_numerator_1(_self)),
      _primeLimit_1(_denominator_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.primeLimit.max(self.denominator.primeLimit)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Primes",
  "isComposite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isGaussianPrime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isGaussianPrime.not\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Primes",
  "isGaussianPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _real_1(_self);
    let _b = _imaginary_1(_self);
    let _f_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _isPrime_1(_n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_percentSign_2(_n, 4), 3);
        }, []),
      );
    }, ["n"]);
    /* Statements */
    return _if_3(
      _equalsSign_2(_a, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPrime_1(_abs_1(_b)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _f_1(_abs_1(_b));
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
          _equalsSign_2(_b, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isPrime_1(_abs_1(_a)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_1(_abs_1(_a));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isPrime_1(_plusSign_2(_square_1(_a), _square_1(_b)));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.real;\n\t\tlet b = self.imaginary;\n\t\tlet f = { :n |\n\t\t\tn.isPrime & {\n\t\t\t\t(n % 4) = 3\n\t\t\t}\n\t\t};\n\t\t(a = 0).if {\n\t\t\tb.abs.isPrime & {\n\t\t\t\tf(b.abs)\n\t\t\t}\n\t\t} {\n\t\t\t(b = 0).if {\n\t\t\t\ta.abs.isPrime & {\n\t\t\t\t\tf(a.abs)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(a.square + b.square).isPrime\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Primes",
  "isCoprime",
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
      } /* Statements */
      _toDo_3(
        1,
        _hyphenMinus_2(_size_1(_self), 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _toDo_3(
            _plusSign_2(_i, 1),
            _size_1(_self),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _isCoprime_2(_at_2(_self, _i), _at_2(_self, _j)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["j"]),
          );
        }, ["i"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(self.size - 1) { :i |\n\t\t\t\t(i + 1).toDo(self.size) { :j |\n\t\t\t\t\tself[i].isCoprime(self[j]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Primes",
  "prime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _prime_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(prime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Primes",
  "primeOmega",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _primeOmega_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(primeOmega:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Primes",
  "primesListExtendedToIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _last_1(_self);
    /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_anInteger, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _p = _nextPrime_1(_p);
        return _add_2(_self, _p);
      }, []),
    );
    return _p;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet p = self.last;\n\t\t(anInteger - self.size).timesRepeat {\n\t\t\tp := p.nextPrime;\n\t\t\tself.add(p)\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Primes",
  "isCachedPrime",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _cachedPrimesList_1(_self);
    /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_last_1(_p), _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_binarySearch_2(_p, _anInteger), 0);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet p = self.cachedPrimesList;\n\t\t(p.last >= anInteger) & {\n\t\t\tp.binarySearch(anInteger) != 0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Primes",
  "cachedPrimesList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "primesList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _wheelSieve_1(200);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('primesList') {\n\t\t\t200.wheelSieve\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Primes",
  "cachedPrimesListExtendedToIndex",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primesList = _cachedPrimesList_1(_self);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_anInteger, _size_1(_primesList)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _limit = _ceiling_1(_max_1(_primeBounds_1(_anInteger)));
        /* Statements */
        _primesList = _wheelSieve_1(_limit);
        return _atPut_3(_cache_1(_self), "primesList", _primesList);
      }, []),
    );
    return _primesList;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet primesList = self.cachedPrimesList;\n\t\t(anInteger > primesList.size).ifTrue {\n\t\t\tlet limit = anInteger.primeBounds.max.ceiling;\n\t\t\tprimesList := limit.wheelSieve;\n\t\t\tself.cache.atPut('primesList', primesList)\n\t\t};\n\t\tprimesList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Primes",
  "cachedPrimesListExtendedToPrime",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _primesList = _cachedPrimesList_1(_self);
    /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_last_1(_primesList), _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _primesList = _wheelSieve_1(_anInteger);
        return _atPut_3(_cache_1(_self), "primesList", _primesList);
      }, []),
    );
    return _primesList;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet primesList = self.cachedPrimesList;\n\t\t(primesList.last < anInteger).ifTrue {\n\t\t\tprimesList := anInteger.wheelSieve;\n\t\t\tself.cache.atPut('primesList', primesList)\n\t\t};\n\t\tprimesList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Primes",
  "randomPrime",
  ["self", "iMin", "iMax", "shape"],
  sl.annotateFunction(function (_self, _iMin, _iMax, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _iMin, _iMax, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _primesBetweenAnd_2(_iMin, _iMax);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _randomInteger_3(_self, [1, _size_1(_list)], []);
        /* Statements */
        return _at_2(_list, _index);
      }, []),
      _shape,
    );
  }, ["self", "iMin", "iMax", "shape"]),
  "{ :self :iMin :iMax :shape |\n\t\tlet list = iMin.primesBetweenAnd(iMax);\n\t\t{\n\t\t\tlet index = self.randomInteger([1, list.size], []);\n\t\t\tlist[index]\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Primes",
  "erdosTuranConstruction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isOdd_1(_n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isPrime_1(_n);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toCollect_3(
          0,
          _hyphenMinus_2(_n, 1),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _asterisk_2(_asterisk_2(2, _n), _k),
              _powerMod_3(_k, 2, _n),
            );
          }, ["k"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "erdosTuranConstruction: not odd prime");
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(\n\t\t\tn.isOdd & {\n\t\t\t\tn.isPrime\n\t\t\t}\n\t\t).if {\n\t\t\t0.toCollect(n - 1) { :k |\n\t\t\t\t(2 * n * k) + k.powerMod(2, n)\n\t\t\t}\n\t\t} {\n\t\t\tn.error('erdosTuranConstruction: not odd prime')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Primes",
  "optimalGolombRulers",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = [
      _hyphenMinusGreaterThanSign_2([1, 0], [0]),
      _hyphenMinusGreaterThanSign_2([2, 1], [0, 1]),
      _hyphenMinusGreaterThanSign_2([3, 3], [0, 1, 3]),
      _hyphenMinusGreaterThanSign_2([4, 6], [0, 1, 4, 6]),
      _hyphenMinusGreaterThanSign_2([5, 11], [[0, 1, 4, 9, 11], [
        0,
        2,
        7,
        8,
        11,
      ]]),
      _hyphenMinusGreaterThanSign_2([6, 17], [
        [0, 1, 4, 10, 12, 17],
        [0, 1, 4, 10, 15, 17],
        [0, 1, 8, 11, 13, 17],
        [0, 1, 8, 12, 14, 17],
      ]),
      _hyphenMinusGreaterThanSign_2([7, 25], [
        [0, 1, 4, 10, 18, 23, 25],
        [0, 1, 7, 11, 20, 23, 25],
        [0, 1, 11, 16, 19, 23, 25],
        [0, 2, 3, 10, 16, 21, 25],
        [0, 2, 7, 13, 21, 22, 25],
      ]),
      _hyphenMinusGreaterThanSign_2([8, 34], [0, 1, 4, 9, 15, 22, 32, 34]),
      _hyphenMinusGreaterThanSign_2([9, 44], [0, 1, 5, 12, 25, 27, 35, 41, 44]),
      _hyphenMinusGreaterThanSign_2([10, 55], [
        0,
        1,
        6,
        10,
        23,
        26,
        34,
        41,
        53,
        55,
      ]),
      _hyphenMinusGreaterThanSign_2([11, 72], [[
        0,
        1,
        4,
        13,
        28,
        33,
        47,
        54,
        64,
        70,
        72,
      ], [0, 1, 9, 19, 24, 31, 52, 56, 58, 69, 72]]),
      _hyphenMinusGreaterThanSign_2([12, 85], [
        0,
        2,
        6,
        24,
        29,
        40,
        43,
        55,
        68,
        75,
        76,
        85,
      ]),
      _hyphenMinusGreaterThanSign_2([13, 106], [
        0,
        2,
        5,
        25,
        37,
        43,
        59,
        70,
        85,
        89,
        98,
        99,
        106,
      ]),
      _hyphenMinusGreaterThanSign_2([14, 127], [
        0,
        4,
        6,
        20,
        35,
        52,
        59,
        77,
        78,
        86,
        89,
        99,
        122,
        127,
      ]),
      _hyphenMinusGreaterThanSign_2([15, 151], [
        0,
        4,
        20,
        30,
        57,
        59,
        62,
        76,
        100,
        111,
        123,
        136,
        144,
        145,
        151,
      ]),
      _hyphenMinusGreaterThanSign_2([16, 177], [
        0,
        1,
        4,
        11,
        26,
        32,
        56,
        68,
        76,
        115,
        117,
        134,
        150,
        163,
        168,
        177,
      ]),
      _hyphenMinusGreaterThanSign_2([17, 199], [
        0,
        5,
        7,
        17,
        52,
        56,
        67,
        80,
        81,
        100,
        122,
        138,
        159,
        165,
        168,
        191,
        199,
      ]),
      _hyphenMinusGreaterThanSign_2([18, 216], [
        0,
        2,
        10,
        22,
        53,
        56,
        82,
        83,
        89,
        98,
        130,
        148,
        153,
        167,
        188,
        192,
        205,
        216,
      ]),
      _hyphenMinusGreaterThanSign_2([19, 246], [
        0,
        1,
        6,
        25,
        32,
        72,
        100,
        108,
        120,
        130,
        153,
        169,
        187,
        190,
        204,
        231,
        233,
        242,
        246,
      ]),
      _hyphenMinusGreaterThanSign_2([20, 283], [
        0,
        1,
        8,
        11,
        68,
        77,
        94,
        116,
        121,
        156,
        158,
        179,
        194,
        208,
        212,
        228,
        240,
        253,
        259,
        283,
      ]),
      _hyphenMinusGreaterThanSign_2([21, 333], [
        0,
        2,
        24,
        56,
        77,
        82,
        83,
        95,
        129,
        144,
        179,
        186,
        195,
        255,
        265,
        285,
        293,
        296,
        310,
        329,
        333,
      ]),
      _hyphenMinusGreaterThanSign_2([22, 356], [
        0,
        1,
        9,
        14,
        43,
        70,
        106,
        122,
        124,
        128,
        159,
        179,
        204,
        223,
        253,
        263,
        270,
        291,
        330,
        341,
        353,
        356,
      ]),
      _hyphenMinusGreaterThanSign_2([23, 372], [
        0,
        3,
        7,
        17,
        61,
        66,
        91,
        99,
        114,
        159,
        171,
        199,
        200,
        226,
        235,
        246,
        277,
        316,
        329,
        348,
        350,
        366,
        372,
      ]),
      _hyphenMinusGreaterThanSign_2([24, 425], [
        0,
        9,
        33,
        37,
        38,
        97,
        122,
        129,
        140,
        142,
        152,
        191,
        205,
        208,
        252,
        278,
        286,
        326,
        332,
        353,
        368,
        384,
        403,
        425,
      ]),
      _hyphenMinusGreaterThanSign_2([25, 480], [
        0,
        12,
        29,
        39,
        72,
        91,
        146,
        157,
        160,
        161,
        166,
        191,
        207,
        214,
        258,
        290,
        316,
        354,
        372,
        394,
        396,
        431,
        459,
        467,
        480,
      ]),
      _hyphenMinusGreaterThanSign_2([26, 492], [
        0,
        1,
        33,
        83,
        104,
        110,
        124,
        163,
        185,
        200,
        203,
        249,
        251,
        258,
        314,
        318,
        343,
        356,
        386,
        430,
        440,
        456,
        464,
        475,
        487,
        492,
      ]),
      _hyphenMinusGreaterThanSign_2([27, 553], [
        0,
        3,
        15,
        41,
        66,
        95,
        97,
        106,
        142,
        152,
        220,
        221,
        225,
        242,
        295,
        330,
        338,
        354,
        382,
        388,
        402,
        415,
        486,
        504,
        523,
        546,
        553,
      ]),
      _hyphenMinusGreaterThanSign_2([28, 585], [
        0,
        3,
        15,
        41,
        66,
        95,
        97,
        106,
        142,
        152,
        220,
        221,
        225,
        242,
        295,
        330,
        338,
        354,
        382,
        388,
        402,
        415,
        486,
        504,
        523,
        546,
        553,
        585,
      ]),
    ];
    /* Statements */
    return _detectIfFoundIfNone_4(
      _table,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_key_1(_each), 1), _m);
      }, ["each"]),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _value_1(_each);
        /* Statements */
        return _if_3(
          _isVector_1(_r),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_r];
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
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_m, _n], "optimalGolombRulers: no such ruler");
      }, []),
    );
  }, ["m"]),
  "{ :m |\n\t\tlet table = [\n\t\t\t[1 0] -> [0],\n\t\t\t[2 1] -> [0 1],\n\t\t\t[3 3] -> [0 1 3],\n\t\t\t[4 6] -> [0 1 4 6],\n\t\t\t[5 11] -> [0 1 4 9 11; 0 2 7 8 11],\n\t\t\t[6 17] -> [0 1 4 10 12 17; 0 1 4 10 15 17; 0 1 8 11 13 17; 0 1 8 12 14 17],\n\t\t\t[7 25] -> [0 1 4 10 18 23 25; 0 1 7 11 20 23 25; 0 1 11 16 19 23 25; 0 2 3 10 16 21 25; 0 2 7 13 21 22 25],\n\t\t\t[8 34] -> [0 1 4 9 15 22 32 34],\n\t\t\t[9 44] -> [0 1 5 12 25 27 35 41 44],\n\t\t\t[10 55] -> [0 1 6 10 23 26 34 41 53 55],\n\t\t\t[11 72] -> [0 1 4 13 28 33 47 54 64 70 72; 0 1 9 19 24 31 52 56 58 69 72],\n\t\t\t[12 85] -> [0 2 6 24 29 40 43 55 68 75 76 85],\n\t\t\t[13 106] -> [0 2 5 25 37 43 59 70 85 89 98 99 106],\n\t\t\t[14 127] -> [0 4 6 20 35 52 59 77 78 86 89 99 122 127],\n\t\t\t[15 151] -> [0 4 20 30 57 59 62 76 100 111 123 136 144 145 151],\n\t\t\t[16 177] -> [0 1 4 11 26 32 56 68 76 115 117 134 150 163 168 177],\n\t\t\t[17 199] -> [0 5 7 17 52 56 67 80 81 100 122 138 159 165 168 191 199],\n\t\t\t[18 216] -> [0 2 10 22 53 56 82 83 89 98 130 148 153 167 188 192 205 216],\n\t\t\t[19 246] -> [0 1 6 25 32 72 100 108 120 130 153 169 187 190 204 231 233 242 246],\n\t\t\t[20 283] -> [0 1 8 11 68 77 94 116 121 156 158 179 194 208 212 228 240 253 259 283],\n\t\t\t[21 333] -> [0 2 24 56 77 82 83 95 129 144 179 186 195 255 265 285 293 296 310 329 333],\n\t\t\t[22 356] -> [0 1 9 14 43 70 106 122 124 128 159 179 204 223 253 263 270 291 330 341 353 356],\n\t\t\t[23 372] -> [0 3 7 17 61 66 91 99 114 159 171 199 200 226 235 246 277 316 329 348 350 366 372],\n\t\t\t[24 425] -> [0 9 33 37 38 97 122 129 140 142 152 191 205 208 252 278 286 326 332 353 368 384 403 425],\n\t\t\t[25 480] -> [0 12 29 39 72 91 146 157 160 161 166 191 207 214 258 290 316 354 372 394 396 431 459 467 480],\n\t\t\t[26 492] -> [0 1 33 83 104 110 124 163 185 200 203 249 251 258 314 318 343 356 386 430 440 456 464 475 487 492],\n\t\t\t[27 553] -> [0 3 15 41 66 95 97 106 142 152 220 221 225 242 295 330 338 354 382 388 402 415 486 504 523 546 553],\n\t\t\t[28 585] -> [0 3 15 41 66 95 97 106 142 152 220 221 225 242 295 330 338 354 382 388 402 415 486 504 523 546 553 585]\n\t\t];\n\t\ttable.detectIfFoundIfNone { :each |\n\t\t\teach.key.at(1) = m\n\t\t} { :each |\n\t\t\tlet r = each.value;\n\t\t\tr.isVector.if {\n\t\t\t\t[r]\n\t\t\t} {\n\t\t\t\tr\n\t\t\t}\n\t\t} {\n\t\t\t[m n].error('optimalGolombRulers: no such ruler')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Primes",
  "welchCostasArrayList",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPrime_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _primitiveRootList_1(_n);
        /* Statements */
        return _collect_2(
          _r,
          sl.annotateFunction(function (_g) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _g";
              throw new Error(errorMessage);
            } /* Statements */
            return _SparseArray_1(
              _toCollect_3(
                1,
                _hyphenMinus_2(_n, 1),
                sl.annotateFunction(function (_i) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _i";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _hyphenMinusGreaterThanSign_2([
                    _powerMod_3(_g, _i, _n),
                    _i,
                  ], 1);
                }, ["i"]),
              ),
            );
          }, ["g"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "welchCostasArrayList: not prime");
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.isPrime.if {\n\t\t\tlet r = n.primitiveRootList;\n\t\t\tr.collect { :g |\n\t\t\t\tSparseArray(\n\t\t\t\t\t1.toCollect(n - 1) { :i |\n\t\t\t\t\t\t[g.powerMod(i, n), i] -> 1\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\tn.error('welchCostasArrayList: not prime')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Primes",
  "ellipticCurveOverFiniteField",
  ["a", "b", "q"],
  sl.annotateFunction(function (_a, _b, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _UnivariatePolynomial_1([_b, _a, 0, 1]);
    let _c = [];
    /* Statements */
    _collect_2(
      _to_2(0, _hyphenMinus_2(_q, 1)),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _at_2(_p, _x);
        let _l = _legendreSymbol_2(_a, _q);
        /* Statements */
        _ifTrue_2(
          _equalsSign_2(_l, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_c, [_x, 0]);
          }, []),
        );
        return _ifTrue_2(
          _equalsSign_2(_l, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _tonelliShanksAlgorithm_2(_a, _q);
            let _s = _hyphenMinus_2(_q, _r);
            let _i = _min_2(_r, _s);
            let _j = _max_2(_r, _s);
            /* Statements */
            _add_2(_c, [_x, _i]);
            return _add_2(_c, [_x, _j]);
          }, []),
        );
      }, ["x"]),
    );
    return _c;
  }, ["a", "b", "q"]),
  "{ :a :b :q |\n\t\tlet p = UnivariatePolynomial([b, a, 0, 1]);\n\t\tlet c = [];\n\t\t0.to(q - 1).collect { :x |\n\t\t\tlet a = p.at(x);\n\t\t\tlet l = legendreSymbol(a, q);\n\t\t\t(l = 0).ifTrue {\n\t\t\t\tc.add([x, 0])\n\t\t\t};\n\t\t\t(l = 1).ifTrue {\n\t\t\t\tlet r = tonelliShanksAlgorithm(a, q);\n\t\t\t\tlet s = q - r;\n\t\t\t\tlet i = r.min(s);\n\t\t\t\tlet j = r.max(s);\n\t\t\t\tc.add([x, i]);\n\t\t\t\tc.add([x, j])\n\t\t\t}\n\t\t};\n\t\tc\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Primes",
  "nextPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextPrime_1(_floor_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.floor.nextPrime\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Primes",
  "previousPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _previousPrime_1(_ceiling_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.ceiling.previousPrime\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeBounds",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return (_hyphenMinusHyphenMinus_2(
      _primeLowerBound_1(_n),
      _primeUpperBound_1(_n),
    ));
  }, ["n"]),
  "{ :n |\n\t\t(n.primeLowerBound -- n.primeUpperBound)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeLowerBound",
  ["n"],
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
          return _greaterThanSign_2(_n, 2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _n,
            _hyphenMinus_2(_plusSign_2(_log_1(_n), _log_1(_log_1(_n))), 1.5),
          );
        }, []),
      ),
    ]);
  }, ["n"]),
  "{ :n |\n\t\t[\n\t\t\t{ n > 2 } -> { n * (n.log + n.log.log - 1.5) }\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primeUpperBound",
  ["n"],
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
          return _greaterThanSign_2(_n, 20);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _n,
            _hyphenMinus_2(_plusSign_2(_log_1(_n), _log_1(_log_1(_n))), 0.5),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_n, 6);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(_n, _plusSign_2(_log_1(_n), _log_1(_log_1(_n))));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_n, 4);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _n,
            _plusSign_2(_log_1(_n), _asterisk_2(2, _log_1(_log_1(_n)))),
          );
        }, []),
      ),
    ]);
  }, ["n"]),
  "{ :n |\n\t\t[\n\t\t\t{ n > 20 } -> { n * (n.log + n.log.log - 0.5) },\n\t\t\t{ n > 6 } -> { n * (n.log + n.log.log) },\n\t\t\t{ n > 4 } -> { n * (n.log + (2 * n.log.log)) }\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primePiBounds",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return (_hyphenMinusHyphenMinus_2(
      _primePiLowerBound_1(_x),
      _primePiUpperBound_1(_x),
    ));
  }, ["x"]),
  "{ :x |\n\t\t(x.primePiLowerBound -- x.primePiUpperBound)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primePiLowerBound",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
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
          return _greaterThanSign_2(_x, 55);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _plusSign_2(_log_1(_x), 2));
        }, []),
      ),
    ]);
  }, ["x"]),
  "{ :x |\n\t\t[\n\t\t\t{ x > 55 } -> { x / (x.log + 2) }\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primePiUpperBound",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
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
          return _greaterThanSign_2(_x, 55);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _hyphenMinus_2(_log_1(_x), 4));
        }, []),
      ),
    ]);
  }, ["x"]),
  "{ :x |\n\t\t[\n\t\t\t{ x > 55 } -> { x / (x.log - 4) }\n\t\t].which\n\t}",
);
