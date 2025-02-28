sl.addType(
  true,
  "Navigator",
  "Navigator",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Navigator",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "deviceMemory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deviceMemory;
  },
  "{ :self | <primitive: return _self.deviceMemory;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "geolocation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.geolocation;
  },
  "{ :self | <primitive: return _self.geolocation;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "getBattery",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getBattery();
  },
  "{ :self | <primitive: return _self.getBattery();>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "gpu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.gpu;
  },
  "{ :self | <primitive: return _self.gpu;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "hardwareConcurrency",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hardwareConcurrency;
  },
  "{ :self | <primitive: return _self.hardwareConcurrency;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "language",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.language;
  },
  "{ :self | <primitive: return _self.language;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "maxTouchPoints",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.maxTouchPoints;
  },
  "{ :self | <primitive: return _self.maxTouchPoints;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requestMIDIAccess();
  },
  "{ :self | <primitive: return _self.requestMIDIAccess();>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self", "midiOptions"],
  function (_self, _midiOptions) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _midiOptions";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requestMIDIAccess(_midiOptions);
  },
  "{ :self :midiOptions | <primitive: return _self.requestMIDIAccess(_midiOptions);>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "sendBeacon",
  ["self", "data"],
  function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sendBeacon(_self, _data);
  },
  "{ :self :data | <primitive: return _self.sendBeacon(_self, _data);>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "storage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.storage;
  },
  "{ :self | <primitive: return _self.storage;>\n }",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "userAgent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.userAgent;
  },
  "{ :self | <primitive: return _self.userAgent;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Navigator",
  "navigator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.navigator;
  },
  "{ :self | <primitive: return _self.window.navigator;>\n }",
);
