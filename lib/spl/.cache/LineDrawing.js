/*  Requires: BezierCurve, Circle, CrystalStructure, GeometryCollection, Line, Point, PointCloud, Polygon, PolygonMesh, Polyhedron, Rectangle, Svg, Triangle, Writing  */

sl.addType(
  false,
  "LineDrawing",
  "LineDrawing",
  ["Object"],
  ["contents", "metadata"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LineDrawing",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "asImg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _svgText = _asSvg_1(_self);
    let _svgEncoded = _base64Encoded_1(_asciiByteArray_1(_svgText));
    let _svgEncodedPretty = _unlines_1(_chunksOf_2(_svgEncoded, 76));
    /* Statements */
    return _format_2('<img src="data:image/svg+xml;base64,\n%\n">', [
      _svgEncodedPretty,
    ]);
  }, ["self"]),
  "{ :self | let svgText = asSvg(self); let svgEncoded = base64Encoded(asciiByteArray(svgText)); let svgEncodedPretty = unlines(chunksOf(svgEncoded,76)); format('<img src=\"data:image/svg+xml;base64,\\n%\\n\">',[svgEncodedPretty]) }",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "asObjectUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _createObjectUrl_1(
      _asBlob_2(
        _utf8ByteArray_1(_asSvg_1(_self)),
        _Record_1([["type", "image/svg+xml"]]),
      ),
    );
  }, ["self"]),
  "{ :self | createObjectUrl(asBlob(utf8ByteArray(asSvg(self)),Record([['type', 'image/svg+xml']]))) }",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "asSvg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _height = _at_2(_metadata_1(_self), "height");
    let _actualBoundingBox = _asRectangle_1(_boundingBox_1(_self));
    let _boundingBox = _if_3(
      _isZero_1(_height_1(_actualBoundingBox)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Rectangle_2(_lowerLeft_1(_actualBoundingBox), [
          _right_1(_actualBoundingBox),
          _plusSign_2(_lower_1(_actualBoundingBox), 1),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _actualBoundingBox;
      }, []),
    );
    let _yRange = _height_1(_boundingBox);
    let _precision = _max_2(
      _hyphenMinus_2(3, _rounded_1(_log10_1(_yRange))),
      0,
    );
    let _scaleFactor = _solidus_2(_height, _height_1(_boundingBox));
    let _scaledBoundingBox = _scaleBy_2(_boundingBox, _scaleFactor);
    let _options = _Record_1([["precision", _precision], [
      "scaleFactor",
      _scaleFactor,
    ]]);
    let _items = _collect_2(
      _contents_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _forSvg_2(_each, _options);
      }, ["each"]),
    );
    let _strokeWith = _solidus_2(0.5, _scaleFactor);
    let _yTranslation = _plusSign_2(
      _height_1(_scaledBoundingBox),
      _asterisk_2(2, _at_2(_lowerLeft_1(_scaledBoundingBox), 2)),
    );
    /* Statements */
    return _unlines_1(
      _flatten_1([
        _format_2('<svg xmlns="%" width="%" height="%" viewBox="%">', [
          "http://www.w3.org/2000/svg",
          _printStringToFixed_2(_width_1(_scaledBoundingBox), 1),
          _printStringToFixed_2(_height_1(_scaledBoundingBox), 1),
          _asSvgViewBox_2(
            _scaledBoundingBox,
            _Record_1([["margin", 5], ["precision", _precision]]),
          ),
        ]),
        _format_2(
          '<g fill="none" stroke="black" stroke-width="%%" transform="translate(0, %) scale(%, %)">',
          [
            _printStringToFixed_2(_strokeWith, 4),
            "%",
            _printStringToFixed_2(_yTranslation, 4),
            _printStringToFixed_2(_scaleFactor, 4),
            _printStringToFixed_2(_negated_1(_scaleFactor), 4),
          ],
        ),
        _items,
        "</g>",
        "</svg>",
      ]),
    );
  }, ["self"]),
  "{ :self | let height = at(metadata(self), 'height'); let actualBoundingBox = asRectangle(boundingBox(self)); let boundingBox = if(isZero(height(actualBoundingBox)), { Rectangle(lowerLeft(actualBoundingBox), [right(actualBoundingBox), +(lower(actualBoundingBox), 1)]) }, { actualBoundingBox }); let yRange = height(boundingBox); let precision = max((-(3, rounded(log10(yRange)))),0); let scaleFactor = (/(height, height(boundingBox))); let scaledBoundingBox = scaleBy(boundingBox,scaleFactor); let options = Record([['precision', precision], ['scaleFactor', scaleFactor]]); let items = collect(contents(self), { :each | forSvg(each,options) }); let strokeWith = (/(0.5, scaleFactor)); let yTranslation = +(height(scaledBoundingBox), (*(2, at(lowerLeft(scaledBoundingBox), 2)))); unlines(flatten([format('<svg xmlns=\"%\" width=\"%\" height=\"%\" viewBox=\"%\">',['http://www.w3.org/2000/svg', printStringToFixed(width(scaledBoundingBox),1), printStringToFixed(height(scaledBoundingBox),1), asSvgViewBox(scaledBoundingBox, Record([['margin', 5], ['precision', precision]]))]), format('<g fill=\"none\" stroke=\"black\" stroke-width=\"%%\" transform=\"translate(0, %) scale(%, %)\">',[printStringToFixed(strokeWith,4), '%', printStringToFixed(yTranslation,4), printStringToFixed(scaleFactor,4), printStringToFixed(negated(scaleFactor),4)]), items, '</g>', '</svg>'])) }",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBoxMerging_1(
      _collect_2(_contents_1(_self), _boundingBox_1),
    );
  }, ["self"]),
  "{ :self | boundingBoxMerging(collect(contents(self),boundingBox:/1)) }",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fileName = "/tmp/LineDrawing.svg";
    /* Statements */
    _writeSvg_2(_self, _fileName);
    return _systemCommand_3(_system, "chromium", [_fileName]);
  }, ["self"]),
  "{ :self | let fileName = '/tmp/LineDrawing.svg'; writeSvg(self,fileName); systemCommand(system,'chromium', [fileName]) }",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _asSvg_1(_self));
  }, ["self", "fileName"]),
  "{ :self :fileName | writeTextFile(fileName,asSvg(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "asLineDrawing",
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
        } /* Temporaries */
        let __SPL203 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL203, 1);
        let _n = _at_2(__SPL203, 2);
        /* Statements */
        return _if_3(
          _equalsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asLineDrawing_1(_Line_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "asLineDrawing");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _LineDrawing_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { let __SPL203 = assertIsOfSize(shape(self), 2); let m = at(__SPL203, 1); let n = at(__SPL203, 2); if((=(n, 2)), { asLineDrawing(Line(self)) }, { error(self,'asLineDrawing') }) }, { LineDrawing(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "LineDrawing",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLineDrawing_0(), _flatten_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options | initializeSlots(newLineDrawing(),flatten(self), options) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "LineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_2(_self, _Record_1([["height", 100]]));
  }, ["self"]),
  "{ :self | LineDrawing(self, Record([['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "BezierCurve",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Circle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Ellipse",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "GeometryCollection",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Line",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Parallelogram",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Point",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "PointCloud",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Polygon",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "PolygonMesh",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Rectangle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Superellipse",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Triangle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Writing",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self | LineDrawing([self]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Promise",
  "LineDrawing",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _self,
      sl.annotateFunction(function (_result) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _result";
          throw new Error(errorMessage);
        } /* Statements */
        return _draw_1(_result);
      }, ["result"]),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _plusSignPlusSign_2("draw: ", _err));
      }, ["err"]),
    );
  }, ["self"]),
  "{ :self | thenElse(self, { :result | draw(result) }, { :err | error(self,++('draw: ', err)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Promise",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _self,
      sl.annotateFunction(function (_result) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _result";
          throw new Error(errorMessage);
        } /* Statements */
        return _writeSvg_2(_result, _fileName);
      }, ["result"]),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _plusSignPlusSign_2("writeSvg: ", _err));
      }, ["err"]),
    );
  }, ["self", "fileName"]),
  "{ :self :fileName | thenElse(self, { :result | writeSvg(result,fileName) }, { :err | error(self,++('writeSvg: ', err)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "circularPartitionsDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _radius = 1;
    let _circleCount = _plusSign_2(_size_1(_self), 1);
    let _period = _sum_1(_anyOne_1(_self));
    let _innerCircle = [_period];
    let _places = _collect_2(
      _catenate_1([[_innerCircle], _self]),
      _prefixSum_1,
    );
    let _angles = _collect_2(
      _places,
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _p,
          sl.annotateFunction(function (_q) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _percentSign_2(
              _plusSign_2(
                _asterisk_2(_negated_1(_solidus_2(_q, _period)), _pi_1(2)),
                _pi_1(0.5),
              ),
              _pi_1(2),
            );
          }, ["q"]),
        );
      }, ["p"]),
    );
    let _circles = _collect_2(
      _upOrDownTo_2(1, _circleCount),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _Circle_2([0, 0], _asterisk_2(_each, _radius));
      }, ["each"]),
    );
    let _lines = _collect_2(
      _upOrDownTo_2(1, _circleCount),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _innerRadius = _asterisk_2(_hyphenMinus_2(_each, 1), _radius);
        let _outerRadius = _asterisk_2(_each, _radius);
        /* Statements */
        return _collect_2(
          _at_2(_angles, _each),
          sl.annotateFunction(function (_theta) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _theta";
              throw new Error(errorMessage);
            } /* Statements */
            return _Line_1(
              _fromPolarCoordinates_1([[_innerRadius, _theta], [
                _outerRadius,
                _theta,
              ]]),
            );
          }, ["theta"]),
        );
      }, ["each"]),
    );
    /* Statements */
    return _LineDrawing_1([_circles, _lines]);
  }, ["self"]),
  "{ :self | let radius = 1; let circleCount = +(size(self), 1); let period = sum(anyOne(self)); let innerCircle = [period]; let places = collect(catenate([[innerCircle], self]),prefixSum:/1); let angles = collect(places, { :p | collect(p, { :q | %((+(*(negated((/(q, period))), pi(2)), pi(0.5))), pi(2)) }) }); let circles = collect(upOrDownTo(1, circleCount), { :each | Circle([0, 0], *(each, radius)) }); let lines = collect(upOrDownTo(1, circleCount), { :each | let innerRadius = *(-(each, 1), radius); let outerRadius = *(each, radius); collect(at(angles, each), { :theta | Line(fromPolarCoordinates([[innerRadius, theta], [outerRadius, theta]])) }) }); LineDrawing([circles, lines]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "rectangularPartitionsDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rowHeight = 10;
    let _rowCount = _size_1(_self);
    let _columnWidth = _asterisk_2(
      _asterisk_2(_rowHeight, _rowCount),
      _goldenRatio_1(2),
    );
    let _height = _asterisk_2(_rowCount, _rowHeight);
    let _period = _sum_1(_anyOne_1(_self));
    let _places = _collect_2(_self, _prefixSum_1);
    let _marks = _collect_2(
      _places,
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _p,
          sl.annotateFunction(function (_q) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_q, _solidus_2(_columnWidth, _period));
          }, ["q"]),
        );
      }, ["p"]),
    );
    let _horizontalLines = _collect_2(
      _upOrDownTo_2(0, _rowCount),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _asterisk_2(_each, _rowHeight);
        /* Statements */
        return _Line_1([[0, _y], [_columnWidth, _y]]);
      }, ["each"]),
    );
    let _leftmostVerticalLine = _Line_1([[0, 0], [0, _height]]);
    let _verticalLines = _collect_2(
      _upOrDownTo_2(1, _rowCount),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y1 = _hyphenMinus_2(_height, _asterisk_2(_each, _rowHeight));
        let _y2 = _hyphenMinus_2(
          _height,
          _asterisk_2(_hyphenMinus_2(_each, 1), _rowHeight),
        );
        /* Statements */
        return _collect_2(
          _at_2(_marks, _each),
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _Line_1([[_x, _y1], [_x, _y2]]);
          }, ["x"]),
        );
      }, ["each"]),
    );
    /* Statements */
    return _LineDrawing_1([
      _horizontalLines,
      _leftmostVerticalLine,
      _verticalLines,
    ]);
  }, ["self"]),
  "{ :self | let rowHeight = 10; let rowCount = size(self); let columnWidth = *(*(rowHeight, rowCount), goldenRatio(2)); let height = *(rowCount, rowHeight); let period = sum(anyOne(self)); let places = collect(self,prefixSum:/1); let marks = collect(places, { :p | collect(p, { :q | *(q, (/(columnWidth, period))) }) }); let horizontalLines = collect(upOrDownTo(0, rowCount), { :each | let y = *(each, rowHeight); Line([[0, y], [columnWidth, y]]) }); let leftmostVerticalLine = Line([[0, 0], [0, height]]); let verticalLines = collect(upOrDownTo(1, rowCount), { :each | let y1 = -(height, (*(each, rowHeight))); let y2 = -(height, (*(-(each, 1), rowHeight))); collect(at(marks, each), { :x | Line([[x, y1], [x, y2]]) }) }); LineDrawing([horizontalLines, leftmostVerticalLine, verticalLines]) }",
);

