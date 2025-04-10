sl.addType(
  false,
  "Graymap",
  "Graymap",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Graymap",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
  "asPgm",
  ["self", "maxDepth"],
  sl.annotateFunction(function (_self, _maxDepth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDepth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL201 = _assertIsOfSize_2(_shape_1(_contents_1(_self)), 2);
    let _rowCount = _at_2(__SPL201, 1);
    let _columnCount = _at_2(__SPL201, 2);
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
                    _rounded_1(_asterisk_2(_level, _maxDepth)),
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
  "{ :self :maxDepth | let __SPL201 = assertIsOfSize(shape(contents(self)), 2); let rowCount = at(__SPL201, 1); let columnCount = at(__SPL201, 2); let header = ['P2', format('% %',[columnCount, rowCount]), printString(maxDepth)]; let rows = collect(contents(self), { :each | unwords(collect(each, { :level | if(betweenAnd(level,0, 1), { printString(rounded((*(level, maxDepth)))) }, { error(self,'asPgm: not (0,1) matrix') }) })) }); unlines((++(++(header, rows), ['']))) }",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
  "draw",
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
  "{ :self | let pngFileName = '/tmp/graymap.png'; writePng(self,pngFileName); systemCommand(system,'chromium', [pngFileName]) }",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
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
  "{ :self | numberOfRows(contents(self)) }",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
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
  "{ :self | numberOfColumns(contents(self)) }",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
  "writePgm",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _asPgm_2(_self, 255));
  }, ["self", "fileName"]),
  "{ :self :fileName | writeTextFile(fileName,asPgm(self,255)) }",
);

sl.addMethodToExistingType(
  "Graymap",
  "Graymap",
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
  "{ :self :fileName | let pgmFileName = '/tmp/graymap.pgm'; writePgm(self,pgmFileName); systemCommand(system,'convert', [pgmFileName, '-transparent', 'white', '-strip', fileName]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graymap",
  "asGraymap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Graymap_1(_rescale_1(_self));
  }, ["self"]),
  "{ :self | Graymap(rescale(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graymap",
  "Graymap",
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
        return _initializeSlots_2(_newGraymap_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Graymap: not matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { initializeSlots(newGraymap(),self) }, { error(self,'Graymap: not matrix') }) }",
);
