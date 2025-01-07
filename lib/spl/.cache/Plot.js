/*  Requires: Interval  */

sl.addType(
  false,
  "Plot",
  "Plot",
  ["Object"],
  ["pages", "format"],
);

sl.copyTraitToType(
  "Object",
  "Plot",
);

sl.addMethod(
  "Plot",
  "Plot",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym92 = _assertIsOfSize_2(_shape_1(_pages_1(_self)), 3),
      _pageCount = _at_2(__genSym92, 1),
      _rowCount = _at_2(__genSym92, 2),
      _columnCount = _at_2(__genSym92, 3);
    /* Statements */
    return _if_3(_equalsSign_2(_columnCount, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asRectangle_1(
        _coordinateBoundingBox_1(_concatenation_1(_pages_1(_self))),
      );
      let _w = _width_1(_r);
      let _h = _height_1(_r);
      let _dataRatio = _solidus_2(_w, _h);
      let _aspectRatio = _if_3(
        _lessThanSign_2(_abs_1(_hyphenMinus_2(_dataRatio, 1)), 0.075),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _dataRatio;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _goldenRatio_1(1);
        },
      );
      let _xScalar = _solidus_2(_aspectRatio, _solidus_2(_w, _h));
      let _scaledPages = _collect_2(_pages_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_each, [[_xScalar, 1]]);
      });
      let _items = [];
      let _gen_1 = _caseOf_2(_format_1(_self), [
        _hyphenMinusGreaterThanSign_2("line", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return (function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return [_Line_1(_p)];
          });
        }),
        _hyphenMinusGreaterThanSign_2("scatter", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return (function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return [_PointCloud_1(_p)];
          });
        }),
        _hyphenMinusGreaterThanSign_2("discrete", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return (function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_p, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Temporaries */
              let __genSym93 = _assertIsOfSize_2(_each, 2),
                _x = _at_2(__genSym93, 1),
                _y = _at_2(__genSym93, 2);
              /* Statements */
              return _Line_1([[_x, 0], [_x, _y]]);
            });
          });
        }),
      ]);
      let _includesXAxis = _ampersand_2(
        _lessThanSignEqualsSign_2(_lower_1(_r), 0),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_upper_1(_r), 0);
        },
      );
      let _includesYAxis = _ampersand_2(
        _lessThanSignEqualsSign_2(_left_1(_r), 0),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_right_1(_r), 0);
        },
      );
      /* Statements */
      _ifTrue_2(_includesXAxis, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _items,
          _Point_1([_asterisk_2(_left_1(_r), _xScalar), 0]),
        );
      });
      _ifTrue_2(_includesYAxis, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_items, _Point_1([0, _upper_1(_r)]));
      });
      _do_2(_scaledPages, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_items, _gen_1(_each));
      });
      return _LineDrawing_1(_items);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_columnCount, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_format_1(_self), "line"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _p_1 = _asBlock_1(_AxonometricProjection_1("Chinese"));
          let _r = [[-1, -1, 0], [+1, -1, 0], [+1, +1, 0], [-1, +1, 0]];
          let _t_1 = function (_list) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _list";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_list, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Temporaries */
              let __genSym94 = _assertIsOfSize_2(_each, 3),
                _x = _at_2(__genSym94, 1),
                _y = _at_2(__genSym94, 2),
                _z = _at_2(__genSym94, 3);
              /* Statements */
              return _p_1([_negated_1(_x), _z, _negated_1(_y)]);
            });
          };
          let _l = _collect_2(_pages_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _Line_1(_t_1(_each));
          });
          /* Statements */
          return _LineDrawing_1([_l]);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "n×3 matrix: format must be line");
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Multiple plots not implemented");
      });
    });
  },
  "{ :self |\n\t\tlet [pageCount, rowCount, columnCount] = self.pages.shape;\n\t\t(columnCount = 2).if {\n\t\t\tlet r = self.pages.concatenation.coordinateBoundingBox.asRectangle;\n\t\t\tlet w = r.width;\n\t\t\tlet h = r.height;\n\t\t\tlet dataRatio = (w / h);\n\t\t\tlet aspectRatio = ((dataRatio - 1).abs < 0.075).if {\n\t\t\t\tdataRatio\n\t\t\t} {\n\t\t\t\t1.goldenRatio\n\t\t\t};\n\t\t\tlet xScalar = aspectRatio / (w / h);\n\t\t\tlet scaledPages = self.pages.collect { :each |\n\t\t\t\teach * [[xScalar, 1]]\n\t\t\t};\n\t\t\tlet items = [];\n\t\t\tlet gen:/1 = self.format.caseOf([\n\t\t\t\t'line' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\t[p.Line]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'scatter' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\t[p.PointCloud]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'discrete' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\t\tlet [x, y] = each;\n\t\t\t\t\t\t\tLine([x 0; x y])\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]);\n\t\t\tlet includesXAxis = r.lower <= 0 & { r.upper >= 0 };\n\t\t\tlet includesYAxis = r.left <= 0 & { r.right >= 0 };\n\t\t\tincludesXAxis.ifTrue {\n\t\t\t\titems.add(Point([r.left * xScalar, 0]))\n\t\t\t};\n\t\t\tincludesYAxis.ifTrue {\n\t\t\t\titems.add(Point([0, r.upper]))\n\t\t\t};\n\t\t\tscaledPages.do { :each |\n\t\t\t\titems.addAll(each.gen)\n\t\t\t};\n\t\t\titems.LineDrawing\n\t\t} {\n\t\t\t(columnCount = 3).if {\n\t\t\t\t(self.format = 'line').if {\n\t\t\t\t\tlet p:/1 = AxonometricProjection('Chinese').asBlock;\n\t\t\t\t\tlet r = [\n\t\t\t\t\t\t-1 -1 0;\n\t\t\t\t\t\t+1 -1 0;\n\t\t\t\t\t\t+1 +1 0;\n\t\t\t\t\t\t-1 +1 0\n\t\t\t\t\t];\n\t\t\t\t\tlet t = { :list |\n\t\t\t\t\t\tlist.collect { :each |\n\t\t\t\t\t\t\tlet [x, y, z] = each;\n\t\t\t\t\t\t\t[x.negated, z, y.negated].p\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tlet l = self.pages.collect { :each | each.t.Line };\n\t\t\t\t\t[l].LineDrawing\n\t\t\t\t} {\n\t\t\t\t\tself.error('n×3 matrix: format must be line')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('Multiple plots not implemented')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "cliDraw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_format_1(_self), "graph"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _cliGraphDraw_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _cliListDraw_1(_self);
    });
  },
  "{ :self |\n\t\t(self.format = 'graph').if {\n\t\t\tself.cliGraphDraw\n\t\t} {\n\t\t\tself.cliListDraw\n\t\t}\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "cliGraphDraw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym95 = _assertIsOfSize_2(_pages_1(_self), 1),
      _graph = _at_2(__genSym95, 1);
    /* Statements */
    return _draw_1(_dotDrawing_1(_graph));
  },
  "{ :self |\n\t\tlet [graph] = self.pages;\n\t\tgraph.dotDrawing.draw\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "cliListDraw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym96 = _assertIsOfSize_2(_pages_1(_self), 1),
      _contents = _at_2(__genSym96, 1);
    let _shape = _shape_1(_contents);
    let _d = _size_1(_shape);
    let _a = "x";
    let _c = [0];
    let _plotData = _if_3(
      _equalsSign_2(_format_1(_self), "matrix"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _a = "matrix";
        _c = [];
        return _reversed_1(_contents);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_d, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _transposed_1([_contents]);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_equalsSign_2(_d, 2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Temporaries */
            let __genSym97 = _assertIsOfSize_2(_shape, 2),
              _m = _at_2(__genSym97, 1),
              _n = _at_2(__genSym97, 2);
            /* Statements */
            return _if_3(_equalsSign_2(_n, 1), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _contents;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(_equalsSign_2(_n, 2), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                _a = "xy";
                _c = [0, 1];
                return _contents;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(_equalsSign_2(_n, 3), function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Statements */
                  _a = "xyz";
                  _c = [0, 1, 2];
                  return _contents;
                }, function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _error_2(_contents, "cliDraw: matrix columns > 3");
                });
              });
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_contents, "cliPlot: array dimensions > 2");
          });
        });
      },
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
  },
  "{ :self |\n\t\tlet [contents] = self.pages;\n\t\tlet shape = contents.shape;\n\t\tlet d = shape.size;\n\t\tlet a = 'x';\n\t\tlet c = [0];\n\t\tlet plotData = (self.format = 'matrix').if {\n\t\t\ta := 'matrix';\n\t\t\tc := [];\n\t\t\tcontents.reversed\n\t\t} {\n\t\t\t(d = 1).if {\n\t\t\t\t[contents].transposed\n\t\t\t} {\n\t\t\t\t(d = 2).if {\n\t\t\t\t\tlet [m, n] = shape;\n\t\t\t\t\t(n = 1).if {\n\t\t\t\t\t\tcontents\n\t\t\t\t\t} {\n\t\t\t\t\t\t(n = 2).if {\n\t\t\t\t\t\t\ta := 'xy';\n\t\t\t\t\t\t\tc := [0 1];\n\t\t\t\t\t\t\tcontents\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(n = 3).if {\n\t\t\t\t\t\t\t\ta := 'xyz';\n\t\t\t\t\t\t\t\tc := [0 1 2];\n\t\t\t\t\t\t\t\tcontents\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tcontents.error('cliDraw: matrix columns > 3')\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tcontents.error('cliPlot: array dimensions > 2')\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet fileName = '/tmp/listPlot.json';\n\t\tfileName.writeTextFile(plotData.asJson);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'json',\n\t\t\t\ta,\n\t\t\t\t'--format=' ++ self.format,\n\t\t\t\tfileName\n\t\t\t] ++ c.collect(asString:/1)\n\t\t)\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_format_1(_self), [
      _hyphenMinusGreaterThanSign_2("graph", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _cliGraphDraw_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2("matrix", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym98 = _assertIsOfSize_2(_pages_1(_self), 1),
          _contents = _at_2(__genSym98, 1);
        /* Statements */
        return _draw_1(_asGreyscaleSvg_1(_contents));
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _draw_1(_asLineDrawing_1(_self));
    });
  },
  "{ :self |\n\t\tself.format.caseOfOtherwise([\n\t\t\t'graph' -> {\n\t\t\t\tself.cliGraphDraw\n\t\t\t},\n\t\t\t'matrix' -> {\n\t\t\t\tlet [contents] = self.pages;\n\t\t\t\tcontents.asGreyscaleSvg.draw\n\t\t\t}\n\t\t]) {\n\t\t\tself.asLineDrawing.draw\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "discretePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "discrete");
  },
  "{ :self |\n\t\tself.typedPlot('discrete')\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "graphPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2(_nest_1(_self), "graph");
  },
  "{ :self |\n\t\tself.nest.Plot('graph')\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "linePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "line");
  },
  "{ :self |\n\t\tself.typedPlot('line')\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "matrixPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2([_asFloat_1(_self)], "matrix");
  },
  "{ :self |\n\t\t[self.asFloat].Plot('matrix')\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "plot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_self);
  },
  "{ :self |\n\t\tself.linePlot\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "polarPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _rank_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_k, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _linePlot_1(_collect_2(_self, _fromPolarCoordinates_1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_k, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _linePlot_1(_collect_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_each, _fromPolarCoordinates_1);
        }));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "polarPlot");
      });
    });
  },
  "{ :self |\n\t\tlet k = self.rank;\n\t\t(k = 2).if {\n\t\t\tself.collect(fromPolarCoordinates:/1).linePlot\n\t\t} {\n\t\t\t(k = 3).if {\n\t\t\t\tself.collect { :each |\n\t\t\t\t\teach.collect(fromPolarCoordinates:/1)\n\t\t\t\t}.linePlot\n\t\t\t} {\n\t\t\t\tself.error('polarPlot')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "scatterPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typedPlot_2(_self, "scatter");
  },
  "{ :self |\n\t\tself.typedPlot('scatter')\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "stepPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _l = [];
      /* Statements */
      _withIndexDo_2(_self, function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_l, [_index, _each]);
        return _add_2(_l, [_plusSign_2(_index, 1), _each]);
      });
      return _linePlot_1(_l);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x1 = _at_2(_at_2(_self, 1), 1);
        let _l = [];
        /* Statements */
        _do_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let __genSym99 = _assertIsOfSize_2(_each, 2),
            _x2 = _at_2(__genSym99, 1),
            _y = _at_2(__genSym99, 2);
          /* Statements */
          _add_2(_l, [_x1, _y]);
          _add_2(_l, [_x2, _y]);
          return _x1 = _x2;
        });
        return _linePlot_1(_l);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "stepPlot");
      });
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet l = [];\n\t\t\tself.withIndexDo { :each :index |\n\t\t\t\tl.add([index, each]);\n\t\t\t\tl.add([index + 1, each])\n\t\t\t};\n\t\t\tl.linePlot\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet x1 = self[1][1];\n\t\t\t\tlet l = [];\n\t\t\t\tself.do { :each |\n\t\t\t\t\tlet [x2, y] = each;\n\t\t\t\t\tl.add([x1, y]);\n\t\t\t\t\tl.add([x2, y]);\n\t\t\t\t\tx1 := x2\n\t\t\t\t};\n\t\t\t\tl.linePlot\n\t\t\t} {\n\t\t\t\tself.error('stepPlot')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "surfacePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym100 = _assertIsOfSize_2(_shape_1(_self), 2),
        _m = _at_2(__genSym100, 1),
        _n = _at_2(__genSym100, 2);
      /* Statements */
      return _surfacePlot_1(_table_3(
        function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return [_i, _j, _at_3(_self, _i, _j)];
        },
        _upOrDownTo_2(1, _m),
        _upOrDownTo_2(1, _n),
      ));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym102 = _assertIsOfSize_2(_shape_1(_self), 3),
        _m = _at_2(__genSym102, 1),
        _n = _at_2(__genSym102, 2),
        __genSym101 = _at_2(__genSym102, 3);
      let _p = _collect_2(_upOrDownTo_2(1, _m), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_upOrDownTo_2(1, _n), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_at_2(_self, _i), _j);
        });
      });
      let _q = _collect_2(_upOrDownTo_2(1, _n), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_upOrDownTo_2(1, _m), function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_at_2(_self, _i), _j);
        });
      });
      /* Statements */
      return _linePlot_1(_plusSignPlusSign_2(_p, _q));
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\t{ :i :j |\n\t\t\t\t[i, j, self[i,j]]\n\t\t\t}.table(1:m, 1:n).surfacePlot\n\t\t} {\n\t\t\tlet [m, n, _] = self.shape;\n\t\t\tlet p = 1:m.collect { :i |\n\t\t\t\t1:n.collect { :j |\n\t\t\t\t\tself[i][j]\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet q = 1:n.collect { :j |\n\t\t\t\t1:m.collect { :i |\n\t\t\t\t\tself[i][j]\n\t\t\t\t}\n\t\t\t};\n\t\t\t(p ++ q).linePlot\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "typedPlot",
  ["self", "format"],
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _self = _asFloat_1(_self);
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Plot_2([_withIndexCollect_2(_self, function (_y, _x) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _y, _x";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_x, _y];
      })], _format);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isColumnVector_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Plot_2([_withIndexCollect_2(_self, function (_y, _x) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _y, _x";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return [_x, _first_1(_y)];
        })], _format);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrix_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Plot_2([_self], _format);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Plot_2(_self, _format);
        });
      });
    });
  },
  "{ :self :format |\n\t\tself := self.asFloat;\n\t\tself.isVector.if {\n\t\t\t[\n\t\t\t\tself.withIndexCollect { :y :x |\n\t\t\t\t\t[x, y]\n\t\t\t\t}\n\t\t\t].Plot(format)\n\t\t} {\n\t\t\tself.isColumnVector.if {\n\t\t\t\t[\n\t\t\t\t\tself.withIndexCollect { :y :x |\n\t\t\t\t\t\t[x, y.first]\n\t\t\t\t\t}\n\t\t\t\t].Plot(format)\n\t\t\t} {\n\t\t\t\tself.isMatrix.if {\n\t\t\t\t\t[self].Plot(format)\n\t\t\t\t} {\n\t\t\t\t\tself.Plot(format)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "Plot",
  ["self", "format"],
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPlot_0(), _self, _format);
  },
  "{ :self :format |\n\t\tnewPlot().initializeSlots(self, format)\n\t}",
);

