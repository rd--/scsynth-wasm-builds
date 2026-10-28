/*  Requires: Ugen  */

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "blendXFade",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    let _signedMu = _linLin_5(_mu, 0, 1, -1, 1);
    return _xFade2_4(_y1, _y2, _signedMu, 1);
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\tlet signedMu = mu.linLin(0, 1, -1, 1);\n\t\txFade2(y1, y2, signedMu, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "blendXFade",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    let _signedMu = _linLin_5(_mu, 0, 1, -1, 1);
    return _xFade2_4(_y1, _y2, _signedMu, 1);
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\tlet signedMu = mu.linLin(0, 1, -1, 1);\n\t\txFade2(y1, y2, signedMu, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "blendXFade",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    let _signedMu = _linLin_5(_mu, 0, 1, -1, 1);
    return _xFade2_4(_y1, _y2, _signedMu, 1);
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\tlet signedMu = mu.linLin(0, 1, -1, 1);\n\t\txFade2(y1, y2, signedMu, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "brownNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _brownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ brownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "brownNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _brownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ brownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "brownNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _brownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ brownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "clipNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _clipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ clipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "clipNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _clipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ clipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "clipNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _clipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ clipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "greyNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greyNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ greyNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "greyNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greyNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ greyNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "greyNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greyNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ greyNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "pinkNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _pinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ pinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "pinkNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _pinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ pinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "pinkNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _pinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ pinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "whiteNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ whiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "whiteNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ whiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "whiteNoise",
  ["mul", "add"],
  sl.annotateFunction(function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ whiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "feedforwardFeedbackward",
  ["in", "forward/2", "backward/1"],
  sl.annotateFunction(function (_in, _forward_2, _backward_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _forward_2, _backward_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _maxBlockSize = 512;
    let _buffer = _bufClear_1(_bufAlloc_2(1, _plusSign_2(_maxBlockSize, 1)));
    let _delayTime = _controlDur_0();
    let _reader = _delayTap_2(_buffer, _delayTime);
    let _backwardAnswer = _backward_1(_reader);
    let _forwardAnswer = _forward_2(_in, _backwardAnswer);
    let _writer = _delayWrite_2(_buffer, _forwardAnswer);
    _ifTrue_2(
      _anySatisfy_2([_backwardAnswer, _forwardAnswer], _isList_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("FeedforwardFeedbackward: processors not monophonic");
      }, []),
    );
    return _lessThanSignExclamationMark_2(_forwardAnswer, _writer);
  }, ["in", "forward/2", "backward/1"]),
  "{ :in :forward/2 :backward/1 |\n\t\tlet maxBlockSize = 512;\n\t\tlet buffer = bufAlloc(1, maxBlockSize + 1).bufClear;\n\t\tlet delayTime = controlDur();\n\t\tlet reader = delayTap(buffer, delayTime);\n\t\tlet backwardAnswer = backward(reader);\n\t\tlet forwardAnswer = forward(in, backwardAnswer);\n\t\tlet writer = delayWrite(buffer, forwardAnswer);\n\t\t[backwardAnswer, forwardAnswer].anySatisfy(isList/1).ifTrue {\n\t\t\t'FeedforwardFeedbackward: processors not monophonic'.error\n\t\t};\n\t\tforwardAnswer <! writer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "feedforwardFeedbackward",
  ["in", "forward/2", "backward/1"],
  sl.annotateFunction(function (_in, _forward_2, _backward_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _forward_2, _backward_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _in,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _feedforwardFeedbackward_3(_x, _forward_2, _backward_1);
      }, ["x"]),
    );
  }, ["in", "forward/2", "backward/1"]),
  "{ :in :forward/2 :backward/1 |\n\t\tin.collect { :x |\n\t\t\tfeedforwardFeedbackward(x, forward/2, backward/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "audioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tout(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "audioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tout(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "audioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tout(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _controlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tcontrolIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _controlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tcontrolIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _controlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tcontrolIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "curveGen",
  ["gate", "levels", "times", "curves"],
  sl.annotateFunction(function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  }, ["gate", "levels", "times", "curves"]),
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "curveGen",
  ["gate", "levels", "times", "curves"],
  sl.annotateFunction(function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  }, ["gate", "levels", "times", "curves"]),
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "curveGen",
  ["gate", "levels", "times", "curves"],
  sl.annotateFunction(function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  }, ["gate", "levels", "times", "curves"]),
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "demandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _demandSequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemandSequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "demandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _demandSequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemandSequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "demandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _demandSequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemandSequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "demandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _demand_3(_trig, 0, _dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemand(trig, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "demandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _demand_3(_trig, 0, _dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemand(trig, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "demandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _demand_3(_trig, 0, _dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tdemand(trig, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\twDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\twDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\twDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "durationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _duty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tduty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "durationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _duty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tduty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "durationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _duty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tduty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "envBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    return _Env_6(
      _collect_2(
        _toBy_3(1, _n, 2),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_breakPointList, _index);
        }, ["index"]),
      ),
      _differentiate_1(
        _collect_2(
          _toBy_3(2, _m, 2),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_breakPointList, _index);
          }, ["index"]),
        ),
      ),
      _curves,
      null,
      null,
      0,
    );
  }, ["breakPointList", "curves"]),
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1.toBy(n, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2.toBy(m, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "envBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    return _Env_6(
      _collect_2(
        _toBy_3(1, _n, 2),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_breakPointList, _index);
        }, ["index"]),
      ),
      _differentiate_1(
        _collect_2(
          _toBy_3(2, _m, 2),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_breakPointList, _index);
          }, ["index"]),
        ),
      ),
      _curves,
      null,
      null,
      0,
    );
  }, ["breakPointList", "curves"]),
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1.toBy(n, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2.toBy(m, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "envBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    return _Env_6(
      _collect_2(
        _toBy_3(1, _n, 2),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_breakPointList, _index);
        }, ["index"]),
      ),
      _differentiate_1(
        _collect_2(
          _toBy_3(2, _m, 2),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_breakPointList, _index);
          }, ["index"]),
        ),
      ),
      _curves,
      null,
      null,
      0,
    );
  }, ["breakPointList", "curves"]),
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1.toBy(n, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2.toBy(m, 2).collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "envLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  sl.annotateFunction(
    function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvLinen(
        _attackTime,
        _sustainTime,
        _releaseTime,
        _level,
        _curve,
      );
    },
    ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  ),
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "envLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  sl.annotateFunction(
    function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvLinen(
        _attackTime,
        _sustainTime,
        _releaseTime,
        _level,
        _curve,
      );
    },
    ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  ),
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "envLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  sl.annotateFunction(
    function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvLinen(
        _attackTime,
        _sustainTime,
        _releaseTime,
        _level,
        _curve,
      );
    },
    ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  ),
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "eqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tbalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "eqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tbalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "eqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tbalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "eqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tpan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "eqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tpan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "eqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tpan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "expRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "expRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "expRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tfm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tfm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tfm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "holdSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    let _gate = _durationGate_1(_dur);
    let _trig = _trig1_2(_gate, _sampleDur_0());
    let _index = _stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    return _latch_2(_selectT_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = durationGate(dur);\n\t\tlet trig = trig1(gate, sampleDur());\n\t\tlet index = stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tlatch(\n\t\t\tselectT(index, inList), /* multiplexer */\n\t\t\ttrig\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "holdSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    let _gate = _durationGate_1(_dur);
    let _trig = _trig1_2(_gate, _sampleDur_0());
    let _index = _stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    return _latch_2(_selectT_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = durationGate(dur);\n\t\tlet trig = trig1(gate, sampleDur());\n\t\tlet index = stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tlatch(\n\t\t\tselectT(index, inList), /* multiplexer */\n\t\t\ttrig\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "holdSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    let _gate = _durationGate_1(_dur);
    let _trig = _trig1_2(_gate, _sampleDur_0());
    let _index = _stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    return _latch_2(_selectT_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = durationGate(dur);\n\t\tlet trig = trig1(gate, sampleDur());\n\t\tlet index = stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tlatch(\n\t\t\tselectT(index, inList), /* multiplexer */\n\t\t\ttrig\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "iRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "iRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "iRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "iRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "iRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "iRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "iRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "iRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "iRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tiRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "impulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _sequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tsequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "impulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _sequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tsequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "impulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _sequencer_2(_self, _trig),
      _trig_2(_trig, _sampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tsequencer(self, trig) * trig(trig, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "kNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\twkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "kNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\twkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "kNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _wkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\twkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Statements */
      let _grow = _exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      return _if_3(
        _isNumber_1(_curve),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _curvedResult;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _select2_3(
            _greaterThanSignEqualsSign_2(_abs_1(_curve), 0.125),
            _curvedResult,
            _linLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tselect2(\n\t\t\t\tcurve.abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.linLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Statements */
      let _grow = _exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      return _if_3(
        _isNumber_1(_curve),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _curvedResult;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _select2_3(
            _greaterThanSignEqualsSign_2(_abs_1(_curve), 0.125),
            _curvedResult,
            _linLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tselect2(\n\t\t\t\tcurve.abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.linLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Statements */
      let _grow = _exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      return _if_3(
        _isNumber_1(_curve),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _curvedResult;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _select2_3(
            _greaterThanSignEqualsSign_2(_abs_1(_curve), 0.125),
            _curvedResult,
            _linLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tselect2(\n\t\t\t\tcurve.abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.linLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linGen",
  ["gate", "levels", "times"],
  sl.annotateFunction(function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  }, ["gate", "levels", "times"]),
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linGen",
  ["gate", "levels", "times"],
  sl.annotateFunction(function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  }, ["gate", "levels", "times"]),
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linGen",
  ["gate", "levels", "times"],
  sl.annotateFunction(function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  }, ["gate", "levels", "times"]),
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Statements */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    return _timesPlus_3(_clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tself.clip(srcLo, srcHi).timesPlus(mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Statements */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    return _timesPlus_3(_clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tself.clip(srcLo, srcHi).timesPlus(mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Statements */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    return _timesPlus_3(_clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tself.clip(srcLo, srcHi).timesPlus(mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tlinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tlinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tlinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _linLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "mouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "mouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "mouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "mouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "mouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "mouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tmouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "pulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _sawDpw_2(_freq, 0),
      _sawDpw_2(_freq, _wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tsawDpw(freq, 0) - sawDpw(freq, (width + width).wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "pulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _sawDpw_2(_freq, 0),
      _sawDpw_2(_freq, _wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tsawDpw(freq, 0) - sawDpw(freq, (width + width).wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "pulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _sawDpw_2(_freq, 0),
      _sawDpw_2(_freq, _wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tsawDpw(freq, 0) - sawDpw(freq, (width + width).wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\trand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "selectXFocus",
  ["which", "array", "focus", "wrap"],
  sl.annotateFunction(function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _wrap,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(
          _withIndexCollect_2(
            _array,
            sl.annotateFunction(function (_input, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _input, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _modularDistance_3(
                        _which,
                        _hyphenMinus_2(_index, 1),
                        _size_1(_array),
                      ),
                      _focus,
                    ),
                  ),
                  0,
                ),
                _input,
              );
            }, ["input", "index"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _array,
          sl.annotateFunction(function (_input, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _input, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _absDif_2(_which, _hyphenMinus_2(_index, 1)),
                    _focus,
                  ),
                ),
                0,
              ),
              _input,
            );
          }, ["input", "index"]),
        );
      }, []),
    );
  }, ["which", "array", "focus", "wrap"]),
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (modularDistance(which, index - 1, array.size) * focus)).max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (absDif(which, index - 1) * focus)).max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "selectXFocus",
  ["which", "array", "focus", "wrap"],
  sl.annotateFunction(function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _wrap,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(
          _withIndexCollect_2(
            _array,
            sl.annotateFunction(function (_input, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _input, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _modularDistance_3(
                        _which,
                        _hyphenMinus_2(_index, 1),
                        _size_1(_array),
                      ),
                      _focus,
                    ),
                  ),
                  0,
                ),
                _input,
              );
            }, ["input", "index"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _array,
          sl.annotateFunction(function (_input, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _input, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _absDif_2(_which, _hyphenMinus_2(_index, 1)),
                    _focus,
                  ),
                ),
                0,
              ),
              _input,
            );
          }, ["input", "index"]),
        );
      }, []),
    );
  }, ["which", "array", "focus", "wrap"]),
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (modularDistance(which, index - 1, array.size) * focus)).max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (absDif(which, index - 1) * focus)).max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "selectXFocus",
  ["which", "array", "focus", "wrap"],
  sl.annotateFunction(function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _wrap,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(
          _withIndexCollect_2(
            _array,
            sl.annotateFunction(function (_input, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _input, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _modularDistance_3(
                        _which,
                        _hyphenMinus_2(_index, 1),
                        _size_1(_array),
                      ),
                      _focus,
                    ),
                  ),
                  0,
                ),
                _input,
              );
            }, ["input", "index"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _array,
          sl.annotateFunction(function (_input, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _input, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _absDif_2(_which, _hyphenMinus_2(_index, 1)),
                    _focus,
                  ),
                ),
                0,
              ),
              _input,
            );
          }, ["input", "index"]),
        );
      }, []),
    );
  }, ["which", "array", "focus", "wrap"]),
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (modularDistance(which, index - 1, array.size) * focus)).max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (absDif(which, index - 1) * focus)).max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectT_2(
      _stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tselectT(\n\t\t\tstepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectT_2(
      _stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tselectT(\n\t\t\tstepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectT_2(
      _stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tselectT(\n\t\t\tstepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "silent",
  ["numChannels"],
  sl.annotateFunction(function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numChannels, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_numChannels, _dc_1(0));
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tdc(0)\n\t\t} {\n\t\t\tList(numChannels, dc(0))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "silent",
  ["numChannels"],
  sl.annotateFunction(function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numChannels, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_numChannels, _dc_1(0));
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tdc(0)\n\t\t} {\n\t\t\tList(numChannels, dc(0))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "silent",
  ["numChannels"],
  sl.annotateFunction(function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numChannels, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_numChannels, _dc_1(0));
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tdc(0)\n\t\t} {\n\t\t\tList(numChannels, dc(0))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "splayAz",
  [
    "numChannels",
    "inList",
    "spread",
    "level",
    "width",
    "center",
    "orientation",
    "levelComp",
  ],
  sl.annotateFunction(
    function (
      _numChannels,
      _inList,
      _spread,
      _level,
      _width,
      _center,
      _orientation,
      _levelComp,
    ) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _numChannels, _inList, _spread, _level, _width, _center, _orientation, _levelComp";
        throw new Error(errorMessage);
      } /* Statements */
      let _n = _max_2(1, _size_1(_inList));
      let _pos = _if_3(
        _equalsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _center;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      _ifTrue_2(
        _levelComp,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
        }, []),
      );
      return _collect_2(
        _flop_1(
          _panAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
        ),
        _sum_1,
      );
    },
    [
      "numChannels",
      "inList",
      "spread",
      "level",
      "width",
      "center",
      "orientation",
      "levelComp",
    ],
  ),
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tpanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "splayAz",
  [
    "numChannels",
    "inList",
    "spread",
    "level",
    "width",
    "center",
    "orientation",
    "levelComp",
  ],
  sl.annotateFunction(
    function (
      _numChannels,
      _inList,
      _spread,
      _level,
      _width,
      _center,
      _orientation,
      _levelComp,
    ) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _numChannels, _inList, _spread, _level, _width, _center, _orientation, _levelComp";
        throw new Error(errorMessage);
      } /* Statements */
      let _n = _max_2(1, _size_1(_inList));
      let _pos = _if_3(
        _equalsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _center;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      _ifTrue_2(
        _levelComp,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
        }, []),
      );
      return _collect_2(
        _flop_1(
          _panAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
        ),
        _sum_1,
      );
    },
    [
      "numChannels",
      "inList",
      "spread",
      "level",
      "width",
      "center",
      "orientation",
      "levelComp",
    ],
  ),
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tpanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "splayAz",
  [
    "numChannels",
    "inList",
    "spread",
    "level",
    "width",
    "center",
    "orientation",
    "levelComp",
  ],
  sl.annotateFunction(
    function (
      _numChannels,
      _inList,
      _spread,
      _level,
      _width,
      _center,
      _orientation,
      _levelComp,
    ) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _numChannels, _inList, _spread, _level, _width, _center, _orientation, _levelComp";
        throw new Error(errorMessage);
      } /* Statements */
      let _n = _max_2(1, _size_1(_inList));
      let _pos = _if_3(
        _equalsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _center;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      _ifTrue_2(
        _levelComp,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
        }, []),
      );
      return _collect_2(
        _flop_1(
          _panAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
        ),
        _sum_1,
      );
    },
    [
      "numChannels",
      "inList",
      "spread",
      "level",
      "width",
      "center",
      "orientation",
      "levelComp",
    ],
  ),
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tpanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _bufRd_5(
      1,
      _buf,
      _tiRand_3(0, _hyphenMinus_2(_bufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tbufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\ttiRand(0, bufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _bufRd_5(
      1,
      _buf,
      _tiRand_3(0, _hyphenMinus_2(_bufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tbufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\ttiRand(0, bufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _bufRd_5(
      1,
      _buf,
      _tiRand_3(0, _hyphenMinus_2(_bufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tbufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\ttiRand(0, bufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tChoose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isMatrixOf_2(_inList, "SmallFloat");
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tBufChoose_2(_tr, _localBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedTChoose_2(_tr, _inList);
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(\n\t\t\tinList.elementType = 'SmallFloat' |  {\n\t\t\t\tinList.isMatrixOf('SmallFloat')\n\t\t\t}\n\t\t).if {\n\t\t\ttBufChoose(tr, localBuf(inList))\n\t\t} {\n\t\t\tuncheckedTChoose(tr, inList)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tChoose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isMatrixOf_2(_inList, "SmallFloat");
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tBufChoose_2(_tr, _localBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedTChoose_2(_tr, _inList);
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(\n\t\t\tinList.elementType = 'SmallFloat' |  {\n\t\t\t\tinList.isMatrixOf('SmallFloat')\n\t\t\t}\n\t\t).if {\n\t\t\ttBufChoose(tr, localBuf(inList))\n\t\t} {\n\t\t\tuncheckedTChoose(tr, inList)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tChoose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isMatrixOf_2(_inList, "SmallFloat");
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tBufChoose_2(_tr, _localBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedTChoose_2(_tr, _inList);
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(\n\t\t\tinList.elementType = 'SmallFloat' |  {\n\t\t\t\tinList.isMatrixOf('SmallFloat')\n\t\t\t}\n\t\t).if {\n\t\t\ttBufChoose(tr, localBuf(inList))\n\t\t} {\n\t\t\tuncheckedTChoose(tr, inList)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _tDuty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\ttDuty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _tDuty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\ttDuty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _tDuty_3(_dur, 0, _dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\ttDuty(dur, 0, dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tHoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_holdSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tholdSequence(inList, dur).trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tHoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_holdSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tholdSequence(inList, dur).trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tHoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_holdSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tholdSequence(inList, dur).trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Statements */
    let _phase = _tLine_4(0, _bufFrames_1(_bufNum), _dur, _trig);
    return _bufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = tLine(0, bufFrames(bufNum), dur, trig);\n\t\tbufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Statements */
    let _phase = _tLine_4(0, _bufFrames_1(_bufNum), _dur, _trig);
    return _bufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = tLine(0, bufFrames(bufNum), dur, trig);\n\t\tbufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Statements */
    let _phase = _tLine_4(0, _bufFrames_1(_bufNum), _dur, _trig);
    return _bufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = tLine(0, bufFrames(bufNum), dur, trig);\n\t\tbufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig1(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig1(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_self, _sampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\ttrig1(self, sampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "wrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.WrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "wrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.WrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "wrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.WrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "zeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _clearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! clearBuf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "zeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _clearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! clearBuf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "zeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _clearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! clearBuf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  sl.annotateFunction(
    function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
        throw new Error(errorMessage);
      } /* Primitive */
      return new sc.Env(
        _levels,
        _times,
        _curves,
        _releaseNode,
        _loopNode,
        _offset,
      );
    },
    ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  ),
  "{ :levels :times :curves :releaseNode :loopNode :offset |\n\t\t<primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  sl.annotateFunction(
    function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
        throw new Error(errorMessage);
      } /* Primitive */
      return new sc.Env(
        _levels,
        _times,
        _curves,
        _releaseNode,
        _loopNode,
        _offset,
      );
    },
    ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  ),
  "{ :levels :times :curves :releaseNode :loopNode :offset |\n\t\t<primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  sl.annotateFunction(
    function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
        throw new Error(errorMessage);
      } /* Primitive */
      return new sc.Env(
        _levels,
        _times,
        _curves,
        _releaseNode,
        _loopNode,
        _offset,
      );
    },
    ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  ),
  "{ :levels :times :curves :releaseNode :loopNode :offset |\n\t\t<primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  sl.annotateFunction(
    function (
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    ) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Adsr(
        _gate,
        _attackTime,
        _decayTime,
        _sustainLevel,
        _releaseTime,
        _curve,
      );
    },
    ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  ),
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve |\n\t\t<primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  sl.annotateFunction(
    function (
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    ) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Adsr(
        _gate,
        _attackTime,
        _decayTime,
        _sustainLevel,
        _releaseTime,
        _curve,
      );
    },
    ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  ),
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve |\n\t\t<primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  sl.annotateFunction(
    function (
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    ) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Adsr(
        _gate,
        _attackTime,
        _decayTime,
        _sustainLevel,
        _releaseTime,
        _curve,
      );
    },
    ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
  ),
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve |\n\t\t<primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  }, ["gate", "attackTime", "releaseTime", "curve"]),
  "{ :gate :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  }, ["gate", "attackTime", "releaseTime", "curve"]),
  "{ :gate :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  }, ["gate", "attackTime", "releaseTime", "curve"]),
  "{ :gate :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "audioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.AudioIn(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "audioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.AudioIn(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "audioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.AudioIn(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BHiPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BHiPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BHiPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BLowPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BLowPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BLowPass4(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames |\n\t\t<primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames |\n\t\t<primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames |\n\t\t<primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufClear(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufClear(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufClear(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList |\n\t\t<primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList |\n\t\t<primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList |\n\t\t<primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "bufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "bufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "bufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold |\n\t\t<primitive: return sc.Changed(_input, _threshold);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold |\n\t\t<primitive: return sc.Changed(_input, _threshold);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold |\n\t\t<primitive: return sc.Changed(_input, _threshold);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "companderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  sl.annotateFunction(
    function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.CompanderD(
        _in,
        _thresh,
        _slopeBelow,
        _slopeAbove,
        _clampTime,
        _relaxTime,
      );
    },
    ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  ),
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime |\n\t\t<primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "companderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  sl.annotateFunction(
    function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.CompanderD(
        _in,
        _thresh,
        _slopeBelow,
        _slopeAbove,
        _clampTime,
        _relaxTime,
      );
    },
    ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  ),
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime |\n\t\t<primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "companderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  sl.annotateFunction(
    function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.CompanderD(
        _in,
        _thresh,
        _slopeBelow,
        _slopeAbove,
        _clampTime,
        _relaxTime,
      );
    },
    ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  ),
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime |\n\t\t<primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "controlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.ControlIn(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "controlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.ControlIn(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "controlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.ControlIn(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "controlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ControlOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "controlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ControlOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "controlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ControlOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "cutoff",
  ["sustainTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  }, ["sustainTime", "releaseTime", "curve"]),
  "{ :sustainTime :releaseTime :curve |\n\t\t<primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "cutoff",
  ["sustainTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  }, ["sustainTime", "releaseTime", "curve"]),
  "{ :sustainTime :releaseTime :curve |\n\t\t<primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "cutoff",
  ["sustainTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  }, ["sustainTime", "releaseTime", "curve"]),
  "{ :sustainTime :releaseTime :curve |\n\t\t<primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "delayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime |\n\t\t<primitive: return sc.DelayTap(_bufnum, _delayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "delayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime |\n\t\t<primitive: return sc.DelayTap(_bufnum, _delayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "delayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime |\n\t\t<primitive: return sc.DelayTap(_bufnum, _delayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "delayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DelayWrite(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "delayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DelayWrite(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "delayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DelayWrite(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "dynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "dynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "dynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "inFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.InFb(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "inFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.InFb(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "inFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus |\n\t\t<primitive: return sc.InFb(_numChannels, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "linSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList |\n\t\t<primitive: return sc.LinSeg(_gate, _coordList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "linSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList |\n\t\t<primitive: return sc.LinSeg(_gate, _coordList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "linSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList |\n\t\t<primitive: return sc.LinSeg(_gate, _coordList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.Line(_start, _end, _dur, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.Line(_start, _end, _dur, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.Line(_start, _end, _dur, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "multiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input |\n\t\t<primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "multiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input |\n\t\t<primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "multiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input |\n\t\t<primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur |\n\t\t<primitive: return sc.Osc1(_buf, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur |\n\t\t<primitive: return sc.Osc1(_buf, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur |\n\t\t<primitive: return sc.Osc1(_buf, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  }, ["trig", "attackTime", "releaseTime", "curve"]),
  "{ :trig :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  }, ["trig", "attackTime", "releaseTime", "curve"]),
  "{ :trig :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  sl.annotateFunction(function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  }, ["trig", "attackTime", "releaseTime", "curve"]),
  "{ :trig :attackTime :releaseTime :curve |\n\t\t<primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "pingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  sl.annotateFunction(
    function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PingPongDelay(
        _left,
        _right,
        _maxDelayTime,
        _delayTime,
        _feedback,
      );
    },
    ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  ),
  "{ :left :right :maxDelayTime :delayTime :feedback |\n\t\t<primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "pingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  sl.annotateFunction(
    function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PingPongDelay(
        _left,
        _right,
        _maxDelayTime,
        _delayTime,
        _feedback,
      );
    },
    ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  ),
  "{ :left :right :maxDelayTime :delayTime :feedback |\n\t\t<primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "pingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  sl.annotateFunction(
    function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PingPongDelay(
        _left,
        _right,
        _maxDelayTime,
        _delayTime,
        _feedback,
      );
    },
    ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  ),
  "{ :left :right :maxDelayTime :delayTime :feedback |\n\t\t<primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "pmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  sl.annotateFunction(function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  }, ["carfreq", "modfreq", "pmindex", "modphase"]),
  "{ :carfreq :modfreq :pmindex :modphase |\n\t\t<primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "pmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  sl.annotateFunction(function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  }, ["carfreq", "modfreq", "pmindex", "modphase"]),
  "{ :carfreq :modfreq :pmindex :modphase |\n\t\t<primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "pmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  sl.annotateFunction(function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  }, ["carfreq", "modfreq", "pmindex", "modphase"]),
  "{ :carfreq :modfreq :pmindex :modphase |\n\t\t<primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "release",
  ["input", "attackTime", "dur", "releaseTime"],
  sl.annotateFunction(function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  }, ["input", "attackTime", "dur", "releaseTime"]),
  "{ :input :attackTime :dur :releaseTime |\n\t\t<primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "release",
  ["input", "attackTime", "dur", "releaseTime"],
  sl.annotateFunction(function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  }, ["input", "attackTime", "dur", "releaseTime"]),
  "{ :input :attackTime :dur :releaseTime |\n\t\t<primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "release",
  ["input", "attackTime", "dur", "releaseTime"],
  sl.annotateFunction(function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  }, ["input", "attackTime", "dur", "releaseTime"]),
  "{ :input :attackTime :dur :releaseTime |\n\t\t<primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ringzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ringzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ringzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time |\n\t\t<primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse |\n\t\t<primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse |\n\t\t<primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse |\n\t\t<primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "selectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.SelectX(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "selectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.SelectX(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "selectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.SelectX(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  sl.annotateFunction(
    function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
    },
    ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  ),
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  sl.annotateFunction(
    function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
    },
    ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  ),
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  sl.annotateFunction(
    function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
    },
    ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  ),
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  sl.annotateFunction(function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  }, ["sfBufferList", "phase", "loop", "interpolation"]),
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  sl.annotateFunction(function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  }, ["sfBufferList", "phase", "loop", "interpolation"]),
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  sl.annotateFunction(function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  }, ["sfBufferList", "phase", "loop", "interpolation"]),
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Shuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Shuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Shuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase |\n\t\t<primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase |\n\t\t<primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase |\n\t\t<primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur |\n\t\t<primitive: return sc.Sine(_trig, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur |\n\t\t<primitive: return sc.Sine(_trig, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur |\n\t\t<primitive: return sc.Sine(_trig, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  sl.annotateFunction(function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  }, ["inList", "spread", "level", "center", "levelComp"]),
  "{ :inList :spread :level :center :levelComp |\n\t\t<primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  sl.annotateFunction(function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  }, ["inList", "spread", "level", "center", "levelComp"]),
  "{ :inList :spread :level :center :levelComp |\n\t\t<primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  sl.annotateFunction(function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  }, ["inList", "spread", "level", "center", "levelComp"]),
  "{ :inList :spread :level :center :levelComp |\n\t\t<primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList |\n\t\t<primitive: return sc.Splay2(_inList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList |\n\t\t<primitive: return sc.Splay2(_inList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList |\n\t\t<primitive: return sc.Splay2(_inList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "tLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "tLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "tLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "twChoose",
  ["trig", "array", "weights", "normalize"],
  sl.annotateFunction(function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  }, ["trig", "array", "weights", "normalize"]),
  "{ :trig :array :weights :normalize |\n\t\t<primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "twChoose",
  ["trig", "array", "weights", "normalize"],
  sl.annotateFunction(function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  }, ["trig", "array", "weights", "normalize"]),
  "{ :trig :array :weights :normalize |\n\t\t<primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "twChoose",
  ["trig", "array", "weights", "normalize"],
  sl.annotateFunction(function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  }, ["trig", "array", "weights", "normalize"]),
  "{ :trig :array :weights :normalize |\n\t\t<primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "txLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "txLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "txLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig |\n\t\t<primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "uncheckedTChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array |\n\t\t<primitive: return sc.TChoose(_trig, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "uncheckedTChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array |\n\t\t<primitive: return sc.TChoose(_trig, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "uncheckedTChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array |\n\t\t<primitive: return sc.TChoose(_trig, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "varLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve |\n\t\t<primitive: return sc.VarLag(_input, _time, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "varLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve |\n\t\t<primitive: return sc.VarLag(_input, _time, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "varLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve |\n\t\t<primitive: return sc.VarLag(_input, _time, _curve);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "xChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.XChoose(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "xChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.XChoose(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "xChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.XChoose(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "xLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.XLine(_start, _end, _dur, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "xLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.XLine(_start, _end, _dur, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "xLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur |\n\t\t<primitive: return sc.XLine(_start, _end, _dur, 0);>\n\t}",
);
