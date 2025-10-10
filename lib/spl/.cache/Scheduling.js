sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "basicValueAfter",
  ["self:/0", "delay"],
  sl.annotateFunction(function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delay)) {
      return setTimeout(_self_0, _delay * 1000);
    }
    /* Statements */
    return _error_2(_self_0, "Block>>basicValueAfter: not a number");
  }, ["self:/0", "delay"]),
  "{ :self:/0 :delay |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setTimeout(_self_0, _delay * 1000);\n\t\t}\n\t\t>\n\t\tself:/0.error('Block>>basicValueAfter: not a number')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "basicValueAfterWith",
  ["self:/1", "delay", "anObject"],
  sl.annotateFunction(function (_self_1, _delay, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _delay, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delay)) {
      return setTimeout(_self_1, _delay * 1000, _anObject);
    }
    /* Statements */
    return _error_2(_self_1, "Block>>basicValueAfterWith: not a number");
  }, ["self:/1", "delay", "anObject"]),
  "{ :self:/1 :delay :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setTimeout(_self_1, _delay * 1000, _anObject);\n\t\t}\n\t\t>\n\t\tself:/1.error('Block>>basicValueAfterWith: not a number')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "basicValueEvery",
  ["self:/0", "delay"],
  sl.annotateFunction(function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delay)) {
      return setInterval(_self_0, _delay * 1000);
    }
    /* Statements */
    return _error_2(_self_0, "Block>>basicValueEvery: not a number");
  }, ["self:/0", "delay"]),
  "{ :self:/0 :delay |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setInterval(_self_0, _delay * 1000);\n\t\t}\n\t\t>\n\t\tself:/0.error('Block>>basicValueEvery: not a number')\n\t}",
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
  "{ :self |\n\t\t<primitive: clearTimeout(_self);>\n\t\tnil\n\t}",
);
