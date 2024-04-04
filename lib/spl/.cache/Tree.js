sl.addType(
  false,
  "Tree",
  "Tree",
  ["Object", "Iterable", "Indexable"],
  ["value", "subTrees"],
);

sl.copyTraitToType(
  "Object",
  "Tree",
);

sl.copyTraitToType(
  "Iterable",
  "Tree",
);

sl.copyTraitToType(
  "Indexable",
  "Tree",
);

sl.addMethod(
  "Tree",
  "Tree",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isTree_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_value_1(_self), _value_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_subTrees_1(_self), _subTrees_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isTree & {\n\t\t\tself.value = anObject.value & {\n\t\t\t\tself.subTrees = anObject.subTrees\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "addChild",
  ["self", "child"],
  function (_self, _child) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _child";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTree_1(_child), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_subTrees_1(_self), _child);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Tree>>addChild: not tree");
    });
  },
  "{ :self :child |\n\t\tchild.isTree.if {\n\t\t\tself.subTrees.add(child)\n\t\t} {\n\t\t\tself.error('Tree>>addChild: not tree')\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_subTrees_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isLeaf_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _value_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifNil_3(_value_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asList_1(_each);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_1("Tree>>asList: non nil entry at non-leaf Tree");
        });
      });
    });
  },
  "{ :self |\n\t\tself.subTrees.collect { :each |\n\t\t\teach.isLeaf.if {\n\t\t\t\teach.value\n\t\t\t} {\n\t\t\t\teach.value.ifNil {\n\t\t\t\t\teach.asList\n\t\t\t\t} {\n\t\t\t\t\t'Tree>>asList: non nil entry at non-leaf Tree'.error\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_subTrees_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.subTrees[index]\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Tree_2(
      _aBlock_1(_value_1(_self)),
      _collect_2(_subTrees_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_each, _aBlock_1);
      }),
    );
  },
  "{ :self :aBlock:/1 |\n\t\tTree(\n\t\t\taBlock(self.value),\n\t\t\tself.subTrees.collect { :each |\n\t\t\t\teach.collect(aBlock:/1)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "deepWithIndicesDoStartingAt",
  ["self", "i", "aBlock:/2"],
  function (_self, _i, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withIndexDo_2(_subTrees_1(_self), function (_each, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _index = _plusSignPlusSign_2(_i, [_j]);
      /* Statements */
      _aBlock_2(_each, _index);
      return _deepWithIndicesDoStartingAt_3(_each, _index, _aBlock_2);
    });
  },
  "{ :self :i :aBlock:/2 |\n\t\tself.subTrees.withIndexDo { :each :j |\n\t\t\tlet index = i ++ [j];\n\t\t\taBlock(each, index);\n\t\t\teach.deepWithIndicesDoStartingAt(index, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "deepWithIndicesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _deepWithIndicesDoStartingAt_3(_self, [], _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.deepWithIndicesDoStartingAt([], aBlock:/2)\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "deepIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepWithIndicesDo_2(_self, function (_unused, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _unused, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _index);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.deepWithIndicesDo { :unused :index |\n\t\t\tanswer.add(index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "depthStartingAt",
  ["self", "depth"],
  function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _depth;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _max_1(_collect_2(_subTrees_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _depthStartingAt_2(_each, _plusSign_2(_depth, 1));
      }));
    });
  },
  "{ :self :depth |\n\t\t(self.size = 0).if {\n\t\t\tdepth\n\t\t} {\n\t\t\tself.subTrees.collect { :each |\n\t\t\t\teach.depthStartingAt(depth + 1)\n\t\t\t}.max\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _depthStartingAt_2(_self, 1);
  },
  "{ :self |\n\t\tself.depthStartingAt(1)\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _aBlock_1(_self);
    return _do_2(_subTrees_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_each, _aBlock_1);
    });
  },
  "{ :self :aBlock:/1 |\n\t\taBlock(self);\n\t\tself.subTrees.do { :each |\n\t\t\teach.do(aBlock:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "flatten",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _leaves_1(_self);
  },
  "{ :self |\n\t\tself.leaves\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _upOrDownTo_2(1, _size_1(_self));
  },
  "{ :self |\n\t\t(1 .. self.size)\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "isLeaf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isEmpty_1(_subTrees_1(_self));
  },
  "{ :self |\n\t\tself.subTrees.isEmpty\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "leafCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _leavesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.leavesDo { :each |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "leafIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepWithIndicesDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_isLeaf_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _index);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.deepWithIndicesDo { :each :index |\n\t\t\teach.isLeaf.ifTrue {\n\t\t\t\tanswer.add(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "leavesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_isLeaf_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_value_1(_each));
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\teach.isLeaf.ifTrue {\n\t\t\t\taBlock(each.value)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "leaves",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _leavesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _value_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.leavesDo { :each |\n\t\t\tanswer.add(each.value)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "level",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_count, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [_self];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _concatenation_1(_collect_2(_subTrees_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _level_2(_each, _hyphenMinus_2(_count, 1));
      }));
    });
  },
  "{ :self :count |\n\t\t(count <= 0).if {\n\t\t\t[self]\n\t\t} {\n\t\t\tself.subTrees.collect { :each |\n\t\t\t\teach.level(count - 1)\n\t\t\t}.concatenation\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "levelOrderDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_subTrees_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_each);
    });
    return _do_2(_subTrees_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _levelOrderDo_2(_each, _aBlock_1);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.subTrees.do { :each |\n\t\t\taBlock(each)\n\t\t};\n\t\tself.subTrees.do { :each |\n\t\t\teach.levelOrderDo(aBlock:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "reverseDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _reverseDo_2(_subTrees_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _reverseDo_2(_each, _aBlock_1);
    });
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\tself.subTrees.reverseDo { :each |\n\t\t\teach.reverseDo(aBlock:/1)\n\t\t};\n\t\taBlock(self)\n\t}",
);

