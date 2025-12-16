/*  Requires: Decimal Interval  */

sl.addType(
  false,
  "Plot",
  "Plot",
  ["Object"],
  ["pages", "format", "options"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Plot",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "asLineDrawingXy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _segments = _catenate_1(
      _collect_2(_pages_1(_self), _segmentPlotData_1),
    );
    let _r = _asRectangle_1(_coordinateBoundingBox_1(_catenate_1(_segments)));
    let _w = _width_1(_r);
    let _h = _height_1(_r);
    let _dataRatio = _solidus_2(_w, _h);
    let _aspectRatio = _if_3(
      _lessThanSign_2(_abs_1(_hyphenMinus_2(_dataRatio, 1)), 0.075),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dataRatio;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _goldenRatio_1(1);
      }, []),
    );
    let _xScalar = _solidus_2(_aspectRatio, _solidus_2(_w, _h));
    let _scaledSegments = _collect_2(
      _segments,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_each, [[_xScalar, 1]]);
      }, ["each"]),
    );
    let _items = [];
    let _gen_1 = _caseOf_2(
      _format_1(_self),
      _Record_1([[
        "discrete",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _p,
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
                return _Line_1([[_x, 0], [_x, _y]]);
              }, ["each"]),
            );
          }, ["p"]);
        }, []),
      ], [
        "line",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return [_Line_1(_p)];
          }, ["p"]);
        }, []),
      ], [
        "pointLine",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return [_Line_1(_p), _PointCloud_1(_p)];
          }, ["p"]);
        }, []),
      ], [
        "scatter",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return [_PointCloud_1(_p)];
          }, ["p"]);
        }, []),
      ]]),
    );
    /* Statements */
    _ifTrue_2(
      _includesY_2(_r, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _items,
          _Point_1([_asterisk_2(_left_1(_r), _xScalar), 0]),
        );
      }, []),
    );
    _ifTrue_2(
      _includesX_2(_r, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_items, _Point_1([0, _upper_1(_r)]));
      }, []),
    );
    _do_2(
      _scaledSegments,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_items, _gen_1(_each));
      }, ["each"]),
    );
    return _LineDrawing_2(_items, _Record_1([["height", _height_1(_self)]]));
  }, ["self"]),
  "{ :self |\n\t\tlet segments = self.pages.collect(segmentPlotData:/1).catenate;\n\t\tlet r = segments.catenate.coordinateBoundingBox.asRectangle;\n\t\tlet w = r.width;\n\t\tlet h = r.height;\n\t\tlet dataRatio = (w / h);\n\t\tlet aspectRatio = ((dataRatio - 1).abs < 0.075).if {\n\t\t\tdataRatio\n\t\t} {\n\t\t\t1.goldenRatio\n\t\t};\n\t\tlet xScalar = aspectRatio / (w / h);\n\t\tlet scaledSegments = segments.collect { :each |\n\t\t\teach * [[xScalar, 1]]\n\t\t};\n\t\tlet items = [];\n\t\tlet gen:/1 = self.format.caseOf (\n\t\t\t'discrete': {\n\t\t\t\t{ :p |\n\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\tlet [x, y] = each;\n\t\t\t\t\t\tLine([x 0; x y])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t'line': {\n\t\t\t\t{ :p |\n\t\t\t\t\t[p.Line]\n\t\t\t\t}\n\t\t\t},\n\t\t\t'pointLine': {\n\t\t\t\t{ :p |\n\t\t\t\t\t[p.Line, p.PointCloud]\n\t\t\t\t}\n\t\t\t},\n\t\t\t'scatter': {\n\t\t\t\t{ :p |\n\t\t\t\t\t[p.PointCloud]\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\t\tr.includesY(0).ifTrue {\n\t\t\titems.add(Point([r.left * xScalar, 0]))\n\t\t};\n\t\tr.includesX(0).ifTrue {\n\t\t\titems.add(Point([0, r.upper]))\n\t\t};\n\t\tscaledSegments.do { :each |\n\t\t\titems.addAll(each.gen)\n\t\t};\n\t\tLineDrawing(items, (height: self.height))\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "asLineDrawingXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_format_1(_self), "line"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p_1 = _asUnaryBlock_1(
          _AxonometricProjection_6(_pi_1(_Fraction_2(1n, 6n)), 0, 0, 0.5, 1, 1),
        );
        let _r = [[-1, -1, 0], [+1, -1, 0], [+1, +1, 0], [-1, +1, 0]];
        let _t_1 = sl.annotateFunction(function (_list) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _list";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _list,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar2 = _assertIsOfSize_2(_each, 3);
              let _x = _at_2(__SplVar2, 1);
              let _y = _at_2(__SplVar2, 2);
              let _z = _at_2(__SplVar2, 3);
              /* Statements */
              return _p_1([_negate_1(_x), _z, _negate_1(_y)]);
            }, ["each"]),
          );
        }, ["list"]);
        let _l = _collect_2(
          _pages_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _Line_1(_t_1(_each));
          }, ["each"]),
        );
        /* Statements */
        return _LineDrawing_2(_l, _Record_1([["height", _height_1(_self)]]));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "n×3 matrix: format must be line");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.format = 'line').if {\n\t\t\tlet p:/1 = AxonometricProjection(\n\t\t\t\t1/6.pi, 0, 0,\n\t\t\t\t0.5, 1, 1\n\t\t\t).asUnaryBlock;\n\t\t\tlet r = [\n\t\t\t\t-1 -1 0;\n\t\t\t\t+1 -1 0;\n\t\t\t\t+1 +1 0;\n\t\t\t\t-1 +1 0\n\t\t\t];\n\t\t\tlet t = { :list |\n\t\t\t\tlist.collect { :each |\n\t\t\t\t\tlet [x, y, z] = each;\n\t\t\t\t\t[x.negate, z, y.negate].p\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet l = self.pages.collect { :each |\n\t\t\t\teach.t.Line\n\t\t\t};\n\t\t\tLineDrawing(l, (height: self.height))\n\t\t} {\n\t\t\tself.error('n×3 matrix: format must be line')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "asLineDrawingY",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asLineDrawing_1(
      _Plot_2(
        _collect_2(
          _pages_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _withIndexCollect_2(
              _each,
              sl.annotateFunction(function (_item, _x) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _item, _x";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar3 = _assertIsOfSize_2(_item, 1);
                let _y = _at_2(__SplVar3, 1);
                /* Statements */
                return [_x, _y];
              }, ["item", "x"]),
            );
          }, ["each"]),
        ),
        _format_1(_self),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tPlot(\n\t\t\tself.pages.collect { :each |\n\t\t\t\teach.withIndexCollect { :item :x |\n\t\t\t\t\tlet [y] = item;\n\t\t\t\t\t[x, y]\n\t\t\t\t}\n\t\t\t},\n\t\t\tself.format\n\t\t).asLineDrawing\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _format_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "array",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar4 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar4, 1);
            /* Statements */
            return _asLineDrawing_1(_ColourGrid_1(_contents));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "matrix",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar5 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar5, 1);
            /* Statements */
            return _asLineDrawing_1(
              _ColourGrid_1(_greyscaleMatrix_1(_contents)),
            );
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_3(
          _columnCount_1(_self),
          [
            _hyphenMinusGreaterThanSign_2(
              1,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asLineDrawingY_1(_self);
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              2,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asLineDrawingXy_1(_self);
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              3,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asLineDrawingXyz_1(_self);
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unimplementedCase_2(_self, "asLineDrawing");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.format.caseOf(\n\t\t\t[\n\t\t\t\t'array' -> {\n\t\t\t\t\tlet [contents] = self.pages;\n\t\t\t\t\tColourGrid(contents).asLineDrawing\n\t\t\t\t},\n\t\t\t\t'matrix' -> {\n\t\t\t\t\tlet [contents] = self.pages;\n\t\t\t\t\tColourGrid(contents.greyscaleMatrix).asLineDrawing\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\tself.columnCount.caseOf(\n\t\t\t\t[\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\tself.asLineDrawingY\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\tself.asLineDrawingXy\n\t\t\t\t\t},\n\t\t\t\t\t3 -> {\n\t\t\t\t\t\tself.asLineDrawingXyz\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t) {\n\t\t\t\tself.unimplementedCase('asLineDrawing')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "columnCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _counts = _nub_1(
      _collect_2(
        _pages_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar6 = _assertIsOfSize_2(_shape_1(_each), 2);
          let _rowCount = _at_2(__SplVar6, 1);
          let _columnCount = _at_2(__SplVar6, 2);
          /* Statements */
          return _columnCount;
        }, ["each"]),
      ),
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_counts), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anyOne_1(_counts);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "columnCount: pages have differing column counts",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet counts = self.pages.collect { :each |\n\t\t\tlet [rowCount, columnCount] = each.shape;\n\t\t\tcolumnCount\n\t\t}.nub;\n\t\t(counts.size = 1).if {\n\t\t\tcounts.anyOne\n\t\t} {\n\t\t\tself.error('columnCount: pages have differing column counts')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _format_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "array",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar7 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar7, 1);
            /* Statements */
            return _drawing_1(_ColourGrid_1(_contents));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "graph",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar8 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _graph = _at_2(__SplVar8, 1);
            /* Statements */
            return _dotDrawing_2(_graph, _options_1(_self));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "matrix",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar9 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar9, 1);
            /* Statements */
            return _drawing_1(_ColourGrid_1(_greyscaleMatrix_1(_contents)));
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawing_1(_asLineDrawing_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.format.caseOf(\n\t\t\t[\n\t\t\t\t'array' -> {\n\t\t\t\t\tlet [contents] = self.pages;\n\t\t\t\t\tColourGrid(contents).drawing\n\t\t\t\t},\n\t\t\t\t'graph' -> {\n\t\t\t\t\tlet [graph] = self.pages;\n\t\t\t\t\tgraph.dotDrawing(self.options)\n\t\t\t\t},\n\t\t\t\t'matrix' -> {\n\t\t\t\t\tlet [contents] = self.pages;\n\t\t\t\t\tColourGrid(contents.greyscaleMatrix).drawing\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\tself.asLineDrawing.drawing\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _options_1(_self),
      "height",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 100;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.options.atIfAbsent('height') {\n\t\t\t100\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "height",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_options_1(_self), "height", _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.options.atPut('height', aNumber)\n\t}",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "pageCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_pages_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.pages.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "arrayPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2([_asFloat_1(_self)], "array");
  }, ["self"]),
  "{ :self |\n\t\t[self.asFloat].Plot('array')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "autocorrelationPlot",
  ["y", "k"],
  sl.annotateFunction(function (_y, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(
      _correlationFunction_2(_y, _asList_1(_nonemptyRange_3(0, _k, 1))),
    );
  }, ["y", "k"]),
  "{ :y :k |\n\t\ty.correlationFunction([0 .. k]).discretePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "autocorrelationPlot",
  ["y"],
  sl.annotateFunction(function (_y) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _max_2(_floor_1(_asterisk_2(_log_2(_size_1(_y), 10), 10)), 1);
    /* Statements */
    return _autocorrelationPlot_2(_y, _k);
  }, ["y"]),
  "{ :y |\n\t\tlet k = (y.size.log(10) * 10).floor.max(1);\n\t\ty.autocorrelationPlot(k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "circularMatrixPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar10, 1);
    let _n = _at_2(__SplVar10, 2);
    let _theta = _solidus_2(_pi_1(2), _m);
    let _c = _greyscaleMatrix_1(_self);
    /* Statements */
    return _LineDrawing_1(_table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _AnnotatedGeometry_2(
          _AnnulusSector_3([0, 0], [_j, _plusSign_2(_j, 1)], [
            _asterisk_2(_theta, _hyphenMinus_2(_i, 1)),
            _asterisk_2(_theta, _i),
          ]),
          _Record_1([["fillColour", _at_2(_at_2(_c, _i), _j)]]),
        );
      }, ["i", "j"]),
      _to_2(1, _m),
      _to_2(1, _n),
    ));
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet theta = 2.pi / m;\n\t\tlet c = self.greyscaleMatrix;\n\t\t{ :i :j |\n\t\t\tAnnotatedGeometry(\n\t\t\t\tAnnulusSector(\n\t\t\t\t\t[0, 0],\n\t\t\t\t\t[j, j + 1],\n\t\t\t\t\t[theta * (i - 1), theta * i]\n\t\t\t\t),\n\t\t\t\t(fillColour: c[i][j])\n\t\t\t)\n\t\t}.table(1.to(m), 1.to(n)).LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "complexListPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scatterPlot_1(_realImaginary_1(_flatten_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.flatten.realImaginary.scatterPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "complexPlotBy",
  ["self", "k", "aspect:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self, _k, _aspect_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _k, _aspect_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_self, 2);
    let _min = _at_2(__SplVar11, 1);
    let _max = _at_2(__SplVar11, 2);
    let _colourFunction_1 = _asBlock_1(
      _asColourGradient_1(
        _at_3(
          _colourGradients_1(_system),
          "Kovesi",
          "Cyclic-Mygbm-30-95-C78S25",
        ),
      ),
    );
    let _r = _subdivide_2(
      _hyphenMinusHyphenMinus_2(_real_1(_min), _real_1(_max)),
      _k,
    );
    let _i = _subdivide_2(
      _hyphenMinusHyphenMinus_2(_imaginary_1(_min), _imaginary_1(_max)),
      _k,
    );
    /* Statements */
    return _Image_1(_reverse_1(_table_3(
      sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _Complex_2(_y, _x);
        /* Statements */
        return _colourFunction_1(
          _plusSign_2(_solidus_2(_aspect_1(_aBlock_1(_z)), _pi_1(2)), 0.5),
        );
      }, ["x", "y"]),
      _i,
      _r,
    )));
  }, ["self", "k", "aspect:/1", "aBlock:/1"]),
  "{ :self :k :aspect:/1 :aBlock:/1 |\n\t\tlet [min, max] = self;\n\t\tlet colourFunction:/1 = system\n\t\t.colourGradients[\n\t\t\t'Kovesi',\n\t\t\t'Cyclic-Mygbm-30-95-C78S25'\n\t\t].asColourGradient.asBlock;\n\t\tlet r = (min.real -- max.real).subdivide(k);\n\t\tlet i = (min.imaginary -- max.imaginary).subdivide(k);\n\t\t{ :x :y |\n\t\t\tlet z = Complex(y, x);\n\t\t\tcolourFunction(aBlock(z).aspect / 2.pi + 0.5)\n\t\t}.table(i, r).reverse.Image\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "complexPlot",
  ["self", "k", "aBlock:/1"],
  sl.annotateFunction(function (_self, _k, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _complexPlotBy_4(_self, _k, _arg_1, _aBlock_1);
  }, ["self", "k", "aBlock:/1"]),
  "{ :self :k :aBlock:/1 |\n\t\tcomplexPlotBy(self, k, arg:/1, aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "complexPlot",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 100;
    /* Statements */
    return _complexPlot_3(_self, _k, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet k = 100;\n\t\tcomplexPlot(self, k, aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "densityHistogramPlot",
  ["d", "b1", "b2"],
  sl.annotateFunction(function (_d, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _d, _b1, _b2";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPlot_1(_reverse_1(_transpose_1(_binCounts_3(_d, _b1, _b2))));
  }, ["d", "b1", "b2"]),
  "{ :d :b1 :b2 |\n\t\td.binCounts(b1, b2).transpose.reverse.matrixPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "densityHistogramPlot",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar12 = _assertIsOfSize_2(_minMax_1(_d), 2);
    let _p = _at_2(__SplVar12, 1);
    let _q = _at_2(__SplVar12, 2);
    let __SplVar13 = _assertIsOfSize_2(_p, 2);
    let _x1 = _at_2(__SplVar13, 1);
    let _y1 = _at_2(__SplVar13, 2);
    let __SplVar14 = _assertIsOfSize_2(_q, 2);
    let _x2 = _at_2(__SplVar14, 1);
    let _y2 = _at_2(__SplVar14, 2);
    let _k = 11;
    let _x3 = _solidus_2(_hyphenMinus_2(_x2, _x1), _k);
    let _y3 = _solidus_2(_hyphenMinus_2(_y2, _y1), _k);
    let _b1 = [_x1, _plusSign_2(_x2, _x3), _x3];
    let _b2 = [_y1, _plusSign_2(_y2, _y3), _y3];
    /* Statements */
    return _densityHistogramPlot_3(_d, _b1, _b2);
  }, ["d"]),
  "{ :d |\n\t\tlet [p, q] = d.minMax;\n\t\tlet [x1, y1] = p;\n\t\tlet [x2, y2] = q;\n\t\tlet k = 11;\n\t\tlet x3 = (x2 - x1) / k;\n\t\tlet y3 = (y2 - y1) / k;\n\t\tlet b1 = [x1, x2 + x3, x3];\n\t\tlet b2 = [y1, y2 + y3, y3];\n\t\tdensityHistogramPlot(d, b1, b2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "discretePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "discrete");
  }, ["self"]),
  "{ :self |\n\t\tself.typedPlot('discrete')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "fftPlot",
  ["x", "n", "m", "s"],
  sl.annotateFunction(function (_x, _n, _m, _s) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _n, _m, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _solidus_2(_fft_2(_x, _n), _solidus_2(_size_1(_x), 2));
    let _b = _abs_1(_solidus_2(_a, _max_1(_abs_1(_a))));
    let _c = _caseOf_2(
      _m,
      _Record_1([[
        "Half",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _first_2(_b, _solidusSolidus_2(_n, 2));
        }, []),
      ], [
        "Centered",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _fftShift_1(_b);
        }, []),
      ]]),
    );
    let _d = _abs_1(_max_2(_c, 1E-6));
    let _e = _caseOf_2(
      _s,
      _Record_1([[
        "Linear",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _d;
        }, []),
      ], [
        "Logarithmic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(20, _log_2(_d, 10));
        }, []),
      ]]),
    );
    /* Statements */
    return _linePlot_1(_e);
  }, ["x", "n", "m", "s"]),
  "{ :x :n :m :s |\n\t\tlet a = x.fft(n) / (x.size / 2);\n\t\tlet b = (a / a.abs.max).abs;\n\t\tlet c = m.caseOf (\n\t\t\t'Half': { b.first(n // 2) },\n\t\t\t'Centered': { b.fftShift }\n\t\t);\n\t\tlet d = c.max(1E-6).abs;\n\t\tlet e = s.caseOf (\n\t\t\t'Linear': { d },\n\t\t\t'Logarithmic': { 20 * d.log(10) }\n\t\t);\n\t\te.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "fftPlot",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _fftPlot_2(_x, _nextPowerOfTwo_1(_size_1(_x)));
  }, ["x"]),
  "{ :x |\n\t\tx.fftPlot(x.size.nextPowerOfTwo)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "graphPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_3(_nest_1(_self), "graph", _Record_1([["method", "neato"]]));
  }, ["self"]),
  "{ :self |\n\t\tself.nest.Plot('graph', (method: 'neato'))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "histogramListPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar15 = _assertIsOfSize_2(_self, 2);
    let _b = _at_2(__SplVar15, 1);
    let _y = _at_2(__SplVar15, 2);
    let _x = _adjacentPairsCollect_2(
      _b,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_i, _solidus_2(_hyphenMinus_2(_j, _i), 2));
      }, ["i", "j"]),
    );
    /* Statements */
    return _discretePlot_1(_transpose_1([_x, _y]));
  }, ["self"]),
  "{ :self |\n\t\tlet [b, y] = self;\n\t\tlet x = b.adjacentPairsCollect { :i :j |\n\t\t\ti + ((j - i) / 2)\n\t\t};\n\t\t[x, y].transpose.discretePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "histogramPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _histogramListPlot_1(_histogramList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.histogramList.histogramListPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "histogramPlot",
  ["self", "binSpecification"],
  sl.annotateFunction(function (_self, _binSpecification) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _binSpecification";
      throw new Error(errorMessage);
    } /* Statements */
    return _histogramListPlot_1(_histogramList_2(_self, _binSpecification));
  }, ["self", "binSpecification"]),
  "{ :self :binSpecification |\n\t\tself.histogramList(binSpecification).histogramListPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "lagPlot",
  ["self", "d"],
  sl.annotateFunction(function (_self, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _n = _hyphenMinus_2(_k, _d);
    let _y = _copyFromTo_3(_self, 1, _n);
    let _x = _copyFromTo_3(_self, _plusSign_2(1, _d), _k);
    /* Statements */
    return _scatterPlot_1(_transpose_1([_x, _y]));
  }, ["self", "d"]),
  "{ :self :d |\n\t\tlet k = self.size;\n\t\tlet n = k - d;\n\t\tlet y = self.copyFromTo(1, n);\n\t\tlet x = self.copyFromTo(1 + d, k);\n\t\t[x, y].transpose.scatterPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedSwitchingPlot_2(_self, "line");
  }, ["self"]),
  "{ :self |\n\t\tself.typedSwitchingPlot('line')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "matrixPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2([_asFloat_1(_self)], "matrix");
  }, ["self"]),
  "{ :self |\n\t\t[self.asFloat].Plot('matrix')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "periodogramPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(
      _log_1(
        _take_2(_periodogramArray_1(_self), _solidus_2(_size_1(_self), 2)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.periodogramArray.take(self.size / 2).log.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "pianoRollPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar16 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar16, 1);
    let _n = _at_2(__SplVar16, 2);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tMax = _injectInto_3(
          _self,
          0,
          sl.annotateFunction(function (_z, _each) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _z, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _max_2(_z, _plusSign_2(_at_2(_each, 1), _at_2(_each, 2)));
          }, ["z", "each"]),
        );
        let _tScale = _solidus_2(100, _max_2(_tMax, 20));
        let _r = _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar17 = _assertIsOfSize_2(_each, 3);
            let _t = _at_2(__SplVar17, 1);
            let _d = _at_2(__SplVar17, 2);
            let _p = _at_2(__SplVar17, 3);
            /* Statements */
            return _Rectangle_2([_asterisk_2(_t, _tScale), _p], [
              _asterisk_2(_plusSign_2(_t, _d), _tScale),
              _plusSign_2(_p, 1),
            ]);
          }, ["each"]),
        );
        /* Statements */
        return _LineDrawing_1([
          _PointCloud_1([[0, 32], [0, 60], [0, 84], [
            _asterisk_2(_tMax, _tScale),
            60,
          ]]),
          _r,
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "pianoRollPlot: not at least three-column matrix",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(n >= 3).if {\n\t\t\tlet tMax = self.injectInto(0) { :z :each |\n\t\t\t\tz.max(each[1] + each[2])\n\t\t\t};\n\t\t\tlet tScale = 100 / tMax.max(20);\n\t\t\tlet r = self.collect { :each |\n\t\t\t\tlet [t, d, p] = each;\n\t\t\t\tRectangle(\n\t\t\t\t\t[t * tScale, p],\n\t\t\t\t\t[(t + d) * tScale, (p + 1)]\n\t\t\t\t)\n\t\t\t};\n\t\t\t[\n\t\t\t\t[\n\t\t\t\t\t[0, 32],\n\t\t\t\t\t[0, 60],\n\t\t\t\t\t[0, 84],\n\t\t\t\t\t[tMax * tScale, 60]\n\t\t\t\t].PointCloud,\n\t\t\t\tr\n\t\t\t].LineDrawing\n\t\t} {\n\t\t\tself.error('pianoRollPlot: not at least three-column matrix')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "polarPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _rank_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linePlot_1(_collect_2(_self, _fromPolarCoordinates_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_k, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _linePlot_1(
              _collect_2(
                _self,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _collect_2(_each, _fromPolarCoordinates_1);
                }, ["each"]),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "polarPlot");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.rank;\n\t\t(k = 2).if {\n\t\t\tself.collect(fromPolarCoordinates:/1).linePlot\n\t\t} {\n\t\t\t(k = 3).if {\n\t\t\t\tself.collect { :each |\n\t\t\t\t\teach.collect(fromPolarCoordinates:/1)\n\t\t\t\t}.linePlot\n\t\t\t} {\n\t\t\t\tself.error('polarPlot')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "poincarePlot",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _hyphenMinus_2(_size_1(_x), _n);
    /* Statements */
    return _scatterPlot_1(
      _toCollect_3(
        1,
        _m,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return [_at_2(_x, _i), _at_2(_x, _plusSign_2(_i, _n))];
        }, ["i"]),
      ),
    );
  }, ["x", "n"]),
  "{ :x :n |\n\t\tlet m = x.size - n;\n\t\t1.toCollect(m) { :i |\n\t\t\t[x[i], x[i + n]]\n\t\t}.scatterPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "poincarePlot",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _poincarePlot_2(_x, 1);
  }, ["x"]),
  "{ :x |\n\t\tx.poincarePlot(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "pointLinePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedSwitchingPlot_2(_self, "pointLine");
  }, ["self"]),
  "{ :self |\n\t\tself.typedSwitchingPlot('pointLine')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "reliefPlot",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar18 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar18, 1);
    let _n = _at_2(__SplVar18, 2);
    let __SplVar19 = _assertIsOfSize_2(_deepMinMax_1(_self), 2);
    let _z0 = _at_2(__SplVar19, 1);
    let _z1 = _at_2(__SplVar19, 2);
    let _colourFunction_1 = sl.annotateFunction(function (_z) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _z";
        throw new Error(errorMessage);
      } /* Statements */
      return _hslToRgb_1([_z, 0.75, 0.75]);
    }, ["z"]);
    let _data = _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _colourFunction_1(
          _rescale_3(_at_2(_at_2(_self, _i), _j), [_z0, _z1], [0, 1]),
        );
      }, ["i", "j"]),
      _to_2(1, _m),
      _to_2(1, _n),
    );
    /* Statements */
    _ifFalse_2(
      _at_2(_options, "dataReversed"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reverse_1(_data);
      }, []),
    );
    return _Image_1(_data);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet [m, n] = self.shape;\n\t\tlet [z0, z1] = self.deepMinMax;\n\t\tlet colourFunction = { :z |\n\t\t\t[z, 0.75, 0.75].hslToRgb\n\t\t};\n\t\tlet data = { :i :j |\n\t\t\tself[i][j]\n\t\t\t.rescale([z0, z1], [0, 1])\n\t\t\t.colourFunction\n\t\t}.table(1.to(m), 1.to(n));\n\t\toptions['dataReversed'].ifFalse {\n\t\t\tdata.reverse\n\t\t};\n\t\tdata.Image\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "reliefPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reliefPlot_2(_self, _Record_1([["dataReversed", false]]));
  }, ["self"]),
  "{ :self |\n\t\tself.reliefPlot(dataReversed: false)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "runSequencePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _scatterPlot_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "runSequencePlot: invalid data");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.scatterPlot\n\t\t} {\n\t\t\tself.error('runSequencePlot: invalid data')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "scatterPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedSwitchingPlot_2(_self, "scatter");
  }, ["self"]),
  "{ :self |\n\t\tself.typedSwitchingPlot('scatter')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "segmentPlotData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFinite_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_segment, _each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _isEmpty_1(_segment),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _segment);
                return _segment = [];
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    _ifFalse_2(
      _isEmpty_1(_segment),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _segment);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet segment = [];\n\t\tself.do { :each |\n\t\t\teach.isFinite.if {\n\t\t\t\tsegment.add(each)\n\t\t\t} {\n\t\t\t\tsegment.isEmpty.ifFalse {\n\t\t\t\t\tanswer.add(segment);\n\t\t\t\t\tsegment := []\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tsegment.isEmpty.ifFalse {\n\t\t\tanswer.add(segment)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "signalPlot",
  ["y", "i"],
  sl.annotateFunction(function (_y, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _signalPlot_1(
      _Record_1([["data", _y], ["domain", _i], ["plotType", "Line"]]),
    );
  }, ["y", "i"]),
  "{ :y :i |\n\t\tsignalPlot (\n\t\t\tdata: y,\n\t\t\tdomain: i,\n\t\t\tplotType: 'Line'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "signalPlot",
  ["y"],
  sl.annotateFunction(function (_y) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _signalPlot_2(_y, _hyphenMinusHyphenMinus_2(-1, 1));
  }, ["y"]),
  "{ :y |\n\t\ty.signalPlot(-1 -- 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "spectralPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _r = _round_1(_asterisk_2(0.025, _k));
    let _n = _nextPowerOfTwo_1(_k);
    let _d = _padRight_3(_self, [_n], 0);
    let _p = _absSquare_1(
      _take_2(_solidus_2(_fft_1(_d), _n), _solidus_2(_n, 2)),
    );
    /* Statements */
    _atPut_3(_p, 1, 0);
    return _linePlot_1(_gaussianFilter_2(_asterisk_2(_p, 10), _r));
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size;\n\t\tlet r = (0.025 * k).round;\n\t\tlet n = k.nextPowerOfTwo;\n\t\tlet d = self.padRight([n], 0);\n\t\tlet p = (d.fft / n).take(n / 2).absSquare;\n\t\tp[1] := 0;\n\t\t(p * 10).gaussianFilter(r).linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "stackedListPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _level = _at_2(_self, 1);
    let _data = [_copy_1(_level)];
    /* Statements */
    _toDo_3(
      2,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _level = _plusSign_2(_level, _at_2(_self, _i));
        return _add_2(_data, _copy_1(_level));
      }, ["i"]),
    );
    return _linePlot_1(_data);
  }, ["self"]),
  "{ :self |\n\t\tlet level = self[1];\n\t\tlet data = [level.copy];\n\t\t2.toDo(self.size) { :i |\n\t\t\tlevel := level + self[i];\n\t\t\tdata.add(level.copy)\n\t\t};\n\t\tdata.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "stepPlotLineData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _withIndexDo_2(
          _self,
          sl.annotateFunction(function (_each, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _index";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, [_index, _each]);
            return _add_2(_answer, [_plusSign_2(_index, 1), _each]);
          }, ["each", "index"]),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
            let __SplVar20 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SplVar20, 1);
            let _n = _at_2(__SplVar20, 2);
            /* Statements */
            return _if_3(
              _equalsSign_2(_n, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x1 = _at_2(_at_2(_self, 1), 1);
                let _answer = [];
                /* Statements */
                _do_2(
                  _self,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let __SplVar21 = _assertIsOfSize_2(_each, 2);
                    let _x2 = _at_2(__SplVar21, 1);
                    let _y = _at_2(__SplVar21, 2);
                    /* Statements */
                    _add_2(_answer, [_x1, _y]);
                    _add_2(_answer, [_x2, _y]);
                    return _x1 = _x2;
                  }, ["each"]),
                );
                return _answer;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _collect_2(_self, _stepPlotLineData_1);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_self, _stepPlotLineData_1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet answer = [];\n\t\t\tself.withIndexDo { :each :index |\n\t\t\t\tanswer.add([index, each]);\n\t\t\t\tanswer.add([index + 1, each])\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet [m, n] = self.shape;\n\t\t\t\t(n = 2).if {\n\t\t\t\t\tlet x1 = self[1][1];\n\t\t\t\t\tlet answer = [];\n\t\t\t\t\tself.do { :each |\n\t\t\t\t\t\tlet [x2, y] = each;\n\t\t\t\t\t\tanswer.add([x1, y]);\n\t\t\t\t\t\tanswer.add([x2, y]);\n\t\t\t\t\t\tx1 := x2\n\t\t\t\t\t};\n\t\t\t\t\tanswer\n\t\t\t\t} {\n\t\t\t\t\tself.collect(stepPlotLineData:/1)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.collect(stepPlotLineData:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "stepPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_stepPlotLineData_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.stepPlotLineData.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "surfacePlot",
  ["self", "k", "aBlock:/2"],
  sl.annotateFunction(function (_self, _k, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar22 = _assertIsOfSize_2(_self, 2);
    let _u = _at_2(__SplVar22, 1);
    let _v = _at_2(__SplVar22, 2);
    let __SplVar23 = _assertIsOfSize_2(_k, 2);
    let _m = _at_2(__SplVar23, 1);
    let _n = _at_2(__SplVar23, 2);
    let _i = _subdivide_2(
      _hyphenMinusHyphenMinus_2(_min_1(_u), _max_1(_u)),
      _m,
    );
    let _j = _subdivide_2(
      _hyphenMinusHyphenMinus_2(_min_1(_v), _max_1(_v)),
      _n,
    );
    /* Statements */
    return _surfacePlot_1(_table_3(_aBlock_2, _i, _j));
  }, ["self", "k", "aBlock:/2"]),
  "{ :self :k :aBlock:/2 |\n\t\tlet [u, v] = self;\n\t\tlet [m, n] = k;\n\t\tlet i = (u.min -- u.max).subdivide(m);\n\t\tlet j = (v.min -- v.max).subdivide(n);\n\t\ttable(aBlock:/2, i, j).surfacePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "surfacePlot",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _surfacePlot_3(_self, [15, 15], _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.surfacePlot([15 15], aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "surfacePlot",
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
        let __SplVar24 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar24, 1);
        let _n = _at_2(__SplVar24, 2);
        /* Statements */
        return _surfacePlot_1(_table_3(
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return [_i, _j, _at_3(_self, _i, _j)];
          }, ["i", "j"]),
          _to_2(1, _m),
          _to_2(1, _n),
        ));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar25 = _assertIsOfSize_2(_shape_1(_self), 3);
        let _m = _at_2(__SplVar25, 1);
        let _n = _at_2(__SplVar25, 2);
        let __SplUnused39 = _at_2(__SplVar25, 3);
        let _p = _toCollect_3(
          1,
          _m,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toCollect_3(
              1,
              _n,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_at_2(_self, _i), _j);
              }, ["j"]),
            );
          }, ["i"]),
        );
        let _q = _toCollect_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _toCollect_3(
              1,
              _m,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_at_2(_self, _i), _j);
              }, ["i"]),
            );
          }, ["j"]),
        );
        /* Statements */
        return _linePlot_1(_plusSignPlusSign_2(_p, _q));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\t{ :i :j |\n\t\t\t\t[i, j, self[i,j]]\n\t\t\t}.table(1.to(m), 1.to(n)).surfacePlot\n\t\t} {\n\t\t\tlet [m, n, _] = self.shape;\n\t\t\tlet p = 1.toCollect(m) { :i |\n\t\t\t\t1.toCollect(n) { :j |\n\t\t\t\t\tself[i][j]\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet q = 1.toCollect(n) { :j |\n\t\t\t\t1.toCollect(m) { :i |\n\t\t\t\t\tself[i][j]\n\t\t\t\t}\n\t\t\t};\n\t\t\t(p ++ q).linePlot\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "timelinePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _timelinePlot_1([_self]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x0 = _deepMin_1(_self);
        let _x1 = _deepMax_1(_self);
        let _k = _size_1(_self);
        let _y0 = _max_2(_solidus_2(_hyphenMinus_2(_x1, _x0), 4), _k);
        let _p = [[_x0, _plusSign_2(_k, 2)]];
        /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(
              _at_2(_self, _i),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_p, [_x, _i]);
              }, ["x"]),
            );
          }, ["i"]),
        );
        return _scatterPlot_1(_p);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\t[self].timelinePlot\n\t\t} {\n\t\t\tlet x0 = self.deepMin;\n\t\t\tlet x1 = self.deepMax;\n\t\t\tlet k = self.size;\n\t\t\tlet y0 = ((x1 - x0) / 4).max(k);\n\t\t\tlet p = [[x0, k + 2]];\n\t\t\t1.toDo(k) { :i |\n\t\t\t\tself[i].do { :x |\n\t\t\t\t\tp.add([x, i])\n\t\t\t\t}\n\t\t\t};\n\t\t\tp.scatterPlot\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "typedSwitchingPlot",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isArray_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _typedPlot_2(_self, _format);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _allSatisfy_2(_self, _isVector_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _typedVectorPlot_2(_self, _format);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _typedPlot_2(_self, _format);
          }, []),
        );
      }, []),
    );
  }, ["self", "format"]),
  "{ :self :format |\n\t\tself.isArray.if {\n\t\t\tself.typedPlot(format)\n\t\t} {\n\t\t\tself.allSatisfy(isVector:/1).if {\n\t\t\t\tself.typedVectorPlot(format)\n\t\t\t} {\n\t\t\t\tself.typedPlot(format)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "typedVectorPlot",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_self, _isVector_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Plot_2(
          _collect_2(
            _self,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _withIndexCollect_2(
                _each,
                sl.annotateFunction(function (_y, _x) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _y, _x";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return [_x, _y];
                }, ["y", "x"]),
              );
            }, ["each"]),
          ),
          _format,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "typedVectorPlot: invalid data");
      }, []),
    );
  }, ["self", "format"]),
  "{ :self :format |\n\t\tself.allSatisfy(isVector:/1).if {\n\t\t\tself.collect { :each |\n\t\t\t\teach.withIndexCollect { :y :x |\n\t\t\t\t\t[x, y]\n\t\t\t\t}\n\t\t\t}.Plot(format)\n\t\t} {\n\t\t\tself.error('typedVectorPlot: invalid data')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "typedPlot",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Statements */
    _self = _asFloat_1(_self);
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _typedVectorPlot_2([_self], _format);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isColumnVector_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _typedVectorPlot_2([_catenate_1(_self)], _format);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isSmallFloatMatrix_1(_self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar26 = _assertIsOfSize_2(_shape_1(_self), 2);
                let _m = _at_2(__SplVar26, 1);
                let _n = _at_2(__SplVar26, 2);
                /* Statements */
                return _if_3(
                  _lessThanSignEqualsSign_2(_n, 3),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _Plot_2([_self], _format);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _typedVectorPlot_2(_self, _format);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Plot_2(_self, _format);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "format"]),
  "{ :self :format |\n\t\tself := self.asFloat;\n\t\tself.isVector.if {\n\t\t\t[self].typedVectorPlot(format)\n\t\t} {\n\t\t\tself.isColumnVector.if {\n\t\t\t\t[self.catenate].typedVectorPlot(format)\n\t\t\t} {\n\t\t\t\tself.isSmallFloatMatrix.if {\n\t\t\t\t\tlet [m, n] = self.shape;\n\t\t\t\t\t(n <= 3).if {\n\t\t\t\t\t\t[self].Plot(format)\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.typedVectorPlot(format)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tself.Plot(format)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "Plot",
  ["self", "format", "options"],
  sl.annotateFunction(function (_self, _format, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _format, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newPlot_0(), _self, _format, _options);
  }, ["self", "format", "options"]),
  "{ :self :format :options |\n\t\tnewPlot().initializeSlots(self, format, options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Graph",
  "Plot",
  "Plot",
  ["self", "format", "options"],
  sl.annotateFunction(function (_self, _format, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _format, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newPlot_0(), _self, _format, _options);
  }, ["self", "format", "options"]),
  "{ :self :format :options |\n\t\tnewPlot().initializeSlots(self, format, options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "Plot",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_3(_self, _format, _Record_0());
  }, ["self", "format"]),
  "{ :self :format |\n\t\tPlot(self, format, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Graph",
  "Plot",
  "Plot",
  ["self", "format"],
  sl.annotateFunction(function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_3(_self, _format, _Record_0());
  }, ["self", "format"]),
  "{ :self :format |\n\t\tPlot(self, format, (:))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "discreteFunctionPlot",
  ["domain", "blockList"],
  sl.annotateFunction(function (_domain, _blockList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _blockList";
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_3(_domain, _blockList, _discretePlot_1);
  }, ["domain", "blockList"]),
  "{ :domain :blockList |\n\t\tdomain.functionPlot(blockList, discretePlot:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "functionPlot",
  ["domain", "blockList", "plotter:/1"],
  sl.annotateFunction(function (_domain, _blockList, _plotter_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _blockList, _plotter_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _plotter_1(
      _collect_2(
        _nest_1(_blockList),
        sl.annotateFunction(function (_aBlock_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _aBlock_1";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _domain,
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _y = _aBlock_1(_x);
              /* Statements */
              return _if_3(
                _isList_1(_y),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _y;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _isComplex_1(_y),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _realImaginary_1(_y);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [_x, _y];
                    }, []),
                  );
                }, []),
              );
            }, ["x"]),
          );
        }, ["aBlock:/1"]),
      ),
    );
  }, ["domain", "blockList", "plotter:/1"]),
  "{ :domain :blockList :plotter:/1 |\n\t\tblockList.nest.collect { :aBlock:/1 |\n\t\t\tdomain.collect { :x |\n\t\t\t\tlet y = aBlock(x);\n\t\t\t\ty.isList.if {\n\t\t\t\t\ty\n\t\t\t\t} {\n\t\t\t\t\ty.isComplex.if {\n\t\t\t\t\t\ty.realImaginary\n\t\t\t\t\t} {\n\t\t\t\t\t\t[x, y]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}.plotter\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "functionPlot",
  ["domain", "blockList"],
  sl.annotateFunction(function (_domain, _blockList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _blockList";
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_3(_domain, _blockList, _linePlot_1);
  }, ["domain", "blockList"]),
  "{ :domain :blockList |\n\t\tdomain.functionPlot(blockList, linePlot:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "parametricPlot",
  ["domain", "xBlock:/1", "yBlock:/1"],
  sl.annotateFunction(function (_domain, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _xBlock_1, _yBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_collect_2(
      _domain,
      sl.annotateFunction(function (_u) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _u";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _xBlock_1(_u);
        let _y = _yBlock_1(_u);
        /* Statements */
        return [_x, _y];
      }, ["u"]),
    ));
  }, ["domain", "xBlock:/1", "yBlock:/1"]),
  "{ :domain :xBlock:/1 :yBlock:/1 |\n\t\tdomain.collect { :u |\n\t\t\tlet x = xBlock(u);\n\t\t\tlet y = yBlock(u);\n\t\t\t[x, y]\n\t\t}.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "polarPlot",
  ["domain", "anObject"],
  sl.annotateFunction(function (_domain, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _blockList = _collect_2(
      _nest_1(_anObject),
      sl.annotateFunction(function (_aBlock_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aBlock_1";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_t) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _t";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _r = _aBlock_1(_t);
          /* Statements */
          return _fromPolarCoordinates_1([_r, _t]);
        }, ["t"]);
      }, ["aBlock:/1"]),
    );
    /* Statements */
    return _functionPlot_2(_domain, _blockList);
  }, ["domain", "anObject"]),
  "{ :domain :anObject |\n\t\tlet blockList = anObject.nest.collect { :aBlock:/1 |\n\t\t\t{ :t |\n\t\t\t\tlet r = aBlock(t);\n\t\t\t\t[r, t].fromPolarCoordinates\n\t\t\t}\n\t\t};\n\t\tdomain.functionPlot(blockList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "functionPlot",
  ["domain", "divisions", "anObject"],
  sl.annotateFunction(function (_domain, _divisions, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _divisions, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_2(_subdivide_2(_domain, _divisions), _anObject);
  }, ["domain", "divisions", "anObject"]),
  "{ :domain :divisions :anObject |\n\t\tdomain.subdivide(divisions).functionPlot(anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "functionPlot",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_3(_self, 100, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.functionPlot(100, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "logLinearPlot",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 100;
    let __SplVar27 = _assertIsOfSize_2(_log_1(_minMax_1(_self)), 2);
    let _a = _at_2(__SplVar27, 1);
    let _b = _at_2(__SplVar27, 2);
    let _h = _solidus_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_k, 1));
    let _x = _toCollect_3(
      0,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _exp_1(_plusSign_2(_a, _asterisk_2(_i, _h)));
      }, ["i"]),
    );
    /* Statements */
    return _linePlot_1(
      _collect_2(
        _nest_1(_operand),
        sl.annotateFunction(function (_aBlock_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _aBlock_1";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _x,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _aBlock_1(_each);
            }, ["each"]),
          );
        }, ["aBlock:/1"]),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet k = 100;\n\t\tlet [a, b] = self.minMax.log;\n\t\tlet h = (b - a) / (k - 1);\n\t\tlet x = 0.toCollect(k - 1) { :i |\n\t\t\t(a + (i * h)).exp\n\t\t};\n\t\toperand.nest.collect { :aBlock:/1 |\n\t\t\tx.collect { :each |\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "logPlot",
  ["self", "divisions", "operand"],
  sl.annotateFunction(function (_self, _divisions, _operand) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_3(
      _self,
      _divisions,
      _collect_2(
        _nest_1(_operand),
        sl.annotateFunction(function (_f_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _f_1";
            throw new Error(errorMessage);
          } /* Statements */
          return sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _log_1(_f_1(_x));
          }, ["x"]);
        }, ["f:/1"]),
      ),
    );
  }, ["self", "divisions", "operand"]),
  "{ :self :divisions :operand |\n\t\tself.functionPlot(\n\t\t\tdivisions,\n\t\t\toperand.nest.collect { :f:/1 |\n\t\t\t\t{ :x |\n\t\t\t\t\tf(x).log\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "logPlot",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _logPlot_3(_self, 100, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.logPlot(100, operand)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "parametricPlot",
  ["self", "divisions", "xBlock:/1", "yBlock:/1"],
  sl.annotateFunction(function (_self, _divisions, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _divisions, _xBlock_1, _yBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _parametricPlot_3(
      _subdivide_2(_self, _divisions),
      _xBlock_1,
      _yBlock_1,
    );
  }, ["self", "divisions", "xBlock:/1", "yBlock:/1"]),
  "{ :self :divisions :xBlock:/1 :yBlock:/1 |\n\t\tself.subdivide(divisions).parametricPlot(xBlock:/1, yBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "parametricPlot",
  ["self", "xBlock:/1", "yBlock:/1"],
  sl.annotateFunction(function (_self, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _xBlock_1, _yBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _parametricPlot_4(_self, 100, _xBlock_1, _yBlock_1);
  }, ["self", "xBlock:/1", "yBlock:/1"]),
  "{ :self :xBlock:/1 :yBlock:/1 |\n\t\tself.parametricPlot(100, xBlock:/1, yBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "polarPlot",
  ["domain", "divisions", "anObject"],
  sl.annotateFunction(function (_domain, _divisions, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _divisions, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _polarPlot_2(_subdivide_2(_domain, _divisions), _anObject);
  }, ["domain", "divisions", "anObject"]),
  "{ :domain :divisions :anObject |\n\t\tdomain.subdivide(divisions).polarPlot(anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "polarPlot",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _polarPlot_3(_self, 100, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.polarPlot(100, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "surfacePlot",
  ["self", "k", "aBlock:/2"],
  sl.annotateFunction(function (_self, _k, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _min_1(_self);
    let _j = _max_1(_self);
    /* Statements */
    return _surfacePlot_3([[_i, _j], [_i, _j]], [_k, _k], _aBlock_2);
  }, ["self", "k", "aBlock:/2"]),
  "{ :self :k :aBlock:/2 |\n\t\tlet i = self.min;\n\t\tlet j = self.max;\n\t\t[i j; i j].surfacePlot([k k], aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "surfacePlot",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _surfacePlot_3(_self, 15, _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.surfacePlot(15, aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Plot",
  "matlabPeaksFunction",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _hyphenMinus_2(
        _asterisk_2(
          _asterisk_2(3, _square_1(_hyphenMinus_2(1, _x))),
          _exp_1(
            _hyphenMinus_2(
              _hyphenMinus_2(0, _square_1(_x)),
              _square_1(_plusSign_2(_y, 1)),
            ),
          ),
        ),
        _asterisk_2(
          _asterisk_2(
            10,
            _hyphenMinus_2(
              _hyphenMinus_2(_solidus_2(_x, 5), _cube_1(_x)),
              _circumflexAccent_2(_y, 5),
            ),
          ),
          _exp_1(
            _hyphenMinus_2(_hyphenMinus_2(0, _square_1(_x)), _square_1(_y)),
          ),
        ),
      ),
      _asterisk_2(
        _solidus_2(1, 3),
        _exp_1(
          _hyphenMinus_2(
            _hyphenMinus_2(0, _square_1(_plusSign_2(_x, 1))),
            _square_1(_y),
          ),
        ),
      ),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t(3 * (1 - x).square * (0 - x.square - (y + 1).square).exp)\n\t\t-\n\t\t(10 * ((x / 5) - x.cube- (y ^ 5)) * (0 - x.square - y.square).exp)\n\t\t-\n\t\t((1 / 3) * (0 - (x + 1).square - y.square).exp)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "carpetPlot",
  ["f:/2", "v", "n"],
  sl.annotateFunction(function (_f_2, _v, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _f_2, _v, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar28 = _assertIsOfSize_2(_v, 2);
    let _a = _at_2(__SplVar28, 1);
    let _b = _at_2(__SplVar28, 2);
    let __SplVar29 = _assertIsOfSize_2(_n, 2);
    let _i = _at_2(__SplVar29, 1);
    let _j = _at_2(__SplVar29, 2);
    let _aR = _resample_2(_a, _i);
    let _bR = _resample_2(_b, _j);
    /* Statements */
    return _linePlot_1(
      _catenate_1([
        _collect_2(
          _a,
          sl.annotateFunction(function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _bR,
              sl.annotateFunction(function (_q) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _q";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_2(_p, _q);
              }, ["q"]),
            );
          }, ["p"]),
        ),
        _collect_2(
          _b,
          sl.annotateFunction(function (_q) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _aR,
              sl.annotateFunction(function (_p) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _p";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_2(_p, _q);
              }, ["p"]),
            );
          }, ["q"]),
        ),
      ]),
    );
  }, ["f:/2", "v", "n"]),
  "{ :f:/2 :v :n |\n\t\tlet [a, b] = v;\n\t\tlet [i, j] = n;\n\t\tlet aR = a.resample(i);\n\t\tlet bR = b.resample(j);\n\t\t[\n\t\t\ta.collect { :p |\n\t\t\t\tbR.collect { :q |\n\t\t\t\t\tf(p, q)\n\t\t\t\t}\n\t\t\t},\n\t\t\tb.collect { :q |\n\t\t\t\taR.collect { :p |\n\t\t\t\t\tf(p, q)\n\t\t\t\t}\n\t\t\t}\n\t\t].catenate.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "cobwebPlot",
  ["f:/1", "a0", "n"],
  sl.annotateFunction(function (_f_1, _a0, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _f_1, _a0, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a1 = _f_1(_a0);
    let _r = [];
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a2 = _f_1(_a1);
        /* Statements */
        _addAll_2(_r, [[_a0, _a1], [_a1, _a1], [_a1, _a2]]);
        _a0 = _a1;
        return _a1 = _a2;
      }, []),
    );
    return _linePlot_1(_r);
  }, ["f:/1", "a0", "n"]),
  "{ :f:/1 :a0 :n |\n\t\tlet a1 = f(a0);\n\t\tlet r = [];\n\t\tn.timesRepeat {\n\t\t\tlet a2 = f(a1);\n\t\t\tr.addAll([a0 a1; a1 a1; a1 a2]);\n\t\t\ta0 := a1;\n\t\t\ta1 := a2\n\t\t};\n\t\tr.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "conformalPlot",
  ["f:/1", "v", "m", "n"],
  sl.annotateFunction(function (_f_1, _v, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_1, _v, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar30 = _assertIsOfSize_2(_v, 2);
    let _p = _at_2(__SplVar30, 1);
    let _q = _at_2(__SplVar30, 2);
    let __SplVar31 = _assertIsOfSize_2(_m, 2);
    let _i = _at_2(__SplVar31, 1);
    let _j = _at_2(__SplVar31, 2);
    /* Statements */
    return _carpetPlot_3(
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _realImaginary_1(_f_1(_Complex_2(_a, _b)));
      }, ["a", "b"]),
      [
        _asList_1(
          _discretize_2(
            _hyphenMinusHyphenMinus_2(_real_1(_p), _real_1(_q)),
            _i,
          ),
        ),
        _asList_1(
          _discretize_2(
            _hyphenMinusHyphenMinus_2(_imaginary_1(_p), _imaginary_1(_q)),
            _j,
          ),
        ),
      ],
      _n,
    );
  }, ["f:/1", "v", "m", "n"]),
  "{ :f:/1 :v :m :n |\n\t\tlet [p, q] = v;\n\t\tlet [i, j] = m;\n\t\t{ :a :b |\n\t\t\tf(Complex(a, b)).realImaginary\n\t\t}.carpetPlot(\n\t\t\t[\n\t\t\t\t(p.real -- q.real).discretize(i).asList,\n\t\t\t\t(p.imaginary -- q.imaginary).discretize(j).asList\n\t\t\t],\n\t\t\tn\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "contourPlot",
  ["self:/2", "xList", "yList", "zList"],
  sl.annotateFunction(function (_self_2, _xList, _yList, _zList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self_2, _xList, _yList, _zList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _table_3(_self_2, _xList, _yList);
    let _l = _List_2(_size_1(_zList), []);
    /* Statements */
    _bourkeContourAlgorithm_5(
      _d,
      _xList,
      _yList,
      _zList,
      sl.annotateFunction(function (_x1, _y1, _x2, _y2, _z, _k) {
        /* ArityCheck */
        if (arguments.length !== 6) {
          const errorMessage = "Arity: expected 6, _x1, _y1, _x2, _y2, _z, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_at_2(_l, _k), [[_x1, _y1], [_x2, _y2]]);
      }, ["x1", "y1", "x2", "y2", "z", "k"]),
    );
    return _LineDrawing_1(_collect_2(
      _l,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_connectLineSegments_2(_each, _tilde_2), _Line_1);
      }, ["each"]),
    ));
  }, ["self:/2", "xList", "yList", "zList"]),
  "{ :self:/2 :xList :yList :zList |\n\t\tlet d = self:/2.table(xList, yList);\n\t\tlet l = List(zList.size, []);\n\t\t/* let f = { :p :q | p.euclideanDistance(q).abs < 0.01 }; */\n\t\tbourkeContourAlgorithm(\n\t\t\td,\n\t\t\txList, yList,\n\t\t\tzList\n\t\t) { :x1 :y1 :x2 :y2 :z :k |\n\t\t\tl[k].add([[x1, y1], [x2, y2]])\n\t\t};\n\t\tl.collect { :each |\n\t\t\teach.connectLineSegments(~).collect(Line:/1)\n\t\t}.LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "densityPlot",
  ["self:/2", "xInterval", "yInterval"],
  sl.annotateFunction(function (_self_2, _xInterval, _yInterval) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _xInterval, _yInterval";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 100;
    /* Statements */
    return _reliefPlot_2(
      _table_3(
        _self_2,
        _discretize_2(_xInterval, _k),
        _discretize_2(_yInterval, _k),
      ),
      _Record_1([["dataReversed", true]]),
    );
  }, ["self:/2", "xInterval", "yInterval"]),
  "{ :self:/2 :xInterval :yInterval |\n\t\tlet k = 100;\n\t\tself:/2.table(\n\t\t\txInterval.discretize(k),\n\t\t\tyInterval.discretize(k)\n\t\t).reliefPlot(dataReversed: true)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "vectorPlot",
  ["self", "xInterval", "yInterval"],
  sl.annotateFunction(function (_self, _xInterval, _yInterval) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _xInterval, _yInterval";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar32 = _assertIsOfSize_2(_minMax_1(_xInterval), 2);
    let _x1 = _at_2(__SplVar32, 1);
    let _x2 = _at_2(__SplVar32, 2);
    let __SplVar33 = _assertIsOfSize_2(_minMax_1(_yInterval), 2);
    let _y1 = _at_2(__SplVar33, 1);
    let _y2 = _at_2(__SplVar33, 2);
    let _n = 16;
    let _xStep = _solidus_2(_hyphenMinus_2(_x2, _x1), _n);
    let _yStep = _solidus_2(_hyphenMinus_2(_y2, _y1), _n);
    let _minStep = _min_2(_xStep, _yStep);
    let _coordinateList = _flatten_2(
      _table_3(
        sl.annotateFunction(function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _x = _plusSign_2(
            _plusSign_2(_x1, _asterisk_2(_i, _xStep)),
            _asterisk_2(_percentSign_2(_j, 2), _solidus_2(_xStep, 2)),
          );
          let _y = _plusSign_2(_y1, _asterisk_2(_j, _yStep));
          /* Statements */
          return [_x, _y];
        }, ["i", "j"]),
        _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_n, 1), 1)),
        _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_n, 1), 1)),
      ),
      1,
    );
    /* Statements */
    return _vectorPlot_3(_coordinateList, _self, _asterisk_2(_minStep, 0.35));
  }, ["self", "xInterval", "yInterval"]),
  "{ :self :xInterval :yInterval |\n\t\tlet [x1, x2] = xInterval.minMax;\n\t\tlet [y1, y2] = yInterval.minMax;\n\t\tlet n = 16;\n\t\tlet xStep = (x2 - x1) / n;\n\t\tlet yStep = (y2 - y1) / n;\n\t\tlet minStep = xStep.min(yStep);\n\t\tlet coordinateList = { :i :j |\n\t\t\tlet x = (x1 + (i * xStep)) + ((j % 2) * (xStep / 2));\n\t\t\tlet y = y1 + (j * yStep);\n\t\t\t[x, y]\n\t\t}.table([0 .. n - 1], [0 .. n - 1]).flatten(1);\n\t\tcoordinateList.vectorPlot(self, minStep * 0.35)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Plot",
  "vectorPlot",
  ["self", "coordinateList"],
  sl.annotateFunction(function (_self, _coordinateList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _coordinateList";
      throw new Error(errorMessage);
    } /* Statements */
    return _vectorPlot_3(
      _coordinateList,
      _self,
      _asterisk_2(
        _max_1(_range_1(_minMax_1(_coordinateList))),
        _asterisk_2(_Fraction_2(1n, 16n), 0.35),
      ),
    );
  }, ["self", "coordinateList"]),
  "{ :self :coordinateList |\n\t\tcoordinateList.vectorPlot(\n\t\t\tself,\n\t\t\tcoordinateList.minMax.range.max * (1/16 * 0.35)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "vectorPlot",
  ["self", "aBlock:/2", "scalar"],
  sl.annotateFunction(function (_self, _aBlock_2, _scalar) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _scalar";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1(_collect_2(
      _self,
      sl.annotateFunction(function (_xy) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _xy";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar34 = _assertIsOfSize_2(_xy, 2);
        let _x = _at_2(__SplVar34, 1);
        let _y = _at_2(__SplVar34, 2);
        let _uv = _asterisk_2(_normalize_1(_aBlock_2(_x, _y)), _scalar);
        /* Statements */
        return [
          _Point_1(_plusSign_2(_xy, _uv)),
          _Line_1([_hyphenMinus_2(_xy, _uv), _plusSign_2(_xy, _uv)]),
        ];
      }, ["xy"]),
    ));
  }, ["self", "aBlock:/2", "scalar"]),
  "{ :self :aBlock:/2 :scalar |\n\t\tself.collect { :xy |\n\t\t\tlet [x, y] = xy;\n\t\t\tlet uv = aBlock(x, y).normalize * scalar;\n\t\t\t[\n\t\t\t\tPoint(xy + uv),\n\t\t\t\tLine([xy - uv, xy + uv])\n\t\t\t]\n\t\t}.LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "Plot",
  "discretePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_transpose_1([_key_1(_self), _value_1(_self)]));
  }, ["self"]),
  "{ :self |\n\t\t[self.key, self.value].transpose.discretePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "Plot",
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_transpose_1([_key_1(_self), _value_1(_self)]));
  }, ["self"]),
  "{ :self |\n\t\t[self.key, self.value].transpose.linePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "pathPlot",
  ["self", "timesList"],
  sl.annotateFunction(function (_self, _timesList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _timesList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar35 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _n = _at_2(__SplVar35, 1);
    let _m = _at_2(__SplVar35, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _height = 100;
        let _boundingCoordinates = _coordinateBoundingBox_1(_self);
        let _distanceList = _prefixSum_1(
          _differencesBy_2(_self, _euclideanDistance_2),
        );
        let _keyPoints = _plusSignPlusSign_2(
          [0],
          _solidus_2(_distanceList, _last_1(_distanceList)),
        );
        let _duration = _last_1(_timesList);
        let _keyTimes = _solidus_2(_timesList, _duration);
        let _keyPrecision = 4;
        /* Statements */
        _assert_1(sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_timesList), _n);
        }, []));
        return _scaledFragments_3(
          sl.annotateFunction(function (_options) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _options";
              throw new Error(errorMessage);
            } /* Statements */
            return _unlines_1([
              _format_2(
                '<path id="P1" fill="none" stroke="black" stroke-opacity="0.175" d="M% L%" />',
                [
                  _asSvgPointList_2([_first_1(_self)], _options),
                  _asSvgPointList_2(_allButFirst_1(_self), _options),
                ],
              ),
              _format_2('<circle r="%" fill="none" stroke="black">', [
                _printStringToFixed_2(
                  _solidus_2(1, _at_2(_options, "scaleFactor")),
                  _at_2(_options, "precision"),
                ),
              ]),
              _format_2(
                '  <animateMotion dur="%s" repeatCount="indefinite" calcMode="linear" keyTimes="%" keyPoints="%">',
                [
                  _printStringToFixed_2(_duration, _keyPrecision),
                  _stringJoin_2(
                    _collect_2(
                      _keyTimes,
                      sl.annotateFunction(function (_x) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _x";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _printStringToFixed_2(_x, _keyPrecision);
                      }, ["x"]),
                    ),
                    ";",
                  ),
                  _stringJoin_2(
                    _collect_2(
                      _keyPoints,
                      sl.annotateFunction(function (_x) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _x";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _printStringToFixed_2(_x, _keyPrecision);
                      }, ["x"]),
                    ),
                    ";",
                  ),
                ],
              ),
              '    <mpath href="#P1" />',
              "  </animateMotion>",
              "</circle>",
            ]);
          }, ["options"]),
          _height,
          _boundingCoordinates,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "pathPlot");
      }, []),
    );
  }, ["self", "timesList"]),
  '{ :self :timesList |\n\t\tlet [n, m] = self.shape;\n\t\t(m = 2).if {\n\t\t\tlet height = 100;\n\t\t\tlet boundingCoordinates = self.coordinateBoundingBox;\n\t\t\tlet distanceList = self.differencesBy(euclideanDistance:/2).prefixSum;\n\t\t\tlet keyPoints = [0] ++ (distanceList / distanceList.last);\n\t\t\tlet duration = timesList.last;\n\t\t\tlet keyTimes = timesList / duration;\n\t\t\tlet keyPrecision = 4;\n\t\t\t{ timesList.size = n }.assert;\n\t\t\t{ :options |\n\t\t\t\t[\n\t\t\t\t\t\'<path id="P1" fill="none" stroke="black" stroke-opacity="0.175" d="M% L%" />\'.format(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t[self.first].asSvgPointList(options),\n\t\t\t\t\t\t\tself.allButFirst.asSvgPointList(options)\n\t\t\t\t\t\t]\n\t\t\t\t\t),\n\t\t\t\t\t\'<circle r="%" fill="none" stroke="black">\'.format(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t(1 / options[\'scaleFactor\'])\n\t\t\t\t\t\t\t.printStringToFixed(options[\'precision\'])\n\t\t\t\t\t\t]\n\t\t\t\t\t),\n\t\t\t\t\t\'  <animateMotion dur="%s" repeatCount="indefinite" calcMode="linear" keyTimes="%" keyPoints="%">\'.format(\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\tduration.printStringToFixed(keyPrecision),\n\t\t\t\t\t\t\tkeyTimes.collect { :x | x.printStringToFixed(keyPrecision) }.stringJoin(\';\'),\n\t\t\t\t\t\t\tkeyPoints.collect { :x | x.printStringToFixed(keyPrecision) }.stringJoin(\';\')\n\t\t\t\t\t\t]\n\t\t\t\t\t),\n\t\t\t\t\t\'    <mpath href="#P1" />\',\n\t\t\t\t\t\'  </animateMotion>\',\n\t\t\t\t\t\'</circle>\'\n\t\t\t\t].unlines\n\t\t\t}.scaledFragments(height, boundingCoordinates)\n\t\t} {\n\t\t\tself.error(\'pathPlot\')\n\t\t}\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "pathPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _keyTimes = _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_n, 1), 1));
    /* Statements */
    return _pathPlot_2(_self, _keyTimes);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet keyTimes = [0 .. n - 1];\n\t\tself.pathPlot(keyTimes)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "sphericalPlot",
  ["self", "divisions", "aBlock:/2"],
  sl.annotateFunction(function (_self, _divisions, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _surfacePlot_3(
      _self,
      _divisions,
      sl.annotateFunction(function (_phi, _theta) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _phi, _theta";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _aBlock_2(_theta, _phi);
        /* Statements */
        return _fromSphericalCoordinates_1([_r, _theta, _phi]);
      }, ["phi", "theta"]),
    );
  }, ["self", "divisions", "aBlock:/2"]),
  "{ :self :divisions :aBlock:/2 |\n\t\tself.surfacePlot(divisions) { :phi :theta |\n\t\t\tlet r = aBlock(theta, phi);\n\t\t\t[r theta phi].fromSphericalCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "sphericalPlot",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sphericalPlot_3(_self, [15, 15], _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.sphericalPlot([15 15], aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "revolutionPlot",
  ["self", "divisions", "aBlock"],
  sl.annotateFunction(function (_self, _divisions, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _surfacePlot_3(
      _self,
      _divisions,
      _caseOf_2(_numArgs_1(_aBlock), [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_t, _theta) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _t, _theta";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar36 = _assertIsOfSize_2(_value_2(_aBlock, _t), 2);
              let _x = _at_2(__SplVar36, 1);
              let _z = _at_2(__SplVar36, 2);
              /* Statements */
              return [
                _asterisk_2(_x, _sin_1(_theta)),
                _asterisk_2(_x, _cos_1(_theta)),
                _z,
              ];
            }, ["t", "theta"]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_rho, _theta) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _rho, _theta";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _z = _value_3(_aBlock, _rho, _theta);
              /* Statements */
              return _fromCylindricalCoordinates_1([_rho, _theta, _z]);
            }, ["rho", "theta"]);
          }, []),
        ),
      ]),
    );
  }, ["self", "divisions", "aBlock"]),
  "{ :self :divisions :aBlock |\n\t\tself.surfacePlot(\n\t\t\tdivisions,\n\t\t\taBlock.numArgs.caseOf(\n\t\t\t\t[\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\t{ :t :theta |\n\t\t\t\t\t\t\tlet [x, z] = aBlock.value(t);\n\t\t\t\t\t\t\t[x * theta.sin, x * theta.cos, z]\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\t{ :rho :theta |\n\t\t\t\t\t\t\tlet z = aBlock.value(rho, theta);\n\t\t\t\t\t\t\t[rho, theta, z].fromCylindricalCoordinates\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "revolutionPlot",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _revolutionPlot_3(_self, [15, 15], _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.revolutionPlot([15, 15], aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "revolutionPlot",
  ["self", "divisions", "aBlock:/2"],
  sl.annotateFunction(function (_self, _divisions, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _revolutionPlot_3(
      [_self, _hyphenMinusHyphenMinus_2(0, _pi_1(2))],
      _divisions,
      _aBlock_2,
    );
  }, ["self", "divisions", "aBlock:/2"]),
  "{ :self :divisions :aBlock:/2 |\n\t\t[self, 0 -- 2.pi].revolutionPlot(divisions, aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "Plot",
  "revolutionPlot",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _revolutionPlot_3(_self, [15, 15], _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.revolutionPlot([15, 15], aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "colourCalculatorPlot",
  ["self", "colourList"],
  sl.annotateFunction(function (_self, _colourList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _colourList";
      throw new Error(errorMessage);
    } /* Statements */
    return _ColourGrid_1(
      _deepCollect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_colourList, _plusSign_2(_asInteger_1(_each), 1));
        }, ["each"]),
      ),
    );
  }, ["self", "colourList"]),
  "{ :self :colourList |\n\t\tself.deepCollect { :each |\n\t\t\tcolourList[each.asInteger + 1]\n\t\t}.ColourGrid\n\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Decimal",
  "Plot",
  "colourCalculatorPlot",
  ["self", "shape", "colourList"],
  sl.annotateFunction(function (_self, _shape, _colourList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _colourList";
      throw new Error(errorMessage);
    } /* Statements */
    return _colourCalculatorPlot_2(
      _reshape_2(_integerDigits_1(_self), _shape),
      _colourList,
    );
  }, ["self", "shape", "colourList"]),
  "{ :self :shape :colourList |\n\t\tself\n\t\t.integerDigits\n\t\t.reshape(shape)\n\t\t.colourCalculatorPlot(colourList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Plot",
  "residueDesignPlot",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _circlePoints_4(_m, [0, 0], 1, _pi_1(0.5));
    let _i = _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_m, 1), 1));
    let _j = _percentSign_2(_asterisk_2(_i, _n), _m);
    let _l = [];
    /* Statements */
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _at_2(_i, _k);
        let _b = _at_2(_j, _k);
        /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_a, _b),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _l,
              _Line_1([
                _at_2(_p, _plusSign_2(_a, 1)),
                _at_2(_p, _plusSign_2(_b, 1)),
              ]),
            );
          }, []),
        );
      }, ["k"]),
    );
    return _LineDrawing_1([_Circle_2([0, 0], 1), _PointCloud_1(_p), _l]);
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet p = m.circlePoints([0 0], 1, 0.5.pi);\n\t\tlet i = [0 .. m - 1];\n\t\tlet j = (i * n) % m;\n\t\tlet l = [];\n\t\t1.toDo(m) { :k |\n\t\t\tlet a = i[k];\n\t\t\tlet b = j[k];\n\t\t\t(a = b).ifFalse {\n\t\t\t\tl.add(Line([p[a + 1], p[b + 1]]))\n\t\t\t}\n\t\t};\n\t\t[\n\t\t\tCircle([0 0], 1),\n\t\t\tPointCloud(p),\n\t\t\tl\n\t\t].LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "residueSetPlot",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _sort_1(
      _nub_1(_percentSign_2(_hyphenMinus_2(_modulus, _self), _modulus)),
    );
    let _p = _circlePoints_4(_modulus, [0, 0], 1, _pi_1(_Fraction_2(1n, 2n)));
    /* Statements */
    return _LineDrawing_1([
      _Circle_2([0, 0], 1),
      _PointCloud_1(_p),
      _Polygon_1(_atAll_2(_p, _plusSign_2(_i, 1))),
    ]);
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet i = ((modulus - self) % modulus).nub.sort;\n\t\tlet p = modulus.circlePoints([0 0], 1, 1/2.pi);\n\t\t[\n\t\t\tCircle([0 0], 1),\n\t\t\tPointCloud(p),\n\t\t\tPolygon(p.atAll(i + 1))\n\t\t].LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "necklacePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _circleR = 16;
    let _dotR = 1;
    let _n = _size_1(_self);
    let _c = _collect_2(
      _hyphenMinus_2(1, _normalizeRange_2(_self, [0, 1])),
      _greyLevelOrTransparent_1,
    );
    let _p = _rotateRight_1(
      _reverse_1(
        _circlePoints_4(_n, [0, 0], _circleR, _pi_1(_Fraction_2(1n, 2n))),
      ),
    );
    let _e = _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _AnnotatedGeometry_2(
          _Circle_2(_at_2(_p, _each), _dotR),
          _Record_1([["fillColour", _at_2(_c, _each)]]),
        );
      }, ["each"]),
    );
    /* Statements */
    return _LineDrawing_1([_Circle_2([0, 0], _circleR), _e]);
  }, ["self"]),
  "{ :self |\n\t\tlet circleR = 16;\n\t\tlet dotR = 1;\n\t\tlet n = self.size;\n\t\tlet c = (1 - self.normalizeRange([0 1])).collect(greyLevelOrTransparent:/1);\n\t\tlet p = n.circlePoints([0 0], circleR, 1/2.pi).reverse.rotateRight;\n\t\tlet e = 1.toCollect(n) { :each |\n\t\t\tAnnotatedGeometry(\n\t\t\t\tCircle(p[each], dotR),\n\t\t\t\t(fillColour: c[each])\n\t\t\t)\n\t\t};\n\t\t[\n\t\t\tCircle([0 0], circleR),\n\t\t\te\n\t\t].LineDrawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "necklacePlot",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _necklacePlot_1(
      _toCollect_3(
        0,
        _hyphenMinus_2(_modulus, 1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _boole_1(_includes_2(_self, _each));
        }, ["each"]),
      ),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\t0.toCollect(modulus - 1) { :each |\n\t\t\tself.includes(each).boole\n\t\t}.necklacePlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ResidueSet",
  "Plot",
  "necklacePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _necklacePlot_2(_positionVector_1(_self), _modulus_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tnecklacePlot(\n\t\t\tself.positionVector,\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BitSet",
  "Plot",
  "necklacePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _necklacePlot_2(_positionVector_1(_self), _capacity_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tnecklacePlot(\n\t\t\tself.positionVector,\n\t\t\tself.capacity\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Plot",
  "signalPlot",
  ["o"],
  sl.annotateFunction(function (_o) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _o";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _y = _at_2(_o, "data");
    let __SplVar37 = _assertIsOfSize_2(_minMax_1(_at_2(_o, "domain")), 2);
    let _a = _at_2(__SplVar37, 1);
    let _b = _at_2(__SplVar37, 2);
    let _plot_1 = _caseOf_2(
      _at_2(_o, "plotType"),
      _Record_1([[
        "Line",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _linePlot_1;
        }, []),
      ], [
        "Step",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _stepPlot_1;
        }, []),
      ]]),
    );
    let _c = _hyphenMinus_2(_b, _a);
    /* Statements */
    return _if_3(
      _isVector_1(_y),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plot_1(_y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_y);
        let _z = 1.15;
        /* Statements */
        return _plot_1(
          _withIndexCollect_2(
            _y,
            sl.annotateFunction(function (_each, _i) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _each, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSign_2(
                _each,
                _asterisk_2(_asterisk_2(_hyphenMinus_2(_n, _i), _c), _z),
              );
            }, ["each", "i"]),
          ),
        );
      }, []),
    );
  }, ["o"]),
  "{ :o |\n\t\tlet y = o['data'];\n\t\tlet [a, b] = o['domain'].minMax;\n\t\tlet plot:/1 = o['plotType'].caseOf (\n\t\t\t'Line': { linePlot:/1 },\n\t\t\t'Step': { stepPlot:/1 }\n\t\t);\n\t\tlet c = b - a;\n\t\ty.isVector.if {\n\t\t\ty.plot\n\t\t} {\n\t\t\tlet n = y.size;\n\t\t\tlet z = 1.15;\n\t\t\ty.withIndexCollect { :each :i |\n\t\t\t\teach + ((n - i) * c * z)\n\t\t\t}.plot\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "triangularArrayPlot",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    let _k = _size_1(_at_2(_a, 1));
    let _kStep = 1;
    let _x0 = _solidus_2(_hyphenMinus_2(_n, 1), 2);
    let _xStep = -1;
    let _t = [];
    let _y = _n;
    /* Statements */
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x0 = 0;
        _xStep = 1;
        return _kStep = -1;
      }, []),
    );
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _plusSign_2(_x0, _asterisk_2(_hyphenMinus_2(_i, 1), 0.5));
        /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _at_2(_at_2(_a, _i), _j);
            /* Statements */
            _add_2(
              _t,
              _if_3(
                _equalsSign_2(_e, 0),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _AnnotatedGeometry_2(
                    _Circle_2([_x, _y], 0.4),
                    _Record_1([[
                      "strokeColour",
                      _RgbColour_2([0.5, 0.5, 0.5], 0.75),
                    ]]),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _AnnotatedGeometry_2(
                    _Circle_2([_x, _y], 0.4),
                    _Record_1([[
                      "fillColour",
                      _greyLevel_1(_hyphenMinus_2(1, _e)),
                    ]]),
                  );
                }, []),
              ),
            );
            return _x = _plusSign_2(_x, _xStep);
          }, ["j"]),
        );
        _k = _plusSign_2(_k, _kStep);
        return _y = _hyphenMinus_2(_y, 1);
      }, ["i"]),
    );
    return _GeometryCollection_1(_t);
  }, ["a"]),
  "{ :a |\n\t\tlet n = a.size;\n\t\tlet k = a[1].size;\n\t\tlet kStep = 1;\n\t\tlet x0 = (n - 1) / 2;\n\t\tlet xStep = -1;\n\t\tlet t = [];\n\t\tlet y = n;\n\t\t(k != 1).ifTrue {\n\t\t\tx0 := 0;\n\t\t\txStep := 1;\n\t\t\tkStep := -1\n\t\t};\n\t\t1.toDo(n) { :i |\n\t\t\tlet x = x0 + ((i - 1) * 0.5);\n\t\t\t1.toDo(k) { :j |\n\t\t\t\tlet e = a[i][j];\n\t\t\t\tt.add(\n\t\t\t\t\t(e = 0).if {\n\t\t\t\t\t\tAnnotatedGeometry(\n\t\t\t\t\t\t\tCircle([x y], 0.4),\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\tstrokeColour:\n\t\t\t\t\t\t\t\tRgbColour([0.5 0.5 0.5], 0.75)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t} {\n\t\t\t\t\t\tAnnotatedGeometry(\n\t\t\t\t\t\t\tCircle([x y], 0.4),\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\tfillColour: (1 - e).greyLevel\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t);\n\t\t\t\tx := x + xStep\n\t\t\t};\n\t\t\tk := k + kStep;\n\t\t\ty := y - 1\n\t\t};\n\t\tGeometryCollection(t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "partitionPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _sum_2(_self, _size_1);
    let _p = _circlePoints_4(_n, [0, 0], 100, 0);
    let _c = _Circle_2([0, 0], 100);
    let _l = _collect_2(
      _self,
      sl.annotateFunction(function (_a) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _a";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _atAll_2(_p, _a);
        let _k = _size_1(_a);
        /* Statements */
        return _if_3(
          _equalsSign_2(_k, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Disk_2(_at_2(_b, 1), 2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_k, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Line_1(_b);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Polygon_1(_b);
              }, []),
            );
          }, []),
        );
      }, ["a"]),
    );
    /* Statements */
    return _GeometryCollection_1([_l, _PointCloud_1(_p), _c]);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.sum(size:/1);\n\t\tlet p = circlePoints(n, [0 0], 100, 0);\n\t\tlet c = Circle([0 0], 100);\n\t\tlet l = self.collect { :a |\n\t\t\tlet b = p.atAll(a);\n\t\t\tlet k = a.size;\n\t\t\t(k = 1).if {\n\t\t\t\tDisk(b[1], 2)\n\t\t\t} {\n\t\t\t\t(k = 2).if {\n\t\t\t\t\tLine(b)\n\t\t\t\t} {\n\t\t\t\t\tPolygon(b)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGeometryCollection([l, p.PointCloud, c])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "murasakiDiagramConfiguration",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _intervalsOverlap_2 = sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      return _not_1(
        _verticalLine_2(
          _lessThanSign_2(_max_1(_a), _min_1(_b)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_max_1(_b), _min_1(_a));
          }, []),
        ),
      );
    }, ["a", "b"]);
    let _validateDiagram_1 = sl.annotateFunction(function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _d";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _size_1(_d);
      /* Statements */
      return _verticalLine_2(
        _lessThanSign_2(_n, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _allSatisfy_2(
            _nonemptyRange_3(1, _hyphenMinus_2(_n, 1), 1),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _noneSatisfy_2(
                _nonemptyRange_3(_plusSign_2(_i, 1), _n, 1),
                sl.annotateFunction(function (_j) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _j";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _a = _at_2(_d, _i);
                  let _b = _at_2(_d, _j);
                  /* Statements */
                  return _ampersand_2(
                    _equalsSign_2(_at_2(_a, 1), _at_2(_b, 1)),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _intervalsOverlap_2(_at_2(_a, 2), _at_2(_b, 2));
                    }, []),
                  );
                }, ["j"]),
              );
            }, ["i"]),
          );
        }, []),
      );
    }, ["d"]);
    let _isNestedWithin_2 = sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_1(_a), _min_1(_b)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_max_1(_a), _max_1(_b));
        }, []),
      );
    }, ["a", "b"]);
    let _bestCost = Infinity;
    let _bestDiagram = null;
    let _heights = _plusSign_2(
      _asterisk_2(
        _reverse_1(
          _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_size_1(_p), 1), 1)),
        ),
        0.2,
      ),
      1,
    );
    /* Statements */
    _do_2(
      _tuples_2(_heights, _size_1(_p)),
      sl.annotateFunction(function (_h) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _h";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _candidate = _transpose_1([_h, _p]);
        /* Statements */
        return _ifTrue_2(
          _validateDiagram_1(_candidate),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _cost = _hyphenMinus_2(0, _sum_2(_candidate, _first_1));
            /* Statements */
            _do_2(
              _candidate,
              sl.annotateFunction(function (_a) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _a";
                  throw new Error(errorMessage);
                } /* Statements */
                return _do_2(
                  _candidate,
                  sl.annotateFunction(function (_b) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _b";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ifTrue_2(
                      _ampersand_2(
                        _isNestedWithin_2(_at_2(_a, 2), _at_2(_b, 2)),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _greaterThanSign_2(_at_2(_a, 1), _at_2(_b, 1));
                        }, []),
                      ),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _cost = _plusSign_2(_cost, 1);
                      }, []),
                    );
                  }, ["b"]),
                );
              }, ["a"]),
            );
            return _ifTrue_2(
              _lessThanSign_2(_cost, _bestCost),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _bestCost = _cost;
                return _bestDiagram = _candidate;
              }, []),
            );
          }, []),
        );
      }, ["h"]),
    );
    return _bestDiagram;
  }, ["p"]),
  "{ :p |\n\t\t/* https://github.com/olooney/genjiko */\n\t\tlet intervalsOverlap = { :a :b |\n\t\t\t(a.max < b.min | { b.max < a.min }).not\n\t\t};\n\t\tlet validateDiagram = { :d |\n\t\t\tlet n = d.size;\n\t\t\tn < 2 | {\n\t\t\t\t(1 .. n - 1).allSatisfy { :i |\n\t\t\t\t\t(i + 1 .. n).noneSatisfy { :j |\n\t\t\t\t\t\tlet a = d[i];\n\t\t\t\t\t\tlet b = d[j];\n\t\t\t\t\t\ta[1] = b[1] & {\n\t\t\t\t\t\t\tintervalsOverlap(a[2], b[2])\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet isNestedWithin = { :a :b |\n\t\t\ta.min > b.min & { a.max < b.max }\n\t\t};\n\t\tlet bestCost = Infinity;\n\t\tlet bestDiagram = nil;\n\t\tlet heights = ([0 .. p.size - 1].reverse * 0.2) + 1;\n\t\theights.tuples(p.size).do { :h |\n\t\t\tlet candidate = [h, p].transpose;\n\t\t\tcandidate.validateDiagram.ifTrue {\n\t\t\t\tlet cost = 0 - candidate.sum(first:/1);\n\t\t\t\tcandidate.do { :a |\n\t\t\t\t\tcandidate.do { :b |\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\tisNestedWithin(a[2], b[2]) & {\n\t\t\t\t\t\t\t\ta[1] > b[1]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\t\tcost := cost + 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t(cost < bestCost).ifTrue {\n\t\t\t\t\tbestCost := cost;\n\t\t\t\t\tbestDiagram := candidate\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tbestDiagram\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "murasakiDiagram",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _murasakiDiagramConfiguration_1(_p);
    let _g = [];
    /* Statements */
    _do_2(
      _c,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar38 = _assertIsOfSize_2(_each, 2);
        let _y = _at_2(__SplVar38, 1);
        let _xList = _at_2(__SplVar38, 2);
        /* Statements */
        _y = _asterisk_2(_y, 3.5);
        _do_2(
          _xList,
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_g, _Line_1([[_x, 0], [_x, _y]]));
          }, ["x"]),
        );
        return _add_2(
          _g,
          _Line_1([[_first_1(_xList), _y], [_last_1(_xList), _y]]),
        );
      }, ["each"]),
    );
    return _GeometryCollection_1(_g);
  }, ["p"]),
  "{ :p |\n\t\tlet c = p.murasakiDiagramConfiguration;\n\t\tlet g = [];\n\t\tc.do { :each |\n\t\t\tlet [y, xList] = each;\n\t\t\ty := y * 3.5;\n\t\t\txList.do { :x |\n\t\t\t\tg.add(Line([x 0; x y]))\n\t\t\t};\n\t\t\tg.add(Line([xList.first y; xList.last y]))\n\t\t};\n\t\tGeometryCollection(g)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "divisorPlot",
  ["xRange", "yRange"],
  sl.annotateFunction(function (_xRange, _yRange) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _xRange, _yRange";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xMin = _min_1(_xRange);
    /* Statements */
    return _scatterPlot_1(
      _catenate_1(_collect_2(
        _yRange,
        sl.annotateFunction(function (_y) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _y";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _select_2(
              _xRange,
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _divisible_2(_x, _y);
              }, ["x"]),
            ),
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return [_hyphenMinus_2(_x, _xMin), _y];
            }, ["x"]),
          );
        }, ["y"]),
      )),
    );
  }, ["xRange", "yRange"]),
  "{ :xRange :yRange |\n\t\tlet xMin = xRange.min;\n\t\tyRange.collect { :y |\n\t\t\txRange.select { :x |\n\t\t\t\tx.divisible(y)\n\t\t\t}.collect { :x |\n\t\t\t\t[x - xMin, y]\n\t\t\t}\n\t\t}.catenate.scatterPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Plot",
  "divisorPlot",
  ["xRange", "yRange"],
  sl.annotateFunction(function (_xRange, _yRange) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _xRange, _yRange";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xMin = _min_1(_xRange);
    /* Statements */
    return _scatterPlot_1(
      _catenate_1(_collect_2(
        _yRange,
        sl.annotateFunction(function (_y) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _y";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _select_2(
              _xRange,
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _divisible_2(_x, _y);
              }, ["x"]),
            ),
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return [_hyphenMinus_2(_x, _xMin), _y];
            }, ["x"]),
          );
        }, ["y"]),
      )),
    );
  }, ["xRange", "yRange"]),
  "{ :xRange :yRange |\n\t\tlet xMin = xRange.min;\n\t\tyRange.collect { :y |\n\t\t\txRange.select { :x |\n\t\t\t\tx.divisible(y)\n\t\t\t}.collect { :x |\n\t\t\t\t[x - xMin, y]\n\t\t\t}\n\t\t}.catenate.scatterPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Plot",
  "fareyDiagram",
  ["n", "kind"],
  sl.annotateFunction(function (_n, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_kind, [
      _hyphenMinusGreaterThanSign_2(
        "Square",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _fareyDiagramSquare_1(_n);
        }, []),
      ),
    ]);
  }, ["n", "kind"]),
  "{ :n :kind |\n\t\tkind.caseOf(\n\t\t\t[\n\t\t\t\t'Square' -> { n.fareyDiagramSquare }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Plot",
  "fareyDiagramSquare",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = [];
    let _pt_1 = sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(_asFloat_1(_x), 100),
        _solidus_2(100, _asFloat_1(_denominator_1(_x))),
      ];
    }, ["x"]);
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _f = _fareySequence_1(_i);
        let _k = _size_1(_f);
        /* Statements */
        return _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_denominator_1(_at_2(_f, _j)), _i),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _q = _at_2(_f, _j);
                let _p = _at_2(_f, _hyphenMinus_2(_j, 1));
                let _r = _at_2(_f, _plusSign_2(_j, 1));
                let _s = _solidus_2(1, _denominator_1(_q));
                /* Statements */
                _add_2(_l, _Line_1([[_q, 0], [_q, _s]]));
                _add_2(_l, _Line_1([[_p, 0], [_q, _s], [_r, 0]]));
                _add_2(
                  _l,
                  _Line_1([[_p, _solidus_2(1, _denominator_1(_p))], [_q, 0], [
                    _r,
                    _solidus_2(1, _denominator_1(_r)),
                  ]]),
                );
                _ifTrue_2(
                  _equalsSign_2(_p, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_l, _Line_1([[0, 1], [_q, _s]]));
                  }, []),
                );
                return _ifTrue_2(
                  _equalsSign_2(_r, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_l, _Line_1([[_q, _s], [1, 1]]));
                  }, []),
                );
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _GeometryCollection_1([_Rectangle_2([0, 0], [1, 1]), _l]);
  }, ["n"]),
  "{ :n |\n\t\tlet l = [];\n\t\tlet pt = { :x |\n\t\t\t[\n\t\t\t\tx.asFloat * 100,\n\t\t\t\t100 / x.denominator.asFloat\n\t\t\t]\n\t\t};\n\t\t2.toDo(n) { :i |\n\t\t\tlet f = i.fareySequence;\n\t\t\tlet k = f.size;\n\t\t\t1.toDo(k) { :j |\n\t\t\t\t(f[j].denominator = i).ifTrue {\n\t\t\t\t\tlet q = f[j];\n\t\t\t\t\tlet p = f[j - 1];\n\t\t\t\t\tlet r = f[j + 1];\n\t\t\t\t\tlet s = 1 / q.denominator;\n\t\t\t\t\tl.add(Line([q 0; q s]));\n\t\t\t\t\tl.add(\n\t\t\t\t\t\tLine(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t[p, 0],\n\t\t\t\t\t\t\t\t[q, s],\n\t\t\t\t\t\t\t\t[r, 0]\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t\tl.add(\n\t\t\t\t\t\tLine(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t[p, 1 / p.denominator],\n\t\t\t\t\t\t\t\t[q, 0],\n\t\t\t\t\t\t\t\t[r, 1 / r.denominator]\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t\t(p = 0).ifTrue {\n\t\t\t\t\t\tl.add(Line([0 1; q s]))\n\t\t\t\t\t};\n\t\t\t\t\t(r = 1).ifTrue {\n\t\t\t\t\t\tl.add(Line([q s; 1 1]))\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGeometryCollection(\n\t\t\t[\n\t\t\t\tRectangle([0 0], [1 1]),\n\t\t\t\tl\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plot",
  "integerSequencePlot",
  ["self", "kind"],
  sl.annotateFunction(function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPlot_1(_integerSequenceMatrix_2(_self, _kind));
  }, ["self", "kind"]),
  "{ :self :kind |\n\t\tself\n\t\t.integerSequenceMatrix(kind)\n\t\t.matrixPlot\n\t}",
);
