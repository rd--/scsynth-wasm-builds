/*  Requires: Url  */

sl.addType(
  true,
  "Location",
  "Location",
  ["Object", "Url"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Location",
);

sl.copyTraitMethodsToType(
  "Url",
  "Location",
);

sl.addMethodToExistingType(
  "Location",
  "Location",
  "reload",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.reload();
  },
  "{ :self | <primitive: return _self.reload();>\n }",
);

sl.addMethodToExistingType(
  "Location",
  "Location",
  "replace",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.reload(_url);
  },
  "{ :self :url | <primitive: return _self.reload(_url);>\n }",
);

sl.addMethodToExistingType(
  "Location",
  "Location",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["protocol", "hostName", "port", "pathName", "search", "hash"];
  },
  "{ :self | ['protocol', 'hostName', 'port', 'pathName', 'search', 'hash'] }",
);
