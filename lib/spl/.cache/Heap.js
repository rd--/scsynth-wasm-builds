sl.addType(
  false,
  "Heap",
  "Heap",
  ["Object", "Iterable", "Collection", "Extensible", "Removable"],
  ["array", "sortBlock", "indexUpdateBlock"],
);

sl.copyTraitToType(
  "Object",
  "Heap",
);

sl.copyTraitToType(
  "Iterable",
  "Heap",
);

sl.copyTraitToType(
  "Collection",
  "Heap",
);

sl.copyTraitToType(
  "Extensible",
  "Heap",
);

sl.copyTraitToType(
  "Removable",
  "Heap",
);

sl.addMethod(
  "Heap",
  "Heap",
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
    return _verticalLine_2(
      _equalsSignEqualsSign_2(_self, _anObject),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_isHeap_1(_anObject), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(
            _equalsSign_2(_size_1(_anObject), _size_1(_self)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _ampersand_2(
                _equalsSign_2(_sortBlock_1(_anObject), _sortBlock_1(_self)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _equalsSign_2(
                    _sort_2(_array_1(_self), _sortBlock_1(_self)),
                    _sort_2(_array_1(_anObject), _sortBlock_1(_self)),
                  );
                },
              );
            },
          );
        });
      },
    );
  },
  "{ :self :anObject |\n\t\tself == anObject | {\n\t\t\tanObject.isHeap & {\n\t\t\t\tanObject.size = self.size & {\n\t\t\t\t\tanObject.sortBlock = self.sortBlock & {\n\t\t\t\t\t\tself.array.sort(self.sortBlock) = anObject.array.sort(self.sortBlock)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _add_2(_array_1(_self), _anObject);
    _indexUpdate_3(_self, _anObject, _size_1(_self));
    _upHeap_2(_self, _size_1(_self));
    return _anObject;
  },
  "{ :self :anObject |\n\t\tself.array.add(anObject);\n\t\tself.indexUpdate(anObject, self.size);\n\t\tself.upHeap(self.size);\n\t\tanObject\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
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
    return _if_3(_greaterThanSign_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorInvalidIndex_3(_self, "at", _index);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_array_1(_self), _index);
    });
  },
  "{ :self :index |\n\t\t(index > self.size).if {\n\t\t\tself.errorInvalidIndex('at', index)\n\t\t} {\n\t\t\tself.array[index]\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "atPut",
  ["self", "index", "newObject"],
  function (_self, _index, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _newObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_1("Heap>>atPut: shouldNotImplement");
  },
  "{ :self :index :newObject |\n\t\t'Heap>>atPut: shouldNotImplement'.error\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "capacity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
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
    _replace_2(_array_1(_self), _aBlock_1);
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tself.array.replace(aBlock:/1);\n\t\tself\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "compare",
  ["self", "anItem", "anotherItem"],
  function (_self, _anItem, _anotherItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anItem, _anotherItem";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_sortBlock_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_anItem, _anotherItem);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _value_3(_sortBlock_1(_self), _anItem, _anotherItem);
    });
  },
  "{ :self :anItem :anotherItem |\n\t\tself.sortBlock.ifNil {\n\t\t\tanItem <= anotherItem\n\t\t} {\n\t\t\tself.sortBlock.value(anItem, anotherItem)\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
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
    return _do_2(_array_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.array.do(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "downHeap",
  ["self", "anIndex"],
  function (_self, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _value = _at_2(_array_1(_self), _anIndex);
    let _index = _anIndex;
    let _childIndex = null;
    let _childValue = null;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _verticalLine_2(
        _greaterThanSignEqualsSign_2(
          _childIndex = _asterisk_2(2, _index),
          _size_1(_self),
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _childValue = _at_2(_array_1(_self), _childIndex);
          _ifTrue_2(
            _compare_3(
              _self,
              _at_2(_array_1(_self), _plusSign_2(_childIndex, 1)),
              _childValue,
            ),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              _childIndex = _plusSign_2(_childIndex, 1);
              return _childValue = _at_2(_array_1(_self), _childIndex);
            },
          );
          return _compare_3(_self, _value, _childValue);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_array_1(_self), _index, _childValue);
      _indexUpdate_3(_self, _childValue, _index);
      return _index = _childIndex;
    });
    _ifTrue_2(_equalsSign_2(_childIndex, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _childValue = _at_2(_array_1(_self), _childIndex);
      return _ifFalse_2(_compare_3(_self, _value, _childValue), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_array_1(_self), _index, _childValue);
        _indexUpdate_3(_self, _childValue, _index);
        return _index = _childIndex;
      });
    });
    _atPut_3(_array_1(_self), _index, _value);
    return _indexUpdate_3(_self, _value, _index);
  },
  "{ :self :anIndex |\n\t\tlet value = self.array[anIndex];\n\t\tlet index = anIndex;\n\t\tlet childIndex = nil;\n\t\tlet childValue = nil;\n\t\t{\n\t\t\t(childIndex := 2 * index) >= self.size | {\n\t\t\t\tchildValue := self.array[childIndex];\n\t\t\t\tself.compare(self.array[childIndex + 1], childValue).ifTrue {\n\t\t\t\t\tchildIndex := childIndex + 1;\n\t\t\t\t\tchildValue := self.array[childIndex]\n\t\t\t\t};\n\t\t\t\tself.compare(value, childValue)\n\t\t\t}\n\t\t}.whileFalse {\n\t\t\tself.array[index] := childValue;\n\t\t\tself.indexUpdate(childValue, index);\n\t\t\tindex := childIndex\n\t\t};\n\t\t(childIndex = self.size).ifTrue {\n\t\t\tchildValue := self.array[childIndex];\n\t\t\tself.compare(value, childValue).ifFalse {\n\t\t\t\tself.array[index] := childValue;\n\t\t\t\tself.indexUpdate(childValue, index);\n\t\t\t\tindex := childIndex\n\t\t\t}\n\t\t};\n\t\tself.array[index] := value;\n\t\tself.indexUpdate(value, index)\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "downHeapSingle",
  ["self", "anIndex"],
  function (_self, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _downHeap_2(_self, _anIndex);
  },
  "{ :self :anIndex |\n\t\tself.downHeap(anIndex)\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_array_1(_self), 1);
  },
  "{ :self |\n\t\tself.array[1]\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "indexUpdate",
  ["self", "anObject", "anIndex"],
  function (_self, _anObject, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNotNil_2(_indexUpdateBlock_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _value_3(_indexUpdateBlock_1(_self), _anObject, _anIndex);
    });
  },
  "{ :self :anObject :anIndex |\n\t\tself.indexUpdateBlock.ifNotNil {\n\t\t\tself.indexUpdateBlock.value(anObject, anIndex)\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _array_2(_self, _copy_1(_array_1(_self)));
  },
  "{ :self |\n\t\tself.array := self.array.copy\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "privateRemoveAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _removed = _at_2(_array_1(_self), _index);
    /* Statements */
    _if_3(_equalsSign_2(_index, _size_1(_array_1(_self))), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeLast_1(_array_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_array_1(_self), _index, _last_1(_array_1(_self)));
      _removeLast_1(_array_1(_self));
      return _if_3(
        _lessThanSignEqualsSign_2(_asterisk_2(2, _index), _size_1(_self)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _downHeapSingle_2(_self, _index);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _upHeap_2(_self, _index);
        },
      );
    });
    return _removed;
  },
  "{ :self :index |\n\t\tlet removed = self.array.at(index);\n\t\t(index = self.array.size).if {\n\t\t\tself.array.removeLast\n\t\t} {\n\t\t\tself.array[index] := self.array.last;\n\t\t\tself.array.removeLast;\n\t\t\t(2 * index <= self.size).if {\n\t\t\t\tself.downHeapSingle(index)\n\t\t\t} {\n\t\t\t\tself.upHeap(index)\n\t\t\t}\n\t\t};\n\t\tremoved\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "removeIfAbsent",
  ["self", "oldObject", "aBlock:/0"],
  function (_self, _oldObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _oldObject, _aBlock_0";
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
      /* Statements */
      _toDo_3(1, _size_1(_self), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_at_2(_array_1(_self), _i), _oldObject),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_privateRemoveAt_2(_self, _i));
          },
        );
      });
      return _aBlock_0();
    });
  },
  "{ :self :oldObject :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(self.size) { :i |\n\t\t\t\t(self.array[i] = oldObject).ifTrue {\n\t\t\t\t\tself.privateRemoveAt(i).return\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAll_1(_array_1(_self));
  },
  "{ :self |\n\t\tself.array.removeAll\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "removeAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorInvalidIndex_3(_self, "removeAt", _index);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _privateRemoveAt_2(_self, _index);
    });
  },
  "{ :self :index |\n\t\t(index > self.size).if {\n\t\t\tself.errorInvalidIndex('removeAt', index)\n\t\t} {\n\t\t\tself.privateRemoveAt(index)\n\t\t}\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAt_2(_self, 1);
  },
  "{ :self |\n\t\tself.removeAt(1)\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _newCollection = _Heap_0();
    /* Statements */
    _toDo_3(1, _size_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _element = _at_2(_array_1(_self), _index);
      /* Statements */
      return _ifTrue_2(_aBlock_1(_element), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_newCollection, _element);
      });
    });
    return _newCollection;
  },
  "{ :self :aBlock:/1 |\n\t\tlet newCollection = Heap();\n\t\t1.toDo(self.size) { :index |\n\t\t\tlet element = self.array[index];\n\t\t\taBlock(element).ifTrue {\n\t\t\t\tnewCollection.add(element)\n\t\t\t}\n\t\t};\n\t\tnewCollection\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
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
    return _size_1(_array_1(_self));
  },
  "{ :self |\n\t\tself.array.size\n\t}",
);

