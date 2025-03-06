/*  Requires: Frequency  */

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | +(log2((*(hertz(self), (/(1, 440))))), 4.75) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | +(*(log2((*(hertz(self), (/(1, 440))))), 12), 69) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | midiNoteNumberToOctavePitchClass(midiNoteNumber(self)) }",
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
  "{ :self | hertz((*(440, (^(2, (-(self, 4.75))))))) }",
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
  "{ :self | hertz((*(440, (^(2, (*((-(self, 69)), (/(1, 12))))))))) }",
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
  "{ :self | let octave = -(floor((/(self, 12))), 1); let zero = *((+(octave, 1)), 12); let pitchClass = /((-(self, zero)), 100); +(octave, pitchClass) }",
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
  "{ :self | midiNoteNumber(octavePitchClassToMidiNoteNumber(self)) }",
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
  "{ :self | let octave = floor(self); let pitchClass = *((-(self, octave)), 100); +(*((+(octave, 1)), 12), pitchClass) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | hertz(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | midiNoteNumber(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | octavePitchClass(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Frequency",
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
  "{ :self | linearOctave(self) }",
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
  "{ :self | hertz(self) }",
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
  "{ :self | midiNoteNumber(self) }",
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
  "{ :self | linearOctave(self) }",
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
  "{ :self | octavePitchClass(self) }",
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
  "{ :self | +(self, 0.1) }",
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
  "{ :self | -(self, 0.1) }",
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
  "{ :self | -(self, 0.1) }",
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
  "{ :self | +(self, 0.1) }",
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
  "{ :self | -(self, 0.05) }",
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
  "{ :self | +(self, 0.05) }",
);
