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
  "draw",
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
  "{ :self | let fileName = '/tmp/svgImage.svg'; writeSvg(self,fileName); systemCommand(system,'chromium', [fileName]) }",
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
    return _writeTextFile_2(_fileName, _contents_1(_self));
  }, ["self", "fileName"]),
  "{ :self :fileName | writeTextFile(fileName,contents(self)) }",
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
  "{ :self | initializeSlots(newSvg(),self) }",
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
      _rounded_1(
        _solidus_2(100, _max_2(_height, _solidus_2(_width, _goldenRatio_1(1)))),
      ),
      1,
    );
    let _viewBox = _Rectangle_2([0, 0], [
      _asterisk_2(_width, _bitSize),
      _asterisk_2(_height, _bitSize),
    ]);
    let _items = _table_3(
      sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<rect x="%" y="%" width="%" height="%" fill="%"/>', [
          _asterisk_2(_hyphenMinus_2(_x, 1), _bitSize),
          _asterisk_2(_hyphenMinus_2(_y, 1), _bitSize),
          _bitSize,
          _bitSize,
          _rgbString_1(_asColour_1(_at_2(_at_2(_self, _y), _x))),
        ]);
      }, ["x", "y"]),
      _to_2(1, _width),
      _to_2(1, _height),
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
  '{ :self | let yAscending = false; let height = numberOfRows(self); let width = numberOfColumns(self); let bitSize = max(rounded((/(100, max(height,/(width, goldenRatio(1)))))),1); let viewBox = Rectangle([0, 0], [*(width, bitSize), *(height, bitSize)]); let items = table({ :x :y | format(\'<rect x="%" y="%" width="%" height="%" fill="%"/>\',[(*(-(x, 1), bitSize)), (*(-(y, 1), bitSize)), bitSize, bitSize, rgbString(asColour(at(at(self, y), x)))]) },to(1, width), to(1, height)); Svg(unlines(flatten([format(\'<svg xmlns="%" width="%" height="%" viewBox="%">\',[\'http://www.w3.org/2000/svg\', *(width, bitSize), *(height, bitSize), asSvgViewBox(viewBox, Record([[\'margin\', 0], [\'precision\', 0]]))]), format(\'<g stroke="none" transform="translate(0, %) scale(1, %)">\',[if(yAscending, { *(height, bitSize) }, { 0 }), if(yAscending, { -1 }, { 1 })]), items, \'</g>\', \'</svg>\']))) }',
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
    } /* Temporaries */
    let _maxEntry = _max_1(_max_1(_abs_1(_self)));
    /* Statements */
    return _asColourSvg_1(
      _deepCollect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _level = _solidus_2(
            _hyphenMinus_2(_maxEntry, _abs_1(_each)),
            _maxEntry,
          );
          /* Statements */
          return _if_3(
            _isVeryCloseTo_2(_level, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _RgbColour_2([1, 1, 1], 0);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greyLevel_1(_level);
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self | let maxEntry = max(max(abs(self))); asColourSvg(deepCollect(self, { :each | let level = /((-(maxEntry, abs(each))), maxEntry); if(isVeryCloseTo(level,1), { RgbColour([1, 1, 1], 0) }, { greyLevel(level) }) })) }",
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
        let __SPL180 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SPL180, 1);
        let _y = _at_2(__SPL180, 2);
        /* Statements */
        return _format_2("%,%", [
          _printStringToFixed_2(_x, _precision),
          _printStringToFixed_2(_y, _precision),
        ]);
      }, ["each"]),
    ));
  }, ["self", "options"]),
  "{ :self :options | let precision = at(options, 'precision'); unwords(collect(self, { :each | let __SPL180 = assertIsOfSize(each, 2); let x = at(__SPL180, 1); let y = at(__SPL180, 2); format('%,%',[printStringToFixed(x,precision), printStringToFixed(y,precision)]) })) }",
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
  "{ :self :options | let precision = at(options, 'precision'); let margin = at(options, 'margin'); unwords(collect([-(at(lowerLeft(self), 1), margin), -(at(lowerLeft(self), 2), margin), +(width(self), (*(margin, 2))), +(height(self), (*(margin, 2)))], { :each | printStringToFixed(each,precision) })) }",
);
