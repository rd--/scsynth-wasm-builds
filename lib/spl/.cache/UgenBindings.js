/* {- Requires: Ugen -} */

sl.addMethod(
  "Void",
  "UgenBindings",
  "BlockSize",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BlockSize();
  },
  "{ <primitive: return sc.BlockSize();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "BrownNoise",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BrownNoise();
  },
  "{ <primitive: return sc.BrownNoise();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "ClipNoise",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ClipNoise();
  },
  "{ <primitive: return sc.ClipNoise();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "ControlDur",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlDur();
  },
  "{ <primitive: return sc.ControlDur();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "ControlRate",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ControlRate();
  },
  "{ <primitive: return sc.ControlRate();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "GrayNoise",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrayNoise();
  },
  "{ <primitive: return sc.GrayNoise();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "NumOutputBuses",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.NumOutputBuses();
  },
  "{ <primitive: return sc.NumOutputBuses();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "PinkNoise",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PinkNoise();
  },
  "{ <primitive: return sc.PinkNoise();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "SampleDur",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SampleDur();
  },
  "{ <primitive: return sc.SampleDur();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "SampleRate",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SampleRate();
  },
  "{ <primitive: return sc.SampleRate();> }",
);

sl.addMethod(
  "Void",
  "UgenBindings",
  "WhiteNoise",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WhiteNoise();
  },
  "{ <primitive: return sc.WhiteNoise();> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "A2K",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.A2K(_in);
  },
  "{ :in | <primitive: return sc.A2K(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "A2K",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.A2K(_in);
  },
  "{ :in | <primitive: return sc.A2K(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "A2K",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.A2K(_in);
  },
  "{ :in | <primitive: return sc.A2K(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AllpassC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AllpassC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AllpassC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AllpassL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AllpassL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AllpassL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AllpassN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AllpassN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AllpassN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  },
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  },
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  },
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  },
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  },
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  },
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Amplitude",
  ["in", "attackTime", "releaseTime"],
  function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  },
  "{ :in :attackTime :releaseTime | <primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Amplitude",
  ["in", "attackTime", "releaseTime"],
  function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  },
  "{ :in :attackTime :releaseTime | <primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Amplitude",
  ["in", "attackTime", "releaseTime"],
  function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  },
  "{ :in :attackTime :releaseTime | <primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BBandPass",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandPass(_in, _freq, _bw);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BBandPass",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandPass(_in, _freq, _bw);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BBandPass",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandPass(_in, _freq, _bw);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BBandStop",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandStop(_in, _freq, _bw);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BBandStop",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandStop(_in, _freq, _bw);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BBandStop",
  ["in", "freq", "bw"],
  function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  },
  "{ :in :freq :bw | <primitive: return sc.BBandStop(_in, _freq, _bw);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BfDecode1",
  ["w", "x", "y", "z", "azimuth", "elevation", "wComp"],
  function (_w, _x, _y, _z, _azimuth, _elevation, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _w, _x, _y, _z, _azimuth, _elevation, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);
  },
  "{ :w :x :y :z :azimuth :elevation :wComp | <primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BfDecode1",
  ["w", "x", "y", "z", "azimuth", "elevation", "wComp"],
  function (_w, _x, _y, _z, _azimuth, _elevation, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _w, _x, _y, _z, _azimuth, _elevation, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);
  },
  "{ :w :x :y :z :azimuth :elevation :wComp | <primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BfDecode1",
  ["w", "x", "y", "z", "azimuth", "elevation", "wComp"],
  function (_w, _x, _y, _z, _azimuth, _elevation, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _w, _x, _y, _z, _azimuth, _elevation, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);
  },
  "{ :w :x :y :z :azimuth :elevation :wComp | <primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BfEncode1",
  ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  function (_input, _azimuth, _elevation, _rho, _gain, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _input, _azimuth, _elevation, _rho, _gain, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);
  },
  "{ :input :azimuth :elevation :rho :gain :wComp | <primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BfEncode1",
  ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  function (_input, _azimuth, _elevation, _rho, _gain, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _input, _azimuth, _elevation, _rho, _gain, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);
  },
  "{ :input :azimuth :elevation :rho :gain :wComp | <primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BfEncode1",
  ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  function (_input, _azimuth, _elevation, _rho, _gain, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _input, _azimuth, _elevation, _rho, _gain, _wComp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);
  },
  "{ :input :azimuth :elevation :rho :gain :wComp | <primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BHiPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BHiPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BHiPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BHiPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BHiShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BHiShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BHiShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BHiShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BHiShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BHiShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BLowPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BLowPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BLowPass",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.BLowPass(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BLowShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BLowShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BLowShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BLowShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BLowShelf",
  ["in", "freq", "rs", "db"],
  function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  },
  "{ :in :freq :rs :db | <primitive: return sc.BLowShelf(_in, _freq, _rs, _db);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BMoog",
  ["in", "freq", "q", "mode", "saturation"],
  function (_in, _freq, _q, _mode, _saturation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _freq, _q, _mode, _saturation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BMoog(_in, _freq, _q, _mode, _saturation);
  },
  "{ :in :freq :q :mode :saturation | <primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BMoog",
  ["in", "freq", "q", "mode", "saturation"],
  function (_in, _freq, _q, _mode, _saturation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _freq, _q, _mode, _saturation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BMoog(_in, _freq, _q, _mode, _saturation);
  },
  "{ :in :freq :q :mode :saturation | <primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BMoog",
  ["in", "freq", "q", "mode", "saturation"],
  function (_in, _freq, _q, _mode, _saturation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _freq, _q, _mode, _saturation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BMoog(_in, _freq, _q, _mode, _saturation);
  },
  "{ :in :freq :q :mode :saturation | <primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Bpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Bpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Bpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Bpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Bpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Bpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Bpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpz2(_in);
  },
  "{ :in | <primitive: return sc.Bpz2(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Bpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpz2(_in);
  },
  "{ :in | <primitive: return sc.Bpz2(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Bpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bpz2(_in);
  },
  "{ :in | <primitive: return sc.Bpz2(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BPeakEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.BPeakEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BPeakEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.BPeakEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BPeakEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.BPeakEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Brf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Brf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Brf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Brf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Brf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Brf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Brz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brz2(_in);
  },
  "{ :in | <primitive: return sc.Brz2(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Brz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brz2(_in);
  },
  "{ :in | <primitive: return sc.Brz2(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Brz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Brz2(_in);
  },
  "{ :in | <primitive: return sc.Brz2(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Balance2",
  ["left", "right", "pos", "level"],
  function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  },
  "{ :left :right :pos :level | <primitive: return sc.Balance2(_left, _right, _pos, _level);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Balance2",
  ["left", "right", "pos", "level"],
  function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  },
  "{ :left :right :pos :level | <primitive: return sc.Balance2(_left, _right, _pos, _level);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Balance2",
  ["left", "right", "pos", "level"],
  function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  },
  "{ :left :right :pos :level | <primitive: return sc.Balance2(_left, _right, _pos, _level);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Blip(_freq, _numharm);
  },
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Blip(_freq, _numharm);
  },
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Blip(_freq, _numharm);
  },
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufDur(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufDur(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufDur(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufFrames(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufFrames(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufFrames(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRateScale(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRateScale(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRateScale(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufRd",
  ["numChan", "bufnum", "phase", "loop", "interpolation"],
  function (_numChan, _bufnum, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _bufnum, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);
  },
  "{ :numChan :bufnum :phase :loop :interpolation | <primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufRd",
  ["numChan", "bufnum", "phase", "loop", "interpolation"],
  function (_numChan, _bufnum, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _bufnum, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);
  },
  "{ :numChan :bufnum :phase :loop :interpolation | <primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufRd",
  ["numChan", "bufnum", "phase", "loop", "interpolation"],
  function (_numChan, _bufnum, _phase, _loop, _interpolation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _bufnum, _phase, _loop, _interpolation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);
  },
  "{ :numChan :bufnum :phase :loop :interpolation | <primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufSampleRate(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufSampleRate(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufSampleRate(_bufnum);
  },
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  },
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ClearBuf(_buf);
  },
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ClearBuf(_buf);
  },
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ClearBuf(_buf);
  },
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CoinGate(_prob, _in);
  },
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CoinGate(_prob, _in);
  },
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CoinGate(_prob, _in);
  },
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CombC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CombC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CombC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CombL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CombL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CombL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CombN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CombN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CombN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);
  },
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Compander",
  [
    "in",
    "control",
    "thresh",
    "slopeBelow",
    "slopeAbove",
    "clampTime",
    "relaxTime",
  ],
  function (
    _in,
    _control,
    _thresh,
    _slopeBelow,
    _slopeAbove,
    _clampTime,
    _relaxTime,
  ) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Compander(
      _in,
      _control,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Compander",
  [
    "in",
    "control",
    "thresh",
    "slopeBelow",
    "slopeAbove",
    "clampTime",
    "relaxTime",
  ],
  function (
    _in,
    _control,
    _thresh,
    _slopeBelow,
    _slopeAbove,
    _clampTime,
    _relaxTime,
  ) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Compander(
      _in,
      _control,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Compander",
  [
    "in",
    "control",
    "thresh",
    "slopeBelow",
    "slopeAbove",
    "clampTime",
    "relaxTime",
  ],
  function (
    _in,
    _control,
    _thresh,
    _slopeBelow,
    _slopeAbove,
    _clampTime,
    _relaxTime,
  ) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Compander(
      _in,
      _control,
      _thresh,
      _slopeBelow,
      _slopeAbove,
      _clampTime,
      _relaxTime,
    );
  },
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Convolution",
  ["in", "kernel", "framesize"],
  function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  },
  "{ :in :kernel :framesize | <primitive: return sc.Convolution(_in, _kernel, _framesize);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Convolution",
  ["in", "kernel", "framesize"],
  function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  },
  "{ :in :kernel :framesize | <primitive: return sc.Convolution(_in, _kernel, _framesize);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Convolution",
  ["in", "kernel", "framesize"],
  function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  },
  "{ :in :kernel :framesize | <primitive: return sc.Convolution(_in, _kernel, _framesize);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Crackle(_chaosParam);
  },
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Crackle(_chaosParam);
  },
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Crackle(_chaosParam);
  },
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  },
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dc",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dc(_in);
  },
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dc",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dc(_in);
  },
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dc",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dc(_in);
  },
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  },
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  },
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  },
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  },
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  },
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  },
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Decay",
  ["in", "decayTime"],
  function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay(_in, _decayTime);
  },
  "{ :in :decayTime | <primitive: return sc.Decay(_in, _decayTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Decay",
  ["in", "decayTime"],
  function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay(_in, _decayTime);
  },
  "{ :in :decayTime | <primitive: return sc.Decay(_in, _decayTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Decay",
  ["in", "decayTime"],
  function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay(_in, _decayTime);
  },
  "{ :in :decayTime | <primitive: return sc.Decay(_in, _decayTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Decay2",
  ["in", "attackTime", "decayTime"],
  function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  },
  "{ :in :attackTime :decayTime | <primitive: return sc.Decay2(_in, _attackTime, _decayTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Decay2",
  ["in", "attackTime", "decayTime"],
  function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  },
  "{ :in :attackTime :decayTime | <primitive: return sc.Decay2(_in, _attackTime, _decayTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Decay2",
  ["in", "attackTime", "decayTime"],
  function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  },
  "{ :in :attackTime :decayTime | <primitive: return sc.Decay2(_in, _attackTime, _decayTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DecodeB2",
  ["numChan", "w", "x", "y", "orientation"],
  function (_numChan, _w, _x, _y, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _w, _x, _y, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);
  },
  "{ :numChan :w :x :y :orientation | <primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DecodeB2",
  ["numChan", "w", "x", "y", "orientation"],
  function (_numChan, _w, _x, _y, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _w, _x, _y, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);
  },
  "{ :numChan :w :x :y :orientation | <primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DecodeB2",
  ["numChan", "w", "x", "y", "orientation"],
  function (_numChan, _w, _x, _y, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _w, _x, _y, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);
  },
  "{ :numChan :w :x :y :orientation | <primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  },
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  },
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  },
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Delay1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay1(_in);
  },
  "{ :in | <primitive: return sc.Delay1(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Delay1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay1(_in);
  },
  "{ :in | <primitive: return sc.Delay1(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Delay1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay1(_in);
  },
  "{ :in | <primitive: return sc.Delay1(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Delay2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay2(_in);
  },
  "{ :in | <primitive: return sc.Delay2(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Delay2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay2(_in);
  },
  "{ :in | <primitive: return sc.Delay2(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Delay2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Delay2(_in);
  },
  "{ :in | <primitive: return sc.Delay2(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DelayC",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DelayC",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DelayC",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DelayL",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DelayL",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DelayL",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DelayMap",
  ["bufNum", "in", "dynamic", "spec"],
  function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  },
  "{ :bufNum :in :dynamic :spec | <primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DelayMap",
  ["bufNum", "in", "dynamic", "spec"],
  function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  },
  "{ :bufNum :in :dynamic :spec | <primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DelayMap",
  ["bufNum", "in", "dynamic", "spec"],
  function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  },
  "{ :bufNum :in :dynamic :spec | <primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DelayN",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DelayN",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DelayN",
  ["in", "maxdelaytime", "delaytime"],
  function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  },
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Demand",
  ["trig", "reset", "demandUGens"],
  function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  },
  "{ :trig :reset :demandUGens | <primitive: return sc.Demand(_trig, _reset, _demandUGens);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Demand",
  ["trig", "reset", "demandUGens"],
  function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  },
  "{ :trig :reset :demandUGens | <primitive: return sc.Demand(_trig, _reset, _demandUGens);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Demand",
  ["trig", "reset", "demandUGens"],
  function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  },
  "{ :trig :reset :demandUGens | <primitive: return sc.Demand(_trig, _reset, _demandUGens);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  },
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DetectSilence",
  ["in", "amp", "time", "doneAction"],
  function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  },
  "{ :in :amp :time :doneAction | <primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DetectSilence",
  ["in", "amp", "time", "doneAction"],
  function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  },
  "{ :in :amp :time :doneAction | <primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DetectSilence",
  ["in", "amp", "time", "doneAction"],
  function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  },
  "{ :in :amp :time :doneAction | <primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ddup(_n, _in);
  },
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ddup(_n, _in);
  },
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ddup(_n, _in);
  },
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Demultiplexer",
  ["numChannels", "input", "selector"],
  function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  },
  "{ :numChannels :input :selector | <primitive: return sc.Demultiplexer(_numChannels, _input, _selector);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Demultiplexer",
  ["numChannels", "input", "selector"],
  function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  },
  "{ :numChannels :input :selector | <primitive: return sc.Demultiplexer(_numChannels, _input, _selector);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Demultiplexer",
  ["numChannels", "input", "selector"],
  function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  },
  "{ :numChannels :input :selector | <primitive: return sc.Demultiplexer(_numChannels, _input, _selector);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  },
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  },
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  },
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  },
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Drand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Drand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Drand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseq(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseq(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseq(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dser(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dser(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dser(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseries(_length, _start, _step);
  },
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseries(_length, _start, _step);
  },
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dseries(_length, _start, _step);
  },
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dshuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dshuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dshuf(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dswitch",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch(_index, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dswitch",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch(_index, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dswitch",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch(_index, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dswitch1",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch1(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch1(_index, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dswitch1",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch1(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch1(_index, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dswitch1",
  ["index", "list"],
  function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dswitch1(_index, _list);
  },
  "{ :index :list | <primitive: return sc.Dswitch1(_index, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DurationGate(_dur);
  },
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DurationGate(_dur);
  },
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DurationGate(_dur);
  },
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dust",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust(_density);
  },
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dust",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust(_density);
  },
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dust",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust(_density);
  },
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dust2",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust2(_density);
  },
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dust2",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust2(_density);
  },
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dust2",
  ["density"],
  function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dust2(_density);
  },
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  },
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  },
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  },
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  },
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  },
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  },
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  },
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dxrand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dxrand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dxrand(_repeats, _list);
  },
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  function (
    _gate,
    _levelScale,
    _levelBias,
    _timeScale,
    _doneAction,
    _envelope,
  ) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvGen(
      _gate,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
      _envelope,
    );
  },
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  function (
    _gate,
    _levelScale,
    _levelBias,
    _timeScale,
    _doneAction,
    _envelope,
  ) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvGen(
      _gate,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
      _envelope,
    );
  },
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  function (
    _gate,
    _levelScale,
    _levelBias,
    _timeScale,
    _doneAction,
    _envelope,
  ) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvGen(
      _gate,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
      _envelope,
    );
  },
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  },
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  },
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  },
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  },
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  function (_buffer, _in, _hop, _wintype, _active, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
  },
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  function (_buffer, _in, _hop, _wintype, _active, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
  },
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  function (_buffer, _in, _hop, _wintype, _active, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
  },
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fos",
  ["in", "a0", "a1", "b1"],
  function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  },
  "{ :in :a0 :a1 :b1 | <primitive: return sc.Fos(_in, _a0, _a1, _b1);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fos",
  ["in", "a0", "a1", "b1"],
  function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  },
  "{ :in :a0 :a1 :b1 | <primitive: return sc.Fos(_in, _a0, _a1, _b1);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fos",
  ["in", "a0", "a1", "b1"],
  function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  },
  "{ :in :a0 :a1 :b1 | <primitive: return sc.Fos(_in, _a0, _a1, _b1);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fold",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Fold(_in, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fold",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Fold(_in, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fold",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Fold(_in, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  },
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  },
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  },
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Formlet",
  ["in", "freq", "attacktime", "decaytime"],
  function (_in, _freq, _attacktime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _freq, _attacktime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formlet(_in, _freq, _attacktime, _decaytime);
  },
  "{ :in :freq :attacktime :decaytime | <primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Formlet",
  ["in", "freq", "attacktime", "decaytime"],
  function (_in, _freq, _attacktime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _freq, _attacktime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formlet(_in, _freq, _attacktime, _decaytime);
  },
  "{ :in :freq :attacktime :decaytime | <primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Formlet",
  ["in", "freq", "attacktime", "decaytime"],
  function (_in, _freq, _attacktime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _freq, _attacktime, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Formlet(_in, _freq, _attacktime, _decaytime);
  },
  "{ :in :freq :attacktime :decaytime | <primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  },
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  },
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  },
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FreeVerb",
  ["in", "mix", "room", "damp"],
  function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  },
  "{ :in :mix :room :damp | <primitive: return sc.FreeVerb(_in, _mix, _room, _damp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FreeVerb",
  ["in", "mix", "room", "damp"],
  function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  },
  "{ :in :mix :room :damp | <primitive: return sc.FreeVerb(_in, _mix, _room, _damp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FreeVerb",
  ["in", "mix", "room", "damp"],
  function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  },
  "{ :in :mix :room :damp | <primitive: return sc.FreeVerb(_in, _mix, _room, _damp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FreeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  },
  "{ :in :in2 :mix :room :damp | <primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FreeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  },
  "{ :in :in2 :mix :room :damp | <primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FreeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  },
  "{ :in :in2 :mix :room :damp | <primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FreqShift",
  ["in", "freq", "phase"],
  function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  },
  "{ :in :freq :phase | <primitive: return sc.FreqShift(_in, _freq, _phase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FreqShift",
  ["in", "freq", "phase"],
  function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  },
  "{ :in :freq :phase | <primitive: return sc.FreqShift(_in, _freq, _phase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FreqShift",
  ["in", "freq", "phase"],
  function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  },
  "{ :in :freq :phase | <primitive: return sc.FreqShift(_in, _freq, _phase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GVerb",
  [
    "in",
    "roomsize",
    "revtime",
    "damping",
    "inputbw",
    "spread",
    "drylevel",
    "earlyreflevel",
    "taillevel",
    "maxroomsize",
  ],
  function (
    _in,
    _roomsize,
    _revtime,
    _damping,
    _inputbw,
    _spread,
    _drylevel,
    _earlyreflevel,
    _taillevel,
    _maxroomsize,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GVerb(
      _in,
      _roomsize,
      _revtime,
      _damping,
      _inputbw,
      _spread,
      _drylevel,
      _earlyreflevel,
      _taillevel,
      _maxroomsize,
    );
  },
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize | <primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GVerb",
  [
    "in",
    "roomsize",
    "revtime",
    "damping",
    "inputbw",
    "spread",
    "drylevel",
    "earlyreflevel",
    "taillevel",
    "maxroomsize",
  ],
  function (
    _in,
    _roomsize,
    _revtime,
    _damping,
    _inputbw,
    _spread,
    _drylevel,
    _earlyreflevel,
    _taillevel,
    _maxroomsize,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GVerb(
      _in,
      _roomsize,
      _revtime,
      _damping,
      _inputbw,
      _spread,
      _drylevel,
      _earlyreflevel,
      _taillevel,
      _maxroomsize,
    );
  },
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize | <primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GVerb",
  [
    "in",
    "roomsize",
    "revtime",
    "damping",
    "inputbw",
    "spread",
    "drylevel",
    "earlyreflevel",
    "taillevel",
    "maxroomsize",
  ],
  function (
    _in,
    _roomsize,
    _revtime,
    _damping,
    _inputbw,
    _spread,
    _drylevel,
    _earlyreflevel,
    _taillevel,
    _maxroomsize,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GVerb(
      _in,
      _roomsize,
      _revtime,
      _damping,
      _inputbw,
      _spread,
      _drylevel,
      _earlyreflevel,
      _taillevel,
      _maxroomsize,
    );
  },
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize | <primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gate",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gate(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Gate(_in, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gate",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gate(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Gate(_in, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gate",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gate(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Gate(_in, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  },
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  },
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  },
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gendy1",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy1(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gendy1",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy1(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gendy1",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy1(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gendy2",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
    "a",
    "c",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
    _a,
    _c,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy2(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
      _a,
      _c,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gendy2",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
    "a",
    "c",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
    _a,
    _c,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy2(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
      _a,
      _c,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gendy2",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "minfreq",
    "maxfreq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
    "a",
    "c",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _minfreq,
    _maxfreq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
    _a,
    _c,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy2(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _minfreq,
      _maxfreq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
      _a,
      _c,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gendy3",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "freq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _freq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy3(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _freq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gendy3",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "freq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _freq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy3(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _freq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gendy3",
  [
    "ampdist",
    "durdist",
    "adparam",
    "ddparam",
    "freq",
    "ampscale",
    "durscale",
    "initCPs",
    "knum",
  ],
  function (
    _ampdist,
    _durdist,
    _adparam,
    _ddparam,
    _freq,
    _ampscale,
    _durscale,
    _initCPs,
    _knum,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gendy3(
      _ampdist,
      _durdist,
      _adparam,
      _ddparam,
      _freq,
      _ampscale,
      _durscale,
      _initCPs,
      _knum,
    );
  },
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GrainBuf",
  [
    "numChan",
    "trigger",
    "dur",
    "sndbuf",
    "rate",
    "pos",
    "interp",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _sndbuf,
    _rate,
    _pos,
    _interp,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainBuf(
      _numChan,
      _trigger,
      _dur,
      _sndbuf,
      _rate,
      _pos,
      _interp,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains | <primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GrainBuf",
  [
    "numChan",
    "trigger",
    "dur",
    "sndbuf",
    "rate",
    "pos",
    "interp",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _sndbuf,
    _rate,
    _pos,
    _interp,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainBuf(
      _numChan,
      _trigger,
      _dur,
      _sndbuf,
      _rate,
      _pos,
      _interp,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains | <primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GrainBuf",
  [
    "numChan",
    "trigger",
    "dur",
    "sndbuf",
    "rate",
    "pos",
    "interp",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _sndbuf,
    _rate,
    _pos,
    _interp,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 10) {
      const errorMessage =
        "Arity: expected 10, _numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainBuf(
      _numChan,
      _trigger,
      _dur,
      _sndbuf,
      _rate,
      _pos,
      _interp,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains | <primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GrainFm",
  [
    "numChan",
    "trigger",
    "dur",
    "carfreq",
    "modfreq",
    "index",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _carfreq,
    _modfreq,
    _index,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainFm(
      _numChan,
      _trigger,
      _dur,
      _carfreq,
      _modfreq,
      _index,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains | <primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GrainFm",
  [
    "numChan",
    "trigger",
    "dur",
    "carfreq",
    "modfreq",
    "index",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _carfreq,
    _modfreq,
    _index,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainFm(
      _numChan,
      _trigger,
      _dur,
      _carfreq,
      _modfreq,
      _index,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains | <primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GrainFm",
  [
    "numChan",
    "trigger",
    "dur",
    "carfreq",
    "modfreq",
    "index",
    "pan",
    "envbufnum",
    "maxGrains",
  ],
  function (
    _numChan,
    _trigger,
    _dur,
    _carfreq,
    _modfreq,
    _index,
    _pan,
    _envbufnum,
    _maxGrains,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainFm(
      _numChan,
      _trigger,
      _dur,
      _carfreq,
      _modfreq,
      _index,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains | <primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GrainSin",
  ["numChan", "trigger", "dur", "freq", "pan", "envbufnum", "maxGrains"],
  function (_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainSin(
      _numChan,
      _trigger,
      _dur,
      _freq,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains | <primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GrainSin",
  ["numChan", "trigger", "dur", "freq", "pan", "envbufnum", "maxGrains"],
  function (_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainSin(
      _numChan,
      _trigger,
      _dur,
      _freq,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains | <primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GrainSin",
  ["numChan", "trigger", "dur", "freq", "pan", "envbufnum", "maxGrains"],
  function (_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GrainSin(
      _numChan,
      _trigger,
      _dur,
      _freq,
      _pan,
      _envbufnum,
      _maxGrains,
    );
  },
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains | <primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Hpf(_in, _freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Hpf(_in, _freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Hpf(_in, _freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz1(_in);
  },
  "{ :in | <primitive: return sc.Hpz1(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz1(_in);
  },
  "{ :in | <primitive: return sc.Hpz1(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz1(_in);
  },
  "{ :in | <primitive: return sc.Hpz1(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz2(_in);
  },
  "{ :in | <primitive: return sc.Hpz2(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz2(_in);
  },
  "{ :in | <primitive: return sc.Hpz2(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hpz2(_in);
  },
  "{ :in | <primitive: return sc.Hpz2(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hasher",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hasher(_in);
  },
  "{ :in | <primitive: return sc.Hasher(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hasher",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hasher(_in);
  },
  "{ :in | <primitive: return sc.Hasher(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hasher",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hasher(_in);
  },
  "{ :in | <primitive: return sc.Hasher(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  },
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hilbert",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hilbert(_in);
  },
  "{ :in | <primitive: return sc.Hilbert(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hilbert",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hilbert(_in);
  },
  "{ :in | <primitive: return sc.Hilbert(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hilbert",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hilbert(_in);
  },
  "{ :in | <primitive: return sc.Hilbert(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  },
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  },
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  },
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IRand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Impulse(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Impulse(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Impulse(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "In",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.In(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.In(_numChan, _bus);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "In",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.In(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.In(_numChan, _bus);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "In",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.In(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.In(_numChan, _bus);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "InFeedback",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.InFeedback(_numChan, _bus);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "InFeedback",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.InFeedback(_numChan, _bus);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "InFeedback",
  ["numChan", "bus"],
  function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  },
  "{ :numChan :bus | <primitive: return sc.InFeedback(_numChan, _bus);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "InRange",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.InRange(_in, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "InRange",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.InRange(_in, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "InRange",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.InRange(_in, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Index(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Index(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Index(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Integrator",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Integrator(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.Integrator(_in, _coef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Integrator",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Integrator(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.Integrator(_in, _coef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Integrator",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Integrator(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.Integrator(_in, _coef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "K2A",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.K2A(_in);
  },
  "{ :in | <primitive: return sc.K2A(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "K2A",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.K2A(_in);
  },
  "{ :in | <primitive: return sc.K2A(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "K2A",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.K2A(_in);
  },
  "{ :in | <primitive: return sc.K2A(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  },
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  },
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  },
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  function (_freqscale, _freqoffset, _specificationsListRef) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
  },
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  function (_freqscale, _freqoffset, _specificationsListRef) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
  },
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  function (_freqscale, _freqoffset, _specificationsListRef) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
  },
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Klank",
  ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  function (
    _input,
    _freqscale,
    _freqoffset,
    _decayscale,
    _specificationsListRef,
  ) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _input, _freqscale, _freqoffset, _decayscale, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klank(
      _input,
      _freqscale,
      _freqoffset,
      _decayscale,
      _specificationsListRef,
    );
  },
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef | <primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Klank",
  ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  function (
    _input,
    _freqscale,
    _freqoffset,
    _decayscale,
    _specificationsListRef,
  ) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _input, _freqscale, _freqoffset, _decayscale, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klank(
      _input,
      _freqscale,
      _freqoffset,
      _decayscale,
      _specificationsListRef,
    );
  },
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef | <primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Klank",
  ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  function (
    _input,
    _freqscale,
    _freqoffset,
    _decayscale,
    _specificationsListRef,
  ) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _input, _freqscale, _freqoffset, _decayscale, _specificationsListRef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Klank(
      _input,
      _freqscale,
      _freqoffset,
      _decayscale,
      _specificationsListRef,
    );
  },
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef | <primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfCub(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfCub(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfCub(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdClipNoise(_freq);
  },
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise3(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise3(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfdNoise3(_freq);
  },
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  function (_duration, _width, _iphase, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
  },
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  function (_duration, _width, _iphase, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
  },
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  function (_duration, _width, _iphase, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
  },
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise0(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise1(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise2(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise2(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfNoise2(_freq);
  },
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPar(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPar(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPar(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfTri(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfTri(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfTri(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Lpf(_in, _freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Lpf(_in, _freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lpf",
  ["in", "freq"],
  function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpf(_in, _freq);
  },
  "{ :in :freq | <primitive: return sc.Lpf(_in, _freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz1(_in);
  },
  "{ :in | <primitive: return sc.Lpz1(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz1(_in);
  },
  "{ :in | <primitive: return sc.Lpz1(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lpz1",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz1(_in);
  },
  "{ :in | <primitive: return sc.Lpz1(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz2(_in);
  },
  "{ :in | <primitive: return sc.Lpz2(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz2(_in);
  },
  "{ :in | <primitive: return sc.Lpz2(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lpz2",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lpz2(_in);
  },
  "{ :in | <primitive: return sc.Lpz2(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lag",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag(_in, _lagTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lag",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag(_in, _lagTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lag",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag(_in, _lagTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lag2",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag2(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag2(_in, _lagTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lag2",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag2(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag2(_in, _lagTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lag2",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag2(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag2(_in, _lagTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lag3",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag3(_in, _lagTime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lag3",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag3(_in, _lagTime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lag3",
  ["in", "lagTime"],
  function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3(_in, _lagTime);
  },
  "{ :in :lagTime | <primitive: return sc.Lag3(_in, _lagTime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LagUd",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LagUd",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LagUd",
  ["in", "lagTimeU", "lagTimeD"],
  function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  },
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Latch",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Latch(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Latch(_in, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Latch",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Latch(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Latch(_in, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Latch",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Latch(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.Latch(_in, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  },
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  },
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  },
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LeakDc",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LeakDc(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.LeakDc(_in, _coef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LeakDc",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LeakDc(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.LeakDc(_in, _coef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LeakDc",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LeakDc(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.LeakDc(_in, _coef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Limiter",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Limiter(_in, _level, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Limiter",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Limiter(_in, _level, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Limiter",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Limiter(_in, _level, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  },
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  },
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  },
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  },
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  },
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  },
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinPan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.LinPan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinPan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.LinPan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinPan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.LinPan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  },
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  },
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  },
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinXFade2",
  ["inA", "inB", "pan"],
  function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  },
  "{ :inA :inB :pan | <primitive: return sc.LinXFade2(_inA, _inB, _pan);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinXFade2",
  ["inA", "inB", "pan"],
  function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  },
  "{ :inA :inB :pan | <primitive: return sc.LinXFade2(_inA, _inB, _pan);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinXFade2",
  ["inA", "inB", "pan"],
  function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  },
  "{ :inA :inB :pan | <primitive: return sc.LinXFade2(_inA, _inB, _pan);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
  },
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
  },
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
  },
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LocalBuf",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.LocalBuf(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalBuf",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.LocalBuf(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LocalBuf",
  ["numChannels", "numFrames"],
  function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  },
  "{ :numChannels :numFrames | <primitive: return sc.LocalBuf(_numChannels, _numFrames);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LocalIn",
  ["numChan", "default"],
  function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalIn(_numChan, _default);
  },
  "{ :numChan :default | <primitive: return sc.LocalIn(_numChan, _default);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalIn",
  ["numChan", "default"],
  function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalIn(_numChan, _default);
  },
  "{ :numChan :default | <primitive: return sc.LocalIn(_numChan, _default);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LocalIn",
  ["numChan", "default"],
  function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalIn(_numChan, _default);
  },
  "{ :numChan :default | <primitive: return sc.LocalIn(_numChan, _default);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalOut(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalOut(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LocalOut(_channelsList);
  },
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  },
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  },
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  },
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  },
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  },
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  },
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MantissaMask",
  ["in", "bits"],
  function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MantissaMask(_in, _bits);
  },
  "{ :in :bits | <primitive: return sc.MantissaMask(_in, _bits);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MantissaMask",
  ["in", "bits"],
  function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MantissaMask(_in, _bits);
  },
  "{ :in :bits | <primitive: return sc.MantissaMask(_in, _bits);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MantissaMask",
  ["in", "bits"],
  function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MantissaMask(_in, _bits);
  },
  "{ :in :bits | <primitive: return sc.MantissaMask(_in, _bits);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Median",
  ["length", "in"],
  function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Median(_length, _in);
  },
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Median",
  ["length", "in"],
  function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Median(_length, _in);
  },
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Median",
  ["length", "in"],
  function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Median(_length, _in);
  },
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MidEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.MidEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MidEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.MidEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MidEq",
  ["in", "freq", "rq", "db"],
  function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  },
  "{ :in :freq :rq :db | <primitive: return sc.MidEq(_in, _freq, _rq, _db);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  },
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  },
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  },
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MoogFf",
  ["in", "freq", "gain", "reset"],
  function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  },
  "{ :in :freq :gain :reset | <primitive: return sc.MoogFf(_in, _freq, _gain, _reset);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MoogFf",
  ["in", "freq", "gain", "reset"],
  function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  },
  "{ :in :freq :gain :reset | <primitive: return sc.MoogFf(_in, _freq, _gain, _reset);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MoogFf",
  ["in", "freq", "gain", "reset"],
  function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  },
  "{ :in :freq :gain :reset | <primitive: return sc.MoogFf(_in, _freq, _gain, _reset);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MoogVcf",
  ["in", "fco", "res"],
  function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  },
  "{ :in :fco :res | <primitive: return sc.MoogVcf(_in, _fco, _res);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MoogVcf",
  ["in", "fco", "res"],
  function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  },
  "{ :in :fco :res | <primitive: return sc.MoogVcf(_in, _fco, _res);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MoogVcf",
  ["in", "fco", "res"],
  function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  },
  "{ :in :fco :res | <primitive: return sc.MoogVcf(_in, _fco, _res);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  },
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  },
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  },
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  },
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  },
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  },
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  },
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MVerb",
  [
    "in1",
    "in2",
    "dampingFreq",
    "density",
    "bandwidthFreq",
    "decay",
    "predelay",
    "size",
    "gain",
    "mix",
    "earlyMix",
  ],
  function (
    _in1,
    _in2,
    _dampingFreq,
    _density,
    _bandwidthFreq,
    _decay,
    _predelay,
    _size,
    _gain,
    _mix,
    _earlyMix,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MVerb(
      _in1,
      _in2,
      _dampingFreq,
      _density,
      _bandwidthFreq,
      _decay,
      _predelay,
      _size,
      _gain,
      _mix,
      _earlyMix,
    );
  },
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix | <primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MVerb",
  [
    "in1",
    "in2",
    "dampingFreq",
    "density",
    "bandwidthFreq",
    "decay",
    "predelay",
    "size",
    "gain",
    "mix",
    "earlyMix",
  ],
  function (
    _in1,
    _in2,
    _dampingFreq,
    _density,
    _bandwidthFreq,
    _decay,
    _predelay,
    _size,
    _gain,
    _mix,
    _earlyMix,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MVerb(
      _in1,
      _in2,
      _dampingFreq,
      _density,
      _bandwidthFreq,
      _decay,
      _predelay,
      _size,
      _gain,
      _mix,
      _earlyMix,
    );
  },
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix | <primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MVerb",
  [
    "in1",
    "in2",
    "dampingFreq",
    "density",
    "bandwidthFreq",
    "decay",
    "predelay",
    "size",
    "gain",
    "mix",
    "earlyMix",
  ],
  function (
    _in1,
    _in2,
    _dampingFreq,
    _density,
    _bandwidthFreq,
    _decay,
    _predelay,
    _size,
    _gain,
    _mix,
    _earlyMix,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MVerb(
      _in1,
      _in2,
      _dampingFreq,
      _density,
      _bandwidthFreq,
      _decay,
      _predelay,
      _size,
      _gain,
      _mix,
      _earlyMix,
    );
  },
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix | <primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  },
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  },
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  },
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Normalizer",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Normalizer(_in, _level, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Normalizer",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Normalizer(_in, _level, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Normalizer",
  ["in", "level", "dur"],
  function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  },
  "{ :in :level :dur | <primitive: return sc.Normalizer(_in, _level, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "OnePole",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OnePole(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OnePole(_in, _coef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "OnePole",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OnePole(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OnePole(_in, _coef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "OnePole",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OnePole(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OnePole(_in, _coef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "OneZero",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OneZero(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OneZero(_in, _coef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "OneZero",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OneZero(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OneZero(_in, _coef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "OneZero",
  ["in", "coef"],
  function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.OneZero(_in, _coef);
  },
  "{ :in :coef | <primitive: return sc.OneZero(_in, _coef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  },
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  },
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  },
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Out(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Out(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Out(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  },
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  },
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  },
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  },
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  },
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  },
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  },
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  },
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  },
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Pan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.Pan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Pan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.Pan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Pan2",
  ["in", "pos", "level"],
  function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  },
  "{ :in :pos :level | <primitive: return sc.Pan2(_in, _pos, _level);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PanAz",
  ["numChan", "in", "pos", "level", "width", "orientation"],
  function (_numChan, _in, _pos, _level, _width, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChan, _in, _pos, _level, _width, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);
  },
  "{ :numChan :in :pos :level :width :orientation | <primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PanAz",
  ["numChan", "in", "pos", "level", "width", "orientation"],
  function (_numChan, _in, _pos, _level, _width, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChan, _in, _pos, _level, _width, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);
  },
  "{ :numChan :in :pos :level :width :orientation | <primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PanAz",
  ["numChan", "in", "pos", "level", "width", "orientation"],
  function (_numChan, _in, _pos, _level, _width, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChan, _in, _pos, _level, _width, _orientation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);
  },
  "{ :numChan :in :pos :level :width :orientation | <primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PanB",
  ["in", "azimuth", "elevation", "gain"],
  function (_in, _azimuth, _elevation, _gain) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _azimuth, _elevation, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB(_in, _azimuth, _elevation, _gain);
  },
  "{ :in :azimuth :elevation :gain | <primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PanB",
  ["in", "azimuth", "elevation", "gain"],
  function (_in, _azimuth, _elevation, _gain) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _azimuth, _elevation, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB(_in, _azimuth, _elevation, _gain);
  },
  "{ :in :azimuth :elevation :gain | <primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PanB",
  ["in", "azimuth", "elevation", "gain"],
  function (_in, _azimuth, _elevation, _gain) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _azimuth, _elevation, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB(_in, _azimuth, _elevation, _gain);
  },
  "{ :in :azimuth :elevation :gain | <primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PanB2",
  ["input", "azimuth", "gain"],
  function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  },
  "{ :input :azimuth :gain | <primitive: return sc.PanB2(_input, _azimuth, _gain);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PanB2",
  ["input", "azimuth", "gain"],
  function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  },
  "{ :input :azimuth :gain | <primitive: return sc.PanB2(_input, _azimuth, _gain);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PanB2",
  ["input", "azimuth", "gain"],
  function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  },
  "{ :input :azimuth :gain | <primitive: return sc.PanB2(_input, _azimuth, _gain);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PeakFollower",
  ["in", "decay"],
  function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PeakFollower(_in, _decay);
  },
  "{ :in :decay | <primitive: return sc.PeakFollower(_in, _decay);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PeakFollower",
  ["in", "decay"],
  function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PeakFollower(_in, _decay);
  },
  "{ :in :decay | <primitive: return sc.PeakFollower(_in, _decay);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PeakFollower",
  ["in", "decay"],
  function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PeakFollower(_in, _decay);
  },
  "{ :in :decay | <primitive: return sc.PeakFollower(_in, _decay);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  },
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  },
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  },
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Pitch",
  [
    "in",
    "initFreq",
    "minFreq",
    "maxFreq",
    "execFreq",
    "maxBinsPerOctave",
    "median",
    "ampThreshold",
    "peakThreshold",
    "downSample",
    "clar",
  ],
  function (
    _in,
    _initFreq,
    _minFreq,
    _maxFreq,
    _execFreq,
    _maxBinsPerOctave,
    _median,
    _ampThreshold,
    _peakThreshold,
    _downSample,
    _clar,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pitch(
      _in,
      _initFreq,
      _minFreq,
      _maxFreq,
      _execFreq,
      _maxBinsPerOctave,
      _median,
      _ampThreshold,
      _peakThreshold,
      _downSample,
      _clar,
    );
  },
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar | <primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Pitch",
  [
    "in",
    "initFreq",
    "minFreq",
    "maxFreq",
    "execFreq",
    "maxBinsPerOctave",
    "median",
    "ampThreshold",
    "peakThreshold",
    "downSample",
    "clar",
  ],
  function (
    _in,
    _initFreq,
    _minFreq,
    _maxFreq,
    _execFreq,
    _maxBinsPerOctave,
    _median,
    _ampThreshold,
    _peakThreshold,
    _downSample,
    _clar,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pitch(
      _in,
      _initFreq,
      _minFreq,
      _maxFreq,
      _execFreq,
      _maxBinsPerOctave,
      _median,
      _ampThreshold,
      _peakThreshold,
      _downSample,
      _clar,
    );
  },
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar | <primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Pitch",
  [
    "in",
    "initFreq",
    "minFreq",
    "maxFreq",
    "execFreq",
    "maxBinsPerOctave",
    "median",
    "ampThreshold",
    "peakThreshold",
    "downSample",
    "clar",
  ],
  function (
    _in,
    _initFreq,
    _minFreq,
    _maxFreq,
    _execFreq,
    _maxBinsPerOctave,
    _median,
    _ampThreshold,
    _peakThreshold,
    _downSample,
    _clar,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pitch(
      _in,
      _initFreq,
      _minFreq,
      _maxFreq,
      _execFreq,
      _maxBinsPerOctave,
      _median,
      _ampThreshold,
      _peakThreshold,
      _downSample,
      _clar,
    );
  },
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar | <primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PitchShift",
  ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  function (_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PitchShift(
      _in,
      _windowSize,
      _pitchRatio,
      _pitchDispersion,
      _timeDispersion,
    );
  },
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion | <primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PitchShift",
  ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  function (_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PitchShift(
      _in,
      _windowSize,
      _pitchRatio,
      _pitchDispersion,
      _timeDispersion,
    );
  },
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion | <primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PitchShift",
  ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  function (_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PitchShift(
      _in,
      _windowSize,
      _pitchRatio,
      _pitchDispersion,
      _timeDispersion,
    );
  },
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion | <primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PlayBuf",
  ["numChan", "bufnum", "rate", "trigger", "startPos", "loop", "doneAction"],
  function (_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PlayBuf(
      _numChan,
      _bufnum,
      _rate,
      _trigger,
      _startPos,
      _loop,
      _doneAction,
    );
  },
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction | <primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PlayBuf",
  ["numChan", "bufnum", "rate", "trigger", "startPos", "loop", "doneAction"],
  function (_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PlayBuf(
      _numChan,
      _bufnum,
      _rate,
      _trigger,
      _startPos,
      _loop,
      _doneAction,
    );
  },
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction | <primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PlayBuf",
  ["numChan", "bufnum", "rate", "trigger", "startPos", "loop", "doneAction"],
  function (_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PlayBuf(
      _numChan,
      _bufnum,
      _rate,
      _trigger,
      _startPos,
      _loop,
      _doneAction,
    );
  },
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction | <primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Pluck",
  ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  function (_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);
  },
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef | <primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Pluck",
  ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  function (_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);
  },
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef | <primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Pluck",
  ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  function (_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);
  },
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef | <primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pulse(_freq, _width);
  },
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pulse(_freq, _width);
  },
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pulse(_freq, _width);
  },
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseCount(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseCount(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseCount(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  },
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  },
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  },
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  },
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Rhpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rhpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Rhpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rhpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Rhpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rhpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Rlpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rlpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Rlpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rlpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Rlpf",
  ["in", "freq", "rq"],
  function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  },
  "{ :in :freq :rq | <primitive: return sc.Rlpf(_in, _freq, _rq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rand(_lo, _hi);
  },
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RecordBuf",
  [
    "bufnum",
    "offset",
    "recLevel",
    "preLevel",
    "run",
    "loop",
    "trigger",
    "doneAction",
    "inputList",
  ],
  function (
    _bufnum,
    _offset,
    _recLevel,
    _preLevel,
    _run,
    _loop,
    _trigger,
    _doneAction,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RecordBuf(
      _bufnum,
      _offset,
      _recLevel,
      _preLevel,
      _run,
      _loop,
      _trigger,
      _doneAction,
      _inputList,
    );
  },
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RecordBuf",
  [
    "bufnum",
    "offset",
    "recLevel",
    "preLevel",
    "run",
    "loop",
    "trigger",
    "doneAction",
    "inputList",
  ],
  function (
    _bufnum,
    _offset,
    _recLevel,
    _preLevel,
    _run,
    _loop,
    _trigger,
    _doneAction,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RecordBuf(
      _bufnum,
      _offset,
      _recLevel,
      _preLevel,
      _run,
      _loop,
      _trigger,
      _doneAction,
      _inputList,
    );
  },
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RecordBuf",
  [
    "bufnum",
    "offset",
    "recLevel",
    "preLevel",
    "run",
    "loop",
    "trigger",
    "doneAction",
    "inputList",
  ],
  function (
    _bufnum,
    _offset,
    _recLevel,
    _preLevel,
    _run,
    _loop,
    _trigger,
    _doneAction,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RecordBuf(
      _bufnum,
      _offset,
      _recLevel,
      _preLevel,
      _run,
      _loop,
      _trigger,
      _doneAction,
      _inputList,
    );
  },
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  },
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Resonz",
  ["in", "freq", "bwr"],
  function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  },
  "{ :in :freq :bwr | <primitive: return sc.Resonz(_in, _freq, _bwr);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Resonz",
  ["in", "freq", "bwr"],
  function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  },
  "{ :in :freq :bwr | <primitive: return sc.Resonz(_in, _freq, _bwr);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Resonz",
  ["in", "freq", "bwr"],
  function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  },
  "{ :in :freq :bwr | <primitive: return sc.Resonz(_in, _freq, _bwr);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ringz",
  ["in", "freq", "decaytime"],
  function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  },
  "{ :in :freq :decaytime | <primitive: return sc.Ringz(_in, _freq, _decaytime);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ringz",
  ["in", "freq", "decaytime"],
  function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  },
  "{ :in :freq :decaytime | <primitive: return sc.Ringz(_in, _freq, _decaytime);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ringz",
  ["in", "freq", "decaytime"],
  function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  },
  "{ :in :freq :decaytime | <primitive: return sc.Ringz(_in, _freq, _decaytime);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  },
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  },
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  },
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RunningMax",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningMax(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.RunningMax(_in, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RunningMax",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningMax(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.RunningMax(_in, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RunningMax",
  ["in", "trig"],
  function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningMax(_in, _trig);
  },
  "{ :in :trig | <primitive: return sc.RunningMax(_in, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RunningSum",
  ["in", "numsamp"],
  function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  },
  "{ :in :numsamp | <primitive: return sc.RunningSum(_in, _numsamp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RunningSum",
  ["in", "numsamp"],
  function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  },
  "{ :in :numsamp | <primitive: return sc.RunningSum(_in, _numsamp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RunningSum",
  ["in", "numsamp"],
  function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  },
  "{ :in :numsamp | <primitive: return sc.RunningSum(_in, _numsamp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  },
  "{ :in :a0 :a1 :a2 :b1 :b2 | <primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  },
  "{ :in :a0 :a1 :a2 :b1 :b2 | <primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  },
  "{ :in :a0 :a1 :a2 :b1 :b2 | <primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  },
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  },
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  },
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sanitize",
  ["in", "replace"],
  function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sanitize(_in, _replace);
  },
  "{ :in :replace | <primitive: return sc.Sanitize(_in, _replace);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sanitize",
  ["in", "replace"],
  function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sanitize(_in, _replace);
  },
  "{ :in :replace | <primitive: return sc.Sanitize(_in, _replace);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sanitize",
  ["in", "replace"],
  function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sanitize(_in, _replace);
  },
  "{ :in :replace | <primitive: return sc.Sanitize(_in, _replace);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Saw",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Saw(_freq);
  },
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Saw",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Saw(_freq);
  },
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Saw",
  ["freq"],
  function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Saw(_freq);
  },
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  },
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Schmidt",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Schmidt(_in, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Schmidt",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Schmidt(_in, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Schmidt",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Schmidt(_in, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Select",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Select(_which, _array);
  },
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Select",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Select(_which, _array);
  },
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Select",
  ["which", "array"],
  function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Select(_which, _array);
  },
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  },
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOsc(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOsc(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOsc(_freq, _phase);
  },
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  },
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  },
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  },
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Slew",
  ["in", "up", "dn"],
  function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slew(_in, _up, _dn);
  },
  "{ :in :up :dn | <primitive: return sc.Slew(_in, _up, _dn);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Slew",
  ["in", "up", "dn"],
  function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slew(_in, _up, _dn);
  },
  "{ :in :up :dn | <primitive: return sc.Slew(_in, _up, _dn);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Slew",
  ["in", "up", "dn"],
  function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slew(_in, _up, _dn);
  },
  "{ :in :up :dn | <primitive: return sc.Slew(_in, _up, _dn);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Slope",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slope(_in);
  },
  "{ :in | <primitive: return sc.Slope(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Slope",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slope(_in);
  },
  "{ :in | <primitive: return sc.Slope(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Slope",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Slope(_in);
  },
  "{ :in | <primitive: return sc.Slope(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Spring",
  ["in", "spring", "damp"],
  function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  },
  "{ :in :spring :damp | <primitive: return sc.Spring(_in, _spring, _damp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Spring",
  ["in", "spring", "damp"],
  function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  },
  "{ :in :spring :damp | <primitive: return sc.Spring(_in, _spring, _damp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Spring",
  ["in", "spring", "damp"],
  function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  },
  "{ :in :spring :damp | <primitive: return sc.Spring(_in, _spring, _damp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  },
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  },
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  },
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  },
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  },
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  },
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  },
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sweep(_trig, _rate);
  },
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sweep(_trig, _rate);
  },
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sweep(_trig, _rate);
  },
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  },
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  },
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  },
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  },
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  },
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  },
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TDelay",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDelay(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.TDelay(_in, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TDelay",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDelay(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.TDelay(_in, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TDelay",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDelay(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.TDelay(_in, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  },
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  },
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  },
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TGrains",
  [
    "numChan",
    "trigger",
    "bufnum",
    "rate",
    "centerPos",
    "dur",
    "pan",
    "amp",
    "interp",
  ],
  function (
    _numChan,
    _trigger,
    _bufnum,
    _rate,
    _centerPos,
    _dur,
    _pan,
    _amp,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TGrains(
      _numChan,
      _trigger,
      _bufnum,
      _rate,
      _centerPos,
      _dur,
      _pan,
      _amp,
      _interp,
    );
  },
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp | <primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TGrains",
  [
    "numChan",
    "trigger",
    "bufnum",
    "rate",
    "centerPos",
    "dur",
    "pan",
    "amp",
    "interp",
  ],
  function (
    _numChan,
    _trigger,
    _bufnum,
    _rate,
    _centerPos,
    _dur,
    _pan,
    _amp,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TGrains(
      _numChan,
      _trigger,
      _bufnum,
      _rate,
      _centerPos,
      _dur,
      _pan,
      _amp,
      _interp,
    );
  },
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp | <primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TGrains",
  [
    "numChan",
    "trigger",
    "bufnum",
    "rate",
    "centerPos",
    "dur",
    "pan",
    "amp",
    "interp",
  ],
  function (
    _numChan,
    _trigger,
    _bufnum,
    _rate,
    _centerPos,
    _dur,
    _pan,
    _amp,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TGrains(
      _numChan,
      _trigger,
      _bufnum,
      _rate,
      _centerPos,
      _dur,
      _pan,
      _amp,
      _interp,
    );
  },
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp | <primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  },
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Timer",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Timer(_trig);
  },
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Timer",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Timer(_trig);
  },
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Timer",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Timer(_trig);
  },
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ToggleFf(_trig);
  },
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ToggleFf(_trig);
  },
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ToggleFf(_trig);
  },
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Trig",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig(_in, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Trig",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig(_in, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Trig",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig(_in, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Trig1",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig1(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig1(_in, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Trig1",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig1(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig1(_in, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Trig1",
  ["in", "dur"],
  function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trig1(_in, _dur);
  },
  "{ :in :dur | <primitive: return sc.Trig1(_in, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TwIndex",
  ["input", "normalize", "array"],
  function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  },
  "{ :input :normalize :array | <primitive: return sc.TwIndex(_input, _normalize, _array);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TwIndex",
  ["input", "normalize", "array"],
  function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  },
  "{ :input :normalize :array | <primitive: return sc.TwIndex(_input, _normalize, _array);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TwIndex",
  ["input", "normalize", "array"],
  function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  },
  "{ :input :normalize :array | <primitive: return sc.TwIndex(_input, _normalize, _array);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TwoPole",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoPole(_in, _freq, _radius);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TwoPole",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoPole(_in, _freq, _radius);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TwoPole",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoPole(_in, _freq, _radius);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TwoZero",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoZero(_in, _freq, _radius);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TwoZero",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoZero(_in, _freq, _radius);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TwoZero",
  ["in", "freq", "radius"],
  function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  },
  "{ :in :freq :radius | <primitive: return sc.TwoZero(_in, _freq, _radius);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  },
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Vibrato",
  [
    "freq",
    "rate",
    "depth",
    "delay",
    "onset",
    "rateVariation",
    "depthVariation",
    "iphase",
    "trig",
  ],
  function (
    _freq,
    _rate,
    _depth,
    _delay,
    _onset,
    _rateVariation,
    _depthVariation,
    _iphase,
    _trig,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vibrato(
      _freq,
      _rate,
      _depth,
      _delay,
      _onset,
      _rateVariation,
      _depthVariation,
      _iphase,
      _trig,
    );
  },
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Vibrato",
  [
    "freq",
    "rate",
    "depth",
    "delay",
    "onset",
    "rateVariation",
    "depthVariation",
    "iphase",
    "trig",
  ],
  function (
    _freq,
    _rate,
    _depth,
    _delay,
    _onset,
    _rateVariation,
    _depthVariation,
    _iphase,
    _trig,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vibrato(
      _freq,
      _rate,
      _depth,
      _delay,
      _onset,
      _rateVariation,
      _depthVariation,
      _iphase,
      _trig,
    );
  },
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Vibrato",
  [
    "freq",
    "rate",
    "depth",
    "delay",
    "onset",
    "rateVariation",
    "depthVariation",
    "iphase",
    "trig",
  ],
  function (
    _freq,
    _rate,
    _depth,
    _delay,
    _onset,
    _rateVariation,
    _depthVariation,
    _iphase,
    _trig,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vibrato(
      _freq,
      _rate,
      _depth,
      _delay,
      _onset,
      _rateVariation,
      _depthVariation,
      _iphase,
      _trig,
    );
  },
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Warp1",
  [
    "numChan",
    "bufnum",
    "pointer",
    "freqScale",
    "windowSize",
    "envbufnum",
    "overlaps",
    "windowRandRatio",
    "interp",
  ],
  function (
    _numChan,
    _bufnum,
    _pointer,
    _freqScale,
    _windowSize,
    _envbufnum,
    _overlaps,
    _windowRandRatio,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Warp1(
      _numChan,
      _bufnum,
      _pointer,
      _freqScale,
      _windowSize,
      _envbufnum,
      _overlaps,
      _windowRandRatio,
      _interp,
    );
  },
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp | <primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Warp1",
  [
    "numChan",
    "bufnum",
    "pointer",
    "freqScale",
    "windowSize",
    "envbufnum",
    "overlaps",
    "windowRandRatio",
    "interp",
  ],
  function (
    _numChan,
    _bufnum,
    _pointer,
    _freqScale,
    _windowSize,
    _envbufnum,
    _overlaps,
    _windowRandRatio,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Warp1(
      _numChan,
      _bufnum,
      _pointer,
      _freqScale,
      _windowSize,
      _envbufnum,
      _overlaps,
      _windowRandRatio,
      _interp,
    );
  },
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp | <primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Warp1",
  [
    "numChan",
    "bufnum",
    "pointer",
    "freqScale",
    "windowSize",
    "envbufnum",
    "overlaps",
    "windowRandRatio",
    "interp",
  ],
  function (
    _numChan,
    _bufnum,
    _pointer,
    _freqScale,
    _windowSize,
    _envbufnum,
    _overlaps,
    _windowRandRatio,
    _interp,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Warp1(
      _numChan,
      _bufnum,
      _pointer,
      _freqScale,
      _windowSize,
      _envbufnum,
      _overlaps,
      _windowRandRatio,
      _interp,
    );
  },
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp | <primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  },
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  },
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "XFade2",
  ["inA", "inB", "pan", "level"],
  function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  },
  "{ :inA :inB :pan :level | <primitive: return sc.XFade2(_inA, _inB, _pan, _level);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "XFade2",
  ["inA", "inB", "pan", "level"],
  function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  },
  "{ :inA :inB :pan :level | <primitive: return sc.XFade2(_inA, _inB, _pan, _level);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "XFade2",
  ["inA", "inB", "pan", "level"],
  function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  },
  "{ :inA :inB :pan :level | <primitive: return sc.XFade2(_inA, _inB, _pan, _level);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ZeroCrossing",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ZeroCrossing(_in);
  },
  "{ :in | <primitive: return sc.ZeroCrossing(_in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ZeroCrossing",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ZeroCrossing(_in);
  },
  "{ :in | <primitive: return sc.ZeroCrossing(_in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ZeroCrossing",
  ["in"],
  function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ZeroCrossing(_in);
  },
  "{ :in | <primitive: return sc.ZeroCrossing(_in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MaxLocalBufs(_count);
  },
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MaxLocalBufs(_count);
  },
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MaxLocalBufs(_count);
  },
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MulAdd",
  ["in", "mul", "add"],
  function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  },
  "{ :in :mul :add | <primitive: return sc.MulAdd(_in, _mul, _add);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MulAdd",
  ["in", "mul", "add"],
  function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  },
  "{ :in :mul :add | <primitive: return sc.MulAdd(_in, _mul, _add);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MulAdd",
  ["in", "mul", "add"],
  function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  },
  "{ :in :mul :add | <primitive: return sc.MulAdd(_in, _mul, _add);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  },
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  },
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  },
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  },
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  },
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  },
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  },
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  },
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  },
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  },
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  },
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  },
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
  },
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
  },
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
  },
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DwgPluckedStiff(
      _freq,
      _amp,
      _gate,
      _pos,
      _c1,
      _c3,
      _inp,
      _release,
      _fB,
    );
  },
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DwgPluckedStiff(
      _freq,
      _amp,
      _gate,
      _pos,
      _c1,
      _c3,
      _inp,
      _release,
      _fB,
    );
  },
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DwgPluckedStiff(
      _freq,
      _amp,
      _gate,
      _pos,
      _c1,
      _c3,
      _inp,
      _release,
      _fB,
    );
  },
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  },
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  },
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  },
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7(
      _bufnum,
      _on,
      _off,
      _data,
      _vc,
      _mnn,
      _vel,
      _pw,
      _mw,
      _bc,
      _fc,
    );
  },
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7(
      _bufnum,
      _on,
      _off,
      _data,
      _vc,
      _mnn,
      _vel,
      _pw,
      _mw,
      _bc,
      _fc,
    );
  },
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7(
      _bufnum,
      _on,
      _off,
      _data,
      _vc,
      _mnn,
      _vel,
      _pw,
      _mw,
      _bc,
      _fc,
    );
  },
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);
  },
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);
  },
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);
  },
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  },
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  },
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  },
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Freezer",
  [
    "bufnum",
    "left",
    "right",
    "gain",
    "increment",
    "incrementOffset",
    "incrementRandom",
    "rightRandom",
    "syncPhaseTrigger",
    "randomizePhaseTrigger",
    "numberOfLoops",
  ],
  function (
    _bufnum,
    _left,
    _right,
    _gain,
    _increment,
    _incrementOffset,
    _incrementRandom,
    _rightRandom,
    _syncPhaseTrigger,
    _randomizePhaseTrigger,
    _numberOfLoops,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Freezer(
      _bufnum,
      _left,
      _right,
      _gain,
      _increment,
      _incrementOffset,
      _incrementRandom,
      _rightRandom,
      _syncPhaseTrigger,
      _randomizePhaseTrigger,
      _numberOfLoops,
    );
  },
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Freezer",
  [
    "bufnum",
    "left",
    "right",
    "gain",
    "increment",
    "incrementOffset",
    "incrementRandom",
    "rightRandom",
    "syncPhaseTrigger",
    "randomizePhaseTrigger",
    "numberOfLoops",
  ],
  function (
    _bufnum,
    _left,
    _right,
    _gain,
    _increment,
    _incrementOffset,
    _incrementRandom,
    _rightRandom,
    _syncPhaseTrigger,
    _randomizePhaseTrigger,
    _numberOfLoops,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Freezer(
      _bufnum,
      _left,
      _right,
      _gain,
      _increment,
      _incrementOffset,
      _incrementRandom,
      _rightRandom,
      _syncPhaseTrigger,
      _randomizePhaseTrigger,
      _numberOfLoops,
    );
  },
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Freezer",
  [
    "bufnum",
    "left",
    "right",
    "gain",
    "increment",
    "incrementOffset",
    "incrementRandom",
    "rightRandom",
    "syncPhaseTrigger",
    "randomizePhaseTrigger",
    "numberOfLoops",
  ],
  function (
    _bufnum,
    _left,
    _right,
    _gain,
    _increment,
    _incrementOffset,
    _incrementRandom,
    _rightRandom,
    _syncPhaseTrigger,
    _randomizePhaseTrigger,
    _numberOfLoops,
  ) {
    /* ArityCheck */
    if (arguments.length !== 11) {
      const errorMessage =
        "Arity: expected 11, _bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Freezer(
      _bufnum,
      _left,
      _right,
      _gain,
      _increment,
      _incrementOffset,
      _incrementRandom,
      _rightRandom,
      _syncPhaseTrigger,
      _randomizePhaseTrigger,
      _numberOfLoops,
    );
  },
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  function (_in, _friction, _spring, _damp, _mass, _beltmass) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
  },
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  function (_in, _friction, _spring, _damp, _mass, _beltmass) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
  },
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  function (_in, _friction, _spring, _damp, _mass, _beltmass) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
  },
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "GreyholeRaw",
  [
    "in1",
    "in2",
    "damping",
    "delaytime",
    "diffusion",
    "feedback",
    "moddepth",
    "modfreq",
    "size",
  ],
  function (
    _in1,
    _in2,
    _damping,
    _delaytime,
    _diffusion,
    _feedback,
    _moddepth,
    _modfreq,
    _size,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GreyholeRaw(
      _in1,
      _in2,
      _damping,
      _delaytime,
      _diffusion,
      _feedback,
      _moddepth,
      _modfreq,
      _size,
    );
  },
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "GreyholeRaw",
  [
    "in1",
    "in2",
    "damping",
    "delaytime",
    "diffusion",
    "feedback",
    "moddepth",
    "modfreq",
    "size",
  ],
  function (
    _in1,
    _in2,
    _damping,
    _delaytime,
    _diffusion,
    _feedback,
    _moddepth,
    _modfreq,
    _size,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GreyholeRaw(
      _in1,
      _in2,
      _damping,
      _delaytime,
      _diffusion,
      _feedback,
      _moddepth,
      _modfreq,
      _size,
    );
  },
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "GreyholeRaw",
  [
    "in1",
    "in2",
    "damping",
    "delaytime",
    "diffusion",
    "feedback",
    "moddepth",
    "modfreq",
    "size",
  ],
  function (
    _in1,
    _in2,
    _damping,
    _delaytime,
    _diffusion,
    _feedback,
    _moddepth,
    _modfreq,
    _size,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.GreyholeRaw(
      _in1,
      _in2,
      _damping,
      _delaytime,
      _diffusion,
      _feedback,
      _moddepth,
      _modfreq,
      _size,
    );
  },
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  },
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  },
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  },
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  },
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  },
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  },
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  },
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  },
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  },
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MiBraids",
  [
    "pitch",
    "timbre",
    "color",
    "model",
    "trig",
    "resamp",
    "decim",
    "bits",
    "ws",
  ],
  function (
    _pitch,
    _timbre,
    _color,
    _model,
    _trig,
    _resamp,
    _decim,
    _bits,
    _ws,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiBraids(
      _pitch,
      _timbre,
      _color,
      _model,
      _trig,
      _resamp,
      _decim,
      _bits,
      _ws,
    );
  },
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MiBraids",
  [
    "pitch",
    "timbre",
    "color",
    "model",
    "trig",
    "resamp",
    "decim",
    "bits",
    "ws",
  ],
  function (
    _pitch,
    _timbre,
    _color,
    _model,
    _trig,
    _resamp,
    _decim,
    _bits,
    _ws,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiBraids(
      _pitch,
      _timbre,
      _color,
      _model,
      _trig,
      _resamp,
      _decim,
      _bits,
      _ws,
    );
  },
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MiBraids",
  [
    "pitch",
    "timbre",
    "color",
    "model",
    "trig",
    "resamp",
    "decim",
    "bits",
    "ws",
  ],
  function (
    _pitch,
    _timbre,
    _color,
    _model,
    _trig,
    _resamp,
    _decim,
    _bits,
    _ws,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiBraids(
      _pitch,
      _timbre,
      _color,
      _model,
      _trig,
      _resamp,
      _decim,
      _bits,
      _ws,
    );
  },
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MiClouds",
  [
    "pit",
    "pos",
    "size",
    "dens",
    "tex",
    "drywet",
    "inGain",
    "spread",
    "rvb",
    "fb",
    "freeze",
    "mode",
    "lofi",
    "trig",
    "inputList",
  ],
  function (
    _pit,
    _pos,
    _size,
    _dens,
    _tex,
    _drywet,
    _inGain,
    _spread,
    _rvb,
    _fb,
    _freeze,
    _mode,
    _lofi,
    _trig,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 15) {
      const errorMessage =
        "Arity: expected 15, _pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiClouds(
      _pit,
      _pos,
      _size,
      _dens,
      _tex,
      _drywet,
      _inGain,
      _spread,
      _rvb,
      _fb,
      _freeze,
      _mode,
      _lofi,
      _trig,
      _inputList,
    );
  },
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MiClouds",
  [
    "pit",
    "pos",
    "size",
    "dens",
    "tex",
    "drywet",
    "inGain",
    "spread",
    "rvb",
    "fb",
    "freeze",
    "mode",
    "lofi",
    "trig",
    "inputList",
  ],
  function (
    _pit,
    _pos,
    _size,
    _dens,
    _tex,
    _drywet,
    _inGain,
    _spread,
    _rvb,
    _fb,
    _freeze,
    _mode,
    _lofi,
    _trig,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 15) {
      const errorMessage =
        "Arity: expected 15, _pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiClouds(
      _pit,
      _pos,
      _size,
      _dens,
      _tex,
      _drywet,
      _inGain,
      _spread,
      _rvb,
      _fb,
      _freeze,
      _mode,
      _lofi,
      _trig,
      _inputList,
    );
  },
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MiClouds",
  [
    "pit",
    "pos",
    "size",
    "dens",
    "tex",
    "drywet",
    "inGain",
    "spread",
    "rvb",
    "fb",
    "freeze",
    "mode",
    "lofi",
    "trig",
    "inputList",
  ],
  function (
    _pit,
    _pos,
    _size,
    _dens,
    _tex,
    _drywet,
    _inGain,
    _spread,
    _rvb,
    _fb,
    _freeze,
    _mode,
    _lofi,
    _trig,
    _inputList,
  ) {
    /* ArityCheck */
    if (arguments.length !== 15) {
      const errorMessage =
        "Arity: expected 15, _pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiClouds(
      _pit,
      _pos,
      _size,
      _dens,
      _tex,
      _drywet,
      _inGain,
      _spread,
      _rvb,
      _fb,
      _freeze,
      _mode,
      _lofi,
      _trig,
      _inputList,
    );
  },
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MiRings",
  [
    "in",
    "trig",
    "pit",
    "struct",
    "bright",
    "damp",
    "pos",
    "model",
    "poly",
    "internExciter",
    "easteregg",
    "bypass",
  ],
  function (
    _in,
    _trig,
    _pit,
    _struct,
    _bright,
    _damp,
    _pos,
    _model,
    _poly,
    _internExciter,
    _easteregg,
    _bypass,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiRings(
      _in,
      _trig,
      _pit,
      _struct,
      _bright,
      _damp,
      _pos,
      _model,
      _poly,
      _internExciter,
      _easteregg,
      _bypass,
    );
  },
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MiRings",
  [
    "in",
    "trig",
    "pit",
    "struct",
    "bright",
    "damp",
    "pos",
    "model",
    "poly",
    "internExciter",
    "easteregg",
    "bypass",
  ],
  function (
    _in,
    _trig,
    _pit,
    _struct,
    _bright,
    _damp,
    _pos,
    _model,
    _poly,
    _internExciter,
    _easteregg,
    _bypass,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiRings(
      _in,
      _trig,
      _pit,
      _struct,
      _bright,
      _damp,
      _pos,
      _model,
      _poly,
      _internExciter,
      _easteregg,
      _bypass,
    );
  },
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MiRings",
  [
    "in",
    "trig",
    "pit",
    "struct",
    "bright",
    "damp",
    "pos",
    "model",
    "poly",
    "internExciter",
    "easteregg",
    "bypass",
  ],
  function (
    _in,
    _trig,
    _pit,
    _struct,
    _bright,
    _damp,
    _pos,
    _model,
    _poly,
    _internExciter,
    _easteregg,
    _bypass,
  ) {
    /* ArityCheck */
    if (arguments.length !== 12) {
      const errorMessage =
        "Arity: expected 12, _in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MiRings(
      _in,
      _trig,
      _pit,
      _struct,
      _bright,
      _damp,
      _pos,
      _model,
      _poly,
      _internExciter,
      _easteregg,
      _bypass,
    );
  },
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  },
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  },
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  },
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ObxdFilter(
      _in,
      _cutoff,
      _resonance,
      _multimode,
      _bandpass,
      _fourpole,
    );
  },
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ObxdFilter(
      _in,
      _cutoff,
      _resonance,
      _multimode,
      _bandpass,
      _fourpole,
    );
  },
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ObxdFilter(
      _in,
      _cutoff,
      _resonance,
      _multimode,
      _bandpass,
      _fourpole,
    );
  },
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  },
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  },
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  },
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  function (
    _clock,
    _rotate,
    _reset,
    _div,
    _spread,
    _auto,
    _len,
    _down,
    _gates,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rcd(
      _clock,
      _rotate,
      _reset,
      _div,
      _spread,
      _auto,
      _len,
      _down,
      _gates,
    );
  },
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  function (
    _clock,
    _rotate,
    _reset,
    _div,
    _spread,
    _auto,
    _len,
    _down,
    _gates,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rcd(
      _clock,
      _rotate,
      _reset,
      _div,
      _spread,
      _auto,
      _len,
      _down,
      _gates,
    );
  },
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  function (
    _clock,
    _rotate,
    _reset,
    _div,
    _spread,
    _auto,
    _len,
    _down,
    _gates,
  ) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Rcd(
      _clock,
      _rotate,
      _reset,
      _div,
      _spread,
      _auto,
      _len,
      _down,
      _gates,
    );
  },
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  },
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
  },
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
  },
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
  },
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ShufflerB",
  [
    "bufnum",
    "readLocationMinima",
    "readLocationMaxima",
    "readIncrementMinima",
    "readIncrementMaxima",
    "durationMinima",
    "durationMaxima",
    "envelopeAmplitudeMinima",
    "envelopeAmplitudeMaxima",
    "envelopeShapeMinima",
    "envelopeShapeMaxima",
    "envelopeSkewMinima",
    "envelopeSkewMaxima",
    "stereoLocationMinima",
    "stereoLocationMaxima",
    "interOffsetTimeMinima",
    "interOffsetTimeMaxima",
    "ftableReadLocationIncrement",
    "readIncrementQuanta",
    "interOffsetTimeQuanta",
  ],
  function (
    _bufnum,
    _readLocationMinima,
    _readLocationMaxima,
    _readIncrementMinima,
    _readIncrementMaxima,
    _durationMinima,
    _durationMaxima,
    _envelopeAmplitudeMinima,
    _envelopeAmplitudeMaxima,
    _envelopeShapeMinima,
    _envelopeShapeMaxima,
    _envelopeSkewMinima,
    _envelopeSkewMaxima,
    _stereoLocationMinima,
    _stereoLocationMaxima,
    _interOffsetTimeMinima,
    _interOffsetTimeMaxima,
    _ftableReadLocationIncrement,
    _readIncrementQuanta,
    _interOffsetTimeQuanta,
  ) {
    /* ArityCheck */
    if (arguments.length !== 20) {
      const errorMessage =
        "Arity: expected 20, _bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShufflerB(
      _bufnum,
      _readLocationMinima,
      _readLocationMaxima,
      _readIncrementMinima,
      _readIncrementMaxima,
      _durationMinima,
      _durationMaxima,
      _envelopeAmplitudeMinima,
      _envelopeAmplitudeMaxima,
      _envelopeShapeMinima,
      _envelopeShapeMaxima,
      _envelopeSkewMinima,
      _envelopeSkewMaxima,
      _stereoLocationMinima,
      _stereoLocationMaxima,
      _interOffsetTimeMinima,
      _interOffsetTimeMaxima,
      _ftableReadLocationIncrement,
      _readIncrementQuanta,
      _interOffsetTimeQuanta,
    );
  },
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ShufflerB",
  [
    "bufnum",
    "readLocationMinima",
    "readLocationMaxima",
    "readIncrementMinima",
    "readIncrementMaxima",
    "durationMinima",
    "durationMaxima",
    "envelopeAmplitudeMinima",
    "envelopeAmplitudeMaxima",
    "envelopeShapeMinima",
    "envelopeShapeMaxima",
    "envelopeSkewMinima",
    "envelopeSkewMaxima",
    "stereoLocationMinima",
    "stereoLocationMaxima",
    "interOffsetTimeMinima",
    "interOffsetTimeMaxima",
    "ftableReadLocationIncrement",
    "readIncrementQuanta",
    "interOffsetTimeQuanta",
  ],
  function (
    _bufnum,
    _readLocationMinima,
    _readLocationMaxima,
    _readIncrementMinima,
    _readIncrementMaxima,
    _durationMinima,
    _durationMaxima,
    _envelopeAmplitudeMinima,
    _envelopeAmplitudeMaxima,
    _envelopeShapeMinima,
    _envelopeShapeMaxima,
    _envelopeSkewMinima,
    _envelopeSkewMaxima,
    _stereoLocationMinima,
    _stereoLocationMaxima,
    _interOffsetTimeMinima,
    _interOffsetTimeMaxima,
    _ftableReadLocationIncrement,
    _readIncrementQuanta,
    _interOffsetTimeQuanta,
  ) {
    /* ArityCheck */
    if (arguments.length !== 20) {
      const errorMessage =
        "Arity: expected 20, _bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShufflerB(
      _bufnum,
      _readLocationMinima,
      _readLocationMaxima,
      _readIncrementMinima,
      _readIncrementMaxima,
      _durationMinima,
      _durationMaxima,
      _envelopeAmplitudeMinima,
      _envelopeAmplitudeMaxima,
      _envelopeShapeMinima,
      _envelopeShapeMaxima,
      _envelopeSkewMinima,
      _envelopeSkewMaxima,
      _stereoLocationMinima,
      _stereoLocationMaxima,
      _interOffsetTimeMinima,
      _interOffsetTimeMaxima,
      _ftableReadLocationIncrement,
      _readIncrementQuanta,
      _interOffsetTimeQuanta,
    );
  },
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ShufflerB",
  [
    "bufnum",
    "readLocationMinima",
    "readLocationMaxima",
    "readIncrementMinima",
    "readIncrementMaxima",
    "durationMinima",
    "durationMaxima",
    "envelopeAmplitudeMinima",
    "envelopeAmplitudeMaxima",
    "envelopeShapeMinima",
    "envelopeShapeMaxima",
    "envelopeSkewMinima",
    "envelopeSkewMaxima",
    "stereoLocationMinima",
    "stereoLocationMaxima",
    "interOffsetTimeMinima",
    "interOffsetTimeMaxima",
    "ftableReadLocationIncrement",
    "readIncrementQuanta",
    "interOffsetTimeQuanta",
  ],
  function (
    _bufnum,
    _readLocationMinima,
    _readLocationMaxima,
    _readIncrementMinima,
    _readIncrementMaxima,
    _durationMinima,
    _durationMaxima,
    _envelopeAmplitudeMinima,
    _envelopeAmplitudeMaxima,
    _envelopeShapeMinima,
    _envelopeShapeMaxima,
    _envelopeSkewMinima,
    _envelopeSkewMaxima,
    _stereoLocationMinima,
    _stereoLocationMaxima,
    _interOffsetTimeMinima,
    _interOffsetTimeMaxima,
    _ftableReadLocationIncrement,
    _readIncrementQuanta,
    _interOffsetTimeQuanta,
  ) {
    /* ArityCheck */
    if (arguments.length !== 20) {
      const errorMessage =
        "Arity: expected 20, _bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShufflerB(
      _bufnum,
      _readLocationMinima,
      _readLocationMaxima,
      _readIncrementMinima,
      _readIncrementMaxima,
      _durationMinima,
      _durationMaxima,
      _envelopeAmplitudeMinima,
      _envelopeAmplitudeMaxima,
      _envelopeShapeMinima,
      _envelopeShapeMaxima,
      _envelopeSkewMinima,
      _envelopeSkewMaxima,
      _stereoLocationMinima,
      _stereoLocationMaxima,
      _interOffsetTimeMinima,
      _interOffsetTimeMaxima,
      _ftableReadLocationIncrement,
      _readIncrementQuanta,
      _interOffsetTimeQuanta,
    );
  },
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  },
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  },
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  },
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Svf",
  [
    "signal",
    "cutoff",
    "res",
    "lowpass",
    "bandpass",
    "highpass",
    "notch",
    "peak",
  ],
  function (
    _signal,
    _cutoff,
    _res,
    _lowpass,
    _bandpass,
    _highpass,
    _notch,
    _peak,
  ) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Svf(
      _signal,
      _cutoff,
      _res,
      _lowpass,
      _bandpass,
      _highpass,
      _notch,
      _peak,
    );
  },
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Svf",
  [
    "signal",
    "cutoff",
    "res",
    "lowpass",
    "bandpass",
    "highpass",
    "notch",
    "peak",
  ],
  function (
    _signal,
    _cutoff,
    _res,
    _lowpass,
    _bandpass,
    _highpass,
    _notch,
    _peak,
  ) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Svf(
      _signal,
      _cutoff,
      _res,
      _lowpass,
      _bandpass,
      _highpass,
      _notch,
      _peak,
    );
  },
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Svf",
  [
    "signal",
    "cutoff",
    "res",
    "lowpass",
    "bandpass",
    "highpass",
    "notch",
    "peak",
  ],
  function (
    _signal,
    _cutoff,
    _res,
    _lowpass,
    _bandpass,
    _highpass,
    _notch,
    _peak,
  ) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Svf(
      _signal,
      _cutoff,
      _res,
      _lowpass,
      _bandpass,
      _highpass,
      _notch,
      _peak,
    );
  },
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  },
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  },
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  },
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  },
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  },
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  },
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  },
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  },
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  },
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  },
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  },
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  },
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  },
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  },
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  },
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  },
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  },
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  },
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  },
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  },
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  },
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  },
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  },
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  },
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  },
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
  },
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Neg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Neg(_self);
  },
  "{ :self | <primitive: return sc.Neg(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Neg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Neg(_self);
  },
  "{ :self | <primitive: return sc.Neg(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Squared(_self);
  },
  "{ :self | <primitive: return sc.Squared(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Squared(_self);
  },
  "{ :self | <primitive: return sc.Squared(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cubed(_self);
  },
  "{ :self | <primitive: return sc.Cubed(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cubed(_self);
  },
  "{ :self | <primitive: return sc.Cubed(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Recip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Recip(_self);
  },
  "{ :self | <primitive: return sc.Recip(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Recip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Recip(_self);
  },
  "{ :self | <primitive: return sc.Recip(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidiCps(_self);
  },
  "{ :self | <primitive: return sc.MidiCps(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidiCps(_self);
  },
  "{ :self | <primitive: return sc.MidiCps(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "CpsMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CpsMidi(_self);
  },
  "{ :self | <primitive: return sc.CpsMidi(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "CpsMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.CpsMidi(_self);
  },
  "{ :self | <primitive: return sc.CpsMidi(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "MidiRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidiRatio(_self);
  },
  "{ :self | <primitive: return sc.MidiRatio(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "MidiRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.MidiRatio(_self);
  },
  "{ :self | <primitive: return sc.MidiRatio(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RatioMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RatioMidi(_self);
  },
  "{ :self | <primitive: return sc.RatioMidi(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RatioMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RatioMidi(_self);
  },
  "{ :self | <primitive: return sc.RatioMidi(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DbAmp(_self);
  },
  "{ :self | <primitive: return sc.DbAmp(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.DbAmp(_self);
  },
  "{ :self | <primitive: return sc.DbAmp(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpDb(_self);
  },
  "{ :self | <primitive: return sc.AmpDb(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmpDb(_self);
  },
  "{ :self | <primitive: return sc.AmpDb(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Distort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Distort(_self);
  },
  "{ :self | <primitive: return sc.Distort(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Distort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Distort(_self);
  },
  "{ :self | <primitive: return sc.Distort(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SoftClip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SoftClip(_self);
  },
  "{ :self | <primitive: return sc.SoftClip(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SoftClip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SoftClip(_self);
  },
  "{ :self | <primitive: return sc.SoftClip(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Abs(_self);
  },
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Abs(_self);
  },
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Abs(_self);
  },
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ceil(_self);
  },
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ceil(_self);
  },
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ceil(_self);
  },
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Floor(_self);
  },
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Floor(_self);
  },
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Floor(_self);
  },
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Frac",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Frac(_self);
  },
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Frac",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Frac(_self);
  },
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Frac",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Frac(_self);
  },
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sign(_self);
  },
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sign(_self);
  },
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sign(_self);
  },
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sqrt(_self);
  },
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sqrt(_self);
  },
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sqrt(_self);
  },
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Exp(_self);
  },
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Exp(_self);
  },
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Exp(_self);
  },
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log(_self);
  },
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log(_self);
  },
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log(_self);
  },
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log2(_self);
  },
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log2(_self);
  },
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log2(_self);
  },
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log10(_self);
  },
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log10(_self);
  },
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Log10(_self);
  },
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sin(_self);
  },
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sin(_self);
  },
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sin(_self);
  },
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cos(_self);
  },
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cos(_self);
  },
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cos(_self);
  },
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tan(_self);
  },
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tan(_self);
  },
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tan(_self);
  },
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ArcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcSin(_self);
  },
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcSin(_self);
  },
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ArcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcSin(_self);
  },
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ArcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcCos(_self);
  },
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcCos(_self);
  },
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ArcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcCos(_self);
  },
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ArcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcTan(_self);
  },
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcTan(_self);
  },
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ArcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ArcTan(_self);
  },
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sinh(_self);
  },
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sinh(_self);
  },
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sinh(_self);
  },
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cosh(_self);
  },
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cosh(_self);
  },
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Cosh(_self);
  },
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tanh(_self);
  },
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tanh(_self);
  },
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Tanh(_self);
  },
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BiLinRand(_self);
  },
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BiLinRand(_self);
  },
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BiLinRand(_self);
  },
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "LinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand_(_self);
  },
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand_(_self);
  },
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "LinRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.LinRand_(_self);
  },
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum3Rand(_self);
  },
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum3Rand(_self);
  },
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sum3Rand(_self);
  },
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Coin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Coin(_self);
  },
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Coin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Coin(_self);
  },
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Coin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Coin(_self);
  },
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Add(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Add(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Add(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Sub",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sub(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Sub",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sub(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Sub",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sub(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Mul",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mul(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Mul",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mul(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Mul",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mul(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Idiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Idiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Idiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Idiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Idiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Idiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fdiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fdiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fdiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fdiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fdiv",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fdiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mod(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mod(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mod(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ne",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ne(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ne",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ne(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ne",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ne(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gt",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Le",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Le(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Le",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Le(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Le",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Le(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ge",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ge(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ge",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ge(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ge",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ge(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Min(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Min(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Min(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Max(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Max(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Max(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitAnd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitAnd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitAnd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitOr(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitOr(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.BitOr(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lcm(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lcm(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lcm(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gcd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gcd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gcd(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RoundTo(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RoundTo(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RoundTo(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Trunc",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trunc(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Trunc",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trunc(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Trunc",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trunc(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Atan2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Atan2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Atan2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Hypot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hypot(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Hypot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hypot(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Hypot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Hypot(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Pow",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pow(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Pow",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pow(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Pow",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pow(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmClip(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmClip(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AmClip(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Clip2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fold2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Wrap2(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Excess(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Excess(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Excess(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ring1(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ring1(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ring1(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AbsDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AbsDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.AbsDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SqrDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SqrDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.SqrDif(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FirstArg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FirstArg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.FirstArg(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.RandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.addMethod(
  "List",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.addMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "bitShiftLeft",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  },
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftLeft(_self, _anObject);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "bitShiftRight",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  },
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftRight(_self, _anObject);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RoundTo_2(_self, 1);
  },
  "{ :self |\n\t\tRoundTo(self, 1)\n\t}",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "truncateTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Trunc(_self, _anObject);
  },
  "{ :self :anObject |\n\t\t<primitive: return sc.Trunc(_self, _anObject);>\n\t}",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "UnitCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _MidiCps_1(_asterisk_2(_self, 100));
  },
  "{ :self |\n\t\t(self * 100).MidiCps\n\t}",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Add(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mul(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Sub(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Fdiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Idiv(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Mod(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Eq(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Eq(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "tildeEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ne(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Lt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Gt(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Le(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Ge(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.Pow(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.addMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  },
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);
