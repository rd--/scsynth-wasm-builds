/*  Requires: SmallKansas TextEditor  */

sl.addType(
  false,
  "Workspace",
  "Workspace",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Workspace",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "Workspace",
);

sl.addMethodToExistingType(
  "Workspace",
  "Workspace",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrame_3(
      _smallKansas,
      _TextEditor_4(_smallKansas, "Workspace", "text/plain", ""),
      _event,
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrame(\n\t\t\tsmallKansas.TextEditor('Workspace', 'text/plain', ''),\n\t\t\tevent\n\t\t)\n\t}",
);
