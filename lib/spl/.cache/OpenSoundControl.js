/*  Requires: ByteArray  */

sl.addType(
  false,
  "OscParameter",
  "OpenSoundControl",
  ["Object", "Storeable"],
  ["typeLetter", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscParameter",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "OscParameter",
);

sl.addMethodToExistingType(
  "OscParameter",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["type", _typeLetter_1(_self)], [
      "value",
      _value_1(_self),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\ttype: self.typeLetter,\n\t\t\tvalue: self.value\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OscParameter",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscParameter_2("b", _self);
  }, ["self"]),
  "{ :self |\n\t\tOscParameter('b', self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _OscParameter_2("i", _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _OscParameter_2("f", _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tOscParameter('i', self)\n\t\t} {\n\t\t\tOscParameter('f', self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "asOscParameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _OscParameter_2("s", _self);
  }, ["self"]),
  "{ :self |\n\t\tOscParameter('s', self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "OscParameter",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newOscParameter_0(), _self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tnewOscParameter().initializeSlots(self, anObject)\n\t}",
);

sl.addType(
  false,
  "OscMessage",
  "OpenSoundControl",
  ["Object", "Storeable"],
  ["address", "parameterList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscMessage",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "OscMessage",
);

sl.addMethodToExistingType(
  "OscMessage",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["address", _address_1(_self)], [
      "args",
      _collect_2(_parameterList_1(_self), _asRecord_1),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\taddress: self.address,\n\t\t\targs: self.parameterList.collect(asRecord:/1)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OscMessage",
  "OpenSoundControl",
  "encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicEncodeOscMessage_1(_asRecord_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asRecord.basicEncodeOscMessage\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "OpenSoundControl",
  "OscMessage",
  ["self", "parameterList"],
  sl.annotateFunction(function (_self, _parameterList) {
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
  }, ["self", "parameterList"]),
  "{ :self :parameterList |\n\t\tnewOscMessage().initializeSlots(\n\t\t\tself,\n\t\t\tparameterList.collect(asOscParameter:/1)\n\t\t)\n\t}",
);

sl.addType(
  false,
  "OscBundle",
  "OpenSoundControl",
  ["Object", "Storeable"],
  ["time", "messageList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OscBundle",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "OscBundle",
);

sl.addMethodToExistingType(
  "OscBundle",
  "OpenSoundControl",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([[
      "timeTag",
      _Record_1([["native", _asterisk_2(_time_1(_self), 1000)]]),
    ], ["packets", _collect_2(_messageList_1(_self), _asRecord_1)]]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\ttimeTag: (native: self.time * 1000),\n\t\t\tpackets: self.messageList.collect(asRecord:/1)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "OscBundle",
  "OpenSoundControl",
  "encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicEncodeOscBundle_1(_asRecord_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asRecord.basicEncodeOscBundle\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OpenSoundControl",
  "OscBundle",
  ["self", "messageList"],
  sl.annotateFunction(function (_self, _messageList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _messageList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newOscBundle_0(), _self, _messageList);
  }, ["self", "messageList"]),
  "{ :self :messageList |\n\t\tnewOscBundle().initializeSlots(self, messageList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscMessage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return osc.writeMessage(_self, { metadata: true });
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return osc.writeMessage(_self, { metadata: true });>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "OpenSoundControl",
  "basicEncodeOscBundle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return osc.writeBundle(_self, { metadata: true });
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return osc.writeBundle(_self, { metadata: true });>\n\t}",
);
