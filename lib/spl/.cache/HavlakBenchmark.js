/* {- Requires: Benchmark -} */

sl.addType(
  false,
  "BasicBlockEdge",
  "HavlakBenchmark",
  ["Object"],
  ["from", "to"],
);

sl.copyTraitToType(
  "Object",
  "BasicBlockEdge",
);

sl.addMethod(
  "BasicBlockEdge",
  "HavlakBenchmark",
  "initialize",
  ["self", "cfg", "fromName", "toName"],
  function (_self, _cfg, _fromName, _toName) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _cfg, _fromName, _toName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _from_2(_self, _createNode_2(_cfg, _fromName));
    _to_2(_self, _createNode_2(_cfg, _toName));
    _addOutEdge_2(_from_1(_self), _to_1(_self));
    _addInEdge_2(_to_1(_self), _from_1(_self));
    _addEdge_2(_cfg, _self);
    return _self;
  },
  "{ :self :cfg :fromName :toName |\n\t\tself.from := cfg.createNode(fromName);\n\t\tself.to := cfg.createNode(toName);\n\t\tself.from.addOutEdge(self.to);\n\t\tself.to.addInEdge(self.from);\n\t\tcfg.addEdge(self);\n\t\tself\n\t}",
);

sl.addType(
  false,
  "BasicBlock",
  "HavlakBenchmark",
  ["Object"],
  ["inEdges", "outEdges", "name"],
);

sl.copyTraitToType(
  "Object",
  "BasicBlock",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "equalsSign",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_name_1(_self), _name_1(_other));
  },
  "{ :self :other |\n\t\tself.name = other.name\n\t}",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "initialize",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _inEdges_2(_self, _List_0());
    _outEdges_2(_self, _List_0());
    _name_2(_self, _name);
    return _self;
  },
  "{ :self :name |\n\t\tself.inEdges := List();\n\t\tself.outEdges := List();\n\t\tself.name := name;\n\t\tself\n\t}",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "numPred",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_inEdges_1(_self));
  },
  "{ :self |\n\t\tself.inEdges.size\n\t}",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "addOutEdge",
  ["self", "to"],
  function (_self, _to) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _to";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addLast_2(_outEdges_1(_self), _to);
  },
  "{ :self :to |\n\t\tself.outEdges.addLast(to)\n\t}",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "addInEdge",
  ["self", "from"],
  function (_self, _from) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _from";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addLast_2(_inEdges_1(_self), _from);
  },
  "{ :self :from |\n\t\tself.inEdges.addLast(from)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "HavlakBenchmark",
  "BasicBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newBasicBlock_0(), _self);
  },
  "{ :self |\n\t\tnewBasicBlock().initialize(self)\n\t}",
);

sl.addType(
  false,
  "ControlFlowGraph",
  "HavlakBenchmark",
  ["Object"],
  ["basicBlockMap", "startNode", "edgeList"],
);

sl.copyTraitToType(
  "Object",
  "ControlFlowGraph",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _basicBlockMap_2(_self, _List_0());
    _edgeList_2(_self, _List_0());
    return _self;
  },
  "{ :self |\n\t\tself.basicBlockMap := List();\n\t\tself.edgeList := List();\n\t\tself\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "createNode",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _node = null;
    /* Statements */
    _if_3(_includesIndex_2(_basicBlockMap_1(_self), _name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _node = _at_2(_basicBlockMap_1(_self), _name);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _node = _BasicBlock_1(_name);
      _ofSize_2(_basicBlockMap_1(_self), _name);
      return _atPut_3(_basicBlockMap_1(_self), _name, _node);
    });
    _ifTrue_2(_equalsSignEqualsSign_2(_numNodes_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _startNode_2(_self, _node);
    });
    return _node;
  },
  "{ :self :name |\n\t\tlet node = nil;\n\t\tself.basicBlockMap.includesIndex(name).if {\n\t\t\tnode := self.basicBlockMap[name]\n\t\t} {\n\t\t\tnode := BasicBlock(name);\n\t\t\tself.basicBlockMap.ofSize(name); {- grow array -}\n\t\t\tself.basicBlockMap[name] := node\n\t\t};\n\t\t(self.numNodes == 1).ifTrue {\n\t\t\tself.startNode := node\n\t\t};\n\t\tnode\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
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
    return _addLast_2(_edgeList_1(_self), _edge);
  },
  "{ :self :edge |\n\t\tself.edgeList.addLast(edge)\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "numNodes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_basicBlockMap_1(_self));
  },
  "{ :self |\n\t\tself.basicBlockMap.size\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "startBasicBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _startNode_1(_self);
  },
  "{ :self |\n\t\tself.startNode\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "basicBlocks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicBlockMap_1(_self);
  },
  "{ :self |\n\t\tself.basicBlockMap\n\t}",
);

