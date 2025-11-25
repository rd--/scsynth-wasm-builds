sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "addCosine",
  ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  sl.annotateFunction(
    function (_self, _harmonicNumber, _amplitude, _initialPhase, _offset) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _harmonicNumber, _amplitude, _initialPhase, _offset";
        throw new Error(errorMessage);
      } /* Statements */
      return _addSine_5(
        _self,
        _harmonicNumber,
        _amplitude,
        _plusSign_2(_initialPhase, _pi_1(0.5)),
        _offset,
      );
    },
    ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  ),
  "{ :self :harmonicNumber :amplitude :initialPhase :offset |\n\t\tself.addSine(harmonicNumber, amplitude, initialPhase + 0.5.pi, offset)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "addSine",
  ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  sl.annotateFunction(
    function (_self, _harmonicNumber, _amplitude, _initialPhase, _offset) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _harmonicNumber, _amplitude, _initialPhase, _offset";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _size = _size_1(_self);
      let _increment = _solidus_2(
        _asterisk_2(_pi_1(2), _harmonicNumber),
        _size,
      );
      let _phase = _initialPhase;
      /* Statements */
      return _toDo_3(
        1,
        _size,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _atPut_3(
            _self,
            _each,
            _plusSign_2(
              _at_2(_self, _each),
              _plusSign_2(_asterisk_2(_sin_1(_phase), _amplitude), _offset),
            ),
          );
          return _phase = _plusSign_2(_phase, _increment);
        }, ["each"]),
      );
    },
    ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  ),
  "{ :self :harmonicNumber :amplitude :initialPhase :offset |\n\t\tlet size = self.size;\n\t\tlet increment = 2.pi * harmonicNumber / size;\n\t\tlet phase = initialPhase;\n\t\t1.toDo(size) { :each |\n\t\t\tself[each] := self[each] + (phase.sin * amplitude + offset);\n\t\t\tphase := phase + increment\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "hammingWindowFill",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _atAllPut_2(_self, 0.53836);
    return _addSine_5(_self, 1, 0.46164, _pi_1(-0.5), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.atAllPut(0.53836);\n\t\tself.addSine(1, 0.46164, -0.5.pi, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "hannWindowFill",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _atAllPut_2(_self, 0.5);
    return _addSine_5(_self, 1, 0.5, _pi_1(-0.5), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.atAllPut(0.5);\n\t\tself.addSine(1, 0.5, -0.5.pi, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "sineFill",
  ["self", "amplitudes", "phases"],
  sl.annotateFunction(function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _amplitudes, _phases";
      throw new Error(errorMessage);
    } /* Statements */
    _atAllPut_2(_self, 0);
    return _withIndexDo_2(
      _amplitudes,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _addSine_5(_self, _index, _each, _atWrap_2(_phases, _index), 0);
      }, ["each", "index"]),
    );
  }, ["self", "amplitudes", "phases"]),
  "{ :self :amplitudes :phases |\n\t\tself.atAllPut(0);\n\t\tamplitudes.withIndexDo { :each :index |\n\t\t\tself.addSine(index, each, phases.atWrap(index), 0)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "welchWindowFill",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _atAllPut_2(_self, 0);
    return _addSine_5(_self, 0.5, 1, 0, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.atAllPut(0);\n\t\tself.addSine(0.5, 1, 0, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen03",
  ["self", "xMin", "xMax", "coefficients"],
  sl.annotateFunction(function (_self, _xMin, _xMax, _coefficients) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _xMin, _xMax, _coefficients";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_coefficients);
    /* Statements */
    return _discretize_3(
      _Interval_2(_xMin, _xMax),
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sum = _at_2(_coefficients, _k);
        /* Statements */
        _toByDo_4(
          _hyphenMinus_2(_k, 1),
          1,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _sum = _asterisk_2(_sum, _x);
            return _sum = _plusSign_2(_sum, _at_2(_coefficients, _i));
          }, ["i"]),
        );
        return _sum;
      }, ["x"]),
    );
  }, ["self", "xMin", "xMax", "coefficients"]),
  "{ :self :xMin :xMax :coefficients |\n\t\tlet k = coefficients.size;\n\t\tInterval(xMin, xMax).discretize(self) { :x |\n\t\t\tlet sum = coefficients[k];\n\t\t\t(k - 1).toByDo(1, -1) { :i |\n\t\t\t\tsum := sum * x;\n\t\t\t\tsum := sum + coefficients[i]\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen05",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aList, 1);
    /* Statements */
    _toByDo_4(
      2,
      _size_1(_aList),
      2,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _at_2(_aList, _i);
        let _y2 = _at_2(_aList, _plusSign_2(_i, 1));
        let _z = _circumflexAccent_2(_solidus_2(_y2, _y1), _solidus_2(1, _n));
        /* Statements */
        _timesRepeat_2(
          _n,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _y1);
            return _y1 = _asterisk_2(_y1, _z);
          }, []),
        );
        return _y1 = _y2;
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet answer = [];\n\t\tlet y1 = aList[1];\n\t\t2.toByDo(aList.size, 2) { :i |\n\t\t\tlet n = aList[i];\n\t\t\tlet y2 = aList[i + 1];\n\t\t\tlet z = (y2 / y1) ^ (1 / n);\n\t\t\tn.timesRepeat {\n\t\t\t\tanswer.add(y1);\n\t\t\t\ty1 := y1 * z\n\t\t\t};\n\t\t\ty1 := y2\n\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen07",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aList, 1);
    /* Statements */
    _toByDo_4(
      2,
      _size_1(_aList),
      2,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _at_2(_aList, _i);
        let _y2 = _at_2(_aList, _plusSign_2(_i, 1));
        let _z = _solidus_2(_hyphenMinus_2(_y2, _y1), _n);
        /* Statements */
        _timesRepeat_2(
          _n,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _y1);
            return _y1 = _plusSign_2(_y1, _z);
          }, []),
        );
        return _y1 = _y2;
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet answer = [];\n\t\tlet y1 = aList[1];\n\t\t2.toByDo(aList.size, 2) { :i |\n\t\t\tlet n = aList[i];\n\t\t\tlet y2 = aList[i + 1];\n\t\t\tlet z = (y2 - y1) / n;\n\t\t\tn.timesRepeat {\n\t\t\t\tanswer.add(y1);\n\t\t\t\ty1 := y1 + z\n\t\t\t};\n\t\t\ty1 := y2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen09",
  ["self", "aMatrix"],
  sl.annotateFunction(function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _do_2(
      _aMatrix,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addSine_5(
          _answer,
          _at_2(_each, 1),
          _at_2(_each, 2),
          _degreesToRadians_1(_at_2(_each, 3)),
          0,
        );
      }, ["each"]),
    );
    return _solidus_2(_answer, _absMax_1(_answer));
  }, ["self", "aMatrix"]),
  "{ :self :aMatrix |\n\t\tlet answer = List(self, 0);\n\t\taMatrix.do { :each |\n\t\t\tanswer.addSine(each[1], each[2], each[3].degreesToRadians, 0)\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen10",
  ["self", "amplitudes"],
  sl.annotateFunction(function (_self, _amplitudes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _amplitudes";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _partial = 1;
    /* Statements */
    _do_2(
      _amplitudes,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _addSine_5(_answer, _partial, _each, 0, 0);
        return _partial = _plusSign_2(_partial, 1);
      }, ["each"]),
    );
    return _solidus_2(_answer, _absMax_1(_answer));
  }, ["self", "amplitudes"]),
  "{ :self :amplitudes |\n\t\tlet answer = List(self, 0);\n\t\tlet partial = 1;\n\t\tamplitudes.do { :each |\n\t\t\tanswer.addSine(partial, each, 0, 0);\n\t\t\tpartial := partial + 1\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen11",
  ["self", "numberOfHarmonics", "lowestHarmonic", "multiplier"],
  sl.annotateFunction(
    function (_self, _numberOfHarmonics, _lowestHarmonic, _multiplier) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _numberOfHarmonics, _lowestHarmonic, _multiplier";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _List_2(_self, 0);
      let _partial = _lowestHarmonic;
      let _amplitude = 1;
      /* Statements */
      _toDo_3(
        1,
        _numberOfHarmonics,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _addCosine_5(_answer, _partial, _amplitude, 0, 0);
          _partial = _plusSign_2(_partial, 1);
          return _amplitude = _circumflexAccent_2(_multiplier, _each);
        }, ["each"]),
      );
      return _solidus_2(_answer, _absMax_1(_answer));
    },
    ["self", "numberOfHarmonics", "lowestHarmonic", "multiplier"],
  ),
  "{ :self :numberOfHarmonics :lowestHarmonic :multiplier |\n\t\tlet answer = List(self, 0);\n\t\tlet partial = lowestHarmonic;\n\t\tlet amplitude = 1;\n\t\t1.toDo(numberOfHarmonics) { :each |\n\t\t\tanswer.addCosine(partial, amplitude, 0, 0);\n\t\t\tpartial := partial + 1;\n\t\t\tamplitude := multiplier ^ each\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen13",
  ["size", "xint", "xamp", "h0", "h"],
  sl.annotateFunction(function (_size, _xint, _xamp, _h0, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _size, _xint, _xamp, _h0, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _qArcCos_1 = sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_x, 1),
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
            _lessThanSign_2(_x, -1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(1);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _arcCos_1(_x);
            }, []),
          );
        }, []),
      );
    }, ["x"]);
    let _answer = _List_2(_size, 0);
    let _xs = _discretize_2(_Interval_2(_hyphenMinus_1(_xint), _xint), _size);
    /* Statements */
    _ifTrue_2(
      _verticalLineVerticalLine_2(
        _exclamationMarkEqualsSign_2(_xamp, 1),
        _exclamationMarkEqualsSign_2(_h0, 0),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_size, "gen13: xamp must be 1 and h0 must be 0");
      }, []),
    );
    _withIndexDo_2(
      _h,
      sl.annotateFunction(function (_a, _k) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexDo_2(
          _xs,
          sl.annotateFunction(function (_x, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _x, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _answer,
              _index,
              _plusSign_2(
                _at_2(_answer, _index),
                _asterisk_2(_a, _cos_1(_asterisk_2(_qArcCos_1(_x), _k))),
              ),
            );
          }, ["x", "index"]),
        );
      }, ["a", "k"]),
    );
    return _solidus_2(_answer, _absMax_1(_answer));
  }, ["size", "xint", "xamp", "h0", "h"]),
  "{ :size :xint :xamp :h0 :h |\n\t\tlet qArcCos = { :x |\n\t\t\t(x > 1).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(x < -1).if {\n\t\t\t\t\t1.pi\n\t\t\t\t} {\n\t\t\t\t\tx.arcCos\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet answer = List(size, 0);\n\t\tlet xs = Interval(xint.-, xint).discretize(size);\n\t\t((xamp != 1) || (h0 != 0)).ifTrue {\n\t\t\tsize.error('gen13: xamp must be 1 and h0 must be 0')\n\t\t};\n\t\th.withIndexDo { :a :k |\n\t\t\txs.withIndexDo { :x :index |\n\t\t\t\tanswer[index] := answer[index] + (a * (qArcCos(x) * k).cos)\n\t\t\t}\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen16",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aList, 1);
    /* Statements */
    _toByDo_4(
      2,
      _size_1(_aList),
      3,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _at_2(_aList, _i);
        let _alpha = _at_2(_aList, _plusSign_2(_i, 1));
        let _y2 = _at_2(_aList, _plusSign_2(_i, 2));
        /* Statements */
        _if_3(
          _equalsSign_2(_alpha, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _solidus_2(_hyphenMinus_2(_y2, _y1), _n);
            /* Statements */
            return _timesRepeat_2(
              _n,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _y1);
                return _y1 = _plusSign_2(_y1, _z);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _solidus_2(
              _hyphenMinus_2(_y2, _y1),
              _hyphenMinus_2(1, _exp_1(_alpha)),
            );
            let _beta = _solidus_2(_alpha, _n);
            let _x = _beta;
            /* Statements */
            return _timesRepeat_2(
              _n,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(
                  _answer,
                  _plusSign_2(
                    _y1,
                    _asterisk_2(_z, _hyphenMinus_2(1, _exp_1(_x))),
                  ),
                );
                return _x = _plusSign_2(_x, _beta);
              }, []),
            );
          }, []),
        );
        return _y1 = _y2;
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet answer = [];\n\t\tlet y1 = aList[1];\n\t\t2.toByDo(aList.size, 3) { :i |\n\t\t\tlet n = aList[i];\n\t\t\tlet alpha = aList[i + 1];\n\t\t\tlet y2 = aList[i + 2];\n\t\t\t(alpha = 0).if {\n\t\t\t\tlet z = (y2 - y1) / n;\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\tanswer.add(y1);\n\t\t\t\t\ty1 := y1 + z\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tlet z = (y2 - y1) / (1 - alpha.exp);\n\t\t\t\tlet beta = alpha / n;\n\t\t\t\tlet x = beta;\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\tanswer.add(y1 + (z * (1 - x.exp)));\n\t\t\t\t\tx := x + beta\n\t\t\t\t}\n\t\t\t};\n\t\t\ty1 := y2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen19",
  ["self", "aMatrix"],
  sl.annotateFunction(function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _do_2(
      _aMatrix,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addSine_5(
          _answer,
          _at_2(_each, 1),
          _at_2(_each, 2),
          _degreesToRadians_1(_at_2(_each, 3)),
          _at_2(_each, 4),
        );
      }, ["each"]),
    );
    return _solidus_2(_answer, _absMax_1(_answer));
  }, ["self", "aMatrix"]),
  "{ :self :aMatrix |\n\t\tlet answer = List(self, 0);\n\t\taMatrix.do { :each |\n\t\t\tanswer.addSine(each[1], each[2], each[3].degreesToRadians, each[4])\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "gen20",
  ["self", "window", "max", "coefficients"],
  sl.annotateFunction(function (_self, _window, _max, _coefficients) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _window, _max, _coefficients";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(
      _hyphenMinusHyphenMinus_2(-0.5, 0.5),
      _self,
      _caseOf_3(
        _window,
        [
          _hyphenMinusGreaterThanSign_2(
            1,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hammingWindow_1;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hannWindow_1;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            3,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _bartlettWindow_1;
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
              return _blackmanWindow_1;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            5,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _blackmanHarrisWindow_1;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            6,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _sigma = _asterisk_2(_at_2(_coefficients, 1), 0.1);
              /* Statements */
              return sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _gaussianWindow_2(_x, _sigma);
              }, ["x"]);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            7,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _alpha = _at_2(_coefficients, 1);
              /* Statements */
              return sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _kaiserWindow_2(_x, _alpha);
              }, ["x"]);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            8,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _dirichletWindowWindow_1;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            9,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _alpha = _at_2(_coefficients, 1);
              /* Statements */
              return sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sincWindow_2(_x, _alpha);
              }, ["x"]);
            }, []),
          ),
        ],
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "gen20: unknown window");
        }, []),
      ),
    );
  }, ["self", "window", "max", "coefficients"]),
  "{ :self :window :max :coefficients |\n\t\t(-0.5 -- 0.5).discretize(\n\t\t\tself,\n\t\t\twindow.caseOf(\n\t\t\t\t[\n\t\t\t\t\t1 -> { hammingWindow:/1 },\n\t\t\t\t\t2 -> { hannWindow:/1 },\n\t\t\t\t\t3 -> { bartlettWindow:/1 },\n\t\t\t\t\t4 -> { blackmanWindow:/1 },\n\t\t\t\t\t5 -> { blackmanHarrisWindow:/1 },\n\t\t\t\t\t6 -> {\n\t\t\t\t\t\tlet sigma = coefficients[1] * 0.1;\n\t\t\t\t\t\t{ :x |\n\t\t\t\t\t\t\tx.gaussianWindow(sigma)\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t7 -> {\n\t\t\t\t\t\tlet alpha = coefficients[1];\n\t\t\t\t\t\t{ :x |\n\t\t\t\t\t\t\tx.kaiserWindow(alpha)\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t8 -> { dirichletWindowWindow:/1 },\n\t\t\t\t\t9 -> {\n\t\t\t\t\t\tlet alpha = coefficients[1];\n\t\t\t\t\t\t{ :x |\n\t\t\t\t\t\t\tx.sincWindow(alpha)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t) {\n\t\t\t\tself.error('gen20: unknown window')\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Wavetable",
  "sineTable",
  ["self", "amplitudes", "phases"],
  sl.annotateFunction(function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _amplitudes, _phases";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _sineFill_3(_answer, _amplitudes, _phases);
    return _answer;
  }, ["self", "amplitudes", "phases"]),
  "{ :self :amplitudes :phases |\n\t\tlet answer = List(self, 0);\n\t\tanswer.sineFill(amplitudes, phases);\n\t\tanswer\n\t}",
);
