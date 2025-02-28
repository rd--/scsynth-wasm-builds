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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Uint8Array(_self);
  },
  "{ :self | <primitive: return new Uint8Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat32Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  },
  "{ :self | <primitive: return new Float32Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat64Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  },
  "{ :self | <primitive: return new Float64Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "byteSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.byteLength;
  },
  "{ :self | <primitive: return _self.byteLength;>\n }",
);

sl.addMethodToExistingType(
  "ArrayBuffer",
  "ArrayBuffer",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "size: should not implement, see byteSize");
  },
  "{ :self | error(self,'size: should not implement, see byteSize') }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ArrayBuffer",
  "ArrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new ArrayBuffer(_self);
  },
  "{ :self | <primitive: return new ArrayBuffer(_self);>\n }",
);
