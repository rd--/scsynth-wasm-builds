sl.addType(
  false,
  "Matrix",
  "Matrix",
  ["Object"],
  ["numberOfRows", "numberOfColumns", "elementType", "contents"],
);

sl.copyTraitToType(
  "Object",
  "Matrix",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "at",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_3(_contents_1(_self), _i, _j);
  },
  "{ :self :i :j |\n\t\tself.contents[i, j]\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "determinant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _size = _numberOfRows_1(_self);
      let _array = _contents_1(_self);
      /* Statements */
      return _if_3(_equalsSign_2(_size, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(
          _asterisk_2(_at_3(_array, 1, 1), _at_3(_array, 2, 2)),
          _asterisk_2(_at_3(_array, 1, 2), _at_3(_array, 2, 1)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_size, 3), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _hyphenMinus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(
                _plusSign_2(
                  _plusSign_2(
                    _asterisk_2(
                      _asterisk_2(_at_3(_array, 1, 1), _at_3(_array, 2, 2)),
                      _at_3(_array, 3, 3),
                    ),
                    _asterisk_2(
                      _asterisk_2(_at_3(_array, 1, 2), _at_3(_array, 2, 3)),
                      _at_3(_array, 3, 1),
                    ),
                  ),
                  _asterisk_2(
                    _asterisk_2(_at_3(_array, 1, 3), _at_3(_array, 2, 1)),
                    _at_3(_array, 3, 2),
                  ),
                ),
                _asterisk_2(
                  _asterisk_2(_at_3(_array, 1, 3), _at_3(_array, 2, 2)),
                  _at_3(_array, 3, 1),
                ),
              ),
              _asterisk_2(
                _asterisk_2(_at_3(_array, 1, 2), _at_3(_array, 2, 1)),
                _at_3(_array, 3, 3),
              ),
            ),
            _asterisk_2(
              _asterisk_2(_at_3(_array, 1, 1), _at_3(_array, 2, 3)),
              _at_3(_array, 3, 2),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_1("Matrix>>determinant: not implemented");
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        "Matrix>>determinant: not defined at non-square matrices",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.numberOfRows;\n\t\t\tlet array = self.contents;\n\t\t\t(size = 2).if {\n\t\t\t\t(array[1, 1] * array[2, 2]) - (array[1, 2] * array[2, 1])\n\t\t\t} {\n\t\t\t\t(size = 3).if {\n\t\t\t\t\t(array[1, 1] * array[2, 2] * array[3, 3]) +\n\t\t\t\t\t(array[1, 2] * array[2, 3] * array[3, 1]) +\n\t\t\t\t\t(array[1, 3] * array[2, 1] * array[3, 2]) -\n\t\t\t\t\t(array[1, 3] * array[2, 2] * array[3, 1]) -\n\t\t\t\t\t(array[1, 2] * array[2, 1] * array[3, 3]) -\n\t\t\t\t\t(array[1, 1] * array[2, 3] * array[3, 2])\n\t\t\t\t} {\n\t\t\t\t\t'Matrix>>determinant: not implemented'.error\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\t'Matrix>>determinant: not defined at non-square matrices'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "diagonal",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _l = _hyphenMinus_2(_min_1(_shape_1(_self)), _abs_1(_k));
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _l), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_3(
        _self,
        _hyphenMinus_2(_i, _min_2(_k, 0)),
        _plusSign_2(_i, _max_2(_k, 0)),
      );
    });
  },
  "{ :self :k |\n\t\tlet l = self.shape.min - k.abs;\n\t\t1:l.collect { :i |\n\t\t\tself[i - k.min(0), i + k.max(0)]\n\t\t}\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "diagonal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _diagonal_2(_self, 0);
  },
  "{ :self |\n\t\tself.diagonal(0)\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "isColumnVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_numberOfColumns_1(_self), 1);
  },
  "{ :self |\n\t\tself.numberOfColumns = 1\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "isMatrixOf",
  ["self", "elementType"],
  function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_elementType_1(_self), _elementType);
  },
  "{ :self :elementType |\n\t\tself.elementType = elementType\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "isRowVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_numberOfRows_1(_self), 1);
  },
  "{ :self |\n\t\tself.numberOfRows = 1\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "isSquareMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_numberOfRows_1(_self), _numberOfColumns_1(_self));
  },
  "{ :self |\n\t\tself.numberOfRows = self.numberOfColumns\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "linearIndex",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_hyphenMinus_2(_i, 1), _numberOfRows_1(_self)),
      _j,
    );
  },
  "{ :self :i :j |\n\t\t(i - 1) * self.numberOfRows + j\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_numberOfRows_1(_self), _numberOfColumns_1(_self)];
  },
  "{ :self |\n\t\t[self.numberOfRows, self.numberOfColumns]\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "trace",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _limit = _min_1(_shape_1(_self));
    /* Statements */
    return _aBlock_1(_collect_2(_upOrDownTo_2(1, _limit), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_3(_self, _each, _each);
    }));
  },
  "{ :self :aBlock:/1 |\n\t\tlet limit = self.shape.min;\n\t\taBlock(\n\t\t\t1:limit.collect { :each |\n\t\t\t\tself.at(each, each)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "trace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _trace_2(_self, _sum_1);
  },
  "{ :self |\n\t\tself.trace(sum:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "asMatrix",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _numberOfRows = _size_1(_self);
      let _numberOfColumns = _size_1(_anyOne_1(_self));
      let _elementType = _elementType_1(_anyOne_1(_self));
      /* Statements */
      return _if_3(
        _allSatisfy_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_elementType_1(_each), _elementType);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _initializeSlots_5(
            _newMatrix_0(),
            _numberOfRows,
            _numberOfColumns,
            _elementType,
            _aBlock_1(_self),
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(
            _self,
            "@Sequence>>asMatrix: non-uniform elementType",
          );
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
      return _error_2(_self, "@Sequence>>asMatrix: not a matrix");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.isMatrix.if {\n\t\t\tlet numberOfRows = self.size;\n\t\t\tlet numberOfColumns = self.anyOne.size;\n\t\t\tlet elementType = self.anyOne.elementType;\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.elementType = elementType\n\t\t\t}.if {\n\t\t\t\tnewMatrix().initializeSlots(numberOfRows, numberOfColumns, elementType, aBlock(self))\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>asMatrix: non-uniform elementType')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequence>>asMatrix: not a matrix')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "asMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asMatrix_2(_self, _deepCopy_1);
  },
  "{ :self |\n\t\tself.asMatrix(deepCopy:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "determinant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _determinant_1(_asMatrix_2(_self, _identity_1));
  },
  "{ :self |\n\t\tself.asMatrix(identity:/1).determinant\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "numberOfRows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isArray_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>numberOfRows: not an array");
    });
  },
  "{ :self |\n\t\tself.isArray.if {\n\t\t\tself.size\n\t\t} {\n\t\t\tself.error('@Sequence>>numberOfRows: not an array')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "numberOfColumns",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isArray_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _size_1(_anyOne_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>numberOfColumns: not an array");
    });
  },
  "{ :self |\n\t\tself.isArray.if {\n\t\t\tself.anyOne.size\n\t\t} {\n\t\t\tself.error('@Sequence>>numberOfColumns: not an array')\n\t\t}\n\t}",
);
