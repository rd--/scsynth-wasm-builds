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
  "controlList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.controlArray;
  },
  "{ :self |\n\t\t<primitive: return _self.controlArray>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "constantList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name>\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "ugenList", "constantList", "controlList"];
  },
  "{ :self |\n\t\t['name', 'ugenList', 'constantList', 'controlList']\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "send",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _message = _OscMessage_2("/d_recv", [_encode_1(_self)]);
    /* Statements */
    return _sendOsc_2(_scSynth_1(_system), _message);
  },
  "{ :self |\n\t\tlet message = OscMessage('/d_recv', [self.encode]);\n\t\tsystem.scSynth.sendOsc(message)\n\t}",
);

sl.addMethod(
  "UgenGraph",
  "UgenGraph",
  "ugenList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));
  },
  "{ :self :bus :ugen |\n\t\t<primitive: return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));>\n\t}",
);

sl.addMethod(
  "String",
  "UgenGraph",
  "UgenGraph",
  ["self", "ugen"],
  function (_self, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ugen";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ugenGraphAt_3(_self, _busOffset_1(_ugen), _ugen);
  },
  "{ :self :ugen |\n\t\tself.ugenGraphAt(\n\t\t\tugen.busOffset,\n\t\t\tugen\n\t\t)\n\t}",
);
