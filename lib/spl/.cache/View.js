sl.addTrait("View", "View");

sl.addMethodToExistingTrait(
  "View",
  "View",
  "frame",
  ["self", "aFrame"],
  sl.annotateFunction(function (_self, _aFrame) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFrame";
      throw new Error(errorMessage);
    }
  }, ["self", "aFrame"]),
  "{ :self :aFrame |\n\t}",
);

sl.addMethodToExistingTrait(
  "View",
  "View",
  "frameMenuItems",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self |\n\t\t[]\n\t}",
);

sl.addMethodToExistingTrait(
  "View",
  "View",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceStringAll_3(_title_1(_self), " ", "");
  }, ["self"]),
  "{ :self |\n\t\tself.title.replaceStringAll(' ', '')\n\t}",
);

sl.addMethodToExistingTrait(
  "View",
  "View",
  "outerElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@View>>outerElement");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@View>>outerElement')\n\t}",
);

sl.addMethodToExistingTrait(
  "View",
  "View",
  "title",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeOf_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.typeOf\n\t}",
);
