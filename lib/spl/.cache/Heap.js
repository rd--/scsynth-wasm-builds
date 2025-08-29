sl.addType(
  false,
  "Heap",
  "Heap",
  ["Object", "Iterable", "Collection", "Extensible", "Removable"],
  ["array", "sortBlock", "indexUpdateBlock"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Heap",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSignEqualsSign_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isHeap_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_size_1(_anObject), _size_1(_self)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _equalsSign_2(_sortBlock_1(_anObject), _sortBlock_1(_self)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _equalsSign_2(
                      _sort_2(_array_1(_self), _sortBlock_1(_self)),
                      _sort_2(_array_1(_anObject), _sortBlock_1(_self)),
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | |(==(self, anObject), { &(isHeap(anObject), { &(=(size(anObject), size(self)), { &(=(sortBlock(anObject), sortBlock(self)), { =(sort(array(self),sortBlock(self)), sort(array(anObject),sortBlock(self))) }) }) }) }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "add",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_array_1(_self), _anObject);
    _indexUpdate_3(_self, _anObject, _size_1(_self));
    _upHeap_2(_self, _size_1(_self));
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | add(array(self),anObject); indexUpdate(self,anObject, size(self)); upHeap(self,size(self)); anObject }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_index, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_array_1(_self), _index);
      }, []),
    );
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 | if((>(index, size(self))), { ifAbsent() }, { at(array(self),index) }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "at: invalid index");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | atIfAbsent(self, index, { error(self,'at: invalid index') }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "atPut",
  ["self", "index", "newObject"],
  sl.annotateFunction(function (_self, _index, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _newObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_1("Heap>>atPut: shouldNotImplement");
  }, ["self", "index", "newObject"]),
  "{ :self :index :newObject | error('Heap>>atPut: shouldNotImplement') }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "capacity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self | size(self) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _replace_2(_array_1(_self), _aBlock_1);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | replace(array(self),aBlock:/1); self }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "compare",
  ["self", "anItem", "anotherItem"],
  sl.annotateFunction(function (_self, _anItem, _anotherItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anItem, _anotherItem";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sortBlock_2 = _sortBlock_1(_self);
    /* Statements */
    return _ifNil_3(
      _sortBlock_2,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_anItem, _anotherItem);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sortBlock_2(_anItem, _anotherItem);
      }, []),
    );
  }, ["self", "anItem", "anotherItem"]),
  "{ :self :anItem :anotherItem | let sortBlock:/2 = sortBlock(self); ifNil(sortBlock:/2, { <=(anItem, anotherItem) }, { sortBlock(anItem, anotherItem) }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_array_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(array(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "downHeap",
  ["self", "anIndex"],
  sl.annotateFunction(function (_self, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _array = _array_1(_self);
    let _size = _size_1(_array);
    let _value = _at_2(_array, _anIndex);
    let _index = _anIndex;
    let _childIndex = null;
    let _childValue = null;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _greaterThanSignEqualsSign_2(
            _childIndex = _asterisk_2(2, _index),
            _size,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _childValue = _at_2(_array, _childIndex);
            _ifTrue_2(
              _compare_3(
                _self,
                _at_2(_array, _plusSign_2(_childIndex, 1)),
                _childValue,
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _childIndex = _plusSign_2(_childIndex, 1);
                return _childValue = _at_2(_array, _childIndex);
              }, []),
            );
            return _compare_3(_self, _value, _childValue);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_array, _index, _childValue);
        _indexUpdate_3(_self, _childValue, _index);
        return _index = _childIndex;
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_childIndex, _size),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _childValue = _at_2(_array, _childIndex);
        return _ifFalse_2(
          _compare_3(_self, _value, _childValue),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_array, _index, _childValue);
            _indexUpdate_3(_self, _childValue, _index);
            return _index = _childIndex;
          }, []),
        );
      }, []),
    );
    _atPut_3(_array, _index, _value);
    return _indexUpdate_3(_self, _value, _index);
  }, ["self", "anIndex"]),
  "{ :self :anIndex | let array = array(self); let size = size(array); let value = at(array, anIndex); let index = anIndex; let childIndex = nil; let childValue = nil; whileFalse({ |(>=((childIndex := (*(2, index))), size), { childValue := at(array, childIndex); ifTrue(compare(self,at(array, +(childIndex, 1)), childValue), { childIndex := +(childIndex, 1); childValue := at(array, childIndex) }); compare(self,value, childValue) }) }, { atPut(array, index, childValue); indexUpdate(self,childValue, index); index := childIndex }); ifTrue((=(childIndex, size)), { childValue := at(array, childIndex); ifFalse(compare(self,value, childValue), { atPut(array, index, childValue); indexUpdate(self,childValue, index); index := childIndex }) }); atPut(array, index, value); indexUpdate(self,value, index) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "first",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_array_1(_self), 1);
  }, ["self"]),
  "{ :self | at(array(self), 1) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "indexUpdate",
  ["self", "anObject", "anIndex"],
  sl.annotateFunction(function (_self, _anObject, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotNil_2(
      _indexUpdateBlock_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_3(_indexUpdateBlock_1(_self), _anObject, _anIndex);
      }, []),
    );
  }, ["self", "anObject", "anIndex"]),
  "{ :self :anObject :anIndex | ifNotNil(indexUpdateBlock(self), { value(indexUpdateBlock(self),anObject, anIndex) }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _array = _array_1(_self);
    let _size = _size_1(_array);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _solidusSolidus_2(_size, 2),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _childIndex = _asterisk_2(2, _index);
          /* Statements */
          _ifFalse_2(
            _compare_3(
              _self,
              _at_2(_array, _index),
              _at_2(_array, _childIndex),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          return _ifTrue_2(
            _lessThanSign_2(_childIndex, _size),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _childIndex = _plusSign_2(_childIndex, 1);
              return _ifFalse_2(
                _compare_3(
                  _self,
                  _at_2(_array, _index),
                  _at_2(_array, _childIndex),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, []),
          );
        }, ["index"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self | let array = array(self); let size = size(array); valueWithReturn({ :return:/1 | toDo(1, //(size, 2), { :index | let childIndex = *(2, index); ifFalse(compare(self,at(array, index), at(array, childIndex)), { return(false) }); ifTrue((<(childIndex, size)), { childIndex := +(childIndex, 1); ifFalse(compare(self,at(array, index), at(array, childIndex)), { return(false) }) }) }); true }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _array_2(_self, _copy_1(_array_1(_self)));
  }, ["self"]),
  "{ :self | array(self, copy(array(self))) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "privateRemoveAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _at_2(_array_1(_self), _index);
    /* Statements */
    _if_3(
      _equalsSign_2(_index, _size_1(_array_1(_self))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeLast_1(_array_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_array_1(_self), _index, _last_1(_array_1(_self)));
        _removeLast_1(_array_1(_self));
        return _if_3(
          _lessThanSignEqualsSign_2(_asterisk_2(2, _index), _size_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _downHeap_2(_self, _index);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _upHeap_2(_self, _index);
          }, []),
        );
      }, []),
    );
    return _removed;
  }, ["self", "index"]),
  "{ :self :index | let removed = at(array(self),index); if((=(index, size(array(self)))), { removeLast(array(self)) }, { atPut(array(self), index, last(array(self))); removeLast(array(self)); if((<=(*(2, index), size(self))), { downHeap(self,index) }, { upHeap(self,index) }) }); removed }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "removeIfAbsent",
  ["self", "oldObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _oldObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _oldObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _size_1(_self),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_at_2(_array_1(_self), _i), _oldObject),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_privateRemoveAt_2(_self, _i));
            }, []),
          );
        }, ["i"]),
      );
      return _aBlock_0();
    }, ["return:/1"]));
  }, ["self", "oldObject", "aBlock:/0"]),
  "{ :self :oldObject :aBlock:/0 | valueWithReturn({ :return:/1 | toDo(1, size(self), { :i | ifTrue((=(at(array(self), i), oldObject)), { return(privateRemoveAt(self,i)) }) }); aBlock() }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAll_1(_array_1(_self));
  }, ["self"]),
  "{ :self | removeAll(array(self)) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "removeAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_index, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "removeAt", _index);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _privateRemoveAt_2(_self, _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if((>(index, size(self))), { errorInvalidIndex(self,'removeAt', index) }, { privateRemoveAt(self,index) }) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "removeFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAt_2(_self, 1);
  }, ["self"]),
  "{ :self | removeAt(self,1) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _newCollection = _Heap_0();
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _element = _at_2(_array_1(_self), _index);
        /* Statements */
        return _ifTrue_2(
          _aBlock_1(_element),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_newCollection, _element);
          }, []),
        );
      }, ["index"]),
    );
    return _newCollection;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let newCollection = Heap(); toDo(1, size(self), { :index | let element = at(array(self), index); ifTrue(aBlock(element), { add(newCollection,element) }) }); newCollection }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_array_1(_self));
  }, ["self"]),
  "{ :self | size(array(self)) }",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "upHeap",
  ["self", "anIndex"],
  sl.annotateFunction(function (_self, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_anIndex, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _indexUpdate_3(_self, _at_2(_array_1(_self), 1), 1);
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = null;
        let _parentValue = null;
        let _parentIndex = null;
        let _value = null;
        /* Statements */
        _value = _at_2(_array_1(_self), _index = _anIndex);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _greaterThanSign_2(_index, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _parentIndex = _bitShiftRight_2(_index, 1);
                _parentValue = _at_2(_array_1(_self), _parentIndex);
                return _compare_3(_self, _value, _parentValue);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_array_1(_self), _index, _parentValue);
            _indexUpdate_3(_self, _parentValue, _index);
            return _index = _parentIndex;
          }, []),
        );
        _atPut_3(_array_1(_self), _index, _value);
        return _indexUpdate_3(_self, _value, _index);
      }, []),
    );
  }, ["self", "anIndex"]),
  "{ :self :anIndex | if((=(anIndex, 1)), { indexUpdate(self,at(array(self), 1), 1); self }, { let index = nil; let parentValue = nil; let parentIndex = nil; let value = nil; value := at(array(self), index := anIndex); whileTrue({ &(>(index, 1), { parentIndex := bitShiftRight(index,1); parentValue := at(array(self), parentIndex); compare(self,value, parentValue) }) }, { atPut(array(self), index, parentValue); indexUpdate(self,parentValue, index); index := parentIndex }); atPut(array(self), index, value); indexUpdate(self,value, index) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Heap",
  "Heap",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHeap_0(), [], null, null);
  }, []),
  "{ initializeSlots(newHeap(),[], nil, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Heap",
  "Heap",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHeap_0(), [], _self_2, null);
  }, ["self:/2"]),
  "{ :self:/2 | initializeSlots(newHeap(),[], self:/2, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Heap",
  "asHeap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHeap_0(), _self, null, null);
  }, ["self"]),
  "{ :self | initializeSlots(newHeap(),self, nil, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Heap",
  "asHeap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asHeap_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | asHeap(asList(self)) }",
);
