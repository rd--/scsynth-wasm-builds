sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "htmlView",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ratios = _asRatios_1(_self);
    let _primesVector = _tuningLatticeDerivedPrimesVector_2(_self, [
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
    ]);
    let _div = _createElement_1("div");
    /* Statements */
    _appendChildren_2(_div, [
      _asHtmlTable_1([
        ["Size", _asString_1(_size_1(_self))],
        ["Limit", _asString_1(_primeLimit_1(_self))],
        ["Description", _description_1(_self)],
        ["Octave", _asString_1(_octave_1(_self))],
        ["Primes", _asString_1(_tuningLatticePrimes_2(_self, false))],
      ]),
      _ifNil_3(
        _primesVector,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _TextParagraph_1("No drawing");
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _tuningLatticeDrawing_3(
            _self,
            _primesVector,
            _gradyTuningLatticeCoordinates_1(1),
          );
        }, []),
      ),
      _asHtmlTable_1(
        _transpose_1([
          _asList_1(_upOrDownTo_2(1, _size_1(_self))),
          _ratios,
          _collect_2(
            _ratios,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifNil_3(
                _primesVector,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return "*";
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _tuningLatticeVectorString_2(_each, _primesVector);
                }, []),
              );
            }, ["each"]),
          ),
          _round_1(_asCents_1(_self)),
          _asIntegers_1(_self),
        ]),
      ),
    ]);
    return _div;
  }, ["self"]),
  "{ :self | let ratios = asRatios(self); let primesVector = tuningLatticeDerivedPrimesVector(self,[3, 5, 7, 11, 13, 17, 19, 23]); let div = createElement('div'); appendChildren(div,[asHtmlTable([['Size', asString(size(self))], ['Limit', asString(primeLimit(self))], ['Description', description(self)], ['Octave', asString(octave(self))], ['Primes', asString(tuningLatticePrimes(self,false))]]), ifNil(primesVector, { TextParagraph('No drawing') }, { tuningLatticeDrawing(self,primesVector, gradyTuningLatticeCoordinates(1)) }), asHtmlTable(transpose([asList(upOrDownTo(1, size(self))), ratios, collect(ratios, { :each | ifNil(primesVector, { '*' }, { tuningLatticeVectorString(each,primesVector) }) }), round(asCents(self)), asIntegers(self)]))]); div }",
);

sl.extendTypeOrTraitWithMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "tuningLatticeDrawing",
  ["self", "primes", "unitVector"],
  sl.annotateFunction(function (_self, _primes, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _primes, _unitVector";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSvgElement_3(
      _tuningLatticeGraph_3(_self, _primes, _unitVector),
      1,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_each, 80);
      }, ["each"]),
    );
  }, ["self", "primes", "unitVector"]),
  "{ :self :primes :unitVector | asSvgElement(tuningLatticeGraph(self,primes, unitVector),1, { :each | *(each, 80) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallKansas",
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  ["self", "jiTunings"],
  sl.annotateFunction(function (_self, _jiTunings) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _jiTunings";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sizes = _collect_2(
      _sort_1(
        _copyWithoutIdenticalElements_1(
          _values_1(_collect_2(_jiTunings, _size_1)),
        ),
      ),
      _asString_1,
    );
    let _selectedSize = null;
    let _selectedLimit = null;
    /* Statements */
    return _ColumnBrowser_9(
      _self,
      "Scala Ji Tuning Browser",
      "text/html",
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
              _setStatus_2(_browser, "Size/Limit/Name");
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
                    _values_1(
                      _collect_2(
                        _select_2(
                          _jiTunings,
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
                          return _primeLimit_1(_each);
                        }, ["each"]),
                      ),
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
                  "Limit = ",
                  _at_2(_path, 2),
                ]),
              );
              _selectedLimit = _parseSmallInteger_2(_at_2(_path, 2), 10);
              return _indices_1(
                _select_2(
                  _jiTunings,
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
                          _primeLimit_1(_each),
                          _selectedLimit,
                        );
                      }, []),
                    );
                  }, ["each"]),
                ),
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
              let _jiTuning = _at_2(_jiTunings, _at_2(_path, 3));
              /* Statements */
              _setStatus_2(_browser, _description_1(_jiTuning));
              return _outerHtml_1(_htmlView_1(_jiTuning));
            }, []),
          ),
        ]);
      }, ["browser", "path"]),
    );
  }, ["self", "jiTunings"]),
  "{ :self :jiTunings | let sizes = collect(sort(copyWithoutIdenticalElements(values(collect(jiTunings,size:/1)))),asString:/1); let selectedSize = nil; let selectedLimit = nil; ColumnBrowser(self, 'Scala Ji Tuning Browser', 'text/html', false, true, [1, 1, 4], nil, nil, { :browser :path | caseOf(size(path),[->(0, { setStatus(browser,'Size/Limit/Name'); sizes }), ->(1, { setStatus(browser,++('Size = ', at(path, 1))); selectedSize := parseSmallInteger(at(path, 1),10); collect(sort(copyWithoutIdenticalElements(values(collect(select(jiTunings, { :each | =(size(each), selectedSize) }), { :each | primeLimit(each) })))),asString:/1) }), ->(2, { setStatus(browser,stringJoin(['Size = ', at(path, 1), ', ', 'Limit = ', at(path, 2)])); selectedLimit := parseSmallInteger(at(path, 2),10); indices(select(jiTunings, { :each | &(=(size(each), selectedSize), { =(primeLimit(each), selectedLimit) }) })) }), ->(3, { let jiTuning = at(jiTunings, at(path, 3)); setStatus(browser,description(jiTuning)); outerHtml(htmlView(jiTuning)) })]) }) }",
);

sl.addType(
  false,
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScalaJiTuningBrowser",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "ScalaJiTuningBrowser",
);

sl.addMethodToExistingType(
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _awaitLibraryItem_3(
      _system,
      "ScalaTuningArchive",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tuningList = _scalaRationalTuningArchive_1(_system);
        /* Statements */
        return _addFrame_3(
          _smallKansas,
          _ScalaJiTuningBrowser_2(_smallKansas, _tuningList),
          _event,
        );
      }, []),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | awaitLibraryItem(system, 'ScalaTuningArchive', { let tuningList = scalaRationalTuningArchive(system); addFrame(smallKansas,ScalaJiTuningBrowser(smallKansas,tuningList), event) }) }",
);
