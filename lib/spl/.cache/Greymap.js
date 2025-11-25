sl.addType(
  false,
  "Greymap",
  "Greymap",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Greymap",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "asPgm",
  ["self", "maxDepth"],
  sl.annotateFunction(function (_self, _maxDepth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDepth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2);
    let _rowCount = _at_2(__SplVar1, 1);
    let _columnCount = _at_2(__SplVar1, 2);
    let _header = [
      "P2",
      _format_2("% %", [_columnCount, _rowCount]),
      _printString_1(_maxDepth),
    ];
    let _rows = _collect_2(
      _contents_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _unwords_1(
          _collect_2(
            _each,
            sl.annotateFunction(function (_level) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _level";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _betweenAnd_3(_level, 0, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _printString_1(
                    _round_1(_asterisk_2(_level, _maxDepth)),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _error_2(_self, "asPgm: not (0,1) matrix");
                }, []),
              );
            }, ["level"]),
          ),
        );
      }, ["each"]),
    );
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_header, _rows), [""]),
    );
  }, ["self", "maxDepth"]),
  "{ :self :maxDepth |\n\t\tlet [rowCount, columnCount] = self.contents.shape;\n\t\tlet header = [\n\t\t\t'P2',\n\t\t\t'% %'.format([columnCount, rowCount]),\n\t\t\tmaxDepth.printString\n\t\t];\n\t\tlet rows = self.contents.collect { :each |\n\t\t\teach.collect { :level |\n\t\t\t\tlevel.betweenAnd(0, 1).if {\n\t\t\t\t\t(level * maxDepth).round.printString\n\t\t\t\t} {\n\t\t\t\t\tself.error('asPgm: not (0,1) matrix')\n\t\t\t\t}\n\t\t\t}.unwords\n\t\t};\n\t\t(header ++ rows ++ ['']).unlines\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numberOfRows_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.numberOfRows\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pngFileName = "/tmp/graymap.png";
    /* Statements */
    _writePng_2(_self, _pngFileName);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  }, ["self"]),
  "{ :self |\n\t\tlet pngFileName = '/tmp/graymap.png';\n\t\tself.writePng(pngFileName);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numberOfColumns_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.numberOfColumns\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "writePgm",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_3(_system, _fileName, _asPgm_2(_self, 255));
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tsystem.writeTextFile(\n\t\t\tfileName,\n\t\t\tself.asPgm(255)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Greymap",
  "Greymap",
  "writePng",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pgmFileName = "/tmp/graymap.pgm";
    /* Statements */
    _writePgm_2(_self, _pgmFileName);
    return _systemCommand_3(_system, "convert", [
      _pgmFileName,
      "-transparent",
      "white",
      "-strip",
      _fileName,
    ]);
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tlet pgmFileName = '/tmp/graymap.pgm';\n\t\tself.writePgm(pgmFileName);\n\t\tsystem.systemCommand('convert', [pgmFileName, '-transparent', 'white', '-strip', fileName])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Greymap",
  "asGreymap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Greymap_1(_rescale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rescale.Greymap\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Greymap",
  "Greymap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newGreymap_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Greymap: not matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tnewGreymap().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Greymap: not matrix')\n\t\t}\n\t}",
);
