sl.addType(
  true,
  "Window",
  "Window",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Window",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "alert",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.alert(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.alert(_aString);>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "caches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.caches;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.caches;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "confirm",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.confirm(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.confirm(_aString);>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "document",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.document;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.document;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "localStorage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localStorage;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.localStorage;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "location",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.location;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.location;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
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
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "navigator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.navigator;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.navigator;>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "prompt",
  ["self", "message", "defaultValue"],
  sl.annotateFunction(function (_self, _message, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _message, _defaultValue";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.prompt(_message, _defaultValue);
  }, ["self", "message", "defaultValue"]),
  "{ :self :message :defaultValue |\n\t\t<primitive: return _self.prompt(_message, _defaultValue);>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["localStorage", "location", "name", "navigator", "sessionStorage"];
  }, ["self"]),
  "{ :self |\n\t\t['localStorage', 'location', 'name', 'navigator', 'sessionStorage']\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "requestAnimationFrame",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requestAnimationFrame(_aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive: return _self.requestAnimationFrame(_aBlock_1);>\n\t}",
);

sl.addMethodToExistingType(
  "Window",
  "Window",
  "sessionStorage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sessionStorage;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.sessionStorage;>\n\t}",
);
