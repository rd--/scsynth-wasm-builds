sl.addTrait("Json", "Json");

sl.addTraitMethod(
  "Json",
  "Json",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Json",
  "Json",
  "asJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return JSON.stringify(_self);
  },
  "{ :self |\n\t\t<primitive: return JSON.stringify(_self);>\n\t}",
);

sl.addTraitMethod(
  "Json",
  "Json",
  "asJson",
  ["self", "replacer", "space"],
  function (_self, _replacer, _space) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _replacer, _space"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return JSON.stringify(_self, _replacer, _space);
  },
  "{ :self :replacer :space |\n\t\t<primitive: return JSON.stringify(_self, _replacer, _space);>\n\t}",
);
