sl.addTrait("Json", "Json");

sl.addMethodToExistingTrait(
  "Json",
  "Json",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Json",
  "Json",
  "asJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return JSON.stringify(_self);
  },
  "{ :self | <primitive: return JSON.stringify(_self);>\n }",
);

sl.addMethodToExistingTrait(
  "Json",
  "Json",
  "asJson",
  ["self", "replacer", "space"],
  function (_self, _replacer, _space) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _replacer, _space";
      throw new Error(errorMessage);
    } /* Primitive */
    return JSON.stringify(_self, _replacer, _space);
  },
  "{ :self :replacer :space | <primitive: return JSON.stringify(_self, _replacer, _space);>\n }",
);
