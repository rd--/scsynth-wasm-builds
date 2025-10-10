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
    let _svgEncoded = _base64Encode_1(_asciiByteArray_1(_svgText));
    let _svgEncodedPretty = _unlines_1(_chunksOf_2(_svgEncoded, 76));
    /* Statements */
    return _format_2('<img src="data:image/svg+xml;base64,\n%\n">', [
      _svgEncodedPretty,
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet svgText = self.asSvg;\n\t\tlet svgEncoded = svgText.asciiByteArray.base64Encode;\n\t\tlet svgEncodedPretty = svgEncoded.chunksOf(76).unlines;\n\t\t'<img src=\"data:image/svg+xml;base64,\\n%\\n\">'.format([svgEncodedPretty])\n\t}",
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
  "{ :self |\n\t\tself\n\t\t.asSvg\n\t\t.utf8ByteArray\n\t\t.asBlob(\n\t\t\t(type: 'image/svg+xml')\n\t\t).createObjectUrl\n\t}",
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
    let _boundingCoordinates = _boundingBox_1(_self);
    /* Statements */
    return _scaledFragments_3(
      sl.annotateFunction(function (_options) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _options";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _contents_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _svgFragment_2(_each, _options);
          }, ["each"]),
        );
      }, ["options"]),
      _height,
      _boundingCoordinates,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet height = self.metadata['height'];\n\t\tlet boundingCoordinates = self.boundingBox;\n\t\t{ :options |\n\t\t\tself.contents.collect { :each |\n\t\t\t\teach.svgFragment(options)\n\t\t\t}\n\t\t}.scaledFragments(height, boundingCoordinates)\n\t}",
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
  "{ :self |\n\t\tself.contents.collect(boundingBox:/1).boundingBoxMerging\n\t}",
);

sl.addMethodToExistingType(
  "LineDrawing",
  "LineDrawing",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSvg_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asSvg\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar1, 1);
        let _n = _at_2(__SplVar1, 2);
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
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\t(n = 2).if {\n\t\t\t\tself.Line.asLineDrawing\n\t\t\t} {\n\t\t\t\tself.error('asLineDrawing')\n\t\t\t}\n\t\t} {\n\t\t\tLineDrawing(self)\n\t\t}\n\t}",
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
  "{ :self :options |\n\t\tnewLineDrawing().initializeSlots(\n\t\t\tself.flatten,\n\t\t\toptions\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.LineDrawing(height: 100)\n\t}",
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
                _asterisk_2(_negate_1(_solidus_2(_q, _period)), _pi_1(2)),
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
  "{ :self |\n\t\tlet radius = 1;\n\t\tlet circleCount = self.size + 1;\n\t\tlet period = self.anyOne.sum;\n\t\tlet innerCircle = [period];\n\t\tlet places = [\n\t\t\t[innerCircle],\n\t\t\tself\n\t\t].catenate.collect(prefixSum:/1);\n\t\tlet angles = places.collect { :p |\n\t\t\tp.collect { :q |\n\t\t\t\t((q / period).negate * 2.pi + 0.5.pi) % 2.pi\n\t\t\t}\n\t\t};\n\t\tlet circles = (1 .. circleCount).collect { :each |\n\t\t\tCircle([0 0], each * radius)\n\t\t};\n\t\tlet lines = (1 .. circleCount).collect { :each |\n\t\t\tlet innerRadius = each - 1 * radius;\n\t\t\tlet outerRadius = each * radius;\n\t\t\tangles[each].collect { :theta |\n\t\t\t\t[innerRadius theta; outerRadius theta]\n\t\t\t\t.fromPolarCoordinates\n\t\t\t\t.Line\n\t\t\t}\n\t\t};\n\t\t[circles, lines].LineDrawing\n\t}",
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
  "{ :self |\n\t\tlet rowHeight = 10;\n\t\tlet rowCount = self.size;\n\t\tlet columnWidth = rowHeight * rowCount * 2.goldenRatio;\n\t\tlet height = rowCount * rowHeight;\n\t\tlet period = self.anyOne.sum;\n\t\tlet places = self.collect(prefixSum:/1);\n\t\tlet marks = places.collect { :p |\n\t\t\tp.collect { :q |\n\t\t\t\tq * (columnWidth / period)\n\t\t\t}\n\t\t};\n\t\tlet horizontalLines = (0 .. rowCount).collect { :each |\n\t\t\tlet y = each * rowHeight;\n\t\t\tLine([0 y; columnWidth y])\n\t\t};\n\t\tlet leftmostVerticalLine = Line([0 0; 0 height]);\n\t\tlet verticalLines = (1 .. rowCount).collect { :each |\n\t\t\tlet y1 = height - (each * rowHeight);\n\t\t\tlet y2 = height - (each - 1 * rowHeight);\n\t\t\tmarks[each].collect { :x |\n\t\t\t\tLine([x y1; x y2])\n\t\t\t}\n\t\t};\n\t\t[\n\t\t\thorizontalLines,\n\t\t\tleftmostVerticalLine,\n\t\t\tverticalLines\n\t\t].LineDrawing\n\t}",
);
