sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "scheduleAfter",
  ["self/0", "delay"],
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
    return _error_2(_self_0, "Block>>scheduleAfter: not a number");
  }, ["self/0", "delay"]),
  "{ :self/0 :delay |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setTimeout(_self_0, _delay * 1000);\n\t\t}\n\t\t>\n\t\tself/0.error('Block>>scheduleAfter: not a number')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "scheduleAfterWith",
  ["self/1", "delay", "anObject"],
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
    return _error_2(_self_1, "Block>>scheduleAfterWith: not a number");
  }, ["self/1", "delay", "anObject"]),
  "{ :self/1 :delay :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setTimeout(_self_1, _delay * 1000, _anObject);\n\t\t}\n\t\t>\n\t\tself/1.error('Block>>scheduleAfterWith: not a number')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "scheduleAt",
  ["self", "time"],
  sl.annotateFunction(function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      throw new Error(errorMessage);
    } /* Statements */
    let _t0 = _absoluteTime_1(_system);
    return _scheduleAfter_2(_self, _hyphenMinus_2(_time, _t0));
  }, ["self", "time"]),
  "{ :self :time |\n\t\tlet t0 = system.absoluteTime;\n\t\tself.scheduleAfter(time - t0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "scheduleAtWith",
  ["self", "time", "anObject"],
  sl.annotateFunction(function (_self, _time, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _t0 = _absoluteTime_1(_system);
    return _scheduleAfterWith_3(_self, _hyphenMinus_2(_time, _t0), _anObject);
  }, ["self", "time", "anObject"]),
  "{ :self :time :anObject |\n\t\tlet t0 = system.absoluteTime;\n\t\tself.scheduleAfterWith(time - t0, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Scheduling",
  "scheduleEvery",
  ["self/0", "delay"],
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
    return _error_2(_self_0, "Block>>scheduleEvery: not a number");
  }, ["self/0", "delay"]),
  "{ :self/0 :delay |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delay)) {\n\t\t\treturn setInterval(_self_0, _delay * 1000);\n\t\t}\n\t\t>\n\t\tself/0.error('Block>>scheduleEvery: not a number')\n\t}",
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

sl.addType(
  true,
  "Timeout",
  "Scheduling",
  ["@Object"],
  [],
);

sl.copyTraitMethodsToType(
  "@Object",
  "Timeout",
);

sl.addMethodToExistingType(
  "Timeout",
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
