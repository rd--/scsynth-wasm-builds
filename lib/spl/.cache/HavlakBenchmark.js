/*  Requires: Benchmark  */

sl.addType(
  false,
  "BasicBlockEdge",
  "HavlakBenchmark",
  ["Object"],
  ["from", "to"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BasicBlockEdge",
);

sl.addMethodToExistingType(
  "BasicBlockEdge",
  "HavlakBenchmark",
  "initialize",
  ["self", "cfg", "fromName", "toName"],
  sl.annotateFunction(function (_self, _cfg, _fromName, _toName) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _cfg, _fromName, _toName";
      throw new Error(errorMessage);
    } /* Statements */
    _from_2(_self, _createNode_2(_cfg, _fromName));
    _to_2(_self, _createNode_2(_cfg, _toName));
    _addOutEdge_2(_from_1(_self), _to_1(_self));
    _addInEdge_2(_to_1(_self), _from_1(_self));
    _addEdge_2(_cfg, _self);
    return _self;
  }, ["self", "cfg", "fromName", "toName"]),
  "{ :self :cfg :fromName :toName |\n\t\tself.from := cfg.createNode(fromName);\n\t\tself.to := cfg.createNode(toName);\n\t\tself.from.addOutEdge(self.to);\n\t\tself.to.addInEdge(self.from);\n\t\tcfg.addEdge(self);\n\t\tself\n\t}",
);

sl.addType(
  false,
  "BasicBlock",
  "HavlakBenchmark",
  ["Object"],
  ["inEdges", "outEdges", "name"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BasicBlock",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "equalsSign",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_name_1(_self), _name_1(_other));
  }, ["self", "other"]),
  "{ :self :other |\n\t\tself.name = other.name\n\t}",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "initialize",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    _inEdges_2(_self, _List_0());
    _outEdges_2(_self, _List_0());
    _name_2(_self, _name);
    return _self;
  }, ["self", "name"]),
  "{ :self :name |\n\t\tself.inEdges := List();\n\t\tself.outEdges := List();\n\t\tself.name := name;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "isImmediate",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "numPred",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_inEdges_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.inEdges.size\n\t}",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "addOutEdge",
  ["self", "to"],
  sl.annotateFunction(function (_self, _to) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _to";
      throw new Error(errorMessage);
    } /* Statements */
    return _addLast_2(_outEdges_1(_self), _to);
  }, ["self", "to"]),
  "{ :self :to |\n\t\tself.outEdges.addLast(to)\n\t}",
);

sl.addMethodToExistingType(
  "BasicBlock",
  "HavlakBenchmark",
  "addInEdge",
  ["self", "from"],
  sl.annotateFunction(function (_self, _from) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _from";
      throw new Error(errorMessage);
    } /* Statements */
    return _addLast_2(_inEdges_1(_self), _from);
  }, ["self", "from"]),
  "{ :self :from |\n\t\tself.inEdges.addLast(from)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HavlakBenchmark",
  "BasicBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newBasicBlock_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewBasicBlock().initialize(self)\n\t}",
);

sl.addType(
  false,
  "ControlFlowGraph",
  "HavlakBenchmark",
  ["Object"],
  ["basicBlockMap", "startNode", "edgeList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ControlFlowGraph",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _basicBlockMap_2(_self, _List_0());
    _edgeList_2(_self, _List_0());
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.basicBlockMap := List();\n\t\tself.edgeList := List();\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "createNode",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _node = null;
    /* Statements */
    _if_3(
      _includesIndex_2(_basicBlockMap_1(_self), _name),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _node = _at_2(_basicBlockMap_1(_self), _name);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _node = _BasicBlock_1(_name);
        _ofSize_2(_basicBlockMap_1(_self), _name);
        return _atPut_3(_basicBlockMap_1(_self), _name, _node);
      }, []),
    );
    _ifTrue_2(
      _equalsSignEqualsSign_2(_numNodes_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _startNode_2(_self, _node);
      }, []),
    );
    return _node;
  }, ["self", "name"]),
  "{ :self :name |\n\t\tlet node = nil;\n\t\tself.basicBlockMap.includesIndex(name).if {\n\t\t\tnode := self.basicBlockMap[name]\n\t\t} {\n\t\t\tnode := BasicBlock(name);\n\t\t\tself.basicBlockMap.ofSize(name); /* grow array */\n\t\t\tself.basicBlockMap[name] := node\n\t\t};\n\t\t(self.numNodes == 1).ifTrue {\n\t\t\tself.startNode := node\n\t\t};\n\t\tnode\n\t}",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "addEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _addLast_2(_edgeList_1(_self), _edge);
  }, ["self", "edge"]),
  "{ :self :edge |\n\t\tself.edgeList.addLast(edge)\n\t}",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "numNodes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_basicBlockMap_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.basicBlockMap.size\n\t}",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "startBasicBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _startNode_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.startNode\n\t}",
);

sl.addMethodToExistingType(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "basicBlocks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicBlockMap_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.basicBlockMap\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "HavlakBenchmark",
  "ControlFlowGraph",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newControlFlowGraph_0());
  }, []),
  "{\n\t\tnewControlFlowGraph().initialize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "BasicBlockEdge",
  ["self", "fromName", "toName"],
  sl.annotateFunction(function (_self, _fromName, _toName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fromName, _toName";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_4(_newBasicBlockEdge_0(), _self, _fromName, _toName);
  }, ["self", "fromName", "toName"]),
  "{ :self :fromName :toName |\n\t\tnewBasicBlockEdge().initialize(self, fromName, toName)\n\t}",
);

