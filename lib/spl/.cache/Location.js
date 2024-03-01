/* {- Requires: Url -} */

sl.addType(
  true,
  "Location",
  "Location",
  ["Object", "Url"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Location",
);

sl.copyTraitToType(
  "Url",
  "Location",
);

sl.addMethod(
  "Location",
  "Location",
  "reload",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.reload();
  },
  "{ :self |\n\t\t<primitive: return _self.reload();>\n\t}",
);

sl.addMethod(
  "Location",
  "Location",
  "replace",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.reload(_url);
  },
  "{ :self :url |\n\t\t<primitive: return _self.reload(_url);>\n\t}",
);

sl.addMethod(
  "Location",
  "Location",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["protocol", "hostName", "port", "pathName", "search", "hash"];
  },
  "{ :self |\n\t\t['protocol', 'hostName', 'port', 'pathName', 'search', 'hash']\n\t}",
);
