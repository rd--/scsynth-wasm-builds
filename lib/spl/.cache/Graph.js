sl.addTrait("Graph", "Graph");

sl.addTraitMethod(
  "Graph",
  "Graph",
  "plusSign",
  ["self", "aGraph"],
  function (_self, _aGraph) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aGraph";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sumGraph_2(_self, _aGraph);
  },
  "{ :self :aGraph |\n\t\tself.sumGraph(aGraph)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "adjacencyList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adjacencyList_2(_self, _each);
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :each |\n\t\t\tself.adjacencyList(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "adjacencyList",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(_equalsSign_2(_at_2(_each, 1), _vertex), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _at_2(_each, 2));
      });
      return _ifTrue_2(_equalsSign_2(_at_2(_each, 2), _vertex), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _at_2(_each, 1));
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = [];\n\t\tself.edgeList.do { :each |\n\t\t\t(each[1] = vertex).ifTrue {\n\t\t\t\tanswer.add(each[2])\n\t\t\t};\n\t\t\t(each[2] = vertex).ifTrue {\n\t\t\t\tanswer.add(each[1])\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "adjacencyMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _count_2(_edgeList_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _matchesEdge_2(
            _each,
            _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
          );
        });
      },
      _v,
      _v,
    );
  },
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\tself.edgeList.count { :each |\n\t\t\t\teach.matchesEdge(i --> j)\n\t\t\t}\n\t\t}.table(v, v)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "allNeighbours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(
        _each,
        _neighboursOf_2(_self, _each),
      );
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :each |\n\t\t\teach -> self.neighboursOf(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "asDot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _isMixed = _isMixed_1(_self);
    let _graphType = _if_3(_isUndirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "graph";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "digraph";
    });
    let _begin = _format_2('% {\ngraph [layout="neato"];', [_graphType]);
    let _attributeText = _unlines_1([
      'graph [size="1.214,0.75",bgcolor="transparent"];',
      'node [shape="point"];',
      'edge [penwidth="0.75",arrowsize="0.5"];',
    ]);
    let _edgeText = _unlines_1(_collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _forDot_2(_each, _isMixed);
    }));
    let _end = "}";
    /* Statements */
    return _unlines_1([_begin, _attributeText, _edgeText, _end]);
  },
  "{ :self |\n\t\tlet isMixed = self.isMixed;\n\t\tlet graphType = self.isUndirected.if { 'graph' } { 'digraph' };\n\t\tlet begin = '% {\\ngraph [layout=\"neato\"];'.format([graphType]);\n\t\tlet attributeText = [\n\t\t\t'graph [size=\"1.214,0.75\",bgcolor=\"transparent\"];',\n\t\t\t'node [shape=\"point\"];',\n\t\t\t'edge [penwidth=\"0.75\",arrowsize=\"0.5\"];'\n\t\t].unlines;\n\t\tlet edgeText = self.edgeList.collect { :each |\n\t\t\teach.forDot(isMixed)\n\t\t}.unlines;\n\t\tlet end = '}';\n\t\t[\n\t\t\tbegin,\n\t\t\tattributeText,\n\t\t\tedgeText,\n\t\t\tend\n\t\t].unlines\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "asLineDrawingWithVertexCoordinates",
  ["self", "vertexCoordinates"],
  function (_self, _vertexCoordinates) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertexCoordinates";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edges = _collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym1 = _assertIsOfSize_2(_each, 2),
        _i = _at_2(__genSym1, 1),
        _j = _at_2(__genSym1, 2);
      let __genSym2 = _assertIsOfSize_2(_at_2(_vertexCoordinates, _i), 2),
        _x1 = _at_2(__genSym2, 1),
        _y1 = _at_2(__genSym2, 2);
      let __genSym3 = _assertIsOfSize_2(_at_2(_vertexCoordinates, _j), 2),
        _x2 = _at_2(__genSym3, 1),
        _y2 = _at_2(__genSym3, 2);
      /* Statements */
      return _Line_1([[_x1, _y1], [_x2, _y2]]);
    });
    /* Statements */
    return _LineDrawing_1([_PointCloud_1(_vertexCoordinates), _edges]);
  },
  "{ :self :vertexCoordinates |\n\t\tlet edges = self.edgeList.collect { :each |\n\t\t\tlet [i, j] = each;\n\t\t\tlet [x1, y1] = vertexCoordinates[i];\n\t\t\tlet [x2, y2] = vertexCoordinates[j];\n\t\t\tLine([x1 y1; x2 y2])\n\t\t};\n\t\t[\n\t\t\tPointCloud(vertexCoordinates),\n\t\t\tedges\n\t\t].LineDrawing\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asLineDrawingWithVertexCoordinates_2(
      _self,
      _vertexCoordinates_1(_self),
    );
  },
  "{ :self |\n\t\tself.asLineDrawingWithVertexCoordinates(\n\t\t\tself.vertexCoordinates\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "asPerspectiveDrawing",
  ["self", "projection:/1"],
  function (_self, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asLineDrawingWithVertices_2(
      _self,
      _collect_2(_vertexCoordinates_1(_self), _projection_1),
    );
  },
  "{ :self :projection:/1 |\n\t\tself.asLineDrawingWithVertices(\n\t\t\tself.vertexCoordinates.collect(projection:/1)\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "complement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _complementGraph_1(_self);
  },
  "{ :self |\n\t\tself.complementGraph\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "complementGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _adjacencyMatrix_1(_self);
    /* Statements */
    return _adjacencyGraph_1(
      _hyphenMinus_2(_hyphenMinus_2(1, _identityMatrix_1(_size_1(_m))), _m),
    );
  },
  "{ :self |\n\t\tlet m = self.adjacencyMatrix;\n\t\t(1 - m.size.identityMatrix - m).adjacencyGraph\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "connectionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(
          _includesEdge_2(
            _self,
            _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
          ),
        );
      },
      _v,
      _v,
    );
  },
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\tself.includesEdge(i --> j).boole\n\t\t}.table(v, v)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "degreeSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_vertexDegree_1(_self), _greaterThanSign_2);
  },
  "{ :self |\n\t\tself.vertexDegree.sortBy(>)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_edgeList_1(_self));
  },
  "{ :self |\n\t\tself.edgeList.size\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "edgeIndex",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOf_2(_edgeList_1(_self), _edge);
  },
  "{ :self :edge |\n\t\tself.edgeList.indexOf(edge)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "graphPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_2([_self], "graph");
  },
  "{ :self |\n\t\tPlot([self], 'graph')\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "hasValidEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_includes_2(_v, _at_2(_edge, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_v, _at_2(_edge, 2));
      });
    });
  },
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\tself.edgeList.allSatisfy { :edge |\n\t\t\tv.includes(edge[1]) & {\n\t\t\t\tv.includes(edge[2])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "incidenceList",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _verticalLine_2(
        _equalsSign_2(_at_2(_each, 1), _vertex),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_each, 2), _vertex);
        },
      );
    });
  },
  "{ :self :vertex |\n\t\tself.edgeList.select { :each |\n\t\t\teach[1] = vertex | {\n\t\t\t\teach[2] = vertex\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "incidenceMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_edgeList_1(_self), function (_e) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _e";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isUndirectedEdge_1(_e), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_equalsSign_2(_at_2(_e, 1), _v), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_equalsSign_2(_at_2(_e, 2), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return 2;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return 1;
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_equalsSign_2(_at_2(_e, 2), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return 1;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return 0;
            });
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_isDirectedEdge_1(_e), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_equalsSign_2(_at_2(_e, 1), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(_equalsSign_2(_at_2(_e, 2), _v), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return -2;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return -1;
              });
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(_equalsSign_2(_at_2(_e, 2), _v), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return 0;
              });
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "@Graph>>incidenceMatrix: invalid edge");
          });
        });
      });
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :v |\n\t\t\tself.edgeList.collect { :e |\n\t\t\t\te.isUndirectedEdge.if {\n\t\t\t\t\t(e[1] = v).if {\n\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t0\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\te.isDirectedEdge.if {\n\t\t\t\t\t\t(e[1] = v).if {\n\t\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t\t-2\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t-1\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.error('@Graph>>incidenceMatrix: invalid edge')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "includesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _matchesEdge_2(_each, _edge);
    });
  },
  "{ :self :edge |\n\t\tself.edgeList.anySatisfy { :each |\n\t\t\teach.matchesEdge(edge)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "includesVertex",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_vertexList_1(_self), _vertex);
  },
  "{ :self :vertex |\n\t\tself.vertexList.includes(vertex)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "inEdgesOf",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_edgeList_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_at_2(_edge, 2), _vertex);
    });
  },
  "{ :self :vertex |\n\t\tself.edgeList.select { :edge |\n\t\t\tedge[2] = vertex\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isDirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), _isDirectedEdge_1);
  },
  "{ :self |\n\t\tself.edgeList.allSatisfy(isDirectedEdge:/1)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_edgeCount_1(_self), 0);
  },
  "{ :self |\n\t\tself.edgeCount = 0\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isLoopFree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tildeEqualsSign_2(_at_2(_each, 1), _at_2(_each, 2));
    });
  },
  "{ :self |\n\t\tself.edgeList.allSatisfy { :each |\n\t\t\teach[1] ~= each[2]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isMixed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _anySatisfy_2(_edgeList_1(_self), _isDirectedEdge_1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _anySatisfy_2(_edgeList_1(_self), _isUndirectedEdge_1);
      },
    );
  },
  "{ :self |\n\t\tself.edgeList.anySatisfy(isDirectedEdge:/1) & {\n\t\t\tself.edgeList.anySatisfy(isUndirectedEdge:/1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isRegular",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_nub_1(_vertexDegree_1(_self))), 1);
  },
  "{ :self |\n\t\tself.vertexDegree.nub.size = 1\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isSingleton",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_vertexCount_1(_self), 1);
    });
  },
  "{ :self |\n\t\tself.isEmpty & {\n\t\t\tself.vertexCount = 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isUndirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), _isUndirectedEdge_1);
  },
  "{ :self |\n\t\tself.edgeList.allSatisfy(isUndirectedEdge:/1)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "isValid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasValidEdgeList_1(_self);
  },
  "{ :self |\n\t\tself.hasValidEdgeList\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "labeledVertexList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_each, _vertexLabel_2(_self, _each));
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :each |\n\t\t\teach -> self.vertexLabel(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "lineGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _edgeCount_1(_self);
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _e = [];
    /* Statements */
    _ifTrue_2(_isUndirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _k, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _hasCommonVertex_2(
              _at_2(_edgeList_1(_self), _i),
              _at_2(_edgeList_1(_self), _j),
            ),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _add_2(_e, [_i, _j]);
            },
          );
        });
      });
    });
    _ifTrue_2(_isDirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _k, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _ampersand_2(_tildeEqualsSign_2(_i, _j), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(
                _at_2(_at_2(_edgeList_1(_self), _i), 2),
                _at_2(_at_2(_edgeList_1(_self), _j), 1),
              );
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _add_2(
                _e,
                _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
              );
            },
          );
        });
      });
    });
    _ifTrue_2(_isMixed_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Graph>>lineGraph: mixed graph");
    });
    return _Graph_2(_v, _e);
  },
  "{ :self |\n\t\tlet k = self.edgeCount;\n\t\tlet v = [1 .. k];\n\t\tlet e = [];\n\t\tself.isUndirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\tself.edgeList[i].hasCommonVertex(\n\t\t\t\t\t\tself.edgeList[j]\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add([i, j])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isDirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\t(\n\t\t\t\t\t\ti ~= j & {\n\t\t\t\t\t\t\tself.edgeList[i][2] = self.edgeList[j][1]\n\t\t\t\t\t\t}\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add(i --> j)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isMixed.ifTrue {\n\t\t\tself.error('@Graph>>lineGraph: mixed graph')\n\t\t};\n\t\tGraph(v, e)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "neighboursOf",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_outEdgesOf_2(_self, _vertex), _second_1);
  },
  "{ :self :vertex |\n\t\tself.outEdgesOf(vertex).collect(second:/1)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "outEdgesOf",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_edges_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_at_2(_edge, 1), _vertex);
    });
  },
  "{ :self :vertex |\n\t\tself.edges.select { :edge |\n\t\t\tedge[1] = vertex\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "sumGraph",
  ["self", "aGraph"],
  function (_self, _aGraph) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aGraph";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_vertexCount_1(_self), _vertexCount_1(_aGraph)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _adjacencyMatrix_1(_self);
        let _n = _adjacencyMatrix_1(_aGraph);
        /* Statements */
        return _adjacencyGraph_1(_plusSign_2(_m, _n));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Graph>>sumGraph: non-equal vertex counts");
      },
    );
  },
  "{ :self :aGraph |\n\t\t(self.vertexCount = aGraph.vertexCount).if {\n\t\t\tlet m = self.adjacencyMatrix;\n\t\t\tlet n = aGraph.adjacencyMatrix;\n\t\t\t(m + n).adjacencyGraph\n\t\t} {\n\t\t\tself.error('@Graph>>sumGraph: non-equal vertex counts')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "undirectedGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Graph_2(
      _vertexList_1(_self),
      _nubBy_2(
        _collect_2(_edgeList_1(_self), _asUndirectedEdge_1),
        _matchesEdge_2,
      ),
    );
  },
  "{ :self |\n\t\tGraph(\n\t\t\tself.vertexList,\n\t\t\tself.edgeList.collect(asUndirectedEdge:/1).nubBy(matchesEdge:/2)\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexList_1(_self));
  },
  "{ :self |\n\t\tself.vertexList.size\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexDegree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _vertexDegree_2(_self, _vertex);
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexDegree(vertex)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexDegree",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 2)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexInDegree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _vertexInDegree_2(_self, _vertex);
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexInDegree(vertex)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexInDegree",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 2)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_isUndirectedEdge_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 1)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _answer = _plusSign_2(_answer, 1);
        });
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\teach.isUndirectedEdge.ifTrue {\n\t\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexIndex",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOf_2(_vertexList_1(_self), _vertex);
  },
  "{ :self :vertex |\n\t\tself.vertexList.indexOf(vertex)\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexOutDegree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _vertexOutDegree_2(_self, _vertex);
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexOutDegree(vertex)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Graph",
  "Graph",
  "vertexOutDegree",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_isUndirectedEdge_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_equalsSign_2(_vertex, _at_2(_each, 2)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _answer = _plusSign_2(_answer, 1);
        });
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\teach.isUndirectedEdge.ifTrue {\n\t\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addType(
  false,
  "Graph",
  "Graph",
  ["Object", "Graph"],
  ["vertexList", "edgeList", "properties"],
);

sl.copyTraitToType(
  "Object",
  "Graph",
);

sl.copyTraitToType(
  "Graph",
  "Graph",
);

sl.addMethod(
  "Graph",
  "Graph",
  "addEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _add_2(_edgeList_1(_self), _edge);
  },
  "{ :self :edge |\n\t\tself.edgeList.add(edge)\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "dotDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _layoutEngine = _if_3(_isDirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "dot";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "neato";
    });
    /* Statements */
    return _then_2(
      _dotLayout_3(_asDot_1(_self), "svg", _layoutEngine),
      function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Svg_1(_answer);
      },
    );
  },
  "{ :self |\n\t\tlet layoutEngine = self.isDirected.if { 'dot' } { 'neato' };\n\t\tself.asDot.dotLayout('svg', layoutEngine).then { :answer |\n\t\t\tanswer.Svg\n\t\t}\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "includeEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(_includesEdge_2(_self, _edge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _addEdge_2(_self, _edge);
    });
  },
  "{ :self :edge |\n\t\tself.includesEdge(edge).ifFalse {\n\t\t\tself.addEdge(edge)\n\t\t}\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "isValid",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasValidEdges_1(_self);
  },
  "{\n\t\tself.hasValidEdges\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertexCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_properties_1(_self), "vertexCoordinates");
  },
  "{ :self |\n\t\tself.properties['vertexCoordinates']\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertexCoordinates",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "vertexCoordinates", _aList);
    return _self;
  },
  "{ :self :aList |\n\t\tself.properties['vertexCoordinates'] := aList;\n\t\tself\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertexLabels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_properties_1(_self), "vertexLabels");
  },
  "{ :self |\n\t\tself.properties['vertexLabels']\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertexLabels",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "vertexLabels", _aList);
    return _self;
  },
  "{ :self :aList |\n\t\tself.properties['vertexLabels'] := aList;\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "completeBipartiteGraph",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _upOrDownTo_2(1, _self);
    let _v = _upOrDownTo_2(
      _plusSign_2(_self, 1),
      _plusSign_2(_self, _anInteger),
    );
    let _e = [];
    /* Statements */
    _do_2(_u, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _addAll_2(
        _e,
        _collect_2(_v, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return [_i, _j];
        }),
      );
    });
    return _Graph_2(_plusSignPlusSign_2(_u, _v), _e);
  },
  "{ :self :anInteger |\n\t\tlet u = 1:self;\n\t\tlet v = ((self + 1) .. (self + anInteger));\n\t\tlet e = [];\n\t\tu.do { :i |\n\t\t\te.addAll(\n\t\t\t\tv.collect { :j |\n\t\t\t\t\t[i, j]\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tGraph(u ++ v, e)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "completeGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    /* Statements */
    _toDo_3(1, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _addAll_2(
        _edgeList,
        _collect_2(_to_2(_plusSign_2(_i, 1), _self), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return [_i, _j];
        }),
      );
    });
    return _Graph_2(_asList_1(_upOrDownTo_2(1, _self)), _edgeList);
  },
  "{ :self |\n\t\tlet edgeList = [];\n\t\t1.toDo(self) { :i |\n\t\t\tedgeList.addAll(\n\t\t\t\t(i + 1).to(self).collect { :j |\n\t\t\t\t\t[i, j]\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tGraph([1 .. self], edgeList)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "completeGraphDrawing",
  ["self", "radius"],
  function (_self, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radius";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _circlePoints_3(_self, _radius, 0);
    /* Statements */
    return _LineDrawing_1([_PointCloud_1(_p), _Line_1(_tuples_2(_p, 2))]);
  },
  "{ :self :radius |\n\t\tlet p = self.circlePoints(radius, 0);\n\t\t[\n\t\t\tp.PointCloud,\n\t\t\tp.tuples(2).Line\n\t\t].LineDrawing\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "cubeGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _circumflexAccent_2(2, _self);
    let _m = _integerLength_2(_hyphenMinus_2(_k, 1), 2);
    let _n = _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_k, 1)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _padLeft_3(_integerDigits_2(_each, 2), _m, 0);
      },
    );
    let _e = [];
    /* Statements */
    _toDo_3(1, _k, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(_i, _k, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _hammingDistance_2(_at_2(_n, _i), _at_2(_n, _j));
        /* Statements */
        return _ifTrue_2(_equalsSign_2(_d, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_e, [_i, _j]);
        });
      });
    });
    return _asGraph_1(_e);
  },
  "{ :self |\n\t\tlet k = 2 ^ self;\n\t\tlet m = (k - 1).integerLength(2);\n\t\tlet n = (0 .. (k - 1)).collect { :each |\n\t\t\teach.integerDigits(2).padLeft(m, 0)\n\t\t};\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\ti.toDo(k) { :j |\n\t\t\t\tlet d = n[i].hammingDistance(n[j]);\n\t\t\t\t(d = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\te.asGraph\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "cycleGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(_collect_2(_upOrDownTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [_each, _plusSign_2(_percentSign_2(_each, _self), 1)];
    }));
  },
  "{ :self |\n\t\t1:self.collect { :each |\n\t\t\t[each, each % self + 1]\n\t\t}.asGraph\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "pathGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _collect_2(_upOrDownTo_2(1, _hyphenMinus_2(_self, 1)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_each, _plusSign_2(_each, 1)];
      }),
    );
  },
  "{ :self |\n\t\t(1 .. (self - 1)).collect { :each |\n\t\t\t[each, each + 1]\n\t\t}.asGraph\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "starGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(_collect_2(_upOrDownTo_2(2, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [1, _each];
    }));
  },
  "{ :self |\n\t\t2:self.collect { :each |\n\t\t\t[1, each]\n\t\t}.asGraph\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "wheelGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_self, 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Integer>>wheelGraph: n < 4");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _cycle = _collect_2(_to_2(2, _self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _each,
          _if_3(_equalsSign_2(_each, _self), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_each, 1);
          }),
        ];
      });
      let _star = _collect_2(_to_2(2, _self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [1, _each];
      });
      /* Statements */
      return _asGraph_1(_plusSignPlusSign_2(_cycle, _star));
    });
  },
  "{ :self |\n\t\t(self < 4).if {\n\t\t\tself.error('Integer>>wheelGraph: n < 4')\n\t\t} {\n\t\t\tlet cycle = 2.to(self).collect { :each |\n\t\t\t\t[each, (each = self).if { 2 } { each + 1 }]\n\t\t\t};\n\t\t\tlet star = 2.to(self).collect { :each |\n\t\t\t\t[1, each]\n\t\t\t};\n\t\t\t(cycle ++ star).asGraph\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "asEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asEdge_1);
  },
  "{ :self |\n\t\tself.collect(asEdge:/1)\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "gridGraph",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _product_1(_shape);
    let _v = _iota_1(_k);
    let _c = _collect_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _cartesianIndex_2(_shape, _i);
    });
    let _e = [];
    /* Statements */
    _toDo_3(1, _k, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(
            _sum_1(_abs_1(_hyphenMinus_2(_at_2(_c, _j), _at_2(_c, _i)))),
            1,
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_e, [_i, _j]);
          },
        );
      });
    });
    return _Graph_2(_v, _e);
  },
  "{ :shape |\n\t\tlet k = shape.product;\n\t\tlet v = k.iota;\n\t\tlet c = 1:k.collect { :i | shape.cartesianIndex(i) };\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t((c[j] - c[i]).abs.sum = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(v, e)\n\t}",
);

