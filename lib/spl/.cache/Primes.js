/* {- Requires: Cache Collection Fraction Integer -} */

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "factorInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _factorInteger_1(_negated_1(_self));
      /* Statements */
      _addFirst_2(_answer, _hyphenMinusGreaterThanSign_2(-1, -1));
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sortedElements_1(_primeFactorization_1(_self));
    });
  },
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tlet answer = self.negated.factorInteger;\n\t\t\tanswer.addFirst(-1 -> -1);\n\t\t\tanswer\n\t\t} {\n\t\t\tself.primeFactorization.sortedElements\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "indexOfPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _primesList_1(_system);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _last_1(_primesList)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _indexOf_2(_primesList, _self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _primesListExtend_2(_plusSign_2(_size_1(_primesList), 8), _primesList);
        return _indexOfPrime_1(_self);
      },
    );
  },
  "{ :self |\n\t\tlet primesList = system.primesList;\n\t\t(self <= primesList.last).if {\n\t\t\tprimesList.indexOf(self)\n\t\t} {\n\t\t\t(primesList.size + 8).primesListExtend(primesList);\n\t\t\tself.indexOfPrime\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "isCoprime",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(
      _values_1(_asMap_1(_primeFactorization_1(_self))),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return true;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _selfSqrt = _sqrt_1(_self);
        let _i = 2;
        /* Statements */
        return _valueWithReturn_1(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSignEqualsSign_2(_i, _selfSqrt);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _ifTrue_2(_equalsSign_2(_percentSign_2(_self, _i), 0), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(false);
            });
            return _i = _plusSign_2(_i, 1);
          });
          return _return_1(true);
        });
      });
    });
  },
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self = 2).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tlet selfSqrt = self.sqrt;\n\t\t\t\tlet i = 2;\n\t\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t\t{\n\t\t\t\t\t\ti <= selfSqrt\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\t(self % i = 0).ifTrue {\n\t\t\t\t\t\t\tfalse.return\n\t\t\t\t\t\t};\n\t\t\t\t\t\ti := i + 1\n\t\t\t\t\t};\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "leastPrimeGreaterThanOrEqualTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _maybePrime = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _not_1(_isPrime_1(_maybePrime));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _maybePrime = _plusSign_2(_maybePrime, 1);
    });
    return _maybePrime;
  },
  "{ :self |\n\t\tlet maybePrime = self;\n\t\t{\n\t\t\tmaybePrime.isPrime.not\n\t\t}.whileTrue {\n\t\t\tmaybePrime := maybePrime + 1\n\t\t};\n\t\tmaybePrime\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "millerRabinPrimalityTest",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _d, _s, _a, _x, _r;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_self, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(false);
      });
      _ifTrue_2(_lessThanSignEqualsSign_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(true);
      });
      _ifTrue_2(_isEven_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
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
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_reverseSolidusReverseSolidus_2(_d, 2), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _d = _solidus_2(_d, 2);
        return _s = _plusSign_2(_s, 1);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        return _greaterThanSignEqualsSign_2(_k, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _a = _randomInteger_2(
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
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _r = -1;
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _r = _plusSign_2(_r, 1);
            return _ampersand_2(_lessThanSign_2(_r, _s), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _tildeEqualsSign_2(_x, _hyphenMinus_2(_self, 1));
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
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
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
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
  "{ :self :k |\n\t\tvar d, s, a, x, r;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self = 1).ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t(self <= 3).ifTrue {\n\t\t\t\ttrue.return\n\t\t\t};\n\t\t\tself.isEven.ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\td := self - 1;\n\t\t\ts := 0;\n\t\t\t{\n\t\t\t\td \\\\ 2 = 0\n\t\t\t}.whileTrue {\n\t\t\t\td := d / 2;\n\t\t\t\ts := s + 1\n\t\t\t};\n\t\t\t{\n\t\t\t\tk := k - 1;\n\t\t\t\tk >= 0\n\t\t\t}.whileTrue {\n\t\t\t\ta := (self.one * 2).randomInteger(self - 2);\n\t\t\t\tx := (a ^ d) \\\\ self;\n\t\t\t\t(x = 1).ifFalse {\n\t\t\t\t\tr := -1;\n\t\t\t\t\t{\n\t\t\t\t\t\tr := r + 1;\n\t\t\t\t\t\tr < s & {\n\t\t\t\t\t\t\tx ~= (self - 1)\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tx := (x ^ 2) \\\\ self\n\t\t\t\t\t};\n\t\t\t\t\t(x ~= (self - 1)).ifTrue {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "nextPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _primesList_1(_system);
    /* Statements */
    return _if_3(_greaterThanSign_2(_self, _size_1(_primesList)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _primesListExtend_2(_self, _primesList);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_primesList, _self);
    });
  },
  "{ :self |\n\t\tlet primesList = system.primesList;\n\t\t(self > primesList.size).if {\n\t\t\tself.primesListExtend(primesList)\n\t\t} {\n\t\t\tprimesList[self]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "previousPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _hyphenMinus_2(
      _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
      1,
    );
    /* Statements */
    return _at_2(_primesList_1(_system), _index);
  },
  "{ :self |\n\t\tlet index = self.leastPrimeGreaterThanOrEqualTo.indexOfPrime - 1;\n\t\tsystem.primesList[index]\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeDivisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _map = _asMap_1(_primeFactorization_1(_self));
    /* Statements */
    return _collect_2(_primesUpTo_1(_max_1(_keys_1(_map))), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atIfAbsent_3(_map, _each, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
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
  "primeFactors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
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
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _prime = _nthPrime_1(_index);
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_percentSign_2(_k, _prime), 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _add_2(_answer, _prime);
            _k = _solidusSolidus_2(_k, _prime);
            return _ifTrue_2(_equalsSign_2(_k, 1), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(_answer);
            });
          });
          _ifTrue_2(_greaterThanSign_2(_squared_1(_prime), _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
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
  "primeFactorization",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
  "primeNu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _primesUpToDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.primesUpToDo { :each |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _maxIfEmpty_2(_primeFactors_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _iMin, _iMax";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _startIndex = _if_3(_isPrime_1(_iMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOfPrime_1(_iMin);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOfPrime_1(_nextPrime_1(_iMin));
    });
    /* Statements */
    return _copyFromTo_3(
      _primesList_1(_system),
      _startIndex,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_iMax)), 1),
    );
  },
  "{ :iMin :iMax |\n\t\tlet startIndex = iMin.isPrime.if {\n\t\t\tiMin.indexOfPrime\n\t\t} {\n\t\t\tiMin.nextPrime.indexOfPrime\n\t\t};\n\t\tsystem.primesList.copyFromTo(\n\t\t\tstartIndex,\n\t\t\tiMax.nextPrime.indexOfPrime - 1\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_self);
    let _n = 1;
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _n = _nextPrime_1(_n);
      return _atPut_3(_answer, _index, _n);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self);\n\t\tlet n = 1;\n\t\tanswer.indicesDo { :index |\n\t\t\tn := n.nextPrime;\n\t\t\tanswer[index] := n\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesListExtend",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _last_1(_aList);
    /* Statements */
    _timesRepeat_2(_hyphenMinus_2(_self, _size_1(_aList)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _n = _nextPrime_1(_n);
      return _add_2(_aList, _n);
    });
    return _n;
  },
  "{ :self :aList |\n\t\tlet n = aList.last;\n\t\t(self - aList.size).timesRepeat {\n\t\t\tn := n.nextPrime;\n\t\t\taList.add(n)\n\t\t};\n\t\tn\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesUpTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(
      _primesList_1(_system),
      1,
      _hyphenMinus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1),
    );
  },
  "{ :self |\n\t\tsystem.primesList.copyFromTo(1, self.nextPrime.indexOfPrime - 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "primesUpToDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _primesList_1(_system);
    /* Statements */
    return _toDo_3(
      1,
      _hyphenMinus_2(
        _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
        1,
      ),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_at_2(_primesList, _index));
      },
    );
  },
  "{ :self :aBlock:/1 |\n\t\tlet primesList = system.primesList;\n\t\t1.toDo(self.leastPrimeGreaterThanOrEqualTo.indexOfPrime - 1) { :index |\n\t\t\taBlock(primesList[index])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "randomPrime",
  ["iMin", "iMax"],
  function (_iMin, _iMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iMin, _iMax";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_1(_primesBetweenAnd_2(_iMin, _iMax));
  },
  "{ :iMin :iMax |\n\t\tiMin.primesBetweenAnd(iMax).atRandom\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "randomPrime",
  ["iMin", "iMax", "count"],
  function (_iMin, _iMax, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _iMin, _iMax, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_2(_primesBetweenAnd_2(_iMin, _iMax), _count);
  },
  "{ :iMin :iMax :count |\n\t\tiMin.primesBetweenAnd(iMax).atRandom(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Primes",
  "sieveOfEratosthenes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _size = _self;
    let _flags = _List_1(_size);
    let _primeCount = 0;
    /* Statements */
    _atAllPut_2(_flags, true);
    _toDo_3(2, _size, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_at_2(_flags, _hyphenMinus_2(_i, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _k = _plusSign_2(_i, _i);
        /* Statements */
        _primeCount = _plusSign_2(_primeCount, 1);
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_k, _size);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_flags, _hyphenMinus_2(_k, 1), false);
          return _k = _plusSign_2(_k, _i);
        });
      });
    });
    return _primeCount;
  },
  "{ :self |\n\t\tlet size = self;\n\t\tlet flags = List(size);\n\t\tlet primeCount = 0;\n\t\tflags.atAllPut(true);\n\t\t2.toDo(size) { :i |\n\t\t\tflags[i - 1].ifTrue{\n\t\t\t\tlet k = i + i;\n\t\t\t\tprimeCount := primeCount + 1;\n\t\t\t\t{\n\t\t\t\t\tk <= size\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tflags[k - 1] := false;\n\t\t\t\t\tk := k + i\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tprimeCount\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Primes",
  "isPrimePower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primeFactors = _factorInteger_1(_self);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_size_1(_primeFactors), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _factorInteger_1(_numerator_1(_self));
    let _d = _collect_2(
      _factorInteger_1(_denominator_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _primeFactors_1(_numerator_1(_self)),
      _collect_2(_primeFactors_1(_denominator_1(_self)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _real_1(_self);
    let _b = _imaginary_1(_self);
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_isPrime_1(_n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
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
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_isPrime_1(_abs_1(_b)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _f_1(_abs_1(_b));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_b, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_isPrime_1(_abs_1(_a)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _f_1(_abs_1(_a));
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _upToDo_3(1, _hyphenMinus_2(_size_1(_self), 1), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _upToDo_3(_plusSign_2(_i, 1), _size_1(_self), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifFalse_2(
            _isCoprime_2(_at_2(_self, _i), _at_2(_self, _j)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
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
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.upToDo(self.size - 1) { :i |\n\t\t\t\t(i + 1).upToDo(self.size) { :j |\n\t\t\t\t\tself[i].isCoprime(self[j]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Primes",
  "nthPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _primeOmega_1);
  },
  "{ :self |\n\t\tself.collect(primeOmega:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Primes",
  "primesList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "primesList", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _primesList_1(23);
    });
  },
  "{ :self |\n\t\tself.cached('primesList') {\n\t\t\t23.primesList\n\t\t}\n\t}",
);
