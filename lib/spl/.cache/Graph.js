/* {- UndirectedEdge -} */

sl.addMethod(
  "List",
  "Graph",
  "asDot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([_at_2(_self, 1), " -- ", _at_2(_self, 2), ";"]);
  },
  "{ :self |\n\t\t[self[1], ' -- ', self[2], ';'].join\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_tildeEqualsSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "List>>asEdge: not two-list");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\t(self.size ~= 2).if {\n\t\t\tself.error('List>>asEdge: not two-list')\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "asDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asAssociation_1(_asEdge_1(_self));
  },
  "{ :self |\n\t\tself.asEdge.asAssociation\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "asUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asEdge_1(_self);
  },
  "{ :self |\n\t\tself.asEdge\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "hasCommonVertex",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_includes_2(_self, _first_1(_anEdge)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_self, _second_1(_anEdge));
    });
  },
  "{ :self :anEdge |\n\t\tself.includes(anEdge.first) | {\n\t\t\tself.includes(anEdge.second)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "isDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "isEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 2);
  },
  "{ :self |\n\t\tself.size = 2\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "isUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 2);
  },
  "{ :self |\n\t\tself.size = 2\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "matchesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_tildeEqualsSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "List>>matchesEdge: not two-list");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isList_1(_edge), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_sorted_1(_self), _sorted_1(_edge));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isAssociation_1(_edge), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_sorted_1(_self), _sort_1(_asList_1(_edge)));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return false;
        });
      });
    });
  },
  "{ :self :edge |\n\t\t(self.size ~= 2).if {\n\t\t\tself.error('List>>matchesEdge: not two-list')\n\t\t} {\n\t\t\tedge.isList.if {\n\t\t\t\tself.sorted = edge.sorted\n\t\t\t} {\n\t\t\t\tedge.isAssociation.if {\n\t\t\t\t\tself.sorted = edge.asList.sort\n\t\t\t\t} {\n\t\t\t\t\tfalse\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "asDot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _asString_1(_key_1(_self)),
      " -> ",
      _asString_1(_value_1(_self)),
      ";",
    ]);
  },
  "{ :self |\n\t\t[self.key.asString, ' -> ', self.value.asString, ';'].join\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "asDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _key_1(_self);
  },
  "{ :self |\n\t\tself.key\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "asUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_key_1(_self), _value_1(_self)];
  },
  "{ :self |\n\t\t[self.key, self.value]\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "head",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _second_1(_self);
  },
  "{ :self |\n\t\tself.second\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "isDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "isEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "isUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "matchesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _edge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isList_1(_edge), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _matchesEdge_2(_edge, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      });
    });
  },
  "{ :self :edge |\n\t\tself = edge | {\n\t\t\tedge.isList.if {\n\t\t\t\tedge.matchesEdge(self)\n\t\t\t} {\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Association",
  "Graph",
  "tail",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_self);
  },
  "{ :self |\n\t\tself.first\n\t}",
);

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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_first_1(_each), _vertex), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _second_1(_each));
      });
      return _ifTrue_2(_equalsSign_2(_second_1(_each), _vertex), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _first_1(_each));
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = [];\n\t\tself.edgeList.do { :each |\n\t\t\t(each.first = vertex).ifTrue {\n\t\t\t\tanswer.add(each.second)\n\t\t\t};\n\t\t\t(each.second = vertex).ifTrue {\n\t\t\t\tanswer.add(each.first)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _count_2(_edgeList_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _matchesEdge_2(_each, _hyphenMinusGreaterThanSign_2(_i, _j));
        });
      },
      _v,
      _v,
    );
  },
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\t{ :i :j |\n\t\t\tself.edgeList.count { :each |\n\t\t\t\teach.matchesEdge(i -> j)\n\t\t\t}\n\t\t}.table(v, v)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _begin = _if_3(_isDirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _unlines_1(["digraph {", "graph [layout=neato];"]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _unlines_1(["graph {", "graph [layout=neato];"]);
    });
    let _attributeText = _unlines_1([
      "node [shape=point];",
      "edge [penwidth=0.75, arrowsize=0.25];",
    ]);
    let _edgeText = _unlines_1(_collect_2(_edgeList_1(_self), _asDot_1));
    let _end = "}";
    /* Statements */
    return _unlines_1([_begin, _attributeText, _edgeText, _end]);
  },
  "{ :self |\n\t\tlet begin = self.isDirected.if {\n\t\t\t[\n\t\t\t\t'digraph {',\n\t\t\t\t'graph [layout=neato];'\n\t\t\t].unlines\n\t\t} {\n\t\t\t[\n\t\t\t\t'graph {',\n\t\t\t\t'graph [layout=neato];'\n\t\t\t].unlines\n\t\t};\n\t\tlet attributeText = [\n\t\t\t'node [shape=point];',\n\t\t\t'edge [penwidth=0.75, arrowsize=0.25];'\n\t\t].unlines;\n\t\tlet edgeText = self.edgeList.collect(asDot:/1).unlines;\n\t\tlet end = '}';\n\t\t[\n\t\t\tbegin,\n\t\t\tattributeText,\n\t\t\tedgeText,\n\t\t\tend\n\t\t].unlines\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _boole_1(
          _includesEdge_2(_self, _hyphenMinusGreaterThanSign_2(_i, _j)),
        );
      },
      _v,
      _v,
    );
  },
  "{ :self |\n                let v = self.vertexList;\n                { :i :j |\n\t\t\tself.includesEdge(i -> j).boole\n                }.table(v, v)\n        }",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indexOf_2(_edgeList_1(_self), _edge);
  },
  "{ :self :edge |\n\t\tself.edgeList.indexOf(edge)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _v = _vertexList_1(_self);
    /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_includes_2(_v, _first_1(_edge)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _includes_2(_v, _second_1(_edge));
      });
    });
  },
  "{ :self |\n\t\tlet v = self.vertexList;\n\t\tself.edgeList.allSatisfy { :edge |\n\t\t\tv.includes(edge.first) & {\n\t\t\t\tv.includes(edge.second)\n\t\t\t}\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _verticalLine_2(
        _equalsSign_2(_first_1(_each), _vertex),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_second_1(_each), _vertex);
        },
      );
    });
  },
  "{ :self :vertex |\n\t\tself.edgeList.select { :each |\n\t\t\teach.first = vertex | {\n\t\t\t\teach.second = vertex\n\t\t\t}\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_edgeList_1(_self), function (_e) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _e";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isUndirectedEdge_1(_e), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_equalsSign_2(_first_1(_e), _v), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_equalsSign_2(_second_1(_e), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return 2;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return 1;
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_equalsSign_2(_second_1(_e), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return 1;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return 0;
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
          return _if_3(_isDirectedEdge_1(_e), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_equalsSign_2(_first_1(_e), _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(_equalsSign_2(_second_1(_e), _v), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return -2;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return -1;
              });
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(_equalsSign_2(_second_1(_e), _v), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return 1;
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return 0;
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
            return _error_2(_self, "@Graph>>incidenceMatrix: invalid edge");
          });
        });
      });
    });
  },
  "{ :self |\n\t\tself.vertexList.collect { :v |\n\t\t\tself.edgeList.collect { :e |\n\t\t\t\te.isUndirectedEdge.if {\n\t\t\t\t\t(e.first = v).if {\n\t\t\t\t\t\t(e.second = v).if {\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t(e.second = v).if {\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t0\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\te.isDirectedEdge.if {\n\t\t\t\t\t\t(e.first = v).if {\n\t\t\t\t\t\t\t(e.second = v).if {\n\t\t\t\t\t\t\t\t-2\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t-1\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(e.second = v).if {\n\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.error('@Graph>>incidenceMatrix: invalid edge')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_edgeList_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_second_1(_edge), _vertex);
    });
  },
  "{ :self :vertex |\n\t\tself.edgeList.select { :edge |\n\t\t\tedge.second = vertex\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeEqualsSign_2(_first_1(_each), _second_1(_each));
    });
  },
  "{ :self |\n\t\tself.edgeList.allSatisfy { :each |\n\t\t\teach.first ~= each.second\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _anySatisfy_2(_edgeList_1(_self), _isDirectedEdge_1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _edgeCount_1(_self);
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _e = [];
    /* Statements */
    _ifTrue_2(_isUndirected_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _k, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifTrue_2(
            _hasCommonVertex_2(
              _at_2(_edgeList_1(_self), _i),
              _at_2(_edgeList_1(_self), _j),
            ),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _k, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifTrue_2(
            _ampersand_2(_tildeEqualsSign_2(_i, _j), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(
                _second_1(_at_2(_edgeList_1(_self), _i)),
                _first_1(_at_2(_edgeList_1(_self), _j)),
              );
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _add_2(_e, _hyphenMinusGreaterThanSign_2(_i, _j));
            },
          );
        });
      });
    });
    _ifTrue_2(_isMixed_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Graph>>lineGraph: mixed graph");
    });
    return _Graph_2(_v, _e);
  },
  "{ :self |\n\t\tlet k = self.edgeCount;\n\t\tlet v = [1 .. k];\n\t\tlet e = [];\n\t\tself.isUndirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\tself.edgeList[i].hasCommonVertex(\n\t\t\t\t\t\tself.edgeList[j]\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add([i, j])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isDirected.ifTrue {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\t(\n\t\t\t\t\t\ti ~= j & {\n\t\t\t\t\t\t\tself.edgeList[i].second = self.edgeList[j].first\n\t\t\t\t\t\t}\n\t\t\t\t\t).ifTrue {\n\t\t\t\t\t\te.add(i -> j)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.isMixed.ifTrue {\n\t\t\tself.error('@Graph>>lineGraph: mixed graph')\n\t\t};\n\t\tGraph(v, e)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_edges_1(_self), function (_edge) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _edge";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_first_1(_edge), _vertex);
    });
  },
  "{ :self :vertex |\n\t\tself.edges.select { :edge |\n\t\t\tedge.first = vertex\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSign_2(_vertexCount_1(_self), _vertexCount_1(_aGraph)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _m = _adjacencyMatrix_1(_self);
        let _n = _adjacencyMatrix_1(_aGraph);
        /* Statements */
        return _adjacencyGraph_1(_plusSign_2(_m, _n));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _first_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_equalsSign_2(_vertex, _second_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each.first).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\t(vertex = each.second).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _second_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_isList_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_equalsSign_2(_vertex, _first_1(_each)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _answer = _plusSign_2(_answer, 1);
        });
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each.second).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\teach.isList.ifTrue {\n\t\t\t\t(vertex = each.first).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_vertexList_1(_self), function (_vertex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _vertex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_vertex, _first_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      });
      return _ifTrue_2(_isList_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_equalsSign_2(_vertex, _second_1(_each)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _answer = _plusSign_2(_answer, 1);
        });
      });
    });
    return _answer;
  },
  "{ :self :vertex |\n\t\tlet answer = 0;\n\t\tself.edgeList.do { :each |\n\t\t\t(vertex = each.first).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\teach.isList.ifTrue {\n\t\t\t\t(vertex = each.second).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _add_2(_edgeList_1(_self), _edge);
  },
  "{ :self :edge |\n\t\tself.edgeList.add(edge)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_includesEdge_2(_self, _edge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasValidEdges_1(_self);
  },
  "{\n\t\tself.hasValidEdges\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_properties_1(_self), "vertexLabels");
  },
  "{ :self |\n\t\tself.properties::vertexLabels\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertexLabels",
  ["self", "labels"],
  function (_self, _labels) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _labels";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _atPut_3(_properties_1(_self), "vertexLabels", _labels);
    return _self;
  },
  "{ :self :labels |\n\t\tself.properties::vertexLabels := labels;\n\t\tself\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addAll_2(
        _e,
        _collect_2(_v, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [_i, _j];
        }),
      );
    });
    return _Graph_2(_plusSignPlusSign_2(_u, _v), _e);
  },
  "{ :self :anInteger |\n\t\tlet u = 1:self;\n\t\tlet v = (self + 1 .. self + anInteger);\n\t\tlet e = [];\n\t\tu.do { :i |\n\t\t\te.addAll(\n\t\t\t\tv.collect { :j |\n\t\t\t\t\t[i, j]\n\t\t\t\t}\n\t\t\t)\n\t\t};\n\t\tGraph(u ++ v, e)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _edgeList = [];
    /* Statements */
    _toDo_3(1, _self, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addAll_2(
        _edgeList,
        _collect_2(_to_2(_plusSign_2(_i, 1), _self), function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
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
  "cycleGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asGraph_1(_collect_2(_upOrDownTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asGraph_1(
      _collect_2(_upOrDownTo_2(1, _hyphenMinus_2(_self, 1)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [_each, _plusSign_2(_each, 1)];
      }),
    );
  },
  "{ :self |\n\t\t(1 .. self - 1).collect { :each |\n\t\t\t[each, each + 1]\n\t\t}.asGraph\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asGraph_1(_collect_2(_upOrDownTo_2(2, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Integer>>wheelGraph: n < 4");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _cycle = _collect_2(_to_2(2, _self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [
          _each,
          _if_3(_equalsSign_2(_each, _self), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 2;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _plusSign_2(_each, 1);
          }),
        ];
      });
      let _star = _collect_2(_to_2(2, _self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "gridGraph",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _product_1(_shape);
    let _v = _asList_1(_upOrDownTo_2(1, _k));
    let _c = _collect_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cartesianIndex_2(_shape, _i);
    });
    let _e = [];
    /* Statements */
    _toDo_3(1, _k, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(_plusSign_2(_i, 1), _k, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(
            _sum_1(_abs_1(_hyphenMinus_2(_at_2(_c, _j), _at_2(_c, _i)))),
            1,
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _add_2(_e, [_i, _j]);
          },
        );
      });
    });
    return _Graph_2(_v, _e);
  },
  "{ :shape |\n\t\tlet k = shape.product;\n\t\tlet v = [1 .. k];\n\t\tlet c = 1:k.collect { :i | shape.cartesianIndex(i) };\n\t\tlet e = [];\n\t\t1.toDo(k) { :i |\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t((c[j] - c[i]).abs.sum = 1).ifTrue {\n\t\t\t\t\te.add([i, j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(v, e)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isDirected, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(
          _edgeList,
          _hyphenMinusGreaterThanSign_2(_at_2(_v, _i), _at_2(_v, _j)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_lessThanSignEqualsSign_2(_i, _j), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
        });
      });
    };
    /* Statements */
    _do_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_upOrDownTo_2(1, _k), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _n = _self_2(_at_2(_v, _i), _at_2(_v, _j));
        /* Statements */
        return _timesRepeat_2(_n, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _addEdge_2(_i, _j);
        });
      });
    });
    return _Graph_2(_vertexList, _edgeList);
  },
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] -> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tlet n = self(v[i], v[j]);\n\t\t\t\tn.timesRepeat {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _edgeList = [];
    let _v = _vertexList;
    let _k = _size_1(_vertexList);
    let _addEdge_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isDirected, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(
          _edgeList,
          _hyphenMinusGreaterThanSign_2(_at_2(_v, _i), _at_2(_v, _j)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_lessThanSignEqualsSign_2(_i, _j), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_edgeList, [_at_2(_v, _i), _at_2(_v, _j)]);
        });
      });
    };
    /* Statements */
    _do_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_upOrDownTo_2(1, _k), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_self_2(_at_2(_v, _i), _at_2(_v, _j)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _addEdge_2(_i, _j);
        });
      });
    });
    return _Graph_2(_vertexList, _edgeList);
  },
  "{ :self:/2 :isDirected :vertexList |\n\t\tlet edgeList = [];\n\t\tlet v = vertexList;\n\t\tlet k = vertexList.size;\n\t\tlet addEdge = { :i :j |\n\t\t\tisDirected.if {\n\t\t\t\tedgeList.add(v[i] -> v[j])\n\t\t\t} {\n\t\t\t\t(i <= j).ifTrue {\n\t\t\t\t\tedgeList.add([v[i], v[j]])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1:k.do { :i |\n\t\t\t1:k.do { :j |\n\t\t\t\tself(v[i], v[j]).ifTrue {\n\t\t\t\t\taddEdge(i, j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _isDirected = _not_1(_isSymmetricMatrix_1(_self));
      /* Statements */
      return _edgeCountGraph_3(
        function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _at_3(_self, _i, _j);
        },
        _isDirected,
        _asList_1(_upOrDownTo_2(1, _size_1(_self))),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adjacencyGraph_2(
        _self,
        "List>>adjacencyGraph: not a square matrix",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet isDirected = self.isSymmetricMatrix.not;\n\t\t\t{ :i :j |\n\t\t\t\tself[i, j]\n\t\t\t}.edgeCountGraph(isDirected, [1 .. self.size])\n\t\t} {\n\t\t\tself.adjacencyGraph('List>>adjacencyGraph: not a square matrix')\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _edgeList = _asList_1(_collect_2(_self, _asEdge_1));
    let _vertexList = [];
    /* Statements */
    _do_2(_edgeList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_vertexList, _first_1(_each));
      return _add_2(_vertexList, _second_1(_each));
    });
    return _Graph_2(_nub_1(_vertexList), _edgeList);
  },
  "{ :self |\n\t\tlet edgeList = self.collect(asEdge:/1).asList;\n\t\tlet vertexList = [];\n\t\tedgeList.do { :each |\n\t\t\tvertexList.add(each.first);\n\t\t\tvertexList.add(each.second)\n\t\t};\n\t\tGraph(vertexList.nub, edgeList)\n\t}",
);

sl.addMethod(
  "List",
  "Graph",
  "Graph",
  ["vertices", "edges"],
  function (_vertices, _edges) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _vertices, _edges";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newGraph_0(),
      _vertices,
      _edges,
      Object.fromEntries([]),
    );
  },
  "{ :vertices :edges |\n\t\tnewGraph().initializeSlots(\n\t\t\tvertices,\n\t\t\tedges,\n\t\t\t()\n\t\t)\n\t}",
);
