sl.addType(
  true,
  "ArrayBuffer",
  "ArrayBuffer",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ArrayBuffer",
);

sl.addMethod(
  "ArrayBuffer",
  "ArrayBuffer",
  "asByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Uint8Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Uint8Array(_self);>\n\t}",
);

sl.addMethod(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat32Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Float32Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
);

sl.addMethod(
  "ArrayBuffer",
  "ArrayBuffer",
  "asFloat64Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Float64Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);

sl.addMethod(
  "ArrayBuffer",
  "ArrayBuffer",
  "byteSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.byteLength;
  },
  "{ :self |\n\t\t<primitive: return _self.byteLength;>\n\t}",
);

sl.addMethod(
  "ArrayBuffer",
  "ArrayBuffer",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "size: should not implement");
  },
  "{ :self |\n\t\tself.error('size: should not implement')\n\t}",
);
