/*  Requires: Object  */

sl.addTrait("Blob", "Blob");

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "arrayBuffer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arrayBuffer();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.arrayBuffer();>\n\t}",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "slice",
  ["self", "start", "end", "contentType"],
  sl.annotateFunction(function (_self, _start, _end, _contentType) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _end, _contentType";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.slice(_start, _end, _contentType);
  }, ["self", "start", "end", "contentType"]),
  "{ :self :start :end :contentType |\n\t\t<primitive: return _self.slice(_start, _end, _contentType);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "text",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.text();>\n\t}",
);

sl.addMethodToExistingTrait(
  "Blob",
  "Blob",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.type;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.type;>\n\t}",
);

sl.addType(
  true,
  "Blob",
  "Blob",
  ["Object", "Equatable", "Blob"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Blob",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Blob(_self, _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t<primitive: return new Blob(_self, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Blob",
  "asBlob",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tBlob([self], options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Blob",
  "asBlob",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tBlob([self], options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "Blob",
  "asBlob",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _Record_0());
  }, ["self"]),
  "{ :self |\n\t\tBlob([self], (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "Blob",
  "asBlob",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Blob_2([_self], _Record_0());
  }, ["self"]),
  "{ :self |\n\t\tBlob([self], (:))\n\t}",
);
