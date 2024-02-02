sl.addMethod(
  "SmallKansas",
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  ["self", "scalaModenam"],
  function (_self, _scalaModenam) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scalaModenam";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _sizes = _collect_2(
      _sort_1(_copyWithoutDuplicates_1(_collect_2(_scalaModenam, _size_1))),
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
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _minusGreaterThan_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "Size/TuningSize/Name");
            return _sizes;
          }),
          _minusGreaterThan_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, _plusPlus_2("Size = ", _at_2(_path, 1)));
            _selectedSize = _parseInteger_2(_at_2(_path, 1), 10);
            return _collect_2(
              _sort_1(
                _copyWithoutDuplicates_1(
                  _collect_2(
                    _select_2(_scalaModenam, function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        console.error(errorMessage);
                        throw Error(errorMessage);
                      }
                      /* Statements */
                      return _equals_2(_size_1(_each), _selectedSize);
                    }),
                    function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        console.error(errorMessage);
                        throw Error(errorMessage);
                      }
                      /* Statements */
                      return _tuningSize_1(_each);
                    },
                  ),
                ),
              ),
              _asString_1,
            );
          }),
          _minusGreaterThan_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(
              _browser,
              _join_1([
                "Size = ",
                _at_2(_path, 1),
                ", TuningSize = ",
                _at_2(_path, 2),
              ]),
            );
            _selectedTuningSize = _parseInteger_2(_at_2(_path, 2), 10);
            return _collect_2(
              _select_2(_scalaModenam, function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _and_2(
                  _equals_2(_size_1(_each), _selectedSize),
                  function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      console.error(errorMessage);
                      throw Error(errorMessage);
                    }
                    /* Statements */
                    return _equals_2(_tuningSize_1(_each), _selectedTuningSize);
                  },
                );
              }),
              _description_1,
            );
          }),
          _minusGreaterThan_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let _modenam;
            /* Statements */
            _setStatus_2(_browser, _at_2(_path, 3));
            _modenam = _detect_2(_scalaModenam, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _equals_2(_description_1(_each), _at_2(_path, 3));
            });
            return _unlines_1([
              _printString_1(_modenam),
              _printString_1(_tuningIndices_1(_modenam)),
            ]);
          }),
        ]);
      },
    );
  },
  "{ :self :scalaModenam |\n\t\tlet sizes = scalaModenam.collect(size:/1).copyWithoutDuplicates.sort.collect(asString:/1);\n\t\tlet selectedSize = nil;\n\t\tlet selectedTuningSize = nil;\n\t\tself.ColumnBrowser('Scala Scale Browser', 'text/plain', false, true, [1, 1, 4], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('Size/TuningSize/Name');\n\t\t\t\t\tsizes\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('Size = ' ++ path[1]);\n\t\t\t\t\tselectedSize := path[1].parseInteger(10);\n\t\t\t\t\tscalaModenam.select { :each |\n\t\t\t\t\t\teach.size = selectedSize\n\t\t\t\t\t}.collect { :each |\n\t\t\t\t\t\teach.tuningSize\n\t\t\t\t\t}.copyWithoutDuplicates.sort.collect(asString:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(['Size = ', path[1], ', TuningSize = ', path[2]].join);\n\t\t\t\t\tselectedTuningSize := path[2].parseInteger(10);\n\t\t\t\t\tscalaModenam.select { :each |\n\t\t\t\t\t\teach.size = selectedSize & {\n\t\t\t\t\t\t\teach.tuningSize = selectedTuningSize\n\t\t\t\t\t\t}\n\t\t\t\t\t}.collect(description:/1)\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\t| modenam |\n\t\t\t\t\tbrowser.setStatus(path[3]);\n\t\t\t\t\tmodenam := scalaModenam.detect { :each |\n\t\t\t\t\t\teach.description = path[3]\n\t\t\t\t\t};\n\t\t\t\t\t[modenam.printString, modenam.tuningIndices.printString].unlines\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "ScalaScaleBrowser",
  "scalaModenam",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "scalaModenam",
        "https://rohandrape.net/sw/hmt/data/json/scala-modenam.json",
        "application/json",
        function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_libraryItem, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let __genSym22 = _assertIsOfSize_2(_each, 3),
              _zeroIndexedStartIndex = _at_2(__genSym22, 1),
              _intervals = _at_2(__genSym22, 2),
              _description = _at_2(__genSym22, 3);
            /* Statements */
            return _Scale_3(
              _plus_2(_zeroIndexedStartIndex, 1),
              _intervals,
              _description,
            );
          });
        },
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'scalaModenam',\n\t\t\t\t'https://rohandrape.net/sw/hmt/data/json/scala-modenam.json',\n\t\t\t\t'application/json',\n\t\t\t\t{ :libraryItem |\n\t\t\t\t\tlibraryItem.collect { :each |\n\t\t\t\t\t\tlet [zeroIndexedStartIndex, intervals, description] = each;\n\t\t\t\t\t\tScale(zeroIndexedStartIndex + 1, intervals, description)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\t)\n\t}",
);

sl.addType(
  false,
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScalaScaleBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScalaScaleBrowser",
);

sl.addMethod(
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_scalaModenam_1(_smallKansas), function (_scalaModenam) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _scalaModenam";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _ScalaScaleBrowser_2(_smallKansas, _scalaModenam),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.scalaModenam.then { :scalaModenam |\n\t\t\tsmallKansas.addFrame(smallKansas.ScalaScaleBrowser(scalaModenam), event)\n\t\t}\n\t}",
);
