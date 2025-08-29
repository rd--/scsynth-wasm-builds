/*  Requires: Cache Collection Fraction Integer  */

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
                        _circumflexAccent_2(_key_1(_x), _value_1(_x)),
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
  "{ :n | if((>(n, 0)), { let e = eulerPhi(n); if((|(includes([1, 2, 4],n), { &(isOdd(n), { isPrimePower(n) }) })), { e }, { if(isInteger(log(n,2)), { /(e, 2) }, { lcm(collect(factorInteger(n), { :x | carmichaelLambda((^(key(x), value(x)))) })) }) }) }, { error(n,'carmichaelLambda: negative') }) }",
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
  "{ :n | let answer = []; let i = 1; whileTrue({ <(size(answer), n) }, { addAll(answer,integerDigits(prime(i),10)); i := +(i, 1) }); take(answer,n) }",
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
  "{ :n | +(1, primorial(n)) }",
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
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _factorInteger_1(_negate_1(_self));
        /* Statements */
        _addFirst_2(_answer, _hyphenMinusGreaterThanSign_2(-1, 1));
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isZero_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_hyphenMinusGreaterThanSign_2(0, 1)];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _sortedElements_1(_primeFactorization_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isNegative(self), { let answer = factorInteger(negate(self)); addFirst(answer,->(-1, 1)); answer }, { if(isZero(self), { [->(0, 1)] }, { sortedElements(primeFactorization(self)) }) }) }",
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
  "{ :self | binarySearch(cachedPrimesListExtendedToPrime(system,self),self) }",
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
  "{ :n | let a = prime((+(n, 1))); let b = prime((+(n, 2))); /((+(a, b)), 2) }",
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
  "{ :self :k | =(size(primeFactors(self)), k) }",
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
  "{ :n | &((>=(n, 3)), { &(isPrime(n), { =(primeBalance(n), 0) }) }) }",
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
  "{ :n | let m = carmichaelLambda(n); &((=((%(n, m)), 1)), { not(isPrime(n)) }) }",
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
  "{ :self | &(isPrime(self), { |(isPrime((+(self, 2))), { isSemiprime((+(self, 2))) }) }) }",
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
  "{ :self | not(isPrime(self)) }",
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
  "{ :self :anInteger | =(gcd(self,anInteger), 1) }",
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
  "{ :self | |(=(self, 7), { &(isPrime(self), { includes(primitiveRootList(self),10) }) }) }",
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
  "{ :self | allSatisfy(valuesAndCounts(primeFactorization(self)), { :each | >(each, 1) }) }",
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
  "{ :self | if(isCachedPrime(system,self), { true }, { isPrimeTrialDivision(self) }) }",
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
              _thenTo_3(3, 5, _limit),
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
  "{ :self | if((<=(self, 1)), { false }, { if((=(%(self, 2), 0)), { =(self, 2) }, { let limit = floor(sqrt(self)); noneSatisfy(thenTo(3, 5, limit), { :each | =(%(self, each), 0) }) }) }) }",
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
  "{ :self | if((<(self, 2)), { false }, { divisible((+(factorial((-(self, 1))), 1)),self) }) }",
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
  "{ :self | &(isPrime(self), { =((%((-(self, 1)), 4)), 0) }) }",
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
  "{ :self | &(isPrime(self), { isPrime((+(self, 4))) }) }",
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
  "{ :self | &(isPrime(self), { =(+(self, 2), nextPrime(self)) }) }",
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
    return _equalsSign_2(_sum_1(_values_1(_factorInteger_1(_n))), 2);
  }, ["n"]),
  "{ :n | =(sum(values(factorInteger(n))), 2) }",
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
  "{ :n | &(isPrime(n), { let k = floor(sqrt((/(n, 2)))); whileTrue({ &(>(k, 0), { not(isPrime((-(n, (*(2, square(k))))))) }) }, { k := -(k, 1) }); isZero(k) }) }",
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
  "{ :n | &((>=(n, 3)), { &(isPrime(n), { >(primeBalance(n), 0) }) }) }",
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
  "{ :n | &((>=(n, 3)), { &(isPrime(n), { <(primeBalance(n), 0) }) }) }",
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
    } /* Temporaries */
    let _answer = _self;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_answer);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = self; whileFalse({ isPrime(answer) }, { answer := +(answer, 1) }); answer }",
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
  "{ :self | if(isEven(size(primeFactors(self))), { 1 }, { -1 }) }",
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
        return _isPrime_1(_key_1(_first_1(_primeFactors)));
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
        return _log_1(_key_1(_first_1(_primeFactors)));
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
  "{ :n | let primeFactors = factorInteger(n); let isPrimePower = &(=(size(primeFactors), 1), { isPrime(key(first(primeFactors))) }); if(isPrimePower, { log(key(first(primeFactors))) }, { 0 }) }",
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
                      return _tildeEqualsSign_2(_x, _hyphenMinus_2(_self, 1));
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
                _tildeEqualsSign_2(_x, _hyphenMinus_2(_self, 1)),
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
  "{ :self :k | var d, s, a, x, r;valueWithReturn({ :return:/1 | ifTrue((=(self, 1)), { return(false) }); ifTrue((<=(self, 3)), { return(true) }); ifTrue(isEven(self), { return(false) }); d := -(self, 1); s := 0; whileTrue({ =(\\\\(d, 2), 0) }, { d := /(d, 2); s := +(s, 1) }); whileTrue({ k := -(k, 1); >=(k, 0) }, { a := randomLargeInteger(system,*(one(self), 2), -(self, 2)); x := \\\\((^(a, d)), self); ifFalse((=(x, 1)), { r := -1; whileTrue({ r := +(r, 1); &(<(r, s), { ~=(x, (-(self, 1))) }) }, { x := \\\\((^(x, 2)), self) }); ifTrue((~=(x, (-(self, 1)))), { return(false) }) }) }); true }) }",
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
  "{ :self | if(isSquareFree(self), { liouvilleLambda(self) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "nextPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _leastPrimeGreaterThanOrEqualTo_1(_plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self | leastPrimeGreaterThanOrEqualTo((+(self, 1))) }",
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
  "{ :self | let primesList = cachedPrimesListExtendedToIndex(system,self); at(primesList, self) }",
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
  "{ :n | let k = primePi(n); let a = prime((-(k, 1))); let b = prime((+(k, 1))); <=>((-(n, a)), (-(b, n))) }",
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
  "{ :self | -(prime((+(self, 1))), prime(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "previousPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _hyphenMinus_2(
      _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
      1,
    );
    /* Statements */
    return _at_2(_cachedPrimesList_1(_system), _index);
  }, ["self"]),
  "{ :self | let index = -(indexOfPrime(leastPrimeGreaterThanOrEqualTo(self)), 1); at(cachedPrimesList(system), index) }",
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
    return _keys_1(_valuesAndCounts_1(_primeFactorization_1(_self)));
  }, ["self"]),
  "{ :self | keys(valuesAndCounts(primeFactorization(self))) }",
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
    let _dictionary = _valuesAndCounts_1(_primeFactorization_1(_self));
    /* Statements */
    return _collect_2(
      _primesUpTo_1(_max_1(_keys_1(_dictionary))),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _dictionary,
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
  "{ :self | let dictionary = valuesAndCounts(primeFactorization(self)); collect(primesUpTo(max(keys(dictionary))), { :each | atIfAbsent(dictionary, each, { 0 }) }) }",
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
    return _asBag_1(_primeFactors_1(_self));
  }, ["self"]),
  "{ :self | asBag(primeFactors(self)) }",
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
          _repeat_1(sl.annotateFunction(function () {
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
                _add_2(_answer, _k);
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
  "{ :self | if((<=(self, 1)), { [] }, { valueWithReturn({ :return:/1 | let index = 1; let prime = 2; let k = self; let answer = []; repeat({ prime := prime(index); whileTrue({ =(%(k, prime), 0) }, { add(answer,prime); k := //(k, prime); ifTrue((=(k, 1)), { return(answer) }) }); ifTrue((>(square(prime), k)), { add(answer,k); return(answer) }); index := +(index, 1) }); answer }) }) }",
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
      _tildeEqualsSign_2(_n, 1),
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
  "{ :self | let n = self; let m = 3; let answer = []; whileTrue({ =(%(n, 2), 0) }, { add(answer,2); n := //(n, 2) }); whileTrue({ <=(*(m, m), n) }, { if((=(%(n, m), 0)), { add(answer,m); n := //(n, m) }, { m := +(m, 2) }) }); ifTrue((~=(n, 1)), { add(answer,n) }); answer }",
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
  "{ :self | size(valuesAndCounts(primeFactorization(self))) }",
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
  "{ :self | size(primeFactors(self)) }",
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
    _sieveOfEratosthenesDo_2(
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
  "{ :self | let answer = 0; sieveOfEratosthenesDo(self, { :unusedItem | answer := +(answer, 1) }); answer }",
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
  "{ :self | maxIfEmpty(primeFactors(self), { 0 }) }",
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
  "{ :iMin :iMax | let startIndex = if(isPrime(iMin), { indexOfPrime(iMin) }, { indexOfPrime(nextPrime(iMin)) }); copyFromTo(cachedPrimesList(system),startIndex, -(indexOfPrime(nextPrime(iMax)), 1)) }",
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
  "{ :self | take(cachedPrimesListExtendedToIndex(system,self),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Primes",
  "primesListWheelSieve",
  ["limit"],
  sl.annotateFunction(function (_limit) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _limit";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_limit, 2),
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
        let _answer = [2];
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
                return _add_2(_answer, _j);
              }, []),
            );
            return _j = _plusSign_2(_j, 2);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["limit"]),
  "{ :limit | if((<(limit, 2)), { 0 }, { let c = List(+(limit, 1), false); let k = 9; let p1 = 11; let p2 = 121; let z = [2, 4, 2, 4, 6, 2, 6, 4, 2, 4, 6, 6, 2, 6, 4, 2, 6, 4, 6, 8, 4, 2, 4, 2, 4, 8, 6, 4, 6, 2, 4, 6, 2, 6, 6, 4, 2, 4, 6, 2, 6, 4, 2, 4, 2, 10, 2, 10]; let w = 0; let answer = [2]; let j = 3; atPut(c, 1, true); atPut(c, 2, true); whileTrue({ <=(k, limit) }, { atPut(c, +(k, 1), true); k := +(k, 6) }); k := 25; whileTrue({ <=(k, limit) }, { atPut(c, +(k, 1), true); k := +(k, 10) }); k := 49; whileTrue({ <=(k, limit) }, { atPut(c, +(k, 1), true); k := +(k, 14) }); whileTrue({ <=(p2, limit) }, { let i = p2; let ok = true; whileTrue({ <=(i, limit) }, { atPut(c, +(i, 1), true); i := +(i, (*(2, p1))) }); whileTrue({ ok }, { p1 := +(p1, at(z, +(w, 1))); w := %((+(w, 1)), 48); ok := at(c, +(p1, 1)) }); p2 := *(p1, p1) }); whileTrue({ <=(j, limit) }, { ifFalse(at(c, +(j, 1)), { add(answer,j) }); j := +(j, 2) }); answer }) }",
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
  "{ :self | copyFromTo(cachedPrimesList(system),1, -(indexOfPrime(nextPrime(self)), 1)) }",
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
  "{ :self :aBlock:/1 | let k = -(indexOfPrime(nextPrime(self)), 1); let primesList = cachedPrimesListExtendedToIndex(system,k); toDo(1, k, { :index | aBlock(at(primesList, index)) }) }",
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
        _upOrDownTo_2(1, _hyphenMinus_2(_n, 1)),
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
  "{ :n | let e = eulerPhi(n); let p = primeFactors(e); select(select(upOrDownTo(1, -(n, 1)), { :g | isCoprime(g,n) }), { :g | allSatisfy(collect(p, { :i | powerMod(g,/(e, i), n) }), { :m | >(m, 1) }) }) }",
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
    return _product_2(_upOrDownTo_2(1, _n), _prime_1);
  }, ["n"]),
  "{ :n | product(upOrDownTo(1, n),prime:/1) }",
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
    let _flags = _List_1(_size);
    /* Statements */
    _atAllPut_2(_flags, true);
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
  "{ :self :aBlock:/1 | let size = self; let flags = List(size); atAllPut(flags,true); toDo(2, size, { :i | ifTrue(at(flags, -(i, 1)), { let k = +(i, i); aBlock(i); whileTrue({ <=(k, size) }, { atPut(flags, -(k, 1), false); k := +(k, i) }) }) }) }",
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
  "{ :self | let answer = []; sieveOfEratosthenesDo(self, { :each | add(answer,each) }); answer }",
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
        return _isPrime_1(_key_1(_first_1(_primeFactors)));
      }, []),
    );
  }, ["self"]),
  "{ :self | let primeFactors = factorInteger(self); &(=(size(primeFactors), 1), { isPrime(key(first(primeFactors))) }) }",
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
    let _n = _factorInteger_1(_numerator_1(_self));
    let _d = _collect_2(
      _factorInteger_1(_denominator_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(
          _key_1(_each),
          _negate_1(_value_1(_each)),
        );
      }, ["each"]),
    );
    /* Statements */
    return _sorted_1(_plusSignPlusSign_2(_n, _d));
  }, ["self"]),
  "{ :self | let n = factorInteger(numerator(self)); let d = collect(factorInteger(denominator(self)), { :each | ->(key(each), negate(value(each))) }); sorted((++(n, d))) }",
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
  "{ :self | ++(primeFactors(numerator(self)), collect(primeFactors(denominator(self)), { :each | ReducedFraction(1, each) })) }",
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
  "{ :self | max(primeLimit(numerator(self)),primeLimit(denominator(self))) }",
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
  "{ :self | not(isGaussianPrime(self)) }",
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
  "{ :self | let a = real(self); let b = imaginary(self); let f = { :n | &(isPrime(n), { =((%(n, 4)), 3) }) }; if((=(a, 0)), { &(isPrime(abs(b)), { f(abs(b)) }) }, { if((=(b, 0)), { &(isPrime(abs(a)), { f(abs(a)) }) }, { isPrime((+(square(a), square(b)))) }) }) }",
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
  "{ :self | valueWithReturn({ :return:/1 | toDo(1, -(size(self), 1), { :i | toDo((+(i, 1)), size(self), { :j | ifFalse(isCoprime(at(self, i),at(self, j)), { return(false) }) }) }); true }) }",
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
  "{ :self | collect(self,prime:/1) }",
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
  "{ :self | collect(self,primeOmega:/1) }",
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
  "{ :self :anInteger | let p = last(self); timesRepeat((-(anInteger, size(self))), { p := nextPrime(p); add(self,p) }); p }",
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
    } /* Statements */
    return _tildeEqualsSign_2(
      _binarySearch_2(_cachedPrimesList_1(_self), _anInteger),
      0,
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | ~=(binarySearch(cachedPrimesList(self),anInteger), 0) }",
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
        return _select_2(_Span_3(1, 99, 1), _isPrimeTrialDivision_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'primesList', { select(Span(1, 99, 1),isPrimeTrialDivision:/1) }) }",
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
        } /* Statements */
        return _primesListExtendedToIndex_2(_primesList, _anInteger);
      }, []),
    );
    return _primesList;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let primesList = cachedPrimesList(self); ifTrue((>(anInteger, size(primesList))), { primesListExtendedToIndex(primesList,anInteger) }); primesList }",
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
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_last_1(_primesList), _anInteger);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _primesListExtendedToIndex_2(
          _primesList,
          _plusSign_2(_size_1(_primesList), 8),
        );
      }, []),
    );
    return _primesList;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let primesList = cachedPrimesList(self); whileTrue({ <(last(primesList), anInteger) }, { primesListExtendedToIndex(primesList,+(size(primesList), 8)) }); primesList }",
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
  "{ :self :iMin :iMax :shape | let list = primesBetweenAnd(iMin,iMax); !({ let index = randomInteger(self,[1, size(list)], []); at(list, index) }, shape) }",
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
        return _collect_2(
          _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
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
  "{ :n | if((&(isOdd(n), { isPrime(n) })), { collect(upOrDownTo(0, -(n, 1)), { :k | +((*(*(2, n), k)), powerMod(k,2, n)) }) }, { error(n,'erdosTuranConstruction: not odd prime') }) }",
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
  "{ :m | let table = [->([1, 0], [0]), ->([2, 1], [0, 1]), ->([3, 3], [0, 1, 3]), ->([4, 6], [0, 1, 4, 6]), ->([5, 11], [[0, 1, 4, 9, 11], [0, 2, 7, 8, 11]]), ->([6, 17], [[0, 1, 4, 10, 12, 17], [0, 1, 4, 10, 15, 17], [0, 1, 8, 11, 13, 17], [0, 1, 8, 12, 14, 17]]), ->([7, 25], [[0, 1, 4, 10, 18, 23, 25], [0, 1, 7, 11, 20, 23, 25], [0, 1, 11, 16, 19, 23, 25], [0, 2, 3, 10, 16, 21, 25], [0, 2, 7, 13, 21, 22, 25]]), ->([8, 34], [0, 1, 4, 9, 15, 22, 32, 34]), ->([9, 44], [0, 1, 5, 12, 25, 27, 35, 41, 44]), ->([10, 55], [0, 1, 6, 10, 23, 26, 34, 41, 53, 55]), ->([11, 72], [[0, 1, 4, 13, 28, 33, 47, 54, 64, 70, 72], [0, 1, 9, 19, 24, 31, 52, 56, 58, 69, 72]]), ->([12, 85], [0, 2, 6, 24, 29, 40, 43, 55, 68, 75, 76, 85]), ->([13, 106], [0, 2, 5, 25, 37, 43, 59, 70, 85, 89, 98, 99, 106]), ->([14, 127], [0, 4, 6, 20, 35, 52, 59, 77, 78, 86, 89, 99, 122, 127]), ->([15, 151], [0, 4, 20, 30, 57, 59, 62, 76, 100, 111, 123, 136, 144, 145, 151]), ->([16, 177], [0, 1, 4, 11, 26, 32, 56, 68, 76, 115, 117, 134, 150, 163, 168, 177]), ->([17, 199], [0, 5, 7, 17, 52, 56, 67, 80, 81, 100, 122, 138, 159, 165, 168, 191, 199]), ->([18, 216], [0, 2, 10, 22, 53, 56, 82, 83, 89, 98, 130, 148, 153, 167, 188, 192, 205, 216]), ->([19, 246], [0, 1, 6, 25, 32, 72, 100, 108, 120, 130, 153, 169, 187, 190, 204, 231, 233, 242, 246]), ->([20, 283], [0, 1, 8, 11, 68, 77, 94, 116, 121, 156, 158, 179, 194, 208, 212, 228, 240, 253, 259, 283]), ->([21, 333], [0, 2, 24, 56, 77, 82, 83, 95, 129, 144, 179, 186, 195, 255, 265, 285, 293, 296, 310, 329, 333]), ->([22, 356], [0, 1, 9, 14, 43, 70, 106, 122, 124, 128, 159, 179, 204, 223, 253, 263, 270, 291, 330, 341, 353, 356]), ->([23, 372], [0, 3, 7, 17, 61, 66, 91, 99, 114, 159, 171, 199, 200, 226, 235, 246, 277, 316, 329, 348, 350, 366, 372]), ->([24, 425], [0, 9, 33, 37, 38, 97, 122, 129, 140, 142, 152, 191, 205, 208, 252, 278, 286, 326, 332, 353, 368, 384, 403, 425]), ->([25, 480], [0, 12, 29, 39, 72, 91, 146, 157, 160, 161, 166, 191, 207, 214, 258, 290, 316, 354, 372, 394, 396, 431, 459, 467, 480]), ->([26, 492], [0, 1, 33, 83, 104, 110, 124, 163, 185, 200, 203, 249, 251, 258, 314, 318, 343, 356, 386, 430, 440, 456, 464, 475, 487, 492]), ->([27, 553], [0, 3, 15, 41, 66, 95, 97, 106, 142, 152, 220, 221, 225, 242, 295, 330, 338, 354, 382, 388, 402, 415, 486, 504, 523, 546, 553]), ->([28, 585], [0, 3, 15, 41, 66, 95, 97, 106, 142, 152, 220, 221, 225, 242, 295, 330, 338, 354, 382, 388, 402, 415, 486, 504, 523, 546, 553, 585])]; detectIfFoundIfNone(table, { :each | =(at(key(each),1), m) }, { :each | let r = value(each); if(isVector(r), { [r] }, { r }) }, { error([m, n],'optimalGolombRulers: no such ruler') }) }",
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
              _collect_2(
                _upOrDownTo_2(1, _hyphenMinus_2(_n, 1)),
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
  "{ :n | if(isPrime(n), { let r = primitiveRootList(n); collect(r, { :g | SparseArray(collect(upOrDownTo(1, -(n, 1)), { :i | ->([powerMod(g,i, n), i], 1) })) }) }, { error(n,'welchCostasArrayList: not prime') }) }",
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
      _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_q, 1))),
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
  "{ :a :b :q | let p = UnivariatePolynomial([b, a, 0, 1]); let c = []; collect(asList(upOrDownTo(0, -(q, 1))), { :x | let a = at(p,x); let l = legendreSymbol(a, q); ifTrue((=(l, 0)), { add(c,[x, 0]) }); ifTrue((=(l, 1)), { let r = tonelliShanksAlgorithm(a, q); let s = -(q, r); let i = min(r,s); let j = max(r,s); add(c,[x, i]); add(c,[x, j]) }) }); c }",
);
