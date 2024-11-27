/*  Requires: String  */

sl.addType(
  false,
  "BacktickQuotedString",
  "QuotedString",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "BacktickQuotedString",
);

sl.addMethod(
  "BacktickQuotedString",
  "QuotedString",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "DoubleQuotedString",
  "QuotedString",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "DoubleQuotedString",
);

sl.addMethod(
  "DoubleQuotedString",
  "QuotedString",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "String",
  "QuotedString",
  "BacktickQuotedString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newBacktickQuotedString_0(), _self);
  },
  "{ :self |\n\t\tnewBacktickQuotedString().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "String",
  "QuotedString",
  "DoubleQuotedString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newDoubleQuotedString_0(), _self);
  },
  "{ :self |\n\t\tnewDoubleQuotedString().initializeSlots(self)\n\t}",
);
