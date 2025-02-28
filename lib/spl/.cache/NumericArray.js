sl.addType(
  false,
  "NumericArray",
  "NumericArray",
  ["Object", "Iterable", "Indexable", "Collection", "Sequenceable"],
  ["contents", "shape", "storageType"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject | hasEqualSlots(self,anObject) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "arrayDepth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  },
  "{ :self | size(shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normal_1(_self);
  },
  "{ :self | normal(self) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "at",
  ["self", "i"],
  function (_self, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_rank_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_contents_1(_self), _i);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "at");
    });
  },
  "{ :self :i | if((=(rank(self), 1)), { at(contents(self),i) }, { error(self,'at') }) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "at",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_rank_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL1 = _assertIsOfSize_2(_shape_1(_self), 2);
      let _m = _at_2(__SPL1, 1);
      let _n = _at_2(__SPL1, 2);
      /* Statements */
      return _at_2(_contents_1(_self), _plusSign_2(_asterisk_2(_i, _n), _j));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "at");
    });
  },
  "{ :self :i :j | if((=(rank(self), 2)), { let __SPL1 = assertIsOfSize(shape(self), 2); let m = at(__SPL1, 1); let n = at(__SPL1, 2); at(contents(self),+(*(i, n), j)) }, { error(self,'at') }) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atLinear",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index | at(contents(self),index) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "atPath",
  ["self", "cartesianIndex"],
  function (_self, _cartesianIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cartesianIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _contents_1(_self),
      _linearIndex_2(_shape_1(_self), _cartesianIndex),
    );
  },
  "{ :self :cartesianIndex | at(contents(self),linearIndex(shape(self),cartesianIndex)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asNumericArray_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _shape_1(_self),
    );
  },
  "{ :self :aBlock:/1 | asNumericArray(collect(contents(self),aBlock:/1),shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "deepIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shapeIndices_1(_shape_1(_self));
  },
  "{ :self | shapeIndices(shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_rank_1(_self), 1);
  },
  "{ :self | +(rank(self), 1) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "dimensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shape_1(_self);
  },
  "{ :self | shape(self) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "elementType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "SmallFloat";
  },
  "{ :self | 'SmallFloat' }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "isCommensurate",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_shape_1(_self), _shape_1(_other)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_storageType_1(_self), _storageType_1(_other));
      },
    );
  },
  "{ :self :other | &(=(shape(self), shape(other)), { =(storageType(self), storageType(other)) }) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_rank_1(_self), 2);
  },
  "{ :self | =(rank(self), 2) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "linearIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_contents_1(_self));
  },
  "{ :self | keys(contents(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "matrixPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPlot_1(_normal_1(_self));
  },
  "{ :self | matrixPlot(normal(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "normal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_asList_1(_contents_1(_self)), _shape_1(_self));
  },
  "{ :self | reshape(asList(contents(self)),shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  },
  "{ :self | size(shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "ravel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_contents_1(_self));
  },
  "{ :self | asList(contents(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_shape_1(_self));
  },
  "{ :self | first(shape(self)) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.asNumericArray(%)", [
      _contents_1(_self),
      _shape_1(_self),
    ]);
  },
  "{ :self | format('%.asNumericArray(%)',[contents(self), shape(self)]) }",
);

sl.addMethodToExistingType(
  "NumericArray",
  "NumericArray",
  "withCollect",
  ["self", "other", "aBlock:/2"],
  function (_self, _other, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCommensurate_2(_self, _other), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asNumericArray_2(
        _withCollect_3(_contents_1(_self), _contents_1(_other), _aBlock_2),
        _shape_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "withCollect: unequal shape or storage type");
    });
  },
  "{ :self :other :aBlock:/2 | if(isCommensurate(self,other), { asNumericArray(withCollect(contents(self),contents(other), aBlock:/2),shape(self)) }, { error(self,'withCollect: unequal shape or storage type') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericArray",
  "asNumericArray",
  ["self", "storageType"],
  function (_self, _storageType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _storageType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _caseOf_2(_storageType, [
      _hyphenMinusGreaterThanSign_2("Byte", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asByteArray_1(_ravel_1(_self));
      }),
      _hyphenMinusGreaterThanSign_2("Float32", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asFloat32Array_1(_ravel_1(_self));
      }),
      _hyphenMinusGreaterThanSign_2("Float64", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asFloat64Array_1(_ravel_1(_self));
      }),
    ]);
    /* Statements */
    return _asNumericArray_2(_contents, _shape_1(_self));
  },
  "{ :self :storageType | let contents = caseOf(storageType,[->('Byte', { asByteArray(ravel(self)) }), ->('Float32', { asFloat32Array(ravel(self)) }), ->('Float64', { asFloat64Array(ravel(self)) })]); asNumericArray(contents, shape(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericArray",
  "asNumericArray",
  ["self", "storageType"],
  function (_self, _storageType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _storageType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _caseOf_2(_storageType, [
      _hyphenMinusGreaterThanSign_2("Byte", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asByteArray_1(_ravel_1(_self));
      }),
      _hyphenMinusGreaterThanSign_2("Float32", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asFloat32Array_1(_ravel_1(_self));
      }),
      _hyphenMinusGreaterThanSign_2("Float64", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asFloat64Array_1(_ravel_1(_self));
      }),
    ]);
    /* Statements */
    return _asNumericArray_2(_contents, _shape_1(_self));
  },
  "{ :self :storageType | let contents = caseOf(storageType,[->('Byte', { asByteArray(ravel(self)) }), ->('Float32', { asFloat32Array(ravel(self)) }), ->('Float64', { asFloat64Array(ravel(self)) })]); asNumericArray(contents, shape(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericArray",
  "asNumericArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asNumericArray_2(_self, "Float64");
  },
  "{ :self | asNumericArray(self,'Float64') }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericArray",
  "asNumericArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asNumericArray_2(_self, "Float64");
  },
  "{ :self | asNumericArray(self,'Float64') }",
);

sl.extendTypeOrTraitWithMethod(
  "ByteArray",
  "NumericArray",
  "asNumericArray",
  ["self", "shape"],
  function (_self, _shape) {
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
  },
  "{ :self :shape | initializeSlots(newNumericArray(),self, shape, storageType(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float32Array",
  "NumericArray",
  "asNumericArray",
  ["self", "shape"],
  function (_self, _shape) {
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
  },
  "{ :self :shape | initializeSlots(newNumericArray(),self, shape, storageType(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "NumericArray",
  "asNumericArray",
  ["self", "shape"],
  function (_self, _shape) {
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
  },
  "{ :self :shape | initializeSlots(newNumericArray(),self, shape, storageType(self)) }",
);
