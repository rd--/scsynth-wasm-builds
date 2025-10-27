sl.addType(
  false,
  "FilePath",
  "FilePath",
  ["Object", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FilePath",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "FilePath",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "absolutePathString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "asUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFileUrl_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asFileUrl\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "directoryExists",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _directoryExists_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.directoryExists(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "fileExists",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fileExists_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.fileExists(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "fileInformation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fileInformation_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.fileInformation(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "makeDirectory",
  ["self", "recursive", "mode"],
  sl.annotateFunction(function (_self, _recursive, _mode) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _recursive, _mode";
      throw new Error(errorMessage);
    } /* Statements */
    return _makeDirectory_4(_system, _contents_1(_self), _recursive, _mode);
  }, ["self", "recursive", "mode"]),
  "{ :self :recursive :mode |\n\t\tsystem.makeDirectory(self.contents, recursive, mode)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "readBinaryFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readBinaryFile_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.readBinaryFile(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "readDirectoryFileNames",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _readDirectoryFileNames_2(_system, _contents_1(_self)),
      _FilePath_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.readDirectoryFileNames(self.contents).collect(FilePath:/1)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "readTextFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readTextFile_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.readTextFile(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "removeDirectory",
  ["self", "recursive"],
  sl.annotateFunction(function (_self, _recursive) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _recursive";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeDirectory_3(_system, _contents_1(_self), _recursive);
  }, ["self", "recursive"]),
  "{ :self :recursive |\n\t\tsystem.removeDirectory(self.contents, recursive)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "removeFile",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeFile_2(_system, _contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.removeFile(self.contents)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "writeBinaryFile",
  ["self", "data"],
  sl.annotateFunction(function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeBinaryFile_3(_system, _contents_1(_self), _data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\tsystem.writeBinaryFile(self.contents, data)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "writeTextFile",
  ["self", "data"],
  sl.annotateFunction(function (_self, _data) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _data";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_3(_system, _contents_1(_self), _data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\tsystem.writeTextFile(self.contents, data)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FilePath",
  "readTextFileList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readTextFileList_2(
      _system,
      _collect_2(_self, _absolutePathString_1),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.readTextFileList(self.collect(absolutePathString:/1))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "FilePath",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newFilePath_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewFilePath().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathBasename",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathBasename(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathBasename(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathDirectory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathDirectory(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathDirectory(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathExtension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathExtension(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathExtension(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathIsAbsolute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathIsAbsolute(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathIsAbsolute(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "pathNormalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathNormalize(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathNormalize(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "FilePath",
  "splFilePath",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _FilePath_1(_splFileName_2(_system, _self));
  }, ["self"]),
  "{ :self |\n\t\tFilePath(system.splFileName(self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FilePath",
  "pathJoin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathJoin(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathJoin(_self);>\n\t}",
);
