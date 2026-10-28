/*  Requires: Ugen  */

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "blockSize",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BlockSize();
  }, []),
  "{\n\t\t<primitive: return sc.BlockSize();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "brownNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BrownNoise();
  }, []),
  "{\n\t\t<primitive: return sc.BrownNoise();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "clipNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClipNoise();
  }, []),
  "{\n\t\t<primitive: return sc.ClipNoise();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "controlDur",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlDur();
  }, []),
  "{\n\t\t<primitive: return sc.ControlDur();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "controlRate",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ControlRate();
  }, []),
  "{\n\t\t<primitive: return sc.ControlRate();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "greyNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GrayNoise();
  }, []),
  "{\n\t\t<primitive: return sc.GrayNoise();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "numOutputBuses",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NumOutputBuses();
  }, []),
  "{\n\t\t<primitive: return sc.NumOutputBuses();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "pinkNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PinkNoise();
  }, []),
  "{\n\t\t<primitive: return sc.PinkNoise();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "radiansPerSample",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RadiansPerSample();
  }, []),
  "{\n\t\t<primitive: return sc.RadiansPerSample();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "sampleDur",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SampleDur();
  }, []),
  "{\n\t\t<primitive: return sc.SampleDur();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "sampleRate",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SampleRate();
  }, []),
  "{\n\t\t<primitive: return sc.SampleRate();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UgenBindings",
  "whiteNoise",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WhiteNoise();
  }, []),
  "{\n\t\t<primitive: return sc.WhiteNoise();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "a2K",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.A2K(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.A2K(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "a2K",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.A2K(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.A2K(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "allpassC",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "allpassC",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassC(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "allpassL",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "allpassL",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassL(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "allpassN",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "allpassN",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.AllpassN(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "amplitude",
  ["in", "attackTime", "releaseTime"],
  sl.annotateFunction(function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  }, ["in", "attackTime", "releaseTime"]),
  "{ :in :attackTime :releaseTime |\n\t\t<primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "amplitude",
  ["in", "attackTime", "releaseTime"],
  sl.annotateFunction(function (_in, _attackTime, _releaseTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _releaseTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Amplitude(_in, _attackTime, _releaseTime);
  }, ["in", "attackTime", "releaseTime"]),
  "{ :in :attackTime :releaseTime |\n\t\t<primitive: return sc.Amplitude(_in, _attackTime, _releaseTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "apf",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Apf(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.Apf(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "apf",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Apf(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.Apf(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bAllPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BAllPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BAllPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bAllPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BAllPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BAllPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bBandPass",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw |\n\t\t<primitive: return sc.BBandPass(_in, _freq, _bw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bBandPass",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandPass(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw |\n\t\t<primitive: return sc.BBandPass(_in, _freq, _bw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bBandStop",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw |\n\t\t<primitive: return sc.BBandStop(_in, _freq, _bw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bBandStop",
  ["in", "freq", "bw"],
  sl.annotateFunction(function (_in, _freq, _bw) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bw";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BBandStop(_in, _freq, _bw);
  }, ["in", "freq", "bw"]),
  "{ :in :freq :bw |\n\t\t<primitive: return sc.BBandStop(_in, _freq, _bw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bHiPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BHiPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bHiPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BHiPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bHiShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db |\n\t\t<primitive: return sc.BHiShelf(_in, _freq, _rs, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bHiShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BHiShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db |\n\t\t<primitive: return sc.BHiShelf(_in, _freq, _rs, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bLowPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BLowPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bLowPass",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowPass(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.BLowPass(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bLowShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db |\n\t\t<primitive: return sc.BLowShelf(_in, _freq, _rs, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bLowShelf",
  ["in", "freq", "rs", "db"],
  sl.annotateFunction(function (_in, _freq, _rs, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rs, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BLowShelf(_in, _freq, _rs, _db);
  }, ["in", "freq", "rs", "db"]),
  "{ :in :freq :rs :db |\n\t\t<primitive: return sc.BLowShelf(_in, _freq, _rs, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bMoog",
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
  "{ :in :freq :q :mode :saturation |\n\t\t<primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bMoog",
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
  "{ :in :freq :q :mode :saturation |\n\t\t<primitive: return sc.BMoog(_in, _freq, _q, _mode, _saturation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bPeakEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db |\n\t\t<primitive: return sc.BPeakEq(_in, _freq, _rq, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bPeakEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BPeakEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db |\n\t\t<primitive: return sc.BPeakEq(_in, _freq, _rq, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "balance2",
  ["left", "right", "pos", "level"],
  sl.annotateFunction(function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  }, ["left", "right", "pos", "level"]),
  "{ :left :right :pos :level |\n\t\t<primitive: return sc.Balance2(_left, _right, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "balance2",
  ["left", "right", "pos", "level"],
  sl.annotateFunction(function (_left, _right, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _left, _right, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Balance2(_left, _right, _pos, _level);
  }, ["left", "right", "pos", "level"]),
  "{ :left :right :pos :level |\n\t\t<primitive: return sc.Balance2(_left, _right, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bfDecode1",
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
  "{ :w :x :y :z :azimuth :elevation :wComp |\n\t\t<primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bfDecode1",
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
  "{ :w :x :y :z :azimuth :elevation :wComp |\n\t\t<primitive: return sc.BfDecode1(_w, _x, _y, _z, _azimuth, _elevation, _wComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bfEncode1",
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
  "{ :input :azimuth :elevation :rho :gain :wComp |\n\t\t<primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bfEncode1",
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
  "{ :input :azimuth :elevation :rho :gain :wComp |\n\t\t<primitive: return sc.BfEncode1(_input, _azimuth, _elevation, _rho, _gain, _wComp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Bpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Bpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Bpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Bpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Bpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "brf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Brf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "brf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Brf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "brz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Brz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "brz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Brz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Brz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "combC",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "combC",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombC(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "combL",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "combL",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombL(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "combN",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "combN",
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
  "{ :in :maxdelaytime :delaytime :decaytime |\n\t\t<primitive: return sc.CombN(_in, _maxdelaytime, _delaytime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "compander",
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
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime |\n\t\t<primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "compander",
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
  "{ :in :control :thresh :slopeBelow :slopeAbove :clampTime :relaxTime |\n\t\t<primitive: return sc.Compander(_in, _control, _thresh, _slopeBelow, _slopeAbove, _clampTime, _relaxTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "convolution",
  ["in", "kernel", "framesize"],
  sl.annotateFunction(function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  }, ["in", "kernel", "framesize"]),
  "{ :in :kernel :framesize |\n\t\t<primitive: return sc.Convolution(_in, _kernel, _framesize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "convolution",
  ["in", "kernel", "framesize"],
  sl.annotateFunction(function (_in, _kernel, _framesize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _kernel, _framesize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Convolution(_in, _kernel, _framesize);
  }, ["in", "kernel", "framesize"]),
  "{ :in :kernel :framesize |\n\t\t<primitive: return sc.Convolution(_in, _kernel, _framesize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "decay",
  ["in", "decayTime"],
  sl.annotateFunction(function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay(_in, _decayTime);
  }, ["in", "decayTime"]),
  "{ :in :decayTime |\n\t\t<primitive: return sc.Decay(_in, _decayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "decay",
  ["in", "decayTime"],
  sl.annotateFunction(function (_in, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay(_in, _decayTime);
  }, ["in", "decayTime"]),
  "{ :in :decayTime |\n\t\t<primitive: return sc.Decay(_in, _decayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "decay2",
  ["in", "attackTime", "decayTime"],
  sl.annotateFunction(function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  }, ["in", "attackTime", "decayTime"]),
  "{ :in :attackTime :decayTime |\n\t\t<primitive: return sc.Decay2(_in, _attackTime, _decayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "decay2",
  ["in", "attackTime", "decayTime"],
  sl.annotateFunction(function (_in, _attackTime, _decayTime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _attackTime, _decayTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Decay2(_in, _attackTime, _decayTime);
  }, ["in", "attackTime", "decayTime"]),
  "{ :in :attackTime :decayTime |\n\t\t<primitive: return sc.Decay2(_in, _attackTime, _decayTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delay1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Delay1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delay1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Delay1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delay2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Delay2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delay2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Delay2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Delay2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delayC",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delayC",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayC(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayC(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delayL",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delayL",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayL(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayL(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delayMap",
  ["bufNum", "in", "dynamic", "spec"],
  sl.annotateFunction(function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  }, ["bufNum", "in", "dynamic", "spec"]),
  "{ :bufNum :in :dynamic :spec |\n\t\t<primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delayMap",
  ["bufNum", "in", "dynamic", "spec"],
  sl.annotateFunction(function (_bufNum, _in, _dynamic, _spec) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufNum, _in, _dynamic, _spec";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayMap(_bufNum, _in, _dynamic, _spec);
  }, ["bufNum", "in", "dynamic", "spec"]),
  "{ :bufNum :in :dynamic :spec |\n\t\t<primitive: return sc.DelayMap(_bufNum, _in, _dynamic, _spec);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "delayN",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "delayN",
  ["in", "maxdelaytime", "delaytime"],
  sl.annotateFunction(function (_in, _maxdelaytime, _delaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _maxdelaytime, _delaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DelayN(_in, _maxdelaytime, _delaytime);
  }, ["in", "maxdelaytime", "delaytime"]),
  "{ :in :maxdelaytime :delaytime |\n\t\t<primitive: return sc.DelayN(_in, _maxdelaytime, _delaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "demand",
  ["trig", "reset", "demandUGens"],
  sl.annotateFunction(function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  }, ["trig", "reset", "demandUGens"]),
  "{ :trig :reset :demandUGens |\n\t\t<primitive: return sc.Demand(_trig, _reset, _demandUGens);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "demand",
  ["trig", "reset", "demandUGens"],
  sl.annotateFunction(function (_trig, _reset, _demandUGens) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _reset, _demandUGens";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demand(_trig, _reset, _demandUGens);
  }, ["trig", "reset", "demandUGens"]),
  "{ :trig :reset :demandUGens |\n\t\t<primitive: return sc.Demand(_trig, _reset, _demandUGens);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "detectSilence",
  ["in", "amp", "time", "doneAction"],
  sl.annotateFunction(function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  }, ["in", "amp", "time", "doneAction"]),
  "{ :in :amp :time :doneAction |\n\t\t<primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "detectSilence",
  ["in", "amp", "time", "doneAction"],
  sl.annotateFunction(function (_in, _amp, _time, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _amp, _time, _doneAction";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectSilence(_in, _amp, _time, _doneAction);
  }, ["in", "amp", "time", "doneAction"]),
  "{ :in :amp :time :doneAction |\n\t\t<primitive: return sc.DetectSilence(_in, _amp, _time, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "formlet",
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
  "{ :in :freq :attacktime :decaytime |\n\t\t<primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "formlet",
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
  "{ :in :freq :attacktime :decaytime |\n\t\t<primitive: return sc.Formlet(_in, _freq, _attacktime, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "freeVerb",
  ["in", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  }, ["in", "mix", "room", "damp"]),
  "{ :in :mix :room :damp |\n\t\t<primitive: return sc.FreeVerb(_in, _mix, _room, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "freeVerb",
  ["in", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb(_in, _mix, _room, _damp);
  }, ["in", "mix", "room", "damp"]),
  "{ :in :mix :room :damp |\n\t\t<primitive: return sc.FreeVerb(_in, _mix, _room, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "freeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  }, ["in", "in2", "mix", "room", "damp"]),
  "{ :in :in2 :mix :room :damp |\n\t\t<primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "freeVerb2",
  ["in", "in2", "mix", "room", "damp"],
  sl.annotateFunction(function (_in, _in2, _mix, _room, _damp) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _in, _in2, _mix, _room, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);
  }, ["in", "in2", "mix", "room", "damp"]),
  "{ :in :in2 :mix :room :damp |\n\t\t<primitive: return sc.FreeVerb2(_in, _in2, _mix, _room, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "freqShift",
  ["in", "freq", "phase"],
  sl.annotateFunction(function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  }, ["in", "freq", "phase"]),
  "{ :in :freq :phase |\n\t\t<primitive: return sc.FreqShift(_in, _freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "freqShift",
  ["in", "freq", "phase"],
  sl.annotateFunction(function (_in, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreqShift(_in, _freq, _phase);
  }, ["in", "freq", "phase"]),
  "{ :in :freq :phase |\n\t\t<primitive: return sc.FreqShift(_in, _freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gVerb",
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
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize |\n\t\t<primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gVerb",
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
  "{ :in :roomsize :revtime :damping :inputbw :spread :drylevel :earlyreflevel :taillevel :maxroomsize |\n\t\t<primitive: return sc.GVerb(_in, _roomsize, _revtime, _damping, _inputbw, _spread, _drylevel, _earlyreflevel, _taillevel, _maxroomsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gate",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gate(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.Gate(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gate",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gate(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.Gate(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "hasher",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hasher(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hasher(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hasher",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hasher(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hasher(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "hilbertTransform",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hilbert(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hilbert(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hilbertTransform",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hilbert(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hilbert(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "hpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq |\n\t\t<primitive: return sc.Hpf(_in, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq |\n\t\t<primitive: return sc.Hpf(_in, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "hpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hpz1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hpz1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "hpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Hpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "inRange",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.InRange(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "inRange",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InRange(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.InRange(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "integrator",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Integrator(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.Integrator(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "integrator",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Integrator(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.Integrator(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "k2A",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.K2A(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.K2A(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "k2A",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.K2A(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.K2A(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "klank",
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
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef |\n\t\t<primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "klank",
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
  "{ :input :freqscale :freqoffset :decayscale :specificationsListRef |\n\t\t<primitive: return sc.Klank(_input, _freqscale, _freqoffset, _decayscale, _specificationsListRef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lag",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lag",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lag2",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag2(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag2(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lag2",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag2(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag2(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lag3",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag3(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lag3",
  ["in", "lagTime"],
  sl.annotateFunction(function (_in, _lagTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _lagTime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3(_in, _lagTime);
  }, ["in", "lagTime"]),
  "{ :in :lagTime |\n\t\t<primitive: return sc.Lag3(_in, _lagTime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD |\n\t\t<primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lag3Ud",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD |\n\t\t<primitive: return sc.Lag3Ud(_in, _lagTimeU, _lagTimeD);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lagUd",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD |\n\t\t<primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lagUd",
  ["in", "lagTimeU", "lagTimeD"],
  sl.annotateFunction(function (_in, _lagTimeU, _lagTimeD) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lagTimeU, _lagTimeD";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LagUd(_in, _lagTimeU, _lagTimeD);
  }, ["in", "lagTimeU", "lagTimeD"]),
  "{ :in :lagTimeU :lagTimeD |\n\t\t<primitive: return sc.LagUd(_in, _lagTimeU, _lagTimeD);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "latch",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Latch(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.Latch(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "latch",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Latch(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.Latch(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "leakDc",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LeakDc(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.LeakDc(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "leakDc",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LeakDc(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.LeakDc(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "limiter",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur |\n\t\t<primitive: return sc.Limiter(_in, _level, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "limiter",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Limiter(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur |\n\t\t<primitive: return sc.Limiter(_in, _level, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linPan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level |\n\t\t<primitive: return sc.LinPan2(_in, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linPan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinPan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level |\n\t\t<primitive: return sc.LinPan2(_in, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linXFade2",
  ["inA", "inB", "pan"],
  sl.annotateFunction(function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  }, ["inA", "inB", "pan"]),
  "{ :inA :inB :pan |\n\t\t<primitive: return sc.LinXFade2(_inA, _inB, _pan);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linXFade2",
  ["inA", "inB", "pan"],
  sl.annotateFunction(function (_inA, _inB, _pan) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _inA, _inB, _pan";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinXFade2(_inA, _inB, _pan);
  }, ["inA", "inB", "pan"]),
  "{ :inA :inB :pan |\n\t\t<primitive: return sc.LinXFade2(_inA, _inB, _pan);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq |\n\t\t<primitive: return sc.Lpf(_in, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lpf",
  ["in", "freq"],
  sl.annotateFunction(function (_in, _freq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpf(_in, _freq);
  }, ["in", "freq"]),
  "{ :in :freq |\n\t\t<primitive: return sc.Lpf(_in, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Lpz1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lpz1",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz1(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Lpz1(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Lpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lpz2",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lpz2(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Lpz2(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "mVerb",
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
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix |\n\t\t<primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mVerb",
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
  "{ :in1 :in2 :dampingFreq :density :bandwidthFreq :decay :predelay :size :gain :mix :earlyMix |\n\t\t<primitive: return sc.MVerb(_in1, _in2, _dampingFreq, _density, _bandwidthFreq, _decay, _predelay, _size, _gain, _mix, _earlyMix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "mantissaMask",
  ["in", "bits"],
  sl.annotateFunction(function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MantissaMask(_in, _bits);
  }, ["in", "bits"]),
  "{ :in :bits |\n\t\t<primitive: return sc.MantissaMask(_in, _bits);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mantissaMask",
  ["in", "bits"],
  sl.annotateFunction(function (_in, _bits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _bits";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MantissaMask(_in, _bits);
  }, ["in", "bits"]),
  "{ :in :bits |\n\t\t<primitive: return sc.MantissaMask(_in, _bits);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "midEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db |\n\t\t<primitive: return sc.MidEq(_in, _freq, _rq, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "midEq",
  ["in", "freq", "rq", "db"],
  sl.annotateFunction(function (_in, _freq, _rq, _db) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _rq, _db";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidEq(_in, _freq, _rq, _db);
  }, ["in", "freq", "rq", "db"]),
  "{ :in :freq :rq :db |\n\t\t<primitive: return sc.MidEq(_in, _freq, _rq, _db);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "moogFf",
  ["in", "freq", "gain", "reset"],
  sl.annotateFunction(function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  }, ["in", "freq", "gain", "reset"]),
  "{ :in :freq :gain :reset |\n\t\t<primitive: return sc.MoogFf(_in, _freq, _gain, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "moogFf",
  ["in", "freq", "gain", "reset"],
  sl.annotateFunction(function (_in, _freq, _gain, _reset) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _freq, _gain, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogFf(_in, _freq, _gain, _reset);
  }, ["in", "freq", "gain", "reset"]),
  "{ :in :freq :gain :reset |\n\t\t<primitive: return sc.MoogFf(_in, _freq, _gain, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "moogVcf",
  ["in", "fco", "res"],
  sl.annotateFunction(function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  }, ["in", "fco", "res"]),
  "{ :in :fco :res |\n\t\t<primitive: return sc.MoogVcf(_in, _fco, _res);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "moogVcf",
  ["in", "fco", "res"],
  sl.annotateFunction(function (_in, _fco, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _fco, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogVcf(_in, _fco, _res);
  }, ["in", "fco", "res"]),
  "{ :in :fco :res |\n\t\t<primitive: return sc.MoogVcf(_in, _fco, _res);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "normalizer",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur |\n\t\t<primitive: return sc.Normalizer(_in, _level, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "normalizer",
  ["in", "level", "dur"],
  sl.annotateFunction(function (_in, _level, _dur) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _level, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Normalizer(_in, _level, _dur);
  }, ["in", "level", "dur"]),
  "{ :in :level :dur |\n\t\t<primitive: return sc.Normalizer(_in, _level, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "onePole",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OnePole(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.OnePole(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "onePole",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OnePole(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.OnePole(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "oneZero",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OneZero(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.OneZero(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "oneZero",
  ["in", "coef"],
  sl.annotateFunction(function (_in, _coef) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _coef";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OneZero(_in, _coef);
  }, ["in", "coef"]),
  "{ :in :coef |\n\t\t<primitive: return sc.OneZero(_in, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level |\n\t\t<primitive: return sc.Pan2(_in, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pan2",
  ["in", "pos", "level"],
  sl.annotateFunction(function (_in, _pos, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _pos, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pan2(_in, _pos, _level);
  }, ["in", "pos", "level"]),
  "{ :in :pos :level |\n\t\t<primitive: return sc.Pan2(_in, _pos, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "panB",
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
  "{ :in :azimuth :elevation :gain |\n\t\t<primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "panB",
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
  "{ :in :azimuth :elevation :gain |\n\t\t<primitive: return sc.PanB(_in, _azimuth, _elevation, _gain);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "panB2",
  ["input", "azimuth", "gain"],
  sl.annotateFunction(function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  }, ["input", "azimuth", "gain"]),
  "{ :input :azimuth :gain |\n\t\t<primitive: return sc.PanB2(_input, _azimuth, _gain);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "panB2",
  ["input", "azimuth", "gain"],
  sl.annotateFunction(function (_input, _azimuth, _gain) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _azimuth, _gain";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PanB2(_input, _azimuth, _gain);
  }, ["input", "azimuth", "gain"]),
  "{ :input :azimuth :gain |\n\t\t<primitive: return sc.PanB2(_input, _azimuth, _gain);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "peakFollower",
  ["in", "decay"],
  sl.annotateFunction(function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PeakFollower(_in, _decay);
  }, ["in", "decay"]),
  "{ :in :decay |\n\t\t<primitive: return sc.PeakFollower(_in, _decay);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "peakFollower",
  ["in", "decay"],
  sl.annotateFunction(function (_in, _decay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PeakFollower(_in, _decay);
  }, ["in", "decay"]),
  "{ :in :decay |\n\t\t<primitive: return sc.PeakFollower(_in, _decay);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pitchFollower",
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
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar |\n\t\t<primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pitchFollower",
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
  "{ :in :initFreq :minFreq :maxFreq :execFreq :maxBinsPerOctave :median :ampThreshold :peakThreshold :downSample :clar |\n\t\t<primitive: return sc.Pitch(_in, _initFreq, _minFreq, _maxFreq, _execFreq, _maxBinsPerOctave, _median, _ampThreshold, _peakThreshold, _downSample, _clar);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pitchShift",
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
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion |\n\t\t<primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pitchShift",
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
  "{ :in :windowSize :pitchRatio :pitchDispersion :timeDispersion |\n\t\t<primitive: return sc.PitchShift(_in, _windowSize, _pitchRatio, _pitchDispersion, _timeDispersion);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pluck",
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
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef |\n\t\t<primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pluck",
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
  "{ :in :trig :maxdelaytime :delaytime :decaytime :coef |\n\t\t<primitive: return sc.Pluck(_in, _trig, _maxdelaytime, _delaytime, _decaytime, _coef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "resonz",
  ["in", "freq", "bwr"],
  sl.annotateFunction(function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  }, ["in", "freq", "bwr"]),
  "{ :in :freq :bwr |\n\t\t<primitive: return sc.Resonz(_in, _freq, _bwr);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "resonz",
  ["in", "freq", "bwr"],
  sl.annotateFunction(function (_in, _freq, _bwr) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _bwr";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Resonz(_in, _freq, _bwr);
  }, ["in", "freq", "bwr"]),
  "{ :in :freq :bwr |\n\t\t<primitive: return sc.Resonz(_in, _freq, _bwr);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "rhpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Rhpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "rhpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rhpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Rhpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ringz",
  ["in", "freq", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  }, ["in", "freq", "decaytime"]),
  "{ :in :freq :decaytime |\n\t\t<primitive: return sc.Ringz(_in, _freq, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ringz",
  ["in", "freq", "decaytime"],
  sl.annotateFunction(function (_in, _freq, _decaytime) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _decaytime";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ringz(_in, _freq, _decaytime);
  }, ["in", "freq", "decaytime"]),
  "{ :in :freq :decaytime |\n\t\t<primitive: return sc.Ringz(_in, _freq, _decaytime);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "rlpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Rlpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "rlpf",
  ["in", "freq", "rq"],
  sl.annotateFunction(function (_in, _freq, _rq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _rq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rlpf(_in, _freq, _rq);
  }, ["in", "freq", "rq"]),
  "{ :in :freq :rq |\n\t\t<primitive: return sc.Rlpf(_in, _freq, _rq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "runningMax",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningMax(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.RunningMax(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "runningMax",
  ["in", "trig"],
  sl.annotateFunction(function (_in, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningMax(_in, _trig);
  }, ["in", "trig"]),
  "{ :in :trig |\n\t\t<primitive: return sc.RunningMax(_in, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "runningSum",
  ["in", "numsamp"],
  sl.annotateFunction(function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  }, ["in", "numsamp"]),
  "{ :in :numsamp |\n\t\t<primitive: return sc.RunningSum(_in, _numsamp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "runningSum",
  ["in", "numsamp"],
  sl.annotateFunction(function (_in, _numsamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _numsamp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RunningSum(_in, _numsamp);
  }, ["in", "numsamp"]),
  "{ :in :numsamp |\n\t\t<primitive: return sc.RunningSum(_in, _numsamp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sanitize",
  ["in", "replace"],
  sl.annotateFunction(function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sanitize(_in, _replace);
  }, ["in", "replace"]),
  "{ :in :replace |\n\t\t<primitive: return sc.Sanitize(_in, _replace);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sanitize",
  ["in", "replace"],
  sl.annotateFunction(function (_in, _replace) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _replace";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sanitize(_in, _replace);
  }, ["in", "replace"]),
  "{ :in :replace |\n\t\t<primitive: return sc.Sanitize(_in, _replace);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "schmidt",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.Schmidt(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "schmidt",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Schmidt(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.Schmidt(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "slew",
  ["in", "up", "dn"],
  sl.annotateFunction(function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slew(_in, _up, _dn);
  }, ["in", "up", "dn"]),
  "{ :in :up :dn |\n\t\t<primitive: return sc.Slew(_in, _up, _dn);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "slew",
  ["in", "up", "dn"],
  sl.annotateFunction(function (_in, _up, _dn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _up, _dn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slew(_in, _up, _dn);
  }, ["in", "up", "dn"]),
  "{ :in :up :dn |\n\t\t<primitive: return sc.Slew(_in, _up, _dn);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "slope",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slope(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Slope(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "slope",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Slope(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Slope(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "spring",
  ["in", "spring", "damp"],
  sl.annotateFunction(function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  }, ["in", "spring", "damp"]),
  "{ :in :spring :damp |\n\t\t<primitive: return sc.Spring(_in, _spring, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "spring",
  ["in", "spring", "damp"],
  sl.annotateFunction(function (_in, _spring, _damp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _spring, _damp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Spring(_in, _spring, _damp);
  }, ["in", "spring", "damp"]),
  "{ :in :spring :damp |\n\t\t<primitive: return sc.Spring(_in, _spring, _damp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tDelay",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDelay(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.TDelay(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tDelay",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDelay(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.TDelay(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "trig",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.Trig(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "trig",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.Trig(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "trig1",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig1(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.Trig1(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "trig1",
  ["in", "dur"],
  sl.annotateFunction(function (_in, _dur) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trig1(_in, _dur);
  }, ["in", "dur"]),
  "{ :in :dur |\n\t\t<primitive: return sc.Trig1(_in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "twIndex",
  ["input", "normalize", "array"],
  sl.annotateFunction(function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  }, ["input", "normalize", "array"]),
  "{ :input :normalize :array |\n\t\t<primitive: return sc.TwIndex(_input, _normalize, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "twIndex",
  ["input", "normalize", "array"],
  sl.annotateFunction(function (_input, _normalize, _array) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _normalize, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwIndex(_input, _normalize, _array);
  }, ["input", "normalize", "array"]),
  "{ :input :normalize :array |\n\t\t<primitive: return sc.TwIndex(_input, _normalize, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "twoPole",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.TwoPole(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "twoPole",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoPole(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.TwoPole(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "twoZero",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.TwoZero(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "twoZero",
  ["in", "freq", "radius"],
  sl.annotateFunction(function (_in, _freq, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _radius";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TwoZero(_in, _freq, _radius);
  }, ["in", "freq", "radius"]),
  "{ :in :freq :radius |\n\t\t<primitive: return sc.TwoZero(_in, _freq, _radius);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "xFade2",
  ["inA", "inB", "pan", "level"],
  sl.annotateFunction(function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  }, ["inA", "inB", "pan", "level"]),
  "{ :inA :inB :pan :level |\n\t\t<primitive: return sc.XFade2(_inA, _inB, _pan, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "xFade2",
  ["inA", "inB", "pan", "level"],
  sl.annotateFunction(function (_inA, _inB, _pan, _level) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _inA, _inB, _pan, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.XFade2(_inA, _inB, _pan, _level);
  }, ["inA", "inB", "pan", "level"]),
  "{ :inA :inB :pan :level |\n\t\t<primitive: return sc.XFade2(_inA, _inB, _pan, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "zeroCrossing",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ZeroCrossing(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.ZeroCrossing(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "zeroCrossing",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ZeroCrossing(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.ZeroCrossing(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "firstOrderFilterSection",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 |\n\t\t<primitive: return sc.Fos(_in, _a0, _a1, _b1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "firstOrderFilterSection",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 |\n\t\t<primitive: return sc.Fos(_in, _a0, _a1, _b1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fos",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 |\n\t\t<primitive: return sc.Fos(_in, _a0, _a1, _b1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fos",
  ["in", "a0", "a1", "b1"],
  sl.annotateFunction(function (_in, _a0, _a1, _b1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _a0, _a1, _b1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fos(_in, _a0, _a1, _b1);
  }, ["in", "a0", "a1", "b1"]),
  "{ :in :a0 :a1 :b1 |\n\t\t<primitive: return sc.Fos(_in, _a0, _a1, _b1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "secondOrderFilterSection",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 |\n\t\t<primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "secondOrderFilterSection",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 |\n\t\t<primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 |\n\t\t<primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sos",
  ["in", "a0", "a1", "a2", "b1", "b2"],
  sl.annotateFunction(function (_in, _a0, _a1, _a2, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _in, _a0, _a1, _a2, _b1, _b2";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);
  }, ["in", "a0", "a1", "a2", "b1", "b2"]),
  "{ :in :a0 :a1 :a2 :b1 :b2 |\n\t\t<primitive: return sc.Sos(_in, _a0, _a1, _a2, _b1, _b2);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ampComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp |\n\t\t<primitive: return sc.AmpComp(_freq, _root, _exp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ampComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp |\n\t\t<primitive: return sc.AmpComp(_freq, _root, _exp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ampComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpComp(_freq, _root, _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp |\n\t\t<primitive: return sc.AmpComp(_freq, _root, _exp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ampCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp |\n\t\t<primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ampCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp |\n\t\t<primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ampCompA",
  ["freq", "root", "minAmp", "rootAmp"],
  sl.annotateFunction(function (_freq, _root, _minAmp, _rootAmp) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _root, _minAmp, _rootAmp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);
  }, ["freq", "root", "minAmp", "rootAmp"]),
  "{ :freq :root :minAmp :rootAmp |\n\t\t<primitive: return sc.AmpCompA(_freq, _root, _minAmp, _rootAmp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm |\n\t\t<primitive: return sc.Blip(_freq, _numharm);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm |\n\t\t<primitive: return sc.Blip(_freq, _numharm);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "blip",
  ["freq", "numharm"],
  sl.annotateFunction(function (_freq, _numharm) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _numharm";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Blip(_freq, _numharm);
  }, ["freq", "numharm"]),
  "{ :freq :numharm |\n\t\t<primitive: return sc.Blip(_freq, _numharm);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufDetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DetectIndex(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufDetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DetectIndex(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufDetectIndex",
  ["bufnum", "input"],
  sl.annotateFunction(function (_bufnum, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _input";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DetectIndex(_bufnum, _input);
  }, ["bufnum", "input"]),
  "{ :bufnum :input |\n\t\t<primitive: return sc.DetectIndex(_bufnum, _input);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufDur(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufDur(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufDur",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufDur(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufDur(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufFrames(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufFrames(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufFrames",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufFrames(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufFrames(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufIndexClip",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.Index(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufIndexClip",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.Index(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufIndexClip",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Index(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.Index(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufIndexWrap",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.WrapIndex(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufIndexWrap",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.WrapIndex(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufIndexWrap",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WrapIndex(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.WrapIndex(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufRateScale(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufRateScale(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufRateScale",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufRateScale(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufRateScale(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufSampleRate(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufSampleRate(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufSampleRate",
  ["bufnum"],
  sl.annotateFunction(function (_bufnum) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _bufnum";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BufSampleRate(_bufnum);
  }, ["bufnum"]),
  "{ :bufnum |\n\t\t<primitive: return sc.BufSampleRate(_bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufWr",
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
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bufWr",
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
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufWr",
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
  "{ :bufnum :phase :loop :inputList |\n\t\t<primitive: return sc.BufWr(_bufnum, _phase, _loop, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "clearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf |\n\t\t<primitive: return sc.ClearBuf(_buf);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "clearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf |\n\t\t<primitive: return sc.ClearBuf(_buf);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "clearBuf",
  ["buf"],
  sl.annotateFunction(function (_buf) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _buf";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ClearBuf(_buf);
  }, ["buf"]),
  "{ :buf |\n\t\t<primitive: return sc.ClearBuf(_buf);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "coinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in |\n\t\t<primitive: return sc.CoinGate(_prob, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "coinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in |\n\t\t<primitive: return sc.CoinGate(_prob, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "coinGate",
  ["prob", "in"],
  sl.annotateFunction(function (_prob, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _prob, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CoinGate(_prob, _in);
  }, ["prob", "in"]),
  "{ :prob :in |\n\t\t<primitive: return sc.CoinGate(_prob, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam |\n\t\t<primitive: return sc.Crackle(_chaosParam);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam |\n\t\t<primitive: return sc.Crackle(_chaosParam);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "crackle",
  ["chaosParam"],
  sl.annotateFunction(function (_chaosParam) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _chaosParam";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Crackle(_chaosParam);
  }, ["chaosParam"]),
  "{ :chaosParam |\n\t\t<primitive: return sc.Crackle(_chaosParam);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "cuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspL(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspL(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "cuspL",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspL(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspL(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "cuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspN(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspN(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "cuspN",
  ["freq", "a", "b", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _xi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _a, _b, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CuspN(_freq, _a, _b, _xi);
  }, ["freq", "a", "b", "xi"]),
  "{ :freq :a :b :xi |\n\t\t<primitive: return sc.CuspN(_freq, _a, _b, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dbrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dbrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dbrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dbrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop |\n\t\t<primitive: return sc.Dbufrd(_bufnum, _phase, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop |\n\t\t<primitive: return sc.Dbufrd(_bufnum, _phase, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dbufrd",
  ["bufnum", "phase", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _loop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _phase, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufrd(_bufnum, _phase, _loop);
  }, ["bufnum", "phase", "loop"]),
  "{ :bufnum :phase :loop |\n\t\t<primitive: return sc.Dbufrd(_bufnum, _phase, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop |\n\t\t<primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop |\n\t\t<primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dbufwr",
  ["bufnum", "phase", "input", "loop"],
  sl.annotateFunction(function (_bufnum, _phase, _input, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _bufnum, _phase, _input, _loop";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dbufwr(_bufnum, _phase, _input, _loop);
  }, ["bufnum", "phase", "input", "loop"]),
  "{ :bufnum :phase :input :loop |\n\t\t<primitive: return sc.Dbufwr(_bufnum, _phase, _input, _loop);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Dc(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Dc(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dc",
  ["in"],
  sl.annotateFunction(function (_in) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dc(_in);
  }, ["in"]),
  "{ :in |\n\t\t<primitive: return sc.Dc(_in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in |\n\t\t<primitive: return sc.Ddup(_n, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in |\n\t\t<primitive: return sc.Ddup(_n, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ddup",
  ["n", "in"],
  sl.annotateFunction(function (_n, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ddup(_n, _in);
  }, ["n", "in"]),
  "{ :n :in |\n\t\t<primitive: return sc.Ddup(_n, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "demandEnvGen",
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
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction |\n\t\t<primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "demandEnvGen",
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
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction |\n\t\t<primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "demandEnvGen",
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
  "{ :level :dur :shape :curve :gate :reset :levelScale :levelBias :timeScale :doneAction |\n\t\t<primitive: return sc.DemandEnvGen(_level, _dur, _shape, _curve, _gate, _reset, _levelScale, _levelBias, _timeScale, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length |\n\t\t<primitive: return sc.Dgeom(_start, _grow, _length);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length |\n\t\t<primitive: return sc.Dgeom(_start, _grow, _length);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dgeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dgeom(_start, _grow, _length);
  }, ["start", "grow", "length"]),
  "{ :start :grow :length |\n\t\t<primitive: return sc.Dgeom(_start, _grow, _length);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dibrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dibrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dibrown",
  ["length", "lo", "hi", "step"],
  sl.annotateFunction(function (_length, _lo, _hi, _step) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _length, _lo, _hi, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dibrown(_length, _lo, _hi, _step);
  }, ["length", "lo", "hi", "step"]),
  "{ :length :lo :hi :step |\n\t\t<primitive: return sc.Dibrown(_length, _lo, _hi, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Diwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Diwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "diwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Diwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Diwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Drand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Drand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "drand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Drand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Drand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dseq(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dseq(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dseq",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseq(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dseq(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dser(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dser(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dser",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dser(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dser(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step |\n\t\t<primitive: return sc.Dseries(_length, _start, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step |\n\t\t<primitive: return sc.Dseries(_length, _start, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dseries",
  ["length", "start", "step"],
  sl.annotateFunction(function (_length, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _start, _step";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dseries(_length, _start, _step);
  }, ["length", "start", "step"]),
  "{ :length :start :step |\n\t\t<primitive: return sc.Dseries(_length, _start, _step);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dshuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dshuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dshuf",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dshuf(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dshuf(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "durationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |\n\t\t <primitive: return sc.DurationGate(_dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "durationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |\n\t\t <primitive: return sc.DurationGate(_dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "durationGate",
  ["dur"],
  sl.annotateFunction(function (_dur) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _dur";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DurationGate(_dur);
  }, ["dur"]),
  "{ :dur |\n\t\t <primitive: return sc.DurationGate(_dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dust",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust2(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust2(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dust2",
  ["density"],
  sl.annotateFunction(function (_density) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _density";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dust2(_density);
  }, ["density"]),
  "{ :density |\n\t\t<primitive: return sc.Dust2(_density);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.Duty(_dur, _reset, 0, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.Duty(_dur, _reset, 0, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "duty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Duty(_dur, _reset, 0, _level);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.Duty(_dur, _reset, 0, _level);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Dwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Dwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dwhite",
  ["length", "lo", "hi"],
  sl.annotateFunction(function (_length, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _length, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwhite(_length, _lo, _hi);
  }, ["length", "lo", "hi"]),
  "{ :length :lo :hi |\n\t\t<primitive: return sc.Dwhite(_length, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list |\n\t\t<primitive: return sc.Dwrand(_repeats, _weights, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list |\n\t\t<primitive: return sc.Dwrand(_repeats, _weights, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dwrand",
  ["repeats", "weights", "list"],
  sl.annotateFunction(function (_repeats, _weights, _list) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _repeats, _weights, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dwrand(_repeats, _weights, _list);
  }, ["repeats", "weights", "list"]),
  "{ :repeats :weights :list |\n\t\t<primitive: return sc.Dwrand(_repeats, _weights, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dxrand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dxrand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dxrand",
  ["repeats", "list"],
  sl.annotateFunction(function (_repeats, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _repeats, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dxrand(_repeats, _list);
  }, ["repeats", "list"]),
  "{ :repeats :list |\n\t\t<primitive: return sc.Dxrand(_repeats, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "envGen",
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
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope |\n\t\t<primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "envGen",
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
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope |\n\t\t<primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "envGen",
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
  "{ :gate :levelScale :levelBias :timeScale :doneAction :envelope |\n\t\t<primitive: return sc.EnvGen(_gate, _levelScale, _levelBias, _timeScale, _doneAction, _envelope);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "envTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew |\n\t\t<primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "envTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew |\n\t\t<primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "envTrapezoid",
  ["trig", "dur", "shape", "skew"],
  sl.annotateFunction(function (_trig, _dur, _shape, _skew) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _dur, _shape, _skew";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);
  }, ["trig", "dur", "shape", "skew"]),
  "{ :trig :dur :shape :skew |\n\t\t<primitive: return sc.EnvTrapezoid(_trig, _dur, _shape, _skew);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "expRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.ExpRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "expRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.ExpRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "expRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.ExpRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.FSinOsc(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.FSinOsc(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fSinOsc",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FSinOsc(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.FSinOsc(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fbSineC",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fbSineC",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fbSineC",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineC(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fbSineL",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fbSineL",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fbSineL",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineL(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fbSineN",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fbSineN",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fbSineN",
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
  "{ :freq :im :fb :a :c :xi :yi |\n\t\t<primitive: return sc.FbSineN(_freq, _im, _fb, _a, _c, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fft",
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
  "{ :buffer :in :hop :wintype :active :winsize |\n\t\t<primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fft",
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
  "{ :buffer :in :hop :wintype :active :winsize |\n\t\t<primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fft",
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
  "{ :buffer :in :hop :wintype :active :winsize |\n\t\t<primitive: return sc.Fft(_buffer, _in, _hop, _wintype, _active, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq |\n\t\t<primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq |\n\t\t<primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "formant",
  ["fundfreq", "formfreq", "bwfreq"],
  sl.annotateFunction(function (_fundfreq, _formfreq, _bwfreq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fundfreq, _formfreq, _bwfreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Formant(_fundfreq, _formfreq, _bwfreq);
  }, ["fundfreq", "formfreq", "bwfreq"]),
  "{ :fundfreq :formfreq :bwfreq |\n\t\t<primitive: return sc.Formant(_fundfreq, _formfreq, _bwfreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "freeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src |\n\t\t<primitive: return sc.FreeSelfWhenDone(_src);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "freeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src |\n\t\t<primitive: return sc.FreeSelfWhenDone(_src);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "freeSelfWhenDone",
  ["src"],
  sl.annotateFunction(function (_src) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _src";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FreeSelfWhenDone(_src);
  }, ["src"]),
  "{ :src |\n\t\t<primitive: return sc.FreeSelfWhenDone(_src);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanL(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanL(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "gbmanL",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanL(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanL(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanN(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanN(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "gbmanN",
  ["freq", "xi", "yi"],
  sl.annotateFunction(function (_freq, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.GbmanN(_freq, _xi, _yi);
  }, ["freq", "xi", "yi"]),
  "{ :freq :xi :yi |\n\t\t<primitive: return sc.GbmanN(_freq, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gendy1",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gendy1",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "gendy1",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy1(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gendy2",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c |\n\t\t<primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gendy2",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c |\n\t\t<primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "gendy2",
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
  "{ :ampdist :durdist :adparam :ddparam :minfreq :maxfreq :ampscale :durscale :initCPs :knum :a :c |\n\t\t<primitive: return sc.Gendy2(_ampdist, _durdist, _adparam, _ddparam, _minfreq, _maxfreq, _ampscale, _durscale, _initCPs, _knum, _a, _c);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "gendy3",
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
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "gendy3",
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
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "gendy3",
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
  "{ :ampdist :durdist :adparam :ddparam :freq :ampscale :durscale :initCPs :knum |\n\t\t<primitive: return sc.Gendy3(_ampdist, _durdist, _adparam, _ddparam, _freq, _ampscale, _durscale, _initCPs, _knum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "henonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "henonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "henonC",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonC(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonC(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "henonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "henonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "henonL",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonL(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonL(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "henonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "henonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "henonN",
  ["freq", "a", "b", "x0", "x1"],
  sl.annotateFunction(function (_freq, _a, _b, _x0, _x1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _x0, _x1";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HenonN(_freq, _a, _b, _x0, _x1);
  }, ["freq", "a", "b", "x0", "x1"]),
  "{ :freq :a :b :x0 :x1 |\n\t\t<primitive: return sc.HenonN(_freq, _a, _b, _x0, _x1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "iRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.IRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "iRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.IRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "iRand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IRand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.IRand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize |\n\t\t<primitive: return sc.Ifft(_buffer, _wintype, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize |\n\t\t<primitive: return sc.Ifft(_buffer, _wintype, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ifft",
  ["buffer", "wintype", "winsize"],
  sl.annotateFunction(function (_buffer, _wintype, _winsize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wintype, _winsize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ifft(_buffer, _wintype, _winsize);
  }, ["buffer", "wintype", "winsize"]),
  "{ :buffer :wintype :winsize |\n\t\t<primitive: return sc.Ifft(_buffer, _wintype, _winsize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.Impulse(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.Impulse(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "impulse",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Impulse(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.Impulse(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "indexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.IndexInBetween(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "indexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.IndexInBetween(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "indexInBetween",
  ["bufnum", "in"],
  sl.annotateFunction(function (_bufnum, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.IndexInBetween(_bufnum, _in);
  }, ["bufnum", "in"]),
  "{ :bufnum :in |\n\t\t<primitive: return sc.IndexInBetween(_bufnum, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "keyState",
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
  "{ :keycode :minval :maxval :lag |\n\t\t<primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "keyState",
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
  "{ :keycode :minval :maxval :lag |\n\t\t<primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "keyState",
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
  "{ :keycode :minval :maxval :lag |\n\t\t<primitive: return sc.KeyState(_keycode, _minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "klang",
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
  "{ :freqscale :freqoffset :specificationsListRef |\n\t\t<primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "klang",
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
  "{ :freqscale :freqoffset :specificationsListRef |\n\t\t<primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "klang",
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
  "{ :freqscale :freqoffset :specificationsListRef |\n\t\t<primitive: return sc.Klang(_freqscale, _freqoffset, _specificationsListRef);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "latoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "latoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "latoocarfianC",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianC(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "latoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "latoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "latoocarfianL",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianL(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "latoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "latoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "latoocarfianN",
  ["freq", "a", "b", "c", "d", "xi", "yi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _d, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage = "Arity: expected 7, _freq, _a, _b, _c, _d, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);
  }, ["freq", "a", "b", "c", "d", "xi", "yi"]),
  "{ :freq :a :b :c :d :xi :yi |\n\t\t<primitive: return sc.LatoocarfianN(_freq, _a, _b, _c, _d, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfCub(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfCub(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfCub",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfCub(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfCub(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfGauss",
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
  "{ :duration :width :iphase :loop :doneAction |\n\t\t<primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfGauss",
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
  "{ :duration :width :iphase :loop :doneAction |\n\t\t<primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfGauss",
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
  "{ :duration :width :iphase :loop :doneAction |\n\t\t<primitive: return sc.LfGauss(_duration, _width, _iphase, _loop, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise2(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise2(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfNoise2",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfNoise2(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfNoise2(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfPar(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfPar(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfPar",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPar(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfPar(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.LfPulse(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.LfPulse(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfPulse",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfPulse(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.LfPulse(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfSaw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfSaw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfSaw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfSaw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfSaw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfTri(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfTri(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfTri",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfTri(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.LfTri(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfdClipNoise",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdClipNoise(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdClipNoise(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfdNoise0",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise0(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise0(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfdNoise1",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise1(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise1(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise3(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise3(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfdNoise3",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfdNoise3(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.LfdNoise3(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi |\n\t\t<primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi |\n\t\t<primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "linCongC",
  ["freq", "a", "c", "m", "xi"],
  sl.annotateFunction(function (_freq, _a, _c, _m, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _c, _m, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinCongC(_freq, _a, _c, _m, _xi);
  }, ["freq", "a", "c", "m", "xi"]),
  "{ :freq :a :c :m :xi |\n\t\t<primitive: return sc.LinCongC(_freq, _a, _c, _m, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax |\n\t\t<primitive: return sc.LinRand(_lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax |\n\t\t<primitive: return sc.LinRand(_lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "linRand",
  ["lo", "hi", "minmax"],
  sl.annotateFunction(function (_lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand(_lo, _hi, _minmax);
  }, ["lo", "hi", "minmax"]),
  "{ :lo :hi :minmax |\n\t\t<primitive: return sc.LinRand(_lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linen",
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
  "{ :gate :attackTime :susLevel :releaseTime :doneAction |\n\t\t<primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linen",
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
  "{ :gate :attackTime :susLevel :releaseTime :doneAction |\n\t\t<primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "linen",
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
  "{ :gate :attackTime :susLevel :releaseTime :doneAction |\n\t\t<primitive: return sc.Linen(_gate, _attackTime, _susLevel, _releaseTime, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "localOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.LocalOut(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "localOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.LocalOut(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "localOut",
  ["channelsList"],
  sl.annotateFunction(function (_channelsList) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalOut(_channelsList);
  }, ["channelsList"]),
  "{ :channelsList |\n\t\t<primitive: return sc.LocalOut(_channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init |\n\t\t<primitive: return sc.Logistic(_chaosParam, _freq, _init);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init |\n\t\t<primitive: return sc.Logistic(_chaosParam, _freq, _init);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "logistic",
  ["chaosParam", "freq", "init"],
  sl.annotateFunction(function (_chaosParam, _freq, _init) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _chaosParam, _freq, _init";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Logistic(_chaosParam, _freq, _init);
  }, ["chaosParam", "freq", "init"]),
  "{ :chaosParam :freq :init |\n\t\t<primitive: return sc.Logistic(_chaosParam, _freq, _init);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lorenzL",
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
  "{ :freq :s :r :b :h :xi :yi :zi |\n\t\t<primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lorenzL",
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
  "{ :freq :s :r :b :h :xi :yi :zi |\n\t\t<primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lorenzL",
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
  "{ :freq :s :r :b :h :xi :yi :zi |\n\t\t<primitive: return sc.LorenzL(_freq, _s, _r, _b, _h, _xi, _yi, _zi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "maxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count |\n\t\t<primitive: return sc.MaxLocalBufs(_count);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "maxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count |\n\t\t<primitive: return sc.MaxLocalBufs(_count);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "maxLocalBufs",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MaxLocalBufs(_count);
  }, ["count"]),
  "{ :count |\n\t\t<primitive: return sc.MaxLocalBufs(_count);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "mouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag |\n\t\t<primitive: return sc.MouseButton(_minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag |\n\t\t<primitive: return sc.MouseButton(_minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "mouseButton",
  ["minval", "maxval", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _lag) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _minval, _maxval, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseButton(_minval, _maxval, _lag);
  }, ["minval", "maxval", "lag"]),
  "{ :minval :maxval :lag |\n\t\t<primitive: return sc.MouseButton(_minval, _maxval, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "mouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "mouseX",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseX(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseX(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "mouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "mouseY",
  ["minval", "maxval", "warp", "lag"],
  sl.annotateFunction(function (_minval, _maxval, _warp, _lag) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _minval, _maxval, _warp, _lag";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MouseY(_minval, _maxval, _warp, _lag);
  }, ["minval", "maxval", "warp", "lag"]),
  "{ :minval :maxval :warp :lag |\n\t\t<primitive: return sc.MouseY(_minval, _maxval, _warp, _lag);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList |\n\t\t<primitive: return sc.Multiplexer(_selector, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList |\n\t\t<primitive: return sc.Multiplexer(_selector, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "multiplexer",
  ["selector", "inputList"],
  sl.annotateFunction(function (_selector, _inputList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _selector, _inputList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Multiplexer(_selector, _inputList);
  }, ["selector", "inputList"]),
  "{ :selector :inputList |\n\t\t<primitive: return sc.Multiplexer(_selector, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "nRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n |\n\t\t<primitive: return sc.NRand(_lo, _hi, _n);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "nRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n |\n\t\t<primitive: return sc.NRand(_lo, _hi, _n);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "nRand",
  ["lo", "hi", "n"],
  sl.annotateFunction(function (_lo, _hi, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.NRand(_lo, _hi, _n);
  }, ["lo", "hi", "n"]),
  "{ :lo :hi :n |\n\t\t<primitive: return sc.NRand(_lo, _hi, _n);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "offsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.OffsetOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "offsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.OffsetOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "offsetOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.OffsetOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.OffsetOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase |\n\t\t<primitive: return sc.Osc(_bufnum, _freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase |\n\t\t<primitive: return sc.Osc(_bufnum, _freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "osc",
  ["bufnum", "freq", "phase"],
  sl.annotateFunction(function (_bufnum, _freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Osc(_bufnum, _freq, _phase);
  }, ["bufnum", "freq", "phase"]),
  "{ :bufnum :freq :phase |\n\t\t<primitive: return sc.Osc(_bufnum, _freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.Out(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.Out(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "out",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Out(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.Out(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "phasor",
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
  "{ :trig :rate :start :end :resetPos |\n\t\t<primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "phasor",
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
  "{ :trig :rate :start :end :resetPos |\n\t\t<primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "phasor",
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
  "{ :trig :rate :start :end :resetPos |\n\t\t<primitive: return sc.Phasor(_trig, _rate, _start, _end, _resetPos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\t<primitive: return sc.Pulse(_freq, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\t<primitive: return sc.Pulse(_freq, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pulse",
  ["freq", "width"],
  sl.annotateFunction(function (_freq, _width) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pulse(_freq, _width);
  }, ["freq", "width"]),
  "{ :freq :width |\n\t\t<primitive: return sc.Pulse(_freq, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.PulseCount(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.PulseCount(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pulseCount",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseCount(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.PulseCount(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start |\n\t\t<primitive: return sc.PulseDivider(_trig, _div, _start);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start |\n\t\t<primitive: return sc.PulseDivider(_trig, _div, _start);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pulseDivider",
  ["trig", "div", "start"],
  sl.annotateFunction(function (_trig, _div, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trig, _div, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PulseDivider(_trig, _div, _start);
  }, ["trig", "div", "start"]),
  "{ :trig :div :start |\n\t\t<primitive: return sc.PulseDivider(_trig, _div, _start);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig |\n\t\t<primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig |\n\t\t<primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pvBinScramble",
  ["buffer", "wipe", "width", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _width, _trig) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buffer, _wipe, _width, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvBinScramble(_buffer, _wipe, _width, _trig);
  }, ["buffer", "wipe", "width", "trig"]),
  "{ :buffer :wipe :width :trig |\n\t\t<primitive: return sc.PvBinScramble(_buffer, _wipe, _width, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig |\n\t\t<primitive: return sc.PvDiffuser(_buffer, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig |\n\t\t<primitive: return sc.PvDiffuser(_buffer, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pvDiffuser",
  ["buffer", "trig"],
  sl.annotateFunction(function (_buffer, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _buffer, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvDiffuser(_buffer, _trig);
  }, ["buffer", "trig"]),
  "{ :buffer :trig |\n\t\t<primitive: return sc.PvDiffuser(_buffer, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "pvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig |\n\t\t<primitive: return sc.PvRandComb(_buffer, _wipe, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "pvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig |\n\t\t<primitive: return sc.PvRandComb(_buffer, _wipe, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "pvRandComb",
  ["buffer", "wipe", "trig"],
  sl.annotateFunction(function (_buffer, _wipe, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _buffer, _wipe, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PvRandComb(_buffer, _wipe, _trig);
  }, ["buffer", "wipe", "trig"]),
  "{ :buffer :wipe :trig |\n\t\t<primitive: return sc.PvRandComb(_buffer, _wipe, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "quadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "quadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "quadC",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadC(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadC(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "quadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "quadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "quadL",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadL(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadL(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "quadN",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadN(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadN(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "quadN",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadN(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadN(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "quadN",
  ["freq", "a", "b", "c", "xi"],
  sl.annotateFunction(function (_freq, _a, _b, _c, _xi) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _freq, _a, _b, _c, _xi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.QuadN(_freq, _a, _b, _c, _xi);
  }, ["freq", "a", "b", "c", "xi"]),
  "{ :freq :a :b :c :xi |\n\t\t<primitive: return sc.QuadN(_freq, _a, _b, _c, _xi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.Rand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.Rand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "rand",
  ["lo", "hi"],
  sl.annotateFunction(function (_lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rand(_lo, _hi);
  }, ["lo", "hi"]),
  "{ :lo :hi |\n\t\t<primitive: return sc.Rand(_lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "recordBuf",
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
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList |\n\t\t<primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "recordBuf",
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
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList |\n\t\t<primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "recordBuf",
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
  "{ :bufnum :offset :recLevel :preLevel :run :loop :trigger :doneAction :inputList |\n\t\t<primitive: return sc.RecordBuf(_bufnum, _offset, _recLevel, _preLevel, _run, _loop, _trigger, _doneAction, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "replaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ReplaceOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "replaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ReplaceOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "replaceOut",
  ["bus", "channelsList"],
  sl.annotateFunction(function (_bus, _channelsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bus, _channelsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ReplaceOut(_bus, _channelsList);
  }, ["bus", "channelsList"]),
  "{ :bus :channelsList |\n\t\t<primitive: return sc.ReplaceOut(_bus, _channelsList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos |\n\t\t<primitive: return sc.Rotate2(_x, _y, _pos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos |\n\t\t<primitive: return sc.Rotate2(_x, _y, _pos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "rotate2",
  ["x", "y", "pos"],
  sl.annotateFunction(function (_x, _y, _pos) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _pos";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Rotate2(_x, _y, _pos);
  }, ["x", "y", "pos"]),
  "{ :x :y :pos |\n\t\t<primitive: return sc.Rotate2(_x, _y, _pos);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "samplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn |\n\t\t<primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "samplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn |\n\t\t<primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "samplerIndex",
  ["bufNum", "size", "mnn"],
  sl.annotateFunction(function (_bufNum, _size, _mnn) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufNum, _size, _mnn";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SamplerIndex(_bufNum, _size, _mnn);
  }, ["bufNum", "size", "mnn"]),
  "{ :bufNum :size :mnn |\n\t\t<primitive: return sc.SamplerIndex(_bufNum, _size, _mnn);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.Saw(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.Saw(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "saw",
  ["freq"],
  sl.annotateFunction(function (_freq) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Saw(_freq);
  }, ["freq"]),
  "{ :freq |\n\t\t<primitive: return sc.Saw(_freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.SawDpw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.SawDpw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "sawDpw",
  ["freq", "iphase"],
  sl.annotateFunction(function (_freq, _iphase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _iphase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SawDpw(_freq, _iphase);
  }, ["freq", "iphase"]),
  "{ :freq :iphase |\n\t\t<primitive: return sc.SawDpw(_freq, _iphase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "selectT",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.Select(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "selectT",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.Select(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "selectT",
  ["which", "array"],
  sl.annotateFunction(function (_which, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _which, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Select(_which, _array);
  }, ["which", "array"]),
  "{ :which :array |\n\t\t<primitive: return sc.Select(_which, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "setBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array |\n\t\t<primitive: return sc.SetBuf(_buf, _offset, _length, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "setBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array |\n\t\t<primitive: return sc.SetBuf(_buf, _offset, _length, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "setBuf",
  ["buf", "offset", "length", "array"],
  sl.annotateFunction(function (_buf, _offset, _length, _array) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _buf, _offset, _length, _array";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetBuf(_buf, _offset, _length, _array);
  }, ["buf", "offset", "length", "array"]),
  "{ :buf :offset :length :array |\n\t\t<primitive: return sc.SetBuf(_buf, _offset, _length, _array);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "setResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.SetResetFf(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "setResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.SetResetFf(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "setResetFf",
  ["trig", "reset"],
  sl.annotateFunction(function (_trig, _reset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _reset";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SetResetFf(_trig, _reset);
  }, ["trig", "reset"]),
  "{ :trig :reset |\n\t\t<primitive: return sc.SetResetFf(_trig, _reset);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.SinOsc(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.SinOsc(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "sinOsc",
  ["freq", "phase"],
  sl.annotateFunction(function (_freq, _phase) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _phase";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOsc(_freq, _phase);
  }, ["freq", "phase"]),
  "{ :freq :phase |\n\t\t<primitive: return sc.SinOsc(_freq, _phase);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback |\n\t\t<primitive: return sc.SinOscFb(_freq, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback |\n\t\t<primitive: return sc.SinOscFb(_freq, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "sinOscFb",
  ["freq", "feedback"],
  sl.annotateFunction(function (_freq, _feedback) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _feedback";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinOscFb(_freq, _feedback);
  }, ["freq", "feedback"]),
  "{ :freq :feedback |\n\t\t<primitive: return sc.SinOscFb(_freq, _feedback);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "standardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardL(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "standardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardL(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "standardL",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardL(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardL(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "standardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardN(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "standardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardN(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "standardN",
  ["freq", "k", "xi", "yi"],
  sl.annotateFunction(function (_freq, _k, _xi, _yi) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _freq, _k, _xi, _yi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.StandardN(_freq, _k, _xi, _yi);
  }, ["freq", "k", "xi", "yi"]),
  "{ :freq :k :xi :yi |\n\t\t<primitive: return sc.StandardN(_freq, _k, _xi, _yi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "stepper",
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
  "{ :trig :reset :min :max :step :resetval |\n\t\t<primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "stepper",
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
  "{ :trig :reset :min :max :step :resetval |\n\t\t<primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "stepper",
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
  "{ :trig :reset :min :max :step :resetval |\n\t\t<primitive: return sc.Stepper(_trig, _reset, _min, _max, _step, _resetval);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate |\n\t\t<primitive: return sc.Sweep(_trig, _rate);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate |\n\t\t<primitive: return sc.Sweep(_trig, _rate);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "sweep",
  ["trig", "rate"],
  sl.annotateFunction(function (_trig, _rate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trig, _rate";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sweep(_trig, _rate);
  }, ["trig", "rate"]),
  "{ :trig :rate |\n\t\t<primitive: return sc.Sweep(_trig, _rate);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "syncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq |\n\t\t<primitive: return sc.SyncSaw(_syncFreq, _sawFreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "syncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq |\n\t\t<primitive: return sc.SyncSaw(_syncFreq, _sawFreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "syncSaw",
  ["syncFreq", "sawFreq"],
  sl.annotateFunction(function (_syncFreq, _sawFreq) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _syncFreq, _sawFreq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SyncSaw(_syncFreq, _sawFreq);
  }, ["syncFreq", "sawFreq"]),
  "{ :syncFreq :sawFreq |\n\t\t<primitive: return sc.SyncSaw(_syncFreq, _sawFreq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tDuty",
  ["dur", "reset", "level"],
  sl.annotateFunction(function (_dur, _reset, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _dur, _reset, _level";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TDuty(_dur, _reset, 0, _level, 0);
  }, ["dur", "reset", "level"]),
  "{ :dur :reset :level |\n\t\t<primitive: return sc.TDuty(_dur, _reset, 0, _level, 0);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TExpRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TExpRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tExpRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TExpRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TExpRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TiRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TiRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tiRand",
  ["lo", "hi", "trig"],
  sl.annotateFunction(function (_lo, _hi, _trig) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _lo, _hi, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TiRand(_lo, _hi, _trig);
  }, ["lo", "hi", "trig"]),
  "{ :lo :hi :trig |\n\t\t<primitive: return sc.TiRand(_lo, _hi, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.Timer(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.Timer(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "timer",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Timer(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.Timer(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "toggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.ToggleFf(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "toggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.ToggleFf(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "toggleFf",
  ["trig"],
  sl.annotateFunction(function (_trig) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ToggleFf(_trig);
  }, ["trig"]),
  "{ :trig |\n\t\t<primitive: return sc.ToggleFf(_trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "varSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.VarSaw(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "varSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.VarSaw(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "varSaw",
  ["freq", "iphase", "width"],
  sl.annotateFunction(function (_freq, _iphase, _width) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _iphase, _width";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.VarSaw(_freq, _iphase, _width);
  }, ["freq", "iphase", "width"]),
  "{ :freq :iphase :width |\n\t\t<primitive: return sc.VarSaw(_freq, _iphase, _width);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "vibrato",
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
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig |\n\t\t<primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "vibrato",
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
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig |\n\t\t<primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "vibrato",
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
  "{ :freq :rate :depth :delay :onset :rateVariation :depthVariation :iphase :trig |\n\t\t<primitive: return sc.Vibrato(_freq, _rate, _depth, _delay, _onset, _rateVariation, _depthVariation, _iphase, _trig);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bufRd",
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
  "{ :numChan :bufnum :phase :loop :interpolation |\n\t\t<primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bufRd",
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
  "{ :numChan :bufnum :phase :loop :interpolation |\n\t\t<primitive: return sc.BufRd(_numChan, _bufnum, _phase, _loop, _interpolation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "busIn",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.In(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus |\n\t\t<primitive: return sc.In(_numChan, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "busIn",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.In(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus |\n\t\t<primitive: return sc.In(_numChan, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "decodeB2",
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
  "{ :numChan :w :x :y :orientation |\n\t\t<primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "decodeB2",
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
  "{ :numChan :w :x :y :orientation |\n\t\t<primitive: return sc.DecodeB2(_numChan, _w, _x, _y, _orientation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "demultiplexer",
  ["numChannels", "input", "selector"],
  sl.annotateFunction(function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  }, ["numChannels", "input", "selector"]),
  "{ :numChannels :input :selector |\n\t\t<primitive: return sc.Demultiplexer(_numChannels, _input, _selector);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "demultiplexer",
  ["numChannels", "input", "selector"],
  sl.annotateFunction(function (_numChannels, _input, _selector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChannels, _input, _selector";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Demultiplexer(_numChannels, _input, _selector);
  }, ["numChannels", "input", "selector"]),
  "{ :numChannels :input :selector |\n\t\t<primitive: return sc.Demultiplexer(_numChannels, _input, _selector);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "grainBuf",
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
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "grainBuf",
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
  "{ :numChan :trigger :dur :sndbuf :rate :pos :interp :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainBuf(_numChan, _trigger, _dur, _sndbuf, _rate, _pos, _interp, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "grainFm",
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
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "grainFm",
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
  "{ :numChan :trigger :dur :carfreq :modfreq :index :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainFm(_numChan, _trigger, _dur, _carfreq, _modfreq, _index, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "grainSin",
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
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "grainSin",
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
  "{ :numChan :trigger :dur :freq :pan :envbufnum :maxGrains |\n\t\t<primitive: return sc.GrainSin(_numChan, _trigger, _dur, _freq, _pan, _envbufnum, _maxGrains);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "inFeedback",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus |\n\t\t<primitive: return sc.InFeedback(_numChan, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "inFeedback",
  ["numChan", "bus"],
  sl.annotateFunction(function (_numChan, _bus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _bus";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.InFeedback(_numChan, _bus);
  }, ["numChan", "bus"]),
  "{ :numChan :bus |\n\t\t<primitive: return sc.InFeedback(_numChan, _bus);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "localBuf",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames |\n\t\t<primitive: return sc.LocalBuf(_numChannels, _numFrames);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "localBuf",
  ["numChannels", "numFrames"],
  sl.annotateFunction(function (_numChannels, _numFrames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _numFrames";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalBuf(_numChannels, _numFrames);
  }, ["numChannels", "numFrames"]),
  "{ :numChannels :numFrames |\n\t\t<primitive: return sc.LocalBuf(_numChannels, _numFrames);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "localIn",
  ["numChan", "default"],
  sl.annotateFunction(function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalIn(_numChan, _default);
  }, ["numChan", "default"]),
  "{ :numChan :default |\n\t\t<primitive: return sc.LocalIn(_numChan, _default);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "localIn",
  ["numChan", "default"],
  sl.annotateFunction(function (_numChan, _default) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChan, _default";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LocalIn(_numChan, _default);
  }, ["numChan", "default"]),
  "{ :numChan :default |\n\t\t<primitive: return sc.LocalIn(_numChan, _default);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "panAz",
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
  "{ :numChan :in :pos :level :width :orientation |\n\t\t<primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "panAz",
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
  "{ :numChan :in :pos :level :width :orientation |\n\t\t<primitive: return sc.PanAz(_numChan, _in, _pos, _level, _width, _orientation);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "playBuf",
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
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction |\n\t\t<primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "playBuf",
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
  "{ :numChan :bufnum :rate :trigger :startPos :loop :doneAction |\n\t\t<primitive: return sc.PlayBuf(_numChan, _bufnum, _rate, _trigger, _startPos, _loop, _doneAction);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tGrains",
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
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp |\n\t\t<primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tGrains",
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
  "{ :numChan :trigger :bufnum :rate :centerPos :dur :pan :amp :interp |\n\t\t<primitive: return sc.TGrains(_numChan, _trigger, _bufnum, _rate, _centerPos, _dur, _pan, _amp, _interp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "warp1",
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
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp |\n\t\t<primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "warp1",
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
  "{ :numChan :bufnum :pointer :freqScale :windowSize :envbufnum :overlaps :windowRandRatio :interp |\n\t\t<primitive: return sc.Warp1(_numChan, _bufnum, _pointer, _freqScale, _windowSize, _envbufnum, _overlaps, _windowRandRatio, _interp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dswitch",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch(_index, _list);
  }, ["index", "list"]),
  "{ :index :list |\n\t\t<primitive: return sc.Dswitch(_index, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dswitch",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch(_index, _list);
  }, ["index", "list"]),
  "{ :index :list |\n\t\t<primitive: return sc.Dswitch(_index, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dswitch1",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch1(_index, _list);
  }, ["index", "list"]),
  "{ :index :list |\n\t\t<primitive: return sc.Dswitch1(_index, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dswitch1",
  ["index", "list"],
  sl.annotateFunction(function (_index, _list) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _index, _list";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Dswitch1(_index, _list);
  }, ["index", "list"]),
  "{ :index :list |\n\t\t<primitive: return sc.Dswitch1(_index, _list);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "analogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp |\n\t\t<primitive: return sc.AnalogFoldOsc(_freq, _amp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "analogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp |\n\t\t<primitive: return sc.AnalogFoldOsc(_freq, _amp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "analogFoldOsc",
  ["freq", "amp"],
  sl.annotateFunction(function (_freq, _amp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _freq, _amp";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AnalogFoldOsc(_freq, _amp);
  }, ["freq", "amp"]),
  "{ :freq :amp |\n\t\t<primitive: return sc.AnalogFoldOsc(_freq, _amp);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "bezier",
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
  "{ :haltAfter :dx :freq :phase :param |\n\t\t<primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "bezier",
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
  "{ :haltAfter :dx :freq :phase :param |\n\t\t<primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bezier",
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
  "{ :haltAfter :dx :freq :phase :param |\n\t\t<primitive: return sc.Bezier(_haltAfter, _dx, _freq, _phase, _param);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "crossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth |\n\t\t<primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "crossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth |\n\t\t<primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "crossoverDistortion",
  ["in", "amp", "smooth"],
  sl.annotateFunction(function (_in, _amp, _smooth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _amp, _smooth";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CrossoverDistortion(_in, _amp, _smooth);
  }, ["in", "amp", "smooth"]),
  "{ :in :amp :smooth |\n\t\t<primitive: return sc.CrossoverDistortion(_in, _amp, _smooth);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dfm1",
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
  "{ :in :freq :res :inputgain :type :noiselevel |\n\t\t<primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dfm1",
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
  "{ :in :freq :res :inputgain :type :noiselevel |\n\t\t<primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dfm1",
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
  "{ :in :freq :res :inputgain :type :noiselevel |\n\t\t<primitive: return sc.Dfm1(_in, _freq, _res, _inputgain, _type, _noiselevel);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax |\n\t\t<primitive: return sc.DustRange(_iotMin, _iotMax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax |\n\t\t<primitive: return sc.DustRange(_iotMin, _iotMax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dustRange",
  ["iotMin", "iotMax"],
  sl.annotateFunction(function (_iotMin, _iotMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _iotMin, _iotMax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DustRange(_iotMin, _iotMax);
  }, ["iotMin", "iotMax"]),
  "{ :iotMin :iotMax |\n\t\t<primitive: return sc.DustRange(_iotMin, _iotMax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dwgPluckedStiff",
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
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB |\n\t\t<primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dwgPluckedStiff",
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
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB |\n\t\t<primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dwgPluckedStiff",
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
  "{ :freq :amp :gate :pos :c1 :c3 :inp :release :fB |\n\t\t<primitive: return sc.DwgPluckedStiff(_freq, _amp, _gate, _pos, _c1, _c3, _inp, _release, _fB);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dx7",
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
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc |\n\t\t<primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dx7",
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
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc |\n\t\t<primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dx7",
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
  "{ :bufnum :on :off :data :vc :mnn :vel :pw :mw :bc :fc |\n\t\t<primitive: return sc.Dx7(_bufnum, _on, _off, _data, _vc, _mnn, _vel, _pw, _mw, _bc, _fc);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "dx7Env",
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
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol |\n\t\t<primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "dx7Env",
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
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol |\n\t\t<primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dx7Env",
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
  "{ :gate :data :r1 :r2 :r3 :r4 :l1 :l2 :l3 :l4 :ol |\n\t\t<primitive: return sc.Dx7Env(_gate, _data, _r1, _r2, _r3, _r4, _l1, _l2, _l3, _l4, _ol);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "expRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.ExpRandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "expRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.ExpRandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "expRandN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.ExpRandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\t<primitive: return sc.Fm7(_ctlMatrix, _modMatrix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\t<primitive: return sc.Fm7(_ctlMatrix, _modMatrix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fm7",
  ["ctlMatrix", "modMatrix"],
  sl.annotateFunction(function (_ctlMatrix, _modMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _ctlMatrix, _modMatrix";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fm7(_ctlMatrix, _modMatrix);
  }, ["ctlMatrix", "modMatrix"]),
  "{ :ctlMatrix :modMatrix |\n\t\t<primitive: return sc.Fm7(_ctlMatrix, _modMatrix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "freezer",
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
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops |\n\t\t<primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "freezer",
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
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops |\n\t\t<primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "freezer",
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
  "{ :bufnum :left :right :gain :increment :incrementOffset :incrementRandom :rightRandom :syncPhaseTrigger :randomizePhaseTrigger :numberOfLoops |\n\t\t<primitive: return sc.Freezer(_bufnum, _left, _right, _gain, _increment, _incrementOffset, _incrementRandom, _rightRandom, _syncPhaseTrigger, _randomizePhaseTrigger, _numberOfLoops);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "friction",
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
  "{ :in :friction :spring :damp :mass :beltmass |\n\t\t<primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "friction",
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
  "{ :in :friction :spring :damp :mass :beltmass |\n\t\t<primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "friction",
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
  "{ :in :friction :spring :damp :mass :beltmass |\n\t\t<primitive: return sc.Friction(_in, _friction, _spring, _damp, _mass, _beltmass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "greyholeRaw",
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
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size |\n\t\t<primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "greyholeRaw",
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
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size |\n\t\t<primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "greyholeRaw",
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
  "{ :in1 :in2 :damping :delaytime :diffusion :feedback :moddepth :modfreq :size |\n\t\t<primitive: return sc.GreyholeRaw(_in1, _in2, _damping, _delaytime, _diffusion, _feedback, _moddepth, _modfreq, _size);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "lfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist |\n\t\t<primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "lfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist |\n\t\t<primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "lfBrownNoise1",
  ["freq", "dev", "dist"],
  sl.annotateFunction(function (_freq, _dev, _dist) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _dev, _dist";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LfBrownNoise1(_freq, _dev, _dist);
  }, ["freq", "dev", "dist"]),
  "{ :freq :dev :dist |\n\t\t<primitive: return sc.LfBrownNoise1(_freq, _dev, _dist);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "linRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax |\n\t\t<primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "linRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax |\n\t\t<primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linRandN",
  ["numChan", "lo", "hi", "minmax"],
  sl.annotateFunction(function (_numChan, _lo, _hi, _minmax) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _numChan, _lo, _hi, _minmax";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRandN(_numChan, _lo, _hi, _minmax);
  }, ["numChan", "lo", "hi", "minmax"]),
  "{ :numChan :lo :hi :minmax |\n\t\t<primitive: return sc.LinRandN(_numChan, _lo, _hi, _minmax);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "membraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss |\n\t\t<primitive: return sc.MembraneCircle(_excitation, _tension, _loss);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "membraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss |\n\t\t<primitive: return sc.MembraneCircle(_excitation, _tension, _loss);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "membraneCircle",
  ["excitation", "tension", "loss"],
  sl.annotateFunction(function (_excitation, _tension, _loss) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _excitation, _tension, _loss";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MembraneCircle(_excitation, _tension, _loss);
  }, ["excitation", "tension", "loss"]),
  "{ :excitation :tension :loss |\n\t\t<primitive: return sc.MembraneCircle(_excitation, _tension, _loss);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "miBraids",
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
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws |\n\t\t<primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "miBraids",
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
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws |\n\t\t<primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "miBraids",
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
  "{ :pitch :timbre :color :model :trig :resamp :decim :bits :ws |\n\t\t<primitive: return sc.MiBraids(_pitch, _timbre, _color, _model, _trig, _resamp, _decim, _bits, _ws);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "miClouds",
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
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList |\n\t\t<primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "miClouds",
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
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList |\n\t\t<primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "miClouds",
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
  "{ :pit :pos :size :dens :tex :drywet :inGain :spread :rvb :fb :freeze :mode :lofi :trig :inputList |\n\t\t<primitive: return sc.MiClouds(_pit, _pos, _size, _dens, _tex, _drywet, _inGain, _spread, _rvb, _fb, _freeze, _mode, _lofi, _trig, _inputList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "miRings",
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
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass |\n\t\t<primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "miRings",
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
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass |\n\t\t<primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "miRings",
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
  "{ :in :trig :pit :struct :bright :damp :pos :model :poly :internExciter :easteregg :bypass |\n\t\t<primitive: return sc.MiRings(_in, _trig, _pit, _struct, _bright, _damp, _pos, _model, _poly, _internExciter, _easteregg, _bypass);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "moogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res |\n\t\t<primitive: return sc.MoogLadder(_in, _ffreq, _res);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "moogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res |\n\t\t<primitive: return sc.MoogLadder(_in, _ffreq, _res);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "moogLadder",
  ["in", "ffreq", "res"],
  sl.annotateFunction(function (_in, _ffreq, _res) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _ffreq, _res";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MoogLadder(_in, _ffreq, _res);
  }, ["in", "ffreq", "res"]),
  "{ :in :ffreq :res |\n\t\t<primitive: return sc.MoogLadder(_in, _ffreq, _res);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "obxdFilter",
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
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole |\n\t\t<primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "obxdFilter",
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
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole |\n\t\t<primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "obxdFilter",
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
  "{ :in :cutoff :resonance :multimode :bandpass :fourpole |\n\t\t<primitive: return sc.ObxdFilter(_in, _cutoff, _resonance, _multimode, _bandpass, _fourpole);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z |\n\t\t<primitive: return sc.Perlin3(_x, _y, _z);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z |\n\t\t<primitive: return sc.Perlin3(_x, _y, _z);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "perlin3",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Perlin3(_x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z |\n\t\t<primitive: return sc.Perlin3(_x, _y, _z);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "randN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.RandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "randN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.RandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "randN",
  ["numChan", "lo", "hi"],
  sl.annotateFunction(function (_numChan, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _numChan, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandN(_numChan, _lo, _hi);
  }, ["numChan", "lo", "hi"]),
  "{ :numChan :lo :hi |\n\t\t<primitive: return sc.RandN(_numChan, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "rcd",
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
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates |\n\t\t<primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "rcd",
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
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates |\n\t\t<primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "rcd",
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
  "{ :clock :rotate :reset :div :spread :auto :len :down :gates |\n\t\t<primitive: return sc.Rcd(_clock, _rotate, _reset, _div, _spread, _auto, _len, _down, _gates);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "scm",
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
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw |\n\t\t<primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "scm",
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
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw |\n\t\t<primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "scm",
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
  "{ :clock :bpm :rotate :slip :shuffle :skip :pw |\n\t\t<primitive: return sc.Scm(_clock, _bpm, _rotate, _slip, _shuffle, _skip, _pw);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "shufflerB",
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
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta |\n\t\t<primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "shufflerB",
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
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta |\n\t\t<primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "shufflerB",
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
  "{ :bufnum :readLocationMinima :readLocationMaxima :readIncrementMinima :readIncrementMaxima :durationMinima :durationMaxima :envelopeAmplitudeMinima :envelopeAmplitudeMaxima :envelopeShapeMinima :envelopeShapeMaxima :envelopeSkewMinima :envelopeSkewMaxima :stereoLocationMinima :stereoLocationMaxima :interOffsetTimeMinima :interOffsetTimeMaxima :ftableReadLocationIncrement :readIncrementQuanta :interOffsetTimeQuanta |\n\t\t<primitive: return sc.ShufflerB(_bufnum, _readLocationMinima, _readLocationMaxima, _readIncrementMinima, _readIncrementMaxima, _durationMinima, _durationMaxima, _envelopeAmplitudeMinima, _envelopeAmplitudeMaxima, _envelopeShapeMinima, _envelopeShapeMaxima, _envelopeSkewMinima, _envelopeSkewMaxima, _stereoLocationMinima, _stereoLocationMaxima, _interOffsetTimeMinima, _interOffsetTimeMaxima, _ftableReadLocationIncrement, _readIncrementQuanta, _interOffsetTimeQuanta);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "sinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq |\n\t\t<primitive: return sc.SinGrain(_trigger, _dur, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "sinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq |\n\t\t<primitive: return sc.SinGrain(_trigger, _dur, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sinGrain",
  ["trigger", "dur", "freq"],
  sl.annotateFunction(function (_trigger, _dur, _freq) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _trigger, _dur, _freq";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SinGrain(_trigger, _dur, _freq);
  }, ["trigger", "dur", "freq"]),
  "{ :trigger :dur :freq |\n\t\t<primitive: return sc.SinGrain(_trigger, _dur, _freq);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "svf",
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
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak |\n\t\t<primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "svf",
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
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak |\n\t\t<primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "svf",
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
  "{ :signal :cutoff :res :lowpass :bandpass :highpass :notch :peak |\n\t\t<primitive: return sc.Svf(_signal, _cutoff, _res, _lowpass, _bandpass, _highpass, _notch, _peak);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "svfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfBp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "svfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfBp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "svfBp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfBp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfBp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "svfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfHp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "svfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfHp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "svfHp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfHp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfHp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "svfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfLp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "svfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfLp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "svfLp",
  ["in", "freq", "q"],
  sl.annotateFunction(function (_in, _freq, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _freq, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SvfLp(_in, _freq, _q);
  }, ["in", "freq", "q"]),
  "{ :in :freq :q |\n\t\t<primitive: return sc.SvfLp(_in, _freq, _q);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger |\n\t\t<primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger |\n\t\t<primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tLinRand",
  ["lo", "hi", "minmax", "trigger"],
  sl.annotateFunction(function (_lo, _hi, _minmax, _trigger) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _lo, _hi, _minmax, _trigger";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TLinRand(_lo, _hi, _minmax, _trigger);
  }, ["lo", "hi", "minmax", "trigger"]),
  "{ :lo :hi :minmax :trigger |\n\t\t<primitive: return sc.TLinRand(_lo, _hi, _minmax, _trigger);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "tScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs |\n\t\t<primitive: return sc.TScramble(_trigger, _inputs);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "tScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs |\n\t\t<primitive: return sc.TScramble(_trigger, _inputs);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tScramble",
  ["trigger", "inputs"],
  sl.annotateFunction(function (_trigger, _inputs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _trigger, _inputs";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TScramble(_trigger, _inputs);
  }, ["trigger", "inputs"]),
  "{ :trigger :inputs |\n\t\t<primitive: return sc.TScramble(_trigger, _inputs);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "trigAllocator",
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
  "{ :numChannels :algorithm :in :dur |\n\t\t<primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "trigAllocator",
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
  "{ :numChannels :algorithm :in :dur |\n\t\t<primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "trigAllocator",
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
  "{ :numChannels :algorithm :in :dur |\n\t\t<primitive: return sc.TrigAllocator(_numChannels, _algorithm, _in, _dur);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "trigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in |\n\t\t<primitive: return sc.TrigRoundRobin(_numChannels, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "trigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in |\n\t\t<primitive: return sc.TrigRoundRobin(_numChannels, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "trigRoundRobin",
  ["numChannels", "in"],
  sl.annotateFunction(function (_numChannels, _in) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numChannels, _in";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TrigRoundRobin(_numChannels, _in);
  }, ["numChannels", "in"]),
  "{ :numChannels :in |\n\t\t<primitive: return sc.TrigRoundRobin(_numChannels, _in);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "vbJonVerb",
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
  "{ :in :decay :damping :inputbw :erfl :tail |\n\t\t<primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "vbJonVerb",
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
  "{ :in :decay :damping :inputbw :erfl :tail |\n\t\t<primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "vbJonVerb",
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
  "{ :in :decay :damping :inputbw :erfl :tail |\n\t\t<primitive: return sc.VbJonVerb(_in, _decay, _damping, _inputbw, _erfl, _tail);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay |\n\t\t<primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay |\n\t\t<primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "vosim",
  ["trig", "freq", "nCycles", "decay"],
  sl.annotateFunction(function (_trig, _freq, _nCycles, _decay) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _trig, _freq, _nCycles, _decay";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Vosim(_trig, _freq, _nCycles, _decay);
  }, ["trig", "freq", "nCycles", "decay"]),
  "{ :trig :freq :nCycles :decay |\n\t\t<primitive: return sc.Vosim(_trig, _freq, _nCycles, _decay);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "wDistances",
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
  "{ :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "wDistances",
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
  "{ :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "wDistances",
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
  "{ :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WDistances(_gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "waveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode |\n\t\t<primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "waveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode |\n\t\t<primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "waveLoss",
  ["in", "drop", "outof", "mode"],
  sl.annotateFunction(function (_in, _drop, _outof, _mode) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in, _drop, _outof, _mode";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WaveLoss(_in, _drop, _outof, _mode);
  }, ["in", "drop", "outof", "mode"]),
  "{ :in :drop :outof :mode |\n\t\t<primitive: return sc.WaveLoss(_in, _drop, _outof, _mode);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "wkNearest",
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
  "{ :numChannels :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "wkNearest",
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
  "{ :numChannels :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "wkNearest",
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
  "{ :numChannels :gate :x :y :z :coordinateList |\n\t\t<primitive: return sc.WkNearest(_numChannels, _gate, _x, _y, _z, _coordinateList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "expRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ExpRandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "expRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ExpRandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "expRandRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ExpRandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ExpRandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "firstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.FirstArg(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "firstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.FirstArg(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "firstArg",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.FirstArg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.FirstArg(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "randRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.RandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "randRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.RandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "randRange",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RandRange(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.RandRange(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UgenBindings",
  "ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ring1(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UgenBindings",
  "ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ring1(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ring1",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ring1(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ring1(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "biLinRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BiLinRand(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.BiLinRand(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "coin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Coin(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Coin(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.HanWindow(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.HanWindow(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.LinRand_(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.LinRand_(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sum3Rand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum3Rand(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sum3Rand(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "triWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TriWindow(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.TriWindow(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "welchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.WelchWindow(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.WelchWindow(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Abs(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Abs(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "absoluteValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Abs(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Abs(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ampDb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmpDb(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.AmpDb(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcCos(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.ArcCos(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcSin(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.ArcSin(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ArcTan(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.ArcTan(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ceil(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Ceil(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cos(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Cos(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cosh(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Cosh(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cpsMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.CpsMidi(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.CpsMidi(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Cubed(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Cubed(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "dbAmp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DbAmp(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.DbAmp(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "distort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Distort(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Distort(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Exp(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Exp(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Floor(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Floor(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Frac(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Frac(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Log(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log10(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Log10(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Log2(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Log2(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "midiCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiCps(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.MidiCps(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "midiRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MidiRatio(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.MidiRatio(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Neg(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Neg(_self);>\n\t}",
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
    } /* Primitive */
    return sc.Neg(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Neg(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "ratioMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RatioMidi(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.RatioMidi(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Recip(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Recip(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sign(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sign(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "signedSqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sqrt(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sqrt(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "signedSquareRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sqrt(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sqrt(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sin(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sin(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sinh(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Sinh(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "softClip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SoftClip(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.SoftClip(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Squared(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Squared(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tan(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Tan(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Tanh(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.Tanh(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "absDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AbsDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.AbsDif(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "amClip",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.AmClip(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.AmClip(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Atan2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Atan2(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitAnd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.BitAnd(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.BitOr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.BitOr(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftLeft(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.ShiftLeft(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftLeft(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftRight(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.ShiftRight(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ShiftRight(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "difSqr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DifSqr(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.DifSqr(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fdiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Fdiv(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Fdiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Fdiv(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "excess",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Excess(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Excess(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "hypotenuse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Hypot(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Hypot(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Eq(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Eq(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Eq(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Eq(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isGreater",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Gt(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Gt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Gt(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isGreaterOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ge(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ge(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Ge(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ge(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isLess",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Lt(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Lt(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Lt(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isLessOrEqual",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Le(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Le(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Le(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Le(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "isUnequal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Ne(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ne(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Ne(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Ne(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Max(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Max(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Min(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Min(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mod(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Mod(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Mod(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Mod(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Add(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Add(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Add(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Add(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "power",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Pow(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Pow(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Idiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Idiv(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Idiv(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Idiv(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "round",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.RoundTo(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.RoundTo(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "scaleNegative",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ScaleNeg(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.ScaleNeg(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "signedGcd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Gcd(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Gcd(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "signedLcm",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Lcm(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Lcm(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "signedPower",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Pow(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "asteriskAsterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Pow(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Pow(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "sqrDif",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.SqrDif(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.SqrDif(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "subtract",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sub(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Sub(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Sub(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Sub(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "tableRand",
  ["bufnum", "trig"],
  sl.annotateFunction(function (_bufnum, _trig) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bufnum, _trig";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.TableRand(_trig, _bufnum);
  }, ["bufnum", "trig"]),
  "{ :bufnum :trig |\n\t\t<primitive: return sc.TableRand(_trig, _bufnum);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Mul(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Mul(_self, _anObject);>\n\t}",
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
    } /* Primitive */
    return sc.Mul(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Mul(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "truncate",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trunc(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Trunc(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "integerPart",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Trunc(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Trunc(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bilateralClip",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Clip2(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bilateralFold",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Fold2(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "bilateralWrap",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return sc.Wrap2(_self, _anObject);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "clip",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Clip(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.Clip(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "degreeToKey",
  ["bufnum", "in", "octave"],
  sl.annotateFunction(function (_bufnum, _in, _octave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bufnum, _in, _octave";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.DegreeToKey(_bufnum, _in, _octave);
  }, ["bufnum", "in", "octave"]),
  "{ :bufnum :in :octave |\n\t\t<primitive: return sc.DegreeToKey(_bufnum, _in, _octave);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fold",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Fold(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.Fold(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "linExp",
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
  "{ :in :srclo :srchi :dstlo :dsthi |\n\t\t<primitive: return sc.LinExp(_in, _srclo, _srchi, _dstlo, _dsthi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "medianFilter",
  ["in", "r"],
  sl.annotateFunction(function (_in, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _in, _r";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_r)) {
      return sc.Median(_r * 2 + 1, _in);
    }
    /* Statements */
    return _error_2(_in, "medianFilter: length not scalar");
  }, ["in", "r"]),
  "{ :in :r |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_r)) {\n\t\t\treturn sc.Median(_r * 2 + 1, _in);\n\t\t}\n\t\t>\n\t\tin.error('medianFilter: length not scalar')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "modularDistance",
  ["x", "y", "mod"],
  sl.annotateFunction(function (_x, _y, _mod) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _mod";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.ModDif(_x, _y, _mod);
  }, ["x", "y", "mod"]),
  "{ :x :y :mod |\n\t\t<primitive: return sc.ModDif(_x, _y, _mod);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "plus",
  ["in0", "in1", "in2", "in3"],
  sl.annotateFunction(function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  }, ["in0", "in1", "in2", "in3"]),
  "{ :in0 :in1 :in2 :in3 |\n\t\t<primitive: return sc.Sum4(_in0, _in1, _in2, _in3);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "plusSign",
  ["in0", "in1", "in2", "in3"],
  sl.annotateFunction(function (_in0, _in1, _in2, _in3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _in0, _in1, _in2, _in3";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Sum4(_in0, _in1, _in2, _in3);
  }, ["in0", "in1", "in2", "in3"]),
  "{ :in0 :in1 :in2 :in3 |\n\t\t<primitive: return sc.Sum4(_in0, _in1, _in2, _in3);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "timesPlus",
  ["in", "mul", "add"],
  sl.annotateFunction(function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  }, ["in", "mul", "add"]),
  "{ :in :mul :add |\n\t\t<primitive: return sc.MulAdd(_in, _mul, _add);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "asteriskPlusSign",
  ["in", "mul", "add"],
  sl.annotateFunction(function (_in, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _mul, _add";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.MulAdd(_in, _mul, _add);
  }, ["in", "mul", "add"]),
  "{ :in :mul :add |\n\t\t<primitive: return sc.MulAdd(_in, _mul, _add);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "wrap",
  ["in", "lo", "hi"],
  sl.annotateFunction(function (_in, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _in, _lo, _hi";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.Wrap(_in, _lo, _hi);
  }, ["in", "lo", "hi"]),
  "{ :in :lo :hi |\n\t\t<primitive: return sc.Wrap(_in, _lo, _hi);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "clip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, -1, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.clip(-1, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "fold",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fold_3(_self, -1, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.fold(-1, 1)\n\t}",
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
    return _round_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.round(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.truncate(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "unitCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midiCps_1(_asterisk_2(_self, 100));
  }, ["self"]),
  "{ :self |\n\t\t(self * 100).midiCps\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Ugen",
  "UgenBindings",
  "wrap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _wrap_3(_self, -1, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.wrap(-1, 1)\n\t}",
);
