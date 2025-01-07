sl.addType(
  false,
  "Bitmap",
  "Bitmap",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Bitmap",
);

sl.addMethod(
  "Bitmap",
  "Bitmap",
  "asPbm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym83 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2),
      _rowCount = _at_2(__genSym83, 1),
      _columnCount = _at_2(__genSym83, 2);
    let _header = ["P1", _format_2("% %", [_columnCount, _rowCount])];
    let _rows = _collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _join_2(
        _collect_2(_each, function (_item) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _item";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _printString_1(_asBit_1(_item));
        }),
        " ",
      );
    });
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_header, _rows), [""]),
    );
  },
  "{ :self |\n\t\tlet [rowCount, columnCount] = self.contents.shape;\n\t\tlet header = [\n\t\t\t'P1',\n\t\t\t'% %'.format([columnCount, rowCount])\n\t\t];\n\t\tlet rows = self.contents.collect { :each |\n\t\t\teach.collect { :item |\n\t\t\t\titem.asBit.printString\n\t\t\t}.join(' ')\n\t\t};\n\t\t(header ++ rows ++ ['']).unlines\n\t}",
);

sl.addMethod(
  "Bitmap",
  "Bitmap",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pbmFileName = "/tmp/bitmap.pbm";
    let _pngFileName = "/tmp/bitmap.png";
    let _pbmText = _asPbm_1(_self);
    /* Statements */
    _writeTextFile_2(_pbmFileName, _pbmText);
    _systemCommand_3(_system, "convert", [
      _pbmFileName,
      "-transparent",
      "white",
      _pngFileName,
    ]);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  },
  "{ :self |\n\t\tlet pbmFileName = '/tmp/bitmap.pbm';\n\t\tlet pngFileName = '/tmp/bitmap.png';\n\t\tlet pbmText = self.asPbm;\n\t\tpbmFileName.writeTextFile(pbmText);\n\t\tsystem.systemCommand('convert', [pbmFileName, '-transparent', 'white', pngFileName]);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
);

sl.addMethod(
  "Bitmap",
  "Bitmap",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "Bitmap",
  "Bitmap",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_first_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.first.size\n\t}",
);

sl.addMethod(
  "List",
  "Bitmap",
  "Bitmap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newBitmap_0(), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Bitmap: not matrix");
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tnewBitmap().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Bitmap: not matrix')\n\t\t}\n\t}",
);
