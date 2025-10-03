sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "bellNumber",
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
        return _error_2(_self, "@Integer>>bellNumber: n < 0");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _list = _List_1(_self);
            /* Statements */
            _atPut_3(_list, 1, 1);
            _toDo_3(
              2,
              _self,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                _toDo_3(
                  1,
                  _hyphenMinus_2(_i, 2),
                  sl.annotateFunction(function (_j) {
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
                  }, ["j"]),
                );
                return _atPut_3(
                  _list,
                  _i,
                  _plusSign_2(
                    _at_2(_list, 1),
                    _at_2(_list, _hyphenMinus_2(_i, 1)),
                  ),
                );
              }, ["i"]),
            );
            return _at_2(_list, _self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<(self, 0)), { error(self,'@Integer>>bellNumber: n < 0') }, { if((<(self, 2)), { 1 }, { let list = List(self); atPut(list, 1, 1); toDo(2, self, { :i | toDo(1, -(i, 2), { :j | let k = -(-(i, j), 1); atPut(list, k, +(at(list, k), at(list, -(i, j)))) }); atPut(list, i, +(at(list, 1), at(list, -(i, 1)))) }); at(list, self) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "braceletCount",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t1 = 0;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_percentSign_2(_n, _d), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _t1 = _plusSign_2(
              _t1,
              _asterisk_2(
                _eulerPhi_1(_d),
                _circumflexAccent_2(_k, _solidus_2(_n, _d)),
              ),
            );
          }, []),
        );
      }, ["d"]),
    );
    return _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(
            _t1,
            _asterisk_2(
              _asterisk_2(_solidus_2(_n, 2), _plusSign_2(1, _k)),
              _circumflexAccent_2(_k, _solidus_2(_n, 2)),
            ),
          ),
          _asterisk_2(2, _n),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(
            _t1,
            _asterisk_2(
              _n,
              _circumflexAccent_2(_k, _solidus_2(_plusSign_2(_n, 1), 2)),
            ),
          ),
          _asterisk_2(2, _n),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k | let t1 = 0; toDo(1, n, { :d | ifTrue((=((%(n, d)), 0)), { t1 := +(t1, (*(eulerPhi(d), (^(k, (/(n, d))))))) }) }); if(isEven(n), { /((+(t1, (*(*((/(n, 2)), (+(1, k))), (^(k, (/(n, 2)))))))), (*(2, n))) }, { /((+(t1, (*(n, (^(k, (/((+(n, 1)), 2)))))))), (*(2, n))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "fibonacciFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_fibonacciSequence_1(_self));
  }, ["self"]),
  "{ :self | product(fibonacciSequence(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "hyperfactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(
          _collect_2(
            _upOrDownTo_2(_one, _self),
            sl.annotateFunction(function (_k) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _k";
                throw new Error(errorMessage);
              } /* Statements */
              return _circumflexAccent_2(_k, _k);
            }, ["k"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_self, "hyperfactorial");
      }, []),
    );
  }, ["self"]),
  "{ :self | let one = one(self); if(isInteger(self), { product(collect(upOrDownTo(one, self), { :k | ^(k, k) })) }, { unimplementedCase(self,'hyperfactorial') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "integerDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _integerDoubleFactorial_1(_plusSign_2(_self, 2)),
              _plusSign_2(_self, 2),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "@integerDoubleFactorial: negative even");
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
          _lessThanSignEqualsSign_2(_self, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _max_2(_self, _one);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _self,
              _integerDoubleFactorial_1(_hyphenMinus_2(_self, 2)),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let one = one(self); if(isNegative(self), { if(isOdd(self), { /(integerDoubleFactorial((+(self, 2))), (+(self, 2))) }, { error(self,'@integerDoubleFactorial: negative even') }) }, { if((<=(self, 3)), { max(self,one) }, { *(self, integerDoubleFactorial((-(self, 2)))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "integerFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    _ifTrue_2(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "integerFactorial: not valid for negative integers",
        );
      }, []),
    );
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _one),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _one;
        /* Statements */
        _toDo_3(
          1,
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _asterisk_2(_answer, _each);
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | let one = one(self); ifTrue(isNegative(self), { error(self,'integerFactorial: not valid for negative integers') }); if((<=(self, one)), { one }, { let answer = one; toDo(1, self, { :each | answer := *(answer, each) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "involutionNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _upOrDownTo_2(0, _solidusSolidus_2(_n, 2)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _doubleFactorial_1(_hyphenMinus_2(_asterisk_2(2, _k), 1)),
          _binomial_2(_n, _asterisk_2(2, _k)),
        );
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n | sum(upOrDownTo(0, //(n, 2)), { :k | *(doubleFactorial((-((*(2, k)), 1))), binomial(n, *(2, k))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "necklaceCount",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_k, 1);
        let _m = _at_2(__SplVar1, 1);
        /* Statements */
        return _solidus_2(
          _sum_2(
            _divisors_1(_n),
            sl.annotateFunction(function (_d) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _d";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _asterisk_2(
                  _eulerPhi_1(_d),
                  _stirlingS2_2(_solidus_2(_n, _d), _m),
                ),
                _factorial_1(_m),
              );
            }, ["d"]),
          ),
          _n,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_2(
          _divisors_1(_n),
          sl.annotateFunction(function (_d) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _d";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _asterisk_2(
                _eulerPhi_1(_d),
                _circumflexAccent_2(_k, _solidus_2(_n, _d)),
              ),
              _n,
            );
          }, ["d"]),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k | if(isList(k), { let __SplVar1 = assertIsOfSize(k, 1); let m = at(__SplVar1, 1); /(sum(divisors(n), { :d | *(*(eulerPhi(d), stirlingS2(/(n, d), m)), factorial(m)) }), n) }, { sum(divisors(n), { :d | /(*(eulerPhi(d), (^(k, (/(n, d))))), n) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "polygonalNumber",
  ["r", "n"],
  sl.annotateFunction(function (_r, _n) {
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
  }, ["r", "n"]),
  "{ :r :n | *(*((/(1, 2)), n), (+(-(*(n, (-(r, 2))), r), 4))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "stirlingS2",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _round_1(
      _asterisk_2(
        _solidus_2(1, _factorial_1(_k)),
        _sum_2(
          _Span_3(0, _k, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _asterisk_2(
                _circumflexAccent_2(-1, _hyphenMinus_2(_k, _i)),
                _binomial_2(_k, _i),
              ),
              _circumflexAccent_2(_i, _n),
            );
          }, ["i"]),
        ),
      ),
    );
  }, ["n", "k"]),
  "{ :n :k | round((*((/(1, factorial(k))), sum(Span(0, k, 1), { :i | *(*((^(-1, (-(k, i)))), binomial(k, i)), (^(i, n))) })))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "doubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _normal_1(_integerDoubleFactorial_1(_asLargeInteger_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _generalizedDoubleFactorial_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isInteger(self), { normal(integerDoubleFactorial(asLargeInteger(self))) }, { generalizedDoubleFactorial(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "factorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normal_1(_integerFactorial_1(_asLargeInteger_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_plusSign_2(_self, 1));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isNonNegativeInteger(self), { normal(integerFactorial(asLargeInteger(self))) }, { gamma((+(self, 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "factorialPower",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(
      _hyphenMinus_2(_self, _to_2(0, _hyphenMinus_2(_anInteger, 1))),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | product((-(self, to(0,-(anInteger, 1))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "lowerChristoffelWord",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = 1;
    let _y = 0;
    let _answer = [0];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_plusSign_2(_y, 1), _asterisk_2(_self, _x)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, 1);
            return _y = _plusSign_2(_y, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, 0);
            return _x = _plusSign_2(_x, 1);
          }, []),
        );
      }, ["n"]),
    );
    return _answer;
  }, ["self", "m"]),
  "{ :self :m | let x = 1; let y = 0; let answer = [0]; toDo(1, -(m, 1), { :n | if((<=((+(y, 1)), (*(self, x)))), { add(answer,1); y := +(y, 1) }, { add(answer,0); x := +(x, 1) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "stirlingsApproximation",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _sqrt_1(_asterisk_2(_pi_1(2), _n)),
      _circumflexAccent_2(_solidus_2(_n, _e_1(1)), _n),
    );
  }, ["n"]),
  "{ :n | *(sqrt((*(pi(2), n))), (^((/(n, e(1))), n))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Combinatorics",
  "generalizedDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_self, 2);
    let _a = _cos_1(_pi_1(_n));
    let _b = _circumflexAccent_2(
      2,
      _asterisk_2(
        0.25,
        _hyphenMinus_2(_plusSign_2(-3, _asterisk_2(2, _n)), _a),
      ),
    );
    let _c = _circumflexAccent_2(
      _pi_1(1),
      _asterisk_2(0.25, _plusSign_2(-1, _a)),
    );
    /* Statements */
    return _asterisk_2(_asterisk_2(_b, _c), _gamma_1(_asterisk_2(_n, 0.5)));
  }, ["self"]),
  "{ :self | let n = +(self, 2); let a = cos(pi(n)); let b = ^(2, (*(0.25, (-(+(-3, (*(2, n))), a))))); let c = ^(pi(1), (*(0.25, (+(-1, a))))); *(*(b, c), gamma((*(n, 0.5)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Combinatorics",
  "generalizedDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_self, 2);
    let _a = _cos_1(_pi_1(_n));
    let _b = _circumflexAccent_2(
      2,
      _asterisk_2(
        0.25,
        _hyphenMinus_2(_plusSign_2(-3, _asterisk_2(2, _n)), _a),
      ),
    );
    let _c = _circumflexAccent_2(
      _pi_1(1),
      _asterisk_2(0.25, _plusSign_2(-1, _a)),
    );
    /* Statements */
    return _asterisk_2(_asterisk_2(_b, _c), _gamma_1(_asterisk_2(_n, 0.5)));
  }, ["self"]),
  "{ :self | let n = +(self, 2); let a = cos(pi(n)); let b = ^(2, (*(0.25, (-(+(-3, (*(2, n))), a))))); let c = ^(pi(1), (*(0.25, (+(-1, a))))); *(*(b, c), gamma((*(n, 0.5)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isIntegerPartition",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_sum_1(_self), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_self, _isPositiveInteger_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isSortedBy_2(_self, _greaterThanSignEqualsSign_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n | &(=(sum(self), n), { &(allSatisfy(self,isPositiveInteger:/1), { isSortedBy(self,>=) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isTableau",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSortedBy_2(_collect_2(_self, _size_1), _greaterThanSignEqualsSign_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPermutationList_1(_catenate_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _allSatisfy_2(_self, _isSorted_1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _allSatisfy_2(_transposeTableau_1(_self), _isSorted_1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isSortedBy(collect(self,size:/1),>=), { &(isPermutationList(catenate(self)), { &(allSatisfy(self,isSorted:/1), { allSatisfy(transposeTableau(self),isSorted:/1) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "transposeTableau",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _max_1(_collect_2(_self, _size_1));
    /* Statements */
    return _toAsCollect_4(
      1,
      _n,
      _species_1(_first_1(_self)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _deleteMissing_1(
          _collect_2(
            _self,
            sl.annotateFunction(function (_row) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _row";
                throw new Error(errorMessage);
              } /* Statements */
              return _atOrNil_2(_row, _index);
            }, ["row"]),
          ),
        );
      }, ["index"]),
    );
  }, ["self"]),
  "{ :self | let n = max(collect(self,size:/1)); toAsCollect(1, n, species(first(self)), { :index | deleteMissing(collect(self, { :row | atOrNil(row,index) })) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Combinatorics",
  "deBruijnSequence",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_1(
      _select_2(
        _lyndonWords_2(_self, _anInteger),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _divisible_2(_anInteger, _size_1(_each));
        }, ["each"]),
      ),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | catenate(select(lyndonWords(self,anInteger), { :each | divisible(anInteger,size(each)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "bockerLiptakAlgorithm",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_a);
    let _n = _List_2(_at_2(_a, 1), Infinity);
    let _t = [];
    /* Statements */
    _atPut_3(_n, 1, 0);
    _add_2(_t, _copy_1(_n));
    _toDo_3(
      2,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _gcd_2(_at_2(_a, 1), _at_2(_a, _i));
        /* Statements */
        _toDo_3(
          1,
          _d,
          sl.annotateFunction(function (_r) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _r";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _q = _asList_1(
              _thenTo_3(
                _r,
                _plusSign_2(_r, _d),
                _plusSign_2(_r, _hyphenMinus_2(_at_2(_a, 1), _d)),
              ),
            );
            let _m = _min_1(_atAll_2(_n, _q));
            /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_m, Infinity),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _timesRepeat_2(
                  _solidusSolidus_2(_at_2(_a, 1), _d),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _p, _rp;
                    /* Statements */
                    _m = _plusSign_2(_m, _at_2(_a, _i));
                    _p = _percentSign_2(_m, _at_2(_a, 1));
                    _m = _min_2(_m, _at_2(_n, _plusSign_2(_p, 1)));
                    return _atPut_3(_n, _plusSign_2(_p, 1), _m);
                  }, []),
                );
              }, []),
            );
          }, ["r"]),
        );
        return _add_2(_t, _copy_1(_n));
      }, ["i"]),
    );
    return _t;
  }, ["a"]),
  "{ :a | let k = size(a); let n = List(at(a, 1), Infinity); let t = []; atPut(n, 1, 0); add(t,copy(n)); toDo(2, k, { :i | let d = gcd(at(a, 1), at(a, i)); toDo(1, d, { :r | let q = asList(thenTo(r, +(r, d), +(r, (-(at(a, 1), d))))); let m = min(atAll(n,q)); ifTrue((<(m, Infinity)), { timesRepeat((//(at(a, 1), d)), { var p, rp;m := +(m, at(a, i)); p := %(m, at(a, 1)); m := min(m, at(n, +(p, 1))); atPut(n, +(p, 1), m) }) }) }); add(t,copy(n)) }); t }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "frobeniusNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _exclamationMarkEqualsSign_2(_gcd_1(_self), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return Infinity;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _last_1(_bockerLiptakAlgorithm_1(_sorted_1(_self)));
            /* Statements */
            return _hyphenMinus_2(_max_1(_r), _min_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(includes(self,1), { -1 }, { if((!=(gcd(self), 1)), { Infinity }, { let r = last(bockerLiptakAlgorithm(sorted(self))); -(max(r), min(self)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "frobeniusSolve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ert = _bockerLiptakAlgorithm_1(_a);
    let _c = _List_2(_size_1(_a), 0);
    let _answer = [];
    let _f_2 = sl.annotateFunction(function (_m, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _m, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_i, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _atPut_3(_c, 1, _solidusSolidus_2(_m, _at_2(_a, 1)));
          return _add_2(_answer, _copy_1(_c));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _lc = _lcm_2(_at_2(_a, 1), _at_2(_a, _i));
          let _l = _solidusSolidus_2(_lc, _at_2(_a, _i));
          /* Statements */
          return _toDo_3(
            0,
            _hyphenMinus_2(_l, 1),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _mm = _hyphenMinus_2(_m, _asterisk_2(_j, _at_2(_a, _i)));
              let _r = _percentSign_2(_mm, _at_2(_a, 1));
              let _lb = _at_2(
                _at_2(_ert, _hyphenMinus_2(_i, 1)),
                _plusSign_2(_r, 1),
              );
              /* Statements */
              _atPut_3(_c, _i, _j);
              return _ifTrue_2(
                _exclamationMarkEqualsSign_2(_lb, Infinity),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _whileTrue_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _greaterThanSignEqualsSign_2(_mm, _lb);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _f_2(_mm, _hyphenMinus_2(_i, 1));
                      _mm = _hyphenMinus_2(_mm, _lc);
                      return _atPut_3(_c, _i, _plusSign_2(_at_2(_c, _i), _l));
                    }, []),
                  );
                }, []),
              );
            }, ["j"]),
          );
        }, []),
      );
    }, ["m", "i"]);
    /* Statements */
    _f_2(_b, _size_1(_a));
    return _sortBy_2(_answer, _precedes_2);
  }, ["a", "b"]),
  "{ :a :b | let ert = bockerLiptakAlgorithm(a); let c = List(size(a), 0); let answer = []; let f = { :m :i | if((=(i, 1)), { atPut(c, 1, //(m, at(a, 1))); add(answer,copy(c)) }, { let lc = lcm(at(a, 1), at(a, i)); let l = //(lc, at(a, i)); toDo(0, -(l, 1), { :j | let mm = -(m, (*(j, at(a, i)))); let r = %(mm, at(a, 1)); let lb = at(at(ert, -(i, 1)), +(r, 1)); atPut(c, i, j); ifTrue((!=(lb, Infinity)), { whileTrue({ >=(mm, lb) }, { f(mm, -(i, 1)); mm := -(mm, lc); atPut(c, i, +(at(c, i), l)) }) }) }) }) }; f(b, size(a)); sortBy(answer,precedes:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isLatticeWord",
  ["self", "alphabet"],
  sl.annotateFunction(function (_self, _alphabet) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alphabet";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _letters = _allButLast_1(_alphabet);
    /* Statements */
    return _allSatisfy_2(
      _prefixes_1(_self),
      sl.annotateFunction(function (_word) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _word";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _asIdentityMultiset_1(_word);
        /* Statements */
        return _allSatisfy_2(
          _letters,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _b = _occurrencesOf_2(_a, _i);
            let _c = _occurrencesOf_2(_a, _plusSign_2(_i, 1));
            /* Statements */
            return _greaterThanSignEqualsSign_2(_b, _c);
          }, ["i"]),
        );
      }, ["word"]),
    );
  }, ["self", "alphabet"]),
  "{ :self :alphabet | let letters = allButLast(alphabet); allSatisfy(prefixes(self), { :word | let a = asIdentityMultiset(word); allSatisfy(letters, { :i | let b = occurrencesOf(a,i); let c = occurrencesOf(a,+(i, 1)); >=(b, c) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isLatticeWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alphabet = _sort_1(_nub_1(_self));
    /* Statements */
    return _isLatticeWord_2(_self, _alphabet);
  }, ["self"]),
  "{ :self | let alphabet = sort(nub(self)); isLatticeWord(self,alphabet) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isYamanouchiWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLatticeWord_1(_reverse_1(_self));
  }, ["self"]),
  "{ :self | isLatticeWord(reverse(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Combinatorics",
  "deBruijnSequence",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _deBruijnSequence_2(_characters_1(_self), _anInteger),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | stringCatenate(deBruijnSequence(characters(self),anInteger)) }",
);
