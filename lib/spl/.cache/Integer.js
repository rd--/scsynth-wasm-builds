/*  Require: Cache  */

sl.addTrait("Integer", "Integer");

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "additivePersistence",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_size_1(_second_1(_digitalRootSet_2(_x, _b))), 1);
  },
  "{ :x :b | -(size(second(digitalRootSet(x,b))), 1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asBit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isOne_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBit");
      });
    });
  },
  "{ :self | if(isZero(self), { 0 }, { if(isOne(self), { 1 }, { error(self,'asBit') }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asCodePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asHexDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2("0123456789ABCDEF", _plusSign_2(_self, 1));
  },
  "{ :self | at('0123456789ABCDEF', +(self, 1)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsInteger",
  ["self", "origin"],
  function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("Not an integer: ", _origin));
    });
  },
  "{ :self :origin | if(isInteger(self), { self }, { error(self,++('Not an integer: ', origin)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsPositiveInteger",
  ["self", "origin"],
  function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPositiveInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Not a positive integer: ", _origin),
      );
    });
  },
  "{ :self :origin | if(isPositiveInteger(self), { self }, { error(self,++('Not a positive integer: ', origin)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "assertIsPositiveOddInteger",
  ["self", "origin"],
  function (_self, _origin) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _origin";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPositiveOddInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Not a positive odd integer: ", _origin),
      );
    });
  },
  "{ :self :origin | if(isPositiveOddInteger(self), { self }, { error(self,++('Not a positive odd integer: ', origin)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "asWords",
  ["self"],
  function (_self) {
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
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "zero";
    }, function () {
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
      _ifTrue_2(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _minus = "negative ";
        return _num = _negated_1(_self);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_num, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _three = _threeDigitName_1(_percentSign_2(_num, 1000));
        _num = _solidusSolidus_2(_num, 1000);
        _ifFalse_2(_isEmpty_1(_three), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _ifFalse_2(_isEmpty_1(_answer), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
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
  "{ :self | let mils = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion', ' duodecillion', ' tredecillion', ' quattuordecillion', ' quindecillion', ' sexdecillion', ' septendecillion', ' octodecillion', ' novemdecillion', ' vigintillion']; if((=(self, 0)), { 'zero' }, { let minus = ''; let three = nil; let num = self; let answer = ''; let milCount = 1; ifTrue((<(self, 0)), { minus := 'negative '; num := negated(self) }); whileTrue({ >(num, 0) }, { three := threeDigitName((%(num, 1000))); num := //(num, 1000); ifFalse(isEmpty(three), { ifFalse(isEmpty(answer), { answer := ++(', ', answer) }); answer := ++(++(three, at(mils, milCount)), answer) }); milCount := +(milCount, 1) }); ++(minus, answer) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bellNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Integer>>bellNumber: n < 0");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_self, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _list = _List_1(_self);
        /* Statements */
        _atPut_3(_list, 1, 1);
        _toDo_3(2, _self, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          _toDo_3(1, _hyphenMinus_2(_i, 2), function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
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
  "{ :self | if((<(self, 0)), { error(self,'@Integer>>bellNumber: n < 0') }, { if((<(self, 2)), { 1 }, { let list = List(self); atPut(list, 1, 1); toDo(2, self, { :i | toDo(1, -(i, 2), { :j | let k = -(-(i, j), 1); atPut(list, k, +(at(list, k), at(list, -(i, j)))) }); atPut(list, i, +(at(list, 1), at(list, -(i, 1)))) }); at(list, self) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "berahaConstant",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(2, _asterisk_2(2, _cos_1(_solidus_2(_pi_1(2), _n))));
  },
  "{ :n | +(2, (*(2, cos((/(pi(2), n)))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bernoulli",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_bernoulliSequence_1(_k));
  },
  "{ :k | last(bernoulliSequence(k)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bernoulliSequence",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_plusSign_2(_k, 1));
    let _b = _List_1(_plusSign_2(_k, 1));
    /* Statements */
    _do_2(_to_2(0, _k), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_a, _plusSign_2(_n, 1), _Fraction_2(1n, _plusSign_2(_n, 1)));
      _toByDo_4(_n, 1, -1, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Statements */
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
  "{ :k | let a = List(+(k, 1)); let b = List(+(k, 1)); do(to(0, k), { :n | atPut(a, +(n, 1), Fraction(1L, +(n, 1))); toByDo(n, 1, -1, { :j | atPut(a, j, *(j, (-(at(a, j), at(a, +(j, 1)))))) }); atPut(b, +(n, 1), at(a, 1)) }); b }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bernsteinBasis",
  ["d", "n", "x"],
  function (_d, _n, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _d, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    _x = _clip_3(_x, 0, 1);
    return _asterisk_2(
      _asterisk_2(_binomial_2(_d, _n), _circumflexAccent_2(_x, _n)),
      _circumflexAccent_2(_hyphenMinus_2(1, _x), _hyphenMinus_2(_d, _n)),
    );
  },
  "{ :d :n :x | x := clip(x,0, 1); *(*(binomial(d,n), (^(x, n))), (^((-(1, x)), (-(d, n))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "binetsFormula",
  ["n"],
  function (_n) {
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
  },
  "{ :n | let z = sqrt(5); /(-((^((+(1, z)), n)), (^((-(1, z)), n))), (*(^(2, n), z))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bitLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerLength_2(_self, 2);
  },
  "{ :self | integerLength(self,2) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bjorklundsAlgorithmDo",
  ["k", "n", "aBlock:/1"],
  function (_k, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _k, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _collect_2(_to_2(1, _n), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_i, _k), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [1];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
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
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _verticalLine_2(_greaterThanSign_2(_z, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_k, 1);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_to_2(1, _k), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
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
  "{ :k :n :aBlock:/1 | let s = collect(to(1, n), { :i | if((<=(i, k)), { [1] }, { [0] }) }); let d = -(n, k); let z = d; aBlock(s); n := max(k,d); k := min(k,d); whileTrue({ |(>(z, 0), { >(k, 1) }) }, { do(to(1, k), { :i | addAll(at(s, i),at(s, +(-(size(s), i), 1))) }); removeLast(s,k); aBlock(s); z := -(z, k); d := -(n, k); n := max(k,d); k := min(k,d) }); flatten(s) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "bjorklundsAlgorithm",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _bjorklundsAlgorithmDo_3(_k, _n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    });
  },
  "{ :k :n | bjorklundsAlgorithmDo(k, n, { :each | nil }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "blancmangeFunction",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _circumflexAccent_2(2, _d);
    let _b = _List_1(_plusSign_2(_k, 1));
    /* Statements */
    _atPut_3(_b, _plusSign_2(0, 1), 0);
    _atPut_3(_b, _plusSign_2(_k, 1), 0);
    _toByDo_4(_d, 1, -1, function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _toByDo_4(
        0,
        _hyphenMinus_2(_k, 1),
        _circumflexAccent_2(2, _n),
        function (_m) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _m";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :d | let k = ^(2, d); let b = List(+(k, 1)); atPut(b, +(0, 1), 0); atPut(b, +(k, 1), 0); toByDo(d, 1, -1, { :n | toByDo(0, -(k, 1), ^(2, n), { :m | atPut(b, +(+(m, (^(2, (-(n, 1))))), 1), +((^(2, n)), (*(0.5, (+(at(b, +(m, 1)), at(b, +(+(m, (^(2, n))), 1)))))))) }) }); b }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "catalanTriangle",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(_plusSign_2(_hyphenMinus_2(_n, _k), 1), _plusSign_2(_n, 1)),
      _binomial_2(_plusSign_2(_n, _k), _k),
    );
  },
  "{ :n :k | *((/((+(-(n, k), 1)), (+(n, 1)))), binomial((+(n, k)),k)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "characterRange",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(_self, _anInteger), _asCharacter_1);
  },
  "{ :self :anInteger | collect(upOrDownTo(self, anInteger),asCharacter:/1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "collatzSequence",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = _n;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _i);
      return _tildeEqualsSign_2(_i, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isEven_1(_i), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _i = _solidus_2(_i, 2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _i = _plusSign_2(_asterisk_2(3, _i), 1);
      });
    });
    return _answer;
  },
  "{ :n | let answer = []; let i = n; whileTrue({ add(answer,i); ~=(i, 1) }, { if(isEven(i), { i := /(i, 2) }, { i := +(*(3, i), 1) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "combinations",
  ["n", "m"],
  function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _combinations_2(_upOrDownTo_2(1, _n), _m);
  },
  "{ :n :m | combinations(upOrDownTo(1, n),m) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "commonResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_self, _modulus);
  },
  "{ :self :modulus | %(self, modulus) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitalRootSet",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _digitSum_2 = function (_x, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _b";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _total = 0;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_x, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _total = _plusSign_2(_total, _percentSign_2(_x, _b));
        return _x = _solidusSolidus_2(_x, _b);
      });
      return _total;
    };
    let _seen = _IdentitySet_0();
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_seen, _x);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_seen, _x);
      return _x = _digitSum_2(_x, _b);
    });
    return _asTuple_1([_x, _seen]);
  },
  "{ :x :b | let digitSum = { :x :b | let total = 0; whileTrue({ >(x, 0) }, { total := +(total, (%(x, b))); x := //(x, b) }); total }; let seen = IdentitySet(); whileFalse({ includes(seen,x) }, { add(seen,x); x := digitSum(x, b) }); asTuple([x, seen]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitalRoot",
  ["x", "b"],
  function (_x, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_digitalRootSet_2(_x, _b));
  },
  "{ :x :b | first(digitalRootSet(x,b)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b", "d"],
  function (_n, _b, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _b, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(_integerDigits_2(_n, _b), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_each, _d);
    });
  },
  "{ :n :b :d | count(integerDigits(n,b), { :each | =(each, d) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "digitCount",
  ["n", "b"],
  function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _digits = _integerDigits_2(_n, _b);
    /* Statements */
    return _collect_2(_upOrDownTo_2(_hyphenMinus_2(_b, 1), 0), function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _d";
        throw new Error(errorMessage);
      } /* Statements */
      return _count_2(_digits, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _d);
      });
    });
  },
  "{ :n :b | let digits = integerDigits(n,b); collect(upOrDownTo((-(b, 1)), 0), { :d | count(digits, { :each | =(each, d) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "dividesImmediately",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _dividesImmediately_2(
      _Fraction_2(_self, 1),
      _Fraction_2(_aNumber, 1),
    );
  },
  "{ :self :aNumber | dividesImmediately(Fraction(self, 1),Fraction(aNumber, 1)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "divisorSum",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_divisors_1(_self), _aBlock_1));
  },
  "{ :self :aBlock:/1 | sum(collect(divisors(self),aBlock:/1)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "divisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_reverseSolidusReverseSolidus_2(_self, _each), 0);
    });
  },
  "{ :self | select(to(1,self), { :each | =(\\\\(self, each), 0) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "doubleFactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        "@Integer>>doubleFactorial: not valid for negative integers",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_2(_self, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _doubleFactorial_1(_hyphenMinus_2(_self, 2)));
      });
    });
  },
  "{ :self | if(isNegative(self), { error(self,'@Integer>>doubleFactorial: not valid for negative integers') }, { if((<=(self, 3)), { max(self,1) }, { *(self, doubleFactorial((-(self, 2)))) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "dyckWords",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_4 = function (_x, _i, _n0, _n1) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _x, _i, _n0, _n1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d0_0 = function () {
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
      };
      let _d1_0 = function () {
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
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(_d0_0(), _d1_0());
        },
        function () {
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
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _d0_0();
            },
            function () {
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
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _d1_0();
                },
                function () {
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
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [_x];
                    },
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
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
  "{ :n | let f = { :x :i :n0 :n1 | let d0 = { f(++(x, [0]), +(i, 1), +(n0, 1), n1) }; let d1 = { f(++(x, [1]), +(i, 1), n0, +(n1, 1)) }; if((&&(&&((<(n0, n)), (<(n1, n))), (>(n0, n1)))), { ++(d0(), d1()) }, { if((||((&&(&&((<(n0, n)), (<(n1, n))), (=(n0, n1)))), (&&((<(n0, n)), (=(n1, n)))))), { d0() }, { if((&&((=(n0, n)), (<(n1, n)))), { d1() }, { if((&&((=(n0, n1)), (=(n1, n)))), { [x] }, { error(n,'Integer>>dyckWords') }) }) }) }) }; f([0], 1, 1, 0) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "elementaryCellularAutomaton",
  ["ruleNumber", "initialState", "stepLimit"],
  function (_ruleNumber, _initialState, _stepLimit) {
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
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_stepCount, _stepLimit);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _nextState = _collect_2(_upOrDownTo_2(1, _stateSize), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = [_hyphenMinus_2(_i, 1), _i, _plusSign_2(_i, 1)];
        let _k = _fromDigits_2(_atAllWrap_2(_previousState, _j), 2);
        /* Statements */
        return _at_2(_ruleTable, _hyphenMinus_2(8, _k));
      });
      /* Statements */
      _add_2(_answer, _nextState);
      _previousState = _nextState;
      return _stepCount = _plusSign_2(_stepCount, 1);
    });
    return _answer;
  },
  "{ :ruleNumber :initialState :stepLimit | let stateSize = size(initialState); let ruleTable = integerDigits(ruleNumber,2, 8); let stepCount = 0; let answer = [initialState]; let previousState = initialState; whileTrue({ <(stepCount, stepLimit) }, { let nextState = collect(upOrDownTo(1, stateSize), { :i | let j = [-(i, 1), i, +(i, 1)]; let k = fromDigits(atAllWrap(previousState,j),2); at(ruleTable, -(8, k)) }); add(answer,nextState); previousState := nextState; stepCount := +(stepCount, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "euclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_b, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _b;
      /* Statements */
      _b = _percentSign_2(_a, _b);
      return _a = _t;
    });
    return _a;
  },
  "{ :a :b | whileTrue({ ~=(b, 0) }, { let t = b; b := %(a, b); a := t }); a }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "eulerPhi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _l = _if_3(_isNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toBy_3(-1, _self, -1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _to_2(1, _self);
      });
      /* Statements */
      return _size_1(_select_2(_l, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_gcd_2(_self, _each), 1);
      }));
    });
  },
  "{ :self | if(isZero(self), { 0 }, { let l = if(isNegative(self), { toBy(-1,self, -1) }, { to(1,self) }); size(select(l, { :each | =(gcd(self,each), 1) })) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "extendedEuclideanAlgorithm",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL6 = _assertIsOfSize_2([_a, _b], 2);
    let _r0 = _at_2(__SPL6, 1);
    let _r = _at_2(__SPL6, 2);
    let __SPL7 = _assertIsOfSize_2([1, 0], 2);
    let _s0 = _at_2(__SPL7, 1);
    let _s = _at_2(__SPL7, 2);
    let __SPL8 = _assertIsOfSize_2([0, 1], 2);
    let _t0 = _at_2(__SPL8, 1);
    let _t = _at_2(__SPL8, 2);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_r, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _quotient = _solidusSolidus_2(_r0, _r);
      /* Statements */
      (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL9 = [_r, _hyphenMinus_2(_r0, _asterisk_2(_quotient, _r))];
        /* Statements */
        _r0 = _at_2(__SPL9, 1);
        return _r = _at_2(__SPL9, 2);
      })();
      (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL10 = [_s, _hyphenMinus_2(_s0, _asterisk_2(_quotient, _s))];
        /* Statements */
        _s0 = _at_2(__SPL10, 1);
        return _s = _at_2(__SPL10, 2);
      })();
      return ((function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL11 = [_t, _hyphenMinus_2(_t0, _asterisk_2(_quotient, _t))];
        /* Statements */
        _t0 = _at_2(__SPL11, 1);
        return _t = _at_2(__SPL11, 2);
      })());
    });
    return _if_3(_lessThanSign_2(_r0, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [_hyphenMinus_1(_r0), _hyphenMinus_1([_s0, _t0])];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [_r0, [_s0, _t0]];
    });
  },
  "{ :a :b | let __SPL6 = assertIsOfSize([a, b], 2); let r0 = at(__SPL6, 1); let r = at(__SPL6, 2); let __SPL7 = assertIsOfSize([1, 0], 2); let s0 = at(__SPL7, 1); let s = at(__SPL7, 2); let __SPL8 = assertIsOfSize([0, 1], 2); let t0 = at(__SPL8, 1); let t = at(__SPL8, 2); whileTrue({ ~=(r, 0) }, { let quotient = //(r0, r); ({ let __SPL9 = [r, -(r0, (*(quotient, r)))]; r0 := at(__SPL9, 1); r := at(__SPL9, 2) } . ()); ({ let __SPL10 = [s, -(s0, (*(quotient, s)))]; s0 := at(__SPL10, 1); s := at(__SPL10, 2) } . ()); ({ let __SPL11 = [t, -(t0, (*(quotient, t)))]; t0 := at(__SPL11, 1); t := at(__SPL11, 2) } . ()) }); if((<(r0, 0)), { [-(r0), -([s0, t0])] }, { [r0, [s0, t0]] }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "extendedGcd",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _extendedEuclideanAlgorithm_2(_self, _anInteger);
  },
  "{ :self :anInteger | extendedEuclideanAlgorithm(self,anInteger) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("@Integer>>factorial: not valid for negative integers");
    });
    return _if_3(_lessThanSignEqualsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _self;
      let _answer = _self;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_next, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _hyphenMinus_2(_next, 1);
        return _answer = _asterisk_2(_answer, _next);
      });
      return _answer;
    });
  },
  "{ :self | ifTrue(isNegative(self), { error('@Integer>>factorial: not valid for negative integers') }); if((<=(self, 1)), { 1 }, { let next = self; let answer = self; whileTrue({ >(next, 1) }, { next := -(next, 1); answer := *(answer, next) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "fareySequence",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL12 = _assertIsOfSize_2([0, 1, 1, _n], 4);
    let _a = _at_2(__SPL12, 1);
    let _b = _at_2(__SPL12, 2);
    let _c = _at_2(__SPL12, 3);
    let _d = _at_2(__SPL12, 4);
    let _answer = [_Fraction_2(_a, _b)];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSignEqualsSign_2(_c, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k = _floor_1(_solidus_2(_plusSign_2(_n, _b), _d));
      /* Statements */
      (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL13 = [
          _c,
          _d,
          _hyphenMinus_2(_asterisk_2(_k, _c), _a),
          _hyphenMinus_2(_asterisk_2(_k, _d), _b),
        ];
        /* Statements */
        _a = _at_2(__SPL13, 1);
        _b = _at_2(__SPL13, 2);
        _c = _at_2(__SPL13, 3);
        return _d = _at_2(__SPL13, 4);
      })();
      return _add_2(_answer, _Fraction_2(_a, _b));
    });
    return _answer;
  },
  "{ :n | let __SPL12 = assertIsOfSize([0, 1, 1, n], 4); let a = at(__SPL12, 1); let b = at(__SPL12, 2); let c = at(__SPL12, 3); let d = at(__SPL12, 4); let answer = [Fraction(a, b)]; whileTrue({ <=(c, n) }, { let k = floor((/((+(n, b)), d))); ({ let __SPL13 = [c, d, -(*(k, c), a), -(*(k, d), b)]; a := at(__SPL13, 1); b := at(__SPL13, 2); c := at(__SPL13, 3); d := at(__SPL13, 4) } . ()); add(answer,Fraction(a, b)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "fibonacciSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fibonacciSequenceInto_2(_self, []);
  },
  "{ :self | fibonacciSequenceInto(self,[]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "fibonacciSequenceUpTo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1];
    let _n = 1;
    let _k = 1;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSignEqualsSign_2(_n, _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _n);
      _n = _plusSign_2(_n, _at_2(_answer, _k));
      return _k = _plusSign_2(_k, 1);
    });
    return _answer;
  },
  "{ :self | let answer = [1]; let n = 1; let k = 1; whileTrue({ <=(n, self) }, { add(answer,n); n := +(n, at(answer, k)); k := +(k, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "fibonacciWord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(2, _floor_1(_goldenRatio_1(_self))),
      _floor_1(_goldenRatio_1(_plusSign_2(_self, 1))),
    );
  },
  "{ :self | -(+(2, floor(goldenRatio(self))), floor(goldenRatio((+(self, 1))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "foldIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _foldBetweenAnd_3(_self, 1, _size);
  },
  "{ :self :size | foldBetweenAnd(self,1, size) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "gcd",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _abs_1(_self);
      let _b = _abs_1(_anInteger);
      /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_b, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
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
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_anInteger, _self, _gcd_2);
    });
  },
  "{ :self :anInteger | if(isInteger(anInteger), { let a = abs(self); let b = abs(anInteger); whileFalse({ =(b, 0) }, { let r = %(a, b); a := b; b := r }); a }, { adaptToNumberAndApply(anInteger,self, gcd:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "hammingNumbersFromUpTo",
  ["self", "limit"],
  function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    let _step_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_lessThanSignEqualsSign_2(_n, _limit), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(_includes_2(_answer, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _basicInclude_2(_answer, _n);
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
  "{ :self :limit | let answer = IdentitySet(); let step = { :n | ifTrue((<=(n, limit)), { ifFalse(includes(answer,n), { basicInclude(answer,n); step(*(n, 2)); step(*(n, 3)); step(*(n, 5)) }) }) }; step(self); contents(asSortedList(answer)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "harmonicNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_reciprocal_1(_to_2(1, _self)));
  },
  "{ :self | sum(reciprocal(to(1, self))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "hyperfactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _product_1(
        _collect_2(_upOrDownTo_2(_one_1(_self), _self), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _circumflexAccent_2(_k, _k);
        }),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1(
        "@Integer>>hyperfactorial: not implemented for non-integer",
      );
    });
  },
  "{ :self | if(isInteger(self), { product(collect(upOrDownTo(one(self), self), { :k | ^(k, k) })) }, { error('@Integer>>hyperfactorial: not implemented for non-integer') }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "k", "aBlock:/1"],
  function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(_lessThanSign_2(_n, _k), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _List_2(_k, 1);
      /* Statements */
      _atPut_3(_a, _k, _plusSign_2(_hyphenMinus_2(_n, _k), 1));
      _aBlock_1(_a);
      return _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _at_2(_a, 1),
          _plusSign_2(_hyphenMinus_2(_n, _k), 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _last = _k;
        let _z = null;
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_a, _last), 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :n :k :aBlock:/1 | ifFalse((<(n, k)), { let a = List(k, 1); atPut(a, k, +(-(n, k), 1)); aBlock(a); whileFalse({ =(at(a, 1), (+(-(n, k), 1))) }, { let last = k; let z = nil; whileTrue({ =(at(a, last), 1) }, { last := -(last, 1) }); z := at(a, last); atPut(a, -(last, 1), +(at(a, -(last, 1)), 1)); atPut(a, last, 1); atPut(a, k, -(z, 1)); aBlock(a) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsDo",
  ["n", "aBlock:/1"],
  function (_n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_to_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _integerCompositionsDo_3(_n, _k, _aBlock_1);
    });
  },
  "{ :n :aBlock:/1 | do(to(1, n), { :k | integerCompositionsDo(n,k, aBlock:/1) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n :k | let answer = []; integerCompositionsDo(n, k, { :each | add(answer,copy(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositions",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsDo_2(_n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n | let answer = []; integerCompositionsDo(n, { :each | add(answer,copy(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeakDo",
  ["n", "k", "aBlock:/1"],
  function (_n, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_k, 0);
    /* Statements */
    _atPut_3(_a, _k, _n);
    _aBlock_1(_a);
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_at_2(_a, 1), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _last = _k;
      let _z = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_a, _last), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
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
  "{ :n :k :aBlock:/1 | let a = List(k, 0); atPut(a, k, n); aBlock(a); whileFalse({ =(at(a, 1), n) }, { let last = k; let z = nil; whileTrue({ =(at(a, last), 0) }, { last := -(last, 1) }); z := at(a, last); atPut(a, -(last, 1), +(at(a, -(last, 1)), 1)); atPut(a, last, 0); atPut(a, k, -(z, 1)); aBlock(a) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerCompositionsWeak",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerCompositionsWeakDo_3(_n, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :n :k | let answer = []; integerCompositionsWeakDo(n, k, { :each | add(answer,copy(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigitsReverseDo",
  ["self", "base", "numDigits", "aBlock:/1"],
  function (_self, _base, _numDigits, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _base, _numDigits, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _num = _abs_1(_self);
    /* Statements */
    return _timesRepeat_2(_numDigits, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _aBlock_1(_percentSign_2(_num, _base));
      return _num = _solidusSolidus_2(_num, _base);
    });
  },
  "{ :self :base :numDigits :aBlock:/1 | let num = abs(self); timesRepeat(numDigits, { aBlock(%(num, base)); num := //(num, base) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base", "numDigits"],
  function (_self, _base, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _numDigits";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerDigitsReverseDo_4(_self, _base, _numDigits, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _addFirst_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self :base :numDigits | let answer = []; integerDigitsReverseDo(self, base, numDigits, { :each | addFirst(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsInteger_2(_self, "@Integer>>integerDigits");
    return _if_3(_isInteger_1(_base), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _numDigits = _if_3(_isZero_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
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
      });
      /* Statements */
      return _integerDigits_3(_self, _base, _numDigits);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_base, _self, _integerDigits_2);
    });
  },
  "{ :self :base | assertIsInteger(self,'@Integer>>integerDigits'); if(isInteger(base), { let numDigits = if(isZero(self), { 1 }, { +(asInteger((+(/(log(abs(self)), log(base)), 0.0000000001))), 1) }); integerDigits(self,base, numDigits) }, { adaptToNumberAndApply(base,self, integerDigits:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerDigits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerDigits_2(_self, 10);
  },
  "{ :self | integerDigits(self,10) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerExponent",
  ["n", "b"],
  function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _divisible_2(_n, _circumflexAccent_2(_b, _plusSign_2(_answer, 1)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :n :b | let answer = 0; whileTrue({ divisible(n,^(b, (+(answer, 1)))) }, { answer := +(answer, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerLength",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_floor_1(_log_2(_abs_1(_self), _radix)), 1);
    });
  },
  "{ :self :radix | if(isZero(self), { 0 }, { +(floor(log(abs(self),radix)), 1) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsDescendingDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
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
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_k, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _l = _k;
      let _m = _at_2(_d, _k);
      let _nPrime = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_m, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _k = _hyphenMinus_2(_k, 1);
        return _m = _at_2(_d, _k);
      });
      _nPrime = _hyphenMinus_2(_plusSign_2(_m, _l), _k);
      _m = _hyphenMinus_2(_m, 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_m, _nPrime);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_d, _k, _m);
        _nPrime = _hyphenMinus_2(_nPrime, _m);
        return _k = _plusSign_2(_k, 1);
      });
      _atPut_3(_d, _k, _nPrime);
      return _aBlock_1(_copyFromTo_3(_d, 1, _k));
    });
  },
  "{ :self :aBlock:/1 | let n = self; let d = List(n, 1); let k = 1; atPut(d, 1, n); aBlock(copyFromTo(d,1, 1)); whileTrue({ ~=(k, n) }, { let l = k; let m = at(d, k); let nPrime = nil; whileTrue({ =(m, 1) }, { k := -(k, 1); m := at(d, k) }); nPrime := -(+(m, l), k); m := -(m, 1); whileTrue({ <(m, nPrime) }, { atPut(d, k, m); nPrime := -(nPrime, m); k := +(k, 1) }); atPut(d, k, nPrime); aBlock(copyFromTo(d,1, k)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsDescendingDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; integerPartitionsDescendingDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsAscendingDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
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
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_k, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x, _l;
      /* Statements */
      _k = _hyphenMinus_2(_k, 1);
      _x = _plusSign_2(_at_2(_a, _k), 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_asterisk_2(2, _x), _y);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_a, _k, _x);
        _y = _hyphenMinus_2(_y, _x);
        return _k = _plusSign_2(_k, 1);
      });
      _l = _plusSign_2(_k, 1);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_x, _y);
      }, function () {
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
      });
      _y = _hyphenMinus_2(_plusSign_2(_y, _x), 1);
      _atPut_3(_a, _k, _plusSign_2(_y, 1));
      return _aBlock_1(_copyFromTo_3(_a, 1, _k));
    });
  },
  "{ :self :aBlock:/1 | let n = self; let a = List(n, 0); let k = 2; let y = -(n, 1); whileTrue({ ~=(k, 1) }, { var x, l;k := -(k, 1); x := +(at(a, k), 1); whileTrue({ <=((*(2, x)), y) }, { atPut(a, k, x); y := -(y, x); k := +(k, 1) }); l := +(k, 1); whileTrue({ <=(x, y) }, { atPut(a, k, x); atPut(a, l, y); aBlock(copyFromTo(a,1, l)); x := +(x, 1); y := -(y, 1) }); y := -(+(y, x), 1); atPut(a, k, +(y, 1)); aBlock(copyFromTo(a,1, k)) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsAscending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _integerPartitionsAscendingDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; integerPartitionsAscendingDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitions",
  ["j", "i"],
  function (_j, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _j, _i";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_3 = function (_t, _m, _n) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _t, _m, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(_equalsSign_2(_m, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_t, _n);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [[_t]];
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _verticalLine_2(_lessThanSign_2(_n, _m), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _verticalLine_2(_lessThanSign_2(_n, 1), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(_lessThanSign_2(_m, 1), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSign_2(_t, 1);
                });
              });
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [];
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _collect_2(
                  _f_3(_t, _hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, _t)),
                  function (_r) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _r";
                      throw new Error(errorMessage);
                    } /* Statements */
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
  "{ :j :i | let f = { :t :m :n | if((&(=(m, 1), { =(t, n) })), { [[t]] }, { if((|(<(n, m), { |(<(n, 1), { |(<(m, 1), { <(t, 1) }) }) })), { [] }, { ++(collect(f(t, -(m, 1), -(n, t)), { :r | (++([t], r)) }), f(-(t, 1), m, n)) }) }) }; f(+(-(j, i), 1), i, j) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerPartitionsRecursive",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _gather_2(_to_2(1, _n), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _integerPartitions_2(_n, _k);
    });
  },
  "{ :n | gather(to(1, n), { :k | integerPartitions(n,k) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "integerSquareRoot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "integerSquareRoot: negative");
    }, function () {
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
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_q, _x);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _q = _bitShiftLeft_2(_q, 2);
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_q, 1);
      }, function () {
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
        return _ifTrue_2(_greaterThanSignEqualsSign_2(_t, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _x = _t;
          return _r = _plusSign_2(_r, _q);
        });
      });
      return _r;
    });
  },
  "{ :self | if((<(self, 0)), { error(self,'integerSquareRoot: negative') }, { let x = self; let z = self; let r = zero(self); let q = one(self); whileTrue({ <=(q, x) }, { q := bitShiftLeft(q,2) }); whileTrue({ >(q, 1) }, { let t = -(x, r); q := bitShiftRight(q,2); t := -(t, q); r := bitShiftRight(r,1); ifTrue((>=(t, 0)), { x := t; r := +(r, q) }) }); r }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "inventorySequence",
  ["terms"],
  function (_terms) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _terms";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _number = 0;
    let _answer = [0];
    let _inventory = _asIdentityBag_1([0]);
    /* Statements */
    _do_2(_upOrDownTo_2(2, _terms), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _count = _occurrencesOf_2(_inventory, _number);
      /* Statements */
      _number = _if_3(_equalsSign_2(_count, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_number, 1);
      });
      _add_2(_answer, _count);
      return _add_2(_inventory, _count);
    });
    return _answer;
  },
  "{ :terms | let number = 0; let answer = [0]; let inventory = asIdentityBag([0]); do(upOrDownTo(2, terms), { :n | let count = occurrencesOf(inventory,number); number := if((=(count, 0)), { 0 }, { +(number, 1) }); add(answer,count); add(inventory,count) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isByte",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _betweenAnd_3(_self, 0, 255);
    });
  },
  "{ :self | &(isInteger(self), { betweenAnd(self,0, 255) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Integer>>isInteger");
  },
  "{ :self | typeResponsibility(self,'@Integer>>isInteger') }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_sum_1(_allButLast_1(_divisors_1(_self))), _self);
  },
  "{ :self | =(sum(allButLast(divisors(self))), self) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPerfectSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_sqrt_1(_self));
  },
  "{ :self | isInteger(sqrt(self)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPositiveInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isPositive_1(_self);
    });
  },
  "{ :self | &(isInteger(self), { isPositive(self) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isPositiveOddInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isPositiveInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_percentSign_2(_self, 2), 1);
    });
  },
  "{ :self | &(isPositiveInteger(self), { =(%(self, 2), 1) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isRoughNumber",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_primeFactors_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSignEqualsSign_2(_each, _k);
    });
  },
  "{ :self :k | allSatisfy(primeFactors(self), { :each | >=(each, k) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSmoothNumber",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), _k);
  },
  "{ :self :k | <=(primeLimit(self), k) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "isSquareFree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(
      _allButFirst_1(_divisors_1(_self)),
      _isPerfectSquare_1,
    );
  },
  "{ :self | noneSatisfy(allButFirst(divisors(self)),isPerfectSquare:/1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lassalleNumber",
  ["m"],
  function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_m, _one_1(_m));
    /* Statements */
    _toDo_3(2, _m, function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _sum_1(
        _collect_2(_upOrDownTo_2(1, _hyphenMinus_2(_n, 1)), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :m | let a = List(m, one(m)); toDo(2, m, { :n | let z = sum(collect(upOrDownTo(1, (-(n, 1))), { :j | *(*(*(^(-1, j), binomial((-(*(2, n), 1)),-(*(2, j), 1))), at(a, j)), catalanNumber((-(n, j)))) })); atPut(a, n, *(^(-1, (-(n, 1))), (+(catalanNumber(n), z)))) }); at(a, m) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lcm",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a = _self;
      let _b = _anInteger;
      /* Statements */
      return _if_3(
        _verticalLine_2(_equalsSign_2(_a, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_b, 0);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _ab = _asterisk_2(_a, _b);
          /* Statements */
          _whileFalse_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_b, 0);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
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
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_anInteger, _self, _lcm_2);
    });
  },
  "{ :self :anInteger | if(isInteger(anInteger), { let a = self; let b = anInteger; if((|(=(a, 0), { =(b, 0) })), { 0 }, { let ab = *(a, b); whileFalse({ =(b, 0) }, { let tmp = b; b := %(a, tmp); a := tmp }); abs((/(ab, a))) }) }, { adaptToNumberAndApply(anInteger,self, lcm:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lobbNumber",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_betweenAnd_3(_m, 0, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
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
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("@Integer>>lobbNumber: domain error");
    });
  },
  "{ :m :n | if(betweenAnd(m,0, n), { //((*(binomial((*(2, n)),+(m, n)), (+(*(2, m), 1)))), (+(+(m, n), 1))) }, { error('@Integer>>lobbNumber: domain error') }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lowerChristoffelWord",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCoprime_2(_a, _b), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      }
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "lowerChristoffelWord: not coprime");
    });
  },
  "{ :a :b | if(isCoprime(a,b), {  }, { error(self,'lowerChristoffelWord: not coprime') }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lucasNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _phi = _goldenRatio_1(1);
      /* Statements */
      return _rounded_1(_circumflexAccent_2(_phi, _self));
    });
  },
  "{ :self | if((=(self, 1)), { 1 }, { let phi = goldenRatio(1); rounded((^(phi, self))) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "lucasNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([1, 1], [1, 3], _self);
  },
  "{ :self | linearRecurrence([1, 1],[1, 3], self) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "minimalResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _percentSign_2(_self, _modulus);
    let _q = _hyphenMinus_2(_p, _modulus);
    /* Statements */
    return _if_3(_lessThanSign_2(_p, _abs_1(_q)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _p;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _q;
    });
  },
  "{ :self :modulus | let p = %(self, modulus); let q = -(p, modulus); if((<(p, abs(q))), { p }, { q }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "mixedRadixEncode",
  ["self", "factors"],
  function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_factors));
    /* Statements */
    _toByDo_4(_size_1(_factors), 1, -1, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_answer, _index, _percentSign_2(_self, _at_2(_factors, _index)));
      return _self = _solidusSolidus_2(_self, _at_2(_factors, _index));
    });
    _ifTrue_2(_greaterThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _addFirst_2(_answer, _self);
    });
    return _answer;
  },
  "{ :self :factors | let answer = List(size(factors)); toByDo(size(factors), 1, -1, { :index | atPut(answer, index, %(self, at(factors, index))); self := //(self, at(factors, index)) }); ifTrue((>(self, 0)), { addFirst(answer,self) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "modularInverse",
  ["a", "n"],
  function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = 0;
    let _t1 = 1;
    let _r = _if_3(_lessThanSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _negated_1(_n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n;
    });
    let _r1 = _if_3(_lessThanSign_2(_a, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _percentSign_2(
        _hyphenMinus_2(_n, _percentSign_2(_negated_1(_a), _n)),
        _n,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _percentSign_2(_a, _n);
    });
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_r1, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _quotient = _solidusSolidus_2(_r, _r1);
      /* Statements */
      (function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL14 = [_t1, _hyphenMinus_2(_t, _asterisk_2(_quotient, _t1))];
        /* Statements */
        _t = _at_2(__SPL14, 1);
        return _t1 = _at_2(__SPL14, 2);
      })();
      return ((function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL15 = [_r1, _hyphenMinus_2(_r, _asterisk_2(_quotient, _r1))];
        /* Statements */
        _r = _at_2(__SPL15, 1);
        return _r1 = _at_2(__SPL15, 2);
      })());
    });
    return _if_3(_greaterThanSign_2(_r, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("@Integer>>modularInverse: not invertible");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_t, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_t, _n);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _t;
      });
    });
  },
  "{ :a :n | let t = 0; let t1 = 1; let r = if((<(n, 0)), { negated(n) }, { n }); let r1 = if((<(a, 0)), { %((-(n, (%(negated(a), n)))), n) }, { %(a, n) }); whileTrue({ ~=(r1, 0) }, { let quotient = //(r, r1); ({ let __SPL14 = [t1, -(t, (*(quotient, t1)))]; t := at(__SPL14, 1); t1 := at(__SPL14, 2) } . ()); ({ let __SPL15 = [r1, -(r, (*(quotient, r1)))]; r := at(__SPL15, 1); r1 := at(__SPL15, 2) } . ()) }); if((>(r, 1)), { error('@Integer>>modularInverse: not invertible') }, { if((<(t, 0)), { +(t, n) }, { t }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "multiplicativeOrder",
  ["k", "n", "r"],
  function (_k, _n, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _k, _n, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isCoprime_2(_k, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _one_1(_k);
        /* Statements */
        _whileFalse_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(
            _r,
            _percentSign_2(_circumflexAccent_2(_k, _m), _n),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _m = _plusSign_2(_m, 1);
        });
        return _m;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      });
    });
  },
  "{ :k :n :r | if((=(n, 1)), { 1 }, { if(isCoprime(k,n), { let m = one(k); whileFalse({ includes(r,%(^(k, m), n)) }, { m := +(m, 1) }); m }, { nil }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "multiplicativeOrder",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _multiplicativeOrder_3(_k, _n, [1]);
  },
  "{ :k :n | multiplicativeOrder(k,n, [1]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "narayanaNumber",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_betweenAnd_3(_k, 1, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
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
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("narayanaNumber: domain error");
    });
  },
  "{ :n :k | if(betweenAnd(k,1, n), { //(*(binomial(n,k), binomial(n, -(k, 1))), n) }, { error('narayanaNumber: domain error') }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "narayanaSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1, 1];
    /* Statements */
    _toDo_3(4, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
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
  "{ :self | let answer = [1, 1, 1]; toDo(4, self, { :i | add(answer,+(at(answer, -(i, 1)), at(answer, -(i, 3)))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "noergaardInfinitySequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _memoize_1(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_n, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_percentSign_2(_n, 2), 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _f_1(_solidusSolidus_2(_hyphenMinus_2(_n, 1), 2)),
            1,
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_1(_f_1(_solidusSolidus_2(_n, 2)));
        });
      });
    });
    /* Statements */
    return _collect_2(_upOrDownTo_2(0, _hyphenMinus_2(_self, 1)), _f_1);
  },
  "{ :self | let f:/1 = memoize({ :n | if((=(n, 0)), { 0 }, { if((=(%(n, 2), 1)), { +(f(//((-(n, 1)), 2)), 1) }, { -(f(//(n, 2))) }) }) }); collect(upOrDownTo(0, -(self, 1)),f:/1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfCompositions",
  ["n", "k"],
  function (_n, _k) {
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
  },
  "{ :n :k | /(factorial((-(n, 1))), (*(factorial((-(k, 1))), factorial((-(n, k)))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfCompositionsWeak",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _factorial_1(_hyphenMinus_2(_plusSign_2(_n, _k), 1)),
      _asterisk_2(_factorial_1(_n), _factorial_1(_hyphenMinus_2(_k, 1))),
    );
  },
  "{ :n :k | /(factorial((-(+(n, k), 1))), (*(factorial(n), factorial((-(k, 1)))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numberOfDigitsInBase",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _numberOfDigitsInBase_2(_negated_1(_self), _radix);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_self, _radix), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isPowerOfTwo_1(_radix), function () {
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
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _q = _self;
          let _total = 0;
          /* Statements */
          _whileFalse_1(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _nDigits = _if_3(_equalsSign_2(_radix, 10), function () {
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
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
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
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _total;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_total, 1);
          });
        });
      });
    });
  },
  "{ :self :radix | if(isNegative(self), { numberOfDigitsInBase(negated(self),radix) }, { if((<(self, radix)), { 1 }, { if(isPowerOfTwo(radix), { quotient((-(+(highBit(self), highBit(radix)), 2)),-(highBit(radix), 1)) }, { let q = self; let total = 0; whileFalse({ let nDigits = if((=(radix, 10)), { +((>>(*((-(highBit(q), 1)), 1233), 12)), 1) }, { quotient(highBit(q),highBit(radix)) }); total := +(total, nDigits); q := quotient(q,raisedToInteger(radix,nDigits)); (<(q, radix)) }); if((=(q, 0)), { total }, { +(total, 1) }) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "padovanSequence",
  ["self", "initial"],
  function (_self, _initial) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _initial";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_initial);
    /* Statements */
    _toDo_3(4, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
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
  "{ :self :initial | let answer = copy(initial); toDo(4, self, { :i | add(answer,+(at(answer, -(i, 2)), at(answer, -(i, 3)))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "padovanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 1, 1]);
  },
  "{ :self | padovanSequence(self,[1, 1, 1]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "partitionFunctionP",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_plusSign_2(_n, 1));
    /* Statements */
    _atPut_3(_a, 1, 1n);
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k = 1;
      let _s = 1;
      /* Statements */
      _atPut_3(_a, _plusSign_2(_i, 1), 0n);
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_s, _i);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _if_3(_isOdd_1(_k), function () {
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
        }, function () {
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
        });
        return _if_3(_greaterThanSign_2(_k, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _s = _plusSign_2(_s, _k);
          return _k = _hyphenMinus_1(_k);
        }, function () {
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
        });
      });
    });
    return _at_2(_a, _plusSign_2(_n, 1));
  },
  "{ :n | let a = List(+(n, 1)); atPut(a, 1, 1L); toDo(1, n, { :i | let k = 1; let s = 1; atPut(a, +(i, 1), 0L); whileTrue({ <=(s, i) }, { if(isOdd(k), { atPut(a, +(i, 1), +(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }, { atPut(a, +(i, 1), -(at(a, +(i, 1)), at(a, +(-(i, s), 1)))) }); if((>(k, 0)), { s := +(s, k); k := -(k) }, { k := -(1, k); s := /(*(k, (-(*(3, k), 1))), 2) }) }) }); at(a, +(n, 1)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "pascalTriangle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(0, _self), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_to_2(0, _n), function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _binomial_2(_n, _k);
      });
    });
  },
  "{ :self | collect(to(0, self), { :n | collect(to(0, n), { :k | binomial(n,k) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "pellNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  "{ :self | let n = self; let x = sqrt(2); /((-((^((+(1, x)), n)), (^((-(1, x)), n)))), (*(2, x))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "pellNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [0, 1], _self);
  },
  "{ :self | linearRecurrence([2, 1],[0, 1], self) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "pellLucasNumbers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [2, 2], _self);
  },
  "{ :self | linearRecurrence([2, 1],[2, 2], self) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "perrinSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [3, 0, 2]);
  },
  "{ :self | padovanSequence(self,[3, 0, 2]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "polygonalNumber",
  ["r", "n"],
  function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_solidus_2(1, 2), _n),
      _plusSign_2(
        _hyphenMinus_2(_asterisk_2(_n, _hyphenMinus_2(_r, 2)), _r),
        4,
      ),
    );
  },
  "{ :r :n | *(*((/(1, 2)), n), (+(-(*(n, (-(r, 2))), r), 4))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "positiveResidue",
  ["self", "modulus"],
  function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _percentSign_2(_self, _modulus);
    /* Statements */
    return _if_3(_isZero_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _modulus;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n;
    });
  },
  "{ :self :modulus | let n = %(self, modulus); if(isZero(n), { modulus }, { n }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printString",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_radix, 10), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicPrintString_2(_self, 10);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _unsignedAnswer = _join_2([
        _basicPrintString_2(_radix, 10),
        _basicPrintString_2(_abs_1(_self), _radix),
      ], "r");
      /* Statements */
      return _if_3(_isNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2("-", _unsignedAnswer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unsignedAnswer;
      });
    });
  },
  "{ :self :radix | if((=(radix, 10)), { basicPrintString(self,10) }, { let unsignedAnswer = join([basicPrintString(radix,10), basicPrintString(abs(self),radix)],'r'); if(isNegative(self), { ++('-', unsignedAnswer) }, { unsignedAnswer }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, 10);
  },
  "{ :self | printString(self,10) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printStringHex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, 16);
  },
  "{ :self | printString(self,16) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "printStringRoman",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asciiStringStreamContents_1(function (_stream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _stream";
        throw new Error(errorMessage);
      } /* Statements */
      return _romanDigitsOn_2(_self, _stream);
    });
  },
  "{ :self | asciiStringStreamContents({ :stream | romanDigitsOn(self, stream) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "recamanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _seen = _asIdentitySet_1([0]);
    /* Statements */
    _toDo_3(1, _hyphenMinus_2(_self, 1), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _hyphenMinus_2(_at_2(_answer, _n), _n);
      /* Statements */
      _ifTrue_2(
        _verticalLine_2(_lessThanSignEqualsSign_2(_next, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(_seen, _next);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _next = _plusSign_2(_at_2(_answer, _n), _n);
        },
      );
      _atPut_3(_answer, _plusSign_2(_n, 1), _next);
      return _include_2(_seen, _next);
    });
    return _answer;
  },
  "{ :self | let answer = List(self, 0); let seen = asIdentitySet([0]); toDo(1, -(self, 1), { :n | let next = -(at(answer, n), n); ifTrue((|((<=(next, 0)), { includes(seen,next) })), { next := +(at(answer, n), n) }); atPut(answer, +(n, 1), next); include(seen,next) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "reducedResidueSystem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_to_2(0, _hyphenMinus_2(_self, 1)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCoprime_2(_each, _self);
    });
  },
  "{ :self | select(to(0,-(self, 1)), { :each | isCoprime(each,self) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "romanDigitsForOn",
  ["self", "digits", "base", "aStream"],
  function (_self, _digits, _base, _aStream) {
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
    return _if_3(_equalsSign_2(_n, 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextPutAll_2(_aStream, [_last_1(_digits), _first_1(_digits)]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_n, 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextPutAll_2(_aStream, [_last_1(_digits), _second_1(_digits)]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_greaterThanSign_2(_n, 4), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _nextPut_2(_aStream, _second_1(_digits));
        });
        return _timesRepeat_2(_percentSign_2(_n, 5), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _nextPut_2(_aStream, _last_1(_digits));
        });
      });
    });
  },
  "{ :self :digits :base :aStream | let n = //(%(self, (*(base, 10))), base); if((=(n, 9)), { nextPutAll(aStream,[last(digits), first(digits)]) }, { if((=(n, 4)), { nextPutAll(aStream,[last(digits), second(digits)]) }, { ifTrue((>(n, 4)), { nextPut(aStream,second(digits)) }); timesRepeat((%(n, 5)), { nextPut(aStream,last(digits)) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "romanDigitsOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _integer = _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _nextPut_2(_aStream, _asciiValue_1("-"));
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
    /* Statements */
    _timesRepeat_2(_solidusSolidus_2(_integer, 1000), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextPut_2(_aStream, _asciiValue_1("M"));
    });
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("MDC"), 100, _aStream);
    _romanDigitsForOn_4(_integer, _asciiByteArray_1("CLX"), 10, _aStream);
    return _romanDigitsForOn_4(_integer, _asciiByteArray_1("XVI"), 1, _aStream);
  },
  "{ :self :aStream | let integer = if(isNegative(self), { nextPut(aStream,asciiValue('-')); negated(self) }, { self }); timesRepeat((//(integer, 1000)), { nextPut(aStream,asciiValue('M')) }); romanDigitsForOn(integer,asciiByteArray('MDC'), 100, aStream); romanDigitsForOn(integer,asciiByteArray('CLX'), 10, aStream); romanDigitsForOn(integer,asciiByteArray('XVI'), 1, aStream) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "sternBrocotNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isEven_1(_n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _f_1(_solidus_2(_n, 2));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _m = _solidus_2(_hyphenMinus_2(_n, 1), 2);
          /* Statements */
          return _plusSign_2(_f_1(_m), _f_1(_plusSign_2(_m, 1)));
        });
      });
    };
    /* Statements */
    return _f_1(_self);
  },
  "{ :self | let f = { :n | if((<(n, 2)), { n }, { if(isEven(n), { f(/(n, 2)) }, { let m = /((-(n, 1)), 2); +(f(m), f(+(m, 1))) }) }) }; f(self) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "sternBrocotSequence",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1];
    let _index = 2;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_size_1(_answer), _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
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
  "{ :n | let answer = [1, 1]; let index = 2; whileTrue({ <(size(answer), n) }, { let c = at(answer, index); add(answer,+(c, at(answer, -(index, 1)))); add(answer,c); index := +(index, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "stolarskyArray",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    let _g_1 = function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _floor_1(_plusSign_2(_asterisk_2(_x, _phi), 0.5));
    };
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_m, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _plusSign_2(_stolarskyArray_2(_hyphenMinus_2(_m, 1), 1), 1);
        let _rowContains_2 = function (_r, _x) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _r, _x";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _k = _stolarskyArray_2(_r, 1);
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_k, _x);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _k = _g_1(_k);
          });
          return _equalsSign_2(_k, _x);
        };
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _anySatisfy_2(_to_2(1, _hyphenMinus_2(_m, 1)), function (_r) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _r";
              throw new Error(errorMessage);
            } /* Statements */
            return _rowContains_2(_r, _z);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _z = _plusSign_2(_z, 1);
        });
        return _z;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _g_1(_stolarskyArray_2(_m, _hyphenMinus_2(_n, 1)));
    });
  },
  "{ :m :n | let phi = goldenRatio(1); let g = { :x | floor((+(*(x, phi), 0.5))) }; if((=(n, 1)), { if((=(m, 1)), { 1 }, { let z = +(stolarskyArray((-(m, 1)),1), 1); let rowContains = { :r :x | let k = stolarskyArray(r,1); whileTrue({ <(k, x) }, { k := g(k) }); =(k, x) }; whileTrue({ anySatisfy(to(1,-(m, 1)), { :r | rowContains(r,z) }) }, { z := +(z, 1) }); z }) }, { g(stolarskyArray(m,-(n, 1))) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "subdivide",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(0, 1, _Fraction_2(1, _self));
  },
  "{ :self | Range(0, 1, Fraction(1, self)) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "threeDigitName",
  ["self"],
  function (_self) {
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
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = null;
      /* Statements */
      _ifTrue_2(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _return_1("");
      });
      _ifTrue_2(_greaterThanSign_2(_self, 99), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _plusSignPlusSign_2(
          _at_2(_units, _solidusSolidus_2(_self, 100)),
          " hundred",
        );
        _ifFalse_2(_equalsSign_2(_percentSign_2(_self, 100), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
          throw new Error(errorMessage);
        } /* Statements */
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
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSignPlusSign_2(
          _plusSignPlusSign_2(_answer, "-"),
          _at_2(_units, _percentSign_2(_self, 10)),
        );
      });
      return _return_1(_answer);
    });
  },
  "{ :self | let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; valueWithReturn({ :return:/1 | let answer = nil; ifTrue((=(self, 0)), { return('') }); ifTrue((>(self, 99)), { answer := ++((at(units, //(self, 100))), ' hundred'); ifFalse((=((%(self, 100)), 0)), { answer := ++(++(answer, ' '), threeDigitName((%(self, 100)))) }); return(answer) }); ifTrue((<(self, 20)), { return(at(units, self)) }); answer := at(decades, -(//(self, 10), 1)); ifFalse((=((%(self, 10)), 0)), { answer := ++(++(answer, '-'), (at(units, %(self, 10)))) }); return(answer) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "timesRepeat",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remaining = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_remaining, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _aBlock_0();
      return _remaining = _hyphenMinus_2(_remaining, 1);
    });
    return _self;
  },
  "{ :self :aBlock:/0 | let remaining = self; whileTrue({ >(remaining, 0) }, { aBlock(); remaining := -(remaining, 1) }); self }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "thueMorseSequence",
  ["k"],
  function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_k, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _List_1(_k);
      let _i = 2;
      let _iMax = 1;
      /* Statements */
      _atPut_3(_answer, 1, 0);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _k);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_lessThanSignEqualsSign_2(_i, _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _asterisk_2(2, _iMax));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :k | if((<=(k, 0)), { [] }, { let answer = List(k); let i = 2; let iMax = 1; atPut(answer, 1, 0); whileTrue({ <=(i, k) }, { whileTrue({ &(<=(i, k), { <=(i, (*(2, iMax))) }) }, { atPut(answer, i, -(1, at(answer, -(i, iMax)))); i := +(i, 1) }); iMax := *(iMax, 2) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "thueMorse",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_digitCount_3(_index, 2, 1), 2);
  },
  "{ :index | %(digitCount(index,2, 1), 2) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "vanDerCorputNumber",
  ["n", "base"],
  function (_n, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = 0;
    let _q = 1;
    let _nn = _n;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_nn, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _p = _plusSign_2(_asterisk_2(_p, _base), _percentSign_2(_nn, _base));
      _q = _asterisk_2(_q, _base);
      return _nn = _solidusSolidus_2(_nn, _base);
    });
    return _Fraction_2(_p, _q);
  },
  "{ :n :base | let p = 0; let q = 1; let nn = n; whileFalse({ =(nn, 0) }, { p := +((*(p, base)), (%(nn, base))); q := *(q, base); nn := //(nn, base) }); Fraction(p, q) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "vanDerLaanSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 0, 1]);
  },
  "{ :self | padovanSequence(self,[1, 0, 1]) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wythoffArray",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _floor_1(_asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _phi));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _floor_1(
          _asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _squared_1(_phi)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _wythoffArray_2(_m, _hyphenMinus_2(_n, 2)),
          _wythoffArray_2(_m, _hyphenMinus_2(_n, 1)),
        );
      });
    });
  },
  "{ :m :n | let phi = goldenRatio(1); if((=(n, 1)), { floor((*(floor((*(m, phi))), phi))) }, { if((=(n, 2)), { floor((*(floor((*(m, phi))), squared(phi)))) }, { +(wythoffArray(m,-(n, 2)), wythoffArray(m,-(n, 1))) }) }) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wythoffLower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _goldenRatio_1(1)));
  },
  "{ :self | floor((*(self, goldenRatio(1)))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wythoffPair",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return [
      _floor_1(_asterisk_2(_self, _phi)),
      _floor_1(_asterisk_2(_self, _squared_1(_phi))),
    ];
  },
  "{ :self | let phi = goldenRatio(1); [floor((*(self, phi))), floor((*(self, squared(phi))))] }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wythoffUpper",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _squared_1(_goldenRatio_1(1))));
  },
  "{ :self | floor((*(self, squared(goldenRatio(1))))) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "wrapIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_percentSign_2(_hyphenMinus_2(_self, 1), _size), 1);
  },
  "{ :self :size | +(%(-(self, 1), size), 1) }",
);

