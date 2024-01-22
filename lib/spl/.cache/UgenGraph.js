sl.addType(
  true,
  "UgenGraph",
  "UgenGraph",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "UgenGraph",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "controlArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.controlArray;
  },
  "{ :self |\n\t\t<primitive: return _self.controlArray>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "constantArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.constantArray;
  },
  "{ :self |\n\t\t<primitive: return _self.constantArray>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "encode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.graphEncodeSyndef(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.graphEncodeSyndef(_self);>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
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
  "{ :self |\n\t\t<primitive: return _self.name>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["name", "ugenArray", "constantArray", "controlArray"];
  },
  "{ :self |\n\t\t['name', 'ugenArray', 'constantArray', 'controlArray']\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "ugenArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.ugenArray;
  },
  "{ :self |\n\t\t<primitive: return _self.ugenArray>\n\t}",
);

sl.addMethod(
  "String",
  "UgenGraph",
  "ugenGraphAt",
  ["self", "bus", "ugen"],
  function (_self, _bus, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bus, _ugen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));
  },
  "{ :self :bus :ugen |\n\t\t<primitive: return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));>\n\t}",
);

sl.addMethod(
  "String",
  "UgenGraph",
  "ugenGraph",
  ["self", "ugen"],
  function (_self, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ugen";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ugenGraphAt_3(_self, _busOffset_1(_ugen), _ugen);
  },
  "{ :self :ugen |\n\t\tself.ugenGraphAt(\n\t\t\tugen.busOffset,\n\t\t\tugen\n\t\t)\n\t}",
);
