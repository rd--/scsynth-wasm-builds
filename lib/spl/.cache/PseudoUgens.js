/* {- Requires: Ugen -} */

sl.addMethod(
  "List",
  "PseudoUgens",
  "BrownNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _BrownNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ BrownNoise() } ! shape\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BrownNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _BrownNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ BrownNoise() } ! shape\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "GrayNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _GrayNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ GrayNoise() } ! shape\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "GrayNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _GrayNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ GrayNoise() } ! shape\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "PinkNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _PinkNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ PinkNoise() } ! shape\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "PinkNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _PinkNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ PinkNoise() } ! shape\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "WhiteNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _WhiteNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ WhiteNoise() } ! shape\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "WhiteNoise",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _WhiteNoise_0();
    }, _shape);
  },
  "{ :shape |\n\t\t{ WhiteNoise() } ! shape\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "PulseDpw",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _SawDpw_2(_freq, 0),
      _SawDpw_2(_freq, _Wrap_3(_plusSign_2(_width, _width), -1, 1)),
    );
  },
  "{ :freq :width |\n\t\tSawDpw(freq, 0) - SawDpw(freq, (width + width).Wrap(-1, 1))\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _curvedResult;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Select2_3(
        _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
        _curvedResult,
        _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
      );
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _curvedResult;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Select2_3(
        _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
        _curvedResult,
        _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
      );
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _curvedResult;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Select2_3(
        _greaterThanSignEqualsSign_2(_Abs_1(_curve), 0.125),
        _curvedResult,
        _LinLin_5(_self, _inMin, _inMax, _outMin, _outMax),
      );
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\tlet grow = curve.Exp;\n\t\tlet a = outMax - outMin / (1 - grow);\n\t\tlet b = outMin + a;\n\t\tlet scaled = (self.Clip(inMin, inMax) - inMin) / (inMax - inMin);\n\t\tlet curvedResult = b - (a * (grow ^ scaled));\n\t\tcurve.isNumber.if {\n\t\t\tcurvedResult\n\t\t} {\n\t\t\tSelect2(\n\t\t\t\tcurve.Abs >= 0.125,\n\t\t\t\tcurvedResult,\n\t\t\t\tself.LinLin(inMin, inMax, outMin, outMax)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _trig,
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Multiplexer_2(_index, _inList), _trig);
  },
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Multiplexer(index, inList), trig)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _trig,
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Multiplexer_2(_index, _inList), _trig);
  },
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Multiplexer(index, inList), trig)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "HoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _gate = _DurationGate_1(_dur);
    let _trig = _Trig1_2(_gate, _SampleDur_0());
    let _index = _Stepper_6(
      _trig,
      1,
      0,
      _hyphenMinus_2(_size_1(_inList), 1),
      1,
      0,
    );
    /* Statements */
    return _Latch_2(_Multiplexer_2(_index, _inList), _trig);
  },
  "{ :inList :dur |\n\t\tlet gate = DurationGate(dur);\n\t\tlet trig = Trig1(gate, SampleDur());\n\t\tlet index = Stepper(trig, 1, 0, inList.size - 1, 1, 0);\n\t\tLatch(Multiplexer(index, inList), trig)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "THoldSequence",
  ["inList", "dur"],
  function (_inList, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_HoldSequence_2(_inList, _dur), _SampleDur_0());
  },
  "{ :inList :dur |\n\t\tHoldSequence(inList, dur).Trig1(SampleDur())\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ZeroBuf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignExclamationMark_2(_self, _ClearBuf_1(_self));
  },
  "{ :self |\n\t\tself <! ClearBuf(self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "WrapOut",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.wrapOut(_busOffset_1(_self), _self);
  },
  "{ :self |\n\t\t<primitive: return sc.wrapOut(_busOffset_1(_self), _self);>\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Distances",
  ["x", "y", "z", "coordinateList"],
  function (_x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WDistances_5(1, _x, _y, _z, _coordinateList);
  },
  "{ :x :y :z :coordinateList |\n\t\tWDistances(1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "KNearest",
  ["numChannels", "x", "y", "z", "coordinateList"],
  function (_numChannels, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChannels, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _WkNearest_6(_numChannels, 1, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :x :y :z :coordinateList |\n\t\tWkNearest(numChannels, 1, x, y, z, coordinateList)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) {- 4 = Cubic Interpolation -}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) {- 4 = Cubic Interpolation -}\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TableWindow",
  ["trig", "dur", "bufNum"],
  function (_trig, _dur, _bufNum) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _dur, _bufNum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phase = _TLine_4(0, _BufFrames_1(_bufNum), _dur, _trig);
    /* Statements */
    return _BufRd_5(1, _bufNum, _phase, 0, 4);
  },
  "{ :trig :dur :bufNum |\n\t\tlet phase = TLine(0, BufFrames(bufNum), dur, trig);\n\t\tBufRd(1, bufNum, phase, 0, 4) {- 4 = Cubic Interpolation -}\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SelectXFocus",
  ["which", "array", "focus", "wrap"],
  function (_which, _array, _focus, _wrap) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _which, _array, _focus, _wrap";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_wrap, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withIndexCollect_2(_array, function (_input, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _input, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "{ :which :array :focus :wrap |\n\t\twrap.if {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (ModDif(which, index - 1, array.size) * focus)).Max(0) * input\n\t\t\t}.sum\n\t\t} {\n\t\t\tarray.withIndexCollect { :input :index |\n\t\t\t\t(1 - (AbsDif(which, index - 1) * focus)).Max(0) * input\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "CurveGen",
  ["gate", "levels", "times", "curves"],
  function (_gate, _levels, _times, _curves) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _gate, _levels, _times, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, _curves, null, null, 0), _gate);
  },
  "{ :gate :levels :times :curves |\n\t\tEnv(levels, times, curves, nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinGen",
  ["gate", "levels", "times"],
  function (_gate, _levels, _times) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _gate, _levels, _times";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEnvGen_2(_Env_6(_levels, _times, ["lin"], null, null, 0), _gate);
  },
  "{ :gate :levels :times |\n\t\tEnv(levels, times, ['lin'], nil, nil, 0).asEnvGen(gate)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  },
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 {- 1 = No Interpolation -}\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  },
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 {- 1 = No Interpolation -}\n\t\t)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TBufChoose",
  ["tr", "buf"],
  function (_tr, _buf) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _buf";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BufRd_5(
      1,
      _buf,
      _TiRand_3(0, _hyphenMinus_2(_BufFrames_1(_buf), 1), _tr),
      0,
      1,
    );
  },
  "{ :tr :buf |\n\t\tBufRd(\n\t\t\t1,\n\t\t\tbuf,\n\t\t\tTiRand(0, BufFrames(buf) - 1, tr),\n\t\t\t0,\n\t\t\t1 {- 1 = No Interpolation -}\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Choose",
  ["tr", "inList"],
  function (_tr, _inList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tr, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSign_2(_elementType_1(_inList), "SmallFloat"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _TBufChoose_2(_tr, _asLocalBuf_1(_inList));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isMatrixOf_2(_inList, "SmallFloat"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TBufChoose_2(_tr, _asLocalBufferList_1(_inList));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _TChoose_2(_tr, _inList);
        });
      },
    );
  },
  "{ :tr :inList |\n\t\t(inList.elementType = 'SmallFloat').if {\n\t\t\tTBufChoose(tr, inList.asLocalBuf)\n\t\t} {\n\t\t\tinList.isMatrixOf('SmallFloat').if {\n\t\t\t\tTBufChoose(tr, inList.asLocalBufferList)\n\t\t\t} {\n\t\t\t\tTChoose(tr, inList)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "AudioOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Out_2(0, _channelsList);
  },
  "{ :channelsList |\n\t\tOut(0, channelsList)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Cc",
  ["index"],
  function (_index) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ControlIn_2(1, _hyphenMinus_2(_plusSign_2(11000, _index), 1));
  },
  "{ :index |\n\t\tControlIn(1, 11000 + index - 1)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1:2:n.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2:2:m.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1:2:n.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2:2:m.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "EnvBreakPoint",
  ["breakPointList", "curves"],
  function (_breakPointList, _curves) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _breakPointList, _curves";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_breakPointList);
    let _m = _hyphenMinus_2(_n, 1);
    /* Statements */
    return _Env_6(
      _collect_2(_toBy_3(1, _n, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      }),
      _differentiate_1(_collect_2(_toBy_3(2, _m, 2), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_breakPointList, _index);
      })),
      _curves,
      null,
      null,
      0,
    );
  },
  "{ :breakPointList :curves |\n\t\tlet n = breakPointList.size;\n\t\tlet m = n - 1;\n\t\tEnv(\n\t\t\t1:2:n.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t},\n\t\t\t2:2:m.collect { :index |\n\t\t\t\tbreakPointList[index]\n\t\t\t}.differentiate,\n\t\t\tcurves,\n\t\t\tnil,\n\t\t\tnil,\n\t\t\t0\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "EnvLinen",
  ["attackTime", "sustainTime", "releaseTime", "level", "curve"],
  function (_attackTime, _sustainTime, _releaseTime, _level, _curve) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _attackTime, _sustainTime, _releaseTime, _level, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);
  },
  "{ :attackTime :sustainTime :releaseTime :level :curve |\n\t\t<primitive: return sc.EnvLinen(_attackTime, _sustainTime, _releaseTime, _level, _curve);>\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "EqBalance2",
  ["left", "right", "pos"],
  function (_left, _right, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _left, _right, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Balance2_4(_left, _right, _pos, 1);
  },
  "{ :left :right :pos |\n\t\tBalance2(left, right, pos, 1)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "EqPan2",
  ["in", "pos"],
  function (_in, _pos) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _pos";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pan2_3(_in, _pos, 1);
  },
  "{ :in :pos |\n\t\tPan2(in, pos, 1)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.concatenation, modMatrix.concatenation)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.concatenation, modMatrix.concatenation)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Fm7Matrix",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fm7_2(_concatenation_1(_ctlMatrix), _concatenation_1(_modMatrix));
  },
  "{ :ctlMatrix :modMatrix |\n\t\tFm7(ctlMatrix.concatenation, modMatrix.concatenation)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _Sequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DemandImpulseSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _DemandSequencer_2(_self, _trig),
      _Trig_2(_trig, _SampleDur_0()),
    );
  },
  "{ :self :trig |\n\t\tDemandSequencer(self, trig) * Trig(trig, SampleDur())\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinRand_3(0, _self, 1);
  },
  "{ :self |\n\t\tLinRand(0, self, 1)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "IRand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(0, _self);
  },
  "{ :self |\n\t\tIRand(0, self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "IRand1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(1, _self);
  },
  "{ :self |\n\t\tIRand(1, self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "IRand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tIRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinLin",
  ["self", "srcLo", "srcHi", "dstLo", "dstHi"],
  function (_self, _srcLo, _srcHi, _dstLo, _dstHi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _srcLo, _srcHi, _dstLo, _dstHi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _mul = _solidus_2(
      _hyphenMinus_2(_dstHi, _dstLo),
      _hyphenMinus_2(_srcHi, _srcLo),
    );
    let _add = _hyphenMinus_2(_dstLo, _asterisk_2(_mul, _srcLo));
    /* Statements */
    return _MulAdd_3(_Clip_3(_self, _srcLo, _srcHi), _mul, _add);
  },
  "{ :self :srcLo :srcHi :dstLo :dstHi |\n\t\tlet mul = (dstHi - dstLo) / (srcHi - srcLo);\n\t\tlet add = dstLo - (mul * srcLo);\n\t\tMulAdd(self.Clip(srcLo, srcHi), mul, add)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Rand0",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(0, _self);
  },
  "{ :self |\n\t\tRand(0, self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Rand2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(_hyphenMinus_2(0, _self), _self);
  },
  "{ :self |\n\t\tRand(0 - self, self)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinLin_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinLin(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ExpRange",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(_self, -1, 1, _lo, _hi);
  },
  "{ :self :lo :hi |\n\t\tLinExp(self, -1, 1, lo, hi)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Multiplexer_2(
      _Stepper_6(_trig, 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig |\n\t\tMultiplexer(\n\t\t\tStepper(trig, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Multiplexer_2(
      _Stepper_6(_trig, 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig |\n\t\tMultiplexer(\n\t\t\tStepper(trig, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t)\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Sequencer",
  ["inList", "trig"],
  function (_inList, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _inList, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Multiplexer_2(
      _Stepper_6(_trig, 1, 0, _hyphenMinus_2(_size_1(_inList), 1), 1, 0),
      _inList,
    );
  },
  "{ :inList :trig |\n\t\tMultiplexer(\n\t\t\tStepper(trig, 1, 0, inList.size - 1, 1, 0),\n\t\t\tinList\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DemandSequencer",
  ["self", "trig"],
  function (_self, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Demand_3(_trig, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :trig |\n\t\tDemand(trig, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Duty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TDurationSequencer",
  ["self", "dur"],
  function (_self, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TDuty_3(_dur, 0, _Dseq_2(_inf, _self));
  },
  "{ :self :dur |\n\t\tTDuty(dur, 0, Dseq(inf, self))\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels |\n\t\t(numChannels == 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels |\n\t\t(numChannels == 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Silent",
  ["numChannels"],
  function (_numChannels) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _numChannels";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_numChannels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Dc_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _numberSign_2(_Dc_1(0), _numChannels);
    });
  },
  "{ :numChannels |\n\t\t(numChannels == 1).if {\n\t\t\tDc(0)\n\t\t} {\n\t\t\tDc(0) # numChannels\n\t\t}\n\t}",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _max_2(1, _size_1(_inList));
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _center;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _normalizedSpread = _asterisk_2(
        _spread,
        _solidus_2(_hyphenMinus_2(_n, 1), _n),
      );
      /* Statements */
      return _resamp1_2([
        _hyphenMinus_2(_center, _normalizedSpread),
        _plusSign_2(_center, _normalizedSpread),
      ], _n);
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[center - normalizedSpread, center + normalizedSpread].resamp1(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t{- Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. -}\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _max_2(1, _size_1(_inList));
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _center;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _normalizedSpread = _asterisk_2(
        _spread,
        _solidus_2(_hyphenMinus_2(_n, 1), _n),
      );
      /* Statements */
      return _resamp1_2([
        _hyphenMinus_2(_center, _normalizedSpread),
        _plusSign_2(_center, _normalizedSpread),
      ], _n);
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[center - normalizedSpread, center + normalizedSpread].resamp1(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t{- Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. -}\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _max_2(1, _size_1(_inList));
    let _pos = _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _center;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _normalizedSpread = _asterisk_2(
        _spread,
        _solidus_2(_hyphenMinus_2(_n, 1), _n),
      );
      /* Statements */
      return _resamp1_2([
        _hyphenMinus_2(_center, _normalizedSpread),
        _plusSign_2(_center, _normalizedSpread),
      ], _n);
    });
    /* Statements */
    _ifTrue_2(_levelComp, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _level = _asterisk_2(_level, _sqrt_1(_reciprocal_1(_n)));
    });
    return _collect_2(
      _flop_1(
        _PanAz_6(_numChannels, _inList, _pos, _level, _width, _orientation),
      ),
      _sum_1,
    );
  },
  "{ :numChannels :inList :spread :level :width :center :orientation :levelComp |\n\t\tlet n = 1.max(inList.size);\n\t\tlet pos = (n = 1).if {\n\t\t\tcenter\n\t\t} {\n\t\t\tlet normalizedSpread = spread * ((n - 1) / n);\n\t\t\t[center - normalizedSpread, center + normalizedSpread].resamp1(n)\n\t\t};\n\t\tlevelComp.ifTrue {\n\t\t\t{- Cf. <https://github.com/supercollider/supercollider/issues/5706>\n\t\t\tNote that deleting .sqrt can dramatically alter feedback paths. -}\n\t\t\tlevel := level * n.reciprocal.sqrt\n\t\t};\n\t\tPanAz(numChannels, inList, pos, level, width, orientation).flop.collect(sum:/1)\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Tr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig(self, SampleDur())\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Tr1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_self, _SampleDur_0());
  },
  "{ :self |\n\t\tTrig1(self, SampleDur())\n\t}",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new sc.Env(
      _levels,
      _times,
      _curves,
      _releaseNode,
      _loopNode,
      _offset,
    );
  },
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new sc.Env(
      _levels,
      _times,
      _curves,
      _releaseNode,
      _loopNode,
      _offset,
    );
  },
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Env",
  ["levels", "times", "curves", "releaseNode", "loopNode", "offset"],
  function (_levels, _times, _curves, _releaseNode, _loopNode, _offset) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _levels, _times, _curves, _releaseNode, _loopNode, _offset";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new sc.Env(
      _levels,
      _times,
      _curves,
      _releaseNode,
      _loopNode,
      _offset,
    );
  },
  "{ :levels :times :curves :releaseNode :loopNode :offset | <primitive: return new sc.Env(_levels, _times, _curves, _releaseNode, _loopNode, _offset);> }",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Adsr(
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    );
  },
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Adsr(
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    );
  },
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Adsr(
      _gate,
      _attackTime,
      _decayTime,
      _sustainLevel,
      _releaseTime,
      _curve,
    );
  },
  "{ :gate :attackTime :decayTime :sustainLevel :releaseTime :curve | <primitive: return sc.Adsr(_gate, _attackTime, _decayTime, _sustainLevel, _releaseTime, _curve);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Asr",
  ["gate", "attackTime", "releaseTime", "curve"],
  function (_gate, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _gate, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Asr(_gate, _attackTime, _releaseTime, _curve);
  },
  "{ :gate :attackTime :releaseTime :curve | <primitive: return sc.Asr(_gate, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "AudioIn",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.AudioIn(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.AudioIn(_channelsList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BHiPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BLowPass4",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass4(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass4(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BufAlloc",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufAlloc(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.BufAlloc(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BufClear",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufClear(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufClear(_bufnum);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BufRec",
  ["bufnum", "reset", "inputList"],
  function (_bufnum, _reset, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _reset, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRec(_bufnum, _reset, _inputList);
  },
  "{ :bufnum :reset :inputList | <primitive: return sc.BufRec(_bufnum, _reset, _inputList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "BufWrite",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWrite(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWrite(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Changed",
  ["input", "threshold"],
  function (_input, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _threshold";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Changed(_input, _threshold);
  },
  "{ :input :threshold | <primitive: return sc.Changed(_input, _threshold);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.CompanderD(
      _in,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.CompanderD(
      _in,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "CompanderD",
  ["in", "thresh", "slopeBelow", "slopeAbove", "clampTime", "relaxTime"],
  function (_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.CompanderD(
      _in,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.CompanderD(_in, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ControlIn",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlIn(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.ControlIn(_numChannels, _bus);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "ControlOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ControlOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Cutoff",
  ["sustainTime", "releaseTime", "curve"],
  function (_sustainTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _sustainTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Cutoff(_sustainTime, _releaseTime, _curve);
  },
  "{ :sustainTime :releaseTime :curve | <primitive: return sc.Cutoff(_sustainTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DelayTap",
  ["bufnum", "delayTime"],
  function (_bufnum, _delayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _delayTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayTap(_bufnum, _delayTime);
  },
  "{ :bufnum :delayTime | <primitive: return sc.DelayTap(_bufnum, _delayTime);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DelayWrite",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayWrite(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DelayWrite(_bufnum, _input);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "DynRingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.DynRingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.DynRingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "InFb",
  ["numChannels", "bus"],
  function (_numChannels, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _bus";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.InFb(_numChannels, _bus);
  },
  "{ :numChannels :bus | <primitive: return sc.InFb(_numChannels, _bus);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "LinSeg",
  ["gate", "coordList"],
  function (_gate, _coordList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _gate, _coordList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.LinSeg(_gate, _coordList);
  },
  "{ :gate :coordList | <primitive: return sc.LinSeg(_gate, _coordList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Line",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Line(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.Line(_start, _end, _dur, 0);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "MultiTapDelay",
  ["timesList", "levelsList", "input"],
  function (_timesList, _levelsList, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _timesList, _levelsList, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.MultiTapDelay(_timesList, _levelsList, _input);
  },
  "{ :timesList :levelsList :input | <primitive: return sc.MultiTapDelay(_timesList, _levelsList, _input);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Osc1",
  ["buf", "dur"],
  function (_buf, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buf, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc1(_buf, _dur);
  },
  "{ :buf :dur | <primitive: return sc.Osc1(_buf, _dur);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Perc",
  ["trig", "attackTime", "releaseTime", "curve"],
  function (_trig, _attackTime, _releaseTime, _curve) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _attackTime, _releaseTime, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Perc(_trig, _attackTime, _releaseTime, _curve);
  },
  "{ :trig :attackTime :releaseTime :curve | <primitive: return sc.Perc(_trig, _attackTime, _releaseTime, _curve);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PingPongDelay(
      _left,
      _right,
      _maxDelayTime,
      _delayTime,
      _feedback,
    );
  },
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PingPongDelay(
      _left,
      _right,
      _maxDelayTime,
      _delayTime,
      _feedback,
    );
  },
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "PingPongDelay",
  ["left", "right", "maxDelayTime", "delayTime", "feedback"],
  function (_left, _right, _maxDelayTime, _delayTime, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _left, _right, _maxDelayTime, _delayTime, _feedback";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PingPongDelay(
      _left,
      _right,
      _maxDelayTime,
      _delayTime,
      _feedback,
    );
  },
  "{ :left :right :maxDelayTime :delayTime :feedback | <primitive: return sc.PingPongDelay(_left, _right, _maxDelayTime, _delayTime, _feedback);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "PmOsc",
  ["carfreq", "modfreq", "pmindex", "modphase"],
  function (_carfreq, _modfreq, _pmindex, _modphase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _carfreq, _modfreq, _pmindex, _modphase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);
  },
  "{ :carfreq :modfreq :pmindex :modphase | <primitive: return sc.PmOsc(_carfreq, _modfreq, _pmindex, _modphase);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Release",
  ["input", "attackTime", "dur", "releaseTime"],
  function (_input, _attackTime, _dur, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _input, _attackTime, _dur, _releaseTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Release(_input, _attackTime, _dur, _releaseTime);
  },
  "{ :input :attackTime :dur :releaseTime | <primitive: return sc.Release(_input, _attackTime, _dur, _releaseTime);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "RingzBank",
  ["input", "freq", "amp", "time"],
  function (_input, _freq, _amp, _time) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _input, _freq, _amp, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.RingzBank(_input, _freq, _amp, _time);
  },
  "{ :input :freq :amp :time | <primitive: return sc.RingzBank(_input, _freq, _amp, _time);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Select2",
  ["predicate", "ifTrue", "ifFalse"],
  function (_predicate, _ifTrue, _ifFalse) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _predicate, _ifTrue, _ifFalse";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Select2(_predicate, _ifTrue, _ifFalse);
  },
  "{ :predicate :ifTrue :ifFalse | <primitive: return sc.Select2(_predicate, _ifTrue, _ifFalse);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SelectX",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SelectX(_which, _array);
  },
  "{ :which :array | <primitive: return sc.SelectX(_which, _array);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfDur",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfDur(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfDur(_sfBufferList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfFrames",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfFrames(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfFrames(_sfBufferList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfPlay",
  ["sfBufferList", "rate", "trigger", "startPos", "loop"],
  function (_sfBufferList, _rate, _trigger, _startPos, _loop) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _sfBufferList, _rate, _trigger, _startPos, _loop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);
  },
  "{ :sfBufferList :rate :trigger :startPos :loop |<primitive: return sc.SfPlay(_sfBufferList, _rate, _trigger, _startPos, _loop);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfRateScale",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRateScale(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfRateScale(_sfBufferList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfRead",
  ["sfBufferList", "phase", "loop", "interpolation"],
  function (_sfBufferList, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _sfBufferList, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);
  },
  "{ :sfBufferList :phase :loop :interpolation |<primitive: return sc.SfRead(_sfBufferList, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SfSampleRate",
  ["sfBufferList"],
  function (_sfBufferList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sfBufferList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SfSampleRate(_sfBufferList);
  },
  "{ :sfBufferList |<primitive: return sc.SfSampleRate(_sfBufferList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Shuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Shuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Shuf(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "SinOscBank",
  ["freq", "amp", "phase"],
  function (_freq, _amp, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _amp, _phase";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscBank(_freq, _amp, _phase);
  },
  "{ :freq :amp :phase | <primitive: return sc.SinOscBank(_freq, _amp, _phase);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Sine",
  ["trig", "dur"],
  function (_trig, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Sine(_trig, _dur);
  },
  "{ :trig :dur | <primitive: return sc.Sine(_trig, _dur);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
  ["inList", "spread", "level", "center", "levelComp"],
  function (_inList, _spread, _level, _center, _levelComp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _inList, _spread, _level, _center, _levelComp";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay(_inList, _spread, _level, _center, _levelComp);
  },
  "{ :inList :spread :level :center :levelComp | <primitive: return sc.Splay(_inList, _spread, _level, _center, _levelComp);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "Splay2",
  ["inList"],
  function (_inList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _inList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.Splay2(_inList);
  },
  "{ :inList | <primitive: return sc.Splay2(_inList);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TChoose",
  ["trig", "array"],
  function (_trig, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TChoose(_trig, _array);
  },
  "{ :trig :array | <primitive: return sc.TChoose(_trig, _array);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TwChoose",
  ["trig", "array", "weights", "normalize"],
  function (_trig, _array, _weights, _normalize) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _trig, _array, _weights, _normalize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TwChoose(_trig, _array, _weights, _normalize);
  },
  "{ :trig :array :weights :normalize | <primitive: return sc.TwChoose(_trig, _array, _weights, _normalize);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "TxLine",
  ["start", "end", "dur", "trig"],
  function (_start, _end, _dur, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _end, _dur, _trig";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.TxLine(_start, _end, _dur, _trig);
  },
  "{ :start :end :dur :trig | <primitive: return sc.TxLine(_start, _end, _dur, _trig);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "VarLag",
  ["input", "time", "curve"],
  function (_input, _time, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _time, _curve";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.VarLag(_input, _time, _curve);
  },
  "{ :input :time :curve | <primitive: return sc.VarLag(_input, _time, _curve);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "XChoose",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XChoose(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.XChoose(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);

sl.addMethod(
  "SmallFloat",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);

sl.addMethod(
  "Ugen",
  "PseudoUgens",
  "XLine",
  ["start", "end", "dur"],
  function (_start, _end, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _dur";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.XLine(_start, _end, _dur, 0);
  },
  "{ :start :end :dur | <primitive: return sc.XLine(_start, _end, _dur, 0);> }",
);
