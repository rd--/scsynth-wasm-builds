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
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _columnCount = _columnCount_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_columnCount, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _asRectangle_1(
          _coordinateBoundingBox_1(_catenate_1(_pages_1(_self))),
        );
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
        let _scaledPages = _collect_2(
          _pages_1(_self),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "line";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "scatter";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "discrete";
            }, []),
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
                    let __SPL163 = _assertIsOfSize_2(_each, 2);
                    let _x = _at_2(__SPL163, 1);
                    let _y = _at_2(__SPL163, 2);
                    /* Statements */
                    return _Line_1([[_x, 0], [_x, _y]]);
                  }, ["each"]),
                );
              }, ["p"]);
            }, []),
          ),
        ]);
        let _includesXAxis = _ampersand_2(
          _lessThanSignEqualsSign_2(_lower_1(_r), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_upper_1(_r), 0);
          }, []),
        );
        let _includesYAxis = _ampersand_2(
          _lessThanSignEqualsSign_2(_left_1(_r), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_right_1(_r), 0);
          }, []),
        );
        /* Statements */
        _ifTrue_2(
          _includesXAxis,
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
          _includesYAxis,
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
          _scaledPages,
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
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_columnCount, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
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
                  _AxonometricProjection_6(
                    _pi_1(_Fraction_2(1n, 6n)),
                    0,
                    0,
                    0.5,
                    1,
                    1,
                  ),
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
                      let __SPL164 = _assertIsOfSize_2(_each, 3);
                      let _x = _at_2(__SPL164, 1);
                      let _y = _at_2(__SPL164, 2);
                      let _z = _at_2(__SPL164, 3);
                      /* Statements */
                      return _p_1([_negated_1(_x), _z, _negated_1(_y)]);
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
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_columnCount, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
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
                              const errorMessage =
                                "Arity: expected 2, _item, _x";
                              throw new Error(errorMessage);
                            } /* Temporaries */
                            let __SPL165 = _assertIsOfSize_2(_item, 1);
                            let _y = _at_2(__SPL165, 1);
                            /* Statements */
                            return [_x, _y];
                          }, ["item", "x"]),
                        );
                      }, ["each"]),
                    ),
                    _format_1(_self),
                  ),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  _plusSignPlusSign_2(
                    "Multiple plots not implemented: ",
                    _columnCount,
                  ),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let columnCount = columnCount(self); if((=(columnCount, 2)), { let r = asRectangle(coordinateBoundingBox(catenate(pages(self)))); let w = width(r); let h = height(r); let dataRatio = (/(w, h)); let aspectRatio = if((<(abs((-(dataRatio, 1))), 0.075)), { dataRatio }, { goldenRatio(1) }); let xScalar = /(aspectRatio, (/(w, h))); let scaledPages = collect(pages(self), { :each | *(each, [[xScalar, 1]]) }); let items = []; let gen:/1 = caseOf(format(self),[->({ 'line' }, { { :p | [Line(p)] } }), ->({ 'scatter' }, { { :p | [PointCloud(p)] } }), ->({ 'discrete' }, { { :p | collect(p, { :each | let __SPL163 = assertIsOfSize(each, 2); let x = at(__SPL163, 1); let y = at(__SPL163, 2); Line([[x, 0], [x, y]]) }) } })]); let includesXAxis = &(<=(lower(r), 0), { >=(upper(r), 0) }); let includesYAxis = &(<=(left(r), 0), { >=(right(r), 0) }); ifTrue(includesXAxis, { add(items,Point([*(left(r), xScalar), 0])) }); ifTrue(includesYAxis, { add(items,Point([0, upper(r)])) }); do(scaledPages, { :each | addAll(items,gen(each)) }); LineDrawing(items) }, { if((=(columnCount, 3)), { if((=(format(self), 'line')), { let p:/1 = asUnaryBlock(AxonometricProjection(pi(Fraction(1L, 6L)), 0, 0, 0.5, 1, 1)); let r = [[-1, -1, 0], [+1, -1, 0], [+1, +1, 0], [-1, +1, 0]]; let t = { :list | collect(list, { :each | let __SPL164 = assertIsOfSize(each, 3); let x = at(__SPL164, 1); let y = at(__SPL164, 2); let z = at(__SPL164, 3); p([negated(x), z, negated(y)]) }) }; let l = collect(pages(self), { :each | Line(t(each)) }); LineDrawing([l]) }, { error(self,'n×3 matrix: format must be line') }) }, { if((=(columnCount, 1)), { asLineDrawing(Plot(collect(pages(self), { :each | withIndexCollect(each, { :item :x | let __SPL165 = assertIsOfSize(item, 1); let y = at(__SPL165, 1); [x, y] }) }), format(self))) }, { error(self,++('Multiple plots not implemented: ', columnCount)) }) }) }) }",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "cliDraw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_format_1(_self), "graph"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cliGraphDraw_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cliListDraw_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(format(self), 'graph')), { cliGraphDraw(self) }, { cliListDraw(self) }) }",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "cliGraphDraw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL166 = _assertIsOfSize_2(_pages_1(_self), 1);
    let _graph = _at_2(__SPL166, 1);
    /* Statements */
    return _draw_1(_dotDrawing_2(_graph, _options_1(_self)));
  }, ["self"]),
  "{ :self | let __SPL166 = assertIsOfSize(pages(self), 1); let graph = at(__SPL166, 1); draw(dotDrawing(graph,options(self))) }",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "cliListDraw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL167 = _assertIsOfSize_2(_pages_1(_self), 1);
    let _contents = _at_2(__SPL167, 1);
    let _shape = _shape_1(_contents);
    let _d = _size_1(_shape);
    let _a = "x";
    let _c = [0];
    let _plotData = _if_3(
      _includes_2(["array", "matrix"], _format_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _a = "matrix";
        _c = [];
        return _reversed_1(_contents);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_d, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _transposed_1([_contents]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_d, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SPL168 = _assertIsOfSize_2(_shape, 2);
                let _m = _at_2(__SPL168, 1);
                let _n = _at_2(__SPL168, 2);
                /* Statements */
                return _if_3(
                  _equalsSign_2(_n, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _contents;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_n, 2),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _a = "xy";
                        _c = [0, 1];
                        return _contents;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _equalsSign_2(_n, 3),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            _a = "xyz";
                            _c = [0, 1, 2];
                            return _contents;
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _error_2(
                              _contents,
                              "cliDraw: matrix columns > 3",
                            );
                          }, []),
                        );
                      }, []),
                    );
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_contents, "cliPlot: array dimensions > 2");
              }, []),
            );
          }, []),
        );
      }, []),
    );
    let _fileName = "/tmp/listPlot.json";
    /* Statements */
    _writeTextFile_2(_fileName, _asJson_1(_plotData));
    return _systemCommand_3(
      _system,
      "hsc3-plot",
      _plusSignPlusSign_2([
        "json",
        _a,
        _plusSignPlusSign_2("--format=", _format_1(_self)),
        _fileName,
      ], _collect_2(_c, _asString_1)),
    );
  }, ["self"]),
  "{ :self | let __SPL167 = assertIsOfSize(pages(self), 1); let contents = at(__SPL167, 1); let shape = shape(contents); let d = size(shape); let a = 'x'; let c = [0]; let plotData = if(includes(['array', 'matrix'],format(self)), { a := 'matrix'; c := []; reversed(contents) }, { if((=(d, 1)), { transposed([contents]) }, { if((=(d, 2)), { let __SPL168 = assertIsOfSize(shape, 2); let m = at(__SPL168, 1); let n = at(__SPL168, 2); if((=(n, 1)), { contents }, { if((=(n, 2)), { a := 'xy'; c := [0, 1]; contents }, { if((=(n, 3)), { a := 'xyz'; c := [0, 1, 2]; contents }, { error(contents,'cliDraw: matrix columns > 3') }) }) }) }, { error(contents,'cliPlot: array dimensions > 2') }) }) }); let fileName = '/tmp/listPlot.json'; writeTextFile(fileName,asJson(plotData)); systemCommand(system,'hsc3-plot', ++(['json', a, ++('--format=', format(self)), fileName], collect(c,asString:/1))) }",
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
          let __SPL169 = _assertIsOfSize_2(_shape_1(_each), 2);
          let _rowCount = _at_2(__SPL169, 1);
          let _columnCount = _at_2(__SPL169, 2);
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
  "{ :self | let counts = nub(collect(pages(self), { :each | let __SPL169 = assertIsOfSize(shape(each), 2); let rowCount = at(__SPL169, 1); let columnCount = at(__SPL169, 2); columnCount })); if((=(size(counts), 1)), { anyOne(counts) }, { error(self,'columnCount: pages have differing column counts') }) }",
);

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "draw",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
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
            let __SPL170 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SPL170, 1);
            /* Statements */
            return _draw_1(_asColourSvg_1(_contents));
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
            let __SPL171 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _graph = _at_2(__SPL171, 1);
            /* Statements */
            return _draw_1(_dotDrawing_2(_graph, _options_1(_self)));
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
            let __SPL172 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SPL172, 1);
            /* Statements */
            return _draw_1(_asGreyscaleSvg_1(_contents));
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _draw_1(_asLineDrawing_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOfOtherwise(format(self), [->('array', { let __SPL170 = assertIsOfSize(pages(self), 1); let contents = at(__SPL170, 1); draw(asColourSvg(contents)) }), ->('graph', { let __SPL171 = assertIsOfSize(pages(self), 1); let graph = at(__SPL171, 1); draw(dotDrawing(graph,options(self))) }), ->('matrix', { let __SPL172 = assertIsOfSize(pages(self), 1); let contents = at(__SPL172, 1); draw(asGreyscaleSvg(contents)) })], { draw(asLineDrawing(self)) }) }",
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

