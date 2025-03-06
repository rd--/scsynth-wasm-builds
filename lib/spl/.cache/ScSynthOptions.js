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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.blockSize;
  }, ["self"]),
  "{ :self | <primitive: return _self.blockSize;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "hardwareBufferSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hardwareBufferSize;
  }, ["self"]),
  "{ :self | <primitive: return _self.hardwareBufferSize;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numInputs;
  }, ["self"]),
  "{ :self | <primitive: return _self.numInputs;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numInputs",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numInputs = _anInteger;
    return _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: _self.numInputs = _anInteger; return _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numOutputs;
  }, ["self"]),
  "{ :self | <primitive: return _self.numOutputs;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "numOutputs",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.numOutputs = _anInteger;
    return _anInteger;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <primitive: _self.numOutputs = _anInteger; return _anInteger;>\n }",
);

sl.addMethodToExistingType(
  "ScSynthOptions",
  "ScSynthOptions",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["hardwareBufferSize", "blockSize", "numInputs", "numOutputs"];
  }, ["self"]),
  "{ :self | ['hardwareBufferSize', 'blockSize', 'numInputs', 'numOutputs'] }",
);
