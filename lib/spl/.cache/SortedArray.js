sl.addType(
  false,
  "SortedArray",
  "SortedArray",
  ["Object", "Iterable", "Indexable", "Collection", "Extensible", "Removable"],
  ["contents", "sortBlock"],
);

sl.copyTraitToType(
  "Object",
  "SortedArray",
);

sl.copyTraitToType(
  "Iterable",
  "SortedArray",
);

sl.copyTraitToType(
  "Indexable",
  "SortedArray",
);

sl.copyTraitToType(
  "Collection",
  "SortedArray",
);

sl.copyTraitToType(
  "Extensible",
  "SortedArray",
);

sl.copyTraitToType(
  "Removable",
  "SortedArray",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "add",
  ["self", "item"],
  function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_contents_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_contents_1(_self), _item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _nextIndex = _indexForInserting_2(_self, _item);
      /* Statements */
      return _insertAt_3(_contents_1(_self), _item, _nextIndex);
    });
  },
  "{ :self :item |\n\t\tself.contents.isEmpty.if {\n\t\t\tself.contents.add(item)\n\t\t} {\n\t\t\tlet nextIndex = self.indexForInserting(item);\n\t\t\tself.contents.insertAt(item, nextIndex)\n\t\t}\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _greaterThan_2(
        _size_1(_aCollection),
        _dividedByDividedBy_2(_size_1(_contents_1(_self)), 3),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _addAll_2(_contents_1(_self), _aCollection);
        return _sortBy_2(_contents_1(_self), _sortBlock_1(_self));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _do_2(_aCollection, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _add_2(_self, _each);
        });
      },
    );
  },
  "{ :self :aCollection |\n\t\t(aCollection.size > (self.contents.size // 3)).if {\n\t\t\tself.contents.addAll(aCollection);\n\t\t\tself.contents.sortBy(self.sortBlock)\n\t\t} {\n\t\t\taCollection.do { :each |\n\t\t\t\tself.add(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copy_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.contents[index]\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1);\n\t\tself\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "indexForInserting",
  ["self", "newObject"],
  function (_self, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _low = 1;
    let _high = _size_1(_contents_1(_self));
    let _compare_2 = _sortBlock_1(_self);
    let _index = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _dividedByDividedBy_2(_plus_2(_high, _low), 2);
      return _lessThanEquals_2(_low, _high);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _compare_2(_at_2(_contents_1(_self), _index), _newObject),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _low = _plus_2(_index, 1);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _high = _minus_2(_index, 1);
        },
      );
    });
    return _low;
  },
  "{ :self :newObject |\n\t\tlet low = 1;\n\t\tlet high = self.contents.size;\n\t\tlet compare:/2 = self.sortBlock;\n\t\tlet index = nil;\n\t\t{\n\t\t\tindex := high + low // 2;\n\t\t\tlow <= high\n\t\t}.whileTrue {\n\t\t\tself.contents[index].compare(newObject).if {\n\t\t\t\tlow := index + 1\n\t\t\t} {\n\t\t\t\thigh := index - 1\n\t\t\t}\n\t\t};\n\t\tlow\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _dividedByDividedBy_2(_plus_2(_size_1(_self), 1), 2));
  },
  "{ :self |\n\t\tself[self.size + 1 // 2]\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "SortedArray",
  "SortedArray",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _SortedArray_0;
  },
  "{ :self |\n\t\tSortedArray:/0\n\t}",
);

sl.addMethod(
  "Void",
  "SortedArray",
  "SortedArray",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newSortedArray_0(), [], _lessThanEquals_2);
  },
  "{\n\t\tnewSortedArray().initializeSlots([], <=)\n\t}",
);

sl.addMethod(
  "Array",
  "SortedArray",
  "asSortedArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newSortedArray_0(),
      _sorted_1(_self),
      _lessThanEquals_2,
    );
  },
  "{ :self |\n\t\tnewSortedArray().initializeSlots(self.sorted, <=)\n\t}",
);

sl.addMethod(
  "Array",
  "SortedArray",
  "asSortedArray",
  ["self", "sortBlock:/2"],
  function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newSortedArray_0(),
      _sorted_2(_self, _sortBlock_2),
      _sortBlock_2,
    );
  },
  "{ :self :sortBlock:/2 |\n\t\tnewSortedArray().initializeSlots(self.sorted(sortBlock:/2), sortBlock:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "SortedArray",
  "asSortedArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSortedArray_2(_self, _lessThanEquals_2);
  },
  "{ :self |\n\t\tself.asSortedArray(<=)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "SortedArray",
  "asSortedArray",
  ["self", "aSortBlock:/2"],
  function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _SortedArray_0();
    /* Statements */
    _sortBlock_2(_answer, _aSortBlock_2);
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :aSortBlock:/2 |\n\t\tlet answer = SortedArray();\n\t\tanswer.sortBlock := aSortBlock:/2;\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);