sl.addMethod(
  "Void",
  "HavlakBenchmark",
  "ControlFlowGraph",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newControlFlowGraph_0());
  },
  "{\n\t\tnewControlFlowGraph().initialize\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "BasicBlockEdge",
  ["self", "fromName", "toName"],
  function (_self, _fromName, _toName) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fromName, _toName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_4(_newBasicBlockEdge_0(), _self, _fromName, _toName);
  },
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

sl.copyTraitToType(
  "Object",
  "HavlakLoopFinder",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "initialize",
  ["self", "cfg", "lsg"],
  function (_self, _cfg, _lsg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _cfg, _lsg";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _cfg_2(_self, _cfg);
    _lsg_2(_self, _lsg);
    _nonBackPreds_2(_self, _List_0());
    _backPreds_2(_self, _List_0());
    _number_2(_self, _Map_0());
    _maxSize_2(_self, 0);
    return _self;
  },
  "{ :self :cfg :lsg |\n\t\tself.cfg := cfg;\n\t\tself.lsg := lsg;\n\t\tself.nonBackPreds := List();\n\t\tself.backPreds := List();\n\t\tself.number := Map();\n\t\tself.maxSize := 0;\n\t\tself\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "unvisited",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 2147483647;
  },
  "{ :self |\n\t\t2147483647\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "maxNonBackPreds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(32, 1024);
  },
  "{ :self |\n\t\t32 * 1024\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "isAncestorV",
  ["self", "w", "v"],
  function (_self, _w, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _w, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_lessThanSignEqualsSign_2(_w, _v), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_v, _at_2(_last_1(_self), _w));
    });
  },
  "{ :self :w :v |\n\t\tw <= v & {\n\t\t\tv <= self.last[w]\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "doDFSCurrent",
  ["self", "currentNode", "current"],
  function (_self, _currentNode, _current) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _currentNode, _current";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lastId = null;
    let _outerBlocks = null;
    /* Statements */
    _initNodeDfs_3(_at_2(_nodes_1(_self), _current), _currentNode, _current);
    _atPut_3(_number_1(_self), _currentNode, _current);
    _lastId = _current;
    _outerBlocks = _outEdges_1(_currentNode);
    _toDo_3(1, _size_1(_outerBlocks), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _target = _at_2(_outerBlocks, _i);
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_at_2(_number_1(_self), _target), _unvisited_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lastId = _doDFSCurrent_3(
            _self,
            _target,
            _plusSign_2(_lastId, 1),
          );
        },
      );
    });
    _atPut_3(_last_1(_self), _current, _lastId);
    return _lastId;
  },
  "{ :self :currentNode :current |\n\t\tlet lastId = nil;\n\t\tlet outerBlocks = nil;\n\t\tself.nodes[current].initNodeDfs(currentNode, current);\n\t\tself.number[currentNode] := current;\n\t\tlastId := current;\n\t\touterBlocks := currentNode.outEdges;\n\t\t1.toDo(outerBlocks.size) { :i |\n\t\t\tlet target = outerBlocks[i];\n\t\t\t(self.number[target] = self.unvisited).ifTrue {\n\t\t\t\tlastId := self.doDFSCurrent(target, lastId + 1)\n\t\t\t}\n\t\t};\n\t\tself.last[current] := lastId;\n\t\tlastId\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "initAllNodes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_basicBlocks_1(_cfg_1(_self)), function (_bb) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _bb";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_number_1(_self), _bb, _unvisited_1(_self));
    });
    return _doDFSCurrent_3(_self, _startBasicBlock_1(_cfg_1(_self)), 1);
  },
  "{ :self |\n\t\tself.cfg.basicBlocks.do { :bb |\n\t\t\tself.number[bb] := self.unvisited\n\t\t};\n\t\tself.doDFSCurrent(self.cfg.startBasicBlock, 1)\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "identifyEdges",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(1, _size, function (_w) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _w";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _nodeW = _bb_1(_at_2(_nodes_1(_self), _w));
      /* Statements */
      _atPut_3(_header_1(_self), _w, 1);
      _atPut_3(_type_1(_self), _w, "BBNonHeader");
      return _if_3(_isNil_1(_nodeW), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_type_1(_self), _w, "BBDead");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _processEdgesW_3(_self, _nodeW, _w);
      });
    });
  },
  "{ :self :size |\n\t\t1.toDo(size) { :w |\n\t\t\tlet nodeW = self.nodes[w].bb;\n\t\t\tself.header[w] := 1;\n\t\t\tself.type[w] := 'BBNonHeader';\n\t\t\tnodeW.isNil.if {\n\t\t\t\tself.type[w] := 'BBDead'\n\t\t\t} {\n\t\t\t\tself.processEdgesW(nodeW, w)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "processEdgesW",
  ["self", "nodeW", "w"],
  function (_self, _nodeW, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _nodeW, _w";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_greaterThanSign_2(_numPred_1(_nodeW), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_inEdges_1(_nodeW), function (_nodeV) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _nodeV";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _v = _at_2(_number_1(_self), _nodeV);
        /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(_v, _unvisited_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_isAncestorV_3(_self, _w, _v), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _addLast_2(_at_2(_backPreds_1(_self), _w), _v);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _include_2(_at_2(_nonBackPreds_1(_self), _w), _v);
            });
          },
        );
      });
    });
  },
  "{ :self :nodeW :w |\n\t\t(nodeW.numPred > 0 ).ifTrue {\n\t\t\tnodeW.inEdges.do { :nodeV |\n\t\t\t\tlet v = self.number[nodeV];\n\t\t\t\t(v ~= self.unvisited).ifTrue {\n\t\t\t\t\tself.isAncestorV(w, v).if {\n\t\t\t\t\t\tself.backPreds[w].addLast(v)\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.nonBackPreds[w].include(v)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "findLoops",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNil_1(_startBasicBlock_1(_cfg_1(_self))), function () {
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
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _size = _numNodes_1(_cfg_1(_self));
        /* Statements */
        _removeAll_1(_nonBackPreds_1(_self));
        _removeAll_1(_backPreds_1(_self));
        _removeAll_1(_number_1(_self));
        _ifTrue_2(_greaterThanSign_2(_size, _maxSize_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _header_2(_self, _List_1(_size));
          _type_2(_self, _List_1(_size));
          _last_2(_self, _List_1(_size));
          _nodes_2(_self, _List_1(_size));
          return _maxSize_2(_self, _size);
        });
        _toDo_3(1, _size, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _addLast_2(_nonBackPreds_1(_self), _Set_0());
          _addLast_2(_backPreds_1(_self), _List_0());
          return _atPut_3(_nodes_1(_self), _i, _UnionFindNode_0());
        });
        _initAllNodes_1(_self);
        _identifyEdges_2(_self, _size);
        _atPut_3(_header_1(_self), 1, 1);
        return _toByDo_4(_size, 1, -1, function (_w) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _w";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _nodePool = _List_0();
          let _nodeW = _bb_1(_at_2(_nodes_1(_self), _w));
          /* Statements */
          return _ifTrue_2(_notNil_1(_nodeW), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _workList = _List_0();
            /* Statements */
            _stepDNodePool_3(_self, _w, _nodePool);
            _do_2(_nodePool, function (_niter) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _niter";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _addLast_2(_workList, _niter);
            });
            _ifTrue_2(_tildeEqualsSign_2(_size_1(_nodePool), 0), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _atPut_3(_type_1(_self), _w, "BBReducible");
            });
            _whileFalse_2(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _isEmpty_1(_workList);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Temporaries */
              let _x = _removeFirst_1(_workList);
              let _nonBackSize = _size_1(
                _at_2(_nonBackPreds_1(_self), _dfsNumber_1(_x)),
              );
              /* Statements */
              _ifTrue_2(
                _greaterThanSign_2(_nonBackSize, _maxNonBackPreds_1(_self)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _return_1(_self);
                },
              );
              return _stepEProcessNonBackPredsNodePoolWorkListX_5(
                _self,
                _w,
                _nodePool,
                _workList,
                _x,
              );
            });
            return _ifTrue_2(
              _verticalLine_2(
                _greaterThanSign_2(_size_1(_nodePool), 0),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _equalsSign_2(_at_2(_type_1(_self), _w), "BBSelf");
                },
              ),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Temporaries */
                let _loop = _createNewLoopReducible_3(
                  _lsg_1(_self),
                  _nodeW,
                  _tildeEqualsSign_2(
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
              },
            );
          });
        });
      });
    });
  },
  "{ :self |\n\t\tself.cfg.startBasicBlock.isNil.if {\n\t\t\tself\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet size = self.cfg.numNodes;\n\t\t\t\tself.nonBackPreds.removeAll;\n\t\t\t\tself.backPreds.removeAll;\n\t\t\t\tself.number.removeAll;\n\t\t\t\t(size > self.maxSize).ifTrue {\n\t\t\t\t\tself.header := List(size);\n\t\t\t\t\tself.type := List(size);\n\t\t\t\t\tself.last := List(size);\n\t\t\t\t\tself.nodes := List(size);\n\t\t\t\t\tself.maxSize := size\n\t\t\t\t};\n\t\t\t\t1.toDo(size) { :i |\n\t\t\t\t\tself.nonBackPreds.addLast(Set());\n\t\t\t\t\tself.backPreds.addLast(List());\n\t\t\t\t\tself.nodes[i] := UnionFindNode()\n\t\t\t\t};\n\t\t\t\tself.initAllNodes;\n\t\t\t\tself.identifyEdges(size);\n\t\t\t\tself.header[1] := 1;\n\t\t\t\tsize.toByDo(1, -1) { :w |\n\t\t\t\t\tlet nodePool = List();\n\t\t\t\t\tlet nodeW = self.nodes[w].bb;\n\t\t\t\t\tnodeW.notNil.ifTrue {\n\t\t\t\t\t\tlet workList = List();\n\t\t\t\t\t\tself.stepDNodePool(w, nodePool);\n\t\t\t\t\t\tnodePool.do { :niter |\n\t\t\t\t\t\t\tworkList.addLast(niter)\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(nodePool.size ~= 0).ifTrue {\n\t\t\t\t\t\t\tself.type[w] := 'BBReducible'\n\t\t\t\t\t\t};\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tworkList.isEmpty\n\t\t\t\t\t\t}.whileFalse {\n\t\t\t\t\t\t\tlet x = workList.removeFirst;\n\t\t\t\t\t\t\tlet nonBackSize = self.nonBackPreds[x.dfsNumber].size;\n\t\t\t\t\t\t\t(nonBackSize > self.maxNonBackPreds).ifTrue {\n\t\t\t\t\t\t\t\tself.return\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tself.stepEProcessNonBackPredsNodePoolWorkListX(w, nodePool, workList, x)\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(nodePool.size > 0 | {\n\t\t\t\t\t\t\tself.type[w] = 'BBSelf'\n\t\t\t\t\t\t}).ifTrue {\n\t\t\t\t\t\t\tlet loop = self.lsg.createNewLoopReducible(nodeW, self.type[w] ~= 'BBIrreducible');\n\t\t\t\t\t\t\tself.setLoopAttributeNodePoolLoop(w, nodePool, loop)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "stepEProcessNonBackPredsNodePoolWorkListX",
  ["self", "w", "nodePool", "workList", "x"],
  function (_self, _w, _nodePool, _workList, _x) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _w, _nodePool, _workList, _x";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(
      _at_2(_nonBackPreds_1(_self), _dfsNumber_1(_x)),
      function (_iter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iter";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _y = _at_2(_nodes_1(_self), _iter);
        let _ydash = _findSet_1(_y);
        /* Statements */
        return _if_3(
          _not_1(_isAncestorV_3(_self, _w, _dfsNumber_1(_ydash))),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _atPut_3(_type_1(_self), _w, "BBIrreducible");
            return _include_2(
              _at_2(_nonBackPreds_1(_self), _w),
              _dfsNumber_1(_ydash),
            );
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _ifTrue_2(
              _tildeEqualsSign_2(_dfsNumber_1(_ydash), _w),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _ifFalse_2(
                  _anySatisfy_2(_nodePool, function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      console.error(errorMessage);
                      throw new Error(errorMessage);
                    }
                    /* Statements */
                    return _equalsSignEqualsSign_2(_each, _ydash);
                  }),
                  function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      console.error(errorMessage);
                      throw new Error(errorMessage);
                    }
                    /* Statements */
                    _addLast_2(_workList, _ydash);
                    return _addLast_2(_nodePool, _ydash);
                  },
                );
              },
            );
          },
        );
      },
    );
  },
  "{ :self :w :nodePool :workList :x |\n\t\tself.nonBackPreds[x.dfsNumber].do { :iter |\n\t\t\tlet y = self.nodes[iter];\n\t\t\tlet ydash = y.findSet;\n\t\t\tself.isAncestorV(w, ydash. dfsNumber).not.if {\n\t\t\t\tself.type[w] := 'BBIrreducible';\n\t\t\t\tself.nonBackPreds[w].include(ydash.dfsNumber)\n\t\t\t} {\n\t\t\t\t(ydash.dfsNumber ~= w).ifTrue {\n\t\t\t\t\tnodePool.anySatisfy { :each |\n\t\t\t\t\t\teach == ydash\n\t\t\t\t\t}.ifFalse {\n\t\t\t\t\t\tworkList.addLast(ydash);\n\t\t\t\t\t\tnodePool.addLast(ydash)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "setLoopAttributeNodePoolLoop",
  ["self", "w", "nodePool", "loop"],
  function (_self, _w, _nodePool, _loop) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _w, _nodePool, _loop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _loop_2(_at_2(_nodes_1(_self), _w), _loop);
    return _do_2(_nodePool, function (_node) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _node";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_header_1(_self), _dfsNumber_1(_node), _w);
      _union_2(_node, _at_2(_nodes_1(_self), _w));
      return _if_3(_notNil_1(_loop_1(_node)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _setParent_2(_loop_1(_node), _loop);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addNode_2(_loop, _bb_1(_node));
      });
    });
  },
  "{ :self :w :nodePool :loop |\n\t\tself.nodes[w].loop(loop);\n\t\tnodePool.do { :node |\n\t\t\tself.header[node.dfsNumber] := w;\n\t\t\tnode.union(self.nodes[w]);\n\t\t\tnode.loop.notNil.if {\n\t\t\t\tnode.loop.setParent(loop)\n\t\t\t} {\n\t\t\t\tloop.addNode(node.bb)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "HavlakLoopFinder",
  "HavlakBenchmark",
  "stepDNodePool",
  ["self", "w", "nodePool"],
  function (_self, _w, _nodePool) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _w, _nodePool";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_at_2(_backPreds_1(_self), _w), function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_tildeEqualsSign_2(_v, _w), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addLast_2(_nodePool, _findSet_1(_at_2(_nodes_1(_self), _v)));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_type_1(_self), _w, "BBSelf");
      });
    });
  },
  "{ :self :w :nodePool |\n\t\tself.backPreds[w].do { :v |\n\t\t\t(v ~= w).if {\n\t\t\t\tnodePool.addLast(self.nodes[v].findSet)\n\t\t\t} {\n\t\t\t\tself.type[w] := 'BBSelf'\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "ControlFlowGraph",
  "HavlakBenchmark",
  "HavlakLoopFinder",
  ["self", "lsg"],
  function (_self, _lsg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lsg";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newHavlakLoopFinder_0(), _self, _lsg);
  },
  "{ :self :lsg |\n\t\tnewHavlakLoopFinder().initialize(self, lsg)\n\t}",
);

