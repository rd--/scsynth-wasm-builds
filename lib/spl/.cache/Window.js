sl.addType(
  true,
  "Window",
  "Window",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Window",
);

sl.addMethod(
  "Window",
  "Window",
  "alert",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.alert(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.alert(_aString);>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "confirm",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.confirm(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.confirm(_aString);>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "localStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.localStorage;
  },
  "{ :self |\n\t\t<primitive: return _self.localStorage;>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "location",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.location;
  },
  "{ :self |\n\t\t<primitive: return _self.location;>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "navigator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.navigator;
  },
  "{ :self |\n\t\t<primitive: return _self.navigator;>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "prompt",
  ["self", "message", "defaultValue"],
  function (_self, _message, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _message, _defaultValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.prompt(_message, _defaultValue);
  },
  "{ :self :message :defaultValue |\n\t\t<primitive: return _self.prompt(_message, _defaultValue);>\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["localStorage", "location", "name", "navigator", "sessionStorage"];
  },
  "{ :self |\n\t\t['localStorage', 'location', 'name', 'navigator', 'sessionStorage']\n\t}",
);

sl.addMethod(
  "Window",
  "Window",
  "sessionStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.sessionStorage;
  },
  "{ :self |\n\t\t<primitive: return _self.sessionStorage;>\n\t}",
);
