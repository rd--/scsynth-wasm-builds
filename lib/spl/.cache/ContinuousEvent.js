sl.addType(
  false,
  "ContinuousEvent",
  "ContinuousEvent",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ContinuousEvent",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self | contents(self) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 5);
  },
  "{ :self | at(contents(self), 5) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "j",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 6);
  },
  "{ :self | at(contents(self), 6) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "k",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 7);
  },
  "{ :self | at(contents(self), 7) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "p",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 8);
  },
  "{ :self | at(contents(self), 8) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "w",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 1);
  },
  "{ :self | at(contents(self), 1) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 2);
  },
  "{ :self | at(contents(self), 2) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 3);
  },
  "{ :self | at(contents(self), 3) }",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 4);
  },
  "{ :self | at(contents(self), 4) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "asContinuousEvent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsOfSize_2(_self, 8);
    return _initializeSlots_2(_newContinuousEvent_0(), _kr_1(_self));
  },
  "{ :self | assertIsOfSize(self,8); initializeSlots(newContinuousEvent(),kr(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "ContinuousEvent",
  "ContinuousEvent",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _asContinuousEvent_1([0, 0, 0, 0, 0, 0, 0, 0]);
  },
  "{ asContinuousEvent([0, 0, 0, 0, 0, 0, 0, 0]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "ContinuousEvent",
  "asContinuousEvent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asContinuousEvent_1([
      _atIfAbsent_3(_self, "w", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "x", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "y", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "z", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "i", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "j", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "k", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "p", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }),
    ]);
  },
  "{ :self | asContinuousEvent([atIfAbsent(self, 'w', { 0 }), atIfAbsent(self, 'x', { 0 }), atIfAbsent(self, 'y', { 0 }), atIfAbsent(self, 'z', { 0 }), atIfAbsent(self, 'i', { 0 }), atIfAbsent(self, 'j', { 0 }), atIfAbsent(self, 'k', { 0 }), atIfAbsent(self, 'p', { 0 })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "ContinuousEvent",
  "Voicer",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_multiChannelExpand_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_asContinuousEvent_1(_each));
    });
  },
  "{ :self :aBlock:/1 | collect(multiChannelExpand(self), { :each | aBlock(asContinuousEvent(each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "voicerVoiceAddress",
  ["part", "voice"],
  function (_part, _voice) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _part, _voice";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _addrZero = 13000;
    let _maxEventParam = 10;
    let _maxVoices = 24;
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _addrZero,
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_part, 1), _maxVoices),
          _maxEventParam,
        ),
      ),
      _asterisk_2(_hyphenMinus_2(_voice, 1), _maxEventParam),
    );
  },
  "{ :part :voice | let addrZero = 13000; let maxEventParam = 10; let maxVoices = 24; +(+(addrZero, (*(*(-(part, 1), maxVoices), maxEventParam))), (*(-(voice, 1), maxEventParam))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "Voicer",
  ["part", "voice", "voiceBlock:/1"],
  function (_part, _voice, _voiceBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _part, _voice, _voiceBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _voice), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _bus = _voicerVoiceAddress_2(_part, _each);
      /* Statements */
      return _voiceBlock_1(_asContinuousEvent_1(_ControlIn_2(8, _bus)));
    });
  },
  "{ :part :voice :voiceBlock:/1 | collect(to(1, voice), { :each | let bus = voicerVoiceAddress(part,each); voiceBlock(asContinuousEvent(ControlIn(8, bus))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "VoiceWriter",
  ["part", "numVoices", "voiceBlock:/0"],
  function (_part, _numVoices, _voiceBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _part, _numVoices, _voiceBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _numVoices), function (_voice) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _voice";
        throw new Error(errorMessage);
      } /* Statements */
      return _ControlOut_2(
        _voicerVoiceAddress_2(_part, _voice),
        _asList_1(_asContinuousEvent_1(_voiceBlock_0())),
      );
    });
  },
  "{ :part :numVoices :voiceBlock:/0 | collect(to(1, numVoices), { :voice | ControlOut(voicerVoiceAddress(part,voice), asList(asContinuousEvent(voiceBlock()))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenX(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenX(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenY(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenY(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenZ(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenZ(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenAngle(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenAngle(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenRadius(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenRadius(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);>\n }",
);