sl.addType(
  false,
  "LoopStructureGraph",
  "HavlakBenchmark",
  ["Object"],
  ["root", "loops", "loopCounter"],
);

sl.copyTraitToType(
  "Object",
  "LoopStructureGraph",
);

sl.addMethod(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _root_2(_self, _SimpleLoop_2(null, false));
    _loops_2(_self, _List_0());
    _loopCounter_2(_self, 0);
    _setNestingLevel_2(_root_1(_self), 0);
    _counter_2(_root_1(_self), _loopCounter_1(_self));
    _loopCounter_2(_self, _plusSign_2(_loopCounter_1(_self), 1));
    _addLast_2(_loops_1(_self), _root_1(_self));
    return _self;
  },
  "{ :self |\n\t\tself.root := SimpleLoop(nil, false);\n\t\tself.loops := List();\n\t\tself.loopCounter := 0;\n\t\tself.root.setNestingLevel(0);\n\t\tself.root.counter(self.loopCounter);\n\t\tself.loopCounter := self.loopCounter + 1;\n\t\tself.loops.addLast(self.root);\n\t\tself\n\t}",
);

sl.addMethod(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "createNewLoopReducible",
  ["self", "bb", "isReducible"],
  function (_self, _bb, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bb, _isReducible";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _loop = _SimpleLoop_2(_bb, _isReducible);
    /* Statements */
    _counter_2(_loop, _loopCounter_1(_self));
    _loopCounter_2(_self, _plusSign_2(_loopCounter_1(_self), 1));
    _addLast_2(_loops_1(_self), _loop);
    return _loop;
  },
  "{ :self :bb :isReducible |\n\t\tlet loop = SimpleLoop(bb, isReducible);\n\t\tloop.counter(self.loopCounter);\n\t\tself.loopCounter := self.loopCounter + 1;\n\t\tself.loops.addLast(loop);\n\t\tloop\n\t}",
);

