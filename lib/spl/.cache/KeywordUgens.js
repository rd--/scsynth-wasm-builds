sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _AllpassC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassC(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _AllpassL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassL(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _AllpassN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | AllpassN(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Bpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Bpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Bpf(at(d, 'in'), at(d, 'freq'), at(d, 'rq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Brf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Brf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Brf(at(d, 'in'), at(d, 'freq'), at(d, 'rq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Balance2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Balance2_4(
      _at_2(_d, "left"),
      _at_2(_d, "right"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | Balance2(at(d, 'left'), at(d, 'right'), at(d, 'pos'), at(d, 'level')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Blip",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blip_2(_at_2(_d, "freq"), _at_2(_d, "numHarm"));
  },
  "{ :d | Blip(at(d, 'freq'), at(d, 'numHarm')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _CombC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombC(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _CombL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombL(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _CombN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | CombN(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Compander",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Compander(at(d, 'in'), at(d, 'control'), at(d, 'thresh'), at(d, 'slopeBelow'), at(d, 'slopeAbove'), at(d, 'clampTime'), at(d, 'relaxTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Decay",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decay_2(_at_2(_d, "in"), _at_2(_d, "decayTime"));
  },
  "{ :d | Decay(at(d, 'in'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Decay2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decay2_3(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | Decay2(at(d, 'in'), at(d, 'attackTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DegreeToKey",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _DegreeToKey_3(
      _at_2(_d, "bufNum"),
      _at_2(_d, "in"),
      _at_2(_d, "octave"),
    );
  },
  "{ :d | DegreeToKey(at(d, 'bufNum'), at(d, 'in'), at(d, 'octave')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayC",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _DelayC_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayC(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayL",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _DelayL_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayL(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _DelayN_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  },
  "{ :d | DelayN(at(d, 'in'), at(d, 'maxDelayTime'), at(d, 'delayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Demand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Demand_3(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "demandUgens"),
    );
  },
  "{ :d | Demand(at(d, 'trig'), at(d, 'reset'), at(d, 'demandUgens')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dseq",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dseq_2(_at_2(_d, "repeats"), _at_2(_d, "list"));
  },
  "{ :d | Dseq(at(d, 'repeats'), at(d, 'list')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dust",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dust_1(_at_2(_d, "density"));
  },
  "{ :d | Dust(at(d, 'density')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dust2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dust2_1(_at_2(_d, "density"));
  },
  "{ :d | Dust2(at(d, 'density')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "EnvGen",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _EnvGen_6(
      _at_2(_d, "gate"),
      _at_2(_d, "levelScale"),
      _at_2(_d, "levelBias"),
      _at_2(_d, "timeScale"),
      _at_2(_d, "doneAction"),
      _at_2(_d, "envelope"),
    );
  },
  "{ :d | EnvGen(at(d, 'gate'), at(d, 'levelScale'), at(d, 'levelBias'), at(d, 'timeScale'), at(d, 'doneAction'), at(d, 'envelope')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ExpRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ExpRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | ExpRand(at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Fos",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fos_4(
      _at_2(_d, "in"),
      _at_2(_d, "a0"),
      _at_2(_d, "a1"),
      _at_2(_d, "b1"),
    );
  },
  "{ :d | Fos(at(d, 'in'), at(d, 'a0'), at(d, 'a1'), at(d, 'b1')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FSinOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FSinOsc_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | FSinOsc(at(d, 'freq'), at(d, 'iphase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Fold",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fold_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Fold(at(d, 'in'), at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Formant",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Formant_3(
      _at_2(_d, "fundFreq"),
      _at_2(_d, "formFreq"),
      _at_2(_d, "bwfreq"),
    );
  },
  "{ :d | Formant(at(d, 'fundFreq'), at(d, 'formFreq'), at(d, 'bwfreq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Formlet",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Formlet_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  },
  "{ :d | Formlet(at(d, 'in'), at(d, 'freq'), at(d, 'attackTime'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FreeVerb_4(
      _at_2(_d, "in"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  },
  "{ :d | FreeVerb(at(d, 'in'), at(d, 'mix'), at(d, 'room'), at(d, 'damp')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FreeVerb2_5(
      _at_2(_d, "in"),
      _at_2(_d, "in2"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  },
  "{ :d | FreeVerb2(at(d, 'in'), at(d, 'in2'), at(d, 'mix'), at(d, 'room'), at(d, 'damp')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreqShift",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FreqShift_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | FreqShift(at(d, 'in'), at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | GVerb(at(d, 'in'), at(d, 'roomSize'), at(d, 'revtime'), at(d, 'damping'), at(d, 'inputbw'), at(d, 'spread'), at(d, 'drylevel'), at(d, 'earlyreflevel'), at(d, 'tailLevel'), at(d, 'maxroomSize')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gate",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Gate_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  },
  "{ :d | Gate(at(d, 'in'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Gendy1(at(d, 'ampDist'), at(d, 'durDist'), at(d, 'adParam'), at(d, 'ddParam'), at(d, 'minFreq'), at(d, 'maxFreq'), at(d, 'ampScale'), at(d, 'durScale'), at(d, 'initCps'), at(d, 'kNum')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Gendy2(at(d, 'ampDist'), at(d, 'durDist'), at(d, 'adParam'), at(d, 'ddParam'), at(d, 'minFreq'), at(d, 'maxFreq'), at(d, 'ampScale'), at(d, 'durScale'), at(d, 'initCps'), at(d, 'kNum'), at(d, 'a'), at(d, 'c')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Gendy3(at(d, 'ampDist'), at(d, 'durDist'), at(d, 'adParam'), at(d, 'ddParam'), at(d, 'freq'), at(d, 'ampScale'), at(d, 'durScale'), at(d, 'initCps'), at(d, 'kNum')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainBuf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _GrainBuf_10(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "sndBuf"),
      _at_2(_d, "rate"),
      _at_2(_d, "pos"),
      _at_2(_d, "interp"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainBuf(at(d, 'numChan'), at(d, 'trigger'), at(d, 'dur'), at(d, 'sndBuf'), at(d, 'rate'), at(d, 'pos'), at(d, 'interp'), at(d, 'pan'), at(d, 'envBufNum'), at(d, 'maxGrains')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainFm",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _GrainFm_9(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "carFreq"),
      _at_2(_d, "modFreq"),
      _at_2(_d, "index"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainFm(at(d, 'numChan'), at(d, 'trigger'), at(d, 'dur'), at(d, 'carFreq'), at(d, 'modFreq'), at(d, 'index'), at(d, 'pan'), at(d, 'envBufNum'), at(d, 'maxGrains')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _GrainIn_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "in"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainIn(at(d, 'numChan'), at(d, 'trigger'), at(d, 'dur'), at(d, 'in'), at(d, 'pan'), at(d, 'envBufNum'), at(d, 'maxGrains')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainSin",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _GrainSin_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "freq"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  },
  "{ :d | GrainSin(at(d, 'numChan'), at(d, 'trigger'), at(d, 'dur'), at(d, 'freq'), at(d, 'pan'), at(d, 'envBufNum'), at(d, 'maxGrains')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Hpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Hpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  },
  "{ :d | Hpf(at(d, 'in'), at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "IRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | IRand(at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Impulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Impulse_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | Impulse(at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfCub",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfCub_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfCub(at(d, 'freq'), at(d, 'iphase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfGauss",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfGauss_5(
      _at_2(_d, "duration"),
      _at_2(_d, "width"),
      _at_2(_d, "iphase"),
      _at_2(_d, "loop"),
      _at_2(_d, "doneAction"),
    );
  },
  "{ :d | LfGauss(at(d, 'duration'), at(d, 'width'), at(d, 'iphase'), at(d, 'loop'), at(d, 'doneAction')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise0",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise0_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise0(at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise1_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise1(at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise2_1(_at_2(_d, "freq"));
  },
  "{ :d | LfNoise2(at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfPar",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfPar_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfPar(at(d, 'freq'), at(d, 'iphase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfPulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfPulse_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  },
  "{ :d | LfPulse(at(d, 'freq'), at(d, 'iphase'), at(d, 'width')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfSaw_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfSaw(at(d, 'freq'), at(d, 'iphase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfTri",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfTri_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  },
  "{ :d | LfTri(at(d, 'freq'), at(d, 'iphase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  },
  "{ :d | Lpf(at(d, 'in'), at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag(at(d, 'in'), at(d, 'lagTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag2_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag2(at(d, 'in'), at(d, 'lagTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag2Ud",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag2Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | Lag2Ud(at(d, 'in'), at(d, 'lagTimeU'), at(d, 'lagTimeD')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag3_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Lag3(at(d, 'in'), at(d, 'lagTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag3Ud",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag3Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | Lag3Ud(at(d, 'in'), at(d, 'lagTimeU'), at(d, 'lagTimeD')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LagIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LagIn_3(_at_2(_d, "numChan"), _at_2(_d, "bus"), _at_2(_d, "lag"));
  },
  "{ :d | LagIn(at(d, 'numChan'), at(d, 'bus'), at(d, 'lag')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LagUd",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LagUd_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  },
  "{ :d | LagUd(at(d, 'in'), at(d, 'lagTimeU'), at(d, 'lagTimeD')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Latch",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Latch_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  },
  "{ :d | Latch(at(d, 'in'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LeakDc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LeakDc_2(_at_2(_d, "in"), _at_2(_d, "coef"));
  },
  "{ :d | LeakDc(at(d, 'in'), at(d, 'coef')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Line",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  },
  "{ :d | Line(at(d, 'start'), at(d, 'end'), at(d, 'dur')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinExp",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinExp_5(
      _at_2(_d, "in"),
      _at_2(_d, "srcLo"),
      _at_2(_d, "srcHi"),
      _at_2(_d, "dstLo"),
      _at_2(_d, "dstHi"),
    );
  },
  "{ :d | LinExp(at(d, 'in'), at(d, 'srcLo'), at(d, 'srcHi'), at(d, 'dstLo'), at(d, 'dstHi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinPan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinPan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  },
  "{ :d | LinPan2(at(d, 'in'), at(d, 'pos'), at(d, 'level')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "minmax"));
  },
  "{ :d | LinRand(at(d, 'lo'), at(d, 'hi'), at(d, 'minmax')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinXFade2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinXFade2_3(_at_2(_d, "inA"), _at_2(_d, "inB"), _at_2(_d, "pan"));
  },
  "{ :d | LinXFade2(at(d, 'inA'), at(d, 'inB'), at(d, 'pan')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Linen",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Linen_5(
      _at_2(_d, "gate"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "susLevel"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "doneAction"),
    );
  },
  "{ :d | Linen(at(d, 'gate'), at(d, 'attackTime'), at(d, 'susLevel'), at(d, 'releaseTime'), at(d, 'doneAction')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalBuf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalBuf_2(_at_2(_d, "numChannels"), _at_2(_d, "numFrames"));
  },
  "{ :d | LocalBuf(at(d, 'numChannels'), at(d, 'numFrames')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalIn",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalIn_2(_at_2(_d, "numChan"), _at_2(_d, "default"));
  },
  "{ :d | LocalIn(at(d, 'numChan'), at(d, 'default')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalOut",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalOut_1(_at_2(_d, "channelsList"));
  },
  "{ :d | LocalOut(at(d, 'channelsList')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MoogFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MoogFf_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "gain"),
      _at_2(_d, "reset"),
    );
  },
  "{ :d | MoogFf(at(d, 'in'), at(d, 'freq'), at(d, 'gain'), at(d, 'reset')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseButton",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseButton_3(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseButton(at(d, 'minVal'), at(d, 'maxVal'), at(d, 'lag')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseX",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseX_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseX(at(d, 'minVal'), at(d, 'maxVal'), at(d, 'warp'), at(d, 'lag')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseY",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MouseY_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  },
  "{ :d | MouseY(at(d, 'minVal'), at(d, 'maxVal'), at(d, 'warp'), at(d, 'lag')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MVerb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | MVerb(at(d, 'in1'), at(d, 'in2'), at(d, 'dampingFreq'), at(d, 'density'), at(d, 'bandwidthFreq'), at(d, 'decay'), at(d, 'preDelay'), at(d, 'size'), at(d, 'gain'), at(d, 'mix'), at(d, 'earlyMix')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "NRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _NRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "n"));
  },
  "{ :d | NRand(at(d, 'lo'), at(d, 'hi'), at(d, 'n')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Osc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Osc_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | Osc(at(d, 'bufNum'), at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "OscN",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscN_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | OscN(at(d, 'bufNum'), at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Out",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(_at_2(_d, "bus"), _at_2(_d, "channelsList"));
  },
  "{ :d | Out(at(d, 'bus'), at(d, 'channelsList')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  },
  "{ :d | Pan2(at(d, 'in'), at(d, 'pos'), at(d, 'level')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pan4",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan4_4(
      _at_2(_d, "in"),
      _at_2(_d, "xpos"),
      _at_2(_d, "ypos"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | Pan4(at(d, 'in'), at(d, 'xpos'), at(d, 'ypos'), at(d, 'level')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PanAz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _PanAz_6(
      _at_2(_d, "numChan"),
      _at_2(_d, "in"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
      _at_2(_d, "width"),
      _at_2(_d, "orientation"),
    );
  },
  "{ :d | PanAz(at(d, 'numChan'), at(d, 'in'), at(d, 'pos'), at(d, 'level'), at(d, 'width'), at(d, 'orientation')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Phasor",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Phasor_5(
      _at_2(_d, "trig"),
      _at_2(_d, "rate"),
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "resetPos"),
    );
  },
  "{ :d | Phasor(at(d, 'trig'), at(d, 'rate'), at(d, 'start'), at(d, 'end'), at(d, 'resetPos')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pitch",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Pitch(at(d, 'in'), at(d, 'initFreq'), at(d, 'minFreq'), at(d, 'maxFreq'), at(d, 'execFreq'), at(d, 'maxBinsPerOctave'), at(d, 'median'), at(d, 'ampThreshold'), at(d, 'peakThreshold'), at(d, 'downSample'), at(d, 'clar')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PitchShift",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _PitchShift_5(
      _at_2(_d, "in"),
      _at_2(_d, "windowSize"),
      _at_2(_d, "pitchRatio"),
      _at_2(_d, "pitchDispersion"),
      _at_2(_d, "timeDispersion"),
    );
  },
  "{ :d | PitchShift(at(d, 'in'), at(d, 'windowSize'), at(d, 'pitchRatio'), at(d, 'pitchDispersion'), at(d, 'timeDispersion')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pluck",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pluck_6(
      _at_2(_d, "in"),
      _at_2(_d, "trig"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
      _at_2(_d, "coef"),
    );
  },
  "{ :d | Pluck(at(d, 'in'), at(d, 'trig'), at(d, 'maxDelayTime'), at(d, 'delayTime'), at(d, 'decayTime'), at(d, 'coef')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pulse",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pulse_2(_at_2(_d, "freq"), _at_2(_d, "width"));
  },
  "{ :d | Pulse(at(d, 'freq'), at(d, 'width')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PulseCount",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _PulseCount_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  },
  "{ :d | PulseCount(at(d, 'trig'), at(d, 'reset')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PulseDivider",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _PulseDivider_3(
      _at_2(_d, "trig"),
      _at_2(_d, "div"),
      _at_2(_d, "start"),
    );
  },
  "{ :d | PulseDivider(at(d, 'trig'), at(d, 'div'), at(d, 'start')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rhpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rhpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Rhpf(at(d, 'in'), at(d, 'freq'), at(d, 'rq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rlpf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rlpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  },
  "{ :d | Rlpf(at(d, 'in'), at(d, 'freq'), at(d, 'rq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Ramp",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ramp_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  },
  "{ :d | Ramp(at(d, 'in'), at(d, 'lagTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Rand(at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Resonz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Resonz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "bwr"));
  },
  "{ :d | Resonz(at(d, 'in'), at(d, 'freq'), at(d, 'bwr')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Ringz",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ringz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "decayTime"));
  },
  "{ :d | Ringz(at(d, 'in'), at(d, 'freq'), at(d, 'decayTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rotate2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rotate2_3(_at_2(_d, "x"), _at_2(_d, "y"), _at_2(_d, "pos"));
  },
  "{ :d | Rotate2(at(d, 'x'), at(d, 'y'), at(d, 'pos')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Saw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Saw_1(_at_2(_d, "freq"));
  },
  "{ :d | Saw(at(d, 'freq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Schmidt",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Schmidt_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Schmidt(at(d, 'in'), at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Select",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(_at_2(_d, "which"), _at_2(_d, "array"));
  },
  "{ :d | Select(at(d, 'which'), at(d, 'array')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SetResetFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SetResetFf_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  },
  "{ :d | SetResetFf(at(d, 'trig'), at(d, 'reset')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Shaper",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Shaper_2(_at_2(_d, "bufNum"), _at_2(_d, "in"));
  },
  "{ :d | Shaper(at(d, 'bufNum'), at(d, 'in')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SinOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SinOsc_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | SinOsc(at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SinOscFb",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SinOscFb_2(_at_2(_d, "freq"), _at_2(_d, "feedback"));
  },
  "{ :d | SinOscFb(at(d, 'freq'), at(d, 'feedback')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Slew",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Slew_3(_at_2(_d, "in"), _at_2(_d, "up"), _at_2(_d, "dn"));
  },
  "{ :d | Slew(at(d, 'in'), at(d, 'up'), at(d, 'dn')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Slope",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Slope_1(_at_2(_d, "in"));
  },
  "{ :d | Slope(at(d, 'in')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Stepper",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Stepper_6(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "min"),
      _at_2(_d, "max"),
      _at_2(_d, "step"),
      _at_2(_d, "resetval"),
    );
  },
  "{ :d | Stepper(at(d, 'trig'), at(d, 'reset'), at(d, 'min'), at(d, 'max'), at(d, 'step'), at(d, 'resetval')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Sweep",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sweep_2(_at_2(_d, "trig"), _at_2(_d, "rate"));
  },
  "{ :d | Sweep(at(d, 'trig'), at(d, 'rate')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SyncSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SyncSaw_2(_at_2(_d, "syncFreq"), _at_2(_d, "sawFreq"));
  },
  "{ :d | SyncSaw(at(d, 'syncFreq'), at(d, 'sawFreq')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TExpRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TExpRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TExpRand(at(d, 'lo'), at(d, 'hi'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TGrains",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | TGrains(at(d, 'numChan'), at(d, 'trigger'), at(d, 'bufNum'), at(d, 'rate'), at(d, 'centerPos'), at(d, 'dur'), at(d, 'pan'), at(d, 'amp'), at(d, 'interp')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TiRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TiRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TiRand(at(d, 'lo'), at(d, 'hi'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TRand",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  },
  "{ :d | TRand(at(d, 'lo'), at(d, 'hi'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Timer",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Timer_1(_at_2(_d, "trig"));
  },
  "{ :d | Timer(at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ToggleFf",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ToggleFf_1(_at_2(_d, "trig"));
  },
  "{ :d | ToggleFf(at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Trig",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  },
  "{ :d | Trig(at(d, 'in'), at(d, 'dur')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Trig1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  },
  "{ :d | Trig1(at(d, 'in'), at(d, 'dur')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TwoPole",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TwoPole_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  },
  "{ :d | TwoPole(at(d, 'in'), at(d, 'freq'), at(d, 'radius')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TwoZero",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TwoZero_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  },
  "{ :d | TwoZero(at(d, 'in'), at(d, 'freq'), at(d, 'radius')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VOsc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _VOsc_3(_at_2(_d, "bufPos"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  },
  "{ :d | VOsc(at(d, 'bufPos'), at(d, 'freq'), at(d, 'phase')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VOsc3",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _VOsc3_4(
      _at_2(_d, "bufPos"),
      _at_2(_d, "freq1"),
      _at_2(_d, "freq2"),
      _at_2(_d, "freq3"),
    );
  },
  "{ :d | VOsc3(at(d, 'bufPos'), at(d, 'freq1'), at(d, 'freq2'), at(d, 'freq3')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VarLag",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _VarLag_5(
      _at_2(_d, "in"),
      _at_2(_d, "time"),
      _at_2(_d, "curvature"),
      _at_2(_d, "warp"),
      _at_2(_d, "start"),
    );
  },
  "{ :d | VarLag(at(d, 'in'), at(d, 'time'), at(d, 'curvature'), at(d, 'warp'), at(d, 'start')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VarSaw",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _VarSaw_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  },
  "{ :d | VarSaw(at(d, 'freq'), at(d, 'iphase'), at(d, 'width')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Vibrato",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | Vibrato(at(d, 'freq'), at(d, 'rate'), at(d, 'depth'), at(d, 'delay'), at(d, 'onset'), at(d, 'rateVariation'), at(d, 'depthVariation'), at(d, 'iphase'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Warp1",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Warp1_9(
      _at_2(_d, "numChan"),
      _at_2(_d, "bufNum"),
      _at_2(_d, "pointer"),
      _at_2(_d, "freqScale"),
      _at_2(_d, "windowSize"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "overlaps"),
      _at_2(_d, "windowRandRatio"),
      _at_2(_d, "interp"),
    );
  },
  "{ :d | Warp1(at(d, 'numChan'), at(d, 'bufNum'), at(d, 'pointer'), at(d, 'freqScale'), at(d, 'windowSize'), at(d, 'envBufNum'), at(d, 'overlaps'), at(d, 'windowRandRatio'), at(d, 'interp')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Wrap",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Wrap_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  },
  "{ :d | Wrap(at(d, 'in'), at(d, 'lo'), at(d, 'hi')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "XFade2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _XFade2_4(
      _at_2(_d, "inA"),
      _at_2(_d, "inB"),
      _at_2(_d, "pan"),
      _at_2(_d, "level"),
    );
  },
  "{ :d | XFade2(at(d, 'inA'), at(d, 'inB'), at(d, 'pan'), at(d, 'level')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Env",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Env_6(
      _at_2(_d, "levels"),
      _at_2(_d, "times"),
      _at_2(_d, "curves"),
      _at_2(_d, "releaseNode"),
      _at_2(_d, "loopNode"),
      _at_2(_d, "offset"),
    );
  },
  "{ :d | Env(at(d, 'levels'), at(d, 'times'), at(d, 'curves'), at(d, 'releaseNode'), at(d, 'loopNode'), at(d, 'offset')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "EqPan2",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _EqPan2_2(_at_2(_d, "in"), _at_2(_d, "pos"));
  },
  "{ :d | EqPan2(at(d, 'in'), at(d, 'pos')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MembraneCircle",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MembraneCircle_3(
      _at_2(_d, "excitation"),
      _at_2(_d, "tension"),
      _at_2(_d, "loss"),
    );
  },
  "{ :d | MembraneCircle(at(d, 'excitation'), at(d, 'tension'), at(d, 'loss')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiBraids",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | MiBraids(at(d, 'pitch'), at(d, 'timbre'), at(d, 'color'), at(d, 'model'), at(d, 'trig'), at(d, 'resamp'), at(d, 'decim'), at(d, 'bits'), at(d, 'ws')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiClouds",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | MiClouds(at(d, 'pit'), at(d, 'pos'), at(d, 'size'), at(d, 'dens'), at(d, 'tex'), at(d, 'dryWet'), at(d, 'inGain'), at(d, 'spread'), at(d, 'rvb'), at(d, 'fb'), at(d, 'freeze'), at(d, 'mode'), at(d, 'lofi'), at(d, 'trig'), at(d, 'inputList')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiRings",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :d | MiRings(at(d, 'in'), at(d, 'trig'), at(d, 'pit'), at(d, 'struct'), at(d, 'bright'), at(d, 'damp'), at(d, 'pos'), at(d, 'model'), at(d, 'poly'), at(d, 'internExciter'), at(d, 'easterEgg'), at(d, 'bypass')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MulAdd",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MulAdd_3(_at_2(_d, "in"), _at_2(_d, "mul"), _at_2(_d, "add"));
  },
  "{ :d | MulAdd(at(d, 'in'), at(d, 'mul'), at(d, 'add')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Line",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  },
  "{ :d | Line(at(d, 'start'), at(d, 'end'), at(d, 'dur')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Perc",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Perc_4(
      _at_2(_d, "trig"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "curve"),
    );
  },
  "{ :d | Perc(at(d, 'trig'), at(d, 'attackTime'), at(d, 'releaseTime'), at(d, 'curve')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Release",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Release_4(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "sustainTime"),
      _at_2(_d, "releaseTime"),
    );
  },
  "{ :d | Release(at(d, 'in'), at(d, 'attackTime'), at(d, 'sustainTime'), at(d, 'releaseTime')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TScramble",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TScramble_2(_at_2(_d, "trigger"), _at_2(_d, "inputs"));
  },
  "{ :d | TScramble(at(d, 'trigger'), at(d, 'inputs')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TxLine",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TxLine_4(
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "dur"),
      _at_2(_d, "trig"),
    );
  },
  "{ :d | TxLine(at(d, 'start'), at(d, 'end'), at(d, 'dur'), at(d, 'trig')) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Voicer",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Voicer_3(
      _at_2(_d, "part"),
      _at_2(_d, "numVoices"),
      _at_2(_d, "voiceFunc"),
    );
  },
  "{ :d | Voicer(at(d, 'part'), at(d, 'numVoices'), at(d, 'voiceFunc')) }",
);
