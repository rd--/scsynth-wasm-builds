/*  Requires: BezierCurve, Circle, CrystalStructure, GeometryCollection, Line, Point, PointCloud, Polygon, PolygonMesh, Polyhedron, Rectangle, Svg, Triangle, Writing  */

sl.addType(
  false,
  "LineDrawing",
  "LineDrawing",
  ["Object"],
  ["contents", "metadata"],
);

sl.copyTraitToType(
  "Object",
  "LineDrawing",
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "asImg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _svgText = _asSvg_1(_self);
    let _svgEncoded = _base64Encoded_1(_asciiByteArray_1(_svgText));
    let _svgEncodedPretty = _unlines_1(_chunksOf_2(_svgEncoded, 76));
    /* Statements */
    return _format_2('<img src="data:image/svg+xml;base64,\n%\n">', [
      _svgEncodedPretty,
    ]);
  },
  "{ :self |\n\t\tlet svgText = self.asSvg;\n\t\tlet svgEncoded = svgText.asciiByteArray.base64Encoded;\n\t\tlet svgEncodedPretty = svgEncoded.chunksOf(76).unlines;\n\t\t'<img src=\"data:image/svg+xml;base64,\\n%\\n\">'.format([svgEncodedPretty])\n\t}",
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "asObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _createObjectUrl_1(
      _asBlob_2(
        _utf8ByteArray_1(_asSvg_1(_self)),
        Object.fromEntries([["type", "image/svg+xml"]]),
      ),
    );
  },
  "{ :self |\n\t\tself\n\t\t.asSvg\n\t\t.utf8ByteArray\n\t\t.asBlob(\n\t\t\t(type: 'image/svg+xml')\n\t\t).createObjectUrl\n\t}",
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "asSvg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _height = _at_2(_metadata_1(_self), "height");
    let _actualBoundingBox = _asRectangle_1(_boundingBox_1(_self));
    let _boundingBox = _if_3(
      _isZero_1(_height_1(_actualBoundingBox)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Rectangle_2(_lowerLeft_1(_actualBoundingBox), [
          _right_1(_actualBoundingBox),
          _plusSign_2(_lower_1(_actualBoundingBox), 1),
        ]);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _actualBoundingBox;
      },
    );
    let _yRange = _height_1(_boundingBox);
    let _precision = _max_2(
      _hyphenMinus_2(3, _rounded_1(_log10_1(_yRange))),
      0,
    );
    let _scaleFactor = _solidus_2(_height, _height_1(_boundingBox));
    let _scaledBoundingBox = _scaleBy_2(_boundingBox, _scaleFactor);
    let _options = Object.fromEntries([["precision", _precision], [
      "scaleFactor",
      _scaleFactor,
    ]]);
    let _items = _collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _forSvg_2(_each, _options);
    });
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
            Object.fromEntries([["margin", 5], ["precision", _precision]]),
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
  },
  '{ :self |\n\t\tlet height = self.metadata[\'height\'];\n\t\tlet actualBoundingBox = self.boundingBox.asRectangle;\n\t\tlet boundingBox = actualBoundingBox.height.isZero.if {\n\t\t\tRectangle(\n\t\t\t\tactualBoundingBox.lowerLeft,\n\t\t\t\t[actualBoundingBox.right, actualBoundingBox.lower + 1]\n\t\t\t)\n\t\t} {\n\t\t\tactualBoundingBox\n\t\t};\n\t\tlet yRange = boundingBox.height;\n\t\tlet precision = (3 - yRange.log10.rounded).max(0);\n\t\tlet scaleFactor = (height / boundingBox.height);\n\t\tlet scaledBoundingBox = boundingBox.scaleBy(scaleFactor);\n\t\tlet options = (precision: precision, scaleFactor: scaleFactor);\n\t\tlet items = self.contents.collect { :each | each.forSvg(options) };\n\t\tlet strokeWith = (0.5 / scaleFactor);\n\t\tlet yTranslation = scaledBoundingBox.height + (2 * scaledBoundingBox.lowerLeft[2]);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format([\n\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\tscaledBoundingBox.width.printStringToFixed(1),\n\t\t\t\tscaledBoundingBox.height.printStringToFixed(1),\n\t\t\t\tscaledBoundingBox.asSvgViewBox(margin: 5, precision: precision)\n\t\t\t]),\n\t\t\t\'<g fill="none" stroke="black" stroke-width="%%" transform="translate(0, %) scale(%, %)">\'.format([\n\t\t\t\tstrokeWith.printStringToFixed(4), \'%\',\n\t\t\t\tyTranslation.printStringToFixed(4),\n\t\t\t\tscaleFactor.printStringToFixed(4),\n\t\t\t\tscaleFactor.negated.printStringToFixed(4)\n\t\t\t]),\n\t\t\titems,\n\t\t\t\'</g>\',\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines\n\t}',
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBoxMerging_1(
      _collect_2(_contents_1(_self), _boundingBox_1),
    );
  },
  "{ :self |\n\t\tself.contents.collect(boundingBox:/1).boundingBoxMerging\n\t}",
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fileName = "/tmp/LineDrawing.svg";
    /* Statements */
    _writeSvg_2(_self, _fileName);
    return _systemCommand_3(_system, "chromium", [_fileName]);
  },
  "{ :self |\n\t\tlet fileName = '/tmp/LineDrawing.svg';\n\t\tself.writeSvg(fileName);\n\t\tsystem.systemCommand('chromium', [fileName])\n\t}",
);

