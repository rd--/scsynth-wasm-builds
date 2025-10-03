sl.addTrait("Copyable", "Copyable");

sl.addMethodToExistingTrait(
  "Copyable",
  "Copyable",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _shallowCopy_1(_self);
    /* Statements */
    _postCopy_1(_answer);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = shallowCopy(self); postCopy(answer); answer }",
);

sl.addMethodToExistingTrait(
  "Copyable",
  "Copyable",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["self"]),
  "{ :self | nil }",
);

sl.addMethodToExistingTrait(
  "Copyable",
  "Copyable",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveCopy_1(_self);
  }, ["self"]),
  "{ :self | primitiveCopy(self) }",
);
