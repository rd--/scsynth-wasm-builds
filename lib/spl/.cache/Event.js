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
  "{ :self |\n\t\t<primitive: return _self.cancelable;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.preventDefault();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.stopImmediatePropagation();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.stopPropagation();>\n\t}",
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
  "{ :self |\n\t\tself.stopPropagation;\n\t\tself.cancelable.ifTrue {\n\t\t\tself.preventDefault\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.target;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.timeStamp;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.type;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Event(_self);>\n\t}",
);