sl.addMethod(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "calculateNestingLevel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_loops_1(_self), function (_liter) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _liter";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifFalse_2(_isRoot_1(_liter), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifNil_2(_parent_1(_liter), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _setParent_2(_liter, _root_1(_self));
        });
      });
    });
    return _calculateNestingLevelRecDepth_3(_self, _root_1(_self), 0);
  },
  "{ :self |\n\t\tself.loops.do { :liter |\n\t\t\tliter.isRoot.ifFalse {\n\t\t\t\tliter.parent.ifNil {\n\t\t\t\t\tliter.setParent(self.root)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself.calculateNestingLevelRecDepth(self.root, 0)\n\t}",
);

sl.addMethod(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "calculateNestingLevelRecDepth",
  ["self", "loop", "depth"],
  function (_self, _loop, _depth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _loop, _depth";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _depthLevel_2(_loop, _depth);
    return _do_2(_children_1(_loop), function (_liter) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _liter";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _calculateNestingLevelRecDepth_3(_self, _liter, _plusSign_2(_depth, 1));
      return _setNestingLevel_2(
        _loop,
        _max_2(_nestingLevel_1(_loop), _plusSign_2(1, _nestingLevel_1(_liter))),
      );
    });
  },
  "{ :self :loop :depth |\n\t\tloop.depthLevel(depth);\n\t\tloop.children.do { :liter |\n\t\t\tself.calculateNestingLevelRecDepth(liter, depth + 1);\n\t\t\tloop.setNestingLevel(loop.nestingLevel.max(1 + liter.nestingLevel))\n\t\t}\n\t}",
);

