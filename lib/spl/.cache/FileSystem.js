sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "fileInformation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.fileInformationSync(_self);
  },
  "{ :self | <primitive: return host.fileInformationSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "makeDirectory",
  ["self", "allowRecursive", "fileMode"],
  function (_self, _allowRecursive, _fileMode) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _allowRecursive, _fileMode";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.makeDirectorySync(_self, _allowRecursive, _fileMode);
  },
  "{ :self :allowRecursive :fileMode | <primitive: return host.makeDirectorySync(_self, _allowRecursive, _fileMode);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "modificationTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.modificationTimeSync(_self);
  },
  "{ :self | <primitive: return host.modificationTimeSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectorySync(_self);
  },
  "{ :self | <primitive: return host.readDirectorySync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryAsync",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectoryAsync(_self);
  },
  "{ :self | <primitive: return host.readDirectoryAsync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _select_2(_readDirectory_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_each, "isFile");
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _pathJoin_1([_self, _at_2(_each, "name")]);
      },
    );
  },
  "{ :self | collect(select(readDirectory(self), { :each | at(each, 'isFile') }), { :each | pathJoin([self, at(each, 'name')]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNamesAsync",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_readDirectoryAsync_1(_self), function (_entries) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _entries";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _select_2(_entries, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_each, "isFile");
        }),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _pathJoin_1([_self, _at_2(_each, "name")]);
        },
      );
    });
  },
  "{ :self | then(readDirectoryAsync(self), { :entries | collect(select(entries, { :each | at(each, 'isFile') }), { :each | pathJoin([self, at(each, 'name')]) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readBinaryFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readBinaryFileSync(_self);
  },
  "{ :self | <primitive: return host.readBinaryFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readTextFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileSync(_self);
  },
  "{ :self | <primitive: return host.readTextFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "removeDirectory",
  ["self", "recursive"],
  function (_self, _recursive) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _recursive";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeDirectorySync(_self, _recursive);
  },
  "{ :self :recursive | <primitive: return host.removeDirectorySync(_self, _recursive);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "removeFile",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeFileSync(_self);
  },
  "{ :self | <primitive: return host.removeFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "writeBinaryFile",
  ["self", "aByteArray"],
  function (_self, _aByteArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aByteArray";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeBinaryFileSync(_self, _aByteArray);
  },
  "{ :self :aByteArray | <primitive: return host.writeBinaryFileSync(_self, _aByteArray);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "writeTextFile",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeTextFileSync(_self, _aString);
  },
  "{ :self :aString | <primitive: return host.writeTextFileSync(_self, _aString);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FileSystem",
  "readTextFileList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileArraySync(_self);
  },
  "{ :self | <primitive: return host.readTextFileArraySync(_self);>\n }",
);
