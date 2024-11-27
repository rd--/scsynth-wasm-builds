sl.addTrait("EventTarget", "EventTarget");

sl.addTraitMethod(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1);
  },
  "{ :self :aString :aBlock:/1 |\n\t\t<primitive: return _self.addEventListener(_aString, _aBlock_1);>\n\t}",
);

sl.addTraitMethod(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1", "options"],
  function (_self, _aString, _aBlock_1, _options) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aString, _aBlock_1, _options"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1, _options);
  },
  "{ :self :aString :aBlock:/1 :options |\n\t\t<primitive: return _self.addEventListener(_aString, _aBlock_1, _options);>\n\t}",
);

sl.addTraitMethod(
  "EventTarget",
  "EventTarget",
  "dispatchEvent",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _event"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.dispatchEvent(_event);
  },
  "{ :self :event |\n\t\t<primitive: return _self.dispatchEvent(_event);>\n\t}",
);

sl.addTraitMethod(
  "EventTarget",
  "EventTarget",
  "removeEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.removeEventListener(_aString, _aBlock_1);
  },
  "{ :self :aString :aBlock:/1 |\n\t\t<primitive: return _self.removeEventListener(_aString, _aBlock_1);>\n\t}",
);
