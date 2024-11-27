/*  Require: Cache  */

sl.addTrait("Integer", "Integer");

sl.addTraitMethod(
  "Integer",
  "Integer",
  "additivePersistence",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _x, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_size_1(_second_1(_digitalRootSet_2(_x, _b))), 1);
  },
  "{ :x :b |\n\t\tx.digitalRootSet(b).second.size - 1\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "asCodePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "assertIsInteger",
  ["self", "origin"],
  function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _origin"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("Not an integer: ", _origin));
    });
  },
  "{ :self :origin |\n\t\tself.isInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Not an integer: ' ++ origin)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "asWords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return "zero";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _minus = "negative ";
        return _num = _negated_1(_self);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_num, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _three = _threeDigitName_1(_percentSign_2(_num, 1000));
        _num = _solidusSolidus_2(_num, 1000);
        _ifFalse_2(_isEmpty_1(_three), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _ifFalse_2(_isEmpty_1(_answer), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "bellNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Integer>>bellNumber: n < 0");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _list = _List_1(_self);
        /* Statements */
        _atPut_3(_list, 1, 1);
        _toDo_3(2, _self, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _i"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _toDo_3(1, _hyphenMinus_2(_i, 2), function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _j"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _k = _hyphenMinus_2(_hyphenMinus_2(_i, _j), 1);
            /* Statements */
            return _atPut_3(
              _list,
              _k,
              _plusSign_2(
                _at_2(_list, _k),
                _at_2(_list, _hyphenMinus_2(_i, _j)),
              ),
            );
          });
          return _atPut_3(
            _list,
            _i,
            _plusSign_2(_at_2(_list, 1), _at_2(_list, _hyphenMinus_2(_i, 1))),
          );
        });
        return _at_2(_list, _self);
      });
    });
  },
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.error('@Integer>>bellNumber: n < 0')\n\t\t} {\n\t\t\t(self < 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet list = List(self);\n\t\t\t\tlist[1] := 1;\n\t\t\t\t2.toDo(self) { :i |\n\t\t\t\t\t1.toDo(i - 2) { :j |\n\t\t\t\t\t\tlet k = i - j - 1;\n\t\t\t\t\t\tlist[k] := list[k] + list[i - j]\n\t\t\t\t\t};\n\t\t\t\t\tlist[i] := list[1] + list[i - 1]\n\t\t\t\t};\n\t\t\t\tlist[self]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "berahaConstant",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(2, _asterisk_2(2, _cos_1(_solidus_2(_pi_1(2), _n))));
  },
  "{ :n |\n\t\t2 + (2 * (2.pi / n).cos)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bernoulli",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _last_1(_bernoulliSequence_1(_k));
  },
  "{ :k |\n\t\tk.bernoulliSequence.last\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bernoulliSequence",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _List_1(_plusSign_2(_k, 1));
    let _b = _List_1(_plusSign_2(_k, 1));
    /* Statements */
    _do_2(_upOrDownTo_2(0, _k), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_a, _plusSign_2(_n, 1), _Fraction_2(1n, _plusSign_2(_n, 1)));
      _toByDo_4(_n, 1, -1, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _j"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _a,
          _j,
          _asterisk_2(
            _j,
            _hyphenMinus_2(_at_2(_a, _j), _at_2(_a, _plusSign_2(_j, 1))),
          ),
        );
      });
      return _atPut_3(_b, _plusSign_2(_n, 1), _at_2(_a, 1));
    });
    return _b;
  },
  "{ :k |\n\t\tlet a = List(k + 1);\n\t\tlet b = List(k + 1);\n\t\t0:k.do { :n |\n\t\t\ta[n + 1] := Fraction(1n, n + 1);\n\t\t\tn.toByDo(1, -1) { :j |\n\t\t\t\ta[j] := j * (a[j] - a[j + 1])\n\t\t\t};\n\t\t\tb[n + 1] := a[1]\n\t\t};\n\t\tb\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bernsteinBasis",
  ["d", "n", "x"],
  function (_d, _n, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _d, _n, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_x, 0, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(
        _asterisk_2(_binomial_2(_d, _n), _circumflexAccent_2(_x, _n)),
        _circumflexAccent_2(_hyphenMinus_2(1, _x), _hyphenMinus_2(_d, _n)),
      );
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
  "{ :d :n :x |\n\t\tx.betweenAnd(0, 1).if {\n\t\t\td.binomial(n) * (x ^ n) * ((1 - x) ^ (d - n))\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "binetsFormula",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _z = _sqrt_1(5);
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_plusSign_2(1, _z), _n),
        _circumflexAccent_2(_hyphenMinus_2(1, _z), _n),
      ),
      _asterisk_2(_circumflexAccent_2(2, _n), _z),
    );
  },
  "{ :n |\n\t\tlet z = 5.sqrt;\n\t\t((1 + z) ^ n) - ((1 - z) ^ n) / (2 ^ n * z)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bitLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _integerLength_2(_self, 2);
  },
  "{ :self |\n\t\tself.integerLength(2)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bjorklundsAlgorithmDo",
  ["k", "n", "aBlock:/1"],
  function (_k, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _k, _n, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _s = _collect_2(_upOrDownTo_2(1, _n), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_i, _k), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return [1];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return [0];
      });
    });
    let _d = _hyphenMinus_2(_n, _k);
    let _z = _d;
    /* Statements */
    _aBlock_1(_s);
    _n = _max_2(_k, _d);
    _k = _min_2(_k, _d);
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _verticalLine_2(_greaterThanSign_2(_z, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_k, 1);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_upOrDownTo_2(1, _k), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _i"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(
          _at_2(_s, _i),
          _at_2(_s, _plusSign_2(_hyphenMinus_2(_size_1(_s), _i), 1)),
        );
      });
      _removeLast_2(_s, _k);
      _aBlock_1(_s);
      _z = _hyphenMinus_2(_z, _k);
      _d = _hyphenMinus_2(_n, _k);
      _n = _max_2(_k, _d);
      return _k = _min_2(_k, _d);
    });
    return _flatten_1(_s);
  },
  "{ :k :n :aBlock:/1 |\n\t\tlet s = 1:n.collect { :i |\n\t\t\t(i <= k).if {\n\t\t\t\t[1]\n\t\t\t} {\n\t\t\t\t[0]\n\t\t\t}\n\t\t};\n\t\tlet d = n - k;\n\t\tlet z = d;\n\t\taBlock(s);\n\t\tn := k.max(d);\n\t\tk := k.min(d);\n\t\t{\n\t\t\tz > 0 | {\n\t\t\t\tk > 1\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\t1:k.do { :i |\n\t\t\t\ts[i].addAll(s[s.size - i + 1])\n\t\t\t};\n\t\t\ts.removeLast(k);\n\t\t\taBlock(s);\n\t\t\tz := z - k;\n\t\t\td := n - k;\n\t\t\tn := k.max(d);\n\t\t\tk := k.min(d)\n\t\t};\n\t\ts.flatten\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "bjorklundsAlgorithm",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _k, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _bjorklundsAlgorithmDo_3(_k, _n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    });
  },
  "{ :k :n |\n\t\tk.bjorklundsAlgorithmDo(n) { :each | nil }\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "blancmangeFunction",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _d"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _circumflexAccent_2(2, _d);
    let _b = _List_1(_plusSign_2(_k, 1));
    /* Statements */
    _atPut_3(_b, _plusSign_2(0, 1), 0);
    _atPut_3(_b, _plusSign_2(_k, 1), 0);
    _toByDo_4(_d, 1, -1, function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toByDo_4(
        0,
        _hyphenMinus_2(_k, 1),
        _circumflexAccent_2(2, _n),
        function (_m) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _m"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _b,
            _plusSign_2(
              _plusSign_2(_m, _circumflexAccent_2(2, _hyphenMinus_2(_n, 1))),
              1,
            ),
            _plusSign_2(
              _circumflexAccent_2(2, _n),
              _asterisk_2(
                0.5,
                _plusSign_2(
                  _at_2(_b, _plusSign_2(_m, 1)),
                  _at_2(
                    _b,
                    _plusSign_2(_plusSign_2(_m, _circumflexAccent_2(2, _n)), 1),
                  ),
                ),
              ),
            ),
          );
        },
      );
    });
    return _b;
  },
  "{ :d |\n\t\tlet k = 2 ^ d;\n\t\tlet b = List(k + 1);\n\t\tb[0 + 1] := 0;\n\t\tb[k + 1] := 0;\n\t\td.toByDo(1, -1) { :n |\n\t\t\t0.toByDo(k - 1, 2 ^ n) { :m |\n\t\t\t\tb[m + (2 ^ (n - 1)) + 1] := (2 ^ n) + (0.5 * (b[m + 1] + b[m + (2 ^ n) + 1]))\n\t\t\t}\n\t\t};\n\t\tb\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "catalanTriangle",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _solidus_2(_plusSign_2(_hyphenMinus_2(_n, _k), 1), _plusSign_2(_n, 1)),
      _binomial_2(_plusSign_2(_n, _k), _k),
    );
  },
  "{ :n :k |\n\t\t((n - k + 1) / (n + 1)) * (n + k).binomial(k)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "characterRange",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
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
  "combinations",
  ["n", "m"],
  function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _m"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _combinationsAtATimeDo_3(_upOrDownTo_2(1, _n), _m, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n :m |\n\t\tlet answer = [];\n\t\t1:n.combinationsAtATimeDo(m) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "commonResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _modulus"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _percentSign_2(_self, _modulus);
  },
  "{ :self :modulus |\n\t\tself % modulus\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "digitalRootSet",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _x, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _digitSum_2 = function (_x, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _x, _b"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _total = 0;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_x, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _total = _plusSign_2(_total, _percentSign_2(_x, _b));
        return _x = _solidusSolidus_2(_x, _b);
      });
      return _total;
    };
    let _seen = _Set_0();
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_seen, _x);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_seen, _x);
      return _x = _digitSum_2(_x, _b);
    });
    return _asTuple_1([_x, _seen]);
  },
  "{ :x :b |\n\t\tlet digitSum = { :x :b |\n\t\t\tlet total = 0;\n\t\t\t{\n\t\t\t\tx > 0\n\t\t\t}.whileTrue {\n\t\t\t\ttotal := total + (x % b);\n\t\t\t\tx := x // b\n\t\t\t};\n\t\t\ttotal\n\t\t};\n\t\tlet seen = Set();\n\t\t{\n\t\t\tseen.includes(x)\n\t\t}.whileFalse {\n\t\t\tseen.add(x);\n\t\t\tx := digitSum(x, b)\n\t\t};\n\t\t(x, seen)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "digitalRoot",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _x, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_digitalRootSet_2(_x, _b));
  },
  "{ :x :b |\n\t\tx.digitalRootSet(b).first\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b", "d"],
  function (_n, _b, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _n, _b, _d"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _count_2(_integerDigits_2(_n, _b), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _digits = _integerDigits_2(_n, _b);
    /* Statements */
    return _collect_2(_upOrDownTo_2(_hyphenMinus_2(_b, 1), 0), function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _d"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _count_2(_digits, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_each, _d);
      });
    });
  },
  "{ :n :b |\n\t\tlet digits = n.integerDigits(b);\n\t\t((b - 1) .. 0).collect { :d |\n\t\t\tdigits.count { :each |\n\t\t\t\teach = d\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "dividesImmediately",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _dividesImmediately_2(
      _Fraction_2(_self, 1),
      _Fraction_2(_aNumber, 1),
    );
  },
  "{ :self :aNumber |\n\t\tFraction(self, 1).dividesImmediately(Fraction(aNumber, 1))\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "divisorSum",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
      /* Statements */
      return _error_2(
        _self,
        "@Integer>>doubleFactorial: not valid for negative integers",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _max_2(_self, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "dyckWords",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_4 = function (_x, _i, _n0, _n1) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _x, _i, _n0, _n1"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _d0_0 = function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [0]),
          _plusSign_2(_i, 1),
          _plusSign_2(_n0, 1),
          _n1,
        );
      };
      let _d1_0 = function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [1]),
          _plusSign_2(_i, 1),
          _n0,
          _plusSign_2(_n1, 1),
        );
      };
      /* Statements */
      return _if_3(
        _ampersandAmpersand_2(
          _ampersandAmpersand_2(
            _lessThanSign_2(_n0, _n),
            _lessThanSign_2(_n1, _n),
          ),
          _greaterThanSign_2(_n0, _n1),
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _plusSignPlusSign_2(_d0_0(), _d1_0());
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(
            _verticalLineVerticalLine_2(
              _ampersandAmpersand_2(
                _ampersandAmpersand_2(
                  _lessThanSign_2(_n0, _n),
                  _lessThanSign_2(_n1, _n),
                ),
                _equalsSign_2(_n0, _n1),
              ),
              _ampersandAmpersand_2(
                _lessThanSign_2(_n0, _n),
                _equalsSign_2(_n1, _n),
              ),
            ),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _d0_0();
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(
                _ampersandAmpersand_2(
                  _equalsSign_2(_n0, _n),
                  _lessThanSign_2(_n1, _n),
                ),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage =
                      "Arity: expected 0, "; /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _d1_0();
                },
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage =
                      "Arity: expected 0, "; /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _if_3(
                    _ampersandAmpersand_2(
                      _equalsSign_2(_n0, _n1),
                      _equalsSign_2(_n1, _n),
                    ),
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage =
                          "Arity: expected 0, "; /* console.error(errorMessage); */
                        throw new Error(errorMessage);
                      }
                      /* Statements */
                      return [_x];
                    },
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage =
                          "Arity: expected 0, "; /* console.error(errorMessage); */
                        throw new Error(errorMessage);
                      }
                      /* Statements */
                      return _error_2(_n, "Integer>>dyckWords");
                    },
                  );
                },
              );
            },
          );
        },
      );
    };
    /* Statements */
    return _f_4([0], 1, 1, 0);
  },
  "{ :n |\n\t\tlet f = { :x :i :n0 :n1 |\n\t\t\tlet d0 = { f(x ++ [0], i + 1, n0 + 1, n1) };\n\t\t\tlet d1 = { f(x ++ [1], i + 1, n0, n1 + 1) };\n\t\t\t((n0 < n) && (n1 < n) && (n0 > n1)).if {\n\t\t\t\td0() ++ d1()\n\t\t\t} {\n\t\t\t\t(\n\t\t\t\t\t((n0 < n) && (n1 < n) && (n0 = n1)) ||\n\t\t\t\t\t((n0 < n) && (n1 = n))\n\t\t\t\t).if {\n\t\t\t\t\td0()\n\t\t\t\t} {\n\t\t\t\t\t((n0 = n) && (n1 < n)).if {\n\t\t\t\t\t\td1()\n\t\t\t\t\t} {\n\t\t\t\t\t\t((n0 = n1) && (n1 = n)).if {\n\t\t\t\t\t\t\t[x]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tn.error('Integer>>dyckWords')\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf([0], 1, 1, 0)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "euclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _a, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_b, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _l = _if_3(_isNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toBy_3(-1, _self, -1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _to_2(1, _self);
      });
      /* Statements */
      return _size_1(_select_2(_l, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _each"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_gcd_2(_self, _each), 1);
      }));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet l = self.isNegative.if {\n\t\t\t\t-1.toBy(self, -1)\n\t\t\t} {\n\t\t\t\t1.to(self)\n\t\t\t};\n\t\t\tl.select { :each |\n\t\t\t\tself.gcd(each) = 1\n\t\t\t}.size\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "extendedEuclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _a, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym102 = _assertIsOfSize_2([_a, _b], 2),
      _r0 = _at_2(__genSym102, 1),
      _r = _at_2(__genSym102, 2);
    let __genSym103 = _assertIsOfSize_2([1, 0], 2),
      _s0 = _at_2(__genSym103, 1),
      _s = _at_2(__genSym103, 2);
    let __genSym104 = _assertIsOfSize_2([0, 1], 2),
      _t0 = _at_2(__genSym104, 1),
      _t = _at_2(__genSym104, 2);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_r, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _quotient = _solidusSolidus_2(_r0, _r);
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym105 = [
          _r,
          _hyphenMinus_2(_r0, _asterisk_2(_quotient, _r)),
        ];
        _r0 = _at_2(__genSym105, 1);
        _r = _at_2(__genSym105, 2);
      })(); /* List Assignment */
      (function () {
        const __genSym106 = [
          _s,
          _hyphenMinus_2(_s0, _asterisk_2(_quotient, _s)),
        ];
        _s0 = _at_2(__genSym106, 1);
        _s = _at_2(__genSym106, 2);
      })();
      return /* List Assignment */ (function () {
        const __genSym107 = [
          _t,
          _hyphenMinus_2(_t0, _asterisk_2(_quotient, _t)),
        ];
        _t0 = _at_2(__genSym107, 1);
        _t = _at_2(__genSym107, 2);
      })();
    });
    return _if_3(_lessThanSign_2(_r0, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return [_hyphenMinus_1(_r0), _hyphenMinus_1([_s0, _t0])];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return [_r0, [_s0, _t0]];
    });
  },
  "{ :a :b |\n\t\tlet [r0, r] = [a, b];\n\t\tlet [s0, s] = [1, 0];\n\t\tlet [t0, t] = [0, 1];\n\t\t{\n\t\t\tr ~= 0\n\t\t}.whileTrue {\n\t\t\tlet quotient = r0 // r;\n\t\t\t[r0, r] := [r, r0 - (quotient * r)];\n\t\t\t[s0, s] := [s, s0 - (quotient * s)];\n\t\t\t[t0, t] := [t, t0 - (quotient * t)]\n\t\t};\n\t\t(r0 < 0).if {\n\t\t\t[r0.-, [s0, t0].-]\n\t\t} {\n\t\t\t[r0, [s0, t0]]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "extendedGcd",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _extendedEuclideanAlgorithm_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.extendedEuclideanAlgorithm(anInteger)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>factorial: not valid for negative integers");
    });
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
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
      /* Temporaries */
      let _next = _self;
      let _answer = _self;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_next, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "fareySequence",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym108 = _assertIsOfSize_2([0, 1, 1, _n], 4),
      _a = _at_2(__genSym108, 1),
      _b = _at_2(__genSym108, 2),
      _c = _at_2(__genSym108, 3),
      _d = _at_2(__genSym108, 4);
    let _answer = [_Fraction_2(_a, _b)];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_c, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _k = _floor_1(_solidus_2(_plusSign_2(_n, _b), _d));
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym109 = [
          _c,
          _d,
          _hyphenMinus_2(_asterisk_2(_k, _c), _a),
          _hyphenMinus_2(_asterisk_2(_k, _d), _b),
        ];
        _a = _at_2(__genSym109, 1);
        _b = _at_2(__genSym109, 2);
        _c = _at_2(__genSym109, 3);
        _d = _at_2(__genSym109, 4);
      })();
      return _add_2(_answer, _Fraction_2(_a, _b));
    });
    return _answer;
  },
  "{ :n |\n\t\tlet [a, b, c, d] = [0, 1, 1, n];\n\t\tlet answer = [Fraction(a, b)];\n\t\t{\n\t\t\tc <= n\n\t\t}.whileTrue {\n\t\t\tlet k = ((n + b) / d).floor;\n\t\t\t[a, b, c, d] := [c, d, k * c - a, k * d - b];\n\t\t\tanswer.add(Fraction(a, b))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "fibonacciSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fibonacciSequenceInto_2(_self, []);
  },
  "{ :self |\n\t\tself.fibonacciSequenceInto([])\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "fibonacciSequenceUpTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [1];
    let _n = 1;
    let _k = 1;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_n, _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _n);
      _n = _plusSign_2(_n, _at_2(_answer, _k));
      return _k = _plusSign_2(_k, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [1];\n\t\tlet n = 1;\n\t\tlet k = 1;\n\t\t{\n\t\t\tn <= self\n\t\t}.whileTrue {\n\t\t\tanswer.add(n);\n\t\t\tn := n + answer[k];\n\t\t\tk := k + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "fibonacciWord",
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
      _plusSign_2(2, _floor_1(_goldenRatio_1(_self))),
      _floor_1(_goldenRatio_1(_plusSign_2(_self, 1))),
    );
  },
  "{ :self |\n\t\t2 + self.goldenRatio.floor - (self + 1).goldenRatio.floor\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "foldIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _size"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _characterString_1(_asCharacter_1(_self));
  },
  "{ :self |\n\t\tself.asCharacter.characterString\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "gcd",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _abs_1(_self);
      let _b = _abs_1(_anInteger);
      /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_b, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _self, _limit"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    let _step_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_lessThanSignEqualsSign_2(_n, _limit), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifFalse_2(_includes_2(_answer, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _product_1(
        _collect_2(_upOrDownTo_2(_one_1(_self), _self), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _k"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _circumflexAccent_2(_k, _k);
        }),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 3, _n, _k, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_lessThanSign_2(_n, _k), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _last = _k;
        let _z = null;
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_at_2(_a, _last), 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_upOrDownTo_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _k"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_2(_n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 3, _n, _k, _aBlock_1"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_at_2(_a, 1), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _last = _k;
      let _z = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_at_2(_a, _last), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsWeakDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
        "Arity: expected 4, _self, _base, _numDigits, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _num = _abs_1(_self);
    /* Statements */
    return _timesRepeat_2(_numDigits, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_percentSign_2(_num, _base));
      return _num = _solidusSolidus_2(_num, _base);
    });
  },
  "{ :self :base :numDigits :aBlock:/1 |\n\t\tlet num = self.abs;\n\t\tnumDigits.timesRepeat {\n\t\t\taBlock(num % base);\n\t\t\tnum := num // base\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base", "numDigits"],
  function (_self, _base, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _base, _numDigits"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerDigitsReverseDo_4(_self, _base, _numDigits, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _self, _base"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _assertIsInteger_2(_self, "@Integer>>integerDigits");
    return _if_3(_isInteger_1(_base), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _numDigits = _if_3(_isZero_1(_self), function () {
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
        return _plusSign_2(
          _asInteger_1(
            _plusSign_2(
              _solidus_2(_log_1(_abs_1(_self)), _log_1(_base)),
              0.0000000001,
            ),
          ),
          1,
        );
      });
      /* Statements */
      return _integerDigits_3(_self, _base, _numDigits);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_base, _self, _integerDigits_2);
    });
  },
  "{ :self :base |\n\t\tself.assertIsInteger('@Integer>>integerDigits');\n\t\tbase.isInteger.if {\n\t\t\tlet numDigits = self.isZero.if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(self.abs.log / base.log + 0.0000000001).asInteger + 1\n\t\t\t};\n\t\t\tself.integerDigits(\n\t\t\t\tbase,\n\t\t\t\tnumDigits\n\t\t\t)\n\t\t} {\n\t\t\tbase.adaptToNumberAndApply(self, integerDigits:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerDigits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _b"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _divisible_2(_n, _circumflexAccent_2(_b, _plusSign_2(_answer, 1)));
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
  "{ :n :b |\n\t\tlet answer = 0;\n\t\t{\n\t\t\tn.divisible(b ^ (answer + 1))\n\t\t}.whileTrue {\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerLength",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _radix"; /* console.error(errorMessage); */
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
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(_floor_1(_log_2(_abs_1(_self), _radix)), 1);
    });
  },
  "{ :self :radix |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.abs.log(radix).floor + 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "integerPartitionsDescendingDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_k, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_m, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_m, _nPrime);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(_self, function (_each) {
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
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_k, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_asterisk_2(2, _x), _y);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_x, _y);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsAscendingDo_2(_self, function (_each) {
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
      const errorMessage =
        "Arity: expected 2, _j, _i"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_3 = function (_t, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage =
          "Arity: expected 3, _t, _m, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _ampersand_2(_equalsSign_2(_m, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_t, _n);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return [[_t]];
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(
            _verticalLine_2(_lessThanSign_2(_n, _m), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _verticalLine_2(_lessThanSign_2(_n, 1), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage =
                    "Arity: expected 0, "; /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _verticalLine_2(_lessThanSign_2(_m, 1), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage =
                      "Arity: expected 0, "; /* console.error(errorMessage); */
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
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return [];
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _plusSignPlusSign_2(
                _collect_2(
                  _f_3(_t, _hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, _t)),
                  function (_r) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage =
                        "Arity: expected 1, _r"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_collect_2(_upOrDownTo_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _k"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _integerPartitions_2(_n, _k);
    }));
  },
  "{ :n |\n\t\t1:n.collect { :k |\n\t\t\tn.integerPartitions(k)\n\t\t}.concatenation\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isByte",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "isPerfectNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "isRoughNumber",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_primeFactors_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSignEqualsSign_2(_each, _k);
    });
  },
  "{ :self :k |\n\t\tself.primeFactors.allSatisfy { :each |\n\t\t\teach >= k\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isSmoothNumber",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), _k);
  },
  "{ :self :k |\n\t\tself.primeLimit <= k\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "isSquareFree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "lassalleNumber",
  ["m"],
  function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _m"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _List_2(_m, _one_1(_m));
    /* Statements */
    _toDo_3(2, _m, function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _z = _sum_1(
        _collect_2(_upOrDownTo_2(1, _hyphenMinus_2(_n, 1)), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _j"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asterisk_2(
            _asterisk_2(
              _asterisk_2(
                _circumflexAccent_2(-1, _j),
                _binomial_2(
                  _hyphenMinus_2(_asterisk_2(2, _n), 1),
                  _hyphenMinus_2(_asterisk_2(2, _j), 1),
                ),
              ),
              _at_2(_a, _j),
            ),
            _catalanNumber_1(_hyphenMinus_2(_n, _j)),
          );
        }),
      );
      /* Statements */
      return _atPut_3(
        _a,
        _n,
        _asterisk_2(
          _circumflexAccent_2(-1, _hyphenMinus_2(_n, 1)),
          _plusSign_2(_catalanNumber_1(_n), _z),
        ),
      );
    });
    return _at_2(_a, _m);
  },
  "{ :m |\n\t\tlet a = List(m, m.one);\n\t\t2.toDo(m) { :n |\n\t\t\tlet z = (1 .. (n - 1)).collect { :j |\n\t\t\t\t-1 ^ j * (2 * n - 1).binomial(2 * j - 1) * a[j] * (n - j).catalanNumber\n\t\t\t}.sum;\n\t\t\ta[n] := -1 ^ (n - 1) * (n.catalanNumber + z)\n\t\t};\n\t\ta[m]\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "lcm",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_b, 0);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _ab = _asterisk_2(_a, _b);
          /* Statements */
          _whileFalse_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_b, 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "lobbNumber",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _m, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_m, 0, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidusSolidus_2(
        _asterisk_2(
          _binomial_2(_asterisk_2(2, _n), _plusSign_2(_m, _n)),
          _plusSign_2(_asterisk_2(2, _m), 1),
        ),
        _plusSign_2(_plusSign_2(_m, _n), 1),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>lobbNumber: domain error");
    });
  },
  "{ :m :n |\n\t\tm.betweenAnd(0, n).if {\n\t\t\t((2 * n).binomial(m + n) * (2 * m + 1)) // (m + n + 1)\n\t\t} {\n\t\t\t'@Integer>>lobbNumber: domain error'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "lucasNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
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
      /* Temporaries */
      let _phi = _goldenRatio_1(1);
      /* Statements */
      return _rounded_1(_circumflexAccent_2(_phi, _self));
    });
  },
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet phi = 1.goldenRatio;\n\t\t\t(phi ^ self).rounded\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "lucasNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linearRecurrence_3([1, 1], [1, 3], _self);
  },
  "{ :self |\n\t\t[1 1].linearRecurrence([1 3], self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "minimalResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _modulus"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _percentSign_2(_self, _modulus);
    let _q = _hyphenMinus_2(_p, _modulus);
    /* Statements */
    return _if_3(_lessThanSign_2(_p, _abs_1(_q)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _p;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _q;
    });
  },
  "{ :self :modulus |\n\t\tlet p = self % modulus;\n\t\tlet q = p - modulus;\n\t\t(p < q.abs).if {\n\t\t\tp\n\t\t} {\n\t\t\tq\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "mixedRadixEncode",
  ["self", "factors"],
  function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _factors"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_factors));
    /* Statements */
    _toByDo_4(_size_1(_factors), 1, -1, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _index"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _percentSign_2(_self, _at_2(_factors, _index)));
      return _self = _solidusSolidus_2(_self, _at_2(_factors, _index));
    });
    _ifTrue_2(_greaterThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFirst_2(_answer, _self);
    });
    return _answer;
  },
  "{ :self :factors |\n\t\tlet answer = List(factors.size);\n\t\tfactors.size.toByDo(1, -1) { :index |\n\t\t\tanswer[index] := self % factors[index];\n\t\t\tself := self // factors[index]\n\t\t};\n\t\t(self > 0).ifTrue {\n\t\t\tanswer.addFirst(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "modularInverse",
  ["a", "n"],
  function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _a, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _t = 0;
    let _t1 = 1;
    let _r = _if_3(_lessThanSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _n;
    });
    let _r1 = _if_3(_lessThanSign_2(_a, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _percentSign_2(_a, _n);
    });
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_r1, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _quotient = _solidusSolidus_2(_r, _r1);
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym110 = [
          _t1,
          _hyphenMinus_2(_t, _asterisk_2(_quotient, _t1)),
        ];
        _t = _at_2(__genSym110, 1);
        _t1 = _at_2(__genSym110, 2);
      })();
      return /* List Assignment */ (function () {
        const __genSym111 = [
          _r1,
          _hyphenMinus_2(_r, _asterisk_2(_quotient, _r1)),
        ];
        _r = _at_2(__genSym111, 1);
        _r1 = _at_2(__genSym111, 2);
      })();
    });
    return _if_3(_greaterThanSign_2(_r, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Integer>>modularInverse: not invertible");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_t, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_t, _n);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "multiplicativeOrder",
  ["k", "n", "r"],
  function (_k, _n, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _k, _n, _r"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
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
      return _if_3(_isCoprime_2(_k, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _m = _one_1(_k);
        /* Statements */
        _whileFalse_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _includes_2(
            _r,
            _percentSign_2(_circumflexAccent_2(_k, _m), _n),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _m = _plusSign_2(_m, 1);
        });
        return _m;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return null;
      });
    });
  },
  "{ :k :n :r |\n\t\t(n = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tk.isCoprime(n).if {\n\t\t\t\tlet m = k.one;\n\t\t\t\t{\n\t\t\t\t\tr.includes(k ^ m % n)\n\t\t\t\t}.whileFalse {\n\t\t\t\t\tm := m + 1\n\t\t\t\t};\n\t\t\t\tm\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "multiplicativeOrder",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _k, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _multiplicativeOrder_3(_k, _n, [1]);
  },
  "{ :k :n |\n\t\tk.multiplicativeOrder(n, [1])\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "narayanaNumber",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_k, 1, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidusSolidus_2(
        _asterisk_2(
          _binomial_2(_n, _k),
          _binomial_2(_n, _hyphenMinus_2(_k, 1)),
        ),
        _n,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("narayanaNumber: domain error");
    });
  },
  "{ :n :k |\n\t\tk.betweenAnd(1, n).if {\n\t\t\tn.binomial(k) * binomial(n, k - 1) // n\n\t\t} {\n\t\t\t'narayanaNumber: domain error'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "narayanaSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [1, 1, 1];
    /* Statements */
    _toDo_3(4, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(
        _answer,
        _plusSign_2(
          _at_2(_answer, _hyphenMinus_2(_i, 1)),
          _at_2(_answer, _hyphenMinus_2(_i, 3)),
        ),
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [1 1 1];\n\t\t4.toDo(self) { :i |\n\t\t\tanswer.add(answer[i - 1] + answer[i - 3])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "numberOfCompositions",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
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
  "numberOfDigitsInBase",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _radix"; /* console.error(errorMessage); */
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
      /* Statements */
      return _numberOfDigitsInBase_2(_negated_1(_self), _radix);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, _radix), function () {
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
        return _if_3(_isPowerOfTwo_1(_radix), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _quotient_2(
            _hyphenMinus_2(
              _plusSign_2(_highBit_1(_self), _highBit_1(_radix)),
              2,
            ),
            _hyphenMinus_2(_highBit_1(_radix), 1),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _q = _self;
          let _total = 0;
          /* Statements */
          _whileFalse_1(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _nDigits = _if_3(_equalsSign_2(_radix, 10), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _plusSign_2(
                _greaterThanSignGreaterThanSign_2(
                  _asterisk_2(_hyphenMinus_2(_highBit_1(_q), 1), 1233),
                  12,
                ),
                1,
              );
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _quotient_2(_highBit_1(_q), _highBit_1(_radix));
            });
            /* Statements */
            _total = _plusSign_2(_total, _nDigits);
            _q = _quotient_2(_q, _raisedToInteger_2(_radix, _nDigits));
            return (_lessThanSign_2(_q, _radix));
          });
          return _if_3(_equalsSign_2(_q, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _total;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _plusSign_2(_total, 1);
          });
        });
      });
    });
  },
  "{ :self :radix |\n\t\tself.isNegative.if {\n\t\t\tself.negated.numberOfDigitsInBase(radix)\n\t\t} {\n\t\t\t(self < radix).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tradix.isPowerOfTwo.if {\n\t\t\t\t\t(self.highBit + radix.highBit - 2).quotient(\n\t\t\t\t\t\tradix.highBit - 1\n\t\t\t\t\t)\n\t\t\t\t} {\n\t\t\t\t\tlet q = self;\n\t\t\t\t\tlet total = 0;\n\t\t\t\t\t{\n\t\t\t\t\t\tlet nDigits = (radix = 10).if {\n\t\t\t\t\t\t\t((q.highBit - 1) * 1233 >> 12) + 1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tq.highBit.quotient(radix.highBit)\n\t\t\t\t\t\t};\n\t\t\t\t\t\ttotal := total + nDigits;\n\t\t\t\t\t\tq := q.quotient(radix.raisedToInteger(nDigits));\n\t\t\t\t\t\t(q < radix)\n\t\t\t\t\t}.whileFalse;\n\t\t\t\t\t(q = 0).if {\n\t\t\t\t\t\ttotal\n\t\t\t\t\t} {\n\t\t\t\t\t\ttotal + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "padovanSequence",
  ["self", "initial"],
  function (_self, _initial) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _initial"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_initial);
    /* Statements */
    _toDo_3(4, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(
        _answer,
        _plusSign_2(
          _at_2(_answer, _hyphenMinus_2(_i, 2)),
          _at_2(_answer, _hyphenMinus_2(_i, 3)),
        ),
      );
    });
    return _answer;
  },
  "{ :self :initial |\n\t\tlet answer = initial.copy;\n\t\t4.toDo(self) { :i |\n\t\t\tanswer.add(answer[i - 2] + answer[i - 3])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "padovanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _padovanSequence_2(_self, [1, 1, 1]);
  },
  "{ :self |\n\t\tself.padovanSequence([1 1 1])\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "partitionFunctionP",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _List_1(_plusSign_2(_n, 1));
    /* Statements */
    _atPut_3(_a, 1, 1n);
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _k = 1;
      let _s = 1;
      /* Statements */
      _atPut_3(_a, _plusSign_2(_i, 1), 0n);
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_s, _i);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _if_3(_isOdd_1(_k), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _a,
            _plusSign_2(_i, 1),
            _plusSign_2(
              _at_2(_a, _plusSign_2(_i, 1)),
              _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _a,
            _plusSign_2(_i, 1),
            _hyphenMinus_2(
              _at_2(_a, _plusSign_2(_i, 1)),
              _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
            ),
          );
        });
        return _if_3(_greaterThanSign_2(_k, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _s = _plusSign_2(_s, _k);
          return _k = _hyphenMinus_1(_k);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _k = _hyphenMinus_2(1, _k);
          return _s = _solidus_2(
            _asterisk_2(_k, _hyphenMinus_2(_asterisk_2(3, _k), 1)),
            2,
          );
        });
      });
    });
    return _at_2(_a, _plusSign_2(_n, 1));
  },
  "{ :n |\n\t\tlet a = List(n + 1);\n\t\ta[1] := 1n;\n\t\t1.toDo(n) { :i |\n\t\t\tlet k = 1;\n\t\t\tlet s = 1;\n\t\t\ta[i + 1] := 0n;\n\t\t\t{\n\t\t\t\ts <= i\n\t\t\t}.whileTrue {\n\t\t\t\tk.isOdd.if {\n\t\t\t\t\ta[i + 1] := a[i + 1] + a[i - s + 1]\n\t\t\t\t} {\n\t\t\t\t\ta[i + 1] := a[i + 1] - a[i - s + 1]\n\t\t\t\t};\n\t\t\t\t(k > 0).if {\n\t\t\t\t\ts := s + k;\n\t\t\t\t\tk := k.-\n\t\t\t\t} {\n\t\t\t\t\tk := 1 - k;\n\t\t\t\t\ts := k * (3 * k - 1) / 2\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ta[n + 1]\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "pascalTriangle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(0, _self), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_upOrDownTo_2(0, _n), function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _k"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _binomial_2(_n, _k);
      });
    });
  },
  "{ :self |\n\t\t0:self.collect { :n |\n\t\t\t0:n.collect { :k |\n\t\t\t\tn.binomial(k)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "pellNumber",
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
    let _x = _sqrt_1(2);
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_plusSign_2(1, _x), _n),
        _circumflexAccent_2(_hyphenMinus_2(1, _x), _n),
      ),
      _asterisk_2(2, _x),
    );
  },
  "{ :self |\n\t\tlet n = self;\n\t\tlet x = 2.sqrt;\n\t\t(((1 + x) ^ n) - ((1 - x) ^ n)) / (2 * x)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "pellNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linearRecurrence_3([2, 1], [0, 1], _self);
  },
  "{ :self |\n\t\t[2 1].linearRecurrence([0 1], self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "pellLucasNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linearRecurrence_3([2, 1], [2, 2], _self);
  },
  "{ :self |\n\t\t[2 1].linearRecurrence([2 2], self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "perrinSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _padovanSequence_2(_self, [3, 0, 2]);
  },
  "{ :self |\n\t\tself.padovanSequence([3 0 2])\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "polygonalNumber",
  ["r", "n"],
  function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _r, _n"; /* console.error(errorMessage); */
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
  "positiveResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _modulus"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _percentSign_2(_self, _modulus);
    /* Statements */
    return _if_3(_isZero_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _modulus;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _n;
    });
  },
  "{ :self :modulus |\n\t\tlet n = self % modulus;\n\t\tn.isZero.if {\n\t\t\tmodulus\n\t\t} {\n\t\t\tn\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "printStringHex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asciiStringStreamContents_1(function (_stream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _stream"; /* console.error(errorMessage); */
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
  "recamanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _seen = _asSet_1([0]);
    /* Statements */
    _toDo_3(1, _hyphenMinus_2(_self, 1), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = _hyphenMinus_2(_at_2(_answer, _n), _n);
      /* Statements */
      _ifTrue_2(
        _verticalLine_2(_lessThanSignEqualsSign_2(_next, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _includes_2(_seen, _next);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _next = _plusSign_2(_at_2(_answer, _n), _n);
        },
      );
      _atPut_3(_answer, _plusSign_2(_n, 1), _next);
      return _include_2(_seen, _next);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self, 0);\n\t\tlet seen = [0].asSet;\n\t\t1.toDo(self - 1) { :n |\n\t\t\tlet next = answer[n] - n;\n\t\t\t(\n\t\t\t\t(next <= 0) | {\n\t\t\t\t\tseen.includes(next)\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tnext := answer[n] + n\n\t\t\t};\n\t\t\tanswer[n + 1] := next;\n\t\t\tseen.include(next)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "reducedResidueSystem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_to_2(0, _hyphenMinus_2(_self, 1)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isCoprime_2(_each, _self);
    });
  },
  "{ :self |\n\t\t0.to(self - 1).select { :each |\n\t\t\teach.isCoprime(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "romanDigitsForOn",
  ["self", "digits", "base", "aStream"],
  function (_self, _digits, _base, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _digits, _base, _aStream"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextPutAll_2(_aStream, [_last_1(_digits), _first_1(_digits)]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_n, 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextPutAll_2(_aStream, [_last_1(_digits), _second_1(_digits)]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_greaterThanSign_2(_n, 4), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _nextPut_2(_aStream, _second_1(_digits));
        });
        return _timesRepeat_2(_percentSign_2(_n, 5), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _self, _aStream"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _integer = _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _nextPut_2(_aStream, _asciiValue_1("-"));
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
    /* Statements */
    _timesRepeat_2(_solidusSolidus_2(_integer, 1000), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "sternBrocotNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _n;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isEven_1(_n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _f_1(_solidus_2(_n, 2));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _m = _solidus_2(_hyphenMinus_2(_n, 1), 2);
          /* Statements */
          return _plusSign_2(_f_1(_m), _f_1(_plusSign_2(_m, 1)));
        });
      });
    };
    /* Statements */
    return _f_1(_self);
  },
  "{ :self |\n\t\tlet f = { :n |\n\t\t\t(n < 2).if {\n\t\t\t\tn\n\t\t\t} {\n\t\t\t\tn.isEven.if {\n\t\t\t\t\tf(n / 2)\n\t\t\t\t} {\n\t\t\t\t\tlet m = (n - 1) / 2;\n\t\t\t\t\tf(m) + f(m + 1)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(self)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "sternBrocotSequence",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [1, 1];
    let _index = 2;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_size_1(_answer), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _c = _at_2(_answer, _index);
      /* Statements */
      _add_2(
        _answer,
        _plusSign_2(_c, _at_2(_answer, _hyphenMinus_2(_index, 1))),
      );
      _add_2(_answer, _c);
      return _index = _plusSign_2(_index, 1);
    });
    return _answer;
  },
  "{ :n |\n\t\tlet answer = [1 1];\n\t\tlet index = 2;\n\t\t{\n\t\t\tanswer.size < n\n\t\t}.whileTrue {\n\t\t\tlet c = answer[index];\n\t\t\tanswer.add(c + answer[index - 1]);\n\t\t\tanswer.add(c);\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "stolarskyArray",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _m, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phi = _goldenRatio_1(1);
    let _g_1 = function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _x"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _floor_1(_plusSign_2(_asterisk_2(_x, _phi), 0.5));
    };
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_m, 1), function () {
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
        /* Temporaries */
        let _z = _plusSign_2(_stolarskyArray_2(_hyphenMinus_2(_m, 1), 1), 1);
        let _rowContains_2 = function (_r, _x) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage =
              "Arity: expected 2, _r, _x"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _k = _stolarskyArray_2(_r, 1);
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSign_2(_k, _x);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _k = _g_1(_k);
          });
          return _equalsSign_2(_k, _x);
        };
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _anySatisfy_2(_to_2(1, _hyphenMinus_2(_m, 1)), function (_r) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _r"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _rowContains_2(_r, _z);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _z = _plusSign_2(_z, 1);
        });
        return _z;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _g_1(_stolarskyArray_2(_m, _hyphenMinus_2(_n, 1)));
    });
  },
  "{ :m :n |\n\t\tlet phi = 1.goldenRatio;\n\t\tlet g = { :x | (x * phi + 0.5).floor };\n\t\t(n = 1).if {\n\t\t\t(m = 1).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet z = (m - 1).stolarskyArray(1) + 1;\n\t\t\t\tlet rowContains = { :r :x |\n\t\t\t\t\tlet k = r.stolarskyArray(1);\n\t\t\t\t\t{\n\t\t\t\t\t\tk < x\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tk := g(k)\n\t\t\t\t\t};\n\t\t\t\t\tk = x\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\t1.to(m - 1).anySatisfy { :r |\n\t\t\t\t\t\tr.rowContains(z)\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tz := z + 1\n\t\t\t\t};\n\t\t\t\tz\n\t\t\t}\n\t\t} {\n\t\t\tg(m.stolarskyArray(n - 1))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "subdivide",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Range_3(0, 1, _Fraction_2(1, _self));
  },
  "{ :self |\n\t\tRange(0, 1, Fraction(1, self))\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "threeDigitName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 1, _return_1"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = null;
      /* Statements */
      _ifTrue_2(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("");
      });
      _ifTrue_2(_greaterThanSign_2(_self, 99), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_0"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _remaining = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_remaining, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
  "thueMorseSequence",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_k, 0), function () {
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
      /* Temporaries */
      let _answer = _List_1(_k);
      let _i = 2;
      let _iMax = 1;
      /* Statements */
      _atPut_3(_answer, 1, 0);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_i, _k);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_lessThanSignEqualsSign_2(_i, _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSignEqualsSign_2(_i, _asterisk_2(2, _iMax));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _atPut_3(
            _answer,
            _i,
            _hyphenMinus_2(1, _at_2(_answer, _hyphenMinus_2(_i, _iMax))),
          );
          return _i = _plusSign_2(_i, 1);
        });
        return _iMax = _asterisk_2(_iMax, 2);
      });
      return _answer;
    });
  },
  "{ :k |\n\t\t(k <= 0).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = List(k);\n\t\t\tlet i =2;\n\t\t\tlet iMax = 1;\n\t\t\tanswer[1] := 0;\n\t\t\t{\n\t\t\t\ti <= k\n\t\t\t}.whileTrue {\n\t\t\t\t{\n\t\t\t\t\ti <= k & {\n\t\t\t\t\t\ti <= (2 * iMax)\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tanswer[i] := 1 - answer[i - iMax];\n\t\t\t\t\ti := i + 1\n\t\t\t\t};\n\t\t\t\tiMax := iMax * 2\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "thueMorse",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _index"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _percentSign_2(_digitCount_3(_index, 2, 1), 2);
  },
  "{ :index |\n\t\tindex.digitCount(2, 1) % 2\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
  "vanDerCorputNumber",
  ["n", "base"],
  function (_n, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _base"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = 0;
    let _q = 1;
    let _nn = _n;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_nn, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _p = _plusSign_2(_asterisk_2(_p, _base), _percentSign_2(_nn, _base));
      _q = _asterisk_2(_q, _base);
      return _nn = _solidusSolidus_2(_nn, _base);
    });
    return _Fraction_2(_p, _q);
  },
  "{ :n :base |\n\t\tlet p = 0;\n\t\tlet q = 1;\n\t\tlet nn = n;\n\t\t{\n\t\t\tnn = 0\n\t\t}.whileFalse {\n\t\t\tp := (p * base) + (nn % base);\n\t\t\tq := q * base;\n\t\t\tnn := nn // base\n\t\t};\n\t\tFraction(p, q)\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "vanDerLaanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _padovanSequence_2(_self, [1, 0, 1]);
  },
  "{ :self |\n\t\tself.padovanSequence([1 0 1])\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wythoffArray",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _m, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _floor_1(_asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _phi));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _floor_1(
          _asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _squared_1(_phi)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(
          _wythoffArray_2(_m, _hyphenMinus_2(_n, 2)),
          _wythoffArray_2(_m, _hyphenMinus_2(_n, 1)),
        );
      });
    });
  },
  "{ :m :n |\n\t\tlet phi = 1.goldenRatio;\n\t\t(n = 1).if {\n\t\t\t((m * phi).floor * phi).floor\n\t\t} {\n\t\t\t(n = 2).if {\n\t\t\t\t((m * phi).floor * phi.squared).floor\n\t\t\t} {\n\t\t\t\tm.wythoffArray(n - 2) + m.wythoffArray(n - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wythoffLower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_asterisk_2(_self, _goldenRatio_1(1)));
  },
  "{ :self |\n\t\t(self * 1.goldenRatio).floor\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wythoffPair",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return [
      _floor_1(_asterisk_2(_self, _phi)),
      _floor_1(_asterisk_2(_self, _squared_1(_phi))),
    ];
  },
  "{ :self |\n\t\tlet phi = 1.goldenRatio;\n\t\t[(self * phi).floor, (self * phi.squared).floor]\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wythoffUpper",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_asterisk_2(_self, _squared_1(_goldenRatio_1(1))));
  },
  "{ :self |\n\t\t(self * 1.goldenRatio.squared).floor\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "wrapIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _size"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_percentSign_2(_hyphenMinus_2(_self, 1), _size), 1);
  },
  "{ :self :size |\n\t\tself - 1 % size + 1\n\t}",
);

