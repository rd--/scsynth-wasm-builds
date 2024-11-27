sl.addMethod(
  "String",
  "FilePath",
  "pathDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.pathDirectory(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.pathDirectory(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FilePath",
  "pathExtension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.pathExtension(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.pathExtension(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FilePath",
  "pathIsAbsolute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.pathIsAbsolute(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.pathIsAbsolute(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FilePath",
  "pathNormalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.pathNormalize(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.pathNormalize(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "FilePath",
  "pathJoin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.pathJoin(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.pathJoin(_self);>\n\t}",
);
