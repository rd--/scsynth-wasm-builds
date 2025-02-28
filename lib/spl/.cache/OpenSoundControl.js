/*  Requires: ByteArray  */

sl.addType(
  false,
  "OscParameter",
  "OpenSoundControl",
  ["Object"],
  ["typeLetter", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscParameter",
);

sl.addMethodToExistingType(
  "OscParameter",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["type", _typeLetter_1(_self)], [
      "value",
      _value_1(_self),
    ]]);
  },
  "{ :self | Record([['type', typeLetter(self)], ['value', value(self)]]) }",
);

sl.addMethodToExistingType(
  "OscParameter",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "OscParameter",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscParameter_2("b", _self);
  },
  "{ :self | OscParameter('b', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _OscParameter_2("i", _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _OscParameter_2("f", _self);
    });
  },
  "{ :self | if(isInteger(self), { OscParameter('i', self) }, { OscParameter('f', self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscParameter_2("s", _self);
  },
  "{ :self | OscParameter('s', self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "OscParameter",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newOscParameter_0(), _self, _anObject);
  },
  "{ :self :anObject | initializeSlots(newOscParameter(),self, anObject) }",
);

sl.addType(
  false,
  "OscMessage",
  "OpenSoundControl",
  ["Object"],
  ["address", "parameterList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscMessage",
);

sl.addMethodToExistingType(
  "OscMessage",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["address", _address_1(_self)], [
      "args",
      _collect_2(_parameterList_1(_self), _asRecord_1),
    ]]);
  },
  "{ :self | Record([['address', address(self)], ['args', collect(parameterList(self),asRecord:/1)]]) }",
);

sl.addMethodToExistingType(
  "OscMessage",
  "OpenSoundControl",
  "encode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicEncodeOscMessage_1(_asRecord_1(_self));
  },
  "{ :self | basicEncodeOscMessage(asRecord(self)) }",
);

sl.addMethodToExistingType(
  "OscMessage",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "OscMessage",
  ["self", "parameterList"],
  function (_self, _parameterList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newOscMessage_0(),
      _self,
      _collect_2(_parameterList, _asOscParameter_1),
    );
  },
  "{ :self :parameterList | initializeSlots(newOscMessage(),self, collect(parameterList,asOscParameter:/1)) }",
);

sl.addType(
  false,
  "OscBundle",
  "OpenSoundControl",
  ["Object"],
  ["time", "messageList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscBundle",
);

sl.addMethodToExistingType(
  "OscBundle",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([[
      "timeTag",
      _Record_1([["native", _asterisk_2(_time_1(_self), 1000)]]),
    ], ["packets", _collect_2(_messageList_1(_self), _asRecord_1)]]);
  },
  "{ :self | Record([['timeTag', Record([['native', *(time(self), 1000)]])], ['packets', collect(messageList(self),asRecord:/1)]]) }",
);

sl.addMethodToExistingType(
  "OscBundle",
  "OpenSoundControl",
  "encode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicEncodeOscBundle_1(_asRecord_1(_self));
  },
  "{ :self | basicEncodeOscBundle(asRecord(self)) }",
);

sl.addMethodToExistingType(
  "OscBundle",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OpenSoundControl",
  "OscBundle",
  ["self", "messageList"],
  function (_self, _messageList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _messageList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newOscBundle_0(), _self, _messageList);
  },
  "{ :self :messageList | initializeSlots(newOscBundle(),self, messageList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscMessage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return osc.writeMessage(_self, { metadata: true });
  },
  "{ :self | <primitive: return osc.writeMessage(_self, { metadata: true });>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscBundle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return osc.writeBundle(_self, { metadata: true });
  },
  "{ :self | <primitive: return osc.writeBundle(_self, { metadata: true });>\n }",
);
