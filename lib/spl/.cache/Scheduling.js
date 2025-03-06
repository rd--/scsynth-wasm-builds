sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "valueAfterMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  sl.annotateFunction(function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setTimeout(_self_0, _delayInMilliseconds);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueAfterMilliseconds: not a number");
  }, ["self:/0", "delayInMilliseconds"]),
  "{ :self:/0 :delayInMilliseconds | <primitive: if(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setTimeout(_self_0, _delayInMilliseconds);\n\t\t}>\nerror(self,'Block>>valueAfterMilliseconds: not a number') }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "valueAfterMillisecondsWith",
  ["self:/1", "delayInMilliseconds", "anObject"],
  sl.annotateFunction(function (_self_1, _delayInMilliseconds, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_1, _delayInMilliseconds, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setTimeout(_self_1, _delayInMilliseconds, _anObject);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueAfterMillisecondsWith: not a number");
  }, ["self:/1", "delayInMilliseconds", "anObject"]),
  "{ :self:/1 :delayInMilliseconds :anObject | <primitive: if(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setTimeout(_self_1, _delayInMilliseconds, _anObject);\n\t\t}>\nerror(self,'Block>>valueAfterMillisecondsWith: not a number') }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "valueEveryMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  sl.annotateFunction(function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setInterval(_self_0, _delayInMilliseconds);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueEveryMilliseconds: not a number");
  }, ["self:/0", "delayInMilliseconds"]),
  "{ :self:/0 :delayInMilliseconds | <primitive: if(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setInterval(_self_0, _delayInMilliseconds);\n\t\t}>\nerror(self,'Block>>valueEveryMilliseconds: not a number') }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Scheduling",
  "cancel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    clearTimeout(_self);
    /* Statements */
    return null;
  }, ["self"]),
  "{ :self | <primitive: clearTimeout(_self);>\nnil }",
);
