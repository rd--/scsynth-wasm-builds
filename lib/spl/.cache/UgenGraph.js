sl.addType(
  true,
  "UgenGraph",
  "UgenGraph",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UgenGraph",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "controlList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.controlArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.controlArray>\n }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "constantList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.constantArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.constantArray>\n }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "encode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.graphEncodeSyndef(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.graphEncodeSyndef(_self);>\n }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
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
  "{ :self | <primitive: return _self.name>\n }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "ugenList", "constantList", "controlList"];
  }, ["self"]),
  "{ :self | ['name', 'ugenList', 'constantList', 'controlList'] }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "send",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _message = _OscMessage_2("/d_recv", [_encode_1(_self)]);
    /* Statements */
    return _sendOsc_2(_scSynth_1(_system), _message);
  }, ["self"]),
  "{ :self | let message = OscMessage('/d_recv', [encode(self)]); sendOsc(scSynth(system),message) }",
);

sl.addMethodToExistingType(
  "UgenGraph",
  "UgenGraph",
  "ugenList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.ugenArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.ugenArray>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "UgenGraph",
  "ugenGraphAt",
  ["self", "bus", "ugen"],
  sl.annotateFunction(function (_self, _bus, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bus, _ugen";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));
  }, ["self", "bus", "ugen"]),
  "{ :self :bus :ugen | <primitive: return sc.makeUgenGraph(_self, sc.wrapOut(_bus, _ugen));>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "UgenGraph",
  "UgenGraph",
  ["self", "ugen"],
  sl.annotateFunction(function (_self, _ugen) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ugen";
      throw new Error(errorMessage);
    } /* Statements */
    return _ugenGraphAt_3(_self, _busOffset_1(_ugen), _ugen);
  }, ["self", "ugen"]),
  "{ :self :ugen | ugenGraphAt(self,busOffset(ugen), ugen) }",
);
