/* {- Requires: Blob -} */

sl.addType(
  true,
  "File",
  "File",
  ["Object", "Blob"],
  [],
);

sl.copyTraitToType(
  "Object",
  "File",
);

sl.copyTraitToType(
  "Blob",
  "File",
);

sl.addMethod(
  "File",
  "File",
  "lastModified",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.lastModified;
  },
  "{ :self |\n\t\t<primitive: return _self.lastModified;> {- Read only -}\n\t}",
);

sl.addMethod(
  "File",
  "File",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;> {- Read only -}\n\t}",
);
