sl.addType(
  false,
  "PlotSet",
  "PlotSet",
  ["Object"],
  ["plotMatrix"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PlotSet",
);

sl.addMethodToExistingType(
  "PlotSet",
  "PlotSet",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _plotMatrix = _plotMatrix_1(_self);
    let _rowHeight = _rowHeight_1(_self);
    let _columnWidth = _rowHeight;
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_plotMatrix), 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    /* Statements */
    return _Svg_1(
      _unlines_1([
        _format_2(
          '<svg xmlns="http://www.w3.org/2000/svg" width="%" height="%">',
          [
            _asterisk_2(_n, _asterisk_2(_columnWidth, 1.25)),
            _asterisk_2(_m, _asterisk_2(_rowHeight, 1.25)),
          ],
        ),
        _unlines_1(_catenate_1(_table_3(
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _at_2(_at_2(_plotMatrix, _i), _j);
            /* Statements */
            return _if_3(
              _isNotNil_1(_p),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _d = _asLineDrawing_1(_p);
                /* Statements */
                _height_2(_d, _rowHeight);
                return _unlines_1([
                  _format_2('<g transform="translate(%, %)">', [
                    _asterisk_2(
                      _hyphenMinus_2(_j, 1),
                      _asterisk_2(_columnWidth, 1.25),
                    ),
                    _asterisk_2(
                      _hyphenMinus_2(_i, 1),
                      _asterisk_2(_rowHeight, 1.25),
                    ),
                  ]),
                  _contents_1(_drawing_1(_d)),
                  "</g>",
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "";
              }, []),
            );
          }, ["i", "j"]),
          _rangeOrRelativeRange_3(1, _m, 1),
          _rangeOrRelativeRange_3(1, _n, 1),
        ))),
        "</svg>",
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet plotMatrix = self.plotMatrix;\n\t\tlet rowHeight = self.rowHeight;\n\t\tlet columnWidth = rowHeight;\n\t\tlet [m, n] = plotMatrix.shape;\n\t\tSvg(\n\t\t\t[\n\t\t\t\t'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"%\" height=\"%\">'.format(\n\t\t\t\t\t[\n\t\t\t\t\t\tn * (columnWidth * 1.25),\n\t\t\t\t\t\tm * (rowHeight * 1.25)\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t{ :i :j |\n\t\t\t\t\tlet p = plotMatrix[i][j];\n\t\t\t\t\tp.isNotNil.if {\n\t\t\t\t\t\tlet d = p.asLineDrawing;\n\t\t\t\t\t\td.height := rowHeight;\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t'<g transform=\"translate(%, %)\">'.format(\n\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t(j - 1) * (columnWidth * 1.25),\n\t\t\t\t\t\t\t\t\t(i - 1) * (rowHeight * 1.25)\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\td.drawing.contents,\n\t\t\t\t\t\t\t'</g>'\n\t\t\t\t\t\t].unlines\n\t\t\t\t\t} {\n\t\t\t\t\t\t''\n\t\t\t\t\t}\n\t\t\t\t}.table(1:m, 1:n).catenate.unlines,\n\t\t\t\t'</svg>'\n\t\t\t].unlines\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "PlotSet",
  "PlotSet",
  "rowHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_plotMatrix_1(_self)), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 100;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 45;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.plotMatrix.shape;\n\t\t(n = 1).if {\n\t\t\t100\n\t\t} {\n\t\t\t45\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlotSet",
  "PlotSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPlotSet_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewPlotSet().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlotSet",
  "PlotSet",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlotSet_1(_arrayReshape_3(_self, _shape, null));
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tPlotSet(\n\t\t\tself.arrayReshape(shape, nil)\n\t\t)\n\t}",
);
