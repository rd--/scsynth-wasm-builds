sl.addType(
  false,
  "ColourGrid",
  "ColourGrid",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ColourGrid",
);

sl.addMethodToExistingType(
  "ColourGrid",
  "ColourGrid",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _contents_1(_self);
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _height = _at_2(__SplVar1, 1);
    let _width = _at_2(__SplVar1, 2);
    let _cellSize = _cellSize_1(_self);
    let _yMax = _asterisk_2(_height, _cellSize);
    /* Statements */
    return _asLineDrawing_1(
      _AnnotatedGeometry_2(
        _GeometryCollection_1(
          _collect_2(
            _table_3(
              sl.annotateFunction(function (_x, _y) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _x, _y";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _colour = _asColour_1(_at_2(_at_2(_matrix, _y), _x));
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
                    } /* Temporaries */
                    let _x0 = _asterisk_2(_hyphenMinus_2(_x, 1), _cellSize);
                    let _y0 = _hyphenMinus_2(
                      _yMax,
                      _asterisk_2(_hyphenMinus_2(_y, 1), _cellSize),
                    );
                    /* Statements */
                    return _AnnotatedGeometry_2(
                      _Rectangle_2([_x0, _y0], [
                        _plusSign_2(_x0, _cellSize),
                        _plusSign_2(_y0, _cellSize),
                      ]),
                      _Record_1([["fillColour", _colour]]),
                    );
                  }, []),
                );
              }, ["x", "y"]),
              _to_2(1, _width),
              _to_2(1, _height),
            ),
            _deleteMissing_1,
          ),
        ),
        _Record_1([["strokeColour", null], ["strokeWidth", null]]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet matrix = self.contents;\n\t\tlet [height, width] = self.shape;\n\t\tlet cellSize = self.cellSize;\n\t\tlet yMax = height * cellSize;\n\t\tAnnotatedGeometry(\n\t\t\t{ :x :y |\n\t\t\t\tlet colour = matrix[y][x].asColour;\n\t\t\t\tcolour.isTransparent.if {\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\tlet x0 = (x - 1) * cellSize;\n\t\t\t\t\tlet y0 = yMax - ((y - 1) * cellSize);\n\t\t\t\t\tAnnotatedGeometry(\n\t\t\t\t\t\tRectangle(\n\t\t\t\t\t\t\t[x0, y0],\n\t\t\t\t\t\t\t[x0 + cellSize, y0 + cellSize]\n\t\t\t\t\t\t),\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\tfillColour: colour\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t}.table(\n\t\t\t\t1.to(width),\n\t\t\t\t1.to(height)\n\t\t\t).collect(deleteMissing:/1).GeometryCollection,\n\t\t\t(\n\t\t\t\tstrokeColour: nil,\n\t\t\t\tstrokeWidth: nil\n\t\t\t)\n\t\t).asLineDrawing\n\t}",
);

sl.addMethodToExistingType(
  "ColourGrid",
  "ColourGrid",
  "cellSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _max_2(
      _round_1(_solidus_2(100, _max_2(_m, _solidus_2(_n, _goldenRatio_1(1))))),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(100 / m.max(n / 1.goldenRatio)).round.max(1)\n\t}",
);

sl.addMethodToExistingType(
  "ColourGrid",
  "ColourGrid",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _contents_1(_self);
    let __SplVar3 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _height = _at_2(__SplVar3, 1);
    let _width = _at_2(__SplVar3, 2);
    let _cellSize = _cellSize_1(_self);
    let _items = _collect_2(
      _table_3(
        sl.annotateFunction(function (_x, _y) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _x, _y";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _colour = _asColour_1(_at_2(_at_2(_matrix, _y), _x));
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
                  _asterisk_2(_hyphenMinus_2(_x, 1), _cellSize),
                  _asterisk_2(_hyphenMinus_2(_y, 1), _cellSize),
                  _cellSize,
                  _cellSize,
                  _rgbString_1(_colour),
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
            _asterisk_2(_width, _cellSize),
            _asterisk_2(_height, _cellSize),
            _asSvgViewBox_2(
              _viewBox_1(_self),
              _Record_1([["margin", 0], ["precision", 0]]),
            ),
          ]),
          _items,
          "</svg>",
        ]),
      ),
    );
  }, ["self"]),
  '{ :self |\n\t\t/* Simpler form for direct drawing of matrices &etc. */\n\t\tlet matrix = self.contents;\n\t\tlet [height, width] = self.shape;\n\t\tlet cellSize = self.cellSize;\n\t\tlet items = { :x :y |\n\t\t\tlet colour = matrix[y][x].asColour;\n\t\t\tcolour.isTransparent.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\t\'<rect x="%" y="%" width="%" height="%" fill="%"/>\'.format(\n\t\t\t\t\t[\n\t\t\t\t\t\t(x - 1 * cellSize),\n\t\t\t\t\t\t(y - 1 * cellSize),\n\t\t\t\t\t\tcellSize,\n\t\t\t\t\t\tcellSize,\n\t\t\t\t\t\tcolour.rgbString\n\t\t\t\t\t]\n\t\t\t\t)\n\t\t\t}\n\t\t}.table(\n\t\t\t1.to(width),\n\t\t\t1.to(height)\n\t\t).collect(deleteMissing:/1);\n\t\t[\n\t\t\t\'<svg xmlns="%" width="%" height="%" viewBox="%">\'.format(\n\t\t\t\t[\n\t\t\t\t\t\'http://www.w3.org/2000/svg\',\n\t\t\t\t\twidth * cellSize,\n\t\t\t\t\theight * cellSize,\n\t\t\t\t\tself.viewBox.asSvgViewBox(margin: 0, precision: 0)\n\t\t\t\t]\n\t\t\t),\n\t\t\titems,\n\t\t\t\'</svg>\'\n\t\t].flatten.unlines.Svg\n\t}',
);

sl.addMethodToExistingType(
  "ColourGrid",
  "ColourGrid",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dimensions_2(_contents_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.contents.dimensions(2)\n\t}",
);

sl.addMethodToExistingType(
  "ColourGrid",
  "ColourGrid",
  "viewBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      [0, 0],
      _asterisk_2(_reverse_1(_shape_1(_self)), _cellSize_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tRectangle([0, 0], self.shape.reverse * self.cellSize)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGrid",
  "ColourGrid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newColourGrid_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewColourGrid().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGrid",
  "asColourDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asLineDrawing_1(_ColourGrid_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tColourGrid(self).asLineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ColourGrid",
  "asGreyscaleDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColourDrawing_1(_greyscaleMatrix_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.greyscaleMatrix.asColourDrawing\n\t}",
);