sl.addMethod(
  "LoopStructureGraph",
  "HavlakBenchmark",
  "numLoops",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_loops_1(_self));
  },
  "{ :self |\n\t\tself.loops.size\n\t}",
);

sl.addMethod(
  "Void",
  "HavlakBenchmark",
  "LoopStructureGraph",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newLoopStructureGraph_0());
  },
  "{\n\t\tnewLoopStructureGraph().initialize\n\t}",
);

sl.addType(
  false,
  "LoopTesterApp",
  "HavlakBenchmark",
  ["Object"],
  ["cfg", "lsg"],
);

sl.copyTraitToType(
  "Object",
  "LoopTesterApp",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _cfg_2(_self, _ControlFlowGraph_0());
    _lsg_2(_self, _LoopStructureGraph_0());
    _createNode_2(_cfg_1(_self), 1);
    return _self;
  },
  "{ :self |\n\t\tself.cfg := ControlFlowGraph();\n\t\tself.lsg := LoopStructureGraph();\n\t\tself.cfg.createNode(1);\n\t\tself\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildDiamond",
  ["self", "start"],
  function (_self, _start) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _start";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :self :start |\n\t\tlet bb0 = start;\n\t\tBasicBlockEdge(self.cfg, bb0, bb0 + 1);\n\t\tBasicBlockEdge(self.cfg, bb0, bb0 + 2);\n\t\tBasicBlockEdge(self.cfg, bb0 + 1, bb0 + 3);\n\t\tBasicBlockEdge(self.cfg, bb0 + 2, bb0 + 3);\n\t\tbb0 + 3\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildConnectEnd",
  ["self", "start", "end"],
  function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BasicBlockEdge_3(_cfg_1(_self), _start, _end);
  },
  "{ :self :start :end |\n\t\tBasicBlockEdge(self.cfg, start, end)\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildStraightN",
  ["self", "start", "n"],
  function (_self, _start, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _toDo_3(0, _hyphenMinus_2(_n, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _buildConnectEnd_3(
        _self,
        _plusSign_2(_start, _i),
        _plusSign_2(_plusSign_2(_start, _i), 1),
      );
    });
    return _plusSign_2(_start, _n);
  },
  "{ :self :start :n |\n\t\t0.toDo(n - 1) { :i |\n\t\t\tself.buildConnectEnd(start + i, start + i + 1)\n\t\t};\n\t\tstart + n\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "buildBaseLoop",
  ["self", "from"],
  function (_self, _from) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _from";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :self :from |\n\t\tlet header = self.buildStraightN(from, 1);\n\t\tlet diamond1 = self.buildDiamond(header);\n\t\tlet d11 = self.buildStraightN(diamond1, 1);\n\t\tlet diamond2 = self.buildDiamond(d11);\n\t\tlet footer = self.buildStraightN(diamond2,1);\n\t\tself.buildConnectEnd(diamond2, d11);\n\t\tself.buildConnectEnd(diamond1, header);\n\t\tself.buildConnectEnd(footer, from);\n\t\tfooter := self.buildStraightN(footer, 1);\n\t\tfooter\n\t}",
);

