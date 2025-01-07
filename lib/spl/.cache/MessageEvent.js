sl.addType(
  true,
  "MessageEvent",
  "MessageEvent",
  ["Object", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MessageEvent",
);

sl.copyTraitToType(
  "Event",
  "MessageEvent",
);

sl.addMethod(
  "MessageEvent",
  "MessageEvent",
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

sl.addMethod(
  "MessageEvent",
  "MessageEvent",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  },
  "{ :self |\n\t\t<primitive: return _self.origin;>\n\t}",
);

sl.addMethod(
  "MessageEvent",
  "MessageEvent",
  "lastEventId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.lastEventId;
  },
  "{ :self |\n\t\t<primitive: return _self.lastEventId;>\n\t}",
);

sl.addMethod(
  "MessageEvent",
  "MessageEvent",
  "source",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.source;
  },
  "{ :self |\n\t\t<primitive: return _self.source;>\n\t}",
);

sl.addMethod(
  "MessageEvent",
  "MessageEvent",
  "ports",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ports;
  },
  "{ :self |\n\t\t<primitive: return _self.ports;>\n\t}",
);
