sl.addTrait("View", "View");

sl.addTraitMethod(
  "View",
  "View",
  "frame",
  ["self", "aFrame"],
  function (_self, _aFrame) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aFrame"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
  },
  "{ :self :aFrame |\n\t}",
);

sl.addTraitMethod(
  "View",
  "View",
  "frameMenuItems",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
);

sl.addTraitMethod(
  "View",
  "View",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _replaceStringAll_3(_title_1(_self), " ", "");
  },
  "{ :self |\n\t\tself.title.replaceStringAll(' ', '')\n\t}",
);

sl.addTraitMethod(
  "View",
  "View",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@View>>outerElement");
  },
  "{ :self |\n\t\tself.typeResponsibility('@View>>outerElement')\n\t}",
);

sl.addTraitMethod(
  "View",
  "View",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeOf_1(_self);
  },
  "{ :self |\n\t\tself.typeOf\n\t}",
);