sl.addMethodToExistingTrait(
  "Integer",
  "Integer",
  "zeckendorfRepresentation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [0];
    }, function () {
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
      _toByDo_4(_k, 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _at_2(_f, _i);
        /* Statements */
        _add_2(
          _z,
          _if_3(_lessThanSignEqualsSign_2(_n, _self), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }),
        );
        return _ifTrue_2(_lessThanSignEqualsSign_2(_n, _self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _self = _hyphenMinus_2(_self, _n);
        });
      });
      return _z;
    });
  },
  "{ :self | if((<=(self, 0)), { [0] }, { let f = fibonacciSequenceUpTo(self); let k = -(size(f), 1); let z = []; removeFirst(f); toByDo(k, 1, -1, { :i | let n = at(f, i); add(z,if((<=(n, self)), { 1 }, { 0 })); ifTrue((<=(n, self)), { self := -(self, n) }) }); z }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Integer",
  "isInteger",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :unused | false }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asLargerPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _bitShiftLeft_2(1, _highBitOfPositiveReceiver_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Integer>>asLargerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self | if(isPowerOfTwo(self), { self }, { if(isNonNegative(self), { bitShiftLeft(1,highBitOfPositiveReceiver(self)) }, { error(self,'@Integer>>asLargerPowerOfTwo: non-positive') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallerPowerOfTwo_1(_self);
  },
  "{ :self | asSmallerPowerOfTwo(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "asSmallerPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPowerOfTwo_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isNonNegative_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _bitShiftLeft_2(
          1,
          _hyphenMinus_2(_highBitOfPositiveReceiver_1(_self), 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Integer>>asSmallerPowerOfTwo: non-positive");
      });
    });
  },
  "{ :self | if(isPowerOfTwo(self), { self }, { if(isNonNegative(self), { bitShiftLeft(1,-(highBitOfPositiveReceiver(self), 1)) }, { error(self,'@Integer>>asSmallerPowerOfTwo: non-positive') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "isPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_tildeEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_bitAnd_2(_self, _hyphenMinus_2(_self, 1)), 0);
    });
  },
  "{ :self | &(~=(self, 0), { =(bitAnd(self,-(self, 1)), 0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "digitAt",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(-256, _bitAnd_2(_self, 255));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _bitAnd_2(_self, 255);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _digitAt_2(
          _plusSign_2(_hyphenMinus_2(-256, _bitShift_2(_self, -8)), 1),
          _hyphenMinus_2(_n, 1),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _bitAnd_2(
          _bitShift_2(_self, _hyphenMinus_2(8, _bitShift_2(_n, 3))),
          255,
        );
      });
    });
  },
  "{ :self :n | if((=(n, 1)), { if((<(self, 0)), { -(-256, bitAnd(self,255)) }, { bitAnd(self,255) }) }, { if((<(self, 0)), { digitAt((+(-(-256, bitShift(self,-8)), 1)),-(n, 1)) }, { bitAnd(bitShift(self,-(8, bitShift(n,3))),255) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Integer",
  "digitLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _value = _self;
    let _length = 1;
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_value, -255), function () {
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
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_value, 255);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _value = _bitShift_2(_value, -8);
      return _length = _plusSign_2(_length, 1);
    });
    return _length;
  },
  "{ :self | let value = self; let length = 1; ifTrue((<(value, -255)), { length := 2; value := +((-(-256, bitShift(self,-8))), 1) }); whileTrue({ >(value, 255) }, { value := bitShift(value,-8); length := +(length, 1) }); length }",
);
