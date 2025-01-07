sl.addType(
  false,
  "Graymap",
  "Graymap",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Graymap",
);

sl.addMethod(
  "Graymap",
  "Graymap",
  "asPgm",
  ["self", "maxDepth"],
  function (_self, _maxDepth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDepth";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym90 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2),
      _rowCount = _at_2(__genSym90, 1),
      _columnCount = _at_2(__genSym90, 2);
    let _header = [
      "P2",
      _format_2("% %", [_columnCount, _rowCount]),
      _printString_1(_maxDepth),
    ];
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
          return _if_3(_betweenAnd_3(_item, 0, 1), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _printString_1(_rounded_1(_asterisk_2(_item, _maxDepth)));
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "asPgm: not (0,1) matrix");
          });
        }),
        " ",
      );
    });
    /* Statements */
    return _unlines_1(
      _plusSignPlusSign_2(_plusSignPlusSign_2(_header, _rows), [""]),
    );
  },
  "{ :self :maxDepth |\n\t\tlet [rowCount, columnCount] = self.contents.shape;\n\t\tlet header = [\n\t\t\t'P2',\n\t\t\t'% %'.format([columnCount, rowCount]),\n\t\t\tmaxDepth.printString\n\t\t];\n\t\tlet rows = self.contents.collect { :each |\n\t\t\teach.collect { :item |\n\t\t\t\titem.betweenAnd(0, 1).if {\n\t\t\t\t\t(item * maxDepth).rounded.printString\n\t\t\t\t} {\n\t\t\t\t\tself.error('asPgm: not (0,1) matrix')\n\t\t\t\t}\n\t\t\t}.join(' ')\n\t\t};\n\t\t(header ++ rows ++ ['']).unlines\n\t}",
);

sl.addMethod(
  "Graymap",
  "Graymap",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pgmFileName = "/tmp/graymap.pgm";
    let _pngFileName = "/tmp/graymap.png";
    let _pgmText = _asPgm_2(_self, 255);
    /* Statements */
    _writeTextFile_2(_pgmFileName, _pgmText);
    _systemCommand_3(_system, "convert", [
      _pgmFileName,
      "-transparent",
      "white",
      _pngFileName,
    ]);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  },
  "{ :self |\n\t\tlet pgmFileName = '/tmp/graymap.pgm';\n\t\tlet pngFileName = '/tmp/graymap.png';\n\t\tlet pgmText = self.asPgm(255);\n\t\tpgmFileName.writeTextFile(pgmText);\n\t\tsystem.systemCommand('convert', [pgmFileName, '-transparent', 'white', pngFileName]);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
);

sl.addMethod(
  "Graymap",
  "Graymap",
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
  "Graymap",
  "Graymap",
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
  "Graymap",
  "Graymap",
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
      return _initializeSlots_2(_newGraymap_0(), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Graymap: not matrix");
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tnewGraymap().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Graymap: not matrix')\n\t\t}\n\t}",
);
