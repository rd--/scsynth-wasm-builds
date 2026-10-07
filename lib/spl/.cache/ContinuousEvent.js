sl.addType(
  false,
  "ContinuousEvent",
  "ContinuousEvent",
  ["Object"],
  ["signalList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ContinuousEvent",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 5);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[5]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "j",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 6);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[6]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "k",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 7);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[7]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_signalList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.signalList.copy\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "p",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 8);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[8]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "w",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[1]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[2]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[3]\n\t}",
);

sl.addMethodToExistingType(
  "ContinuousEvent",
  "ContinuousEvent",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_signalList_1(_self), 4);
  }, ["self"]),
  "{ :self |\n\t\tself.signalList[4]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "ContinuousEvent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsOfSize_2(_self, 8);
    return _initializeSlots_2(_newContinuousEvent_0(), _kr_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.assertIsOfSize(8);\n\t\tnewContinuousEvent().initializeSlots(self.kr) /* control rate? */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "ContinuousEvent",
  "ContinuousEvent",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _ContinuousEvent_1([0, 0, 0, 0, 0, 0, 0, 0]);
  }, []),
  "{\n\t\tContinuousEvent[0 0 0 0 0 0 0 0]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ContinuousEvent",
  "ContinuousEvent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ContinuousEvent_1([
      _atIfAbsent_3(
        _self,
        "w",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "x",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "y",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "z",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "i",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "j",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "k",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _atIfAbsent_3(
        _self,
        "p",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tContinuousEvent[\n\t\t\tself.atIfAbsent('w') { 0 },\n\t\t\tself.atIfAbsent('x') { 0 },\n\t\t\tself.atIfAbsent('y') { 0 },\n\t\t\tself.atIfAbsent('z') { 0 },\n\t\t\tself.atIfAbsent('i') { 0 },\n\t\t\tself.atIfAbsent('j') { 0 },\n\t\t\tself.atIfAbsent('k') { 0 },\n\t\t\tself.atIfAbsent('p') { 0 }\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ContinuousEvent",
  "Voicer",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _multiChannelExpand_1(_self),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_ContinuousEvent_1(_x));
      }, ["x"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.multiChannelExpand.collect { :x |\n\t\t\taBlock(ContinuousEvent(x))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "voicerVoiceAddress",
  ["part", "voice"],
  sl.annotateFunction(function (_part, _voice) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _part, _voice";
      throw new Error(errorMessage);
    } /* Statements */
    let _addrZero = 13000;
    let _maxEventParam = 10;
    let _maxVoices = 24;
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
  }, ["part", "voice"]),
  "{ :part :voice |\n\t\tlet addrZero = 13000;\n\t\tlet maxEventParam = 10;\n\t\tlet maxVoices = 24;\n\t\taddrZero + (part - 1 * maxVoices * maxEventParam) + (voice - 1 * maxEventParam)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "Voicer",
  ["part", "voice", "voiceBlock/1"],
  sl.annotateFunction(function (_part, _voice, _voiceBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _part, _voice, _voiceBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      1,
      _voice,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let _bus = _voicerVoiceAddress_2(_part, _each);
        return _voiceBlock_1(_ContinuousEvent_1(_ControlIn_2(8, _bus)));
      }, ["each"]),
    );
  }, ["part", "voice", "voiceBlock/1"]),
  "{ :part :voice :voiceBlock/1 |\n\t\t1.toCollect(voice) { :each |\n\t\t\tlet bus = part.voicerVoiceAddress(each);\n\t\t\tContinuousEvent(\n\t\t\t\tControlIn(8, bus)\n\t\t\t).voiceBlock\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ContinuousEvent",
  "VoiceWriter",
  ["part", "numVoices", "voiceBlock/0"],
  sl.annotateFunction(function (_part, _numVoices, _voiceBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _part, _numVoices, _voiceBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _toCollect_3(
      1,
      _numVoices,
      sl.annotateFunction(function (_voice) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _voice";
          throw new Error(errorMessage);
        } /* Statements */
        return _ControlOut_2(
          _voicerVoiceAddress_2(_part, _voice),
          _List_1(_ContinuousEvent_1(_voiceBlock_0())),
        );
      }, ["voice"]),
    );
  }, ["part", "numVoices", "voiceBlock/0"]),
  "{ :part :numVoices :voiceBlock/0 |\n\t\t1.toCollect(numVoices) { :voice |\n\t\t\tControlOut(\n\t\t\t\tpart.voicerVoiceAddress(voice),\n\t\t\t\tContinuousEvent(\n\t\t\t\t\tvoiceBlock()\n\t\t\t\t).List\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyDown(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyDown",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyDown(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyDown(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyTimbre",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyTimbre(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyTimbre(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyPressure",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPressure(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyPressure(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyVelocity",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyVelocity(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyVelocity(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "KeyPitch",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.KeyPitch(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.KeyPitch(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenDown(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenDown",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenDown(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenDown(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenX(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenX",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenX(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenX(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenY(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenY",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenY(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenY(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenZ(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenZ",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenZ(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenZ(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenAngle(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenAngle",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenAngle(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenAngle(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenRadius(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);> }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ContinuousEvent",
  "PenRadius",
  ["voiceNumber"],
  sl.annotateFunction(function (_voiceNumber) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _voiceNumber";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.PenRadius(_voiceNumber);
  }, ["voiceNumber"]),
  "{ :voiceNumber | <primitive: return sc.PenRadius(_voiceNumber);> }",
);