sl.addMethod(
  "LineDrawing",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _asSvg_1(_self));
  },
  "{ :self :fileName |\n\t\tfileName.writeTextFile(self.asSvg)\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "asLineDrawing",
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
      } /* Temporaries */
      let __genSym121 = _assertIsOfSize_2(_shape_1(_self), 2),
        _m = _at_2(__genSym121, 1),
        _n = _at_2(__genSym121, 2);
      /* Statements */
      return _if_3(_equalsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asLineDrawing_1(_Line_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asLineDrawing");
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _LineDrawing_1(_self);
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\t(n = 2).if {\n\t\t\t\tself.Line.asLineDrawing\n\t\t\t} {\n\t\t\t\tself.error('asLineDrawing')\n\t\t\t}\n\t\t} {\n\t\t\tLineDrawing(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "LineDrawing",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLineDrawing_0(), _flatten_1(_self), _options);
  },
  "{ :self :options |\n\t\tnewLineDrawing().initializeSlots(\n\t\t\tself.flatten,\n\t\t\toptions\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "LineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_2(_self, Object.fromEntries([["height", 100]]));
  },
  "{ :self |\n\t\tself.LineDrawing(height: 100)\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Circle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "GeometryCollection",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Line",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Point",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "PointCloud",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Polygon",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "PolygonMesh",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Rectangle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Triangle",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Writing",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  },
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethod(
  "Promise",
  "LineDrawing",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_self, function (_result) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _result";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _draw_1(_result);
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("draw: ", _err));
    });
  },
  "{ :self |\n\t\tself.thenElse { :result |\n\t\t\tresult.draw\n\t\t} { :err |\n\t\t\tself.error('draw: ' ++ err)\n\t\t}\n\t}",
);

