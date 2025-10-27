/*  Requires: BinaryLargeObject ByteArray Float64Array Sequence  */

sl.addType(
  true,
  "File",
  "File",
  ["Object", "BinaryLargeObject"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "File",
);

sl.copyTraitMethodsToType(
  "BinaryLargeObject",
  "File",
);

sl.addMethodToExistingType(
  "File",
  "File",
  "lastModified",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.lastModified;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.lastModified;>\n\t}",
);

sl.addMethodToExistingType(
  "File",
  "File",
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
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "File",
  "File",
  ["fileBits", "fileName", "options"],
  sl.annotateFunction(function (_fileBits, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fileBits, _fileName, _options";
      throw new Error(errorMessage);
    } /* Primitive */
    return new File(_fileBits, _fileName, _options);
  }, ["fileBits", "fileName", "options"]),
  "{ :fileBits :fileName :options |\n\t\t<primitive: return new File(_fileBits, _fileName, _options);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BinaryLargeObject",
  "File",
  "File",
  ["self", "fileName", "options"],
  sl.annotateFunction(function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3([_self], _fileName, _options);
  }, ["self", "fileName", "options"]),
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "File",
  "File",
  ["self", "fileName", "options"],
  sl.annotateFunction(function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3([_self], _fileName, _options);
  }, ["self", "fileName", "options"]),
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "File",
  "File",
  ["self", "fileName", "options"],
  sl.annotateFunction(function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3([_self], _fileName, _options);
  }, ["self", "fileName", "options"]),
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "File",
  "File",
  ["fileBits", "fileName"],
  sl.annotateFunction(function (_fileBits, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fileBits, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3(_fileBits, _fileName, _Record_0());
  }, ["fileBits", "fileName"]),
  "{ :fileBits :fileName |\n\t\tFile(fileBits, fileName, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BinaryLargeObject",
  "File",
  "File",
  ["fileBits", "fileName"],
  sl.annotateFunction(function (_fileBits, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fileBits, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3(_fileBits, _fileName, _Record_0());
  }, ["fileBits", "fileName"]),
  "{ :fileBits :fileName |\n\t\tFile(fileBits, fileName, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "File",
  "File",
  ["fileBits", "fileName"],
  sl.annotateFunction(function (_fileBits, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fileBits, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3(_fileBits, _fileName, _Record_0());
  }, ["fileBits", "fileName"]),
  "{ :fileBits :fileName |\n\t\tFile(fileBits, fileName, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "File",
  "File",
  ["fileBits", "fileName"],
  sl.annotateFunction(function (_fileBits, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fileBits, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _File_3(_fileBits, _fileName, _Record_0());
  }, ["fileBits", "fileName"]),
  "{ :fileBits :fileName |\n\t\tFile(fileBits, fileName, (:))\n\t}",
);
