/*  Requires: Cache Collection Fraction Integer  */

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "factorInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _factorInteger_1(_negated_1(_self));
      /* Statements */
      _addFirst_2(_answer, _hyphenMinusGreaterThanSign_2(-1, 1));
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isZero_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return [_hyphenMinusGreaterThanSign_2(0, 1)];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _sortedElements_1(_primeFactorization_1(_self));
      });
    });
  },
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tlet answer = self.negated.factorInteger;\n\t\t\tanswer.addFirst(-1 -> 1);\n\t\t\tanswer\n\t\t} {\n\t\t\tself.isZero.if {\n\t\t\t\t[0 -> 1]\n\t\t\t} {\n\t\t\t\tself.primeFactorization.sortedElements\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "indexOfPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _binarySearch_2(
      _cachedPrimesListExtendedToPrime_2(_system, _self),
      _self,
    );
  },
  "{ :self |\n\t\tsystem.cachedPrimesListExtendedToPrime(self).binarySearch(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isCoprime",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_gcd_2(_self, _anInteger), 1);
  },
  "{ :self :anInteger |\n\t\tself.gcd(anInteger) = 1\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isAlmostPrime",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_primeFactors_1(_self)), _k);
  },
  "{ :self :k |\n\t\tself.primeFactors.size = k\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isPowerfulNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(
      _values_1(_asMap_1(_primeFactorization_1(_self))),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_each, 1);
      },
    );
  },
  "{ :self |\n\t\tself.primeFactorization.asMap.values.allSatisfy { :each |\n\t\t\teach > 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCachedPrime_2(_system, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPrimeTrialDivision_1(_self);
    });
  },
  "{ :self |\n\t\tsystem.isCachedPrime(self).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.isPrimeTrialDivision\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isPrimeTrialDivision",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_percentSign_2(_self, 2), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_self, 2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _limit = _floor_1(_sqrt_1(_self));
        /* Statements */
        return _noneSatisfy_2(_thenTo_3(3, 5, _limit), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _each"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_percentSign_2(_self, _each), 0);
        });
      });
    });
  },
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self % 2 = 0).if {\n\t\t\t\tself = 2\n\t\t\t} {\n\t\t\t\tlet limit = self.sqrt.floor;\n\t\t\t\t(3, 5 .. limit).noneSatisfy { :each |\n\t\t\t\t\tself % each = 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isPrimeWilson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _divisible_2(
        _plusSign_2(_factorial_1(_hyphenMinus_2(_self, 1)), 1),
        _self,
      );
    });
  },
  "{ :self |\n\t\t(self < 2).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t((self - 1).factorial + 1).divisible(self)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isLesserTwinPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isPrime_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_plusSign_2(_self, 2), _nextPrime_1(_self));
    });
  },
  "{ :self |\n\t\tself.isPrime & {\n\t\t\tself + 2 = self.nextPrime\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "leastPrimeGreaterThanOrEqualTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _self;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPrime_1(_answer);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self;\n\t\t{\n\t\t\tanswer.isPrime\n\t\t}.whileFalse {\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "liouvilleLambda",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEven_1(_size_1(_primeFactors_1(_self))), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return -1;
    });
  },
  "{ :self |\n\t\tself.primeFactors.size.isEven.if {\n\t\t\t1\n\t\t} {\n\t\t\t-1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "millerRabinPrimalityTest",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _d, _s, _a, _x, _r;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _return_1"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_self, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(false);
      });
      _ifTrue_2(_lessThanSignEqualsSign_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(true);
      });
      _ifTrue_2(_isEven_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(false);
      });
      _d = _hyphenMinus_2(_self, 1);
      _s = 0;
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_reverseSolidusReverseSolidus_2(_d, 2), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _d = _solidus_2(_d, 2);
        return _s = _plusSign_2(_s, 1);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        return _greaterThanSignEqualsSign_2(_k, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _a = _randomLargeInteger_3(
          _system,
          _asterisk_2(_one_1(_self), 2),
          _hyphenMinus_2(_self, 2),
        );
        _x = _reverseSolidusReverseSolidus_2(
          _circumflexAccent_2(_a, _d),
          _self,
        );
        return _ifFalse_2(_equalsSign_2(_x, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _r = -1;
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _r = _plusSign_2(_r, 1);
            return _ampersand_2(_lessThanSign_2(_r, _s), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _tildeEqualsSign_2(_x, _hyphenMinus_2(_self, 1));
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _x = _reverseSolidusReverseSolidus_2(
              _circumflexAccent_2(_x, 2),
              _self,
            );
          });
          return _ifTrue_2(
            _tildeEqualsSign_2(_x, _hyphenMinus_2(_self, 1)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(false);
            },
          );
        });
      });
      return true;
    });
  },
  "{ :self :k |\n\t\tvar d, s, a, x, r;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self = 1).ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t(self <= 3).ifTrue {\n\t\t\t\ttrue.return\n\t\t\t};\n\t\t\tself.isEven.ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\td := self - 1;\n\t\t\ts := 0;\n\t\t\t{\n\t\t\t\td \\\\ 2 = 0\n\t\t\t}.whileTrue {\n\t\t\t\td := d / 2;\n\t\t\t\ts := s + 1\n\t\t\t};\n\t\t\t{\n\t\t\t\tk := k - 1;\n\t\t\t\tk >= 0\n\t\t\t}.whileTrue {\n\t\t\t\ta := system.randomLargeInteger(self.one * 2, self - 2);\n\t\t\t\tx := (a ^ d) \\\\ self;\n\t\t\t\t(x = 1).ifFalse {\n\t\t\t\t\tr := -1;\n\t\t\t\t\t{\n\t\t\t\t\t\tr := r + 1;\n\t\t\t\t\t\tr < s & {\n\t\t\t\t\t\t\tx ~= (self - 1)\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tx := (x ^ 2) \\\\ self\n\t\t\t\t\t};\n\t\t\t\t\t(x ~= (self - 1)).ifTrue {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "moebiusMu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSquareFree_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _liouvilleLambda_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.isSquareFree.if {\n\t\t\tself.liouvilleLambda\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "nextPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _leastPrimeGreaterThanOrEqualTo_1(_plusSign_2(_self, 1));
  },
  "{ :self |\n\t\t(self + 1).leastPrimeGreaterThanOrEqualTo\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "nthPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _cachedPrimesListExtendedToIndex_2(_system, _self);
    /* Statements */
    return _at_2(_primesList, _self);
  },
  "{ :self |\n\t\tlet primesList = system.cachedPrimesListExtendedToIndex(self);\n\t\tprimesList[self]\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "nthPrimeGap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _nthPrime_1(_plusSign_2(_self, 1)),
      _nthPrime_1(_self),
    );
  },
  "{ :self |\n\t\t(self + 1).nthPrime - self.nthPrime\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "previousPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _hyphenMinus_2(
      _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
      1,
    );
    /* Statements */
    return _at_2(_cachedPrimesList_1(_system), _index);
  },
  "{ :self |\n\t\tlet index = self.leastPrimeGreaterThanOrEqualTo.indexOfPrime - 1;\n\t\tsystem.cachedPrimesList[index]\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeDivisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _keys_1(_asMap_1(_primeFactorization_1(_self)));
  },
  "{ :self |\n\t\tself.primeFactorization.asMap.keys\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeExponents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _map = _asMap_1(_primeFactorization_1(_self));
    /* Statements */
    return _collect_2(_primesUpTo_1(_max_1(_keys_1(_map))), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atIfAbsent_3(_map, _each, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      });
    });
  },
  "{ :self |\n\t\tlet map = self.primeFactorization.asMap;\n\t\tmap.keys.max.primesUpTo.collect { :each |\n\t\t\tmap.atIfAbsent(each) {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeFactorization",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBag_1(_primeFactors_1(_self));
  },
  "{ :self |\n\t\tself.primeFactors.asBag\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeFactors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _return_1"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _index = 1;
        let _prime = 2;
        let _k = _self;
        let _answer = [];
        /* Statements */
        _repeat_1(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _prime = _nthPrime_1(_index);
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_percentSign_2(_k, _prime), 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _add_2(_answer, _prime);
            _k = _solidusSolidus_2(_k, _prime);
            return _ifTrue_2(_equalsSign_2(_k, 1), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(_answer);
            });
          });
          _ifTrue_2(_greaterThanSign_2(_squared_1(_prime), _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            _add_2(_answer, _k);
            return _return_1(_answer);
          });
          return _index = _plusSign_2(_index, 1);
        });
        return _answer;
      });
    });
  },
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet index = 1;\n\t\t\t\tlet prime = 2;\n\t\t\t\tlet k = self;\n\t\t\t\tlet answer = [];\n\t\t\t\t{\n\t\t\t\t\tprime := index.nthPrime;\n\t\t\t\t\t{\n\t\t\t\t\t\tk % prime = 0\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tanswer.add(prime);\n\t\t\t\t\t\tk := k // prime;\n\t\t\t\t\t\t(k = 1).ifTrue {\n\t\t\t\t\t\t\tanswer.return\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\t(prime.squared > k).ifTrue {\n\t\t\t\t\t\tanswer.add(k);\n\t\t\t\t\t\tanswer.return\n\t\t\t\t\t};\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}.repeat;\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeFactorsTrialDivision",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _self;
    let _m = 3;
    let _answer = [];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_percentSign_2(_n, 2), 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, 2);
      return _n = _solidusSolidus_2(_n, 2);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_asterisk_2(_m, _m), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_percentSign_2(_n, _m), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _add_2(_answer, _m);
        return _n = _solidusSolidus_2(_n, _m);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _m = _plusSign_2(_m, 2);
      });
    });
    _ifTrue_2(_tildeEqualsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _n);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet n = self;\n\t\tlet m = 3;\n\t\tlet answer = [];\n\t\t{\n\t\t\tn % 2 = 0\n\t\t}.whileTrue {\n\t\t\tanswer.add(2);\n\t\t\tn := n // 2\n\t\t};\n\t\t{\n\t\t\tm * m <= n\n\t\t}.whileTrue {\n\t\t\t(n % m = 0).if {\n\t\t\t\tanswer.add(m);\n\t\t\t\tn := n // m\n\t\t\t} {\n\t\t\t\tm := m + 2\n\t\t\t}\n\t\t};\n\t\t(n ~= 1).ifTrue {\n\t\t\tanswer.add(n)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeNu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_asMap_1(_primeFactorization_1(_self)));
  },
  "{ :self |\n\t\tself.primeFactorization.asMap.size\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeOmega",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_primeFactors_1(_self));
  },
  "{ :self |\n\t\tself.primeFactors.size\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primePi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _sieveOfEratosthenesDo_2(_self, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _unusedItem"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.sieveOfEratosthenesDo { :unusedItem |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _maxIfEmpty_2(_primeFactors_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.primeFactors.maxIfEmpty {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesBetweenAnd",
  ["iMin", "iMax"],
  function (_iMin, _iMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _iMin, _iMax"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _startIndex = _if_3(_isPrime_1(_iMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOfPrime_1(_iMin);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOfPrime_1(_nextPrime_1(_iMin));
    });
    /* Statements */
    return _copyFromTo_3(
      _cachedPrimesList_1(_system),
      _startIndex,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_iMax)), 1),
    );
  },
  "{ :iMin :iMax |\n\t\tlet startIndex = iMin.isPrime.if {\n\t\t\tiMin.indexOfPrime\n\t\t} {\n\t\t\tiMin.nextPrime.indexOfPrime\n\t\t};\n\t\tsystem.cachedPrimesList.copyFromTo(\n\t\t\tstartIndex,\n\t\t\tiMax.nextPrime.indexOfPrime - 1\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_cachedPrimesListExtendedToIndex_2(_system, _self), _self);
  },
  "{ :self |\n\t\tsystem.cachedPrimesListExtendedToIndex(self).take(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesListWheelSieve",
  ["limit"],
  function (_limit) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _limit"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_limit, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
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
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_k, _limit);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_c, _plusSign_2(_k, 1), true);
        return _k = _plusSign_2(_k, 6);
      });
      _k = 25;
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_k, _limit);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_c, _plusSign_2(_k, 1), true);
        return _k = _plusSign_2(_k, 10);
      });
      _k = 49;
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_k, _limit);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_c, _plusSign_2(_k, 1), true);
        return _k = _plusSign_2(_k, 14);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_p2, _limit);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _i = _p2;
        let _ok = true;
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_i, _limit);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_c, _plusSign_2(_i, 1), true);
          return _i = _plusSign_2(_i, _asterisk_2(2, _p1));
        });
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ok;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _p1 = _plusSign_2(_p1, _at_2(_z, _plusSign_2(_w, 1)));
          _w = _percentSign_2(_plusSign_2(_w, 1), 48);
          return _ok = _at_2(_c, _plusSign_2(_p1, 1));
        });
        return _p2 = _asterisk_2(_p1, _p1);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_j, _limit);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifFalse_2(_at_2(_c, _plusSign_2(_j, 1)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _j);
        });
        return _j = _plusSign_2(_j, 2);
      });
      return _answer;
    });
  },
  "{ :limit |\n\t\t(limit < 2).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet c = List(limit + 1, false);\n\t\t\tlet k = 9;\n\t\t\tlet p1 = 11;\n\t\t\tlet p2 = 121;\n\t\t\t/* First differences of 11-rough numbers: not divisible by 2, 3, 5 or 7. */\n\t\t\tlet z = [2 4 2 4 6 2 6 4 2 4 6 6 2 6 4 2 6 4 6 8 4 2 4 2 4 8 6 4 6 2 4 6 2 6 6 4 2 4 6 2 6 4 2 4 2 10 2 10];\n\t\t\tlet w = 0;\n\t\t\tlet answer = [2];\n\t\t\tlet j = 3;\n\t\t\tc[1] := true;\n\t\t\tc[2] := true;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 6\n\t\t\t};\n\t\t\tk := 25;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 10\n\t\t\t};\n\t\t\tk := 49;\n\t\t\t{ k <= limit }.whileTrue {\n\t\t\t\tc[k + 1] := true;\n\t\t\t\tk := k + 14\n\t\t\t};\n\t\t\t{ p2 <= limit }.whileTrue {\n\t\t\t\tlet i = p2;\n\t\t\t\tlet ok = true;\n\t\t\t\t{ i <= limit }.whileTrue {\n\t\t\t\t\tc[i + 1] := true;\n\t\t\t\t\ti := i + (2 * p1)\n\t\t\t\t};\n\t\t\t\t{ ok }.whileTrue {\n\t\t\t\t\tp1 := p1 + z[w + 1];\n\t\t\t\t\tw := (w + 1) % 48;\n\t\t\t\t\tok := c[p1 + 1]\n\t\t\t\t};\n\t\t\t\tp2 := p1 * p1\n\t\t\t};\n\t\t\t{ j <= limit }.whileTrue {\n\t\t\t\tc[j + 1].ifFalse {\n\t\t\t\t\tanswer.add(j)\n\t\t\t\t};\n\t\t\t\tj := j + 2\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesUpTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(
      _cachedPrimesList_1(_system),
      1,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1),
    );
  },
  "{ :self |\n\t\tsystem.cachedPrimesList.copyFromTo(\n\t\t\t1,\n\t\t\tself.nextPrime.indexOfPrime - 1\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesUpToDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1);
    let _primesList = _cachedPrimesListExtendedToIndex_2(_system, _k);
    /* Statements */
    return _toDo_3(1, _k, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _index"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_primesList, _index));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet k = self.nextPrime.indexOfPrime - 1;\n\t\tlet primesList = system.cachedPrimesListExtendedToIndex(k);\n\t\t1.toDo(k) { :index |\n\t\t\taBlock(primesList[index])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "sieveOfEratosthenesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _size = _self;
    let _flags = _List_1(_size);
    /* Statements */
    _atAllPut_2(_flags, true);
    return _toDo_3(2, _size, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_at_2(_flags, _hyphenMinus_2(_i, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _k = _plusSign_2(_i, _i);
        /* Statements */
        _aBlock_1(_i);
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_k, _size);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_flags, _hyphenMinus_2(_k, 1), false);
          return _k = _plusSign_2(_k, _i);
        });
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet size = self;\n\t\tlet flags = List(size);\n\t\tflags.atAllPut(true);\n\t\t2.toDo(size) { :i |\n\t\t\tflags[i - 1].ifTrue{\n\t\t\t\tlet k = i + i;\n\t\t\t\taBlock(i);\n\t\t\t\t{\n\t\t\t\t\tk <= size\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tflags[k - 1] := false;\n\t\t\t\t\tk := k + i\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "sieveOfEratosthenes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _sieveOfEratosthenesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.sieveOfEratosthenesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Primes",
  "isPrimePower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primeFactors = _factorInteger_1(_self);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_size_1(_primeFactors), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPrime_1(_key_1(_first_1(_primeFactors)));
    });
  },
  "{ :self |\n\t\tlet primeFactors = self.factorInteger;\n\t\tprimeFactors.size = 1 & {\n\t\t\tprimeFactors.first.key.isPrime\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Primes",
  "factorInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _factorInteger_1(_numerator_1(_self));
    let _d = _collect_2(
      _factorInteger_1(_denominator_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinusGreaterThanSign_2(
          _key_1(_each),
          _negated_1(_value_1(_each)),
        );
      },
    );
    /* Statements */
    return _sorted_1(_plusSignPlusSign_2(_n, _d));
  },
  "{ :self |\n\t\tlet n = self.numerator.factorInteger;\n\t\tlet d = self.denominator.factorInteger.collect { :each |\n\t\t\teach.key -> each.value.negated\n\t\t};\n\t\t(n ++ d).sorted\n\t}",
);

