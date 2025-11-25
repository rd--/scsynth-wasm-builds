sl.addType(
  false,
  "NumericArray",
  "NumericArray",
  [
    "Object",
    "Storeable",
    "Equatable",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
  ],
  ["contents", "shape", "storageType"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Collection",
  "NumericArray",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "NumericArray",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "arrayDepth",
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
  "NumericArray",
  "NumericArray",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normal_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.normal\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atifAbsent",
  ["self", "i", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _i, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_rank_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(_contents_1(_self), _i, _ifAbsent_0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "NumericArray>>at");
      }, []),
    );
  }, ["self", "i", "ifAbsent:/0"]),
  "{ :self :i :ifAbsent:/0 |\n\t\t(self.rank = 1).if {\n\t\t\tself.contents.atIfAbsent(i, ifAbsent:/0)\n\t\t} {\n\t\t\tself.error('NumericArray>>at')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "at",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar1, 1);
        let _n = _at_2(__SplVar1, 2);
        let _linearIndex = _plusSign_2(
          _asterisk_2(_hyphenMinus_2(_i, 1), _n),
          _j,
        );
        /* Statements */
        return _at_2(_contents_1(_self), _linearIndex);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "NumericArray>>at");
      }, []),
    );
  }, ["self", "i", "j"]),
  "{ :self :i :j |\n\t\t(self.rank = 2).if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\tlet linearIndex = ((i - 1) * n) + j;\n\t\t\tself.contents.at(linearIndex)\n\t\t} {\n\t\t\tself.error('NumericArray>>at')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atLinear",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.contents.at(index)\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atPath",
  ["self", "cartesianIndex"],
  sl.annotateFunction(function (_self, _cartesianIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cartesianIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _contents_1(_self),
      _linearIndex_2(_shape_1(_self), _cartesianIndex),
    );
  }, ["self", "cartesianIndex"]),
  "{ :self :cartesianIndex |\n\t\tself.contents.at(\n\t\t\tself.shape.linearIndex(cartesianIndex)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atPut",
  ["self", "i", "j", "x"],
  sl.annotateFunction(function (_self, _i, _j, _x) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _i, _j, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar2, 1);
        let _n = _at_2(__SplVar2, 2);
        let _linearIndex = _plusSign_2(
          _asterisk_2(_hyphenMinus_2(_i, 1), _n),
          _j,
        );
        /* Statements */
        return _atPut_3(_contents_1(_self), _linearIndex, _x);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "NumericArray>>atPut");
      }, []),
    );
  }, ["self", "i", "j", "x"]),
  "{ :self :i :j :x |\n\t\t(self.rank = 2).if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\tlet linearIndex = ((i - 1) * n) + j;\n\t\t\tself.contents.atPut(linearIndex, x)\n\t\t} {\n\t\t\tself.error('NumericArray>>atPut')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _NumericArray_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _shape_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tNumericArray(\n\t\t\tself.contents.collect(aBlock:/1),\n\t\t\tself.shape\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "dimensions",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_shape_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.shape.take(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "elementType",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "SmallFloat";
  }, ["unused"]),
  "{ :unused |\n\t\t'SmallFloat'\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isNumericArray_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_shape_1(_self), _shape_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_storageType_1(_self), _storageType_1(_anObject)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(_contents_1(_self), _contents_1(_anObject));
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumericArray & {\n\t\t\t(self.shape = anObject.shape) & {\n\t\t\t\t(self.storageType = anObject.storageType) & {\n\t\t\t\t\taBlock(self.contents, anObject.contents)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "isArray",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "isCommensurate",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_shape_1(_self), _shape_1(_other)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_storageType_1(_self), _storageType_1(_other));
      }, []),
    );
  }, ["self", "other"]),
  "{ :self :other |\n\t\tself.shape = other.shape & {\n\t\t\tself.storageType = other.storageType\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "isSquareMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _n = _at_2(__SplVar3, 1);
        let _m = _at_2(__SplVar3, 2);
        /* Statements */
        return _equalsSign_2(_n, _m);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.rank = 2) & {\n\t\t\tlet [n, m] = self.shape;\n\t\t\tn = m\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "matrixPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPlot_1(_normal_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.normal.matrixPlot\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_asList_1(_contents_1(_self)), _shape_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asList.reshape(self.shape)\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "ravel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asList\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
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
  "NumericArray",
  "NumericArray",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlotsOmitting_2(_self, ["storageType"]);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlotsOmitting(['storageType'])\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "transposeInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar4 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar4, 1);
        let _n = _at_2(__SplVar4, 2);
        /* Statements */
        return _if_3(
          _equalsSign_2(_n, _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _n,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _toDo_3(
                  _plusSign_2(_i, 1),
                  _n,
                  sl.annotateFunction(function (_j) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _j";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _x = _at_3(_self, _i, _j);
                    let _y = _at_3(_self, _j, _i);
                    /* Statements */
                    _atPut_4(_self, _i, _j, _y);
                    return _atPut_4(_self, _j, _i, _x);
                  }, ["j"]),
                );
              }, ["i"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _c = _contents_1(_self);
            let _k = _asterisk_2(_m, _n);
            let _visited = _BitSet_1(_k);
            let _cycle = 0;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _cycle = _plusSign_2(_cycle, 1);
                return _exclamationMarkEqualsSign_2(_cycle, _k);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _equalsSign_2(_at_2(_visited, _cycle), 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _a = _cycle;
                    /* Statements */
                    return _doWhileTrue_2(
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _a = _if_3(
                          _equalsSign_2(_a, _hyphenMinus_2(_k, 1)),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _hyphenMinus_2(_k, 1);
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _percentSign_2(
                              _asterisk_2(_a, _m),
                              _hyphenMinus_2(_k, 1),
                            );
                          }, []),
                        );
                        _swapWith_3(
                          _c,
                          _plusSign_2(_a, 1),
                          _plusSign_2(_cycle, 1),
                        );
                        return _atPut_3(_visited, _a, 1);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _exclamationMarkEqualsSign_2(_a, _cycle);
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
            return _reverseInPlace_1(_shape_1(_self));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "NumericArray>>transposeInPlace: not matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.rank = 2).if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\t(n = m).if {\n\t\t\t\t1.toDo(n) { :i |\n\t\t\t\t\t(i + 1).toDo(n) { :j |\n\t\t\t\t\t\tlet x = self.at(i, j);\n\t\t\t\t\t\tlet y = self.at(j, i);\n\t\t\t\t\t\tself.atPut(i, j, y);\n\t\t\t\t\t\tself.atPut(j, i, x)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}{\n\t\t\t\tlet c = self.contents;\n\t\t\t\tlet k = m * n;\n\t\t\t\tlet visited = BitSet(k);\n\t\t\t\tlet cycle = 0;\n\t\t\t\t{\n\t\t\t\t\tcycle := cycle + 1;\n\t\t\t\t\tcycle != k\n\t\t\t\t}.whileTrue {\n\t\t\t\t\t(visited[cycle] = 0).ifTrue {\n\t\t\t\t\t\tlet a = cycle;\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ta := (a = (k - 1)).if {\n\t\t\t\t\t\t\t\tk - 1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t(a * m) % (k - 1)\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tc.swapWith(a + 1, cycle + 1);\n\t\t\t\t\t\t\tvisited[a] := 1\n\t\t\t\t\t\t}.doWhileTrue {\n\t\t\t\t\t\t\ta != cycle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tself.shape.reverseInPlace\n\t\t\t}\n\t\t} {\n\t\t\tself.error('NumericArray>>transposeInPlace: not matrix')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "transpose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar5 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar5, 1);
        let _n = _at_2(__SplVar5, 2);
        let _c = _contents_1(_self);
        let _a = _new_2(_species_1(_c), _asterisk_2(_m, _n));
        let _k = 1;
        /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _m,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(
                  _a,
                  _k,
                  _at_2(
                    _c,
                    _plusSign_2(_asterisk_2(_hyphenMinus_2(_j, 1), _n), _i),
                  ),
                );
                return _k = _plusSign_2(_k, 1);
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _NumericArray_2(_a, [_n, _m]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "NumericArray>>transpose: not matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tlet [m, n] = self.shape;\n\t\t\tlet c = self.contents;\n\t\t\tlet a = c.species.new(m * n);\n\t\t\tlet k = 1;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\t1.toDo(m) { :j |\n\t\t\t\t\ta[k] := c[((j - 1) * n) + i];\n\t\t\t\t\tk := k + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tNumericArray(a, [n, m])\n\t\t} {\n\t\t\tself.error('NumericArray>>transpose: not matrix')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "withCollect",
  ["self", "other", "aBlock:/2"],
  sl.annotateFunction(function (_self, _other, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCommensurate_2(_self, _other),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _NumericArray_2(
          _withCollect_3(_contents_1(_self), _contents_1(_other), _aBlock_2),
          _shape_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "NumericArray>>withCollect: unequal shape or storage type",
        );
      }, []),
    );
  }, ["self", "other", "aBlock:/2"]),
  "{ :self :other :aBlock:/2 |\n\t\tself.isCommensurate(other).if {\n\t\t\tNumericArray(\n\t\t\t\tself.contents.withCollect(other.contents, aBlock:/2),\n\t\t\t\tself.shape\n\t\t\t)\n\t\t} {\n\t\t\tself.error('NumericArray>>withCollect: unequal shape or storage type')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericArray",
  "asNumericArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _NumericArray_2(_self, "Float64");
  }, ["self"]),
  "{ :self |\n\t\tNumericArray(self, 'Float64')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericArray",
  "asNumericArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _NumericArray_2(_self, "Float64");
  }, ["self"]),
  "{ :self |\n\t\tNumericArray(self, 'Float64')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericArray",
  "NumericArray",
  ["self", "storageType"],
  sl.annotateFunction(function (_self, _storageType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _storageType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _caseOf_2(_storageType, [
      _hyphenMinusGreaterThanSign_2(
        "Byte",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asByteArray_1(_ravel_1(_self));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Float32",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asFloat32Array_1(_ravel_1(_self));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Float64",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asFloat64Array_1(_ravel_1(_self));
        }, []),
      ),
    ]);
    /* Statements */
    return _NumericArray_2(_contents, _shape_1(_self));
  }, ["self", "storageType"]),
  "{ :self :storageType |\n\t\tlet contents = storageType.caseOf(\n\t\t\t[\n\t\t\t\t'Byte' -> { self.ravel.asByteArray },\n\t\t\t\t'Float32' -> { self.ravel.asFloat32Array },\n\t\t\t\t'Float64' -> { self.ravel.asFloat64Array }\n\t\t\t]\n\t\t);\n\t\tNumericArray(contents, self.shape)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericArray",
  "NumericArray",
  ["self", "storageType"],
  sl.annotateFunction(function (_self, _storageType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _storageType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _caseOf_2(_storageType, [
      _hyphenMinusGreaterThanSign_2(
        "Byte",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asByteArray_1(_ravel_1(_self));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Float32",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asFloat32Array_1(_ravel_1(_self));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Float64",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asFloat64Array_1(_ravel_1(_self));
        }, []),
      ),
    ]);
    /* Statements */
    return _NumericArray_2(_contents, _shape_1(_self));
  }, ["self", "storageType"]),
  "{ :self :storageType |\n\t\tlet contents = storageType.caseOf(\n\t\t\t[\n\t\t\t\t'Byte' -> { self.ravel.asByteArray },\n\t\t\t\t'Float32' -> { self.ravel.asFloat32Array },\n\t\t\t\t'Float64' -> { self.ravel.asFloat64Array }\n\t\t\t]\n\t\t);\n\t\tNumericArray(contents, self.shape)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericArray",
  "NumericArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _NumericArray_2(_self, "Float64");
  }, ["self"]),
  "{ :self |\n\t\tNumericArray(self, 'Float64')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericArray",
  "NumericArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _NumericArray_2(_self, "Float64");
  }, ["self"]),
  "{ :self |\n\t\tNumericArray(self, 'Float64')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "NumericArray",
  "NumericArray",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newNumericArray_0(),
      _self,
      _shape,
      _storageType_1(_self),
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tnewNumericArray().initializeSlots(\n\t\t\tself,\n\t\t\tshape,\n\t\t\tself.storageType\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "NumericArray",
  "NumericArray",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newNumericArray_0(),
      _self,
      _shape,
      _storageType_1(_self),
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tnewNumericArray().initializeSlots(\n\t\t\tself,\n\t\t\tshape,\n\t\t\tself.storageType\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "NumericArray",
  "NumericArray",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newNumericArray_0(),
      _self,
      _shape,
      _storageType_1(_self),
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tnewNumericArray().initializeSlots(\n\t\t\tself,\n\t\t\tshape,\n\t\t\tself.storageType\n\t\t)\n\t}",
);
