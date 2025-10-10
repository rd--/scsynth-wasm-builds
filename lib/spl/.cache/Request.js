sl.addType(
  true,
  "Request",
  "Request",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Request",
);

sl.addMethodToExistingType(
  "Request",
  "Request",
  "url",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Request",
  "Request",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Request(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Request(_self);>\n\t}",
);