sl.addMethod(
  "Fraction",
  "Primes",
  "primeFactors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _primeFactors_1(_numerator_1(_self)),
      _collect_2(_primeFactors_1(_denominator_1(_self)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ReducedFraction_2(1, _each);
      }),
    );
  },
  "{ :self |\n\t\tself.numerator.primeFactors ++ self.denominator.primeFactors.collect { :each |\n\t\t\tReducedFraction(1, each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Primes",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_2(
      _primeLimit_1(_numerator_1(_self)),
      _primeLimit_1(_denominator_1(_self)),
    );
  },
  "{ :self |\n\t\tself.numerator.primeLimit.max(self.denominator.primeLimit)\n\t}",
);

sl.addMethod(
  "Complex",
  "Primes",
  "isGaussianPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _real_1(_self);
    let _b = _imaginary_1(_self);
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_isPrime_1(_n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_percentSign_2(_n, 4), 3);
      });
    };
    /* Statements */
    return _if_3(_equalsSign_2(_a, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_isPrime_1(_abs_1(_b)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _f_1(_abs_1(_b));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_b, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_isPrime_1(_abs_1(_a)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _f_1(_abs_1(_a));
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _isPrime_1(_plusSign_2(_squared_1(_a), _squared_1(_b)));
      });
    });
  },
  "{ :self |\n\t\tlet a = self.real;\n\t\tlet b = self.imaginary;\n\t\tlet f = { :n |\n\t\t\tn.isPrime & {\n\t\t\t\t(n % 4) = 3\n\t\t\t}\n\t\t};\n\t\t(a = 0).if {\n\t\t\tb.abs.isPrime & {\n\t\t\t\tf(b.abs)\n\t\t\t}\n\t\t} {\n\t\t\t(b = 0).if {\n\t\t\t\ta.abs.isPrime & {\n\t\t\t\t\tf(a.abs)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(a.squared + b.squared).isPrime\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Primes",
  "isCoprime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _return_1"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _toDo_3(1, _hyphenMinus_2(_size_1(_self), 1), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _i"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _size_1(_self), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _j"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifFalse_2(
            _isCoprime_2(_at_2(_self, _i), _at_2(_self, _j)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(false);
            },
          );
        });
      });
      return true;
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(self.size - 1) { :i |\n\t\t\t\t(i + 1).toDo(self.size) { :j |\n\t\t\t\t\tself[i].isCoprime(self[j]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Primes",
  "nthPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _nthPrime_1);
  },
  "{ :self |\n\t\tself.collect(nthPrime:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Primes",
  "primeOmega",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _primeOmega_1);
  },
  "{ :self |\n\t\tself.collect(primeOmega:/1)\n\t}",
);