sl.addMethodToExistingType(
  "Plot",
  "Plot",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
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
            let __SPL173 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SPL173, 1);
            /* Statements */
            return _writeSvg_2(_asColourSvg_1(_contents), _fileName);
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
            let __SPL174 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _graph = _at_2(__SPL174, 1);
            /* Statements */
            return _writeSvg_2(
              _dotDrawing_2(_graph, _options_1(_self)),
              _fileName,
            );
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
            let __SPL175 = _assertIsOfSize_2(_pages_1(_self), 1);
            let _contents = _at_2(__SPL175, 1);
            /* Statements */
            return _writeSvg_2(_asGreyscaleSvg_1(_contents), _fileName);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _writeSvg_2(_asLineDrawing_1(_self), _fileName);
      }, []),
    );
  }, ["self", "fileName"]),
  "{ :self :fileName | caseOfOtherwise(format(self), [->('array', { let __SPL173 = assertIsOfSize(pages(self), 1); let contents = at(__SPL173, 1); writeSvg(asColourSvg(contents),fileName) }), ->('graph', { let __SPL174 = assertIsOfSize(pages(self), 1); let graph = at(__SPL174, 1); writeSvg(dotDrawing(graph,options(self)),fileName) }), ->('matrix', { let __SPL175 = assertIsOfSize(pages(self), 1); let contents = at(__SPL175, 1); writeSvg(asGreyscaleSvg(contents),fileName) })], { writeSvg(asLineDrawing(self),fileName) }) }",
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
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "line");
  }, ["self"]),
  "{ :self | typedPlot(self,'line') }",
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
  "scatterPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "scatter");
  }, ["self"]),
  "{ :self | typedPlot(self,'scatter') }",
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
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = [];
        /* Statements */
        _withIndexDo_2(
          _self,
          sl.annotateFunction(function (_each, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _index";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_l, [_index, _each]);
            return _add_2(_l, [_plusSign_2(_index, 1), _each]);
          }, ["each", "index"]),
        );
        return _linePlot_1(_l);
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
            let _x1 = _at_2(_at_2(_self, 1), 1);
            let _l = [];
            /* Statements */
            _do_2(
              _self,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SPL176 = _assertIsOfSize_2(_each, 2);
                let _x2 = _at_2(__SPL176, 1);
                let _y = _at_2(__SPL176, 2);
                /* Statements */
                _add_2(_l, [_x1, _y]);
                _add_2(_l, [_x2, _y]);
                return _x1 = _x2;
              }, ["each"]),
            );
            return _linePlot_1(_l);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "stepPlot");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let l = []; withIndexDo(self, { :each :index | add(l,[index, each]); add(l,[+(index, 1), each]) }); linePlot(l) }, { if(isMatrix(self), { let x1 = at(at(self, 1), 1); let l = []; do(self, { :each | let __SPL176 = assertIsOfSize(each, 2); let x2 = at(__SPL176, 1); let y = at(__SPL176, 2); add(l,[x1, y]); add(l,[x2, y]); x1 := x2 }); linePlot(l) }, { error(self,'stepPlot') }) }) }",
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
        let __SPL177 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL177, 1);
        let _n = _at_2(__SPL177, 2);
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
        let __SPL178 = _assertIsOfSize_2(_shape_1(_self), 3);
        let _m = _at_2(__SPL178, 1);
        let _n = _at_2(__SPL178, 2);
        let __genSym179 = _at_2(__SPL178, 3);
        let _p = _collect_2(
          _to_2(1, _m),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _to_2(1, _n),
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
          _to_2(1, _n),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _to_2(1, _m),
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
  "{ :self | if(isMatrix(self), { let __SPL177 = assertIsOfSize(shape(self), 2); let m = at(__SPL177, 1); let n = at(__SPL177, 2); surfacePlot(table({ :i :j | [i, j, at(self, i, j)] },to(1, m), to(1, n))) }, { let __SPL178 = assertIsOfSize(shape(self), 3); let m = at(__SPL178, 1); let n = at(__SPL178, 2); let _ = at(__SPL178, 3); let p = collect(to(1, m), { :i | collect(to(1, n), { :j | at(at(self, i), j) }) }); let q = collect(to(1, n), { :j | collect(to(1, m), { :i | at(at(self, i), j) }) }); linePlot((++(p, q))) }) }",
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
        return _Plot_2([
          _withIndexCollect_2(
            _self,
            sl.annotateFunction(function (_y, _x) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _y, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return [_x, _y];
            }, ["y", "x"]),
          ),
        ], _format);
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
            return _Plot_2([
              _withIndexCollect_2(
                _self,
                sl.annotateFunction(function (_y, _x) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _y, _x";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return [_x, _first_1(_y)];
                }, ["y", "x"]),
              ),
            ], _format);
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
                } /* Statements */
                return _Plot_2([_self], _format);
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
  "{ :self :format | self := asFloat(self); if(isVector(self), { Plot([withIndexCollect(self, { :y :x | [x, y] })],format) }, { if(isColumnVector(self), { Plot([withIndexCollect(self, { :y :x | [x, first(y)] })],format) }, { if(isMatrix(self), { Plot([self],format) }, { Plot(self,format) }) }) }) }",
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
    return _Plot_3(_self, _format, _Record_1([]));
  }, ["self", "format"]),
  "{ :self :format | Plot(self,format, Record([])) }",
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
    return _Plot_3(_self, _format, _Record_1([]));
  }, ["self", "format"]),
  "{ :self :format | Plot(self,format, Record([])) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Plot",
  "functionPlot",
  ["domain", "anObject"],
  sl.annotateFunction(function (_domain, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _blockList = _nest_1(_anObject);
    /* Statements */
    return _linePlot_1(
      _collect_2(
        _blockList,
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
  }, ["domain", "anObject"]),
  "{ :domain :anObject | let blockList = nest(anObject); linePlot(collect(blockList, { :aBlock:/1 | collect(domain, { :x | let y = aBlock(x); if(isList(y), { y }, { if(isComplex(y), { asList(y) }, { [x, y] }) }) }) })) }",
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
  ["self", "divisions", "aBlock:/2"],
  sl.annotateFunction(function (_self, _divisions, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _subdivide_2(_self, _divisions);
    /* Statements */
    return _surfacePlot_1(_table_3(_aBlock_2, _i, _i));
  }, ["self", "divisions", "aBlock:/2"]),
  "{ :self :divisions :aBlock:/2 | let i = subdivide(self,divisions); surfacePlot(table(aBlock:/2, i, i)) }",
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
          _asterisk_2(3, _squared_1(_hyphenMinus_2(1, _x))),
          _exp_1(
            _hyphenMinus_2(
              _hyphenMinus_2(0, _squared_1(_x)),
              _squared_1(_plusSign_2(_y, 1)),
            ),
          ),
        ),
        _asterisk_2(
          _asterisk_2(
            10,
            _hyphenMinus_2(
              _hyphenMinus_2(_solidus_2(_x, 5), _cubed_1(_x)),
              _circumflexAccent_2(_y, 5),
            ),
          ),
          _exp_1(
            _hyphenMinus_2(_hyphenMinus_2(0, _squared_1(_x)), _squared_1(_y)),
          ),
        ),
      ),
      _asterisk_2(
        _solidus_2(1, 3),
        _exp_1(
          _hyphenMinus_2(
            _hyphenMinus_2(0, _squared_1(_plusSign_2(_x, 1))),
            _squared_1(_y),
          ),
        ),
      ),
    );
  }, ["x", "y"]),
  "{ :x :y | -(-((*(*(3, squared((-(1, x)))), exp((-(-(0, squared(x)), squared((+(y, 1)))))))), (*(*(10, (-(-((/(x, 5)), cubed(x)), (^(y, 5))))), exp((-(-(0, squared(x)), squared(y))))))), (*((/(1, 3)), exp((-(-(0, squared((+(x, 1)))), squared(y))))))) }",
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
    let _colourFunction_1 = sl.annotateFunction(function (_z) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _z";
        throw new Error(errorMessage);
      } /* Statements */
      return _hslToRgb_1([_z, 0.75, 0.75]);
    }, ["z"]);
    /* Statements */
    return _Image_1(_table_3(
      sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _colourFunction_1(_self_2(_x, _y));
      }, ["x", "y"]),
      _discretize_2(_xInterval, _k),
      _discretize_2(_yInterval, _k),
    ));
  }, ["self:/2", "xInterval", "yInterval"]),
  "{ :self:/2 :xInterval :yInterval | let k = 100; let colourFunction = { :z | hslToRgb([z, 0.75, 0.75]) }; Image(table({ :x :y | colourFunction(self(x, y)) },discretize(xInterval,k), discretize(yInterval,k))) }",
);
