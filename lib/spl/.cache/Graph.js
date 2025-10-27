sl.addTrait("Graph", "Graph");

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "tilde",
  ["self", "aGraph"],
  sl.annotateFunction(function (_self, _aGraph) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aGraph";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(
        _sorted_1(_vertexList_1(_self)),
        _sorted_1(_vertexList_1(_aGraph)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _sorted_1(_edgeList_1(_self)),
          _sorted_1(_edgeList_1(_aGraph)),
        );
      }, []),
    );
  }, ["self", "aGraph"]),
  "{ :self :aGraph |\n\t\tself.vertexList.sorted = aGraph.vertexList.sorted & {\n\t\t\tself.edgeList.sorted = aGraph.edgeList.sorted\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "plusSign",
  ["self", "aGraph"],
  sl.annotateFunction(function (_self, _aGraph) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aGraph";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphSum_2(_self, _aGraph);
  }, ["self", "aGraph"]),
  "{ :self :aGraph |\n\t\tself.graphSum(aGraph)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "adjacencyList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _adjacencyList_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :each |\n\t\t\tself.adjacencyList(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "adjacencyList",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_at_2(_each, 1), _vertex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _at_2(_each, 2));
          }, []),
        );
        return _ifTrue_2(
          _equalsSign_2(_at_2(_each, 2), _vertex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _at_2(_each, 1));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = [];\n\t\tself.edgeList.do { :each |\n\t\t\t(each[1] = vertex).ifTrue {\n\t\t\t\tanswer.add(each[2])\n\t\t\t};\n\t\t\t(each[2] = vertex).ifTrue {\n\t\t\t\tanswer.add(each[1])\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "adjacencyMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _count_2(
          _edgeList_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _matchesEdge_2(
              _each,
              _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
            );
          }, ["each"]),
        );
      }, ["i", "j"]),
      _v,
      _v,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\tself.edgeList.count { :each |\n\t\t\t\teach.matchesEdge(i --> j)\n\t\t\t}\n\t\t}.table(v, v)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asDot",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _isMixed = _isMixed_1(_self);
    let _graphType = _if_3(
      _isUndirected_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "graph";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "digraph";
      }, []),
    );
    let _begin = _format_2('% {\ngraph [layout="%"];', [
      _graphType,
      _at_2(_options, "method"),
    ]);
    let _vertexLabels = _if_3(
      _hasVertexLabels_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexLabels_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
    let _attributeText = _unlines_1([
      'graph [size="1.214,0.75",bgcolor="transparent"];',
      _format_2('node [shape="%"];', [
        _if_3(
          _hasVertexLabels_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "box";
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "point";
          }, []),
        ),
      ]),
      'edge [penwidth="0.75",arrowsize="0.5"];',
    ]);
    let _nodeText = _if_3(
      _hasVertexLabels_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unlines_1(
          _collect_2(
            _vertexList_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _label = _at_2(_vertexLabels, _each);
              /* Statements */
              return _ifNil_3(
                _label,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2('% [shape="point"];', [_each]);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2(
                    '% [label="%",shape="box",width="0",height="0"];',
                    [
                      _each,
                      _ifNil_3(
                        _label,
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return "";
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _label;
                        }, []),
                      ),
                    ],
                  );
                }, []),
              );
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
        return "/* implicit nodes */";
      }, []),
    );
    let _edgeText = _unlines_1(
      _collect_2(
        _edgeList_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _forDot_2(_each, _isMixed);
        }, ["each"]),
      ),
    );
    let _end = "}";
    /* Statements */
    return _unlines_1([_begin, _attributeText, _nodeText, _edgeText, _end]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet isMixed = self.isMixed;\n\t\tlet graphType = self.isUndirected.if { 'graph' } { 'digraph' };\n\t\tlet begin = '% {\\ngraph [layout=\"%\"];'.format(\n\t\t\t[\n\t\t\t\tgraphType,\n\t\t\t\toptions['method']\n\t\t\t]\n\t\t);\n\t\tlet vertexLabels = self.hasVertexLabels.if {\n\t\t\tself.vertexLabels\n\t\t} {\n\t\t\tnil\n\t\t};\n\t\tlet attributeText = [\n\t\t\t'graph [size=\"1.214,0.75\",bgcolor=\"transparent\"];',\n\t\t\t'node [shape=\"%\"];'.format(\n\t\t\t\t[self.hasVertexLabels.if { 'box' } { 'point' }]\n\t\t\t),\n\t\t\t'edge [penwidth=\"0.75\",arrowsize=\"0.5\"];'\n\t\t].unlines;\n\t\tlet nodeText = self.hasVertexLabels.if {\n\t\t\tself.vertexList.collect { :each |\n\t\t\t\tlet label = vertexLabels[each];\n\t\t\t\tlabel.ifNil {\n\t\t\t\t\t'% [shape=\"point\"];'.format([each])\n\t\t\t\t} {\n\t\t\t\t\t'% [label=\"%\",shape=\"box\",width=\"0\",height=\"0\"];'.format(\n\t\t\t\t\t\t[each, label.ifNil { '' } { label }]\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t}.unlines\n\t\t} {\n\t\t\t'/* implicit nodes */'\n\t\t};\n\t\tlet edgeText = self.edgeList.collect { :each |\n\t\t\teach.forDot(isMixed)\n\t\t}.unlines;\n\t\tlet end = '}';\n\t\t[\n\t\t\tbegin,\n\t\t\tattributeText,\n\t\t\tnodeText,\n\t\t\tedgeText,\n\t\t\tend\n\t\t].unlines\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asDot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDot_2(
      _self,
      _Record_1([[
        "method",
        _if_3(
          _isUndirected_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "neato";
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "dot";
          }, []),
        ),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.asDot(\n\t\t\tmethod: self.isUndirected.if { 'neato' } { 'dot' }\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asGeometryCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    let _contents = [_PointCloud_1(_vertexCoordinates)];
    /* Statements */
    _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SplVar1, 1);
        let _j = _at_2(__SplVar1, 2);
        /* Statements */
        return _add_2(
          _contents,
          _LineSegment_2(
            _at_2(_vertexCoordinates, _i),
            _at_2(_vertexCoordinates, _j),
          ),
        );
      }, ["each"]),
    );
    return _GeometryCollection_1(_contents);
  }, ["self"]),
  "{ :self |\n\t\tlet vertexCoordinates = self.vertexCoordinates;\n\t\tlet contents = [PointCloud(vertexCoordinates)];\n\t\tself.edgeList.do { :each |\n\t\t\tlet [i, j] = each;\n\t\t\tcontents.add(\n\t\t\t\tLineSegment(\n\t\t\t\t\tvertexCoordinates[i],\n\t\t\t\t\tvertexCoordinates[j]\n\t\t\t\t)\n\t\t\t)\n\t\t};\n\t\tGeometryCollection(contents)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asLineDrawing_1(_asGeometryCollection_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asGeometryCollection.asLineDrawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_2(_asGeometryCollection_1(_self), _projection);
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tself.asGeometryCollection.asPerspectiveDrawing(projection)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_1(_asGeometryCollection_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asGeometryCollection.asPerspectiveDrawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "circularGraphPlot",
  ["self", "ordering", "radius"],
  sl.annotateFunction(function (_self, _ordering, _radius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _ordering, _radius";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _vertexCount_1(_self);
    let _p = _circlePoints_4(_k, [0, 0], _radius, 0);
    let _e = _collect_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1(_atAll_2(_p, _atAll_2(_ordering, _vertexList_1(_each))));
      }, ["each"]),
    );
    /* Statements */
    return _LineDrawing_1([_PointCloud_1(_p), _e]);
  }, ["self", "ordering", "radius"]),
  "{ :self :ordering :radius |\n\t\tlet k = self.vertexCount;\n\t\tlet p = k.circlePoints([0 0], radius, 0);\n\t\tlet e = self.edgeList.collect { :each |\n\t\t\tLine(p.atAll(ordering.atAll(each.vertexList)))\n\t\t};\n\t\t[\n\t\t\tp.PointCloud,\n\t\t\te\n\t\t].LineDrawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "circularGraphPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circularGraphPlot_3(
      _self,
      _asList_1(_upOrDownTo_2(1, _vertexCount_1(_self))),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.circularGraphPlot([1 .. self.vertexCount], 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "complement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphComplement_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.graphComplement\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "connectionMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(
          _includesEdge_2(
            _self,
            _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
          ),
        );
      }, ["i", "j"]),
      _v,
      _v,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\tself.includesEdge(i --> j).boole\n\t\t}.table(v, v)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "degreeSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_vertexDegree_1(_self), _greaterThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexDegree.sortBy(>)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "dijkstrasAlgorithm",
  ["g", "s", "t"],
  sl.annotateFunction(function (_g, _s, _t) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _vertexCount_1(_g);
    let _w = _edgeWeights_1(_g);
    let _e = _edgeList_1(_g);
    let _q = _PriorityQueue_0();
    let _d = _List_2(_k, Infinity);
    let _p = _List_1(_k);
    /* Statements */
    _atPut_3(_d, _s, 0);
    _atPut_3(_p, _s, null);
    _pushWithPriority_3(_q, _s, 0);
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_q);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _pop_1(_q);
        /* Statements */
        return _if_3(
          _equalsSign_2(_u, _t),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeAll_1(_q);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(
              _vertexOutNeighbours_2(_g, _u),
              sl.annotateFunction(function (_v) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _v";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _uv = _hyphenMinusHyphenMinusGreaterThanSign_2(_u, _v);
                let _i = _detectIndex_2(
                  _e,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _matchesEdge_2(_each, _uv);
                  }, ["each"]),
                );
                let _a = _plusSign_2(_at_2(_d, _u), _at_2(_w, _i));
                /* Statements */
                return _ifTrue_2(
                  _lessThanSign_2(_a, _at_2(_d, _v)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _atPut_3(_p, _v, _u);
                    _atPut_3(_d, _v, _a);
                    return _pushWithPriority_3(_q, _v, _a);
                  }, []),
                );
              }, ["v"]),
            );
          }, []),
        );
      }, []),
    );
    return [_d, _p];
  }, ["g", "s", "t"]),
  "{ :g :s :t |\n\t\tlet k = g.vertexCount;\n\t\tlet w = g.edgeWeights;\n\t\tlet e = g.edgeList;\n\t\tlet q = PriorityQueue();\n\t\tlet d = List(k, Infinity);\n\t\tlet p = List(k);\n\t\td[s] := 0;\n\t\tp[s] := nil;\n\t\tq.pushWithPriority(s, 0);\n\t\t{ q.isEmpty }.whileFalse {\n\t\t\tlet u = q.pop;\n\t\t\t(u = t).if {\n\t\t\t\tq.removeAll\n\t\t\t} {\n\t\t\t\tg.vertexOutNeighbours(u).do { :v |\n\t\t\t\t\tlet uv = u --> v;\n\t\t\t\t\tlet i = e.detectIndex { :each |\n\t\t\t\t\t\teach.matchesEdge(uv)\n\t\t\t\t\t};\n\t\t\t\t\tlet a = d[u] + w[i];\n\t\t\t\t\t(a < d[v]).ifTrue {\n\t\t\t\t\t\tp[v] := u;\n\t\t\t\t\t\td[v] := a;\n\t\t\t\t\t\tq.pushWithPriority(v, a)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[d, p]\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "dijkstrasAlgorithm",
  ["g", "s"],
  sl.annotateFunction(function (_g, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _dijkstrasAlgorithm_3(_g, _s, null);
  }, ["g", "s"]),
  "{ :g :s |\n\t\tg.dijkstrasAlgorithm(s, nil)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _drawing_1(_asLineDrawing_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asLineDrawing.drawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_edgeList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.edgeList.size\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "edgeIndex",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndex_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesEdge_2(_each, _edge);
      }, ["each"]),
    );
  }, ["self", "edge"]),
  "{ :self :edge |\n\t\tself.edgeList.detectIndex { :each |\n\t\t\teach.matchesEdge(edge)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "findShortestPath",
  ["g", "s", "t"],
  sl.annotateFunction(function (_g, _s, _t) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let __SplVar2 = _assertIsOfSize_2(_dijkstrasAlgorithm_3(_g, _s, _t), 2);
    let _d = _at_2(__SplVar2, 1);
    let _p = _at_2(__SplVar2, 2);
    let _u = _t;
    /* Statements */
    _ifTrue_2(
      _verticalLine_2(
        _exclamationMarkEqualsSign_2(_at_2(_p, _u), null),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_u, _s);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_u, null);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _addFirst_2(_answer, _u);
            return _u = _at_2(_p, _u);
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["g", "s", "t"]),
  "{ :g :s :t |\n\t\tlet answer = [];\n\t\tlet [d, p] = g.dijkstrasAlgorithm(s, t);\n\t\tlet u = t;\n\t\t( p[u] != nil | { u = s } ).ifTrue {\n\t\t\t{ u != nil }.whileTrue {\n\t\t\t\tanswer.addFirst(u);\n\t\t\t\tu := p[u]\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "findShortestTour",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Statements */
    return _heldKarpAlgorithm_1(_graphDistanceMatrix_1(_g));
  }, ["g"]),
  "{ :g |\n\t\tg.graphDistanceMatrix.heldKarpAlgorithm\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphComplement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _adjacencyMatrix_1(_self);
    /* Statements */
    return _adjacencyGraph_1(
      _hyphenMinus_2(_hyphenMinus_2(1, _identityMatrix_1(_size_1(_m))), _m),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.adjacencyMatrix;\n\t\t(1 - m.size.identityMatrix - m).adjacencyGraph\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphDistance",
  ["g", "s", "t"],
  sl.annotateFunction(function (_g, _s, _t) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_dijkstrasAlgorithm_3(_g, _s, _t), 2);
    let _d = _at_2(__SplVar3, 1);
    let _p = _at_2(__SplVar3, 2);
    /* Statements */
    return _at_2(_d, _t);
  }, ["g", "s", "t"]),
  "{ :g :s :t |\n\t\tlet [d, p] = g.dijkstrasAlgorithm(s, t);\n\t\td[t]\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphDistanceMatrix",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _vertexCount_1(_g);
    let _m = [];
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar4 = _assertIsOfSize_2(_dijkstrasAlgorithm_2(_g, _i), 2);
        let _d = _at_2(__SplVar4, 1);
        let _p = _at_2(__SplVar4, 2);
        /* Statements */
        return _add_2(_m, _d);
      }, ["i"]),
    );
    return _m;
  }, ["g"]),
  "{ :g |\n\t\tlet n = g.vertexCount;\n\t\tlet m = [];\n\t\t1.toDo(n) { :i |\n\t\t\tlet [d, p] = g.dijkstrasAlgorithm(i);\n\t\t\tm.add(d)\n\t\t};\n\t\tm\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_3([_self], "graph", _Record_1([["method", "neato"]]));
  }, ["self"]),
  "{ :self |\n\t\t[self].Plot('graph', (method: 'neato'))\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphProduct",
  ["g1", "g2", "kind"],
  sl.annotateFunction(function (_g1, _g2, _kind) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g1, _g2, _kind";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cartesianPredicate_4 = sl.annotateFunction(
      function (_u1, _u2, _v1, _v2) {
        /* ArityCheck */
        if (arguments.length !== 4) {
          const errorMessage = "Arity: expected 4, _u1, _u2, _v1, _v2";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _ampersand_2(
            _equalsSign_2(_u1, _v1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includesEdge_2(
                _g2,
                _hyphenMinusHyphenMinusHyphenMinus_2(_u2, _v2),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return (_ampersand_2(
              _equalsSign_2(_u2, _v2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includesEdge_2(
                  _g1,
                  _hyphenMinusHyphenMinusHyphenMinus_2(_u1, _v1),
                );
              }, []),
            ));
          }, []),
        );
      },
      ["u1", "u2", "v1", "v2"],
    );
    let _normalPredicate_4 = sl.annotateFunction(function (_u1, _u2, _v1, _v2) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _u1, _u2, _v1, _v2";
        throw new Error(errorMessage);
      } /* Statements */
      return _verticalLine_2(
        _cartesianPredicate_4(_u1, _u2, _v1, _v2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _includesEdge_2(
              _g2,
              _hyphenMinusHyphenMinusHyphenMinus_2(_u2, _v2),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includesEdge_2(
                _g1,
                _hyphenMinusHyphenMinusHyphenMinus_2(_u1, _v1),
              );
            }, []),
          );
        }, []),
      );
    }, ["u1", "u2", "v1", "v2"]);
    let _v = _cartesianProduct_2(_vertexList_1(_g1), _vertexList_1(_g2));
    let _predicate_4 = _caseOf_3(
      _kind,
      [
        _hyphenMinusGreaterThanSign_2(
          "Cartesian",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cartesianPredicate_4;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Normal",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _normalPredicate_4;
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_kind, "Graph>>graphProduct");
      }, []),
    );
    let _e = [];
    let _k = _size_1(_v);
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar5 = _assertIsOfSize_2(_at_2(_v, _i), 2);
        let _u1 = _at_2(__SplVar5, 1);
        let _u2 = _at_2(__SplVar5, 2);
        /* Statements */
        return _toDo_3(
          _plusSign_2(_i, 1),
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar6 = _assertIsOfSize_2(_at_2(_v, _j), 2);
            let _v1 = _at_2(__SplVar6, 1);
            let _v2 = _at_2(__SplVar6, 2);
            /* Statements */
            return _ifTrue_2(
              _predicate_4(_u1, _u2, _v1, _v2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, _hyphenMinusHyphenMinusHyphenMinus_2(_i, _j));
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_asList_1(_upOrDownTo_2(1, _k)), _e);
  }, ["g1", "g2", "kind"]),
  "{ :g1 :g2 :kind |\n\t\tlet cartesianPredicate = { :u1 :u2 :v1 :v2 |\n\t\t\t(\n\t\t\t\t(u1 = v1) & {\n\t\t\t\t\tg2.includesEdge(u2 --- v2)\n\t\t\t\t}\n\t\t\t) | {\n\t\t\t\t(\n\t\t\t\t\t(u2 = v2) & {\n\t\t\t\t\t\tg1.includesEdge(u1 --- v1)\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tlet normalPredicate = { :u1 :u2 :v1 :v2 |\n\t\t\tcartesianPredicate(u1, u2, v1, v2) | {\n\t\t\t\tg2.includesEdge(u2 --- v2) & {\n\t\t\t\t\tg1.includesEdge(u1 --- v1)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet v = cartesianProduct(g1.vertexList, g2.vertexList);\n\t\tlet predicate:/4 = kind.caseOf(\n\t\t\t[\n\t\t\t\t'Cartesian' -> { cartesianPredicate:/4 },\n\t\t\t\t'Normal' -> { normalPredicate:/4 }\n\t\t\t]\n\t\t) {\n\t\t\tkind.error('Graph>>graphProduct')\n\t\t};\n\t\tlet e = [];\n\t\tlet k = v.size;\n\t\t1.toDo(k - 1) { :i |\n\t\t\tlet [u1, u2] = v[i];\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\tlet [v1, v2] = v[j];\n\t\t\t\tpredicate(u1, u2, v1, v2).ifTrue {\n\t\t\t\t\te.add(i --- j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph([1 .. k], e)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphProduct",
  ["g1", "g2"],
  sl.annotateFunction(function (_g1, _g2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g1, _g2";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphProduct_3(_g1, _g2, "Cartesian");
  }, ["g1", "g2"]),
  "{ :g1 :g2 |\n\t\tgraphProduct(g1, g2, 'Cartesian')\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "graphSum",
  ["self", "aGraph"],
  sl.annotateFunction(function (_self, _aGraph) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aGraph";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_vertexCount_1(_self), _vertexCount_1(_aGraph)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _adjacencyMatrix_1(_self);
        let _n = _adjacencyMatrix_1(_aGraph);
        /* Statements */
        return _adjacencyGraph_1(_plusSign_2(_m, _n));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Graph>>graphSum: non-equal vertex counts");
      }, []),
    );
  }, ["self", "aGraph"]),
  "{ :self :aGraph |\n\t\t(self.vertexCount = aGraph.vertexCount).if {\n\t\t\tlet m = self.adjacencyMatrix;\n\t\t\tlet n = aGraph.adjacencyMatrix;\n\t\t\t(m + n).adjacencyGraph\n\t\t} {\n\t\t\tself.error('@Graph>>graphSum: non-equal vertex counts')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "hasValidEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _allSatisfy_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_edge) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _edge";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _includes_2(_v, _at_2(_edge, 1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2(_v, _at_2(_edge, 2));
          }, []),
        );
      }, ["edge"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\tself.edgeList.allSatisfy { :edge |\n\t\t\tv.includes(edge[1]) & {\n\t\t\t\tv.includes(edge[2])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "incidenceGraph",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(_incidenceList_2(_self, _vertex));
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tself.incidenceList(vertex).asGraph\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "incidenceList",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_at_2(_each, 1), _vertex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_each, 2), _vertex);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tself.edgeList.select { :each |\n\t\t\teach[1] = vertex | {\n\t\t\t\teach[2] = vertex\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "incidenceMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _edgeList_1(_self),
          sl.annotateFunction(function (_e) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _e";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isUndirectedEdge_1(_e),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_at_2(_e, 1), _v),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_at_2(_e, 2), _v),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return 2;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return 1;
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
                      _equalsSign_2(_at_2(_e, 2), _v),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return 1;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return 0;
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
                return _if_3(
                  _isDirectedEdge_1(_e),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_at_2(_e, 1), _v),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _equalsSign_2(_at_2(_e, 2), _v),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return -2;
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return -1;
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
                          _equalsSign_2(_at_2(_e, 2), _v),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return 1;
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return 0;
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
                    return _error_2(
                      _self,
                      "@Graph>>incidenceMatrix: invalid edge",
                    );
                  }, []),
                );
              }, []),
            );
          }, ["e"]),
        );
      }, ["v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :v |\n\t\t\tself.edgeList.collect { :e |\n\t\t\t\te.isUndirectedEdge.if {\n\t\t\t\t\t(e[1] = v).if {\n\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t0\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\te.isDirectedEdge.if {\n\t\t\t\t\t\t(e[1] = v).if {\n\t\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t\t-2\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t-1\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(e[2] = v).if {\n\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.error('@Graph>>incidenceMatrix: invalid edge')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "includesEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesEdge_2(_each, _edge);
      }, ["each"]),
    );
  }, ["self", "edge"]),
  "{ :self :edge |\n\t\tself.edgeList.anySatisfy { :each |\n\t\t\teach.matchesEdge(edge)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "includesVertex",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_vertexList_1(_self), _vertex);
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tself.vertexList.includes(vertex)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "inEdgeListOf",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_edge) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _edge";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_at_2(_edge, 2), _vertex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isUndirected_1(_edge),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_edge, 1), _vertex);
              }, []),
            );
          }, []),
        );
      }, ["edge"]),
    );
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tself.edgeList.select { :edge |\n\t\t\t(edge[2] = vertex) | {\n\t\t\t\tedge.isUndirected & {\n\t\t\t\t\tedge[1] = vertex\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isDirected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), _isDirectedEdge_1);
  }, ["self"]),
  "{ :self |\n\t\tself.edgeList.allSatisfy(isDirectedEdge:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_edgeCount_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.edgeCount = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isLoopFree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_at_2(_each, 1), _at_2(_each, 2));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.edgeList.allSatisfy { :each |\n\t\t\teach[1] != each[2]\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isMixed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _anySatisfy_2(_edgeList_1(_self), _isDirectedEdge_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anySatisfy_2(_edgeList_1(_self), _isUndirectedEdge_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.edgeList.anySatisfy(isDirectedEdge:/1) & {\n\t\t\tself.edgeList.anySatisfy(isUndirectedEdge:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isRegular",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_nub_1(_vertexDegree_1(_self))), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexDegree.nub.size = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isSingleton",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_vertexCount_1(_self), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty & {\n\t\t\tself.vertexCount = 1\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isUndirected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), _isUndirectedEdge_1);
  }, ["self"]),
  "{ :self |\n\t\tself.edgeList.allSatisfy(isUndirectedEdge:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasValidEdgeList_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.hasValidEdgeList\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "kirchhoffMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_i, _j),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _vertexDegree_2(_self, _i);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _includesEdge_2(
                _self,
                _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return -1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 0;
              }, []),
            );
          }, []),
        );
      }, ["i", "j"]),
      _v,
      _v,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\t(i = j).if {\n\t\t\t\tself.vertexDegree(i)\n\t\t\t} {\n\t\t\t\tself.includesEdge(i --> j).if {\n\t\t\t\t\t-1\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}.table(v, v)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "labeledVertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(
          _each,
          _vertexLabel_2(_self, _each),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :each |\n\t\t\teach -> self.vertexLabel(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "lineGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _edgeCount_1(_self);
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _e = [];
    /* Statements */
    _ifTrue_2(
      _isUndirected_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              _plusSign_2(_i, 1),
              _k,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _hasCommonVertex_2(
                    _at_2(_edgeList_1(_self), _i),
                    _at_2(_edgeList_1(_self), _j),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_e, [_i, _j]);
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _isDirected_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              _plusSign_2(_i, 1),
              _k,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _ampersand_2(
                    _exclamationMarkEqualsSign_2(_i, _j),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(
                        _at_2(_at_2(_edgeList_1(_self), _i), 2),
                        _at_2(_at_2(_edgeList_1(_self), _j), 1),
                      );
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(
                      _e,
                      _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
                    );
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _isMixed_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Graph>>lineGraph: mixed graph");
      }, []),
    );
    return _Graph_2(_v, _e);
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.edgeCount;\n\t\tlet v = [1 .. k];\n\t\tlet e = [];\n\t\tself.isUndirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\tself.edgeList[i].hasCommonVertex(\n\t\t\t\t\t\tself.edgeList[j]\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add([i, j])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isDirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\t(\n\t\t\t\t\t\ti != j & {\n\t\t\t\t\t\t\tself.edgeList[i][2] = self.edgeList[j][1]\n\t\t\t\t\t\t}\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add(i --> j)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isMixed.ifTrue {\n\t\t\tself.error('@Graph>>lineGraph: mixed graph')\n\t\t};\n\t\tGraph(v, e)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "neighbourhoodGraph",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexList = [];
    /* Statements */
    _do_2(
      _incidenceList_2(_self, _vertex),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_vertexList, _vertexList_1(_each));
      }, ["each"]),
    );
    return _subgraph_2(_self, _vertexList);
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet vertexList = [];\n\t\tself.incidenceList(vertex).do { :each |\n\t\t\tvertexList.addAll(each.vertexList)\n\t\t};\n\t\tself.subgraph(vertexList)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "neighbours",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexList = [];
    /* Statements */
    _do_2(
      _incidenceList_2(_self, _vertex),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_vertexList, _vertexList_1(_each));
      }, ["each"]),
    );
    return _without_2(_sort_1(_nub_1(_vertexList)), _vertex);
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet vertexList = [];\n\t\tself.incidenceList(vertex).do { :each |\n\t\t\tvertexList.addAll(each.vertexList)\n\t\t};\n\t\tvertexList.nub.sort.without(vertex)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "outEdgeListOf",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_edge) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _edge";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_at_2(_edge, 1), _vertex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isUndirected_1(_edge),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_edge, 2), _vertex);
              }, []),
            );
          }, []),
        );
      }, ["edge"]),
    );
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tself.edgeList.select { :edge |\n\t\t\t(edge[1] = vertex) | {\n\t\t\t\tedge.isUndirected & {\n\t\t\t\t\tedge[2] = vertex\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "simpleGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexList_1(_self);
    let _e = _UnsortedSet_0();
    /* Statements */
    _comparator_2(_e, _matchesEdge_2);
    _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_at_2(_each, 1), _at_2(_each, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _include_2(_e, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _Graph_2(_v, _contents_1(_e));
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\tlet e = UnsortedSet();\n\t\te.comparator := matchesEdge:/2;\n\t\tself.edgeList.do { :each |\n\t\t\t(each[1] != each[2]).ifTrue {\n\t\t\t\te.include(each)\n\t\t\t}\n\t\t};\n\t\tGraph(v, e.contents)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "subgraph",
  ["self", "vertexList"],
  sl.annotateFunction(function (_self, _vertexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _select_2(
        _edgeList_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _includesAll_2(_vertexList, _vertexList_1(_each));
        }, ["each"]),
      ),
    );
  }, ["self", "vertexList"]),
  "{ :self :vertexList |\n\t\tself.edgeList.select { :each |\n\t\t\tvertexList.includesAll(each.vertexList)\n\t\t}.asGraph\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "treePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Plot_3([_self], "graph", _Record_1([["method", "dot"]]));
  }, ["self"]),
  "{ :self |\n\t\tPlot([self], 'graph', (method: 'dot'))\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "undirectedGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Graph_2(
      _vertexList_1(_self),
      _nubBy_2(
        _collect_2(_edgeList_1(_self), _asUndirectedEdge_1),
        _matchesEdge_2,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tGraph(\n\t\t\tself.vertexList,\n\t\t\tself.edgeList.collect(asUndirectedEdge:/1).nubBy(matchesEdge:/2)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.size\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexDegree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_vertex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _vertex";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexDegree_2(_self, _vertex);
      }, ["vertex"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexDegree(vertex)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexDegree",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_vertex, _at_2(_each, 1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSign_2(_answer, 1);
          }, []),
        );
        return _ifTrue_2(
          _equalsSign_2(_vertex, _at_2(_each, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSign_2(_answer, 1);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexInDegree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_vertex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _vertex";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexInDegree_2(_self, _vertex);
      }, ["vertex"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexInDegree(vertex)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexInDegree",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _vertexInNeighboursDo_3(
      _self,
      _vertex,
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, ["unused"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.vertexInNeighboursDo(vertex) { :unused |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexInNeighbours",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _vertexInNeighboursDo_3(
      _self,
      _vertex,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = [];\n\t\tself.vertexInNeighboursDo(vertex) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexInNeighboursDo",
  ["self", "vertex", "aBlock:/1"],
  sl.annotateFunction(function (_self, _vertex, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _vertex, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_vertex, _at_2(_each, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_at_2(_each, 1));
          }, []),
        );
        return _ifTrue_2(
          _isUndirectedEdge_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_vertex, _at_2(_each, 1)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_1(_at_2(_each, 2));
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "vertex", "aBlock:/1"]),
  "{ :self :vertex :aBlock:/1 |\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\taBlock(each[1])\n\t\t\t};\n\t\t\teach.isUndirectedEdge.ifTrue {\n\t\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\t\taBlock(each[2])\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexOutDegree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _vertexList_1(_self),
      sl.annotateFunction(function (_vertex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _vertex";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexOutDegree_2(_self, _vertex);
      }, ["vertex"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.vertexList.collect { :vertex |\n\t\t\tself.vertexOutDegree(vertex)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexOutDegree",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _vertexOutDo_3(
      _self,
      _vertex,
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, ["unused"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.vertexOutDo(vertex) { :unused |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexOutDo",
  ["self", "vertex", "aBlock:/1"],
  sl.annotateFunction(function (_self, _vertex, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _vertex, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _equalsSign_2(_vertex, _at_2(_each, 1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_at_2(_each, 2));
          }, []),
        );
        return _ifTrue_2(
          _isUndirectedEdge_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_vertex, _at_2(_each, 2)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_1(_at_2(_each, 1));
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "vertex", "aBlock:/1"]),
  "{ :self :vertex :aBlock:/1 |\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each[1]).ifTrue {\n\t\t\t\taBlock(each[2])\n\t\t\t};\n\t\t\teach.isUndirectedEdge.ifTrue {\n\t\t\t\t(vertex = each[2]).ifTrue {\n\t\t\t\t\taBlock(each[1])\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "vertexOutNeighbours",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _vertexOutDo_3(
      _self,
      _vertex,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "vertex"]),
  "{ :self :vertex |\n\t\tlet answer = [];\n\t\tself.vertexOutDo(vertex) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addType(
  false,
  "Graph",
  "Graph",
  ["Object", "Graph"],
  ["vertexList", "edgeList", "properties"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Graph",
);

sl.copyTraitMethodsToType(
  "Graph",
  "Graph",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "addEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_2(_edgeList_1(_self), _edge);
  }, ["self", "edge"]),
  "{ :self :edge |\n\t\tself.edgeList.add(edge)\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "dotDrawing",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _layoutEngine = _at_2(_options, "method");
    /* Statements */
    return _then_2(
      _dotLayout_3(_asDot_2(_self, _options), "svg", _layoutEngine),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _Svg_1(_answer);
      }, ["answer"]),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet layoutEngine = options['method'];\n\t\tself.asDot(options).dotLayout('svg', layoutEngine).then { :answer |\n\t\t\tanswer.Svg\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "edgeLabels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_properties_1(_self), "edgeLabels");
  }, ["self"]),
  "{ :self |\n\t\tself.properties['edgeLabels']\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "edgeLabels",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "edgeLabels", _aList);
    return _self;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.properties['edgeLabels'] := aList;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "edgeWeights",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _properties_1(_self),
      "edgeWeights",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberSign_2(1, _edgeCount_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.properties.atIfAbsent('edgeWeights') {\n\t\t\t1 # self.edgeCount\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "edgeWeights",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "edgeWeights", _aList);
    return _self;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.properties['edgeWeights'] := aList;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "hasEdgeLabels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_properties_1(_self), "edgeLabels");
  }, ["self"]),
  "{ :self |\n\t\tself.properties.includesKey('edgeLabels')\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "hasVertexLabels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_properties_1(_self), "vertexLabels");
  }, ["self"]),
  "{ :self |\n\t\tself.properties.includesKey('vertexLabels')\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "includeEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _includesEdge_2(_self, _edge),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addEdge_2(_self, _edge);
      }, []),
    );
  }, ["self", "edge"]),
  "{ :self :edge |\n\t\tself.includesEdge(edge).ifFalse {\n\t\t\tself.addEdge(edge)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "isEdgeWeightedGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_properties_1(_self), "edgeWeights");
  }, ["self"]),
  "{ :self |\n\t\tself.properties.includesKey('edgeWeights')\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.asGraph", [_edgeList_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t'%.asGraph'.format([self.edgeList])\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_properties_1(_self), "vertexCoordinates");
  }, ["self"]),
  "{ :self |\n\t\tself.properties['vertexCoordinates']\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "vertexCoordinates",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "vertexCoordinates", _aList);
    return _self;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.properties['vertexCoordinates'] := aList;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "vertexLabels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_properties_1(_self), "vertexLabels");
  }, ["self"]),
  "{ :self |\n\t\tself.properties['vertexLabels']\n\t}",
);

