sl.addType(
  false,
  "Bitmap",
  "Bitmap",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Bitmap",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
  "asPbm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL320 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2);
    let _rowCount = _at_2(__SPL320, 1);
    let _columnCount = _at_2(__SPL320, 2);
    let _header = ["P1", _format_2("% %", [_columnCount, _rowCount])];
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
            sl.annotateFunction(function (_item) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _item";
                throw new Error(errorMessage);
              } /* Statements */
              return _printString_1(_asBit_1(_item));
            }, ["item"]),
          ),
        );
      }, ["each"]),
    );
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_header, _rows), [""]),
    );
  }, ["self"]),
  "{ :self | let __SPL320 = assertIsOfSize(shape(contents(self)), 2); let rowCount = at(__SPL320, 1); let columnCount = at(__SPL320, 2); let header = ['P1', format('% %',[columnCount, rowCount])]; let rows = collect(contents(self), { :each | unwords(collect(each, { :item | printString(asBit(item)) })) }); unlines((++(++(header, rows), ['']))) }",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
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
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
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
  "Bitmap",
  "Bitmap",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pngFileName = "/tmp/bitmap.png";
    /* Statements */
    _writePng_2(_self, _pngFileName);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  }, ["self"]),
  "{ :self | let pngFileName = '/tmp/bitmap.png'; writePng(self,pngFileName); systemCommand(system,'chromium', [pngFileName]) }",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_first_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | size(first(contents(self))) }",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
  "writePbm",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _asPbm_1(_self));
  }, ["self", "fileName"]),
  "{ :self :fileName | writeTextFile(fileName,asPbm(self)) }",
);

sl.addMethodToExistingType(
  "Bitmap",
  "Bitmap",
  "writePng",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pbmFileName = "/tmp/bitmap.pbm";
    /* Statements */
    _writeTextFile_2(_pbmFileName, _asPbm_1(_self));
    return _systemCommand_3(_system, "convert", [
      _pbmFileName,
      "-transparent",
      "white",
      "-strip",
      _fileName,
    ]);
  }, ["self", "fileName"]),
  "{ :self :fileName | let pbmFileName = '/tmp/bitmap.pbm'; writeTextFile(pbmFileName,asPbm(self)); systemCommand(system,'convert', [pbmFileName, '-transparent', 'white', '-strip', fileName]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Bitmap",
  "Bitmap",
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
        return _initializeSlots_2(_newBitmap_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Bitmap: not matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { initializeSlots(newBitmap(),self) }, { error(self,'Bitmap: not matrix') }) }",
);