sl.addMethod(
  "List",
  "Primes",
  "primesListExtendedToIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _last_1(_self);
    /* Statements */
    _timesRepeat_2(_hyphenMinus_2(_anInteger, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _p = _nextPrime_1(_p);
      return _add_2(_self, _p);
    });
    return _p;
  },
  "{ :self :anInteger |\n\t\tlet p = self.last;\n\t\t(anInteger - self.size).timesRepeat {\n\t\t\tp := p.nextPrime;\n\t\t\tself.add(p)\n\t\t};\n\t\tp\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Primes",
  "isCachedPrime",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _tildeEqualsSign_2(
      _binarySearch_2(_cachedPrimesList_1(_self), _anInteger),
      0,
    );
  },
  "{ :self :anInteger |\n\t\tself.cachedPrimesList.binarySearch(anInteger) ~= 0\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Primes",
  "cachedPrimesList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "primesList", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _select_2(_upOrDownTo_2(1, 99), _isPrimeTrialDivision_1);
    });
  },
  "{ :self |\n\t\tself.cached('primesList') {\n\t\t\t1:99.select(isPrimeTrialDivision:/1)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Primes",
  "cachedPrimesListExtendedToIndex",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _cachedPrimesList_1(_self);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_anInteger, _size_1(_primesList)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _primesListExtendedToIndex_2(_primesList, _anInteger);
      },
    );
    return _primesList;
  },
  "{ :self :anInteger |\n\t\tlet primesList = self.cachedPrimesList;\n\t\t(anInteger > primesList.size).ifTrue {\n\t\t\tprimesList.primesListExtendedToIndex(anInteger)\n\t\t};\n\t\tprimesList\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Primes",
  "cachedPrimesListExtendedToPrime",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _cachedPrimesList_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_last_1(_primesList), _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _primesListExtendedToIndex_2(
        _primesList,
        _plusSign_2(_size_1(_primesList), 8),
      );
    });
    return _primesList;
  },
  "{ :self :anInteger |\n\t\tlet primesList = self.cachedPrimesList;\n\t\t{\n\t\t\tprimesList.last < anInteger\n\t\t}.whileTrue {\n\t\t\tprimesList.primesListExtendedToIndex(primesList.size + 8)\n\t\t};\n\t\tprimesList\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "Primes",
  "randomPrime",
  ["self", "iMin", "iMax", "shape"],
  function (_self, _iMin, _iMax, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _iMin, _iMax, _shape"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _primesBetweenAnd_2(_iMin, _iMax);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _index = _randomInteger_4(_self, 1, _size_1(_list), []);
      /* Statements */
      return _at_2(_list, _index);
    }, _shape);
  },
  "{ :self :iMin :iMax :shape |\n\t\tlet list = iMin.primesBetweenAnd(iMax);\n\t\t{\n\t\t\tlet index = self.randomInteger(1, list.size, []);\n\t\t\tlist[index]\n\t\t} ! shape\n\t}",
);
