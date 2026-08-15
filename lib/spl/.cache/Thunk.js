sl.addType(
  false,
  "Thunk",
  "Thunk",
  ["Object"],
  ["block", "result"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Thunk",
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "blockValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(
      _result_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _result_2(_self, _blockValue_1(_block_1(_self)));
        /* Statements */
        _block_2(_self, null);
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.result.ifNil {\n\t\t\tlet answer = self.result := self.block.blockValue;\n\t\t\tself.block := nil;\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(
      _result_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _result_2(_self, _blockValue_1(_block_1(_self)));
        /* Statements */
        _block_2(_self, null);
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.result.ifNil {\n\t\t\tlet answer = self.result := self.block.blockValue;\n\t\t\tself.block := nil;\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "isEvaluated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNotNil_1(_result_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.result.isNotNil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Thunk",
  "thunk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newThunk_0(), _self, null);
  }, ["self"]),
  "{ :self |\n\t\tnewThunk().initializeSlots(self, nil)\n\t}",
);