sl.addTraitMethod(
  "Integer",
  "Integer",
  "zeckendorfRepresentation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return [0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _f = _fibonacciSequenceUpTo_1(_self);
      let _k = _hyphenMinus_2(_size_1(_f), 1);
      let _z = [];
      /* Statements */
      _removeFirst_1(_f);
      _toByDo_4(_k, 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _i"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _n = _at_2(_f, _i);
        /* Statements */
        _add_2(
          _z,
          _if_3(_lessThanSignEqualsSign_2(_n, _self), function () {
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
            return 0;
          }),
        );
        return _ifTrue_2(_lessThanSignEqualsSign_2(_n, _self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _self = _hyphenMinus_2(_self, _n);
        });
      });
      return _z;
    });
  },
  "{ :self |\n\t\t(self <= 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet f = self.fibonacciSequenceUpTo;\n\t\t\tlet k = f.size - 1;\n\t\t\tlet z = [];\n\t\t\tf.removeFirst;\n\t\t\tk.toByDo(1, -1) { :i |\n\t\t\t\tlet n = f[i];\n\t\t\t\tz.add((n <= self).if { 1 } { 0 });\n\t\t\t\t(n <= self).ifTrue {\n\t\t\t\t\tself := self - n\n\t\t\t\t}\n\t\t\t};\n\t\t\tz\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Integer",
  "asLargerPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitShiftLeft_2(1, _highBitOfPositiveReceiver_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_tildeEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 2, _self, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(-256, _bitAnd_2(_self, 255));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _bitAnd_2(_self, 255);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
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
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _value = _self;
    let _length = 1;
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_value, -255), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_value, 255);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
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
