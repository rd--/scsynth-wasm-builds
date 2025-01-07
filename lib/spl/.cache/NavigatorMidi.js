sl.addTrait("MidiMap", "NavigatorMidi");

sl.addTraitMethod(
  "MidiMap",
  "NavigatorMidi",
  "do",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.forEach(_aBlock);
  },
  "{ :self :aBlock |\n\t\t<primitive: return _self.forEach(_aBlock);>\n\t}",
);

sl.addTraitMethod(
  "MidiMap",
  "NavigatorMidi",
  "ports",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.values());
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.values());>\n\t}",
);

sl.addTraitMethod(
  "MidiMap",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["size", "ports"];
  },
  "{ :self |\n\t\t['size', 'ports']\n\t}",
);

sl.addTraitMethod(
  "MidiMap",
  "NavigatorMidi",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addTrait("MidiPort", "NavigatorMidi");

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "connection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.connection;
  },
  "{ :self | <primitive: return _self.connection;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  },
  "{ :self | <primitive: return _self.id;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "manufacturer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.manufacturer;
  },
  "{ :self | <primitive: return _self.manufacturer;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "state",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.state;
  },
  "{ :self | <primitive: return _self.state;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "version",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.version;
  },
  "{ :self | <primitive: return _self.version;> }",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return Object.fromEntries([
      ["type", _type_1(_self)],
      ["id", _id_1(_self)],
      ["manufacturer", _manufacturer_1(_self)],
      ["name", _name_1(_self)],
      ["version", _version_1(_self)],
      ["state", _state_1(_self)],
      ["connection", _connection_1(_self)],
    ]);
  },
  "{ :self |\n\t\t(\n\t\t\ttype: self.type,\n\t\t\tid: self.id,\n\t\t\tmanufacturer: self.manufacturer,\n\t\t\tname: self.name,\n\t\t\tversion: self.version,\n\t\t\tstate: self.state,\n\t\t\tconnection: self.connection\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_asRecord_1(_self), null, "	");
  },
  "{ :self |\n\t\tself.asRecord.asJson(nil, '\t')\n\t}",
);

sl.addTraitMethod(
  "MidiPort",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
  },
  "{ :self |\n\t\t['type', 'id', 'manufacturer', 'name', 'version', 'state', 'connection']\n\t}",
);

sl.addType(
  true,
  "MIDIAccess",
  "NavigatorMidi",
  ["Object", "EventTarget"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MIDIAccess",
);

sl.copyTraitToType(
  "EventTarget",
  "MIDIAccess",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "inputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.inputs;
  },
  "{ :self | <primitive: return _self.inputs;> }",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "outputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outputs;
  },
  "{ :self | <primitive: return _self.outputs;> }",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "sysexEnabled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sysexEnabled;
  },
  "{ :self | <primitive: return _self.sysexEnabled;> }",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "onstatechange",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onstatechange = _aBlock;
  },
  "{ :self :aBlock |\n\t\t<primitive: return _self.onstatechange = _aBlock;>\n\t}",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "portByName",
  ["self", "type", "manufacturer", "name"],
  function (_self, _type, _manufacturer, _name) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _type, _manufacturer, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detect_2(_ports_2(_self, _type), function (_port) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _port";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_manufacturer_1(_port), _manufacturer),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_name_1(_port), _name);
        },
      );
    });
  },
  "{ :self :type :manufacturer :name |\n\t\tself.ports(type).detect { :port |\n\t\t\tport.manufacturer = manufacturer & {\n\t\t\t\tport.name = name\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "ports",
  ["self", "type"],
  function (_self, _type) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _type";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_type, "input"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ports_1(_inputs_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ports_1(_outputs_1(_self));
    });
  },
  "{ :self :type |\n\t\t(type = 'input').if {\n\t\t\tself.inputs.ports\n\t\t} {\n\t\t\tself.outputs.ports\n\t\t}\n\t}",
);

sl.addMethod(
  "MIDIAccess",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["inputs", "outputs", "sysexEnabled"];
  },
  "{ :self |\n\t\t['inputs', 'outputs', 'sysexEnabled']\n\t}",
);

sl.addType(
  true,
  "MIDIConnectionEvent",
  "NavigatorMidi",
  ["Object", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MIDIConnectionEvent",
);

sl.copyTraitToType(
  "Event",
  "MIDIConnectionEvent",
);

sl.addMethod(
  "MIDIConnectionEvent",
  "NavigatorMidi",
  "port",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  },
  "{ :self |\n\t\t<primitive: return _self.port;>\n\t}",
);

sl.addType(
  true,
  "MIDIInput",
  "NavigatorMidi",
  ["Object", "EventTarget", "MidiPort"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MIDIInput",
);

sl.copyTraitToType(
  "EventTarget",
  "MIDIInput",
);

sl.copyTraitToType(
  "MidiPort",
  "MIDIInput",
);

sl.addMethod(
  "MIDIInput",
  "NavigatorMidi",
  "onMidiMessage",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onmidimessage = _aBlock;
  },
  "{ :self :aBlock |\n\t\t<primitive: return _self.onmidimessage = _aBlock;>\n\t}",
);

sl.addType(
  true,
  "MIDIInputMap",
  "NavigatorMidi",
  ["Object", "MidiMap"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MIDIInputMap",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "MIDIMessageEvent",
);

sl.copyTraitToType(
  "Event",
  "MIDIMessageEvent",
);

sl.addMethod(
  "MIDIMessageEvent",
  "NavigatorMidi",
  "data",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self |\n\t\t<primitive: return _self.data;>\n\t}",
);

sl.addType(
  true,
  "MIDIOutputMap",
  "NavigatorMidi",
  ["Object", "MidiMap"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MIDIOutputMap",
);

sl.copyTraitToType(
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

sl.copyTraitToType(
  "Object",
  "MIDIOutput",
);

sl.copyTraitToType(
  "EventTarget",
  "MIDIOutput",
);

sl.copyTraitToType(
  "MidiPort",
  "MIDIOutput",
);