sl.addMethod(
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _constructSimpleCFG_1(_self);
    _addDummyLoops_2(_self, _numDummyLoops);
    _constructCFGPP_4(_self, _parLoop, _pparLoops, _ppparLoops);
    _findLoops_2(_self, _lsg_1(_self));
    _timesRepeat_2(_findLoopIterations, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _findLoops_2(_self, _LoopStructureGraph_0());
    });
    _calculateNestingLevel_1(_lsg_1(_self));
    return [_numLoops_1(_lsg_1(_self)), _numNodes_1(_cfg_1(_self))];
  },
  "{ :self :numDummyLoops :findLoopIterations :parLoop :pparLoops :ppparLoops |\n\t\tself.constructSimpleCFG;\n\t\tself.addDummyLoops(numDummyLoops);\n\t\tself.constructCFGPP(parLoop, pparLoops, ppparLoops);\n\t\tself.findLoops(self.lsg);\n\t\tfindLoopIterations.timesRepeat {\n\t\t\tself.findLoops(LoopStructureGraph())\n\t\t};\n\t\tself.lsg.calculateNestingLevel;\n\t\t[self.lsg.numLoops, self.cfg.numNodes]\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "constructCFGPP",
  ["self", "parLoops", "pparLoops", "ppparLoops"],
  function (_self, _parLoops, _pparLoops, _ppparLoops) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _parLoops, _pparLoops, _ppparLoops";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = 3;
    /* Statements */
    return _timesRepeat_2(_parLoops, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _createNode_2(_cfg_1(_self), _plusSign_2(_n, 1));
      _buildConnectEnd_3(_self, 2, _plusSign_2(_n, 1));
      _n = _plusSign_2(_n, 1);
      _timesRepeat_2(_pparLoops, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _top = _n;
        let _bottom = null;
        /* Statements */
        _n = _buildStraightN_3(_self, _n, 1);
        _timesRepeat_2(_ppparLoops, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _n = _buildBaseLoop_2(_self, _n);
        });
        _bottom = _buildStraightN_3(_self, _n, 1);
        _buildConnectEnd_3(_self, _n, _top);
        return _n = _bottom;
      });
      return _buildConnectEnd_3(_self, _n, 1);
    });
  },
  "{ :self :parLoops :pparLoops :ppparLoops |\n\t\tlet n = 3;\n\t\tparLoops.timesRepeat {\n\t\t\tself.cfg.createNode(n + 1);\n\t\t\tself.buildConnectEnd(2, n + 1);\n\t\t\tn := n + 1;\n\t\t\tpparLoops.timesRepeat {\n\t\t\t\tlet top = n;\n\t\t\t\tlet bottom = nil;\n\t\t\t\tn := self.buildStraightN(n, 1);\n\t\t\t\tppparLoops.timesRepeat {\n\t\t\t\t\tn := self.buildBaseLoop(n)\n\t\t\t\t};\n\t\t\t\tbottom := self.buildStraightN(n, 1);\n\t\t\t\tself.buildConnectEnd(n, top);\n\t\t\t\tn := bottom\n\t\t\t};\n\t\t\tself.buildConnectEnd(n, 1)\n\t\t}\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "addDummyLoops",
  ["self", "numDummyLoops"],
  function (_self, _numDummyLoops) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numDummyLoops";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _timesRepeat_2(_numDummyLoops, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _findLoops_2(_self, _lsg_1(_self));
    });
  },
  "{ :self :numDummyLoops |\n\t\tnumDummyLoops.timesRepeat {\n\t\t\tself.findLoops(self.lsg)\n\t\t}\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "findLoops",
  ["self", "loopStructure"],
  function (_self, _loopStructure) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _loopStructure";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _finder = _HavlakLoopFinder_2(_cfg_1(_self), _loopStructure);
    /* Statements */
    return _findLoops_1(_finder);
  },
  "{ :self :loopStructure |\n\t\tlet finder = HavlakLoopFinder(self.cfg, loopStructure);\n\t\tfinder.findLoops\n\t}",
);

