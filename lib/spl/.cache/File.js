/*  Requires: Blob, ByteArray, Float64Array, Sequence  */

sl.addType(
  true,
  "File",
  "File",
  ["Object", "Blob"],
  [],
);

sl.copyTraitToType(
  "Object",
  "File",
);

sl.copyTraitToType(
  "Blob",
  "File",
);

sl.addMethod(
  "File",
  "File",
  "lastModified",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.lastModified;
  },
  "{ :self |\n\t\t<primitive: return _self.lastModified;> /* Read only */\n\t}",
);

sl.addMethod(
  "File",
  "File",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;> /* Read only */\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "File",
  "File",
  ["fileBits", "fileName", "options"],
  function (_fileBits, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _fileBits, _fileName, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new File(_fileBits, _fileName, _options);
  },
  "{ :fileBits :fileName :options |\n\t\t<primitive: return new File(_fileBits, _fileName, _options);>\n\t}",
);

sl.addMethod(
  "Blob",
  "File",
  "File",
  ["self", "fileName", "options"],
  function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _File_3([_self], _fileName, _options);
  },
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);

sl.addMethod(
  "ByteArray",
  "File",
  "File",
  ["self", "fileName", "options"],
  function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _File_3([_self], _fileName, _options);
  },
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);

sl.addMethod(
  "Float64Array",
  "File",
  "File",
  ["self", "fileName", "options"],
  function (_self, _fileName, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fileName, _options";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _File_3([_self], _fileName, _options);
  },
  "{ :self :fileName :options |\n\t\tFile([self], fileName, options)\n\t}",
);