sl.addType(
  false,
  "HavlakLoopFinder",
  "HavlakBenchmark",
  ["Object"],
  [
    "cfg",
    "lsg",
    "nonBackPreds",
    "backPreds",
    "number",
    "maxSize",
    "header",
    "type",
    "last",
    "nodes",
  ],
);

sl.copyTraitMethodsToType(
  "Object",
  "HavlakLoopFinder",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "initialize",
  ["self", "cfg", "lsg"],
  sl.annotateFunction(function (_self, _cfg, _lsg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _cfg, _lsg";
      throw new Error(errorMessage);
    } /* Statements */
    _cfg_2(_self, _cfg);
    _lsg_2(_self, _lsg);
    _nonBackPreds_2(_self, _List_0());
    _backPreds_2(_self, _List_0());
    _number_2(_self, _Map_0());
    _maxSize_2(_self, 0);
    return _self;
  }, ["self", "cfg", "lsg"]),
  "{ :self :cfg :lsg |\n\t\tself.cfg := cfg;\n\t\tself.lsg := lsg;\n\t\tself.nonBackPreds := List();\n\t\tself.backPreds := List();\n\t\tself.number := Map();\n\t\tself.maxSize := 0;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "unvisited",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2147483647;
  }, ["self"]),
  "{ :self |\n\t\t2147483647\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "maxNonBackPreds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(32, 1024);
  }, ["self"]),
  "{ :self |\n\t\t32 * 1024\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "isAncestorV",
  ["self", "w", "v"],
  sl.annotateFunction(function (_self, _w, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _w, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_w, _v),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_v, _at_2(_last_1(_self), _w));
      }, []),
    );
  }, ["self", "w", "v"]),
  "{ :self :w :v |\n\t\tw <= v & {\n\t\t\tv <= self.last[w]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "doDFSCurrent",
  ["self", "currentNode", "current"],
  sl.annotateFunction(function (_self, _currentNode, _current) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _currentNode, _current";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lastId = null;
    let _outerBlocks = null;
    /* Statements */
    _initNodeDfs_3(_at_2(_nodes_1(_self), _current), _currentNode, _current);
    _atPut_3(_number_1(_self), _currentNode, _current);
    _lastId = _current;
    _outerBlocks = _outEdges_1(_currentNode);
    _toDo_3(
      1,
      _size_1(_outerBlocks),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _target = _at_2(_outerBlocks, _i);
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_at_2(_number_1(_self), _target), _unvisited_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lastId = _doDFSCurrent_3(
              _self,
              _target,
              _plusSign_2(_lastId, 1),
            );
          }, []),
        );
      }, ["i"]),
    );
    _atPut_3(_last_1(_self), _current, _lastId);
    return _lastId;
  }, ["self", "currentNode", "current"]),
  "{ :self :currentNode :current |\n\t\tlet lastId = nil;\n\t\tlet outerBlocks = nil;\n\t\tself.nodes[current].initNodeDfs(currentNode, current);\n\t\tself.number[currentNode] := current;\n\t\tlastId := current;\n\t\touterBlocks := currentNode.outEdges;\n\t\t1.toDo(outerBlocks.size) { :i |\n\t\t\tlet target = outerBlocks[i];\n\t\t\t(self.number[target] = self.unvisited).ifTrue {\n\t\t\t\tlastId := self.doDFSCurrent(target, lastId + 1)\n\t\t\t}\n\t\t};\n\t\tself.last[current] := lastId;\n\t\tlastId\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "initAllNodes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _basicBlocks_1(_cfg_1(_self)),
      sl.annotateFunction(function (_bb) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _bb";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_number_1(_self), _bb, _unvisited_1(_self));
      }, ["bb"]),
    );
    return _doDFSCurrent_3(_self, _startBasicBlock_1(_cfg_1(_self)), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.cfg.basicBlocks.do { :bb |\n\t\t\tself.number[bb] := self.unvisited\n\t\t};\n\t\tself.doDFSCurrent(self.cfg.startBasicBlock, 1)\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "identifyEdges",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _size,
      sl.annotateFunction(function (_w) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _w";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nodeW = _bb_1(_at_2(_nodes_1(_self), _w));
        /* Statements */
        _atPut_3(_header_1(_self), _w, 1);
        _atPut_3(_type_1(_self), _w, "BBNonHeader");
        return _if_3(
          _isNil_1(_nodeW),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_type_1(_self), _w, "BBDead");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _processEdgesW_3(_self, _nodeW, _w);
          }, []),
        );
      }, ["w"]),
    );
  }, ["self", "size"]),
  "{ :self :size |\n\t\t1.toDo(size) { :w |\n\t\t\tlet nodeW = self.nodes[w].bb;\n\t\t\tself.header[w] := 1;\n\t\t\tself.type[w] := 'BBNonHeader';\n\t\t\tnodeW.isNil.if {\n\t\t\t\tself.type[w] := 'BBDead'\n\t\t\t} {\n\t\t\t\tself.processEdgesW(nodeW, w)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "processEdgesW",
  ["self", "nodeW", "w"],
  sl.annotateFunction(function (_self, _nodeW, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _nodeW, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _greaterThanSign_2(_numPred_1(_nodeW), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _inEdges_1(_nodeW),
          sl.annotateFunction(function (_nodeV) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _nodeV";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _v = _at_2(_number_1(_self), _nodeV);
            /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_v, _unvisited_1(_self)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _isAncestorV_3(_self, _w, _v),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _addLast_2(_at_2(_backPreds_1(_self), _w), _v);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _include_2(_at_2(_nonBackPreds_1(_self), _w), _v);
                  }, []),
                );
              }, []),
            );
          }, ["nodeV"]),
        );
      }, []),
    );
  }, ["self", "nodeW", "w"]),
  "{ :self :nodeW :w |\n\t\t(nodeW.numPred > 0 ).ifTrue {\n\t\t\tnodeW.inEdges.do { :nodeV |\n\t\t\t\tlet v = self.number[nodeV];\n\t\t\t\t(v != self.unvisited).ifTrue {\n\t\t\t\t\tself.isAncestorV(w, v).if {\n\t\t\t\t\t\tself.backPreds[w].addLast(v)\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.nonBackPreds[w].include(v)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "findLoops",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNil_1(_startBasicBlock_1(_cfg_1(_self))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _size = _numNodes_1(_cfg_1(_self));
          /* Statements */
          _removeAll_1(_nonBackPreds_1(_self));
          _removeAll_1(_backPreds_1(_self));
          _removeAll_1(_number_1(_self));
          _ifTrue_2(
            _greaterThanSign_2(_size, _maxSize_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _header_2(_self, _List_1(_size));
              _type_2(_self, _List_1(_size));
              _last_2(_self, _List_1(_size));
              _nodes_2(_self, _List_1(_size));
              return _maxSize_2(_self, _size);
            }, []),
          );
          _toDo_3(
            1,
            _size,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              _addLast_2(_nonBackPreds_1(_self), _IdentitySet_0());
              _addLast_2(_backPreds_1(_self), _List_0());
              return _atPut_3(_nodes_1(_self), _i, _UnionFindNode_0());
            }, ["i"]),
          );
          _initAllNodes_1(_self);
          _identifyEdges_2(_self, _size);
          _atPut_3(_header_1(_self), 1, 1);
          return _toByDo_4(
            _size,
            1,
            -1,
            sl.annotateFunction(function (_w) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _w";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _nodePool = _List_0();
              let _nodeW = _bb_1(_at_2(_nodes_1(_self), _w));
              /* Statements */
              return _ifTrue_2(
                _isNotNil_1(_nodeW),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _workList = _List_0();
                  /* Statements */
                  _stepDNodePool_3(_self, _w, _nodePool);
                  _do_2(
                    _nodePool,
                    sl.annotateFunction(function (_niter) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _niter";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _addLast_2(_workList, _niter);
                    }, ["niter"]),
                  );
                  _ifTrue_2(
                    _exclamationMarkEqualsSign_2(_size_1(_nodePool), 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _atPut_3(_type_1(_self), _w, "BBReducible");
                    }, []),
                  );
                  _whileFalse_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _isEmpty_1(_workList);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _x = _removeFirst_1(_workList);
                      let _nonBackSize = _size_1(
                        _at_2(_nonBackPreds_1(_self), _dfsNumber_1(_x)),
                      );
                      /* Statements */
                      _ifTrue_2(
                        _greaterThanSign_2(
                          _nonBackSize,
                          _maxNonBackPreds_1(_self),
                        ),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _return_1(_self);
                        }, []),
                      );
                      return _stepEProcessNonBackPredsNodePoolWorkListX_5(
                        _self,
                        _w,
                        _nodePool,
                        _workList,
                        _x,
                      );
                    }, []),
                  );
                  return _ifTrue_2(
                    _verticalLine_2(
                      _greaterThanSign_2(_size_1(_nodePool), 0),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _equalsSign_2(
                          _at_2(_type_1(_self), _w),
                          "BBSelf",
                        );
                      }, []),
                    ),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _loop = _createNewLoopReducible_3(
                        _lsg_1(_self),
                        _nodeW,
                        _exclamationMarkEqualsSign_2(
                          _at_2(_type_1(_self), _w),
                          "BBIrreducible",
                        ),
                      );
                      /* Statements */
                      return _setLoopAttributeNodePoolLoop_4(
                        _self,
                        _w,
                        _nodePool,
                        _loop,
                      );
                    }, []),
                  );
                }, []),
              );
            }, ["w"]),
          );
        }, ["return:/1"]));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cfg.startBasicBlock.isNil.if {\n\t\t\tself\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet size = self.cfg.numNodes;\n\t\t\t\tself.nonBackPreds.removeAll;\n\t\t\t\tself.backPreds.removeAll;\n\t\t\t\tself.number.removeAll;\n\t\t\t\t(size > self.maxSize).ifTrue {\n\t\t\t\t\tself.header := List(size);\n\t\t\t\t\tself.type := List(size);\n\t\t\t\t\tself.last := List(size);\n\t\t\t\t\tself.nodes := List(size);\n\t\t\t\t\tself.maxSize := size\n\t\t\t\t};\n\t\t\t\t1.toDo(size) { :i |\n\t\t\t\t\tself.nonBackPreds.addLast(IdentitySet());\n\t\t\t\t\tself.backPreds.addLast(List());\n\t\t\t\t\tself.nodes[i] := UnionFindNode()\n\t\t\t\t};\n\t\t\t\tself.initAllNodes;\n\t\t\t\tself.identifyEdges(size);\n\t\t\t\tself.header[1] := 1;\n\t\t\t\tsize.toByDo(1, -1) { :w |\n\t\t\t\t\tlet nodePool = List();\n\t\t\t\t\tlet nodeW = self.nodes[w].bb;\n\t\t\t\t\tnodeW.isNotNil.ifTrue {\n\t\t\t\t\t\tlet workList = List();\n\t\t\t\t\t\tself.stepDNodePool(w, nodePool);\n\t\t\t\t\t\tnodePool.do { :niter |\n\t\t\t\t\t\t\tworkList.addLast(niter)\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(nodePool.size != 0).ifTrue {\n\t\t\t\t\t\t\tself.type[w] := 'BBReducible'\n\t\t\t\t\t\t};\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tworkList.isEmpty\n\t\t\t\t\t\t}.whileFalse {\n\t\t\t\t\t\t\tlet x = workList.removeFirst;\n\t\t\t\t\t\t\tlet nonBackSize = self.nonBackPreds[x.dfsNumber].size;\n\t\t\t\t\t\t\t(nonBackSize > self.maxNonBackPreds).ifTrue {\n\t\t\t\t\t\t\t\tself.return\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tself.stepEProcessNonBackPredsNodePoolWorkListX(w, nodePool, workList, x)\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(nodePool.size > 0 | {\n\t\t\t\t\t\t\tself.type[w] = 'BBSelf'\n\t\t\t\t\t\t}).ifTrue {\n\t\t\t\t\t\t\tlet loop = self.lsg.createNewLoopReducible(nodeW, self.type[w] != 'BBIrreducible');\n\t\t\t\t\t\t\tself.setLoopAttributeNodePoolLoop(w, nodePool, loop)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "stepEProcessNonBackPredsNodePoolWorkListX",
  ["self", "w", "nodePool", "workList", "x"],
  sl.annotateFunction(function (_self, _w, _nodePool, _workList, _x) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _w, _nodePool, _workList, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _at_2(_nonBackPreds_1(_self), _dfsNumber_1(_x)),
      sl.annotateFunction(function (_iter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iter";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _at_2(_nodes_1(_self), _iter);
        let _ydash = _findSet_1(_y);
        /* Statements */
        return _if_3(
          _not_1(_isAncestorV_3(_self, _w, _dfsNumber_1(_ydash))),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_type_1(_self), _w, "BBIrreducible");
            return _include_2(
              _at_2(_nonBackPreds_1(_self), _w),
              _dfsNumber_1(_ydash),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_dfsNumber_1(_ydash), _w),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifFalse_2(
                  _anySatisfy_2(
                    _nodePool,
                    sl.annotateFunction(function (_each) {
                      /* ArityCheck */
                      if (arguments.length !== 1) {
                        const errorMessage = "Arity: expected 1, _each";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSignEqualsSign_2(_each, _ydash);
                    }, ["each"]),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _addLast_2(_workList, _ydash);
                    return _addLast_2(_nodePool, _ydash);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, ["iter"]),
    );
  }, ["self", "w", "nodePool", "workList", "x"]),
  "{ :self :w :nodePool :workList :x |\n\t\tself.nonBackPreds[x.dfsNumber].do { :iter |\n\t\t\tlet y = self.nodes[iter];\n\t\t\tlet ydash = y.findSet;\n\t\t\tself.isAncestorV(w, ydash. dfsNumber).not.if {\n\t\t\t\tself.type[w] := 'BBIrreducible';\n\t\t\t\tself.nonBackPreds[w].include(ydash.dfsNumber)\n\t\t\t} {\n\t\t\t\t(ydash.dfsNumber != w).ifTrue {\n\t\t\t\t\tnodePool.anySatisfy { :each |\n\t\t\t\t\t\teach == ydash\n\t\t\t\t\t}.ifFalse {\n\t\t\t\t\t\tworkList.addLast(ydash);\n\t\t\t\t\t\tnodePool.addLast(ydash)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "setLoopAttributeNodePoolLoop",
  ["self", "w", "nodePool", "loop"],
  sl.annotateFunction(function (_self, _w, _nodePool, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _w, _nodePool, _loop";
      throw new Error(errorMessage);
    } /* Statements */
    _loop_2(_at_2(_nodes_1(_self), _w), _loop);
    return _do_2(
      _nodePool,
      sl.annotateFunction(function (_node) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _node";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_header_1(_self), _dfsNumber_1(_node), _w);
        _union_2(_node, _at_2(_nodes_1(_self), _w));
        return _if_3(
          _isNotNil_1(_loop_1(_node)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _setParent_2(_loop_1(_node), _loop);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addNode_2(_loop, _bb_1(_node));
          }, []),
        );
      }, ["node"]),
    );
  }, ["self", "w", "nodePool", "loop"]),
  "{ :self :w :nodePool :loop |\n\t\tself.nodes[w].loop(loop);\n\t\tnodePool.do { :node |\n\t\t\tself.header[node.dfsNumber] := w;\n\t\t\tnode.union(self.nodes[w]);\n\t\t\tnode.loop.isNotNil.if {\n\t\t\t\tnode.loop.setParent(loop)\n\t\t\t} {\n\t\t\t\tloop.addNode(node.bb)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "stepDNodePool",
  ["self", "w", "nodePool"],
  sl.annotateFunction(function (_self, _w, _nodePool) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _w, _nodePool";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _at_2(_backPreds_1(_self), _w),
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _exclamationMarkEqualsSign_2(_v, _w),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(
              _nodePool,
              _findSet_1(_at_2(_nodes_1(_self), _v)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_type_1(_self), _w, "BBSelf");
          }, []),
        );
      }, ["v"]),
    );
  }, ["self", "w", "nodePool"]),
  "{ :self :w :nodePool |\n\t\tself.backPreds[w].do { :v |\n\t\t\t(v != w).if {\n\t\t\t\tnodePool.addLast(self.nodes[v].findSet)\n\t\t\t} {\n\t\t\t\tself.type[w] := 'BBSelf'\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "HavlakLoopFinder",
  ["self", "lsg"],
  sl.annotateFunction(function (_self, _lsg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lsg";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newHavlakLoopFinder_0(), _self, _lsg);
  }, ["self", "lsg"]),
  "{ :self :lsg |\n\t\tnewHavlakLoopFinder().initialize(self, lsg)\n\t}",
);

