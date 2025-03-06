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
  "{ :self :harmonicNumber :amplitude :initialPhase :offset | addSine(self,harmonicNumber, amplitude, +(initialPhase, pi(0.5)), offset) }",
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
  "{ :self :harmonicNumber :amplitude :initialPhase :offset | let size = size(self); let increment = /(*(pi(2), harmonicNumber), size); let phase = initialPhase; toDo(1, size, { :each | atPut(self, each, +(at(self, each), (+(*(sin(phase), amplitude), offset)))); phase := +(phase, increment) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "hammingWindow",
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
  "{ :self | atAllPut(self,0.53836); addSine(self,1, 0.46164, pi(-0.5), 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "hannWindow",
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
  "{ :self | atAllPut(self,0.5); addSine(self,1, 0.5, pi(-0.5), 0) }",
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
  "{ :self :amplitudes :phases | atAllPut(self,0); withIndexDo(amplitudes, { :each :index | addSine(self,index, each, atWrap(phases,index), 0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Wavetable",
  "welchWindow",
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
  "{ :self | atAllPut(self,0); addSine(self,0.5, 1, 0, 0) }",
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
  "{ :self :xMin :xMax :coefficients | let k = size(coefficients); discretize(Interval(xMin, xMax), self, { :x | let sum = at(coefficients, k); toByDo((-(k, 1)), 1, -1, { :i | sum := *(sum, x); sum := +(sum, at(coefficients, i)) }); sum }) }",
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
  "{ :self :aList | let answer = []; let y1 = at(aList, 1); toByDo(2, size(aList), 2, { :i | let n = at(aList, i); let y2 = at(aList, +(i, 1)); let z = ^((/(y2, y1)), (/(1, n))); timesRepeat(n, { add(answer,y1); y1 := *(y1, z) }); y1 := y2 }); answer }",
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
  "{ :self :aList | let answer = []; let y1 = at(aList, 1); toByDo(2, size(aList), 2, { :i | let n = at(aList, i); let y2 = at(aList, +(i, 1)); let z = /((-(y2, y1)), n); timesRepeat(n, { add(answer,y1); y1 := +(y1, z) }); y1 := y2 }); answer }",
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
  "{ :self :aMatrix | let answer = List(self, 0); do(aMatrix, { :each | addSine(answer,at(each, 1), at(each, 2), degreesToRadians(at(each, 3)), 0) }); /(answer, absMax(answer)) }",
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
  "{ :self :amplitudes | let answer = List(self, 0); let partial = 1; do(amplitudes, { :each | addSine(answer,partial, each, 0, 0); partial := +(partial, 1) }); /(answer, absMax(answer)) }",
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
  "{ :self :numberOfHarmonics :lowestHarmonic :multiplier | let answer = List(self, 0); let partial = lowestHarmonic; let amplitude = 1; toDo(1, numberOfHarmonics, { :each | addCosine(answer,partial, amplitude, 0, 0); partial := +(partial, 1); amplitude := ^(multiplier, each) }); /(answer, absMax(answer)) }",
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
        _tildeEqualsSign_2(_xamp, 1),
        _tildeEqualsSign_2(_h0, 0),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("gen13: xamp must be 1 and h0 must be 0");
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
  "{ :size :xint :xamp :h0 :h | let qArcCos = { :x | if((>(x, 1)), { 0 }, { if((<(x, -1)), { pi(1) }, { arcCos(x) }) }) }; let answer = List(size, 0); let xs = discretize(Interval(-(xint), xint),size); ifTrue((||((~=(xamp, 1)), (~=(h0, 0)))), { error('gen13: xamp must be 1 and h0 must be 0') }); withIndexDo(h, { :a :k | withIndexDo(xs, { :x :index | atPut(answer, index, +(at(answer, index), (*(a, cos((*(qArcCos(x), k))))))) }) }); /(answer, absMax(answer)) }",
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
  "{ :self :aList | let answer = []; let y1 = at(aList, 1); toByDo(2, size(aList), 3, { :i | let n = at(aList, i); let alpha = at(aList, +(i, 1)); let y2 = at(aList, +(i, 2)); if((=(alpha, 0)), { let z = /((-(y2, y1)), n); timesRepeat(n, { add(answer,y1); y1 := +(y1, z) }) }, { let z = /((-(y2, y1)), (-(1, exp(alpha)))); let beta = /(alpha, n); let x = beta; timesRepeat(n, { add(answer,+(y1, (*(z, (-(1, exp(x))))))); x := +(x, beta) }) }); y1 := y2 }); answer }",
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
  "{ :self :aMatrix | let answer = List(self, 0); do(aMatrix, { :each | addSine(answer,at(each, 1), at(each, 2), degreesToRadians(at(each, 3)), at(each, 4)) }); /(answer, absMax(answer)) }",
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
  "{ :self :amplitudes :phases | let answer = List(self, 0); sineFill(answer,amplitudes, phases); answer }",
);
