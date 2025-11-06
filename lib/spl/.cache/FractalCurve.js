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
      let __SplVar1 = _assertIsOfSize_2(_plusMinus, 2);
      let _plusAngle = _at_2(__SplVar1, 1);
      let _minusAngle = _at_2(__SplVar1, 2);
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
  "{ :stepLetters :plusMinus :rule :initialCondition :count |\n\t\tlet angle = 0;\n\t\tlet answer = [[0 0]];\n\t\tlet keepLetters = stepLetters ++ '+-';\n\t\tlet [plusAngle, minusAngle] = plusMinus;\n\t\t(rule ++ ['+' -> '+', '-' -> '-'])\n\t\t.asMap\n\t\t.substitutionSystem(initialCondition, count)\n\t\t.last\n\t\t.select { :each |\n\t\t\tkeepLetters.includes(each)\n\t\t}.contents\n\t\t.do { :each |\n\t\t\tstepLetters.includes(each).if {\n\t\t\t\tanswer.add(answer.last + angle.angleVector)\n\t\t\t} {\n\t\t\t\tlet delta = (each = '+').if {\n\t\t\t\t\tplusAngle\n\t\t\t\t} {\n\t\t\t\t\tminusAngle\n\t\t\t\t};\n\t\t\t\tangle := angle + delta\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :d |\n\t\tlet k = 2 ^ d;\n\t\tlet b = List(k + 1);\n\t\tb[0 + 1] := 0;\n\t\tb[k + 1] := 0;\n\t\td.toByDo(1, -1) { :n |\n\t\t\t0.toByDo(k - 1, 2 ^ n) { :m |\n\t\t\t\tlet i = m + (2 ^ (n - 1)) + 1;\n\t\t\t\tlet j = m + 1;\n\t\t\t\tlet k = m + (2 ^ n) + 1;\n\t\t\t\tb[i] := (2 ^ n) + (0.5 * (b[j] + b[k]))\n\t\t\t}\n\t\t};\n\t\tb\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t0 -> [0 0 0; 0 0 0; 0 0 0],\n\t\t\t1 -> [1 0 1; 0 0 0; 1 0 1]\n\t\t]\n\t\t.substitutionSystem([[1]], self)\n\t\t.last\n\t}",
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
  "{ :self |\n\t\tlet p = [0 0];\n\t\tlet answer = [p];\n\t\tlet theta = 1/2.pi;\n\t\t1:self.do { :n |\n\t\t\tlet m = n.fibonacciWord;\n\t\t\tp := p + theta.angleVector;\n\t\t\tanswer.add(p);\n\t\t\t(m = 0).ifTrue {\n\t\t\t\tlet delta = n.isEven.if { -1/2.pi } { 1/2.pi };\n\t\t\t\ttheta := theta + delta\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\t'AB'.simpleLindenmayerSystem(\n\t\t\t[1/3.pi -1/3.pi],\n\t\t\t[\n\t\t\t\t'A' -> 'A-B--B+A++AA+B-',\n\t\t\t\t'B' -> '+A-BB--B-A++A+B'\n\t\t\t],\n\t\t\t'A',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t0 -> [1 1 1; 1 1 1; 1 1 1],\n\t\t\t1 -> [1 0 1; 0 1 0; 1 0 1]\n\t\t]\n\t\t.substitutionSystem([[1]], self)\n\t\t.last\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/2.pi -1/2.pi],\n\t\t\t[\n\t\t\t\t'F' -> 'F',\n\t\t\t\t'X' -> 'X+YF+',\n\t\t\t\t'Y' -> '-FX-Y'\n\t\t\t],\n\t\t\t'FX',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/2.pi -1/2.pi],\n\t\t\t[\n\t\t\t\t'A' -> '+BF-AFA-FB+',\n\t\t\t\t'B' -> '-AF+BFB+FA-',\n\t\t\t\t'F' -> 'F'\n\t\t\t],\n\t\t\t'A',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/3.pi -1/3.pi],\n\t\t\t[\n\t\t\t\t'F' -> 'F+F--F+F'\n\t\t\t],\n\t\t\t'F',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/4.pi -1/4.pi],\n\t\t\t[\n\t\t\t\t'F' -> '+F--F+'\n\t\t\t],\n\t\t\t'F',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/5.pi -1/5.pi],\n\t\t\t[\n\t\t\t\t'F' -> '+F++F----F--F++F++F-'\n\t\t\t],\n\t\t\t'F',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/2.pi -1/2.pi],\n\t\t\t[\n\t\t\t\t'L' -> '-RF+LFL+FR-',\n\t\t\t\t'R' -> '+LF-RFR-FL+',\n\t\t\t\t'F' -> 'F'\n\t\t\t],\n\t\t\t'LFL+F+LFL',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/2.pi -1/2.pi],\n\t\t\t[\n\t\t\t\t'X' -> 'XFYFX+F+YFXFY-F-XFYFX',\n\t\t\t\t'Y' -> 'YFXFY-F-XFYFX+F+YFXFY',\n\t\t\t\t'F' -> 'F'\n\t\t\t],\n\t\t\t'X',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[2/5.pi -2/5.pi],\n\t\t\t[\n\t\t\t\t'F' -> 'F+F-F--F+F+F'\n\t\t\t],\n\t\t\t'F',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/3.pi -1/3.pi],\n\t\t\t[\n\t\t\t\t'X' -> 'YF+XF+Y',\n\t\t\t\t'Y' -> 'XF-YF-X',\n\t\t\t\t'F' -> 'F'\n\t\t\t],\n\t\t\t'YF',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t1 -> [1 1 1; 1 0 1; 1 1 1],\n\t\t\t0 -> [0 0 0; 0 0 0; 0 0 0]\n\t\t]\n\t\t.substitutionSystem([[1]], self)\n\t\t.last\n\t}",
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
  "{ :self |\n\t\t'FG'.simpleLindenmayerSystem(\n\t\t\t[1/4.pi -1/4.pi],\n\t\t\t[\n\t\t\t\t'X' -> 'XF+G+XF--F--XF+G+X',\n\t\t\t\t'F' -> 'F',\n\t\t\t\t'G' -> 'G'\n\t\t\t],\n\t\t\t'F--XF--F--XF',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[-1/3.pi 1/3.pi],\n\t\t\t[\n\t\t\t\t'X' -> '--FXF++FXF++FXF--',\n\t\t\t\t'F' -> 'FF'\n\t\t\t],\n\t\t\t'FXF--FF--FF',\n\t\t\tself\n\t\t)\n\t}",
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
  "{ :self |\n\t\t'F'.simpleLindenmayerSystem(\n\t\t\t[1/2.pi -1/2.pi],\n\t\t\t[\n\t\t\t\t'F' -> 'F-F+F+F-F'\n\t\t\t],\n\t\t\t'F-F-F-F',\n\t\t\tself\n\t\t)\n\t}",
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
      _to_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _integerDigits_2(_n, 2);
        let _k = _size_1(_b);
        let __SplVar2 = _assertIsOfSize_2(
          _deinterleave_2(
            _padLeft_3(_b, [_plusSign_2(_k, _percentSign_2(_k, 2))], 0),
            2,
          ),
          2,
        );
        let _y = _at_2(__SplVar2, 1);
        let _x = _at_2(__SplVar2, 2);
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
  "{ :self |\n\t\t0.to(self - 1).collect { :n |\n\t\t\tlet b = n.integerDigits(2);\n\t\t\tlet k = b.size;\n\t\t\tlet [y, x] = b.padLeft([k + (k % 2)], 0).deinterleave(2);\n\t\t\t[x, y].collect { :each |\n\t\t\t\teach.fromDigits(2)\n\t\t\t}\n\t\t}\n\t}",
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
      _to_2(1, _n),
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
  "{ :x :a :n |\n\t\t1.to(n).sum { :i |\n\t\t\tlet j = i ^ a;\n\t\t\tsin(j * x) / j\n\t\t}\n\t}",
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
  "{ :x |\n\t\tx.riemannFunction(2, 100)\n\t}",
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
      _to_2(0, _hyphenMinus_2(_n, 1)),
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
  "{ :x :n |\n\t\tlet s = { :x |\n\t\t\tlet d = x - floor(x);\n\t\t\tmin(d, 1 - d)\n\t\t};\n\t\t0.to(n - 1).sum { :i |\n\t\t\ts(x * (2 ^ i)) / (2 ^ i)\n\t\t}\n\t}",
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
  "{ :x |\n\t\ttakagiFunction(x, 100)\n\t}",
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
    return _sum_1(_collect_2(
      _to_2(0, _n),
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
    ));
  }, ["x", "a", "b", "n"]),
  "{ :x :a :b :n |\n\t\t0.to(n).collect { :i |\n\t\t\t(a ^ i) * ((b ^ i) * x.pi).cos\n\t\t}.sum\n\t}",
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
      _to_2(1, _n),
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
  "{ :x :a :n |\n\t\t1.to(n).sum { :i |\n\t\t\t(0J1.pi * (i ^ a) * x).exp / (i ^ a).pi\n\t\t}\n\t}",
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
  "{ :x |\n\t\tx.riemannFunction(2, 100)\n\t}",
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
  "{ :self |\n\t\tself.collect(takagiFunction:/1)\n\t}",
);