sl.addType(
  false,
  "LoopStructureGraph",
  "HavlakBenchmark",
  ["Object"],
  ["root", "loops", "loopCounter"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LoopStructureGraph",
);

sl.addMethodToExistingType(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _root_2(_self, _SimpleLoop_2(null, false));
    _loops_2(_self, _List_0());
    _loopCounter_2(_self, 0);
    _setNestingLevel_2(_root_1(_self), 0);
    _counter_2(_root_1(_self), _loopCounter_1(_self));
    _loopCounter_2(_self, _plusSign_2(_loopCounter_1(_self), 1));
    _addLast_2(_loops_1(_self), _root_1(_self));
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.root := SimpleLoop(nil, false);\n\t\tself.loops := List();\n\t\tself.loopCounter := 0;\n\t\tself.root.setNestingLevel(0);\n\t\tself.root.counter(self.loopCounter);\n\t\tself.loopCounter := self.loopCounter + 1;\n\t\tself.loops.addLast(self.root);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "createNewLoopReducible",
  ["self", "bb", "isReducible"],
  sl.annotateFunction(function (_self, _bb, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bb, _isReducible";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _loop = _SimpleLoop_2(_bb, _isReducible);
    /* Statements */
    _counter_2(_loop, _loopCounter_1(_self));
    _loopCounter_2(_self, _plusSign_2(_loopCounter_1(_self), 1));
    _addLast_2(_loops_1(_self), _loop);
    return _loop;
  }, ["self", "bb", "isReducible"]),
  "{ :self :bb :isReducible |\n\t\tlet loop = SimpleLoop(bb, isReducible);\n\t\tloop.counter(self.loopCounter);\n\t\tself.loopCounter := self.loopCounter + 1;\n\t\tself.loops.addLast(loop);\n\t\tloop\n\t}",
);

sl.addMethodToExistingType(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "calculateNestingLevel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _loops_1(_self),
      sl.annotateFunction(function (_liter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _liter";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _isRoot_1(_liter),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifNil_2(
              _parent_1(_liter),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _setParent_2(_liter, _root_1(_self));
              }, []),
            );
          }, []),
        );
      }, ["liter"]),
    );
    return _calculateNestingLevelRecDepth_3(_self, _root_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.loops.do { :liter |\n\t\t\tliter.isRoot.ifFalse {\n\t\t\t\tliter.parent.ifNil {\n\t\t\t\t\tliter.setParent(self.root)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.calculateNestingLevelRecDepth(self.root, 0)\n\t}",
);

sl.addMethodToExistingType(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "calculateNestingLevelRecDepth",
  ["self", "loop", "depth"],
  sl.annotateFunction(function (_self, _loop, _depth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _loop, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    _depthLevel_2(_loop, _depth);
    return _do_2(
      _children_1(_loop),
      sl.annotateFunction(function (_liter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _liter";
          throw new Error(errorMessage);
        } /* Statements */
        _calculateNestingLevelRecDepth_3(_self, _liter, _plusSign_2(_depth, 1));
        return _setNestingLevel_2(
          _loop,
          _max_2(
            _nestingLevel_1(_loop),
            _plusSign_2(1, _nestingLevel_1(_liter)),
          ),
        );
      }, ["liter"]),
    );
  }, ["self", "loop", "depth"]),
  "{ :self :loop :depth |\n\t\tloop.depthLevel(depth);\n\t\tloop.children.do { :liter |\n\t\t\tself.calculateNestingLevelRecDepth(liter, depth + 1);\n\t\t\tloop.setNestingLevel(loop.nestingLevel.max(1 + liter.nestingLevel))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "numLoops",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_loops_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.loops.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "HavlakBenchmark",
  "LoopStructureGraph",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newLoopStructureGraph_0());
  }, []),
  "{\n\t\tnewLoopStructureGraph().initialize\n\t}",
);

