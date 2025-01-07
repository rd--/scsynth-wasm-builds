sl.addType(
  true,
  "ScSynthOptions",
  "ScSynthOptions",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScSynthOptions",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "blockSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blockSize;
  },
  "{ :self |\n\t\t<primitive: return _self.blockSize;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "hardwareBufferSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hardwareBufferSize;
  },
  "{ :self |\n\t\t<primitive: return _self.hardwareBufferSize;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numInputs;
  },
  "{ :self |\n\t\t<primitive: return _self.numInputs;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numInputs = _anInteger;
    return _anInteger;
  },
  "{ :self :anInteger |\n\t\t<primitive: _self.numInputs = _anInteger; return _anInteger;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numOutputs;
  },
  "{ :self |\n\t\t<primitive: return _self.numOutputs;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numOutputs = _anInteger;
    return _anInteger;
  },
  "{ :self :anInteger |\n\t\t<primitive: _self.numOutputs = _anInteger; return _anInteger;>\n\t}",
);

sl.addMethod(
  "ScSynthOptions",
  "ScSynthOptions",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["hardwareBufferSize", "blockSize", "numInputs", "numOutputs"];
  },
  "{ :self |\n\t\t['hardwareBufferSize', 'blockSize', 'numInputs', 'numOutputs']\n\t}",
);
