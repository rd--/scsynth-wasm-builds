sl.addType(
  true,
  "ReadableStream",
  "ReadableStream",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ReadableStream",
);

sl.addMethod(
  "ReadableStream",
  "ReadableStream",
  "locked",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.locked;
  },
  "{ :self |\n\t\t<primitive: return _self.locked;>\n\t}",
);