sl.addType(
  false,
  "LoopTesterApp",
  "HavlakBenchmark",
  ["Object"],
  ["cfg", "lsg"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LoopTesterApp",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _cfg_2(_self, _ControlFlowGraph_0());
    _lsg_2(_self, _LoopStructureGraph_0());
    _createNode_2(_cfg_1(_self), 1);
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.cfg := ControlFlowGraph();\n\t\tself.lsg := LoopStructureGraph();\n\t\tself.cfg.createNode(1);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildDiamond",
  ["self", "start"],
  sl.annotateFunction(function (_self, _start) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _start";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _bb0 = _start;
    /* Statements */
    _BasicBlockEdge_3(_cfg_1(_self), _bb0, _plusSign_2(_bb0, 1));
    _BasicBlockEdge_3(_cfg_1(_self), _bb0, _plusSign_2(_bb0, 2));
    _BasicBlockEdge_3(
      _cfg_1(_self),
      _plusSign_2(_bb0, 1),
      _plusSign_2(_bb0, 3),
    );
    _BasicBlockEdge_3(
      _cfg_1(_self),
      _plusSign_2(_bb0, 2),
      _plusSign_2(_bb0, 3),
    );
    return _plusSign_2(_bb0, 3);
  }, ["self", "start"]),
  "{ :self :start |\n\t\tlet bb0 = start;\n\t\tBasicBlockEdge(self.cfg, bb0, bb0 + 1);\n\t\tBasicBlockEdge(self.cfg, bb0, bb0 + 2);\n\t\tBasicBlockEdge(self.cfg, bb0 + 1, bb0 + 3);\n\t\tBasicBlockEdge(self.cfg, bb0 + 2, bb0 + 3);\n\t\tbb0 + 3\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildConnectEnd",
  ["self", "start", "end"],
  sl.annotateFunction(function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      throw new Error(errorMessage);
    } /* Statements */
    return _BasicBlockEdge_3(_cfg_1(_self), _start, _end);
  }, ["self", "start", "end"]),
  "{ :self :start :end |\n\t\tBasicBlockEdge(self.cfg, start, end)\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildStraightN",
  ["self", "start", "n"],
  sl.annotateFunction(function (_self, _start, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _buildConnectEnd_3(
          _self,
          _plusSign_2(_start, _i),
          _plusSign_2(_plusSign_2(_start, _i), 1),
        );
      }, ["i"]),
    );
    return _plusSign_2(_start, _n);
  }, ["self", "start", "n"]),
  "{ :self :start :n |\n\t\t0.toDo(n - 1) { :i |\n\t\t\tself.buildConnectEnd(start + i, start + i + 1)\n\t\t};\n\t\tstart + n\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildBaseLoop",
  ["self", "from"],
  sl.annotateFunction(function (_self, _from) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _from";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _header = _buildStraightN_3(_self, _from, 1);
    let _diamond1 = _buildDiamond_2(_self, _header);
    let _d11 = _buildStraightN_3(_self, _diamond1, 1);
    let _diamond2 = _buildDiamond_2(_self, _d11);
    let _footer = _buildStraightN_3(_self, _diamond2, 1);
    /* Statements */
    _buildConnectEnd_3(_self, _diamond2, _d11);
    _buildConnectEnd_3(_self, _diamond1, _header);
    _buildConnectEnd_3(_self, _footer, _from);
    _footer = _buildStraightN_3(_self, _footer, 1);
    return _footer;
  }, ["self", "from"]),
  "{ :self :from |\n\t\tlet header = self.buildStraightN(from, 1);\n\t\tlet diamond1 = self.buildDiamond(header);\n\t\tlet d11 = self.buildStraightN(diamond1, 1);\n\t\tlet diamond2 = self.buildDiamond(d11);\n\t\tlet footer = self.buildStraightN(diamond2,1);\n\t\tself.buildConnectEnd(diamond2, d11);\n\t\tself.buildConnectEnd(diamond1, header);\n\t\tself.buildConnectEnd(footer, from);\n\t\tfooter := self.buildStraightN(footer, 1);\n\t\tfooter\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "mainLoopPPP",
  [
    "self",
    "numDummyLoops",
    "findLoopIterations",
    "parLoop",
    "pparLoops",
    "ppparLoops",
  ],
  sl.annotateFunction(
    function (
      _self,
      _numDummyLoops,
      _findLoopIterations,
      _parLoop,
      _pparLoops,
      _ppparLoops,
    ) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _numDummyLoops, _findLoopIterations, _parLoop, _pparLoops, _ppparLoops";
        throw new Error(errorMessage);
      } /* Statements */
      _constructSimpleCFG_1(_self);
      _addDummyLoops_2(_self, _numDummyLoops);
      _constructCFGPP_4(_self, _parLoop, _pparLoops, _ppparLoops);
      _findLoops_2(_self, _lsg_1(_self));
      _timesRepeat_2(
        _findLoopIterations,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _findLoops_2(_self, _LoopStructureGraph_0());
        }, []),
      );
      _calculateNestingLevel_1(_lsg_1(_self));
      return [_numLoops_1(_lsg_1(_self)), _numNodes_1(_cfg_1(_self))];
    },
    [
      "self",
      "numDummyLoops",
      "findLoopIterations",
      "parLoop",
      "pparLoops",
      "ppparLoops",
    ],
  ),
  "{ :self :numDummyLoops :findLoopIterations :parLoop :pparLoops :ppparLoops |\n\t\tself.constructSimpleCFG;\n\t\tself.addDummyLoops(numDummyLoops);\n\t\tself.constructCFGPP(parLoop, pparLoops, ppparLoops);\n\t\tself.findLoops(self.lsg);\n\t\tfindLoopIterations.timesRepeat {\n\t\t\tself.findLoops(LoopStructureGraph())\n\t\t};\n\t\tself.lsg.calculateNestingLevel;\n\t\t[self.lsg.numLoops, self.cfg.numNodes]\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "constructCFGPP",
  ["self", "parLoops", "pparLoops", "ppparLoops"],
  sl.annotateFunction(function (_self, _parLoops, _pparLoops, _ppparLoops) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _parLoops, _pparLoops, _ppparLoops";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = 3;
    /* Statements */
    return _timesRepeat_2(
      _parLoops,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _createNode_2(_cfg_1(_self), _plusSign_2(_n, 1));
        _buildConnectEnd_3(_self, 2, _plusSign_2(_n, 1));
        _n = _plusSign_2(_n, 1);
        _timesRepeat_2(
          _pparLoops,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _top = _n;
            let _bottom = null;
            /* Statements */
            _n = _buildStraightN_3(_self, _n, 1);
            _timesRepeat_2(
              _ppparLoops,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _n = _buildBaseLoop_2(_self, _n);
              }, []),
            );
            _bottom = _buildStraightN_3(_self, _n, 1);
            _buildConnectEnd_3(_self, _n, _top);
            return _n = _bottom;
          }, []),
        );
        return _buildConnectEnd_3(_self, _n, 1);
      }, []),
    );
  }, ["self", "parLoops", "pparLoops", "ppparLoops"]),
  "{ :self :parLoops :pparLoops :ppparLoops |\n\t\tlet n = 3;\n\t\tparLoops.timesRepeat {\n\t\t\tself.cfg.createNode(n + 1);\n\t\t\tself.buildConnectEnd(2, n + 1);\n\t\t\tn := n + 1;\n\t\t\tpparLoops.timesRepeat {\n\t\t\t\tlet top = n;\n\t\t\t\tlet bottom = nil;\n\t\t\t\tn := self.buildStraightN(n, 1);\n\t\t\t\tppparLoops.timesRepeat {\n\t\t\t\t\tn := self.buildBaseLoop(n)\n\t\t\t\t};\n\t\t\t\tbottom := self.buildStraightN(n, 1);\n\t\t\t\tself.buildConnectEnd(n, top);\n\t\t\t\tn := bottom\n\t\t\t};\n\t\t\tself.buildConnectEnd(n, 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "addDummyLoops",
  ["self", "numDummyLoops"],
  sl.annotateFunction(function (_self, _numDummyLoops) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numDummyLoops";
      throw new Error(errorMessage);
    } /* Statements */
    return _timesRepeat_2(
      _numDummyLoops,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _findLoops_2(_self, _lsg_1(_self));
      }, []),
    );
  }, ["self", "numDummyLoops"]),
  "{ :self :numDummyLoops |\n\t\tnumDummyLoops.timesRepeat {\n\t\t\tself.findLoops(self.lsg)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "findLoops",
  ["self", "loopStructure"],
  sl.annotateFunction(function (_self, _loopStructure) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _loopStructure";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _finder = _HavlakLoopFinder_2(_cfg_1(_self), _loopStructure);
    /* Statements */
    return _findLoops_1(_finder);
  }, ["self", "loopStructure"]),
  "{ :self :loopStructure |\n\t\tlet finder = HavlakLoopFinder(self.cfg, loopStructure);\n\t\tfinder.findLoops\n\t}",
);

