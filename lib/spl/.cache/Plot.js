sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "cliPlot",
  ["self", "format"],
  function (_self, _format) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _format";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _shape = _shape_1(_self);
    let _d = _size_1(_shape);
    let _a = "x";
    let _c = [0];
    let _plotData = _if_3(_equalsSign_2(_format, "matrix"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _a = "matrix";
      _c = [];
      return _reversed_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_d, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _transposed_1([_self]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_d, 2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let __genSym63 = _assertIsOfSize_2(_shape, 2),
            _m = _at_2(__genSym63, 1),
            _n = _at_2(__genSym63, 2);
          /* Statements */
          return _if_3(_equalsSign_2(_n, 1), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _self;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_equalsSign_2(_n, 2), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              _a = "xy";
              _c = [0, 1];
              return _self;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(_equalsSign_2(_n, 3), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                _a = "xyz";
                _c = [0, 1, 2];
                return _self;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _error_2(_self, "cliPlot: matrix columns > 3");
              });
            });
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(_self, "cliPlot: array dimensions > 2");
        });
      });
    });
    let _fileName = "/tmp/listPlot.json";
    /* Statements */
    return _then_2(
      _writeTextFile_2(_fileName, _asJson_1(_plotData)),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(
          _system,
          "hsc3-plot",
          _plusSignPlusSign_2([
            "json",
            _a,
            _plusSignPlusSign_2("--format=", _format),
            _fileName,
          ], _collect_2(_c, _asString_1)),
        );
      },
    );
  },
  "{ :self :format |\n\t\tlet shape = self.shape;\n\t\tlet d = shape.size;\n\t\tlet a = 'x';\n\t\tlet c = [0];\n\t\tlet plotData = (format = 'matrix').if {\n\t\t\ta := 'matrix';\n\t\t\tc := [];\n\t\t\tself.reversed\n\t\t} {\n\t\t\t(d = 1).if {\n\t\t\t\t[self].transposed\n\t\t\t} {\n\t\t\t\t(d = 2).if {\n\t\t\t\t\tlet [m, n] = shape;\n\t\t\t\t\t(n = 1).if {\n\t\t\t\t\t\tself\n\t\t\t\t\t} {\n\t\t\t\t\t\t(n = 2).if {\n\t\t\t\t\t\t\ta := 'xy';\n\t\t\t\t\t\t\tc := [0 1];\n\t\t\t\t\t\t\tself\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(n = 3).if {\n\t\t\t\t\t\t\t\ta := 'xyz';\n\t\t\t\t\t\t\t\tc := [0 1 2];\n\t\t\t\t\t\t\t\tself\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tself.error('cliPlot: matrix columns > 3')\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tself.error('cliPlot: array dimensions > 2')\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet fileName = '/tmp/listPlot.json';\n\t\tfileName.writeTextFile(plotData.asJson).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-plot',\n\t\t\t\t[\n\t\t\t\t\t'json',\n\t\t\t\t\ta,\n\t\t\t\t\t'--format=' ++ format,\n\t\t\t\t\tfileName\n\t\t\t\t] ++ c.collect(asString:/1)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "discretePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cliPlot_2(_self, "discrete");
  },
  "{ :self |\n\t\tself.cliPlot('discrete')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "linePlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cliPlot_2(_self, "line");
  },
  "{ :self |\n\t\tself.cliPlot('line')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "matrixPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cliPlot_2(_self, "matrix");
  },
  "{ :self |\n\t\tself.cliPlot('matrix')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "scatterPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cliPlot_2(_self, "scatter");
  },
  "{ :self |\n\t\tself.cliPlot('scatter')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plot",
  "plot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linePlot_1(_self);
  },
  "{ :self |\n\t\tself.linePlot\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Plot",
  "functionPlot",
  ["domain", "functionBlock:/1"],
  function (_domain, _functionBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _functionBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _linePlot_1(_collect_2(_domain, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _y = _functionBlock_1(_x);
      /* Statements */
      return _if_3(_isSequence_1(_y), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _y;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isComplex_1(_y), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asList_1(_y);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [_x, _y];
        });
      });
    }));
  },
  "{ :domain :functionBlock:/1 |\n\t\tdomain.collect { :x |\n\t\t\tlet y = functionBlock(x);\n\t\t\ty.isSequence.if {\n\t\t\t\ty\n\t\t\t} {\n\t\t\t\ty.isComplex.if {\n\t\t\t\t\ty.asList\n\t\t\t\t} {\n\t\t\t\t\t[x, y]\n\t\t\t\t}\n\t\t\t}\n\t\t}.linePlot\n\t}",
);

sl.addMethod(
  "Interval",
  "Plot",
  "functionPlot",
  ["domain", "functionBlock:/1"],
  function (_domain, _functionBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _domain, _functionBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _functionPlot_2(_subdivide_2(_domain, 500), _functionBlock_1);
  },
  "{ :domain :functionBlock:/1 |\n\t\tdomain.subdivide(500).functionPlot(functionBlock:/1)\n\t}",
);
