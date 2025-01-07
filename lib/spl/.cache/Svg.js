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
    let _svgText = _contents_1(_self);
    /* Statements */
    _writeTextFile_2(_fileName, _svgText);
    return _systemCommand_3(_system, "chromium", [_fileName]);
  },
  "{ :self |\n\t\tlet fileName = '/tmp/svgImage.svg';\n\t\tlet svgText = self.contents;\n\t\tfileName.writeTextFile(svgText);\n\t\tsystem.systemCommand('chromium', [fileName])\n\t}",
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
        let __genSym103 = _assertIsOfSize_2(_each, 2),
          _x = _at_2(__genSym103, 1),
          _y = _at_2(__genSym103, 2);
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
    let _yAscending = false;
    let __genSym104 = _assertIsOfSize_2(_shape_1(_self), 2),
      _height = _at_2(__genSym104, 1),
      _width = _at_2(__genSym104, 2);
    let _bitSize = _max_2(
      _rounded_1(_solidus_2(100, _max_2(_height, _width))),
      1,
    );
    let _maxEntry = _max_1(_max_1(_abs_1(_self)));
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
        } /* Temporaries */
        let _level = _rounded_1(
          _asterisk_2(
            _hyphenMinus_2(_maxEntry, _abs_1(_at_2(_at_2(_self, _y), _x))),
            _solidus_2(255, _maxEntry),
          ),
        );
        /* Statements */
        return _format_2('<rect x="%" y="%" width="%" height="%" fill="%"/>', [
          _asterisk_2(_hyphenMinus_2(_x, 1), _bitSize),
          _asterisk_2(_hyphenMinus_2(_y, 1), _bitSize),
          _bitSize,
          _bitSize,
          _if_3(_equalsSign_2(_level, 255), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return "transparent";
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _format_2("rgb(%,%,%)", [_level, _level, _level]);
          }),
        ]);
      },
      _upOrDownTo_2(1, _width),
      _upOrDownTo_2(1, _height),
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
  '{ :self |\n\t\tlet yAscending = false;\n\t\tlet [height, width] = self.shape;\n\t\tlet bitSize = (100 / height.max(width)).rounded.max(1);\n\t\tlet maxEntry = self.abs.max.max;\n\t\tlet viewBox = Rectangle([0, 0], [width * bitSize, height * bitSize]);\n\t\tlet items = { :x :y |\n\t\t\tlet level = ((maxEntry - self[y][x].abs) * (255 / maxEntry)).rounded;\n\t\t\t\'<rect x="%" y="%" width="%" height="%" fill="%"/>\'.format([\n\t\t\t\t(x - 1 * bitSize),\n\t\t\t\t(y - 1 * bitSize),\n\t\t\t\tbitSize,\n\t\t\t\tbitSize,\n\t\t\t\t(level = 255).if {\n\t\t\t\t\t\'transparent\'\n\t\t\t\t} {\n\t\t\t\t\t\'rgb(%,%,%)\'.format([level, level, level])\n\t\t\t\t}\n\t\t\t])\n\t\t}.table(1:width, 1:height);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format([\n\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\twidth * bitSize,\n\t\t\t\theight * bitSize,\n\t\t\t\tviewBox.asSvgViewBox(margin: 0, precision: 0)\n\t\t\t]),\n\t\t\t\'<g stroke="none" transform="translate(0, %) scale(1, %)">\'.format([\n\t\t\t\tyAscending.if { height * bitSize } { 0 },\n\t\t\t\tyAscending.if { -1 } { 1 }\n\t\t\t]),\n\t\t\titems,\n\t\t\t\'</g>\',\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines.Svg\n\t}',
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
