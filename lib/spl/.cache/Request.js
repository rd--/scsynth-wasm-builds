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
  "Request",
  "Request",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  },
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Request(_self);
  },
  "{ :self |\n\t\t<primitive: return new Request(_self);>\n\t}",
);
