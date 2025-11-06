sl.addType(
  false,
  "Tree",
  "Tree",
  ["Object", "Equatable", "Iterable", "Indexable"],
  ["value", "subTrees"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Tree",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Tree",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Tree",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Tree",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "addChild",
  ["self", "child"],
  sl.annotateFunction(function (_self, _child) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _child";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTree_1(_child),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_subTrees_1(_self), _child);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Tree>>addChild: not tree");
      }, []),
    );
  }, ["self", "child"]),
  "{ :self :child |\n\t\tchild.isTree.if {\n\t\t\tself.subTrees.add(child)\n\t\t} {\n\t\t\tself.error('Tree>>addChild: not tree')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "asGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nodeId = 1;
    let _vertexLabels = [];
    let _labeledTree = _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _hyphenMinusGreaterThanSign_2(_nodeId, _each);
        /* Statements */
        _nodeId = _plusSign_2(_nodeId, 1);
        _add_2(_vertexLabels, _each);
        return _answer;
      }, ["each"]),
    );
    let _edgeList = [];
    /* Statements */
    _do_2(
      _labeledTree,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _subTrees_1(_i),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _edgeList,
              _DirectedEdge_2(_key_1(_value_1(_i)), _key_1(_value_1(_j))),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _also_2(
      _asGraph_1(_edgeList),
      sl.annotateFunction(function (_graph) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _graph";
          throw new Error(errorMessage);
        } /* Statements */
        return _vertexLabels_2(_graph, _vertexLabels);
      }, ["graph"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet nodeId = 1;\n\t\tlet vertexLabels = [];\n\t\tlet labeledTree = self.collect { :each |\n\t\t\tlet answer = nodeId -> each;\n\t\t\tnodeId := nodeId + 1;\n\t\t\tvertexLabels.add(each);\n\t\t\tanswer\n\t\t};\n\t\tlet edgeList = [];\n\t\tlabeledTree.do { :i |\n\t\t\ti.subTrees.collect { :j |\n\t\t\t\tedgeList.add(\n\t\t\t\t\tDirectedEdge(\n\t\t\t\t\t\ti.value.key,\n\t\t\t\t\t\tj.value.key\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tedgeList.asGraph.also { :graph |\n\t\t\tgraph.vertexLabels := vertexLabels\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _subLists = _collect_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isLeaf_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _value_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asList_1(_each);
          }, []),
        );
      }, ["each"]),
    );
    /* Statements */
    return _ifNil_3(
      _value_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _subLists;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2([_value_1(_self)], _subLists);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet subLists = self.subTrees.collect { :each |\n\t\t\teach.isLeaf.if {\n\t\t\t\teach.value\n\t\t\t} {\n\t\t\t\teach.asList\n\t\t\t}\n\t\t};\n\t\tself.value.ifNil {\n\t\t\tsubLists\n\t\t} {\n\t\t\t[self.value] ++ subLists\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_subTrees_1(_self), _index, _ifAbsent_0);
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\tself.subTrees.atIfAbsent(index, ifAbsent:/0)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      _aBlock_1(_value_1(_self)),
      _collect_2(
        _subTrees_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_each, _aBlock_1);
        }, ["each"]),
      ),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tTree(\n\t\t\taBlock(self.value),\n\t\t\tself.subTrees.collect { :each |\n\t\t\t\teach.collect(aBlock:/1)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "deepWithIndicesDoStartingAt",
  ["self", "i", "aBlock:/2"],
  sl.annotateFunction(function (_self, _i, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _plusSignPlusSign_2(_i, [_j]);
        /* Statements */
        _aBlock_2(_each, _index);
        return _deepWithIndicesDoStartingAt_3(_each, _index, _aBlock_2);
      }, ["each", "j"]),
    );
  }, ["self", "i", "aBlock:/2"]),
  "{ :self :i :aBlock:/2 |\n\t\tself.subTrees.withIndexDo { :each :j |\n\t\t\tlet index = i ++ [j];\n\t\t\taBlock(each, index);\n\t\t\teach.deepWithIndicesDoStartingAt(index, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "deepWithIndicesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepWithIndicesDoStartingAt_3(_self, [], _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.deepWithIndicesDoStartingAt([], aBlock:/2)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "deepIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepWithIndicesDo_2(
      _self,
      sl.annotateFunction(function (_unused, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _unused, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _index);
      }, ["unused", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.deepWithIndicesDo { :unused :index |\n\t\t\tanswer.add(index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "depthStartingAt",
  ["self", "depth"],
  sl.annotateFunction(function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _depth;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_1(
          _collect_2(
            _subTrees_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _depthStartingAt_2(_each, _plusSign_2(_depth, 1));
            }, ["each"]),
          ),
        );
      }, []),
    );
  }, ["self", "depth"]),
  "{ :self :depth |\n\t\t(self.size = 0).if {\n\t\t\tdepth\n\t\t} {\n\t\t\tself.subTrees.collect { :each |\n\t\t\t\teach.depthStartingAt(depth + 1)\n\t\t\t}.max\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "depth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _depthStartingAt_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.depthStartingAt(1)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _aBlock_1(_self);
    return _do_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_each, _aBlock_1);
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\taBlock(self);\n\t\tself.subTrees.do { :each |\n\t\t\teach.do(aBlock:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isTree_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_value_1(_self), _value_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalBy_3(
              _subTrees_1(_self),
              _subTrees_1(_anObject),
              _aBlock_2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isTree & {\n\t\t\taBlock(self.value, anObject.value) & {\n\t\t\t\tequalBy(self.subTrees, anObject.subTrees, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "flatten",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _leaves_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.leaves\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "graphPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _graphPlot_1(_asGraph_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asGraph.graphPlot\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _to_2(1, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.size)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isEmpty_1(_subTrees_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_subTrees_1(_self)), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(_subTrees_1(_self), _isBinary_1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.subTrees.isEmpty | {\n\t\t\tself.subTrees.size = 2 & {\n\t\t\t\tself.subTrees.allSatisfy(isBinary:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "isLeaf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEmpty_1(_subTrees_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.subTrees.isEmpty\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "leafCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _leavesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.leavesDo { :each |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "leafIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepWithIndicesDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _isLeaf_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.deepWithIndicesDo { :each :index |\n\t\t\teach.isLeaf.ifTrue {\n\t\t\t\tanswer.add(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "leavesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _isLeaf_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_value_1(_each));
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\teach.isLeaf.ifTrue {\n\t\t\t\taBlock(each.value)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "leaves",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _leavesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _value_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.leavesDo { :each |\n\t\t\tanswer.add(each.value)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "levelOrderDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      }, ["each"]),
    );
    return _do_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _levelOrderDo_2(_each, _aBlock_1);
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.subTrees.do { :each |\n\t\t\taBlock(each)\n\t\t};\n\t\tself.subTrees.do { :each |\n\t\t\teach.levelOrderDo(aBlock:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "levelOrderValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _collect_2(
      _to_2(0, _hyphenMinus_2(_depth_1(_self), 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(
          _answer,
          _collect_2(_level_2(_self, [_each]), _value_1),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\t0.to(self.depth - 1).collect { :each |\n\t\t\tanswer.addAll(self.level([each]).collect(value:/1))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "postOrderDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _postOrderDo_2(_each, _aBlock_1);
      }, ["each"]),
    );
    return _aBlock_1(_self);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.subTrees.do { :each |\n\t\t\teach.postOrderDo(aBlock:/1)\n\t\t};\n\t\taBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "postOrderValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _postOrderDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _value_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.postOrderDo { :each |\n\t\t\tanswer.add(each.value)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "reverseDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _reverseDo_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _reverseDo_2(_each, _aBlock_1);
      }, ["each"]),
    );
    return _aBlock_1(_self);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.subTrees.reverseDo { :each |\n\t\t\teach.reverseDo(aBlock:/1)\n\t\t};\n\t\taBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_subTrees_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.subTrees.size\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "treePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _treePlot_1(_asGraph_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asGraph.treePlot\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _value_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add(each.value)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "withLevelDo",
  ["self", "aBlock:/2", "level"],
  sl.annotateFunction(function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _subTrees_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _withLevelDo_3(_each, _aBlock_2, _plusSign_2(_level, 1));
        return _aBlock_2(_each, _level);
      }, ["each"]),
    );
  }, ["self", "aBlock:/2", "level"]),
  "{ :self :aBlock:/2 :level |\n\t\tself.subTrees.do { :each |\n\t\t\teach.withLevelDo(aBlock:/2, level + 1);\n\t\t\taBlock(each, level)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "withLevelDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _withLevelDo_3(_self, _aBlock_2, 1);
    return _aBlock_2(_self, 0);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.withLevelDo(aBlock:/2, 1);\n\t\taBlock(self, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Tree",
  "Tree",
  ["value", "subTrees"],
  sl.annotateFunction(function (_value, _subTrees) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _value, _subTrees";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newTree_0(), _value, _subTrees);
  }, ["value", "subTrees"]),
  "{ :value :subTrees |\n\t\tnewTree().initializeSlots(value, subTrees)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tree",
  "expressionTree",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      _anObject,
      _collect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isList_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _expressionTree_2(_each, _anObject);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Tree_2(_each, []);
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tTree(\n\t\t\tanObject,\n\t\t\tself.collect { :each |\n\t\t\t\teach.isList.if {\n\t\t\t\t\teach.expressionTree(anObject)\n\t\t\t\t} {\n\t\t\t\t\tTree(each, [])\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tree",
  "expressionTree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isList_1(_at_2(_self, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>expressionTree: invalid initial item");
      }, []),
    );
    return _Tree_2(
      _at_2(_self, 1),
      _collect_2(
        _allButFirst_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isList_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _expressionTree_1(_each);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Tree_2(_each, []);
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself[1].isList.ifTrue {\n\t\t\tself.error('List>>expressionTree: invalid initial item')\n\t\t};\n\t\tTree(\n\t\t\tself[1],\n\t\t\tself.allButFirst.collect { :each |\n\t\t\t\teach.isList.if {\n\t\t\t\t\teach.expressionTree\n\t\t\t\t} {\n\t\t\t\t\tTree(each, [])\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "Tree",
  "rulesTree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      _key_1(_self),
      _collect_2(
        _value_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isAssociation_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _rulesTree_1(_each);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Tree_2(_each, []);
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tTree(\n\t\t\tself.key,\n\t\t\tself.value.collect { :each |\n\t\t\t\teach.isAssociation.if {\n\t\t\t\t\teach.rulesTree\n\t\t\t\t} {\n\t\t\t\t\tTree(each, [])\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "calkinWilfTree",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _unfoldTree_3(
      _n,
      _r,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2([
          _numerator_1(_each),
          _denominator_1(_each),
        ], 2);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        /* Statements */
        return [
          _Fraction_2(_a, _plusSign_2(_a, _b)),
          _Fraction_2(_plusSign_2(_a, _b), _b),
        ];
      }, ["each"]),
    );
  }, ["n", "r"]),
  "{ :n :r |\n\t\tn.unfoldTree(r) { :each |\n\t\t\tlet [a, b] = [each.numerator, each.denominator];\n\t\t\t[Fraction(a, a + b), Fraction(a + b, b)]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "calkinWilfTree",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _calkinWilfTree_2(_n, _Fraction_2(1n, 1n));
  }, ["n"]),
  "{ :n |\n\t\tn.calkinWilfTree(1/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "completeKaryTree",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = sl.annotateFunction(function (_n, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_n, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _numberSign_2(null, _k);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _exclamationMark_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _f_2(_hyphenMinus_2(_n, 1), _k);
            }, []),
            _k,
          );
        }, []),
      );
    }, ["n", "k"]);
    /* Statements */
    return _expressionTree_2(_f_2(_n, _k), null);
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet f = { :n :k |\n\t\t\t(n <= 2).if {\n\t\t\t\tnil # k\n\t\t\t} {\n\t\t\t\t{ f(n - 1, k) } ! k\n\t\t\t}\n\t\t};\n\t\tf(n, k).expressionTree(nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "karyTree",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = _Tree_2(null, []);
    let _f_2 = sl.annotateFunction(function (_l, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _l, _i";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _level_2(_t, [_l]),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _ampersand_2(
              _greaterThanSign_2(_i, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isLeaf_1(_each);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _j = _min_2(_i, _k);
              /* Statements */
              _subTrees_2(
                _each,
                _exclamationMark_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _Tree_2(null, []);
                  }, []),
                  _j,
                ),
              );
              return _i = _hyphenMinus_2(_i, _j);
            }, []),
          );
        }, ["each"]),
      );
      return _ifTrue_2(
        _greaterThanSign_2(_i, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _f_2(_plusSign_2(_l, 1), _i);
        }, []),
      );
    }, ["l", "i"]);
    /* Statements */
    _f_2(0, _hyphenMinus_2(_n, 1));
    return _t;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet t = Tree(nil, []);\n\t\tlet f = { :l :i |\n\t\t\tt.level([l]).do { :each |\n\t\t\t\t(\n\t\t\t\t\t(i > 0) & {\n\t\t\t\t\t\teach.isLeaf\n\t\t\t\t\t}\n\t\t\t\t).ifTrue {\n\t\t\t\t\tlet j = i.min(k);\n\t\t\t\t\teach.subTrees := { Tree(nil, []) } ! j;\n\t\t\t\t\ti := i - j\n\t\t\t\t}\n\t\t\t};\n\t\t\t(i > 0).ifTrue {\n\t\t\t\tf(l + 1, i)\n\t\t\t}\n\t\t};\n\t\tf(0, n - 1);\n\t\tt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "keplerTree",
  ["depth"],
  sl.annotateFunction(function (_depth) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    return _unfoldTree_3(
      _depth,
      _Fraction_2(1n, 1n),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, _Fraction_2(1n, 1n)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_Fraction_2(1n, 2n)];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _numerator_1(_each);
            let _d = _denominator_1(_each);
            let _z = _plusSign_2(_n, _d);
            /* Statements */
            return [_Fraction_2(_n, _z), _Fraction_2(_d, _z)];
          }, []),
        );
      }, ["each"]),
    );
  }, ["depth"]),
  "{ :depth |\n\t\tdepth.unfoldTree(1/1) { :each |\n\t\t\t(each = 1/1).if {\n\t\t\t\t[1/2]\n\t\t\t} {\n\t\t\t\tlet n = each.numerator;\n\t\t\t\tlet d = each.denominator;\n\t\t\t\tlet z = n + d;\n\t\t\t\t[Fraction(n, z), Fraction(d, z)]\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "sternBrocotTree",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _unfoldTree_3(
      _n,
      _r,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _continuedFraction_1(_each);
        let _b = _copy_1(_a);
        /* Statements */
        _atPut_3(_a, _size_1(_a), _plusSign_2(_at_2(_a, _size_1(_a)), 1));
        _atPut_3(_b, _size_1(_a), _hyphenMinus_2(_at_2(_b, _size_1(_a)), 1));
        _add_2(_b, 2);
        return _sort_1([
          _fromContinuedFraction_1(_a),
          _fromContinuedFraction_1(_b),
        ]);
      }, ["each"]),
    );
  }, ["n", "r"]),
  "{ :n :r |\n\t\tn.unfoldTree(r) { :each |\n\t\t\tlet a = each.continuedFraction;\n\t\t\tlet b = a.copy;\n\t\t\ta[a.size] := a[a.size] + 1;\n\t\t\tb[a.size] := b[a.size] - 1;\n\t\t\tb.add(2);\n\t\t\t[a.fromContinuedFraction, b.fromContinuedFraction].sort\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "sternBrocotTree",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sternBrocotTree_2(_n, _Fraction_2(1n, 1n));
  }, ["n"]),
  "{ :n |\n\t\tn.sternBrocotTree(1/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tree",
  "unfoldTree",
  ["anInteger", "anObject", "aBlock:/1"],
  sl.annotateFunction(function (_anInteger, _anObject, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _anInteger, _anObject, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_anInteger, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Tree_2(_anObject, []);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _children = _aBlock_1(_anObject);
        /* Statements */
        return _Tree_2(
          _anObject,
          _collect_2(
            _children,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _unfoldTree_3(
                _hyphenMinus_2(_anInteger, 1),
                _each,
                _aBlock_1,
              );
            }, ["each"]),
          ),
        );
      }, []),
    );
  }, ["anInteger", "anObject", "aBlock:/1"]),
  "{ :anInteger :anObject :aBlock:/1 |\n\t\t(anInteger <= 1).if {\n\t\t\tTree(anObject, [])\n\t\t} {\n\t\t\tlet children = aBlock(anObject);\n\t\t\tTree(\n\t\t\t\tanObject,\n\t\t\t\tchildren.collect { :each |\n\t\t\t\t\t(anInteger - 1).unfoldTree(each, aBlock:/1)\n\t\t\t\t}\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Tree",
  "nestTree",
  ["aBlock:/1", "aTree", "depth"],
  sl.annotateFunction(function (_aBlock_1, _aTree, _depth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_1, _aTree, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_depth, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aTree;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isLeaf_1(_aTree),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Tree_2(
              _value_1(_aTree),
              _collect_2(
                _aBlock_1(_value_1(_aTree)),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _Tree_2(_each, []);
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
            return _nestTree_3(
              _aBlock_1,
              _Tree_2(
                _value_1(_aTree),
                _collect_2(
                  _subTrees_1(_aTree),
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _nestTree_3(_aBlock_1, _each, 1);
                  }, ["each"]),
                ),
              ),
              _hyphenMinus_2(_depth, 1),
            );
          }, []),
        );
      }, []),
    );
  }, ["aBlock:/1", "aTree", "depth"]),
  "{ :aBlock:/1 :aTree :depth |\n\t\t(depth = 0).if {\n\t\t\taTree\n\t\t} {\n\t\t\taTree.isLeaf.if {\n\t\t\t\tTree(\n\t\t\t\t\taTree.value,\n\t\t\t\t\taBlock(aTree.value).collect { :each |\n\t\t\t\t\t\tTree(each, [])\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tnestTree(\n\t\t\t\t\taBlock:/1,\n\t\t\t\t\tTree(\n\t\t\t\t\t\taTree.value,\n\t\t\t\t\t\taTree.subTrees.collect { :each |\n\t\t\t\t\t\t\tnestTree(aBlock:/1, each, 1)\n\t\t\t\t\t\t}\n\t\t\t\t\t),\n\t\t\t\t\tdepth - 1\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Tree",
  "randomTree",
  ["r", "n"],
  sl.annotateFunction(function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _fisherYatesShuffle_2(_iota_1(_n), _r);
    let _t = _Tree_2(_removeFirst_1(_p), []);
    let _f_2 = sl.annotateFunction(function (_l, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _l, _i";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _level_2(_t, [_l]),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _greaterThanSign_2(_i, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _j = _randomInteger_3(_r, [1, _i], []);
              /* Statements */
              _subTrees_2(
                _each,
                _collect_2(
                  _removeFirst_2(_p, _j),
                  sl.annotateFunction(function (_m) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _m";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _Tree_2(_m, []);
                  }, ["m"]),
                ),
              );
              return _i = _hyphenMinus_2(_i, _j);
            }, []),
          );
        }, ["each"]),
      );
      return _ifTrue_2(
        _greaterThanSign_2(_i, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _f_2(_plusSign_2(_l, 1), _i);
        }, []),
      );
    }, ["l", "i"]);
    /* Statements */
    _f_2(0, _hyphenMinus_2(_n, 1));
    return _t;
  }, ["r", "n"]),
  "{ :r :n |\n\t\tlet p = n.iota.fisherYatesShuffle(r);\n\t\tlet t = Tree(p.removeFirst, []);\n\t\tlet f = { :l :i |\n\t\t\tt.level([l]).do { :each |\n\t\t\t\t(i > 0).ifTrue {\n\t\t\t\t\tlet j = r.randomInteger([1, i], []);\n\t\t\t\t\teach.subTrees := p.removeFirst(j).collect { :m | Tree(m, []) };\n\t\t\t\t\ti := i - j\n\t\t\t\t}\n\t\t\t};\n\t\t\t(i > 0).ifTrue {\n\t\t\t\tf(l + 1, i)\n\t\t\t}\n\t\t};\n\t\tf(0, n - 1);\n\t\tt\n\t}",
);
