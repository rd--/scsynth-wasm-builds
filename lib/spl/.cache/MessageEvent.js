sl.addType(
  true,
  "MessageEvent",
  "MessageEvent",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MessageEvent",
);

sl.copyTraitMethodsToType(
  "Event",
  "MessageEvent",
);

sl.addMethodToExistingType(
  "MessageEvent",
  "MessageEvent",
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

sl.addMethodToExistingType(
  "MessageEvent",
  "MessageEvent",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  },
  "{ :self | <primitive: return _self.origin;>\n }",
);

sl.addMethodToExistingType(
  "MessageEvent",
  "MessageEvent",
  "lastEventId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.lastEventId;
  },
  "{ :self | <primitive: return _self.lastEventId;>\n }",
);

sl.addMethodToExistingType(
  "MessageEvent",
  "MessageEvent",
  "source",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.source;
  },
  "{ :self | <primitive: return _self.source;>\n }",
);

sl.addMethodToExistingType(
  "MessageEvent",
  "MessageEvent",
  "ports",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ports;
  },
  "{ :self | <primitive: return _self.ports;>\n }",
);
