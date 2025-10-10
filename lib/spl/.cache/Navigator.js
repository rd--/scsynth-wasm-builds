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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.deviceMemory;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.deviceMemory;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "geolocation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.geolocation;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.geolocation;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "getBattery",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getBattery();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.getBattery();>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "gpu",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.gpu;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.gpu;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "hardwareConcurrency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hardwareConcurrency;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.hardwareConcurrency;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "language",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.language;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.language;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "maxTouchPoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.maxTouchPoints;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.maxTouchPoints;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requestMIDIAccess();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.requestMIDIAccess();>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "requestMidiAccess",
  ["self", "midiOptions"],
  sl.annotateFunction(function (_self, _midiOptions) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _midiOptions";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requestMIDIAccess(_midiOptions);
  }, ["self", "midiOptions"]),
  "{ :self :midiOptions |\n\t\t<primitive: return _self.requestMIDIAccess(_midiOptions);>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "sendBeacon",
  ["self", "data"],
  sl.annotateFunction(function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sendBeacon(_self, _data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\t<primitive: return _self.sendBeacon(_self, _data);>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "storage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.storage;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.storage;>\n\t}",
);

sl.addMethodToExistingType(
  "Navigator",
  "Navigator",
  "userAgent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.userAgent;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.userAgent;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Navigator",
  "navigator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.navigator;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.window.navigator;>\n\t}",
);
