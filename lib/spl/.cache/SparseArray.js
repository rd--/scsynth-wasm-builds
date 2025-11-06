sl.addType(
  false,
  "SparseArray",
  "SparseArray",
  [
    "Object",
    "Equatable",
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
  "Equatable",
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
  "{ :self |\n\t\tself.rank\n\t}",
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
  "{ :self |\n\t\tlet shape = self.shape;\n\t\tlet answer = [];\n\t\tself.contents.withIndexDo { :each :i |\n\t\t\tanswer.add(shape.cartesianIndex(i) -> each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :i |\n\t\tlet shape = self.shape;\n\t\t(shape.size = 1).if {\n\t\t\tself.atLinear(self.shape.linearIndex([i]))\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tself.contents.keysAndValuesDo { :key :value |\n\t\t\t\tlet c = shape.cartesianIndex(key);\n\t\t\t\t(c[1] = i).ifTrue {\n\t\t\t\t\tanswer.add(c.allButFirst -> value)\n\t\t\t\t}\n\t\t\t};\n\t\t\tSparseArray(answer, shape.allButFirst, self.unspecifiedValue)\n\t\t}\n\t}",
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
  "{ :self :i :j |\n\t\tself.at(i).at(j)\n\t}",
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
  "{ :self :linearIndex |\n\t\tlet map = self.contents;\n\t\tmap.includesKey(linearIndex).if {\n\t\t\tmap.at(linearIndex)\n\t\t} {\n\t\t\tself.unspecifiedValue\n\t\t}\n\t}",
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
  "{ :self :cartesianIndex |\n\t\tself.atLinear(\n\t\t\tself.shape.linearIndex(cartesianIndex)\n\t\t)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tSparseArray(\n\t\t\tself.contents.collect(aBlock:/1),\n\t\t\tself.shape,\n\t\t\tself.unspecifiedValue\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.shape.shapeIndices\n\t}",
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
  "{ :self |\n\t\tself.rank + 1\n\t}",
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
  "{ :self |\n\t\tself.shape\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.rank = 2\n\t}",
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
  "{ :self |\n\t\tself.contents.keys\n\t}",
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
  "{ :self |\n\t\tlet rho = self.shape;\n\t\tself.contents.keys.collect { :each |\n\t\t\trho.cartesianIndex(each)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.contents.values\n\t}",
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
  "{ :self |\n\t\tlet map = self.contents;\n\t\tlet zero = self.unspecifiedValue;\n\t\tself.shape.iota.deepCollect { :each |\n\t\t\tmap.includesKey(each).if {\n\t\t\t\tmap.at(each)\n\t\t\t} {\n\t\t\t\tzero\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.shape.size\n\t}",
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
      _to_2(1, _n),
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
  "{ :self |\n\t\tlet n = self.shape.product;\n\t\t1.to(n).collect { :i |\n\t\t\tself.atLinear(i)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.shape.first\n\t}",
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
  "{ :self |\n\t\tself.contents.size\n\t}",
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
  "{ :self |\n\t\t'SparseArray(%, %, %)'.format([\n\t\t\tself.arrayRules,\n\t\t\tself.shape,\n\t\t\tself.unspecifiedValue\n\t\t])\n\t}",
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
  "{ :self :other :aBlock:/2 |\n\t\t(\n\t\t\tself.rank != other.rank | {\n\t\t\t\tself.unspecifiedValue != other.unspecifiedValue\n\t\t\t}\n\t\t).if {\n\t\t\tself.error('withCollect: unequal rank or unspecified value')\n\t\t} {\n\t\t\tlet shape = self.shape.max(other.shape);\n\t\t\tlet linearIndices = (self.linearIndices ++ other.linearIndices).nub.sort;\n\t\t\tSparseArray(\n\t\t\t\tlinearIndices.collect { :i |\n\t\t\t\t\ti -> aBlock(self.atLinear(i), other.atLinear(i))\n\t\t\t\t},\n\t\t\t\tshape,\n\t\t\t\tself.unspecifiedValue\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.contents.keysAndValuesDo { :key :value |\n\t\t\telementAndIndexBlock(\n\t\t\t\tself.shape.cartesianIndex(key),\n\t\t\t\tvalue\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self :shape :unspecifiedValue |\n\t\tnewSparseArray().initializeSlots(self, shape, unspecifiedValue)\n\t}",
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
  "{ :self :unspecifiedValue |\n\t\tSparseArray(\n\t\t\tself.arrayRules(unspecifiedValue),\n\t\t\tself.shape,\n\t\t\tunspecifiedValue\n\t\t)\n\t}",
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
  "{ :self :shape :unspecifiedValue |\n\t\tlet map = Map();\n\t\tself.do { :each |\n\t\t\tlet index = each.key;\n\t\t\tlet linearIndex = index.isNumber.if { index } { shape.linearIndex(index) };\n\t\t\tmap.atPut(\n\t\t\t\tlinearIndex,\n\t\t\t\teach.value\n\t\t\t)\n\t\t};\n\t\tSparseArray(map, shape, unspecifiedValue)\n\t}",
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
  "{ :self |\n\t\tlet shape = self.collect(key:/1).max;\n\t\tSparseArray(self, shape, 0)\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_self, 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    let _k = _min_2(_m, _n);
    /* Statements */
    return _SparseArray_3(
      _collect_2(
        _to_2(1, _k),
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
  "{ :self |\n\t\tlet [m, n] = self;\n\t\tlet k = m.min(n);\n\t\tSparseArray(\n\t\t\t1.to(k).collect { :i |\n\t\t\t\t[i i] -> 1\n\t\t\t},\n\t\t\t[m n],\n\t\t\t0\n\t\t)\n\t}",
);
