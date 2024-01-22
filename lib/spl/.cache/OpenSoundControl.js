/* {- Requires: ByteArray -} */

sl.addType(
  false,
  "OscParameter",
  "OpenSoundControl",
  ["Object"],
  ["typeTag", "value"],
);

sl.copyTraitToType(
  "Object",
  "OscParameter",
);

sl.addMethod(
  "OscParameter",
  "OpenSoundControl",
  "dictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["type", _typeTag_1(_self)], [
      "value",
      _value_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(\n\t\t\ttype: self.typeTag,\n\t\t\tvalue: self.value\n\t\t)\n\t}",
);

sl.addMethod(
  "OscParameter",
  "OpenSoundControl",
  "OscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "ByteArray",
  "OpenSoundControl",
  "OscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _OscParameter_2("b", _self);
  },
  "{ :self |\n\t\tOscParameter('b', self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "OpenSoundControl",
  "OscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _OscParameter_2("i", _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "OscParameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
  ["address", "parameterArray"],
);

sl.copyTraitToType(
  "Object",
  "OscMessage",
);

sl.addMethod(
  "OscMessage",
  "OpenSoundControl",
  "dictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["address", _address_1(_self)], [
      "args",
      _collect_2(_parameterArray_1(_self), _dictionary_1),
    ]]);
  },
  "{ :self |\n\t\t(\n\t\t\taddress: self.address,\n\t\t\targs: self.parameterArray.collect(dictionary:/1)\n\t\t)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.encodeServerPacket(
      _dictionary_1(_self),
      { metadata: true },
    );
  },
  "{ :self |\n\t\t<primitive:\n\t\treturn sc.encodeServerPacket(\n\t\t\t_dictionary_1(_self),\n\t\t\t{metadata: true}\n\t\t);\n\t\t>\n\t}",
);

sl.addMethod(
  "String",
  "OpenSoundControl",
  "OscMessage",
  ["self", "parameterArray"],
  function (_self, _parameterArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newOscMessage_0(),
      _self,
      _collect_2(_parameterArray, _OscParameter_1),
    );
  },
  "{ :self :parameterArray |\n\t\tnewOscMessage().initializeSlots(\n\t\t\tself,\n\t\t\tparameterArray.collect(OscParameter:/1)\n\t\t)\n\t}",
);
