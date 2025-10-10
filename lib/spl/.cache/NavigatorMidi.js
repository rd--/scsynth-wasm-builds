sl.addTrait("MidiMap", "NavigatorMidi");

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "do",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.forEach(_aBlock);
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\t<primitive: return _self.forEach(_aBlock);>\n\t}",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "ports",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.values());
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Array.from(_self.values());>\n\t}",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size", "ports"];
  }, ["self"]),
  "{ :self |\n\t\t['size', 'ports']\n\t}",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addTrait("MidiPort", "NavigatorMidi");

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "connection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.connection;
  }, ["self"]),
  "{ :self | <primitive: return _self.connection;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "id",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  }, ["self"]),
  "{ :self | <primitive: return _self.id;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "manufacturer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.manufacturer;
  }, ["self"]),
  "{ :self | <primitive: return _self.manufacturer;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self | <primitive: return _self.name;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "state",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.state;
  }, ["self"]),
  "{ :self | <primitive: return _self.state;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "version",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.version;
  }, ["self"]),
  "{ :self | <primitive: return _self.version;> }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([
      ["type", _type_1(_self)],
      ["id", _id_1(_self)],
      ["manufacturer", _manufacturer_1(_self)],
      ["name", _name_1(_self)],
      ["version", _version_1(_self)],
      ["state", _state_1(_self)],
      ["connection", _connection_1(_self)],
    ]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\ttype: self.type,\n\t\t\tid: self.id,\n\t\t\tmanufacturer: self.manufacturer,\n\t\t\tname: self.name,\n\t\t\tversion: self.version,\n\t\t\tstate: self.state,\n\t\t\tconnection: self.connection\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_asRecord_1(_self), null, "	");
  }, ["self"]),
  "{ :self |\n\t\tself.asRecord.asJson(nil, '\t')\n\t}",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      "type",
      "id",
      "manufacturer",
      "name",
      "version",
      "state",
      "connection",
    ];
  }, ["self"]),
  "{ :self |\n\t\t['type', 'id', 'manufacturer', 'name', 'version', 'state', 'connection']\n\t}",
);

sl.addType(
  true,
  "MIDIAccess",
  "NavigatorMidi",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIAccess",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "MIDIAccess",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "inputs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.inputs;
  }, ["self"]),
  "{ :self | <primitive: return _self.inputs;> }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "outputs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outputs;
  }, ["self"]),
  "{ :self | <primitive: return _self.outputs;> }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "sysexEnabled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sysexEnabled;
  }, ["self"]),
  "{ :self | <primitive: return _self.sysexEnabled;> }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "onstatechange",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onstatechange = _aBlock;
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\t<primitive: return _self.onstatechange = _aBlock;>\n\t}",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "portByName",
  ["self", "type", "manufacturer", "name"],
  sl.annotateFunction(function (_self, _type, _manufacturer, _name) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _type, _manufacturer, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _detect_2(
      _ports_2(_self, _type),
      sl.annotateFunction(function (_port) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _port";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_manufacturer_1(_port), _manufacturer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_name_1(_port), _name);
          }, []),
        );
      }, ["port"]),
    );
  }, ["self", "type", "manufacturer", "name"]),
  "{ :self :type :manufacturer :name |\n\t\tself.ports(type).detect { :port |\n\t\t\tport.manufacturer = manufacturer & {\n\t\t\t\tport.name = name\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "ports",
  ["self", "type"],
  sl.annotateFunction(function (_self, _type) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _type";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_type, "input"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ports_1(_inputs_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ports_1(_outputs_1(_self));
      }, []),
    );
  }, ["self", "type"]),
  "{ :self :type |\n\t\t(type = 'input').if {\n\t\t\tself.inputs.ports\n\t\t} {\n\t\t\tself.outputs.ports\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["inputs", "outputs", "sysexEnabled"];
  }, ["self"]),
  "{ :self |\n\t\t['inputs', 'outputs', 'sysexEnabled']\n\t}",
);

sl.addType(
  true,
  "MIDIConnectionEvent",
  "NavigatorMidi",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIConnectionEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "MIDIConnectionEvent",
);

sl.addMethodToExistingType(
  "MIDIConnectionEvent",
  "NavigatorMidi",
  "port",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.port;>\n\t}",
);

sl.addType(
  true,
  "MIDIInput",
  "NavigatorMidi",
  ["Object", "EventTarget", "MidiPort"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIInput",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "MIDIInput",
);

sl.copyTraitMethodsToType(
  "MidiPort",
  "MIDIInput",
);

sl.addMethodToExistingType(
  "MIDIInput",
  "NavigatorMidi",
  "onMidiMessage",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onmidimessage = _aBlock;
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\t<primitive: return _self.onmidimessage = _aBlock;>\n\t}",
);

sl.addType(
  true,
  "MIDIInputMap",
  "NavigatorMidi",
  ["Object", "MidiMap"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIInputMap",
);

sl.copyTraitMethodsToType(
  "MidiMap",
  "MIDIInputMap",
);

sl.addType(
  true,
  "MIDIMessageEvent",
  "NavigatorMidi",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIMessageEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "MIDIMessageEvent",
);

sl.addMethodToExistingType(
  "MIDIMessageEvent",
  "NavigatorMidi",
  "data",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.data;>\n\t}",
);

sl.addType(
  true,
  "MIDIOutputMap",
  "NavigatorMidi",
  ["Object", "MidiMap"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIOutputMap",
);

sl.copyTraitMethodsToType(
  "MidiMap",
  "MIDIOutputMap",
);

sl.addType(
  true,
  "MIDIOutput",
  "NavigatorMidi",
  ["Object", "EventTarget", "MidiPort"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MIDIOutput",
);

sl.copyTraitMethodsToType(
  "EventTarget",
  "MIDIOutput",
);

sl.copyTraitMethodsToType(
  "MidiPort",
  "MIDIOutput",
);
