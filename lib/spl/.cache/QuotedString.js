/*  Requires: String  */

sl.addType(
  false,
  "BacktickQuotedString",
  "QuotedString",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | contents(self) }",
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
  "{ :self | format('`%`',[contents(self)]) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addType(
  false,
  "DoubleQuotedString",
  "QuotedString",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | contents(self) }",
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
  "{ :self | format('\"%\"',[contents(self)]) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | initializeSlots(newBacktickQuotedString(),self) }",
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
  "{ :self | initializeSlots(newDoubleQuotedString(),self) }",
);
