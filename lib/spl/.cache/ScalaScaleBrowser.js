sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ScalaScaleBrowser",
  "ScalaScaleBrowser",
  ["self", "scalaModenam"],
  function (_self, _scalaModenam) {
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
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _setStatus_2(_browser, "Size/TuningSize/Name");
            return _sizes;
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, function () {
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
                    _select_2(_scalaModenam, function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_size_1(_each), _selectedSize);
                    }),
                    function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _tuningSize_1(_each);
                    },
                  ),
                ),
              ),
              _asString_1,
            );
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, function () {
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
              _select_2(_scalaModenam, function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _equalsSign_2(_size_1(_each), _selectedSize),
                  function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(
                      _tuningSize_1(_each),
                      _selectedTuningSize,
                    );
                  },
                );
              }),
              _description_1,
            );
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _modenam = _detect_2(_scalaModenam, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_description_1(_each), _at_2(_path, 3));
            });
            /* Statements */
            _setStatus_2(_browser, _at_2(_path, 3));
            return _unlines_1([
              _printString_1(_modenam),
              _printString_1(_tuningIndices_1(_modenam)),
            ]);
          }),
        ]);
      },
    );
  },
  "{ :self :scalaModenam | let sizes = collect(sort(copyWithoutIdenticalElements(collect(scalaModenam,size:/1))),asString:/1); let selectedSize = nil; let selectedTuningSize = nil; ColumnBrowser(self, 'Scala Scale Browser', 'text/plain', false, true, [1, 1, 4], nil, nil, { :browser :path | caseOf(size(path),[->({ 0 }, { setStatus(browser,'Size/TuningSize/Name'); sizes }), ->({ 1 }, { setStatus(browser,++('Size = ', at(path, 1))); selectedSize := parseSmallInteger(at(path, 1),10); collect(sort(copyWithoutIdenticalElements(collect(select(scalaModenam, { :each | =(size(each), selectedSize) }), { :each | tuningSize(each) }))),asString:/1) }), ->({ 2 }, { setStatus(browser,stringJoin(['Size = ', at(path, 1), ', ', 'TuningSize = ', at(path, 2)])); selectedTuningSize := parseSmallInteger(at(path, 2),10); collect(select(scalaModenam, { :each | &(=(size(each), selectedSize), { =(tuningSize(each), selectedTuningSize) }) }),description:/1) }), ->({ 3 }, { let modenam = detect(scalaModenam, { :each | =(description(each), at(path, 3)) }); setStatus(browser,at(path, 3)); unlines([printString(modenam), printString(tuningIndices(modenam))]) })]) }) }",
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
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "ScalaScaleArchive"),
      function (_answer) {
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
      },
    );
  },
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'ScalaScaleArchive'), { :answer | addFrame(smallKansas,ScalaScaleBrowser(smallKansas,answer), event) }) }",
);
