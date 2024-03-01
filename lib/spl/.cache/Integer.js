/* {- Require: Cache -} */

sl.addTrait("Integer", "Integer");

sl.addTraitMethod(
  "Integer",
  "Integer",
  "exclamationMark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _factorial_1(_self);
  },
  "{ :self |\n\t\tself.factorial\n\t}",
);

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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.aBlock(Fraction(self, self.one))\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "asCodePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2("0123456789ABCDEF", _plusSign_2(_self, 1));
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
      throw new Error(errorMessage);
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
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "zero";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _minus = "";
      let _three = null;
      let _num = _self;
      let _answer = "";
      let _milCount = 1;
      /* Statements */
      _ifTrue_2(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
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
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_num, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _three = _threeDigitName_1(_percentSign_2(_num, 1000));
        _num = _solidusSolidus_2(_num, 1000);
        _ifFalse_2(_isEmpty_1(_three), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _ifFalse_2(_isEmpty_1(_answer), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _answer = _plusSignPlusSign_2(", ", _answer);
          });
          return _answer = _plusSignPlusSign_2(
            _plusSignPlusSign_2(_three, _at_2(_mils, _milCount)),
            _answer,
          );
        });
        return _milCount = _plusSign_2(_milCount, 1);
      });
      return _plusSignPlusSign_2(_minus, _answer);
    });
  },
  "{ :self |\n\t\tlet mils = [\n\t\t\t'',\n\t\t\t' thousand',\n\t\t\t' million', ' billion',\n\t\t\t' trillion', ' quadrillion',\n\t\t\t' quintillion', ' sextillion',\n\t\t\t' septillion', ' octillion',\n\t\t\t' nonillion', ' decillion',\n\t\t\t' undecillion', ' duodecillion',\n\t\t\t' tredecillion', ' quattuordecillion',\n\t\t\t' quindecillion', ' sexdecillion',\n\t\t\t' septendecillion', ' octodecillion',\n\t\t\t' novemdecillion', ' vigintillion'\n\t\t];\n\t\t(self = 0).if {\n\t\t\t'zero'\n\t\t} {\n\t\t\tlet minus = '';\n\t\t\tlet three = nil;\n\t\t\tlet num = self;\n\t\t\tlet answer = '';\n\t\t\tlet milCount = 1;\n\t\t\t(self < 0).ifTrue {\n\t\t\t\tminus := 'negative ';\n\t\t\t\tnum := self.negated\n\t\t\t};\n\t\t\t{\n\t\t\t\tnum > 0\n\t\t\t}.whileTrue {\n\t\t\t\tthree := (num % 1000).threeDigitName;\n\t\t\t\tnum := num // 1000;\n\t\t\t\tthree.isEmpty.ifFalse {\n\t\t\t\t\tanswer.isEmpty.ifFalse {\n\t\t\t\t\t\tanswer := ', ' ++ answer\n\t\t\t\t\t};\n\t\t\t\t\tanswer := three ++ mils[milCount] ++ answer\n\t\t\t\t};\n\t\t\t\tmilCount := milCount + 1\n\t\t\t};\n\t\t\tminus ++ answer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "atRandomUsing",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nextRandomInteger_2(_random, _self);
  },
  "{ :self :random |\n\t\trandom.nextRandomInteger(self)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nextRandomInteger_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.nextRandomInteger(self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "atRandom",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextRandomInteger_2(_system, _self);
    }, _count);
  },
  "{ :self :count |\n\t\t{ system.nextRandomInteger(self) } ! count\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "characterRange",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(_self, _anInteger), _asCharacter_1);
  },
  "{ :self :anInteger |\n\t\t(self .. anInteger).collect(asCharacter:/1)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b", "d"],
  function (_n, _b, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _b, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _count_2(_integerDigits_2(_n, _b), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_each, _d);
    });
  },
  "{ :n :b :d |\n\t\tn.integerDigits(b).count { :each |\n\t\t\teach = d\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b"],
  function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _digits = _integerDigits_2(_n, _b);
    /* Statements */
    return _collect_2(_upOrDownTo_2(_hyphenMinus_2(_b, 1), 0), function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _d";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _count_2(_digits, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_each, _d);
      });
    });
  },
  "{ :n :b |\n\t\tlet digits = n.integerDigits(b);\n\t\t(b - 1 .. 0).collect { :d |\n\t\t\tdigits.count { :each |\n\t\t\t\teach = d\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "divisorSum",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_collect_2(_divisors_1(_self), _aBlock_1));
  },
  "{ :self :aBlock:/1 |\n\t\tself.divisors.collect(aBlock:/1).sum\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_reverseSolidusReverseSolidus_2(_self, _each), 0);
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
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _max_2(_self, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(_self, _doubleFactorial_1(_hyphenMinus_2(_self, 2)));
      });
    });
  },
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tself.error('@Integer>>doubleFactorial: not valid for negative integers')\n\t\t} {\n\t\t\t(self <= 3).if {\n\t\t\t\tself.max(1)\n\t\t\t} {\n\t\t\t\tself * (self - 2).doubleFactorial\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "euclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
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
      return _tildeEqualsSign_2(_b, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _t = _b;
      /* Statements */
      _b = _percentSign_2(_a, _b);
      return _a = _t;
    });
    return _a;
  },
  "{ :a :b |\n\t\t{\n\t\t\tb ~= 0\n\t\t}.whileTrue {\n\t\t\tlet t = b;\n\t\t\tb := a % b;\n\t\t\ta := t\n\t\t};\n\t\ta\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "eulerPhi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _l = _if_3(_isNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _downTo_2(-1, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _upTo_2(1, _self);
      });
      /* Statements */
      return _size_1(_select_2(_l, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_gcd_2(_self, _each), 1);
      }));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet l = self.isNegative.if {\n\t\t\t\t-1.downTo(self)\n\t\t\t} {\n\t\t\t\t1.upTo(self)\n\t\t\t};\n\t\t\tl.select { :each |\n\t\t\t\tself.gcd(each) = 1\n\t\t\t}.size\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "extendedEuclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym1 = _assertIsOfSize_2([_a, _b], 2),
      _r0 = _at_2(__genSym1, 1),
      _r = _at_2(__genSym1, 2);
    let __genSym2 = _assertIsOfSize_2([1, 0], 2),
      _s0 = _at_2(__genSym2, 1),
      _s = _at_2(__genSym2, 2);
    let __genSym3 = _assertIsOfSize_2([0, 1], 2),
      _t0 = _at_2(__genSym3, 1),
      _t = _at_2(__genSym3, 2);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_r, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _quotient = _solidusSolidus_2(_r0, _r);
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym4 = [_r, _hyphenMinus_2(_r0, _asterisk_2(_quotient, _r))];
        _r0 = _at_2(__genSym4, 1);
        _r = _at_2(__genSym4, 2);
      })(); /* List Assignment */
      (function () {
        const __genSym5 = [_s, _hyphenMinus_2(_s0, _asterisk_2(_quotient, _s))];
        _s0 = _at_2(__genSym5, 1);
        _s = _at_2(__genSym5, 2);
      })();
      return /* List Assignment */ (function () {
        const __genSym6 = [_t, _hyphenMinus_2(_t0, _asterisk_2(_quotient, _t))];
        _t0 = _at_2(__genSym6, 1);
        _t = _at_2(__genSym6, 2);
      })();
    });
    return [_r0, [_s0, _t0]];
  },
  "{ :a :b |\n\t\tlet [r0, r] = [a, b];\n\t\tlet [s0, s] = [1, 0];\n\t\tlet [t0, t] = [0, 1];\n\t\t{\n\t\t\tr ~= 0\n\t\t}.whileTrue {\n\t\t\tlet quotient = r0 // r;\n\t\t\t[r0, r] := [r, r0 - (quotient * r)];\n\t\t\t[s0, s] := [s, s0 - (quotient * s)];\n\t\t\t[t0, t] := [t, t0 - (quotient * t)]\n\t\t};\n\t\t[r0, [s0, t0]]\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>factorial: not valid for negative integers");
    });
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_next, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _next = _hyphenMinus_2(_next, 1);
        return _answer = _asterisk_2(_answer, _next);
      });
      return _answer;
    });
  },
  "{ :self |\n\t\tself.isNegative.ifTrue {\n\t\t\t'@Integer>>factorial: not valid for negative integers'.error\n\t\t};\n\t\t(self <= 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet next = self;\n\t\t\tlet answer = self;\n\t\t\t{\n\t\t\t\tnext > 1\n\t\t\t}.whileTrue {\n\t\t\t\tnext := next - 1;\n\t\t\t\tanswer := answer * next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "foldIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _foldBetweenAnd_3(_self, 1, _size);
  },
  "{ :self :size |\n\t\tself.foldBetweenAnd(1, size)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "fromCharacterCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _string_1(_asCharacter_1(_self));
  },
  "{ :self |\n\t\tself.asCharacter.string\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_b, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _r = _percentSign_2(_a, _b);
        /* Statements */
        _a = _b;
        return _b = _r;
      });
      return _a;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_anInteger, _self, _gcd_2);
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger.if {\n\t\t\tlet a = self.abs;\n\t\t\tlet b = anInteger.abs;\n\t\t\t{\n\t\t\t\tb = 0\n\t\t\t}.whileFalse {\n\t\t\t\tlet r = a % b;\n\t\t\t\ta := b;\n\t\t\t\tb := r\n\t\t\t};\n\t\t\ta\n\t\t} {\n\t\t\tanInteger.adaptToNumberAndApply(self, gcd:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "hammingNumbersFromUpTo",
  ["self", "limit"],
  function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    let _step_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_lessThanSignEqualsSign_2(_n, _limit), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifFalse_2(_includes_2(_answer, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _include_2(_answer, _n);
          _step_1(_asterisk_2(_n, 2));
          _step_1(_asterisk_2(_n, 3));
          return _step_1(_asterisk_2(_n, 5));
        });
      });
    };
    /* Statements */
    _step_1(_self);
    return _contents_1(_asSortedList_1(_answer));
  },
  "{ :self :limit |\n\t\tlet answer = Set();\n\t\tlet step = { :n |\n\t\t\t(n <= limit).ifTrue {\n\t\t\t\tanswer.includes(n).ifFalse {\n\t\t\t\t\tanswer.include(n);\n\t\t\t\t\tstep(n * 2);\n\t\t\t\t\tstep(n * 3);\n\t\t\t\t\tstep(n * 5)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tstep(self);\n\t\tanswer.asSortedList.contents\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "harmonicNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_reciprocal_1(_upOrDownTo_2(1, _self)));
  },
  "{ :self |\n\t\t1:self.reciprocal.sum\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "hyperfactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _product_1(
        _collect_2(_upOrDownTo_2(_one_1(_self), _self), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _circumflexAccent_2(_k, _k);
        }),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        "@Integer>>hyperfactorial: not implemented for non-integer",
      );
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\t(self.one .. self).collect { :k | k ^ k }.product\n\t\t} {\n\t\t\t'@Integer>>hyperfactorial: not implemented for non-integer'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "k", "aBlock:/1"],
  function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_lessThanSign_2(_n, _k), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _List_2(_k, 1);
      /* Statements */
      _atPut_3(_a, _k, _plusSign_2(_hyphenMinus_2(_n, _k), 1));
      _aBlock_1(_a);
      return _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(
          _at_2(_a, 1),
          _plusSign_2(_hyphenMinus_2(_n, _k), 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _last = _k;
        let _z = null;
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_at_2(_a, _last), 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _last = _hyphenMinus_2(_last, 1);
        });
        _z = _at_2(_a, _last);
        _atPut_3(
          _a,
          _hyphenMinus_2(_last, 1),
          _plusSign_2(_at_2(_a, _hyphenMinus_2(_last, 1)), 1),
        );
        _atPut_3(_a, _last, 1);
        _atPut_3(_a, _k, _hyphenMinus_2(_z, 1));
        return _aBlock_1(_a);
      });
    });
  },
  "{ :n :k :aBlock:/1 |\n\t\t(n < k).ifFalse {\n\t\t\tlet a = List(k, 1);\n\t\t\ta[k] := n - k + 1;\n\t\t\taBlock(a);\n\t\t\t{\n\t\t\t\ta[1] = (n - k + 1)\n\t\t\t}.whileFalse {\n\t\t\t\tlet last = k;\n\t\t\t\tlet z = nil;\n\t\t\t\t{\n\t\t\t\t\ta[last] = 1\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlast := last - 1\n\t\t\t\t};\n\t\t\t\tz := a[last];\n\t\t\t\ta[last - 1] := a[last - 1] + 1;\n\t\t\t\ta[last] := 1;\n\t\t\t\ta[k] := z - 1;\n\t\t\t\taBlock(a)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "aBlock:/1"],
  function (_n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_upOrDownTo_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _integerCompositionsDo_3(_n, _k, _aBlock_1);
    });
  },
  "{ :n :aBlock:/1 |\n\t\t1:n.do { :k |\n\t\t\tn.integerCompositionsDo(k, aBlock:/1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n :k |\n\t\tlet answer = [];\n\t\tn.integerCompositionsDo(k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_2(_n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n |\n\t\tlet answer = [];\n\t\tn.integerCompositionsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositionsWeakDo",
  ["n", "k", "aBlock:/1"],
  function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _List_2(_k, 0);
    /* Statements */
    _atPut_3(_a, _k, _n);
    _aBlock_1(_a);
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_at_2(_a, 1), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _last = _k;
      let _z = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_at_2(_a, _last), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _last = _hyphenMinus_2(_last, 1);
      });
      _z = _at_2(_a, _last);
      _atPut_3(
        _a,
        _hyphenMinus_2(_last, 1),
        _plusSign_2(_at_2(_a, _hyphenMinus_2(_last, 1)), 1),
      );
      _atPut_3(_a, _last, 0);
      _atPut_3(_a, _k, _hyphenMinus_2(_z, 1));
      return _aBlock_1(_a);
    });
  },
  "{ :n :k :aBlock:/1 |\n\t\tlet a = List(k, 0);\n\t\ta[k] := n;\n\t\taBlock(a);\n\t\t{\n\t\t\ta[1] = n\n\t\t}.whileFalse {\n\t\t\tlet last = k;\n\t\t\tlet z = nil;\n\t\t\t{\n\t\t\t\ta[last] = 0\n\t\t\t}.whileTrue {\n\t\t\t\tlast := last - 1\n\t\t\t};\n\t\t\tz := a[last];\n\t\t\ta[last - 1] := a[last - 1] + 1;\n\t\t\ta[last] := 0;\n\t\t\ta[k] := z - 1;\n\t\t\taBlock(a)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerCompositionsWeak",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsWeakDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n :k |\n\t\tlet answer = [];\n\t\tn.integerCompositionsWeakDo(k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigitsReverseDo",
  ["self", "base", "numDigits", "aBlock:/1"],
  function (_self, _base, _numDigits, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _base, _numDigits, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _num = _self;
    /* Statements */
    return _timesRepeat_2(_numDigits, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_percentSign_2(_num, _base));
      return _num = _solidusSolidus_2(_num, _base);
    });
  },
  "{ :self :base :numDigits :aBlock:/1 |\n\t\tlet num = self;\n\t\tnumDigits.timesRepeat {\n\t\t\taBlock(num % base);\n\t\t\tnum := num // base\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base", "numDigits"],
  function (_self, _base, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _numDigits";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerDigitsReverseDo_4(_self, _base, _numDigits, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFirst_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self :base :numDigits |\n\t\tlet answer = [];\n\t\tself.integerDigitsReverseDo(base, numDigits) { :each |\n\t\t\tanswer.addFirst(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_base), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _integerDigits_3(
        _self,
        _base,
        _plusSign_2(
          _asInteger_1(
            _plusSign_2(_solidus_2(_log_1(_self), _log_1(_base)), 0.0000000001),
          ),
          1,
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_base, _self, _integerDigits_2);
    });
  },
  "{ :self :base |\n\t\tbase.isInteger.if {\n\t\t\tself.integerDigits(\n\t\t\t\tbase,\n\t\t\t\t(self.log / base.log + 0.0000000001).asInteger + 1\n\t\t\t)\n\t\t} {\n\t\t\tbase.adaptToNumberAndApply(self, integerDigits:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _integerDigits_2(_self, 10);
  },
  "{ :self |\n\t\tself.integerDigits(10)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerExponent",
  ["n", "b"],
  function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _divisible_2(_n, _circumflexAccent_2(_b, _plusSign_2(_answer, 1)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :n :b |\n\t\tlet answer = 0;\n\t\t{\n\t\t\tn.divisible(b ^ (answer + 1))\n\t\t}.whileTrue {\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitionsDescendingDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _self;
    let _d = _List_2(_n, 1);
    let _k = 1;
    /* Statements */
    _atPut_3(_d, 1, _n);
    _aBlock_1(_copyFromTo_3(_d, 1, 1));
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_k, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _l = _k;
      let _m = _at_2(_d, _k);
      let _nPrime = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_m, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        return _m = _at_2(_d, _k);
      });
      _nPrime = _hyphenMinus_2(_plusSign_2(_m, _l), _k);
      _m = _hyphenMinus_2(_m, 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_m, _nPrime);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_d, _k, _m);
        _nPrime = _hyphenMinus_2(_nPrime, _m);
        return _k = _plusSign_2(_k, 1);
      });
      _atPut_3(_d, _k, _nPrime);
      return _aBlock_1(_copyFromTo_3(_d, 1, _k));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet d = List(n, 1);\n\t\tlet k = 1;\n\t\td[1] := n;\n\t\taBlock(d.copyFromTo(1, 1));\n\t\t{\n\t\t\tk ~= n\n\t\t}.whileTrue {\n\t\t\tlet l = k;\n\t\t\tlet m = d[k];\n\t\t\tlet nPrime = nil;\n\t\t\t{\n\t\t\t\tm = 1\n\t\t\t}.whileTrue {\n\t\t\t\tk := k - 1;\n\t\t\t\tm := d[k]\n\t\t\t};\n\t\t\tnPrime := m + l - k;\n\t\t\tm := m - 1;\n\t\t\t{\n\t\t\t\tm < nPrime\n\t\t\t}.whileTrue {\n\t\t\t\td[k] := m;\n\t\t\t\tnPrime := nPrime - m;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\td[k] := nPrime;\n\t\t\taBlock(d.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.integerPartitionsDescendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitionsAscendingDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _self;
    let _a = _List_2(_n, 0);
    let _k = 2;
    let _y = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_k, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _x, _l;
      /* Statements */
      _k = _hyphenMinus_2(_k, 1);
      _x = _plusSign_2(_at_2(_a, _k), 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_asterisk_2(2, _x), _y);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_a, _k, _x);
        _y = _hyphenMinus_2(_y, _x);
        return _k = _plusSign_2(_k, 1);
      });
      _l = _plusSign_2(_k, 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_x, _y);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_a, _k, _x);
        _atPut_3(_a, _l, _y);
        _aBlock_1(_copyFromTo_3(_a, 1, _l));
        _x = _plusSign_2(_x, 1);
        return _y = _hyphenMinus_2(_y, 1);
      });
      _y = _hyphenMinus_2(_plusSign_2(_y, _x), 1);
      _atPut_3(_a, _k, _plusSign_2(_y, 1));
      return _aBlock_1(_copyFromTo_3(_a, 1, _k));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet a = List(n, 0);\n\t\tlet k = 2;\n\t\tlet y = n - 1;\n\t\t{\n\t\t\tk ~= 1\n\t\t}.whileTrue {\n\t\t\tvar x, l;\n\t\t\tk := k - 1;\n\t\t\tx := a[k] + 1;\n\t\t\t{\n\t\t\t\t(2 * x) <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ty := y - x;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tl := k + 1;\n\t\t\t{\n\t\t\t\tx <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ta[l] := y;\n\t\t\t\taBlock(a.copyFromTo(1, l));\n\t\t\t\tx := x + 1;\n\t\t\t\ty := y - 1\n\t\t\t};\n\t\t\ty := y + x - 1;\n\t\t\ta[k] := y + 1;\n\t\t\taBlock(a.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitionsAscending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsAscendingDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.integerPartitionsAscendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitions",
  ["j", "i"],
  function (_j, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _j, _i";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_3 = function (_t, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _t, _m, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _ampersand_2(_equalsSign_2(_m, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_t, _n);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [[_t]];
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(
            _verticalLine_2(_lessThanSign_2(_n, _m), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _verticalLine_2(_lessThanSign_2(_n, 1), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _verticalLine_2(_lessThanSign_2(_m, 1), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _lessThanSign_2(_t, 1);
                });
              });
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return [];
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _plusSignPlusSign_2(
                _collect_2(
                  _f_3(_t, _hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, _t)),
                  function (_r) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _r";
                      console.error(errorMessage);
                      throw new Error(errorMessage);
                    }
                    /* Statements */
                    return (_plusSignPlusSign_2([_t], _r));
                  },
                ),
                _f_3(_hyphenMinus_2(_t, 1), _m, _n),
              );
            },
          );
        },
      );
    };
    /* Statements */
    return _f_3(_plusSign_2(_hyphenMinus_2(_j, _i), 1), _i, _j);
  },
  "{ :j :i |\n\t\tlet f = { :t :m :n |\n\t\t\t(m = 1 & { t = n }).if {\n\t\t\t\t[[t]]\n\t\t\t} {\n\t\t\t\t(n < m | { n < 1 | { m < 1 | { t < 1 } } }).if {\n\t\t\t\t\t[]\n\t\t\t\t} {\n\t\t\t\t\tf(t, m - 1, n - t).collect { :r |\n\t\t\t\t\t\t([t] ++ r)\n\t\t\t\t\t} ++ f(t - 1, m, n)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(j - i + 1, i, j)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitionsRecursive",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_collect_2(_upOrDownTo_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _integerPartitions_2(_n, _k);
    }));
  },
  "{ :n |\n\t\t(1 .. n).collect { :k |\n\t\t\tn.integerPartitions(k)\n\t\t}.concatenation\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Integer>>isInteger");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Integer>>isInteger')\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isNonNegativeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isNonNegative_1(_self);
    });
  },
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isNonNegative\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isPerfectNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_sum_1(_allButLast_1(_divisors_1(_self))), _self);
  },
  "{ :self |\n\t\tself.divisors.allButLast.sum = self\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isPerfectSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isInteger_1(_sqrt_1(_self));
  },
  "{ :self |\n\t\tself.sqrt.isInteger\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isPositiveInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPositive_1(_self);
    });
  },
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isPositive\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isSquareFree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _noneSatisfy_2(
      _allButFirst_1(_divisors_1(_self)),
      _isPerfectSquare_1,
    );
  },
  "{ :self |\n\t\tself.divisors.allButFirst.noneSatisfy(isPerfectSquare:/1)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _self;
      let _b = _anInteger;
      /* Statements */
      return _if_3(
        _verticalLine_2(_equalsSign_2(_a, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_b, 0);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _ab = _asterisk_2(_a, _b);
          /* Statements */
          _whileFalse_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_b, 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _tmp = _b;
            /* Statements */
            _b = _percentSign_2(_a, _tmp);
            return _a = _tmp;
          });
          return _abs_1(_solidus_2(_ab, _a));
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_anInteger, _self, _lcm_2);
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger.if {\n\t\t\tlet a = self;\n\t\t\tlet b = anInteger;\n\t\t\t(a = 0 | {\n\t\t\t\tb = 0\n\t\t\t}).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet ab = a * b;\n\t\t\t\t{\n\t\t\t\t\tb = 0\n\t\t\t\t}.whileFalse {\n\t\t\t\t\tlet tmp = b;\n\t\t\t\t\tb := a % tmp;\n\t\t\t\t\ta := tmp\n\t\t\t\t};\n\t\t\t\t(ab / a).abs\n\t\t\t}\n\t\t} {\n\t\t\tanInteger.adaptToNumberAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "mixedRadixEncode",
  ["self", "factors"],
  function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_factors));
    /* Statements */
    _downToDo_3(_size_1(_factors), 1, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _percentSign_2(_self, _at_2(_factors, _index)));
      return _self = _solidusSolidus_2(_self, _at_2(_factors, _index));
    });
    _ifTrue_2(_greaterThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFirst_2(_answer, _self);
    });
    return _answer;
  },
  "{ :self :factors |\n\t\tlet answer = List(factors.size);\n\t\tfactors.size.downToDo(1) { :index |\n\t\t\tanswer[index] := self % factors[index];\n\t\t\tself := self // factors[index]\n\t\t};\n\t\t(self > 0).ifTrue {\n\t\t\tanswer.addFirst(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "modularInverse",
  ["a", "n"],
  function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _t = 0;
    let _t1 = 1;
    let _r = _if_3(_lessThanSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _n;
    });
    let _r1 = _if_3(_lessThanSign_2(_a, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _percentSign_2(
        _hyphenMinus_2(_n, _percentSign_2(_negated_1(_a), _n)),
        _n,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _percentSign_2(_a, _n);
    });
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_r1, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _quotient = _solidusSolidus_2(_r, _r1);
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym7 = [
          _t1,
          _hyphenMinus_2(_t, _asterisk_2(_quotient, _t1)),
        ];
        _t = _at_2(__genSym7, 1);
        _t1 = _at_2(__genSym7, 2);
      })();
      return /* List Assignment */ (function () {
        const __genSym8 = [
          _r1,
          _hyphenMinus_2(_r, _asterisk_2(_quotient, _r1)),
        ];
        _r = _at_2(__genSym8, 1);
        _r1 = _at_2(__genSym8, 2);
      })();
    });
    return _if_3(_greaterThanSign_2(_r, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>modularInverse: not invertible");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_t, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_t, _n);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _t;
      });
    });
  },
  "{ :a :n |\n\t\tlet t = 0;\n\t\tlet t1 = 1;\n\t\tlet r = (n < 0).if { n.negated } { n };\n\t\tlet r1 = (a < 0).if { (n - (a.negated % n)) % n } { a % n };\n\t\t{\n\t\t\tr1 ~= 0\n\t\t}.whileTrue {\n\t\t\tlet quotient = r // r1;\n\t\t\t[t, t1] := [t1, t - (quotient * t1)];\n\t\t\t[r, r1] := [r1, r - (quotient * r1)]\n\t\t};\n\t\t(r > 1).if {\n\t\t\t'@Integer>>modularInverse: not invertible'.error\n\t\t} {\n\t\t\t(t < 0).if {\n\t\t\t\tt + n\n\t\t\t} {\n\t\t\t\tt\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "numberOfCompositions",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _factorial_1(_hyphenMinus_2(_n, 1)),
      _asterisk_2(
        _factorial_1(_hyphenMinus_2(_k, 1)),
        _factorial_1(_hyphenMinus_2(_n, _k)),
      ),
    );
  },
  "{ :n :k |\n\t\t(n - 1).factorial / ((k - 1).factorial * (n - k).factorial)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "numberOfCompositionsWeak",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _factorial_1(_hyphenMinus_2(_plusSign_2(_n, _k), 1)),
      _asterisk_2(_factorial_1(_n), _factorial_1(_hyphenMinus_2(_k, 1))),
    );
  },
  "{ :n :k |\n\t\t(n + k - 1).factorial / (n.factorial * (k - 1).factorial)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "partitionFunctionP",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _table = _Map_0();
    let _p_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includesIndex_2(_table, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_table, _n);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanSign_2(_n, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _answer = _asterisk_2(
            _solidus_2(1, _n),
            _sum_1(
              _collect_2(
                _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
                function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _asterisk_2(
                    _divisorSigma_2(1, _hyphenMinus_2(_n, _k)),
                    _p_1(_k),
                  );
                },
              ),
            ),
          );
          /* Statements */
          _atPut_3(_table, _n, _answer);
          return _answer;
        });
      });
    };
    /* Statements */
    return _p_1(_self);
  },
  "{ :self |\n\t\tlet table = Map();\n\t\tlet p = { :n |\n\t\t\ttable.includesIndex(n).if {\n\t\t\t\ttable[n]\n\t\t\t} {\n\t\t\t\t(n < 1).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\tlet answer = (1 / n) * (0 .. n - 1).collect { :k |\n\t\t\t\t\t\t1.divisorSigma(n - k) * p(k)\n\t\t\t\t\t}.sum;\n\t\t\t\t\ttable[n] := answer;\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp(self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "polygonalNumber",
  ["r", "n"],
  function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _asterisk_2(_solidus_2(1, 2), _n),
      _plusSign_2(
        _hyphenMinus_2(_asterisk_2(_n, _hyphenMinus_2(_r, 2)), _r),
        4,
      ),
    );
  },
  "{ :r :n |\n\t\t(1 / 2) * n * (n * (r - 2) - r + 4)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.toString(16).toUpperCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toString(16).toUpperCase();>\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asciiStringStreamContents_1(function (_stream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _stream";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
  "randomIntegerBipolar",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nextRandomIntegerBipolar_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.nextRandomIntegerBipolar(self)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _solidusSolidus_2(
      _percentSign_2(_self, _asterisk_2(_base, 10)),
      _base,
    );
    /* Statements */
    return _if_3(_equalsSign_2(_n, 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextPutAll_2(_aStream, [_last_1(_digits), _first_1(_digits)]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_n, 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextPutAll_2(_aStream, [_last_1(_digits), _second_1(_digits)]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_greaterThanSign_2(_n, 4), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _nextPut_2(_aStream, _second_1(_digits));
        });
        return _timesRepeat_2(_percentSign_2(_n, 5), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _integer = _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _nextPut_2(_aStream, _asciiValue_1("-"));
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
    /* Statements */
    _timesRepeat_2(_solidusSolidus_2(_integer, 1000), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextPut_2(_aStream, _asciiValue_1("M"));
    });
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("MDC"), 100, _aStream);
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("CLX"), 10, _aStream);
    return _romanDigitsForOn_4(_integer, _asciiByteArray_1("XVI"), 1, _aStream);
  },
  "{ :self :aStream |\n\t\tlet integer = self.isNegative.if {\n\t\t\taStream.nextPut('-'.asciiValue);\n\t\t\tself.negated\n\t\t} {\n\t\t\tself\n\t\t};\n\t\t(integer // 1000).timesRepeat {\n\t\t\taStream.nextPut('M'.asciiValue)\n\t\t};\n\t\tinteger.romanDigitsForOn('MDC'.asciiByteArray, 100, aStream);\n\t\tinteger.romanDigitsForOn('CLX'.asciiByteArray, 10, aStream);\n\t\tinteger.romanDigitsForOn('XVI'.asciiByteArray, 1, aStream)\n\t}",
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
      throw new Error(errorMessage);
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
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = null;
      /* Statements */
      _ifTrue_2(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("");
      });
      _ifTrue_2(_greaterThanSign_2(_self, 99), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _answer = _plusSignPlusSign_2(
          _at_2(_units, _solidusSolidus_2(_self, 100)),
          " hundred",
        );
        _ifFalse_2(_equalsSign_2(_percentSign_2(_self, 100), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _answer = _plusSignPlusSign_2(
            _plusSignPlusSign_2(_answer, " "),
            _threeDigitName_1(_percentSign_2(_self, 100)),
          );
        });
        return _return_1(_answer);
      });
      _ifTrue_2(_lessThanSign_2(_self, 20), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_at_2(_units, _self));
      });
      _answer = _at_2(
        _decades,
        _hyphenMinus_2(_solidusSolidus_2(_self, 10), 1),
      );
      _ifFalse_2(_equalsSign_2(_percentSign_2(_self, 10), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusSignPlusSign_2(
          _plusSignPlusSign_2(_answer, "-"),
          _at_2(_units, _percentSign_2(_self, 10)),
        );
      });
      return _return_1(_answer);
    });
  },
  "{ :self |\n\t\tlet units = [\n\t\t\t'one', 'two', 'three', 'four', 'five',\n\t\t\t'six', 'seven', 'eight', 'nine', 'ten',\n\t\t\t'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',\n\t\t\t'sixteen', 'seventeen', 'eighteen', 'nineteen'\n\t\t];\n\t\tlet decades = [\n\t\t\t'twenty', 'thirty', 'forty', 'fifty',\n\t\t\t'sixty', 'seventy', 'eighty', 'ninety'\n\t\t];\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet answer = nil;\n\t\t\t(self = 0).ifTrue {\n\t\t\t\t''.return\n\t\t\t};\n\t\t\t(self > 99).ifTrue {\n\t\t\t\tanswer := (units[self // 100]) ++' hundred';\n\t\t\t\t((self % 100) = 0).ifFalse {\n\t\t\t\t\tanswer := answer ++ ' ' ++ (self % 100).threeDigitName\n\t\t\t\t};\n\t\t\t\tanswer.return\n\t\t\t};\n\t\t\t(self < 20).ifTrue {\n\t\t\t\tunits[self].return\n\t\t\t};\n\t\t\tanswer := decades[self // 10 - 1];\n\t\t\t((self % 10) = 0).ifFalse {\n\t\t\t\tanswer := answer ++ '-' ++ (units[self % 10])\n\t\t\t};\n\t\t\tanswer.return\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _remaining = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_remaining, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_0();
      return _remaining = _hyphenMinus_2(_remaining, 1);
    });
    return _self;
  },
  "{ :self :aBlock:/0 |\n\t\tlet remaining = self;\n\t\t{\n\t\t\tremaining > 0\n\t\t}.whileTrue {\n\t\t\taBlock();\n\t\t\tremaining := remaining - 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wrapIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_percentSign_2(_hyphenMinus_2(_self, 1), _size), 1);
  },
  "{ :self :size |\n\t\tself - 1 % size + 1\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitShiftLeft_2(1, _highBitOfPositiveReceiver_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Integer>>asLargerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.isNonNegative.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asLargerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitShiftLeft_2(
          1,
          _hyphenMinus_2(_highBitOfPositiveReceiver_1(_self), 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Integer>>asSmallerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.isNonNegative.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver - 1)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asSmallerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_tildeEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_bitAnd_2(_self, _hyphenMinus_2(_self, 1)), 0);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(-256, _bitAnd_2(_self, 255));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitAnd_2(_self, 255);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _digitAt_2(
          _plusSign_2(_hyphenMinus_2(-256, _bitShift_2(_self, -8)), 1),
          _hyphenMinus_2(_n, 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitAnd_2(
          _bitShift_2(_self, _hyphenMinus_2(8, _bitShift_2(_n, 3))),
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _value = _self;
    let _length = 1;
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_value, -255), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _length = 2;
      return _value = _plusSign_2(
        _hyphenMinus_2(-256, _bitShift_2(_self, -8)),
        1,
      );
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_value, 255);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _value = _bitShift_2(_value, -8);
      return _length = _plusSign_2(_length, 1);
    });
    return _length;
  },
  "{ :self |\n\t\tlet value = self;\n\t\tlet length = 1;\n\t\t(value < -255).ifTrue {\n\t\t\tlength := 2;\n\t\t\tvalue := (-256 - self.bitShift(-8)) + 1\n\t\t};\n\t\t{\n\t\t\tvalue > 255\n\t\t}.whileTrue {\n\t\t\tvalue := value.bitShift(-8);\n\t\t\tlength := length + 1\n\t\t};\n\t\tlength\n\t}",
);
