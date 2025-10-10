sl.addType(
  false,
  "Heap",
  "Heap",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Comparable",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
  ],
  ["array", "sortBlock", "indexUpdateBlock"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Heap",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self :anObject |\n\t\tself.array.add(anObject);\n\t\tself.indexUpdate(anObject, self.size);\n\t\tself.upHeap(self.size);\n\t\tanObject\n\t}",
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
  "{ :self :index :ifAbsent:/0 |\n\t\t(index > self.size).if {\n\t\t\tifAbsent()\n\t\t} {\n\t\t\tself.array.at(index)\n\t\t}\n\t}",
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
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tself.error('at: invalid index')\n\t\t}\n\t}",
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
    return _shouldNotImplement_2(_self, "atPut");
  }, ["self", "index", "newObject"]),
  "{ :self :index :newObject |\n\t\tself.shouldNotImplement('atPut')\n\t}",
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
  "{ :self |\n\t\tself.size\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.array.replace(aBlock:/1);\n\t\tself\n\t}",
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
        return _lessThanSignEqualsSignVerticalLine_2(_anItem, _anotherItem);
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
  "{ :self :anItem :anotherItem |\n\t\tlet sortBlock:/2 = self.sortBlock;\n\t\tsortBlock:/2.ifNil {\n\t\t\tanItem <=| anotherItem\n\t\t} {\n\t\t\tsortBlock(anItem, anotherItem)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.array.do(aBlock:/1)\n\t}",
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
  "{ :self :anIndex |\n\t\tlet array = self.array;\n\t\tlet size = array.size;\n\t\tlet value = array[anIndex];\n\t\tlet index = anIndex;\n\t\tlet childIndex = nil;\n\t\tlet childValue = nil;\n\t\t{\n\t\t\t(childIndex := (2 * index)) >= size | {\n\t\t\t\tchildValue := array[childIndex];\n\t\t\t\tself.compare(array[childIndex + 1], childValue).ifTrue {\n\t\t\t\t\tchildIndex := childIndex + 1;\n\t\t\t\t\tchildValue := array[childIndex]\n\t\t\t\t};\n\t\t\t\tself.compare(value, childValue)\n\t\t\t}\n\t\t}.whileFalse {\n\t\t\tarray[index] := childValue;\n\t\t\tself.indexUpdate(childValue, index);\n\t\t\tindex := childIndex\n\t\t};\n\t\t(childIndex = size).ifTrue {\n\t\t\tchildValue := array[childIndex];\n\t\t\tself.compare(value, childValue).ifFalse {\n\t\t\t\tarray[index] := childValue;\n\t\t\t\tself.indexUpdate(childValue, index);\n\t\t\t\tindex := childIndex\n\t\t\t}\n\t\t};\n\t\tarray[index] := value;\n\t\tself.indexUpdate(value, index)\n\t}",
);

sl.addMethodToExistingType(
  "Heap",
  "Heap",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
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
                    return _equalBy_3(
                      _sort_2(_array_1(_self), _sortBlock_1(_self)),
                      _sort_2(_array_1(_anObject), _sortBlock_1(_self)),
                      _aBlock_2,
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself == anObject | {\n\t\t\tanObject.isHeap & {\n\t\t\t\tanObject.size = self.size & {\n\t\t\t\t\tanObject.sortBlock = self.sortBlock & {\n\t\t\t\t\t\tself.array.sort(self.sortBlock).equalBy(anObject.array.sort(self.sortBlock), aBlock:/2)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.array[1]\n\t}",
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
  "{ :self :anObject :anIndex |\n\t\tself.indexUpdateBlock.ifNotNil {\n\t\t\tself.indexUpdateBlock.value(anObject, anIndex)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.size = 0\n\t}",
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
  "{ :self |\n\t\tlet array = self.array;\n\t\tlet size = array.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(size // 2) { :index |\n\t\t\t\tlet childIndex = 2 * index;\n\t\t\t\tself.compare(array[index], array[childIndex]).ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\t(childIndex < size).ifTrue {\n\t\t\t\t\tchildIndex := childIndex + 1;\n\t\t\t\t\tself.compare(array[index], array[childIndex]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.array := self.array.copy\n\t}",
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
  "{ :self :index |\n\t\tlet removed = self.array.at(index);\n\t\t(index = self.array.size).if {\n\t\t\tself.array.removeLast\n\t\t} {\n\t\t\tself.array[index] := self.array.last;\n\t\t\tself.array.removeLast;\n\t\t\t(2 * index <= self.size).if {\n\t\t\t\tself.downHeap(index)\n\t\t\t} {\n\t\t\t\tself.upHeap(index)\n\t\t\t}\n\t\t};\n\t\tremoved\n\t}",
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
  "{ :self :oldObject :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(self.size) { :i |\n\t\t\t\t(self.array[i] = oldObject).ifTrue {\n\t\t\t\t\tself.privateRemoveAt(i).return\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.array.removeAll\n\t}",
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
  "{ :self :index |\n\t\t(index > self.size).if {\n\t\t\tself.errorInvalidIndex('removeAt', index)\n\t\t} {\n\t\t\tself.privateRemoveAt(index)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.removeAt(1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet newCollection = Heap();\n\t\t1.toDo(self.size) { :index |\n\t\t\tlet element = self.array[index];\n\t\t\taBlock(element).ifTrue {\n\t\t\t\tnewCollection.add(element)\n\t\t\t}\n\t\t};\n\t\tnewCollection\n\t}",
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
  "{ :self |\n\t\tself.array.size\n\t}",
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
  "{ :self :anIndex |\n\t\t(anIndex = 1).if {\n\t\t\tself.indexUpdate(self.array[1], 1);\n\t\t\tself\n\t\t} {\n\t\t\tlet index = nil;\n\t\t\tlet parentValue = nil;\n\t\t\tlet parentIndex = nil;\n\t\t\tlet value = nil;\n\t\t\tvalue := self.array[index := anIndex];\n\t\t\t{\n\t\t\t\tindex > 1 & {\n\t\t\t\t\tparentIndex := index.bitShiftRight(1);\n\t\t\t\t\tparentValue := self.array[parentIndex];\n\t\t\t\t\tself.compare(value, parentValue)\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tself.array[index] := parentValue;\n\t\t\t\tself.indexUpdate(parentValue, index);\n\t\t\t\tindex := parentIndex\n\t\t\t};\n\t\t\tself.array[index] := value;\n\t\t\tself.indexUpdate(value, index)\n\t\t}\n\t}",
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
  "{\n\t\tnewHeap().initializeSlots([], nil, nil)\n\t}",
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
  "{ :self:/2 |\n\t\tnewHeap().initializeSlots([], self:/2, nil)\n\t}",
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
  "{ :self |\n\t\tnewHeap().initializeSlots(self, nil, nil)\n\t}",
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
  "{ :self |\n\t\tself.asList.asHeap\n\t}",
);
