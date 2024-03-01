sl.addType(
  true,
  "LocalControl",
  "LocalControl",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "LocalControl",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
  "defaultValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.defaultValue;
  },
  "{ :self |\n\t\t<primitive: return _self.defaultValue>\n\t}",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
  "index",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.index;
  },
  "{ :self |\n\t\t<primitive: return _self.index>\n\t}",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
  "isTriggered",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.isTriggered;
  },
  "{ :self |\n\t\t<primitive: return _self.isTriggered>\n\t}",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
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
  "{ :self |\n\t\t<primitive: return _self.name>\n\t}",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
  "operatingRate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.operatingRate;
  },
  "{ :self |\n\t\t<primitive: return _self.operatingRate>\n\t}",
);

sl.addMethod(
  "LocalControl",
  "LocalControl",
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
    return ["name", "index", "defaultValue", "operatingRate", "isTriggered"];
  },
  "{ :self |\n\t\t['name', 'index', 'defaultValue', 'operatingRate', 'isTriggered']\n\t}",
);
