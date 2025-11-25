/*  Requires: Rectangle  */

sl.addType(
  false,
  "Svg",
  "Svg",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Svg",
);

sl.addMethodToExistingType(
  "Svg",
  "Svg",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Svg",
  "Svg",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fileName = "/tmp/svgImage.svg";
    /* Statements */
    _writeSvg_2(_self, _fileName);
    return _systemCommand_3(_system, "chromium", [_fileName]);
  }, ["self"]),
  "{ :self |\n\t\tlet fileName = '/tmp/svgImage.svg';\n\t\tself.writeSvg(fileName);\n\t\tsystem.systemCommand('chromium', [fileName])\n\t}",
);

sl.addMethodToExistingType(
  "Svg",
  "Svg",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_3(_system, _fileName, _contents_1(_self));
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tsystem.writeTextFile(\n\t\t\tfileName,\n\t\t\tself.contents\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Svg",
  "Svg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSvg_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewSvg().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Svg",
  "asColourSvg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _yAscending = false;
    let _height = _numberOfRows_1(_self);
    let _width = _numberOfColumns_1(_self);
    let _bitSize = _max_2(
      _round_1(
        _solidus_2(100, _max_2(_height, _solidus_2(_width, _goldenRatio_1(1)))),
      ),
      1,
    );
    let _viewBox = _Rectangle_2([0, 0], [
      _asterisk_2(_width, _bitSize),
      _asterisk_2(_height, _bitSize),
    ]);
    let _items = _collect_2(
      _table_3(
        sl.annotateFunction(function (_x, _y) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _x, _y";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _colour = _asColour_1(_at_2(_at_2(_self, _y), _x));
          /* Statements */
          return _if_3(
            _isTransparent_1(_colour),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return null;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _format_2(
                '<rect x="%" y="%" width="%" height="%" fill="%"/>',
                [
                  _asterisk_2(_hyphenMinus_2(_x, 1), _bitSize),
                  _asterisk_2(_hyphenMinus_2(_y, 1), _bitSize),
                  _bitSize,
                  _bitSize,
                  _rgbString_1(_asColour_1(_at_2(_at_2(_self, _y), _x))),
                ],
              );
            }, []),
          );
        }, ["x", "y"]),
        _to_2(1, _width),
        _to_2(1, _height),
      ),
      _deleteMissing_1,
    );
    /* Statements */
    return _Svg_1(
      _unlines_1(
        _flatten_1([
          _format_2('<svg xmlns="%" width="%" height="%" viewBox="%">', [
            "http://www.w3.org/2000/svg",
            _asterisk_2(_width, _bitSize),
            _asterisk_2(_height, _bitSize),
            _asSvgViewBox_2(
              _viewBox,
              _Record_1([["margin", 0], ["precision", 0]]),
            ),
          ]),
          _format_2(
            '<g stroke="none" transform="translate(0, %) scale(1, %)">',
            [
              _if_3(
                _yAscending,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _asterisk_2(_height, _bitSize);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 0;
                }, []),
              ),
              _if_3(
                _yAscending,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return -1;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 1;
                }, []),
              ),
            ],
          ),
          _items,
          "</g>",
          "</svg>",
        ]),
      ),
    );
  }, ["self"]),
  '{ :self |\n\t\tlet yAscending = false;\n\t\tlet height = self.numberOfRows;\n\t\tlet width = self.numberOfColumns;\n\t\tlet bitSize = (100 / height.max(width / 1.goldenRatio)).round.max(1);\n\t\tlet viewBox = Rectangle([0, 0], [width * bitSize, height * bitSize]);\n\t\tlet items = { :x :y |\n\t\t\tlet colour = self[y][x].asColour;\n\t\t\tcolour.isTransparent.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\t\'<rect x="%" y="%" width="%" height="%" fill="%"/>\'.format(\n\t\t\t\t\t[\n\t\t\t\t\t\t(x - 1 * bitSize),\n\t\t\t\t\t\t(y - 1 * bitSize),\n\t\t\t\t\t\tbitSize,\n\t\t\t\t\t\tbitSize,\n\t\t\t\t\t\tself[y][x].asColour.rgbString\n\t\t\t\t\t]\n\t\t\t\t)\n\t\t\t}\n\t\t}.table(\n\t\t\t1.to(width),\n\t\t\t1.to(height)\n\t\t).collect(deleteMissing:/1);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format([\n\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\twidth * bitSize,\n\t\t\t\theight * bitSize,\n\t\t\t\tviewBox.asSvgViewBox(margin: 0, precision: 0)\n\t\t\t]),\n\t\t\t\'<g stroke="none" transform="translate(0, %) scale(1, %)">\'.format([\n\t\t\t\tyAscending.if { height * bitSize } { 0 },\n\t\t\t\tyAscending.if { -1 } { 1 }\n\t\t\t]),\n\t\t\titems,\n\t\t\t\'</g>\',\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines.Svg\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Svg",
  "asGreyscaleSvg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColourSvg_1(_greyscaleMatrix_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.greyscaleMatrix.asColourSvg\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Svg",
  "asSvgPointList",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    /* Statements */
    return _unwords_1(_collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        /* Statements */
        return _format_2("%,%", [
          _printStringToFixed_2(_x, _precision),
          _printStringToFixed_2(_y, _precision),
        ]);
      }, ["each"]),
    ));
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tself.collect { :each |\n\t\t\tlet [x, y] = each;\n\t\t\t'%,%'.format(\n\t\t\t\t[\n\t\t\t\t\tx.printStringToFixed(precision),\n\t\t\t\t\ty.printStringToFixed(precision)\n\t\t\t\t]\n\t\t\t)\n\t\t}.unwords\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Rectangle",
  "Svg",
  "asSvgViewBox",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _margin = _at_2(_options, "margin");
    /* Statements */
    return _unwords_1(
      _collect_2(
        [
          _hyphenMinus_2(_at_2(_lowerLeft_1(_self), 1), _margin),
          _hyphenMinus_2(_at_2(_lowerLeft_1(_self), 2), _margin),
          _plusSign_2(_width_1(_self), _asterisk_2(_margin, 2)),
          _plusSign_2(_height_1(_self), _asterisk_2(_margin, 2)),
        ],
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _printStringToFixed_2(_each, _precision);
        }, ["each"]),
      ),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tlet margin = options['margin'];\n\t\t[\n\t\t\tself.lowerLeft[1] - margin,\n\t\t\tself.lowerLeft[2] - margin,\n\t\t\tself.width + (margin * 2),\n\t\t\tself.height + (margin * 2)\n\t\t].collect { :each |\n\t\t\teach.printStringToFixed(precision)\n\t\t}.unwords\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Svg",
  "scaledFragments",
  ["self:/1", "height", "boundingCoordinates"],
  sl.annotateFunction(function (_self_1, _height, _boundingCoordinates) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_1, _height, _boundingCoordinates";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _actualBoundingBox = _asRectangle_1(_boundingCoordinates);
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
    let _precision = _max_2(_hyphenMinus_2(3, _round_1(_log10_1(_yRange))), 0);
    let _scaleFactor = _solidus_2(_height, _height_1(_boundingBox));
    let _scaledBoundingBox = _Rectangle_2(
      _asterisk_2(_lowerLeft_1(_boundingBox), _scaleFactor),
      _asterisk_2(_upperRight_1(_boundingBox), _scaleFactor),
    );
    let _options = _Record_1([["precision", _precision], [
      "scaleFactor",
      _scaleFactor,
    ]]);
    let _strokeWith = _solidus_2(0.5, _scaleFactor);
    let _yTranslation = _plusSign_2(
      _height_1(_scaledBoundingBox),
      _asterisk_2(2, _at_2(_lowerLeft_1(_scaledBoundingBox), 2)),
    );
    /* Statements */
    return _Svg_1(
      _unlines_1(
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
              _printStringToFixed_2(_negate_1(_scaleFactor), 4),
            ],
          ),
          _self_1(_options),
          "</g>",
          "</svg>",
        ]),
      ),
    );
  }, ["self:/1", "height", "boundingCoordinates"]),
  '{ :self:/1 :height :boundingCoordinates |\n\t\tlet actualBoundingBox = boundingCoordinates.asRectangle;\n\t\tlet boundingBox = actualBoundingBox.height.isZero.if {\n\t\t\tRectangle(\n\t\t\t\tactualBoundingBox.lowerLeft,\n\t\t\t\t[actualBoundingBox.right, actualBoundingBox.lower + 1]\n\t\t\t)\n\t\t} {\n\t\t\tactualBoundingBox\n\t\t};\n\t\tlet yRange = boundingBox.height;\n\t\tlet precision = (3 - yRange.log10.round).max(0);\n\t\tlet scaleFactor = (height / boundingBox.height);\n\t\tlet scaledBoundingBox = Rectangle(boundingBox.lowerLeft * scaleFactor, boundingBox.upperRight * scaleFactor); /* ? */\n\t\tlet options = (precision: precision, scaleFactor: scaleFactor);\n\t\tlet strokeWith = (0.5 / scaleFactor);\n\t\tlet yTranslation = scaledBoundingBox.height + (2 * scaledBoundingBox.lowerLeft[2]);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format([\n\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\tscaledBoundingBox.width.printStringToFixed(1),\n\t\t\t\tscaledBoundingBox.height.printStringToFixed(1),\n\t\t\t\tscaledBoundingBox.asSvgViewBox(margin: 5, precision: precision)\n\t\t\t]),\n\t\t\t\'<g fill="none" stroke="black" stroke-width="%%" transform="translate(0, %) scale(%, %)">\'.format([\n\t\t\t\tstrokeWith.printStringToFixed(4), \'%\',\n\t\t\t\tyTranslation.printStringToFixed(4),\n\t\t\t\tscaleFactor.printStringToFixed(4),\n\t\t\t\tscaleFactor.negate.printStringToFixed(4)\n\t\t\t]),\n\t\t\tself(options),\n\t\t\t\'</g>\',\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines.Svg\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Svg",
  "svgArcTo",
  [
    "rx",
    "ry",
    "xAxisRotation",
    "largeArcFlag",
    "sweepFlag",
    "x",
    "y",
    "precision",
  ],
  sl.annotateFunction(
    function (
      _rx,
      _ry,
      _xAxisRotation,
      _largeArcFlag,
      _sweepFlag,
      _x,
      _y,
      _precision,
    ) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _rx, _ry, _xAxisRotation, _largeArcFlag, _sweepFlag, _x, _y, _precision";
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("A % % % % % %,%", [
        _printStringToFixed_2(_rx, _precision),
        _printStringToFixed_2(_ry, _precision),
        _printStringToFixed_2(_xAxisRotation, _precision),
        _printString_1(_boole_1(_largeArcFlag)),
        _printString_1(_boole_1(_sweepFlag)),
        _printStringToFixed_2(_x, _precision),
        _printStringToFixed_2(_y, _precision),
      ]);
    },
    [
      "rx",
      "ry",
      "xAxisRotation",
      "largeArcFlag",
      "sweepFlag",
      "x",
      "y",
      "precision",
    ],
  ),
  "{ :rx :ry :xAxisRotation :largeArcFlag :sweepFlag :x :y :precision |\n\t\t'A % % % % % %,%'.format(\n\t\t\t[\n\t\t\t\trx.printStringToFixed(precision),\n\t\t\t\try.printStringToFixed(precision),\n\t\t\t\txAxisRotation.printStringToFixed(precision),\n\t\t\t\tlargeArcFlag.boole.printString,\n\t\t\t\tsweepFlag.boole.printString,\n\t\t\t\tx.printStringToFixed(precision),\n\t\t\t\ty.printStringToFixed(precision)\n\t\t\t]\n\t\t)\n\t}",
);
