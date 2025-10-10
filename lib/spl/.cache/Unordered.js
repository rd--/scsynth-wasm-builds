sl.addTrait("Unordered", "Unordered");

sl.addMethodToExistingTrait(
  "Unordered",
  "Unordered",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _errorNotIndexed_1(_self);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.errorNotIndexed\n\t}",
);

sl.addMethodToExistingTrait(
  "Unordered",
  "Unordered",
  "atPut",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _errorNotIndexed_1(_self);
  }, ["self", "index", "value"]),
  "{ :self :index :value |\n\t\tself.errorNotIndexed\n\t}",
);
