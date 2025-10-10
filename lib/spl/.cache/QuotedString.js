/*  Requires: String  */

sl.addType(
  false,
  "BacktickQuotedString",
  "QuotedString",
  ["Object", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BacktickQuotedString",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BacktickQuotedString",
);

sl.addMethodToExistingType(
  "BacktickQuotedString",
  "QuotedString",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethodToExistingType(
  "BacktickQuotedString",
  "QuotedString",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("`%`", [_contents_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t'`%`'.format([self.contents])\n\t}",
);

sl.addMethodToExistingType(
  "BacktickQuotedString",
  "QuotedString",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "DoubleQuotedString",
  "QuotedString",
  ["Object", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DoubleQuotedString",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "DoubleQuotedString",
);

sl.addMethodToExistingType(
  "DoubleQuotedString",
  "QuotedString",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethodToExistingType(
  "DoubleQuotedString",
  "QuotedString",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2('"%"', [_contents_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t'\"%\"'.format([self.contents])\n\t}",
);

sl.addMethodToExistingType(
  "DoubleQuotedString",
  "QuotedString",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "QuotedString",
  "BacktickQuotedString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBacktickQuotedString_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewBacktickQuotedString().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "QuotedString",
  "DoubleQuotedString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDoubleQuotedString_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewDoubleQuotedString().initializeSlots(self)\n\t}",
);
