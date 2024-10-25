/*  Requires: ByteArray  */

sl.addType(
  false,
  "OscParameter",
  "OpenSoundControl",
  ["Object"],
  ["typeLetter", "value"],
);

sl.copyTraitToType(
  "Object",
  "OscParameter",
);

sl.addMethod(
  "OscParameter",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["type", _typeLetter_1(_self)], [
      "value",
      _value_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(\n\t\t\ttype: self.typeLetter,\n\t\t\tvalue: self.value\n\t\t)\n\t}",
);

sl.addMethod(
  "OscParameter",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "OscParameter",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "ByteArray",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _OscParameter_2("b", _self);
  },
  "{ :self |\n\t\tOscParameter('b', self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _OscParameter_2("i", _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _OscParameter_2("f", _self);
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tOscParameter('i', self)\n\t\t} {\n\t\t\tOscParameter('f', self)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _OscParameter_2("s", _self);
  },
  "{ :self |\n\t\tOscParameter('s', self)\n\t}",
);

sl.addMethod(
  "String",
  "OpenSoundControl",
  "OscParameter",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newOscParameter_0(), _self, _anObject);
  },
  "{ :self :anObject |\n\t\tnewOscParameter().initializeSlots(self, anObject)\n\t}",
);

sl.addType(
  false,
  "OscMessage",
  "OpenSoundControl",
  ["Object"],
  ["address", "parameterList"],
);

sl.copyTraitToType(
  "Object",
  "OscMessage",
);

sl.addMethod(
  "OscMessage",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["address", _address_1(_self)], [
      "args",
      _collect_2(_parameterList_1(_self), _asRecord_1),
    ]]);
  },
  "{ :self |\n\t\t(\n\t\t\taddress: self.address,\n\t\t\targs: self.parameterList.collect(asRecord:/1)\n\t\t)\n\t}",
);

sl.addMethod(
  "OscMessage",
  "OpenSoundControl",
  "encode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicEncodeOscMessage_1(_asRecord_1(_self));
  },
  "{ :self |\n\t\tself.asRecord.basicEncodeOscMessage\n\t}",
);

sl.addMethod(
  "OscMessage",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "String",
  "OpenSoundControl",
  "OscMessage",
  ["self", "parameterList"],
  function (_self, _parameterList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newOscMessage_0(),
      _self,
      _collect_2(_parameterList, _asOscParameter_1),
    );
  },
  "{ :self :parameterList |\n\t\tnewOscMessage().initializeSlots(\n\t\t\tself,\n\t\t\tparameterList.collect(asOscParameter:/1)\n\t\t)\n\t}",
);

sl.addType(
  false,
  "OscBundle",
  "OpenSoundControl",
  ["Object"],
  ["time", "messageList"],
);

sl.copyTraitToType(
  "Object",
  "OscBundle",
);

sl.addMethod(
  "OscBundle",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([[
      "timeTag",
      Object.fromEntries([["native", _asterisk_2(_time_1(_self), 1000)]]),
    ], ["packets", _collect_2(_messageList_1(_self), _asRecord_1)]]);
  },
  "{ :self |\n\t\t(\n\t\t\ttimeTag: (native: self.time * 1000),\n\t\t\tpackets: self.messageList.collect(asRecord:/1)\n\t\t)\n\t}",
);

sl.addMethod(
  "OscBundle",
  "OpenSoundControl",
  "encode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicEncodeOscBundle_1(_asRecord_1(_self));
  },
  "{ :self |\n\t\tself.asRecord.basicEncodeOscBundle\n\t}",
);

sl.addMethod(
  "OscBundle",
  "OpenSoundControl",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "OpenSoundControl",
  "OscBundle",
  ["self", "messageList"],
  function (_self, _messageList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _messageList";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newOscBundle_0(), _self, _messageList);
  },
  "{ :self :messageList |\n\t\tnewOscBundle().initializeSlots(self, messageList)\n\t}",
);

sl.addMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscMessage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return osc.writeMessage(_self, { metadata: true });
  },
  "{ :self |\n\t\t<primitive: return osc.writeMessage(_self, { metadata: true });>\n\t}",
);

sl.addMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscBundle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return osc.writeBundle(_self, { metadata: true });
  },
  "{ :self |\n\t\t<primitive: return osc.writeBundle(_self, { metadata: true });>\n\t}",
);
