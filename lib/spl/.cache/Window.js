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
  "{ :self :aString | <primitive: return _self.alert(_aString);>\n }",
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
  "{ :self | <primitive: return _self.caches;>\n }",
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
  "{ :self :aString | <primitive: return _self.confirm(_aString);>\n }",
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
  "{ :self | <primitive: return _self.document;>\n }",
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
  "{ :self | <primitive: return _self.localStorage;>\n }",
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
  "{ :self | <primitive: return _self.location;>\n }",
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
  "{ :self | <primitive: return _self.name;>\n }",
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
  "{ :self | <primitive: return _self.navigator;>\n }",
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
  "{ :self :message :defaultValue | <primitive: return _self.prompt(_message, _defaultValue);>\n }",
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
  "{ :self | ['localStorage', 'location', 'name', 'navigator', 'sessionStorage'] }",
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
  "{ :self :aBlock:/1 | <primitive: return _self.requestAnimationFrame(_aBlock_1);>\n }",
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
  "{ :self | <primitive: return _self.sessionStorage;>\n }",
);
