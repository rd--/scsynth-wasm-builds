sl.extendTraitWithMethod(
  "Object",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_levels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [_self];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [_bubble_3(_self, _depth, _minus_2(_levels, 1))];
    });
  },
  "{ :self :depth :levels |\n\t\t(levels <= 1).if {\n\t\t\t[self]\n\t\t} {\n\t\t\t[self.bubble(depth, levels - 1)]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :depth :levels |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "deepCollect",
  ["self", "depth", "aBlock"],
  function (_self, _depth, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _aBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_numArgs_1(_aBlock), [
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _deepCollect_5(
          _self,
          _depth,
          function (_each, _unusedIndex, _unusedRank) {
            /* ArityCheck */
            if (arguments.length !== 3) {
              const errorMessage =
                "Arity: expected 3, _each, _unusedIndex, _unusedRank";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _aBlock(_each);
          },
          1,
          0,
        );
      }),
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _deepCollect_5(_self, _depth, _aBlock, 1, 0);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        "Collection>>deepCollect: block must have one or three arguments",
      );
    });
  },
  "{ :self :depth :aBlock |\n\t\taBlock.numArgs.caseOfOtherwise([\n\t\t\t{ 1 } -> {\n\t\t\t\tself.deepCollect(depth, { :each :unusedIndex :unusedRank |\n\t\t\t\t\taBlock . (each)\n\t\t\t\t}, 1, 0)\n\t\t\t},\n\t\t\t{ 3 } -> {\n\t\t\t\tself.deepCollect(depth, aBlock, 1, 0)\n\t\t\t}\n\t\t]) {\n\t\t\t'Collection>>deepCollect: block must have one or three arguments'.error\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "deepCollect",
  ["self", "depth", "aBlock:/3", "index", "rank"],
  function (_self, _depth, _aBlock_3, _index, _rank) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _depth, _aBlock_3, _index, _rank";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNil_1(_depth), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _rank = _plus_2(_rank, 1);
      return _withIndexCollect_2(_self, function (_item, _itemIndex) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _item, _itemIndex";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _deepCollect_5(_item, _depth, _aBlock, _itemIndex, _rank);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanEquals_2(_depth, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_3(_self, _index, _rank);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _depth = _minus_2(_depth, 1);
        _rank = _plus_2(_rank, 1);
        return _collect_2(_self, function (_item) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _item";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _if_3(_isCollection_1(_item), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _deepCollect_5(_item, _depth, _aBlock_3, _index, _rank);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _aBlock_3(_item, _index, _rank);
          });
        });
      });
    });
  },
  "{ :self :depth :aBlock:/3 :index :rank |\n\t\t(depth.isNil).if {\n\t\t\trank := rank + 1;\n\t\t\tself.withIndexCollect { :item :itemIndex |\n\t\t\t\titem.deepCollect(depth, aBlock, itemIndex, rank)\n\t\t\t}\n\t\t} {\n\t\t\t(depth <= 0).if {\n\t\t\t\taBlock(self, index, rank)\n\t\t\t} {\n\t\t\t\tdepth := depth - 1;\n\t\t\t\trank := rank + 1;\n\t\t\t\tself.collect { :item |\n\t\t\t\t\titem.isCollection.if {\n\t\t\t\t\t\titem.deepCollect(depth, aBlock:/3, index, rank)\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock(item, index, rank)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "maxDepth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _maxDepth_2(_self, 1);
  },
  "{ :self |\n\t\tself.maxDepth(1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "maxDepth",
  ["self", "max"],
  function (_self, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _max;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_isCollection_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer = _max_2(_answer, _maxDepth_2(_each, _plus_2(_max, 1)));
      });
    });
    return _answer;
  },
  "{ :self :max |\n\t\tlet answer = max;\n\t\tself.do { :each |\n\t\t\teach.isCollection.ifTrue {\n\t\t\t\tanswer := answer.max(each.maxDepth(max + 1))\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "maxSizeAtDepth",
  ["self", "rank"],
  function (_self, _rank) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rank";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maxSize = 0;
    /* Statements */
    return _if_3(_equals_2(_rank, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _size = _if_3(_isCollection_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _maxSizeAtDepth_2(_each, _minus_2(_rank, 1));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return 1;
        });
        /* Statements */
        return _ifTrue_2(_greaterThan_2(_size, _maxSize), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _maxSize = _size;
        });
      });
      return _maxSize;
    });
  },
  "{ :self :rank |\n\t\tlet maxSize = 0;\n\t\t(rank = 0).if {\n\t\t\tself.size\n\t\t} {\n\t\t\tself.do { :each |\n\t\t\t\tlet size = (each.isCollection).if {\n\t\t\t\t\teach.maxSizeAtDepth(rank - 1)\n\t\t\t\t} {\n\t\t\t\t\t1\n\t\t\t\t};\n\t\t\t\t(size > maxSize).ifTrue {\n\t\t\t\t\tmaxSize := size\n\t\t\t\t}\n\t\t\t};\n\t\t\tmaxSize\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "assertShape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_shape_1(_self), _shape);
    });
  },
  "{ :self :shape |\n\t\tself.assert {\n\t\t\tself.shape = shape\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_depth, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanEquals_2(_levels, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return [_self];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return [_bubble_3(_self, _depth, _minus_2(_levels, 1))];
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _bubble_3(_item, _minus_2(_depth, 1), _levels);
      });
    });
  },
  "{ :self :depth :levels |\n\t\t(depth <= 0).if {\n\t\t\t(levels <= 1).if {\n\t\t\t\t[self]\n\t\t\t} {\n\t\t\t\t[self.bubble(depth, levels - 1)]\n\t\t\t}\n\t\t} {\n\t\t\tself.collect { :item |\n\t\t\t\titem.bubble(depth - 1, levels)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "iota",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_self)), _self);
  },
  "{ :self |\n\t\t(1 .. self.product).reshape(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _inner = _first_1(_self);
      /* Statements */
      return _if_3(_equals_2(_typeOf_1(_inner), _typeOf_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plus_2(1, _rank_1(_inner));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 1;
      });
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\t1\n\t\t} {\n\t\t\tlet inner = self.first;\n\t\t\t(inner.typeOf = self.typeOf).if {\n\t\t\t\t1 + inner.rank\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _product_1(_shape);
    let _answer = _wrapExtend_2(_flattened_1(_self), _size);
    /* Statements */
    _reverseDo_2(_allButFirst_1(_shape), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer = _clump_2(_answer, _n);
    });
    return _answer;
  },
  "{ :self :shape |\n\t\tlet size = shape.product;\n\t\tlet answer = self.flattened.wrapExtend(size);\n\t\tshape.allButFirst.reverseDo { :n |\n\t\t\tanswer := answer.clump(n)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    let _items = _flattened_1(_self);
    /* Statements */
    return _deepCollect_3(
      _another,
      _assertIsSmallInteger_1(parseInt("7FFFFFFF", 16)),
      function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _item = _atWrap_2(_items, _index);
        /* Statements */
        _index = _plus_2(_index, 1);
        return _item;
      },
    );
  },
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flattened;\n\t\tanother.deepCollect(16r7FFFFFFF) { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _inner = _first_1(_self);
    /* Statements */
    return _if_3(_equals_2(_typeOf_1(_inner), _typeOf_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2([_size_1(_self)], _shape_1(_inner));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [_size_1(_self)];
    });
  },
  "{ :self |\n\t\tlet inner = self.first;\n\t\t(inner.typeOf = self.typeOf).if {\n\t\t\t[self.size] ++ inner.shape\n\t\t} {\n\t\t\t[self.size]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "shapeIndicesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allTuplesDo_2(
      _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _to_2(1, _each);
      }),
      _aBlock_1,
    );
  },
  "{ :self :aBlock:/1 |\n\t\tself.collect { :each |\n\t\t\t1.to(each)\n\t\t}.allTuplesDo(aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "shapeIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allTuples_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _to_2(1, _each);
    }));
  },
  "{ :self |\n\t\tself.collect { :each |\n\t\t\t1.to(each)\n\t\t}.allTuples\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "slice",
  ["self", "cuts"],
  function (_self, _cuts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cuts";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_size_1(_cuts), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _firstCut = _first_1(_cuts);
      let _answer = _ifNil_3(_firstCut, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _copy_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atAll_2(_self, _asCollection_1(_firstCut));
      });
      /* Statements */
      return _if_3(_equals_2(_size_1(_cuts), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _unbubble_3(_answer, 0, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _cuts = _allButFirst_1(_cuts);
        return _unbubble_3(
          _collect_2(_answer, function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _if_3(_isCollection_1(_item), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _slice_2(_item, _cuts);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _item;
            });
          }),
          0,
          1,
        );
      });
    });
  },
  "{ :self :cuts |\n\t\t(cuts.size = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet firstCut = cuts.first;\n\t\t\tlet answer = firstCut.ifNil {\n\t\t\t\tself.copy\n\t\t\t} {\n\t\t\t\tself.atAll(firstCut.asCollection)\n\t\t\t};\n\t\t\t(cuts.size = 1).if {\n\t\t\t\tanswer.unbubble(0, 1)\n\t\t\t} {\n\t\t\t\tcuts := cuts.allButFirst;\n\t\t\t\tanswer.collect { :item |\n\t\t\t\t\titem.isCollection.if {\n\t\t\t\t\t\titem.slice(cuts)\n\t\t\t\t\t} {\n\t\t\t\t\t\titem\n\t\t\t\t\t}\n\t\t\t\t}.unbubble(0, 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_depth, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThan_2(_size_1(_self), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _self;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanEquals_2(_levels, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _first_1(_self);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _unbubble_3(_first_1(_self), _depth, _minus_2(_levels, 1));
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _unbubble_3(_item, _minus_2(_depth, 1), 1);
      });
    });
  },
  "{ :self :depth :levels |\n\t\t(depth <= 0).if {\n\t\t\t(self.size > 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(levels <= 1).if {\n\t\t\t\t\tself.first\n\t\t\t\t} {\n\t\t\t\t\tself.first.unbubble(depth, levels - 1)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.collect { :item |\n\t\t\t\titem.unbubble(depth - 1, 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "J",
  "duplicateShape",
  ["self:/0", "shape"],
  function (_self_0, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _iota_1(_shape);
    /* Statements */
    _shapeIndicesDo_2(_shape, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPathPut_3(_answer, _index, _self_0());
    });
    return _answer;
  },
  "{ :self:/0 :shape |\n\t\tlet answer = shape.iota;\n\t\tshape.shapeIndicesDo { :index |\n\t\t\tanswer.atPathPut(index, self())\n\t\t};\n\t\tanswer\n\t}",
);
