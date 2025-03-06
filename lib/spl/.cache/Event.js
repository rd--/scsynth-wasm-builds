sl.addTrait("Event", "Event");

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "cancelable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cancelable;
  }, ["self"]),
  "{ :self | <primitive: return _self.cancelable;>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "preventDefault",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.preventDefault();
  }, ["self"]),
  "{ :self | <primitive: return _self.preventDefault();>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "stopImmediatePropagation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.stopImmediatePropagation();
  }, ["self"]),
  "{ :self | <primitive: return _self.stopImmediatePropagation();>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "stopPropagation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.stopPropagation();
  }, ["self"]),
  "{ :self | <primitive: return _self.stopPropagation();>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "stopPropagationAndPreventDefault",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _stopPropagation_1(_self);
    return _ifTrue_2(
      _cancelable_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _preventDefault_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | stopPropagation(self); ifTrue(cancelable(self), { preventDefault(self) }) }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "target",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.target;
  }, ["self"]),
  "{ :self | <primitive: return _self.target;>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "timeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.timeStamp;
  }, ["self"]),
  "{ :self | <primitive: return _self.timeStamp;>\n }",
);

sl.addMethodToExistingTrait(
  "Event",
  "Event",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addType(
  true,
  "Event",
  "Event",
  ["Object", "Event"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Event",
);

sl.copyTraitMethodsToType(
  "Event",
  "Event",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Event",
  "Event",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Event(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Event(_self);>\n }",
);
