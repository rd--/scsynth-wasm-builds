sl.addMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "htmlView",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ratios = _asRatios_1(_self);
    let _primesVector = _latticeDerivedPrimesVector_2(_self, [
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
        ["Limit", _asString_1(_limit_1(_self))],
        ["Description", _description_1(_self)],
        ["Octave", _asString_1(_octave_1(_self))],
        ["Primes", _asString_1(_latticePrimes_2(_self, false))],
      ]),
      _ifNil_3(_primesVector, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _TextParagraph_1("No drawing");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _latticeDrawing_3(
          _self,
          _primesVector,
          _gradyLatticeCoordinates_1(1),
        );
      }),
      _asHtmlTable_1(
        _transposed_1([
          _asList_1(_upOrDownTo_2(1, _size_1(_self))),
          _ratios,
          _collect_2(_ratios, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _ifNil_3(_primesVector, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return "*";
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _latticeVectorString_2(_each, _primesVector);
            });
          }),
          _rounded_1(_asCents_1(_self)),
          _asIntegers_1(_self),
        ]),
      ),
    ]);
    return _div;
  },
  "{ :self |\n\t\tlet ratios = self.asRatios;\n\t\tlet primesVector = self.latticeDerivedPrimesVector([3 5 7 11 13 17 19 23]);\n\t\tlet div = 'div'.createElement;\n\t\tdiv.appendChildren([\n\t\t\t[\n\t\t\t\t['Size', self.size.asString],\n\t\t\t\t['Limit', self.limit.asString],\n\t\t\t\t['Description', self.description],\n\t\t\t\t['Octave', self.octave.asString],\n\t\t\t\t['Primes', self.latticePrimes(false).asString]\n\t\t\t].asHtmlTable,\n\t\t\tprimesVector.ifNil {\n\t\t\t\t'No drawing'.TextParagraph\n\t\t\t} {\n\t\t\t\tself.latticeDrawing(\n\t\t\t\t\tprimesVector,\n\t\t\t\t\t1.gradyLatticeCoordinates\n\t\t\t\t)\n\t\t\t},\n\t\t\t[\n\t\t\t\t[1 .. self.size],\n\t\t\t\tratios,\n\t\t\t\tratios.collect { :each |\n\t\t\t\t\tprimesVector.ifNil {\n\t\t\t\t\t\t'*'\n\t\t\t\t\t} {\n\t\t\t\t\t\teach.latticeVectorString(primesVector)\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tself.asCents.rounded,\n\t\t\t\tself.asIntegers\n\t\t\t].transposed.asHtmlTable\n\t\t]);\n\t\tdiv\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "latticeDrawing",
  ["self", "primes", "unitVector"],
  function (_self, _primes, _unitVector) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _primes, _unitVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSvgElement_3(
      _latticeGraph_3(_self, _primes, _unitVector),
      1,
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_each, 80);
      },
    );
  },
  "{ :self :primes :unitVector |\n\t\tself.latticeGraph(\n\t\t\tprimes,\n\t\t\tunitVector\n\t\t).asSvgElement(\n\t\t\t1,\n\t\t\t{ :each | each * 80 }\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  ["self", "jiTunings"],
  function (_self, _jiTunings) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _jiTunings";
      /* console.error(errorMessage); */
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
      function (_browser, _path) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _browser, _path";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _setStatus_2(_browser, "Size/Limit/Name");
            return _sizes;
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
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
                  _values_1(_collect_2(
                    _select_2(_jiTunings, function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        /* console.error(errorMessage); */
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_size_1(_each), _selectedSize);
                    }),
                    function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        /* console.error(errorMessage); */
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _limit_1(_each);
                    },
                  )),
                ),
              ),
              _asString_1,
            );
          }),
          _hyphenMinusGreaterThanSign_2(2, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
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
            return _indices_1(_select_2(_jiTunings, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _equalsSign_2(_size_1(_each), _selectedSize),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_limit_1(_each), _selectedLimit);
                },
              );
            }));
          }),
          _hyphenMinusGreaterThanSign_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Temporaries */
            let _jiTuning = _at_2(_jiTunings, _at_2(_path, 3));
            /* Statements */
            _setStatus_2(_browser, _description_1(_jiTuning));
            return _outerHtml_1(_htmlView_1(_jiTuning));
          }),
        ]);
      },
    );
  },
  "{ :self :jiTunings |\n\t\tlet sizes = jiTunings.collect(size:/1).values.copyWithoutIdenticalElements.sort.collect(asString:/1);\n\t\tlet selectedSize = nil;\n\t\tlet selectedLimit = nil;\n\t\tself.ColumnBrowser('Scala Ji Tuning Browser', 'text/html', false, true, [1, 1, 4], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('Size/Limit/Name');\n\t\t\t\t\tsizes\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('Size = ' ++ path[1]);\n\t\t\t\t\tselectedSize := path[1].parseSmallInteger(10);\n\t\t\t\t\tjiTunings.select { :each |\n\t\t\t\t\t\teach.size = selectedSize\n\t\t\t\t\t}.collect { :each |\n\t\t\t\t\t\teach.limit\n\t\t\t\t\t}.values.copyWithoutIdenticalElements.sort.collect(asString:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t'Size = ', path[1], ', ',\n\t\t\t\t\t\t\t'Limit = ', path[2]\n\t\t\t\t\t\t].stringJoin\n\t\t\t\t\t);\n\t\t\t\t\tselectedLimit := path[2].parseSmallInteger(10);\n\t\t\t\t\tjiTunings.select { :each |\n\t\t\t\t\t\teach.size = selectedSize & {\n\t\t\t\t\t\t\teach.limit = selectedLimit\n\t\t\t\t\t\t}\n\t\t\t\t\t}.indices\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tlet jiTuning = jiTunings[path[3]];\n\t\t\t\t\tbrowser.setStatus(jiTuning.description);\n\t\t\t\t\tjiTuning.htmlView.outerHtml\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScalaJiTuningBrowser",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScalaJiTuningBrowser",
);

sl.addMethod(
  "ScalaJiTuningBrowser",
  "ScalaJiTuningBrowser",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _awaitLibraryItem_3(_system, "ScalaTuningArchive", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _tuningList = _scalaRationalTuningArchive_1(_system);
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _ScalaJiTuningBrowser_2(_smallKansas, _tuningList),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsystem.awaitLibraryItem(\n\t\t\t'ScalaTuningArchive'\n\t\t) {\n\t\t\tlet tuningList = system.scalaRationalTuningArchive;\n\t\t\tsmallKansas.addFrame(\n\t\t\t\tsmallKansas.ScalaJiTuningBrowser(tuningList),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
