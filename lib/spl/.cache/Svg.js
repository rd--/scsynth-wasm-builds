/*  Requires: Rectangle  */

sl.addType(
  false,
  "Svg",
  "Svg",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Svg",
);

sl.addMethod(
  "Svg",
  "Svg",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fileName = "/tmp/svgImage.svg";
    /* Statements */
    _writeSvg_2(_self, _fileName);
    return _systemCommand_3(_system, "chromium", [_fileName]);
  },
  "{ :self |\n\t\tlet fileName = '/tmp/svgImage.svg';\n\t\tself.writeSvg(fileName);\n\t\tsystem.systemCommand('chromium', [fileName])\n\t}",
);

sl.addMethod(
  "Svg",
  "Svg",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _writeTextFile_2(_fileName, _contents_1(_self));
  },
  "{ :self :fileName |\n\t\tfileName.writeTextFile(self.contents)\n\t}",
);

sl.addMethod(
  "String",
  "Svg",
  "Svg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSvg_0(), _self);
  },
  "{ :self |\n\t\tnewSvg().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "List",
  "Svg",
  "asColourSvg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
      function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<rect x="%" y="%" width="%" height="%" fill="%"/>', [
          _asterisk_2(_hyphenMinus_2(_x, 1), _bitSize),
          _asterisk_2(_hyphenMinus_2(_y, 1), _bitSize),
          _bitSize,
          _bitSize,
          _rgbString_1(_asColour_1(_at_2(_at_2(_self, _y), _x))),
        ]);
      },
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
              Object.fromEntries([["margin", 0], ["precision", 0]]),
            ),
          ]),
          _format_2(
            '<g stroke="none" transform="translate(0, %) scale(1, %)">',
            [
              _if_3(_yAscending, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(_height, _bitSize);
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return 0;
              }),
              _if_3(_yAscending, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return -1;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }),
            ],
          ),
          _items,
          "</g>",
          "</svg>",
        ]),
      ),
    );
  },
  '{ :self |\n\t\tlet yAscending = false;\n\t\tlet height = self.numberOfRows;\n\t\tlet width = self.numberOfColumns;\n\t\tlet bitSize = (100 / height.max(width / 1.goldenRatio)).rounded.max(1);\n\t\tlet viewBox = Rectangle([0, 0], [width * bitSize, height * bitSize]);\n\t\tlet items = { :x :y |\n\t\t\t\'<rect x="%" y="%" width="%" height="%" fill="%"/>\'.format([\n\t\t\t\t(x - 1 * bitSize),\n\t\t\t\t(y - 1 * bitSize),\n\t\t\t\tbitSize,\n\t\t\t\tbitSize,\n\t\t\t\tself[y][x].asColour.rgbString\n\t\t\t])\n\t\t}.table(1:width, 1:height);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format([\n\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\twidth * bitSize,\n\t\t\t\theight * bitSize,\n\t\t\t\tviewBox.asSvgViewBox(margin: 0, precision: 0)\n\t\t\t]),\n\t\t\t\'<g stroke="none" transform="translate(0, %) scale(1, %)">\'.format([\n\t\t\t\tyAscending.if { height * bitSize } { 0 },\n\t\t\t\tyAscending.if { -1 } { 1 }\n\t\t\t]),\n\t\t\titems,\n\t\t\t\'</g>\',\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines.Svg\n\t}',
);

sl.addMethod(
  "List",
  "Svg",
  "asGreyscaleSvg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxEntry = _max_1(_max_1(_abs_1(_self)));
    /* Statements */
    return _asColourSvg_1(_deepCollect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _level = _solidus_2(
        _hyphenMinus_2(_maxEntry, _abs_1(_each)),
        _maxEntry,
      );
      /* Statements */
      return _if_3(_isVeryCloseTo_2(_level, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _RgbColour_2([1, 1, 1], 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _greyLevel_1(_level);
      });
    }));
  },
  "{ :self |\n\t\tlet maxEntry = self.abs.max.max;\n\t\tself.deepCollect { :each |\n\t\t\tlet level = (maxEntry - each.abs) / maxEntry;\n\t\t\tlevel.isVeryCloseTo(1).if {\n\t\t\t\tRgbColour([1 1 1], 0)\n\t\t\t} {\n\t\t\t\tlevel.greyLevel\n\t\t\t}\n\t\t}.asColourSvg\n\t}",
);

sl.addMethod(
  "List",
  "Svg",
  "asSvgPointList",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    /* Statements */
    return _join_2(
      _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym139 = _assertIsOfSize_2(_each, 2),
          _x = _at_2(__genSym139, 1),
          _y = _at_2(__genSym139, 2);
        /* Statements */
        return _format_2("%,%", [
          _printStringToFixed_2(_x, _precision),
          _printStringToFixed_2(_y, _precision),
        ]);
      }),
      " ",
    );
  },
  "{ :self :options |\n\t\tlet precision = options::precision;\n\t\tself.collect { :each |\n\t\t\tlet [x, y] = each;\n\t\t\t'%,%'.format([\n\t\t\t\tx.printStringToFixed(precision),\n\t\t\t\ty.printStringToFixed(precision)\n\t\t\t])\n\t\t}.join(' ')\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Svg",
  "asSvgViewBox",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _margin = _at_2(_options, "margin");
    /* Statements */
    return _unwords_1(
      _collect_2([
        _hyphenMinus_2(_at_2(_lowerLeft_1(_self), 1), _margin),
        _hyphenMinus_2(_at_2(_lowerLeft_1(_self), 2), _margin),
        _plusSign_2(_width_1(_self), _asterisk_2(_margin, 2)),
        _plusSign_2(_height_1(_self), _asterisk_2(_margin, 2)),
      ], function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _printStringToFixed_2(_each, _precision);
      }),
    );
  },
  "{ :self :options |\n\t\tlet precision = options::precision;\n\t\tlet margin = options::margin;\n\t\t[\n\t\t\tself.lowerLeft[1] - margin,\n\t\t\tself.lowerLeft[2] - margin,\n\t\t\tself.width + (margin * 2),\n\t\t\tself.height + (margin * 2)\n\t\t].collect { :each |\n\t\t\teach.printStringToFixed(precision)\n\t\t}.unwords\n\t}",
);
