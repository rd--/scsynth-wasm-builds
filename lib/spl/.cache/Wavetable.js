sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "addCosine",
  ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  function (_self, _harmonicNumber, _amplitude, _initialPhase, _offset) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _harmonicNumber, _amplitude, _initialPhase, _offset"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addSine_5(
      _self,
      _harmonicNumber,
      _amplitude,
      _plusSign_2(_initialPhase, _pi_1(0.5)),
      _offset,
    );
  },
  "{ :self :harmonicNumber :amplitude :initialPhase :offset |\n\t\tself.addSine(harmonicNumber, amplitude, initialPhase + 0.5.pi, offset)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "addSine",
  ["self", "harmonicNumber", "amplitude", "initialPhase", "offset"],
  function (_self, _harmonicNumber, _amplitude, _initialPhase, _offset) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _harmonicNumber, _amplitude, _initialPhase, _offset"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    let _increment = _solidus_2(_asterisk_2(_pi_1(2), _harmonicNumber), _size);
    let _phase = _initialPhase;
    /* Statements */
    return _toDo_3(1, _size, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(
        _self,
        _each,
        _plusSign_2(
          _at_2(_self, _each),
          _plusSign_2(_asterisk_2(_sin_1(_phase), _amplitude), _offset),
        ),
      );
      return _phase = _plusSign_2(_phase, _increment);
    });
  },
  "{ :self :harmonicNumber :amplitude :initialPhase :offset |\n\t\tlet size = self.size;\n\t\tlet increment = 2.pi * harmonicNumber / size;\n\t\tlet phase = initialPhase;\n\t\t1.toDo(size) { :each |\n\t\t\tself[each] := self[each] + (phase.sin * amplitude + offset);\n\t\t\tphase := phase + increment\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0.53836);
    return _addSine_5(_self, 1, 0.46164, _pi_1(-0.5), 0);
  },
  "{ :self |\n\t\tself.atAllPut(0.53836);\n\t\tself.addSine(1, 0.46164, -0.5.pi, 0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "hannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0.5);
    return _addSine_5(_self, 1, 0.5, _pi_1(-0.5), 0);
  },
  "{ :self |\n\t\tself.atAllPut(0.5);\n\t\tself.addSine(1, 0.5, -0.5.pi, 0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "sineFill",
  ["self", "amplitudes", "phases"],
  function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _amplitudes, _phases"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0);
    return _withIndexDo_2(_amplitudes, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _each, _index"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addSine_5(_self, _index, _each, _atWrap_2(_phases, _index), 0);
    });
  },
  "{ :self :amplitudes :phases |\n\t\tself.atAllPut(0);\n\t\tamplitudes.withIndexDo { :each :index |\n\t\t\tself.addSine(index, each, phases.atWrap(index), 0)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Wavetable",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0);
    return _addSine_5(_self, 0.5, 1, 0, 0);
  },
  "{ :self |\n\t\tself.atAllPut(0);\n\t\tself.addSine(0.5, 1, 0, 0)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen03",
  ["self", "xMin", "xMax", "coefficients"],
  function (_self, _xMin, _xMax, _coefficients) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _xMin, _xMax, _coefficients"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _size_1(_coefficients);
    /* Statements */
    return _discretize_3(_Interval_2(_xMin, _xMax), _self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _x"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _sum = _at_2(_coefficients, _k);
      /* Statements */
      _toByDo_4(_hyphenMinus_2(_k, 1), 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _i"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _sum = _asterisk_2(_sum, _x);
        return _sum = _plusSign_2(_sum, _at_2(_coefficients, _i));
      });
      return _sum;
    });
  },
  "{ :self :xMin :xMax :coefficients |\n\t\tlet k = coefficients.size;\n\t\tInterval(xMin, xMax).discretize(self) { :x |\n\t\t\tlet sum = coefficients[k];\n\t\t\t(k - 1).toByDo(1, -1) { :i |\n\t\t\t\tsum := sum * x;\n\t\t\t\tsum := sum + coefficients[i]\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen05",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aSequence"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aSequence, 1);
    /* Statements */
    _toByDo_4(2, _size_1(_aSequence), 2, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _n = _at_2(_aSequence, _i);
      let _y2 = _at_2(_aSequence, _plusSign_2(_i, 1));
      let _z = _circumflexAccent_2(_solidus_2(_y2, _y1), _solidus_2(1, _n));
      /* Statements */
      _timesRepeat_2(_n, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _add_2(_answer, _y1);
        return _y1 = _asterisk_2(_y1, _z);
      });
      return _y1 = _y2;
    });
    return _answer;
  },
  "{ :self :aSequence |\n\t\tlet answer = [];\n\t\tlet y1 = aSequence[1];\n\t\t2.toByDo(aSequence.size, 2) { :i |\n\t\t\tlet n = aSequence[i];\n\t\t\tlet y2 = aSequence[i + 1];\n\t\t\tlet z = (y2 / y1) ^ (1 / n);\n\t\t\tn.timesRepeat {\n\t\t\t\tanswer.add(y1);\n\t\t\t\ty1 := y1 * z\n\t\t\t};\n\t\t\ty1 := y2\n\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen07",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aSequence"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aSequence, 1);
    /* Statements */
    _toByDo_4(2, _size_1(_aSequence), 2, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _n = _at_2(_aSequence, _i);
      let _y2 = _at_2(_aSequence, _plusSign_2(_i, 1));
      let _z = _solidus_2(_hyphenMinus_2(_y2, _y1), _n);
      /* Statements */
      _timesRepeat_2(_n, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        _add_2(_answer, _y1);
        return _y1 = _plusSign_2(_y1, _z);
      });
      return _y1 = _y2;
    });
    return _answer;
  },
  "{ :self :aSequence |\n\t\tlet answer = [];\n\t\tlet y1 = aSequence[1];\n\t\t2.toByDo(aSequence.size, 2) { :i |\n\t\t\tlet n = aSequence[i];\n\t\t\tlet y2 = aSequence[i + 1];\n\t\t\tlet z = (y2 - y1) / n;\n\t\t\tn.timesRepeat {\n\t\t\t\tanswer.add(y1);\n\t\t\t\ty1 := y1 + z\n\t\t\t};\n\t\t\ty1 := y2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen09",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aMatrix"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _do_2(_aMatrix, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addSine_5(
        _answer,
        _at_2(_each, 1),
        _at_2(_each, 2),
        _degreesToRadians_1(_at_2(_each, 3)),
        0,
      );
    });
    return _solidus_2(_answer, _absMax_1(_answer));
  },
  "{ :self :aMatrix |\n\t\tlet answer = List(self, 0);\n\t\taMatrix.do { :each |\n\t\t\tanswer.addSine(each[1], each[2], each[3].degreesToRadians, 0)\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen10",
  ["self", "amplitudes"],
  function (_self, _amplitudes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _amplitudes"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _partial = 1;
    /* Statements */
    _do_2(_amplitudes, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _addSine_5(_answer, _partial, _each, 0, 0);
      return _partial = _plusSign_2(_partial, 1);
    });
    return _solidus_2(_answer, _absMax_1(_answer));
  },
  "{ :self :amplitudes |\n\t\tlet answer = List(self, 0);\n\t\tlet partial = 1;\n\t\tamplitudes.do { :each |\n\t\t\tanswer.addSine(partial, each, 0, 0);\n\t\t\tpartial := partial + 1\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen11",
  ["self", "numberOfHarmonics", "lowestHarmonic", "multiplier"],
  function (_self, _numberOfHarmonics, _lowestHarmonic, _multiplier) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _numberOfHarmonics, _lowestHarmonic, _multiplier"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    let _partial = _lowestHarmonic;
    let _amplitude = 1;
    /* Statements */
    _toDo_3(1, _numberOfHarmonics, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _addCosine_5(_answer, _partial, _amplitude, 0, 0);
      _partial = _plusSign_2(_partial, 1);
      return _amplitude = _circumflexAccent_2(_multiplier, _each);
    });
    return _solidus_2(_answer, _absMax_1(_answer));
  },
  "{ :self :numberOfHarmonics :lowestHarmonic :multiplier |\n\t\tlet answer = List(self, 0);\n\t\tlet partial = lowestHarmonic;\n\t\tlet amplitude = 1;\n\t\t1.toDo(numberOfHarmonics) { :each |\n\t\t\tanswer.addCosine(partial, amplitude, 0, 0);\n\t\t\tpartial := partial + 1;\n\t\t\tamplitude := multiplier ^ each\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen13",
  ["size", "xint", "xamp", "h0", "h"],
  function (_size, _xint, _xamp, _h0, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _size, _xint, _xamp, _h0, _h"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _qArcCos_1 = function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _x"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_x, 1), function () {
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
        return _if_3(_lessThanSign_2(_x, -1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _pi_1(1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _arcCos_1(_x);
        });
      });
    };
    let _answer = _List_2(_size, 0);
    let _xs = _discretize_2(_Interval_2(_hyphenMinus_1(_xint), _xint), _size);
    /* Statements */
    _ifTrue_2(
      _verticalLineVerticalLine_2(
        _tildeEqualsSign_2(_xamp, 1),
        _tildeEqualsSign_2(_h0, 0),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("gen13: xamp must be 1 and h0 must be 0");
      },
    );
    _withIndexDo_2(_h, function (_a, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _a, _k"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withIndexDo_2(_xs, function (_x, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage =
            "Arity: expected 2, _x, _index"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _answer,
          _index,
          _plusSign_2(
            _at_2(_answer, _index),
            _asterisk_2(_a, _cos_1(_asterisk_2(_qArcCos_1(_x), _k))),
          ),
        );
      });
    });
    return _solidus_2(_answer, _absMax_1(_answer));
  },
  "{ :size :xint :xamp :h0 :h |\n\t\tlet qArcCos = { :x |\n\t\t\t(x > 1).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(x < -1).if {\n\t\t\t\t\t1.pi\n\t\t\t\t} {\n\t\t\t\t\tx.arcCos\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet answer = List(size, 0);\n\t\tlet xs = Interval(xint.-, xint).discretize(size);\n\t\t((xamp ~= 1) || (h0 ~= 0)).ifTrue {\n\t\t\t'gen13: xamp must be 1 and h0 must be 0'.error\n\t\t};\n\t\th.withIndexDo { :a :k |\n\t\t\txs.withIndexDo { :x :index |\n\t\t\t\tanswer[index] := answer[index] + (a * (qArcCos(x) * k).cos)\n\t\t\t}\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen16",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aSequence"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _y1 = _at_2(_aSequence, 1);
    /* Statements */
    _toByDo_4(2, _size_1(_aSequence), 3, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _i"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _n = _at_2(_aSequence, _i);
      let _alpha = _at_2(_aSequence, _plusSign_2(_i, 1));
      let _y2 = _at_2(_aSequence, _plusSign_2(_i, 2));
      /* Statements */
      _if_3(_equalsSign_2(_alpha, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _z = _solidus_2(_hyphenMinus_2(_y2, _y1), _n);
        /* Statements */
        return _timesRepeat_2(_n, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _add_2(_answer, _y1);
          return _y1 = _plusSign_2(_y1, _z);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _z = _solidus_2(
          _hyphenMinus_2(_y2, _y1),
          _hyphenMinus_2(1, _exp_1(_alpha)),
        );
        let _beta = _solidus_2(_alpha, _n);
        let _x = _beta;
        /* Statements */
        return _timesRepeat_2(_n, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _add_2(
            _answer,
            _plusSign_2(_y1, _asterisk_2(_z, _hyphenMinus_2(1, _exp_1(_x)))),
          );
          return _x = _plusSign_2(_x, _beta);
        });
      });
      return _y1 = _y2;
    });
    return _answer;
  },
  "{ :self :aSequence |\n\t\tlet answer = [];\n\t\tlet y1 = aSequence[1];\n\t\t2.toByDo(aSequence.size, 3) { :i |\n\t\t\tlet n = aSequence[i];\n\t\t\tlet alpha = aSequence[i + 1];\n\t\t\tlet y2 = aSequence[i + 2];\n\t\t\t(alpha = 0).if {\n\t\t\t\tlet z = (y2 - y1) / n;\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\tanswer.add(y1);\n\t\t\t\t\ty1 := y1 + z\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tlet z = (y2 - y1) / (1 - alpha.exp);\n\t\t\t\tlet beta = alpha / n;\n\t\t\t\tlet x = beta;\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\tanswer.add(y1 + (z * (1 - x.exp)));\n\t\t\t\t\tx := x + beta\n\t\t\t\t}\n\t\t\t};\n\t\t\ty1 := y2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "gen19",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aMatrix"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _do_2(_aMatrix, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addSine_5(
        _answer,
        _at_2(_each, 1),
        _at_2(_each, 2),
        _degreesToRadians_1(_at_2(_each, 3)),
        _at_2(_each, 4),
      );
    });
    return _solidus_2(_answer, _absMax_1(_answer));
  },
  "{ :self :aMatrix |\n\t\tlet answer = List(self, 0);\n\t\taMatrix.do { :each |\n\t\t\tanswer.addSine(each[1], each[2], each[3].degreesToRadians, each[4])\n\t\t};\n\t\tanswer / answer.absMax\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Wavetable",
  "sineTable",
  ["self", "amplitudes", "phases"],
  function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _amplitudes, _phases"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_self, 0);
    /* Statements */
    _sineFill_3(_answer, _amplitudes, _phases);
    return _answer;
  },
  "{ :self :amplitudes :phases |\n\t\tlet answer = List(self, 0);\n\t\tanswer.sineFill(amplitudes, phases);\n\t\tanswer\n\t}",
);
