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
  "{ :self :aGraph | &(=(sorted(vertexList(self)), sorted(vertexList(aGraph))), { =(sorted(edgeList(self)), sorted(edgeList(aGraph))) }) }",
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
    return _sumGraph_2(_self, _aGraph);
  }, ["self", "aGraph"]),
  "{ :self :aGraph | sumGraph(self,aGraph) }",
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
  "{ :self | collect(vertexList(self), { :each | adjacencyList(self,each) }) }",
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
  "{ :self :vertex | let answer = []; do(edgeList(self), { :each | ifTrue((=(at(each, 1), vertex)), { add(answer,at(each, 2)) }); ifTrue((=(at(each, 2), vertex)), { add(answer,at(each, 1)) }) }); answer }",
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
  "{ :self | let v = vertexList(self); table({ :i :j | count(edgeList(self), { :each | matchesEdge(each,-->(i, j)) }) },v, v) }",
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
  "{ :self :options | let isMixed = isMixed(self); let graphType = if(isUndirected(self), { 'graph' }, { 'digraph' }); let begin = format('% {\\ngraph [layout=\"%\"];',[graphType, at(options, 'method')]); let vertexLabels = if(hasVertexLabels(self), { vertexLabels(self) }, { nil }); let attributeText = unlines(['graph [size=\"1.214,0.75\",bgcolor=\"transparent\"];', format('node [shape=\"%\"];',[if(hasVertexLabels(self), { 'box' }, { 'point' })]), 'edge [penwidth=\"0.75\",arrowsize=\"0.5\"];']); let nodeText = if(hasVertexLabels(self), { unlines(collect(vertexList(self), { :each | let label = at(vertexLabels, each); ifNil(label, { format('% [shape=\"point\"];',[each]) }, { format('% [label=\"%\",shape=\"box\",width=\"0\",height=\"0\"];',[each, ifNil(label, { '' }, { label })]) }) })) }, { '/* implicit nodes */' }); let edgeText = unlines(collect(edgeList(self), { :each | forDot(each,isMixed) })); let end = '}'; unlines([begin, attributeText, nodeText, edgeText, end]) }",
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
  "{ :self | asDot(self, Record([['method', if(isUndirected(self), { 'neato' }, { 'dot' })]])) }",
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
        let __SPL16 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SPL16, 1);
        let _j = _at_2(__SPL16, 2);
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
  "{ :self | let vertexCoordinates = vertexCoordinates(self); let contents = [PointCloud(vertexCoordinates)]; do(edgeList(self), { :each | let __SPL16 = assertIsOfSize(each, 2); let i = at(__SPL16, 1); let j = at(__SPL16, 2); add(contents,LineSegment(at(vertexCoordinates, i), at(vertexCoordinates, j))) }); GeometryCollection(contents) }",
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
  "{ :self | asLineDrawing(asGeometryCollection(self)) }",
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
    return _asLineDrawing_1(
      _project_2(_asGeometryCollection_1(_self), _projection),
    );
  }, ["self", "projection"]),
  "{ :self :projection | asLineDrawing(project(asGeometryCollection(self),projection)) }",
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
    return _complementGraph_1(_self);
  }, ["self"]),
  "{ :self | complementGraph(self) }",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "complementGraph",
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
  "{ :self | let m = adjacencyMatrix(self); adjacencyGraph((-(-(1, identityMatrix(size(m))), m))) }",
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
  "{ :self | let v = vertexList(self); table({ :i :j | boole(includesEdge(self,-->(i, j))) },v, v) }",
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
  "{ :self | sortBy(vertexDegree(self),>) }",
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
  "{ :g :s :t | let k = vertexCount(g); let w = edgeWeights(g); let e = edgeList(g); let q = PriorityQueue(); let d = List(k, Infinity); let p = List(k); atPut(d, s, 0); atPut(p, s, nil); pushWithPriority(q,s, 0); whileFalse({ isEmpty(q) }, { let u = pop(q); if((=(u, t)), { removeAll(q) }, { do(vertexOutNeighbours(g,u), { :v | let uv = -->(u, v); let i = detectIndex(e, { :each | matchesEdge(each,uv) }); let a = +(at(d, u), at(w, i)); ifTrue((<(a, at(d, v))), { atPut(p, v, u); atPut(d, v, a); pushWithPriority(q,v, a) }) }) }) }); [d, p] }",
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
  "{ :g :s | dijkstrasAlgorithm(g,s, nil) }",
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
  "{ :self | drawing(asLineDrawing(self)) }",
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
  "{ :self | size(edgeList(self)) }",
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
  "{ :self :edge | detectIndex(edgeList(self), { :each | matchesEdge(each,edge) }) }",
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
    let __SPL17 = _assertIsOfSize_2(_dijkstrasAlgorithm_3(_g, _s, _t), 2);
    let _d = _at_2(__SPL17, 1);
    let _p = _at_2(__SPL17, 2);
    let _u = _t;
    /* Statements */
    _ifTrue_2(
      _verticalLine_2(
        _tildeEqualsSign_2(_at_2(_p, _u), null),
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
            return _tildeEqualsSign_2(_u, null);
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
  "{ :g :s :t | let answer = []; let __SPL17 = assertIsOfSize(dijkstrasAlgorithm(g,s, t), 2); let d = at(__SPL17, 1); let p = at(__SPL17, 2); let u = t; ifTrue((|(~=(at(p, u), nil), { =(u, s) })), { whileTrue({ ~=(u, nil) }, { addFirst(answer,u); u := at(p, u) }) }); answer }",
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
    let __SPL18 = _assertIsOfSize_2(_dijkstrasAlgorithm_3(_g, _s, _t), 2);
    let _d = _at_2(__SPL18, 1);
    let _p = _at_2(__SPL18, 2);
    /* Statements */
    return _at_2(_d, _t);
  }, ["g", "s", "t"]),
  "{ :g :s :t | let __SPL18 = assertIsOfSize(dijkstrasAlgorithm(g,s, t), 2); let d = at(__SPL18, 1); let p = at(__SPL18, 2); at(d, t) }",
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
        let __SPL19 = _assertIsOfSize_2(_dijkstrasAlgorithm_2(_g, _i), 2);
        let _d = _at_2(__SPL19, 1);
        let _p = _at_2(__SPL19, 2);
        /* Statements */
        return _add_2(_m, _d);
      }, ["i"]),
    );
    return _m;
  }, ["g"]),
  "{ :g | let n = vertexCount(g); let m = []; toDo(1, n, { :i | let __SPL19 = assertIsOfSize(dijkstrasAlgorithm(g,i), 2); let d = at(__SPL19, 1); let p = at(__SPL19, 2); add(m,d) }); m }",
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
  "{ :self | Plot([self],'graph', Record([['method', 'neato']])) }",
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
  "{ :self | let v = vertexList(self); allSatisfy(edgeList(self), { :edge | &(includes(v,at(edge, 1)), { includes(v,at(edge, 2)) }) }) }",
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
  "{ :self :vertex | asGraph(incidenceList(self,vertex)) }",
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
  "{ :self :vertex | select(edgeList(self), { :each | |(=(at(each, 1), vertex), { =(at(each, 2), vertex) }) }) }",
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
  "{ :self | collect(vertexList(self), { :v | collect(edgeList(self), { :e | if(isUndirectedEdge(e), { if((=(at(e, 1), v)), { if((=(at(e, 2), v)), { 2 }, { 1 }) }, { if((=(at(e, 2), v)), { 1 }, { 0 }) }) }, { if(isDirectedEdge(e), { if((=(at(e, 1), v)), { if((=(at(e, 2), v)), { -2 }, { -1 }) }, { if((=(at(e, 2), v)), { 1 }, { 0 }) }) }, { error(self,'@Graph>>incidenceMatrix: invalid edge') }) }) }) }) }",
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
  "{ :self :edge | anySatisfy(edgeList(self), { :each | matchesEdge(each,edge) }) }",
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
  "{ :self :vertex | includes(vertexList(self),vertex) }",
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
  "{ :self :vertex | select(edgeList(self), { :edge | |((=(at(edge, 2), vertex)), { &(isUndirected(edge), { =(at(edge, 1), vertex) }) }) }) }",
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
  "{ :self | allSatisfy(edgeList(self),isDirectedEdge:/1) }",
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
  "{ :self | =(edgeCount(self), 0) }",
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
        return _tildeEqualsSign_2(_at_2(_each, 1), _at_2(_each, 2));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | allSatisfy(edgeList(self), { :each | ~=(at(each, 1), at(each, 2)) }) }",
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
  "{ :self | &(anySatisfy(edgeList(self),isDirectedEdge:/1), { anySatisfy(edgeList(self),isUndirectedEdge:/1) }) }",
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
  "{ :self | =(size(nub(vertexDegree(self))), 1) }",
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
  "{ :self | &(isEmpty(self), { =(vertexCount(self), 1) }) }",
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
  "{ :self | allSatisfy(edgeList(self),isUndirectedEdge:/1) }",
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
  "{ :self | hasValidEdgeList(self) }",
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
  "{ :self | let v = vertexList(self); table({ :i :j | if((=(i, j)), { vertexDegree(self,i) }, { if(includesEdge(self,-->(i, j)), { -1 }, { 0 }) }) },v, v) }",
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
  "{ :self | collect(vertexList(self), { :each | ->(each, vertexLabel(self,each)) }) }",
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
                    _tildeEqualsSign_2(_i, _j),
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
  "{ :self | let k = edgeCount(self); let v = asList(upOrDownTo(1, k)); let e = []; ifTrue(isUndirected(self), { toDo(1, k, { :i | toDo((+(i, 1)), k, { :j | ifTrue(hasCommonVertex(at(edgeList(self), i),at(edgeList(self), j)), { add(e,[i, j]) }) }) }) }); ifTrue(isDirected(self), { toDo(1, k, { :i | toDo((+(i, 1)), k, { :j | ifTrue((&(~=(i, j), { =(at(at(edgeList(self), i), 2), at(at(edgeList(self), j), 1)) })), { add(e,-->(i, j)) }) }) }) }); ifTrue(isMixed(self), { error(self,'@Graph>>lineGraph: mixed graph') }); Graph(v, e) }",
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
  "{ :self :vertex | let vertexList = []; do(incidenceList(self,vertex), { :each | addAll(vertexList,vertexList(each)) }); subgraph(self,vertexList) }",
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
  "{ :self :vertex | let vertexList = []; do(incidenceList(self,vertex), { :each | addAll(vertexList,vertexList(each)) }); without(sort(nub(vertexList)),vertex) }",
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
  "{ :self :vertex | select(edgeList(self), { :edge | |((=(at(edge, 1), vertex)), { &(isUndirected(edge), { =(at(edge, 2), vertex) }) }) }) }",
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
    let _e = _Set_1(_matchesEdge_2);
    /* Statements */
    _do_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(_at_2(_each, 1), _at_2(_each, 2)),
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
  "{ :self | let v = vertexList(self); let e = Set(matchesEdge:/2); do(edgeList(self), { :each | ifTrue((~=(at(each, 1), at(each, 2))), { include(e,each) }) }); Graph(v, contents(e)) }",
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
          return _includesAllOf_2(_vertexList, _vertexList_1(_each));
        }, ["each"]),
      ),
    );
  }, ["self", "vertexList"]),
  "{ :self :vertexList | asGraph(select(edgeList(self), { :each | includesAllOf(vertexList,vertexList(each)) })) }",
);

