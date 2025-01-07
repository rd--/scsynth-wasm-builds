sl.addMethod(
  "Block",
  "Scheduling",
  "valueAfterMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setTimeout(_self_0, _delayInMilliseconds);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueAfterMilliseconds: not a number");
  },
  "{ :self:/0 :delayInMilliseconds |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setTimeout(_self_0, _delayInMilliseconds);\n\t\t}\n\t\t>\n\t\tself.error('Block>>valueAfterMilliseconds: not a number')\n\t}",
);

sl.addMethod(
  "Block",
  "Scheduling",
  "valueAfterMillisecondsWith",
  ["self:/1", "delayInMilliseconds", "anObject"],
  function (_self_1, _delayInMilliseconds, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_1, _delayInMilliseconds, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setTimeout(_self_1, _delayInMilliseconds, _anObject);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueAfterMillisecondsWith: not a number");
  },
  "{ :self:/1 :delayInMilliseconds :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setTimeout(_self_1, _delayInMilliseconds, _anObject);\n\t\t}\n\t\t>\n\t\tself.error('Block>>valueAfterMillisecondsWith: not a number')\n\t}",
);

sl.addMethod(
  "Block",
  "Scheduling",
  "valueEveryMilliseconds",
  ["self:/0", "delayInMilliseconds"],
  function (_self_0, _delayInMilliseconds) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delayInMilliseconds";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_delayInMilliseconds)) {
      return setInterval(_self_0, _delayInMilliseconds);
    }
    /* Statements */
    return _error_2(_self, "Block>>valueEveryMilliseconds: not a number");
  },
  "{ :self:/0 :delayInMilliseconds |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_delayInMilliseconds)) {\n\t\t\treturn setInterval(_self_0, _delayInMilliseconds);\n\t\t}\n\t\t>\n\t\tself.error('Block>>valueEveryMilliseconds: not a number')\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Scheduling",
  "cancel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    clearTimeout(_self);
    /* Statements */
    return null;
  },
  "{ :self |\n\t\t<primitive: clearTimeout(_self);>\n\t\tnil\n\t}",
);
