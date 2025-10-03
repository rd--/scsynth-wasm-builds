sl.addType(
  true,
  "ArrayBuffer",
  "ArrayBuffer",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ArrayBuffer",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "asByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Uint8Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float32Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float64Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "byteSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.byteLength;
  }, ["self"]),
  "{ :self | <primitive: return _self.byteLength;>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "size: see byteSize");
  }, ["self"]),
  "{ :self | shouldNotImplement(self,'size: see byteSize') }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ArrayBuffer",
  "ArrayBuffer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new ArrayBuffer(_self);
  }, ["self"]),
  "{ :self | <primitive: return new ArrayBuffer(_self);>\n }",
);
