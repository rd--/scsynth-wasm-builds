sl.addType(
  true,
  "Request",
  "Request",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Request",
);

sl.addMethod(
  "String",
  "Request",
  "Request",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Request(_self);
  },
  "{ :self |\n\t\t<primitive: return new Request(_self);>\n\t}",
);
