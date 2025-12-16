sl.addType(
  false,
  "Bitmap",
  "Bitmap",
  ["Object"],
  ["contents", "scale"],
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
    let _contents = _contents_1(_self);
    let _scale = _scale_1(_self);
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_contents), 2);
    let _rowCount = _at_2(__SplVar1, 1);
    let _columnCount = _at_2(__SplVar1, 2);
    let _header = [
      "P1",
      _format_2("% %", [
        _asterisk_2(_columnCount, _scale),
        _asterisk_2(_rowCount, _scale),
      ]),
    ];
    let _rows = _collect_2(
      _contents,
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
              return _unwords_1(
                _List_2(_scale, _printString_1(_asBit_1(_item))),
              );
            }, ["item"]),
          ),
        );
      }, ["each"]),
    );
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_header, _numberSign_2(_scale, _rows)),
        [""],
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet contents = self.contents;\n\t\tlet scale = self.scale;\n\t\tlet [rowCount, columnCount] = contents.shape;\n\t\tlet header = [\n\t\t\t'P1',\n\t\t\t'% %'.format([columnCount * scale, rowCount * scale])\n\t\t];\n\t\tlet rows = contents.collect { :each |\n\t\t\teach.collect { :item |\n\t\t\t\tList(scale, item.asBit.printString).unwords\n\t\t\t}.unwords\n\t\t};\n\t\t(header ++ (scale # rows) ++ ['']).unlines\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.contents.size\n\t}",
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
  "{ :self |\n\t\tlet pngFileName = '/tmp/bitmap.png';\n\t\tself.writePng(pngFileName);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
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
  "{ :self |\n\t\tself.contents.first.size\n\t}",
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
    return _writeTextFile_3(_system, _fileName, _asPbm_1(_self));
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tsystem.writeTextFile(\n\t\t\tfileName,\n\t\t\tself.asPbm\n\t\t)\n\t}",
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
    _writeTextFile_3(_system, _pbmFileName, _asPbm_1(_self));
    return _systemCommand_3(_system, "convert", [
      _pbmFileName,
      "-transparent",
      "white",
      "-strip",
      _fileName,
    ]);
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tlet pbmFileName = '/tmp/bitmap.pbm';\n\t\tsystem.writeTextFile(\n\t\t\tpbmFileName,\n\t\t\tself.asPbm\n\t\t);\n\t\tsystem.systemCommand(\n\t\t\t'convert',\n\t\t\t[\n\t\t\t\tpbmFileName,\n\t\t\t\t'-transparent',\n\t\t\t\t'white',\n\t\t\t\t'-strip',\n\t\t\t\tfileName\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Bitmap",
  "Bitmap",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
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
        return _initializeSlots_3(_newBitmap_0(), _self, _scale);
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
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tself.isMatrix.if {\n\t\t\tnewBitmap().initializeSlots(self, scale)\n\t\t} {\n\t\t\tself.error('Bitmap: not matrix')\n\t\t}\n\t}",
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
    return _Bitmap_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tBitmap(self, 1)\n\t}",
);