sl.addMethodToExistingType(
  "LoopTesterApp",
  "HavlakBenchmark",
  "constructSimpleCFG",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _createNode_2(_cfg_1(_self), 1);
    _buildBaseLoop_2(_self, 1);
    _createNode_2(_cfg_1(_self), 2);
    return _BasicBlockEdge_3(_cfg_1(_self), 1, 3);
  }, ["self"]),
  "{ :self |\n\t\tself.cfg.createNode(1);\n\t\tself.buildBaseLoop(1);\n\t\tself.cfg.createNode(2);\n\t\tBasicBlockEdge(self.cfg, 1, 3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "HavlakBenchmark",
  "LoopTesterApp",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newLoopTesterApp_0());
  }, []),
  "{\n\t\tnewLoopTesterApp().initialize\n\t}",
);

sl.addType(
  false,
  "SimpleLoop",
  "HavlakBenchmark",
  ["Object"],
  [
    "counter",
    "depthLevel",
    "parent",
    "isRoot",
    "nestingLevel",
    "header",
    "isReducible",
    "basicBlocks",
    "children",
  ],
);

sl.copyTraitMethodsToType(
  "Object",
  "SimpleLoop",
);

sl.addMethodToExistingType(
  "SimpleLoop",
  "HavlakBenchmark",
  "initialize",
  ["self", "aBB", "aBool"],
  sl.annotateFunction(function (_self, _aBB, _aBool) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBB, _aBool";
      throw new Error(errorMessage);
    } /* Statements */
    _counter_2(_self, 0);
    _depthLevel_2(_self, 0);
    _isRoot_2(_self, false);
    _nestingLevel_2(_self, 0);
    _header_2(_self, _aBB);
    _isReducible_2(_self, _aBool);
    _basicBlocks_2(_self, _IdentitySet_0());
    _children_2(_self, _IdentitySet_0());
    _ifNotNil_2(
      _aBB,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedInclude_2(_basicBlocks_1(_self), _aBB);
      }, []),
    );
    return _self;
  }, ["self", "aBB", "aBool"]),
  "{ :self :aBB :aBool |\n\t\tself.counter := 0;\n\t\tself.depthLevel := 0;\n\t\tself.isRoot := false;\n\t\tself.nestingLevel := 0;\n\t\tself.header := aBB;\n\t\tself.isReducible := aBool;\n\t\tself.basicBlocks := IdentitySet();\n\t\tself.children := IdentitySet();\n\t\taBB.ifNotNil {\n\t\t\tself.basicBlocks.uncheckedInclude(aBB)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SimpleLoop",
  "HavlakBenchmark",
  "addNode",
  ["self", "bb"],
  sl.annotateFunction(function (_self, _bb) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _bb";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedInclude_2(_basicBlocks_1(_self), _bb);
  }, ["self", "bb"]),
  "{ :self :bb |\n\t\tself.basicBlocks.uncheckedInclude(bb)\n\t}",
);

