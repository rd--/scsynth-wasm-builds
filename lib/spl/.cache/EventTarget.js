sl.addTrait("EventTarget", "EventTarget");

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1);
  }, ["self", "aString", "aBlock:/1"]),
  "{ :self :aString :aBlock:/1 |\n\t\t<primitive: return _self.addEventListener(_aString, _aBlock_1);>\n\t}",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1", "options"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1, _options) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aString, _aBlock_1, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1, _options);
  }, ["self", "aString", "aBlock:/1", "options"]),
  "{ :self :aString :aBlock:/1 :options |\n\t\t<primitive: return _self.addEventListener(_aString, _aBlock_1, _options);>\n\t}",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "dispatchEvent",
  ["self", "event"],
  sl.annotateFunction(function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.dispatchEvent(_event);
  }, ["self", "event"]),
  "{ :self :event |\n\t\t<primitive: return _self.dispatchEvent(_event);>\n\t}",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "removeEventListener",
  ["self", "aString", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeEventListener(_aString, _aBlock_1);
  }, ["self", "aString", "aBlock:/1"]),
  "{ :self :aString :aBlock:/1 |\n\t\t<primitive: return _self.removeEventListener(_aString, _aBlock_1);>\n\t}",
);
