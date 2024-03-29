sl.addType(
  true,
  "Navigator",
  "Navigator",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Navigator",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "hardwareConcurrency",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.hardwareConcurrency;
  },
  "{ :self |\n\t\t<primitive: return _self.hardwareConcurrency;>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "maxTouchPoints",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.maxTouchPoints;
  },
  "{ :self |\n\t\t<primitive: return _self.maxTouchPoints;>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.requestMIDIAccess();
  },
  "{ :self |\n\t\t<primitive: return _self.requestMIDIAccess();>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self", "midiOptions"],
  function (_self, _midiOptions) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _midiOptions";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.requestMIDIAccess(_midiOptions);
  },
  "{ :self :midiOptions |\n\t\t<primitive: return _self.requestMIDIAccess(_midiOptions);>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "sendBeacon",
  ["self", "data"],
  function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.sendBeacon(_self, _data);
  },
  "{ :self :data |\n\t\t<primitive: return _self.sendBeacon(_self, _data);>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "storage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.storage;
  },
  "{ :self |\n\t\t<primitive: return _self.storage;>\n\t}",
);

sl.addMethod(
  "Navigator",
  "Navigator",
  "userAgent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.userAgent;
  },
  "{ :self |\n\t\t<primitive: return _self.userAgent;>\n\t}",
);