sl.addMethodToExistingType(
  "SimpleLoop",
  "HavlakBenchmark",
  "addChildLoop",
  ["self", "loop"],
  sl.annotateFunction(function (_self, _loop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _loop";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedInclude_2(_children_1(_self), _loop);
  }, ["self", "loop"]),
  "{ :self :loop |\n\t\tself.children.uncheckedInclude(loop)\n\t}",
);

sl.addMethodToExistingType(
  "SimpleLoop",
  "HavlakBenchmark",
  "setParent",
  ["self", "value"],
  sl.annotateFunction(function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    _parent_2(_self, _value);
    return _addChildLoop_2(_parent_1(_self), _self);
  }, ["self", "value"]),
  "{ :self :value |\n\t\tself.parent := value;\n\t\tself.parent.addChildLoop(self)\n\t}",
);

sl.addMethodToExistingType(
  "SimpleLoop",
  "HavlakBenchmark",
  "setNestingLevel",
  ["self", "level"],
  sl.annotateFunction(function (_self, _level) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _level";
      throw new Error(errorMessage);
    } /* Statements */
    _nestingLevel_2(_self, _level);
    return _ifTrue_2(
      _equalsSign_2(_level, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isRoot_2(_self, true);
      }, []),
    );
  }, ["self", "level"]),
  "{ :self :level |\n\t\tself.nestingLevel := level;\n\t\t(level = 0).ifTrue {\n\t\t\tself.isRoot := true\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Nil",
  "HavlakBenchmark",
  "SimpleLoop",
  ["self", "isReducible"],
  sl.annotateFunction(function (_self, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isReducible";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newSimpleLoop_0(), _self, _isReducible);
  }, ["self", "isReducible"]),
  "{ :self :isReducible |\n\t\tnewSimpleLoop().initialize(self, isReducible)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "SimpleLoop",
  ["self", "isReducible"],
  sl.annotateFunction(function (_self, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isReducible";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newSimpleLoop_0(), _self, _isReducible);
  }, ["self", "isReducible"]),
  "{ :self :isReducible |\n\t\tnewSimpleLoop().initialize(self, isReducible)\n\t}",
);

