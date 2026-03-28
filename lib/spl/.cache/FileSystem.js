sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "directoryExists",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_fileInformation_2(_self, _aString), "isDirectory");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t{\n\t\t\tself.fileInformation(aString).at('isDirectory')\n\t\t}.ifError {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "fileExists",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_fileInformation_2(_self, _aString), "isFile");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t{\n\t\t\tself.fileInformation(aString).at('isFile')\n\t\t}.ifError {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "fileInformation",
  ["unused", "aString"],
  sl.annotateFunction(function (_unused, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.fileInformationSync(_aString);
  }, ["unused", "aString"]),
  "{ :unused :aString |\n\t\t<primitive: return host.fileInformationSync(_aString);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "makeDirectory",
  ["unused", "fileName", "allowRecursive", "fileMode"],
  sl.annotateFunction(
    function (_unused, _fileName, _allowRecursive, _fileMode) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _unused, _fileName, _allowRecursive, _fileMode";
        throw new Error(errorMessage);
      } /* Primitive */
      return host.makeDirectorySync(_fileName, _allowRecursive, _fileMode);
    },
    ["unused", "fileName", "allowRecursive", "fileMode"],
  ),
  "{ :unused :fileName :allowRecursive :fileMode |\n\t\t<primitive: return host.makeDirectorySync(_fileName, _allowRecursive, _fileMode);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "modificationTime",
  ["unused", "fileName"],
  sl.annotateFunction(function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.modificationTimeSync(_fileName);
  }, ["unused", "fileName"]),
  "{ :unused :fileName |\n\t\t<primitive: return host.modificationTimeSync(_fileName);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readDirectory",
  ["unused", "fileName"],
  sl.annotateFunction(function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectorySync(_fileName);
  }, ["unused", "fileName"]),
  "{ :unused :fileName |\n\t\t<primitive: return host.readDirectorySync(_fileName);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readDirectoryAsync",
  ["unused", "fileName"],
  sl.annotateFunction(function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readDirectoryAsync(_fileName);
  }, ["unused", "fileName"]),
  "{ :unused :fileName |\n\t\t<primitive: return host.readDirectoryAsync(_fileName);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readDirectoryFileNames",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _select_2(
        _readDirectory_2(_self, _aString),
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
        return _pathJoin_1([_aString, _at_2(_each, "name")]);
      }, ["each"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.readDirectory(aString).select { :each |\n\t\t\teach['isFile']\n\t\t}.collect { :each |\n\t\t\t[aString, each['name']].pathJoin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readDirectoryFileNamesAsync",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _readDirectoryAsync_2(_self, _aString),
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
            return _pathJoin_1([_aString, _at_2(_each, "name")]);
          }, ["each"]),
        );
      }, ["entries"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.readDirectoryAsync(aString).then { :entries |\n\t\t\tentries.select { :each |\n\t\t\t\teach['isFile']\n\t\t\t}.collect { :each |\n\t\t\t\t[aString, each['name']].pathJoin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readBinaryFile",
  ["unused", "aString"],
  sl.annotateFunction(function (_unused, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readBinaryFileSync(_aString);
  }, ["unused", "aString"]),
  "{ :unused :aString |\n\t\t<primitive: return host.readBinaryFileSync(_aString);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readTextFile",
  ["unused", "aString"],
  sl.annotateFunction(function (_unused, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileSync(_aString);
  }, ["unused", "aString"]),
  "{ :unused :aString |\n\t\t<primitive: return host.readTextFileSync(_aString);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "readTextFileList",
  ["unused", "aList"],
  sl.annotateFunction(function (_unused, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.readTextFileArraySync(_aList);
  }, ["unused", "aList"]),
  "{ :unused :aList |\n\t\t<primitive: return host.readTextFileArraySync(_aList);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "removeDirectory",
  ["unused", "fileName", "recursive"],
  sl.annotateFunction(function (_unused, _fileName, _recursive) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _fileName, _recursive";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeDirectorySync(_fileName, _recursive);
  }, ["unused", "fileName", "recursive"]),
  "{ :unused :fileName :recursive |\n\t\t<primitive: return host.removeDirectorySync(_fileName, _recursive);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "removeFile",
  ["unused", "fileName"],
  sl.annotateFunction(function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.removeFileSync(_fileName);
  }, ["unused", "fileName"]),
  "{ :unused :fileName |\n\t\t<primitive: return host.removeFileSync(_fileName);>\n\t}",
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
  "{ :unused :prefix :suffix |\n\t\t<primitive: return host.makeTemporaryFileSync(_prefix, _suffix);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "writeBinaryFile",
  ["unused", "fileName", "aByteArray"],
  sl.annotateFunction(function (_unused, _fileName, _aByteArray) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _fileName, _aByteArray";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeBinaryFileSync(_fileName, _aByteArray);
  }, ["unused", "fileName", "aByteArray"]),
  "{ :unused :fileName :aByteArray |\n\t\t<primitive: return host.writeBinaryFileSync(_fileName, _aByteArray);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "FileSystem",
  "writeTextFile",
  ["unused", "fileName", "aString"],
  sl.annotateFunction(function (_unused, _fileName, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _unused, _fileName, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return host.writeTextFileSync(_fileName, _aString);
  }, ["unused", "fileName", "aString"]),
  "{ :unused :fileName :aString |\n\t\t<primitive: return host.writeTextFileSync(_fileName, _aString);>\n\t}",
);
