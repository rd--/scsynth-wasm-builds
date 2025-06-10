sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "fileInformation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.fileInformationSync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.fileInformationSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "makeDirectory",
  ["self", "allowRecursive", "fileMode"],
  sl.annotateFunction(function (_self, _allowRecursive, _fileMode) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _allowRecursive, _fileMode";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.makeDirectorySync(_self, _allowRecursive, _fileMode);
  }, ["self", "allowRecursive", "fileMode"]),
  "{ :self :allowRecursive :fileMode | <primitive: return host.makeDirectorySync(_self, _allowRecursive, _fileMode);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "modificationTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.modificationTimeSync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.modificationTimeSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectorySync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.readDirectorySync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryAsync",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectoryAsync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.readDirectoryAsync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNames",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _select_2(
        _readDirectory_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_each, "isFile");
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _pathJoin_1([_self, _at_2(_each, "name")]);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(select(readDirectory(self), { :each | at(each, 'isFile') }), { :each | pathJoin([self, at(each, 'name')]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readDirectoryFileNamesAsync",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _readDirectoryAsync_1(_self),
      sl.annotateFunction(function (_entries) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _entries";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _select_2(
            _entries,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_each, "isFile");
            }, ["each"]),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _pathJoin_1([_self, _at_2(_each, "name")]);
          }, ["each"]),
        );
      }, ["entries"]),
    );
  }, ["self"]),
  "{ :self | then(readDirectoryAsync(self), { :entries | collect(select(entries, { :each | at(each, 'isFile') }), { :each | pathJoin([self, at(each, 'name')]) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readBinaryFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readBinaryFileSync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.readBinaryFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "readTextFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileSync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.readTextFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "removeDirectory",
  ["self", "recursive"],
  sl.annotateFunction(function (_self, _recursive) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _recursive";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeDirectorySync(_self, _recursive);
  }, ["self", "recursive"]),
  "{ :self :recursive | <primitive: return host.removeDirectorySync(_self, _recursive);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "removeFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeFileSync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.removeFileSync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "writeBinaryFile",
  ["self", "aByteArray"],
  sl.annotateFunction(function (_self, _aByteArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aByteArray";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeBinaryFileSync(_self, _aByteArray);
  }, ["self", "aByteArray"]),
  "{ :self :aByteArray | <primitive: return host.writeBinaryFileSync(_self, _aByteArray);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FileSystem",
  "writeTextFile",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeTextFileSync(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return host.writeTextFileSync(_self, _aString);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FileSystem",
  "readTextFileList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileArraySync(_self);
  }, ["self"]),
  "{ :self | <primitive: return host.readTextFileArraySync(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "temporaryFileName",
  ["unused", "prefix", "suffix"],
  sl.annotateFunction(function (_unused, _prefix, _suffix) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _prefix, _suffix";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.makeTemporaryFileSync(_prefix, _suffix);
  }, ["unused", "prefix", "suffix"]),
  "{ :unused :prefix :suffix | <primitive: return host.makeTemporaryFileSync(_prefix, _suffix);>\n }",
);
