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
    let __SPL161 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 3);
    let _rowCount = _at_2(__SPL161, 1);
    let _columnCount = _at_2(__SPL161, 2);
    let _pixelCount = _at_2(__SPL161, 3);
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
                      _rounded_1(_asterisk_2(_first_2(_pixel, 3), _maxDepth)),
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
  "{ :self :maxDepth | let __SPL161 = assertIsOfSize(shape(contents(self)), 3); let rowCount = at(__SPL161, 1); let columnCount = at(__SPL161, 2); let pixelCount = at(__SPL161, 3); let header = ['P3', format('% %',[columnCount, rowCount]), printString(maxDepth)]; let rows = collect(contents(self), { :each | unwords(collect(each, { :pixel | if(isValidRgb(pixel), { unwords(collect(rounded((*(first(pixel,3), maxDepth))),printString:/1)) }, { format('% % %',[maxDepth, maxDepth, maxDepth]) }) })) }); unlines((++(++(header, rows), ['']))) }",
);

sl.addMethodToExistingType(
  "Image",
  "Image",
  "draw",
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
  "{ :self | let pngFileName = '/tmp/image.png'; writePng(self,pngFileName); systemCommand(system,'chromium', [pngFileName]) }",
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
  "{ :self | size(contents(self)) }",
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
  "{ :self | size(anyOne(contents(self))) }",
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
    return _writeTextFile_2(_fileName, _asPpm_2(_self, 255));
  }, ["self", "fileName"]),
  "{ :self :fileName | writeTextFile(fileName,asPpm(self,255)) }",
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
  "{ :self :fileName | let ppmFileName = '/tmp/image.ppm'; writePpm(self,ppmFileName); systemCommand(system,'convert', [ppmFileName, '-transparent', 'white', '-strip', fileName]) }",
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
  "{ :self | if(isArray(self), { initializeSlots(newImage(),self) }, { error(self,'Image: not array') }) }",
);
