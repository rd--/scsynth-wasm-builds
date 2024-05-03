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
          /* Temporaries */
          let _answer = 0;
          /* Statements */
          _plainChangesDo_2(_asList_1(_upOrDownTo_2(1, _size)), function (_p) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _p";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _sign = _permutationSymbol_1(_p);
            let _entries = _withIndexCollect_2(_p, function (_i, _j) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _i, _j";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _at_2(_at_2(_array, _i), _j);
            });
            /* Statements */
            return _answer = _plusSign_2(
              _answer,
              _asterisk_2(_product_1(_entries), _sign),
            );
          });
          return _answer;
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
      return _error_2(
        _self,
        "Matrix>>determinant: not defined at non-square matrices",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.numberOfRows;\n\t\t\tlet array = self.contents;\n\t\t\t(size = 2).if {\n\t\t\t\t(array[1, 1] * array[2, 2]) - (array[1, 2] * array[2, 1])\n\t\t\t} {\n\t\t\t\t(size = 3).if {\n\t\t\t\t\t(array[1, 1] * array[2, 2] * array[3, 3]) +\n\t\t\t\t\t(array[1, 2] * array[2, 3] * array[3, 1]) +\n\t\t\t\t\t(array[1, 3] * array[2, 1] * array[3, 2]) -\n\t\t\t\t\t(array[1, 3] * array[2, 2] * array[3, 1]) -\n\t\t\t\t\t(array[1, 2] * array[2, 1] * array[3, 3]) -\n\t\t\t\t\t(array[1, 1] * array[2, 3] * array[3, 2])\n\t\t\t\t} {\n\t\t\t\t\tlet answer = 0;\n\t\t\t\t\t[1 .. size].plainChangesDo { :p |\n\t\t\t\t\t\tlet sign = p.permutationSymbol;\n\t\t\t\t\t\tlet entries = p.withIndexCollect { :i :j |\n\t\t\t\t\t\t\tarray[i][j]\n\t\t\t\t\t\t};\n\t\t\t\t\t\tanswer := answer + (entries.product * sign)\n\t\t\t\t\t};\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Matrix>>determinant: not defined at non-square matrices')\n\t\t}\n\t}",
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
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isSquareMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _tildeEqualsSign_2(_determinant_1(_self), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _n = _numberOfRows_1(_self);
        /* Statements */
        return _if_3(_equalsSign_2(_n, 2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let __genSym1 = _assertIsOfSize_2(
              _concatenation_1(_contents_1(_self)),
              4,
            ),
            _a = _at_2(__genSym1, 1),
            _b = _at_2(__genSym1, 2),
            _c = _at_2(__genSym1, 3),
            _d = _at_2(__genSym1, 4);
          let _r = _solidus_2(
            1,
            _hyphenMinus_2(_asterisk_2(_a, _d), _asterisk_2(_b, _c)),
          );
          let _m = [[_d, _hyphenMinus_1(_b)], [_hyphenMinus_1(_c), _a]];
          /* Statements */
          return _asterisk_2(_r, _m);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _m = _contents_1(_self);
          let _i = _identityMatrix_1(_n);
          /* Statements */
          return _collect_2(
            _rowReduce_1(_each_1(_plusSignPlusSign_2)(_m, _i)),
            function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _drop_2(_each, _n);
            },
          );
        });
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
          "Matrix>>inverse: not square or determinant is zero",
        );
      },
    );
  },
  "{ :self |\n\t\t(\n\t\t\tself.isSquareMatrix & {\n\t\t\t\tself.determinant ~= 0\n\t\t\t}\n\t\t).if {\n\t\t\tlet n = self.numberOfRows;\n\t\t\t(n = 2).if {\n\t\t\t\tlet [a, b, c, d] = self.contents.concatenation;\n\t\t\t\tlet r = 1 / ((a * d) - (b * c));\n\t\t\t\tlet m = [[d, b.-], [c.-, a]];\n\t\t\t\tr * m\n\t\t\t} {\n\t\t\t\tlet m = self.contents;\n\t\t\t\tlet i = n.identityMatrix;\n\t\t\t\t(m ++.each i).rowReduce.collect { :each |\n\t\t\t\t\teach.drop(n)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Matrix>>inverse: not square or determinant is zero')\n\t\t}\n\t}",
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
  "permanent",
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
      let _answer = 0;
      /* Statements */
      _plainChangesDo_2(_asList_1(_upOrDownTo_2(1, _size)), function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _sign = _permutationSymbol_1(_p);
        let _entries = _withIndexCollect_2(_p, function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _at_2(_at_2(_array, _i), _j);
        });
        /* Statements */
        return _answer = _plusSign_2(_answer, _product_1(_entries));
      });
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "Matrix>>permanent: not defined at non-square matrices",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.numberOfRows;\n\t\t\tlet array = self.contents;\n\t\t\tlet answer = 0;\n\t\t\t[1 .. size].plainChangesDo { :p |\n\t\t\t\tlet sign = p.permutationSymbol;\n\t\t\t\tlet entries = p.withIndexCollect { :i :j |\n\t\t\t\t\tarray[i][j]\n\t\t\t\t};\n\t\t\t\tanswer := answer + entries.product\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('Matrix>>permanent: not defined at non-square matrices')\n\t\t}\n\t}",
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

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "gaussianElimination",
  ["m", "v"],
  function (_m, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _deepCopy_1(_m);
    /* Statements */
    _withIndexDo_2(_a, function (_each, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_each, _at_2(_v, _i));
    });
    _reducedRowEchelonForm_1(_a);
    return _collect_2(_a, _last_1);
  },
  "{ :m :v |\n\t\tlet a = m.deepCopy;\n\t\ta.withIndexDo { :each :i |\n\t\t\teach.add(v[i])\n\t\t};\n\t\ta.reducedRowEchelonForm;\n\t\ta.collect(last:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _inverse_1(_asMatrix_1(_self));
  },
  "{ :self |\n\t\tself.asMatrix.inverse\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixRank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _count_2(_rowReduce_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _not_1(_allSatisfy_2(_each, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _veryCloseTo_2(_item, 0);
      }));
    });
  },
  "{ :self |\n\t\tself.rowReduce.count { :each |\n\t\t\teach.allSatisfy { :item |\n\t\t\t\titem.veryCloseTo(0)\n\t\t\t}.not\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "permanent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permanent_1(_asMatrix_1(_self));
  },
  "{ :self |\n\t\tself.asMatrix.permanent\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "reducedRowEchelonForm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
      /* Temporaries */
      let _lead = 1;
      let __genSym2 = _assertIsOfSize_2(_shape_1(_self), 2),
        _m = _at_2(__genSym2, 1),
        _n = _at_2(__genSym2, 2);
      let _d = null;
      /* Statements */
      _toDo_3(1, _m, function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _i = _r;
        /* Statements */
        _ifTrue_2(_greaterThanSign_2(_lead, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(_self);
        });
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _isZero_1(_at_2(_at_2(_self, _i), _lead));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _i = _plusSign_2(_i, 1);
          return _ifTrue_2(_greaterThanSign_2(_i, _m), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _i = _r;
            _lead = _plusSign_2(_lead, 1);
            return _ifTrue_2(_greaterThanSign_2(_lead, _n), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _return_1(_self);
            });
          });
        });
        _swapWith_3(_self, _i, _r);
        _d = _at_2(_at_2(_self, _r), _lead);
        _ifTrue_2(_greaterThanSign_2(_abs_1(_d), 1e-10), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _replace_2(_at_2(_self, _r), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _solidus_2(_each, _d);
          });
        });
        _toDo_3(1, _m, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ifTrue_2(_tildeEqualsSign_2(_i, _r), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _e = _at_2(_at_2(_self, _i), _lead);
            /* Statements */
            return _toDo_3(1, _n, function (_c) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _c";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _atPut_3(
                _at_2(_self, _i),
                _c,
                _hyphenMinus_2(
                  _at_2(_at_2(_self, _i), _c),
                  _asterisk_2(_at_2(_at_2(_self, _r), _c), _e),
                ),
              );
            });
          });
        });
        return _lead = _plusSign_2(_lead, 1);
      });
      return _self;
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet lead = 1;\n\t\t\tlet [m, n] = self.shape;\n\t\t\tlet d = nil;\n\t\t\t1.toDo(m) { :r |\n\t\t\t\tlet i = r;\n\t\t\t\t(lead > n).ifTrue {\n\t\t\t\t\tself.return\n\t\t\t\t};\n\t\t\t\t{\n\t\t\t\t\tself[i][lead].isZero\n\t\t\t\t}.whileTrue {\n\t\t\t\t\ti := i + 1;\n\t\t\t\t\t(i > m).ifTrue {\n\t\t\t\t\t\ti := r;\n\t\t\t\t\t\tlead := lead + 1;\n\t\t\t\t\t\t(lead > n).ifTrue {\n\t\t\t\t\t\t\tself.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tself.swapWith(i, r);\n\t\t\t\td := self[r][lead];\n\t\t\t\t(d.abs > 1E-10).ifTrue {\n\t\t\t\t\tself[r].replace { :each |\n\t\t\t\t\t\teach / d\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t1.toDo(m) { :i |\n\t\t\t\t\t(i ~= r).ifTrue {\n\t\t\t\t\t\tlet e = self[i][lead];\n\t\t\t\t\t\t1.toDo(n) { :c |\n\t\t\t\t\t\t\tself[i][c] := self[i][c] - (self[r][c] * e)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tlead := lead + 1\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "rowReduce",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reducedRowEchelonForm_1(_deepCopy_1(_self));
  },
  "{ :self |\n\t\tself.deepCopy.reducedRowEchelonForm\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "vedicSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _l = _asList_1(_upOrDownTo_2(1, _self));
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _positiveResidue_2(_asterisk_2(_i, _j), _self);
      },
      _l,
      _l,
    );
  },
  "{ :self |\n\t\tlet l = [1 .. self];\n\t\t{ :i :j |\n\t\t\t(i * j).positiveResidue(self)\n\t\t}.table(l, l)\n\t}",
);