sl.addMethod(
  "Promise",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_self, function (_result) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _result";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _writeSvg_2(_result, _fileName);
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("writeSvg: ", _err));
    });
  },
  "{ :self :fileName |\n\t\tself.thenElse { :result |\n\t\t\tresult.writeSvg(fileName)\n\t\t} { :err |\n\t\t\tself.error('writeSvg: ' ++ err)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "circularPartitionsDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _radius = 1;
    let _circleCount = _plusSign_2(_size_1(_self), 1);
    let _period = _sum_1(_anyOne_1(_self));
    let _innerCircle = [_period];
    let _places = _collect_2(
      _concatenation_1([[_innerCircle], _self]),
      _prefixSum_1,
    );
    let _angles = _collect_2(_places, function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_p, function (_q) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _q";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _percentSign_2(
          _plusSign_2(
            _asterisk_2(_negated_1(_solidus_2(_q, _period)), _pi_1(2)),
            _pi_1(0.5),
          ),
          _pi_1(2),
        );
      });
    });
    let _circles = _collect_2(_upOrDownTo_2(1, _circleCount), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Circle_2([0, 0], _asterisk_2(_each, _radius));
    });
    let _lines = _collect_2(_upOrDownTo_2(1, _circleCount), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _innerRadius = _asterisk_2(_hyphenMinus_2(_each, 1), _radius);
      let _outerRadius = _asterisk_2(_each, _radius);
      /* Statements */
      return _collect_2(_at_2(_angles, _each), function (_theta) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _theta";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1(
          _fromPolarCoordinates_1([[_innerRadius, _theta], [
            _outerRadius,
            _theta,
          ]]),
        );
      });
    });
    /* Statements */
    return _LineDrawing_1([_circles, _lines]);
  },
  "{ :self |\n\t\tlet radius = 1;\n\t\tlet circleCount = self.size + 1;\n\t\tlet period = self.anyOne.sum;\n\t\tlet innerCircle = [period];\n\t\tlet places = [\n\t\t\t[innerCircle],\n\t\t\tself\n\t\t].concatenation.collect(prefixSum:/1);\n\t\tlet angles = places.collect { :p |\n\t\t\tp.collect { :q |\n\t\t\t\t((q / period).negated * 2.pi + 0.5.pi) % 2.pi\n\t\t\t}\n\t\t};\n\t\tlet circles = (1 .. circleCount).collect { :each |\n\t\t\tCircle([0 0], each * radius)\n\t\t};\n\t\tlet lines = (1 .. circleCount).collect { :each |\n\t\t\tlet innerRadius = each - 1 * radius;\n\t\t\tlet outerRadius = each * radius;\n\t\t\tangles[each].collect { :theta |\n\t\t\t\t[innerRadius theta; outerRadius theta]\n\t\t\t\t.fromPolarCoordinates\n\t\t\t\t.Line\n\t\t\t}\n\t\t};\n\t\t[circles, lines].LineDrawing\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "rectangularPartitionsDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
    let _marks = _collect_2(_places, function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_p, function (_q) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _q";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_q, _solidus_2(_columnWidth, _period));
      });
    });
    let _horizontalLines = _collect_2(
      _upOrDownTo_2(0, _rowCount),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _asterisk_2(_each, _rowHeight);
        /* Statements */
        return _Line_1([[0, _y], [_columnWidth, _y]]);
      },
    );
    let _leftmostVerticalLine = _Line_1([[0, 0], [0, _height]]);
    let _verticalLines = _collect_2(
      _upOrDownTo_2(1, _rowCount),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y1 = _hyphenMinus_2(_height, _asterisk_2(_each, _rowHeight));
        let _y2 = _hyphenMinus_2(
          _height,
          _asterisk_2(_hyphenMinus_2(_each, 1), _rowHeight),
        );
        /* Statements */
        return _collect_2(_at_2(_marks, _each), function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Line_1([[_x, _y1], [_x, _y2]]);
        });
      },
    );
    /* Statements */
    return _LineDrawing_1([
      _horizontalLines,
      _leftmostVerticalLine,
      _verticalLines,
    ]);
  },
  "{ :self |\n\t\tlet rowHeight = 10;\n\t\tlet rowCount = self.size;\n\t\tlet columnWidth = rowHeight * rowCount * 2.goldenRatio;\n\t\tlet height = rowCount * rowHeight;\n\t\tlet period = self.anyOne.sum;\n\t\tlet places = self.collect(prefixSum:/1);\n\t\tlet marks = places.collect { :p |\n\t\t\tp.collect { :q |\n\t\t\t\tq * (columnWidth / period)\n\t\t\t}\n\t\t};\n\t\tlet horizontalLines = (0 .. rowCount).collect { :each |\n\t\t\tlet y = each * rowHeight;\n\t\t\tLine([0 y; columnWidth y])\n\t\t};\n\t\tlet leftmostVerticalLine = Line([0 0; 0 height]);\n\t\tlet verticalLines = (1 .. rowCount).collect { :each |\n\t\t\tlet y1 = height - (each * rowHeight);\n\t\t\tlet y2 = height - (each - 1 * rowHeight);\n\t\t\tmarks[each].collect { :x |\n\t\t\t\tLine([x y1; x y2])\n\t\t\t}\n\t\t};\n\t\t[\n\t\t\thorizontalLines,\n\t\t\tleftmostVerticalLine,\n\t\t\tverticalLines\n\t\t].LineDrawing\n\t}",
);

