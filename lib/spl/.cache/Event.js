sl.addTrait("Event", "Event");

sl.addTraitMethod(
  "Event",
  "Event",
  "cancelable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.cancelable;
  },
  "{ :self |\n\t\t<primitive: return _self.cancelable;>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "preventDefault",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.preventDefault();
  },
  "{ :self |\n\t\t<primitive: return _self.preventDefault();>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "stopImmediatePropagation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.stopImmediatePropagation();
  },
  "{ :self |\n\t\t<primitive: return _self.stopImmediatePropagation();>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "stopPropagation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.stopPropagation();
  },
  "{ :self |\n\t\t<primitive: return _self.stopPropagation();>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "stopPropagationAndPreventDefault",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _stopPropagation_1(_self);
    return _ifTrue_2(_cancelable_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _preventDefault_1(_self);
    });
  },
  "{ :self |\n\t\tself.stopPropagation;\n\t\tself.cancelable.ifTrue {\n\t\t\tself.preventDefault\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "target",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.target;
  },
  "{ :self |\n\t\t<primitive: return _self.target;>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "timeStamp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.timeStamp;
  },
  "{ :self |\n\t\t<primitive: return _self.timeStamp;>\n\t}",
);

sl.addTraitMethod(
  "Event",
  "Event",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.type;
  },
  "{ :self |\n\t\t<primitive: return _self.type;>\n\t}",
);

sl.addType(
  true,
  "Event",
  "Event",
  ["Object", "Event"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Event",
);

sl.copyTraitToType(
  "Event",
  "Event",
);

sl.addMethod(
  "String",
  "Event",
  "Event",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Event(_self);
  },
  "{ :self |\n\t\t<primitive: return new Event(_self);>\n\t}",
);
