sl.addType(
  false,
  "SparseArray",
  "SparseArray",
  [
    "Object",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
  ],
  ["contents", "shape", "unspecifiedValue"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SparseArray",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "SparseArray",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "SparseArray",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "SparseArray",
);

sl.copyTraitMethodsToType(
  "Collection",
  "SparseArray",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "SparseArray",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "arrayDepth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rank_1(_self);
  }, ["self"]),
  "{ :self | rank(self) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "arrayRules",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _shape_1(_self);
    let _answer = [];
    /* Statements */
    _withIndexDo_2(
      _contents_1(_self),
      sl.annotateFunction(function (_each, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _hyphenMinusGreaterThanSign_2(_cartesianIndex_2(_shape, _i), _each),
        );
      }, ["each", "i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let shape = shape(self); let answer = []; withIndexDo(contents(self), { :each :i | add(answer,->(cartesianIndex(shape,i), each)) }); answer }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "at",
  ["self", "i"],
  sl.annotateFunction(function (_self, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _i";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _shape_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_shape), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atLinear_2(_self, _linearIndex_2(_shape_1(_self), [_i]));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _keysAndValuesDo_2(
          _contents_1(_self),
          sl.annotateFunction(function (_key, _value) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _key, _value";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _c = _cartesianIndex_2(_shape, _key);
            /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_at_2(_c, 1), _i),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _answer,
                  _hyphenMinusGreaterThanSign_2(_allButFirst_1(_c), _value),
                );
              }, []),
            );
          }, ["key", "value"]),
        );
        return _SparseArray_3(
          _answer,
          _allButFirst_1(_shape),
          _unspecifiedValue_1(_self),
        );
      }, []),
    );
  }, ["self", "i"]),
  "{ :self :i | let shape = shape(self); if((=(size(shape), 1)), { atLinear(self,linearIndex(shape(self),[i])) }, { let answer = []; keysAndValuesDo(contents(self), { :key :value | let c = cartesianIndex(shape,key); ifTrue((=(at(c, 1), i)), { add(answer,->(allButFirst(c), value)) }) }); SparseArray(answer, allButFirst(shape), unspecifiedValue(self)) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "at",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_at_2(_self, _i), _j);
  }, ["self", "i", "j"]),
  "{ :self :i :j | at(at(self,i),j) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "atLinear",
  ["self", "linearIndex"],
  sl.annotateFunction(function (_self, _linearIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _linearIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _map = _contents_1(_self);
    /* Statements */
    return _if_3(
      _includesKey_2(_map, _linearIndex),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_map, _linearIndex);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unspecifiedValue_1(_self);
      }, []),
    );
  }, ["self", "linearIndex"]),
  "{ :self :linearIndex | let map = contents(self); if(includesKey(map,linearIndex), { at(map,linearIndex) }, { unspecifiedValue(self) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "atPath",
  ["self", "cartesianIndex"],
  sl.annotateFunction(function (_self, _cartesianIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cartesianIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _atLinear_2(_self, _linearIndex_2(_shape_1(_self), _cartesianIndex));
  }, ["self", "cartesianIndex"]),
  "{ :self :cartesianIndex | atLinear(self,linearIndex(shape(self),cartesianIndex)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _SparseArray_3(
      _collect_2(_contents_1(_self), _aBlock_1),
      _shape_1(_self),
      _unspecifiedValue_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | SparseArray(collect(contents(self),aBlock:/1), shape(self), unspecifiedValue(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "deepIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shapeIndices_1(_shape_1(_self));
  }, ["self"]),
  "{ :self | shapeIndices(shape(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "depth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_rank_1(_self), 1);
  }, ["self"]),
  "{ :self | +(rank(self), 1) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "dimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shape_1(_self);
  }, ["self"]),
  "{ :self | shape(self) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "isMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_rank_1(_self), 2);
  }, ["self"]),
  "{ :self | =(rank(self), 2) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "linearIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | keys(contents(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "nonZeroPositions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rho = _shape_1(_self);
    /* Statements */
    return _collect_2(
      _keys_1(_contents_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _cartesianIndex_2(_rho, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let rho = shape(self); collect(keys(contents(self)), { :each | cartesianIndex(rho,each) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "nonZeroValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | values(contents(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _map = _contents_1(_self);
    let _zero = _unspecifiedValue_1(_self);
    /* Statements */
    return _deepCollect_2(
      _iota_1(_shape_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesKey_2(_map, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_map, _each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _zero;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let map = contents(self); let zero = unspecifiedValue(self); deepCollect(iota(shape(self)), { :each | if(includesKey(map,each), { at(map,each) }, { zero }) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "rank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  }, ["self"]),
  "{ :self | size(shape(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "ravel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _product_1(_shape_1(_self));
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atLinear_2(_self, _i);
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | let n = product(shape(self)); collect(upOrDownTo(1, n), { :i | atLinear(self,i) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_shape_1(_self));
  }, ["self"]),
  "{ :self | first(shape(self)) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "specifiedElementCount",
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
  "SparseArray",
  "SparseArray",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("SparseArray(%, %, %)", [
      _arrayRules_1(_self),
      _shape_1(_self),
      _unspecifiedValue_1(_self),
    ]);
  }, ["self"]),
  "{ :self | format('SparseArray(%, %, %)',[arrayRules(self), shape(self), unspecifiedValue(self)]) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "withCollect",
  ["self", "other", "aBlock:/2"],
  sl.annotateFunction(function (_self, _other, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _exclamationMarkEqualsSign_2(_rank_1(_self), _rank_1(_other)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _exclamationMarkEqualsSign_2(
            _unspecifiedValue_1(_self),
            _unspecifiedValue_1(_other),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "withCollect: unequal rank or unspecified value",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _shape = _max_2(_shape_1(_self), _shape_1(_other));
        let _linearIndices = _sort_1(
          _nub_1(
            _plusSignPlusSign_2(
              _linearIndices_1(_self),
              _linearIndices_1(_other),
            ),
          ),
        );
        /* Statements */
        return _SparseArray_3(
          _collect_2(
            _linearIndices,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinusGreaterThanSign_2(
                _i,
                _aBlock_2(_atLinear_2(_self, _i), _atLinear_2(_other, _i)),
              );
            }, ["i"]),
          ),
          _shape,
          _unspecifiedValue_1(_self),
        );
      }, []),
    );
  }, ["self", "other", "aBlock:/2"]),
  "{ :self :other :aBlock:/2 | if((|(!=(rank(self), rank(other)), { !=(unspecifiedValue(self), unspecifiedValue(other)) })), { error(self,'withCollect: unequal rank or unspecified value') }, { let shape = max(shape(self),shape(other)); let linearIndices = sort(nub((++(linearIndices(self), linearIndices(other))))); SparseArray(collect(linearIndices, { :i | ->(i, aBlock(atLinear(self,i), atLinear(other,i))) }), shape, unspecifiedValue(self)) }) }",
);

sl.addMethodToExistingType(
  "SparseArray",
  "SparseArray",
  "withDeepIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  sl.annotateFunction(function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _contents_1(_self),
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _elementAndIndexBlock_2(
          _cartesianIndex_2(_shape_1(_self), _key),
          _value,
        );
      }, ["key", "value"]),
    );
  }, ["self", "elementAndIndexBlock:/2"]),
  "{ :self :elementAndIndexBlock:/2 | keysAndValuesDo(contents(self), { :key :value | elementAndIndexBlock(cartesianIndex(shape(self),key), value) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "SparseArray",
  "SparseArray",
  ["self", "shape", "unspecifiedValue"],
  sl.annotateFunction(function (_self, _shape, _unspecifiedValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _shape, _unspecifiedValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newSparseArray_0(),
      _self,
      _shape,
      _unspecifiedValue,
    );
  }, ["self", "shape", "unspecifiedValue"]),
  "{ :self :shape :unspecifiedValue | initializeSlots(newSparseArray(),self, shape, unspecifiedValue) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SparseArray",
  "asSparseArray",
  ["self", "unspecifiedValue"],
  sl.annotateFunction(function (_self, _unspecifiedValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _unspecifiedValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _SparseArray_3(
      _arrayRules_2(_self, _unspecifiedValue),
      _shape_1(_self),
      _unspecifiedValue,
    );
  }, ["self", "unspecifiedValue"]),
  "{ :self :unspecifiedValue | SparseArray(arrayRules(self,unspecifiedValue), shape(self), unspecifiedValue) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SparseArray",
  "SparseArray",
  ["self", "shape", "unspecifiedValue"],
  sl.annotateFunction(function (_self, _shape, _unspecifiedValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _shape, _unspecifiedValue";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _map = _Map_0();
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _key_1(_each);
        let _linearIndex = _if_3(
          _isNumber_1(_index),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _linearIndex_2(_shape, _index);
          }, []),
        );
        /* Statements */
        return _atPut_3(_map, _linearIndex, _value_1(_each));
      }, ["each"]),
    );
    return _SparseArray_3(_map, _shape, _unspecifiedValue);
  }, ["self", "shape", "unspecifiedValue"]),
  "{ :self :shape :unspecifiedValue | let map = Map(); do(self, { :each | let index = key(each); let linearIndex = if(isNumber(index), { index }, { linearIndex(shape,index) }); atPut(map,linearIndex, value(each)) }); SparseArray(map, shape, unspecifiedValue) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SparseArray",
  "SparseArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _max_1(_collect_2(_self, _key_1));
    /* Statements */
    return _SparseArray_3(_self, _shape, 0);
  }, ["self"]),
  "{ :self | let shape = max(collect(self,key:/1)); SparseArray(self, shape, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SparseArray",
  "sparseIdentityMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL22 = _assertIsOfSize_2(_self, 2);
    let _m = _at_2(__SPL22, 1);
    let _n = _at_2(__SPL22, 2);
    let _k = _min_2(_m, _n);
    /* Statements */
    return _SparseArray_3(
      _collect_2(
        _upOrDownTo_2(1, _k),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2([_i, _i], 1);
        }, ["i"]),
      ),
      [_m, _n],
      0,
    );
  }, ["self"]),
  "{ :self | let __SPL22 = assertIsOfSize(self, 2); let m = at(__SPL22, 1); let n = at(__SPL22, 2); let k = min(m,n); SparseArray(collect(upOrDownTo(1, k), { :i | ->([i, i], 1) }), [m, n], 0) }",
);
