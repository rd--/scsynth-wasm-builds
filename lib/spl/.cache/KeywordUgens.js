sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassC",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tAllpassC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassL",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tAllpassL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "AllpassN",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tAllpassN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Balance2",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tBalance2(d['left'], d['right'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Blip",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blip_2(_at_2(_d, "freq"), _at_2(_d, "numHarm"));
  }, ["d"]),
  "{ :d |\n\t\tBlip(d['freq'], d['numHarm'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Bpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Bpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tBpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Brf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Brf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tBrf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombC",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tCombC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombL",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tCombL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "CombN",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tCombN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Compander",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tCompander(d['in'], d['control'], d['thresh'], d['slopeBelow'], d['slopeAbove'], d['clampTime'], d['relaxTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Decay",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decay_2(_at_2(_d, "in"), _at_2(_d, "decayTime"));
  }, ["d"]),
  "{ :d |\n\t\tDecay(d['in'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Decay2",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDecay2(d['in'], d['attackTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DegreeToKey",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDegreeToKey(d['bufNum'], d['in'], d['octave'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayC",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDelayC(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayL",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDelayL(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "DelayN",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDelayN(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Demand",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tDemand(d['trig'], d['reset'], d['demandUgens'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dseq",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dseq_2(_at_2(_d, "repeats"), _at_2(_d, "list"));
  }, ["d"]),
  "{ :d |\n\t\tDseq(d['repeats'], d['list'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dust",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dust_1(_at_2(_d, "density"));
  }, ["d"]),
  "{ :d |\n\t\tDust(d['density'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Dust2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dust2_1(_at_2(_d, "density"));
  }, ["d"]),
  "{ :d |\n\t\tDust2(d['density'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "EnvGen",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tEnvGen(d['gate'], d['levelScale'], d['levelBias'], d['timeScale'], d['doneAction'], d['envelope'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ExpRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ExpRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tExpRand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FSinOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FSinOsc_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tFSinOsc(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Fold",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fold_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tFold(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Formant",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tFormant(d['fundFreq'], d['formFreq'], d['bwfreq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Formlet",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tFormlet(d['in'], d['freq'], d['attackTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Fos",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tFos(d['in'], d['a0'], d['a1'], d['b1'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tFreeVerb(d['in'], d['mix'], d['room'], d['damp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreeVerb2",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tFreeVerb2(d['in'], d['in2'], d['mix'], d['room'], d['damp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "FreqShift",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _FreqShift_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tFreqShift(d['in'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGVerb(d['in'], d['roomSize'], d['revtime'], d['damping'], d['inputbw'], d['spread'], d['drylevel'], d['earlyreflevel'], d['tailLevel'], d['maxroomSize'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gate",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Gate_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tGate(d['in'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy1",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGendy1(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy2",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGendy2(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'], d['a'], d['c'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Gendy3",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGendy3(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['freq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainBuf",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGrainBuf(d['numChan'], d['trigger'], d['dur'], d['sndBuf'], d['rate'], d['pos'], d['interp'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainFm",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGrainFm(d['numChan'], d['trigger'], d['dur'], d['carFreq'], d['modFreq'], d['index'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainIn",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGrainIn(d['numChan'], d['trigger'], d['dur'], d['in'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "GrainSin",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tGrainSin(d['numChan'], d['trigger'], d['dur'], d['freq'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Hpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Hpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tHpf(d['in'], d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "IRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _IRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tIRand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Impulse",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Impulse_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tImpulse(d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tLag(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag2_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tLag2(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag2Ud",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLag2Ud(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag3",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lag3_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tLag3(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lag3Ud",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLag3Ud(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LagIn",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LagIn_3(_at_2(_d, "numChan"), _at_2(_d, "bus"), _at_2(_d, "lag"));
  }, ["d"]),
  "{ :d |\n\t\tLagIn(d['numChan'], d['bus'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LagUd",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLagUd(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Latch",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Latch_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tLatch(d['in'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LeakDc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LeakDc_2(_at_2(_d, "in"), _at_2(_d, "coef"));
  }, ["d"]),
  "{ :d |\n\t\tLeakDc(d['in'], d['coef'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfCub",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfCub_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tLfCub(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfGauss",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLfGauss(d['duration'], d['width'], d['iphase'], d['loop'], d['doneAction'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise0",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise0_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tLfNoise0(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise1_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tLfNoise1(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfNoise2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfNoise2_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tLfNoise2(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfPar",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfPar_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tLfPar(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfPulse",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLfPulse(d['freq'], d['iphase'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfSaw_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tLfSaw(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LfTri",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LfTri_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tLfTri(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "linExp",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _linExp_5(
      _at_2(_d, "in"),
      _at_2(_d, "srcLo"),
      _at_2(_d, "srcHi"),
      _at_2(_d, "dstLo"),
      _at_2(_d, "dstHi"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlinExp(d['in'], d['srcLo'], d['srcHi'], d['dstLo'], d['dstHi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinPan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinPan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  }, ["d"]),
  "{ :d |\n\t\tLinPan2(d['in'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "minmax"));
  }, ["d"]),
  "{ :d |\n\t\tLinRand(d['lo'], d['hi'], d['minmax'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinXFade2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinXFade2_3(_at_2(_d, "inA"), _at_2(_d, "inB"), _at_2(_d, "pan"));
  }, ["d"]),
  "{ :d |\n\t\tLinXFade2(d['inA'], d['inB'], d['pan'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Line",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\tLine(d['start'], d['end'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Linen",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tLinen(d['gate'], d['attackTime'], d['susLevel'], d['releaseTime'], d['doneAction'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalBuf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalBuf_2(_at_2(_d, "numChannels"), _at_2(_d, "numFrames"));
  }, ["d"]),
  "{ :d |\n\t\tLocalBuf(d['numChannels'], d['numFrames'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalIn",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalIn_2(_at_2(_d, "numChan"), _at_2(_d, "default"));
  }, ["d"]),
  "{ :d |\n\t\tLocalIn(d['numChan'], d['default'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LocalOut",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _LocalOut_1(_at_2(_d, "channelsList"));
  }, ["d"]),
  "{ :d |\n\t\tLocalOut(d['channelsList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Lpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Lpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tLpf(d['in'], d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMVerb(d['in1'], d['in2'], d['dampingFreq'], d['density'], d['bandwidthFreq'], d['decay'], d['preDelay'], d['size'], d['gain'], d['mix'], d['earlyMix'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MoogFf",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMoogFf(d['in'], d['freq'], d['gain'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseButton",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMouseButton(d['minVal'], d['maxVal'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseX",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMouseX(d['minVal'], d['maxVal'], d['warp'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MouseY",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMouseY(d['minVal'], d['maxVal'], d['warp'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "NRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _NRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "n"));
  }, ["d"]),
  "{ :d |\n\t\tNRand(d['lo'], d['hi'], d['n'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Osc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Osc_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tOsc(d['bufNum'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "OscN",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscN_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tOscN(d['bufNum'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Out",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Out_2(_at_2(_d, "bus"), _at_2(_d, "channelsList"));
  }, ["d"]),
  "{ :d |\n\t\tOut(d['bus'], d['channelsList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  }, ["d"]),
  "{ :d |\n\t\tPan2(d['in'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pan4",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPan4(d['in'], d['xpos'], d['ypos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PanAz",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPanAz(d['numChan'], d['in'], d['pos'], d['level'], d['width'], d['orientation'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Phasor",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPhasor(d['trig'], d['rate'], d['start'], d['end'], d['resetPos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pitch",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPitch(d['in'], d['initFreq'], d['minFreq'], d['maxFreq'], d['execFreq'], d['maxBinsPerOctave'], d['median'], d['ampThreshold'], d['peakThreshold'], d['downSample'], d['clar'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PitchShift",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPitchShift(d['in'], d['windowSize'], d['pitchRatio'], d['pitchDispersion'], d['timeDispersion'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pluck",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPluck(d['in'], d['trig'], d['maxDelayTime'], d['delayTime'], d['decayTime'], d['coef'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Pulse",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pulse_2(_at_2(_d, "freq"), _at_2(_d, "width"));
  }, ["d"]),
  "{ :d |\n\t\tPulse(d['freq'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PulseCount",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _PulseCount_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  }, ["d"]),
  "{ :d |\n\t\tPulseCount(d['trig'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "PulseDivider",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPulseDivider(d['trig'], d['div'], d['start'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Ramp",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ramp_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tRamp(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tRand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Resonz",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Resonz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "bwr"));
  }, ["d"]),
  "{ :d |\n\t\tResonz(d['in'], d['freq'], d['bwr'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rhpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rhpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tRhpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Ringz",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ringz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "decayTime"));
  }, ["d"]),
  "{ :d |\n\t\tRingz(d['in'], d['freq'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rlpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rlpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tRlpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Rotate2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rotate2_3(_at_2(_d, "x"), _at_2(_d, "y"), _at_2(_d, "pos"));
  }, ["d"]),
  "{ :d |\n\t\tRotate2(d['x'], d['y'], d['pos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Saw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Saw_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tSaw(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Schmidt",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Schmidt_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tSchmidt(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Select",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Select_2(_at_2(_d, "which"), _at_2(_d, "array"));
  }, ["d"]),
  "{ :d |\n\t\tSelect(d['which'], d['array'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SetResetFf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SetResetFf_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  }, ["d"]),
  "{ :d |\n\t\tSetResetFf(d['trig'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Shaper",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Shaper_2(_at_2(_d, "bufNum"), _at_2(_d, "in"));
  }, ["d"]),
  "{ :d |\n\t\tShaper(d['bufNum'], d['in'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SinOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SinOsc_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tSinOsc(d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SinOscFb",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SinOscFb_2(_at_2(_d, "freq"), _at_2(_d, "feedback"));
  }, ["d"]),
  "{ :d |\n\t\tSinOscFb(d['freq'], d['feedback'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Slew",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Slew_3(_at_2(_d, "in"), _at_2(_d, "up"), _at_2(_d, "dn"));
  }, ["d"]),
  "{ :d |\n\t\tSlew(d['in'], d['up'], d['dn'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Slope",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Slope_1(_at_2(_d, "in"));
  }, ["d"]),
  "{ :d |\n\t\tSlope(d['in'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Stepper",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tStepper(d['trig'], d['reset'], d['min'], d['max'], d['step'], d['resetval'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Sweep",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sweep_2(_at_2(_d, "trig"), _at_2(_d, "rate"));
  }, ["d"]),
  "{ :d |\n\t\tSweep(d['trig'], d['rate'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "SyncSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _SyncSaw_2(_at_2(_d, "syncFreq"), _at_2(_d, "sawFreq"));
  }, ["d"]),
  "{ :d |\n\t\tSyncSaw(d['syncFreq'], d['sawFreq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TExpRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TExpRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tTExpRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TGrains",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tTGrains(d['numChan'], d['trigger'], d['bufNum'], d['rate'], d['centerPos'], d['dur'], d['pan'], d['amp'], d['interp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tTRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TiRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TiRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tTiRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Timer",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Timer_1(_at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tTimer(d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ToggleFf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ToggleFf_1(_at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tToggleFf(d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Trig",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\tTrig(d['in'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Trig1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Trig1_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\tTrig1(d['in'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TwoPole",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TwoPole_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  }, ["d"]),
  "{ :d |\n\t\tTwoPole(d['in'], d['freq'], d['radius'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TwoZero",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TwoZero_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  }, ["d"]),
  "{ :d |\n\t\tTwoZero(d['in'], d['freq'], d['radius'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _VOsc_3(_at_2(_d, "bufPos"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tVOsc(d['bufPos'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VOsc3",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tVOsc3(d['bufPos'], d['freq1'], d['freq2'], d['freq3'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VarLag",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tVarLag(d['in'], d['time'], d['curvature'], d['warp'], d['start'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "VarSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tVarSaw(d['freq'], d['iphase'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Vibrato",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tVibrato(d['freq'], d['rate'], d['depth'], d['delay'], d['onset'], d['rateVariation'], d['depthVariation'], d['iphase'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Warp1",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tWarp1(d['numChan'], d['bufNum'], d['pointer'], d['freqScale'], d['windowSize'], d['envBufNum'] /* ? -1 */, d['overlaps'], d['windowRandRatio'], d['interp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Wrap",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _Wrap_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tWrap(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "XFade2",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tXFade2(d['inA'], d['inB'], d['pan'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Env",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tEnv(d['levels'], d['times'], d['curves'], d['releaseNode'], d['loopNode'], d['offset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "EqPan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _EqPan2_2(_at_2(_d, "in"), _at_2(_d, "pos"));
  }, ["d"]),
  "{ :d |\n\t\tEqPan2(d['in'], d['pos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MembraneCircle",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMembraneCircle(d['excitation'], d['tension'], d['loss'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiBraids",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMiBraids(d['pitch'], d['timbre'], d['color'], d['model'], d['trig'], d['resamp'], d['decim'], d['bits'], d['ws'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiClouds",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMiClouds(d['pit'], d['pos'], d['size'], d['dens'], d['tex'], d['dryWet'], d['inGain'], d['spread'], d['rvb'], d['fb'], d['freeze'], d['mode'], d['lofi'], d['trig'], d['inputList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MiRings",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tMiRings(d['in'], d['trig'], d['pit'], d['struct'], d['bright'], d['damp'], d['pos'], d['model'], d['poly'], d['internExciter'], d['easterEgg'], d['bypass'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Perc",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tPerc(d['trig'], d['attackTime'], d['releaseTime'], d['curve'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Release",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tRelease(d['in'], d['attackTime'], d['sustainTime'], d['releaseTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TScramble",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _TScramble_2(_at_2(_d, "trigger"), _at_2(_d, "inputs"));
  }, ["d"]),
  "{ :d |\n\t\tTScramble(d['trigger'], d['inputs'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "TxLine",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tTxLine(d['start'], d['end'], d['dur'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "Voicer",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d |\n\t\tVoicer(d['part'], d['numVoices'], d['voiceFunc'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "timesPlus",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _timesPlus_3(_at_2(_d, "in"), _at_2(_d, "mul"), _at_2(_d, "add"));
  }, ["d"]),
  "{ :d |\n\t\ttimesPlus(d['in'], d['mul'], d['add'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "asteriskPlusSign",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _timesPlus_3(_at_2(_d, "in"), _at_2(_d, "mul"), _at_2(_d, "add"));
  }, ["d"]),
  "{ :d |\n\t\ttimesPlus(d['in'], d['mul'], d['add'])\n\t}",
);
