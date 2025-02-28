sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathBasename",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathBasename(_self);
  },
  "{ :self | <primitive: return sc.pathBasename(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathDirectory(_self);
  },
  "{ :self | <primitive: return sc.pathDirectory(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathExtension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathExtension(_self);
  },
  "{ :self | <primitive: return sc.pathExtension(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathIsAbsolute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathIsAbsolute(_self);
  },
  "{ :self | <primitive: return sc.pathIsAbsolute(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathNormalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathNormalize(_self);
  },
  "{ :self | <primitive: return sc.pathNormalize(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FilePath",
  "pathJoin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathJoin(_self);
  },
  "{ :self | <primitive: return sc.pathJoin(_self);>\n }",
);