sl.addMethod(
  "Tree",
  "Tree",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_subTrees_1(_self));
  },
  "{ :self |\n\t\tself.subTrees.size\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tree",
  "Tree",
  ["value", "subTrees"],
  function (_value, _subTrees) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _value, _subTrees";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newTree_0(), _value, _subTrees);
  },
  "{ :value :subTrees |\n\t\tnewTree().initializeSlots(value, subTrees)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Tree",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _Tree_2(
      null,
      _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asTree_1(_each);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _Tree_2(_each, []);
        });
      }),
    );
  },
  "{ :self |\n\t\tlet type = self.typeOf;\n\t\tTree(\n\t\t\tnil,\n\t\t\tself.collect { :each |\n\t\t\t\t(each.typeOf = type).if {\n\t\t\t\t\teach.asTree\n\t\t\t\t} {\n\t\t\t\t\tTree(each, [])\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tree",
  "unfoldTree",
  ["anInteger", "anObject", "aBlock:/1"],
  function (_anInteger, _anObject, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _anInteger, _anObject, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_anInteger, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Tree_2(_anObject, []);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _children = _aBlock_1(_anObject);
      /* Statements */
      return _Tree_2(
        _anObject,
        _collect_2(_children, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _unfoldTree_3(_hyphenMinus_2(_anInteger, 1), _each, _aBlock_1);
        }),
      );
    });
  },
  "{ :anInteger :anObject :aBlock:/1 |\n\t\t(anInteger <= 1).if {\n\t\t\tTree(anObject, [])\n\t\t} {\n\t\t\tlet children = aBlock(anObject);\n\t\t\tTree(\n\t\t\t\tanObject,\n\t\t\t\tchildren.collect { :each |\n\t\t\t\t\t(anInteger - 1).unfoldTree(each, aBlock:/1)\n\t\t\t\t}\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tree",
  "calkinWilfTree",
  ["n", "r"],
  function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _unfoldTree_3(_n, _r, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym8 = _assertIsOfSize_2([
          _numerator_1(_each),
          _denominator_1(_each),
        ], 2),
        _a = _at_2(__genSym8, 1),
        _b = _at_2(__genSym8, 2);
      /* Statements */
      return [
        _Fraction_2(_a, _plusSign_2(_a, _b)),
        _Fraction_2(_plusSign_2(_a, _b), _b),
      ];
    });
  },
  "{ :n :r |\n\t\tn.unfoldTree(r) { :each |\n\t\t\tlet [a, b] = [each.numerator, each.denominator];\n\t\t\t[Fraction(a, a + b), Fraction(a + b, b)]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tree",
  "calkinWilfTree",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _calkinWilfTree_2(
      _n,
      _Fraction_2(
        1,
        1,
      ),
    );
  },
  "{ :n |\n\t\tn.calkinWilfTree(1/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tree",
  "sternBrocotTree",
  ["n", "r"],
  function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _unfoldTree_3(_n, _r, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
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
    });
  },
  "{ :n :r |\n\t\tn.unfoldTree(r) { :each |\n\t\t\tlet a = each.continuedFraction;\n\t\t\tlet b = a.copy;\n\t\t\ta[a.size] := a[a.size] + 1;\n\t\t\tb[a.size] := b[a.size] - 1;\n\t\t\tb.add(2);\n\t\t\t[a.fromContinuedFraction, b.fromContinuedFraction].sort\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tree",
  "sternBrocotTree",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sternBrocotTree_2(
      _n,
      _Fraction_2(
        1,
        1,
      ),
    );
  },
  "{ :n |\n\t\tn.sternBrocotTree(1/1)\n\t}",
);
