/* {- Require: Cache -} */

sl.addTrait("Integer", "Integer");

sl.addTraitMethod(
  "Integer",
  "Integer",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.aBlock(Fraction(self, self.one))\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "asHexDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2("0123456789ABCDEF", _plus_2(_self, 1));
  },
  "{ :self |\n\t\t'0123456789ABCDEF'[self + 1]\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "asWords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _mils = [
      "",
      " thousand",
      " million",
      " billion",
      " trillion",
      " quadrillion",
      " quintillion",
      " sextillion",
      " septillion",
      " octillion",
      " nonillion",
      " decillion",
      " undecillion",
      " duodecillion",
      " tredecillion",
      " quattuordecillion",
      " quindecillion",
      " sexdecillion",
      " septendecillion",
      " octodecillion",
      " novemdecillion",
      " vigintillion",
    ];
    /* Statements */
    return _if_3(_equals_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "zero";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _minus = "";
      let _three = null;
      let _num = _self;
      let _answer = "";
      let _milCount = 1;
      /* Statements */
      _ifTrue_2(_lessThan_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _minus = "negative ";
        return _num = _negated_1(_self);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThan_2(_num, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _three = _threeDigitName_1(_modulo_2(_num, 1000));
        _num = _dividedByDividedBy_2(_num, 1000);
        _ifFalse_2(_isEmpty_1(_three), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _ifFalse_2(_isEmpty_1(_answer), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _answer = _plusPlus_2(", ", _answer);
          });
          return _answer = _plusPlus_2(
            _plusPlus_2(_three, _at_2(_mils, _milCount)),
            _answer,
          );
        });
        return _milCount = _plus_2(_milCount, 1);
      });
      return _plusPlus_2(_minus, _answer);
    });
  },
  "{ :self |\n\t\tlet mils = [\n\t\t\t'',\n\t\t\t' thousand',\n\t\t\t' million', ' billion',\n\t\t\t' trillion', ' quadrillion',\n\t\t\t' quintillion', ' sextillion',\n\t\t\t' septillion', ' octillion',\n\t\t\t' nonillion', ' decillion',\n\t\t\t' undecillion', ' duodecillion',\n\t\t\t' tredecillion', ' quattuordecillion',\n\t\t\t' quindecillion', ' sexdecillion',\n\t\t\t' septendecillion', ' octodecillion',\n\t\t\t' novemdecillion', ' vigintillion'\n\t\t];\n\t\t(self = 0).if {\n\t\t\t'zero'\n\t\t} {\n\t\t\tlet minus = '';\n\t\t\tlet three = nil;\n\t\t\tlet num = self;\n\t\t\tlet answer = '';\n\t\t\tlet milCount = 1;\n\t\t\t(self < 0).ifTrue {\n\t\t\t\tminus := 'negative ';\n\t\t\t\tnum := self.negated\n\t\t\t};\n\t\t\t{\n\t\t\t\tnum > 0\n\t\t\t}.whileTrue {\n\t\t\t\tthree := (num % 1000).threeDigitName;\n\t\t\t\tnum := num // 1000;\n\t\t\t\tthree.isEmpty.ifFalse {\n\t\t\t\t\tanswer.isEmpty.ifFalse {\n\t\t\t\t\t\tanswer := ', ' ++ answer\n\t\t\t\t\t};\n\t\t\t\t\tanswer := three ++ mils[milCount] ++ answer\n\t\t\t\t};\n\t\t\t\tmilCount := milCount + 1\n\t\t\t};\n\t\t\tminus ++ answer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "atRandomBy",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _randomInteger_2(_random, _self);
  },
  "{ :self :random |\n\t\trandom.randomInteger(self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _randomInteger_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.randomInteger(self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "divisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_backslashBackslash_2(_self, _each), 0);
    });
  },
  "{ :self |\n\t\t1.to(self).select { :each |\n\t\t\tself \\\\ each = 0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "doubleFactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_negative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "@Integer>>doubleFactorial: not valid for negative integers",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanEquals_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _max_2(_self, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(_self, _doubleFactorial_1(_minus_2(_self, 2)));
      });
    });
  },
  "{ :self |\n\t\tself.negative.if {\n\t\t\tself.error('@Integer>>doubleFactorial: not valid for negative integers')\n\t\t} {\n\t\t\t(self <= 3).if {\n\t\t\t\tself.max(1)\n\t\t\t} {\n\t\t\t\tself * (self - 2).doubleFactorial\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_negative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>factorial: not valid for negative integers");
    });
    return _if_3(_lessThanEquals_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = _self;
      let _answer = _self;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThan_2(_next, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _next = _minus_2(_next, 1);
        return _answer = _times_2(_answer, _next);
      });
      return _answer;
    });
  },
  "{ :self |\n\t\tself.negative.ifTrue {\n\t\t\t'@Integer>>factorial: not valid for negative integers'.error\n\t\t};\n\t\t(self <= 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet next = self;\n\t\t\tlet answer = self;\n\t\t\t{ next > 1 }.whileTrue {\n\t\t\t\tnext := next - 1;\n\t\t\t\tanswer := answer * next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "foldBetweenAnd",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _b = _minus_2(_high, _low);
    let _c = _modulo_2(_minus_2(_self, _low), _times_2(_b, 2));
    /* Statements */
    _ifTrue_2(_greaterThan_2(_c, _b), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _c = _minus_2(_times_2(_b, _b), _c);
    });
    return _plus_2(_c, _low);
  },
  "{ :self :low :high |\n\t\tlet b = high - low;\n\t\tlet c = (self - low) % (b * 2);\n\t\t(c > b).ifTrue {\n\t\t\tc := (b * b) - c\n\t\t};\n\t\tc + low\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "gcd",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _a = _abs_1(_self);
    let _b = _abs_1(_anInteger);
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_b, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _r = _modulo_2(_a, _b);
      /* Statements */
      _a = _b;
      return _b = _r;
    });
    return _a;
  },
  "{ :self :anInteger |\n\t\tlet a = self.abs;\n\t\tlet b = anInteger.abs;\n\t\t{ b = 0 }.whileFalse {\n\t\t\tlet r = a % b;\n\t\t\ta := b;\n\t\t\tb := r\n\t\t};\n\t\ta\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "indexOfPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _primesArray = _primesArray_1(_system);
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _last_1(_primesArray)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _indexOf_2(_primesArray, _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _primesArrayExtend_2(_plus_2(_size_1(_primesArray), 8), _primesArray);
      return _indexOfPrime_1(_self);
    });
  },
  "{ :self |\n\t\tlet primesArray = system.primesArray;\n\t\t(self <= primesArray.last).if {\n\t\t\tprimesArray.indexOf(self)\n\t\t} {\n\t\t\t(primesArray.size + 8).primesArrayExtend(primesArray);\n\t\t\tself.indexOfPrime\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isByte",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _betweenAnd_3(_self, 0, 255);
    });
  },
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.betweenAnd(0, 255)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isCoprime",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_gcd_2(_self, _anInteger), 1);
  },
  "{ :self :anInteger |\n\t\tself.gcd(anInteger) = 1\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Integer>>isInteger");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Integer>>isInteger')\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isAlmostPrime",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_size_1(_primeFactors_1(_self)), _k);
  },
  "{ :self :k |\n\t\tself.primeFactors.size = k\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_self, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return true;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
            throw Error(errorMessage);
          }
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lessThanEquals_2(_i, _selfSqrt);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _ifTrue_2(_equals_2(_modulo_2(_self, _i), 0), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _return_1(false);
            });
            return _i = _plus_2(_i, 1);
          });
          return _return_1(true);
        });
      });
    });
  },
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self = 2).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tlet selfSqrt = self.sqrt;\n\t\t\t\tlet i = 2;\n\t\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t\t{ i <= selfSqrt }.whileTrue {\n\t\t\t\t\t\t(self % i = 0).ifTrue {\n\t\t\t\t\t\t\tfalse.return\n\t\t\t\t\t\t};\n\t\t\t\t\t\ti := i + 1\n\t\t\t\t\t};\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isPrimePower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _primeFactors = _primeFactorization_1(_self);
    /* Statements */
    return _and_2(_equals_2(_size_1(_primeFactors), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isPrime_1(_key_1(_first_1(_primeFactors)));
    });
  },
  "{ :self |\n\t\tlet primeFactors = self.primeFactorization;\n\t\tprimeFactors.size = 1 & {\n\t\t\tprimeFactors.first.key.isPrime\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "lcm",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _a = _self;
    let _b = _anInteger;
    /* Statements */
    return _if_3(
      _or_2(_equals_2(_a, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_b, 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _ab = _times_2(_a, _b);
        /* Statements */
        _whileFalse_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_b, 0);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _tmp = _b;
          /* Statements */
          _b = _modulo_2(_a, _tmp);
          return _a = _tmp;
        });
        return _abs_1(_dividedBy_2(_ab, _a));
      },
    );
  },
  "{ :self :anInteger |\n\t\tlet a = self;\n\t\tlet b = anInteger;\n\t\t(a = 0 | {\n\t\t\tb = 0\n\t\t}).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet ab = a * b;\n\t\t\t{ b = 0}.whileFalse {\n\t\t\t\tlet tmp = b;\n\t\t\t\tb := a % tmp;\n\t\t\t\ta := tmp\n\t\t\t};\n\t\t\t(ab / a).abs\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "leastPrimeGreaterThanOrEqualTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maybePrime = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _not_1(_isPrime_1(_maybePrime));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _maybePrime = _plus_2(_maybePrime, 1);
    });
    return _maybePrime;
  },
  "{ :self |\n\t\tlet maybePrime = self;\n\t\t{ maybePrime.isPrime.not }.whileTrue {\n\t\t\tmaybePrime := maybePrime + 1\n\t\t};\n\t\tmaybePrime\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "nextPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _leastPrimeGreaterThanOrEqualTo_1(_plus_2(_self, 1));
  },
  "{ :self |\n\t\t(self + 1).leastPrimeGreaterThanOrEqualTo\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "nthPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _primesArray = _primesArray_1(_system);
    /* Statements */
    return _if_3(_greaterThan_2(_self, _size_1(_primesArray)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _primesArrayExtend_2(_self, _primesArray);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_primesArray, _self);
    });
  },
  "{ :self |\n\t\tlet primesArray = system.primesArray;\n\t\t(self > primesArray.size).if {\n\t\t\tself.primesArrayExtend(primesArray)\n\t\t} {\n\t\t\tprimesArray[self]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "previousPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _minus_2(
      _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
      1,
    );
    /* Statements */
    return _at_2(_primesArray_1(_system), _index);
  },
  "{ :self |\n\t\tlet index = self.leastPrimeGreaterThanOrEqualTo.indexOfPrime - 1;\n\t\tsystem.primesArray[index]\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primeDivisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_primeFactorization_1(_self), _key_1);
  },
  "{ :self |\n\t\tself.primeFactorization.collect(key:/1)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primeFactors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw Error(errorMessage);
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
            throw Error(errorMessage);
          }
          /* Statements */
          _prime = _nthPrime_1(_index);
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _equals_2(_modulo_2(_k, _prime), 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _add_2(_answer, _prime);
            _k = _dividedByDividedBy_2(_k, _prime);
            return _ifTrue_2(_equals_2(_k, 1), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _return_1(_answer);
            });
          });
          _ifTrue_2(_greaterThan_2(_squared_1(_prime), _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _add_2(_answer, _k);
            return _return_1(_answer);
          });
          return _index = _plus_2(_index, 1);
        });
        return _answer;
      });
    });
  },
  "{ :self |\n\t\t(self <= 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet index = 1;\n\t\t\t\tlet prime = 2;\n\t\t\t\tlet k = self;\n\t\t\t\tlet answer = [];\n\t\t\t\t{\n\t\t\t\t\tprime := index.nthPrime;\n\t\t\t\t\t{\n\t\t\t\t\t\tk % prime = 0\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tanswer.add(prime);\n\t\t\t\t\t\tk := k // prime;\n\t\t\t\t\t\t(k = 1).ifTrue {\n\t\t\t\t\t\t\tanswer.return\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\t(prime.squared > k).ifTrue {\n\t\t\t\t\t\tanswer.add(k);\n\t\t\t\t\t\tanswer.return\n\t\t\t\t\t};\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}.repeat;\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primeFactorization",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortedElements_1(_asBag_1(_primeFactors_1(_self)));
  },
  "{ :self |\n\t\tself.primeFactors.asBag.sortedElements\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _maxIfEmpty_2(_primeFactors_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.primeFactors.maxIfEmpty {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primesArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_self);
    let _n = 1;
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _n = _nextPrime_1(_n);
      return _atPut_3(_answer, _index, _n);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self);\n\t\tlet n = 1;\n\t\tanswer.indicesDo { :index |\n\t\t\tn := n.nextPrime;\n\t\t\tanswer[index] := n\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primesArrayExtend",
  ["self", "anArray"],
  function (_self, _anArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _n = _last_1(_anArray);
    /* Statements */
    _timesRepeat_2(_minus_2(_self, _size_1(_anArray)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _n = _nextPrime_1(_n);
      return _add_2(_anArray, _n);
    });
    return _n;
  },
  "{ :self :anArray |\n\t\tlet n = anArray.last;\n\t\t(self - anArray.size).timesRepeat {\n\t\t\tn := n.nextPrime;\n\t\t\tanArray.add(n)\n\t\t};\n\t\tn\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primesUpTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(
      _primesArray_1(_system),
      1,
      _minus_2(_indexOfPrime_1(_nextPrime_1(_self)), 1),
    );
  },
  "{ :self |\n\t\tsystem.primesArray.copyFromTo(1, self.nextPrime.indexOfPrime - 1)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "primesUpToDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _primesArray = _primesArray_1(_system);
    /* Statements */
    return _toDo_3(
      1,
      _indexOfPrime_1(_leastPrimeGreaterThanOrEqualTo_1(_self)),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_at_2(_primesArray, _index));
      },
    );
  },
  "{ :self :aBlock:/1 |\n\t\tlet primesArray = system.primesArray;\n\t\t1.toDo(self.leastPrimeGreaterThanOrEqualTo.indexOfPrime) { :index |\n\t\t\taBlock(primesArray[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "printStringHex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toString(16).toUpperCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toString(16).toUpperCase();>\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "printStringRoman",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asciiStringStreamContents_1(function (_stream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _stream";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _romanDigitsOn_2(_self, _stream);
    });
  },
  "{ :self |\n\t\t{ :stream |\n\t\t\tromanDigitsOn(self, stream)\n\t\t}.asciiStringStreamContents\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "romanDigitsForOn",
  ["self", "digits", "base", "aStream"],
  function (_self, _digits, _base, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _digits, _base, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _n = _dividedByDividedBy_2(
      _modulo_2(_self, _times_2(_base, 10)),
      _base,
    );
    /* Statements */
    return _if_3(_equals_2(_n, 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextPutAll_2(_aStream, [_last_1(_digits), _first_1(_digits)]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_n, 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _nextPutAll_2(_aStream, [_last_1(_digits), _second_1(_digits)]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_greaterThan_2(_n, 4), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _nextPut_2(_aStream, _second_1(_digits));
        });
        return _timesRepeat_2(_modulo_2(_n, 5), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _nextPut_2(_aStream, _last_1(_digits));
        });
      });
    });
  },
  "{ :self :digits :base :aStream |\n\t\tlet n = self % (base * 10) // base;\n\t\t(n = 9).if {\n\t\t\taStream.nextPutAll([digits.last, digits.first])\n\t\t} {\n\t\t\t(n = 4).if {\n\t\t\t\taStream.nextPutAll([digits.last, digits.second])\n\t\t\t} {\n\t\t\t\t(n > 4).ifTrue {\n\t\t\t\t\taStream.nextPut(digits.second)\n\t\t\t\t};\n\t\t\t\t(n % 5).timesRepeat {\n\t\t\t\t\taStream.nextPut(digits.last)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "romanDigitsOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _integer = _if_3(_negative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _nextPut_2(_aStream, _asciiValue_1("-"));
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
    /* Statements */
    _timesRepeat_2(_dividedByDividedBy_2(_integer, 1000), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextPut_2(_aStream, _asciiValue_1("M"));
    });
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("MDC"), 100, _aStream);
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("CLX"), 10, _aStream);
    return _romanDigitsForOn_4(_integer, _asciiByteArray_1("XVI"), 1, _aStream);
  },
  "{ :self :aStream |\n\t\tlet integer = self.negative.if {\n\t\t\taStream.nextPut('-'.asciiValue);\n\t\t\tself.negated\n\t\t} {\n\t\t\tself\n\t\t};\n\t\t(integer // 1000).timesRepeat {\n\t\t\taStream.nextPut('M'.asciiValue)\n\t\t};\n\t\tinteger.romanDigitsForOn('MDC'.asciiByteArray, 100, aStream);\n\t\tinteger.romanDigitsForOn('CLX'.asciiByteArray, 10, aStream);\n\t\tinteger.romanDigitsForOn('XVI'.asciiByteArray, 1, aStream)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "take",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _or_2(_lessThan_2(_k, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThan_2(_k, _self);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _numerator = 1;
        let _denominator = 1;
        /* Statements */
        _toByDo_4(
          _self,
          _plus_2(_max_2(_k, _minus_2(_self, _k)), 1),
          -1,
          function (_factor) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _factor";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _numerator = _times_2(_numerator, _factor);
          },
        );
        _toDo_3(1, _min_2(_k, _minus_2(_self, _k)), function (_factor) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _factor";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _denominator = _times_2(_denominator, _factor);
        });
        return _dividedByDividedBy_2(_numerator, _denominator);
      },
    );
  },
  "{ :self :k |\n\t\t(k < 0 | { k > self }).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet numerator = 1;\n\t\t\tlet denominator = 1;\n\t\t\tself.toByDo(k.max(self - k) + 1, -1) { :factor |\n\t\t\t\tnumerator := numerator * factor\n\t\t\t};\n\t\t\t1.toDo(k.min(self - k)) { :factor |\n\t\t\t\tdenominator :=denominator *  factor\n\t\t\t};\n\t\t\tnumerator // denominator\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "threeDigitName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _units = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let _decades = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer;
      /* Statements */
      _ifTrue_2(_equals_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _return_1("");
      });
      _ifTrue_2(_greaterThan_2(_self, 99), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _answer = _plusPlus_2(
          _at_2(_units, _dividedByDividedBy_2(_self, 100)),
          " hundred",
        );
        _ifFalse_2(_equals_2(_modulo_2(_self, 100), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _answer = _plusPlus_2(
            _plusPlus_2(_answer, " "),
            _threeDigitName_1(_modulo_2(_self, 100)),
          );
        });
        return _return_1(_answer);
      });
      _ifTrue_2(_lessThan_2(_self, 20), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _return_1(_at_2(_units, _self));
      });
      _answer = _at_2(_decades, _minus_2(_dividedByDividedBy_2(_self, 10), 1));
      _ifFalse_2(_equals_2(_modulo_2(_self, 10), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusPlus_2(
          _plusPlus_2(_answer, "-"),
          _at_2(_units, _modulo_2(_self, 10)),
        );
      });
      return _return_1(_answer);
    });
  },
  "{ :self |\n\t\tlet units = [\n\t\t\t'one', 'two', 'three', 'four', 'five',\n\t\t\t'six', 'seven', 'eight', 'nine', 'ten',\n\t\t\t'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',\n\t\t\t'sixteen', 'seventeen', 'eighteen', 'nineteen'\n\t\t];\n\t\tlet decades = [\n\t\t\t'twenty', 'thirty', 'forty', 'fifty',\n\t\t\t'sixty', 'seventy', 'eighty', 'ninety'\n\t\t];\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t| answer |\n\t\t\t(self = 0).ifTrue {\n\t\t\t\t''.return\n\t\t\t};\n\t\t\t(self > 99).ifTrue {\n\t\t\t\tanswer := (units[self // 100]) ++' hundred';\n\t\t\t\t((self % 100) = 0).ifFalse {\n\t\t\t\t\tanswer := answer ++ ' ' ++ (self % 100).threeDigitName\n\t\t\t\t};\n\t\t\t\tanswer.return\n\t\t\t};\n\t\t\t(self < 20).ifTrue {\n\t\t\t\tunits[self].return\n\t\t\t};\n\t\t\tanswer := decades[self // 10 - 1];\n\t\t\t((self % 10) = 0).ifFalse {\n\t\t\t\tanswer := answer ++ '-' ++ (units[self % 10])\n\t\t\t};\n\t\t\tanswer.return\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "timesRepeat",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _remaining = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThan_2(_remaining, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_0();
      return _remaining = _minus_2(_remaining, 1);
    });
    return _self;
  },
  "{ :self :aBlock:/0 |\n\t\tlet remaining = self;\n\t\t{ remaining > 0 }.whileTrue {\n\t\t\taBlock();\n\t\t\tremaining := remaining - 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "tuplesIndicesDo",
  ["self", "n", "aBlock:/1"],
  function (_self, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _indices = _Array_2(_n, 1);
    /* Statements */
    return _timesRepeat_2(_raisedTo_2(_self, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _k = _n;
      /* Statements */
      _aBlock_1(_indices);
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_greaterThanEquals_2(_k, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_indices, _k, _plus_2(_at_2(_indices, _k), 1));
          return _greaterThan_2(_at_2(_indices, _k), _self);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_indices, _k, 1);
        return _k = _minus_2(_k, 1);
      });
    });
  },
  "{ :self :n :aBlock:/1 |\n\t\tlet indices = Array(n, 1);\n\t\t(self ^ n).timesRepeat {\n\t\t\tlet k = n;\n\t\t\taBlock(indices);\n\t\t\t{\n\t\t\t\tk >= 1 & {\n\t\t\t\t\tindices[k] := indices[k] + 1;\n\t\t\t\t\tindices[k] > self\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tindices[k] := 1;\n\t\t\t\tk := k - 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "asLargerPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_positive_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _bitShiftLeft_2(1, _highBitOfPositiveReceiver_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Integer>>asLargerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.positive.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asLargerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "asPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSmallerPowerOfTwo_1(_self);
  },
  "{ :self |\n\t\tself.asSmallerPowerOfTwo\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "asSmallerPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_positive_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _bitShiftLeft_2(
          1,
          _minus_2(_highBitOfPositiveReceiver_1(_self), 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Integer>>asSmallerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.positive.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver - 1)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asSmallerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "isPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_tildeEquals_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_bitAnd_2(_self, _minus_2(_self, 1)), 0);
    });
  },
  "{ :self |\n\t\tself ~= 0 & {\n\t\t\tself.bitAnd(self - 1) = 0\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "digitAt",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThan_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _minus_2(-256, _bitAnd_2(_self, 255));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _bitAnd_2(_self, 255);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThan_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _digitAt_2(
          _plus_2(_minus_2(-256, _bitShift_2(_self, -8)), 1),
          _minus_2(_n, 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _bitAnd_2(
          _bitShift_2(_self, _minus_2(8, _bitShift_2(_n, 3))),
          255,
        );
      });
    });
  },
  "{ :self :n |\n\t\t(n = 1).if {\n\t\t\t(self < 0).if {\n\t\t\t\t-256 - self.bitAnd(255)\n\t\t\t} {\n\t\t\t\tself.bitAnd(255)\n\t\t\t}\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\t(-256 - self.bitShift(-8) + 1).digitAt(n - 1)\n\t\t\t} {\n\t\t\t\tself.bitShift(8 - n.bitShift(3)).bitAnd(255)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "digitLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _value = _self;
    let _length = 1;
    /* Statements */
    _ifTrue_2(_lessThan_2(_value, -255), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _length = 2;
      return _value = _plus_2(_minus_2(-256, _bitShift_2(_self, -8)), 1);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThan_2(_value, 255);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _value = _bitShift_2(_value, -8);
      return _length = _plus_2(_length, 1);
    });
    return _length;
  },
  "{ :self |\n\t\tlet value = self;\n\t\tlet length = 1;\n\t\t(value < -255).ifTrue {\n\t\t\tlength := 2;\n\t\t\tvalue := (-256 - self.bitShift(-8)) + 1\n\t\t};\n\t\t{ value > 255 }.whileTrue {\n\t\t\tvalue := value.bitShift(-8);\n\t\t\tlength := length + 1\n\t\t};\n\t\tlength\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Integer",
  "primesArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "primesArray", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _primesArray_1(23);
    });
  },
  "{ :self |\n\t\tself.cached('primesArray') {\n\t\t\t23.primesArray\n\t\t}\n\t}",
);
