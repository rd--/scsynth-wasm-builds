/*  Requires: Ugen  */

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BrownNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _BrownNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ BrownNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BrownNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _BrownNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ BrownNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BrownNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _BrownNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ BrownNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ClipNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ClipNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ ClipNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ClipNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ClipNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ ClipNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ClipNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ClipNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ ClipNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "GrayNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _GrayNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ GrayNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "GrayNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _GrayNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ GrayNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "GrayNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _GrayNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ GrayNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PinkNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _PinkNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ PinkNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PinkNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _PinkNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ PinkNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PinkNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _PinkNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ PinkNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "WhiteNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _WhiteNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ WhiteNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "WhiteNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _WhiteNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ WhiteNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "WhiteNoise",
  ["mul", "add"],
  function (_mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _exclamationMark_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _WhiteNoise_0();
        }, _shape_1(_mul)),
        _mul,
      ),
      _add,
    );
  },
  "{ :mul :add | +(*(!({ WhiteNoise() }, shape(mul)), mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "FeedforwardFeedbackward",
  ["in", "forward:/2", "backward:/1"],
  function (_in, _forward_2, _backward_1) {
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
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("FeedforwardFeedbackward: processors not monophonic");
      },
    );
    return _lessThanSignExclamationMark_2(_forwardAnswer, _writer);
  },
  "{ :in :forward:/2 :backward:/1 | let maxBlockSize = 512; let buffer = BufClear(BufAlloc(1, +(maxBlockSize, 1))); let delayTime = ControlDur(); let reader = DelayTap(buffer, delayTime); let backwardAnswer = backward(reader); let forwardAnswer = forward(in, backwardAnswer); let writer = DelayWrite(buffer, forwardAnswer); ifTrue(anySatisfy([backwardAnswer, forwardAnswer],isList:/1), { error('FeedforwardFeedbackward: processors not monophonic') }); <!(forwardAnswer, writer) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "FeedforwardFeedbackward",
  ["in", "forward:/2", "backward:/1"],
  function (_in, _forward_2, _backward_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _forward_2, _backward_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_in, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _FeedforwardFeedbackward_3(_x, _forward_2, _backward_1);
    });
  },
  "{ :in :forward:/2 :backward:/1 | collect(in, { :x | FeedforwardFeedbackward(x, forward:/2, backward:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList | Out(0, channelsList) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList | Out(0, channelsList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList | Out(0, channelsList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index | ControlIn(1, -(+(11000, index), 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index | ControlIn(1, -(+(11000, index), 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index | ControlIn(1, -(+(11000, index), 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList | if((=(elementType(inList), 'SmallFloat')), { TBufChoose(tr, asLocalBuf(inList)) }, { if(isMatrixOf(inList,'SmallFloat'), { TBufChoose(tr, asLocalBufferList(inList)) }, { TChoose(tr, inList) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList | if((=(elementType(inList), 'SmallFloat')), { TBufChoose(tr, asLocalBuf(inList)) }, { if(isMatrixOf(inList,'SmallFloat'), { TBufChoose(tr, asLocalBufferList(inList)) }, { TChoose(tr, inList) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList | if((=(elementType(inList), 'SmallFloat')), { TBufChoose(tr, asLocalBuf(inList)) }, { if(isMatrixOf(inList,'SmallFloat'), { TBufChoose(tr, asLocalBufferList(inList)) }, { TChoose(tr, inList) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves | asEnvGen(Env(levels, times, curves, nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves | asEnvGen(Env(levels, times, curves, nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves | asEnvGen(Env(levels, times, curves, nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :trig | Demand(trig, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :trig | Demand(trig, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :trig | Demand(trig, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList | WDistances(1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList | WDistances(1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList | WDistances(1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | Duty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | Duty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | Duty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(DemandSequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(DemandSequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(DemandSequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves | let n = size(breakPointList); let m = -(n, 1); Env(collect(toBy(1, n, 2), { :index | at(breakPointList, index) }), differentiate(collect(toBy(2, m, 2), { :index | at(breakPointList, index) })), curves, nil, nil, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves | let n = size(breakPointList); let m = -(n, 1); Env(collect(toBy(1, n, 2), { :index | at(breakPointList, index) }), differentiate(collect(toBy(2, m, 2), { :index | at(breakPointList, index) })), curves, nil, nil, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves | let n = size(breakPointList); let m = -(n, 1); Env(collect(toBy(1, n, 2), { :index | at(breakPointList, index) }), differentiate(collect(toBy(2, m, 2), { :index | at(breakPointList, index) })), curves, nil, nil, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve | <primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve | <primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve | <primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos | Balance2(left, right, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos | Balance2(left, right, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos | Balance2(left, right, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos | Pan2(in, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos | Pan2(in, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos | Pan2(in, pos, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinExp(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinExp(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinExp(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix | Fm7(concatenation(ctlMatrix), concatenation(modMatrix)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix | Fm7(concatenation(ctlMatrix), concatenation(modMatrix)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix | Fm7(concatenation(ctlMatrix), concatenation(modMatrix)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
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
  },
  "{ :inList :dur | let gate = DurationGate(dur); let trig = Trig1(gate, SampleDur()); let index = Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0); Latch(Select(index, inList), trig) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
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
  },
  "{ :inList :dur | let gate = DurationGate(dur); let trig = Trig1(gate, SampleDur()); let index = Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0); Latch(Select(index, inList), trig) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
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
  },
  "{ :inList :dur | let gate = DurationGate(dur); let trig = Trig1(gate, SampleDur()); let index = Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0); Latch(Select(index, inList), trig) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(Sequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(Sequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig | *(Sequencer(self, trig), Trig(trig, SampleDur())) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self | IRand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self | IRand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self | IRand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self | IRand(1, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self | IRand(1, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self | IRand(1, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | IRand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | IRand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | IRand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList | WkNearest(numChannels, 1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList | WkNearest(numChannels, 1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList | WkNearest(numChannels, 1, x, y, z, coordinateList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
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
    return _if_3(_isNumber_1(_curve), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _curvedResult;
    }, function () {
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
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve | let grow = Exp(curve); let a = /(-(outMax, outMin), (-(1, grow))); let b = +(outMin, a); let scaled = /((-(Clip(self,inMin, inMax), inMin)), (-(inMax, inMin))); let curvedResult = -(b, (*(a, (^(grow, scaled))))); if(isNumber(curve), { curvedResult }, { Select2(>=(Abs(curve), 0.125), curvedResult, LinLin(self,inMin, inMax, outMin, outMax)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
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
    return _if_3(_isNumber_1(_curve), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _curvedResult;
    }, function () {
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
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve | let grow = Exp(curve); let a = /(-(outMax, outMin), (-(1, grow))); let b = +(outMin, a); let scaled = /((-(Clip(self,inMin, inMax), inMin)), (-(inMax, inMin))); let curvedResult = -(b, (*(a, (^(grow, scaled))))); if(isNumber(curve), { curvedResult }, { Select2(>=(Abs(curve), 0.125), curvedResult, LinLin(self,inMin, inMax, outMin, outMax)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
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
    return _if_3(_isNumber_1(_curve), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _curvedResult;
    }, function () {
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
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve | let grow = Exp(curve); let a = /(-(outMax, outMin), (-(1, grow))); let b = +(outMin, a); let scaled = /((-(Clip(self,inMin, inMax), inMin)), (-(inMax, inMin))); let curvedResult = -(b, (*(a, (^(grow, scaled))))); if(isNumber(curve), { curvedResult }, { Select2(>=(Abs(curve), 0.125), curvedResult, LinLin(self,inMin, inMax, outMin, outMax)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times | asEnvGen(Env(levels, times, ['lin'], nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times | asEnvGen(Env(levels, times, ['lin'], nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      throw new Error(errorMessage);
    } /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times | asEnvGen(Env(levels, times, ['lin'], nil, nil, 0),gate) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
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
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi | let mul = /((-(dstHi, dstLo)), (-(srcHi, srcLo))); let add = -(dstLo, (*(mul, srcLo))); MulAdd(Clip(self,srcLo, srcHi), mul, add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
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
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi | let mul = /((-(dstHi, dstLo)), (-(srcHi, srcLo))); let add = -(dstLo, (*(mul, srcLo))); MulAdd(Clip(self,srcLo, srcHi), mul, add) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
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
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi | let mul = /((-(dstHi, dstLo)), (-(srcHi, srcLo))); let add = -(dstLo, (*(mul, srcLo))); MulAdd(Clip(self,srcLo, srcHi), mul, add) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self | LinRand(0, self, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self | LinRand(0, self, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self | LinRand(0, self, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinLin(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinLin(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi | LinLin(self, -1, 1, lo, hi) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseX(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseX(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MouseX",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseX(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseY(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseY(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MouseY",
  ["minval", "maxval"],
  function (_minval, _maxval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _minval, _maxval";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(_minval, _maxval, 0, 0.2);
  },
  "{ :minval :maxval | MouseY(minval, maxval, 0, 0.2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width | -(SawDpw(freq, 0), SawDpw(freq, Wrap((+(width, width)),-1, 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width | -(SawDpw(freq, 0), SawDpw(freq, Wrap((+(width, width)),-1, 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width | -(SawDpw(freq, 0), SawDpw(freq, Wrap((+(width, width)),-1, 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self | Rand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self | Rand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self | Rand(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | Rand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | Rand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self | Rand(-(0, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
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
                _ModDif_3(_which, _hyphenMinus_2(_index, 1), _size_1(_array)),
                _focus,
              ),
            ),
            0,
          ),
          _input,
        );
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _Max_2(
            _hyphenMinus_2(
              1,
              _asterisk_2(_AbsDif_2(_which, _hyphenMinus_2(_index, 1)), _focus),
            ),
            0,
          ),
          _input,
        );
      });
    });
  },
  "{ :which :array :focus :wrap | if(wrap, { sum(withIndexCollect(array, { :input :index | *(Max((-(1, (*(ModDif(which, -(index, 1), size(array)), focus)))),0), input) })) }, { withIndexCollect(array, { :input :index | *(Max((-(1, (*(AbsDif(which, -(index, 1)), focus)))),0), input) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
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
                _ModDif_3(_which, _hyphenMinus_2(_index, 1), _size_1(_array)),
                _focus,
              ),
            ),
            0,
          ),
          _input,
        );
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _Max_2(
            _hyphenMinus_2(
              1,
              _asterisk_2(_AbsDif_2(_which, _hyphenMinus_2(_index, 1)), _focus),
            ),
            0,
          ),
          _input,
        );
      });
    });
  },
  "{ :which :array :focus :wrap | if(wrap, { sum(withIndexCollect(array, { :input :index | *(Max((-(1, (*(ModDif(which, -(index, 1), size(array)), focus)))),0), input) })) }, { withIndexCollect(array, { :input :index | *(Max((-(1, (*(AbsDif(which, -(index, 1)), focus)))),0), input) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
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
                _ModDif_3(_which, _hyphenMinus_2(_index, 1), _size_1(_array)),
                _focus,
              ),
            ),
            0,
          ),
          _input,
        );
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _Max_2(
            _hyphenMinus_2(
              1,
              _asterisk_2(_AbsDif_2(_which, _hyphenMinus_2(_index, 1)), _focus),
            ),
            0,
          ),
          _input,
        );
      });
    });
  },
  "{ :which :array :focus :wrap | if(wrap, { sum(withIndexCollect(array, { :input :index | *(Max((-(1, (*(ModDif(which, -(index, 1), size(array)), focus)))),0), input) })) }, { withIndexCollect(array, { :input :index | *(Max((-(1, (*(AbsDif(which, -(index, 1)), focus)))),0), input) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig | Select(Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0), inList) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig | Select(Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0), inList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(
      _Stepper_6(_kr_1(_trig), 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig | Select(Stepper(kr(trig), 1, 0, -(size(inList), 1), 1, 0), inList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels | if((==(numChannels, 1)), { Dc(0) }, { #(Dc(0), numChannels) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels | if((==(numChannels, 1)), { Dc(0) }, { #(Dc(0), numChannels) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels | if((==(numChannels, 1)), { Dc(0) }, { #(Dc(0), numChannels) }) }",
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
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _center;
    }, function () {
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
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp | let n = max(1,size(inList)); let pos = if((=(n, 1)), { center }, { let normalizedSpread = *(spread, (/((-(n, 1)), n))); resample([-(center, normalizedSpread), +(center, normalizedSpread)],n) }); ifTrue(levelComp, { level := *(level, sqrt(reciprocal(n))) }); collect(flop(PanAz(numChannels, inList, pos, level, width, orientation)),sum:/1) }",
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
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _center;
    }, function () {
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
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp | let n = max(1,size(inList)); let pos = if((=(n, 1)), { center }, { let normalizedSpread = *(spread, (/((-(n, 1)), n))); resample([-(center, normalizedSpread), +(center, normalizedSpread)],n) }); ifTrue(levelComp, { level := *(level, sqrt(reciprocal(n))) }); collect(flop(PanAz(numChannels, inList, pos, level, width, orientation)),sum:/1) }",
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
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _center;
    }, function () {
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
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp | let n = max(1,size(inList)); let pos = if((=(n, 1)), { center }, { let normalizedSpread = *(spread, (/((-(n, 1)), n))); resample([-(center, normalizedSpread), +(center, normalizedSpread)],n) }); ifTrue(levelComp, { level := *(level, sqrt(reciprocal(n))) }); collect(flop(PanAz(numChannels, inList, pos, level, width, orientation)),sum:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum | let phase = TLine(0, BufFrames(bufNum), dur, trig); BufRd(1, bufNum, phase, 0, 4) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum | let phase = TLine(0, BufFrames(bufNum), dur, trig); BufRd(1, bufNum, phase, 0, 4) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum | let phase = TLine(0, BufFrames(bufNum), dur, trig); BufRd(1, bufNum, phase, 0, 4) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
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
  },
  "{ :tr :buf | BufRd(1, buf, TiRand(0, -(BufFrames(buf), 1), tr), 0, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
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
  },
  "{ :tr :buf | BufRd(1, buf, TiRand(0, -(BufFrames(buf), 1), tr), 0, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
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
  },
  "{ :tr :buf | BufRd(1, buf, TiRand(0, -(BufFrames(buf), 1), tr), 0, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur | Trig1(HoldSequence(inList, dur),SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur | Trig1(HoldSequence(inList, dur),SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur | Trig1(HoldSequence(inList, dur),SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | TDuty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | TDuty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      throw new Error(errorMessage);
    } /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(Infinity, _self));
  },
  "{ :self :dur | TDuty(dur, 0, Dseq(Infinity, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self | Trig(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self | Trig(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self | Trig(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self | Trig1(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self | Trig1(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self | Trig1(self, SampleDur()) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self | <primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self | <primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self | <primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self | <!(self, ClearBuf(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self | <!(self, ClearBuf(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self | <!(self, ClearBuf(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
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
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Adsr",
  ["gate", "attackTime", "decayTime", "sustainLevel", "releaseTime", "curve"],
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
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
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
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
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
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfDur(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfDur(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfDur(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfFrames(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfFrames(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfFrames(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop | <primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop | <primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop | <primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfRateScale(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfRateScale(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfRateScale(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation | <primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation | <primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation | <primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfSampleRate(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfSampleRate(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList | <primitive: return sc.SfSampleRate(_sfBufferList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);>\n }",
);
