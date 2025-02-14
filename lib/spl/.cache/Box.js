sl.addType(
  false,
  "Box",
  "Box",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Box",
);

sl.addMethod(
  "Box",
  "Box",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Box",
  "Box",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBox_0(), _self);
  },
  "{ :self |\n\t\tnewBox().initializeSlots(self)\n\t}",
);