sl.addMethod(
  "LoopTesterApp",
  "HavlakBenchmark",
  "constructSimpleCFG",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _createNode_2(_cfg_1(_self), 1);
    _buildBaseLoop_2(_self, 1);
    _createNode_2(_cfg_1(_self), 2);
    return _BasicBlockEdge_3(_cfg_1(_self), 1, 3);
  },
  "{ :self |\n\t\tself.cfg.createNode(1);\n\t\tself.buildBaseLoop(1);\n\t\tself.cfg.createNode(2);\n\t\tBasicBlockEdge(self.cfg, 1, 3)\n\t}",
);

sl.addMethod(
  "Void",
  "HavlakBenchmark",
  "LoopTesterApp",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newLoopTesterApp_0());
  },
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

sl.copyTraitToType(
  "Object",
  "SimpleLoop",
);

sl.addMethod(
  "SimpleLoop",
  "HavlakBenchmark",
  "initialize",
  ["self", "aBB", "aBool"],
  function (_self, _aBB, _aBool) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBB, _aBool";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _counter_2(_self, 0);
    _depthLevel_2(_self, 0);
    _isRoot_2(_self, false);
    _nestingLevel_2(_self, 0);
    _header_2(_self, _aBB);
    _isReducible_2(_self, _aBool);
    _basicBlocks_2(_self, _Set_0());
    _children_2(_self, _Set_0());
    _ifNotNil_2(_aBB, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _include_2(_basicBlocks_1(_self), _aBB);
    });
    return _self;
  },
  "{ :self :aBB :aBool |\n\t\tself.counter := 0;\n\t\tself.depthLevel := 0;\n\t\tself.isRoot := false;\n\t\tself.nestingLevel := 0;\n\t\tself.header := aBB;\n\t\tself.isReducible := aBool;\n\t\tself.basicBlocks := Set();\n\t\tself.children := Set();\n\t\taBB.ifNotNil {\n\t\t\tself.basicBlocks.include(aBB)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "SimpleLoop",
  "HavlakBenchmark",
  "addNode",
  ["self", "bb"],
  function (_self, _bb) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _bb";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _include_2(_basicBlocks_1(_self), _bb);
  },
  "{ :self :bb |\n\t\tself.basicBlocks.include(bb)\n\t}",
);

sl.addMethod(
  "SimpleLoop",
  "HavlakBenchmark",
  "addChildLoop",
  ["self", "loop"],
  function (_self, _loop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _loop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _include_2(_children_1(_self), _loop);
  },
  "{ :self :loop |\n\t\tself.children.include(loop)\n\t}",
);

sl.addMethod(
  "SimpleLoop",
  "HavlakBenchmark",
  "setParent",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _parent_2(_self, _value);
    return _addChildLoop_2(_parent_1(_self), _self);
  },
  "{ :self :value |\n\t\tself.parent := value;\n\t\tself.parent.addChildLoop(self)\n\t}",
);

