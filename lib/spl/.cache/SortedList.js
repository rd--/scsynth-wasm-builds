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
    "Sequenceable",
  ],
  ["contents", "sortBlock"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Collection",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Removable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "SortedList",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "add",
  ["self", "item"],
  function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_contents_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_contents_1(_self), _item);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _nextIndex = _indexForInserting_2(_self, _item);
      /* Statements */
      return _insertAt_3(_contents_1(_self), _item, _nextIndex);
    });
  },
  "{ :self :item | if(isEmpty(contents(self)), { add(contents(self),item) }, { let nextIndex = indexForInserting(self,item); insertAt(contents(self),item, nextIndex) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(
        _size_1(_aCollection),
        _solidusSolidus_2(_size_1(_contents_1(_self)), 3),
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_contents_1(_self), _aCollection);
        return _sortBy_2(_contents_1(_self), _sortBlock_1(_self));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_aCollection, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_self, _each);
        });
      },
    );
  },
  "{ :self :aCollection | if((>(size(aCollection), (//(size(contents(self)), 3)))), { addAll(contents(self),aCollection); sortBy(contents(self),sortBlock(self)) }, { do(aCollection, { :each | add(self,each) }) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  },
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index | at(contents(self), index) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSortedList_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _sortBlock_1(_self),
    );
  },
  "{ :self :aBlock:/1 | asSortedList(collect(contents(self),aBlock:/1),sortBlock(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  },
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1); self }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "indexForInserting",
  ["self", "newObject"],
  function (_self, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _low = 1;
    let _high = _size_1(_contents_1(_self));
    let _index = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
      return _lessThanSignEqualsSign_2(_low, _high);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
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
            throw new Error(errorMessage);
          } /* Statements */
          return _low = _plusSign_2(_index, 1);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _high = _hyphenMinus_2(_index, 1);
        },
      );
    });
    return _low;
  },
  "{ :self :newObject | let low = 1; let high = size(contents(self)); let index = nil; whileTrue({ index := //(+(high, low), 2); <=(low, high) }, { if(value(sortBlock(self),at(contents(self), index), newObject), { low := +(index, 1) }, { high := -(index, 1) }) }); low }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(_isOdd_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _plusSign_2(_solidusSolidus_2(_n, 2), 1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _solidusSolidus_2(_n, 2);
      /* Statements */
      return _solidus_2(
        _plusSign_2(_at_2(_self, _i), _at_2(_self, _plusSign_2(_i, 1))),
        2,
      );
    });
  },
  "{ :self | let n = size(self); if(isOdd(n), { at(self, +(//(n, 2), 1)) }, { let i = //(n, 2); /((+(at(self, i), at(self, +(i, 1)))), 2) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "quantile",
  ["self", "p", "a", "b", "c", "d"],
  function (_self, _p, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _self, _p, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCollection_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_p, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _quantile_6(_self, _each, _a, _b, _c, _d);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
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
  "{ :self :p :a :b :c :d | if(isCollection(p), { collect(p, { :each | quantile(self,each, a, b, c, d) }) }, { let y = self; let n = size(y); let r = +(a, (*((+(n, b)), p))); let f = fractionPart(r); let i0 = max(floor(r),1); let i1 = min(ceiling(r),n); +(at(y, i0), (*((-(at(y, i1), at(y, i0))), (+(c, (*(d, f))))))) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_0;
  },
  "{ :self | SortedList:/0 }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SortedList",
  "SortedList",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      [],
      _lessThanSignEqualsSign_2,
    );
  },
  "{ initializeSlots(newSortedList(),[], <=) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "asSortedList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      _sorted_1(_self),
      _lessThanSignEqualsSign_2,
    );
  },
  "{ :self | initializeSlots(newSortedList(),sorted(self), <=) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "asSortedList",
  ["self", "sortBlock:/2"],
  function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      _sorted_2(_self, _sortBlock_2),
      _sortBlock_2,
    );
  },
  "{ :self :sortBlock:/2 | initializeSlots(newSortedList(),sorted(self,sortBlock:/2), sortBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSortedList_2(_self, _lessThanSignEqualsSign_2);
  },
  "{ :self | asSortedList(self,<=) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self", "aSortBlock:/2"],
  function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _SortedList_0();
    /* Statements */
    _sortBlock_2(_answer, _aSortBlock_2);
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :aSortBlock:/2 | let answer = SortedList(); sortBlock(answer, aSortBlock:/2); addAll(answer,self); answer }",
);
