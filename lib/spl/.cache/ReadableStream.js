sl.addType(
  true,
  "ReadableStream",
  "ReadableStream",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ReadableStream",
);

sl.addMethodToExistingType(
  "ReadableStream",
  "ReadableStream",
  "locked",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.locked;
  }, ["self"]),
  "{ :self | <primitive: return _self.locked;>\n }",
);