sl.addMethod(
  "Block",
  "Graph",
  "edgeCountGraph",
  ["self:/2", "isDirected", "vertexList"],
  function (_self_2, _isDirected, _vertexList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _isDirected, _vertexList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isDirected, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _edgeList,
          _hyphenMinusHyphenMinusGreaterThanSign_2(
            _at_2(_v, _i),
            _at_2(_v, _j),
          ),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_lessThanSignEqualsSign_2(_i, _j), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
        });
      });
    };
    /* Statements */
    _do_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_upOrDownTo_2(1, _k), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _self_2(_at_2(_v, _i), _at_2(_v, _j));
        /* Statements */
        return _timesRepeat_2(_n, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _addEdge_2(_i, _j);
        });
      });
    });
    return _Graph_2(_vertexList, _edgeList);
  },
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] --> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tlet n = self(v[i], v[j]);\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
);

sl.addMethod(
  "Block",
  "Graph",
  "relationGraph",
  ["self:/2", "isDirected", "vertexList"],
  function (_self_2, _isDirected, _vertexList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _isDirected, _vertexList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isDirected, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _edgeList,
          _hyphenMinusHyphenMinusGreaterThanSign_2(
            _at_2(_v, _i),
            _at_2(_v, _j),
          ),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_lessThanSignEqualsSign_2(_i, _j), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
        });
      });
    };
    /* Statements */
    _do_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_upOrDownTo_2(1, _k), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_self_2(_at_2(_v, _i), _at_2(_v, _j)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _addEdge_2(_i, _j);
        });
      });
    });
    return _Graph_2(_vertexList, _edgeList);
  },
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] --> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tself(v[i], v[j]).ifTrue {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "adjacencyGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _isDirected = _not_1(_isSymmetricMatrix_1(_self));
      /* Statements */
      return _edgeCountGraph_3(
        function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _at_3(_self, _i, _j);
        },
        _isDirected,
        _iota_1(_size_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adjacencyGraph_2(
        _self,
        "List>>adjacencyGraph: not a square matrix",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet isDirected = self.isSymmetricMatrix.not;\n\t\t\t{ :i :j |\n\t\t\t\tself[i, j]\n\t\t\t}.edgeCountGraph(isDirected, self.size.iota)\n\t\t} {\n\t\t\tself.adjacencyGraph('List>>adjacencyGraph: not a square matrix')\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "asGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = _asList_1(_collect_2(_self, _asEdge_1));
    let _vertexList = [];
    /* Statements */
    _do_2(_edgeList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_vertexList, _at_2(_each, 1));
      return _add_2(_vertexList, _at_2(_each, 2));
    });
    return _Graph_2(_sort_1(_nub_1(_vertexList)), _edgeList);
  },
  "{ :self |\n\t\tlet edgeList = self.collect(asEdge:/1).asList;\n\t\tlet vertexList = [];\n\t\tedgeList.do { :each |\n\t\t\tvertexList.add(each[1]);\n\t\t\tvertexList.add(each[2])\n\t\t};\n\t\tGraph(vertexList.nub.sort, edgeList)\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "Graph",
  ["vertexList", "edgeList"],
  function (_vertexList, _edgeList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _vertexList, _edgeList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newGraph_0(),
      _vertexList,
      _collect_2(_edgeList, _asEdge_1),
      Object.fromEntries([]),
    );
  },
  "{ :vertexList :edgeList |\n\t\tnewGraph().initializeSlots(\n\t\t\tvertexList,\n\t\t\tedgeList.collect(asEdge:/1),\n\t\t\t()\n\t\t)\n\t}",
);

