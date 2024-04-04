sl.addMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readDirectoryFileNames(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readDirectoryFileNames(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readBinaryFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readBinaryFile(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readBinaryFile(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readTextFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readTextFile(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readTextFile(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "writeBinaryFile",
  ["self", "aByteArray"],
  function (_self, _aByteArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aByteArray";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.writeBinaryFile(_self, _aByteArray);
  },
  "{ :self :aByteArray |\n\t\t<primitive: return host.writeBinaryFile(_self, _aByteArray);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "writeTextFile",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.writeTextFile(_self, _aString);
  },
  "{ :self :aString |\n\t\t<primitive: return host.writeTextFile(_self, _aString);>\n\t}",
);

sl.addMethod(
  "List",
  "FileSystem",
  "readTextFileList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readTextFileArray(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readTextFileArray(_self);>\n\t}",
);
