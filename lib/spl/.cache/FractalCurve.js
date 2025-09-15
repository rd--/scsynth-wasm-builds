sl.extendTypeOrTraitWithMethod(
  "String",
  "FractalCurve",
  "simpleLindenmayerSystem",
  ["stepLetters", "plusMinus", "rule", "initialCondition", "count"],
  sl.annotateFunction(
    function (_stepLetters, _plusMinus, _rule, _initialCondition, _count) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _stepLetters, _plusMinus, _rule, _initialCondition, _count";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _angle = 0;
      let _answer = [[0, 0]];
      let _keepLetters = _plusSignPlusSign_2(_stepLetters, "+-");
      let __SPL146 = _assertIsOfSize_2(_plusMinus, 2);
      let _plusAngle = _at_2(__SPL146, 1);
      let _minusAngle = _at_2(__SPL146, 2);
      /* Statements */
      _do_2(
        _contents_1(
          _select_2(
            _last_1(
              _substitutionSystem_3(
                _asMap_1(
                  _plusSignPlusSign_2(_rule, [
                    _hyphenMinusGreaterThanSign_2("+", "+"),
                    _hyphenMinusGreaterThanSign_2("-", "-"),
                  ]),
                ),
                _initialCondition,
                _count,
              ),
            ),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _includes_2(_keepLetters, _each);
            }, ["each"]),
          ),
        ),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _includes_2(_stepLetters, _each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _add_2(
                _answer,
                _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _delta = _if_3(
                _equalsSign_2(_each, "+"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusAngle;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _minusAngle;
                }, []),
              );
              /* Statements */
              return _angle = _plusSign_2(_angle, _delta);
            }, []),
          );
        }, ["each"]),
      );
      return _answer;
    },
    ["stepLetters", "plusMinus", "rule", "initialCondition", "count"],
  ),
  "{ :stepLetters :plusMinus :rule :initialCondition :count | let angle = 0; let answer = [[0, 0]]; let keepLetters = ++(stepLetters, '+-'); let __SPL146 = assertIsOfSize(plusMinus, 2); let plusAngle = at(__SPL146, 1); let minusAngle = at(__SPL146, 2); do(contents(select(last(substitutionSystem(asMap((++(rule, [->('+', '+'), ->('-', '-')]))),initialCondition, count)), { :each | includes(keepLetters,each) })), { :each | if(includes(stepLetters,each), { add(answer,+(last(answer), angleVector(angle))) }, { let delta = if((=(each, '+')), { plusAngle }, { minusAngle }); angle := +(angle, delta) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "blancmangeCurve",
  ["d"],
  sl.annotateFunction(function (_d) {
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
    _toByDo_4(
      _d,
      1,
      -1,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _toByDo_4(
          0,
          _hyphenMinus_2(_k, 1),
          _circumflexAccent_2(2, _n),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _plusSign_2(
              _plusSign_2(_m, _circumflexAccent_2(2, _hyphenMinus_2(_n, 1))),
              1,
            );
            let _j = _plusSign_2(_m, 1);
            let _k = _plusSign_2(
              _plusSign_2(_m, _circumflexAccent_2(2, _n)),
              1,
            );
            /* Statements */
            return _atPut_3(
              _b,
              _i,
              _plusSign_2(
                _circumflexAccent_2(2, _n),
                _asterisk_2(0.5, _plusSign_2(_at_2(_b, _j), _at_2(_b, _k))),
              ),
            );
          }, ["m"]),
        );
      }, ["n"]),
    );
    return _b;
  }, ["d"]),
  "{ :d | let k = ^(2, d); let b = List(+(k, 1)); atPut(b, +(0, 1), 0); atPut(b, +(k, 1), 0); toByDo(d, 1, -1, { :n | toByDo(0, -(k, 1), ^(2, n), { :m | let i = +(+(m, (^(2, (-(n, 1))))), 1); let j = +(m, 1); let k = +(+(m, (^(2, n))), 1); atPut(b, i, +((^(2, n)), (*(0.5, (+(at(b, j), at(b, k))))))) }) }); b }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "cantorDust",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(
      _substitutionSystem_3(
        [
          _hyphenMinusGreaterThanSign_2(0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]),
          _hyphenMinusGreaterThanSign_2(1, [[1, 0, 1], [0, 0, 0], [1, 0, 1]]),
        ],
        [[1]],
        _self,
      ),
    );
  }, ["self"]),
  "{ :self | last(substitutionSystem([->(0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]), ->(1, [[1, 0, 1], [0, 0, 0], [1, 0, 1]])],[[1]], self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "fibonacciCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = [0, 0];
    let _answer = [_p];
    let _theta = _pi_1(_Fraction_2(1n, 2n));
    /* Statements */
    _do_2(
      _Span_3(1, _self, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _fibonacciWord_1(_n);
        /* Statements */
        _p = _plusSign_2(_p, _angleVector_1(_theta));
        _add_2(_answer, _p);
        return _ifTrue_2(
          _equalsSign_2(_m, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _delta = _if_3(
              _isEven_1(_n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _pi_1(_Fraction_2(-1n, 2n));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _pi_1(_Fraction_2(1n, 2n));
              }, []),
            );
            /* Statements */
            return _theta = _plusSign_2(_theta, _delta);
          }, []),
        );
      }, ["n"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let p = [0, 0]; let answer = [p]; let theta = pi(Fraction(1L, 2L)); do(Span(1, self, 1), { :n | let m = fibonacciWord(n); p := +(p, angleVector(theta)); add(answer,p); ifTrue((=(m, 0)), { let delta = if(isEven(n), { pi(Fraction(-1L, 2L)) }, { pi(Fraction(1L, 2L)) }); theta := +(theta, delta) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "gosperCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "AB",
      [_pi_1(_Fraction_2(1n, 3n)), _pi_1(_Fraction_2(-1n, 3n))],
      [
        _hyphenMinusGreaterThanSign_2("A", "A-B--B+A++AA+B-"),
        _hyphenMinusGreaterThanSign_2("B", "+A-BB--B-A++A+B"),
      ],
      "A",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('AB',[pi(Fraction(1L, 3L)), pi(Fraction(-1L, 3L))], [->('A', 'A-B--B+A++AA+B-'), ->('B', '+A-BB--B-A++A+B')], 'A', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "hafermanCarpet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(
      _substitutionSystem_3(
        [
          _hyphenMinusGreaterThanSign_2(0, [[1, 1, 1], [1, 1, 1], [1, 1, 1]]),
          _hyphenMinusGreaterThanSign_2(1, [[1, 0, 1], [0, 1, 0], [1, 0, 1]]),
        ],
        [[1]],
        _self,
      ),
    );
  }, ["self"]),
  "{ :self | last(substitutionSystem([->(0, [[1, 1, 1], [1, 1, 1], [1, 1, 1]]), ->(1, [[1, 0, 1], [0, 1, 0], [1, 0, 1]])],[[1]], self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "heighwayDragonCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 2n)), _pi_1(_Fraction_2(-1n, 2n))],
      [
        _hyphenMinusGreaterThanSign_2("F", "F"),
        _hyphenMinusGreaterThanSign_2("X", "X+YF+"),
        _hyphenMinusGreaterThanSign_2("Y", "-FX-Y"),
      ],
      "FX",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 2L)), pi(Fraction(-1L, 2L))], [->('F', 'F'), ->('X', 'X+YF+'), ->('Y', '-FX-Y')], 'FX', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "hilbertCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 2n)), _pi_1(_Fraction_2(-1n, 2n))],
      [
        _hyphenMinusGreaterThanSign_2("A", "+BF-AFA-FB+"),
        _hyphenMinusGreaterThanSign_2("B", "-AF+BFB+FA-"),
        _hyphenMinusGreaterThanSign_2("F", "F"),
      ],
      "A",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 2L)), pi(Fraction(-1L, 2L))], [->('A', '+BF-AFA-FB+'), ->('B', '-AF+BFB+FA-'), ->('F', 'F')], 'A', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "kochCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 3n)), _pi_1(_Fraction_2(-1n, 3n))],
      [_hyphenMinusGreaterThanSign_2("F", "F+F--F+F")],
      "F",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 3L)), pi(Fraction(-1L, 3L))], [->('F', 'F+F--F+F')], 'F', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "levyCCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 4n)), _pi_1(_Fraction_2(-1n, 4n))],
      [_hyphenMinusGreaterThanSign_2("F", "+F--F+")],
      "F",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 4L)), pi(Fraction(-1L, 4L))], [->('F', '+F--F+')], 'F', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "mcWortersPentigree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 5n)), _pi_1(_Fraction_2(-1n, 5n))],
      [_hyphenMinusGreaterThanSign_2("F", "+F++F----F--F++F++F-")],
      "F",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 5L)), pi(Fraction(-1L, 5L))], [->('F', '+F++F----F--F++F++F-')], 'F', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "mooreCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 2n)), _pi_1(_Fraction_2(-1n, 2n))],
      [
        _hyphenMinusGreaterThanSign_2("L", "-RF+LFL+FR-"),
        _hyphenMinusGreaterThanSign_2("R", "+LF-RFR-FL+"),
        _hyphenMinusGreaterThanSign_2("F", "F"),
      ],
      "LFL+F+LFL",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 2L)), pi(Fraction(-1L, 2L))], [->('L', '-RF+LFL+FR-'), ->('R', '+LF-RFR-FL+'), ->('F', 'F')], 'LFL+F+LFL', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "peanoCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 2n)), _pi_1(_Fraction_2(-1n, 2n))],
      [
        _hyphenMinusGreaterThanSign_2("X", "XFYFX+F+YFXFY-F-XFYFX"),
        _hyphenMinusGreaterThanSign_2("Y", "YFXFY-F-XFYFX+F+YFXFY"),
        _hyphenMinusGreaterThanSign_2("F", "F"),
      ],
      "X",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 2L)), pi(Fraction(-1L, 2L))], [->('X', 'XFYFX+F+YFXFY-F-XFYFX'), ->('Y', 'YFXFY-F-XFYFX+F+YFXFY'), ->('F', 'F')], 'X', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "pentadentriteCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(2n, 5n)), _pi_1(_Fraction_2(-2n, 5n))],
      [_hyphenMinusGreaterThanSign_2("F", "F+F-F--F+F+F")],
      "F",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(2L, 5L)), pi(Fraction(-2L, 5L))], [->('F', 'F+F-F--F+F+F')], 'F', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "sierpinskiArrowheadCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 3n)), _pi_1(_Fraction_2(-1n, 3n))],
      [
        _hyphenMinusGreaterThanSign_2("X", "YF+XF+Y"),
        _hyphenMinusGreaterThanSign_2("Y", "XF-YF-X"),
        _hyphenMinusGreaterThanSign_2("F", "F"),
      ],
      "YF",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 3L)), pi(Fraction(-1L, 3L))], [->('X', 'YF+XF+Y'), ->('Y', 'XF-YF-X'), ->('F', 'F')], 'YF', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "sierpinskiCarpet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(
      _substitutionSystem_3(
        [
          _hyphenMinusGreaterThanSign_2(1, [[1, 1, 1], [1, 0, 1], [1, 1, 1]]),
          _hyphenMinusGreaterThanSign_2(0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]),
        ],
        [[1]],
        _self,
      ),
    );
  }, ["self"]),
  "{ :self | last(substitutionSystem([->(1, [[1, 1, 1], [1, 0, 1], [1, 1, 1]]), ->(0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]])],[[1]], self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "sierpinskiCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "FG",
      [_pi_1(_Fraction_2(1n, 4n)), _pi_1(_Fraction_2(-1n, 4n))],
      [
        _hyphenMinusGreaterThanSign_2("X", "XF+G+XF--F--XF+G+X"),
        _hyphenMinusGreaterThanSign_2("F", "F"),
        _hyphenMinusGreaterThanSign_2("G", "G"),
      ],
      "F--XF--F--XF",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('FG',[pi(Fraction(1L, 4L)), pi(Fraction(-1L, 4L))], [->('X', 'XF+G+XF--F--XF+G+X'), ->('F', 'F'), ->('G', 'G')], 'F--XF--F--XF', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "sierpinskiSieve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(-1n, 3n)), _pi_1(_Fraction_2(1n, 3n))],
      [
        _hyphenMinusGreaterThanSign_2("X", "--FXF++FXF++FXF--"),
        _hyphenMinusGreaterThanSign_2("F", "FF"),
      ],
      "FXF--FF--FF",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(-1L, 3L)), pi(Fraction(1L, 3L))], [->('X', '--FXF++FXF++FXF--'), ->('F', 'FF')], 'FXF--FF--FF', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "vicsekCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simpleLindenmayerSystem_5(
      "F",
      [_pi_1(_Fraction_2(1n, 2n)), _pi_1(_Fraction_2(-1n, 2n))],
      [_hyphenMinusGreaterThanSign_2("F", "F-F+F+F-F")],
      "F-F-F-F",
      _self,
    );
  }, ["self"]),
  "{ :self | simpleLindenmayerSystem('F',[pi(Fraction(1L, 2L)), pi(Fraction(-1L, 2L))], [->('F', 'F-F+F+F-F')], 'F-F-F-F', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "FractalCurve",
  "zOrderCurve",
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
        let _b = _integerDigits_2(_n, 2);
        let _k = _size_1(_b);
        let __SPL147 = _assertIsOfSize_2(
          _deinterleave_2(
            _padLeft_3(_b, [_plusSign_2(_k, _percentSign_2(_k, 2))], 0),
            2,
          ),
          2,
        );
        let _y = _at_2(__SPL147, 1);
        let _x = _at_2(__SPL147, 2);
        /* Statements */
        return _collect_2(
          [_x, _y],
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _fromDigits_2(_each, 2);
          }, ["each"]),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(0, -(self, 1)), { :n | let b = integerDigits(n,2); let k = size(b); let __SPL147 = assertIsOfSize(deinterleave(padLeft(b,[+(k, (%(k, 2)))], 0),2), 2); let y = at(__SPL147, 1); let x = at(__SPL147, 2); collect([x, y], { :each | fromDigits(each,2) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractalCurve",
  "riemannFunction",
  ["x", "a", "n"],
  sl.annotateFunction(function (_x, _a, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _circumflexAccent_2(_i, _a);
        /* Statements */
        return _solidus_2(_sin_1(_asterisk_2(_j, _x)), _j);
      }, ["i"]),
    );
  }, ["x", "a", "n"]),
  "{ :x :a :n | sum(upOrDownTo(1, n), { :i | let j = ^(i, a); /(sin(*(j, x)), j) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractalCurve",
  "riemannFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _riemannFunction_3(_x, 2, 100);
  }, ["x"]),
  "{ :x | riemannFunction(x,2, 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractalCurve",
  "takagiFunction",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s_1 = sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _hyphenMinus_2(_x, _floor_1(_x));
      /* Statements */
      return _min_2(_d, _hyphenMinus_2(1, _d));
    }, ["x"]);
    /* Statements */
    return _sum_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _s_1(_asterisk_2(_x, _circumflexAccent_2(2, _i))),
          _circumflexAccent_2(2, _i),
        );
      }, ["i"]),
    );
  }, ["x", "n"]),
  "{ :x :n | let s = { :x | let d = -(x, floor(x)); min(d, -(1, d)) }; sum(upOrDownTo(0, -(n, 1)), { :i | /(s(*(x, (^(2, i)))), (^(2, i))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractalCurve",
  "takagiFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _takagiFunction_2(_x, 100);
  }, ["x"]),
  "{ :x | takagiFunction(x, 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FractalCurve",
  "weierstrassFunction",
  ["x", "a", "b", "n"],
  sl.annotateFunction(function (_x, _a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _collect_2(
        _upOrDownTo_2(0, _n),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _circumflexAccent_2(_a, _i),
            _cos_1(_asterisk_2(_circumflexAccent_2(_b, _i), _pi_1(_x))),
          );
        }, ["i"]),
      ),
    );
  }, ["x", "a", "b", "n"]),
  "{ :x :a :b :n | sum(collect(upOrDownTo(0, n), { :i | *((^(a, i)), cos((*((^(b, i)), pi(x))))) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "FractalCurve",
  "riemannFunction",
  ["x", "a", "n"],
  sl.annotateFunction(function (_x, _a, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _exp_1(
            _asterisk_2(
              _asterisk_2(_pi_1(_Complex_2(0, 1)), _circumflexAccent_2(_i, _a)),
              _x,
            ),
          ),
          _pi_1(_circumflexAccent_2(_i, _a)),
        );
      }, ["i"]),
    );
  }, ["x", "a", "n"]),
  "{ :x :a :n | sum(upOrDownTo(1, n), { :i | /(exp((*(*(pi(Complex(0, 1)), (^(i, a))), x))), pi((^(i, a)))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "FractalCurve",
  "riemannFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _riemannFunction_3(_x, 2, 100);
  }, ["x"]),
  "{ :x | riemannFunction(x,2, 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FractalCurve",
  "takagiFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _takagiFunction_1);
  }, ["self"]),
  "{ :self | collect(self,takagiFunction:/1) }",
);
