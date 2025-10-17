/*  Require: Cache  */

sl.addTrait("Integer", "Integer");

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "additivePersistence",
  ["x", "b"],
  sl.annotateFunction(function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_size_1(_second_1(_digitalRootSet_2(_x, _b))), 1);
  }, ["x", "b"]),
  "{ :x :b |\n\t\tx.digitalRootSet(b).second.size - 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "aliquotSum",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_allButLast_1(_divisors_1(_n)));
  }, ["n"]),
  "{ :n |\n\t\tn.divisors.allButLast.sum\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOne_1(_self),
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
            return _error_2(_self, "asBit");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.isOne.if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tself.error('asBit')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asCodePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asHexDigit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2("0123456789ABCDEF", _plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self |\n\t\t'0123456789ABCDEF'[self + 1]\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsInteger",
  ["self", "origin"],
  sl.annotateFunction(function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Not an integer: ", _origin),
        );
      }, []),
    );
  }, ["self", "origin"]),
  "{ :self :origin |\n\t\tself.isInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Not an integer: ' ++ origin)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsPositiveInteger",
  ["self", "origin"],
  sl.annotateFunction(function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPositiveInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Not a positive integer: ", _origin),
        );
      }, []),
    );
  }, ["self", "origin"]),
  "{ :self :origin |\n\t\tself.isPositiveInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Not a positive integer: ' ++ origin)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsPositiveOddInteger",
  ["self", "origin"],
  sl.annotateFunction(function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPositiveOddInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Not a positive odd integer: ", _origin),
        );
      }, []),
    );
  }, ["self", "origin"]),
  "{ :self :origin |\n\t\tself.isPositiveOddInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Not a positive odd integer: ' ++ origin)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
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
    return _if_3(
      _equalsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "zero";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _minus = "";
        let _three = null;
        let _num = _self;
        let _answer = "";
        let _milCount = 1;
        /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _minus = "negative ";
            return _num = _negate_1(_self);
          }, []),
        );
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_num, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _three = _threeDigitName_1(_percentSign_2(_num, 1000));
            _num = _solidusSolidus_2(_num, 1000);
            _ifFalse_2(
              _isEmpty_1(_three),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifFalse_2(
                  _isEmpty_1(_answer),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _answer = _plusSignPlusSign_2(", ", _answer);
                  }, []),
                );
                return _answer = _plusSignPlusSign_2(
                  _plusSignPlusSign_2(_three, _at_2(_mils, _milCount)),
                  _answer,
                );
              }, []),
            );
            return _milCount = _plusSign_2(_milCount, 1);
          }, []),
        );
        return _plusSignPlusSign_2(_minus, _answer);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet mils = [\n\t\t\t'',\n\t\t\t' thousand',\n\t\t\t' million', ' billion',\n\t\t\t' trillion', ' quadrillion',\n\t\t\t' quintillion', ' sextillion',\n\t\t\t' septillion', ' octillion',\n\t\t\t' nonillion', ' decillion',\n\t\t\t' undecillion', ' duodecillion',\n\t\t\t' tredecillion', ' quattuordecillion',\n\t\t\t' quindecillion', ' sexdecillion',\n\t\t\t' septendecillion', ' octodecillion',\n\t\t\t' novemdecillion', ' vigintillion'\n\t\t];\n\t\t(self = 0).if {\n\t\t\t'zero'\n\t\t} {\n\t\t\tlet minus = '';\n\t\t\tlet three = nil;\n\t\t\tlet num = self;\n\t\t\tlet answer = '';\n\t\t\tlet milCount = 1;\n\t\t\t(self < 0).ifTrue {\n\t\t\t\tminus := 'negative ';\n\t\t\t\tnum := self.negate\n\t\t\t};\n\t\t\t{\n\t\t\t\tnum > 0\n\t\t\t}.whileTrue {\n\t\t\t\tthree := (num % 1000).threeDigitName;\n\t\t\t\tnum := num // 1000;\n\t\t\t\tthree.isEmpty.ifFalse {\n\t\t\t\t\tanswer.isEmpty.ifFalse {\n\t\t\t\t\t\tanswer := ', ' ++ answer\n\t\t\t\t\t};\n\t\t\t\t\tanswer := three ++ mils[milCount] ++ answer\n\t\t\t\t};\n\t\t\t\tmilCount := milCount + 1\n\t\t\t};\n\t\t\tminus ++ answer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bernsteinBasis",
  ["d", "n", "x"],
  sl.annotateFunction(function (_d, _n, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _d, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    _x = _clip_2(_x, [0, 1]);
    return _asterisk_2(
      _asterisk_2(_binomial_2(_d, _n), _circumflexAccent_2(_x, _n)),
      _circumflexAccent_2(_hyphenMinus_2(1, _x), _hyphenMinus_2(_d, _n)),
    );
  }, ["d", "n", "x"]),
  "{ :d :n :x |\n\t\tx := x.clip([0 1]);\n\t\td.binomial(n) * (x ^ n) * ((1 - x) ^ (d - n))\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
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

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bitLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerLength_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself.integerLength(2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bjorklundsAlgorithmDo",
  ["k", "n", "aBlock:/1"],
  sl.annotateFunction(function (_k, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _k, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _collect_2(
      _Span_3(1, _n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_i, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [1];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [0];
          }, []),
        );
      }, ["i"]),
    );
    let _d = _hyphenMinus_2(_n, _k);
    let _z = _d;
    /* Statements */
    _aBlock_1(_s);
    _n = _max_2(_k, _d);
    _k = _min_2(_k, _d);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _greaterThanSign_2(_z, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_k, 1);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(
          _Span_3(1, _k, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(
              _at_2(_s, _i),
              _at_2(_s, _plusSign_2(_hyphenMinus_2(_size_1(_s), _i), 1)),
            );
          }, ["i"]),
        );
        _removeLast_2(_s, _k);
        _aBlock_1(_s);
        _z = _hyphenMinus_2(_z, _k);
        _d = _hyphenMinus_2(_n, _k);
        _n = _max_2(_k, _d);
        return _k = _min_2(_k, _d);
      }, []),
    );
    return _flatten_1(_s);
  }, ["k", "n", "aBlock:/1"]),
  "{ :k :n :aBlock:/1 |\n\t\tlet s = 1:n.collect { :i |\n\t\t\t(i <= k).if {\n\t\t\t\t[1]\n\t\t\t} {\n\t\t\t\t[0]\n\t\t\t}\n\t\t};\n\t\tlet d = n - k;\n\t\tlet z = d;\n\t\taBlock(s);\n\t\tn := k.max(d);\n\t\tk := k.min(d);\n\t\t{\n\t\t\tz > 0 | {\n\t\t\t\tk > 1\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\t1:k.do { :i |\n\t\t\t\ts[i].addAll(s[s.size - i + 1])\n\t\t\t};\n\t\t\ts.removeLast(k);\n\t\t\taBlock(s);\n\t\t\tz := z - k;\n\t\t\td := n - k;\n\t\t\tn := k.max(d);\n\t\t\tk := k.min(d)\n\t\t};\n\t\ts.flatten\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bjorklundsAlgorithm",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _bjorklundsAlgorithmDo_3(
      _k,
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, ["each"]),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\tk.bjorklundsAlgorithmDo(n) { :each | nil }\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "characterRange",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(_self, _anInteger), _asCharacter_1);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(self .. anInteger).collect(asCharacter:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "combinations",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _combinations_2(_upOrDownTo_2(1, _n), _m);
  }, ["n", "m"]),
  "{ :n :m |\n\t\t(1 .. n).combinations(m)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "commonResidue",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_self, _modulus);
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tself % modulus\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "denominator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitalRootSet",
  ["x", "b"],
  sl.annotateFunction(function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _digitSum_2 = sl.annotateFunction(function (_x, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _b";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _total = 0;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_x, 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _total = _plusSign_2(_total, _percentSign_2(_x, _b));
          return _x = _solidusSolidus_2(_x, _b);
        }, []),
      );
      return _total;
    }, ["x", "b"]);
    let _seen = _IdentitySet_0();
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_seen, _x);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_seen, _x);
        return _x = _digitSum_2(_x, _b);
      }, []),
    );
    return [_x, _seen];
  }, ["x", "b"]),
  "{ :x :b |\n\t\tlet digitSum = { :x :b |\n\t\t\tlet total = 0;\n\t\t\t{\n\t\t\t\tx > 0\n\t\t\t}.whileTrue {\n\t\t\t\ttotal := total + (x % b);\n\t\t\t\tx := x // b\n\t\t\t};\n\t\t\ttotal\n\t\t};\n\t\tlet seen = IdentitySet();\n\t\t{\n\t\t\tseen.includes(x)\n\t\t}.whileFalse {\n\t\t\tseen.add(x);\n\t\t\tx := digitSum(x, b)\n\t\t};\n\t\t[x, seen]\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitalRoot",
  ["x", "b"],
  sl.annotateFunction(function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_digitalRootSet_2(_x, _b));
  }, ["x", "b"]),
  "{ :x :b |\n\t\tx.digitalRootSet(b).first\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b", "d"],
  sl.annotateFunction(function (_n, _b, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _b, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(
      _integerDigits_2(_n, _b),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _d);
      }, ["each"]),
    );
  }, ["n", "b", "d"]),
  "{ :n :b :d |\n\t\tn.integerDigits(b).count { :each |\n\t\t\teach = d\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _digits = _integerDigits_2(_n, _b);
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(_hyphenMinus_2(_b, 1), 0),
      sl.annotateFunction(function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          throw new Error(errorMessage);
        } /* Statements */
        return _count_2(
          _digits,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_each, _d);
          }, ["each"]),
        );
      }, ["d"]),
    );
  }, ["n", "b"]),
  "{ :n :b |\n\t\tlet digits = n.integerDigits(b);\n\t\t((b - 1) .. 0).collect { :d |\n\t\t\tdigits.count { :each |\n\t\t\t\teach = d\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitCount",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _digitCount_2(_n, 10);
  }, ["n"]),
  "{ :n |\n\t\tn.digitCount(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitSum",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_integerDigits_2(_self, _base));
  }, ["self", "base"]),
  "{ :self :base |\n\t\tself.integerDigits(base).sum\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _digitSum_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.digitSum(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "dividesImmediately",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _dividesImmediately_2(
      _Fraction_2(_self, 1),
      _Fraction_2(_aNumber, 1),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tFraction(self, 1).dividesImmediately(Fraction(aNumber, 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "divisorSum",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_divisors_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.divisors.collect(aBlock:/1).sum\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "divisorSummatoryFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _floor_1(_sqrt_1(_x));
    /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(
        2,
        _sum_2(
          _upOrDownTo_2(1, _u),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _floor_1(_solidus_2(_x, _k));
          }, ["k"]),
        ),
      ),
      _square_1(_u),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet u = x.sqrt.floor;\n\t\t2 * (1 .. u).sum { :k |\n\t\t\t(x / k).floor\n\t\t} - u.square\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "divisors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _to_2(1, _self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_reverseSolidusReverseSolidus_2(_self, _each), 0);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.to(self).select { :each |\n\t\t\tself \\\\ each = 0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "dyckWords",
  ["n", "letters"],
  sl.annotateFunction(function (_n, _letters) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _letters";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_letters, 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _f_4 = sl.annotateFunction(function (_x, _i, _n0, _n1) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _x, _i, _n0, _n1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d0_0 = sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [_a]),
          _plusSign_2(_i, 1),
          _plusSign_2(_n0, 1),
          _n1,
        );
      }, []);
      let _d1_0 = sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [_b]),
          _plusSign_2(_i, 1),
          _n0,
          _plusSign_2(_n1, 1),
        );
      }, []);
      /* Statements */
      return _if_3(
        _ampersandAmpersand_2(
          _ampersandAmpersand_2(
            _lessThanSign_2(_n0, _n),
            _lessThanSign_2(_n1, _n),
          ),
          _greaterThanSign_2(_n0, _n1),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(_d0_0(), _d1_0());
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _d0_0();
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _ampersandAmpersand_2(
                  _equalsSign_2(_n0, _n),
                  _lessThanSign_2(_n1, _n),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _d1_0();
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _ampersandAmpersand_2(
                      _equalsSign_2(_n0, _n1),
                      _equalsSign_2(_n1, _n),
                    ),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [_x];
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _error_2(_n, "Integer>>dyckWords");
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["x", "i", "n0", "n1"]);
    /* Statements */
    return _f_4([_a], 1, 1, 0);
  }, ["n", "letters"]),
  "{ :n :letters |\n\t\tlet [a, b] = letters;\n\t\tlet f = { :x :i :n0 :n1 |\n\t\t\tlet d0 = { f(x ++ [a], i + 1, n0 + 1, n1) };\n\t\t\tlet d1 = { f(x ++ [b], i + 1, n0, n1 + 1) };\n\t\t\t((n0 < n) && (n1 < n) && (n0 > n1)).if {\n\t\t\t\td0() ++ d1()\n\t\t\t} {\n\t\t\t\t(\n\t\t\t\t\t((n0 < n) && (n1 < n) && (n0 = n1)) ||\n\t\t\t\t\t((n0 < n) && (n1 = n))\n\t\t\t\t).if {\n\t\t\t\t\td0()\n\t\t\t\t} {\n\t\t\t\t\t((n0 = n) && (n1 < n)).if {\n\t\t\t\t\t\td1()\n\t\t\t\t\t} {\n\t\t\t\t\t\t((n0 = n1) && (n1 = n)).if {\n\t\t\t\t\t\t\t[x]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tn.error('Integer>>dyckWords')\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf([a], 1, 1, 0)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "elementaryCellularAutomaton",
  ["ruleNumber", "initialState", "stepLimit"],
  sl.annotateFunction(function (_ruleNumber, _initialState, _stepLimit) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _ruleNumber, _initialState, _stepLimit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stateSize = _size_1(_initialState);
    let _ruleTable = _integerDigits_3(_ruleNumber, 2, 8);
    let _stepCount = 0;
    let _answer = [_initialState];
    let _previousState = _initialState;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_stepCount, _stepLimit);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextState = _collect_2(
          _upOrDownTo_2(1, _stateSize),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _j = [_hyphenMinus_2(_i, 1), _i, _plusSign_2(_i, 1)];
            let _k = _fromDigits_2(_atAllWrap_2(_previousState, _j), 2);
            /* Statements */
            return _at_2(_ruleTable, _hyphenMinus_2(8, _k));
          }, ["i"]),
        );
        /* Statements */
        _add_2(_answer, _nextState);
        _previousState = _nextState;
        return _stepCount = _plusSign_2(_stepCount, 1);
      }, []),
    );
    return _answer;
  }, ["ruleNumber", "initialState", "stepLimit"]),
  "{ :ruleNumber :initialState :stepLimit |\n\t\tlet stateSize = initialState.size;\n\t\tlet ruleTable = ruleNumber.integerDigits(2, 8);\n\t\tlet stepCount = 0;\n\t\tlet answer = [initialState];\n\t\tlet previousState = initialState;\n\t\t{ stepCount < stepLimit }.whileTrue {\n\t\t\tlet nextState = (1 .. stateSize).collect { :i |\n\t\t\t\tlet j = [i - 1, i, i + 1];\n\t\t\t\tlet k = previousState.atAllWrap(j).fromDigits(2);\n\t\t\t\truleTable[8 - k]\n\t\t\t};\n\t\t\tanswer.add(nextState);\n\t\t\tpreviousState := nextState;\n\t\t\tstepCount := stepCount + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "euclideanAlgorithm",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_b, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = _b;
        /* Statements */
        _b = _percentSign_2(_a, _b);
        return _a = _t;
      }, []),
    );
    return _a;
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{\n\t\t\tb != 0\n\t\t}.whileTrue {\n\t\t\tlet t = b;\n\t\t\tb := a % b;\n\t\t\ta := t\n\t\t};\n\t\ta\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "euclidsFormula",
  ["m", "n", "k"],
  sl.annotateFunction(function (_m, _n, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(_k, _hyphenMinus_2(_square_1(_m), _square_1(_n)));
    let _b = _asterisk_2(_asterisk_2(_asterisk_2(_k, 2), _m), _n);
    let _c = _asterisk_2(_k, _plusSign_2(_square_1(_m), _square_1(_n)));
    /* Statements */
    return [_a, _b, _c];
  }, ["m", "n", "k"]),
  "{ :m :n :k |\n\t\tlet a = k * (m.square - n.square);\n\t\tlet b = k * 2 * m * n;\n\t\tlet c = k * (m.square + n.square);\n\t\t[a, b, c]\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "euclidsFormula",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _euclidsFormula_3(_m, _n, 1);
  }, ["m", "n"]),
  "{ :m :n |\n\t\teuclidsFormula(m, n, 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "eulerPhi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _if_3(
          _isNegative_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toBy_3(-1, _self, -1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _to_2(1, _self);
          }, []),
        );
        /* Statements */
        return _size_1(_select_2(
          _l,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_gcd_2(_self, _each), 1);
          }, ["each"]),
        ));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet l = self.isNegative.if {\n\t\t\t\t-1.toBy(self, -1)\n\t\t\t} {\n\t\t\t\t1.to(self)\n\t\t\t};\n\t\t\tl.select { :each |\n\t\t\t\tself.gcd(each) = 1\n\t\t\t}.size\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "extendedEuclideanAlgorithm",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2([_a, _b], 2);
    let _r0 = _at_2(__SplVar2, 1);
    let _r = _at_2(__SplVar2, 2);
    let __SplVar3 = _assertIsOfSize_2([1, 0], 2);
    let _s0 = _at_2(__SplVar3, 1);
    let _s = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2([0, 1], 2);
    let _t0 = _at_2(__SplVar4, 1);
    let _t = _at_2(__SplVar4, 2);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_r, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _quotient = _solidusSolidus_2(_r0, _r);
        /* Statements */
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar5 = [_r, _hyphenMinus_2(_r0, _asterisk_2(_quotient, _r))];
          /* Statements */
          _r0 = _at_2(__SplVar5, 1);
          return _r = _at_2(__SplVar5, 2);
        }, [])();
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar6 = [_s, _hyphenMinus_2(_s0, _asterisk_2(_quotient, _s))];
          /* Statements */
          _s0 = _at_2(__SplVar6, 1);
          return _s = _at_2(__SplVar6, 2);
        }, [])();
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar7 = [_t, _hyphenMinus_2(_t0, _asterisk_2(_quotient, _t))];
          /* Statements */
          _t0 = _at_2(__SplVar7, 1);
          return _t = _at_2(__SplVar7, 2);
        }, [])());
      }, []),
    );
    return _if_3(
      _lessThanSign_2(_r0, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_hyphenMinus_1(_r0), _hyphenMinus_1([_s0, _t0])];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_r0, [_s0, _t0]];
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet [r0, r] = [a, b];\n\t\tlet [s0, s] = [1, 0];\n\t\tlet [t0, t] = [0, 1];\n\t\t{\n\t\t\tr != 0\n\t\t}.whileTrue {\n\t\t\tlet quotient = r0 // r;\n\t\t\t[r0, r] := [r, r0 - (quotient * r)];\n\t\t\t[s0, s] := [s, s0 - (quotient * s)];\n\t\t\t[t0, t] := [t, t0 - (quotient * t)]\n\t\t};\n\t\t(r0 < 0).if {\n\t\t\t[r0.-, [s0, t0].-]\n\t\t} {\n\t\t\t[r0, [s0, t0]]\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "extendedGcd",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _extendedEuclideanAlgorithm_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.extendedEuclideanAlgorithm(anInteger)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "fibonacciWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(2, _floor_1(_goldenRatio_1(_self))),
      _floor_1(_goldenRatio_1(_plusSign_2(_self, 1))),
    );
  }, ["self"]),
  "{ :self |\n\t\t2 + self.goldenRatio.floor - (self + 1).goldenRatio.floor\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "foldIndex",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _fold_3(_self, 1, _size);
  }, ["self", "size"]),
  "{ :self :size |\n\t\tself.fold(1, size)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "gcd",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _abs_1(_self);
        let _b = _abs_1(_anInteger);
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_b, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _percentSign_2(_a, _b);
            /* Statements */
            _a = _b;
            return _b = _r;
          }, []),
        );
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_anInteger, _self, _gcd_2);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isScalarInteger.if {\n\t\t\tlet a = self.abs;\n\t\t\tlet b = anInteger.abs;\n\t\t\t{\n\t\t\t\tb = 0\n\t\t\t}.whileFalse {\n\t\t\t\tlet r = a % b;\n\t\t\t\ta := b;\n\t\t\t\tb := r\n\t\t\t};\n\t\t\ta\n\t\t} {\n\t\t\tanInteger.adaptToNumberAndApply(self, gcd:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "hammingNumbersFromUpTo",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    let _step_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _lessThanSignEqualsSign_2(_n, _limit),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _includes_2(_answer, _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _uncheckedInclude_2(_answer, _n);
              _step_1(_asterisk_2(_n, 2));
              _step_1(_asterisk_2(_n, 3));
              return _step_1(_asterisk_2(_n, 5));
            }, []),
          );
        }, []),
      );
    }, ["n"]);
    /* Statements */
    _step_1(_self);
    return _contents_1(_asSortedList_1(_answer));
  }, ["self", "limit"]),
  "{ :self :limit |\n\t\tlet answer = IdentitySet();\n\t\tlet step = { :n |\n\t\t\t(n <= limit).ifTrue {\n\t\t\t\tanswer.includes(n).ifFalse {\n\t\t\t\t\tanswer.uncheckedInclude(n);\n\t\t\t\t\tstep(n * 2);\n\t\t\t\t\tstep(n * 3);\n\t\t\t\t\tstep(n * 5)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tstep(self);\n\t\tanswer.asSortedList.contents\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "hammingWeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _digitCount_3(_self, 2, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.digitCount(2, 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "kList", "aBlock:/1"],
  sl.annotateFunction(function (_n, _kList, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _kList, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _kList,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerCompositionsExactlyDo_3(_n, _k, _aBlock_1);
      }, ["k"]),
    );
  }, ["n", "kList", "aBlock:/1"]),
  "{ :n :kList :aBlock:/1 |\n\t\tkList.do { :k |\n\t\t\tn.integerCompositionsExactlyDo(k, aBlock:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "aBlock:/1"],
  sl.annotateFunction(function (_n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerCompositionsDo_3(_n, _Span_3(1, _n, 1), _aBlock_1);
  }, ["n", "aBlock:/1"]),
  "{ :n :aBlock:/1 |\n\t\tintegerCompositionsDo(n, 1:n, aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tn.integerCompositionsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\tn.integerCompositionsDo(k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsExactlyDo",
  ["n", "k", "aBlock:/1"],
  sl.annotateFunction(function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _lessThanSign_2(_n, _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _List_2(_k, 1);
        /* Statements */
        _atPut_3(_a, _k, _plusSign_2(_hyphenMinus_2(_n, _k), 1));
        _aBlock_1(_a);
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _at_2(_a, 1),
              _plusSign_2(_hyphenMinus_2(_n, _k), 1),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _last = _k;
            let _z = null;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_a, _last), 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _last = _hyphenMinus_2(_last, 1);
              }, []),
            );
            _z = _at_2(_a, _last);
            _atPut_3(
              _a,
              _hyphenMinus_2(_last, 1),
              _plusSign_2(_at_2(_a, _hyphenMinus_2(_last, 1)), 1),
            );
            _atPut_3(_a, _last, 1);
            _atPut_3(_a, _k, _hyphenMinus_2(_z, 1));
            return _aBlock_1(_a);
          }, []),
        );
      }, []),
    );
  }, ["n", "k", "aBlock:/1"]),
  "{ :n :k :aBlock:/1 |\n\t\t(n < k).ifFalse {\n\t\t\tlet a = List(k, 1);\n\t\t\ta[k] := n - k + 1;\n\t\t\taBlock(a);\n\t\t\t{\n\t\t\t\ta[1] = (n - k + 1)\n\t\t\t}.whileFalse {\n\t\t\t\tlet last = k;\n\t\t\t\tlet z = nil;\n\t\t\t\t{\n\t\t\t\t\ta[last] = 1\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlast := last - 1\n\t\t\t\t};\n\t\t\t\tz := a[last];\n\t\t\t\ta[last - 1] := a[last - 1] + 1;\n\t\t\t\ta[last] := 1;\n\t\t\t\ta[k] := z - 1;\n\t\t\t\taBlock(a)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsExactly",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsExactlyDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\tn.integerCompositionsExactlyDo(k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeakExactlyDo",
  ["n", "k", "aBlock:/1"],
  sl.annotateFunction(function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_k, 0);
    /* Statements */
    _atPut_3(_a, _k, _n);
    _aBlock_1(_a);
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_a, 1), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _last = _k;
        let _z = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_a, _last), 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _last = _hyphenMinus_2(_last, 1);
          }, []),
        );
        _z = _at_2(_a, _last);
        _atPut_3(
          _a,
          _hyphenMinus_2(_last, 1),
          _plusSign_2(_at_2(_a, _hyphenMinus_2(_last, 1)), 1),
        );
        _atPut_3(_a, _last, 0);
        _atPut_3(_a, _k, _hyphenMinus_2(_z, 1));
        return _aBlock_1(_a);
      }, []),
    );
  }, ["n", "k", "aBlock:/1"]),
  "{ :n :k :aBlock:/1 |\n\t\tlet a = List(k, 0);\n\t\ta[k] := n;\n\t\taBlock(a);\n\t\t{\n\t\t\ta[1] = n\n\t\t}.whileFalse {\n\t\t\tlet last = k;\n\t\t\tlet z = nil;\n\t\t\t{\n\t\t\t\ta[last] = 0\n\t\t\t}.whileTrue {\n\t\t\t\tlast := last - 1\n\t\t\t};\n\t\t\tz := a[last];\n\t\t\ta[last - 1] := a[last - 1] + 1;\n\t\t\ta[last] := 0;\n\t\t\ta[k] := z - 1;\n\t\t\taBlock(a)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeak",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerCompositionsWeak_2(_n, _Span_3(1, _n, 1));
  }, ["n"]),
  "{ :n |\n\t\tintegerCompositionsWeak(n, 1:n)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeak",
  ["n", "kList"],
  sl.annotateFunction(function (_n, _kList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _kList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _kList,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerCompositionsWeakExactlyDo_3(
          _n,
          _k,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, ["each"]),
        );
      }, ["k"]),
    );
    return _answer;
  }, ["n", "kList"]),
  "{ :n :kList |\n\t\tlet answer = [];\n\t\tkList.do { :k |\n\t\t\tn.integerCompositionsWeakExactlyDo(k) { :each |\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeakExactly",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsWeakExactlyDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\tn.integerCompositionsWeakExactlyDo(k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigitsReverseDo",
  ["self", "base", "numDigits", "aBlock:/1"],
  sl.annotateFunction(function (_self, _base, _numDigits, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _base, _numDigits, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _num = _abs_1(_self);
    /* Statements */
    return _timesRepeat_2(
      _numDigits,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_percentSign_2(_num, _base));
        return _num = _solidusSolidus_2(_num, _base);
      }, []),
    );
  }, ["self", "base", "numDigits", "aBlock:/1"]),
  "{ :self :base :numDigits :aBlock:/1 |\n\t\tlet num = self.abs;\n\t\tnumDigits.timesRepeat {\n\t\t\taBlock(num % base);\n\t\t\tnum := num // base\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base", "numDigits"],
  sl.annotateFunction(function (_self, _base, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _numDigits";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerDigitsReverseDo_4(
      _self,
      _base,
      _numDigits,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirst_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "base", "numDigits"]),
  "{ :self :base :numDigits |\n\t\tlet answer = [];\n\t\tself.integerDigitsReverseDo(base, numDigits) { :each |\n\t\t\tanswer.addFirst(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsInteger_2(_self, "@Integer>>integerDigits");
    return _if_3(
      _isScalarInteger_1(_base),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _numDigits = _if_3(
          _isZero_1(_self),
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
              _truncate_1(
                _plusSign_2(
                  _solidus_2(_log_1(_abs_1(_self)), _log_1(_base)),
                  0.0000000001,
                ),
              ),
              1,
            );
          }, []),
        );
        /* Statements */
        return _integerDigits_3(_self, _base, _numDigits);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_base, _self, _integerDigits_2);
      }, []),
    );
  }, ["self", "base"]),
  "{ :self :base |\n\t\tself.assertIsInteger('@Integer>>integerDigits');\n\t\tbase.isScalarInteger.if {\n\t\t\tlet numDigits = self.isZero.if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(self.abs.log / base.log + 0.0000000001).truncate + 1\n\t\t\t};\n\t\t\tself.integerDigits(\n\t\t\t\tbase,\n\t\t\t\tnumDigits\n\t\t\t)\n\t\t} {\n\t\t\tbase.adaptToNumberAndApply(self, integerDigits:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerDigits_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.integerDigits(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerExponent",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _divisible_2(
          _n,
          _circumflexAccent_2(_b, _plusSign_2(_answer, 1)),
        );
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
  }, ["n", "b"]),
  "{ :n :b |\n\t\tlet answer = 0;\n\t\t{\n\t\t\tn.divisible(b ^ (answer + 1))\n\t\t}.whileTrue {\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerLength",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = 1;
        let _m = _abs_1(_self);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _m,
              _circumflexAccent_2(_radix, _n),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _plusSign_2(_n, 1);
          }, []),
        );
        return _n;
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet n = 1;\n\t\t\tlet m = self.abs;\n\t\t\t{ m >= (radix ^ n) }.whileTrue {\n\t\t\t\tn := n + 1\n\t\t\t};\n\t\t\tn\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(
      _n,
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
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tn.integerPartitionsDescendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_1(
      _collect_2(
        _k,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _integerPartitionsExactly_2(_n, _each);
        }, ["each"]),
      ),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\tk.collect { :each |\n\t\t\tn.integerPartitionsExactly(each)\n\t\t}.++\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsDescendingDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _d = _List_2(_n, 1);
    let _k = 1;
    /* Statements */
    _atPut_3(_d, 1, _n);
    _aBlock_1(_copyFromTo_3(_d, 1, 1));
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_k, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _k;
        let _m = _at_2(_d, _k);
        let _nPrime = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_m, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _k = _hyphenMinus_2(_k, 1);
            return _m = _at_2(_d, _k);
          }, []),
        );
        _nPrime = _hyphenMinus_2(_plusSign_2(_m, _l), _k);
        _m = _hyphenMinus_2(_m, 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_m, _nPrime);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_d, _k, _m);
            _nPrime = _hyphenMinus_2(_nPrime, _m);
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        _atPut_3(_d, _k, _nPrime);
        return _aBlock_1(_copyFromTo_3(_d, 1, _k));
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet d = List(n, 1);\n\t\tlet k = 1;\n\t\td[1] := n;\n\t\taBlock(d.copyFromTo(1, 1));\n\t\t{\n\t\t\tk != n\n\t\t}.whileTrue {\n\t\t\tlet l = k;\n\t\t\tlet m = d[k];\n\t\t\tlet nPrime = nil;\n\t\t\t{\n\t\t\t\tm = 1\n\t\t\t}.whileTrue {\n\t\t\t\tk := k - 1;\n\t\t\t\tm := d[k]\n\t\t\t};\n\t\t\tnPrime := m + l - k;\n\t\t\tm := m - 1;\n\t\t\t{\n\t\t\t\tm < nPrime\n\t\t\t}.whileTrue {\n\t\t\t\td[k] := m;\n\t\t\t\tnPrime := nPrime - m;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\td[k] := nPrime;\n\t\t\taBlock(d.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsAscendingDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _a = _List_2(_n, 0);
    let _k = 2;
    let _y = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_k, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x, _l;
        /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        _x = _plusSign_2(_at_2(_a, _k), 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_asterisk_2(2, _x), _y);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_a, _k, _x);
            _y = _hyphenMinus_2(_y, _x);
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        _l = _plusSign_2(_k, 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_x, _y);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_a, _k, _x);
            _atPut_3(_a, _l, _y);
            _aBlock_1(_copyFromTo_3(_a, 1, _l));
            _x = _plusSign_2(_x, 1);
            return _y = _hyphenMinus_2(_y, 1);
          }, []),
        );
        _y = _hyphenMinus_2(_plusSign_2(_y, _x), 1);
        _atPut_3(_a, _k, _plusSign_2(_y, 1));
        return _aBlock_1(_copyFromTo_3(_a, 1, _k));
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet n = self;\n\t\tlet a = List(n, 0);\n\t\tlet k = 2;\n\t\tlet y = n - 1;\n\t\t{\n\t\t\tk != 1\n\t\t}.whileTrue {\n\t\t\tvar x, l;\n\t\t\tk := k - 1;\n\t\t\tx := a[k] + 1;\n\t\t\t{\n\t\t\t\t(2 * x) <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ty := y - x;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tl := k + 1;\n\t\t\t{\n\t\t\t\tx <= y\n\t\t\t}.whileTrue {\n\t\t\t\ta[k] := x;\n\t\t\t\ta[l] := y;\n\t\t\t\taBlock(a.copyFromTo(1, l));\n\t\t\t\tx := x + 1;\n\t\t\t\ty := y - 1\n\t\t\t};\n\t\t\ty := y + x - 1;\n\t\t\ta[k] := y + 1;\n\t\t\taBlock(a.copyFromTo(1, k))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsAscending",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsAscendingDo_2(
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.integerPartitionsAscendingDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsExactly",
  ["j", "i"],
  sl.annotateFunction(function (_j, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _j, _i";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_3 = sl.annotateFunction(function (_t, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _t, _m, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _equalsSign_2(_m, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_t, _n);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [[_t]];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _verticalLine_2(
              _lessThanSign_2(_n, _m),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(
                  _lessThanSign_2(_n, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _verticalLine_2(
                      _lessThanSign_2(_m, 1),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(_t, 1);
                      }, []),
                    );
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
              return [];
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _collect_2(
                  _f_3(_t, _hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, _t)),
                  sl.annotateFunction(function (_r) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _r";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return (_plusSignPlusSign_2([_t], _r));
                  }, ["r"]),
                ),
                _f_3(_hyphenMinus_2(_t, 1), _m, _n),
              );
            }, []),
          );
        }, []),
      );
    }, ["t", "m", "n"]);
    /* Statements */
    return _f_3(_plusSign_2(_hyphenMinus_2(_j, _i), 1), _i, _j);
  }, ["j", "i"]),
  "{ :j :i |\n\t\tlet f = { :t :m :n |\n\t\t\t(m = 1 & { t = n }).if {\n\t\t\t\t[[t]]\n\t\t\t} {\n\t\t\t\t(n < m | { n < 1 | { m < 1 | { t < 1 } } }).if {\n\t\t\t\t\t[]\n\t\t\t\t} {\n\t\t\t\t\tf(t, m - 1, n - t).collect { :r |\n\t\t\t\t\t\t([t] ++ r)\n\t\t\t\t\t} ++ f(t - 1, m, n)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(j - i + 1, i, j)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsOdd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _integerPartitions_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(_each, _isOdd_1);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.integerPartitions.select { :each |\n\t\t\teach.allSatisfy(isOdd:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsRecursive",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectCatenate_2(
      _Span_3(1, _n, 1),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerPartitionsExactly_2(_n, _k);
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n |\n\t\t1:n.collectCatenate { :k |\n\t\t\tn.integerPartitionsExactly(k)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsStrict",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_integerPartitions_1(_self), _isDuplicateFree_1);
  }, ["self"]),
  "{ :self |\n\t\tself.integerPartitions.select(isDuplicateFree:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerReverse",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromDigits_2(_reverse_1(_integerDigits_2(_self, _base)), _base);
  }, ["self", "base"]),
  "{ :self :base |\n\t\tself.integerDigits(base).reverse.fromDigits(base)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerReverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerReverse_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.integerReverse(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerSquareRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "integerSquareRoot: negative");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _self;
        let _z = _self;
        let _r = _zero_1(_self);
        let _q = _one_1(_self);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_q, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _q = _bitShiftLeft_2(_q, 2);
          }, []),
        );
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_q, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _t = _hyphenMinus_2(_x, _r);
            /* Statements */
            _q = _bitShiftRight_2(_q, 2);
            _t = _hyphenMinus_2(_t, _q);
            _r = _bitShiftRight_2(_r, 1);
            return _ifTrue_2(
              _greaterThanSignEqualsSign_2(_t, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _x = _t;
                return _r = _plusSign_2(_r, _q);
              }, []),
            );
          }, []),
        );
        return _r;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.error('integerSquareRoot: negative')\n\t\t} {\n\t\t\tlet x = self;\n\t\t\tlet z = self;\n\t\t\tlet r = self.zero;\n\t\t\tlet q = self.one;\n\t\t\t{ q <= x }.whileTrue {\n\t\t\t\tq := q.bitShiftLeft(2)\n\t\t\t};\n\t\t\t{ q > 1 }.whileTrue {\n\t\t\t\tlet t = x - r;\n\t\t\t\tq := q.bitShiftRight(2);\n\t\t\t\tt := t - q;\n\t\t\t\tr := r.bitShiftRight(1);\n\t\t\t\t(t >= 0).ifTrue {\n\t\t\t\t\tx := t;\n\t\t\t\t\tr := r + q\n\t\t\t\t}\n\t\t\t};\n\t\t\tr\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerString",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicPrintString_2(_self, _radix);
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.basicPrintString(radix)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerString_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.integerString(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isAbundantNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_sum_1(_divisors_1(_n)), _asterisk_2(2, _n));
  }, ["n"]),
  "{ :n |\n\t\tn.divisors.sum > (2 * n)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isAmicablePair",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_sum_1(_allButLast_1(_divisors_1(_m))), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_sum_1(_allButLast_1(_divisors_1(_n))), _m);
      }, []),
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\tm.divisors.allButLast.sum = n & {\n\t\t\tn.divisors.allButLast.sum = m\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isColossallyAbundantNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_n, 224403121196654400n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "isColossallyAbundantNumber: domain error");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2([
          2,
          6,
          12,
          60,
          120,
          360,
          2520,
          5040,
          55440,
          720720,
          1441440,
          4324320,
          21621600,
          367567200,
          6983776800,
          160626866400,
          321253732800,
          9316358251200,
          288807105787200,
          2021649740510400,
          6064949221531200,
          224403121196654400n,
        ], _n);
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n > 224403121196654400L).if {\n\t\t\tn.error('isColossallyAbundantNumber: domain error')\n\t\t} {\n\t\t\t[\n\t\t\t\t2, 6, 12, 60, 120,\n\t\t\t\t360, 2520, 5040, 55440, 720720,\n\t\t\t\t1441440, 4324320, 21621600, 367567200, 6983776800,\n\t\t\t\t160626866400, 321253732800, 9316358251200, 288807105787200, 2021649740510400,\n\t\t\t\t6064949221531200, 224403121196654400L\n\t\t\t].includes(n)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isDeficientNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_sum_1(_divisors_1(_n)), _asterisk_2(2, _n));
  }, ["n"]),
  "{ :n |\n\t\tn.divisors.sum < (2 * n)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isDyadicRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isHighlyAbundantNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _sum_1(_divisors_1(_n));
    /* Statements */
    return _allSatisfy_2(
      _to_2(1, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_k, _sum_1(_divisors_1(_i)));
      }, ["i"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet k = n.divisors.sum;\n\t\t1.to(n - 1).allSatisfy { :i |\n\t\t\tk > i.divisors.sum\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isByte",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_self, 0, 255);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.betweenAnd(0, 255)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isHappyNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _last_1(_perfectDigitalInvariantSequence_3(_self, 10, 2)),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.perfectDigitalInvariantSequence(10, 2).last = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isHarmonicDivisorNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(
      _solidus_2(
        _asterisk_2(_n, _divisorSigma_2(0, _n)),
        _divisorSigma_2(1, _n),
      ),
    );
  }, ["n"]),
  "{ :n |\n\t\tisInteger(n * divisorSigma(0, n) / divisorSigma(1, n))\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isHighlyCompositeNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _divisorSigma_2(0, _self);
    /* Statements */
    return _allSatisfy_2(
      _to_2(1, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, _divisorSigma_2(0, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = 0.divisorSigma(self);\n\t\t1.to(self - 1).allSatisfy { :each |\n\t\t\tn > 0.divisorSigma(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Integer>>isInteger");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Integer>>isInteger')\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isKaprekarNumber",
  ["self", "base", "power"],
  sl.annotateFunction(function (_self, _base, _power) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _power";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _integerLength_2(_self, _base);
    let _d = _integerDigits_2(_circumflexAccent_2(_self, _power), _base);
    let _p = _fromDigits_2(_last_2(_d, _n), _base);
    let _q = _fromDigits_2(_dropLast_2(_d, _n), _base);
    /* Statements */
    return _equalsSign_2(_plusSign_2(_p, _q), _self);
  }, ["self", "base", "power"]),
  "{ :self :base :power |\n\t\tlet n = self.integerLength(base);\n\t\tlet d = (self ^ power).integerDigits(base);\n\t\tlet p = d.last(n).fromDigits(base);\n\t\tlet q = d.dropLast(n).fromDigits(base);\n\t\t(p + q) = self\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isKaprekarNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isKaprekarNumber_3(_self, 10, 2);
  }, ["self"]),
  "{ :self |\n\t\tself.isKaprekarNumber(10, 2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isNarcissisticNumber",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _power = _integerLength_2(_self, _base);
    /* Statements */
    return _equalsSign_2(
      _sum_1(_circumflexAccent_2(_integerDigits_2(_self, _base), _power)),
      _self,
    );
  }, ["self", "base"]),
  "{ :self :base |\n\t\tlet power = self.integerLength(base);\n\t\t(self.integerDigits(base) ^ power).sum = self\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isNarcissisticNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNarcissisticNumber_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.isNarcissisticNumber(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPalindrome",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPalindrome_1(_integerDigits_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.integerDigits.isPalindrome\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectDigitalInvariant",
  ["self", "base", "power"],
  sl.annotateFunction(function (_self, _base, _power) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _power";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _perfectDigitalInvariantFunction_3(_self, _base, _power),
      _self,
    );
  }, ["self", "base", "power"]),
  "{ :self :base :power |\n\t\tself.perfectDigitalInvariantFunction(base, power) = self\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_sum_1(_allButLast_1(_divisors_1(_self))), _self);
  }, ["self"]),
  "{ :self |\n\t\tself.divisors.allButLast.sum = self\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectPower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_self, 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _alpha = _values_1(_factorInteger_1(_self));
        /* Statements */
        return _greaterThanSign_2(_gcd_1(_alpha), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self >= 4) & {\n\t\t\tlet alpha = self.factorInteger.values;\n\t\t\talpha.gcd > 1\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_sqrt_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sqrt.isInteger\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPositiveInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPositive_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isPositive\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPositiveOddInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPositiveInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_percentSign_2(_self, 2), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPositiveInteger & {\n\t\t\tself % 2 = 1\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPrimitiveAbundantNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isAbundantNumber_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _allButLast_1(_divisors_1(_n)),
          _isDeficientNumber_1,
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.isAbundantNumber & {\n\t\t\tn.divisors.allButLast.allSatisfy(isDeficientNumber:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPrimitivePythagoreanTriple",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _allSatisfy_2([_a, _b, _c], _isInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isCoprime_2(_a, _b),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(
                _sum_1(_boole_1(_collect_2([_a, _b], _isOdd_1))),
                1,
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _plusSign_2(_square_1(_a), _square_1(_b)),
                  _square_1(_c),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t[a, b, c].allSatisfy(isInteger:/1) & {\n\t\t\ta.isCoprime(b) & {\n\t\t\t\t[a, b].collect(isOdd:/1).boole.sum = 1 & {\n\t\t\t\t\t(a.square + b.square) = c.square\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPrimitivePythagoreanTriple",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPrimitivePythagoreanTriple_3(
      _a,
      _b,
      _sqrt_1(_plusSign_2(_square_1(_a), _square_1(_b))),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\tisPrimitivePythagoreanTriple(a, b, (a.square + b.square).sqrt)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPronicNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _floor_1(_sqrt_1(_self));
    /* Statements */
    return _equalsSign_2(_self, _asterisk_2(_x, _plusSign_2(_x, 1)));
  }, ["self"]),
  "{ :self |\n\t\tlet x = self.sqrt.floor;\n\t\tself = (x * (x + 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPseudoperfectNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _powerSet_1(_allButLast_1(_divisors_1(_self))),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_sum_1(_each), _self);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.divisors\n\t\t.allButLast\n\t\t.powerSet\n\t\t.anySatisfy { :each |\n\t\t\teach.sum = self\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPythagoreanTriple",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _allSatisfy_2([_a, _b, _c], _isInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _plusSign_2(_square_1(_a), _square_1(_b)),
          _square_1(_c),
        );
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t[a, b, c].allSatisfy(isInteger:/1) & {\n\t\t\t(a.square + b.square) = c.square\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPythagoreanTriple",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPythagoreanTriple_3(
      _a,
      _b,
      _sqrt_1(_plusSign_2(_square_1(_a), _square_1(_b))),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\tisPythagoreanTriple(a, b, (a.square + b.square).sqrt)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isRegularNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), 5);
  }, ["self"]),
  "{ :self |\n\t\tself.primeLimit <= 5\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isRoughNumber",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _primeFactors_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_each, _k);
      }, ["each"]),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.primeFactors.allSatisfy { :each |\n\t\t\teach >= k\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSinglyEven",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isEven_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_divisible_2(_self, 4));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEven & {\n\t\t\tself.divisible(4).not\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSmoothNumber",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), _k);
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.primeLimit <= k\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSphenicNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSquareFree_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isAlmostPrime_2(_self, 3);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareFree & {\n\t\t\tself.isAlmostPrime(3)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSquareFree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _noneSatisfy_2(
          _allButFirst_1(_divisors_1(_abs_1(_self))),
          _isPerfectSquare_1,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.abs.divisors.allButFirst.noneSatisfy(isPerfectSquare:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSumOfTwoSquares",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _select_2(
        _factorInteger_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_percentSign_2(_key_1(_each), 4), 3);
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEven_1(_value_1(_each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.factorInteger.select { :each |\n\t\t\t(each.key % 4) = 3\n\t\t}.allSatisfy { :each |\n\t\t\teach.value.isEven\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSumProductNumber",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _integerDigits_2(_self, _base);
    /* Statements */
    return _equalsSign_2(_asterisk_2(_sum_1(_d), _product_1(_d)), _self);
  }, ["self", "base"]),
  "{ :self :base |\n\t\tlet d = self.integerDigits(base);\n\t\t(d.sum * d.product) = self\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSumProductNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSumProductNumber_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.isSumProductNumber(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSuperabundantNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _solidus_2(_sum_1(_divisors_1(_n)), _n);
    /* Statements */
    return _allSatisfy_2(
      _to_2(1, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _solidus_2(_sum_1(_divisors_1(_k)), _k);
        /* Statements */
        return _greaterThanSign_2(_x, _y);
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet x = n.divisors.sum / n;\n\t\t1.to(n - 1).allSatisfy { :k |\n\t\t\tlet y = k.divisors.sum / k;\n\t\t\tx > y\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSuperiorHighlyCompositeNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_n, 6064949221531200),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "isSuperiorHighlyCompositeNumber: domain error");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2([
          2,
          6,
          12,
          60,
          120,
          360,
          2520,
          5040,
          55440,
          720720,
          1441440,
          4324320,
          21621600,
          367567200,
          6983776800,
          13967553600,
          321253732800,
          2248776129600,
          65214507758400,
          195643523275200,
          6064949221531200,
        ], _n);
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n > 6064949221531200).if {\n\t\t\tn.error('isSuperiorHighlyCompositeNumber: domain error')\n\t\t} {\n\t\t\t[\n\t\t\t\t2, 6, 12, 60, 120,\n\t\t\t\t360, 2520, 5040, 55440, 720720,\n\t\t\t\t1441440, 4324320, 21621600, 367567200, 6983776800,\n\t\t\t\t13967553600, 321253732800, 2248776129600, 65214507758400, 195643523275200,\n\t\t\t\t6064949221531200\n\t\t\t].includes(n)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isUnhappyNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isHappyNumber_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isHappyNumber.not\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isWeirdNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isAbundantNumber_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isPseudoperfectNumber_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isAbundantNumber & {\n\t\t\tself.isPseudoperfectNumber.not\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "jacobiSymbol",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
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
        return _product_1(
          _collect_2(
            _factorInteger_1(_n),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _circumflexAccent_2(
                _legendreSymbol_2(_a, _key_1(_each)),
                _value_1(_each),
              );
            }, ["each"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_a, _n], "jacobiSymbol: even n?");
      }, []),
    );
  }, ["a", "n"]),
  "{ :a :n |\n\t\tn.isOdd.if {\n\t\t\tn.factorInteger.collect { :each |\n\t\t\t\ta.legendreSymbol(each.key) ^ each.value\n\t\t\t}.product\n\t\t} {\n\t\t\t[a, n].error('jacobiSymbol: even n?')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "kroneckerSymbol",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPositive_1(_b),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_b),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _jacobiSymbol_2(_a, _b);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isEven_1(_a),
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
                let _r = _percentSign_2(_a, 8);
                /* Statements */
                return _if_3(
                  _verticalLine_2(
                    _equalsSign_2(_r, 1),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_r, 7);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _kroneckerSymbol_2(_a, _solidusSolidus_2(_b, 2));
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      0,
                      _kroneckerSymbol_2(_a, _solidusSolidus_2(_b, 2)),
                    );
                  }, []),
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
        return _if_3(
          _isNegative_1(_b),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isNegative_1(_a),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(
                  0,
                  _kroneckerSymbol_2(_a, _hyphenMinus_2(0, _b)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _kroneckerSymbol_2(_a, _hyphenMinus_2(0, _b));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _boole_1(_equalsSign_2(_abs_1(_a), 1));
          }, []),
        );
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\tb.isPositive.if {\n\t\t\tb.isOdd.if {\n\t\t\t\ta.jacobiSymbol(b)\n\t\t\t} {\n\t\t\t\ta.isEven.if {\n\t\t\t\t\t0\n\t\t\t\t} {\n\t\t\t\t\tlet r = a % 8;\n\t\t\t\t\t(r = 1 | { r = 7 }).if {\n\t\t\t\t\t\ta.kroneckerSymbol(b // 2)\n\t\t\t\t\t} {\n\t\t\t\t\t\t0  - a.kroneckerSymbol(b // 2)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tb.isNegative.if {\n\t\t\t\ta.isNegative.if {\n\t\t\t\t\t0 - a.kroneckerSymbol(0 - b)\n\t\t\t\t} {\n\t\t\t\t\ta.kroneckerSymbol(0 - b)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(a.abs = 1).boole\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lcm",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _self;
        let _b = _anInteger;
        /* Statements */
        return _if_3(
          _verticalLine_2(
            _equalsSign_2(_a, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_b, 0);
            }, []),
          ),
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
            let _ab = _asterisk_2(_a, _b);
            /* Statements */
            _whileFalse_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_b, 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _tmp = _b;
                /* Statements */
                _b = _percentSign_2(_a, _tmp);
                return _a = _tmp;
              }, []),
            );
            return _abs_1(_solidus_2(_ab, _a));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_anInteger, _self, _lcm_2);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isScalarInteger.if {\n\t\t\tlet a = self;\n\t\t\tlet b = anInteger;\n\t\t\t(\n\t\t\t\ta = 0 | {\n\t\t\t\t\tb = 0\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet ab = a * b;\n\t\t\t\t{\n\t\t\t\t\tb = 0\n\t\t\t\t}.whileFalse {\n\t\t\t\t\tlet tmp = b;\n\t\t\t\t\tb := a % tmp;\n\t\t\t\t\ta := tmp\n\t\t\t\t};\n\t\t\t\t(ab / a).abs\n\t\t\t}\n\t\t} {\n\t\t\tanInteger.adaptToNumberAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "legendreSymbol",
  ["a", "p"],
  sl.annotateFunction(function (_a, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _solidusSolidus_2(_hyphenMinus_2(_p, 1), 2);
    let _r = _powerMod_3(_a, _e, _p);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_r, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_r, _p);
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
  }, ["a", "p"]),
  "{ :a :p |\n\t\tlet e = (p - 1) // 2;\n\t\tlet r = powerMod(a, e, p);\n\t\t(r > 1).if { r - p } { r }\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "minimalResidue",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _percentSign_2(_self, _modulus);
    let _q = _hyphenMinus_2(_p, _modulus);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_p, _abs_1(_q)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _p;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _q;
      }, []),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet p = self % modulus;\n\t\tlet q = p - modulus;\n\t\t(p < q.abs).if {\n\t\t\tp\n\t\t} {\n\t\t\tq\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "mixedRadixEncode",
  ["self", "factors"],
  sl.annotateFunction(function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_factors));
    /* Statements */
    _toByDo_4(
      _size_1(_factors),
      1,
      -1,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(
          _answer,
          _index,
          _percentSign_2(_self, _at_2(_factors, _index)),
        );
        return _self = _solidusSolidus_2(_self, _at_2(_factors, _index));
      }, ["index"]),
    );
    _ifTrue_2(
      _greaterThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirst_2(_answer, _self);
      }, []),
    );
    return _answer;
  }, ["self", "factors"]),
  "{ :self :factors |\n\t\tlet answer = List(factors.size);\n\t\tfactors.size.toByDo(1, -1) { :index |\n\t\t\tanswer[index] := self % factors[index];\n\t\t\tself := self // factors[index]\n\t\t};\n\t\t(self > 0).ifTrue {\n\t\t\tanswer.addFirst(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "modularInverse",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = 0;
    let _t1 = 1;
    let _r = _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n;
      }, []),
    );
    let _r1 = _if_3(
      _lessThanSign_2(_a, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _percentSign_2(
          _hyphenMinus_2(_n, _percentSign_2(_negate_1(_a), _n)),
          _n,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _percentSign_2(_a, _n);
      }, []),
    );
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_r1, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _quotient = _solidusSolidus_2(_r, _r1);
        /* Statements */
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar8 = [
            _t1,
            _hyphenMinus_2(_t, _asterisk_2(_quotient, _t1)),
          ];
          /* Statements */
          _t = _at_2(__SplVar8, 1);
          return _t1 = _at_2(__SplVar8, 2);
        }, [])();
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar9 = [
            _r1,
            _hyphenMinus_2(_r, _asterisk_2(_quotient, _r1)),
          ];
          /* Statements */
          _r = _at_2(__SplVar9, 1);
          return _r1 = _at_2(__SplVar9, 2);
        }, [])());
      }, []),
    );
    return _if_3(
      _greaterThanSign_2(_r, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Integer>>modularInverse: not invertible");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_t, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _t = _plusSign_2(_t, _n);
          }, []),
        );
        _ifTrue_2(
          _lessThanSign_2(_n, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _t = _plusSign_2(_t, _n);
          }, []),
        );
        return _t;
      }, []),
    );
  }, ["a", "n"]),
  "{ :a :n |\n\t\tlet t = 0;\n\t\tlet t1 = 1;\n\t\tlet r = (n < 0).if { n.negate } { n };\n\t\tlet r1 = (a < 0).if { (n - (a.negate % n)) % n } { a % n };\n\t\t{\n\t\t\tr1 != 0\n\t\t}.whileTrue {\n\t\t\tlet quotient = r // r1;\n\t\t\t[t, t1] := [t1, t - (quotient * t1)];\n\t\t\t[r, r1] := [r1, r - (quotient * r1)]\n\t\t};\n\t\t(r > 1).if {\n\t\t\t'@Integer>>modularInverse: not invertible'.error\n\t\t} {\n\t\t\t(t < 0).ifTrue {\n\t\t\t\tt := t + n\n\t\t\t};\n\t\t\t(n < 0).ifTrue {\n\t\t\t\tt := t + n\n\t\t\t};\n\t\t\tt\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "multiplicativeOrder",
  ["k", "n", "r"],
  sl.annotateFunction(function (_k, _n, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _k, _n, _r";
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
          _isCoprime_2(_k, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _one_1(_k);
            /* Statements */
            _whileFalse_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includes_2(
                  _r,
                  _percentSign_2(_circumflexAccent_2(_k, _m), _n),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _m = _plusSign_2(_m, 1);
              }, []),
            );
            return _m;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
        );
      }, []),
    );
  }, ["k", "n", "r"]),
  "{ :k :n :r |\n\t\t(n = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tk.isCoprime(n).if {\n\t\t\t\tlet m = k.one;\n\t\t\t\t{\n\t\t\t\t\tr.includes(k ^ m % n)\n\t\t\t\t}.whileFalse {\n\t\t\t\t\tm := m + 1\n\t\t\t\t};\n\t\t\t\tm\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "multiplicativeOrder",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _multiplicativeOrder_3(_k, _n, [1]);
  }, ["k", "n"]),
  "{ :k :n |\n\t\tk.multiplicativeOrder(n, [1])\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfCompositions",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _binomial_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_k, 1));
  }, ["n", "k"]),
  "{ :n :k |\n\t\t/* (n - 1).factorial / ((k - 1).factorial * (n - k).factorial) */\n\t\t(n - 1).binomial(k - 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfCompositionsWeak",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _binomial_2(_hyphenMinus_2(_plusSign_2(_n, _k), 1), _n);
  }, ["n", "k"]),
  "{ :n :k |\n\t\t/* (n + k - 1).factorial / (n.factorial * (k - 1).factorial) */\n\t\tbinomial(n + k - 1, n)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfDigitsInBase",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberOfDigitsInBase_2(_negate_1(_self), _radix);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, _radix),
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
              _isPowerOfTwo_1(_radix),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _quotient_2(
                  _hyphenMinus_2(
                    _plusSign_2(_highBit_1(_self), _highBit_1(_radix)),
                    2,
                  ),
                  _hyphenMinus_2(_highBit_1(_radix), 1),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _q = _self;
                let _total = 0;
                /* Statements */
                _whileFalse_1(sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _nDigits = _if_3(
                    _equalsSign_2(_radix, 10),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _plusSign_2(
                        _greaterThanSignGreaterThanSign_2(
                          _asterisk_2(_hyphenMinus_2(_highBit_1(_q), 1), 1233),
                          12,
                        ),
                        1,
                      );
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _quotient_2(_highBit_1(_q), _highBit_1(_radix));
                    }, []),
                  );
                  /* Statements */
                  _total = _plusSign_2(_total, _nDigits);
                  _q = _quotient_2(_q, _raisedToInteger_2(_radix, _nDigits));
                  return (_lessThanSign_2(_q, _radix));
                }, []));
                return _if_3(
                  _equalsSign_2(_q, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _total;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(_total, 1);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.isNegative.if {\n\t\t\tself.negate.numberOfDigitsInBase(radix)\n\t\t} {\n\t\t\t(self < radix).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tradix.isPowerOfTwo.if {\n\t\t\t\t\t(self.highBit + radix.highBit - 2).quotient(\n\t\t\t\t\t\tradix.highBit - 1\n\t\t\t\t\t)\n\t\t\t\t} {\n\t\t\t\t\tlet q = self;\n\t\t\t\t\tlet total = 0;\n\t\t\t\t\t{\n\t\t\t\t\t\tlet nDigits = (radix = 10).if {\n\t\t\t\t\t\t\t((q.highBit - 1) * 1233 >> 12) + 1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tq.highBit.quotient(radix.highBit)\n\t\t\t\t\t\t};\n\t\t\t\t\t\ttotal := total + nDigits;\n\t\t\t\t\t\tq := q.quotient(radix.raisedToInteger(nDigits));\n\t\t\t\t\t\t(q < radix)\n\t\t\t\t\t}.whileFalse;\n\t\t\t\t\t(q = 0).if {\n\t\t\t\t\t\ttotal\n\t\t\t\t\t} {\n\t\t\t\t\t\ttotal + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "perfectDigitalInvariantFunction",
  ["self", "base", "power"],
  sl.annotateFunction(function (_self, _base, _power) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _power";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_self, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _sum = _plusSign_2(
          _sum,
          _circumflexAccent_2(_percentSign_2(_self, _base), _power),
        );
        return _self = _solidusSolidus_2(_self, _base);
      }, []),
    );
    return _sum;
  }, ["self", "base", "power"]),
  "{ :self :base :power |\n\t\tlet sum = 0;\n\t\t{ self > 0 }.whileTrue {\n\t\t\tsum := sum + ((self % base) ^ power);\n\t\t\tself := self // base\n\t\t};\n\t\tsum\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "perfectDigitalInvariantSequence",
  ["self", "base", "power"],
  sl.annotateFunction(function (_self, _base, _power) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _power";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_answer, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _self);
        return _self = _perfectDigitalInvariantFunction_3(_self, _base, _power);
      }, []),
    );
    return _answer;
  }, ["self", "base", "power"]),
  "{ :self :base :power |\n\t\tlet answer = [];\n\t\t{ answer.includes(self) }.whileFalse {\n\t\t\tanswer.add(self);\n\t\t\tself := self.perfectDigitalInvariantFunction(base, power)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "perfectNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2([
      6,
      28,
      496,
      8128,
      33550336,
      8589869056,
      137438691328,
      2305843008139952128n,
      2658455991569831744654692615953842176n,
      191561942608236107294793378084303638130997321548169216n,
    ], _n);
  }, ["n"]),
  "{ :n |\n\t\t[\n\t\t\t6,\n\t\t\t28,\n\t\t\t496,\n\t\t\t8128,\n\t\t\t33550336,\n\t\t\t8589869056,\n\t\t\t137438691328,\n\t\t\t2305843008139952128L,\n\t\t\t2658455991569831744654692615953842176L,\n\t\t\t191561942608236107294793378084303638130997321548169216L\n\t\t].at(n)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "positiveResidue",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _percentSign_2(_self, _modulus);
    /* Statements */
    return _if_3(
      _isZero_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _modulus;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n;
      }, []),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet n = self % modulus;\n\t\tn.isZero.if {\n\t\t\tmodulus\n\t\t} {\n\t\t\tn\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printString",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_radix, 10),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicPrintString_2(_self, 10);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _unsignedAnswer = _format_2("%r%", [
          _basicPrintString_2(_radix, 10),
          _basicPrintString_2(_abs_1(_self), _radix),
        ]);
        /* Statements */
        return _if_3(
          _isNegative_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSignPlusSign_2("-", _unsignedAnswer);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unsignedAnswer;
          }, []),
        );
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\t(radix = 10).if {\n\t\t\tself.basicPrintString(10)\n\t\t} {\n\t\t\tlet unsignedAnswer = '%r%'.format([\n\t\t\t\tradix.basicPrintString(10),\n\t\t\t\tself.abs.basicPrintString(radix)\n\t\t\t]);\n\t\t\tself.isNegative.if {\n\t\t\t\t'-' ++ unsignedAnswer\n\t\t\t} {\n\t\t\t\tunsignedAnswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, 10);
  }, ["self"]),
  "{ :self |\n\t\tself.printString(10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printStringHex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, 16);
  }, ["self"]),
  "{ :self |\n\t\tself.printString(16)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "ramanujanTau",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(_Fraction_2(65n, 756n), _divisorSigma_2(11, _n));
    let _b = _asterisk_2(_Fraction_2(691n, 756n), _divisorSigma_2(5, _n));
    let _c = _asterisk_2(
      _Fraction_2(691n, 3n),
      _sum_2(
        _upOrDownTo_2(1, _hyphenMinus_2(_n, 1)),
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _divisorSigma_2(5, _k),
            _divisorSigma_2(5, _hyphenMinus_2(_n, _k)),
          );
        }, ["k"]),
      ),
    );
    /* Statements */
    return _hyphenMinus_2(_plusSign_2(_a, _b), _c);
  }, ["n"]),
  "{ :n |\n\t\tlet a = 65/756 * divisorSigma(11, n);\n\t\tlet b = 691/756 * divisorSigma(5, n);\n\t\tlet c = 691/3 * (1 .. n - 1).sum { :k |\n\t\t\tdivisorSigma(5, k) * divisorSigma(5, n - k)\n\t\t};\n\t\ta + b - c\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "reducedResidueSystem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _to_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCoprime_2(_each, _self);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.to(self - 1).select { :each |\n\t\t\teach.isCoprime(self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "romanDigitsForOn",
  ["self", "digits", "base", "aStream"],
  sl.annotateFunction(function (_self, _digits, _base, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _digits, _base, _aStream";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _solidusSolidus_2(
      _percentSign_2(_self, _asterisk_2(_base, 10)),
      _base,
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 9),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextPutAll_2(_aStream, [_last_1(_digits), _first_1(_digits)]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 4),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextPutAll_2(_aStream, [
              _last_1(_digits),
              _second_1(_digits),
            ]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _greaterThanSign_2(_n, 4),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _nextPut_2(_aStream, _second_1(_digits));
              }, []),
            );
            return _timesRepeat_2(
              _percentSign_2(_n, 5),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _nextPut_2(_aStream, _last_1(_digits));
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "digits", "base", "aStream"]),
  "{ :self :digits :base :aStream |\n\t\tlet n = self % (base * 10) // base;\n\t\t(n = 9).if {\n\t\t\taStream.nextPutAll([digits.last, digits.first])\n\t\t} {\n\t\t\t(n = 4).if {\n\t\t\t\taStream.nextPutAll([digits.last, digits.second])\n\t\t\t} {\n\t\t\t\t(n > 4).ifTrue {\n\t\t\t\t\taStream.nextPut(digits.second)\n\t\t\t\t};\n\t\t\t\t(n % 5).timesRepeat {\n\t\t\t\t\taStream.nextPut(digits.last)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "romanDigitsOn",
  ["self", "aStream"],
  sl.annotateFunction(function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _integer = _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _nextPut_2(_aStream, _asciiValue_1("-"));
        return _negate_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
    /* Statements */
    _timesRepeat_2(
      _solidusSolidus_2(_integer, 1000),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextPut_2(_aStream, _asciiValue_1("M"));
      }, []),
    );
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("MDC"), 100, _aStream);
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("CLX"), 10, _aStream);
    return _romanDigitsForOn_4(_integer, _asciiByteArray_1("XVI"), 1, _aStream);
  }, ["self", "aStream"]),
  "{ :self :aStream |\n\t\tlet integer = self.isNegative.if {\n\t\t\taStream.nextPut('-'.asciiValue);\n\t\t\tself.negate\n\t\t} {\n\t\t\tself\n\t\t};\n\t\t(integer // 1000).timesRepeat {\n\t\t\taStream.nextPut('M'.asciiValue)\n\t\t};\n\t\tinteger.romanDigitsForOn('MDC'.asciiByteArray, 100, aStream);\n\t\tinteger.romanDigitsForOn('CLX'.asciiByteArray, 10, aStream);\n\t\tinteger.romanDigitsForOn('XVI'.asciiByteArray, 1, aStream)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "romanNumeral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return "N";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asciiStringStreamContents_1(
          sl.annotateFunction(function (_stream) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _stream";
              throw new Error(errorMessage);
            } /* Statements */
            return _romanDigitsOn_2(_self, _stream);
          }, ["stream"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t'N'\n\t\t} {\n\t\t\t{ :stream |\n\t\t\t\tromanDigitsOn(self, stream)\n\t\t\t}.asciiStringStreamContents\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "rudinShapiro",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _integerDigits_2(_n, 2);
    let _k = _size_1(_b);
    /* Statements */
    return _circumflexAccent_2(
      -1,
      _sum_2(
        _to_2(1, _hyphenMinus_2(_k, 1)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(_at_2(_b, _i), _at_2(_b, _plusSign_2(_i, 1)));
        }, ["i"]),
      ),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet b = n.integerDigits(2);\n\t\tlet k = b.size;\n\t\t-1 ^ 1.to(k - 1).sum { :i |\n\t\t\tb[i] * b[i + 1]\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "rulerFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerExponent_2(_asterisk_2(2, _n), 2);
  }, ["n"]),
  "{ :n |\n\t\t(2 * n).integerExponent(2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "squarePyramidalNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _asterisk_2(
        _asterisk_2(_n, _plusSign_2(_n, 1)),
        _plusSign_2(_asterisk_2(2, _n), 1),
      ),
      6,
    );
  }, ["n"]),
  "{ :n |\n\t\t(n * (n + 1) * ((2 * n) + 1)) / 6\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "squaresR",
  ["d", "n"],
  sl.annotateFunction(function (_d, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _n";
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_3(
          _d,
          [
            _hyphenMinusGreaterThanSign_2(
              2,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _f_1 = sl.annotateFunction(function (_c) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _c";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _count_2(
                    _divisors_1(_n),
                    sl.annotateFunction(function (_x) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _x";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_percentSign_2(_x, 4), _c);
                    }, ["x"]),
                  );
                }, ["c"]);
                /* Statements */
                return _asterisk_2(4, _hyphenMinus_2(_f_1(1), _f_1(3)));
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              4,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  8,
                  _sum_1(
                    _select_2(
                      _divisors_1(_n),
                      sl.annotateFunction(function (_x) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _x";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _not_1(_divisible_2(_x, 4));
                      }, ["x"]),
                    ),
                  ),
                );
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_d, "squaresR: d≠{2,4}");
          }, []),
        );
      }, []),
    );
  }, ["d", "n"]),
  "{ :d :n |\n\t\t(n = 0).if {\n\t\t\t1\n\t\t} {\n\t\t\td.caseOf([\n\t\t\t\t2 -> {\n\t\t\t\t\tlet f = { :c |\n\t\t\t\t\t\tn.divisors.count { :x | (x % 4) = c }\n\t\t\t\t\t};\n\t\t\t\t\t4 * (f(1) - f(3))\n\t\t\t\t},\n\t\t\t\t4 -> {\n\t\t\t\t\t8 * n.divisors.select { :x | x.divisible(4).not }.sum\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\td.error('squaresR: d≠{2,4}')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "stolarskyArray",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
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
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet phi = 1.goldenRatio;\n\t\tlet g = { :x | (x * phi + 0.5).floor };\n\t\t(n = 1).if {\n\t\t\t(m = 1).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet z = (m - 1).stolarskyArray(1) + 1;\n\t\t\t\tlet rowContains = { :r :x |\n\t\t\t\t\tlet k = r.stolarskyArray(1);\n\t\t\t\t\t{\n\t\t\t\t\t\tk < x\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tk := g(k)\n\t\t\t\t\t};\n\t\t\t\t\tk = x\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\t1.to(m - 1).anySatisfy { :r |\n\t\t\t\t\t\tr.rowContains(z)\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tz := z + 1\n\t\t\t\t};\n\t\t\t\tz\n\t\t\t}\n\t\t} {\n\t\t\tg(m.stolarskyArray(n - 1))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "subdivide",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(0, 1, _Fraction_2(1, _self));
  }, ["self"]),
  "{ :self |\n\t\tRange(0, 1, Fraction(1, self))\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "theodorusSpiral",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = 0;
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = [_sqrt_1(_i), _theta];
        /* Statements */
        _theta = _plusSign_2(_theta, _arcTan_1(_solidus_2(1, _sqrt_1(_i))));
        return _fromPolarCoordinates_1(_p);
      }, ["i"]),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet theta = 0;\n\t\t(1 .. n).collect { :i |\n\t\t\tlet p = [i.sqrt theta];\n\t\t\ttheta := theta + (1 / i.sqrt).arcTan;\n\t\t\tp.fromPolarCoordinates\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "threeDigitName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
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
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = null;
      /* Statements */
      _ifTrue_2(
        _equalsSign_2(_self, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1("");
        }, []),
      );
      _ifTrue_2(
        _greaterThanSign_2(_self, 99),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _answer = _plusSignPlusSign_2(
            _at_2(_units, _solidusSolidus_2(_self, 100)),
            " hundred",
          );
          _ifFalse_2(
            _equalsSign_2(_percentSign_2(_self, 100), 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _answer = _plusSignPlusSign_2(
                _plusSignPlusSign_2(_answer, " "),
                _threeDigitName_1(_percentSign_2(_self, 100)),
              );
            }, []),
          );
          return _return_1(_answer);
        }, []),
      );
      _ifTrue_2(
        _lessThanSign_2(_self, 20),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_at_2(_units, _self));
        }, []),
      );
      _answer = _at_2(
        _decades,
        _hyphenMinus_2(_solidusSolidus_2(_self, 10), 1),
      );
      _ifFalse_2(
        _equalsSign_2(_percentSign_2(_self, 10), 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _answer = _plusSignPlusSign_2(
            _plusSignPlusSign_2(_answer, "-"),
            _at_2(_units, _percentSign_2(_self, 10)),
          );
        }, []),
      );
      return _return_1(_answer);
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self |\n\t\tlet units = [\n\t\t\t'one', 'two', 'three', 'four', 'five',\n\t\t\t'six', 'seven', 'eight', 'nine', 'ten',\n\t\t\t'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',\n\t\t\t'sixteen', 'seventeen', 'eighteen', 'nineteen'\n\t\t];\n\t\tlet decades = [\n\t\t\t'twenty', 'thirty', 'forty', 'fifty',\n\t\t\t'sixty', 'seventy', 'eighty', 'ninety'\n\t\t];\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet answer = nil;\n\t\t\t(self = 0).ifTrue {\n\t\t\t\t''.return\n\t\t\t};\n\t\t\t(self > 99).ifTrue {\n\t\t\t\tanswer := (units[self // 100]) ++' hundred';\n\t\t\t\t((self % 100) = 0).ifFalse {\n\t\t\t\t\tanswer := answer ++ ' ' ++ (self % 100).threeDigitName\n\t\t\t\t};\n\t\t\t\tanswer.return\n\t\t\t};\n\t\t\t(self < 20).ifTrue {\n\t\t\t\tunits[self].return\n\t\t\t};\n\t\t\tanswer := decades[self // 10 - 1];\n\t\t\t((self % 10) = 0).ifFalse {\n\t\t\t\tanswer := answer ++ '-' ++ (units[self % 10])\n\t\t\t};\n\t\t\tanswer.return\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "timesRepeat",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remaining = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_remaining, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_0();
        return _remaining = _hyphenMinus_2(_remaining, 1);
      }, []),
    );
    return _self;
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tlet remaining = self;\n\t\t{\n\t\t\tremaining > 0\n\t\t}.whileTrue {\n\t\t\taBlock();\n\t\t\tremaining := remaining - 1\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "tonelliShanksAlgorithm",
  ["n", "p"],
  sl.annotateFunction(function (_n, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_legendreSymbol_2(_n, _p), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_n, _p], "tonelliShanksAlgorithm: not square");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _q = _hyphenMinus_2(_p, 1);
        let _s = 0;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isEven_1(_q);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _q = _solidus_2(_q, 2);
            return _s = _plusSign_2(_s, 1);
          }, []),
        );
        return _if_3(
          _equalsSign_2(_s, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _powerMod_3(_n, _solidus_2(_plusSign_2(_p, 1), 4), _p);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = 2;
            let _m = _s;
            let _c = null;
            let _r = null;
            let _t = null;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _lessThanSign_2(_z, _p),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _exclamationMarkEqualsSign_2(
                      _legendreSymbol_2(_z, _p),
                      -1,
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
                return _z = _plusSign_2(_z, 1);
              }, []),
            );
            _c = _powerMod_3(_z, _q, _p);
            _r = _powerMod_3(_n, _solidus_2(_plusSign_2(_q, 1), 2), _p);
            _t = _powerMod_3(_n, _q, _p);
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _exclamationMarkEqualsSign_2(
                  _percentSign_2(_hyphenMinus_2(_t, 1), _p),
                  0,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _t2 = _percentSign_2(_circumflexAccent_2(_t, 2), _p);
                let _i = 1;
                let _b = null;
                /* Statements */
                _whileTrue_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ampersand_2(
                      _lessThanSign_2(_i, _m),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _exclamationMarkEqualsSign_2(
                          _percentSign_2(_hyphenMinus_2(_t2, 1), _p),
                          0,
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
                    _t2 = _percentSign_2(_circumflexAccent_2(_t2, 2), _p);
                    return _i = _plusSign_2(_i, 1);
                  }, []),
                );
                _b = _powerMod_3(
                  _c,
                  _circumflexAccent_2(
                    2,
                    _hyphenMinus_2(_hyphenMinus_2(_m, _i), 1),
                  ),
                  _p,
                );
                _r = _percentSign_2(_asterisk_2(_r, _b), _p);
                _c = _percentSign_2(_circumflexAccent_2(_b, 2), _p);
                _t = _percentSign_2(_asterisk_2(_t, _c), _p);
                return _m = _i;
              }, []),
            );
            return _r;
          }, []),
        );
      }, []),
    );
  }, ["n", "p"]),
  "{ :n :p |\n\t\t(legendreSymbol(n, p) != 1).if {\n\t\t\t[n, p].error('tonelliShanksAlgorithm: not square')\n\t\t} {\n\t\t\tlet q = p - 1;\n\t\t\tlet s = 0;\n\t\t\t{ q.isEven }.whileTrue {\n\t\t\t\tq := q / 2;\n\t\t\t\ts := s + 1\n\t\t\t};\n\t\t\t(s = 1).if {\n\t\t\t\tpowerMod(n, (p + 1) / 4, p)\n\t\t\t} {\n\t\t\t\tlet z = 2;\n\t\t\t\tlet m = s;\n\t\t\t\tlet c = nil;\n\t\t\t\tlet r = nil;\n\t\t\t\tlet t = nil;\n\t\t\t\t{ z < p & { legendreSymbol(z, p) != -1 } }.whileTrue {\n\t\t\t\t\tz := z + 1\n\t\t\t\t};\n\t\t\t\tc := powerMod(z, q, p);\n\t\t\t\tr := powerMod(n, (q + 1) / 2, p);\n\t\t\t\tt := powerMod(n, q, p);\n\t\t\t\t{ (t - 1) % p != 0 }.whileTrue {\n\t\t\t\t\tlet t2 = (t ^ 2) % p;\n\t\t\t\t\tlet i = 1;\n\t\t\t\t\tlet b = nil;\n\t\t\t\t\t{ i < m & { (t2 - 1) % p != 0 } }.whileTrue {\n\t\t\t\t\t\tt2 := (t2 ^ 2) % p;\n\t\t\t\t\t\ti := i + 1\n\t\t\t\t\t};\n\t\t\t\t\tb := powerMod(c, 2 ^ (m - i - 1), p);\n\t\t\t\t\tr := (r * b) % p;\n\t\t\t\t\tc := (b ^ 2) % p;\n\t\t\t\t\tt := (t * c) % p;\n\t\t\t\t\tm := i\n\t\t\t\t};\n\t\t\t\tr\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "tribonacciNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _cubeRoot_1(_plusSign_2(19, _asterisk_2(3, _sqrt_1(33))));
    let _b = _cubeRoot_1(_plusSign_2(586, _asterisk_2(102, _sqrt_1(33))));
    let _c = _cubeRoot_1(_hyphenMinus_2(19, _asterisk_2(3, _sqrt_1(33))));
    let _d = _circumflexAccent_2(
      _asterisk_2(_solidus_2(1, 3), _plusSign_2(_plusSign_2(_a, _c), 1)),
      _hyphenMinus_2(_n, 1),
    );
    let _e = _plusSign_2(_hyphenMinus_2(_square_1(_b), _asterisk_2(2, _b)), 4);
    /* Statements */
    return _round_1(_asterisk_2(_asterisk_2(3, _b), _solidus_2(_d, _e)));
  }, ["n"]),
  "{ :n |\n\t\tlet a = (19 + (3 * 33.sqrt)).cubeRoot;\n\t\tlet b = (586 + (102 * 33.sqrt)).cubeRoot;\n\t\tlet c = (19 - (3 * 33.sqrt)).cubeRoot;\n\t\tlet d = ((1 / 3) * (a + c + 1)) ^ (n - 1);\n\t\tlet e = b.square - (2 * b) + 4;\n\t\t((3 * b) * (d / e)).round\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "tribonacciWords",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = [[1], [1, 2], [1, 2, 1, 3]];
    /* Statements */
    _toDo_3(
      4,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _t,
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(
              _at_2(_t, _hyphenMinus_2(_i, 1)),
              _at_2(_t, _hyphenMinus_2(_i, 2)),
            ),
            _at_2(_t, _hyphenMinus_2(_i, 3)),
          ),
        );
      }, ["i"]),
    );
    return _t;
  }, ["n"]),
  "{ :n |\n\t\tlet t = [1; 1 2; 1 2 1 3];\n\t\t4.toDo(n) { :i |\n\t\t\tt.add(t[i - 1] ++ t[i - 2] ++ t[i - 3])\n\t\t};\n\t\tt\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "tribonacciWord",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_tribonacciWords_1(_plusSign_2(_n, 1)), _plusSign_2(_n, 1));
  }, ["n"]),
  "{ :n |\n\t\t(n + 1).tribonacciWords.at(n + 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wrapIndex",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_percentSign_2(_hyphenMinus_2(_self, 1), _size), 1);
  }, ["self", "size"]),
  "{ :self :size |\n\t\tself - 1 % size + 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
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
          1,
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
  "{ :self |\n\t\t(self <= 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet f = self.fibonacciSequenceUpTo;\n\t\t\tlet k = f.size - 1;\n\t\t\tlet z = [];\n\t\t\tf.removeFirst;\n\t\t\tk.toByDo(1, -1) { :i |\n\t\t\t\tlet n = f[i];\n\t\t\t\tz.add((n <= self).if { 1 } { 0 });\n\t\t\t\t(n <= self).ifTrue {\n\t\t\t\t\tself := self - n\n\t\t\t\t}\n\t\t\t};\n\t\t\tz\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asLargerPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPowerOfTwo_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNonNegative_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _bitShiftLeft_2(1, _highBitOfPositiveReceiver_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "@Integer>>asLargerPowerOfTwo: non-positive",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.isNonNegative.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asLargerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallerPowerOfTwo_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asSmallerPowerOfTwo\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asSmallerPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPowerOfTwo_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNonNegative_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _bitShiftLeft_2(
              1,
              _hyphenMinus_2(_highBitOfPositiveReceiver_1(_self), 1),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "@Integer>>asSmallerPowerOfTwo: non-positive",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPowerOfTwo.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.isNonNegative.if {\n\t\t\t\t1.bitShiftLeft(self.highBitOfPositiveReceiver - 1)\n\t\t\t} {\n\t\t\t\tself.error('@Integer>>asSmallerPowerOfTwo: non-positive')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "isPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _exclamationMarkEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_bitAnd_2(_self, _hyphenMinus_2(_self, 1)), 0);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself != 0 & {\n\t\t\tself.bitAnd(self - 1) = 0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "digitAt",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
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
        return _if_3(
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(-256, _bitAnd_2(_self, 255));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _bitAnd_2(_self, 255);
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
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _digitAt_2(
              _plusSign_2(_hyphenMinus_2(-256, _bitShift_2(_self, -8)), 1),
              _hyphenMinus_2(_n, 1),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _bitAnd_2(
              _bitShift_2(_self, _hyphenMinus_2(8, _bitShift_2(_n, 3))),
              255,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\t(n = 1).if {\n\t\t\t(self < 0).if {\n\t\t\t\t-256 - self.bitAnd(255)\n\t\t\t} {\n\t\t\t\tself.bitAnd(255)\n\t\t\t}\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\t(-256 - self.bitShift(-8) + 1).digitAt(n - 1)\n\t\t\t} {\n\t\t\t\tself.bitShift(8 - n.bitShift(3)).bitAnd(255)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "digitLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _value = _self;
    let _length = 1;
    /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_value, -255),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _length = 2;
        return _value = _plusSign_2(
          _hyphenMinus_2(-256, _bitShift_2(_self, -8)),
          1,
        );
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_value, 255);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _value = _bitShift_2(_value, -8);
        return _length = _plusSign_2(_length, 1);
      }, []),
    );
    return _length;
  }, ["self"]),
  "{ :self |\n\t\tlet value = self;\n\t\tlet length = 1;\n\t\t(value < -255).ifTrue {\n\t\t\tlength := 2;\n\t\t\tvalue := (-256 - self.bitShift(-8)) + 1\n\t\t};\n\t\t{\n\t\t\tvalue > 255\n\t\t}.whileTrue {\n\t\t\tvalue := value.bitShift(-8);\n\t\t\tlength := length + 1\n\t\t};\n\t\tlength\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Integer",
  "isScalarInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isNumber_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNumber & {\n\t\t\tself.isInteger\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Integer",
  "conjugatePartition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _j = _size_1(_self);
    let _done = false;
    /* Statements */
    _if_3(
      _lessThanSignEqualsSign_2(_j, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _done;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _j);
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _not_1(_done),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSignEqualsSign_2(
                      _size_1(_answer),
                      _at_2(_self, _j),
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
                _j = _hyphenMinus_2(_j, 1);
                return _ifTrue_2(
                  _equalsSign_2(_j, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _done = true;
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet j = self.size;\n\t\tlet done = false;\n\t\t(j <= 0).if {\n\t\t\tanswer\n\t\t} {\n\t\t\t{\n\t\t\t\tdone\n\t\t\t}.whileFalse {\n\t\t\t\tanswer.add(j);\n\t\t\t\t{\n\t\t\t\t\tdone.not & {\n\t\t\t\t\t\tanswer.size >= self[j]\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tj := j - 1;\n\t\t\t\t\t(j = 0).ifTrue {\n\t\t\t\t\t\tdone := true\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Integer",
  "ferrersDiagram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_self);
    /* Statements */
    return _LineDrawing_1(
      _collect_2(
        _upOrDownTo_2(0, _hyphenMinus_2(_m, 1)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _upOrDownTo_2(1, _at_2(_self, _hyphenMinus_2(_m, _i))),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _Disk_2([_j, _i], 0.25);
            }, ["j"]),
          );
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.size;\n\t\t(0 .. m - 1).collect { :i |\n\t\t\t(1 .. self[m - i]).collect { :j |\n\t\t\t\tDisk([j, i], 0.25)\n\t\t\t}\n\t\t}.LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Integer",
  "isAmicablePair",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_self, 2);
    let _m = _at_2(__SplVar10, 1);
    let _n = _at_2(__SplVar10, 2);
    /* Statements */
    return _isAmicablePair_2(_m, _n);
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self;\n\t\tisAmicablePair(m, n)\n\t}",
);
