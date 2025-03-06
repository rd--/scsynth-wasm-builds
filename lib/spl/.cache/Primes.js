/*  Requires: Cache Collection Fraction Integer  */

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
        let _answer = _factorInteger_1(_negated_1(_self));
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
  "{ :self | if(isNegative(self), { let answer = factorInteger(negated(self)); addFirst(answer,->(-1, 1)); answer }, { if(isZero(self), { [->(0, 1)] }, { sortedElements(primeFactorization(self)) }) }) }",
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
  "nthPrime",
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
  "nthPrimeGap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _nthPrime_1(_plusSign_2(_self, 1)),
      _nthPrime_1(_self),
    );
  }, ["self"]),
  "{ :self | -(nthPrime((+(self, 1))), nthPrime(self)) }",
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
            _prime = _nthPrime_1(_index);
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
              _greaterThanSign_2(_squared_1(_prime), _k),
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
  "{ :self | if((<=(self, 1)), { [] }, { valueWithReturn({ :return:/1 | let index = 1; let prime = 2; let k = self; let answer = []; repeat({ prime := nthPrime(index); whileTrue({ =(%(k, prime), 0) }, { add(answer,prime); k := //(k, prime); ifTrue((=(k, 1)), { return(answer) }) }); ifTrue((>(squared(prime), k)), { add(answer,k); return(answer) }); index := +(index, 1) }); answer }) }) }",
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
          _negated_1(_value_1(_each)),
        );
      }, ["each"]),
    );
    /* Statements */
    return _sorted_1(_plusSignPlusSign_2(_n, _d));
  }, ["self"]),
  "{ :self | let n = factorInteger(numerator(self)); let d = collect(factorInteger(denominator(self)), { :each | ->(key(each), negated(value(each))) }); sorted((++(n, d))) }",
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
            return _isPrime_1(_plusSign_2(_squared_1(_a), _squared_1(_b)));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let a = real(self); let b = imaginary(self); let f = { :n | &(isPrime(n), { =((%(n, 4)), 3) }) }; if((=(a, 0)), { &(isPrime(abs(b)), { f(abs(b)) }) }, { if((=(b, 0)), { &(isPrime(abs(a)), { f(abs(a)) }) }, { isPrime((+(squared(a), squared(b)))) }) }) }",
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
  "nthPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _nthPrime_1);
  }, ["self"]),
  "{ :self | collect(self,nthPrime:/1) }",
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
        return _select_2(_to_2(1, 99), _isPrimeTrialDivision_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'primesList', { select(to(1, 99),isPrimeTrialDivision:/1) }) }",
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
        let _index = _randomInteger_4(_self, 1, _size_1(_list), []);
        /* Statements */
        return _at_2(_list, _index);
      }, []),
      _shape,
    );
  }, ["self", "iMin", "iMax", "shape"]),
  "{ :self :iMin :iMax :shape | let list = primesBetweenAnd(iMin,iMax); !({ let index = randomInteger(self,1, size(list), []); at(list, index) }, shape) }",
);
