/*  Requires: Object  */

sl.addTrait("Blob", "Blob");

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "arrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer();
  },
  "{ :self | <primitive: return _self.arrayBuffer();>\n }",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "slice",
  ["self", "start", "end", "contentType"],
  function (_self, _start, _end, _contentType) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _end, _contentType";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.slice(_start, _end, _contentType);
  },
  "{ :self :start :end :contentType | <primitive: return _self.slice(_start, _end, _contentType);>\n }",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text();
  },
  "{ :self | <primitive: return _self.text();>\n }",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  },
  "{ :self | <primitive: return _self.type;>\n }",
);

sl.addType(
  true,
  "Blob",
  "Blob",
  ["Object", "Blob"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Blob",
);

sl.copyTraitMethodsToType(
  "Blob",
  "Blob",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Blob",
  "Blob",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Blob(_self, _options);
  },
  "{ :self :options | <primitive: return new Blob(_self, _options);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Blob",
  "asBlob",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _options);
  },
  "{ :self :options | Blob([self], options) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Blob",
  "asBlob",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _options);
  },
  "{ :self :options | Blob([self], options) }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Blob",
  "asBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _Record_1([]));
  },
  "{ :self | Blob([self], Record([])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Blob",
  "asBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _Record_1([]));
  },
  "{ :self | Blob([self], Record([])) }",
);