sl.addMethod(
  "String",
  "Graph",
  "dotLayout",
  ["dotSource", "outputFormat", "layoutEngine"],
  function (_dotSource, _outputFormat, _layoutEngine) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _dotSource, _outputFormat, _layoutEngine";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return import(
      "../lib/scsynth-wasm-builds/lib/ext/graphviz.js"
    ).then(
      function ({ Graphviz }) {
        return Graphviz.load().then(
          function (graphviz) {
            return graphviz.layout(
              _dotSource,
              _outputFormat,
              _layoutEngine,
              {},
            );
          },
        );
      },
    );
  },
  "{ :dotSource :outputFormat :layoutEngine |\n\t\t<primitive:\n\t\treturn import(\n\t\t\t'../lib/scsynth-wasm-builds/lib/ext/graphviz.js'\n\t\t).then(\n\t\t\tfunction ({ Graphviz }) {\n\t\t\t\treturn Graphviz.load().then(\n\t\t\t\t\tfunction (graphviz) {\n\t\t\t\t\t\treturn graphviz.layout(\n\t\t\t\t\t\t\t_dotSource,\n\t\t\t\t\t\t\t_outputFormat,\n\t\t\t\t\t\t\t_layoutEngine,\n\t\t\t\t\t\t\t{}\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t);\n\t\t>\n\t}",
);
