sl.addType(
  true,
  "ScSynthOptions",
  "ScSynthOptions",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScSynthOptions",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "blockSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blockSize;
  },
  "{ :self | <primitive: return _self.blockSize;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "hardwareBufferSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hardwareBufferSize;
  },
  "{ :self | <primitive: return _self.hardwareBufferSize;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numInputs;
  },
  "{ :self | <primitive: return _self.numInputs;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numInputs = _anInteger;
    return _anInteger;
  },
  "{ :self :anInteger | <primitive: _self.numInputs = _anInteger; return _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numOutputs;
  },
  "{ :self | <primitive: return _self.numOutputs;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numOutputs = _anInteger;
    return _anInteger;
  },
  "{ :self :anInteger | <primitive: _self.numOutputs = _anInteger; return _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["hardwareBufferSize", "blockSize", "numInputs", "numOutputs"];
  },
  "{ :self | ['hardwareBufferSize', 'blockSize', 'numInputs', 'numOutputs'] }",
);
