/*  Requires: Interval  */

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
    let _gen_1 = _caseOf_2(_format_1(_self), [
      _hyphenMinusGreaterThanSign_2(
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
      ),
      _hyphenMinusGreaterThanSign_2(
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
      ),
      _hyphenMinusGreaterThanSign_2(
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
      ),
    ]);
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
    return _LineDrawing_1(_items);
  }, ["self"]),
  "{ :self | let segments = catenate(collect(pages(self),segmentPlotData:/1)); let r = asRectangle(coordinateBoundingBox(catenate(segments))); let w = width(r); let h = height(r); let dataRatio = (/(w, h)); let aspectRatio = if((<(abs((-(dataRatio, 1))), 0.075)), { dataRatio }, { goldenRatio(1) }); let xScalar = /(aspectRatio, (/(w, h))); let scaledSegments = collect(segments, { :each | *(each, [[xScalar, 1]]) }); let items = []; let gen:/1 = caseOf(format(self),[->('line', { { :p | [Line(p)] } }), ->('scatter', { { :p | [PointCloud(p)] } }), ->('discrete', { { :p | collect(p, { :each | let __SplVar1 = assertIsOfSize(each, 2); let x = at(__SplVar1, 1); let y = at(__SplVar1, 2); Line([[x, 0], [x, y]]) }) } })]); ifTrue(includesY(r,0), { add(items,Point([*(left(r), xScalar), 0])) }); ifTrue(includesX(r,0), { add(items,Point([0, upper(r)])) }); do(scaledSegments, { :each | addAll(items,gen(each)) }); LineDrawing(items) }",
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
        return _LineDrawing_1([_l]);
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
  "{ :self | if((=(format(self), 'line')), { let p:/1 = asUnaryBlock(AxonometricProjection(pi(Fraction(1L, 6L)), 0, 0, 0.5, 1, 1)); let r = [[-1, -1, 0], [+1, -1, 0], [+1, +1, 0], [-1, +1, 0]]; let t = { :list | collect(list, { :each | let __SplVar2 = assertIsOfSize(each, 3); let x = at(__SplVar2, 1); let y = at(__SplVar2, 2); let z = at(__SplVar2, 3); p([negate(x), z, negate(y)]) }) }; let l = collect(pages(self), { :each | Line(t(each)) }); LineDrawing([l]) }, { error(self,'n×3 matrix: format must be line') }) }",
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
  "{ :self | asLineDrawing(Plot(collect(pages(self), { :each | withIndexCollect(each, { :item :x | let __SplVar3 = assertIsOfSize(item, 1); let y = at(__SplVar3, 1); [x, y] }) }), format(self))) }",
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
  }, ["self"]),
  "{ :self | caseOf(columnCount(self), [->(1, { asLineDrawingY(self) }), ->(2, { asLineDrawingXy(self) }), ->(3, { asLineDrawingXyz(self) })], { unimplementedCase(self,'asLineDrawing') }) }",
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
          let __SplVar4 = _assertIsOfSize_2(_shape_1(_each), 2);
          let _rowCount = _at_2(__SplVar4, 1);
          let _columnCount = _at_2(__SplVar4, 2);
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
  "{ :self | let counts = nub(collect(pages(self), { :each | let __SplVar4 = assertIsOfSize(shape(each), 2); let rowCount = at(__SplVar4, 1); let columnCount = at(__SplVar4, 2); columnCount })); if((=(size(counts), 1)), { anyOne(counts) }, { error(self,'columnCount: pages have differing column counts') }) }",
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
            let __SplVar5 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar5, 1);
            /* Statements */
            return _asColourSvg_1(_contents);
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
            let __SplVar6 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _graph = _at_2(__SplVar6, 1);
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
            let __SplVar7 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SplVar7, 1);
            /* Statements */
            return _asGreyscaleSvg_1(_contents);
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
  "{ :self | caseOf(format(self), [->('array', { let __SplVar5 = assertIsOfSize(pages(self), 1); let contents = at(__SplVar5, 1); asColourSvg(contents) }), ->('graph', { let __SplVar6 = assertIsOfSize(pages(self), 1); let graph = at(__SplVar6, 1); dotDrawing(graph,options(self)) }), ->('matrix', { let __SplVar7 = assertIsOfSize(pages(self), 1); let contents = at(__SplVar7, 1); asGreyscaleSvg(contents) })], { drawing(asLineDrawing(self)) }) }",
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
  "{ :self | size(pages(self)) }",
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
  "{ :self | Plot([asFloat(self)],'array') }",
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
      _correlationFunction_2(_y, _asList_1(_upOrDownTo_2(0, _k))),
    );
  }, ["y", "k"]),
  "{ :y :k | discretePlot(correlationFunction(y,asList(upOrDownTo(0, k)))) }",
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
  "{ :y | let k = max(floor((*(log(size(y),10), 10))),1); autocorrelationPlot(y,k) }",
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
  "{ :self | scatterPlot(realImaginary(flatten(self))) }",
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
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_self, 2);
    let _min = _at_2(__SplVar8, 1);
    let _max = _at_2(__SplVar8, 2);
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
          _plusSign_2(_solidus_2(_arg_1(_aBlock_1(_z)), _pi_1(2)), 0.5),
        );
      }, ["x", "y"]),
      _i,
      _r,
    )));
  }, ["self", "k", "aBlock:/1"]),
  "{ :self :k :aBlock:/1 | let __SplVar8 = assertIsOfSize(self, 2); let min = at(__SplVar8, 1); let max = at(__SplVar8, 2); let colourFunction:/1 = asBlock(asColourGradient(at(colourGradients(system), 'Kovesi', 'Cyclic-Mygbm-30-95-C78S25'))); let r = subdivide((--(real(min), real(max))),k); let i = subdivide((--(imaginary(min), imaginary(max))),k); Image(reverse(table({ :x :y | let z = Complex(y, x); colourFunction(+(/(arg(aBlock(z)), pi(2)), 0.5)) },i, r))) }",
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
  "{ :self :aBlock:/1 | let k = 100; complexPlot(self, k, aBlock:/1) }",
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
  "{ :d :b1 :b2 | matrixPlot(reverse(transpose(binCounts(d,b1, b2)))) }",
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
    let __SplVar9 = _assertIsOfSize_2(_minMax_1(_d), 2);
    let _p = _at_2(__SplVar9, 1);
    let _q = _at_2(__SplVar9, 2);
    let __SplVar10 = _assertIsOfSize_2(_p, 2);
    let _x1 = _at_2(__SplVar10, 1);
    let _y1 = _at_2(__SplVar10, 2);
    let __SplVar11 = _assertIsOfSize_2(_q, 2);
    let _x2 = _at_2(__SplVar11, 1);
    let _y2 = _at_2(__SplVar11, 2);
    let _k = 11;
    let _x3 = _solidus_2(_hyphenMinus_2(_x2, _x1), _k);
    let _y3 = _solidus_2(_hyphenMinus_2(_y2, _y1), _k);
    let _b1 = [_x1, _plusSign_2(_x2, _x3), _x3];
    let _b2 = [_y1, _plusSign_2(_y2, _y3), _y3];
    /* Statements */
    return _densityHistogramPlot_3(_d, _b1, _b2);
  }, ["d"]),
  "{ :d | let __SplVar9 = assertIsOfSize(minMax(d), 2); let p = at(__SplVar9, 1); let q = at(__SplVar9, 2); let __SplVar10 = assertIsOfSize(p, 2); let x1 = at(__SplVar10, 1); let y1 = at(__SplVar10, 2); let __SplVar11 = assertIsOfSize(q, 2); let x2 = at(__SplVar11, 1); let y2 = at(__SplVar11, 2); let k = 11; let x3 = /((-(x2, x1)), k); let y3 = /((-(y2, y1)), k); let b1 = [x1, +(x2, x3), x3]; let b2 = [y1, +(y2, y3), y3]; densityHistogramPlot(d, b1, b2) }",
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
  "{ :self | typedPlot(self,'discrete') }",
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
    let _c = _caseOf_2(_m, [
      _hyphenMinusGreaterThanSign_2(
        "Half",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _first_2(_b, _solidusSolidus_2(_n, 2));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Centred",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _fftShift_1(_b);
        }, []),
      ),
    ]);
    let _d = _abs_1(_max_2(_c, 1E-6));
    let _e = _caseOf_2(_s, [
      _hyphenMinusGreaterThanSign_2(
        "Linear",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _d;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Logarithmic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(20, _log_2(_d, 10));
        }, []),
      ),
    ]);
    /* Statements */
    return _linePlot_1(_e);
  }, ["x", "n", "m", "s"]),
  "{ :x :n :m :s | let a = /(fft(x,n), (/(size(x), 2))); let b = abs((/(a, max(abs(a))))); let c = caseOf(m,[->('Half', { first(b,//(n, 2)) }), ->('Centred', { fftShift(b) })]); let d = abs(max(c,1E-6)); let e = caseOf(s,[->('Linear', { d }), ->('Logarithmic', { *(20, log(d,10)) })]); linePlot(e) }",
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
  "{ :x | fftPlot(x,nextPowerOfTwo(size(x))) }",
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
  "{ :self | Plot(nest(self),'graph', Record([['method', 'neato']])) }",
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
    let __SplVar12 = _assertIsOfSize_2(_self, 2);
    let _b = _at_2(__SplVar12, 1);
    let _y = _at_2(__SplVar12, 2);
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
  "{ :self | let __SplVar12 = assertIsOfSize(self, 2); let b = at(__SplVar12, 1); let y = at(__SplVar12, 2); let x = adjacentPairsCollect(b, { :i :j | +(i, (/((-(j, i)), 2))) }); discretePlot(transpose([x, y])) }",
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
  "{ :self | histogramListPlot(histogramList(self)) }",
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
  "{ :self :binSpecification | histogramListPlot(histogramList(self,binSpecification)) }",
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
  "{ :self :d | let k = size(self); let n = -(k, d); let y = copyFromTo(self,1, n); let x = copyFromTo(self,+(1, d), k); scatterPlot(transpose([x, y])) }",
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
  "{ :self | typedSwitchingPlot(self,'line') }",
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
  "{ :self | Plot([asFloat(self)],'matrix') }",
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
  "{ :self | linePlot(log(take(periodogramArray(self),/(size(self), 2)))) }",
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
    let __SplVar13 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar13, 1);
    let _n = _at_2(__SplVar13, 2);
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
            let __SplVar14 = _assertIsOfSize_2(_each, 3);
            let _t = _at_2(__SplVar14, 1);
            let _d = _at_2(__SplVar14, 2);
            let _p = _at_2(__SplVar14, 3);
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
  "{ :self | let __SplVar13 = assertIsOfSize(shape(self), 2); let m = at(__SplVar13, 1); let n = at(__SplVar13, 2); if((>=(n, 3)), { let tMax = injectInto(self, 0, { :z :each | max(z,+(at(each, 1), at(each, 2))) }); let tScale = /(100, max(tMax,20)); let r = collect(self, { :each | let __SplVar14 = assertIsOfSize(each, 3); let t = at(__SplVar14, 1); let d = at(__SplVar14, 2); let p = at(__SplVar14, 3); Rectangle([*(t, tScale), p], [*((+(t, d)), tScale), (+(p, 1))]) }); LineDrawing([PointCloud([[0, 32], [0, 60], [0, 84], [*(tMax, tScale), 60]]), r]) }, { error(self,'pianoRollPlot: not at least three-column matrix') }) }",
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
  "{ :self | let k = rank(self); if((=(k, 2)), { linePlot(collect(self,fromPolarCoordinates:/1)) }, { if((=(k, 3)), { linePlot(collect(self, { :each | collect(each,fromPolarCoordinates:/1) })) }, { error(self,'polarPlot') }) }) }",
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
      _collect_2(
        _upOrDownTo_2(1, _m),
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
  "{ :x :n | let m = -(size(x), n); scatterPlot(collect(upOrDownTo(1, m), { :i | [at(x, i), at(x, +(i, n))] })) }",
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
  "{ :x | poincarePlot(x,1) }",
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
    let __SplVar15 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar15, 1);
    let _n = _at_2(__SplVar15, 2);
    let __SplVar16 = _assertIsOfSize_2(_deepMinMax_1(_self), 2);
    let _z0 = _at_2(__SplVar16, 1);
    let _z1 = _at_2(__SplVar16, 2);
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
      _Span_3(1, _m, 1),
      _Span_3(1, _n, 1),
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
  "{ :self :options | let __SplVar15 = assertIsOfSize(shape(self), 2); let m = at(__SplVar15, 1); let n = at(__SplVar15, 2); let __SplVar16 = assertIsOfSize(deepMinMax(self), 2); let z0 = at(__SplVar16, 1); let z1 = at(__SplVar16, 2); let colourFunction = { :z | hslToRgb([z, 0.75, 0.75]) }; let data = table({ :i :j | colourFunction(rescale(at(at(self, i), j),[z0, z1], [0, 1])) },Span(1, m, 1), Span(1, n, 1)); ifFalse(at(options, 'dataReversed'), { reverse(data) }); Image(data) }",
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
  "{ :self | reliefPlot(self, Record([['dataReversed', false]])) }",
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
  "{ :self | if(isVector(self), { scatterPlot(self) }, { error(self,'runSequencePlot: invalid data') }) }",
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
  "{ :self | typedSwitchingPlot(self,'scatter') }",
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
  "{ :self | let answer = []; let segment = []; do(self, { :each | if(isFinite(each), { add(segment,each) }, { ifFalse(isEmpty(segment), { add(answer,segment); segment := [] }) }) }); ifFalse(isEmpty(segment), { add(answer,segment) }); answer }",
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
    } /* Temporaries */
    let __SplVar17 = _assertIsOfSize_2(_minMax_1(_i), 2);
    let _a = _at_2(__SplVar17, 1);
    let _b = _at_2(__SplVar17, 2);
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
        return _linePlot_1(_y);
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
        return _linePlot_1(
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
  }, ["y", "i"]),
  "{ :y :i | let __SplVar17 = assertIsOfSize(minMax(i), 2); let a = at(__SplVar17, 1); let b = at(__SplVar17, 2); let c = -(b, a); if(isVector(y), { linePlot(y) }, { let n = size(y); let z = 1.15; linePlot(withIndexCollect(y, { :each :i | +(each, (*(*((-(n, i)), c), z))) })) }) }",
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
  "{ :y | signalPlot(y,--(-1, 1)) }",
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
  "{ :self | let k = size(self); let r = round((*(0.025, k))); let n = nextPowerOfTwo(k); let d = padRight(self,[n], 0); let p = absSquare(take((/(fft(d), n)),/(n, 2))); atPut(p, 1, 0); linePlot(gaussianFilter((*(p, 10)),r)) }",
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
  "{ :self | let level = at(self, 1); let data = [copy(level)]; toDo(2, size(self), { :i | level := +(level, at(self, i)); add(data,copy(level)) }); linePlot(data) }",
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
            let __SplVar18 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _m = _at_2(__SplVar18, 1);
            let _n = _at_2(__SplVar18, 2);
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
                    let __SplVar19 = _assertIsOfSize_2(_each, 2);
                    let _x2 = _at_2(__SplVar19, 1);
                    let _y = _at_2(__SplVar19, 2);
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
  "{ :self | if(isVector(self), { let answer = []; withIndexDo(self, { :each :index | add(answer,[index, each]); add(answer,[+(index, 1), each]) }); answer }, { if(isMatrix(self), { let __SplVar18 = assertIsOfSize(shape(self), 2); let m = at(__SplVar18, 1); let n = at(__SplVar18, 2); if((=(n, 2)), { let x1 = at(at(self, 1), 1); let answer = []; do(self, { :each | let __SplVar19 = assertIsOfSize(each, 2); let x2 = at(__SplVar19, 1); let y = at(__SplVar19, 2); add(answer,[x1, y]); add(answer,[x2, y]); x1 := x2 }); answer }, { collect(self,stepPlotLineData:/1) }) }, { collect(self,stepPlotLineData:/1) }) }) }",
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
  "{ :self | linePlot(stepPlotLineData(self)) }",
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
    let __SplVar20 = _assertIsOfSize_2(_self, 2);
    let _u = _at_2(__SplVar20, 1);
    let _v = _at_2(__SplVar20, 2);
    let __SplVar21 = _assertIsOfSize_2(_k, 2);
    let _m = _at_2(__SplVar21, 1);
    let _n = _at_2(__SplVar21, 2);
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
  "{ :self :k :aBlock:/2 | let __SplVar20 = assertIsOfSize(self, 2); let u = at(__SplVar20, 1); let v = at(__SplVar20, 2); let __SplVar21 = assertIsOfSize(k, 2); let m = at(__SplVar21, 1); let n = at(__SplVar21, 2); let i = subdivide((--(min(u), max(u))),m); let j = subdivide((--(min(v), max(v))),n); surfacePlot(table(aBlock:/2, i, j)) }",
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
  "{ :self :aBlock:/2 | surfacePlot(self,[15, 15], aBlock:/2) }",
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
        let __SplVar22 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar22, 1);
        let _n = _at_2(__SplVar22, 2);
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
          _Span_3(1, _m, 1),
          _Span_3(1, _n, 1),
        ));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar23 = _assertIsOfSize_2(_shape_1(_self), 3);
        let _m = _at_2(__SplVar23, 1);
        let _n = _at_2(__SplVar23, 2);
        let __SplUnused34 = _at_2(__SplVar23, 3);
        let _p = _collect_2(
          _Span_3(1, _m, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _Span_3(1, _n, 1),
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
        let _q = _collect_2(
          _Span_3(1, _n, 1),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _Span_3(1, _m, 1),
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
  "{ :self | if(isMatrix(self), { let __SplVar22 = assertIsOfSize(shape(self), 2); let m = at(__SplVar22, 1); let n = at(__SplVar22, 2); surfacePlot(table({ :i :j | [i, j, at(self, i, j)] },Span(1, m, 1), Span(1, n, 1))) }, { let __SplVar23 = assertIsOfSize(shape(self), 3); let m = at(__SplVar23, 1); let n = at(__SplVar23, 2); let _ = at(__SplVar23, 3); let p = collect(Span(1, m, 1), { :i | collect(Span(1, n, 1), { :j | at(at(self, i), j) }) }); let q = collect(Span(1, n, 1), { :j | collect(Span(1, m, 1), { :i | at(at(self, i), j) }) }); linePlot((++(p, q))) }) }",
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
  "{ :self | if(isVector(self), { timelinePlot([self]) }, { let x0 = deepMin(self); let x1 = deepMax(self); let k = size(self); let y0 = max((/((-(x1, x0)), 4)),k); let p = [[x0, +(k, 2)]]; toDo(1, k, { :i | do(at(self, i), { :x | add(p,[x, i]) }) }); scatterPlot(p) }) }",
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
  "{ :self :format | if(isArray(self), { typedPlot(self,format) }, { if(allSatisfy(self,isVector:/1), { typedVectorPlot(self,format) }, { typedPlot(self,format) }) }) }",
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
  "{ :self :format | if(allSatisfy(self,isVector:/1), { Plot(collect(self, { :each | withIndexCollect(each, { :y :x | [x, y] }) }),format) }, { error(self,'typedVectorPlot: invalid data') }) }",
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
                let __SplVar24 = _assertIsOfSize_2(_shape_1(_self), 2);
                let _m = _at_2(__SplVar24, 1);
                let _n = _at_2(__SplVar24, 2);
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
  "{ :self :format | self := asFloat(self); if(isVector(self), { typedVectorPlot([self],format) }, { if(isColumnVector(self), { typedVectorPlot([catenate(self)],format) }, { if(isSmallFloatMatrix(self), { let __SplVar24 = assertIsOfSize(shape(self), 2); let m = at(__SplVar24, 1); let n = at(__SplVar24, 2); if((<=(n, 3)), { Plot([self],format) }, { typedVectorPlot(self,format) }) }, { Plot(self,format) }) }) }) }",
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
  "{ :self :format :options | initializeSlots(newPlot(),self, format, options) }",
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
  "{ :self :format :options | initializeSlots(newPlot(),self, format, options) }",
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
  "{ :self :format | Plot(self,format, Record()) }",
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
  "{ :self :format | Plot(self,format, Record()) }",
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
  "{ :domain :blockList | functionPlot(domain,blockList, discretePlot:/1) }",
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
                      return _asList_1(_y);
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
  "{ :domain :blockList :plotter:/1 | plotter(collect(nest(blockList), { :aBlock:/1 | collect(domain, { :x | let y = aBlock(x); if(isList(y), { y }, { if(isComplex(y), { asList(y) }, { [x, y] }) }) }) })) }",
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
  "{ :domain :blockList | functionPlot(domain,blockList, linePlot:/1) }",
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
  "{ :domain :xBlock:/1 :yBlock:/1 | linePlot(collect(domain, { :u | let x = xBlock(u); let y = yBlock(u); [x, y] })) }",
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
  "{ :domain :anObject | let blockList = collect(nest(anObject), { :aBlock:/1 | { :t | let r = aBlock(t); fromPolarCoordinates([r, t]) } }); functionPlot(domain,blockList) }",
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
  "{ :domain :divisions :anObject | functionPlot(subdivide(domain,divisions),anObject) }",
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
  "{ :self :anObject | functionPlot(self,100, anObject) }",
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
    let __SplVar25 = _assertIsOfSize_2(_log_1(_minMax_1(_self)), 2);
    let _a = _at_2(__SplVar25, 1);
    let _b = _at_2(__SplVar25, 2);
    let _h = _solidus_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_k, 1));
    let _x = _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_k, 1)),
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
  "{ :self :operand | let k = 100; let __SplVar25 = assertIsOfSize(log(minMax(self)), 2); let a = at(__SplVar25, 1); let b = at(__SplVar25, 2); let h = /((-(b, a)), (-(k, 1))); let x = collect(upOrDownTo(0, -(k, 1)), { :i | exp((+(a, (*(i, h))))) }); linePlot(collect(nest(operand), { :aBlock:/1 | collect(x, { :each | aBlock(each) }) })) }",
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
  "{ :self :divisions :operand | functionPlot(self,divisions, collect(nest(operand), { :f:/1 | { :x | log(f(x)) } })) }",
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
  "{ :self :operand | logPlot(self,100, operand) }",
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
  "{ :self :divisions :xBlock:/1 :yBlock:/1 | parametricPlot(subdivide(self,divisions),xBlock:/1, yBlock:/1) }",
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
  "{ :self :xBlock:/1 :yBlock:/1 | parametricPlot(self,100, xBlock:/1, yBlock:/1) }",
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
  "{ :domain :divisions :anObject | polarPlot(subdivide(domain,divisions),anObject) }",
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
  "{ :self :anObject | polarPlot(self,100, anObject) }",
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
  "{ :self :k :aBlock:/2 | let i = min(self); let j = max(self); surfacePlot([[i, j], [i, j]],[k, k], aBlock:/2) }",
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
  "{ :self :aBlock:/2 | surfacePlot(self,15, aBlock:/2) }",
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
  "{ :x :y | -(-((*(*(3, square((-(1, x)))), exp((-(-(0, square(x)), square((+(y, 1)))))))), (*(*(10, (-(-((/(x, 5)), cube(x)), (^(y, 5))))), exp((-(-(0, square(x)), square(y))))))), (*((/(1, 3)), exp((-(-(0, square((+(x, 1)))), square(y))))))) }",
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
    let __SplVar26 = _assertIsOfSize_2(_v, 2);
    let _a = _at_2(__SplVar26, 1);
    let _b = _at_2(__SplVar26, 2);
    let __SplVar27 = _assertIsOfSize_2(_n, 2);
    let _i = _at_2(__SplVar27, 1);
    let _j = _at_2(__SplVar27, 2);
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
  "{ :f:/2 :v :n | let __SplVar26 = assertIsOfSize(v, 2); let a = at(__SplVar26, 1); let b = at(__SplVar26, 2); let __SplVar27 = assertIsOfSize(n, 2); let i = at(__SplVar27, 1); let j = at(__SplVar27, 2); let aR = resample(a,i); let bR = resample(b,j); linePlot(catenate([collect(a, { :p | collect(bR, { :q | f(p, q) }) }), collect(b, { :q | collect(aR, { :p | f(p, q) }) })])) }",
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
  "{ :f:/1 :a0 :n | let a1 = f(a0); let r = []; timesRepeat(n, { let a2 = f(a1); addAll(r,[[a0, a1], [a1, a1], [a1, a2]]); a0 := a1; a1 := a2 }); linePlot(r) }",
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
    let __SplVar28 = _assertIsOfSize_2(_v, 2);
    let _p = _at_2(__SplVar28, 1);
    let _q = _at_2(__SplVar28, 2);
    let __SplVar29 = _assertIsOfSize_2(_m, 2);
    let _i = _at_2(__SplVar29, 1);
    let _j = _at_2(__SplVar29, 2);
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
  "{ :f:/1 :v :m :n | let __SplVar28 = assertIsOfSize(v, 2); let p = at(__SplVar28, 1); let q = at(__SplVar28, 2); let __SplVar29 = assertIsOfSize(m, 2); let i = at(__SplVar29, 1); let j = at(__SplVar29, 2); carpetPlot({ :a :b | realImaginary(f(Complex(a, b))) },[asList(discretize((--(real(p), real(q))),i)), asList(discretize((--(imaginary(p), imaginary(q))),j))], n) }",
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
  "{ :self:/2 :xList :yList :zList | let d = table(self:/2,xList, yList); let l = List(size(zList), []); bourkeContourAlgorithm(d, xList, yList, zList, { :x1 :y1 :x2 :y2 :z :k | add(at(l, k),[[x1, y1], [x2, y2]]) }); LineDrawing(collect(l, { :each | collect(connectLineSegments(each,~),Line:/1) })) }",
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
  "{ :self:/2 :xInterval :yInterval | let k = 100; reliefPlot(table(self:/2,discretize(xInterval,k), discretize(yInterval,k)), Record([['dataReversed', true]])) }",
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
    let __SplVar30 = _assertIsOfSize_2(_minMax_1(_xInterval), 2);
    let _x1 = _at_2(__SplVar30, 1);
    let _x2 = _at_2(__SplVar30, 2);
    let __SplVar31 = _assertIsOfSize_2(_minMax_1(_yInterval), 2);
    let _y1 = _at_2(__SplVar31, 1);
    let _y2 = _at_2(__SplVar31, 2);
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
        _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_n, 1))),
        _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_n, 1))),
      ),
      1,
    );
    /* Statements */
    return _vectorPlot_3(_coordinateList, _self, _asterisk_2(_minStep, 0.35));
  }, ["self", "xInterval", "yInterval"]),
  "{ :self :xInterval :yInterval | let __SplVar30 = assertIsOfSize(minMax(xInterval), 2); let x1 = at(__SplVar30, 1); let x2 = at(__SplVar30, 2); let __SplVar31 = assertIsOfSize(minMax(yInterval), 2); let y1 = at(__SplVar31, 1); let y2 = at(__SplVar31, 2); let n = 16; let xStep = /((-(x2, x1)), n); let yStep = /((-(y2, y1)), n); let minStep = min(xStep,yStep); let coordinateList = flatten(table({ :i :j | let x = +((+(x1, (*(i, xStep)))), (*((%(j, 2)), (/(xStep, 2))))); let y = +(y1, (*(j, yStep))); [x, y] },asList(upOrDownTo(0, -(n, 1))), asList(upOrDownTo(0, -(n, 1)))),1); vectorPlot(coordinateList,self, *(minStep, 0.35)) }",
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
  "{ :self :coordinateList | vectorPlot(coordinateList,self, *(max(range(minMax(coordinateList))), (*(Fraction(1L, 16L), 0.35)))) }",
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
        let __SplVar32 = _assertIsOfSize_2(_xy, 2);
        let _x = _at_2(__SplVar32, 1);
        let _y = _at_2(__SplVar32, 2);
        let _uv = _asterisk_2(_normalize_1(_aBlock_2(_x, _y)), _scalar);
        /* Statements */
        return [
          _Point_1(_plusSign_2(_xy, _uv)),
          _Line_1([_hyphenMinus_2(_xy, _uv), _plusSign_2(_xy, _uv)]),
        ];
      }, ["xy"]),
    ));
  }, ["self", "aBlock:/2", "scalar"]),
  "{ :self :aBlock:/2 :scalar | LineDrawing(collect(self, { :xy | let __SplVar32 = assertIsOfSize(xy, 2); let x = at(__SplVar32, 1); let y = at(__SplVar32, 2); let uv = *(normalize(aBlock(x, y)), scalar); [Point(+(xy, uv)), Line([-(xy, uv), +(xy, uv)])] })) }",
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
  "{ :self | discretePlot(transpose([key(self), value(self)])) }",
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
  "{ :self | linePlot(transpose([key(self), value(self)])) }",
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
    let __SplVar33 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _n = _at_2(__SplVar33, 1);
    let _m = _at_2(__SplVar33, 2);
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
  '{ :self :timesList | let __SplVar33 = assertIsOfSize(shape(self), 2); let n = at(__SplVar33, 1); let m = at(__SplVar33, 2); if((=(m, 2)), { let height = 100; let boundingCoordinates = coordinateBoundingBox(self); let distanceList = prefixSum(differencesBy(self,euclideanDistance:/2)); let keyPoints = ++([0], (/(distanceList, last(distanceList)))); let duration = last(timesList); let keyTimes = /(timesList, duration); let keyPrecision = 4; assert({ =(size(timesList), n) }); scaledFragments({ :options | unlines([format(\'<path id="P1" fill="none" stroke="black" stroke-opacity="0.175" d="M% L%" />\',[asSvgPointList([first(self)],options), asSvgPointList(allButFirst(self),options)]), format(\'<circle r="%" fill="none" stroke="black">\',[printStringToFixed((/(1, at(options, \'scaleFactor\'))),at(options, \'precision\'))]), format(\'  <animateMotion dur="%s" repeatCount="indefinite" calcMode="linear" keyTimes="%" keyPoints="%">\',[printStringToFixed(duration,keyPrecision), stringJoin(collect(keyTimes, { :x | printStringToFixed(x,keyPrecision) }),\';\'), stringJoin(collect(keyPoints, { :x | printStringToFixed(x,keyPrecision) }),\';\')]), \'    <mpath href="#P1" />\', \'  </animateMotion>\', \'</circle>\']) },height, boundingCoordinates) }, { error(self,\'pathPlot\') }) }',
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
    let _keyTimes = _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_n, 1)));
    /* Statements */
    return _pathPlot_2(_self, _keyTimes);
  }, ["self"]),
  "{ :self | let n = size(self); let keyTimes = asList(upOrDownTo(0, -(n, 1))); pathPlot(self,keyTimes) }",
);