sl.addMethodToExistingType(
  "Graph",
  "Graph",
  "vertexLabels",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_properties_1(_self), "vertexLabels", _aList);
    return _self;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.properties['vertexLabels'] := aList;\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "bookGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphProduct_2(
      _starGraph_1(_plusSign_2(_self, 1)),
      _pathGraph_1(2),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self + 1).starGraph\n\t\t.graphProduct(\n\t\t\t2.pathGraph\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "circulantGraph",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = [];
    /* Statements */
    _toDo_3(
      1,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aList,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_e, [_i, _mod_3(_hyphenMinus_2(_i, _j), _self, 1)]);
            return _add_2(_e, [_i, _mod_3(_plusSign_2(_i, _j), _self, 1)]);
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _simpleGraph_1(_asGraph_1(_e));
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet e = [];\n\t\t1.toDo(self) { :i |\n\t\t\taList.do { :j |\n\t\t\t\te.add([i, (i - j).mod(self, 1)]);\n\t\t\t\te.add([i, (i + j).mod(self, 1)])\n\t\t\t}\n\t\t};\n\t\te.asGraph.simpleGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "completeBipartiteGraph",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _Span_3(1, _self, 1);
    let _v = _upOrDownTo_2(
      _plusSign_2(_self, 1),
      _plusSign_2(_self, _anInteger),
    );
    let _e = [];
    /* Statements */
    _do_2(
      _u,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(
          _e,
          _collect_2(
            _v,
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return [_i, _j];
            }, ["j"]),
          ),
        );
      }, ["i"]),
    );
    return _Graph_2(_plusSignPlusSign_2(_u, _v), _e);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet u = 1:self;\n\t\tlet v = ((self + 1) .. (self + anInteger));\n\t\tlet e = [];\n\t\tu.do { :i |\n\t\t\te.addAll(\n\t\t\t\tv.collect { :j |\n\t\t\t\t\t[i, j]\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tGraph(u ++ v, e)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "completeGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    /* Statements */
    _toDo_3(
      1,
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(
          _edgeList,
          _collect_2(
            _to_2(_plusSign_2(_i, 1), _self),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return [_i, _j];
            }, ["j"]),
          ),
        );
      }, ["i"]),
    );
    return _Graph_2(_asList_1(_upOrDownTo_2(1, _self)), _edgeList);
  }, ["self"]),
  "{ :self |\n\t\tlet edgeList = [];\n\t\t1.toDo(self) { :i |\n\t\t\tedgeList.addAll(\n\t\t\t\t(i + 1).to(self).collect { :j |\n\t\t\t\t\t[i, j]\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tGraph([1 .. self], edgeList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "completeGraphDrawing",
  ["self", "radius"],
  sl.annotateFunction(function (_self, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _circularGraphPlot_3(
      _completeGraph_1(_self),
      _asList_1(_upOrDownTo_2(1, _self)),
      _radius,
    );
  }, ["self", "radius"]),
  "{ :self :radius |\n\t\tself.completeGraph.circularGraphPlot([1 .. self], radius)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "cubeGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _circumflexAccent_2(2, _self);
    let _m = _integerLength_2(_hyphenMinus_2(_k, 1), 2);
    let _n = _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_k, 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _padLeft_3(_integerDigits_2(_each, 2), [_m], 0);
      }, ["each"]),
    );
    let _e = [];
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
        return _toDo_3(
          _i,
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _hammingDistance_2(_at_2(_n, _i), _at_2(_n, _j));
            /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_d, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, [_i, _j]);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _asGraph_1(_e);
  }, ["self"]),
  "{ :self |\n\t\tlet k = 2 ^ self;\n\t\tlet m = (k - 1).integerLength(2);\n\t\tlet n = (0 .. (k - 1)).collect { :each |\n\t\t\teach.integerDigits(2).padLeft([m], 0)\n\t\t};\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\ti.toDo(k) { :j |\n\t\t\t\tlet d = n[i].hammingDistance(n[j]);\n\t\t\t\t(d = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\te.asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "cycleGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _collect_2(
        _Span_3(1, _self, 1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return [_each, _plusSign_2(_percentSign_2(_each, _self), 1)];
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t1:self.collect { :each |\n\t\t\t[each, each % self + 1]\n\t\t}.asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "deBruijnGraph",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _o = _hyphenMinus_2(_n, 1);
    let _k = _circumflexAccent_2(_m, _n);
    let _s = _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_k, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerDigits_3(_i, _m, _n);
      }, ["i"]),
    );
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _e = [];
    let _g = null;
    let _withLabels = false;
    /* Statements */
    _tuplesDo_2(
      [_v, _v],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar7 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SplVar7, 1);
        let _j = _at_2(__SplVar7, 2);
        let __SplVar8 = _assertIsOfSize_2(_atAll_2(_s, [_i, _j]), 2);
        let _p = _at_2(__SplVar8, 1);
        let _q = _at_2(__SplVar8, 2);
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_last_2(_p, _o), _first_2(_q, _o)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_e, [_i, _j]);
          }, []),
        );
      }, ["each"]),
    );
    _g = _Graph_2(_v, _e);
    _ifTrue_2(
      _withLabels,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexLabels_2(
          _g,
          _collect_2(
            _s,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _stringCatenate_1(_collect_2(_each, _asString_1));
            }, ["each"]),
          ),
        );
      }, []),
    );
    return _g;
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet o = n - 1;\n\t\tlet k = m ^ n;\n\t\tlet s = (0 .. k - 1).collect { :i |\n\t\t\ti.integerDigits(m, n)\n\t\t};\n\t\tlet v = [1 .. k];\n\t\tlet e = [];\n\t\tlet g = nil;\n\t\tlet withLabels = false;\n\t\t[v, v].tuplesDo { :each |\n\t\t\tlet [i, j] = each;\n\t\t\tlet [p, q] = s.atAll([i, j]);\n\t\t\t(p.last(o) = q.first(o)).ifTrue {\n\t\t\t\te.add([i, j])\n\t\t\t}\n\t\t};\n\t\tg := Graph(v, e);\n\t\twithLabels.ifTrue {\n\t\t\tg.vertexLabels(\n\t\t\t\ts.collect { :each |\n\t\t\t\t\teach.collect(asString:/1).stringCatenate\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tg\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "hammingGraph",
  ["d", "q"],
  sl.annotateFunction(function (_d, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _d, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _circumflexAccent_2(_q, _d);
    let _s = _tuples_2(_asList_1(_upOrDownTo_2(1, _q)), _d);
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _e = [];
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
        return _toDo_3(
          _plusSign_2(_i, 1),
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _at_2(_s, _i);
            let _q = _at_2(_s, _j);
            /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_hammingDistance_2(_p, _q), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, [_i, _j]);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_v, _e);
  }, ["d", "q"]),
  "{ :d :q |\n\t\tlet k = q ^ d;\n\t\tlet s = [1 .. q].tuples(d);\n\t\tlet v = [1 .. k];\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\tlet p = s[i];\n\t\t\t\tlet q = s[j];\n\t\t\t\t(p.hammingDistance(q) = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(v, e)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "hararyGraphEdgeList",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEven_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _solidus_2(_k, 2);
        let _e = [];
        /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(
              _to_2(1, _m),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _z = _mod_3(_plusSign_2(_i, _j), _n, 1);
                /* Statements */
                return _add_2(_e, [_i, _z]);
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _e;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _isOdd_1(_k),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isEven_1(_n);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _hararyGraphEdgeList_2(_hyphenMinus_2(_k, 1), _n);
            let _m = _solidus_2(_n, 2);
            /* Statements */
            _toDo_3(
              1,
              _m,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, [_i, _plusSign_2(_i, _m)]);
              }, ["i"]),
            );
            return _e;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _hararyGraphEdgeList_2(_hyphenMinus_2(_k, 1), _n);
            let _m = _solidusSolidus_2(_k, 2);
            /* Statements */
            _toDo_3(
              1,
              _plusSign_2(_solidus_2(_hyphenMinus_2(_n, 1), 2), 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _z = _mod_3(
                  _plusSign_2(_i, _solidus_2(_plusSign_2(_n, 1), 2)),
                  _n,
                  1,
                );
                /* Statements */
                return _add_2(_e, [_i, _z]);
              }, ["i"]),
            );
            return _e;
          }, []),
        );
      }, []),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\tk.isEven.if {\n\t\t\tlet m = k / 2;\n\t\t\tlet e = [];\n\t\t\t1.toDo(n) { :i |\n\t\t\t\t1.to(m).do { :j |\n\t\t\t\t\tlet z = (i + j).mod(n, 1);\n\t\t\t\t\te.add([i, z])\n\t\t\t\t}\n\t\t\t};\n\t\t\te\n\t\t} {\n\t\t\t(k.isOdd & { n.isEven }).if {\n\t\t\t\tlet e = hararyGraphEdgeList(k - 1, n);\n\t\t\t\tlet m = n / 2;\n\t\t\t\t1.toDo(m) { :i |\n\t\t\t\t\te.add([i, i + m])\n\t\t\t\t};\n\t\t\t\te\n\t\t\t} {\n\t\t\t\tlet e = hararyGraphEdgeList(k - 1, n);\n\t\t\t\tlet m = k // 2;\n\t\t\t\t1.toDo((n - 1) / 2 + 1) { :i |\n\t\t\t\t\tlet z = (i + (n + 1 / 2)).mod(n, 1);\n\t\t\t\t\te.add([i, z])\n\t\t\t\t};\n\t\t\t\te\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "hararyGraph",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(_hararyGraphEdgeList_2(_k, _n));
  }, ["k", "n"]),
  "{ :k :n |\n\t\thararyGraphEdgeList(k, n).asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "kingGraph",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphProduct_3(_pathGraph_1(_m), _pathGraph_1(_n), "Normal");
  }, ["m", "n"]),
  "{ :m :n |\n\t\tm.pathGraph\n\t\t.graphProduct(\n\t\t\tn.pathGraph,\n\t\t\t'Normal'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "kingGraph",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _kingGraph_2(_m, _m);
  }, ["m"]),
  "{ :m |\n\t\tkingGraph(m, m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "knightGraph",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _sqrt_1(5);
    let _c = _catenate_1(_table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return [_i, _j];
      }, ["i", "j"]),
      _Span_3(1, _m, 1),
      _Span_3(1, _n, 1),
    ));
    let _e = [];
    /* Statements */
    _toDo_3(
      1,
      _asterisk_2(_m, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          _plusSign_2(_i, 1),
          _asterisk_2(_m, _n),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _isVeryCloseTo_2(
                _euclideanDistance_2(_at_2(_c, _i), _at_2(_c, _j)),
                _d,
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, _hyphenMinusHyphenMinusHyphenMinus_2(_i, _j));
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _also_2(
      _Graph_2(_asList_1(_upOrDownTo_2(1, _asterisk_2(_m, _n))), _e),
      sl.annotateFunction(function (_g) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _g";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexCoordinates_2(_g, _c);
      }, ["g"]),
    );
  }, ["m", "n"]),
  "{ :m :n |\n\t\tlet d = 5.sqrt;\n\t\tlet c = { :i :j |\n\t\t\t[i, j]\n\t\t}.table(1:m, 1:n).catenate;\n\t\tlet e = [];\n\t\t1.toDo(m * n) { :i |\n\t\t\t(i + 1).toDo(m * n) { :j |\n\t\t\t\teuclideanDistance(c[i], c[j])\n\t\t\t\t.isVeryCloseTo(d).ifTrue {\n\t\t\t\t\te.add(i --- j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph([1 .. m * n], e).also { :g |\n\t\t\tg.vertexCoordinates(c)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "knightGraph",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _knightGraph_2(_m, _m);
  }, ["m"]),
  "{ :m |\n\t\tknightGraph(m, m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "pathGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _collect_2(
        _upOrDownTo_2(1, _hyphenMinus_2(_self, 1)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return [_each, _plusSign_2(_each, 1)];
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t(1 .. (self - 1)).collect { :each |\n\t\t\t[each, each + 1]\n\t\t}.asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "petersenGraph",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_k, _solidus_2(_n, 2)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _asList_1(_upOrDownTo_2(1, _n));
        let _v = _asList_1(
          _upOrDownTo_2(_plusSign_2(_n, 1), _plusSign_2(_n, _n)),
        );
        let _e = _collect_2(
          _upOrDownTo_2(1, _n),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _mod_3(_plusSign_2(_i, 1), _n, 1);
            let _b = _mod_3(_plusSign_2(_i, _k), _n, 1);
            /* Statements */
            return [[_at_2(_u, _i), _at_2(_u, _a)], [
              _at_2(_u, _i),
              _at_2(_v, _i),
            ], [_at_2(_v, _i), _at_2(_v, _b)]];
          }, ["i"]),
        );
        /* Statements */
        return _Graph_2(_plusSignPlusSign_2(_u, _v), _catenate_1(_e));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_n, _k], "petersenGraph: k > n/2");
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t(k < (n / 2)).if {\n\t\t\tlet u = [1 .. n];\n\t\t\tlet v = [n + 1 .. n + n];\n\t\t\tlet e = (1 .. n).collect { :i |\n\t\t\t\tlet a = (i + 1).mod(n, 1);\n\t\t\t\tlet b = (i + k).mod(n, 1);\n\t\t\t\t[\n\t\t\t\t\t[u[i], u[a]],\n\t\t\t\t\t[u[i], v[i]],\n\t\t\t\t\t[v[i], v[b]]\n\t\t\t\t]\n\t\t\t};\n\t\t\tGraph(u ++ v, e.catenate)\n\t\t} {\n\t\t\t[n, k].error('petersenGraph: k > n/2')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "prismGraph",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _petersenGraph_2(_n, 1);
  }, ["n"]),
  "{ :n |\n\t\tpetersenGraph(n, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "rookGraph",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphProduct_2(_completeGraph_1(_m), _completeGraph_1(_n));
  }, ["m", "n"]),
  "{ :m :n |\n\t\tm.completeGraph\n\t\t.graphProduct(\n\t\t\tn.completeGraph\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "rookGraph",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _rookGraph_2(_m, _m);
  }, ["m"]),
  "{ :m |\n\t\trookGraph(m, m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "stackedBookGraph",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphProduct_2(_starGraph_1(_plusSign_2(_m, 1)), _pathGraph_1(_n));
  }, ["m", "n"]),
  "{ :m :n |\n\t\t(m + 1).starGraph\n\t\t.graphProduct(\n\t\t\tn.pathGraph\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "starGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _collect_2(
        _Span_3(2, _self, 1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return [1, _each];
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t2:self.collect { :each |\n\t\t\t[1, each]\n\t\t}.asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Graph",
  "wheelGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Integer>>wheelGraph: n < 4");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _cycle = _collect_2(
          _to_2(2, _self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return [
              _each,
              _if_3(
                _equalsSign_2(_each, _self),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 2;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(_each, 1);
                }, []),
              ),
            ];
          }, ["each"]),
        );
        let _star = _collect_2(
          _to_2(2, _self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return [1, _each];
          }, ["each"]),
        );
        /* Statements */
        return _asGraph_1(_plusSignPlusSign_2(_cycle, _star));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 4).if {\n\t\t\tself.error('Integer>>wheelGraph: n < 4')\n\t\t} {\n\t\t\tlet cycle = 2.to(self).collect { :each |\n\t\t\t\t[each, (each = self).if { 2 } { each + 1 }]\n\t\t\t};\n\t\t\tlet star = 2.to(self).collect { :each |\n\t\t\t\t[1, each]\n\t\t\t};\n\t\t\t(cycle ++ star).asGraph\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "asEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asEdge_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(asEdge:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "canonicalEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexList = _sort_1(_nub_1(_collectCatenate_2(_self, _vertexList_1)));
    let _renameTable = _asMap_1(
      _collect_2(
        _vertexList,
        sl.annotateFunction(function (_vertex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _vertex";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2(
            _vertex,
            _indexOf_2(_vertexList, _vertex),
          );
        }, ["vertex"]),
      ),
    );
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _rename_2(_each, _renameTable);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet vertexList = self.collectCatenate(vertexList:/1).nub.sort;\n\t\tlet renameTable = vertexList.collect { :vertex |\n\t\t\tvertex -> vertexList.indexOf(vertex)\n\t\t}.asMap;\n\t\tself.collect { :each |\n\t\t\teach.rename(renameTable)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "gridGraph",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _product_1(_shape);
    let _v = _iota_1(_k);
    let _c = _collect_2(
      _Span_3(1, _k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _cartesianIndex_2(_shape, _i);
      }, ["i"]),
    );
    let _e = [];
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
        return _toDo_3(
          _plusSign_2(_i, 1),
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(
                _sum_1(_abs_1(_hyphenMinus_2(_at_2(_c, _j), _at_2(_c, _i)))),
                1,
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_e, [_i, _j]);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_v, _e);
  }, ["shape"]),
  "{ :shape |\n\t\tlet k = shape.product;\n\t\tlet v = k.iota;\n\t\tlet c = 1:k.collect { :i |\n\t\t\tshape.cartesianIndex(i)\n\t\t};\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t((c[j] - c[i]).abs.sum = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(v, e)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "torusGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_collect_2(_self, _cycleGraph_1), _graphProduct_2);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(cycleGraph:/1).reduce(graphProduct:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Graph",
  "edgeCountGraph",
  ["self:/2", "isDirected", "vertexList"],
  sl.annotateFunction(function (_self_2, _isDirected, _vertexList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _isDirected, _vertexList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = sl.annotateFunction(function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isDirected,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _edgeList,
            _hyphenMinusHyphenMinusGreaterThanSign_2(
              _at_2(_v, _i),
              _at_2(_v, _j),
            ),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _lessThanSignEqualsSign_2(_i, _j),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
            }, []),
          );
        }, []),
      );
    }, ["i", "j"]);
    /* Statements */
    _do_2(
      _Span_3(1, _k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _Span_3(1, _k, 1),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _self_2(_at_2(_v, _i), _at_2(_v, _j));
            /* Statements */
            return _timesRepeat_2(
              _n,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addEdge_2(_i, _j);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_vertexList, _edgeList);
  }, ["self:/2", "isDirected", "vertexList"]),
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] --> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tlet n = self(v[i], v[j]);\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Graph",
  "relationGraph",
  ["self:/2", "isDirected", "vertexList"],
  sl.annotateFunction(function (_self_2, _isDirected, _vertexList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _isDirected, _vertexList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = sl.annotateFunction(function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isDirected,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _edgeList,
            _hyphenMinusHyphenMinusGreaterThanSign_2(
              _at_2(_v, _i),
              _at_2(_v, _j),
            ),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _lessThanSignEqualsSign_2(_i, _j),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
            }, []),
          );
        }, []),
      );
    }, ["i", "j"]);
    /* Statements */
    _do_2(
      _Span_3(1, _k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _Span_3(1, _k, 1),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _self_2(_at_2(_v, _i), _at_2(_v, _j)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addEdge_2(_i, _j);
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_vertexList, _edgeList);
  }, ["self:/2", "isDirected", "vertexList"]),
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] --> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tself(v[i], v[j]).ifTrue {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "adjacencyGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _isDirected = _not_1(_isSymmetricMatrix_1(_self));
        /* Statements */
        return _edgeCountGraph_3(
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_3(_self, _i, _j);
          }, ["i", "j"]),
          _isDirected,
          _iota_1(_size_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>adjacencyGraph: not a square matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet isDirected = self.isSymmetricMatrix.not;\n\t\t\t{ :i :j |\n\t\t\t\tself[i, j]\n\t\t\t}.edgeCountGraph(isDirected, self.size.iota)\n\t\t} {\n\t\t\tself.error('List>>adjacencyGraph: not a square matrix')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "asGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _edgeList = _asList_1(_collect_2(_self, _asEdge_1));
    let _vertexList = [];
    /* Statements */
    _do_2(
      _edgeList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_vertexList, _at_2(_each, 1));
        return _add_2(_vertexList, _at_2(_each, 2));
      }, ["each"]),
    );
    return _Graph_2(_sort_1(_nub_1(_vertexList)), _edgeList);
  }, ["self"]),
  "{ :self |\n\t\tlet edgeList = self.collect(asEdge:/1).asList;\n\t\tlet vertexList = [];\n\t\tedgeList.do { :each |\n\t\t\tvertexList.add(each[1]);\n\t\t\tvertexList.add(each[2])\n\t\t};\n\t\tGraph(vertexList.nub.sort, edgeList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "incidenceGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asGraph_1(
      _collect_2(
        _transpose_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _detectIndices_2(_each, _isNonZero_1);
          /* Statements */
          return _caseOf_2(_atAll_2(_each, _i), [
            _hyphenMinusGreaterThanSign_2(
              [2],
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinusHyphenMinusHyphenMinus_2(
                  _at_2(_i, 1),
                  _at_2(_i, 1),
                );
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              [-2],
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinusHyphenMinusGreaterThanSign_2(
                  _at_2(_i, 1),
                  _at_2(_i, 1),
                );
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              [1, 1],
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinusHyphenMinusHyphenMinus_2(
                  _at_2(_i, 1),
                  _at_2(_i, 2),
                );
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              [-1, 1],
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinusHyphenMinusGreaterThanSign_2(
                  _at_2(_i, 1),
                  _at_2(_i, 2),
                );
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              [1, -1],
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinusHyphenMinusGreaterThanSign_2(
                  _at_2(_i, 2),
                  _at_2(_i, 1),
                );
              }, []),
            ),
          ]);
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.transpose.collect { :each |\n\t\t\tlet i = each.detectIndices(isNonZero:/1);\n\t\t\teach.atAll(i).caseOf(\n\t\t\t\t[\n\t\t\t\t\t[2] -> { i[1] --- i[1] },\n\t\t\t\t\t[-2] -> { i[1] --> i[1] },\n\t\t\t\t\t[1, 1] -> { i[1] --- i[2] },\n\t\t\t\t\t[-1, 1] -> { i[1] --> i[2] },\n\t\t\t\t\t[1, -1] -> { i[2] --> i[1] }\n\t\t\t\t]\n\t\t\t)\n\t\t}.asGraph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "Graph",
  ["vertexList", "edgeList"],
  sl.annotateFunction(function (_vertexList, _edgeList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _vertexList, _edgeList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newGraph_0(),
      _vertexList,
      _collect_2(_edgeList, _asEdge_1),
      _Record_0(),
    );
  }, ["vertexList", "edgeList"]),
  "{ :vertexList :edgeList |\n\t\tnewGraph().initializeSlots(\n\t\t\tvertexList,\n\t\t\tedgeList.collect(asEdge:/1),\n\t\t\t(:)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "kirchhoffGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _isDirected = _not_1(_isSymmetricMatrix_1(_self));
        /* Statements */
        return _edgeCountGraph_3(
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _boole_1(_equalsSign_2(_at_3(_self, _i, _j), -1));
          }, ["i", "j"]),
          _isDirected,
          _iota_1(_size_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>kirchhoffGraph: not a square matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet isDirected = self.isSymmetricMatrix.not;\n\t\t\t{ :i :j |\n\t\t\t\t(self[i, j] = -1).boole\n\t\t\t}.edgeCountGraph(isDirected, self.size.iota)\n\t\t} {\n\t\t\tself.error('List>>kirchhoffGraph: not a square matrix')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Graph",
  "weightedAdjacencyGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _deepCollect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, Infinity),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, ["each"]),
    );
    let _g = _adjacencyGraph_1(_m);
    let _w = _collect_2(
      _edgeList_1(_g),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar9 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SplVar9, 1);
        let _j = _at_2(__SplVar9, 2);
        /* Statements */
        return _at_3(_self, _i, _j);
      }, ["each"]),
    );
    /* Statements */
    _edgeWeights_2(_g, _w);
    return _g;
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.deepCollect { :each |\n\t\t\t(each = Infinity).if { 0 } { 1 }\n\t\t};\n\t\tlet g = m.adjacencyGraph;\n\t\tlet w = g.edgeList.collect { :each |\n\t\t\tlet [i, j] = each;\n\t\t\tself[i, j]\n\t\t};\n\t\tg.edgeWeights := w;\n\t\tg\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Graph",
  "dotLayout",
  ["dotSource", "outputFormat", "layoutEngine"],
  sl.annotateFunction(function (_dotSource, _outputFormat, _layoutEngine) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _dotSource, _outputFormat, _layoutEngine";
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
  }, ["dotSource", "outputFormat", "layoutEngine"]),
  "{ :dotSource :outputFormat :layoutEngine |\n\t\t<primitive:\n\t\treturn import(\n\t\t\t'../lib/scsynth-wasm-builds/lib/ext/graphviz.js'\n\t\t).then(\n\t\t\tfunction ({ Graphviz }) {\n\t\t\t\treturn Graphviz.load().then(\n\t\t\t\t\tfunction (graphviz) {\n\t\t\t\t\t\treturn graphviz.layout(\n\t\t\t\t\t\t\t_dotSource,\n\t\t\t\t\t\t\t_outputFormat,\n\t\t\t\t\t\t\t_layoutEngine,\n\t\t\t\t\t\t\t{}\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Graph",
  "namedGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _namedGraphTable_1(_system),
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedGraph: unknown graph");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.namedGraphTable.atIfAbsent(self) {\n\t\t\tself.error('namedGraph: unknown graph')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Graph",
  "namedGraphTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "NamedGraphTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([
          [
            "CoxeterGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 84)), [
              [1, 2],
              [1, 3],
              [1, 4],
              [2, 3],
              [2, 40],
              [3, 70],
              [4, 5],
              [4, 6],
              [5, 6],
              [5, 7],
              [6, 22],
              [7, 8],
              [7, 9],
              [8, 9],
              [8, 10],
              [9, 82],
              [10, 11],
              [10, 12],
              [11, 12],
              [11, 13],
              [12, 79],
              [13, 14],
              [13, 15],
              [14, 15],
              [14, 16],
              [15, 76],
              [16, 17],
              [16, 18],
              [17, 18],
              [17, 19],
              [18, 49],
              [19, 20],
              [19, 21],
              [20, 21],
              [20, 23],
              [21, 73],
              [22, 23],
              [22, 24],
              [23, 24],
              [24, 25],
              [25, 26],
              [25, 27],
              [26, 27],
              [26, 28],
              [27, 64],
              [28, 29],
              [28, 30],
              [29, 30],
              [29, 31],
              [30, 46],
              [31, 32],
              [31, 33],
              [32, 33],
              [32, 34],
              [33, 83],
              [34, 35],
              [34, 36],
              [35, 36],
              [35, 37],
              [36, 77],
              [37, 38],
              [37, 39],
              [38, 39],
              [38, 41],
              [39, 74],
              [40, 41],
              [40, 42],
              [41, 42],
              [42, 43],
              [43, 44],
              [43, 45],
              [44, 45],
              [44, 47],
              [45, 80],
              [46, 47],
              [46, 48],
              [47, 48],
              [48, 50],
              [49, 50],
              [49, 51],
              [50, 51],
              [51, 52],
              [52, 53],
              [52, 54],
              [53, 54],
              [53, 55],
              [54, 71],
              [55, 56],
              [55, 57],
              [56, 57],
              [56, 58],
              [57, 84],
              [58, 59],
              [58, 60],
              [59, 60],
              [59, 61],
              [60, 75],
              [61, 62],
              [61, 63],
              [62, 63],
              [62, 65],
              [63, 81],
              [64, 65],
              [64, 66],
              [65, 66],
              [66, 67],
              [67, 68],
              [67, 69],
              [68, 69],
              [68, 72],
              [69, 78],
              [70, 71],
              [70, 72],
              [71, 72],
              [73, 74],
              [73, 75],
              [74, 75],
              [76, 77],
              [76, 78],
              [77, 78],
              [79, 80],
              [79, 81],
              [80, 81],
              [82, 83],
              [82, 84],
              [83, 84],
            ]),
          ],
          [
            "GoldnerHararyGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 11)), [
              [1, 2],
              [1, 3],
              [1, 4],
              [1, 5],
              [1, 7],
              [1, 8],
              [1, 10],
              [1, 11],
              [2, 3],
              [2, 4],
              [2, 6],
              [2, 7],
              [2, 9],
              [2, 10],
              [2, 11],
              [3, 4],
              [4, 5],
              [4, 6],
              [4, 7],
              [5, 7],
              [6, 7],
              [7, 8],
              [7, 9],
              [7, 10],
              [8, 10],
              [9, 10],
              [10, 11],
            ]),
          ],
          ["DesarguesGraph", _petersenGraph_2(10, 3)],
          ["DurerGraph", _petersenGraph_2(6, 2)],
          [
            "HeawoodGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 14)), [
              [1, 2],
              [1, 6],
              [1, 14],
              [2, 3],
              [2, 11],
              [3, 4],
              [3, 8],
              [4, 5],
              [4, 13],
              [5, 6],
              [5, 10],
              [6, 7],
              [7, 8],
              [7, 12],
              [8, 9],
              [9, 10],
              [9, 14],
              [10, 11],
              [11, 12],
              [12, 13],
              [13, 14],
            ]),
          ],
          [
            "HerschelGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 11)), [
              [1, 3],
              [1, 4],
              [1, 5],
              [1, 6],
              [2, 3],
              [2, 4],
              [2, 7],
              [2, 8],
              [3, 11],
              [4, 10],
              [5, 9],
              [5, 10],
              [6, 9],
              [6, 11],
              [7, 9],
              [7, 10],
              [8, 9],
              [8, 11],
            ]),
          ],
          [
            "OwensGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 76)), [
              [1, 13],
              [1, 16],
              [1, 37],
              [1, 40],
              [1, 52],
              [2, 11],
              [2, 23],
              [2, 47],
              [2, 71],
              [2, 76],
              [3, 16],
              [3, 25],
              [3, 35],
              [3, 61],
              [3, 64],
              [4, 40],
              [4, 49],
              [4, 52],
              [4, 64],
              [4, 76],
              [5, 6],
              [5, 7],
              [5, 8],
              [5, 9],
              [5, 10],
              [6, 7],
              [6, 8],
              [6, 14],
              [6, 15],
              [7, 9],
              [7, 12],
              [7, 14],
              [8, 10],
              [8, 13],
              [8, 15],
              [9, 10],
              [9, 11],
              [9, 12],
              [10, 11],
              [10, 13],
              [11, 12],
              [11, 13],
              [12, 14],
              [12, 16],
              [13, 15],
              [14, 15],
              [14, 16],
              [15, 16],
              [17, 18],
              [17, 19],
              [17, 20],
              [17, 21],
              [17, 22],
              [18, 19],
              [18, 20],
              [18, 26],
              [18, 27],
              [19, 21],
              [19, 24],
              [19, 26],
              [20, 22],
              [20, 25],
              [20, 27],
              [21, 22],
              [21, 23],
              [21, 24],
              [22, 23],
              [22, 25],
              [23, 24],
              [23, 25],
              [24, 26],
              [24, 28],
              [25, 27],
              [26, 27],
              [26, 28],
              [27, 28],
              [28, 59],
              [28, 73],
              [29, 30],
              [29, 31],
              [29, 32],
              [29, 33],
              [29, 34],
              [30, 31],
              [30, 32],
              [30, 38],
              [30, 39],
              [31, 33],
              [31, 36],
              [31, 38],
              [32, 34],
              [32, 37],
              [32, 39],
              [33, 34],
              [33, 35],
              [33, 36],
              [34, 35],
              [34, 37],
              [35, 36],
              [35, 37],
              [36, 38],
              [36, 40],
              [37, 39],
              [38, 39],
              [38, 40],
              [39, 40],
              [41, 42],
              [41, 43],
              [41, 44],
              [41, 45],
              [41, 46],
              [42, 43],
              [42, 44],
              [42, 50],
              [42, 51],
              [43, 45],
              [43, 48],
              [43, 50],
              [44, 46],
              [44, 49],
              [44, 51],
              [45, 46],
              [45, 47],
              [45, 48],
              [46, 47],
              [46, 49],
              [47, 48],
              [47, 49],
              [48, 50],
              [48, 52],
              [49, 51],
              [50, 51],
              [50, 52],
              [51, 52],
              [53, 54],
              [53, 55],
              [53, 56],
              [53, 57],
              [53, 58],
              [54, 55],
              [54, 56],
              [54, 62],
              [54, 63],
              [55, 57],
              [55, 60],
              [55, 62],
              [56, 58],
              [56, 61],
              [56, 63],
              [57, 58],
              [57, 59],
              [57, 60],
              [58, 59],
              [58, 61],
              [59, 60],
              [59, 61],
              [60, 62],
              [60, 64],
              [61, 63],
              [62, 63],
              [62, 64],
              [63, 64],
              [65, 66],
              [65, 67],
              [65, 68],
              [65, 69],
              [65, 70],
              [66, 67],
              [66, 68],
              [66, 74],
              [66, 75],
              [67, 69],
              [67, 72],
              [67, 74],
              [68, 70],
              [68, 73],
              [68, 75],
              [69, 70],
              [69, 71],
              [69, 72],
              [70, 71],
              [70, 73],
              [71, 72],
              [71, 73],
              [72, 74],
              [72, 76],
              [73, 75],
              [74, 75],
              [74, 76],
              [75, 76],
            ]),
          ],
          ["PetersenGraph", _petersenGraph_2(5, 2)],
          [
            "ShrikhandeGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 16)), [
              [1, 2],
              [1, 3],
              [1, 4],
              [1, 5],
              [1, 6],
              [1, 7],
              [2, 3],
              [2, 7],
              [2, 8],
              [2, 9],
              [2, 10],
              [3, 4],
              [3, 8],
              [3, 11],
              [3, 12],
              [4, 6],
              [4, 11],
              [4, 13],
              [4, 14],
              [5, 6],
              [5, 7],
              [5, 12],
              [5, 15],
              [5, 16],
              [6, 9],
              [6, 13],
              [6, 15],
              [7, 10],
              [7, 14],
              [7, 16],
              [8, 9],
              [8, 12],
              [8, 13],
              [8, 16],
              [9, 10],
              [9, 13],
              [9, 15],
              [10, 11],
              [10, 14],
              [10, 15],
              [11, 12],
              [11, 14],
              [11, 15],
              [12, 15],
              [12, 16],
              [13, 14],
              [13, 16],
              [14, 16],
            ]),
          ],
          [
            "TietzeGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 12)), [
              [1, 2],
              [1, 9],
              [1, 10],
              [2, 3],
              [2, 6],
              [3, 4],
              [3, 8],
              [4, 5],
              [4, 11],
              [5, 6],
              [5, 9],
              [6, 7],
              [7, 8],
              [7, 12],
              [8, 9],
              [10, 11],
              [10, 12],
              [11, 12],
            ]),
          ],
          [
            "TutteGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 46)), [
              [1, 11],
              [1, 12],
              [1, 13],
              [2, 3],
              [2, 8],
              [2, 20],
              [3, 4],
              [3, 42],
              [4, 5],
              [4, 28],
              [5, 6],
              [5, 34],
              [6, 7],
              [6, 46],
              [7, 10],
              [7, 30],
              [8, 9],
              [8, 22],
              [9, 10],
              [9, 23],
              [10, 25],
              [11, 14],
              [11, 15],
              [12, 27],
              [12, 29],
              [13, 31],
              [13, 32],
              [14, 16],
              [14, 22],
              [15, 16],
              [15, 19],
              [16, 17],
              [17, 18],
              [17, 21],
              [18, 19],
              [18, 24],
              [19, 25],
              [20, 26],
              [20, 41],
              [21, 22],
              [21, 23],
              [23, 24],
              [24, 25],
              [26, 27],
              [26, 39],
              [27, 35],
              [28, 29],
              [28, 40],
              [29, 35],
              [30, 31],
              [30, 45],
              [31, 36],
              [32, 33],
              [32, 36],
              [33, 34],
              [33, 43],
              [34, 44],
              [35, 37],
              [36, 38],
              [37, 39],
              [37, 40],
              [38, 43],
              [38, 45],
              [39, 41],
              [40, 42],
              [41, 42],
              [43, 44],
              [44, 46],
              [45, 46],
            ]),
          ],
          [
            "TutteThreeEightCageGraph",
            _Graph_2(_asList_1(_upOrDownTo_2(1, 30)), [
              [1, 2],
              [1, 14],
              [1, 30],
              [2, 3],
              [2, 19],
              [3, 4],
              [3, 24],
              [4, 5],
              [4, 11],
              [5, 6],
              [5, 28],
              [6, 7],
              [6, 15],
              [7, 8],
              [7, 20],
              [8, 9],
              [8, 25],
              [9, 10],
              [9, 30],
              [10, 11],
              [10, 17],
              [11, 12],
              [12, 13],
              [12, 21],
              [13, 14],
              [13, 26],
              [14, 15],
              [15, 16],
              [16, 17],
              [16, 23],
              [17, 18],
              [18, 19],
              [18, 27],
              [19, 20],
              [20, 21],
              [21, 22],
              [22, 23],
              [22, 29],
              [23, 24],
              [24, 25],
              [25, 26],
              [26, 27],
              [27, 28],
              [28, 29],
              [29, 30],
            ]),
          ],
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('NamedGraphTable') {\n\t\t\t(\n\t\t\t\t'CoxeterGraph': Graph(\n\t\t\t\t\t[1 .. 84],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 3; 1 4;\n\t\t\t\t\t\t2 3; 2 40;\n\t\t\t\t\t\t3 70;\n\t\t\t\t\t\t4 5; 4 6;\n\t\t\t\t\t\t5 6; 5 7;\n\t\t\t\t\t\t6 22;\n\t\t\t\t\t\t7 8; 7 9;\n\t\t\t\t\t\t8 9; 8 10;\n\t\t\t\t\t\t9 82;\n\t\t\t\t\t\t10 11; 10 12;\n\t\t\t\t\t\t11 12; 11 13;\n\t\t\t\t\t\t12 79;\n\t\t\t\t\t\t13 14; 13 15;\n\t\t\t\t\t\t14 15; 14 16;\n\t\t\t\t\t\t15 76;\n\t\t\t\t\t\t16 17; 16 18;\n\t\t\t\t\t\t17 18; 17 19;\n\t\t\t\t\t\t18 49;\n\t\t\t\t\t\t19 20; 19 21;\n\t\t\t\t\t\t20 21; 20 23;\n\t\t\t\t\t\t21 73;\n\t\t\t\t\t\t22 23; 22 24;\n\t\t\t\t\t\t23 24;\n\t\t\t\t\t\t24 25;\n\t\t\t\t\t\t25 26; 25 27;\n\t\t\t\t\t\t26 27; 26 28;\n\t\t\t\t\t\t27 64;\n\t\t\t\t\t\t28 29; 28 30;\n\t\t\t\t\t\t29 30; 29 31;\n\t\t\t\t\t\t30 46;\n\t\t\t\t\t\t31 32; 31 33;\n\t\t\t\t\t\t32 33; 32 34;\n\t\t\t\t\t\t33 83;\n\t\t\t\t\t\t34 35; 34 36;\n\t\t\t\t\t\t35 36; 35 37;\n\t\t\t\t\t\t36 77;\n\t\t\t\t\t\t37 38; 37 39;\n\t\t\t\t\t\t38 39; 38 41;\n\t\t\t\t\t\t39 74;\n\t\t\t\t\t\t40 41; 40 42;\n\t\t\t\t\t\t41 42;\n\t\t\t\t\t\t42 43;\n\t\t\t\t\t\t43 44; 43 45;\n\t\t\t\t\t\t44 45; 44 47;\n\t\t\t\t\t\t45 80;\n\t\t\t\t\t\t46 47; 46 48;\n\t\t\t\t\t\t47 48; 48 50;\n\t\t\t\t\t\t49 50; 49 51;\n\t\t\t\t\t\t50 51;\n\t\t\t\t\t\t51 52;\n\t\t\t\t\t\t52 53; 52 54;\n\t\t\t\t\t\t53 54; 53 55;\n\t\t\t\t\t\t54 71;\n\t\t\t\t\t\t55 56; 55 57;\n\t\t\t\t\t\t56 57; 56 58;\n\t\t\t\t\t\t57 84;\n\t\t\t\t\t\t58 59; 58 60;\n\t\t\t\t\t\t59 60; 59 61;\n\t\t\t\t\t\t60 75;\n\t\t\t\t\t\t61 62; 61 63;\n\t\t\t\t\t\t62 63; 62 65;\n\t\t\t\t\t\t63 81;\n\t\t\t\t\t\t64 65; 64 66;\n\t\t\t\t\t\t65 66;\n\t\t\t\t\t\t66 67;\n\t\t\t\t\t\t67 68; 67 69;\n\t\t\t\t\t\t68 69; 68 72;\n\t\t\t\t\t\t69 78;\n\t\t\t\t\t\t70 71; 70 72;\n\t\t\t\t\t\t71 72;\n\t\t\t\t\t\t73 74; 73 75;\n\t\t\t\t\t\t74 75;\n\t\t\t\t\t\t76 77; 76 78;\n\t\t\t\t\t\t77 78;\n\t\t\t\t\t\t79 80; 79 81;\n\t\t\t\t\t\t80 81;\n\t\t\t\t\t\t82 83; 82 84;\n\t\t\t\t\t\t83 84\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'GoldnerHararyGraph': Graph(\n\t\t\t\t\t[1 .. 11],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 3; 1 4; 1 5; 1 7; 1 8; 1 10; 1 11;\n\t\t\t\t\t\t2 3; 2 4; 2 6; 2 7; 2 9; 2 10; 2 11; 3 4; 4 5; 4 6; 4 7;\n\t\t\t\t\t\t5 7; 6 7; 7 8; 7 9; 7 10; 8 10; 9 10; 10 11\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'DesarguesGraph': 10.petersenGraph(3),\n\t\t\t\t'DurerGraph': 6.petersenGraph(2),\n\t\t\t\t'HeawoodGraph': Graph(\n\t\t\t\t\t[1 .. 14],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 6; 1 14;\n\t\t\t\t\t\t2 3; 2 11;\n\t\t\t\t\t\t3 4; 3 8;\n\t\t\t\t\t\t4 5; 4 13;\n\t\t\t\t\t\t5 6; 5 10;\n\t\t\t\t\t\t6 7; 7 8; 7 12;\n\t\t\t\t\t\t8 9; 9 10; 9 14;\n\t\t\t\t\t\t10 11;\n\t\t\t\t\t\t11 12;\n\t\t\t\t\t\t12 13;\n\t\t\t\t\t\t13 14\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'HerschelGraph': Graph(\n\t\t\t\t\t[1 .. 11],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 3; 1 4; 1 5; 1 6; 2 3; 2 4; 2 7; 2 8; 3 11; 4 10;\n\t\t\t\t\t\t5 9; 5 10; 6 9; 6 11; 7 9; 7 10; 8 9; 8 11\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'OwensGraph': Graph(\n\t\t\t\t\t[1 .. 76],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 13; 1 16; 1 37; 1 40; 1 52; 2 11; 2 23; 2 47; 2 71; 2 76;\n\t\t\t\t\t\t3 16; 3 25; 3 35; 3 61; 3 64; 4 40; 4 49; 4 52; 4 64; 4 76;\n\t\t\t\t\t\t5 6; 5 7; 5 8; 5 9; 5 10; 6 7; 6 8; 6 14; 6 15;\n\t\t\t\t\t\t7 9; 7 12; 7 14; 8 10; 8 13; 8 15;\n\t\t\t\t\t\t9 10; 9 11; 9 12; 10 11; 10 13;\n\t\t\t\t\t\t11 12; 11 13; 12 14; 12 16;\n\t\t\t\t\t\t13 15; 14 15; 14 16;\n\t\t\t\t\t\t15 16;\n\t\t\t\t\t\t17 18; 17 19; 17 20; 17 21; 17 22; 18 19; 18 20; 18 26; 18 27;\n\t\t\t\t\t\t19 21; 19 24; 19 26; 20 22; 20 25; 20 27;\n\t\t\t\t\t\t21 22; 21 23; 21 24; 22 23; 22 25;\n\t\t\t\t\t\t23 24; 23 25; 24 26; 24 28; 25 27; 26 27; 26 28;\n\t\t\t\t\t\t27 28; 28 59; 28 73;\n\t\t\t\t\t\t29 30; 29 31; 29 32; 29 33; 29 34; 30 31; 30 32; 30 38; 30 39;\n\t\t\t\t\t\t31 33; 31 36; 31 38; 32 34; 32 37; 32 39;\n\t\t\t\t\t\t33 34; 33 35; 33 36; 34 35; 34 37;\n\t\t\t\t\t\t35 36; 35 37; 36 38; 36 40;\n\t\t\t\t\t\t37 39; 38 39; 38 40;\n\t\t\t\t\t\t39 40; 41 42; 41 43; 41 44; 41 45; 41 46; 42 43; 42 44; 42 50; 42 51;\n\t\t\t\t\t\t43 45; 43 48; 43 50; 44 46; 44 49; 44 51;\n\t\t\t\t\t\t45 46; 45 47; 45 48; 46 47; 46 49;\n\t\t\t\t\t\t47 48; 47 49; 48 50; 48 52; 49 51; 50 51; 50 52;\n\t\t\t\t\t\t51 52; 53 54; 53 55; 53 56; 53 57; 53 58; 54 55; 54 56; 54 62; 54 63;\n\t\t\t\t\t\t55 57; 55 60; 55 62; 56 58; 56 61; 56 63;\n\t\t\t\t\t\t57 58; 57 59; 57 60; 58 59; 58 61; 59 60; 59 61; 60 62; 60 64;\n\t\t\t\t\t\t61 63; 62 63; 62 64; 63 64;\n\t\t\t\t\t\t65 66; 65 67; 65 68; 65 69; 65 70; 66 67; 66 68; 66 74; 66 75;\n\t\t\t\t\t\t67 69; 67 72; 67 74; 68 70; 68 73; 68 75;\n\t\t\t\t\t\t69 70; 69 71; 69 72; 70 71; 70 73; 71 72; 71 73; 72 74; 72 76;\n\t\t\t\t\t\t73 75; 74 75; 74 76; 75 76\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'PetersenGraph': petersenGraph(5, 2),\n\t\t\t\t'ShrikhandeGraph': Graph(\n\t\t\t\t\t[1 .. 16],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 3; 1 4; 1 5; 1 6; 1 7;\n\t\t\t\t\t\t2 3; 2 7; 2 8; 2 9; 2 10;\n\t\t\t\t\t\t3 4; 3 8; 3 11; 3 12;\n\t\t\t\t\t\t4 6; 4 11; 4 13; 4 14;\n\t\t\t\t\t\t5 6; 5 7; 5 12; 5 15; 5 16;\n\t\t\t\t\t\t6 9; 6 13; 6 15;\n\t\t\t\t\t\t7 10; 7 14; 7 16;\n\t\t\t\t\t\t8 9; 8 12; 8 13; 8 16;\n\t\t\t\t\t\t9 10; 9 13; 9 15;\n\t\t\t\t\t\t10 11; 10 14; 10 15;\n\t\t\t\t\t\t11 12; 11 14; 11 15;\n\t\t\t\t\t\t12 15; 12 16;\n\t\t\t\t\t\t13 14; 13 16;\n\t\t\t\t\t\t14 16\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'TietzeGraph': Graph(\n\t\t\t\t\t[1 .. 12],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 9; 1 10; 2 3; 2 6; 3 4; 3 8; 4 5; 4 11; 5 6; 5 9;\n\t\t\t\t\t\t6 7; 7 8; 7 12; 8 9; 10 11; 10 12; 11 12\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'TutteGraph': Graph(\n\t\t\t\t\t[1 .. 46],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 11; 1 12; 1 13; 2 3; 2 8; 2 20; 3 4; 3 42; 4 5; 4 28;\n\t\t\t\t\t\t5 6; 5 34; 6 7; 6 46; 7 10; 7 30; 8 9; 8 22;\n\t\t\t\t\t\t9 10; 9 23; 10 25; 11 14; 11 15; 12 27; 12 29;\n\t\t\t\t\t\t13 31; 13 32; 14 16; 14 22; 15 16; 15 19; 16 17;\n\t\t\t\t\t\t17 18; 17 21; 18 19; 18 24; 19 25; 20 26; 20 41;\n\t\t\t\t\t\t21 22; 21 23; 23 24; 24 25;\n\t\t\t\t\t\t26 27; 26 39; 27 35; 28 29; 28 40;\n\t\t\t\t\t\t29 35; 30 31; 30 45; 31 36; 32 33; 32 36;\n\t\t\t\t\t\t33 34; 33 43; 34 44; 35 37; 36 38;\n\t\t\t\t\t\t37 39; 37 40; 38 43; 38 45; 39 41; 40 42;\n\t\t\t\t\t\t41 42; 43 44; 44 46;\n\t\t\t\t\t\t45 46\n\t\t\t\t\t]\n\t\t\t\t),\n\t\t\t\t'TutteThreeEightCageGraph': Graph(\n\t\t\t\t\t[1 .. 30],\n\t\t\t\t\t[\n\t\t\t\t\t\t1 2; 1 14; 1 30;\n\t\t\t\t\t\t2 3; 2 19;\n\t\t\t\t\t\t3 4; 3 24;\n\t\t\t\t\t\t4 5; 4 11;\n\t\t\t\t\t\t5 6; 5 28;\n\t\t\t\t\t\t6 7; 6 15;\n\t\t\t\t\t\t7 8; 7 20;\n\t\t\t\t\t\t8 9; 8 25;\n\t\t\t\t\t\t9 10; 9 30;\n\t\t\t\t\t\t10 11; 10 17;\n\t\t\t\t\t\t11 12;\n\t\t\t\t\t\t12 13; 12 21;\n\t\t\t\t\t\t13 14; 13 26;\n\t\t\t\t\t\t14 15;\n\t\t\t\t\t\t15 16;\n\t\t\t\t\t\t16 17; 16 23;\n\t\t\t\t\t\t17 18;\n\t\t\t\t\t\t18 19; 18 27;\n\t\t\t\t\t\t19 20;\n\t\t\t\t\t\t20 21;\n\t\t\t\t\t\t21 22;\n\t\t\t\t\t\t22 23; 22 29;\n\t\t\t\t\t\t23 24;\n\t\t\t\t\t\t24 25;\n\t\t\t\t\t\t25 26;\n\t\t\t\t\t\t26 27;\n\t\t\t\t\t\t27 28;\n\t\t\t\t\t\t28 29;\n\t\t\t\t\t\t29 30\n\t\t\t\t\t]\n\t\t\t\t)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Graph",
  "sageSmallGraphCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SageSmallGraphCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SageSmallGraphCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SageSmallGraphCatalogue"],
      ["category", "Math/Graph"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/graph/sage/small-graphs.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _Graph_2(
                _plusSign_2(_at_2(_each, "vertexList"), 1),
                _plusSign_2(_at_2(_each, "edgeList"), 1),
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
