/*  Requires: Ugen  */

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BrownNoise",
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
            return _BrownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ BrownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BrownNoise",
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
            return _BrownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ BrownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BrownNoise",
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
            return _BrownNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ BrownNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ClipNoise",
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
            return _ClipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ ClipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ClipNoise",
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
            return _ClipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ ClipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ClipNoise",
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
            return _ClipNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ ClipNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "GrayNoise",
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
            return _GrayNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ GrayNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "GrayNoise",
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
            return _GrayNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ GrayNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "GrayNoise",
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
            return _GrayNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ GrayNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PinkNoise",
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
            return _PinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ PinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PinkNoise",
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
            return _PinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ PinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PinkNoise",
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
            return _PinkNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ PinkNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "WhiteNoise",
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
            return _WhiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ WhiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "WhiteNoise",
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
            return _WhiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ WhiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "WhiteNoise",
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
            return _WhiteNoise_0();
          }, []),
          _shape_1(_mul),
        ),
        _mul,
      ),
      _add,
    );
  }, ["mul", "add"]),
  "{ :mul :add |\n\t\t{ WhiteNoise() } ! mul.shape * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "FeedforwardFeedbackward",
  ["in", "forward:/2", "backward:/1"],
  sl.annotateFunction(function (_in, _forward_2, _backward_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _forward_2, _backward_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxBlockSize = 512;
    let _buffer = _BufClear_1(_BufAlloc_2(1, _plusSign_2(_maxBlockSize, 1)));
    let _delayTime = _ControlDur_0();
    let _reader = _DelayTap_2(_buffer, _delayTime);
    let _backwardAnswer = _backward_1(_reader);
    let _forwardAnswer = _forward_2(_in, _backwardAnswer);
    let _writer = _DelayWrite_2(_buffer, _forwardAnswer);
    /* Statements */
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
  }, ["in", "forward:/2", "backward:/1"]),
  "{ :in :forward:/2 :backward:/1 |\n\t\tlet maxBlockSize = 512;\n\t\tlet buffer = BufAlloc(1, maxBlockSize + 1).BufClear;\n\t\tlet delayTime = ControlDur();\n\t\tlet reader = DelayTap(buffer, delayTime);\n\t\tlet backwardAnswer = backward(reader);\n\t\tlet forwardAnswer = forward(in, backwardAnswer);\n\t\tlet writer = DelayWrite(buffer, forwardAnswer);\n\t\t[backwardAnswer, forwardAnswer].anySatisfy(isList:/1).ifTrue {\n\t\t\t'FeedforwardFeedbackward: processors not monophonic'.error\n\t\t};\n\t\tforwardAnswer <! writer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "FeedforwardFeedbackward",
  ["in", "forward:/2", "backward:/1"],
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
        return _FeedforwardFeedbackward_3(_x, _forward_2, _backward_1);
      }, ["x"]),
    );
  }, ["in", "forward:/2", "backward:/1"]),
  "{ :in :forward:/2 :backward:/1 |\n\t\tin.collect { :x |\n\t\t\tFeedforwardFeedbackward(x, forward:/2, backward:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Cc",
  ["index"],
  sl.annotateFunction(function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  }, ["index"]),
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrixOf_2(_inList, "SmallFloat"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TChoose_2(_tr, _inList);
          }, []),
        );
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrixOf_2(_inList, "SmallFloat"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TChoose_2(_tr, _inList);
          }, []),
        );
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  sl.annotateFunction(function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrixOf_2(_inList, "SmallFloat"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _TChoose_2(_tr, _inList);
          }, []),
        );
      }, []),
    );
  }, ["tr", "inList"]),
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "CurveGen",
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
  "CurveGen",
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
  "CurveGen",
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
  "DemandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  }, ["x", "y", "z", "coordinateList"]),
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
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
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
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
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  sl.annotateFunction(function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
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
  "EnvLinen",
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
  "EnvLinen",
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
  "EnvLinen",
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
  "EqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  sl.annotateFunction(function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  }, ["left", "right", "pos"]),
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  sl.annotateFunction(function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  }, ["in", "pos"]),
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_catenate_1(_ctlMatrix), _catenate_1(_modMatrix));
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.catenate, modMatrix.catenate)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Select_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Select(index, inList), trig) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Select_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Select(index, inList), trig) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _kr_1(_trig),
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Select_2(_index, _inList), _trig);
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig.kr, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Select(index, inList), trig) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  sl.annotateFunction(function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  }, ["self", "trig"]),
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  }, ["numChannels", "x", "y", "z", "coordinateList"]),
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _grow = _Exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_Clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      /* Statements */
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
          return _Select2_3(
            _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
            _curvedResult,
            _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _grow = _Exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_Clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      /* Statements */
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
          return _Select2_3(
            _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
            _curvedResult,
            _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _grow = _Exp_1(_curve);
      let _a = _solidus_2(
        _hyphenMinus_2(_outMax, _outMin),
        _hyphenMinus_2(1, _grow),
      );
      let _b = _plusSign_2(_outMin, _a);
      let _scaled = _solidus_2(
        _hyphenMinus_2(_Clip_3(_self, _inMin, _inMax), _inMin),
        _hyphenMinus_2(_inMax, _inMin),
      );
      let _curvedResult = _hyphenMinus_2(
        _b,
        _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
      );
      /* Statements */
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
          return _Select2_3(
            _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
            _curvedResult,
            _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinGen",
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
  "LinGen",
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
  "LinGen",
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
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  sl.annotateFunction(function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  }, ["self", "srcLo", "srcHi", "dstLo", "dstHi"]),
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  }, ["self"]),
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseX(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  sl.annotateFunction(function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  }, ["minval", "maxval"]),
  "{ :minval :maxval |\n\t\tMouseY(minval, maxval, 0, 0.2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Rand0",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Rand2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SelectXFocus",
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
                _Max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _ModDif_3(
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
              _Max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _AbsDif_2(_which, _hyphenMinus_2(_index, 1)),
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectXFocus",
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
                _Max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _ModDif_3(
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
              _Max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _AbsDif_2(_which, _hyphenMinus_2(_index, 1)),
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SelectXFocus",
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
                _Max_2(
                  _hyphenMinus_2(
                    1,
                    _asterisk_2(
                      _ModDif_3(
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
              _Max_2(
                _hyphenMinus_2(
                  1,
                  _asterisk_2(
                    _AbsDif_2(_which, _hyphenMinus_2(_index, 1)),
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tSelect(\n\t\t\tStepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tSelect(\n\t\t\tStepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  sl.annotateFunction(function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  }, ["inList", "trig"]),
  "{ :inList :trig |\n\t\tSelect(\n\t\t\tStepper(trig.kr, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t) /* Multiplexer */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Silent",
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
        return _Dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberSign_2(_Dc_1(0), _numChannels);
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Silent",
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
        return _Dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberSign_2(_Dc_1(0), _numChannels);
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Silent",
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
        return _Dc_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberSign_2(_Dc_1(0), _numChannels);
      }, []),
    );
  }, ["numChannels"]),
  "{ :numChannels |\n\t\t(numChannels = 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SplayAz",
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
      } /* Temporaries */
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
          } /* Temporaries */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          /* Statements */
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      /* Statements */
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
          _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
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
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SplayAz",
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
      } /* Temporaries */
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
          } /* Temporaries */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          /* Statements */
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      /* Statements */
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
          _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
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
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SplayAz",
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
      } /* Temporaries */
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
          } /* Temporaries */
          let _normalizedSpread = _asterisk_2(
            _spread,
            _solidus_2(_hyphenMinus_2(_n, 1), _n),
          );
          /* Statements */
          return _resample_2([
            _hyphenMinus_2(_center, _normalizedSpread),
            _plusSign_2(_center, _normalizedSpread),
          ], _n);
        }, []),
      );
      /* Statements */
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
          _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
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
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[\n\t\t\t\tcenter - normalizedSpread,\n\t\t\t\tcenter + normalizedSpread\n\t\t\t].resample(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t/* Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. */\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  sl.annotateFunction(function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  }, ["trig", "dur", "bufNum"]),
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) /* 4 = Cubic Interpolation */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  sl.annotateFunction(function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      throw new Error(errorMessage);
    } /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  }, ["tr", "buf"]),
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 /* 1 = No Interpolation */\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  sl.annotateFunction(function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  }, ["inList", "dur"]),
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  sl.annotateFunction(function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  }, ["self", "dur"]),
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(Infinity, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Tr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Tr1",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  }, ["self"]),
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Adsr",
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Adsr",
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Adsr",
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Asr",
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
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Asr",
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
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Asr",
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
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  sl.annotateFunction(function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  }, ["bufnum", "reset", "inputList"]),
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufWrite",
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
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufWrite",
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
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufWrite",
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
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  sl.annotateFunction(function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  }, ["input", "threshold"]),
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "CompanderD",
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "CompanderD",
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "CompanderD",
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Cutoff",
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
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cutoff",
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
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Cutoff",
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
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  sl.annotateFunction(function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  }, ["bufnum", "delayTime"]),
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  sl.annotateFunction(function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  }, ["numChannels", "bus"]),
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  sl.annotateFunction(function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  }, ["gate", "coordList"]),
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  sl.annotateFunction(function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  }, ["timesList", "levelsList", "input"]),
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  sl.annotateFunction(function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  }, ["buf", "dur"]),
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Perc",
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
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Perc",
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
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Perc",
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
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PingPongDelay",
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PingPongDelay",
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PingPongDelay",
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PmOsc",
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
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PmOsc",
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
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PmOsc",
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
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Release",
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
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Release",
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
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Release",
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
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  sl.annotateFunction(function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  }, ["input", "freq", "amp", "time"]),
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  sl.annotateFunction(function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  }, ["predicate", "ifTrue", "ifFalse"]),
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfDuration",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfFrameCount",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfPlay",
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
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfPlay",
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
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfPlay",
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
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfRead",
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
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRead",
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
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfRead",
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
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  sl.annotateFunction(function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  }, ["sfBufferList"]),
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  sl.annotateFunction(function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  }, ["freq", "amp", "phase"]),
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  sl.annotateFunction(function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  }, ["trig", "dur"]),
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Splay2",
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
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
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
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
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
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  sl.annotateFunction(function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  }, ["inList"]),
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  sl.annotateFunction(function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  }, ["trig", "array"]),
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TwChoose",
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
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TwChoose",
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
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TwChoose",
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
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  sl.annotateFunction(function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  }, ["start", "end", "dur", "trig"]),
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  sl.annotateFunction(function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  }, ["input", "time", "curve"]),
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  sl.annotateFunction(function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  }, ["start", "end", "dur"]),
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);