sl.addType(
  false,
  "UnionFindNode",
  "HavlakBenchmark",
  ["Object"],
  ["parent", "bb", "dfsNumber", "loop"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnionFindNode",
);

sl.addMethodToExistingType(
  "UnionFindNode",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _dfsNumber_2(_self, 0);
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.dfsNumber := 0;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "UnionFindNode",
  "HavlakBenchmark",
  "initNodeDfs",
  ["self", "bb", "dfsNumber"],
  sl.annotateFunction(function (_self, _bb, _dfsNumber) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bb, _dfsNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _parent_2(_self, _self);
    _bb_2(_self, _bb);
    return _dfsNumber_2(_self, _dfsNumber);
  }, ["self", "bb", "dfsNumber"]),
  "{ :self :bb :dfsNumber |\n\t\tself.parent := self;\n\t\tself.bb := bb;\n\t\tself.dfsNumber := dfsNumber\n\t}",
);

sl.addMethodToExistingType(
  "UnionFindNode",
  "HavlakBenchmark",
  "findSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nodeList = _List_0();
    let _node = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSignEqualsSign_2(_node, _parent_1(_node));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _exclamationMarkEqualsSignEqualsSign_2(
            _parent_1(_node),
            _parent_1(_parent_1(_node)),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_nodeList, _node);
          }, []),
        );
        return _node = _parent_1(_node);
      }, []),
    );
    _do_2(
      _nodeList,
      sl.annotateFunction(function (_iter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iter";
          throw new Error(errorMessage);
        } /* Statements */
        return _union_2(_iter, _parent_1(_self));
      }, ["iter"]),
    );
    return _node;
  }, ["self"]),
  "{ :self |\n\t\tlet nodeList = List();\n\t\tlet node = self;\n\t\t{\n\t\t\tnode !== node.parent\n\t\t}.whileTrue {\n\t\t\t(node.parent !== node.parent.parent).ifTrue {\n\t\t\t\tnodeList.addLast(node)\n\t\t\t};\n\t\t\tnode := node.parent\n\t\t};\n\t\tnodeList.do { :iter |\n\t\t\titer.union(self.parent)\n\t\t};\n\t\tnode\n\t}",
);

