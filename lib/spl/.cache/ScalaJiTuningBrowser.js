sl.addMethod(
  "Graph",
  "ScalaJiTuningBrowser",
  "drawing",
  ["self", "scale", "derivePoint:/1"],
  function (_self, _scale, _derivePoint_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _derivePoint_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lineWidth = 1;
    let _points = _collect_2(_vertexLabels_1(_self), _derivePoint_1);
    let _bbox = _scaleBy_2(_computeBoundingBox_1(_points), _scale);
    let _dots = _collect_2(_points, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _createSvgElement_2(
        "circle",
        Object.fromEntries([["cx", _x_1(_each)], ["cy", _y_1(_each)], [
          "r",
          _asterisk_2(_lineWidth, 2),
        ], ["fill", "black"]]),
      );
    });
    let _lines = _collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym116 = _assertIsOfSize_2(_each, 2),
        _i = _at_2(__genSym116, 1),
        _j = _at_2(__genSym116, 2);
      /* Statements */
      return _createSvgElement_2(
        "line",
        Object.fromEntries([
          ["x1", _x_1(_at_2(_points, _i))],
          ["y1", _y_1(_at_2(_points, _i))],
          ["x2", _x_1(_at_2(_points, _j))],
          ["y2", _y_1(_at_2(_points, _j))],
          ["stroke", "black"],
          ["stroke-width", _lineWidth],
        ]),
      );
    });
    let _svg = _createSvgElement_2(
      "svg",
      Object.fromEntries([
        ["width", _width_1(_bbox)],
        ["height", _height_1(_bbox)],
        ["viewBox", _viewBoxString_2(_bbox, 5)],
        ["preserveAspectRatio", "xMidYMid meet"],
      ]),
    );
    let _group = _createSvgElement_2(
      "g",
      Object.fromEntries([[
        "transform",
        _stringJoin_1([
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(
              "translate(0, ",
              _plusSign_2(
                _height_1(_bbox),
                _asterisk_2(2, _y_1(_lowerLeft_1(_bbox))),
              ),
            ),
            ")",
          ),
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(
              _plusSignPlusSign_2(_plusSignPlusSign_2("scale(", _scale), ", -"),
              _scale,
            ),
            ")",
          ),
        ]),
      ]]),
    );
    /* Statements */
    _appendChildren_2(_group, _dots);
    _appendChildren_2(_group, _lines);
    _appendChild_2(_svg, _group);
    return _svg;
  },
  "{ :self :scale :derivePoint:/1 |\n\t\tlet lineWidth = 1;\n\t\tlet points = self.vertexLabels.collect(derivePoint:/1);\n\t\tlet bbox = points.computeBoundingBox.scaleBy(scale);\n\t\tlet dots = points.collect { :each |\n\t\t\t'circle'.createSvgElement(\n\t\t\t\tcx: each.x,\n\t\t\t\tcy: each.y,\n\t\t\t\tr: lineWidth * 2,\n\t\t\t\tfill: 'black'\n\t\t\t)\n\t\t};\n\t\tlet lines = self.edgeList.collect { :each |\n\t\t\tlet [i, j] = each;\n\t\t\t'line'.createSvgElement(\n\t\t\t\tx1: points[i].x,\n\t\t\t\ty1: points[i].y,\n\t\t\t\tx2: points[j].x,\n\t\t\t\ty2: points[j].y,\n\t\t\t\tstroke: 'black',\n\t\t\t\t'stroke-width': lineWidth\n\t\t\t)\n\t\t};\n\t\tlet svg = 'svg'.createSvgElement(\n\t\t\twidth: bbox.width,\n\t\t\theight: bbox.height,\n\t\t\tviewBox: bbox.viewBoxString(5),\n\t\t\tpreserveAspectRatio: 'xMidYMid meet'\n\t\t);\n\t\tlet group = 'g'.createSvgElement(\n\t\t\ttransform: [\n\t\t\t\t'translate(0, ' ++ (bbox.height + (2 * bbox.lowerLeft.y)) ++ ')',\n\t\t\t\t'scale(' ++ scale ++ ', -' ++ scale ++ ')'\n\t\t\t].stringJoin\n\t\t);\n\t\tgroup.appendChildren(dots);\n\t\tgroup.appendChildren(lines);\n\t\tsvg.appendChild(group);\n\t\tsvg\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "htmlView",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _ratios = _asRatios_1(_self);
    let _vectorLimit = _min_2(_limit_1(_self), 13);
    let _limitPrimes = _allButFirst_1(_primesUpTo_1(_vectorLimit));
    let _tuningPrimes = _latticePrimes_1(_self);
    let _primesVector = _if_3(
      _lessThanSignEqualsSign_2(_limit_1(_self), 13),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _limitPrimes;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_size_1(_tuningPrimes), 5),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _tuningPrimes;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return null;
          },
        );
      },
    );
    let _div = _createElement_1("div");
    /* Statements */
    _appendChildren_2(_div, [
      _asHtmlTable_1([
        ["Size", _asString_1(_size_1(_self))],
        ["Limit", _asString_1(_limit_1(_self))],
        ["Description", _description_1(_self)],
        ["Octave", _asString_1(_octave_1(_self))],
        ["Primes", _asString_1(_tuningPrimes)],
      ]),
      _ifNil_3(_primesVector, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _TextParagraph_1("No drawing");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _latticeDrawing_2(_self, _primesVector);
      }),
      _asHtmlTable_1(
        _transposed_1([
          _asList_1(_upOrDownTo_2(1, _size_1(_self))),
          _ratios,
          _collect_2(_ratios, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _ifNil_3(_primesVector, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return "*";
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
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
  "{ :self |\n\t\tlet ratios = self.asRatios;\n\t\tlet vectorLimit = self.limit.min(13);\n\t\tlet limitPrimes = vectorLimit.primesUpTo.allButFirst;\n\t\tlet tuningPrimes = self.latticePrimes;\n\t\tlet primesVector = (self.limit <= 13).if {\n\t\t\tlimitPrimes\n\t\t} {\n\t\t\t(tuningPrimes.size <= 5).if {\n\t\t\t\ttuningPrimes\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t};\n\t\tlet div = 'div'.createElement;\n\t\tdiv.appendChildren([\n\t\t\t[\n\t\t\t\t['Size', self.size.asString],\n\t\t\t\t['Limit', self.limit.asString],\n\t\t\t\t['Description', self.description],\n\t\t\t\t['Octave', self.octave.asString],\n\t\t\t\t['Primes', tuningPrimes.asString]\n\t\t\t].asHtmlTable,\n\t\t\tprimesVector.ifNil {\n\t\t\t\t'No drawing'.TextParagraph\n\t\t\t} {\n\t\t\t\tself.latticeDrawing(primesVector)\n\t\t\t},\n\t\t\t[\n\t\t\t\t[1 .. self.size],\n\t\t\t\tratios,\n\t\t\t\tratios.collect { :each |\n\t\t\t\t\tprimesVector.ifNil {\n\t\t\t\t\t\t'*'\n\t\t\t\t\t} {\n\t\t\t\t\t\teach.latticeVectorString(primesVector)\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tself.asCents.rounded,\n\t\t\t\tself.asIntegers\n\t\t\t].transposed.asHtmlTable\n\t\t]);\n\t\tdiv\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "latticeDrawing",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _drawing_3(_latticeGraph_2(_self, _primes), 1, _identity_1);
  },
  "{ :self :primes |\n\t\tself.latticeGraph(primes).drawing(1, identity:/1)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "ScalaJiTuningBrowser",
  "latticeGraph",
  ["self", "primes"],
  function (_self, _primes) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _primes";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _primesList = _latticeVertices_2(_self, _primes);
    let _edgeList = _latticeEdges_2(_self, _primesList);
    let _coordinateList = _asterisk_2(
      _collect_2(_primesList, _wilsonLatticeCoordinates_1),
      4,
    );
    /* Statements */
    return _vertexLabels_2(
      _Graph_2(_asList_1(_upOrDownTo_2(1, _size_1(_primesList))), _edgeList),
      _coordinateList,
    );
  },
  "{ :self :primes |\n\t\tlet primesList = self.latticeVertices(primes);\n\t\tlet edgeList = self.latticeEdges(primesList);\n\t\tlet coordinateList = primesList.collect(wilsonLatticeCoordinates:/1) * 4;\n\t\tGraph([1 .. primesList.size], edgeList).vertexLabels(coordinateList)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _caseOf_2(_size_1(_path), [
          _hyphenMinusGreaterThanSign_2(0, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(_browser, "Size/Limit/Name");
            return _sizes;
          }),
          _hyphenMinusGreaterThanSign_2(1, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _setStatus_2(
              _browser,
              _plusSignPlusSign_2("Size = ", _at_2(_path, 1)),
            );
            _selectedSize = _parseInteger_2(_at_2(_path, 1), 10);
            return _collect_2(
              _sort_1(
                _copyWithoutIdenticalElements_1(
                  _values_1(_collect_2(
                    _select_2(_jiTunings, function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        console.error(errorMessage);
                        throw new Error(errorMessage);
                      }
                      /* Statements */
                      return _equalsSign_2(_size_1(_each), _selectedSize);
                    }),
                    function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        console.error(errorMessage);
                        throw new Error(errorMessage);
                      }
                      /* Statements */
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
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
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
            _selectedLimit = _parseInteger_2(_at_2(_path, 2), 10);
            return _indices_1(_select_2(_jiTunings, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _ampersand_2(
                _equalsSign_2(_size_1(_each), _selectedSize),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _equalsSign_2(_limit_1(_each), _selectedLimit);
                },
              );
            }));
          }),
          _hyphenMinusGreaterThanSign_2(3, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _jiTuning = _at_2(_jiTunings, _at_2(_path, 3));
            /* Statements */
            _setStatus_2(_browser, _description_1(_jiTuning));
            return _outerHtml_1(_htmlView_1(_jiTuning));
          }),
        ]);
      },
    );
  },
  "{ :self :jiTunings |\n\t\tlet sizes = jiTunings.collect(size:/1).values.copyWithoutIdenticalElements.sort.collect(asString:/1);\n\t\tlet selectedSize = nil;\n\t\tlet selectedLimit = nil;\n\t\tself.ColumnBrowser('Scala Ji Tuning Browser', 'text/html', false, true, [1, 1, 4], nil, nil) { :browser :path |\n\t\t\tpath.size.caseOf([\n\t\t\t\t0 -> {\n\t\t\t\t\tbrowser.setStatus('Size/Limit/Name');\n\t\t\t\t\tsizes\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\tbrowser.setStatus('Size = ' ++ path[1]);\n\t\t\t\t\tselectedSize := path[1].parseInteger(10);\n\t\t\t\t\tjiTunings.select { :each |\n\t\t\t\t\t\teach.size = selectedSize\n\t\t\t\t\t}.collect { :each |\n\t\t\t\t\t\teach.limit\n\t\t\t\t\t}.values.copyWithoutIdenticalElements.sort.collect(asString:/1)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tbrowser.setStatus(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t'Size = ', path[1], ', ',\n\t\t\t\t\t\t\t'Limit = ', path[2]\n\t\t\t\t\t\t].stringJoin\n\t\t\t\t\t);\n\t\t\t\t\tselectedLimit := path[2].parseInteger(10);\n\t\t\t\t\tjiTunings.select { :each |\n\t\t\t\t\t\teach.size = selectedSize & {\n\t\t\t\t\t\t\teach.limit = selectedLimit\n\t\t\t\t\t\t}\n\t\t\t\t\t}.indices\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tlet jiTuning = jiTunings[path[3]];\n\t\t\t\t\tbrowser.setStatus(jiTuning.description);\n\t\t\t\t\tjiTuning.htmlView.outerHtml\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "ScalaJiTuningBrowser",
  "jiScala",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "jiScala",
        "https://rohandrape.net/sw/hmt/data/json/scala-ji-tuning.json",
        "application/json",
        function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_libraryItem, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _if_3(_includesKey_2(_each, "octave"), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let __genSym117 = _assertIsOfSize_2(_at_2(_each, "octave"), 2),
                _numerator = _at_2(__genSym117, 1),
                _denominator = _at_2(__genSym117, 2);
              /* Statements */
              return _atPut_3(
                _each,
                "octave",
                _Fraction_2(_numerator, _denominator),
              );
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _atPut_3(
                _each,
                "octave",
                _Fraction_2(
                  2,
                  1,
                ),
              );
            });
            return _asJiTuning_1(_each);
          });
        },
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'jiScala',\n\t\t\t\t'https://rohandrape.net/sw/hmt/data/json/scala-ji-tuning.json',\n\t\t\t\t'application/json',\n\t\t\t\t{ :libraryItem |\n\t\t\t\t\tlibraryItem.collect { :each |\n\t\t\t\t\t\teach.includesKey('octave').if {\n\t\t\t\t\t\t\tlet [numerator, denominator] = each::octave;\n\t\t\t\t\t\t\teach::octave := Fraction(numerator, denominator)\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\teach::octave := 2/1\n\t\t\t\t\t\t};\n\t\t\t\t\t\teach.asJiTuning\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\t)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_jiScala_1(_smallKansas), function (_jiTuning) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _jiTuning";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _ScalaJiTuningBrowser_2(_smallKansas, _jiTuning),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.jiScala.then { :jiTuning |\n\t\t\tsmallKansas.addFrame(smallKansas.ScalaJiTuningBrowser(jiTuning), event)\n\t\t}\n\t}",
);
