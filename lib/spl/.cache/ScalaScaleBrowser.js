sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  ["self", "scalaModenam"],
  sl.annotateFunction(function (_self, _scalaModenam) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scalaModenam";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sizes = _collect_2(
      _sort_1(
        _copyWithoutIdenticalElements_1(_collect_2(_scalaModenam, _size_1)),
      ),
      _asString_1,
    );
    let _selectedSize = null;
    let _selectedTuningSize = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Scala Scale Browser",
      "text/plain",
      false,
      true,
      [1, 1, 4],
      null,
      null,
      sl.annotateFunction(function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(
            0,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(_browser, "Size/TuningSize/Name");
              return _sizes;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            1,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(
                _browser,
                _plusSignPlusSign_2("Size = ", _at_2(_path, 1)),
              );
              _selectedSize = _parseSmallInteger_2(_at_2(_path, 1), 10);
              return _collect_2(
                _sort_1(
                  _copyWithoutIdenticalElements_1(
                    _collect_2(
                      _select_2(
                        _scalaModenam,
                        sl.annotateFunction(function (_each) {
                          /* ArityCheck */
                          if (arguments.length !== 1) {
                            const errorMessage = "Arity: expected 1, _each";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _equalsSign_2(_size_1(_each), _selectedSize);
                        }, ["each"]),
                      ),
                      sl.annotateFunction(function (_each) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _each";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _tuningSize_1(_each);
                      }, ["each"]),
                    ),
                  ),
                ),
                _asString_1,
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _setStatus_2(
                _browser,
                _stringJoin_1([
                  "Size = ",
                  _at_2(_path, 1),
                  ", ",
                  "TuningSize = ",
                  _at_2(_path, 2),
                ]),
              );
              _selectedTuningSize = _parseSmallInteger_2(_at_2(_path, 2), 10);
              return _collect_2(
                _select_2(
                  _scalaModenam,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ampersand_2(
                      _equalsSign_2(_size_1(_each), _selectedSize),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _equalsSign_2(
                          _tuningSize_1(_each),
                          _selectedTuningSize,
                        );
                      }, []),
                    );
                  }, ["each"]),
                ),
                _description_1,
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            3,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _modenam = _detect_2(
                _scalaModenam,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_description_1(_each), _at_2(_path, 3));
                }, ["each"]),
              );
              /* Statements */
              _setStatus_2(_browser, _at_2(_path, 3));
              return _unlines_1([
                _printString_1(_modenam),
                _printString_1(_tuningIndices_1(_modenam)),
              ]);
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self", "scalaModenam"]),
  "{ :self :scalaModenam |\n\t\tlet sizes = scalaModenam.collect(size:/1).copyWithoutIdenticalElements.sort.collect(asString:/1);\n\t\tlet selectedSize = nil;\n\t\tlet selectedTuningSize = nil;\n\t\tself.ColumnBrowser('Scala Scale Browser', 'text/plain', false, true, [1, 1, 4], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('Size/TuningSize/Name');\n\t\t\t\t\tsizes\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('Size = ' ++ path[1]);\n\t\t\t\t\tselectedSize := path[1].parseSmallInteger(10);\n\t\t\t\t\tscalaModenam.select { :each |\n\t\t\t\t\t\teach.size = selectedSize\n\t\t\t\t\t}.collect { :each |\n\t\t\t\t\t\teach.tuningSize\n\t\t\t\t\t}.copyWithoutIdenticalElements.sort.collect(asString:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t'Size = ', path[1], ', ',\n\t\t\t\t\t\t\t'TuningSize = ', path[2]\n\t\t\t\t\t\t].stringJoin\n\t\t\t\t\t);\n\t\t\t\t\tselectedTuningSize := path[2].parseSmallInteger(10);\n\t\t\t\t\tscalaModenam.select { :each |\n\t\t\t\t\t\teach.size = selectedSize & {\n\t\t\t\t\t\t\teach.tuningSize = selectedTuningSize\n\t\t\t\t\t\t}\n\t\t\t\t\t}.collect(description:/1)\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tlet modenam = scalaModenam.detect { :each |\n\t\t\t\t\t\teach.description = path[3]\n\t\t\t\t\t};\n\t\t\t\t\tbrowser.setStatus(path[3]);\n\t\t\t\t\t[\n\t\t\t\t\t\tmodenam.printString,\n\t\t\t\t\t\tmodenam.tuningIndices.printString\n\t\t\t\t\t].unlines\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScalaScaleBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "ScalaScaleBrowser",
);

sl.addMethodToExistingType(
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "ScalaScaleArchive"),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFrame_3(
          _smallKansas,
          _ScalaScaleBrowser_2(_smallKansas, _answer),
          _event,
        );
      }, ["answer"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'ScalaScaleArchive'\n\t\t).then { :answer |\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.ScalaScaleBrowser(answer),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
