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
  "{ :d | AllpassC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | AllpassL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | AllpassN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | Bpf(d['in'], d['freq'], d['rq']) }",
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
  "{ :d | Brf(d['in'], d['freq'], d['rq']) }",
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
  "{ :d | Balance2(d['left'], d['right'], d['pos'], d['level']) }",
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
  "{ :d | Blip(d['freq'], d['numHarm']) }",
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
  "{ :d | CombC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | CombL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | CombN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime']) }",
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
  "{ :d | Compander(d['in'], d['control'], d['thresh'], d['slopeBelow'], d['slopeAbove'], d['clampTime'], d['relaxTime']) }",
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
  "{ :d | Decay(d['in'], d['decayTime']) }",
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
  "{ :d | Decay2(d['in'], d['attackTime'], d['decayTime']) }",
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
  "{ :d | DegreeToKey(d['bufNum'], d['in'], d['octave']) }",
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
  "{ :d | DelayC(d['in'], d['maxDelayTime'], d['delayTime']) }",
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
  "{ :d | DelayL(d['in'], d['maxDelayTime'], d['delayTime']) }",
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
  "{ :d | DelayN(d['in'], d['maxDelayTime'], d['delayTime']) }",
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
  "{ :d | Demand(d['trig'], d['reset'], d['demandUgens']) }",
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
  "{ :d | Dseq(d['repeats'], d['list']) }",
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
  "{ :d | Dust(d['density']) }",
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
  "{ :d | Dust2(d['density']) }",
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
  "{ :d | EnvGen(d['gate'], d['levelScale'], d['levelBias'], d['timeScale'], d['doneAction'], d['envelope']) }",
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
  "{ :d | ExpRand(d['lo'], d['hi']) }",
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
  "{ :d | Fos(d['in'], d['a0'], d['a1'], d['b1']) }",
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
  "{ :d | FSinOsc(d['freq'], d['iphase']) }",
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
  "{ :d | Fold(d['in'], d['lo'], d['hi']) }",
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
  "{ :d | Formant(d['fundFreq'], d['formFreq'], d['bwfreq']) }",
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
  "{ :d | Formlet(d['in'], d['freq'], d['attackTime'], d['decayTime']) }",
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
  "{ :d | FreeVerb(d['in'], d['mix'], d['room'], d['damp']) }",
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
  "{ :d | FreeVerb2(d['in'], d['in2'], d['mix'], d['room'], d['damp']) }",
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
  "{ :d | FreqShift(d['in'], d['freq'], d['phase']) }",
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
  "{ :d | GVerb(d['in'], d['roomSize'], d['revtime'], d['damping'], d['inputbw'], d['spread'], d['drylevel'], d['earlyreflevel'], d['tailLevel'], d['maxroomSize']) }",
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
  "{ :d | Gate(d['in'], d['trig']) }",
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
  "{ :d | Gendy1(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum']) }",
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
  "{ :d | Gendy2(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'], d['a'], d['c']) }",
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
  "{ :d | Gendy3(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['freq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum']) }",
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
  "{ :d | GrainBuf(d['numChan'], d['trigger'], d['dur'], d['sndBuf'], d['rate'], d['pos'], d['interp'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains']) }",
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
  "{ :d | GrainFm(d['numChan'], d['trigger'], d['dur'], d['carFreq'], d['modFreq'], d['index'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains']) }",
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
  "{ :d | GrainIn(d['numChan'], d['trigger'], d['dur'], d['in'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains']) }",
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
  "{ :d | GrainSin(d['numChan'], d['trigger'], d['dur'], d['freq'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains']) }",
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
  "{ :d | Hpf(d['in'], d['freq']) }",
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
  "{ :d | IRand(d['lo'], d['hi']) }",
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
  "{ :d | Impulse(d['freq'], d['phase']) }",
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
  "{ :d | LfCub(d['freq'], d['iphase']) }",
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
  "{ :d | LfGauss(d['duration'], d['width'], d['iphase'], d['loop'], d['doneAction']) }",
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
  "{ :d | LfNoise0(d['freq']) }",
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
  "{ :d | LfNoise1(d['freq']) }",
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
  "{ :d | LfNoise2(d['freq']) }",
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
  "{ :d | LfPar(d['freq'], d['iphase']) }",
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
  "{ :d | LfPulse(d['freq'], d['iphase'], d['width']) }",
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
  "{ :d | LfSaw(d['freq'], d['iphase']) }",
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
  "{ :d | LfTri(d['freq'], d['iphase']) }",
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
  "{ :d | Lpf(d['in'], d['freq']) }",
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
  "{ :d | Lag(d['in'], d['lagTime']) }",
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
  "{ :d | Lag2(d['in'], d['lagTime']) }",
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
  "{ :d | Lag2Ud(d['in'], d['lagTimeU'], d['lagTimeD']) }",
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
  "{ :d | Lag3(d['in'], d['lagTime']) }",
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
  "{ :d | Lag3Ud(d['in'], d['lagTimeU'], d['lagTimeD']) }",
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
  "{ :d | LagIn(d['numChan'], d['bus'], d['lag']) }",
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
  "{ :d | LagUd(d['in'], d['lagTimeU'], d['lagTimeD']) }",
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
  "{ :d | Latch(d['in'], d['trig']) }",
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
  "{ :d | LeakDc(d['in'], d['coef']) }",
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
  "{ :d | Line(d['start'], d['end'], d['dur']) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "LinExp",
  ["d"],
  sl.annotateFunction(function (_d) {
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
  }, ["d"]),
  "{ :d | LinExp(d['in'], d['srcLo'], d['srcHi'], d['dstLo'], d['dstHi']) }",
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
  "{ :d | LinPan2(d['in'], d['pos'], d['level']) }",
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
  "{ :d | LinRand(d['lo'], d['hi'], d['minmax']) }",
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
  "{ :d | LinXFade2(d['inA'], d['inB'], d['pan']) }",
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
  "{ :d | Linen(d['gate'], d['attackTime'], d['susLevel'], d['releaseTime'], d['doneAction']) }",
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
  "{ :d | LocalBuf(d['numChannels'], d['numFrames']) }",
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
  "{ :d | LocalIn(d['numChan'], d['default']) }",
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
  "{ :d | LocalOut(d['channelsList']) }",
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
  "{ :d | MoogFf(d['in'], d['freq'], d['gain'], d['reset']) }",
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
  "{ :d | MouseButton(d['minVal'], d['maxVal'], d['lag']) }",
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
  "{ :d | MouseX(d['minVal'], d['maxVal'], d['warp'], d['lag']) }",
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
  "{ :d | MouseY(d['minVal'], d['maxVal'], d['warp'], d['lag']) }",
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
  "{ :d | MVerb(d['in1'], d['in2'], d['dampingFreq'], d['density'], d['bandwidthFreq'], d['decay'], d['preDelay'], d['size'], d['gain'], d['mix'], d['earlyMix']) }",
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
  "{ :d | NRand(d['lo'], d['hi'], d['n']) }",
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
  "{ :d | Osc(d['bufNum'], d['freq'], d['phase']) }",
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
  "{ :d | OscN(d['bufNum'], d['freq'], d['phase']) }",
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
  "{ :d | Out(d['bus'], d['channelsList']) }",
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
  "{ :d | Pan2(d['in'], d['pos'], d['level']) }",
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
  "{ :d | Pan4(d['in'], d['xpos'], d['ypos'], d['level']) }",
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
  "{ :d | PanAz(d['numChan'], d['in'], d['pos'], d['level'], d['width'], d['orientation']) }",
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
  "{ :d | Phasor(d['trig'], d['rate'], d['start'], d['end'], d['resetPos']) }",
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
  "{ :d | Pitch(d['in'], d['initFreq'], d['minFreq'], d['maxFreq'], d['execFreq'], d['maxBinsPerOctave'], d['median'], d['ampThreshold'], d['peakThreshold'], d['downSample'], d['clar']) }",
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
  "{ :d | PitchShift(d['in'], d['windowSize'], d['pitchRatio'], d['pitchDispersion'], d['timeDispersion']) }",
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
  "{ :d | Pluck(d['in'], d['trig'], d['maxDelayTime'], d['delayTime'], d['decayTime'], d['coef']) }",
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
  "{ :d | Pulse(d['freq'], d['width']) }",
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
  "{ :d | PulseCount(d['trig'], d['reset']) }",
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
  "{ :d | PulseDivider(d['trig'], d['div'], d['start']) }",
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
  "{ :d | Rhpf(d['in'], d['freq'], d['rq']) }",
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
  "{ :d | Rlpf(d['in'], d['freq'], d['rq']) }",
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
  "{ :d | Ramp(d['in'], d['lagTime']) }",
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
  "{ :d | Rand(d['lo'], d['hi']) }",
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
  "{ :d | Resonz(d['in'], d['freq'], d['bwr']) }",
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
  "{ :d | Ringz(d['in'], d['freq'], d['decayTime']) }",
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
  "{ :d | Rotate2(d['x'], d['y'], d['pos']) }",
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
  "{ :d | Saw(d['freq']) }",
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
  "{ :d | Schmidt(d['in'], d['lo'], d['hi']) }",
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
  "{ :d | Select(d['which'], d['array']) }",
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
  "{ :d | SetResetFf(d['trig'], d['reset']) }",
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
  "{ :d | Shaper(d['bufNum'], d['in']) }",
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
  "{ :d | SinOsc(d['freq'], d['phase']) }",
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
  "{ :d | SinOscFb(d['freq'], d['feedback']) }",
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
  "{ :d | Slew(d['in'], d['up'], d['dn']) }",
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
  "{ :d | Slope(d['in']) }",
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
  "{ :d | Stepper(d['trig'], d['reset'], d['min'], d['max'], d['step'], d['resetval']) }",
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
  "{ :d | Sweep(d['trig'], d['rate']) }",
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
  "{ :d | SyncSaw(d['syncFreq'], d['sawFreq']) }",
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
  "{ :d | TExpRand(d['lo'], d['hi'], d['trig']) }",
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
  "{ :d | TGrains(d['numChan'], d['trigger'], d['bufNum'], d['rate'], d['centerPos'], d['dur'], d['pan'], d['amp'], d['interp']) }",
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
  "{ :d | TiRand(d['lo'], d['hi'], d['trig']) }",
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
  "{ :d | TRand(d['lo'], d['hi'], d['trig']) }",
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
  "{ :d | Timer(d['trig']) }",
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
  "{ :d | ToggleFf(d['trig']) }",
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
  "{ :d | Trig(d['in'], d['dur']) }",
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
  "{ :d | Trig1(d['in'], d['dur']) }",
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
  "{ :d | TwoPole(d['in'], d['freq'], d['radius']) }",
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
  "{ :d | TwoZero(d['in'], d['freq'], d['radius']) }",
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
  "{ :d | VOsc(d['bufPos'], d['freq'], d['phase']) }",
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
  "{ :d | VOsc3(d['bufPos'], d['freq1'], d['freq2'], d['freq3']) }",
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
  "{ :d | VarLag(d['in'], d['time'], d['curvature'], d['warp'], d['start']) }",
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
  "{ :d | VarSaw(d['freq'], d['iphase'], d['width']) }",
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
  "{ :d | Vibrato(d['freq'], d['rate'], d['depth'], d['delay'], d['onset'], d['rateVariation'], d['depthVariation'], d['iphase'], d['trig']) }",
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
  "{ :d | Warp1(d['numChan'], d['bufNum'], d['pointer'], d['freqScale'], d['windowSize'], d['envBufNum'] /* ? -1 */, d['overlaps'], d['windowRandRatio'], d['interp']) }",
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
  "{ :d | Wrap(d['in'], d['lo'], d['hi']) }",
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
  "{ :d | XFade2(d['inA'], d['inB'], d['pan'], d['level']) }",
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
  "{ :d | Env(d['levels'], d['times'], d['curves'], d['releaseNode'], d['loopNode'], d['offset']) }",
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
  "{ :d | EqPan2(d['in'], d['pos']) }",
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
  "{ :d | MembraneCircle(d['excitation'], d['tension'], d['loss']) }",
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
  "{ :d | MiBraids(d['pitch'], d['timbre'], d['color'], d['model'], d['trig'], d['resamp'], d['decim'], d['bits'], d['ws']) }",
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
  "{ :d | MiClouds(d['pit'], d['pos'], d['size'], d['dens'], d['tex'], d['dryWet'], d['inGain'], d['spread'], d['rvb'], d['fb'], d['freeze'], d['mode'], d['lofi'], d['trig'], d['inputList']) }",
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
  "{ :d | MiRings(d['in'], d['trig'], d['pit'], d['struct'], d['bright'], d['damp'], d['pos'], d['model'], d['poly'], d['internExciter'], d['easterEgg'], d['bypass']) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "MulAdd",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _MulAdd_3(_at_2(_d, "in"), _at_2(_d, "mul"), _at_2(_d, "add"));
  }, ["d"]),
  "{ :d | MulAdd(d['in'], d['mul'], d['add']) }",
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
  "{ :d | Line(d['start'], d['end'], d['dur']) }",
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
  "{ :d | Perc(d['trig'], d['attackTime'], d['releaseTime'], d['curve']) }",
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
  "{ :d | Release(d['in'], d['attackTime'], d['sustainTime'], d['releaseTime']) }",
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
  "{ :d | TScramble(d['trigger'], d['inputs']) }",
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
  "{ :d | TxLine(d['start'], d['end'], d['dur'], d['trig']) }",
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
  "{ :d | Voicer(d['part'], d['numVoices'], d['voiceFunc']) }",
);