sl.addMethod(
  "Heap",
  "Heap",
  "upHeap",
  ["self", "anIndex"],
  function (_self, _anIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_anIndex, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _indexUpdate_3(_self, _at_2(_array_1(_self), 1), 1);
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _index = null;
      let _parentValue = null;
      let _parentIndex = null;
      let _value = null;
      /* Statements */
      _value = _at_2(_array_1(_self), _index = _anIndex);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_greaterThanSign_2(_index, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _parentIndex = _bitShiftRight_2(_index, 1);
          _parentValue = _at_2(_array_1(_self), _parentIndex);
          return _compare_3(_self, _value, _parentValue);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_array_1(_self), _index, _parentValue);
        _indexUpdate_3(_self, _parentValue, _index);
        return _index = _parentIndex;
      });
      _atPut_3(_array_1(_self), _index, _value);
      return _indexUpdate_3(_self, _value, _index);
    });
  },
  "{ :self :anIndex |\n\t\t(anIndex = 1).if {\n\t\t\tself.indexUpdate(self.array[1], 1);\n\t\t\tself\n\t\t} {\n\t\t\tlet index = nil;\n\t\t\tlet parentValue = nil;\n\t\t\tlet parentIndex = nil;\n\t\t\tlet value = nil;\n\t\t\tvalue := self.array[index := anIndex];\n\t\t\t{\n\t\t\t\tindex > 1 & {\n\t\t\t\t\tparentIndex := index.bitShiftRight(1);\n\t\t\t\t\tparentValue := self.array[parentIndex];\n\t\t\t\t\tself.compare(value, parentValue)\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tself.array[index] := parentValue;\n\t\t\t\tself.indexUpdate(parentValue, index);\n\t\t\t\tindex := parentIndex\n\t\t\t};\n\t\t\tself.array[index] := value;\n\t\t\tself.indexUpdate(value, index)\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "Heap",
  "Heap",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newHeap_0(), [], null, null);
  },
  "{\n\t\tnewHeap().initializeSlots([], nil, nil)\n\t}",
);

sl.addMethod(
  "Block",
  "Heap",
  "Heap",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newHeap_0(), [], _self_2, null);
  },
  "{ :self:/2 |\n\t\tnewHeap().initializeSlots([], self:/2, nil)\n\t}",
);

sl.addMethod(
  "List",
  "Heap",
  "asHeap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newHeap_0(), _self, null, null);
  },
  "{ :self |\n\t\tnewHeap().initializeSlots(self, nil, nil)\n\t}",
);

sl.addMethod(
  "Range",
  "Heap",
  "asHeap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asHeap_1(_asList_1(_self));
  },
  "{ :self |\n\t\tself.asList.asHeap\n\t}",
);
