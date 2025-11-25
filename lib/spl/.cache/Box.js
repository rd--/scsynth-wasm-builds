sl.addType(
  false,
  "Box",
  "Box",
  ["Object", "Storeable", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Box",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Box",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Box",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Box",
  "Box",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBox_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewBox().initializeSlots(self)\n\t}",
);