sl.addMethod(
  "SimpleLoop",
  "HavlakBenchmark",
  "setNestingLevel",
  ["self", "level"],
  function (_self, _level) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _level";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _nestingLevel_2(_self, _level);
    return _ifTrue_2(_equalsSign_2(_level, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isRoot_2(_self, true);
    });
  },
  "{ :self :level |\n\t\tself.nestingLevel := level;\n\t\t(level = 0).ifTrue {\n\t\t\tself.isRoot := true\n\t\t}\n\t}",
);

sl.addMethod(
  "Nil",
  "HavlakBenchmark",
  "SimpleLoop",
  ["self", "isReducible"],
  function (_self, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isReducible";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newSimpleLoop_0(), _self, _isReducible);
  },
  "{ :self :isReducible |\n\t\tnewSimpleLoop().initialize(self, isReducible)\n\t}",
);

sl.addMethod(
  "BasicBlock",
  "HavlakBenchmark",
  "SimpleLoop",
  ["self", "isReducible"],
  function (_self, _isReducible) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isReducible";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_3(_newSimpleLoop_0(), _self, _isReducible);
  },
  "{ :self :isReducible |\n\t\tnewSimpleLoop().initialize(self, isReducible)\n\t}",
);

sl.addType(
  false,
  "UnionFindNode",
  "HavlakBenchmark",
  ["Object"],
  ["parent", "bb", "dfsNumber", "loop"],
);

sl.copyTraitToType(
  "Object",
  "UnionFindNode",
);

sl.addMethod(
  "UnionFindNode",
  "HavlakBenchmark",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _dfsNumber_2(_self, 0);
    return _self;
  },
  "{ :self |\n\t\tself.dfsNumber := 0;\n\t\tself\n\t}",
);

sl.addMethod(
  "UnionFindNode",
  "HavlakBenchmark",
  "initNodeDfs",
  ["self", "bb", "dfsNumber"],
  function (_self, _bb, _dfsNumber) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _bb, _dfsNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _parent_2(_self, _self);
    _bb_2(_self, _bb);
    return _dfsNumber_2(_self, _dfsNumber);
  },
  "{ :self :bb :dfsNumber |\n\t\tself.parent := self;\n\t\tself.bb := bb;\n\t\tself.dfsNumber := dfsNumber\n\t}",
);

sl.addMethod(
  "UnionFindNode",
  "HavlakBenchmark",
  "findSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _nodeList = _List_0();
    let _node = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tildeTilde_2(_node, _parent_1(_node));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _tildeTilde_2(_parent_1(_node), _parent_1(_parent_1(_node))),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _addLast_2(_nodeList, _node);
        },
      );
      return _node = _parent_1(_node);
    });
    _do_2(_nodeList, function (_iter) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _iter";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _union_2(_iter, _parent_1(_self));
    });
    return _node;
  },
  "{ :self |\n\t\tlet nodeList = List();\n\t\tlet node = self;\n\t\t{\n\t\t\tnode ~~ node.parent\n\t\t}.whileTrue {\n\t\t\t(node.parent ~~ node.parent.parent).ifTrue {\n\t\t\t\tnodeList.addLast(node)\n\t\t\t};\n\t\t\tnode := node.parent\n\t\t};\n\t\tnodeList.do { :iter |\n\t\t\titer.union(self.parent)\n\t\t};\n\t\tnode\n\t}",
);

sl.addMethod(
  "UnionFindNode",
  "HavlakBenchmark",
  "union",
  ["self", "basicBlock"],
  function (_self, _basicBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _basicBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _parent_2(_self, _basicBlock);
  },
  "{ :self :basicBlock |\n\t\tself.parent := basicBlock\n\t}",
);

sl.addMethod(
  "Void",
  "HavlakBenchmark",
  "UnionFindNode",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_1(_newUnionFindNode_0());
  },
  "{\n\t\tnewUnionFindNode().initialize\n\t}",
);

sl.addMethod(
  "Void",
  "HavlakBenchmark",
  "HavlakBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Benchmark_3(
      "Havlak",
      _asMap_1([
        _hyphenMinusGreaterThanSign_2(1, [1605, 5213]),
        _hyphenMinusGreaterThanSign_2(15, [1647, 5213]),
        _hyphenMinusGreaterThanSign_2(150, [2052, 5213]),
        _hyphenMinusGreaterThanSign_2(1500, [6102, 5213]),
        _hyphenMinusGreaterThanSign_2(15000, [46602, 5213]),
      ]),
      function (_iterations) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iterations";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _mainLoopPPP_6(_LoopTesterApp_0(), _iterations, 50, 10, 10, 5);
      },
    );
  },
  "{\n\t\tBenchmark('Havlak', [\n\t\t\t1 -> [1605, 5213],\n\t\t\t15 -> [1647, 5213],\n\t\t\t150 -> [2052, 5213],\n\t\t\t1500 -> [6102, 5213],\n\t\t\t15000 -> [46602, 5213]\n\t\t].asMap) { :iterations |\n\t\t\tLoopTesterApp().mainLoopPPP(iterations, 50, 10, 10, 5)\n\t\t}\n\t}",
);
