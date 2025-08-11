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
  "{ :x :b | -(size(second(digitalRootSet(x,b))), 1) }",
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
  "{ :n | sum(allButLast(divisors(n))) }",
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
  "{ :self | if(isZero(self), { 0 }, { if(isOne(self), { 1 }, { error(self,'asBit') }) }) }",
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
  "{ :self | self }",
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
  "{ :self | at('0123456789ABCDEF', +(self, 1)) }",
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
  "{ :self :origin | if(isInteger(self), { self }, { error(self,++('Not an integer: ', origin)) }) }",
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
  "{ :self :origin | if(isPositiveInteger(self), { self }, { error(self,++('Not a positive integer: ', origin)) }) }",
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
  "{ :self :origin | if(isPositiveOddInteger(self), { self }, { error(self,++('Not a positive odd integer: ', origin)) }) }",
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
            return _num = _negated_1(_self);
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
  "{ :self | let mils = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion', ' duodecillion', ' tredecillion', ' quattuordecillion', ' quindecillion', ' sexdecillion', ' septendecillion', ' octodecillion', ' novemdecillion', ' vigintillion']; if((=(self, 0)), { 'zero' }, { let minus = ''; let three = nil; let num = self; let answer = ''; let milCount = 1; ifTrue((<(self, 0)), { minus := 'negative '; num := negated(self) }); whileTrue({ >(num, 0) }, { three := threeDigitName((%(num, 1000))); num := //(num, 1000); ifFalse(isEmpty(three), { ifFalse(isEmpty(answer), { answer := ++(', ', answer) }); answer := ++(++(three, at(mils, milCount)), answer) }); milCount := +(milCount, 1) }); ++(minus, answer) }) }",
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
  "{ :d :n :x | x := clip(x,[0, 1]); *(*(binomial(d,n), (^(x, n))), (^((-(1, x)), (-(d, n))))) }",
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
  "{ :n | let z = sqrt(5); /(-((^((+(1, z)), n)), (^((-(1, z)), n))), (*(^(2, n), z))) }",
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
  "{ :self | integerLength(self,2) }",
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
  "{ :k :n :aBlock:/1 | let s = collect(Span(1, n, 1), { :i | if((<=(i, k)), { [1] }, { [0] }) }); let d = -(n, k); let z = d; aBlock(s); n := max(k,d); k := min(k,d); whileTrue({ |(>(z, 0), { >(k, 1) }) }, { do(Span(1, k, 1), { :i | addAll(at(s, i),at(s, +(-(size(s), i), 1))) }); removeLast(s,k); aBlock(s); z := -(z, k); d := -(n, k); n := max(k,d); k := min(k,d) }); flatten(s) }",
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
  "{ :k :n | bjorklundsAlgorithmDo(k, n, { :each | nil }) }",
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
  "{ :self :anInteger | collect(upOrDownTo(self, anInteger),asCharacter:/1) }",
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
  "{ :n :m | combinations(upOrDownTo(1, n),m) }",
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
  "{ :self :modulus | %(self, modulus) }",
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
  "{ :self | 1 }",
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
    return _Tuple_1([_x, _seen]);
  }, ["x", "b"]),
  "{ :x :b | let digitSum = { :x :b | let total = 0; whileTrue({ >(x, 0) }, { total := +(total, (%(x, b))); x := //(x, b) }); total }; let seen = IdentitySet(); whileFalse({ includes(seen,x) }, { add(seen,x); x := digitSum(x, b) }); Tuple([x, seen]) }",
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
  "{ :x :b | first(digitalRootSet(x,b)) }",
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
  "{ :n :b :d | count(integerDigits(n,b), { :each | =(each, d) }) }",
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
  "{ :n :b | let digits = integerDigits(n,b); collect(upOrDownTo((-(b, 1)), 0), { :d | count(digits, { :each | =(each, d) }) }) }",
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
  "{ :self :aNumber | dividesImmediately(Fraction(self, 1),Fraction(aNumber, 1)) }",
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
  "{ :self :aBlock:/1 | sum(collect(divisors(self),aBlock:/1)) }",
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
      _squared_1(_u),
    );
  }, ["x"]),
  "{ :x | let u = floor(sqrt(x)); -(*(2, sum(upOrDownTo(1, u), { :k | floor((/(x, k))) })), squared(u)) }",
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
  "{ :self | select(to(1,self), { :each | =(\\\\(self, each), 0) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "dyckWords",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
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
          _plusSignPlusSign_2(_x, [0]),
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
          _plusSignPlusSign_2(_x, [1]),
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
    return _f_4([0], 1, 1, 0);
  }, ["n"]),
  "{ :n | let f = { :x :i :n0 :n1 | let d0 = { f(++(x, [0]), +(i, 1), +(n0, 1), n1) }; let d1 = { f(++(x, [1]), +(i, 1), n0, +(n1, 1)) }; if((&&(&&((<(n0, n)), (<(n1, n))), (>(n0, n1)))), { ++(d0(), d1()) }, { if((||((&&(&&((<(n0, n)), (<(n1, n))), (=(n0, n1)))), (&&((<(n0, n)), (=(n1, n)))))), { d0() }, { if((&&((=(n0, n)), (<(n1, n)))), { d1() }, { if((&&((=(n0, n1)), (=(n1, n)))), { [x] }, { error(n,'Integer>>dyckWords') }) }) }) }) }; f([0], 1, 1, 0) }",
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
  "{ :ruleNumber :initialState :stepLimit | let stateSize = size(initialState); let ruleTable = integerDigits(ruleNumber,2, 8); let stepCount = 0; let answer = [initialState]; let previousState = initialState; whileTrue({ <(stepCount, stepLimit) }, { let nextState = collect(upOrDownTo(1, stateSize), { :i | let j = [-(i, 1), i, +(i, 1)]; let k = fromDigits(atAllWrap(previousState,j),2); at(ruleTable, -(8, k)) }); add(answer,nextState); previousState := nextState; stepCount := +(stepCount, 1) }); answer }",
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
        return _tildeEqualsSign_2(_b, 0);
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
  "{ :a :b | whileTrue({ ~=(b, 0) }, { let t = b; b := %(a, b); a := t }); a }",
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
    let _a = _asterisk_2(_k, _hyphenMinus_2(_squared_1(_m), _squared_1(_n)));
    let _b = _asterisk_2(_asterisk_2(_asterisk_2(_k, 2), _m), _n);
    let _c = _asterisk_2(_k, _plusSign_2(_squared_1(_m), _squared_1(_n)));
    /* Statements */
    return [_a, _b, _c];
  }, ["m", "n", "k"]),
  "{ :m :n :k | let a = *(k, (-(squared(m), squared(n)))); let b = *(*(*(k, 2), m), n); let c = *(k, (+(squared(m), squared(n)))); [a, b, c] }",
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
  "{ :m :n | euclidsFormula(m, n, 1) }",
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
  "{ :self | if(isZero(self), { 0 }, { let l = if(isNegative(self), { toBy(-1,self, -1) }, { to(1,self) }); size(select(l, { :each | =(gcd(self,each), 1) })) }) }",
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
    let __SPL1 = _assertIsOfSize_2([_a, _b], 2);
    let _r0 = _at_2(__SPL1, 1);
    let _r = _at_2(__SPL1, 2);
    let __SPL2 = _assertIsOfSize_2([1, 0], 2);
    let _s0 = _at_2(__SPL2, 1);
    let _s = _at_2(__SPL2, 2);
    let __SPL3 = _assertIsOfSize_2([0, 1], 2);
    let _t0 = _at_2(__SPL3, 1);
    let _t = _at_2(__SPL3, 2);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tildeEqualsSign_2(_r, 0);
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
          let __SPL4 = [_r, _hyphenMinus_2(_r0, _asterisk_2(_quotient, _r))];
          /* Statements */
          _r0 = _at_2(__SPL4, 1);
          return _r = _at_2(__SPL4, 2);
        }, [])();
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL5 = [_s, _hyphenMinus_2(_s0, _asterisk_2(_quotient, _s))];
          /* Statements */
          _s0 = _at_2(__SPL5, 1);
          return _s = _at_2(__SPL5, 2);
        }, [])();
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL6 = [_t, _hyphenMinus_2(_t0, _asterisk_2(_quotient, _t))];
          /* Statements */
          _t0 = _at_2(__SPL6, 1);
          return _t = _at_2(__SPL6, 2);
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
  "{ :a :b | let __SPL1 = assertIsOfSize([a, b], 2); let r0 = at(__SPL1, 1); let r = at(__SPL1, 2); let __SPL2 = assertIsOfSize([1, 0], 2); let s0 = at(__SPL2, 1); let s = at(__SPL2, 2); let __SPL3 = assertIsOfSize([0, 1], 2); let t0 = at(__SPL3, 1); let t = at(__SPL3, 2); whileTrue({ ~=(r, 0) }, { let quotient = //(r0, r); ({ let __SPL4 = [r, -(r0, (*(quotient, r)))]; r0 := at(__SPL4, 1); r := at(__SPL4, 2) } . ()); ({ let __SPL5 = [s, -(s0, (*(quotient, s)))]; s0 := at(__SPL5, 1); s := at(__SPL5, 2) } . ()); ({ let __SPL6 = [t, -(t0, (*(quotient, t)))]; t0 := at(__SPL6, 1); t := at(__SPL6, 2) } . ()) }); if((<(r0, 0)), { [-(r0), -([s0, t0])] }, { [r0, [s0, t0]] }) }",
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
  "{ :self :anInteger | extendedEuclideanAlgorithm(self,anInteger) }",
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
  "{ :self | -(+(2, floor(goldenRatio(self))), floor(goldenRatio((+(self, 1))))) }",
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
  "{ :self :size | fold(self,1, size) }",
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
  "{ :self :anInteger | if(isScalarInteger(anInteger), { let a = abs(self); let b = abs(anInteger); whileFalse({ =(b, 0) }, { let r = %(a, b); a := b; b := r }); a }, { adaptToNumberAndApply(anInteger,self, gcd:/2) }) }",
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
              _basicInclude_2(_answer, _n);
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
  "{ :self :limit | let answer = IdentitySet(); let step = { :n | ifTrue((<=(n, limit)), { ifFalse(includes(answer,n), { basicInclude(answer,n); step(*(n, 2)); step(*(n, 3)); step(*(n, 5)) }) }) }; step(self); contents(asSortedList(answer)) }",
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
  "{ :self | digitCount(self,2, 1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsDo",
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
  "{ :n :k :aBlock:/1 | ifFalse((<(n, k)), { let a = List(k, 1); atPut(a, k, +(-(n, k), 1)); aBlock(a); whileFalse({ =(at(a, 1), (+(-(n, k), 1))) }, { let last = k; let z = nil; whileTrue({ =(at(a, last), 1) }, { last := -(last, 1) }); z := at(a, last); atPut(a, -(last, 1), +(at(a, -(last, 1)), 1)); atPut(a, last, 1); atPut(a, k, -(z, 1)); aBlock(a) }) }) }",
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
    return _do_2(
      _Span_3(1, _n, 1),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerCompositionsDo_3(_n, _k, _aBlock_1);
      }, ["k"]),
    );
  }, ["n", "aBlock:/1"]),
  "{ :n :aBlock:/1 | do(Span(1, n, 1), { :k | integerCompositionsDo(n,k, aBlock:/1) }) }",
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
  "{ :n :k | let answer = []; integerCompositionsDo(n, k, { :each | add(answer,copy(each)) }); answer }",
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
  "{ :n | let answer = []; integerCompositionsDo(n, { :each | add(answer,copy(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeakDo",
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
  "{ :n :k :aBlock:/1 | let a = List(k, 0); atPut(a, k, n); aBlock(a); whileFalse({ =(at(a, 1), n) }, { let last = k; let z = nil; whileTrue({ =(at(a, last), 0) }, { last := -(last, 1) }); z := at(a, last); atPut(a, -(last, 1), +(at(a, -(last, 1)), 1)); atPut(a, last, 0); atPut(a, k, -(z, 1)); aBlock(a) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeak",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsWeakDo_3(
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
  "{ :n :k | let answer = []; integerCompositionsWeakDo(n, k, { :each | add(answer,copy(each)) }); answer }",
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
  "{ :self :base :numDigits :aBlock:/1 | let num = abs(self); timesRepeat(numDigits, { aBlock(%(num, base)); num := //(num, base) }) }",
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
  "{ :self :base :numDigits | let answer = []; integerDigitsReverseDo(self, base, numDigits, { :each | addFirst(answer,each) }); answer }",
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
              _asInteger_1(
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
  "{ :self :base | assertIsInteger(self,'@Integer>>integerDigits'); if(isScalarInteger(base), { let numDigits = if(isZero(self), { 1 }, { +(asInteger((+(/(log(abs(self)), log(base)), 0.0000000001))), 1) }); integerDigits(self,base, numDigits) }, { adaptToNumberAndApply(base,self, integerDigits:/2) }) }",
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
  "{ :self | integerDigits(self,10) }",
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
  "{ :n :b | let answer = 0; whileTrue({ divisible(n,^(b, (+(answer, 1)))) }, { answer := +(answer, 1) }); answer }",
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
        } /* Statements */
        return _plusSign_2(_floor_1(_log_2(_abs_1(_self), _radix)), 1);
      }, []),
    );
  }, ["self", "radix"]),
  "{ :self :radix | if(isZero(self), { 0 }, { +(floor(log(abs(self),radix)), 1) }) }",
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
        return _tildeEqualsSign_2(_k, _n);
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
  "{ :self :aBlock:/1 | let n = self; let d = List(n, 1); let k = 1; atPut(d, 1, n); aBlock(copyFromTo(d,1, 1)); whileTrue({ ~=(k, n) }, { let l = k; let m = at(d, k); let nPrime = nil; whileTrue({ =(m, 1) }, { k := -(k, 1); m := at(d, k) }); nPrime := -(+(m, l), k); m := -(m, 1); whileTrue({ <(m, nPrime) }, { atPut(d, k, m); nPrime := -(nPrime, m); k := +(k, 1) }); atPut(d, k, nPrime); aBlock(copyFromTo(d,1, k)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(
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
  "{ :self | let answer = []; integerPartitionsDescendingDo(self, { :each | add(answer,each) }); answer }",
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
        return _tildeEqualsSign_2(_k, 1);
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
  "{ :self :aBlock:/1 | let n = self; let a = List(n, 0); let k = 2; let y = -(n, 1); whileTrue({ ~=(k, 1) }, { var x, l;k := -(k, 1); x := +(at(a, k), 1); whileTrue({ <=((*(2, x)), y) }, { atPut(a, k, x); y := -(y, x); k := +(k, 1) }); l := +(k, 1); whileTrue({ <=(x, y) }, { atPut(a, k, x); atPut(a, l, y); aBlock(copyFromTo(a,1, l)); x := +(x, 1); y := -(y, 1) }); y := -(+(y, x), 1); atPut(a, k, +(y, 1)); aBlock(copyFromTo(a,1, k)) }) }",
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
  "{ :self | let answer = []; integerPartitionsAscendingDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
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
  "{ :j :i | let f = { :t :m :n | if((&(=(m, 1), { =(t, n) })), { [[t]] }, { if((|(<(n, m), { |(<(n, 1), { |(<(m, 1), { <(t, 1) }) }) })), { [] }, { ++(collect(f(t, -(m, 1), -(n, t)), { :r | (++([t], r)) }), f(-(t, 1), m, n)) }) }) }; f(+(-(j, i), 1), i, j) }",
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
        return _integerPartitions_2(_n, _k);
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n | collectCatenate(Span(1, n, 1), { :k | integerPartitions(n,k) }) }",
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
  "{ :self | if((<(self, 0)), { error(self,'integerSquareRoot: negative') }, { let x = self; let z = self; let r = zero(self); let q = one(self); whileTrue({ <=(q, x) }, { q := bitShiftLeft(q,2) }); whileTrue({ >(q, 1) }, { let t = -(x, r); q := bitShiftRight(q,2); t := -(t, q); r := bitShiftRight(r,1); ifTrue((>=(t, 0)), { x := t; r := +(r, q) }) }); r }) }",
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
  "{ :n | >(sum(divisors(n)), (*(2, n))) }",
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
  "{ :m :n | &(=(sum(allButLast(divisors(m))), n), { =(sum(allButLast(divisors(n))), m) }) }",
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
      _greaterThanSign_2(_n, 224403121196654400),
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
          224403121196654400,
        ], _n);
      }, []),
    );
  }, ["n"]),
  "{ :n | if((>(n, 224403121196654400)), { error(n,'isColossallyAbundantNumber: domain error') }, { includes([2, 6, 12, 60, 120, 360, 2520, 5040, 55440, 720720, 1441440, 4324320, 21621600, 367567200, 6983776800, 160626866400, 321253732800, 9316358251200, 288807105787200, 2021649740510400, 6064949221531200, 224403121196654400],n) }) }",
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
  "{ :n | <(sum(divisors(n)), (*(2, n))) }",
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
  "{ :n | let k = sum(divisors(n)); allSatisfy(to(1,-(n, 1)), { :i | >(k, sum(divisors(i))) }) }",
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
  "{ :self | &(isInteger(self), { betweenAnd(self,0, 255) }) }",
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
  "{ :self | let n = divisorSigma(0,self); allSatisfy(to(1,-(self, 1)), { :each | >(n, divisorSigma(0,each)) }) }",
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
  "{ :self | typeResponsibility(self,'@Integer>>isInteger') }",
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
  "{ :self | =(sum(allButLast(divisors(self))), self) }",
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
  "{ :self | &((>=(self, 4)), { let alpha = values(factorInteger(self)); >(gcd(alpha), 1) }) }",
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
  "{ :self | isInteger(sqrt(self)) }",
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
  "{ :self | &(isInteger(self), { isPositive(self) }) }",
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
  "{ :self | &(isPositiveInteger(self), { =(%(self, 2), 1) }) }",
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
  "{ :n | &(isAbundantNumber(n), { allSatisfy(allButLast(divisors(n)),isDeficientNumber:/1) }) }",
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
                  _plusSign_2(_squared_1(_a), _squared_1(_b)),
                  _squared_1(_c),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c | &(allSatisfy([a, b, c],isInteger:/1), { &(isCoprime(a,b), { &(=(sum(boole(collect([a, b],isOdd:/1))), 1), { =((+(squared(a), squared(b))), squared(c)) }) }) }) }",
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
      _sqrt_1(_plusSign_2(_squared_1(_a), _squared_1(_b))),
    );
  }, ["a", "b"]),
  "{ :a :b | isPrimitivePythagoreanTriple(a, b, sqrt((+(squared(a), squared(b))))) }",
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
  "{ :self | let x = floor(sqrt(self)); =(self, (*(x, (+(x, 1))))) }",
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
  "{ :self | anySatisfy(powerSet(allButLast(divisors(self))), { :each | =(sum(each), self) }) }",
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
          _plusSign_2(_squared_1(_a), _squared_1(_b)),
          _squared_1(_c),
        );
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c | &(allSatisfy([a, b, c],isInteger:/1), { =((+(squared(a), squared(b))), squared(c)) }) }",
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
      _sqrt_1(_plusSign_2(_squared_1(_a), _squared_1(_b))),
    );
  }, ["a", "b"]),
  "{ :a :b | isPythagoreanTriple(a, b, sqrt((+(squared(a), squared(b))))) }",
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
  "{ :self | <=(primeLimit(self), 5) }",
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
  "{ :self :k | allSatisfy(primeFactors(self), { :each | >=(each, k) }) }",
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
  "{ :self :k | <=(primeLimit(self), k) }",
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
  "{ :self | &(isSquareFree(self), { isAlmostPrime(self,3) }) }",
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
  "{ :self | if(isZero(self), { false }, { noneSatisfy(allButFirst(divisors(abs(self))),isPerfectSquare:/1) }) }",
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
  "{ :self | allSatisfy(select(factorInteger(self), { :each | =((%(key(each), 4)), 3) }), { :each | isEven(value(each)) }) }",
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
  "{ :n | let x = /(sum(divisors(n)), n); allSatisfy(to(1,-(n, 1)), { :k | let y = /(sum(divisors(k)), k); >(x, y) }) }",
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
  "{ :n | if((>(n, 6064949221531200)), { error(n,'isSuperiorHighlyCompositeNumber: domain error') }, { includes([2, 6, 12, 60, 120, 360, 2520, 5040, 55440, 720720, 1441440, 4324320, 21621600, 367567200, 6983776800, 13967553600, 321253732800, 2248776129600, 65214507758400, 195643523275200, 6064949221531200],n) }) }",
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
  "{ :self | &(isAbundantNumber(self), { not(isPseudoperfectNumber(self)) }) }",
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
  "{ :a :n | if(isOdd(n), { product(collect(factorInteger(n), { :each | ^(legendreSymbol(a,key(each)), value(each)) })) }, { error([a, n],'jacobiSymbol: even n?') }) }",
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
  "{ :a :b | if(isPositive(b), { if(isOdd(b), { jacobiSymbol(a,b) }, { if(isEven(a), { 0 }, { let r = %(a, 8); if((|(=(r, 1), { =(r, 7) })), { kroneckerSymbol(a,//(b, 2)) }, { -(0, kroneckerSymbol(a,//(b, 2))) }) }) }) }, { if(isNegative(b), { if(isNegative(a), { -(0, kroneckerSymbol(a,-(0, b))) }, { kroneckerSymbol(a,-(0, b)) }) }, { boole((=(abs(a), 1))) }) }) }",
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
  "{ :self :anInteger | if(isScalarInteger(anInteger), { let a = self; let b = anInteger; if((|(=(a, 0), { =(b, 0) })), { 0 }, { let ab = *(a, b); whileFalse({ =(b, 0) }, { let tmp = b; b := %(a, tmp); a := tmp }); abs((/(ab, a))) }) }, { adaptToNumberAndApply(anInteger,self, lcm:/2) }) }",
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
  "{ :a :p | let e = //((-(p, 1)), 2); let r = powerMod(a, e, p); if((>(r, 1)), { -(r, p) }, { r }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lowerChristoffelWord",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCoprime_2(_a, _b),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "lowerChristoffelWord: not coprime");
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b | if(isCoprime(a,b), {  }, { error(self,'lowerChristoffelWord: not coprime') }) }",
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
  "{ :self :modulus | let p = %(self, modulus); let q = -(p, modulus); if((<(p, abs(q))), { p }, { q }) }",
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
  "{ :self :factors | let answer = List(size(factors)); toByDo(size(factors), 1, -1, { :index | atPut(answer, index, %(self, at(factors, index))); self := //(self, at(factors, index)) }); ifTrue((>(self, 0)), { addFirst(answer,self) }); answer }",
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
        return _negated_1(_n);
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
          _hyphenMinus_2(_n, _percentSign_2(_negated_1(_a), _n)),
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
        return _tildeEqualsSign_2(_r1, 0);
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
          let __SPL7 = [_t1, _hyphenMinus_2(_t, _asterisk_2(_quotient, _t1))];
          /* Statements */
          _t = _at_2(__SPL7, 1);
          return _t1 = _at_2(__SPL7, 2);
        }, [])();
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL8 = [_r1, _hyphenMinus_2(_r, _asterisk_2(_quotient, _r1))];
          /* Statements */
          _r = _at_2(__SPL8, 1);
          return _r1 = _at_2(__SPL8, 2);
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
        return _if_3(
          _lessThanSign_2(_t, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_t, _n);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _t;
          }, []),
        );
      }, []),
    );
  }, ["a", "n"]),
  "{ :a :n | let t = 0; let t1 = 1; let r = if((<(n, 0)), { negated(n) }, { n }); let r1 = if((<(a, 0)), { %((-(n, (%(negated(a), n)))), n) }, { %(a, n) }); whileTrue({ ~=(r1, 0) }, { let quotient = //(r, r1); ({ let __SPL7 = [t1, -(t, (*(quotient, t1)))]; t := at(__SPL7, 1); t1 := at(__SPL7, 2) } . ()); ({ let __SPL8 = [r1, -(r, (*(quotient, r1)))]; r := at(__SPL8, 1); r1 := at(__SPL8, 2) } . ()) }); if((>(r, 1)), { error('@Integer>>modularInverse: not invertible') }, { if((<(t, 0)), { +(t, n) }, { t }) }) }",
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
  "{ :k :n :r | if((=(n, 1)), { 1 }, { if(isCoprime(k,n), { let m = one(k); whileFalse({ includes(r,%(^(k, m), n)) }, { m := +(m, 1) }); m }, { nil }) }) }",
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
  "{ :k :n | multiplicativeOrder(k,n, [1]) }",
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
    return _solidus_2(
      _factorial_1(_hyphenMinus_2(_n, 1)),
      _asterisk_2(
        _factorial_1(_hyphenMinus_2(_k, 1)),
        _factorial_1(_hyphenMinus_2(_n, _k)),
      ),
    );
  }, ["n", "k"]),
  "{ :n :k | /(factorial((-(n, 1))), (*(factorial((-(k, 1))), factorial((-(n, k)))))) }",
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
    return _solidus_2(
      _factorial_1(_hyphenMinus_2(_plusSign_2(_n, _k), 1)),
      _asterisk_2(_factorial_1(_n), _factorial_1(_hyphenMinus_2(_k, 1))),
    );
  }, ["n", "k"]),
  "{ :n :k | /(factorial((-(+(n, k), 1))), (*(factorial(n), factorial((-(k, 1)))))) }",
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
        return _numberOfDigitsInBase_2(_negated_1(_self), _radix);
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
  "{ :self :radix | if(isNegative(self), { numberOfDigitsInBase(negated(self),radix) }, { if((<(self, radix)), { 1 }, { if(isPowerOfTwo(radix), { quotient((-(+(highBit(self), highBit(radix)), 2)),-(highBit(radix), 1)) }, { let q = self; let total = 0; whileFalse({ let nDigits = if((=(radix, 10)), { +((>>(*((-(highBit(q), 1)), 1233), 12)), 1) }, { quotient(highBit(q),highBit(radix)) }); total := +(total, nDigits); q := quotient(q,raisedToInteger(radix,nDigits)); (<(q, radix)) }); if((=(q, 0)), { total }, { +(total, 1) }) }) }) }) }",
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
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "partitionFunctionP",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_plusSign_2(_n, 1));
    /* Statements */
    _atPut_3(_a, 1, 1n);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = 1;
        let _s = 1;
        /* Statements */
        _atPut_3(_a, _plusSign_2(_i, 1), 0n);
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_s, _i);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(
              _isOdd_1(_k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _a,
                  _plusSign_2(_i, 1),
                  _plusSign_2(
                    _at_2(_a, _plusSign_2(_i, 1)),
                    _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
                  ),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _a,
                  _plusSign_2(_i, 1),
                  _hyphenMinus_2(
                    _at_2(_a, _plusSign_2(_i, 1)),
                    _at_2(_a, _plusSign_2(_hyphenMinus_2(_i, _s), 1)),
                  ),
                );
              }, []),
            );
            return _if_3(
              _greaterThanSign_2(_k, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _s = _plusSign_2(_s, _k);
                return _k = _hyphenMinus_1(_k);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _k = _hyphenMinus_2(1, _k);
                return _s = _solidus_2(
                  _asterisk_2(_k, _hyphenMinus_2(_asterisk_2(3, _k), 1)),
                  2,
                );
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _at_2(_a, _plusSign_2(_n, 1));
  }, ["n"]),
  "{ :n | let a = List(+(n, 1)); atPut(a, 1, 1L); toDo(1, n, { :i | let k = 1; let s = 1; atPut(a, +(i, 1), 0L); whileTrue({ <=(s, i) }, { if(isOdd(k), { atPut(a, +(i, 1), +(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }, { atPut(a, +(i, 1), -(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }); if((>(k, 0)), { s := +(s, k); k := -(k) }, { k := -(1, k); s := /(*(k, (-(*(3, k), 1))), 2) }) }) }); at(a, +(n, 1)) }",
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
  "{ :n | at([6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128L, 2658455991569831744654692615953842176L, 191561942608236107294793378084303638130997321548169216L],n) }",
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
  "{ :self :modulus | let n = %(self, modulus); if(isZero(n), { modulus }, { n }) }",
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
  "{ :self :radix | if((=(radix, 10)), { basicPrintString(self,10) }, { let unsignedAnswer = format('%r%',[basicPrintString(radix,10), basicPrintString(abs(self),radix)]); if(isNegative(self), { ++('-', unsignedAnswer) }, { unsignedAnswer }) }) }",
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
  "{ :self | printString(self,10) }",
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
  "{ :self | printString(self,16) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printStringRoman",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asciiStringStreamContents_1(sl.annotateFunction(function (_stream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _stream";
        throw new Error(errorMessage);
      } /* Statements */
      return _romanDigitsOn_2(_self, _stream);
    }, ["stream"]));
  }, ["self"]),
  "{ :self | asciiStringStreamContents({ :stream | romanDigitsOn(self, stream) }) }",
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
  "{ :n | let a = *(Fraction(65L, 756L), divisorSigma(11, n)); let b = *(Fraction(691L, 756L), divisorSigma(5, n)); let c = *(Fraction(691L, 3L), sum(upOrDownTo(1, -(n, 1)), { :k | *(divisorSigma(5, k), divisorSigma(5, -(n, k))) })); -(+(a, b), c) }",
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
  "{ :self | select(to(0,-(self, 1)), { :each | isCoprime(each,self) }) }",
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
  "{ :self :digits :base :aStream | let n = //(%(self, (*(base, 10))), base); if((=(n, 9)), { nextPutAll(aStream,[last(digits), first(digits)]) }, { if((=(n, 4)), { nextPutAll(aStream,[last(digits), second(digits)]) }, { ifTrue((>(n, 4)), { nextPut(aStream,second(digits)) }); timesRepeat((%(n, 5)), { nextPut(aStream,last(digits)) }) }) }) }",
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
        return _negated_1(_self);
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
  "{ :self :aStream | let integer = if(isNegative(self), { nextPut(aStream,asciiValue('-')); negated(self) }, { self }); timesRepeat((//(integer, 1000)), { nextPut(aStream,asciiValue('M')) }); romanDigitsForOn(integer,asciiByteArray('MDC'), 100, aStream); romanDigitsForOn(integer,asciiByteArray('CLX'), 10, aStream); romanDigitsForOn(integer,asciiByteArray('XVI'), 1, aStream) }",
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
  "{ :n | let b = integerDigits(n,2); let k = size(b); ^(-1, sum(to(1,-(k, 1)), { :i | *(at(b, i), at(b, +(i, 1))) })) }",
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
  "{ :n | integerExponent((*(2, n)),2) }",
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
  "{ :n | /((*(*(n, (+(n, 1))), (+((*(2, n)), 1)))), 6) }",
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
  "{ :d :n | if((=(n, 0)), { 1 }, { caseOf(d, [->(2, { let f = { :c | count(divisors(n), { :x | =((%(x, 4)), c) }) }; *(4, (-(f(1), f(3)))) }), ->(4, { *(8, sum(select(divisors(n), { :x | not(divisible(x,4)) }))) })], { error(d,'squaresR: d≠{2,4}') }) }) }",
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
  "{ :m :n | let phi = goldenRatio(1); let g = { :x | floor((+(*(x, phi), 0.5))) }; if((=(n, 1)), { if((=(m, 1)), { 1 }, { let z = +(stolarskyArray((-(m, 1)),1), 1); let rowContains = { :r :x | let k = stolarskyArray(r,1); whileTrue({ <(k, x) }, { k := g(k) }); =(k, x) }; whileTrue({ anySatisfy(to(1,-(m, 1)), { :r | rowContains(r,z) }) }, { z := +(z, 1) }); z }) }, { g(stolarskyArray(m,-(n, 1))) }) }",
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
  "{ :self | Range(0, 1, Fraction(1, self)) }",
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
  "{ :n | let theta = 0; collect(upOrDownTo(1, n), { :i | let p = [sqrt(i), theta]; theta := +(theta, arcTan((/(1, sqrt(i))))); fromPolarCoordinates(p) }) }",
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
  "{ :self | let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; valueWithReturn({ :return:/1 | let answer = nil; ifTrue((=(self, 0)), { return('') }); ifTrue((>(self, 99)), { answer := ++((at(units, //(self, 100))), ' hundred'); ifFalse((=((%(self, 100)), 0)), { answer := ++(++(answer, ' '), threeDigitName((%(self, 100)))) }); return(answer) }); ifTrue((<(self, 20)), { return(at(units, self)) }); answer := at(decades, -(//(self, 10), 1)); ifFalse((=((%(self, 10)), 0)), { answer := ++(++(answer, '-'), (at(units, %(self, 10)))) }); return(answer) }) }",
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
  "{ :self :aBlock:/0 | let remaining = self; whileTrue({ >(remaining, 0) }, { aBlock(); remaining := -(remaining, 1) }); self }",
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
    let _e = _plusSign_2(_hyphenMinus_2(_squared_1(_b), _asterisk_2(2, _b)), 4);
    /* Statements */
    return _rounded_1(_asterisk_2(_asterisk_2(3, _b), _solidus_2(_d, _e)));
  }, ["n"]),
  "{ :n | let a = cubeRoot((+(19, (*(3, sqrt(33)))))); let b = cubeRoot((+(586, (*(102, sqrt(33)))))); let c = cubeRoot((-(19, (*(3, sqrt(33)))))); let d = ^((*((/(1, 3)), (+(+(a, c), 1)))), (-(n, 1))); let e = +(-(squared(b), (*(2, b))), 4); rounded((*((*(3, b)), (/(d, e))))) }",
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
  "{ :n | let t = [[1], [1, 2], [1, 2, 1, 3]]; toDo(4, n, { :i | add(t,++(++(at(t, -(i, 1)), at(t, -(i, 2))), at(t, -(i, 3)))) }); t }",
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
  "{ :n | at(tribonacciWords((+(n, 1))),+(n, 1)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "truncated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
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
  "{ :self :size | +(%(-(self, 1), size), 1) }",
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
  "{ :self | if((<=(self, 0)), { [0] }, { let f = fibonacciSequenceUpTo(self); let k = -(size(f), 1); let z = []; removeFirst(f); toByDo(k, 1, -1, { :i | let n = at(f, i); add(z,if((<=(n, self)), { 1 }, { 0 })); ifTrue((<=(n, self)), { self := -(self, n) }) }); z }) }",
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
  "{ :self | if(isPowerOfTwo(self), { self }, { if(isNonNegative(self), { bitShiftLeft(1,highBitOfPositiveReceiver(self)) }, { error(self,'@Integer>>asLargerPowerOfTwo: non-positive') }) }) }",
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
  "{ :self | asSmallerPowerOfTwo(self) }",
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
  "{ :self | if(isPowerOfTwo(self), { self }, { if(isNonNegative(self), { bitShiftLeft(1,-(highBitOfPositiveReceiver(self), 1)) }, { error(self,'@Integer>>asSmallerPowerOfTwo: non-positive') }) }) }",
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
      _tildeEqualsSign_2(_self, 0),
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
  "{ :self | &(~=(self, 0), { =(bitAnd(self,-(self, 1)), 0) }) }",
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
  "{ :self :n | if((=(n, 1)), { if((<(self, 0)), { -(-256, bitAnd(self,255)) }, { bitAnd(self,255) }) }, { if((<(self, 0)), { digitAt((+(-(-256, bitShift(self,-8)), 1)),-(n, 1)) }, { bitAnd(bitShift(self,-(8, bitShift(n,3))),255) }) }) }",
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
  "{ :self | let value = self; let length = 1; ifTrue((<(value, -255)), { length := 2; value := +((-(-256, bitShift(self,-8))), 1) }); whileTrue({ >(value, 255) }, { value := bitShift(value,-8); length := +(length, 1) }); length }",
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
  "{ :self | &(isNumber(self), { isInteger(self) }) }",
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
    let __SPL9 = _assertIsOfSize_2(_self, 2);
    let _m = _at_2(__SPL9, 1);
    let _n = _at_2(__SPL9, 2);
    /* Statements */
    return _isAmicablePair_2(_m, _n);
  }, ["self"]),
  "{ :self | let __SPL9 = assertIsOfSize(self, 2); let m = at(__SPL9, 1); let n = at(__SPL9, 2); isAmicablePair(m, n) }",
);
