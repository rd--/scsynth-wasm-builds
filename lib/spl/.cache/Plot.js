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
    let _columnCount = _columnCount_1(_self);
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
              let __genSym122 = _assertIsOfSize_2(_each, 2),
                _x = _at_2(__genSym122, 1),
                _y = _at_2(__genSym122, 2);
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
          let _p_1 = _asUnaryBlock_1(_AxonometricProjection_6(
            _pi_1(_Fraction_2(
              1n,
              6n,
            )),
            0,
            0,
            0.5,
            1,
            1,
          ));
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
              let __genSym123 = _assertIsOfSize_2(_each, 3),
                _x = _at_2(__genSym123, 1),
                _y = _at_2(__genSym123, 2),
                _z = _at_2(__genSym123, 3);
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
        return _if_3(_equalsSign_2(_columnCount, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _asLineDrawing_1(
            _Plot_2(
              _collect_2(_pages_1(_self), function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return _withIndexCollect_2(_each, function (_item, _x) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _item, _x";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let __genSym124 = _assertIsOfSize_2(_item, 1),
                    _y = _at_2(__genSym124, 1);
                  /* Statements */
                  return [_x, _y];
                });
              }),
              _format_1(_self),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            _plusSignPlusSign_2(
              "Multiple plots not implemented: ",
              _columnCount,
            ),
          );
        });
      });
    });
  },
  "{ :self |\n\t\tlet columnCount = self.columnCount;\n\t\t(columnCount = 2).if {\n\t\t\tlet r = self.pages.concatenation.coordinateBoundingBox.asRectangle;\n\t\t\tlet w = r.width;\n\t\t\tlet h = r.height;\n\t\t\tlet dataRatio = (w / h);\n\t\t\tlet aspectRatio = ((dataRatio - 1).abs < 0.075).if {\n\t\t\t\tdataRatio\n\t\t\t} {\n\t\t\t\t1.goldenRatio\n\t\t\t};\n\t\t\tlet xScalar = aspectRatio / (w / h);\n\t\t\tlet scaledPages = self.pages.collect { :each |\n\t\t\t\teach * [[xScalar, 1]]\n\t\t\t};\n\t\t\tlet items = [];\n\t\t\tlet gen:/1 = self.format.caseOf([\n\t\t\t\t'line' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\t[p.Line]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'scatter' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\t[p.PointCloud]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t'discrete' -> {\n\t\t\t\t\t{ :p |\n\t\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\t\tlet [x, y] = each;\n\t\t\t\t\t\t\tLine([x 0; x y])\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]);\n\t\t\tlet includesXAxis = r.lower <= 0 & { r.upper >= 0 };\n\t\t\tlet includesYAxis = r.left <= 0 & { r.right >= 0 };\n\t\t\tincludesXAxis.ifTrue {\n\t\t\t\titems.add(Point([r.left * xScalar, 0]))\n\t\t\t};\n\t\t\tincludesYAxis.ifTrue {\n\t\t\t\titems.add(Point([0, r.upper]))\n\t\t\t};\n\t\t\tscaledPages.do { :each |\n\t\t\t\titems.addAll(each.gen)\n\t\t\t};\n\t\t\titems.LineDrawing\n\t\t} {\n\t\t\t(columnCount = 3).if {\n\t\t\t\t(self.format = 'line').if {\n\t\t\t\t\tlet p:/1 = AxonometricProjection(\n\t\t\t\t\t\t1/6.pi, 0, 0,\n\t\t\t\t\t\t0.5, 1, 1\n\t\t\t\t\t).asUnaryBlock;\n\t\t\t\t\tlet r = [\n\t\t\t\t\t\t-1 -1 0;\n\t\t\t\t\t\t+1 -1 0;\n\t\t\t\t\t\t+1 +1 0;\n\t\t\t\t\t\t-1 +1 0\n\t\t\t\t\t];\n\t\t\t\t\tlet t = { :list |\n\t\t\t\t\t\tlist.collect { :each |\n\t\t\t\t\t\t\tlet [x, y, z] = each;\n\t\t\t\t\t\t\t[x.negated, z, y.negated].p\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tlet l = self.pages.collect { :each | each.t.Line };\n\t\t\t\t\t[l].LineDrawing\n\t\t\t\t} {\n\t\t\t\t\tself.error('n×3 matrix: format must be line')\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(columnCount = 1).if {\n\t\t\t\t\tPlot(\n\t\t\t\t\t\tself.pages.collect { :each |\n\t\t\t\t\t\t\teach.withIndexCollect { :item :x |\n\t\t\t\t\t\t\t\tlet [y] = item;\n\t\t\t\t\t\t\t\t[x, y]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\tself.format\n\t\t\t\t\t).asLineDrawing\n\t\t\t\t} {\n\t\t\t\t\tself.error('Multiple plots not implemented: ' ++ columnCount)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
    let __genSym125 = _assertIsOfSize_2(_pages_1(_self), 1),
      _graph = _at_2(__genSym125, 1);
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
    let __genSym126 = _assertIsOfSize_2(_pages_1(_self), 1),
      _contents = _at_2(__genSym126, 1);
    let _shape = _shape_1(_contents);
    let _d = _size_1(_shape);
    let _a = "x";
    let _c = [0];
    let _plotData = _if_3(
      _includes_2(["array", "matrix"], _format_1(_self)),
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
            let __genSym127 = _assertIsOfSize_2(_shape, 2),
              _m = _at_2(__genSym127, 1),
              _n = _at_2(__genSym127, 2);
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
  "{ :self |\n\t\tlet [contents] = self.pages;\n\t\tlet shape = contents.shape;\n\t\tlet d = shape.size;\n\t\tlet a = 'x';\n\t\tlet c = [0];\n\t\tlet plotData = ['array' 'matrix'].includes(self.format).if {\n\t\t\ta := 'matrix';\n\t\t\tc := [];\n\t\t\tcontents.reversed\n\t\t} {\n\t\t\t(d = 1).if {\n\t\t\t\t[contents].transposed\n\t\t\t} {\n\t\t\t\t(d = 2).if {\n\t\t\t\t\tlet [m, n] = shape;\n\t\t\t\t\t(n = 1).if {\n\t\t\t\t\t\tcontents\n\t\t\t\t\t} {\n\t\t\t\t\t\t(n = 2).if {\n\t\t\t\t\t\t\ta := 'xy';\n\t\t\t\t\t\t\tc := [0 1];\n\t\t\t\t\t\t\tcontents\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(n = 3).if {\n\t\t\t\t\t\t\t\ta := 'xyz';\n\t\t\t\t\t\t\t\tc := [0 1 2];\n\t\t\t\t\t\t\t\tcontents\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tcontents.error('cliDraw: matrix columns > 3')\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tcontents.error('cliPlot: array dimensions > 2')\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet fileName = '/tmp/listPlot.json';\n\t\tfileName.writeTextFile(plotData.asJson);\n\t\tsystem.systemCommand(\n\t\t\t'hsc3-plot',\n\t\t\t[\n\t\t\t\t'json',\n\t\t\t\ta,\n\t\t\t\t'--format=' ++ self.format,\n\t\t\t\tfileName\n\t\t\t] ++ c.collect(asString:/1)\n\t\t)\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "columnCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _counts = _nub_1(_collect_2(_pages_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym128 = _assertIsOfSize_2(_shape_1(_each), 2),
        _rowCount = _at_2(__genSym128, 1),
        _columnCount = _at_2(__genSym128, 2);
      /* Statements */
      return _columnCount;
    }));
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_counts), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _anyOne_1(_counts);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "columnCount: pages have differing column counts");
    });
  },
  "{ :self |\n\t\tlet counts = self.pages.collect { :each |\n\t\t\tlet [rowCount, columnCount] = each.shape;\n\t\t\tcolumnCount\n\t\t}.nub;\n\t\t(counts.size = 1).if {\n\t\t\tcounts.anyOne\n\t\t} {\n\t\t\tself.error('columnCount: pages have differing column counts')\n\t\t}\n\t}",
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
      _hyphenMinusGreaterThanSign_2("array", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym129 = _assertIsOfSize_2(_pages_1(_self), 1),
          _contents = _at_2(__genSym129, 1);
        /* Statements */
        return _draw_1(_asColourSvg_1(_contents));
      }),
      _hyphenMinusGreaterThanSign_2("graph", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym130 = _assertIsOfSize_2(_pages_1(_self), 1),
          _graph = _at_2(__genSym130, 1);
        /* Statements */
        return _draw_1(_dotDrawing_1(_graph));
      }),
      _hyphenMinusGreaterThanSign_2("matrix", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym131 = _assertIsOfSize_2(_pages_1(_self), 1),
          _contents = _at_2(__genSym131, 1);
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
  "{ :self |\n\t\tself.format.caseOfOtherwise([\n\t\t\t'array' -> {\n\t\t\t\tlet [contents] = self.pages;\n\t\t\t\tcontents.asColourSvg.draw\n\t\t\t},\n\t\t\t'graph' -> {\n\t\t\t\tlet [graph] = self.pages;\n\t\t\t\tgraph.dotDrawing.draw\n\t\t\t},\n\t\t\t'matrix' -> {\n\t\t\t\tlet [contents] = self.pages;\n\t\t\t\tcontents.asGreyscaleSvg.draw\n\t\t\t}\n\t\t]) {\n\t\t\tself.asLineDrawing.draw\n\t\t}\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "pageCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_pages_1(_self));
  },
  "{ :self |\n\t\tself.pages.size\n\t}",
);

