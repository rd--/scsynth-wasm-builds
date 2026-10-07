sl.addTrait("Copy", "Copy");

sl.addMethodToExistingTrait(
  "Copy",
  "Copy",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _shallowCopy_1(_self);
    _postCopy_1(_answer);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.shallowCopy;\n\t\tanswer.postCopy;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Copy",
  "Copy",
  "deepCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveDeepCopy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveDeepCopy\n\t}",
);

sl.addMethodToExistingTrait(
  "Copy",
  "Copy",
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
  "{ :self |\n\t\tnil\n\t}",
);

sl.addMethodToExistingTrait(
  "Copy",
  "Copy",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveShallowCopy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveShallowCopy\n\t}",
);