sl.addMethodToExistingType(
  "UnionFindNode",
  "HavlakBenchmark",
  "union",
  ["self", "basicBlock"],
  sl.annotateFunction(function (_self, _basicBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _basicBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _parent_2(_self, _basicBlock);
  }, ["self", "basicBlock"]),
  "{ :self :basicBlock |\n\t\tself.parent := basicBlock\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "HavlakBenchmark",
  "UnionFindNode",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newUnionFindNode_0());
  }, []),
  "{\n\t\tnewUnionFindNode().initialize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "HavlakBenchmark",
  "HavlakBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "Havlak",
      _Map_1([[1, [1605, 5213]], [15, [1647, 5213]], [150, [2052, 5213]], [
        1500,
        [6102, 5213],
      ], [15000, [46602, 5213]]]),
      sl.annotateFunction(function (_iterations) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iterations";
          throw new Error(errorMessage);
        } /* Statements */
        return _mainLoopPPP_6(_LoopTesterApp_0(), _iterations, 50, 10, 10, 5);
      }, ["iterations"]),
    );
  }, []),
  "{\n\t\tBenchmark('Havlak', [\n\t\t\t1: [1605, 5213],\n\t\t\t15: [1647, 5213],\n\t\t\t150: [2052, 5213],\n\t\t\t1500: [6102, 5213],\n\t\t\t15000: [46602, 5213]\n\t\t]) { :iterations |\n\t\t\tLoopTesterApp().mainLoopPPP(iterations, 50, 10, 10, 5)\n\t\t}\n\t}",
);
