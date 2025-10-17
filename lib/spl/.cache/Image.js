sl.addType(
  false,
  "Image",
  "Image",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Image",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "asPpm",
  ["self", "maxDepth"],
  sl.annotateFunction(function (_self, _maxDepth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDepth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 3);
    let _rowCount = _at_2(__SplVar1, 1);
    let _columnCount = _at_2(__SplVar1, 2);
    let _pixelCount = _at_2(__SplVar1, 3);
    let _header = [
      "P3",
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
            sl.annotateFunction(function (_pixel) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _pixel";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _isValidRgb_1(_pixel),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _unwords_1(
                    _collect_2(
                      _round_1(_asterisk_2(_first_2(_pixel, 3), _maxDepth)),
                      _printString_1,
                    ),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2("% % %", [_maxDepth, _maxDepth, _maxDepth]);
                }, []),
              );
            }, ["pixel"]),
          ),
        );
      }, ["each"]),
    );
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_header, _rows), [""]),
    );
  }, ["self", "maxDepth"]),
  "{ :self :maxDepth |\n\t\tlet [rowCount, columnCount, pixelCount] = self.contents.shape;\n\t\tlet header = [\n\t\t\t'P3',\n\t\t\t'% %'.format([columnCount, rowCount]),\n\t\t\tmaxDepth.printString\n\t\t];\n\t\tlet rows = self.contents.collect { :each |\n\t\t\teach.collect { :pixel |\n\t\t\t\tpixel.isValidRgb.if {\n\t\t\t\t\t(pixel.first(3) * maxDepth).round.collect(printString:/1).unwords\n\t\t\t\t} {\n\t\t\t\t\t'% % %'.format([maxDepth, maxDepth, maxDepth])\n\t\t\t\t}\n\t\t\t}.unwords\n\t\t};\n\t\t(header ++ rows ++ ['']).unlines\n\t}",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
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
  "Image",
  "Image",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pngFileName = "/tmp/image.png";
    /* Statements */
    _writePng_2(_self, _pngFileName);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  }, ["self"]),
  "{ :self |\n\t\tlet pngFileName = '/tmp/image.png';\n\t\tself.writePng(pngFileName);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.anyOne.size\n\t}",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "writePpm",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_3(_system, _fileName, _asPpm_2(_self, 255));
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tsystem.writeTextFile(\n\t\t\tfileName,\n\t\t\tself.asPpm(255)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "writePng",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ppmFileName = "/tmp/image.ppm";
    /* Statements */
    _writePpm_2(_self, _ppmFileName);
    return _systemCommand_3(_system, "convert", [
      _ppmFileName,
      "-transparent",
      "white",
      "-strip",
      _fileName,
    ]);
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tlet ppmFileName = '/tmp/image.ppm';\n\t\tself.writePpm(ppmFileName);\n\t\tsystem.systemCommand('convert', [ppmFileName, '-transparent', 'white', '-strip', fileName])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Image",
  "Image",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isArray_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newImage_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Image: not array");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isArray.if {\n\t\t\tnewImage().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Image: not array')\n\t\t}\n\t}",
);
