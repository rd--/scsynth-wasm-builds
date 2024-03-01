sl.addMethod(
  "Record",
  "KeywordUgens",
  "AllpassC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _AllpassC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassC(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "AllpassL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _AllpassL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassL(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "AllpassN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _AllpassN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassN(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Bpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Bpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Bpf(d::in, d::freq, d::rq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Brf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Brf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Brf(d::in, d::freq, d::rq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Balance2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Balance2_4(
      _at_2(_d, "left"),
      _at_2(_d, "right"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | Balance2(d::left, d::right, d::pos, d::level) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Blip",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Blip_2(_at_2(_d, "freq"), _at_2(_d, "numHarm"));
  },
  "{ :d | Blip(d::freq, d::numHarm) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "CombC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CombC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombC(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "CombL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CombL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombL(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "CombN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CombN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombN(d::in, d::maxDelayTime, d::delayTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Compander",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Compander_7(
      _at_2(_d, "in"),
      _at_2(_d, "control"),
      _at_2(_d, "thresh"),
      _at_2(_d, "slopeBelow"),
      _at_2(_d, "slopeAbove"),
      _at_2(_d, "clampTime"),
      _at_2(_d, "relaxTime"),
    );
  },
  "{ :d | Compander(d::in, d::control, d::thresh, d::slopeBelow, d::slopeAbove, d::clampTime, d::relaxTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Decay",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Decay_2(_at_2(_d, "in"), _at_2(_d, "decayTime"));
  },
  "{ :d | Decay(d::in, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Decay2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Decay2_3(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | Decay2(d::in, d::attackTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "DegreeToKey",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _DegreeToKey_3(
      _at_2(_d, "bufNum"),
      _at_2(_d, "in"),
      _at_2(_d, "octave"),
    );
  },
  "{ :d | DegreeToKey(d::bufNum, d::in, d::octave) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "DelayC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _DelayC_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayC(d::in, d::maxDelayTime, d::delayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "DelayL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _DelayL_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayL(d::in, d::maxDelayTime, d::delayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "DelayN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _DelayN_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayN(d::in, d::maxDelayTime, d::delayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Demand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Demand_3(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "demandUgens"),
    );
  },
  "{ :d | Demand(d::trig, d::reset, d::demandUgens) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Dseq",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Dseq_2(_at_2(_d, "repeats"), _at_2(_d, "list"));
  },
  "{ :d | Dseq(d::repeats, d::list) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Dust",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Dust_1(_at_2(_d, "density"));
  },
  "{ :d | Dust(d::density) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Dust2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Dust2_1(_at_2(_d, "density"));
  },
  "{ :d | Dust2(d::density) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "EnvGen",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _EnvGen_6(
      _at_2(_d, "gate"),
      _at_2(_d, "levelScale"),
      _at_2(_d, "levelBias"),
      _at_2(_d, "timeScale"),
      _at_2(_d, "doneAction"),
      _at_2(_d, "envelope"),
    );
  },
  "{ :d | EnvGen(d::gate, d::levelScale, d::levelBias, d::timeScale, d::doneAction, d::envelope) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "ExpRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ExpRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | ExpRand(d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Fos",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fos_4(
      _at_2(_d, "in"),
      _at_2(_d, "a0"),
      _at_2(_d, "a1"),
      _at_2(_d, "b1"),
    );
  },
  "{ :d | Fos(d::in, d::a0, d::a1, d::b1) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "FSinOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _FSinOsc_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | FSinOsc(d::freq, d::iphase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Fold",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fold_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Fold(d::in, d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Formant",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Formant_3(
      _at_2(_d, "fundFreq"),
      _at_2(_d, "formFreq"),
      _at_2(_d, "bwfreq"),
    );
  },
  "{ :d | Formant(d::fundFreq, d::formFreq, d::bwfreq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Formlet",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Formlet_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | Formlet(d::in, d::freq, d::attackTime, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _FreeVerb_4(
      _at_2(_d, "in"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  },
  "{ :d | FreeVerb(d::in, d::mix, d::room, d::damp) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _FreeVerb2_5(
      _at_2(_d, "in"),
      _at_2(_d, "in2"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  },
  "{ :d | FreeVerb2(d::in, d::in2, d::mix, d::room, d::damp) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "FreqShift",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _FreqShift_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | FreqShift(d::in, d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "GVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _GVerb_10(
      _at_2(_d, "in"),
      _at_2(_d, "roomSize"),
      _at_2(_d, "revtime"),
      _at_2(_d, "damping"),
      _at_2(_d, "inputbw"),
      _at_2(_d, "spread"),
      _at_2(_d, "drylevel"),
      _at_2(_d, "earlyreflevel"),
      _at_2(_d, "tailLevel"),
      _at_2(_d, "maxroomSize"),
    );
  },
  "{ :d | GVerb(d::in, d::roomSize, d::revtime, d::damping, d::inputbw, d::spread, d::drylevel, d::earlyreflevel, d::tailLevel, d::maxroomSize) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Gate",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Gate_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  },
  "{ :d | Gate(d::in, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Gendy1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Gendy1_10(
      _at_2(_d, "ampDist"),
      _at_2(_d, "durDist"),
      _at_2(_d, "adParam"),
      _at_2(_d, "ddParam"),
      _at_2(_d, "minFreq"),
      _at_2(_d, "maxFreq"),
      _at_2(_d, "ampScale"),
      _at_2(_d, "durScale"),
      _at_2(_d, "initCps"),
      _at_2(_d, "kNum"),
    );
  },
  "{ :d | Gendy1(d::ampDist, d::durDist, d::adParam, d::ddParam, d::minFreq, d::maxFreq, d::ampScale, d::durScale, d::initCps, d::kNum) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Gendy2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Gendy2_12(
      _at_2(_d, "ampDist"),
      _at_2(_d, "durDist"),
      _at_2(_d, "adParam"),
      _at_2(_d, "ddParam"),
      _at_2(_d, "minFreq"),
      _at_2(_d, "maxFreq"),
      _at_2(_d, "ampScale"),
      _at_2(_d, "durScale"),
      _at_2(_d, "initCps"),
      _at_2(_d, "kNum"),
      _at_2(_d, "a"),
      _at_2(_d, "c"),
    );
  },
  "{ :d | Gendy2(d::ampDist, d::durDist, d::adParam, d::ddParam, d::minFreq, d::maxFreq, d::ampScale, d::durScale, d::initCps, d::kNum, d::a, d::c) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Gendy3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Gendy3_9(
      _at_2(_d, "ampDist"),
      _at_2(_d, "durDist"),
      _at_2(_d, "adParam"),
      _at_2(_d, "ddParam"),
      _at_2(_d, "freq"),
      _at_2(_d, "ampScale"),
      _at_2(_d, "durScale"),
      _at_2(_d, "initCps"),
      _at_2(_d, "kNum"),
    );
  },
  "{ :d | Gendy3(d::ampDist, d::durDist, d::adParam, d::ddParam, d::freq, d::ampScale, d::durScale, d::initCps, d::kNum) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "GrainBuf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _GrainBuf_10(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "sndBuf"),
      _at_2(_d, "rate"),
      _at_2(_d, "pos"),
      _at_2(_d, "interp"),
      _at_2(_d, "pan"),
      _questionMark_2(_at_2(_d, "envBufNum"), -1.0),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainBuf(d::numChan, d::trigger, d::dur, d::sndBuf, d::rate, d::pos, d::interp, d::pan, d::envBufNum ? -1.0, d::maxGrains) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "GrainFm",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _GrainFm_9(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "carFreq"),
      _at_2(_d, "modFreq"),
      _at_2(_d, "index"),
      _at_2(_d, "pan"),
      _questionMark_2(_at_2(_d, "envBufNum"), -1.0),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainFm(d::numChan, d::trigger, d::dur, d::carFreq, d::modFreq, d::index, d::pan, d::envBufNum ? -1.0, d::maxGrains) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "GrainIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _GrainIn_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "in"),
      _at_2(_d, "pan"),
      _questionMark_2(_at_2(_d, "envBufNum"), -1.0),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainIn(d::numChan, d::trigger, d::dur, d::in, d::pan, d::envBufNum ? -1.0, d::maxGrains) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "GrainSin",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _GrainSin_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "freq"),
      _at_2(_d, "pan"),
      _questionMark_2(_at_2(_d, "envBufNum"), -1.0),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainSin(d::numChan, d::trigger, d::dur, d::freq, d::pan, d::envBufNum ? -1.0, d::maxGrains) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Hpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Hpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  },
  "{ :d | Hpf(d::in, d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "IRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _IRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | IRand(d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Impulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Impulse_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | Impulse(d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfCub",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfCub_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfCub(d::freq, d::iphase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfGauss",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfGauss_5(
      _at_2(_d, "duration"),
      _at_2(_d, "width"),
      _at_2(_d, "iphase"),
      _at_2(_d, "loop"),
      _at_2(_d, "doneAction"),
    );
  },
  "{ :d | LfGauss(d::duration, d::width, d::iphase, d::loop, d::doneAction) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfNoise0",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfNoise0_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise0(d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfNoise1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfNoise1_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise1(d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfNoise2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfNoise2_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise2(d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfPar",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfPar_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfPar(d::freq, d::iphase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfPulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfPulse_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  },
  "{ :d | LfPulse(d::freq, d::iphase, d::width) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfSaw_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfSaw(d::freq, d::iphase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LfTri",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LfTri_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfTri(d::freq, d::iphase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  },
  "{ :d | Lpf(d::in, d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lag",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lag_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag(d::in, d::lagTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lag2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lag2_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag2(d::in, d::lagTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lag2Ud",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lag2Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | Lag2Ud(d::in, d::lagTimeU, d::lagTimeD) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lag3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lag3_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag3(d::in, d::lagTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Lag3Ud",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Lag3Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | Lag3Ud(d::in, d::lagTimeU, d::lagTimeD) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LagIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LagIn_3(_at_2(_d, "numChan"), _at_2(_d, "bus"), _at_2(_d, "lag"));
  },
  "{ :d | LagIn(d::numChan, d::bus, d::lag) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LagUd",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LagUd_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | LagUd(d::in, d::lagTimeU, d::lagTimeD) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Latch",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Latch_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  },
  "{ :d | Latch(d::in, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LeakDc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LeakDc_2(_at_2(_d, "in"), _at_2(_d, "coef"));
  },
  "{ :d | LeakDc(d::in, d::coef) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Line",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Line_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  },
  "{ :d | Line(d::start, d::end, d::dur) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LinExp",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinExp_5(
      _at_2(_d, "in"),
      _at_2(_d, "srcLo"),
      _at_2(_d, "srcHi"),
      _at_2(_d, "dstLo"),
      _at_2(_d, "dstHi"),
    );
  },
  "{ :d | LinExp(d::in, d::srcLo, d::srcHi, d::dstLo, d::dstHi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LinPan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinPan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  },
  "{ :d | LinPan2(d::in, d::pos, d::level) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LinRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "minmax"));
  },
  "{ :d | LinRand(d::lo, d::hi, d::minmax) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LinXFade2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinXFade2_3(_at_2(_d, "inA"), _at_2(_d, "inB"), _at_2(_d, "pan"));
  },
  "{ :d | LinXFade2(d::inA, d::inB, d::pan) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Linen",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Linen_5(
      _at_2(_d, "gate"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "susLevel"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "doneAction"),
    );
  },
  "{ :d | Linen(d::gate, d::attackTime, d::susLevel, d::releaseTime, d::doneAction) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LocalBuf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LocalBuf_2(_at_2(_d, "numChannels"), _at_2(_d, "numFrames"));
  },
  "{ :d | LocalBuf(d::numChannels, d::numFrames) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LocalIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LocalIn_2(_at_2(_d, "numChan"), _at_2(_d, "default"));
  },
  "{ :d | LocalIn(d::numChan, d::default) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "LocalOut",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LocalOut_1(_at_2(_d, "channelsList"));
  },
  "{ :d | LocalOut(d::channelsList) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MoogFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MoogFf_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "gain"),
      _at_2(_d, "reset"),
    );
  },
  "{ :d | MoogFf(d::in, d::freq, d::gain, d::reset) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MouseButton",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MouseButton_3(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseButton(d::minVal, d::maxVal, d::lag) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MouseX",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MouseX_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseX(d::minVal, d::maxVal, d::warp, d::lag) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MouseY",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MouseY_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseY(d::minVal, d::maxVal, d::warp, d::lag) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MVerb_11(
      _at_2(_d, "in1"),
      _at_2(_d, "in2"),
      _at_2(_d, "dampingFreq"),
      _at_2(_d, "density"),
      _at_2(_d, "bandwidthFreq"),
      _at_2(_d, "decay"),
      _at_2(_d, "preDelay"),
      _at_2(_d, "size"),
      _at_2(_d, "gain"),
      _at_2(_d, "mix"),
      _at_2(_d, "earlyMix"),
    );
  },
  "{ :d | MVerb(d::in1, d::in2, d::dampingFreq, d::density, d::bandwidthFreq, d::decay, d::preDelay, d::size, d::gain, d::mix, d::earlyMix) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "NRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _NRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "n"));
  },
  "{ :d | NRand(d::lo, d::hi, d::n) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Osc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Osc_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | Osc(d::bufNum, d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "OscN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _OscN_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | OscN(d::bufNum, d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Out",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Out_2(_at_2(_d, "bus"), _at_2(_d, "channelsList"));
  },
  "{ :d | Out(d::bus, d::channelsList) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Pan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  },
  "{ :d | Pan2(d::in, d::pos, d::level) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Pan4",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pan4_4(
      _at_2(_d, "in"),
      _at_2(_d, "xpos"),
      _at_2(_d, "ypos"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | Pan4(d::in, d::xpos, d::ypos, d::level) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "PanAz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PanAz_6(
      _at_2(_d, "numChan"),
      _at_2(_d, "in"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
      _at_2(_d, "width"),
      _at_2(_d, "orientation"),
    );
  },
  "{ :d | PanAz(d::numChan, d::in, d::pos, d::level, d::width, d::orientation) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Phasor",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Phasor_5(
      _at_2(_d, "trig"),
      _at_2(_d, "rate"),
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "resetPos"),
    );
  },
  "{ :d | Phasor(d::trig, d::rate, d::start, d::end, d::resetPos) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Pitch",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pitch_11(
      _at_2(_d, "in"),
      _at_2(_d, "initFreq"),
      _at_2(_d, "minFreq"),
      _at_2(_d, "maxFreq"),
      _at_2(_d, "execFreq"),
      _at_2(_d, "maxBinsPerOctave"),
      _at_2(_d, "median"),
      _at_2(_d, "ampThreshold"),
      _at_2(_d, "peakThreshold"),
      _at_2(_d, "downSample"),
      _at_2(_d, "clar"),
    );
  },
  "{ :d | Pitch(d::in, d::initFreq, d::minFreq, d::maxFreq, d::execFreq, d::maxBinsPerOctave, d::median, d::ampThreshold, d::peakThreshold, d::downSample, d::clar) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "PitchShift",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PitchShift_5(
      _at_2(_d, "in"),
      _at_2(_d, "windowSize"),
      _at_2(_d, "pitchRatio"),
      _at_2(_d, "pitchDispersion"),
      _at_2(_d, "timeDispersion"),
    );
  },
  "{ :d | PitchShift(d::in, d::windowSize, d::pitchRatio, d::pitchDispersion, d::timeDispersion) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Pluck",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pluck_6(
      _at_2(_d, "in"),
      _at_2(_d, "trig"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
      _at_2(_d, "coef"),
    );
  },
  "{ :d | Pluck(d::in, d::trig, d::maxDelayTime, d::delayTime, d::decayTime, d::coef) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Pulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Pulse_2(_at_2(_d, "freq"), _at_2(_d, "width"));
  },
  "{ :d | Pulse(d::freq, d::width) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "PulseCount",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PulseCount_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  },
  "{ :d | PulseCount(d::trig, d::reset) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "PulseDivider",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PulseDivider_3(
      _at_2(_d, "trig"),
      _at_2(_d, "div"),
      _at_2(_d, "start"),
    );
  },
  "{ :d | PulseDivider(d::trig, d::div, d::start) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Rhpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rhpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Rhpf(d::in, d::freq, d::rq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Rlpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rlpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Rlpf(d::in, d::freq, d::rq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Ramp",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Ramp_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Ramp(d::in, d::lagTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Rand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Rand(d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Resonz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Resonz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "bwr"));
  },
  "{ :d | Resonz(d::in, d::freq, d::bwr) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Ringz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Ringz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "decayTime"));
  },
  "{ :d | Ringz(d::in, d::freq, d::decayTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Rotate2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rotate2_3(_at_2(_d, "x"), _at_2(_d, "y"), _at_2(_d, "pos"));
  },
  "{ :d | Rotate2(d::x, d::y, d::pos) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Saw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Saw_1(_at_2(_d, "freq"));
  },
  "{ :d | Saw(d::freq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Schmidt",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Schmidt_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Schmidt(d::in, d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Select",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Select_2(_at_2(_d, "which"), _at_2(_d, "array"));
  },
  "{ :d | Select(d::which, d::array) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "SetResetFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SetResetFf_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  },
  "{ :d | SetResetFf(d::trig, d::reset) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Shaper",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Shaper_2(_at_2(_d, "bufNum"), _at_2(_d, "in"));
  },
  "{ :d | Shaper(d::bufNum, d::in) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "SinOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SinOsc_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | SinOsc(d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "SinOscFb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SinOscFb_2(_at_2(_d, "freq"), _at_2(_d, "feedback"));
  },
  "{ :d | SinOscFb(d::freq, d::feedback) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Slew",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Slew_3(_at_2(_d, "in"), _at_2(_d, "up"), _at_2(_d, "dn"));
  },
  "{ :d | Slew(d::in, d::up, d::dn) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Slope",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Slope_1(_at_2(_d, "in"));
  },
  "{ :d | Slope(d::in) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Stepper",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Stepper_6(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "min"),
      _at_2(_d, "max"),
      _at_2(_d, "step"),
      _at_2(_d, "resetval"),
    );
  },
  "{ :d | Stepper(d::trig, d::reset, d::min, d::max, d::step, d::resetval) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Sweep",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Sweep_2(_at_2(_d, "trig"), _at_2(_d, "rate"));
  },
  "{ :d | Sweep(d::trig, d::rate) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "SyncSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SyncSaw_2(_at_2(_d, "syncFreq"), _at_2(_d, "sawFreq"));
  },
  "{ :d | SyncSaw(d::syncFreq, d::sawFreq) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TExpRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TExpRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TExpRand(d::lo, d::hi, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TGrains",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TGrains_9(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "bufNum"),
      _at_2(_d, "rate"),
      _at_2(_d, "centerPos"),
      _at_2(_d, "dur"),
      _at_2(_d, "pan"),
      _at_2(_d, "amp"),
      _at_2(_d, "interp"),
    );
  },
  "{ :d | TGrains(d::numChan, d::trigger, d::bufNum, d::rate, d::centerPos, d::dur, d::pan, d::amp, d::interp) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TiRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TiRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TiRand(d::lo, d::hi, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TRand(d::lo, d::hi, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Timer",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Timer_1(_at_2(_d, "trig"));
  },
  "{ :d | Timer(d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "ToggleFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ToggleFf_1(_at_2(_d, "trig"));
  },
  "{ :d | ToggleFf(d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Trig",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  },
  "{ :d | Trig(d::in, d::dur) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Trig1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Trig1_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  },
  "{ :d | Trig1(d::in, d::dur) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TwoPole",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TwoPole_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  },
  "{ :d | TwoPole(d::in, d::freq, d::radius) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TwoZero",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TwoZero_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  },
  "{ :d | TwoZero(d::in, d::freq, d::radius) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "VOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _VOsc_3(_at_2(_d, "bufPos"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | VOsc(d::bufPos, d::freq, d::phase) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "VOsc3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _VOsc3_4(
      _at_2(_d, "bufPos"),
      _at_2(_d, "freq1"),
      _at_2(_d, "freq2"),
      _at_2(_d, "freq3"),
    );
  },
  "{ :d | VOsc3(d::bufPos, d::freq1, d::freq2, d::freq3) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "VarLag",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _VarLag_5(
      _at_2(_d, "in"),
      _at_2(_d, "time"),
      _at_2(_d, "curvature"),
      _at_2(_d, "warp"),
      _at_2(_d, "start"),
    );
  },
  "{ :d | VarLag(d::in, d::time, d::curvature, d::warp, d::start) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "VarSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _VarSaw_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  },
  "{ :d | VarSaw(d::freq, d::iphase, d::width) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Vibrato",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Vibrato_9(
      _at_2(_d, "freq"),
      _at_2(_d, "rate"),
      _at_2(_d, "depth"),
      _at_2(_d, "delay"),
      _at_2(_d, "onset"),
      _at_2(_d, "rateVariation"),
      _at_2(_d, "depthVariation"),
      _at_2(_d, "iphase"),
      _at_2(_d, "trig"),
    );
  },
  "{ :d | Vibrato(d::freq, d::rate, d::depth, d::delay, d::onset, d::rateVariation, d::depthVariation, d::iphase, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Warp1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Warp1_9(
      _at_2(_d, "numChan"),
      _at_2(_d, "bufNum"),
      _at_2(_d, "pointer"),
      _at_2(_d, "freqScale"),
      _at_2(_d, "windowSize"),
      _questionMark_2(_at_2(_d, "envBufNum"), -1.0),
      _at_2(_d, "overlaps"),
      _at_2(_d, "windowRandRatio"),
      _at_2(_d, "interp"),
    );
  },
  "{ :d | Warp1(d::numChan, d::bufNum, d::pointer, d::freqScale, d::windowSize, d::envBufNum ? -1.0, d::overlaps, d::windowRandRatio, d::interp) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Wrap",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Wrap_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Wrap(d::in, d::lo, d::hi) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "XFade2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _XFade2_4(
      _at_2(_d, "inA"),
      _at_2(_d, "inB"),
      _at_2(_d, "pan"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | XFade2(d::inA, d::inB, d::pan, d::level) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Env",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Env_6(
      _at_2(_d, "levels"),
      _at_2(_d, "times"),
      _at_2(_d, "curves"),
      _at_2(_d, "releaseNode"),
      _at_2(_d, "loopNode"),
      _at_2(_d, "offset"),
    );
  },
  "{ :d | Env(d::levels, d::times, d::curves, d::releaseNode, d::loopNode, d::offset) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "EqPan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _EqPan2_2(_at_2(_d, "in"), _at_2(_d, "pos"));
  },
  "{ :d | EqPan2(d::in, d::pos) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MembraneCircle",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MembraneCircle_3(
      _at_2(_d, "excitation"),
      _at_2(_d, "tension"),
      _at_2(_d, "loss"),
    );
  },
  "{ :d | MembraneCircle(d::excitation, d::tension, d::loss) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MiBraids",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MiBraids_9(
      _at_2(_d, "pitch"),
      _at_2(_d, "timbre"),
      _at_2(_d, "color"),
      _at_2(_d, "model"),
      _at_2(_d, "trig"),
      _at_2(_d, "resamp"),
      _at_2(_d, "decim"),
      _at_2(_d, "bits"),
      _at_2(_d, "ws"),
    );
  },
  "{ :d | MiBraids(d::pitch, d::timbre, d::color, d::model, d::trig, d::resamp, d::decim, d::bits, d::ws) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MiClouds",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MiClouds_15(
      _at_2(_d, "pit"),
      _at_2(_d, "pos"),
      _at_2(_d, "size"),
      _at_2(_d, "dens"),
      _at_2(_d, "tex"),
      _at_2(_d, "dryWet"),
      _at_2(_d, "inGain"),
      _at_2(_d, "spread"),
      _at_2(_d, "rvb"),
      _at_2(_d, "fb"),
      _at_2(_d, "freeze"),
      _at_2(_d, "mode"),
      _at_2(_d, "lofi"),
      _at_2(_d, "trig"),
      _at_2(_d, "inputList"),
    );
  },
  "{ :d | MiClouds(d::pit, d::pos, d::size, d::dens, d::tex, d::dryWet, d::inGain, d::spread, d::rvb, d::fb, d::freeze, d::mode, d::lofi, d::trig, d::inputList) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "MiRings",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _MiRings_12(
      _at_2(_d, "in"),
      _at_2(_d, "trig"),
      _at_2(_d, "pit"),
      _at_2(_d, "struct"),
      _at_2(_d, "bright"),
      _at_2(_d, "damp"),
      _at_2(_d, "pos"),
      _at_2(_d, "model"),
      _at_2(_d, "poly"),
      _at_2(_d, "internExciter"),
      _at_2(_d, "easterEgg"),
      _at_2(_d, "bypass"),
    );
  },
  "{ :d | MiRings(d::in, d::trig, d::pit, d::struct, d::bright, d::damp, d::pos, d::model, d::poly, d::internExciter, d::easterEgg, d::bypass) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Ln",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Ln_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  },
  "{ :d | Ln(d::start, d::end, d::dur) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Perc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Perc_4(
      _at_2(_d, "trig"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "curve"),
    );
  },
  "{ :d | Perc(d::trig, d::attackTime, d::releaseTime, d::curve) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Release",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Release_4(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "sustainTime"),
      _at_2(_d, "releaseTime"),
    );
  },
  "{ :d | Release(d::in, d::attackTime, d::sustainTime, d::releaseTime) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Seq",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Seq_2(
      _questionMark_2(_at_2(_d, "repeats"), _inf),
      _at_2(_d, "list"),
    );
  },
  "{ :d | Seq(d::repeats ? inf, d::list) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TScramble",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TScramble_2(_at_2(_d, "trigger"), _at_2(_d, "inputs"));
  },
  "{ :d | TScramble(d::trigger, d::inputs) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "TxLine",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TxLine_4(
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "dur"),
      _at_2(_d, "trig"),
    );
  },
  "{ :d | TxLine(d::start, d::end, d::dur, d::trig) }",
);

sl.addMethod(
  "Record",
  "KeywordUgens",
  "Voicer",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Voicer_3(
      _at_2(_d, "part"),
      _at_2(_d, "numVoices"),
      _at_2(_d, "voiceFunc"),
    );
  },
  "{ :d | Voicer(d::part, d::numVoices, d::voiceFunc) }",
);
