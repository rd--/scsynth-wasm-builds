sl.addMethod(
  "String",
  "FileSystem",
  "fileInformation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.fileInformationSync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.fileInformationSync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "makeDirectory",
  ["self", "allowRecursive", "fileMode"],
  function (_self, _allowRecursive, _fileMode) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _allowRecursive, _fileMode"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.makeDirectorySync(_self, _allowRecursive, _fileMode);
  },
  "{ :self :allowRecursive :fileMode |\n\t\t<primitive: return host.makeDirectorySync(_self, _allowRecursive, _fileMode);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "modificationTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.modificationTimeSync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.modificationTimeSync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readDirectorySync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readDirectorySync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_readDirectory_1(_self), function (_entries) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _entries"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(
        _select_2(_entries, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _each"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _at_2(_each, "isFile");
        }),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _each"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _pathJoin_1([_self, _at_2(_each, "name")]);
        },
      );
    });
  },
  "{ :self |\n\t\tself.readDirectory.then { :entries |\n\t\t\tentries.select { :each |\n\t\t\t\teach::isFile\n\t\t\t}.collect { :each |\n\t\t\t\t[self, each::name].pathJoin\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readBinaryFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readBinaryFileSync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readBinaryFileSync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "readTextFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readTextFileSync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readTextFileSync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "removeDirectory",
  ["self", "recursive"],
  function (_self, _recursive) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _recursive"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.removeDirectorySync(_self, _recursive);
  },
  "{ :self :recursive |\n\t\t<primitive: return host.removeDirectorySync(_self, _recursive);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "removeFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.removeFileSync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.removeFileSync(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "writeBinaryFile",
  ["self", "aByteArray"],
  function (_self, _aByteArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aByteArray"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.writeBinaryFileSync(_self, _aByteArray);
  },
  "{ :self :aByteArray |\n\t\t<primitive: return host.writeBinaryFileSync(_self, _aByteArray);>\n\t}",
);

sl.addMethod(
  "String",
  "FileSystem",
  "writeTextFile",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aString"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.writeTextFileSync(_self, _aString);
  },
  "{ :self :aString |\n\t\t<primitive: return host.writeTextFileSync(_self, _aString);>\n\t}",
);

sl.addMethod(
  "List",
  "FileSystem",
  "readTextFileList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return host.readTextFileArraySync(_self);
  },
  "{ :self |\n\t\t<primitive: return host.readTextFileArraySync(_self);>\n\t}",
);
