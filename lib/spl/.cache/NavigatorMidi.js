sl.addTrait("MidiMap", "NavigatorMidi");

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "do",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.forEach(_aBlock);
  },
  "{ :self :aBlock | <primitive: return _self.forEach(_aBlock);>\n }",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "ports",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.values());
  },
  "{ :self | <primitive: return Array.from(_self.values());>\n }",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size", "ports"];
  },
  "{ :self | ['size', 'ports'] }",
);

sl.addMethodToExistingTrait(
  "MidiMap",
  "NavigatorMidi",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addTrait("MidiPort", "NavigatorMidi");

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "connection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.connection;
  },
  "{ :self | <primitive: return _self.connection;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  },
  "{ :self | <primitive: return _self.id;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "manufacturer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.manufacturer;
  },
  "{ :self | <primitive: return _self.manufacturer;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "state",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.state;
  },
  "{ :self | <primitive: return _self.state;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "version",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.version;
  },
  "{ :self | <primitive: return _self.version;>\n }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "asRecord",
  ["self"],
  function (_self) {
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
  },
  "{ :self | Record([['type', type(self)], ['id', id(self)], ['manufacturer', manufacturer(self)], ['name', name(self)], ['version', version(self)], ['state', state(self)], ['connection', connection(self)]]) }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_asRecord_1(_self), null, "	");
  },
  "{ :self | asJson(asRecord(self),nil, '\t') }",
);

sl.addMethodToExistingTrait(
  "MidiPort",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
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
  },
  "{ :self | ['type', 'id', 'manufacturer', 'name', 'version', 'state', 'connection'] }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.inputs;
  },
  "{ :self | <primitive: return _self.inputs;>\n }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "outputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.outputs;
  },
  "{ :self | <primitive: return _self.outputs;>\n }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "sysexEnabled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sysexEnabled;
  },
  "{ :self | <primitive: return _self.sysexEnabled;>\n }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "onstatechange",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onstatechange = _aBlock;
  },
  "{ :self :aBlock | <primitive: return _self.onstatechange = _aBlock;>\n }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "portByName",
  ["self", "type", "manufacturer", "name"],
  function (_self, _type, _manufacturer, _name) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _type, _manufacturer, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _detect_2(_ports_2(_self, _type), function (_port) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _port";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_manufacturer_1(_port), _manufacturer),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_name_1(_port), _name);
        },
      );
    });
  },
  "{ :self :type :manufacturer :name | detect(ports(self,type), { :port | &(=(manufacturer(port), manufacturer), { =(name(port), name) }) }) }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "ports",
  ["self", "type"],
  function (_self, _type) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _type";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_type, "input"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ports_1(_inputs_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ports_1(_outputs_1(_self));
    });
  },
  "{ :self :type | if((=(type, 'input')), { ports(inputs(self)) }, { ports(outputs(self)) }) }",
);

sl.addMethodToExistingType(
  "MIDIAccess",
  "NavigatorMidi",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["inputs", "outputs", "sysexEnabled"];
  },
  "{ :self | ['inputs', 'outputs', 'sysexEnabled'] }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  },
  "{ :self | <primitive: return _self.port;>\n }",
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
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.onmidimessage = _aBlock;
  },
  "{ :self :aBlock | <primitive: return _self.onmidimessage = _aBlock;>\n }",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.data;
  },
  "{ :self | <primitive: return _self.data;>\n }",
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
