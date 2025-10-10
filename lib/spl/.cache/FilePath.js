sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathBasename",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathBasename(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathBasename(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathDirectory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathDirectory(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathDirectory(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathExtension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathExtension(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathExtension(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathIsAbsolute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathIsAbsolute(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathIsAbsolute(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathNormalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathNormalize(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathNormalize(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FilePath",
  "pathJoin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathJoin(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathJoin(_self);>\n\t}",
);