sl.addMethod(
  "Graph",
  "Plot",
  "Plot",
  ["self", "format"],
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPlot_0(), _self, _format);
  },
  "{ :self :format |\n\t\tnewPlot().initializeSlots(self, format)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Plot",
  "functionPlot",
  ["domain", "anObject"],
  function (_domain, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _blockList = _nest_1(_anObject);
    /* Statements */
    return _linePlot_1(_collect_2(_blockList, function (_aBlock_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aBlock_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_domain, function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _aBlock_1(_x);
        /* Statements */
        return _if_3(_isSequence_1(_y), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _y;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_isComplex_1(_y), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _asList_1(_y);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return [_x, _y];
          });
        });
      });
    }));
  },
  "{ :domain :anObject |\n\t\tlet blockList = anObject.nest;\n\t\tblockList.collect { :aBlock:/1 |\n\t\t\tdomain.collect { :x |\n\t\t\t\tlet y = aBlock(x);\n\t\t\t\ty.isSequence.if {\n\t\t\t\t\ty\n\t\t\t\t} {\n\t\t\t\t\ty.isComplex.if {\n\t\t\t\t\t\ty.asList\n\t\t\t\t\t} {\n\t\t\t\t\t\t[x, y]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}.linePlot\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Plot",
  "parametricPlot",
  ["domain", "xBlock:/1", "yBlock:/1"],
  function (_domain, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _xBlock_1, _yBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_collect_2(_domain, function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _xBlock_1(_u);
      let _y = _yBlock_1(_u);
      /* Statements */
      return [_x, _y];
    }));
  },
  "{ :domain :xBlock:/1 :yBlock:/1 |\n\t\tdomain.collect { :u |\n\t\t\tlet x = xBlock(u);\n\t\t\tlet y = yBlock(u);\n\t\t\t[x, y]\n\t\t}.linePlot\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Plot",
  "polarPlot",
  ["domain", "anObject"],
  function (_domain, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _blockList = _collect_2(_nest_1(_anObject), function (_aBlock_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aBlock_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return (function (_t) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _t";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _aBlock_1(_t);
        /* Statements */
        return _fromPolarCoordinates_1([_r, _t]);
      });
    });
    /* Statements */
    return _functionPlot_2(_domain, _blockList);
  },
  "{ :domain :anObject |\n\t\tlet blockList = anObject.nest.collect { :aBlock:/1 |\n\t\t\t{ :t |\n\t\t\t\tlet r = aBlock(t);\n\t\t\t\t[r, t].fromPolarCoordinates\n\t\t\t}\n\t\t};\n\t\tdomain.functionPlot(blockList)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "functionPlot",
  ["domain", "divisions", "anObject"],
  function (_domain, _divisions, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _divisions, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_2(_subdivide_2(_domain, _divisions), _anObject);
  },
  "{ :domain :divisions :anObject |\n\t\tdomain.subdivide(divisions).functionPlot(anObject)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "functionPlot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _functionPlot_3(_self, 100, _anObject);
  },
  "{ :self :anObject |\n\t\tself.functionPlot(100, anObject)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "parametricPlot",
  ["self", "divisions", "xBlock:/1", "yBlock:/1"],
  function (_self, _divisions, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _divisions, _xBlock_1, _yBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _parametricPlot_3(
      _subdivide_2(_self, _divisions),
      _xBlock_1,
      _yBlock_1,
    );
  },
  "{ :self :divisions :xBlock:/1 :yBlock:/1 |\n\t\tself.subdivide(divisions).parametricPlot(xBlock:/1, yBlock:/1)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "parametricPlot",
  ["self", "xBlock:/1", "yBlock:/1"],
  function (_self, _xBlock_1, _yBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _xBlock_1, _yBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _parametricPlot_4(_self, 100, _xBlock_1, _yBlock_1);
  },
  "{ :self :xBlock:/1 :yBlock:/1 |\n\t\tself.parametricPlot(100, xBlock:/1, yBlock:/1)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "polarPlot",
  ["domain", "divisions", "anObject"],
  function (_domain, _divisions, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _domain, _divisions, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polarPlot_2(_subdivide_2(_domain, _divisions), _anObject);
  },
  "{ :domain :divisions :anObject |\n\t\tdomain.subdivide(divisions).polarPlot(anObject)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "polarPlot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polarPlot_3(_self, 100, _anObject);
  },
  "{ :self :anObject |\n\t\tself.polarPlot(100, anObject)\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "surfacePlot",
  ["self", "divisions", "aBlock:/2"],
  function (_self, _divisions, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _divisions, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _subdivide_2(_self, _divisions);
    /* Statements */
    return _surfacePlot_1(_table_3(_aBlock_2, _i, _i));
  },
  "{ :self :divisions :aBlock:/2 |\n\t\tlet i = self.subdivide(divisions);\n\t\ttable(aBlock:/2, i, i).surfacePlot\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "surfacePlot",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _surfacePlot_3(_self, 15, _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.surfacePlot(15, aBlock:/2)\n\t}",
);
