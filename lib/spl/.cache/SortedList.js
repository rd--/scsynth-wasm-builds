sl.addType(
  false,
  "SortedList",
  "SortedList",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequence",
  ],
  ["contents", "sortBlock"],
);

sl.copyTraitToType(
  "Object",
  "SortedList",
);

sl.copyTraitToType(
  "Iterable",
  "SortedList",
);

sl.copyTraitToType(
  "Indexable",
  "SortedList",
);

sl.copyTraitToType(
  "Collection",
  "SortedList",
);

sl.copyTraitToType(
  "Extensible",
  "SortedList",
);

sl.copyTraitToType(
  "Removable",
  "SortedList",
);

sl.copyTraitToType(
  "Sequence",
  "SortedList",
);

sl.addMethod(
  "SortedList",
  "SortedList",
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
  "SortedList",
  "SortedList",
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
      _greaterThanSign_2(
        _size_1(_aCollection),
        _solidusSolidus_2(_size_1(_contents_1(_self)), 3),
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
  "SortedList",
  "SortedList",
  "asList",
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
  "SortedList",
  "SortedList",
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
  "SortedList",
  "SortedList",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSortedList_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _sortBlock_1(_self),
    );
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.collect(aBlock:/1).asSortedList(self.sortBlock)\n\t}",
);

sl.addMethod(
  "SortedList",
  "SortedList",
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
  "SortedList",
  "SortedList",
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
      _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
      return _lessThanSignEqualsSign_2(_low, _high);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _value_3(
          _sortBlock_1(_self),
          _at_2(_contents_1(_self), _index),
          _newObject,
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _low = _plusSign_2(_index, 1);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _high = _hyphenMinus_2(_index, 1);
        },
      );
    });
    return _low;
  },
  "{ :self :newObject |\n\t\tlet low = 1;\n\t\tlet high = self.contents.size;\n\t\tlet index = nil;\n\t\t{\n\t\t\tindex := high + low // 2;\n\t\t\tlow <= high\n\t\t}.whileTrue {\n\t\t\tself.sortBlock.value(self.contents[index], newObject).if {\n\t\t\t\tlow := index + 1\n\t\t\t} {\n\t\t\t\thigh := index - 1\n\t\t\t}\n\t\t};\n\t\tlow\n\t}",
);

sl.addMethod(
  "SortedList",
  "SortedList",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(_odd_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, _plusSign_2(_solidusSolidus_2(_n, 2), 1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _i = _solidusSolidus_2(_n, 2);
      /* Statements */
      return _solidus_2(
        _plusSign_2(_at_2(_self, _i), _at_2(_self, _plusSign_2(_i, 1))),
        2,
      );
    });
  },
  "{ :self |\n\t\tlet n = self.size;\n\t\tn.odd.if {\n\t\t\tself[n // 2 + 1]\n\t\t} {\n\t\t\tlet i = n // 2;\n\t\t\t(self[i] + self[i + 1]) / 2\n\t\t}\n\t}",
);

sl.addMethod(
  "SortedList",
  "SortedList",
  "quantile",
  ["self", "p", "a", "b", "c", "d"],
  function (_self, _p, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _self, _p, _a, _b, _c, _d";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCollection_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_p, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _quantile_6(_self, _each, _a, _b, _c, _d);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _y = _self;
      let _n = _size_1(_y);
      let _r = _plusSign_2(_a, _asterisk_2(_plusSign_2(_n, _b), _p));
      let _f = _fractionPart_1(_r);
      let _i0 = _max_2(_floor_1(_r), 1);
      let _i1 = _min_2(_ceiling_1(_r), _n);
      /* Statements */
      return _plusSign_2(
        _at_2(_y, _i0),
        _asterisk_2(
          _hyphenMinus_2(_at_2(_y, _i1), _at_2(_y, _i0)),
          _plusSign_2(_c, _asterisk_2(_d, _f)),
        ),
      );
    });
  },
  "{ :self :p :a :b :c :d |\n\t\tp.isCollection.if {\n\t\t\tp.collect { :each |\n\t\t\t\tself.quantile(each, a, b, c, d)\n\t\t\t}\n\t\t} {\n\t\t\tlet y = self;\n\t\t\tlet n = y.size;\n\t\t\tlet r = a + ((n + b) * p);\n\t\t\tlet f = r.fractionPart;\n\t\t\tlet i0 = r.floor.max(1);\n\t\t\tlet i1 = r.ceiling.min(n);\n\t\t\ty[i0] + ((y[i1] - y[i0]) * (c + (d * f)))\n\t\t}\n\t}",
);

sl.addMethod(
  "SortedList",
  "SortedList",
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
  "SortedList",
  "SortedList",
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
    return _SortedList_0;
  },
  "{ :self |\n\t\tSortedList:/0\n\t}",
);

sl.addMethod(
  "Void",
  "SortedList",
  "SortedList",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      [],
      _lessThanSignEqualsSign_2,
    );
  },
  "{\n\t\tnewSortedList().initializeSlots([], <=)\n\t}",
);

sl.addMethod(
  "List",
  "SortedList",
  "asSortedList",
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
      _newSortedList_0(),
      _sorted_1(_self),
      _lessThanSignEqualsSign_2,
    );
  },
  "{ :self |\n\t\tnewSortedList().initializeSlots(self.sorted, <=)\n\t}",
);

sl.addMethod(
  "List",
  "SortedList",
  "asSortedList",
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
      _newSortedList_0(),
      _sorted_2(_self, _sortBlock_2),
      _sortBlock_2,
    );
  },
  "{ :self :sortBlock:/2 |\n\t\tnewSortedList().initializeSlots(self.sorted(sortBlock:/2), sortBlock:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "SortedList",
  "asSortedList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSortedList_2(_self, _lessThanSignEqualsSign_2);
  },
  "{ :self |\n\t\tself.asSortedList(<=)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "SortedList",
  "asSortedList",
  ["self", "aSortBlock:/2"],
  function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _SortedList_0();
    /* Statements */
    _sortBlock_2(_answer, _aSortBlock_2);
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :aSortBlock:/2 |\n\t\tlet answer = SortedList();\n\t\tanswer.sortBlock := aSortBlock:/2;\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);
