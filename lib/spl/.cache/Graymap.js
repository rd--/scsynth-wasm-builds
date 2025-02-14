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
    let __genSym119 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2),
      _rowCount = _at_2(__genSym119, 1),
      _columnCount = _at_2(__genSym119, 2);
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
        _collect_2(_each, function (_level) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _level";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_betweenAnd_3(_level, 0, 1), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _printString_1(_rounded_1(_asterisk_2(_level, _maxDepth)));
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
  "{ :self :maxDepth |\n\t\tlet [rowCount, columnCount] = self.contents.shape;\n\t\tlet header = [\n\t\t\t'P2',\n\t\t\t'% %'.format([columnCount, rowCount]),\n\t\t\tmaxDepth.printString\n\t\t];\n\t\tlet rows = self.contents.collect { :each |\n\t\t\teach.collect { :level |\n\t\t\t\tlevel.betweenAnd(0, 1).if {\n\t\t\t\t\t(level * maxDepth).rounded.printString\n\t\t\t\t} {\n\t\t\t\t\tself.error('asPgm: not (0,1) matrix')\n\t\t\t\t}\n\t\t\t}.join(' ')\n\t\t};\n\t\t(header ++ rows ++ ['']).unlines\n\t}",
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
    let _pngFileName = "/tmp/graymap.png";
    /* Statements */
    _writePng_2(_self, _pngFileName);
    return _systemCommand_3(_system, "chromium", [_pngFileName]);
  },
  "{ :self |\n\t\tlet pngFileName = '/tmp/graymap.png';\n\t\tself.writePng(pngFileName);\n\t\tsystem.systemCommand('chromium', [pngFileName])\n\t}",
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
  "Graymap",
  "Graymap",
  "writePgm",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _asPgm_2(_self, 255));
  },
  "{ :self :fileName |\n\t\tfileName.writeTextFile(self.asPgm(255))\n\t}",
);

sl.addMethod(
  "Graymap",
  "Graymap",
  "writePng",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
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
  },
  "{ :self :fileName |\n\t\tlet pgmFileName = '/tmp/graymap.pgm';\n\t\tself.writePgm(pgmFileName);\n\t\tsystem.systemCommand('convert', [pgmFileName, '-transparent', 'white', '-strip', fileName])\n\t}",
);

sl.addMethod(
  "List",
  "Graymap",
  "asGraymap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Graymap_1(_rescale_1(_self));
  },
  "{ :self |\n\t\tself.rescale.Graymap\n\t}",
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
