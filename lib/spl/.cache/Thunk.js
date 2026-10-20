sl.addType(
  false,
  "Thunk",
  "Thunk",
  ["Object"],
  ["nullaryBlock", "result"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Thunk",
);

sl.defineTypeSlotMethods(
  "Thunk",
  "Thunk",
  ["nullaryBlock", "result"],
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "apply",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _force_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.force\n\t}",
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "nullaryApply",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _force_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.force\n\t}",
);

sl.addMethodToExistingType(
  "Thunk",
  "Thunk",
  "force",
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
        } /* Statements */
        let _answer = _resultMutateInPlace_2(
          _self,
          _nullaryApply_1(_nullaryBlock_1(_self)),
        );
        _nullaryBlockMutateInPlace_2(_self, null);
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.result.ifNil {\n\t\t\tlet answer = self.result := self.nullaryBlock.nullaryApply;\n\t\t\tself.nullaryBlock := nil;\n\t\t\tanswer\n\t\t}\n\t}",
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
  ["self/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _equalsSign_2(_argumentCount_1(_self_0), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self_0, "thunk");
      }, []),
    );
    return _uncheckedThunk_1(_self_0);
  }, ["self/0"]),
  "{ :self/0 |\n\t\t(self/0.argumentCount = 0).ifFalse {\n\t\t\tself/0.error('thunk')\n\t\t};\n\t\tuncheckedThunk(self/0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Thunk",
  "uncheckedThunk",
  ["self/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newThunk_0(), _self_0, null);
  }, ["self/0"]),
  "{ :self/0 |\n\t\tnewThunk().initializeSlots(self/0, nil)\n\t}",
);
