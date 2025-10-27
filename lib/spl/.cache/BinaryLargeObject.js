/*  Requires: Object  */

sl.addTrait("BinaryLargeObject", "BinaryLargeObject");

sl.addMethodToExistingTrait(
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "BinaryLargeObject",
  "isBinaryLargeObject",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "BinaryLargeObject",
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

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "BinaryLargeObject",
  "isBinaryLargeObject",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused |\n\t\tfalse\n\t}",
);

sl.addType(
  true,
  "BinaryLargeObject",
  "BinaryLargeObject",
  ["Object", "Equatable", "BinaryLargeObject"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "BinaryLargeObject",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BinaryLargeObject",
);

sl.copyTraitMethodsToType(
  "BinaryLargeObject",
  "BinaryLargeObject",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BinaryLargeObject",
  "BinaryLargeObject",
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
  "BinaryLargeObject",
  "asBinaryLargeObject",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _BinaryLargeObject_2([_self], _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tBinaryLargeObject([self], options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "BinaryLargeObject",
  "asBinaryLargeObject",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _BinaryLargeObject_2([_self], _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tBinaryLargeObject([self], options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "BinaryLargeObject",
  "asBinaryLargeObject",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _BinaryLargeObject_2([_self], _Record_0());
  }, ["self"]),
  "{ :self |\n\t\tBinaryLargeObject([self], (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "BinaryLargeObject",
  "asBinaryLargeObject",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _BinaryLargeObject_2([_self], _Record_0());
  }, ["self"]),
  "{ :self |\n\t\tBinaryLargeObject([self], (:))\n\t}",
);
