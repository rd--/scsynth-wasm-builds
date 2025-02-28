sl.addTrait("EventTarget", "EventTarget");

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1);
  },
  "{ :self :aString :aBlock:/1 | <primitive: return _self.addEventListener(_aString, _aBlock_1);>\n }",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "addEventListener",
  ["self", "aString", "aBlock:/1", "options"],
  function (_self, _aString, _aBlock_1, _options) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aString, _aBlock_1, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.addEventListener(_aString, _aBlock_1, _options);
  },
  "{ :self :aString :aBlock:/1 :options | <primitive: return _self.addEventListener(_aString, _aBlock_1, _options);>\n }",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "dispatchEvent",
  ["self", "event"],
  function (_self, _event) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _event";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.dispatchEvent(_event);
  },
  "{ :self :event | <primitive: return _self.dispatchEvent(_event);>\n }",
);

sl.addMethodToExistingTrait(
  "EventTarget",
  "EventTarget",
  "removeEventListener",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.removeEventListener(_aString, _aBlock_1);
  },
  "{ :self :aString :aBlock:/1 | <primitive: return _self.removeEventListener(_aString, _aBlock_1);>\n }",
);
