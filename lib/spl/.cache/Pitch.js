/*  Requires: Frequency  */

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "linearOctave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _log2_1(_asterisk_2(_hertz_1(_self), _solidus_2(1, 440))),
      4.75,
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.hertz * (1 / 440)).log2 + 4.75\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "midiNoteNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _log2_1(_asterisk_2(_hertz_1(_self), _solidus_2(1, 440))),
        12,
      ),
      69,
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.hertz * (1 / 440)).log2 * 12 + 69\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "octavePitchClass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midiNoteNumberToOctavePitchClass_1(_midiNoteNumber_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.midiNoteNumber.midiNoteNumberToOctavePitchClass\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "CpsCv",
  ["f", "f0"],
  sl.annotateFunction(function (_f, _f0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f, _f0";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_solidus_2(_f, _f0));
  }, ["f", "f0"]),
  "{ :f :f0 |\n\t\t(f / f0).log2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "CpsCv",
  ["f"],
  sl.annotateFunction(function (_f) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _f";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_solidus_2(_f, 261.6256));
  }, ["f"]),
  "{ :f |\n\t\t(f / 261.6256).log2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "CvCps",
  ["v", "f0"],
  sl.annotateFunction(function (_v, _f0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _f0";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_f0, _circumflexAccent_2(2, _v));
  }, ["v", "f0"]),
  "{ :v :f0 |\n\t\tf0 * (2 ^ v)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "CvCps",
  ["v"],
  sl.annotateFunction(function (_v) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(261.6256, _circumflexAccent_2(2, _v));
  }, ["v"]),
  "{ :v |\n\t\t261.6256 * (2 ^ v)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "linearOctave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(
      _asterisk_2(440, _circumflexAccent_2(2, _hyphenMinus_2(_self, 4.75))),
    );
  }, ["self"]),
  "{ :self |\n\t\t(440 * (2 ^ (self - 4.75))).hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "midiNoteNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(
      _asterisk_2(
        440,
        _circumflexAccent_2(
          2,
          _asterisk_2(_hyphenMinus_2(_self, 69), _solidus_2(1, 12)),
        ),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t(440 * (2 ^ ((self - 69) * (1 / 12)))).hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "midiNoteNumberToOctavePitchClass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _octave = _hyphenMinus_2(_floor_1(_solidus_2(_self, 12)), 1);
    let _zero = _asterisk_2(_plusSign_2(_octave, 1), 12);
    let _pitchClass = _solidus_2(_hyphenMinus_2(_self, _zero), 100);
    /* Statements */
    return _plusSign_2(_octave, _pitchClass);
  }, ["self"]),
  "{ :self |\n\t\tlet octave = (self / 12).floor - 1;\n\t\tlet zero = (octave + 1) * 12;\n\t\tlet pitchClass = (self - zero) / 100;\n\t\toctave + pitchClass\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "octavePitchClass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midiNoteNumber_1(_octavePitchClassToMidiNoteNumber_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.octavePitchClassToMidiNoteNumber.midiNoteNumber\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "octavePitchClassToMidiNoteNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _octave = _floor_1(_self);
    let _pitchClass = _asterisk_2(_hyphenMinus_2(_self, _octave), 100);
    /* Statements */
    return _plusSign_2(_asterisk_2(_plusSign_2(_octave, 1), 12), _pitchClass);
  }, ["self"]),
  "{ :self |\n\t\tlet octave = self.floor;\n\t\tlet pitchClass = (self - octave) * 100;\n\t\t(octave + 1) * 12 + pitchClass\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "cps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "midi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midiNoteNumber_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.midiNoteNumber\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "pch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _octavePitchClass_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.octavePitchClass\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Frequency",
  "Pitch",
  "oct",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearOctave_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.linearOctave\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "cps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "midi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midiNoteNumber_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.midiNoteNumber\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "oct",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearOctave_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.linearOctave\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "pch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _octavePitchClass_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.octavePitchClass\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "cancelFlat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, 0.1);
  }, ["self"]),
  "{ :self |\n\t\tself + 0.1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "cancelSharp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, 0.1);
  }, ["self"]),
  "{ :self |\n\t\tself - 0.1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "flat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, 0.1);
  }, ["self"]),
  "{ :self |\n\t\tself - 0.1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "sharp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, 0.1);
  }, ["self"]),
  "{ :self |\n\t\tself + 0.1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "quarterToneFlat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, 0.05);
  }, ["self"]),
  "{ :self |\n\t\tself - 0.05\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Pitch",
  "quarterToneSharp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, 0.05);
  }, ["self"]),
  "{ :self |\n\t\tself + 0.05\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Pitch",
  "CpsCv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _CpsCv_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(CpsCv:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Pitch",
  "CpsCv",
  ["self", "f0"],
  sl.annotateFunction(function (_self, _f0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f0";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_f) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _f";
          throw new Error(errorMessage);
        } /* Statements */
        return _log2_1(_solidus_2(_f, _f0));
      }, ["f"]),
    );
  }, ["self", "f0"]),
  "{ :self :f0 |\n\t\tself.collect { :f |\n\t\t\t(f / f0).log2\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Pitch",
  "CvCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _CvCps_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(CvCps:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Pitch",
  "CvCps",
  ["self", "f0"],
  sl.annotateFunction(function (_self, _f0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f0";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_f0, _circumflexAccent_2(2, _v));
      }, ["v"]),
    );
  }, ["self", "f0"]),
  "{ :self :f0 |\n\t\tself.collect { :v |\n\t\t\tf0 * (2 ^ v)\n\t\t}\n\t}",
);
