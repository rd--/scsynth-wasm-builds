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
  "doubleFactorial",
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
        } /* Statements */
        return _error_2(
          _self,
          "@Integer>>doubleFactorial: not valid for negative integers",
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
            return _max_2(_self, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _self,
              _doubleFactorial_1(_hyphenMinus_2(_self, 2)),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isNegative(self), { error(self,'@Integer>>doubleFactorial: not valid for negative integers') }, { if((<=(self, 3)), { max(self,1) }, { *(self, doubleFactorial((-(self, 2)))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "factorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Integer>>factorial: not valid for negative integers");
      }, []),
    );
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 1),
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
        let _next = _self;
        let _answer = _self;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_next, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _next = _hyphenMinus_2(_next, 1);
            return _answer = _asterisk_2(_answer, _next);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | ifTrue(isNegative(self), { error('@Integer>>factorial: not valid for negative integers') }); if((<=(self, 1)), { 1 }, { let next = self; let answer = self; whileTrue({ >(next, 1) }, { next := -(next, 1); answer := *(answer, next) }); answer }) }",
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
    } /* Statements */
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
            _upOrDownTo_2(_one_1(_self), _self),
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
        return _error_1(
          "@Integer>>hyperfactorial: not implemented for non-integer",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isInteger(self), { product(collect(upOrDownTo(one(self), self), { :k | ^(k, k) })) }, { error('@Integer>>hyperfactorial: not implemented for non-integer') }) }",
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
          _tildeEqualsSign_2(_gcd_1(_self), 1),
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
  "{ :self | if(includes(self,1), { -1 }, { if((~=(gcd(self), 1)), { Infinity }, { let r = last(bockerLiptakAlgorithm(sorted(self))); -(max(r), min(self)) }) }) }",
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
                _tildeEqualsSign_2(_lb, Infinity),
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
  "{ :a :b | let ert = bockerLiptakAlgorithm(a); let c = List(size(a), 0); let answer = []; let f = { :m :i | if((=(i, 1)), { atPut(c, 1, //(m, at(a, 1))); add(answer,copy(c)) }, { let lc = lcm(at(a, 1), at(a, i)); let l = //(lc, at(a, i)); toDo(0, -(l, 1), { :j | let mm = -(m, (*(j, at(a, i)))); let r = %(mm, at(a, 1)); let lb = at(at(ert, -(i, 1)), +(r, 1)); atPut(c, i, j); ifTrue((~=(lb, Infinity)), { whileTrue({ >=(mm, lb) }, { f(mm, -(i, 1)); mm := -(mm, lc); atPut(c, i, +(at(c, i), l)) }) }) }) }) }; f(b, size(a)); sortBy(answer,precedes:/2) }",
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
