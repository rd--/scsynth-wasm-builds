/*  Requires: Frequency  */

sl.addMethod(
  "Frequency",
  "Pitch",
  "linearOctave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _log2_1(_asterisk_2(_hertz_1(_self), _solidus_2(1, 440))),
      4.75,
    );
  },
  "{ :self |\n\t\t(self.hertz * (1 / 440)).log2 + 4.75\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "midiNoteNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _log2_1(_asterisk_2(_hertz_1(_self), _solidus_2(1, 440))),
        12,
      ),
      69,
    );
  },
  "{ :self |\n\t\t(self.hertz * (1 / 440)).log2 * 12 + 69\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "octavePitchClass",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midiNoteNumberToOctavePitchClass_1(_midiNoteNumber_1(_self));
  },
  "{ :self |\n\t\tself.midiNoteNumber.midiNoteNumberToOctavePitchClass\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "linearOctave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(
      _asterisk_2(440, _circumflexAccent_2(2, _hyphenMinus_2(_self, 4.75))),
    );
  },
  "{ :self |\n\t\t(440 * (2 ^ (self - 4.75))).hertz\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "midiNoteNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(
      _asterisk_2(
        440,
        _circumflexAccent_2(
          2,
          _asterisk_2(_hyphenMinus_2(_self, 69), _solidus_2(1, 12)),
        ),
      ),
    );
  },
  "{ :self |\n\t\t(440 * (2 ^ ((self - 69) * (1 / 12)))).hertz\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "midiNoteNumberToOctavePitchClass",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _octave = _hyphenMinus_2(_floor_1(_solidus_2(_self, 12)), 1);
    let _zero = _asterisk_2(_plusSign_2(_octave, 1), 12);
    let _pitchClass = _solidus_2(_hyphenMinus_2(_self, _zero), 100);
    /* Statements */
    return _plusSign_2(_octave, _pitchClass);
  },
  "{ :self |\n\t\tlet octave = (self / 12).floor - 1;\n\t\tlet zero = (octave + 1) * 12;\n\t\tlet pitchClass = (self - zero) / 100;\n\t\toctave + pitchClass\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "octavePitchClass",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midiNoteNumber_1(_octavePitchClassToMidiNoteNumber_1(_self));
  },
  "{ :self |\n\t\tself.octavePitchClassToMidiNoteNumber.midiNoteNumber\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "octavePitchClassToMidiNoteNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _octave = _floor_1(_self);
    let _pitchClass = _asterisk_2(_hyphenMinus_2(_self, _octave), 100);
    /* Statements */
    return _plusSign_2(_asterisk_2(_plusSign_2(_octave, 1), 12), _pitchClass);
  },
  "{ :self |\n\t\tlet octave = self.floor;\n\t\tlet pitchClass = (self - octave) * 100;\n\t\t(octave + 1) * 12 + pitchClass\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "cps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_self);
  },
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "midi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midiNoteNumber_1(_self);
  },
  "{ :self |\n\t\tself.midiNoteNumber\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "pch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _octavePitchClass_1(_self);
  },
  "{ :self |\n\t\tself.octavePitchClass\n\t}",
);

sl.addMethod(
  "Frequency",
  "Pitch",
  "oct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linearOctave_1(_self);
  },
  "{ :self |\n\t\tself.linearOctave\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "cps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_self);
  },
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "midi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midiNoteNumber_1(_self);
  },
  "{ :self |\n\t\tself.midiNoteNumber\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "oct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linearOctave_1(_self);
  },
  "{ :self |\n\t\tself.linearOctave\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "pch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _octavePitchClass_1(_self);
  },
  "{ :self |\n\t\tself.octavePitchClass\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "cancelFlat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_self, 0.1);
  },
  "{ :self |\n\t\tself + 0.1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "cancelSharp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_self, 0.1);
  },
  "{ :self |\n\t\tself - 0.1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "flat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_self, 0.1);
  },
  "{ :self |\n\t\tself - 0.1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "sharp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_self, 0.1);
  },
  "{ :self |\n\t\tself + 0.1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "quarterToneFlat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_self, 0.05);
  },
  "{ :self |\n\t\tself - 0.05\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Pitch",
  "quarterToneSharp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_self, 0.05);
  },
  "{ :self |\n\t\tself + 0.05\n\t}",
);
