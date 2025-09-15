sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "aliquotSequence",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _n;
    let _b = _aliquotSum_1(_a);
    let _r = [_a];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_i, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _exclamationMarkEqualsSign_2(_b, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _not_1(_includes_2(_r, _b)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSign_2(_a, 1);
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
        _add_2(_r, _b);
        _i = _plusSign_2(_i, 1);
        _a = _b;
        return _ifTrue_2(
          _greaterThanSign_2(_a, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _b = _aliquotSum_1(_a);
          }, []),
        );
      }, []),
    );
    return _r;
  }, ["n", "k"]),
  "{ :n :k | let a = n; let b = aliquotSum(a); let r = [a]; let i = 1; whileTrue({ &(<(i, k), { &(!=(b, n), { &(not(includes(r,b)), { >(a, 1) }) }) }) }, { add(r,b); i := +(i, 1); a := b; ifTrue((>(a, 0)), { b := aliquotSum(a) }) }); r }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "aliquotSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _aliquotSequence_2(_n, 21);
  }, ["n"]),
  "{ :n | aliquotSequence(n, 21) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "beattySequence",
  ["n", "theta"],
  sl.annotateFunction(function (_n, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_Span_3(1, _n, 1), _theta));
  }, ["n", "theta"]),
  "{ :n :theta | floor((*(Span(1, n, 1), theta))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "bernoulliNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_bernoulliSequence_1(_plusSign_2(_k, 1)));
  }, ["k"]),
  "{ :k | last(bernoulliSequence((+(k, 1)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "bernoulliSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_k);
    let _b = _List_1(_k);
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_a, _plusSign_2(_n, 1), _Fraction_2(1n, _plusSign_2(_n, 1)));
        _toByDo_4(
          _n,
          1,
          -1,
          sl.annotateFunction(function (_j) {
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
          }, ["j"]),
        );
        return _atPut_3(_b, _plusSign_2(_n, 1), _at_2(_a, 1));
      }, ["n"]),
    );
    _ifTrue_2(
      _greaterThanSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_b, 2, _Fraction_2(-1n, 2n));
      }, []),
    );
    return _b;
  }, ["k"]),
  "{ :k | let a = List(k); let b = List(k); toDo(0, -(k, 1), { :n | atPut(a, +(n, 1), Fraction(1L, +(n, 1))); toByDo(n, 1, -1, { :j | atPut(a, j, *(j, (-(at(a, j), at(a, +(j, 1)))))) }); atPut(b, +(n, 1), at(a, 1)) }); ifTrue((>(k, 1)), { atPut(b, 2, Fraction(-1L, 2L)) }); b }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "calkinWilfSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_self);
    /* Statements */
    _atPut_3(_answer, 1, _Fraction_2(1n, 1n));
    _toDo_3(
      2,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _at_2(_answer, _hyphenMinus_2(_i, 1));
        let _t = _plusSign_2(
          _hyphenMinus_2(_asterisk_2(_floor_1(_p), 2), _p),
          1,
        );
        /* Statements */
        return _atPut_3(_answer, _i, _solidus_2(1, _t));
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = List(self); atPut(answer, 1, Fraction(1L, 1L)); toDo(2, self, { :i | let p = at(answer, -(i, 1)); let t = +(-(*(floor(p), 2), p), 1); atPut(answer, i, /(1, t)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "champernowneSequence",
  ["b", "n"],
  sl.annotateFunction(function (_b, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_answer, _integerDigits_2(_i, _b));
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _take_2(_answer, _n);
  }, ["b", "n"]),
  "{ :b :n | let answer = []; let i = 0; whileTrue({ <(size(answer), n) }, { addAll(answer,integerDigits(i,b)); i := +(i, 1) }); take(answer,n) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "collatzSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestWhileList_3(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
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
            return _plusSign_2(_asterisk_2(3, _n), 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(_n, 2);
          }, []),
        );
      }, ["n"]),
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 1);
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | nestWhileList({ :n | if(isOdd(n), { +(*(3, n), 1) }, { /(n, 2) }) }, self, { :n | >(n, 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "fareySequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2([0, 1, 1, _n], 4);
    let _a = _at_2(__SPL1, 1);
    let _b = _at_2(__SPL1, 2);
    let _c = _at_2(__SPL1, 3);
    let _d = _at_2(__SPL1, 4);
    let _answer = [_Fraction_2(_a, _b)];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_c, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _floor_1(_solidus_2(_plusSign_2(_n, _b), _d));
        /* Statements */
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL2 = [
            _c,
            _d,
            _hyphenMinus_2(_asterisk_2(_k, _c), _a),
            _hyphenMinus_2(_asterisk_2(_k, _d), _b),
          ];
          /* Statements */
          _a = _at_2(__SPL2, 1);
          _b = _at_2(__SPL2, 2);
          _c = _at_2(__SPL2, 3);
          return _d = _at_2(__SPL2, 4);
        }, [])();
        return _add_2(_answer, _Fraction_2(_a, _b));
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let __SPL1 = assertIsOfSize([0, 1, 1, n], 4); let a = at(__SPL1, 1); let b = at(__SPL1, 2); let c = at(__SPL1, 3); let d = at(__SPL1, 4); let answer = [Fraction(a, b)]; whileTrue({ <=(c, n) }, { let k = floor((/((+(n, b)), d))); ({ let __SPL2 = [c, d, -(*(k, c), a), -(*(k, d), b)]; a := at(__SPL2, 1); b := at(__SPL2, 2); c := at(__SPL2, 3); d := at(__SPL2, 4) } . ()); add(answer,Fraction(a, b)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "fibonacciSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fibonacciSequenceInto_2(_self, []);
  }, ["self"]),
  "{ :self | fibonacciSequenceInto(self,[]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "fibonacciSequenceInto",
  ["self", "answer"],
  sl.annotateFunction(function (_self, _answer) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _answer";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = 0n;
    let _b = 1n;
    let _i = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_i, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tmp = _b;
        /* Statements */
        _add_2(_answer, _b);
        _b = _plusSign_2(_b, _a);
        _a = _tmp;
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _answer;
  }, ["self", "answer"]),
  "{ :self :answer | let a = 0L; let b = 1L; let i = 0; whileTrue({ <(i, self) }, { let tmp = b; add(answer,b); b := +(b, a); a := tmp; i := +(i, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "fibonacciSequenceUpTo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1];
    let _n = 1;
    let _k = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_n, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _n);
        _n = _plusSign_2(_n, _at_2(_answer, _k));
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = [1]; let n = 1; let k = 1; whileTrue({ <=(n, self) }, { add(answer,n); n := +(n, at(answer, k)); k := +(k, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "finesSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _self),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(
          _collect_2(
            _upOrDownTo_2(0, _n),
            sl.annotateFunction(function (_m) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _m";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _asterisk_2(
                  _circumflexAccent_2(-1, _plusSign_2(_m, _n)),
                  _solidus_2(
                    _solidus_2(
                      _exclamationMark_1(_plusSign_2(_n, _m)),
                      _exclamationMark_1(_n),
                    ),
                    _exclamationMark_1(_m),
                  ),
                ),
                _solidus_2(
                  _plusSign_2(_hyphenMinus_2(_n, _m), 1),
                  _plusSign_2(_n, 1),
                ),
              );
            }, ["m"]),
          ),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(0, self), { :n | sum(collect(upOrDownTo(0, n), { :m | *(*((^(-1, (+(m, n)))), (/(/(!((+(n, m))), !(n)), !(m)))), (/((+(-(n, m), 1)), (+(n, 1))))) })) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gijswijtsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k_1 = sl.annotateFunction(function (_s) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _s";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = 1;
      /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _size_1(_s),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = 1;
            let _y = _last_2(_s, _m);
            let _kk = _solidusSolidus_2(_size_1(_s), _m);
            /* Statements */
            _ifTrue_2(
              _lessThanSignEqualsSign_2(_kk, _z),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_z);
              }, []),
            );
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _k = _size_1(_s);
                let _a = _plusSign_2(
                  _hyphenMinus_2(_k, _asterisk_2(_plusSign_2(_i, 1), _m)),
                  1,
                );
                let _b = _hyphenMinus_2(_k, _asterisk_2(_i, _m));
                /* Statements */
                return _ampersand_2(
                  _lessThanSign_2(_asterisk_2(_i, _m), _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(_copyFromTo_3(_s, _a, _b), _y);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i = _plusSign_2(_i, 1);
              }, []),
            );
            return _z = _max_2(_z, _i);
          }, ["m"]),
        );
        return null;
      }, ["return:/1"]));
    }, ["s"]);
    let _answer = [1];
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _k_1(_answer));
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let k = { :s | let z = 1; valueWithReturn({ :return:/1 | toDo(1, size(s), { :m | let i = 1; let y = last(s,m); let kk = //(size(s), m); ifTrue((<=(kk, z)), { return(z) }); whileTrue({ let k = size(s); let a = +(-(k, (*((+(i, 1)), m))), 1); let b = -(k, (*(i, m))); &((<(*(i, m), k)), { =(copyFromTo(s,a, b), y) }) }, { i := +(i, 1) }); z := max(z, i) }); nil }) }; let answer = [1]; toDo(2, n, { :i | add(answer,k(answer)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "goebelsSequence",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_m);
    /* Statements */
    _do_2(
      _to_2(0, _hyphenMinus_2(_m, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _plusSign_2(_n, 1),
          _if_3(
            _lessThanSign_2(_n, 2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1n;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _sum_2(
                  _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(
                      _at_2(_a, _plusSign_2(_k, 1)),
                      2,
                    );
                  }, ["k"]),
                ),
                _hyphenMinus_2(_n, 1),
              );
            }, []),
          ),
        );
      }, ["n"]),
    );
    return _a;
  }, ["m"]),
  "{ :m | let a = List(m); do(to(0,-(m, 1)), { :n | atPut(a, +(n, 1), if((<(n, 2)), { 1L }, { /(sum(upOrDownTo(0, -(n, 1)), { :k | ^(at(a, +(k, 1)), 2) }), (-(n, 1))) })) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "golombsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 1);
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _i,
          _plusSign_2(
            1,
            _at_2(
              _a,
              _hyphenMinus_2(_i, _at_2(_a, _at_2(_a, _hyphenMinus_2(_i, 1)))),
            ),
          ),
        );
      }, ["i"]),
    );
    return _a;
  }, ["n"]),
  "{ :n | let a = List(n, 1); toDo(2, n, { :i | atPut(a, i, +(1, at(a, -(i, at(a, at(a, -(i, 1))))))) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gouldsNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _hammingWeight_1(_self));
  }, ["self"]),
  "{ :self | ^(2, hammingWeight(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "gouldsSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(0, _hyphenMinus_2(_k, 1)), _gouldsNumber_1);
  }, ["k"]),
  "{ :k | collect(upOrDownTo(0, -(k, 1)),gouldsNumber:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "hammersleyPointSet",
  ["d", "n"],
  sl.annotateFunction(function (_d, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_d, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _n),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return [_vanDerCorputNumber_2(_i, 2), _Fraction_2(_i, _n)];
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_d, "hammersleyPointSet: not implemented");
      }, []),
    );
  }, ["d", "n"]),
  "{ :d :n | if((=(d, 2)), { collect(upOrDownTo(1, n), { :i | [vanDerCorputNumber(i,2), Fraction(i, n)] }) }, { error(d,'hammersleyPointSet: not implemented') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmonicNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_reciprocal_1(_Span_3(1, _self, 1)));
  }, ["self"]),
  "{ :self | sum(reciprocal(Span(1, self, 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmoniousNumber",
  ["d", "n"],
  sl.annotateFunction(function (_d, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = 2;
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x = _circumflexAccent_2(
          _plusSign_2(1, _x),
          _solidus_2(1, _plusSign_2(_d, 1)),
        );
      }, []),
    );
    return _x;
  }, ["d", "n"]),
  "{ :d :n | let x = 2; timesRepeat(n, { x := ^((+(1, x)), (/(1, (+(d, 1))))) }); x }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "harmoniousNumber",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _harmoniousNumber_2(_d, 25);
  }, ["d"]),
  "{ :d | harmoniousNumber(d,25) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "hofstadterQSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _memoize_2(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_n, 2),
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
              _f_1(_hyphenMinus_2(_n, _f_1(_hyphenMinus_2(_n, 1)))),
              _f_1(_hyphenMinus_2(_n, _f_1(_hyphenMinus_2(_n, 2)))),
            );
          }, []),
        );
      }, ["n"]),
      true,
    );
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _self), _f_1);
  }, ["self"]),
  "{ :self | let f:/1 = memoize({ :n | if((<=(n, 2)), { 1 }, { +(f(-(n, f(-(n, 1)))), f(-(n, f(-(n, 2))))) }) },true); collect(upOrDownTo(1, self),f:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "inventorySequence",
  ["terms"],
  sl.annotateFunction(function (_terms) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _terms";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _number = 0;
    let _answer = [0];
    let _inventory = _asIdentityBag_1([0]);
    /* Statements */
    _do_2(
      _upOrDownTo_2(2, _terms),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _count = _occurrencesOf_2(_inventory, _number);
        /* Statements */
        _number = _if_3(
          _equalsSign_2(_count, 0),
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
            return _plusSign_2(_number, 1);
          }, []),
        );
        _add_2(_answer, _count);
        return _add_2(_inventory, _count);
      }, ["n"]),
    );
    return _answer;
  }, ["terms"]),
  "{ :terms | let number = 0; let answer = [0]; let inventory = asIdentityBag([0]); do(upOrDownTo(2, terms), { :n | let count = occurrencesOf(inventory,number); number := if((=(count, 0)), { 0 }, { +(number, 1) }); add(answer,count); add(inventory,count) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "kolakoskiSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [1, 2, 2];
    /* Statements */
    return _take_2(
      _injectInto_3(
        _asList_1(_upOrDownTo_2(3, _n)),
        _a,
        sl.annotateFunction(function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(
            _i,
            _List_2(_at_2(_i, _j), _mod_3(_j, 2, 1)),
          );
        }, ["i", "j"]),
      ),
      _n,
    );
  }, ["n"]),
  "{ :n | let a = [1, 2, 2]; take(injectInto(asList(upOrDownTo(3, n)), a, { :i :j | ++(i, List(at(i, j), mod(j, 2, 1))) }),n) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lookAndSaySequence",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _flatten_1(
          _collect_2(
            _split_2(_n, _equalsSign_2),
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return [_size_1(_x), _first_1(_x)];
            }, ["x"]),
          ),
        );
      }, ["n"]),
      [1],
      _hyphenMinus_2(_m, 1),
    );
  }, ["m"]),
  "{ :m | nestList({ :n | flatten(collect(split(n,=), { :x | [size(x), first(x)] })) },[1], -(m, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lucasNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 1),
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
        let _phi = _goldenRatio_1(1);
        /* Statements */
        return _round_1(_circumflexAccent_2(_phi, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(self, 1)), { 1 }, { let phi = goldenRatio(1); round((^(phi, self))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lucasNumbers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([1, 1], [1, 3], _self);
  }, ["self"]),
  "{ :self | linearRecurrence([1, 1],[1, 3], self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "mallowsSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 1);
    /* Statements */
    _toDo_3(
      3,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _i,
          _plusSign_2(
            _at_2(_a, _at_2(_a, _hyphenMinus_2(_i, 2))),
            _at_2(_a, _hyphenMinus_2(_i, _at_2(_a, _hyphenMinus_2(_i, 2)))),
          ),
        );
      }, ["i"]),
    );
    return _a;
  }, ["n"]),
  "{ :n | let a = List(n, 1); toDo(3, n, { :i | atPut(a, i, +(at(a, at(a, -(i, 2))), at(a, -(i, at(a, -(i, 2)))))) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "moserDeBruijnSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromDigits_2(_riffle_2(_integerDigits_2(_n, 2), [0]), 2);
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(0, -(self, 1)), { :n | fromDigits(riffle(integerDigits(n,2),[0]),2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "motzkinNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_motzkinSequence_1(_k));
  }, ["k"]),
  "{ :k | last(motzkinSequence(k)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "motzkinSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = [1, 1];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _solidus_2(
          _plusSign_2(_asterisk_2(2, _n), 1),
          _plusSign_2(_n, 2),
        );
        let _b = _solidus_2(
          _hyphenMinus_2(_asterisk_2(3, _n), 3),
          _plusSign_2(_n, 2),
        );
        let _c = _plusSign_2(
          _asterisk_2(_a, _at_2(_s, _n)),
          _asterisk_2(_b, _at_2(_s, _hyphenMinus_2(_n, 1))),
        );
        /* Statements */
        return _add_2(_s, _c);
      }, ["n"]),
    );
    return _s;
  }, ["k"]),
  "{ :k | let s = [1, 1]; toDo(2, -(k, 1), { :n | let a = /((+((*(2, n)), 1)), (+(n, 2))); let b = /((-((*(3, n)), 3)), (+(n, 2))); let c = +((*(a, at(s, n))), (*(b, at(s, -(n, 1))))); add(s,c) }); s }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "narayanaSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1, 1];
    /* Statements */
    _toDo_3(
      4,
      _self,
      sl.annotateFunction(function (_i) {
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
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = [1, 1, 1]; toDo(4, self, { :i | add(answer,+(at(answer, -(i, 1)), at(answer, -(i, 3)))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "noergaardInfinitySequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _memoize_2(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
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
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_percentSign_2(_n, 2), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _plusSign_2(
                  _f_1(_solidusSolidus_2(_hyphenMinus_2(_n, 1), 2)),
                  1,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_1(_f_1(_solidusSolidus_2(_n, 2)));
              }, []),
            );
          }, []),
        );
      }, ["n"]),
      true,
    );
    /* Statements */
    return _collect_2(_upOrDownTo_2(0, _hyphenMinus_2(_self, 1)), _f_1);
  }, ["self"]),
  "{ :self | let f:/1 = memoize({ :n | if((=(n, 0)), { 0 }, { if((=(%(n, 2), 1)), { +(f(//((-(n, 1)), 2)), 1) }, { -(f(//(n, 2))) }) }) },true); collect(upOrDownTo(0, -(self, 1)),f:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "noergaardRhythmicInfinitySystem",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = [3];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _z,
          _fibonacci_1(
            _plusSign_2(
              _size_1(_split_2(_integerDigits_2(_i, 2), _equalsSign_2)),
              4,
            ),
          ),
        );
      }, ["i"]),
    );
    return _z;
  }, ["n"]),
  "{ :n | let z = [3]; toDo(1, -(n, 1), { :i | add(z,fibonacci((+(size(split(integerDigits(i,2),=)), 4)))) }); z }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "padovanSequence",
  ["self", "initial"],
  sl.annotateFunction(function (_self, _initial) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _initial";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_initial);
    /* Statements */
    _toDo_3(
      4,
      _self,
      sl.annotateFunction(function (_i) {
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
      }, ["i"]),
    );
    return _answer;
  }, ["self", "initial"]),
  "{ :self :initial | let answer = copy(initial); toDo(4, self, { :i | add(answer,+(at(answer, -(i, 2)), at(answer, -(i, 3)))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "padovanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 1, 1]);
  }, ["self"]),
  "{ :self | padovanSequence(self,[1, 1, 1]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "pellNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _x = _sqrt_1(2);
    /* Statements */
    return _real_1(
      _solidus_2(
        _hyphenMinus_2(
          _circumflexAccent_2(_plusSign_2(1, _x), _n),
          _circumflexAccent_2(_hyphenMinus_2(1, _x), _n),
        ),
        _asterisk_2(2, _x),
      ),
    );
  }, ["self"]),
  "{ :self | let n = self; let x = sqrt(2); real((/((-((^((+(1, x)), n)), (^((-(1, x)), n)))), (*(2, x))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "pellNumbers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [0, 1], _self);
  }, ["self"]),
  "{ :self | linearRecurrence([2, 1],[0, 1], self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "pellLucasNumbers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearRecurrence_3([2, 1], [2, 2], _self);
  }, ["self"]),
  "{ :self | linearRecurrence([2, 1],[2, 2], self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "perrinSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [3, 0, 2]);
  }, ["self"]),
  "{ :self | padovanSequence(self,[3, 0, 2]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "recamanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _seen = _IdentitySet_1([0]);
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _hyphenMinus_2(_at_2(_answer, _n), _n);
        /* Statements */
        _ifTrue_2(
          _verticalLine_2(
            _lessThanSignEqualsSign_2(_next, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includes_2(_seen, _next);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _next = _plusSign_2(_at_2(_answer, _n), _n);
          }, []),
        );
        _atPut_3(_answer, _plusSign_2(_n, 1), _next);
        return _include_2(_seen, _next);
      }, ["n"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = List(self, 0); let seen = IdentitySet([0]); toDo(1, -(self, 1), { :n | let next = -(at(answer, n), n); ifTrue((|((<=(next, 0)), { includes(seen,next) })), { next := +(at(answer, n), n) }); atPut(answer, +(n, 1), next); include(seen,next) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "regularPaperfoldingSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _plusSign_2(_n, 1);
        let _b = _circumflexAccent_2(2, _integerExponent_2(_a, 2));
        let _c = _solidus_2(_hyphenMinus_2(_solidus_2(_a, _b), 1), 2);
        /* Statements */
        return _boole_1(_isEven_1(_c));
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(0, -(self, 1)), { :n | let a = +(n, 1); let b = ^(2, integerExponent(a, 2)); let c = /((-((/(a, b)), 1)), 2); boole(isEven(c)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "schroderNumber",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_schroderSequence_1(_k));
  }, ["k"]),
  "{ :k | last(schroderSequence(k)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "schroderSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = [1, 2];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _solidus_2(
          _hyphenMinus_2(_asterisk_2(6, _n), 3),
          _plusSign_2(_n, 1),
        );
        let _b = _solidus_2(_hyphenMinus_2(_n, 2), _plusSign_2(_n, 1));
        let _c = _hyphenMinus_2(
          _asterisk_2(_a, _at_2(_s, _n)),
          _asterisk_2(_b, _at_2(_s, _hyphenMinus_2(_n, 1))),
        );
        /* Statements */
        return _add_2(_s, _c);
      }, ["n"]),
    );
    return _s;
  }, ["k"]),
  "{ :k | let s = [1, 2]; toDo(2, -(k, 1), { :n | let a = /((-((*(6, n)), 3)), (+(n, 1))); let b = /((-(n, 2)), (+(n, 1))); let c = -((*(a, at(s, n))), (*(b, at(s, -(n, 1))))); add(s,c) }); s }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "selfCountingNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_plusSign_2(0.5, _sqrt_1(_asterisk_2(2, _n))));
  }, ["n"]),
  "{ :n | floor((+(0.5, sqrt((*(2, n)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "selfCountingSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(1, _k), _selfCountingNumber_1);
  }, ["k"]),
  "{ :k | collect(upOrDownTo(1, k),selfCountingNumber:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "somosSequence",
  ["k", "m"],
  sl.annotateFunction(function (_k, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_1(_m);
    /* Statements */
    _do_2(
      _to_2(0, _hyphenMinus_2(_m, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _a,
          _plusSign_2(_n, 1),
          _if_3(
            _lessThanSign_2(_n, _k),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1n;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _sum_2(
                  _upOrDownTo_2(1, _floor_1(_solidus_2(_k, 2))),
                  sl.annotateFunction(function (_j) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _j";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _asterisk_2(
                      _at_2(_a, _plusSign_2(_hyphenMinus_2(_n, _j), 1)),
                      _at_2(
                        _a,
                        _plusSign_2(
                          _hyphenMinus_2(_n, _hyphenMinus_2(_k, _j)),
                          1,
                        ),
                      ),
                    );
                  }, ["j"]),
                ),
                _at_2(_a, _plusSign_2(_hyphenMinus_2(_n, _k), 1)),
              );
            }, []),
          ),
        );
      }, ["n"]),
    );
    return _a;
  }, ["k", "m"]),
  "{ :k :m | let a = List(m); do(to(0,-(m, 1)), { :n | atPut(a, +(n, 1), if((<(n, k)), { 1L }, { /(sum(upOrDownTo(1, floor((/(k, 2)))), { :j | *(at(a, +(-(n, j), 1)), at(a, +(-(n, (-(k, j))), 1))) }), at(a, +(-(n, k), 1))) })) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sternBrocotNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_n, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _n;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isEven_1(_n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _f_1(_solidus_2(_n, 2));
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _m = _solidus_2(_hyphenMinus_2(_n, 1), 2);
              /* Statements */
              return _plusSign_2(_f_1(_m), _f_1(_plusSign_2(_m, 1)));
            }, []),
          );
        }, []),
      );
    }, ["n"]);
    /* Statements */
    return _f_1(_self);
  }, ["self"]),
  "{ :self | let f = { :n | if((<(n, 2)), { n }, { if(isEven(n), { f(/(n, 2)) }, { let m = /((-(n, 1)), 2); +(f(m), f(+(m, 1))) }) }) }; f(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sternBrocotSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [1, 1];
    let _index = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_size_1(_answer), _n);
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let answer = [1, 1]; let index = 2; whileTrue({ <(size(answer), n) }, { let c = at(answer, index); add(answer,+(c, at(answer, -(index, 1)))); add(answer,c); index := +(index, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "sylvestersSequence",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_hyphenMinus_2(_circumflexAccent_2(_x, 2), _x), 1);
      }, ["x"]),
      2n,
      _hyphenMinus_2(_n, 1),
    );
  }, ["n"]),
  "{ :n | nestList({ :x | +(-((^(x, 2)), x), 1) },2L, -(n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "thueMorse",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_digitCount_3(_index, 2, 1), 2);
  }, ["index"]),
  "{ :index | %(digitCount(index,2, 1), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "thueMorseSequence",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_k, 0),
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
        } /* Temporaries */
        let _answer = _List_1(_k);
        let _i = 2;
        let _iMax = 1;
        /* Statements */
        _atPut_3(_answer, 1, 0);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _lessThanSignEqualsSign_2(_i, _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSignEqualsSign_2(_i, _asterisk_2(2, _iMax));
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
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
              }, []),
            );
            return _iMax = _asterisk_2(_iMax, 2);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["k"]),
  "{ :k | if((<=(k, 0)), { [] }, { let answer = List(k); let i = 2; let iMax = 1; atPut(answer, 1, 0); whileTrue({ <=(i, k) }, { whileTrue({ &(<=(i, k), { <=(i, (*(2, iMax))) }) }, { atPut(answer, i, -(1, at(answer, -(i, iMax)))); i := +(i, 1) }); iMax := *(iMax, 2) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "vanDerCorputNumber",
  ["n", "base"],
  sl.annotateFunction(function (_n, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = 0;
    let _q = 1;
    let _nn = _n;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_nn, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _p = _plusSign_2(_asterisk_2(_p, _base), _percentSign_2(_nn, _base));
        _q = _asterisk_2(_q, _base);
        return _nn = _solidusSolidus_2(_nn, _base);
      }, []),
    );
    return _Fraction_2(_p, _q);
  }, ["n", "base"]),
  "{ :n :base | let p = 0; let q = 1; let nn = n; whileFalse({ =(nn, 0) }, { p := +((*(p, base)), (%(nn, base))); q := *(q, base); nn := //(nn, base) }); Fraction(p, q) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "vanDerLaanSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padovanSequence_2(_self, [1, 0, 1]);
  }, ["self"]),
  "{ :self | padovanSequence(self,[1, 0, 1]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "wythoffArray",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _floor_1(_asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _phi));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _floor_1(
              _asterisk_2(_floor_1(_asterisk_2(_m, _phi)), _square_1(_phi)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _wythoffArray_2(_m, _hyphenMinus_2(_n, 2)),
              _wythoffArray_2(_m, _hyphenMinus_2(_n, 1)),
            );
          }, []),
        );
      }, []),
    );
  }, ["m", "n"]),
  "{ :m :n | let phi = goldenRatio(1); if((=(n, 1)), { floor((*(floor((*(m, phi))), phi))) }, { if((=(n, 2)), { floor((*(floor((*(m, phi))), square(phi)))) }, { +(wythoffArray(m,-(n, 2)), wythoffArray(m,-(n, 1))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "wythoffLower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _goldenRatio_1(1)));
  }, ["self"]),
  "{ :self | floor((*(self, goldenRatio(1)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "wythoffPair",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _goldenRatio_1(1);
    /* Statements */
    return [
      _floor_1(_asterisk_2(_self, _phi)),
      _floor_1(_asterisk_2(_self, _square_1(_phi))),
    ];
  }, ["self"]),
  "{ :self | let phi = goldenRatio(1); [floor((*(self, phi))), floor((*(self, square(phi))))] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "wythoffUpper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_asterisk_2(_self, _square_1(_goldenRatio_1(1))));
  }, ["self"]),
  "{ :self | floor((*(self, square(goldenRatio(1))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "haltonSequence",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(_collect_2(
      _self,
      sl.annotateFunction(function (_b) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _vanDerCorputNumber_2(_upOrDownTo_2(1, _k), _b);
      }, ["b"]),
    ));
  }, ["self", "k"]),
  "{ :self :k | transpose(collect(self, { :b | vanDerCorputNumber(upOrDownTo(1, k),b) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n", "k0"],
  sl.annotateFunction(function (_alpha, _n, _k0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _n, _k0";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(
      _collect_2(
        _alpha,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _kroneckerSequence_3(_each, _n, _k0);
        }, ["each"]),
      ),
    );
  }, ["alpha", "n", "k0"]),
  "{ :alpha :n :k0 | transpose(collect(alpha, { :each | kroneckerSequence(each,n, k0) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n"],
  sl.annotateFunction(function (_alpha, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(
      _collect_2(
        _alpha,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _kroneckerSequence_2(_each, _n);
        }, ["each"]),
      ),
    );
  }, ["alpha", "n"]),
  "{ :alpha :n | transpose(collect(alpha, { :each | kroneckerSequence(each,n) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "locallyCatenativeSequence",
  ["w", "i", "n", "f"],
  sl.annotateFunction(function (_w, _i, _n, _f) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _i, _n, _f";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _copy_1(_w);
    let _k = _size_1(_i);
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _size_1(_u);
        /* Statements */
        return _add_2(
          _u,
          _catenate_1(
            _collect_2(
              _upOrDownTo_2(1, _k),
              sl.annotateFunction(function (_m) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _m";
                  throw new Error(errorMessage);
                } /* Statements */
                return _value_2(
                  _at_2(_f, _m),
                  _at_2(_u, _plusSign_2(_hyphenMinus_2(_j, _at_2(_i, _m)), 1)),
                );
              }, ["m"]),
            ),
          ),
        );
      }, []),
    );
    return _u;
  }, ["w", "i", "n", "f"]),
  "{ :w :i :n :f | let u = copy(w); let k = size(i); timesRepeat(n, { let j = size(u); add(u,catenate(collect(upOrDownTo(1, k), { :m | value(at(f, m),at(u, +(-(j, at(i, m)), 1))) }))) }); u }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "locallyCatenativeSequence",
  ["w", "i", "n"],
  sl.annotateFunction(function (_w, _i, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _w, _i, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _locallyCatenativeSequence_4(
      _w,
      _i,
      _n,
      _List_2(_size_1(_w), _identity_1),
    );
  }, ["w", "i", "n"]),
  "{ :w :i :n | locallyCatenativeSequence(w, i, n, List(size(w), identity:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n"],
  sl.annotateFunction(function (_alpha, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(
      _asterisk_2(_upOrDownTo_2(0, _hyphenMinus_2(_n, 1)), _alpha),
      1,
    );
  }, ["alpha", "n"]),
  "{ :alpha :n | %((*(upOrDownTo(0, -(n, 1)), alpha)), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "kroneckerSequence",
  ["alpha", "n", "k0"],
  sl.annotateFunction(function (_alpha, _n, _k0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _n, _k0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _List_1(_n);
    /* Statements */
    _atPut_3(_s, 1, _k0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _s,
          _i,
          _percentSign_2(
            _plusSign_2(_at_2(_s, _hyphenMinus_2(_i, 1)), _alpha),
            1,
          ),
        );
      }, ["i"]),
    );
    return _s;
  }, ["alpha", "n", "k0"]),
  "{ :alpha :n :k0 | let s = List(n); atPut(s, 1, k0); toDo(2, n, { :i | atPut(s, i, %((+(at(s, -(i, 1)), alpha)), 1)) }); s }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "IntegerSequence",
  "tagSystem",
  ["m", "r", "i", "k"],
  sl.annotateFunction(function (_m, _r, _i, _k) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _m, _r, _i, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _word = _asList_1(_i);
    let _answer = [_word];
    let _rules = _asMap_1(_r);
    let _j = 2;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSignEqualsSign_2(_size_1(_word), _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_j, _k);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _initial = _first_1(_word);
        let _suffix = _allButFirst_2(_word, _m);
        /* Statements */
        _word = _plusSignPlusSign_2(_suffix, _at_2(_rules, _initial));
        _add_2(_answer, _word);
        return _j = _plusSign_2(_j, 1);
      }, []),
    );
    return _answer;
  }, ["m", "r", "i", "k"]),
  "{ :m :r :i :k | let word = asList(i); let answer = [word]; let rules = asMap(r); let j = 2; whileTrue({ &(>=(size(word), m), { <=(j, k) }) }, { let initial = first(word); let suffix = allButFirst(word,m); word := ++(suffix, at(rules,initial)); add(answer,word); j := +(j, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "isMarkovTriple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _sum_1(_square_1(_self)),
      _asterisk_2(3, _product_1(_self)),
    );
  }, ["self"]),
  "{ :self | =(sum(square(self)), (*(3, product(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "nextMarkovTriple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL3, 1);
    let _y = _at_2(__SPL3, 2);
    let _z = _at_2(__SPL3, 3);
    /* Statements */
    return _sort_1([
      _x,
      _y,
      _hyphenMinus_2(_asterisk_2(_asterisk_2(3, _x), _y), _z),
    ]);
  }, ["self"]),
  "{ :self | let __SPL3 = assertIsOfSize(self, 3); let x = at(__SPL3, 1); let y = at(__SPL3, 2); let z = at(__SPL3, 3); sort([x, y, -(*(*(3, x), y), z)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IntegerSequence",
  "markovTripleNeighbours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL4, 1);
    let _y = _at_2(__SPL4, 2);
    let _z = _at_2(__SPL4, 3);
    /* Statements */
    return _nub_1([
      _nextMarkovTriple_1([_x, _y, _z]),
      _nextMarkovTriple_1([_x, _z, _y]),
      _nextMarkovTriple_1([_z, _y, _x]),
    ]);
  }, ["self"]),
  "{ :self | let __SPL4 = assertIsOfSize(self, 3); let x = at(__SPL4, 1); let y = at(__SPL4, 2); let z = at(__SPL4, 3); nub([nextMarkovTriple([x, y, z]), nextMarkovTriple([x, z, y]), nextMarkovTriple([z, y, x])]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "isMarkovNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _markovNumberSequence_1(100);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, _max_1(_u)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "not implemented");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_u, _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | let u = markovNumberSequence(100); if((>(self, max(u))), { error(self,'not implemented') }, { includes(u,self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "lagrangeNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _markovNumber_1(_n);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(9, _solidus_2(4, _square_1(_m))));
  }, ["n"]),
  "{ :n | let m = markovNumber(n); sqrt((-(9, (/(4, square(m)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_markovNumberSequence_1(_self));
  }, ["self"]),
  "{ :self | last(markovNumberSequence(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberGenerator",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _SortedList_1([1]);
    /* Statements */
    _timesRepeat_2(
      _k,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _size_1(_m),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _i,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _at_2(_m, _i);
                let _y = _at_2(_m, _j);
                let _a = _solidus_2(
                  _plusSign_2(
                    _asterisk_2(_asterisk_2(3, _x), _y),
                    _sqrt_1(
                      _plusSign_2(
                        _hyphenMinus_2(
                          _asterisk_2(-4, _circumflexAccent_2(_x, 2)),
                          _asterisk_2(4, _circumflexAccent_2(_y, 2)),
                        ),
                        _asterisk_2(
                          _asterisk_2(9, _circumflexAccent_2(_x, 2)),
                          _circumflexAccent_2(_y, 2),
                        ),
                      ),
                    ),
                  ),
                  2,
                );
                /* Statements */
                return _ifTrue_2(
                  _isInteger_1(_a),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _addIfNotPresent_2(_m, _a);
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
    return _contents_1(_m);
  }, ["k"]),
  "{ :k | let m = SortedList([1]); timesRepeat(k, { toDo(1, size(m), { :i | toDo(1, i, { :j | let x = at(m, i); let y = at(m, j); let a = /((+(*(*(3, x), y), sqrt(+(-((*(-4, (^(x, 2)))), (*(4, (^(y, 2))))), (*(*(9, (^(x, 2))), (^(y, 2)))))))), 2); ifTrue(isInteger(a), { addIfNotPresent(m,a) }) }) }) }); contents(m) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2([
      1,
      2,
      5,
      13,
      29,
      34,
      89,
      169,
      194,
      233,
      433,
      610,
      985,
      1325,
      1597,
      2897,
      4181,
      5741,
      6466,
      7561,
      9077,
      10946,
      14701,
      28657,
      33461,
      37666,
      43261,
      51641,
      62210,
      75025,
      96557,
      135137,
      195025,
      196418,
      294685,
      426389,
      499393,
      514229,
      646018,
      925765,
      1136689,
      1278818,
      1346269,
      1441889,
      1686049,
      2012674,
      2423525,
      2922509,
      3276509,
      3524578,
      4400489,
      6625109,
      7453378,
      8399329,
      9227465,
      9647009,
      11485154,
      13782649,
      16609837,
      16964653,
      20031170,
      21531778,
      24157817,
      38613965,
      43484701,
      48928105,
      63245986,
      78442645,
      94418953,
      111242465,
      137295677,
      144059117,
      165580141,
      205272962,
      225058681,
      253191266,
      285018617,
      298045301,
      321534781,
      375981346,
      433494437,
      447626321,
      537169541,
      576298801,
      647072098,
      780291637,
      941038565,
      981277621,
      1134903170,
      1311738121,
      1405695061,
      1475706146,
      1873012681,
      2151239746,
      2561077037,
      2971215073,
      3057250481,
      3778847945,
      4434764269,
      4801489937,
    ], _self);
  }, ["self"]),
  "{ :self | first([1, 2, 5, 13, 29, 34, 89, 169, 194, 233, 433, 610, 985, 1325, 1597, 2897, 4181, 5741, 6466, 7561, 9077, 10946, 14701, 28657, 33461, 37666, 43261, 51641, 62210, 75025, 96557, 135137, 195025, 196418, 294685, 426389, 499393, 514229, 646018, 925765, 1136689, 1278818, 1346269, 1441889, 1686049, 2012674, 2423525, 2922509, 3276509, 3524578, 4400489, 6625109, 7453378, 8399329, 9227465, 9647009, 11485154, 13782649, 16609837, 16964653, 20031170, 21531778, 24157817, 38613965, 43484701, 48928105, 63245986, 78442645, 94418953, 111242465, 137295677, 144059117, 165580141, 205272962, 225058681, 253191266, 285018617, 298045301, 321534781, 375981346, 433494437, 447626321, 537169541, 576298801, 647072098, 780291637, 941038565, 981277621, 1134903170, 1311738121, 1405695061, 1475706146, 1873012681, 2151239746, 2561077037, 2971215073, 3057250481, 3778847945, 4434764269, 4801489937],self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "IntegerSequence",
  "markovNumberTree",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _unfoldTree_3(
      _n,
      [1, 1, 1],
      sl.annotateFunction(function (_triple) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _triple";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _sum_1(_triple);
        /* Statements */
        return _select_2(
          _markovTripleNeighbours_1(_triple),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_sum_1(_each), _k);
          }, ["each"]),
        );
      }, ["triple"]),
    );
  }, ["n"]),
  "{ :n | unfoldTree(n,[1, 1, 1], { :triple | let k = sum(triple); select(markovTripleNeighbours(triple), { :each | >(sum(each), k) }) }) }",
);