sl.addMethod(
  "Plot",
  "Plot",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_format_1(_self), [
      _hyphenMinusGreaterThanSign_2("array", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym132 = _assertIsOfSize_2(_pages_1(_self), 1),
          _contents = _at_2(__genSym132, 1);
        /* Statements */
        return _writeSvg_2(_asColourSvg_1(_contents), _fileName);
      }),
      _hyphenMinusGreaterThanSign_2("graph", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym133 = _assertIsOfSize_2(_pages_1(_self), 1),
          _graph = _at_2(__genSym133, 1);
        /* Statements */
        return _writeSvg_2(_dotDrawing_1(_graph), _fileName);
      }),
      _hyphenMinusGreaterThanSign_2("matrix", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym134 = _assertIsOfSize_2(_pages_1(_self), 1),
          _contents = _at_2(__genSym134, 1);
        /* Statements */
        return _writeSvg_2(_asGreyscaleSvg_1(_contents), _fileName);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _writeSvg_2(_asLineDrawing_1(_self), _fileName);
    });
  },
  "{ :self :fileName |\n\t\tself.format.caseOfOtherwise([\n\t\t\t'array' -> {\n\t\t\t\tlet [contents] = self.pages;\n\t\t\t\tcontents.asColourSvg.writeSvg(fileName)\n\t\t\t},\n\t\t\t'graph' -> {\n\t\t\t\tlet [graph] = self.pages;\n\t\t\t\tgraph.dotDrawing.writeSvg(fileName)\n\t\t\t},\n\t\t\t'matrix' -> {\n\t\t\t\tlet [contents] = self.pages;\n\t\t\t\tcontents.asGreyscaleSvg.writeSvg(fileName)\n\t\t\t}\n\t\t]) {\n\t\t\tself.asLineDrawing.writeSvg(fileName)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Plot",
  "arrayPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2([_asFloat_1(_self)], "array");
  },
  "{ :self |\n\t\t[self.asFloat].Plot('array')\n\t}",
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
          let __genSym135 = _assertIsOfSize_2(_each, 2),
            _x2 = _at_2(__genSym135, 1),
            _y = _at_2(__genSym135, 2);
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
      let __genSym136 = _assertIsOfSize_2(_shape_1(_self), 2),
        _m = _at_2(__genSym136, 1),
        _n = _at_2(__genSym136, 2);
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
        _to_2(1, _m),
        _to_2(1, _n),
      ));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym138 = _assertIsOfSize_2(_shape_1(_self), 3),
        _m = _at_2(__genSym138, 1),
        _n = _at_2(__genSym138, 2),
        __genSym137 = _at_2(__genSym138, 3);
      let _p = _collect_2(_to_2(1, _m), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_to_2(1, _n), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_at_2(_self, _i), _j);
        });
      });
      let _q = _collect_2(_to_2(1, _n), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_to_2(1, _m), function (_i) {
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

sl.addMethod(
  "SmallFloat",
  "Plot",
  "matlabPeaksFunction",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      /* console.error(errorMessage); */
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
  },
  "{ :x :y |\n\t\t(3 * (1 - x).squared * (0 - x.squared - (y + 1).squared).exp)\n\t\t-\n\t\t(10 * ((x / 5) - x.cubed- (y ^ 5)) * (0 - x.squared - y.squared).exp)\n\t\t-\n\t\t((1 / 3) * (0 - (x + 1).squared - y.squared).exp)\n\t}",
);