sl.addType(
  false,
  "PerspectiveDrawing",
  "LineDrawing",
  ["Object"],
  ["contents", "metadata"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PerspectiveDrawing",
);

sl.addMethodToExistingType(
  "PerspectiveDrawing",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projection = _at_2(_metadata_1(_self), "projection");
    /* Statements */
    return _LineDrawing_2(
      _collect_2(
        _contents_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _project_2(_each, _projection);
        }, ["each"]),
      ),
      _metadata_1(_self),
    );
  }, ["self"]),
  "{ :self | let projection = at(metadata(self), 'projection'); LineDrawing(collect(contents(self), { :each | project(each,projection) }), metadata(self)) }",
);

sl.addMethodToExistingType(
  "PerspectiveDrawing",
  "LineDrawing",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _draw_1(_asLineDrawing_1(_self));
  }, ["self"]),
  "{ :self | draw(asLineDrawing(self)) }",
);

sl.addMethodToExistingType(
  "PerspectiveDrawing",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeSvg_2(_asLineDrawing_1(_self), _fileName);
  }, ["self", "fileName"]),
  "{ :self :fileName | writeSvg(asLineDrawing(self),fileName) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "PerspectiveDrawing",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPerspectiveDrawing_0(),
      _flatten_1(_self),
      _options,
    );
  }, ["self", "options"]),
  "{ :self :options | initializeSlots(newPerspectiveDrawing(),flatten(self), options) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineDrawing",
  "PerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _self,
      _Record_1([[
        "projection",
        _AxonometricProjection_6(_pi_1(_Fraction_2(1n, 6n)), 0, 0, 0.5, 1, -1),
      ], ["height", 100]]),
    );
  }, ["self"]),
  "{ :self | PerspectiveDrawing(self, Record([['projection', AxonometricProjection(pi(Fraction(1L, 6L)), 0, 0, 0.5, 1, -1)], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "GeometryCollection",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Line",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "PointCloud",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Polygon",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "PolygonMesh",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "Polyhedron",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PerspectiveDrawing(nest(self), Record([['projection', projection], ['height', 100]])) }",
);

sl.extendTypeOrTraitWithMethod(
  "GeometryCollection",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Line",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "PointCloud",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Polygon",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "PolygonMesh",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Polyhedron",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  }, ["self"]),
  "{ :self | PerspectiveDrawing(nest(self)) }",
);
