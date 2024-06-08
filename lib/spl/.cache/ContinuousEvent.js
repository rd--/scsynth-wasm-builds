sl.addType(
  false,
  "ContinuousEvent",
  "ContinuousEvent",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "ContinuousEvent",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 5);
  },
  "{ :self |\n\t\tself.contents[5]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "j",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 6);
  },
  "{ :self |\n\t\tself.contents[6]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "k",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 7);
  },
  "{ :self |\n\t\tself.contents[7]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "p",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 8);
  },
  "{ :self |\n\t\tself.contents[8]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "w",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 1);
  },
  "{ :self |\n\t\tself.contents[1]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 2);
  },
  "{ :self |\n\t\tself.contents[2]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 3);
  },
  "{ :self |\n\t\tself.contents[3]\n\t}",
);

sl.addMethod(
  "ContinuousEvent",
  "ContinuousEvent",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), 4);
  },
  "{ :self |\n\t\tself.contents[4]\n\t}",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "asContinuousEvent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _assertIsOfSize_2(_self, 8);
    return _initializeSlots_2(_newContinuousEvent_0(), _kr_1(_self));
  },
  "{ :self |\n\t\tself.assertIsOfSize(8);\n\t\tnewContinuousEvent().initializeSlots(self.kr) {- control rate? -}\n\t}",
);

sl.addMethod(
  "Void",
  "ContinuousEvent",
  "ContinuousEvent",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asContinuousEvent_1([0, 0, 0, 0, 0, 0, 0, 0]);
  },
  "{\n\t\t[0 0 0 0 0 0 0 0].asContinuousEvent\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "ContinuousEvent",
  "asContinuousEvent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asContinuousEvent_1([
      _atIfAbsent_3(_self, "w", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "x", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "y", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "z", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "i", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "j", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "k", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
      _atIfAbsent_3(_self, "p", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }),
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\tself.atIfAbsent('w') { 0 },\n\t\t\tself.atIfAbsent('x') { 0 },\n\t\t\tself.atIfAbsent('y') { 0 },\n\t\t\tself.atIfAbsent('z') { 0 },\n\t\t\tself.atIfAbsent('i') { 0 },\n\t\t\tself.atIfAbsent('j') { 0 },\n\t\t\tself.atIfAbsent('k') { 0 },\n\t\t\tself.atIfAbsent('p') { 0 }\n\t\t].asContinuousEvent\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "ContinuousEvent",
  "Voicer",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_multiChannelExpand_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_asContinuousEvent_1(_each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.multiChannelExpand.collect { :each |\n\t\t\taBlock(each.asContinuousEvent)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ContinuousEvent",
  "voicerVoiceAddress",
  ["part", "voice"],
  function (_part, _voice) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _part, _voice";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  "{ :part :voice |\n\t\tlet addrZero = 13000;\n\t\tlet maxEventParam = 10;\n\t\tlet maxVoices = 24;\n\t\taddrZero + (part - 1 * maxVoices * maxEventParam) + (voice - 1 * maxEventParam)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ContinuousEvent",
  "Voicer",
  ["part", "voice", "voiceBlock:/1"],
  function (_part, _voice, _voiceBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _part, _voice, _voiceBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _voice), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _bus = _voicerVoiceAddress_2(_part, _each);
      /* Statements */
      return _voiceBlock_1(_asContinuousEvent_1(_ControlIn_2(8, _bus)));
    });
  },
  "{ :part :voice :voiceBlock:/1 |\n\t\t1:voice.collect { :each |\n\t\t\tlet bus = part.voicerVoiceAddress(each);\n\t\t\tControlIn(8, bus).asContinuousEvent.voiceBlock\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ContinuousEvent",
  "VoiceWriter",
  ["part", "numVoices", "voiceBlock:/0"],
  function (_part, _numVoices, _voiceBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _part, _numVoices, _voiceBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _numVoices), function (_voice) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _voice";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ControlOut_2(
        _voicerVoiceAddress_2(_part, _voice),
        _asList_1(_asContinuousEvent_1(_voiceBlock_0())),
      );
    });
  },
  "{ :part :numVoices :voiceBlock:/0 |\n\t\t1:numVoices.collect { :voice |\n\t\t\tControlOut(\n\t\t\t\tpart.voicerVoiceAddress(voice),\n\t\t\t\tvoiceBlock().asContinuousEvent.asList\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenDown(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenX(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenX(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenY(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenY(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenZ(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenZ(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenAngle(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenAngle(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);> }",
);

sl.addMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenRadius(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);> }",
);

sl.addMethod(
  "List",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.PenRadius(_voiceNumber);
  },
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);> }",
);
