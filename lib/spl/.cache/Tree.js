sl.addType(
  false,
  "Tree",
  "Tree",
  ["Object", "Iterable", "Indexable"],
  ["value", "subTrees"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
          _equalsSign_2(_value_1(_self), _value_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_subTrees_1(_self), _subTrees_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isTree(anObject), { &(=(value(self), value(anObject)), { =(subTrees(self), subTrees(anObject)) }) }) }",
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
  "{ :self :child | if(isTree(child), { add(subTrees(self),child) }, { error(self,'Tree>>addChild: not tree') }) }",
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
  "{ :self | let nodeId = 1; let vertexLabels = []; let labeledTree = collect(self, { :each | let answer = ->(nodeId, each); nodeId := +(nodeId, 1); add(vertexLabels,each); answer }); let edgeList = []; do(labeledTree, { :i | collect(subTrees(i), { :j | add(edgeList,DirectedEdge(key(value(i)), key(value(j)))) }) }); also(asGraph(edgeList), { :graph | vertexLabels(graph, vertexLabels) }) }",
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
  "{ :self | let subLists = collect(subTrees(self), { :each | if(isLeaf(each), { value(each) }, { asList(each) }) }); ifNil(value(self), { subLists }, { ++([value(self)], subLists) }) }",
);

sl.addMethodToExistingType(
  "Tree",
  "Tree",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_subTrees_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(subTrees(self), index) }",
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
  "{ :self :aBlock:/1 | Tree(aBlock(value(self)), collect(subTrees(self), { :each | collect(each,aBlock:/1) })) }",
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
  "{ :self :i :aBlock:/2 | withIndexDo(subTrees(self), { :each :j | let index = ++(i, [j]); aBlock(each, index); deepWithIndicesDoStartingAt(each,index, aBlock:/2) }) }",
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
  "{ :self :aBlock:/2 | deepWithIndicesDoStartingAt(self,[], aBlock:/2) }",
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
  "{ :self | let answer = []; deepWithIndicesDo(self, { :unused :index | add(answer,index) }); answer }",
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
  "{ :self :depth | if((=(size(self), 0)), { depth }, { max(collect(subTrees(self), { :each | depthStartingAt(each,+(depth, 1)) })) }) }",
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
  "{ :self | depthStartingAt(self,1) }",
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
  "{ :self :aBlock:/1 | aBlock(self); do(subTrees(self), { :each | do(each,aBlock:/1) }) }",
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
  "{ :self | leaves(self) }",
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
  "{ :self | graphPlot(asGraph(self)) }",
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
    return _upOrDownTo_2(1, _size_1(_self));
  }, ["self"]),
  "{ :self | upOrDownTo(1, size(self)) }",
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
  "{ :self | |(isEmpty(subTrees(self)), { &(=(size(subTrees(self)), 2), { allSatisfy(subTrees(self),isBinary:/1) }) }) }",
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
  "{ :self | isEmpty(subTrees(self)) }",
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
  "{ :self | let answer = 0; leavesDo(self, { :each | answer := +(answer, 1) }); answer }",
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
  "{ :self | let answer = []; deepWithIndicesDo(self, { :each :index | ifTrue(isLeaf(each), { add(answer,index) }) }); answer }",
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
  "{ :self :aBlock:/1 | do(self, { :each | ifTrue(isLeaf(each), { aBlock(value(each)) }) }) }",
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
  "{ :self | let answer = []; leavesDo(self, { :each | add(answer,value(each)) }); answer }",
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
  "{ :self :aBlock:/1 | do(subTrees(self), { :each | aBlock(each) }); do(subTrees(self), { :each | levelOrderDo(each,aBlock:/1) }) }",
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
  "{ :self | let answer = []; collect(to(0,-(depth(self), 1)), { :each | addAll(answer,collect(level(self,[each]),value:/1)) }); answer }",
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
  "{ :self :aBlock:/1 | do(subTrees(self), { :each | postOrderDo(each,aBlock:/1) }); aBlock(self) }",
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
  "{ :self | let answer = []; postOrderDo(self, { :each | add(answer,value(each)) }); answer }",
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
  "{ :self :aBlock:/1 | reverseDo(subTrees(self), { :each | reverseDo(each,aBlock:/1) }); aBlock(self) }",
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
  "{ :self | size(subTrees(self)) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | treePlot(asGraph(self)) }",
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
  "{ :self | let answer = []; do(self, { :each | add(answer,value(each)) }); answer }",
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
  "{ :self :aBlock:/2 :level | do(subTrees(self), { :each | withLevelDo(each,aBlock:/2, +(level, 1)); aBlock(each, level) }) }",
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
  "{ :self :aBlock:/2 | withLevelDo(self,aBlock:/2, 1); aBlock(self, 0) }",
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
  "{ :value :subTrees | initializeSlots(newTree(),value, subTrees) }",
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
  "{ :self :anObject | Tree(anObject, collect(self, { :each | if(isList(each), { expressionTree(each,anObject) }, { Tree(each, []) }) })) }",
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
  "{ :self | ifTrue(isList(at(self, 1)), { error(self,'List>>expressionTree: invalid initial item') }); Tree(at(self, 1), collect(allButFirst(self), { :each | if(isList(each), { expressionTree(each) }, { Tree(each, []) }) })) }",
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
  "{ :self | Tree(key(self), collect(value(self), { :each | if(isAssociation(each), { rulesTree(each) }, { Tree(each, []) }) })) }",
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
        let __SPL71 = _assertIsOfSize_2([
          _numerator_1(_each),
          _denominator_1(_each),
        ], 2);
        let _a = _at_2(__SPL71, 1);
        let _b = _at_2(__SPL71, 2);
        /* Statements */
        return [
          _Fraction_2(_a, _plusSign_2(_a, _b)),
          _Fraction_2(_plusSign_2(_a, _b), _b),
        ];
      }, ["each"]),
    );
  }, ["n", "r"]),
  "{ :n :r | unfoldTree(n, r, { :each | let __SPL71 = assertIsOfSize([numerator(each), denominator(each)], 2); let a = at(__SPL71, 1); let b = at(__SPL71, 2); [Fraction(a, +(a, b)), Fraction(+(a, b), b)] }) }",
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
  "{ :n | calkinWilfTree(n,Fraction(1L, 1L)) }",
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
  "{ :n :k | let f = { :n :k | if((<=(n, 2)), { #(nil, k) }, { !({ f(-(n, 1), k) }, k) }) }; expressionTree(f(n, k),nil) }",
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
  "{ :n :k | let t = Tree(nil, []); let f = { :l :i | do(level(t,[l]), { :each | ifTrue((&((>(i, 0)), { isLeaf(each) })), { let j = min(i,k); subTrees(each, !({ Tree(nil, []) }, j)); i := -(i, j) }) }); ifTrue((>(i, 0)), { f(+(l, 1), i) }) }; f(0, -(n, 1)); t }",
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
  "{ :depth | unfoldTree(depth, Fraction(1L, 1L), { :each | if((=(each, Fraction(1L, 1L))), { [Fraction(1L, 2L)] }, { let n = numerator(each); let d = denominator(each); let z = +(n, d); [Fraction(n, z), Fraction(d, z)] }) }) }",
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
  "{ :n :r | unfoldTree(n, r, { :each | let a = continuedFraction(each); let b = copy(a); atPut(a, size(a), +(at(a, size(a)), 1)); atPut(b, size(a), -(at(b, size(a)), 1)); add(b,2); sort([fromContinuedFraction(a), fromContinuedFraction(b)]) }) }",
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
  "{ :n | sternBrocotTree(n,Fraction(1L, 1L)) }",
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
  "{ :anInteger :anObject :aBlock:/1 | if((<=(anInteger, 1)), { Tree(anObject, []) }, { let children = aBlock(anObject); Tree(anObject, collect(children, { :each | unfoldTree((-(anInteger, 1)),each, aBlock:/1) })) }) }",
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
  "{ :aBlock:/1 :aTree :depth | if((=(depth, 0)), { aTree }, { if(isLeaf(aTree), { Tree(value(aTree), collect(aBlock(value(aTree)), { :each | Tree(each, []) })) }, { nestTree(aBlock:/1, Tree(value(aTree), collect(subTrees(aTree), { :each | nestTree(aBlock:/1, each, 1) })), -(depth, 1)) }) }) }",
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
  "{ :r :n | let p = fisherYatesShuffle(iota(n),r); let t = Tree(removeFirst(p), []); let f = { :l :i | do(level(t,[l]), { :each | ifTrue((>(i, 0)), { let j = randomInteger(r,[1, i], []); subTrees(each, collect(removeFirst(p,j), { :m | Tree(m, []) })); i := -(i, j) }) }); ifTrue((>(i, 0)), { f(+(l, 1), i) }) }; f(0, -(n, 1)); t }",
);
