/*  Requires: Ugen  */

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "BlockSize",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BlockSize();
  }, []),
  "{ <primitive: return sc.BlockSize();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "BrownNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BrownNoise();
  }, []),
  "{ <primitive: return sc.BrownNoise();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "ClipNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClipNoise();
  }, []),
  "{ <primitive: return sc.ClipNoise();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "ControlDur",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlDur();
  }, []),
  "{ <primitive: return sc.ControlDur();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "ControlRate",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlRate();
  }, []),
  "{ <primitive: return sc.ControlRate();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "GrayNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GrayNoise();
  }, []),
  "{ <primitive: return sc.GrayNoise();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "NumOutputBuses",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NumOutputBuses();
  }, []),
  "{ <primitive: return sc.NumOutputBuses();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "PinkNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PinkNoise();
  }, []),
  "{ <primitive: return sc.PinkNoise();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "RadiansPerSample",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RadiansPerSample();
  }, []),
  "{ <primitive: return sc.RadiansPerSample();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "SampleDur",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SampleDur();
  }, []),
  "{ <primitive: return sc.SampleDur();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "SampleRate",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SampleRate();
  }, []),
  "{ <primitive: return sc.SampleRate();> }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "WhiteNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WhiteNoise();
  }, []),
  "{ <primitive: return sc.WhiteNoise();> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "A2K",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.A2K(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.A2K(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "A2K",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.A2K(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.A2K(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AllpassC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AllpassC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AllpassL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AllpassL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AllpassN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AllpassN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Amplitude",
  ["in", "attackTime", "releaseTime"],
  sl.annotateFunction(function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  }, ["in", "attackTime", "releaseTime"]),
  "{ :in :attackTime :releaseTime | <primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Amplitude",
  ["in", "attackTime", "releaseTime"],
  sl.annotateFunction(function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  }, ["in", "attackTime", "releaseTime"]),
  "{ :in :attackTime :releaseTime | <primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BBandPass",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw | <primitive: return sc.BBandPass(_in, _freq, _bw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BBandPass",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw | <primitive: return sc.BBandPass(_in, _freq, _bw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BBandStop",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw | <primitive: return sc.BBandStop(_in, _freq, _bw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BBandStop",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw | <primitive: return sc.BBandStop(_in, _freq, _bw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BfDecode1",
  ["w", "x", "y", "z", "azimuth", "elevation", "wComp"],
  sl.annotateFunction(function (_w, _x, _y, _z, _azimuth, _elevation, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _w, _x, _y, _z, _azimuth, _elevation, _wComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);
  }, ["w", "x", "y", "z", "azimuth", "elevation", "wComp"]),
  "{ :w :x :y :z :azimuth :elevation :wComp | <primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BfDecode1",
  ["w", "x", "y", "z", "azimuth", "elevation", "wComp"],
  sl.annotateFunction(function (_w, _x, _y, _z, _azimuth, _elevation, _wComp) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _w, _x, _y, _z, _azimuth, _elevation, _wComp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);
  }, ["w", "x", "y", "z", "azimuth", "elevation", "wComp"]),
  "{ :w :x :y :z :azimuth :elevation :wComp | <primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BfEncode1",
  ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  sl.annotateFunction(
    function (_input, _azimuth, _elevation, _rho, _gain, _wComp) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _input, _azimuth, _elevation, _rho, _gain, _wComp";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);
    },
    ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  ),
  "{ :input :azimuth :elevation :rho :gain :wComp | <primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BfEncode1",
  ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  sl.annotateFunction(
    function (_input, _azimuth, _elevation, _rho, _gain, _wComp) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _input, _azimuth, _elevation, _rho, _gain, _wComp";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);
    },
    ["input", "azimuth", "elevation", "rho", "gain", "wComp"],
  ),
  "{ :input :azimuth :elevation :rho :gain :wComp | <primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BHiPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BHiPass(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BHiPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BHiPass(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BHiShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db | <primitive: return sc.BHiShelf(_in, _freq, _rs, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BHiShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db | <primitive: return sc.BHiShelf(_in, _freq, _rs, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BLowPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BLowPass(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BLowPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.BLowPass(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BLowShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db | <primitive: return sc.BLowShelf(_in, _freq, _rs, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BLowShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db | <primitive: return sc.BLowShelf(_in, _freq, _rs, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BMoog",
  ["in", "freq", "q", "mode", "saturation"],
  sl.annotateFunction(function (_in, _freq, _q, _mode, _saturation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _freq, _q, _mode, _saturation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BMoog(_in, _freq, _q, _mode, _saturation);
  }, ["in", "freq", "q", "mode", "saturation"]),
  "{ :in :freq :q :mode :saturation | <primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BMoog",
  ["in", "freq", "q", "mode", "saturation"],
  sl.annotateFunction(function (_in, _freq, _q, _mode, _saturation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _freq, _q, _mode, _saturation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BMoog(_in, _freq, _q, _mode, _saturation);
  }, ["in", "freq", "q", "mode", "saturation"]),
  "{ :in :freq :q :mode :saturation | <primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Bpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Bpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Bpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Bpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Bpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Bpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Bpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Bpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BPeakEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db | <primitive: return sc.BPeakEq(_in, _freq, _rq, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BPeakEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db | <primitive: return sc.BPeakEq(_in, _freq, _rq, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Brf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Brf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Brf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Brf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Brz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Brz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Brz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Brz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Balance2",
  ["left", "right", "pos", "level"],
  sl.annotateFunction(function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  }, ["left", "right", "pos", "level"]),
  "{ :left :right :pos :level | <primitive: return sc.Balance2(_left, _right, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Balance2",
  ["left", "right", "pos", "level"],
  sl.annotateFunction(function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  }, ["left", "right", "pos", "level"]),
  "{ :left :right :pos :level | <primitive: return sc.Balance2(_left, _right, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CombC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CombC",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CombL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CombL",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CombN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CombN",
  ["in", "maxdelaytime", "delaytime", "decaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _maxdelaytime, _delaytime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);
  }, ["in", "maxdelaytime", "delaytime", "decaytime"]),
  "{ :in :maxdelaytime :delaytime :decaytime | <primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
    [
      "in",
      "control",
      "thresh",
      "slopeBelow",
      "slopeAbove",
      "clampTime",
      "relaxTime",
    ],
  ),
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
    [
      "in",
      "control",
      "thresh",
      "slopeBelow",
      "slopeAbove",
      "clampTime",
      "relaxTime",
    ],
  ),
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime | <primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Convolution",
  ["in", "kernel", "framesize"],
  sl.annotateFunction(function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  }, ["in", "kernel", "framesize"]),
  "{ :in :kernel :framesize | <primitive: return sc.Convolution(_in, _kernel, _framesize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Convolution",
  ["in", "kernel", "framesize"],
  sl.annotateFunction(function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  }, ["in", "kernel", "framesize"]),
  "{ :in :kernel :framesize | <primitive: return sc.Convolution(_in, _kernel, _framesize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Decay",
  ["in", "decayTime"],
  sl.annotateFunction(function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay(_in, _decayTime);
  }, ["in", "decayTime"]),
  "{ :in :decayTime | <primitive: return sc.Decay(_in, _decayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Decay",
  ["in", "decayTime"],
  sl.annotateFunction(function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay(_in, _decayTime);
  }, ["in", "decayTime"]),
  "{ :in :decayTime | <primitive: return sc.Decay(_in, _decayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Decay2",
  ["in", "attackTime", "decayTime"],
  sl.annotateFunction(function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  }, ["in", "attackTime", "decayTime"]),
  "{ :in :attackTime :decayTime | <primitive: return sc.Decay2(_in, _attackTime, _decayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Decay2",
  ["in", "attackTime", "decayTime"],
  sl.annotateFunction(function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  }, ["in", "attackTime", "decayTime"]),
  "{ :in :attackTime :decayTime | <primitive: return sc.Decay2(_in, _attackTime, _decayTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Delay1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Delay1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Delay1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Delay1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Delay2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Delay2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Delay2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Delay2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DelayC",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DelayC",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DelayL",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DelayL",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DelayMap",
  ["bufNum", "in", "dynamic", "spec"],
  sl.annotateFunction(function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  }, ["bufNum", "in", "dynamic", "spec"]),
  "{ :bufNum :in :dynamic :spec | <primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DelayMap",
  ["bufNum", "in", "dynamic", "spec"],
  sl.annotateFunction(function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  }, ["bufNum", "in", "dynamic", "spec"]),
  "{ :bufNum :in :dynamic :spec | <primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DelayN",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DelayN",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime | <primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Demand",
  ["trig", "reset", "demandUGens"],
  sl.annotateFunction(function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  }, ["trig", "reset", "demandUGens"]),
  "{ :trig :reset :demandUGens | <primitive: return sc.Demand(_trig, _reset, _demandUGens);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Demand",
  ["trig", "reset", "demandUGens"],
  sl.annotateFunction(function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  }, ["trig", "reset", "demandUGens"]),
  "{ :trig :reset :demandUGens | <primitive: return sc.Demand(_trig, _reset, _demandUGens);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DetectSilence",
  ["in", "amp", "time", "doneAction"],
  sl.annotateFunction(function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  }, ["in", "amp", "time", "doneAction"]),
  "{ :in :amp :time :doneAction | <primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DetectSilence",
  ["in", "amp", "time", "doneAction"],
  sl.annotateFunction(function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  }, ["in", "amp", "time", "doneAction"]),
  "{ :in :amp :time :doneAction | <primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Fos",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 | <primitive: return sc.Fos(_in, _a0, _a1, _b1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Fos",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 | <primitive: return sc.Fos(_in, _a0, _a1, _b1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Fold",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Fold(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Fold",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Fold(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Formlet",
  ["in", "freq", "attacktime", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _attacktime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _freq, _attacktime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formlet(_in, _freq, _attacktime, _decaytime);
  }, ["in", "freq", "attacktime", "decaytime"]),
  "{ :in :freq :attacktime :decaytime | <primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Formlet",
  ["in", "freq", "attacktime", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _attacktime, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _freq, _attacktime, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formlet(_in, _freq, _attacktime, _decaytime);
  }, ["in", "freq", "attacktime", "decaytime"]),
  "{ :in :freq :attacktime :decaytime | <primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FreeVerb",
  ["in", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  }, ["in", "mix", "room", "damp"]),
  "{ :in :mix :room :damp | <primitive: return sc.FreeVerb(_in, _mix, _room, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FreeVerb",
  ["in", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  }, ["in", "mix", "room", "damp"]),
  "{ :in :mix :room :damp | <primitive: return sc.FreeVerb(_in, _mix, _room, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FreeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  }, ["in", "in2", "mix", "room", "damp"]),
  "{ :in :in2 :mix :room :damp | <primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FreeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  }, ["in", "in2", "mix", "room", "damp"]),
  "{ :in :in2 :mix :room :damp | <primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FreqShift",
  ["in", "freq", "phase"],
  sl.annotateFunction(function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  }, ["in", "freq", "phase"]),
  "{ :in :freq :phase | <primitive: return sc.FreqShift(_in, _freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FreqShift",
  ["in", "freq", "phase"],
  sl.annotateFunction(function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  }, ["in", "freq", "phase"]),
  "{ :in :freq :phase | <primitive: return sc.FreqShift(_in, _freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize | <primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize | <primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Gate",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gate(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.Gate(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Gate",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gate(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.Gate(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq | <primitive: return sc.Hpf(_in, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq | <primitive: return sc.Hpf(_in, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hpz1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hpz1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hasher",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hasher(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hasher(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hasher",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hasher(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hasher(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hilbert",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hilbert(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hilbert(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hilbert",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hilbert(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Hilbert(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "InRange",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.InRange(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "InRange",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.InRange(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Integrator",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Integrator(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.Integrator(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Integrator",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Integrator(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.Integrator(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "K2A",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.K2A(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.K2A(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "K2A",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.K2A(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.K2A(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Klank",
  ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Klank(
        _input,
        _freqscale,
        _freqoffset,
        _decayscale,
        _specificationsListRef,
      );
    },
    ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  ),
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef | <primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Klank",
  ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Klank(
        _input,
        _freqscale,
        _freqoffset,
        _decayscale,
        _specificationsListRef,
      );
    },
    ["input", "freqscale", "freqoffset", "decayscale", "specificationsListRef"],
  ),
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef | <primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq | <primitive: return sc.Lpf(_in, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq | <primitive: return sc.Lpf(_in, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Lpz1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz1(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Lpz1(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Lpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz2(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Lpz2(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lag",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lag",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lag2",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag2(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag2(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lag2",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag2(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag2(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lag3",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag3(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lag3",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime | <primitive: return sc.Lag3(_in, _lagTime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LagUd",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LagUd",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD | <primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Latch",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Latch(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.Latch(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Latch",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Latch(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.Latch(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LeakDc",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LeakDc(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.LeakDc(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LeakDc",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LeakDc(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.LeakDc(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Limiter",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur | <primitive: return sc.Limiter(_in, _level, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Limiter",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur | <primitive: return sc.Limiter(_in, _level, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinPan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level | <primitive: return sc.LinPan2(_in, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinPan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level | <primitive: return sc.LinPan2(_in, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinXFade2",
  ["inA", "inB", "pan"],
  sl.annotateFunction(function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  }, ["inA", "inB", "pan"]),
  "{ :inA :inB :pan | <primitive: return sc.LinXFade2(_inA, _inB, _pan);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinXFade2",
  ["inA", "inB", "pan"],
  sl.annotateFunction(function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  }, ["inA", "inB", "pan"]),
  "{ :inA :inB :pan | <primitive: return sc.LinXFade2(_inA, _inB, _pan);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MantissaMask",
  ["in", "bits"],
  sl.annotateFunction(function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MantissaMask(_in, _bits);
  }, ["in", "bits"]),
  "{ :in :bits | <primitive: return sc.MantissaMask(_in, _bits);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MantissaMask",
  ["in", "bits"],
  sl.annotateFunction(function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MantissaMask(_in, _bits);
  }, ["in", "bits"]),
  "{ :in :bits | <primitive: return sc.MantissaMask(_in, _bits);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MidEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db | <primitive: return sc.MidEq(_in, _freq, _rq, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MidEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db | <primitive: return sc.MidEq(_in, _freq, _rq, _db);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MoogFf",
  ["in", "freq", "gain", "reset"],
  sl.annotateFunction(function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  }, ["in", "freq", "gain", "reset"]),
  "{ :in :freq :gain :reset | <primitive: return sc.MoogFf(_in, _freq, _gain, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MoogFf",
  ["in", "freq", "gain", "reset"],
  sl.annotateFunction(function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  }, ["in", "freq", "gain", "reset"]),
  "{ :in :freq :gain :reset | <primitive: return sc.MoogFf(_in, _freq, _gain, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MoogVcf",
  ["in", "fco", "res"],
  sl.annotateFunction(function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  }, ["in", "fco", "res"]),
  "{ :in :fco :res | <primitive: return sc.MoogVcf(_in, _fco, _res);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MoogVcf",
  ["in", "fco", "res"],
  sl.annotateFunction(function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  }, ["in", "fco", "res"]),
  "{ :in :fco :res | <primitive: return sc.MoogVcf(_in, _fco, _res);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix | <primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix | <primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Normalizer",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur | <primitive: return sc.Normalizer(_in, _level, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Normalizer",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur | <primitive: return sc.Normalizer(_in, _level, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "OnePole",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OnePole(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.OnePole(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "OnePole",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OnePole(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.OnePole(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "OneZero",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OneZero(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.OneZero(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "OneZero",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OneZero(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef | <primitive: return sc.OneZero(_in, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Pan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level | <primitive: return sc.Pan2(_in, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Pan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level | <primitive: return sc.Pan2(_in, _pos, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PanB",
  ["in", "azimuth", "elevation", "gain"],
  sl.annotateFunction(function (_in, _azimuth, _elevation, _gain) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _azimuth, _elevation, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB(_in, _azimuth, _elevation, _gain);
  }, ["in", "azimuth", "elevation", "gain"]),
  "{ :in :azimuth :elevation :gain | <primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PanB",
  ["in", "azimuth", "elevation", "gain"],
  sl.annotateFunction(function (_in, _azimuth, _elevation, _gain) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _in, _azimuth, _elevation, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB(_in, _azimuth, _elevation, _gain);
  }, ["in", "azimuth", "elevation", "gain"]),
  "{ :in :azimuth :elevation :gain | <primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PanB2",
  ["input", "azimuth", "gain"],
  sl.annotateFunction(function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  }, ["input", "azimuth", "gain"]),
  "{ :input :azimuth :gain | <primitive: return sc.PanB2(_input, _azimuth, _gain);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PanB2",
  ["input", "azimuth", "gain"],
  sl.annotateFunction(function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  }, ["input", "azimuth", "gain"]),
  "{ :input :azimuth :gain | <primitive: return sc.PanB2(_input, _azimuth, _gain);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PeakFollower",
  ["in", "decay"],
  sl.annotateFunction(function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PeakFollower(_in, _decay);
  }, ["in", "decay"]),
  "{ :in :decay | <primitive: return sc.PeakFollower(_in, _decay);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PeakFollower",
  ["in", "decay"],
  sl.annotateFunction(function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PeakFollower(_in, _decay);
  }, ["in", "decay"]),
  "{ :in :decay | <primitive: return sc.PeakFollower(_in, _decay);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar | <primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar | <primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PitchShift",
  ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  sl.annotateFunction(
    function (
      _in,
      _windowSize,
      _pitchRatio,
      _pitchDispersion,
      _timeDispersion,
    ) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PitchShift(
        _in,
        _windowSize,
        _pitchRatio,
        _pitchDispersion,
        _timeDispersion,
      );
    },
    ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  ),
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion | <primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PitchShift",
  ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  sl.annotateFunction(
    function (
      _in,
      _windowSize,
      _pitchRatio,
      _pitchDispersion,
      _timeDispersion,
    ) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PitchShift(
        _in,
        _windowSize,
        _pitchRatio,
        _pitchDispersion,
        _timeDispersion,
      );
    },
    ["in", "windowSize", "pitchRatio", "pitchDispersion", "timeDispersion"],
  ),
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion | <primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Pluck",
  ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  sl.annotateFunction(
    function (_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);
    },
    ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  ),
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef | <primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Pluck",
  ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  sl.annotateFunction(
    function (_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);
    },
    ["in", "trig", "maxdelaytime", "delaytime", "decaytime", "coef"],
  ),
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef | <primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Rhpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Rhpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Rhpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Rhpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Rlpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Rlpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Rlpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq | <primitive: return sc.Rlpf(_in, _freq, _rq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Resonz",
  ["in", "freq", "bwr"],
  sl.annotateFunction(function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  }, ["in", "freq", "bwr"]),
  "{ :in :freq :bwr | <primitive: return sc.Resonz(_in, _freq, _bwr);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Resonz",
  ["in", "freq", "bwr"],
  sl.annotateFunction(function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  }, ["in", "freq", "bwr"]),
  "{ :in :freq :bwr | <primitive: return sc.Resonz(_in, _freq, _bwr);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Ringz",
  ["in", "freq", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  }, ["in", "freq", "decaytime"]),
  "{ :in :freq :decaytime | <primitive: return sc.Ringz(_in, _freq, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Ringz",
  ["in", "freq", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  }, ["in", "freq", "decaytime"]),
  "{ :in :freq :decaytime | <primitive: return sc.Ringz(_in, _freq, _decaytime);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RunningMax",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningMax(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.RunningMax(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RunningMax",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningMax(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig | <primitive: return sc.RunningMax(_in, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RunningSum",
  ["in", "numsamp"],
  sl.annotateFunction(function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  }, ["in", "numsamp"]),
  "{ :in :numsamp | <primitive: return sc.RunningSum(_in, _numsamp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RunningSum",
  ["in", "numsamp"],
  sl.annotateFunction(function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  }, ["in", "numsamp"]),
  "{ :in :numsamp | <primitive: return sc.RunningSum(_in, _numsamp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 | <primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 | <primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sanitize",
  ["in", "replace"],
  sl.annotateFunction(function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sanitize(_in, _replace);
  }, ["in", "replace"]),
  "{ :in :replace | <primitive: return sc.Sanitize(_in, _replace);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sanitize",
  ["in", "replace"],
  sl.annotateFunction(function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sanitize(_in, _replace);
  }, ["in", "replace"]),
  "{ :in :replace | <primitive: return sc.Sanitize(_in, _replace);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Schmidt",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Schmidt(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Schmidt",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Schmidt(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Slew",
  ["in", "up", "dn"],
  sl.annotateFunction(function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slew(_in, _up, _dn);
  }, ["in", "up", "dn"]),
  "{ :in :up :dn | <primitive: return sc.Slew(_in, _up, _dn);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Slew",
  ["in", "up", "dn"],
  sl.annotateFunction(function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slew(_in, _up, _dn);
  }, ["in", "up", "dn"]),
  "{ :in :up :dn | <primitive: return sc.Slew(_in, _up, _dn);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Slope",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slope(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Slope(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Slope",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slope(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Slope(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Spring",
  ["in", "spring", "damp"],
  sl.annotateFunction(function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  }, ["in", "spring", "damp"]),
  "{ :in :spring :damp | <primitive: return sc.Spring(_in, _spring, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Spring",
  ["in", "spring", "damp"],
  sl.annotateFunction(function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  }, ["in", "spring", "damp"]),
  "{ :in :spring :damp | <primitive: return sc.Spring(_in, _spring, _damp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TDelay",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDelay(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.TDelay(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TDelay",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDelay(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.TDelay(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Trig",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.Trig(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Trig",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.Trig(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Trig1",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig1(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.Trig1(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Trig1",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig1(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur | <primitive: return sc.Trig1(_in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TwoPole",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius | <primitive: return sc.TwoPole(_in, _freq, _radius);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TwoPole",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius | <primitive: return sc.TwoPole(_in, _freq, _radius);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TwoZero",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius | <primitive: return sc.TwoZero(_in, _freq, _radius);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TwoZero",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius | <primitive: return sc.TwoZero(_in, _freq, _radius);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TwIndex",
  ["input", "normalize", "array"],
  sl.annotateFunction(function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  }, ["input", "normalize", "array"]),
  "{ :input :normalize :array | <primitive: return sc.TwIndex(_input, _normalize, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TwIndex",
  ["input", "normalize", "array"],
  sl.annotateFunction(function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  }, ["input", "normalize", "array"]),
  "{ :input :normalize :array | <primitive: return sc.TwIndex(_input, _normalize, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "XFade2",
  ["inA", "inB", "pan", "level"],
  sl.annotateFunction(function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  }, ["inA", "inB", "pan", "level"]),
  "{ :inA :inB :pan :level | <primitive: return sc.XFade2(_inA, _inB, _pan, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "XFade2",
  ["inA", "inB", "pan", "level"],
  sl.annotateFunction(function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  }, ["inA", "inB", "pan", "level"]),
  "{ :inA :inB :pan :level | <primitive: return sc.XFade2(_inA, _inB, _pan, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ZeroCrossing",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ZeroCrossing(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.ZeroCrossing(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ZeroCrossing",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ZeroCrossing(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.ZeroCrossing(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MulAdd",
  ["in", "mul", "add"],
  sl.annotateFunction(function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  }, ["in", "mul", "add"]),
  "{ :in :mul :add | <primitive: return sc.MulAdd(_in, _mul, _add);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MulAdd",
  ["in", "mul", "add"],
  sl.annotateFunction(function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  }, ["in", "mul", "add"]),
  "{ :in :mul :add | <primitive: return sc.MulAdd(_in, _mul, _add);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Clip",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Clip(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  sl.annotateFunction(function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  }, ["in", "srclo", "srchi", "dstlo", "dsthi"]),
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  sl.annotateFunction(function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  }, ["in", "srclo", "srchi", "dstlo", "dsthi"]),
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LinExp",
  ["in", "srclo", "srchi", "dstlo", "dsthi"],
  sl.annotateFunction(function (_in, _srclo, _srchi, _dstlo, _dsthi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _in, _srclo, _srchi, _dstlo, _dsthi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);
  }, ["in", "srclo", "srchi", "dstlo", "dsthi"]),
  "{ :in :srclo :srchi :dstlo :dsthi | <primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  sl.annotateFunction(function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  }, ["in0", "in1", "in2", "in3"]),
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  sl.annotateFunction(function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  }, ["in0", "in1", "in2", "in3"]),
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sum4",
  ["in0", "in1", "in2", "in3"],
  sl.annotateFunction(function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  }, ["in0", "in1", "in2", "in3"]),
  "{ :in0 :in1 :in2 :in3 | <primitive: return sc.Sum4(_in0, _in1, _in2, _in3);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Wrap",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi | <primitive: return sc.Wrap(_in, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AmpComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp | <primitive: return sc.AmpComp(_freq, _root, _exp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AmpCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp | <primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm | <primitive: return sc.Blip(_freq, _numharm);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufDur(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufFrames(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufRateScale(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum | <primitive: return sc.BufSampleRate(_bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufWr",
  ["bufnum", "phase", "loop", "inputList"],
  sl.annotateFunction(function (_bufnum, _phase, _loop, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _bufnum, _phase, _loop, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufWr(_bufnum, _phase, _loop, _inputList);
  }, ["bufnum", "phase", "loop", "inputList"]),
  "{ :bufnum :phase :loop :inputList | <primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ClearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf | <primitive: return sc.ClearBuf(_buf);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "CoinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in | <primitive: return sc.CoinGate(_prob, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam | <primitive: return sc.Crackle(_chaosParam);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "CuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspL(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "CuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi | <primitive: return sc.CuspN(_freq, _a, _b, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in | <primitive: return sc.Dc(_in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dbrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop | <primitive: return sc.Dbufrd(_bufnum, _phase, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop | <primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  sl.annotateFunction(function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  }, ["bufnum", "in", "octave"]),
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  sl.annotateFunction(function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  }, ["bufnum", "in", "octave"]),
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DegreeToKey",
  ["bufnum", "in", "octave"],
  sl.annotateFunction(function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  }, ["bufnum", "in", "octave"]),
  "{ :bufnum :in :octave | <primitive: return sc.DegreeToKey(_bufnum, _in, _octave);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DemandEnvGen",
  [
    "level",
    "dur",
    "shape",
    "curve",
    "gate",
    "reset",
    "levelScale",
    "levelBias",
    "timeScale",
    "doneAction",
  ],
  sl.annotateFunction(
    function (
      _level,
      _dur,
      _shape,
      _curve,
      _gate,
      _reset,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
    ) {
      /* ArityCheck */
      if (arguments.length !== 10) {
        const errorMessage =
          "Arity: expected 10, _level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.DemandEnvGen(
        _level,
        _dur,
        _shape,
        _curve,
        _gate,
        _reset,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
      );
    },
    [
      "level",
      "dur",
      "shape",
      "curve",
      "gate",
      "reset",
      "levelScale",
      "levelBias",
      "timeScale",
      "doneAction",
    ],
  ),
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction | <primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DemandEnvGen",
  [
    "level",
    "dur",
    "shape",
    "curve",
    "gate",
    "reset",
    "levelScale",
    "levelBias",
    "timeScale",
    "doneAction",
  ],
  sl.annotateFunction(
    function (
      _level,
      _dur,
      _shape,
      _curve,
      _gate,
      _reset,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
    ) {
      /* ArityCheck */
      if (arguments.length !== 10) {
        const errorMessage =
          "Arity: expected 10, _level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.DemandEnvGen(
        _level,
        _dur,
        _shape,
        _curve,
        _gate,
        _reset,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
      );
    },
    [
      "level",
      "dur",
      "shape",
      "curve",
      "gate",
      "reset",
      "levelScale",
      "levelBias",
      "timeScale",
      "doneAction",
    ],
  ),
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction | <primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DemandEnvGen",
  [
    "level",
    "dur",
    "shape",
    "curve",
    "gate",
    "reset",
    "levelScale",
    "levelBias",
    "timeScale",
    "doneAction",
  ],
  sl.annotateFunction(
    function (
      _level,
      _dur,
      _shape,
      _curve,
      _gate,
      _reset,
      _levelScale,
      _levelBias,
      _timeScale,
      _doneAction,
    ) {
      /* ArityCheck */
      if (arguments.length !== 10) {
        const errorMessage =
          "Arity: expected 10, _level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.DemandEnvGen(
        _level,
        _dur,
        _shape,
        _curve,
        _gate,
        _reset,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
      );
    },
    [
      "level",
      "dur",
      "shape",
      "curve",
      "gate",
      "reset",
      "levelScale",
      "levelBias",
      "timeScale",
      "doneAction",
    ],
  ),
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction | <primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input | <primitive: return sc.DetectIndex(_bufnum, _input);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in | <primitive: return sc.Ddup(_n, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length | <primitive: return sc.Dgeom(_start, _grow, _length);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step | <primitive: return sc.Dibrown(_length, _lo, _hi, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Diwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Drand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dseq(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dser(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step | <primitive: return sc.Dseries(_length, _start, _step);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dshuf(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DurationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |  <primitive: return sc.DurationGate(_dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density | <primitive: return sc.Dust2(_density);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.Duty(_dur, _reset, 0, _level);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi | <primitive: return sc.Dwhite(_length, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list | <primitive: return sc.Dwrand(_repeats, _weights, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list | <primitive: return sc.Dxrand(_repeats, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvGen(
        _gate,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
        _envelope,
      );
    },
    ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  ),
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvGen(
        _gate,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
        _envelope,
      );
    },
    ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  ),
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "EnvGen",
  ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.EnvGen(
        _gate,
        _levelScale,
        _levelBias,
        _timeScale,
        _doneAction,
        _envelope,
      );
    },
    ["gate", "levelScale", "levelBias", "timeScale", "doneAction", "envelope"],
  ),
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope | <primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "EnvTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew | <primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.ExpRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FbSineC",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FbSineL",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FbSineN",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FbSineN",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FbSineN",
  ["freq", "im", "fb", "a", "c", "xi", "yi"],
  sl.annotateFunction(function (_freq, _im, _fb, _a, _c, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _freq, _im, _fb, _a, _c, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);
  }, ["freq", "im", "fb", "a", "c", "xi", "yi"]),
  "{ :freq :im :fb :a :c :xi :yi | <primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  sl.annotateFunction(
    function (_buffer, _in, _hop, _wintype, _active, _winsize) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
    },
    ["buffer", "in", "hop", "wintype", "active", "winsize"],
  ),
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  sl.annotateFunction(
    function (_buffer, _in, _hop, _wintype, _active, _winsize) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
    },
    ["buffer", "in", "hop", "wintype", "active", "winsize"],
  ),
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Fft",
  ["buffer", "in", "hop", "wintype", "active", "winsize"],
  sl.annotateFunction(
    function (_buffer, _in, _hop, _wintype, _active, _winsize) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _buffer, _in, _hop, _wintype, _active, _winsize";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);
    },
    ["buffer", "in", "hop", "wintype", "active", "winsize"],
  ),
  "{ :buffer :in :hop :wintype :active :winsize | <primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.FSinOsc(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq | <primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FreeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src | <primitive: return sc.FreeSelfWhenDone(_src);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "GbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanN(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "GbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanL(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "GbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanL(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "GbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi | <primitive: return sc.GbmanL(_freq, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c | <primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum | <primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "HenonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 | <primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize | <primitive: return sc.Ifft(_buffer, _wintype, _winsize);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "IRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.IRand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.Impulse(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Index",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.Index(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "IndexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.IndexInBetween(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  sl.annotateFunction(function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  }, ["keycode", "minval", "maxval", "lag"]),
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  sl.annotateFunction(function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  }, ["keycode", "minval", "maxval", "lag"]),
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "KeyState",
  ["keycode", "minval", "maxval", "lag"],
  sl.annotateFunction(function (_keycode, _minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _keycode, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyState(_keycode, _minval, _maxval, _lag);
  }, ["keycode", "minval", "maxval", "lag"]),
  "{ :keycode :minval :maxval :lag | <primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  sl.annotateFunction(
    function (_freqscale, _freqoffset, _specificationsListRef) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage =
          "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
    },
    ["freqscale", "freqoffset", "specificationsListRef"],
  ),
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  sl.annotateFunction(
    function (_freqscale, _freqoffset, _specificationsListRef) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage =
          "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
    },
    ["freqscale", "freqoffset", "specificationsListRef"],
  ),
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Klang",
  ["freqscale", "freqoffset", "specificationsListRef"],
  sl.annotateFunction(
    function (_freqscale, _freqoffset, _specificationsListRef) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage =
          "Arity: expected 3, _freqscale, _freqoffset, _specificationsListRef";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);
    },
    ["freqscale", "freqoffset", "specificationsListRef"],
  ),
  "{ :freqscale :freqoffset :specificationsListRef | <primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfCub(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdClipNoise(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfdNoise3(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  sl.annotateFunction(
    function (_duration, _width, _iphase, _loop, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
    },
    ["duration", "width", "iphase", "loop", "doneAction"],
  ),
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  sl.annotateFunction(
    function (_duration, _width, _iphase, _loop, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
    },
    ["duration", "width", "iphase", "loop", "doneAction"],
  ),
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfGauss",
  ["duration", "width", "iphase", "loop", "doneAction"],
  sl.annotateFunction(
    function (_duration, _width, _iphase, _loop, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _duration, _width, _iphase, _loop, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);
    },
    ["duration", "width", "iphase", "loop", "doneAction"],
  ),
  "{ :duration :width :iphase :loop :doneAction | <primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise0(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise1(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.LfNoise2(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfPar(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.LfPulse(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfSaw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.LfTri(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LatoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LatoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LatoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LatoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LatoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LatoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LatoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi | <primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LinCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi | <primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax | <primitive: return sc.LinRand(_lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  sl.annotateFunction(
    function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
    },
    ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  ),
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  sl.annotateFunction(
    function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
    },
    ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  ),
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Linen",
  ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  sl.annotateFunction(
    function (_gate, _attackTime, _susLevel, _releaseTime, _doneAction) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _gate, _attackTime, _susLevel, _releaseTime, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);
    },
    ["gate", "attackTime", "susLevel", "releaseTime", "doneAction"],
  ),
  "{ :gate :attackTime :susLevel :releaseTime :doneAction | <primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList | <primitive: return sc.LocalOut(_channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init | <primitive: return sc.Logistic(_chaosParam, _freq, _init);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  sl.annotateFunction(function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  }, ["freq", "s", "r", "b", "h", "xi", "yi", "zi"]),
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  sl.annotateFunction(function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  }, ["freq", "s", "r", "b", "h", "xi", "yi", "zi"]),
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LorenzL",
  ["freq", "s", "r", "b", "h", "xi", "yi", "zi"],
  sl.annotateFunction(function (_freq, _s, _r, _b, _h, _xi, _yi, _zi) {
    /* ArityCheck */
    if (arguments.length !== 8) {
      const errorMessage =
        "Arity: expected 8, _freq, _s, _r, _b, _h, _xi, _yi, _zi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);
  }, ["freq", "s", "r", "b", "h", "xi", "yi", "zi"]),
  "{ :freq :s :r :b :h :xi :yi :zi | <primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Median",
  ["length", "in"],
  sl.annotateFunction(function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Median(_length, _in);
  }, ["length", "in"]),
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Median",
  ["length", "in"],
  sl.annotateFunction(function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Median(_length, _in);
  }, ["length", "in"]),
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Median",
  ["length", "in"],
  sl.annotateFunction(function (_length, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _length, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Median(_length, _in);
  }, ["length", "in"]),
  "{ :length :in | <primitive: return sc.Median(_length, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  sl.annotateFunction(function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  }, ["x", "y", "mod"]),
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  sl.annotateFunction(function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  }, ["x", "y", "mod"]),
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ModDif",
  ["x", "y", "mod"],
  sl.annotateFunction(function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  }, ["x", "y", "mod"]),
  "{ :x :y :mod | <primitive: return sc.ModDif(_x, _y, _mod);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag | <primitive: return sc.MouseButton(_minval, _maxval, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag | <primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList | <primitive: return sc.Multiplexer(_selector, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "NRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n | <primitive: return sc.NRand(_lo, _hi, _n);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "OffsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.OffsetOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase | <primitive: return sc.Osc(_bufnum, _freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.Out(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig | <primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig | <primitive: return sc.PvDiffuser(_buffer, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig | <primitive: return sc.PvRandComb(_buffer, _wipe, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  sl.annotateFunction(function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  }, ["trig", "rate", "start", "end", "resetPos"]),
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  sl.annotateFunction(function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  }, ["trig", "rate", "start", "end", "resetPos"]),
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Phasor",
  ["trig", "rate", "start", "end", "resetPos"],
  sl.annotateFunction(function (_trig, _rate, _start, _end, _resetPos) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _trig, _rate, _start, _end, _resetPos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Phasor(_trig, _rate, _start, _end, _resetPos);
  }, ["trig", "rate", "start", "end", "resetPos"]),
  "{ :trig :rate :start :end :resetPos | <primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width | <primitive: return sc.Pulse(_freq, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.PulseCount(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start | <primitive: return sc.PulseDivider(_trig, _div, _start);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "QuadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "QuadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi | <primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi | <primitive: return sc.Rand(_lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList | <primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ReplaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList | <primitive: return sc.ReplaceOut(_bus, _channelsList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos | <primitive: return sc.Rotate2(_x, _y, _pos);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SamplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn | <primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq | <primitive: return sc.Saw(_freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase | <primitive: return sc.SawDpw(_freq, _iphase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Select",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Select",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Select",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array | <primitive: return sc.Select(_which, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SetResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset | <primitive: return sc.SetResetFf(_trig, _reset);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase | <primitive: return sc.SinOsc(_freq, _phase);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback | <primitive: return sc.SinOscFb(_freq, _feedback);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "StandardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardL(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "StandardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi | <primitive: return sc.StandardN(_freq, _k, _xi, _yi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  sl.annotateFunction(function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  }, ["trig", "reset", "min", "max", "step", "resetval"]),
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  sl.annotateFunction(function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  }, ["trig", "reset", "min", "max", "step", "resetval"]),
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Stepper",
  ["trig", "reset", "min", "max", "step", "resetval"],
  sl.annotateFunction(function (_trig, _reset, _min, _max, _step, _resetval) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _trig, _reset, _min, _max, _step, _resetval";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);
  }, ["trig", "reset", "min", "max", "step", "resetval"]),
  "{ :trig :reset :min :max :step :resetval | <primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate | <primitive: return sc.Sweep(_trig, _rate);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SyncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq | <primitive: return sc.SyncSaw(_syncFreq, _sawFreq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  sl.annotateFunction(function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  }, ["trig", "bufnum"]),
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  sl.annotateFunction(function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  }, ["trig", "bufnum"]),
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TableRand",
  ["trig", "bufnum"],
  sl.annotateFunction(function (_trig, _bufnum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  }, ["trig", "bufnum"]),
  "{ :trig :bufnum | <primitive: return sc.TableRand(_trig, _bufnum);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level | <primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TExpRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TiRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig | <primitive: return sc.TRand(_lo, _hi, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.Timer(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ToggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig | <primitive: return sc.ToggleFf(_trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "VarSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width | <primitive: return sc.VarSaw(_freq, _iphase, _width);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig | <primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "WrapIndex",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in | <primitive: return sc.WrapIndex(_bufnum, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MaxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count | <primitive: return sc.MaxLocalBufs(_count);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SetBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array | <primitive: return sc.SetBuf(_buf, _offset, _length, _array);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BufRd",
  ["numChan", "bufnum", "phase", "loop", "interpolation"],
  sl.annotateFunction(
    function (_numChan, _bufnum, _phase, _loop, _interpolation) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _numChan, _bufnum, _phase, _loop, _interpolation";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);
    },
    ["numChan", "bufnum", "phase", "loop", "interpolation"],
  ),
  "{ :numChan :bufnum :phase :loop :interpolation | <primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DecodeB2",
  ["numChan", "w", "x", "y", "orientation"],
  sl.annotateFunction(function (_numChan, _w, _x, _y, _orientation) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _numChan, _w, _x, _y, _orientation";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);
  }, ["numChan", "w", "x", "y", "orientation"]),
  "{ :numChan :w :x :y :orientation | <primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Demultiplexer",
  ["numChannels", "input", "selector"],
  sl.annotateFunction(function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  }, ["numChannels", "input", "selector"]),
  "{ :numChannels :input :selector | <primitive: return sc.Demultiplexer(_numChannels, _input, _selector);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains | <primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains | <primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "GrainSin",
  ["numChan", "trigger", "dur", "freq", "pan", "envbufnum", "maxGrains"],
  sl.annotateFunction(
    function (_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["numChan", "trigger", "dur", "freq", "pan", "envbufnum", "maxGrains"],
  ),
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains | <primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "In",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.In(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus | <primitive: return sc.In(_numChan, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "InFeedback",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus | <primitive: return sc.InFeedback(_numChan, _bus);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalBuf",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames | <primitive: return sc.LocalBuf(_numChannels, _numFrames);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LocalIn",
  ["numChan", "default"],
  sl.annotateFunction(function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalIn(_numChan, _default);
  }, ["numChan", "default"]),
  "{ :numChan :default | <primitive: return sc.LocalIn(_numChan, _default);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PanAz",
  ["numChan", "in", "pos", "level", "width", "orientation"],
  sl.annotateFunction(
    function (_numChan, _in, _pos, _level, _width, _orientation) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _numChan, _in, _pos, _level, _width, _orientation";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);
    },
    ["numChan", "in", "pos", "level", "width", "orientation"],
  ),
  "{ :numChan :in :pos :level :width :orientation | <primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "PlayBuf",
  ["numChan", "bufnum", "rate", "trigger", "startPos", "loop", "doneAction"],
  sl.annotateFunction(
    function (
      _numChan,
      _bufnum,
      _rate,
      _trigger,
      _startPos,
      _loop,
      _doneAction,
    ) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["numChan", "bufnum", "rate", "trigger", "startPos", "loop", "doneAction"],
  ),
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction | <primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp | <primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp | <primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dswitch",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch(_index, _list);
  }, ["index", "list"]),
  "{ :index :list | <primitive: return sc.Dswitch(_index, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dswitch1",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch1(_index, _list);
  }, ["index", "list"]),
  "{ :index :list | <primitive: return sc.Dswitch1(_index, _list);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AnalogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp | <primitive: return sc.AnalogFoldOsc(_freq, _amp);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  sl.annotateFunction(function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  }, ["haltAfter", "dx", "freq", "phase", "param"]),
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  sl.annotateFunction(function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  }, ["haltAfter", "dx", "freq", "phase", "param"]),
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Bezier",
  ["haltAfter", "dx", "freq", "phase", "param"],
  sl.annotateFunction(function (_haltAfter, _dx, _freq, _phase, _param) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _haltAfter, _dx, _freq, _phase, _param";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);
  }, ["haltAfter", "dx", "freq", "phase", "param"]),
  "{ :haltAfter :dx :freq :phase :param | <primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CrossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth | <primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  sl.annotateFunction(
    function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
    },
    ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  ),
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  sl.annotateFunction(
    function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
    },
    ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  ),
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dfm1",
  ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  sl.annotateFunction(
    function (_in, _freq, _res, _inputgain, _type, _noiselevel) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _freq, _res, _inputgain, _type, _noiselevel";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);
    },
    ["in", "freq", "res", "inputgain", "type", "noiselevel"],
  ),
  "{ :in :freq :res :inputgain :type :noiselevel | <primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  sl.annotateFunction(
    function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
      /* ArityCheck */
      if (arguments.length !== 9) {
        const errorMessage =
          "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  ),
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  sl.annotateFunction(
    function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
      /* ArityCheck */
      if (arguments.length !== 9) {
        const errorMessage =
          "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  ),
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DwgPluckedStiff",
  ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  sl.annotateFunction(
    function (_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB) {
      /* ArityCheck */
      if (arguments.length !== 9) {
        const errorMessage =
          "Arity: expected 9, _freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["freq", "amp", "gate", "pos", "c1", "c3", "inp", "release", "fB"],
  ),
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB | <primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax | <primitive: return sc.DustRange(_iotMin, _iotMax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  sl.annotateFunction(
    function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  ),
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  sl.annotateFunction(
    function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  ),
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dx7",
  ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  sl.annotateFunction(
    function (_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc";
        throw new Error(errorMessage);
      } /* Primitive */
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
    ["bufnum", "on", "off", "data", "vc", "mnn", "vel", "pw", "mw", "bc", "fc"],
  ),
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc | <primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  sl.annotateFunction(
    function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dx7Env(
        _gate,
        _data,
        _r1,
        _r2,
        _r3,
        _r4,
        _l1,
        _l2,
        _l3,
        _l4,
        _ol,
      );
    },
    ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  ),
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  sl.annotateFunction(
    function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dx7Env(
        _gate,
        _data,
        _r1,
        _r2,
        _r3,
        _r4,
        _l1,
        _l2,
        _l3,
        _l4,
        _ol,
      );
    },
    ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  ),
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Dx7Env",
  ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  sl.annotateFunction(
    function (_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Dx7Env(
        _gate,
        _data,
        _r1,
        _r2,
        _r3,
        _r4,
        _l1,
        _l2,
        _l3,
        _l4,
        _ol,
      );
    },
    ["gate", "data", "r1", "r2", "r3", "r4", "l1", "l2", "l3", "l4", "ol"],
  ),
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol | <primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ExpRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.ExpRandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix | <primitive: return sc.Fm7(_ctlMatrix, _modMatrix);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops | <primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  sl.annotateFunction(
    function (_in, _friction, _spring, _damp, _mass, _beltmass) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
    },
    ["in", "friction", "spring", "damp", "mass", "beltmass"],
  ),
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  sl.annotateFunction(
    function (_in, _friction, _spring, _damp, _mass, _beltmass) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
    },
    ["in", "friction", "spring", "damp", "mass", "beltmass"],
  ),
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Friction",
  ["in", "friction", "spring", "damp", "mass", "beltmass"],
  sl.annotateFunction(
    function (_in, _friction, _spring, _damp, _mass, _beltmass) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _friction, _spring, _damp, _mass, _beltmass";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);
    },
    ["in", "friction", "spring", "damp", "mass", "beltmass"],
  ),
  "{ :in :friction :spring :damp :mass :beltmass | <primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size | <primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist | <primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax | <primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MembraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss | <primitive: return sc.MembraneCircle(_excitation, _tension, _loss);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws | <primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList | <primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass | <primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MoogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res | <primitive: return sc.MoogLadder(_in, _ffreq, _res);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  sl.annotateFunction(
    function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.ObxdFilter(
        _in,
        _cutoff,
        _resonance,
        _multimode,
        _bandpass,
        _fourpole,
      );
    },
    ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  ),
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  sl.annotateFunction(
    function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.ObxdFilter(
        _in,
        _cutoff,
        _resonance,
        _multimode,
        _bandpass,
        _fourpole,
      );
    },
    ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  ),
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ObxdFilter",
  ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  sl.annotateFunction(
    function (_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _in, _cutoff, _resonance, _multimode, _bandpass, _fourpole";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.ObxdFilter(
        _in,
        _cutoff,
        _resonance,
        _multimode,
        _bandpass,
        _fourpole,
      );
    },
    ["in", "cutoff", "resonance", "multimode", "bandpass", "fourpole"],
  ),
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole | <primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z | <primitive: return sc.Perlin3(_x, _y, _z);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
    [
      "clock",
      "rotate",
      "reset",
      "div",
      "spread",
      "auto",
      "len",
      "down",
      "gates",
    ],
  ),
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
    [
      "clock",
      "rotate",
      "reset",
      "div",
      "spread",
      "auto",
      "len",
      "down",
      "gates",
    ],
  ),
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Rcd",
  ["clock", "rotate", "reset", "div", "spread", "auto", "len", "down", "gates"],
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
    [
      "clock",
      "rotate",
      "reset",
      "div",
      "spread",
      "auto",
      "len",
      "down",
      "gates",
    ],
  ),
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates | <primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi | <primitive: return sc.RandN(_numChan, _lo, _hi);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  sl.annotateFunction(
    function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
    },
    ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  ),
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  sl.annotateFunction(
    function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
    },
    ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  ),
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Scm",
  ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  sl.annotateFunction(
    function (_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);
    },
    ["clock", "bpm", "rotate", "slip", "shuffle", "skip", "pw"],
  ),
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw | <primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta | <primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq | <primitive: return sc.SinGrain(_trigger, _dur, _freq);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.extendTypeOrTraitWithMethod(
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
  sl.annotateFunction(
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
        throw new Error(errorMessage);
      } /* Primitive */
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
  ),
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak | <primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SvfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfBp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SvfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfHp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SvfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q | <primitive: return sc.SvfLp(_in, _freq, _q);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger | <primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs | <primitive: return sc.TScramble(_trigger, _inputs);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  sl.annotateFunction(function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  }, ["numChannels", "algorithm", "in", "dur"]),
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  sl.annotateFunction(function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  }, ["numChannels", "algorithm", "in", "dur"]),
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TrigAllocator",
  ["numChannels", "algorithm", "in", "dur"],
  sl.annotateFunction(function (_numChannels, _algorithm, _in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _numChannels, _algorithm, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);
  }, ["numChannels", "algorithm", "in", "dur"]),
  "{ :numChannels :algorithm :in :dur | <primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TrigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in | <primitive: return sc.TrigRoundRobin(_numChannels, _in);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  sl.annotateFunction(function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  }, ["in", "decay", "damping", "inputbw", "erfl", "tail"]),
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  sl.annotateFunction(function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  }, ["in", "decay", "damping", "inputbw", "erfl", "tail"]),
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "VbJonVerb",
  ["in", "decay", "damping", "inputbw", "erfl", "tail"],
  sl.annotateFunction(function (_in, _decay, _damping, _inputbw, _erfl, _tail) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _in, _decay, _damping, _inputbw, _erfl, _tail";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);
  }, ["in", "decay", "damping", "inputbw", "erfl", "tail"]),
  "{ :in :decay :damping :inputbw :erfl :tail | <primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay | <primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "WaveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode | <primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  }, ["gate", "x", "y", "z", "coordinateList"]),
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  }, ["gate", "x", "y", "z", "coordinateList"]),
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "WDistances",
  ["gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(function (_gate, _x, _y, _z, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _gate, _x, _y, _z, _coordinateList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WDistances(_gate, _x, _y, _z, _coordinateList);
  }, ["gate", "x", "y", "z", "coordinateList"]),
  "{ :gate :x :y :z :coordinateList | <primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(
    function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
    },
    ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  ),
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(
    function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
    },
    ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  ),
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "WkNearest",
  ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  sl.annotateFunction(
    function (_numChannels, _gate, _x, _y, _z, _coordinateList) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _numChannels, _gate, _x, _y, _z, _coordinateList";
        throw new Error(errorMessage);
      } /* Primitive */
      return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);
    },
    ["numChannels", "gate", "x", "y", "z", "coordinateList"],
  ),
  "{ :numChannels :gate :x :y :z :coordinateList | <primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Neg(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Neg(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Neg(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Neg(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Squared(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Squared(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Squared(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Squared(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cubed(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cubed(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cubed(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cubed(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Recip(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Recip(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Recip(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Recip(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MidiCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiCps(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.MidiCps(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MidiCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiCps(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.MidiCps(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "CpsMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CpsMidi(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.CpsMidi(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "CpsMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CpsMidi(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.CpsMidi(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "MidiRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiRatio(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.MidiRatio(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "MidiRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiRatio(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.MidiRatio(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RatioMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RatioMidi(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.RatioMidi(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RatioMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RatioMidi(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.RatioMidi(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DbAmp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DbAmp(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.DbAmp(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DbAmp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DbAmp(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.DbAmp(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AmpDb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpDb(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.AmpDb(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AmpDb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpDb(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.AmpDb(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Distort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Distort(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Distort(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Distort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Distort(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Distort(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SoftClip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SoftClip(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.SoftClip(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SoftClip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SoftClip(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.SoftClip(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Abs(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Abs(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Abs(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Abs(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ceil(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ceil(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ceil(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Ceil(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Floor(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Floor(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Floor(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Floor(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Frac(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Frac(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Frac(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Frac(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sign(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sign(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sign(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sign(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sqrt(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sqrt(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sqrt(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sqrt(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Exp(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Exp(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Exp(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Exp(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log2(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log2(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log2(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log2(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log10(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log10(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log10(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Log10(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ArcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcSin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcSin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ArcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcSin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcSin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ArcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcCos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcCos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ArcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcCos(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcCos(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ArcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcTan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ArcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcTan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ArcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcTan(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.ArcTan(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sinh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Cosh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Tanh(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BiLinRand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BiLinRand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BiLinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BiLinRand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.BiLinRand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand_(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand_(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand_(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.LinRand_(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum3Rand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum3Rand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Sum3Rand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum3Rand(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Sum3Rand(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Coin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Coin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Coin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Coin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Coin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Coin(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.Coin(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "HanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HanWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.HanWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "HanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HanWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.HanWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "HanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HanWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.HanWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "WelchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WelchWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.WelchWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "WelchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WelchWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.WelchWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "WelchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WelchWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.WelchWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TriWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TriWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.TriWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TriWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TriWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.TriWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TriWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TriWindow(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.TriWindow(_self);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Add(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Add(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Add(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Add(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Minus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sub(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Minus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sub(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Minus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sub(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Sub(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mul(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mul(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mul(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mul(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Idiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Idiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Idiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Idiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fdiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fdiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fdiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fdiv(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mod(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mod(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mod(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Mod(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Eq(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Eq(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Eq(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Eq(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Eq(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Eq(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Unequal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ne(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Unequal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ne(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Unequal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ne(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ne(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LessThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LessThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LessThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "GreaterThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "GreaterThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "GreaterThan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gt(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "LessThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Le(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "LessThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Le(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "LessThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Le(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Le(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "GreaterThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ge(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "GreaterThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ge(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "GreaterThanOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ge(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ge(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Min(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Min(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Min(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Min(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Max(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Max(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Max(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Max(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitAnd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitAnd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitAnd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitAnd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitOr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitOr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "BitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitOr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.BitOr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lcm(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lcm(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Lcm",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lcm(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Lcm(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gcd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gcd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Gcd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gcd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Gcd(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RoundTo(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RoundTo(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RoundTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RoundTo(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RoundTo(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "TruncateTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trunc(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "TruncateTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trunc(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "TruncateTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trunc(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Trunc(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Atan2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Atan2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Atan2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Atan2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Hypotenuse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hypot(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Hypotenuse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hypot(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Hypotenuse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hypot(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Hypot(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Power",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Power",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Power",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Pow(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ShiftLeft",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftLeft(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ShiftRight",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ShiftRight(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmClip(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmClip(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AmClip",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmClip(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AmClip(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ScaleNeg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ScaleNeg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Clip2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Clip2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Fold2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Fold2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Wrap2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Wrap2(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Excess(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Excess(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Excess",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Excess(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Excess(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "Ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.Ring1(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "DifSqr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DifSqr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.DifSqr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "DifSqr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DifSqr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.DifSqr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "DifSqr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DifSqr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.DifSqr(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AbsDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AbsDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "AbsDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AbsDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.AbsDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SqrDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SqrDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "SqrDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SqrDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.SqrDif(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "FirstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.FirstArg(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "RandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.RandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ExpRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return sc.ExpRandRange(_self, _anObject);> }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bitShiftLeft",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ShiftLeft_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ShiftLeft(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bitShiftRight",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ShiftRight_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ShiftRight(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "IntegerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TruncateTo_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tTruncateTo(self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RoundTo_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tRoundTo(self, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "UnitCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MidiCps_1(_asterisk_2(_self, 100));
  }, ["self"]),
  "{ :self |\n\t\t(self * 100).MidiCps\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Negate_1(_self);
  }, ["self"]),
  "{ :self | Negate(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "circumflexAccent",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Power_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Power(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plus_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Plus(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Times_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Times(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Minus_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Minus(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Divide_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Divide(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "solidusSolidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quotient_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Quotient(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Mod_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Mod(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Equal_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Equal(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "exclamationMarkEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Unequal_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | Unequal(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _LessThan_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | LessThan(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _GreaterThan_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | GreaterThan(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _LessThanOrEqual_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | LessThanOrEqual(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _GreaterThanOrEqual_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | GreaterThanOrEqual(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ShiftLeft_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ShiftLeft(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ShiftRight_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ShiftRight(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AbsDif",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Abs_1(_hyphenMinus_2(_self, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self - aNumber).Abs\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "AmClip",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_aNumber, _zero_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(aNumber <= self.zero).if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself * aNumber\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Gcd",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isNegative_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isNegative_1(_aNumber);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_gcd_2(_negate_1(_self), _negate_1(_aNumber)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gcd_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(\n\t\t\tself.isNegative & {\n\t\t\t\taNumber.isNegative\n\t\t\t}\n\t\t).if {\n\t\t\tself.negate.gcd(aNumber.negate).negate\n\t\t} {\n\t\t\tself.gcd(aNumber)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Lcm",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isNegative_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isNegative_1(_aNumber);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_lcm_2(_abs_1(_self), _abs_1(_aNumber)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lcm_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(\n\t\t\tself.isNegative | {\n\t\t\t\taNumber.isNegative\n\t\t\t}\n\t\t).if {\n\t\t\tself.abs.lcm(aNumber.abs).negate\n\t\t} {\n\t\t\tself.lcm(aNumber)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "Sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_sqrt_1(_negate_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sqrt_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tself.negate.sqrt.negate\n\t\t} {\n\t\t\tself.sqrt\n\t\t}\n\t}",
);
