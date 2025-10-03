sl.addType(
  false,
  "SortedList",
  "SortedList",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Comparable",
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
  "Copyable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  sl.annotateFunction(function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_contents_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_contents_1(_self), _item);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextIndex = _indexForInserting_2(_self, _item);
        /* Statements */
        return _insertAt_3(_contents_1(_self), _item, _nextIndex);
      }, []),
    );
  }, ["self", "item"]),
  "{ :self :item | if(isEmpty(contents(self)), { add(contents(self),item) }, { let nextIndex = indexForInserting(self,item); insertAt(contents(self),item, nextIndex) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "addAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
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
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_contents_1(_self), _aCollection);
        return _sortBy_2(_contents_1(_self), _sortBlock_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aCollection,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_self, _each);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | if((>(size(aCollection), (//(size(contents(self)), 3)))), { addAll(contents(self),aCollection); sortBy(contents(self),sortBlock(self)) }, { do(aCollection, { :each | add(self,each) }) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_contents_1(_self), _index, _ifAbsent_0);
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 | atIfAbsent(contents(self),index, ifAbsent:/0) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSortedList_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _sortBlock_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | asSortedList(collect(contents(self),aBlock:/1),sortBlock(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1); self }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "indexForInserting",
  ["self", "newObject"],
  sl.annotateFunction(function (_self, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _low = 1;
    let _high = _size_1(_contents_1(_self));
    let _sortBlock_2 = _sortBlock_1(_self);
    let _index = null;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
        return _sortBlock_2(_low, _high);
      }, []),
      sl.annotateFunction(function () {
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
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _low = _plusSign_2(_index, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _high = _hyphenMinus_2(_index, 1);
          }, []),
        );
      }, []),
    );
    return _low;
  }, ["self", "newObject"]),
  "{ :self :newObject | let low = 1; let high = size(contents(self)); let sortBlock:/2 = sortBlock(self); let index = nil; whileTrue({ index := //(+(high, low), 2); sortBlock(low, high) }, { if(value(sortBlock(self),at(contents(self), index), newObject), { low := +(index, 1) }, { high := -(index, 1) }) }); low }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "indexOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexForInserting_2(_self, _anObject);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _greaterThanSignEqualsSign_2(_i, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, _hyphenMinus_2(_i, 1)), _anObject);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_i, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | let i = indexForInserting(self,anObject); if((&(>=(i, 2), { =(at(self, -(i, 1)), anObject) })), { -(i, 1) }, { 0 }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(
      _isOdd_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _plusSign_2(_solidusSolidus_2(_n, 2), 1));
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self"]),
  "{ :self | let n = size(self); if(isOdd(n), { at(self, +(//(n, 2), 1)) }, { let i = //(n, 2); /((+(at(self, i), at(self, +(i, 1)))), 2) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexOf_2(_self, _anObject);
    /* Statements */
    return _if_3(
      _equalsSign_2(_i, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _i;
        let _c = _contents_1(_self);
        /* Statements */
        _whileTrue_1(sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _j = _hyphenMinus_2(_j, 1);
          return _ampersand_2(
            _greaterThanSign_2(_j, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_at_2(_c, _j), _anObject);
            }, []),
          );
        }, []));
        return _hyphenMinus_2(_i, _j);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | let i = indexOf(self,anObject); if((=(i, 0)), { 0 }, { let j = i; let c = contents(self); whileTrue({ j := -(j, 1); &(>(j, 0), { =(at(c, j), anObject) }) }); -(i, j) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "quantile",
  ["self", "p", "o"],
  sl.annotateFunction(function (_self, _p, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _p, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_p),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _p,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _quantile_3(_self, _each, _o);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _self;
        let _n = _size_1(_y);
        /* Statements */
        return _if_3(
          _equalsSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_y, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_p, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_y, _n);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SPL1 = _assertIsOfSize_2(_at_2(_o, 1), 2);
                let _a = _at_2(__SPL1, 1);
                let _b = _at_2(__SPL1, 2);
                let __SPL2 = _assertIsOfSize_2(_at_2(_o, 2), 2);
                let _c = _at_2(__SPL2, 1);
                let _d = _at_2(__SPL2, 2);
                let _r = _plusSign_2(_a, _asterisk_2(_plusSign_2(_n, _b), _p));
                let _f = _fractionalPart_1(_r);
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
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "p", "o"]),
  "{ :self :p :o | if(isCollection(p), { collect(p, { :each | quantile(self,each, o) }) }, { let y = self; let n = size(y); if((=(p, 0)), { at(y, 1) }, { if((=(p, 1)), { at(y, n) }, { let __SPL1 = assertIsOfSize(at(o, 1), 2); let a = at(__SPL1, 1); let b = at(__SPL1, 2); let __SPL2 = assertIsOfSize(at(o, 2), 2); let c = at(__SPL2, 1); let d = at(__SPL2, 2); let r = +(a, (*((+(n, b)), p))); let f = fractionalPart(r); let i0 = max(floor(r),1); let i1 = min(ceiling(r),n); +(at(y, i0), (*((-(at(y, i1), at(y, i0))), (+(c, (*(d, f))))))) }) }) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _if_3(
      _equalsSign_2(_i, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anExceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAt_2(_contents_1(_self), _i);
      }, []),
    );
  }, ["self", "oldObject", "anExceptionBlock:/0"]),
  "{ :self :oldObject :anExceptionBlock:/0 | let i = indexOf(self,oldObject); if((=(i, 0)), { anExceptionBlock() }, { removeAt(contents(self),i) }) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_0;
  }, ["self"]),
  "{ :self | SortedList:/0 }",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_sortBlock_1(_self), _precedesOrEqualTo_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("SortedList(%)", [_contents_1(_self)]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("SortedList(%, %)", [
          _contents_1(_self),
          _name_1(_sortBlock_1(_self)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(sortBlock(self), precedesOrEqualTo:/2)), { format('SortedList(%)',[contents(self)]) }, { format('SortedList(%, %)',[contents(self), name(sortBlock(self))]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SortedList",
  "SortedList",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSortedList_0(), [], _precedesOrEqualTo_2);
  }, []),
  "{ initializeSlots(newSortedList(),[], precedesOrEqualTo:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | SortedList(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_2(_asList_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 | SortedList(asList(self), sortBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "SortedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_2(_self, _precedesOrEqualTo_2);
  }, ["self"]),
  "{ :self | SortedList(self, precedesOrEqualTo:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "SortedList",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      _sortBy_2(_copy_1(_self), _sortBlock_2),
      _sortBlock_2,
    );
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 | initializeSlots(newSortedList(),sortBy(copy(self),sortBlock:/2), sortBlock:/2) }",
);
