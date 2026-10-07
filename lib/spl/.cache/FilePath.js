sl.addType(
  false,
  "FilePath",
  "FilePath",
  ["Object", "Store", "Equal"],
  ["filePathString"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FilePath",
);

sl.copyTraitMethodsToType(
  "Store",
  "FilePath",
);

sl.copyTraitMethodsToType(
  "Equal",
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
    let _path = _filePathString_1(_self);
    return _if_3(
      _pathIsAbsolute_1(_path),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _path;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "absolutePathString");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet path = self.filePathString;\n\t\tpath.pathIsAbsolute.if {\n\t\t\tpath\n\t\t} {\n\t\t\tself.error('absolutePathString')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "basename",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pathBasename_1(_filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.filePathString.pathBasename\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "directory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pathDirectory_1(_filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.filePathString.pathDirectory\n\t}",
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
    return _directoryExists_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.directoryExists(self.filePathString)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "extension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pathExtension_1(_filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.filePathString.pathExtension\n\t}",
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
    return _fileExists_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.fileExists(self.filePathString)\n\t}",
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
    return _fileInformation_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.fileInformation(self.filePathString)\n\t}",
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
    return _makeDirectory_4(
      _system,
      _filePathString_1(_self),
      _recursive,
      _mode,
    );
  }, ["self", "recursive", "mode"]),
  "{ :self :recursive :mode |\n\t\tsystem.makeDirectory(self.filePathString, recursive, mode)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "modificationTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _modificationTime_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.modificationTime(self.filePathString)\n\t}",
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
    return _readBinaryFile_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.readBinaryFile(self.filePathString)\n\t}",
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
      _readDirectoryFileNames_2(_system, _filePathString_1(_self)),
      _FilePath_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.readDirectoryFileNames(self.filePathString).collect(FilePath/1)\n\t}",
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
    return _readTextFile_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.readTextFile(self.filePathString)\n\t}",
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
    return _removeDirectory_3(_system, _filePathString_1(_self), _recursive);
  }, ["self", "recursive"]),
  "{ :self :recursive |\n\t\tsystem.removeDirectory(self.filePathString, recursive)\n\t}",
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
    return _removeFile_2(_system, _filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.removeFile(self.filePathString)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "replaceExtension",
  ["self", "existing", "replacement"],
  sl.annotateFunction(function (_self, _existing, _replacement) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _existing, _replacement";
      throw new Error(errorMessage);
    } /* Statements */
    return _FilePath_1(
      _stringReplace_2(
        _filePathString_1(_self),
        _hyphenMinusGreaterThanSign_2(_existing, _replacement),
      ),
    );
  }, ["self", "existing", "replacement"]),
  "{ :self :existing :replacement |\n\t\tFilePath(\n\t\t\tself.filePathString.stringReplace(\n\t\t\t\texisting -> replacement\n\t\t\t)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "stem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pathStem_1(_filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.filePathString.pathStem\n\t}",
);

sl.addMethodToExistingType(
  "FilePath",
  "FilePath",
  "Url",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fileUrl_1(_filePathString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.filePathString.fileUrl\n\t}",
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
    return _writeBinaryFile_3(_system, _filePathString_1(_self), _data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\tsystem.writeBinaryFile(self.filePathString, data)\n\t}",
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
    return _writeTextFile_3(_system, _filePathString_1(_self), _data);
  }, ["self", "data"]),
  "{ :self :data |\n\t\tsystem.writeTextFile(self.filePathString, data)\n\t}",
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
  "{ :self |\n\t\tsystem.readTextFileList(\n\t\t\tself.collect(absolutePathString/1)\n\t\t)\n\t}",
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
  "pathStem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.pathStem(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sc.pathStem(_self);>\n\t}",
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
