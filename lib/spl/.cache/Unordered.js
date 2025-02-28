sl.addTrait("Unordered", "Unordered");

sl.addMethodToExistingTrait(
  "Unordered",
  "Unordered",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _errorNotIndexed_1(_self);
  },
  "{ :self :index | errorNotIndexed(self) }",
);

sl.addMethodToExistingTrait(
  "Unordered",
  "Unordered",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _errorNotIndexed_1(_self);
  },
  "{ :self :index :value | errorNotIndexed(self) }",
);
