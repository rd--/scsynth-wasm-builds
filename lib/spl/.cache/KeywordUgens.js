sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "allpassC",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _allpassC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tallpassC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "allpassL",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _allpassL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tallpassL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "allpassN",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _allpassN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tallpassN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "balance2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _balance2_4(
      _at_2(_d, "left"),
      _at_2(_d, "right"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
    );
  }, ["d"]),
  "{ :d |\n\t\tbalance2(d['left'], d['right'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "blip",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _blip_2(_at_2(_d, "freq"), _at_2(_d, "numHarm"));
  }, ["d"]),
  "{ :d |\n\t\tblip(d['freq'], d['numHarm'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "bpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _bpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tbpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "brf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _brf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\tbrf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "combC",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _combC_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tcombC(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "combL",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _combL_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tcombL(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "combN",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _combN_4(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tcombN(d['in'], d['maxDelayTime'], d['delayTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "compander",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _compander_7(
      _at_2(_d, "in"),
      _at_2(_d, "control"),
      _at_2(_d, "thresh"),
      _at_2(_d, "slopeBelow"),
      _at_2(_d, "slopeAbove"),
      _at_2(_d, "clampTime"),
      _at_2(_d, "relaxTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tcompander(d['in'], d['control'], d['thresh'], d['slopeBelow'], d['slopeAbove'], d['clampTime'], d['relaxTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "decay",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _decay_2(_at_2(_d, "in"), _at_2(_d, "decayTime"));
  }, ["d"]),
  "{ :d |\n\t\tdecay(d['in'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "decay2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _decay2_3(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdecay2(d['in'], d['attackTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "degreeToKey",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _degreeToKey_3(
      _at_2(_d, "bufNum"),
      _at_2(_d, "in"),
      _at_2(_d, "octave"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdegreeToKey(d['bufNum'], d['in'], d['octave'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "delayC",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _delayC_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdelayC(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "delayL",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _delayL_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdelayL(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "delayN",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _delayN_3(
      _at_2(_d, "in"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdelayN(d['in'], d['maxDelayTime'], d['delayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "demand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _demand_3(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "demandUgens"),
    );
  }, ["d"]),
  "{ :d |\n\t\tdemand(d['trig'], d['reset'], d['demandUgens'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "dseq",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _dseq_2(_at_2(_d, "repeats"), _at_2(_d, "list"));
  }, ["d"]),
  "{ :d |\n\t\tdseq(d['repeats'], d['list'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "dust",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _dust_1(_at_2(_d, "density"));
  }, ["d"]),
  "{ :d |\n\t\tdust(d['density'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "dust2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _dust2_1(_at_2(_d, "density"));
  }, ["d"]),
  "{ :d |\n\t\tdust2(d['density'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "envGen",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _envGen_6(
      _at_2(_d, "gate"),
      _at_2(_d, "levelScale"),
      _at_2(_d, "levelBias"),
      _at_2(_d, "timeScale"),
      _at_2(_d, "doneAction"),
      _at_2(_d, "envelope"),
    );
  }, ["d"]),
  "{ :d |\n\t\tenvGen(d['gate'], d['levelScale'], d['levelBias'], d['timeScale'], d['doneAction'], d['envelope'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "expRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _expRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\texpRand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "fSinOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _fSinOsc_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tfSinOsc(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "fold",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _fold_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tfold(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "formant",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _formant_3(
      _at_2(_d, "fundFreq"),
      _at_2(_d, "formFreq"),
      _at_2(_d, "bwfreq"),
    );
  }, ["d"]),
  "{ :d |\n\t\tformant(d['fundFreq'], d['formFreq'], d['bwfreq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "formlet",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _formlet_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "decayTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\tformlet(d['in'], d['freq'], d['attackTime'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "fos",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _fos_4(
      _at_2(_d, "in"),
      _at_2(_d, "a0"),
      _at_2(_d, "a1"),
      _at_2(_d, "b1"),
    );
  }, ["d"]),
  "{ :d |\n\t\tfos(d['in'], d['a0'], d['a1'], d['b1'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "freeVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _freeVerb_4(
      _at_2(_d, "in"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  }, ["d"]),
  "{ :d |\n\t\tfreeVerb(d['in'], d['mix'], d['room'], d['damp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "freeVerb2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _freeVerb2_5(
      _at_2(_d, "in"),
      _at_2(_d, "in2"),
      _at_2(_d, "mix"),
      _at_2(_d, "room"),
      _at_2(_d, "damp"),
    );
  }, ["d"]),
  "{ :d |\n\t\tfreeVerb2(d['in'], d['in2'], d['mix'], d['room'], d['damp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "freqShift",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _freqShift_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tfreqShift(d['in'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "gVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _gVerb_10(
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
  "{ :d |\n\t\tgVerb(d['in'], d['roomSize'], d['revtime'], d['damping'], d['inputbw'], d['spread'], d['drylevel'], d['earlyreflevel'], d['tailLevel'], d['maxroomSize'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "gate",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _gate_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tgate(d['in'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "gendy1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _gendy1_10(
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
  "{ :d |\n\t\tgendy1(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "gendy2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _gendy2_12(
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
  "{ :d |\n\t\tgendy2(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['minFreq'], d['maxFreq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'], d['a'], d['c'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "gendy3",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _gendy3_9(
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
  "{ :d |\n\t\tgendy3(d['ampDist'], d['durDist'], d['adParam'], d['ddParam'], d['freq'], d['ampScale'], d['durScale'], d['initCps'], d['kNum'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "grainBuf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _grainBuf_10(
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
  "{ :d |\n\t\tgrainBuf(d['numChan'], d['trigger'], d['dur'], d['sndBuf'], d['rate'], d['pos'], d['interp'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "grainFm",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _grainFm_9(
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
  "{ :d |\n\t\tgrainFm(d['numChan'], d['trigger'], d['dur'], d['carFreq'], d['modFreq'], d['index'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "grainIn",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _grainIn_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "in"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  }, ["d"]),
  "{ :d |\n\t\tgrainIn(d['numChan'], d['trigger'], d['dur'], d['in'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "grainSin",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _grainSin_7(
      _at_2(_d, "numChan"),
      _at_2(_d, "trigger"),
      _at_2(_d, "dur"),
      _at_2(_d, "freq"),
      _at_2(_d, "pan"),
      _at_2(_d, "envBufNum"),
      _at_2(_d, "maxGrains"),
    );
  }, ["d"]),
  "{ :d |\n\t\tgrainSin(d['numChan'], d['trigger'], d['dur'], d['freq'], d['pan'], d['envBufNum'] /* ? -1 */, d['maxGrains'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "hpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _hpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\thpf(d['in'], d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "iRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _iRand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tiRand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "impulse",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _impulse_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\timpulse(d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lag",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lag_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tlag(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lag2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lag2_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tlag2(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lag2Ud",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lag2Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlag2Ud(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lag3",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lag3_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tlag3(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lag3Ud",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lag3Ud_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlag3Ud(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lagIn",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lagIn_3(_at_2(_d, "numChan"), _at_2(_d, "bus"), _at_2(_d, "lag"));
  }, ["d"]),
  "{ :d |\n\t\tlagIn(d['numChan'], d['bus'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lagUd",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lagUd_3(
      _at_2(_d, "in"),
      _at_2(_d, "lagTimeU"),
      _at_2(_d, "lagTimeD"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlagUd(d['in'], d['lagTimeU'], d['lagTimeD'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "latch",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _latch_2(_at_2(_d, "in"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\tlatch(d['in'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "leakDc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _leakDc_2(_at_2(_d, "in"), _at_2(_d, "coef"));
  }, ["d"]),
  "{ :d |\n\t\tleakDc(d['in'], d['coef'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfCub",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfCub_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tlfCub(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfGauss",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfGauss_5(
      _at_2(_d, "duration"),
      _at_2(_d, "width"),
      _at_2(_d, "iphase"),
      _at_2(_d, "loop"),
      _at_2(_d, "doneAction"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlfGauss(d['duration'], d['width'], d['iphase'], d['loop'], d['doneAction'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfNoise0",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfNoise0_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tlfNoise0(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfNoise1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfNoise1_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tlfNoise1(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfNoise2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfNoise2_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tlfNoise2(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfPar",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfPar_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tlfPar(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfPulse",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfPulse_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlfPulse(d['freq'], d['iphase'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfSaw_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tlfSaw(d['freq'], d['iphase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lfTri",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lfTri_2(_at_2(_d, "freq"), _at_2(_d, "iphase"));
  }, ["d"]),
  "{ :d |\n\t\tlfTri(d['freq'], d['iphase'])\n\t}",
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
  "linPan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _linPan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  }, ["d"]),
  "{ :d |\n\t\tlinPan2(d['in'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "linRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _linRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "minmax"));
  }, ["d"]),
  "{ :d |\n\t\tlinRand(d['lo'], d['hi'], d['minmax'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "linXFade2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _linXFade2_3(_at_2(_d, "inA"), _at_2(_d, "inB"), _at_2(_d, "pan"));
  }, ["d"]),
  "{ :d |\n\t\tlinXFade2(d['inA'], d['inB'], d['pan'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "line",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _line_3(_at_2(_d, "start"), _at_2(_d, "end"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\tline(d['start'], d['end'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "linen",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _linen_5(
      _at_2(_d, "gate"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "susLevel"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "doneAction"),
    );
  }, ["d"]),
  "{ :d |\n\t\tlinen(d['gate'], d['attackTime'], d['susLevel'], d['releaseTime'], d['doneAction'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "localBuf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _localBuf_2(_at_2(_d, "numChannels"), _at_2(_d, "numFrames"));
  }, ["d"]),
  "{ :d |\n\t\tlocalBuf(d['numChannels'], d['numFrames'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "localIn",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _localIn_2(_at_2(_d, "numChan"), _at_2(_d, "default"));
  }, ["d"]),
  "{ :d |\n\t\tlocalIn(d['numChan'], d['default'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "localOut",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _localOut_1(_at_2(_d, "channelsList"));
  }, ["d"]),
  "{ :d |\n\t\tlocalOut(d['channelsList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "lpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _lpf_2(_at_2(_d, "in"), _at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tlpf(d['in'], d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "mVerb",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _mVerb_11(
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
  "{ :d |\n\t\tmVerb(d['in1'], d['in2'], d['dampingFreq'], d['density'], d['bandwidthFreq'], d['decay'], d['preDelay'], d['size'], d['gain'], d['mix'], d['earlyMix'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "moogFf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _moogFf_4(
      _at_2(_d, "in"),
      _at_2(_d, "freq"),
      _at_2(_d, "gain"),
      _at_2(_d, "reset"),
    );
  }, ["d"]),
  "{ :d |\n\t\tmoogFf(d['in'], d['freq'], d['gain'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "mouseButton",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseButton_3(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "lag"),
    );
  }, ["d"]),
  "{ :d |\n\t\tmouseButton(d['minVal'], d['maxVal'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "mouseX",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseX_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  }, ["d"]),
  "{ :d |\n\t\tmouseX(d['minVal'], d['maxVal'], d['warp'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "mouseY",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _mouseY_4(
      _at_2(_d, "minVal"),
      _at_2(_d, "maxVal"),
      _at_2(_d, "warp"),
      _at_2(_d, "lag"),
    );
  }, ["d"]),
  "{ :d |\n\t\tmouseY(d['minVal'], d['maxVal'], d['warp'], d['lag'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "nRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _nRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "n"));
  }, ["d"]),
  "{ :d |\n\t\tnRand(d['lo'], d['hi'], d['n'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "osc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _osc_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tosc(d['bufNum'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "oscN",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _oscN_3(_at_2(_d, "bufNum"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\toscN(d['bufNum'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "out",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _out_2(_at_2(_d, "bus"), _at_2(_d, "channelsList"));
  }, ["d"]),
  "{ :d |\n\t\tout(d['bus'], d['channelsList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pan2_3(_at_2(_d, "in"), _at_2(_d, "pos"), _at_2(_d, "level"));
  }, ["d"]),
  "{ :d |\n\t\tpan2(d['in'], d['pos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pan4",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pan4_4(
      _at_2(_d, "in"),
      _at_2(_d, "xpos"),
      _at_2(_d, "ypos"),
      _at_2(_d, "level"),
    );
  }, ["d"]),
  "{ :d |\n\t\tpan4(d['in'], d['xpos'], d['ypos'], d['level'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "panAz",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _panAz_6(
      _at_2(_d, "numChan"),
      _at_2(_d, "in"),
      _at_2(_d, "pos"),
      _at_2(_d, "level"),
      _at_2(_d, "width"),
      _at_2(_d, "orientation"),
    );
  }, ["d"]),
  "{ :d |\n\t\tpanAz(d['numChan'], d['in'], d['pos'], d['level'], d['width'], d['orientation'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "phasor",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _phasor_5(
      _at_2(_d, "trig"),
      _at_2(_d, "rate"),
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "resetPos"),
    );
  }, ["d"]),
  "{ :d |\n\t\tphasor(d['trig'], d['rate'], d['start'], d['end'], d['resetPos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pitchFollower",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pitchFollower_11(
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
  "{ :d |\n\t\tpitchFollower(d['in'], d['initFreq'], d['minFreq'], d['maxFreq'], d['execFreq'], d['maxBinsPerOctave'], d['median'], d['ampThreshold'], d['peakThreshold'], d['downSample'], d['clar'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pitchShift",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pitchShift_5(
      _at_2(_d, "in"),
      _at_2(_d, "windowSize"),
      _at_2(_d, "pitchRatio"),
      _at_2(_d, "pitchDispersion"),
      _at_2(_d, "timeDispersion"),
    );
  }, ["d"]),
  "{ :d |\n\t\tpitchShift(d['in'], d['windowSize'], d['pitchRatio'], d['pitchDispersion'], d['timeDispersion'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pluck",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pluck_6(
      _at_2(_d, "in"),
      _at_2(_d, "trig"),
      _at_2(_d, "maxDelayTime"),
      _at_2(_d, "delayTime"),
      _at_2(_d, "decayTime"),
      _at_2(_d, "coef"),
    );
  }, ["d"]),
  "{ :d |\n\t\tpluck(d['in'], d['trig'], d['maxDelayTime'], d['delayTime'], d['decayTime'], d['coef'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pulse",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pulse_2(_at_2(_d, "freq"), _at_2(_d, "width"));
  }, ["d"]),
  "{ :d |\n\t\tpulse(d['freq'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pulseCount",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pulseCount_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  }, ["d"]),
  "{ :d |\n\t\tpulseCount(d['trig'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "pulseDivider",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _pulseDivider_3(
      _at_2(_d, "trig"),
      _at_2(_d, "div"),
      _at_2(_d, "start"),
    );
  }, ["d"]),
  "{ :d |\n\t\tpulseDivider(d['trig'], d['div'], d['start'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ramp",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ramp_2(_at_2(_d, "in"), _at_2(_d, "lagTime"));
  }, ["d"]),
  "{ :d |\n\t\tramp(d['in'], d['lagTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "rand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _rand_2(_at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\trand(d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "resonz",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _resonz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "bwr"));
  }, ["d"]),
  "{ :d |\n\t\tresonz(d['in'], d['freq'], d['bwr'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "rhpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _rhpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\trhpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "ringz",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _ringz_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "decayTime"));
  }, ["d"]),
  "{ :d |\n\t\tringz(d['in'], d['freq'], d['decayTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "rlpf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _rlpf_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "rq"));
  }, ["d"]),
  "{ :d |\n\t\trlpf(d['in'], d['freq'], d['rq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "rotate2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotate2_3(_at_2(_d, "x"), _at_2(_d, "y"), _at_2(_d, "pos"));
  }, ["d"]),
  "{ :d |\n\t\trotate2(d['x'], d['y'], d['pos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "saw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _saw_1(_at_2(_d, "freq"));
  }, ["d"]),
  "{ :d |\n\t\tsaw(d['freq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "schmidt",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _schmidt_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\tschmidt(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "selectT",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _selectT_2(_at_2(_d, "which"), _at_2(_d, "array"));
  }, ["d"]),
  "{ :d |\n\t\tselectT(d['which'], d['array'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "setResetFf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _setResetFf_2(_at_2(_d, "trig"), _at_2(_d, "reset"));
  }, ["d"]),
  "{ :d |\n\t\tsetResetFf(d['trig'], d['reset'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "shaper",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _shaper_2(_at_2(_d, "bufNum"), _at_2(_d, "in"));
  }, ["d"]),
  "{ :d |\n\t\tshaper(d['bufNum'], d['in'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "sinOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _sinOsc_2(_at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tsinOsc(d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "sinOscFb",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _sinOscFb_2(_at_2(_d, "freq"), _at_2(_d, "feedback"));
  }, ["d"]),
  "{ :d |\n\t\tsinOscFb(d['freq'], d['feedback'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "slew",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _slew_3(_at_2(_d, "in"), _at_2(_d, "up"), _at_2(_d, "dn"));
  }, ["d"]),
  "{ :d |\n\t\tslew(d['in'], d['up'], d['dn'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "slope",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _slope_1(_at_2(_d, "in"));
  }, ["d"]),
  "{ :d |\n\t\tslope(d['in'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "stepper",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _stepper_6(
      _at_2(_d, "trig"),
      _at_2(_d, "reset"),
      _at_2(_d, "min"),
      _at_2(_d, "max"),
      _at_2(_d, "step"),
      _at_2(_d, "resetval"),
    );
  }, ["d"]),
  "{ :d |\n\t\tstepper(d['trig'], d['reset'], d['min'], d['max'], d['step'], d['resetval'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "sweep",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _sweep_2(_at_2(_d, "trig"), _at_2(_d, "rate"));
  }, ["d"]),
  "{ :d |\n\t\tsweep(d['trig'], d['rate'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "syncSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _syncSaw_2(_at_2(_d, "syncFreq"), _at_2(_d, "sawFreq"));
  }, ["d"]),
  "{ :d |\n\t\tsyncSaw(d['syncFreq'], d['sawFreq'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "tExpRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _tExpRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\ttExpRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "tGrains",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _tGrains_9(
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
  "{ :d |\n\t\ttGrains(d['numChan'], d['trigger'], d['bufNum'], d['rate'], d['centerPos'], d['dur'], d['pan'], d['amp'], d['interp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "tRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _tRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\ttRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "tiRand",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _tiRand_3(_at_2(_d, "lo"), _at_2(_d, "hi"), _at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\ttiRand(d['lo'], d['hi'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "timer",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _timer_1(_at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\ttimer(d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "toggleFf",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _toggleFf_1(_at_2(_d, "trig"));
  }, ["d"]),
  "{ :d |\n\t\ttoggleFf(d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "trig",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\ttrig(d['in'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "trig1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _trig1_2(_at_2(_d, "in"), _at_2(_d, "dur"));
  }, ["d"]),
  "{ :d |\n\t\ttrig1(d['in'], d['dur'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "twoPole",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _twoPole_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  }, ["d"]),
  "{ :d |\n\t\ttwoPole(d['in'], d['freq'], d['radius'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "twoZero",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _twoZero_3(_at_2(_d, "in"), _at_2(_d, "freq"), _at_2(_d, "radius"));
  }, ["d"]),
  "{ :d |\n\t\ttwoZero(d['in'], d['freq'], d['radius'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "vOsc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _vOsc_3(_at_2(_d, "bufPos"), _at_2(_d, "freq"), _at_2(_d, "phase"));
  }, ["d"]),
  "{ :d |\n\t\tvOsc(d['bufPos'], d['freq'], d['phase'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "vOsc3",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _vOsc3_4(
      _at_2(_d, "bufPos"),
      _at_2(_d, "freq1"),
      _at_2(_d, "freq2"),
      _at_2(_d, "freq3"),
    );
  }, ["d"]),
  "{ :d |\n\t\tvOsc3(d['bufPos'], d['freq1'], d['freq2'], d['freq3'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "varLag",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _varLag_5(
      _at_2(_d, "in"),
      _at_2(_d, "time"),
      _at_2(_d, "curvature"),
      _at_2(_d, "warp"),
      _at_2(_d, "start"),
    );
  }, ["d"]),
  "{ :d |\n\t\tvarLag(d['in'], d['time'], d['curvature'], d['warp'], d['start'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "varSaw",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _varSaw_3(
      _at_2(_d, "freq"),
      _at_2(_d, "iphase"),
      _at_2(_d, "width"),
    );
  }, ["d"]),
  "{ :d |\n\t\tvarSaw(d['freq'], d['iphase'], d['width'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "vibrato",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _vibrato_9(
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
  "{ :d |\n\t\tvibrato(d['freq'], d['rate'], d['depth'], d['delay'], d['onset'], d['rateVariation'], d['depthVariation'], d['iphase'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "warp1",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _warp1_9(
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
  "{ :d |\n\t\twarp1(d['numChan'], d['bufNum'], d['pointer'], d['freqScale'], d['windowSize'], d['envBufNum'] /* ? -1 */, d['overlaps'], d['windowRandRatio'], d['interp'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "wrap",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _wrap_3(_at_2(_d, "in"), _at_2(_d, "lo"), _at_2(_d, "hi"));
  }, ["d"]),
  "{ :d |\n\t\twrap(d['in'], d['lo'], d['hi'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "xFade2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _xFade2_4(
      _at_2(_d, "inA"),
      _at_2(_d, "inB"),
      _at_2(_d, "pan"),
      _at_2(_d, "level"),
    );
  }, ["d"]),
  "{ :d |\n\t\txFade2(d['inA'], d['inB'], d['pan'], d['level'])\n\t}",
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
  "eqPan2",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _eqPan2_2(_at_2(_d, "in"), _at_2(_d, "pos"));
  }, ["d"]),
  "{ :d |\n\t\teqPan2(d['in'], d['pos'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "membraneCircle",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _membraneCircle_3(
      _at_2(_d, "excitation"),
      _at_2(_d, "tension"),
      _at_2(_d, "loss"),
    );
  }, ["d"]),
  "{ :d |\n\t\tmembraneCircle(d['excitation'], d['tension'], d['loss'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "miBraids",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _miBraids_9(
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
  "{ :d |\n\t\tmiBraids(d['pitch'], d['timbre'], d['color'], d['model'], d['trig'], d['resamp'], d['decim'], d['bits'], d['ws'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "miClouds",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _miClouds_15(
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
  "{ :d |\n\t\tmiClouds(d['pit'], d['pos'], d['size'], d['dens'], d['tex'], d['dryWet'], d['inGain'], d['spread'], d['rvb'], d['fb'], d['freeze'], d['mode'], d['lofi'], d['trig'], d['inputList'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "miRings",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _miRings_12(
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
  "{ :d |\n\t\tmiRings(d['in'], d['trig'], d['pit'], d['struct'], d['bright'], d['damp'], d['pos'], d['model'], d['poly'], d['internExciter'], d['easterEgg'], d['bypass'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "perc",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _perc_4(
      _at_2(_d, "trig"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "releaseTime"),
      _at_2(_d, "curve"),
    );
  }, ["d"]),
  "{ :d |\n\t\tperc(d['trig'], d['attackTime'], d['releaseTime'], d['curve'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "release",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _release_4(
      _at_2(_d, "in"),
      _at_2(_d, "attackTime"),
      _at_2(_d, "sustainTime"),
      _at_2(_d, "releaseTime"),
    );
  }, ["d"]),
  "{ :d |\n\t\trelease(d['in'], d['attackTime'], d['sustainTime'], d['releaseTime'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "tScramble",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _tScramble_2(_at_2(_d, "trigger"), _at_2(_d, "inputs"));
  }, ["d"]),
  "{ :d |\n\t\ttScramble(d['trigger'], d['inputs'])\n\t}",
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

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "txLine",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _txLine_4(
      _at_2(_d, "start"),
      _at_2(_d, "end"),
      _at_2(_d, "dur"),
      _at_2(_d, "trig"),
    );
  }, ["d"]),
  "{ :d |\n\t\ttxLine(d['start'], d['end'], d['dur'], d['trig'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "KeywordUgens",
  "voicer",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _voicer_3(
      _at_2(_d, "part"),
      _at_2(_d, "numVoices"),
      _at_2(_d, "voiceFunc"),
    );
  }, ["d"]),
  "{ :d |\n\t\tvoicer(d['part'], d['numVoices'], d['voiceFunc'])\n\t}",
);