sl.addMethodToExistingTrait(
  "Graph",
  "Graph",
  "sumGraph",
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
        return _error_2(_self, "@Graph>>sumGraph: non-equal vertex counts");
      }, []),
    );
  }, ["self", "aGraph"]),
  "{ :self :aGraph | if((=(vertexCount(self), vertexCount(aGraph))), { let m = adjacencyMatrix(self); let n = adjacencyMatrix(aGraph); adjacencyGraph((+(m, n))) }, { error(self,'@Graph>>sumGraph: non-equal vertex counts') }) }",
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
  "{ :self | Plot([self], 'graph', Record([['method', 'dot']])) }",
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
  "{ :self | Graph(vertexList(self), nubBy(collect(edgeList(self),asUndirectedEdge:/1),matchesEdge:/2)) }",
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
  "{ :self | size(vertexList(self)) }",
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
  "{ :self | collect(vertexList(self), { :vertex | vertexDegree(self,vertex) }) }",
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
  "{ :self :vertex | let answer = 0; do(edgeList(self), { :each | ifTrue((=(vertex, at(each, 1))), { answer := +(answer, 1) }); ifTrue((=(vertex, at(each, 2))), { answer := +(answer, 1) }) }); answer }",
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
  "{ :self | collect(vertexList(self), { :vertex | vertexInDegree(self,vertex) }) }",
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
  "{ :self :vertex | let answer = 0; vertexInNeighboursDo(self, vertex, { :unused | answer := +(answer, 1) }); answer }",
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
  "{ :self :vertex | let answer = []; vertexInNeighboursDo(self, vertex, { :each | add(answer,each) }); answer }",
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
  "{ :self :vertex :aBlock:/1 | do(edgeList(self), { :each | ifTrue((=(vertex, at(each, 2))), { aBlock(at(each, 1)) }); ifTrue(isUndirectedEdge(each), { ifTrue((=(vertex, at(each, 1))), { aBlock(at(each, 2)) }) }) }) }",
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
  "{ :self | collect(vertexList(self), { :vertex | vertexOutDegree(self,vertex) }) }",
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
  "{ :self :vertex | let answer = 0; vertexOutDo(self, vertex, { :unused | answer := +(answer, 1) }); answer }",
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
  "{ :self :vertex :aBlock:/1 | do(edgeList(self), { :each | ifTrue((=(vertex, at(each, 1))), { aBlock(at(each, 2)) }); ifTrue(isUndirectedEdge(each), { ifTrue((=(vertex, at(each, 2))), { aBlock(at(each, 1)) }) }) }) }",
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
  "{ :self :vertex | let answer = []; vertexOutDo(self, vertex, { :each | add(answer,each) }); answer }",
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
  "{ :self :edge | add(edgeList(self),edge) }",
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
  "{ :self :options | let layoutEngine = at(options, 'method'); then(dotLayout(asDot(self,options),'svg', layoutEngine), { :answer | Svg(answer) }) }",
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
  "{ :self | at(properties(self), 'edgeLabels') }",
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
  "{ :self :aList | atPut(properties(self), 'edgeLabels', aList); self }",
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
  "{ :self | atIfAbsent(properties(self), 'edgeWeights', { #(1, edgeCount(self)) }) }",
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
  "{ :self :aList | atPut(properties(self), 'edgeWeights', aList); self }",
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
  "{ :self | includesKey(properties(self),'edgeLabels') }",
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
  "{ :self | includesKey(properties(self),'vertexLabels') }",
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
  "{ :self :edge | ifFalse(includesEdge(self,edge), { addEdge(self,edge) }) }",
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
  "{ :self | includesKey(properties(self),'edgeWeights') }",
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
  "{ :self | format('%.asGraph',[edgeList(self)]) }",
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
  "{ :self | at(properties(self), 'vertexCoordinates') }",
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
  "{ :self :aList | atPut(properties(self), 'vertexCoordinates', aList); self }",
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
  "{ :self | at(properties(self), 'vertexLabels') }",
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
  "{ :self :aList | atPut(properties(self), 'vertexLabels', aList); self }",
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
  "{ :self :aList | let e = []; toDo(1, self, { :i | do(aList, { :j | add(e,[i, mod((-(i, j)),self, 1)]); add(e,[i, mod((+(i, j)),self, 1)]) }) }); simpleGraph(asGraph(e)) }",
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
  "{ :self :anInteger | let u = Span(1, self, 1); let v = upOrDownTo((+(self, 1)), (+(self, anInteger))); let e = []; do(u, { :i | addAll(e,collect(v, { :j | [i, j] })) }); Graph(++(u, v), e) }",
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
  "{ :self | let edgeList = []; toDo(1, self, { :i | addAll(edgeList,collect(to((+(i, 1)),self), { :j | [i, j] })) }); Graph(asList(upOrDownTo(1, self)), edgeList) }",
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
    } /* Temporaries */
    let _p = _circlePoints_4(_self, [0, 0], _radius, 0);
    /* Statements */
    return _LineDrawing_1([_PointCloud_1(_p), _Line_1(_tuples_2(_p, 2))]);
  }, ["self", "radius"]),
  "{ :self :radius | let p = circlePoints(self,[0, 0], radius, 0); LineDrawing([PointCloud(p), Line(tuples(p,2))]) }",
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
  "{ :self | let k = ^(2, self); let m = integerLength((-(k, 1)),2); let n = collect(upOrDownTo(0, (-(k, 1))), { :each | padLeft(integerDigits(each,2),[m], 0) }); let e = []; toDo(1, k, { :i | toDo(i, k, { :j | let d = hammingDistance(at(n, i),at(n, j)); ifTrue((=(d, 1)), { add(e,[i, j]) }) }) }); asGraph(e) }",
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
  "{ :self | asGraph(collect(Span(1, self, 1), { :each | [each, +(%(each, self), 1)] })) }",
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
        let __SPL20 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SPL20, 1);
        let _j = _at_2(__SPL20, 2);
        let __SPL21 = _assertIsOfSize_2(_atAll_2(_s, [_i, _j]), 2);
        let _p = _at_2(__SPL21, 1);
        let _q = _at_2(__SPL21, 2);
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
  "{ :m :n | let o = -(n, 1); let k = ^(m, n); let s = collect(upOrDownTo(0, -(k, 1)), { :i | integerDigits(i,m, n) }); let v = asList(upOrDownTo(1, k)); let e = []; let g = nil; let withLabels = false; tuplesDo([v, v], { :each | let __SPL20 = assertIsOfSize(each, 2); let i = at(__SPL20, 1); let j = at(__SPL20, 2); let __SPL21 = assertIsOfSize(atAll(s,[i, j]), 2); let p = at(__SPL21, 1); let q = at(__SPL21, 2); ifTrue((=(last(p,o), first(q,o))), { add(e,[i, j]) }) }); g := Graph(v, e); ifTrue(withLabels, { vertexLabels(g,collect(s, { :each | stringCatenate(collect(each,asString:/1)) })) }); g }",
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
  "{ :d :q | let k = ^(q, d); let s = tuples(asList(upOrDownTo(1, q)),d); let v = asList(upOrDownTo(1, k)); let e = []; toDo(1, k, { :i | toDo((+(i, 1)), k, { :j | let p = at(s, i); let q = at(s, j); ifTrue((=(hammingDistance(p,q), 1)), { add(e,[i, j]) }) }) }); Graph(v, e) }",
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
  "{ :k :n | if(isEven(k), { let m = /(k, 2); let e = []; toDo(1, n, { :i | do(to(1,m), { :j | let z = mod((+(i, j)),n, 1); add(e,[i, z]) }) }); e }, { if((&(isOdd(k), { isEven(n) })), { let e = hararyGraphEdgeList(-(k, 1), n); let m = /(n, 2); toDo(1, m, { :i | add(e,[i, +(i, m)]) }); e }, { let e = hararyGraphEdgeList(-(k, 1), n); let m = //(k, 2); toDo(1, +(/((-(n, 1)), 2), 1), { :i | let z = mod((+(i, (/(+(n, 1), 2)))),n, 1); add(e,[i, z]) }); e }) }) }",
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
  "{ :k :n | asGraph(hararyGraphEdgeList(k, n)) }",
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
  "{ :self | asGraph(collect(upOrDownTo(1, (-(self, 1))), { :each | [each, +(each, 1)] })) }",
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
  "{ :n :k | if((<(k, (/(n, 2)))), { let u = asList(upOrDownTo(1, n)); let v = asList(upOrDownTo(+(n, 1), +(n, n))); let e = collect(upOrDownTo(1, n), { :i | let a = mod((+(i, 1)),n, 1); let b = mod((+(i, k)),n, 1); [[at(u, i), at(u, a)], [at(u, i), at(v, i)], [at(v, i), at(v, b)]] }); Graph(++(u, v), catenate(e)) }, { error([n, k],'petersenGraph: k > n/2') }) }",
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
  "{ :n | petersenGraph(n, 1) }",
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
  "{ :self | asGraph(collect(Span(2, self, 1), { :each | [1, each] })) }",
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
  "{ :self | if((<(self, 4)), { error(self,'Integer>>wheelGraph: n < 4') }, { let cycle = collect(to(2,self), { :each | [each, if((=(each, self)), { 2 }, { +(each, 1) })] }); let star = collect(to(2,self), { :each | [1, each] }); asGraph((++(cycle, star))) }) }",
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
  "{ :self | collect(self,asEdge:/1) }",
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
  "{ :self | let vertexList = sort(nub(collectCatenate(self,vertexList:/1))); let renameTable = asMap(collect(vertexList, { :vertex | ->(vertex, indexOf(vertexList,vertex)) })); collect(self, { :each | rename(each,renameTable) }) }",
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
  "{ :shape | let k = product(shape); let v = iota(k); let c = collect(Span(1, k, 1), { :i | cartesianIndex(shape,i) }); let e = []; toDo(1, k, { :i | toDo((+(i, 1)), k, { :j | ifTrue((=(sum(abs((-(at(c, j), at(c, i))))), 1)), { add(e,[i, j]) }) }) }); Graph(v, e) }",
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
  "{ :self:/2 :isDirected :vertexList | let edgeList = []; let v = vertexList; let k = size(vertexList); let addEdge = { :i :j | if(isDirected, { add(edgeList,-->(at(v, i), at(v, j))) }, { ifTrue((<=(i, j)), { add(edgeList,[at(v, i), at(v, j)]) }) }) }; do(Span(1, k, 1), { :i | do(Span(1, k, 1), { :j | let n = self(at(v, i), at(v, j)); timesRepeat(n, { addEdge(i, j) }) }) }); Graph(vertexList, edgeList) }",
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
  "{ :self:/2 :isDirected :vertexList | let edgeList = []; let v = vertexList; let k = size(vertexList); let addEdge = { :i :j | if(isDirected, { add(edgeList,-->(at(v, i), at(v, j))) }, { ifTrue((<=(i, j)), { add(edgeList,[at(v, i), at(v, j)]) }) }) }; do(Span(1, k, 1), { :i | do(Span(1, k, 1), { :j | ifTrue(self(at(v, i), at(v, j)), { addEdge(i, j) }) }) }); Graph(vertexList, edgeList) }",
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
        return _adjacencyGraph_2(
          _self,
          "List>>adjacencyGraph: not a square matrix",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSquareMatrix(self), { let isDirected = not(isSymmetricMatrix(self)); edgeCountGraph({ :i :j | at(self, i, j) },isDirected, iota(size(self))) }, { adjacencyGraph(self,'List>>adjacencyGraph: not a square matrix') }) }",
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
  "{ :self | let edgeList = asList(collect(self,asEdge:/1)); let vertexList = []; do(edgeList, { :each | add(vertexList,at(each, 1)); add(vertexList,at(each, 2)) }); Graph(sort(nub(vertexList)), edgeList) }",
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
      _Record_1([]),
    );
  }, ["vertexList", "edgeList"]),
  "{ :vertexList :edgeList | initializeSlots(newGraph(),vertexList, collect(edgeList,asEdge:/1), Record([])) }",
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
        let __SPL22 = _assertIsOfSize_2(_each, 2);
        let _i = _at_2(__SPL22, 1);
        let _j = _at_2(__SPL22, 2);
        /* Statements */
        return _at_3(_self, _i, _j);
      }, ["each"]),
    );
    /* Statements */
    _edgeWeights_2(_g, _w);
    return _g;
  }, ["self"]),
  "{ :self | let m = deepCollect(self, { :each | if((=(each, Infinity)), { 0 }, { 1 }) }); let g = adjacencyGraph(m); let w = collect(edgeList(g), { :each | let __SPL22 = assertIsOfSize(each, 2); let i = at(__SPL22, 1); let j = at(__SPL22, 2); at(self, i, j) }); edgeWeights(g, w); g }",
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
  "{ :dotSource :outputFormat :layoutEngine | <primitive: return import(\n\t\t\t'../lib/scsynth-wasm-builds/lib/ext/graphviz.js'\n\t\t).then(\n\t\t\tfunction ({ Graphviz }) {\n\t\t\t\treturn Graphviz.load().then(\n\t\t\t\t\tfunction (graphviz) {\n\t\t\t\t\t\treturn graphviz.layout(\n\t\t\t\t\t\t\t_dotSource,\n\t\t\t\t\t\t\t_outputFormat,\n\t\t\t\t\t\t\t_layoutEngine,\n\t\t\t\t\t\t\t{}\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t);>\n }",
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
  "{ :self | requireLibraryItem(self,'SageSmallGraphCatalogue') }",
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