sl.addType(
  false,
  "PerspectiveDrawing",
  "LineDrawing",
  ["Object"],
  ["contents", "metadata"],
);

sl.copyTraitToType(
  "Object",
  "PerspectiveDrawing",
);

sl.addMethod(
  "PerspectiveDrawing",
  "LineDrawing",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projection = _at_2(_metadata_1(_self), "projection");
    /* Statements */
    return _LineDrawing_2(
      _collect_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _project_2(_each, _projection);
      }),
      _metadata_1(_self),
    );
  },
  "{ :self |\n\t\tlet projection = self.metadata['projection'];\n\t\tLineDrawing(\n\t\t\tself.contents.collect { :each |\n\t\t\t\teach.project(projection)\n\t\t\t},\n\t\t\tself.metadata\n\t\t)\n\t}",
);

sl.addMethod(
  "PerspectiveDrawing",
  "LineDrawing",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _draw_1(_asLineDrawing_1(_self));
  },
  "{ :self |\n\t\tself.asLineDrawing.draw\n\t}",
);

sl.addMethod(
  "PerspectiveDrawing",
  "LineDrawing",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _writeSvg_2(_asLineDrawing_1(_self), _fileName);
  },
  "{ :self :fileName |\n\t\tself.asLineDrawing.writeSvg(fileName)\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "PerspectiveDrawing",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPerspectiveDrawing_0(),
      _flatten_1(_self),
      _options,
    );
  },
  "{ :self :options |\n\t\tnewPerspectiveDrawing().initializeSlots(\n\t\t\tself.flatten,\n\t\t\toptions\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "LineDrawing",
  "PerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _self,
      Object.fromEntries([[
        "projection",
        _AxonometricProjection_6(
          _pi_1(_Fraction_2(
            1n,
            6n,
          )),
          0,
          0,
          0.5,
          1,
          -1,
        ),
      ], ["height", 100]]),
    );
  },
  "{ :self |\n\t\tself.PerspectiveDrawing(\n\t\t\tprojection: AxonometricProjection(\n\t\t\t\t1/6.pi, 0, 0,\n\t\t\t\t0.5, 1, -1\n\t\t\t),\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "GeometryCollection",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "Line",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "PointCloud",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "Polygon",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "PolygonMesh",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _nest_1(_self),
      Object.fromEntries([["projection", _projection], ["height", 100]]),
    );
  },
  "{ :self :projection |\n\t\tself.nest.PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethod(
  "GeometryCollection",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);

sl.addMethod(
  "Line",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);

sl.addMethod(
  "PointCloud",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);

sl.addMethod(
  "Polygon",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);

sl.addMethod(
  "PolygonMesh",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "LineDrawing",
  "asPerspectiveDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1(_nest_1(_self));
  },
  "{ :self |\n\t\tself.nest.PerspectiveDrawing\n\t}",
);
