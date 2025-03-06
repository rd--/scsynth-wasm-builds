sl.addType(
  true,
  "LocalControl",
  "LocalControl",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "LocalControl",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "defaultValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.defaultValue;
  }, ["self"]),
  "{ :self | <primitive: return _self.defaultValue>\n }",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "index",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.index;
  }, ["self"]),
  "{ :self | <primitive: return _self.index>\n }",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "isTriggered",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isTriggered;
  }, ["self"]),
  "{ :self | <primitive: return _self.isTriggered>\n }",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self | <primitive: return _self.name>\n }",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "operatingRate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.operatingRate;
  }, ["self"]),
  "{ :self | <primitive: return _self.operatingRate>\n }",
);

sl.addMethodToExistingType(
  "LocalControl",
  "LocalControl",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "index", "defaultValue", "operatingRate", "isTriggered"];
  }, ["self"]),
  "{ :self | ['name', 'index', 'defaultValue', 'operatingRate', 'isTriggered'] }",
);
