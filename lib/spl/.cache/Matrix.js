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
    return _ampersand_2(_isMatrix_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_contents_1(_self), _contents_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isMatrix & {\n\t\t\tself.contents = anObject.contents\n\t\t}\n\t}",
);

sl.addMethod(
  "Matrix",
  "Matrix",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tilde_2(_contents_1(_self), _contents_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isMatrix & {\n\t\t\tself.contents ~ anObject.contents\n\t\t}\n\t}",
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
    return _determinant_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.determinant\n\t}",
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
    return _asMatrix_1(_inverse_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.inverse.asMatrix\n\t}",
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
  "isIntegerMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_elementType_1(_self), "LargeInteger"),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _isIntegerMatrix_1(_contents_1(_self));
      },
    );
  },
  "{ :self |\n\t\tself.elementType = 'LargeInteger' | {\n\t\t\tself.contents.isIntegerMatrix\n\t\t}\n\t}",
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
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _matrixPrintString_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.matrixPrintString\n\t}",
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
  "adjugate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_inverse_1(_self), _determinant_1(_self));
  },
  "{ :self |\n\t\tself.inverse * self.determinant\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "antidiagonal",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "@Sequence>>antidiagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _l), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _r = _hyphenMinus_2(
        _plusSign_2(_hyphenMinus_2(_l, _i), 1),
        _min_2(_k, 0),
      );
      let _c = _hyphenMinus_2(_i, _min_2(_k, 0));
      /* Statements */
      return _at_2(_at_2(_m, _r), _c);
    });
  },
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('@Sequence>>antidiagonal');\n\t\tlet l = m.shape.min - k.abs;\n\t\t(1 .. l).collect { :i |\n\t\t\tlet r = l - i + 1 - k.min(0);\n\t\t\tlet c = i - k.min(0);\n\t\t\tm[r][c]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "antidiagonal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _antidiagonal_2(_self, 0);
  },
  "{ :self |\n\t\tself.antidiagonal(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "antidiagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _size_1(_self);
    let _answer = _zeroMatrix_2(_k, _k);
    /* Statements */
    _toDo_3(1, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _at_2(_answer, _plusSign_2(_hyphenMinus_2(_k, _each), 1)),
        _each,
        _at_2(_self, _each),
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet k = self.size;\n\t\tlet answer = k.zeroMatrix(k);\n\t\t1.toDo(k) { :each |\n\t\t\tanswer[k - each + 1][each] := self[each]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "arrayFlatten",
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
      /* Temporaries */
      let __genSym5 = _assertIsOfSize_2(_take_2(_shape_1(_self), 4), 4),
        _r = _at_2(__genSym5, 1),
        _c = _at_2(__genSym5, 2),
        _i = _at_2(__genSym5, 3),
        _j = _at_2(__genSym5, 4);
      let _n = _asterisk_2(_r, _i);
      let _m = _asterisk_2(_c, _j);
      let _p = 1;
      let _answer = _List_1(_n);
      /* Statements */
      _toDo_3(1, _r, function (_w) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _w";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(1, _i, function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _row = _List_1(_m);
          let _q = 1;
          /* Statements */
          _atPut_3(_answer, _p, _row);
          _p = _plusSign_2(_p, 1);
          return _toDo_3(1, _c, function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _toDo_3(1, _j, function (_z) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _z";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              _atPut_3(
                _row,
                _q,
                _at_2(_at_2(_at_2(_at_2(_self, _w), _y), _x), _z),
              );
              return _q = _plusSign_2(_q, 1);
            });
          });
        });
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
      return _error_2(_self, "@Sequence>>arrayFlatten: not array");
    });
  },
  "{ :self |\n\t\tself.isArray.if {\n\t\t\tlet [r, c, i, j] = self.shape.take(4);\n\t\t\tlet n = r * i;\n\t\t\tlet m = c * j;\n\t\t\tlet p = 1;\n\t\t\tlet answer = List(n);\n\t\t\t1.toDo(r) { :w |\n\t\t\t\t1.toDo(i) { :x |\n\t\t\t\t\tlet row = List(m);\n\t\t\t\t\tlet q = 1;\n\t\t\t\t\tanswer[p] := row;\n\t\t\t\t\tp := p + 1;\n\t\t\t\t\t1.toDo(c) { :y |\n\t\t\t\t\t\t1.toDo(j) { :z |\n\t\t\t\t\t\t\trow[q] := self[w][y][x][z];\n\t\t\t\t\t\t\tq := q + 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('@Sequence>>arrayFlatten: not array')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "arrayRules",
  ["self", "zero"],
  function (_self, _zero) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _zero";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym6 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym6, 1),
      _n = _at_2(__genSym6, 2);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _m, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _e = _at_2(_at_2(_self, _i), _j);
        /* Statements */
        return _ifFalse_2(_equalsSign_2(_e, _zero), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _hyphenMinusGreaterThanSign_2([_i, _j], _e));
        });
      });
    });
    return _answer;
  },
  "{ :self :zero |\n\t\tlet [m, n] = self.shape;\n\t\tlet answer = [];\n\t\t1.toDo(m) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\tlet e = self[i][j];\n\t\t\t\t(e = zero).ifFalse {\n\t\t\t\t\tanswer.add([i, j] -> e)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "assertIsMatrix",
  ["self", "context"],
  function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _assert_3(_self, _context, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isMatrix_1(_self);
    });
  },
  "{ :self :context |\n\t\tself.assert(context) {\n\t\t\tself.isMatrix\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "assertIsSquareMatrix",
  ["self", "context"],
  function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _assert_3(_self, _context, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isSquareMatrix_1(_self);
    });
  },
  "{ :self :context |\n\t\tself.assert(context) {\n\t\t\tself.isSquareMatrix\n\t\t}\n\t}",
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
  "blockDiagonalMatrix",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_d);
    let _s = _collect_2(_d, _shape_1);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _size_1(_at_2(_d, _i)), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(
          _answer,
          _concatenation_1(_collect_2(_upOrDownTo_2(1, _n), function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _if_3(_equalsSign_2(_i, _k), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _at_2(_at_2(_d, _i), _j);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return (_numberSign_2(0, _at_2(_at_2(_s, _k), 2)));
            });
          })),
        );
      });
    });
    return _answer;
  },
  "{ :d |\n\t\tlet n = d.size;\n\t\tlet s = d.collect(shape:/1);\n\t\tlet answer = [];\n\t\t1.toDo(n) { :i |\n\t\t\t1.toDo(d[i].size) { :j |\n\t\t\t\tanswer.add(\n\t\t\t\t\t1:n.collect { :k |\n\t\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\t\td[i][j]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(0 # s[k][2])\n\t\t\t\t\t\t}\n\t\t\t\t\t}.concatenation\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "choleskyBanachiewiczAlgorithm",
  ["a"],
  function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym7 = _assertIsOfSize_2(_shape_1(_a), 2),
      _m = _at_2(__genSym7, 1),
      _n = _at_2(__genSym7, 2);
    let _l = _zeroMatrix_2(_m, _n);
    /* Statements */
    _toDo_3(1, _m, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _i, function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _sum = 0;
        /* Statements */
        _toDo_3(1, _k, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _sum = _plusSign_2(
            _sum,
            _asterisk_2(_at_2(_at_2(_l, _i), _j), _at_2(_at_2(_l, _k), _j)),
          );
        });
        return _atPut_3(
          _at_2(_l, _i),
          _k,
          _if_3(_equalsSign_2(_i, _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _sqrt_1(_hyphenMinus_2(_at_2(_at_2(_a, _i), _i), _sum));
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _asterisk_2(
              _solidus_2(1, _at_2(_at_2(_l, _k), _k)),
              _hyphenMinus_2(_at_2(_at_2(_a, _i), _k), _sum),
            );
          }),
        );
      });
    });
    return _l;
  },
  "{ :a |\n\t\tlet [m, n] = a.shape;\n\t\tlet l = m.zeroMatrix(n);\n\t\t1.toDo(m) { :i |\n\t\t\t1.toDo(i) { :k |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(k) { :j |\n\t\t\t\t\tsum := sum + (l[i][j] * l[k][j])\n\t\t\t\t};\n\t\t\t\tl[i][k] := (i = k).if {\n\t\t\t\t\t(a[i][i] - sum).sqrt\n\t\t\t\t} {\n\t\t\t\t\t1 / l[k][k] * (a[i][k] - sum)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tl\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "choleskyDecomposition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _choleskyBanachiewiczAlgorithm_1(_self);
  },
  "{ :self |\n\t\tself.choleskyBanachiewiczAlgorithm\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "circulantMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _size_1(_self)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _rotatedRight_2(_self, _i);
    });
  },
  "{ :self |\n\t\t(1 .. self.size).collect { :i |\n\t\t\tself.rotatedRight(i)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "conjugateGradientMethod",
  ["a", "b", "x", "epsilon", "n"],
  function (_a, _b, _x, _epsilon, _n) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _a, _b, _x, _epsilon, _n";
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
      let _r = _hyphenMinus_2(_b, _dot_2(_a, _x));
      let _p = _copy_1(_r);
      /* Statements */
      _toDo_3(1, _n, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _ap = _dot_2(_a, _p);
        let _alpha = _solidus_2(_dot_2(_p, _r), _dot_2(_p, _ap));
        /* Statements */
        _x = _plusSign_2(_x, _asterisk_2(_alpha, _p));
        _r = _hyphenMinus_2(_b, _dot_2(_a, _x));
        return _if_3(
          _lessThanSign_2(
            _sqrt_1(_sum_1(_circumflexAccent_2(_r, 2))),
            _epsilon,
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_x);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _beta = _solidus_2(
              _negated_1(_dot_2(_r, _ap)),
              _dot_2(_p, _ap),
            );
            /* Statements */
            return _p = _plusSign_2(_r, _asterisk_2(_beta, _p));
          },
        );
      });
      return _x;
    });
  },
  "{ :a :b :x :epsilon :n |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet r = b - a.dot(x);\n\t\t\tlet p = r.copy;\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tlet ap = a.dot(p);\n\t\t\t\tlet alpha = p.dot(r) / p.dot(ap);\n\t\t\t\tx := x + (alpha * p);\n\t\t\t\tr := b - a.dot(x);\n\t\t\t\t((r ^ 2).sum.sqrt < epsilon).if {\n\t\t\t\t\tx.return\n\t\t\t\t} {\n\t\t\t\t\tlet beta = r.dot(ap).negated / p.dot(ap);\n\t\t\t\t\tp := r + (beta * p)\n\t\t\t\t}\n\t\t\t};\n\t\t\tx\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "conjugateTranspose",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _conjugated_1(_transposed_1(_self));
  },
  "{ :self |\n\t\tself.transposed.conjugated\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "columnsCollect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym8 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym8, 1),
      _n = _at_2(__genSym8, 2);
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _n), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_matrixColumn_2(_self, _i));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet [m, n] = self.shape;\n\t\t1:n.collect { :i |\n\t\t\taBlock(self.matrixColumn(i))\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "cramersRule",
  ["m", "d"],
  function (_m, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _size_1(_m);
    let _divisor = _determinant_1(_m);
    let _numerators = _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _deepCopy_1(_m);
    }, _k);
    /* Statements */
    _toDo_3(1, _k, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _k, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_at_2(_at_2(_numerators, _i), _j), _i, _at_2(_d, _j));
      });
    });
    return _collect_2(_upOrDownTo_2(1, _k), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_determinant_1(_at_2(_numerators, _i)), _divisor);
    });
  },
  "{ :m :d |\n\t\tlet k = m.size;\n\t\tlet divisor = m.determinant;\n\t\tlet numerators = { m.deepCopy } ! k;\n\t\t1.toDo(k) { :i |\n\t\t\t1.toDo(k) { :j |\n\t\t\t\tnumerators[i][j][i] := d[j]\n\t\t\t}\n\t\t};\n\t\t1:k.collect { :i |\n\t\t\tnumerators[i].determinant / divisor\n\t\t}\n\t}",
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
    return _if_3(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _size = _size_1(_self);
      let _array = _self;
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
        "@Sequence>>determinant: not defined at non-square matrices",
      );
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet size = self.size;\n\t\t\tlet array = self;\n\t\t\t(size = 2).if {\n\t\t\t\t(array[1, 1] * array[2, 2]) - (array[1, 2] * array[2, 1])\n\t\t\t} {\n\t\t\t\t(size = 3).if {\n\t\t\t\t\t(array[1, 1] * array[2, 2] * array[3, 3]) +\n\t\t\t\t\t(array[1, 2] * array[2, 3] * array[3, 1]) +\n\t\t\t\t\t(array[1, 3] * array[2, 1] * array[3, 2]) -\n\t\t\t\t\t(array[1, 3] * array[2, 2] * array[3, 1]) -\n\t\t\t\t\t(array[1, 2] * array[2, 1] * array[3, 3]) -\n\t\t\t\t\t(array[1, 1] * array[2, 3] * array[3, 2])\n\t\t\t\t} {\n\t\t\t\t\tlet answer = 0;\n\t\t\t\t\t[1 .. size].plainChangesDo { :p |\n\t\t\t\t\t\tlet sign = p.permutationSymbol;\n\t\t\t\t\t\tlet entries = p.withIndexCollect { :i :j |\n\t\t\t\t\t\t\tarray[i][j]\n\t\t\t\t\t\t};\n\t\t\t\t\t\tanswer := answer + (entries.product * sign)\n\t\t\t\t\t};\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequence>>determinant: not defined at non-square matrices')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    let _m = _assertIsMatrix_2(_self, "@Sequence>>diagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _l), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(
        _at_2(_m, _hyphenMinus_2(_i, _min_2(_k, 0))),
        _plusSign_2(_i, _max_2(_k, 0)),
      );
    });
  },
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('@Sequence>>diagonal');\n\t\tlet l = m.shape.min - k.abs;\n\t\t1:l.collect { :i |\n\t\t\tm[i - k.min(0)][i + k.max(0)]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "diagonalMatrix",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _plusSign_2(_size_1(_self), _abs_1(_k));
    let _r = _abs_1(_min_2(_k, 0));
    let _c = _max_2(_k, 0);
    let _answer = _zeroMatrix_2(_n, _n);
    /* Statements */
    _toDo_3(1, _size_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _at_2(_answer, _plusSign_2(_each, _r)),
        _plusSign_2(_each, _c),
        _at_2(_self, _each),
      );
    });
    return _answer;
  },
  "{ :self :k |\n\t\tlet n = self.size + k.abs;\n\t\tlet r = k.min(0).abs;\n\t\tlet c = k.max(0);\n\t\tlet answer = n.zeroMatrix(n);\n\t\t1.toDo(self.size) { :each |\n\t\t\tanswer[each + r][each + c] := self[each]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "diagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _diagonalMatrix_2(_self, 0);
  },
  "{ :self |\n\t\tself.diagonalMatrix(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "distanceMatrix",
  ["u", "v", "aBlock:/2"],
  function (_u, _v, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _table_3(_aBlock_2, _u, _v);
  },
  "{ :u :v :aBlock:/2 |\n\t\taBlock:/2.table(u, v)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "distanceMatrix",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _distanceMatrix_3(_u, _v, _euclideanDistance_2);
  },
  "{ :u :v |\n\t\tdistanceMatrix(u, v, euclideanDistance:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "distanceMatrix",
  ["u"],
  function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _distanceMatrix_2(_u, _u);
  },
  "{ :u |\n\t\tdistanceMatrix(u, u)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "dotProduct",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _verticalLine_2(_isVector_1(_aSequence), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _isMatrix_1(_aSequence);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _sum_1(_e_1(_asterisk_2)(_self, _aSequence));
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
            "@Sequence>>dotProduct: argument not vector or matrix",
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
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isVector_1(_aSequence), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_self, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _sum_1(_e_1(_asterisk_2)(_each, _aSequence));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_isMatrix_1(_aSequence), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _collect_2(_self, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _dot_2(_each, _aSequence);
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
              "@Sequence>>dotProduct: argument not vector or matrix",
            );
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
          "@Sequence>>dotProduct: self not vector or matrix",
        );
      });
    });
  },
  "{ :self :aSequence |\n\t\tself.isVector.if {\n\t\t\t(aSequence.isVector | { aSequence.isMatrix }).if {\n\t\t\t\t(self *.e aSequence).sum\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>dotProduct: argument not vector or matrix')\n\t\t\t}\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\taSequence.isVector.if {\n\t\t\t\t\tself.collect { :each |\n\t\t\t\t\t\t(each *.e aSequence).sum\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\taSequence.isMatrix.if {\n\t\t\t\t\t\tself.collect { :each |\n\t\t\t\t\t\t\teach.dot(aSequence)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.error('@Sequence>>dotProduct: argument not vector or matrix')\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>dotProduct: self not vector or matrix')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "eigenvalues",
  ["m", "epsilon", "n"],
  function (_m, _epsilon, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _epsilon, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x = _deepCopy_1(_m);
    let _i = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_not_1(_isUpperTriangularMatrix_1(_x)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_i, _n);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym9 = _assertIsOfSize_2(_qrDecomposition_1(_x), 2),
        _q = _at_2(__genSym9, 1),
        _r = _at_2(__genSym9, 2);
      /* Statements */
      _x = _dot_2(_r, _q);
      return _i = _plusSign_2(_i, 1);
    });
    return _diagonal_1(_x);
  },
  "{ :m :epsilon :n |\n\t\tlet x = m.deepCopy;\n\t\tlet i = 0;\n\t\t{\n\t\t\tx.isUpperTriangularMatrix.not & { i < n }\n\t\t}.whileTrue {\n\t\t\tlet [q, r] = x.qrDecomposition;\n\t\t\tx := r.dot(q);\n\t\t\ti := i + 1\n\t\t};\n\t\tx.diagonal\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "eigenvalues",
  ["m"],
  function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _eigenvalues_3(_m, 1e-15, 100);
  },
  "{ :m |\n\t\tm.eigenvalues(1E-15, 100)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "frobeniusCompanionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_self), 1);
    let _w = _solidus_2(_negated_1(_self), _last_1(_self));
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
        return _if_3(_equalsSign_2(_i, _plusSign_2(_j, 1)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_equalsSign_2(_j, _n), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _at_2(_w, _i);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 0;
          });
        });
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet n = self.size - 1;\n\t\tlet w = self.negated / self.last;\n\t\t{ :i :j |\n\t\t\t(i = (j + 1)).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t(j = n).if {\n\t\t\t\t\tw[i]\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "frobeniusNorm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_sum_1(_collect_2(_flatten_1(_self), _squared_1)));
  },
  "{ :self |\n\t\tself.flatten.collect(squared:/1).sum.sqrt\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "gaussJordanInverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym10 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym10, 1),
      _n = _at_2(__genSym10, 2);
    let _a = _zeroMatrix_2(_m, _asterisk_2(_m, 2));
    let _r = _zeroMatrix_2(_m, _n);
    /* Statements */
    _ifTrue_2(_tildeEqualsSign_2(_m, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "@Sequence>>gaussJordanInverse: matrix is not square",
      );
    });
    _toDo_3(1, _m, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _replaceFromToWith_4(_at_2(_a, _i), 1, _m, _at_2(_self, _i));
      return _atPut_3(_at_2(_a, _i), _plusSign_2(_m, _i), 1);
    });
    _reducedRowEchelonForm_1(_a);
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(
          _tildeEqualsSign_2(
            _at_2(_at_2(_a, _i), _j),
            _boole_1(_equalsSign_2(_i, _j)),
          ),
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
              "@Sequence>>gaussJordanInverse: matrix is singular",
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
            return _atPut_3(
              _at_2(_r, _i),
              _j,
              _at_2(_at_2(_a, _i), _plusSign_2(_m, _j)),
            );
          },
        );
      });
    });
    return _r;
  },
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet a = m.zeroMatrix(m * 2);\n\t\tlet r = m.zeroMatrix(n);\n\t\t(m ~= n).ifTrue {\n\t\t\tself.error('@Sequence>>gaussJordanInverse: matrix is not square')\n\t\t};\n\t\t1.toDo(m) { :i |\n\t\t\ta[i].replaceFromToWith(1, m, self[i]);\n\t\t\ta[i][m + i] := 1\n\t\t};\n\t\ta.reducedRowEchelonForm;\n\t\t1.toDo(n) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t(a[i][j] ~= (i = j).boole).if {\n\t\t\t\t\tself.error('@Sequence>>gaussJordanInverse: matrix is singular')\n\t\t\t\t} {\n\t\t\t\t\tr[i][j] := a[i][m + j]\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tr\n\t}",
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
  "gramSchmidtProcess",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _deepCopy_1(_self);
    let __genSym11 = _assertIsOfSize_2(_shape_1(_a), 2),
      _n = _at_2(__genSym11, 1),
      _m = _at_2(__genSym11, 2);
    /* Statements */
    _toDo_3(1, _n, function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_a, _k, _normalize_1(_at_2(_a, _k)));
      return _toDo_3(_plusSign_2(_k, 1), _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _a,
          _j,
          _hyphenMinus_2(
            _at_2(_a, _j),
            _asterisk_2(_dot_2(_at_2(_a, _j), _at_2(_a, _k)), _at_2(_a, _k)),
          ),
        );
      });
    });
    return _a;
  },
  "{ :self |\n\t\tlet a = self.deepCopy;\n\t\tlet [n, m] = a.shape;\n\t\t1.toDo(n) { :k |\n\t\t\ta[k] := a[k].normalize;\n\t\t\t(k + 1).toDo(n) { :j |\n\t\t\t\ta[j] := a[j] - (a[j].dot(a[k]) * a[k])\n\t\t\t}\n\t\t};\n\t\ta\n\t}",
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
    return _if_3(_isSquareMatrix_1(_self), function () {
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
        let __genSym12 = _assertIsOfSize_2(
            _concatenation_1(_contents_1(_self)),
            4,
          ),
          _a = _at_2(__genSym12, 1),
          _b = _at_2(__genSym12, 2),
          _c = _at_2(__genSym12, 3),
          _d = _at_2(__genSym12, 4);
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
        let _e = _rowReduce_1(_each_1(_plusSignPlusSign_2)(_m, _i));
        /* Statements */
        return _collect_2(_e, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _drop_2(_each, _n);
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
      return _error_2(_self, "Sequence>>inverse: matrix not square");
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix.if {\n\t\t\tlet n = self.numberOfRows;\n\t\t\t(n = 2).if {\n\t\t\t\tlet [a, b, c, d] = self.contents.concatenation;\n\t\t\t\tlet r = 1 / ((a * d) - (b * c));\n\t\t\t\tlet m = [[d, b.-], [c.-, a]];\n\t\t\t\tr * m\n\t\t\t} {\n\t\t\t\tlet m = self.contents;\n\t\t\t\tlet i = n.identityMatrix;\n\t\t\t\tlet e = (m ++.each i).rowReduce;\n\t\t\t\te.collect { :each |\n\t\t\t\t\teach.drop(n)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('Sequence>>inverse: matrix not square')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_size_1(_anyOne_1(_self)), 1);
    });
  },
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.anyOne.size = 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isIntegerMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _allSatisfy_2(_self, function (_row) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _row";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allSatisfy_2(_row, _isInteger_1);
      });
    });
  },
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.allSatisfy { :row |\n\t\t\t\trow.allSatisfy(isInteger:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isLowerTriangularMatrix",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym13 = _assertIsOfSize_2(_shape_1(_self), 2),
        _r = _at_2(__genSym13, 1),
        _c = _at_2(__genSym13, 2);
      /* Statements */
      return _allSatisfy_2(_to_2(1, _hyphenMinus_2(_r, _k)), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allSatisfy_2(
          _to_2(_plusSign_2(_plusSign_2(_i, 1), _k), _c),
          function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
          },
        );
      });
    });
  },
  "{ :self :k |\n\t\tself.isMatrix & {\n\t\t\tlet [r, c] = self.shape;\n\t\t\t1.to(r - k).allSatisfy { :i |\n\t\t\t\t(i + 1 + k).to(c).allSatisfy { :j |\n\t\t\t\t\tself[i][j].isVeryCloseTo(0)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isLowerTriangularMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isLowerTriangularMatrix_2(_self, 0);
  },
  "{ :self |\n\t\tself.isLowerTriangularMatrix(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_typeOf_1(_each), _type),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isVector_1(_each);
          },
        );
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_asSet_1(_collect_2(_self, _size_1))), 1);
      },
    );
  },
  "{ :self |\n\t\tlet type = self.typeOf;\n\t\tself.allSatisfy { :each |\n\t\t\teach.typeOf = type & {\n\t\t\t\teach.isVector\n\t\t\t}\n\t\t} & {\n\t\t\tself.collect(size:/1).asSet.size = 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_elementType_1(_each), _elementType);
      });
    });
  },
  "{ :self :elementType |\n\t\tself.isMatrix & {\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.elementType = elementType\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isOrthogonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym14 = _assertIsOfSize_2(_shape_1(_self), 2),
      _p = _at_2(__genSym14, 1),
      _q = _at_2(__genSym14, 2);
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_p, _q), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(
        _dot_2(_transposed_1(_self), _self),
        _identityMatrix_1(_q),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(
        _dot_2(_self, _transposed_1(_self)),
        _identityMatrix_1(_p),
      );
    });
  },
  "{ :self |\n\t\tlet [p, q] = self.shape;\n\t\t(p >= q).if {\n\t\t\tself.transposed.dot(self).isVeryCloseTo(q.identityMatrix)\n\t\t} {\n\t\t\tself.dot(self.transposed).isVeryCloseTo(p.identityMatrix)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_size_1(_self), 1);
    });
  },
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.size = 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_size_1(_self), _size_1(_anyOne_1(_self)));
    });
  },
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.size = self.anyOne.size\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isSymmetricMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_self, _transposed_1(_self));
    });
  },
  "{ :self |\n\t\tself.isSquareMatrix & {\n\t\t\tself = self.transposed\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isUnitaryMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym15 = _assertIsOfSize_2(_shape_1(_self), 2),
      _p = _at_2(__genSym15, 1),
      _q = _at_2(__genSym15, 2);
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_p, _q), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(
        _dot_2(_conjugateTranspose_1(_self), _self),
        _identityMatrix_1(_q),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(
        _dot_2(_self, _conjugateTranspose_1(_self)),
        _identityMatrix_1(_p),
      );
    });
  },
  "{ :self |\n\t\tlet [p, q] = self.shape;\n\t\t(p >= q).if {\n\t\t\tself.conjugateTranspose.dot(self).isVeryCloseTo(q.identityMatrix)\n\t\t} {\n\t\t\tself.dot(self.conjugateTranspose).isVeryCloseTo(p.identityMatrix)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isUpperTriangularMatrix",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym16 = _assertIsOfSize_2(_shape_1(_self), 2),
        _r = _at_2(__genSym16, 1),
        _c = _at_2(__genSym16, 2);
      /* Statements */
      return _allSatisfy_2(_to_2(_hyphenMinus_2(2, _k), _r), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allSatisfy_2(
          _to_2(1, _plusSign_2(_hyphenMinus_2(_i, 1), _k)),
          function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
          },
        );
      });
    });
  },
  "{ :self :k |\n\t\tself.isMatrix & {\n\t\t\tlet [r, c] = self.shape;\n\t\t\t(2 - k).to(r).allSatisfy { :i |\n\t\t\t\t1.to(i - 1 + k).allSatisfy { :j |\n\t\t\t\t\tself[i][j].isVeryCloseTo(0)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "isUpperTriangularMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isUpperTriangularMatrix_2(_self, 0);
  },
  "{ :self |\n\t\tself.isUpperTriangularMatrix(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "kroneckerProduct",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _size_1(_a);
    let _n = _size_1(_at_2(_a, 1));
    let _p = _size_1(_b);
    let _q = _size_1(_at_2(_b, 1));
    let _r = _asterisk_2(_m, _p);
    let _c = _asterisk_2(_n, _q);
    let _answer = _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _List_2(_c, 0);
    }, _r);
    /* Statements */
    _toDo_3(1, _m, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(1, _p, function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _toDo_3(1, _q, function (_l) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _l";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _atPut_3(
              _at_2(
                _answer,
                _plusSign_2(_asterisk_2(_p, _hyphenMinus_2(_i, 1)), _k),
              ),
              _plusSign_2(_asterisk_2(_q, _hyphenMinus_2(_j, 1)), _l),
              _asterisk_2(_at_2(_at_2(_a, _i), _j), _at_2(_at_2(_b, _k), _l)),
            );
          });
        });
      });
    });
    return _answer;
  },
  "{ :a :b |\n\t\tlet m = a.size;\n\t\tlet n = a[1].size;\n\t\tlet p = b.size;\n\t\tlet q = b[1].size;\n\t\tlet r = m * p;\n\t\tlet c = n * q;\n\t\tlet answer = { List(c, 0) } ! r;\n\t\t1.toDo(m) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t1.toDo(p) { :k |\n\t\t\t\t\t1.toDo(q) { :l |\n\t\t\t\t\t\tanswer[p * (i - 1) + k][q * (j - 1) + l] := a[i][j] * b[k][l]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "lowerTriangularize",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "@Sequence>>lowerTriangularize");
    let __genSym17 = _assertIsOfSize_2(_shape_1(_m), 2),
      _r = _at_2(__genSym17, 1),
      _c = _at_2(__genSym17, 2);
    /* Statements */
    _do_2(_to_2(1, _hyphenMinus_2(_r, _k)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(
        _to_2(_plusSign_2(_plusSign_2(_i, 1), _k), _c),
        function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(_at_2(_m, _i), _j, 0);
        },
      );
    });
    return _m;
  },
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('@Sequence>>lowerTriangularize');\n\t\tlet [r, c] = m.shape;\n\t\t1.to(r - k).do { :i |\n\t\t\t(i + 1 + k).to(c).do { :j |\n\t\t\t\tm[i][j] := 0\n\t\t\t}\n\t\t};\n\t\tm\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "lowerTriangularize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lowerTriangularize_2(_self, 0);
  },
  "{ :self |\n\t\tself.lowerTriangularize(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "luDecompositionPivotMatrix",
  ["m"],
  function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_m);
    let _p = _identityMatrix_1(_n);
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _max = _at_2(_at_2(_m, _i), _i);
      let _row = _i;
      /* Statements */
      _toDo_3(_i, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _e = _at_2(_at_2(_m, _j), _i);
        /* Statements */
        return _ifTrue_2(_greaterThanSign_2(_e, _max), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _max = _e;
          return _row = _j;
        });
      });
      return _ifTrue_2(_tildeEqualsSign_2(_i, _row), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _swapWith_3(_p, _i, _row);
      });
    });
    return _p;
  },
  "{ :m |\n\t\tlet n = m.size;\n\t\tlet p = n.identityMatrix;\n\t\t1.toDo(n) { :i |\n\t\t\tlet max = m[i][i];\n\t\t\tlet row = i;\n\t\t\ti.toDo(n) { :j |\n\t\t\t\tlet e = m[j][i];\n\t\t\t\t(e > max).ifTrue {\n\t\t\t\t\tmax := e;\n\t\t\t\t\trow := j\n\t\t\t\t}\n\t\t\t};\n\t\t\t(i ~= row).ifTrue {\n\t\t\t\tp.swapWith(i, row)\n\t\t\t}\n\t\t};\n\t\tp\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "luDecomposition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _assertIsSquareMatrix_2(_self, "@Sequence>>luDecomposition");
    let _n = _size_1(_self);
    let _p = _luDecompositionPivotMatrix_1(_m);
    let _m2 = _dot_2(_p, _m);
    let _l = _identityMatrix_1(_n);
    let _u = _identityMatrix_1(_n);
    /* Statements */
    _toDo_3(1, _n, function (_j) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _toDo_3(1, _j, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _sum = 0;
        /* Statements */
        _toDo_3(1, _hyphenMinus_2(_i, 1), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _sum = _plusSign_2(
            _sum,
            _asterisk_2(_at_2(_at_2(_u, _k), _j), _at_2(_at_2(_l, _i), _k)),
          );
        });
        return _atPut_3(
          _at_2(_u, _i),
          _j,
          _hyphenMinus_2(_at_2(_at_2(_m2, _i), _j), _sum),
        );
      });
      return _toDo_3(_j, _n, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _sum = 0;
        /* Statements */
        _toDo_3(1, _hyphenMinus_2(_j, 1), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _sum = _plusSign_2(
            _sum,
            _asterisk_2(_at_2(_at_2(_u, _k), _j), _at_2(_at_2(_l, _i), _k)),
          );
        });
        return _atPut_3(
          _at_2(_l, _i),
          _j,
          _solidus_2(
            _hyphenMinus_2(_at_2(_at_2(_m2, _i), _j), _sum),
            _at_2(_at_2(_u, _j), _j),
          ),
        );
      });
    });
    return [_l, _u, _p];
  },
  "{ :self |\n\t\tlet m = self.assertIsSquareMatrix('@Sequence>>luDecomposition');\n\t\tlet n = self.size;\n\t\tlet p = m.luDecompositionPivotMatrix;\n\t\tlet m2 = p.dot(m);\n\t\tlet l = n.identityMatrix;\n\t\tlet u = n.identityMatrix;\n\t\t1.toDo(n) { :j |\n\t\t\t1.toDo(j) { :i |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(i - 1) { :k |\n\t\t\t\t\tsum := sum + (u[k][j] * l[i][k])\n\t\t\t\t};\n\t\t\t\tu[i][j] := m2[i][j] - sum\n\t\t\t};\n\t\t\tj.toDo(n) { :i |\n\t\t\t\tlet sum = 0;\n\t\t\t\t1.toDo(j - 1) { :k |\n\t\t\t\t\tsum := sum + (u[k][j] * l[i][k])\n\t\t\t\t};\n\t\t\t\tl[i][j] := (m2[i][j] - sum) / u[j][j]\n\t\t\t}\n\t\t};\n\t\t[l, u, p]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixColumn",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym18 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym18, 1),
      _n = _at_2(__genSym18, 2);
    /* Statements */
    return _if_3(_betweenAnd_3(_anInteger, 1, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_upOrDownTo_2(1, _m), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_at_2(_self, _each), _anInteger);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>matrixColumn: illegal index");
    });
  },
  "{ :self :anInteger |\n\t\tlet [m, n] = self.shape;\n\t\tanInteger.betweenAnd(1, n).if {\n\t\t\t(1 .. m).collect { :each |\n\t\t\t\tself[each][anInteger]\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequence>>matrixColumn: illegal index')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixCorrelation",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _covariance_2(_a, _b),
      _outer_3(_asterisk_2, _standardDeviation_1(_a), _standardDeviation_1(_b)),
    );
  },
  "{ :a :b |\n\t\ta.covariance(b) / *.outer(a.standardDeviation, b.standardDeviation)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixCovariance",
  ["a", "b"],
  function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym19 = _assertIsOfSize_2(_shape_1(_a), 2),
      _n = _at_2(__genSym19, 1),
      _p = _at_2(__genSym19, 2);
    let __genSym20 = _assertIsOfSize_2(_shape_1(_b), 2),
      _m = _at_2(__genSym20, 1),
      _q = _at_2(__genSym20, 2);
    let _l = _List_2(_n, 1);
    /* Statements */
    _assert_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_n, _m);
    });
    return _asterisk_2(
      _solidus_2(1, _hyphenMinus_2(_n, 1)),
      _dot_2(
        _transposed_1(
          _hyphenMinus_2(_a, _outer_3(_asterisk_2, _l, _mean_1(_a))),
        ),
        _conjugated_1(
          _hyphenMinus_2(_a, _outer_3(_asterisk_2, _l, _mean_1(_a))),
        ),
      ),
    );
  },
  "{ :a :b |\n\t\tlet [n, p] = a.shape;\n\t\tlet [m, q] = b.shape;\n\t\tlet l = List(n, 1);\n\t\t{ n = m }.assert;\n\t\t(1 / (n - 1)) * (a - (*.outer(l, a.mean))).transposed.dot((a - (*.outer(l, a.mean))).conjugated)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixRow",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym21 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym21, 1),
      _n = _at_2(__genSym21, 2);
    /* Statements */
    return _if_3(_betweenAnd_3(_anInteger, 1, _m), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>matrixRow: illegal index");
    });
  },
  "{ :self :anInteger |\n\t\tlet [m, n] = self.shape;\n\t\tanInteger.betweenAnd(1, m).if {\n\t\t\tself[anInteger]\n\t\t} {\n\t\t\tself.error('@Sequence>>matrixRow: illegal index')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixPrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _matrixPrintString_2(_self, 4);
  },
  "{ :self |\n\t\tself.matrixPrintString(4)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixPrintString",
  ["self", "decimalPlaces"],
  function (_self, _decimalPlaces) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _decimalPlaces";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym22 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym22, 1),
      _n = _at_2(__genSym22, 2);
    let _print_1 = _if_3(_isIntegerMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _printString_1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _printStringShowingDecimalPlaces_2(_n, _decimalPlaces);
      });
    });
    let _table = _deepCollect_2(_self, _print_1);
    let _columnWidth = _max_1(_collect_2(_flatten_1(_table), _size_1));
    let _text = _collect_2(_table, function (_row) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _row";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSignPlusSign_2(
        "   ",
        _stringJoin_2(
          _collect_2(_row, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _padLeft_3(_each, _columnWidth, " ");
          }),
          "   ",
        ),
      );
    });
    /* Statements */
    return _unlines_1([_stringJoin_1([_m, "×", _n]), "   ", _unlines_1(_text)]);
  },
  "{ :self :decimalPlaces |\n\t\tlet [m, n] = self.shape;\n\t\tlet print:/1 = self.isIntegerMatrix.if {\n\t\t\tprintString:/1\n\t\t} {\n\t\t\t{ :n |\n\t\t\t\tn.printStringShowingDecimalPlaces(decimalPlaces)\n\t\t\t}\n\t\t};\n\t\tlet table = self.deepCollect(print:/1);\n\t\tlet columnWidth = table.flatten.collect(size:/1).max;\n\t\tlet text = table.collect { :row |\n\t\t\t'   ' ++ row.collect { :each |\n\t\t\t\teach.padLeft(columnWidth, ' ')\n\t\t\t}.stringJoin('   ')\n\t\t};\n\t\t[\n\t\t\t[m, '×', n].stringJoin,\n\t\t\t'   ',\n\t\t\ttext.unlines\n\t\t].unlines\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixPower",
  ["m", "p"],
  function (_m, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym23 = _assertIsOfSize_2(_shape_1(_m), 2),
      _a = _at_2(__genSym23, 1),
      _b = _at_2(__genSym23, 2);
    /* Statements */
    return _if_3(_equalsSign_2(_a, _b), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _r = _zeroMatrix_2(_b, _a);
      /* Statements */
      _caseOfOtherwise_3(_p, [
        _hyphenMinusGreaterThanSign_2(0, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _do_2(_upOrDownTo_2(1, _b), function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _do_2(_upOrDownTo_2(1, _a), function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(_equalsSign_2(_i, _j), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _atPut_3(_at_2(_r, _i), _j, 1);
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _atPut_3(_at_2(_r, _i), _j, 0);
              });
            });
          });
        }),
        _hyphenMinusGreaterThanSign_2(1, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _do_2(_upOrDownTo_2(1, _b), function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _do_2(_upOrDownTo_2(1, _a), function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _atPut_3(_at_2(_r, _i), _j, _at_2(_at_2(_m, _i), _j));
            });
          });
        }),
      ], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _r = _m;
        return _do_2(_upOrDownTo_2(2, _p), function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _r = _dot_2(_r, _m);
        });
      });
      return _r;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_m, "@Sequence>>matrixPower: invalid matrix");
    });
  },
  "{ :m :p |\n\t\tlet [a, b] = m.shape;\n\t\t(a = b).if {\n\t\t\tlet r = b.zeroMatrix(a);\n\t\t\tp.caseOfOtherwise([\n\t\t\t\t0 -> {\n\t\t\t\t\t1:b.do { :i |\n\t\t\t\t\t\t1:a.do { :j |\n\t\t\t\t\t\t\t(i = j).if {\n\t\t\t\t\t\t\t\tr[i][j] := 1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tr[i][j] := 0\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t1 -> {\n\t\t\t\t\t1:b.do { :i |\n\t\t\t\t\t\t1:a.do { :j |\n\t\t\t\t\t\t\tr[i][j] := m[i][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\tr := m;\n\t\t\t\t2:p.do { :i |\n\t\t\t\t\tr := r.dot(m)\n\t\t\t\t}\n\t\t\t};\n\t\t\tr\n\t\t} {\n\t\t\tm.error('@Sequence>>matrixPower: invalid matrix')\n\t\t}\n\t}",
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
        return _isVeryCloseTo_2(_item, 0);
      }));
    });
  },
  "{ :self |\n\t\tself.rowReduce.count { :each |\n\t\t\teach.allSatisfy { :item |\n\t\t\t\titem.isVeryCloseTo(0)\n\t\t\t}.not\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixRotate",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_k, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _transposed_1(_collect_2(_self, _reversed_1));
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _reversed_1(_collect_2(_self, _reversed_1));
      }),
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_transposed_1(_self), _reversed_1);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>matrixRotate: k not 1,2,3");
    });
  },
  "{ :self :k |\n\t\tk.caseOfOtherwise([\n\t\t\t1 -> { self.collect(reversed:/1).transposed },\n\t\t\t2 -> { self.collect(reversed:/1).reversed },\n\t\t\t3 -> { self.transposed.collect(reversed:/1) }\n\t\t]) {\n\t\t\tself.error('@Sequence>>matrixRotate: k not 1,2,3')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "matrixRotate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _matrixRotate_2(_self, 1);
  },
  "{ :self |\n\t\tself.matrixRotate(1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "minor",
  ["self", "i", "j"],
  function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym24 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym24, 1),
      _n = _at_2(__genSym24, 2);
    /* Statements */
    return _determinant_1(
      _submatrix_3(
        _self,
        _without_2(_asList_1(_upOrDownTo_2(1, _m)), _i),
        _without_2(_asList_1(_upOrDownTo_2(1, _n)), _j),
      ),
    );
  },
  "{ :self :i :j |\n\t\tlet [m, n] = self.shape;\n\t\tself.submatrix([1 .. m].without(i), [1 .. n].without(j)).determinant\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "minors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym25 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym25, 1),
      _n = _at_2(__genSym25, 2);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _r = _plusSign_2(_hyphenMinus_2(_m, _i), 1);
        let _c = _plusSign_2(_hyphenMinus_2(_n, _j), 1);
        /* Statements */
        return _determinant_1(
          _submatrix_3(
            _self,
            _without_2(_asList_1(_upOrDownTo_2(1, _m)), _r),
            _without_2(_asList_1(_upOrDownTo_2(1, _n)), _c),
          ),
        );
      },
      _upOrDownTo_2(1, _m),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t{ :i :j |\n\t\t\tlet r = m - i + 1;\n\t\t\tlet c = n - j + 1;\n\t\t\tself.submatrix([1 .. m].without(r), [1 .. n].without(c)).determinant\n\t\t}.table(1:m, 1:n)\n\t}",
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
  "orthogonalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _gramSchmidtProcess_1(_self);
  },
  "{ :self |\n\t\tself.gramSchmidtProcess\n\t}",
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
  "qrDecomposition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym26 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym26, 1),
      _n = _at_2(__genSym26, 2);
    let _qr = _deepCopy_1(_self);
    let _q = _zeroMatrix_2(_m, _n);
    let _r = _zeroMatrix_2(_m, _n);
    /* Statements */
    _toDo_3(1, _n, function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _norm = 0;
      /* Statements */
      _toDo_3(_k, _m, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _norm = _hypot_2(_norm, _at_2(_at_2(_qr, _i), _k));
      });
      _ifFalse_2(_isZero_1(_norm), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_lessThanSign_2(_at_2(_at_2(_qr, _k), _k), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _norm = _negated_1(_norm);
        });
        _toDo_3(_k, _m, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _at_2(_qr, _i),
            _k,
            _solidus_2(_at_2(_at_2(_qr, _i), _k), _norm),
          );
        });
        _atPut_3(_at_2(_qr, _k), _k, _plusSign_2(_at_2(_at_2(_qr, _k), _k), 1));
        return _toDo_3(_plusSign_2(_k, 1), _n, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _s = 0;
          /* Statements */
          _toDo_3(_k, _m, function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _s = _plusSign_2(
              _s,
              _asterisk_2(_at_2(_at_2(_qr, _i), _k), _at_2(_at_2(_qr, _i), _j)),
            );
          });
          _s = _solidus_2(_negated_1(_s), _at_2(_at_2(_qr, _k), _k));
          return _toDo_3(_k, _m, function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _atPut_3(
              _at_2(_qr, _i),
              _j,
              _plusSign_2(
                _at_2(_at_2(_qr, _i), _j),
                _asterisk_2(_s, _at_2(_at_2(_qr, _i), _k)),
              ),
            );
            return _ifTrue_2(_lessThanSign_2(_i, _j), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _atPut_3(_at_2(_r, _i), _j, _at_2(_at_2(_qr, _i), _j));
            });
          });
        });
      });
      return _atPut_3(_at_2(_r, _k), _k, _negated_1(_norm));
    });
    _toByDo_4(_n, 1, -1, function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_at_2(_q, _k), _k, 1);
      return _toDo_3(_k, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifFalse_2(_isZero_1(_at_2(_at_2(_qr, _k), _k)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _s = 0;
          /* Statements */
          _toDo_3(_k, _m, function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _s = _plusSign_2(
              _s,
              _asterisk_2(_at_2(_at_2(_qr, _i), _k), _at_2(_at_2(_q, _i), _j)),
            );
          });
          _s = _solidus_2(_negated_1(_s), _at_2(_at_2(_qr, _k), _k));
          return _toDo_3(_k, _m, function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _atPut_3(
              _at_2(_q, _i),
              _j,
              _plusSign_2(
                _at_2(_at_2(_q, _i), _j),
                _asterisk_2(_s, _at_2(_at_2(_qr, _i), _k)),
              ),
            );
          });
        });
      });
    });
    return [_q, _r];
  },
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet qr = self.deepCopy;\n\t\tlet q = m.zeroMatrix(n);\n\t\tlet r = m.zeroMatrix(n);\n\t\t1.toDo(n) { :k |\n\t\t\tlet norm = 0;\n\t\t\tk.toDo(m) { :i |\n\t\t\t\tnorm := norm.hypot(qr[i][k])\n\t\t\t};\n\t\t\tnorm.isZero.ifFalse {\n\t\t\t\t(qr[k][k] < 0).ifTrue {\n\t\t\t\t\tnorm := norm.negated\n\t\t\t\t};\n\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\tqr[i][k] := qr[i][k] / norm\n\t\t\t\t};\n\t\t\t\tqr[k][k] := qr[k][k] + 1;\n\t\t\t\t(k + 1).toDo(n) { :j |\n\t\t\t\t\tlet s = 0;\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\ts := s + (qr[i][k] * qr[i][j])\n\t\t\t\t\t};\n\t\t\t\t\ts := s.negated / qr[k][k];\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\tqr[i][j] := qr[i][j] + (s * qr[i][k]);\n\t\t\t\t\t\t(i < j).ifTrue {\n\t\t\t\t\t\t\tr[i][j] := qr[i][j]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tr[k][k] := norm.negated\n\t\t};\n\t\tn.toByDo(1, -1) { :k |\n\t\t\tq[k][k] := 1;\n\t\t\tk.toDo(n) { :j |\n\t\t\t\tqr[k][k].isZero.ifFalse {\n\t\t\t\t\tlet s = 0;\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\ts := s + (qr[i][k] * q[i][j])\n\t\t\t\t\t};\n\t\t\t\t\ts := s.negated / qr[k][k];\n\t\t\t\t\tk.toDo(m) { :i |\n\t\t\t\t\t\tq[i][j] := q[i][j] + (s * qr[i][k])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[q, r]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "resultant",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _determinant_1(_sylvesterMatrix_2(_p, _q));
  },
  "{ :p :q |\n\t\tp.sylvesterMatrix(q).determinant\n\t}",
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
      let __genSym27 = _assertIsOfSize_2(_shape_1(_self), 2),
        _m = _at_2(__genSym27, 1),
        _n = _at_2(__genSym27, 2);
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
  "rowConcatenation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_self);
    let _k = _size_1(_first_1(_self));
    let _answer = [];
    /* Statements */
    _toDo_3(1, _k, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _row = [];
      /* Statements */
      _toDo_3(1, _n, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(_row, _at_2(_at_2(_self, _j), _i));
      });
      return _add_2(_answer, _row);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet k = self.first.size;\n\t\tlet answer = [];\n\t\t1.toDo(k) { :i |\n\t\t\tlet row = [];\n\t\t\t1.toDo(n) { :j |\n\t\t\t\trow.addAll(self[j][i])\n\t\t\t};\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
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
  "Sequence",
  "Matrix",
  "singularValueDecompositionQr",
  ["self", "tolerance"],
  function (_self, _tolerance) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tolerance";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _self;
    let __genSym28 = _assertIsOfSize_2(_shape_1(_a), 2),
      _m = _at_2(__genSym28, 1),
      _n = _at_2(__genSym28, 2);
    let _loopMax = _asterisk_2(100, _max_2(_m, _n));
    let _loopCount = 0;
    let _u = _identityMatrix_1(_m);
    let _s = _conjugateTranspose_1(_a);
    let _v = _identityMatrix_1(_n);
    let _err = _inf;
    let _ss = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_err, _tolerance), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_loopCount, _loopMax);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _q, _e, _f;
      /* Statements */
      /* List Assignment */ (function () {
        const __genSym29 = _qrDecomposition_1(_conjugateTranspose_1(_s));
        _q = _at_2(__genSym29, 1);
        _s = _at_2(__genSym29, 2);
      })();
      _u = _dot_2(_u, _q); /* List Assignment */
      (function () {
        const __genSym30 = _qrDecomposition_1(_conjugateTranspose_1(_s));
        _q = _at_2(__genSym30, 1);
        _s = _at_2(__genSym30, 2);
      })();
      _v = _dot_2(_v, _q);
      _e = _norm_1(_concatenation_1(_upperTriangularize_2(_deepCopy_1(_s), 1)));
      _f = _norm_1(_diagonal_1(_s));
      _err = _if_3(
        _verticalLineVerticalLine_2(_equalsSign_2(_f, 0), _equalsSign_2(_f, 1)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 0;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _solidus_2(_e, _f);
        },
      );
      return _loopCount = _plusSign_2(_loopCount, 1);
    });
    _ss = _diagonal_1(_s);
    _s = _reshape_2([0], [_m, _n]);
    _toDo_3(1, _size_1(_ss), function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _ssn = _at_2(_ss, _n);
      /* Statements */
      _atPut_3(_at_2(_s, _n), _n, _abs_1(_ssn));
      return _ifTrue_2(_lessThanSign_2(_ssn, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(1, _m, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _at_2(_u, _i),
            _n,
            _negated_1(_at_2(_at_2(_u, _i), _n)),
          );
        });
      });
    });
    return [_u, _s, _v];
  },
  "{ :self :tolerance |\n\t\tlet a = self;\n\t\tlet [m, n] = a.shape;\n\t\tlet loopMax = 100 * m.max(n);\n\t\tlet loopCount = 0;\n\t\tlet u = m.identityMatrix;\n\t\tlet s = a.conjugateTranspose;\n\t\tlet v = n.identityMatrix;\n\t\tlet err = inf;\n\t\tlet ss = nil;\n\t\t{\n\t\t\terr > tolerance & {\n\t\t\t\tloopCount < loopMax\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tvar q, e, f;\n\t\t\t[q, s] := qrDecomposition(s.conjugateTranspose);\n\t\t\tu := u.dot(q);\n\t\t\t[q, s] := qrDecomposition(s.conjugateTranspose);\n\t\t\tv := v.dot(q);\n\t\t\te := s.deepCopy.upperTriangularize(1).concatenation.norm;\n\t\t\tf := s.diagonal.norm;\n\t\t\terr := (f = 0 || (f = 1)).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\te / f\n\t\t\t};\n\t\t\tloopCount := loopCount + 1\n\t\t};\n\t\tss := s.diagonal;\n\t\ts := [0].reshape([m, n]);\n\t\t1.toDo(ss.size) { :n |\n\t\t\tlet ssn = ss[n];\n\t\t\ts[n][n] := ssn.abs;\n\t\t\t(ssn < 0).ifTrue {\n\t\t\t\t1.toDo(m) { :i |\n\t\t\t\t\tu[i][n] := u[i][n].negated\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[u, s, v]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "singularValueDecomposition",
  ["a"],
  function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _tol = 1e-4;
    let __genSym31 = _assertIsOfSize_2(_shape_1(_a), 2),
      _n = _at_2(__genSym31, 1),
      _m = _at_2(__genSym31, 2);
    let _u = _conjugateTranspose_1(_a);
    let _s = _List_1(_n);
    let _v = _identityMatrix_1(_n);
    let _converge = _plusSign_2(_tol, 1);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_converge, _tol);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _converge = 0;
      return _toDo_3(1, _hyphenMinus_2(_n, 1), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(_plusSign_2(_i, 1), _n, function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _alpha = _sumOfSquares_1(_at_2(_u, _i));
          let _beta = _sumOfSquares_1(_at_2(_u, _j));
          let _gamma = _sum_1(_asterisk_2(_at_2(_u, _i), _at_2(_u, _j)));
          let _zeta = _solidus_2(
            _hyphenMinus_2(_beta, _alpha),
            _asterisk_2(2, _gamma),
          );
          let _t = _solidus_2(
            _sign_1(_zeta),
            _plusSign_2(
              _abs_1(_zeta),
              _sqrt_1(_plusSign_2(1, _squared_1(_zeta))),
            ),
          );
          let _cs = _solidus_2(1, _sqrt_1(_plusSign_2(1, _squared_1(_t))));
          let _sn = _asterisk_2(_cs, _t);
          let _tmp = null;
          /* Statements */
          _converge = _max_2(
            _converge,
            _solidus_2(_abs_1(_gamma), _sqrt_1(_asterisk_2(_alpha, _beta))),
          );
          _tmp = _at_2(_u, _i);
          _atPut_3(
            _u,
            _i,
            _hyphenMinus_2(
              _asterisk_2(_cs, _tmp),
              _asterisk_2(_sn, _at_2(_u, _j)),
            ),
          );
          _atPut_3(
            _u,
            _j,
            _plusSign_2(
              _asterisk_2(_sn, _tmp),
              _asterisk_2(_cs, _at_2(_u, _j)),
            ),
          );
          _tmp = _at_2(_v, _i);
          _atPut_3(
            _v,
            _i,
            _hyphenMinus_2(
              _asterisk_2(_cs, _tmp),
              _asterisk_2(_sn, _at_2(_v, _j)),
            ),
          );
          return _atPut_3(
            _v,
            _j,
            _plusSign_2(
              _asterisk_2(_sn, _tmp),
              _asterisk_2(_cs, _at_2(_v, _j)),
            ),
          );
        });
      });
    });
    _toDo_3(1, _n, function (_j) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_s, _j, _norm_1(_at_2(_u, _j)));
      return _atPut_3(_u, _j, _solidus_2(_at_2(_u, _j), _at_2(_s, _j)));
    });
    _s = _diagonalMatrix_1(_sorted_2(_s, _greaterThanSign_2));
    _u = _conjugateTranspose_1(_u);
    _v = _conjugateTranspose_1(_v);
    return [_u, _s, _v];
  },
  "{ :a |\n\t\tlet tol = 1E-4;\n\t\tlet [n, m] = a.shape;\n\t\tlet u = a.conjugateTranspose;\n\t\tlet s = List(n);\n\t\tlet v = n.identityMatrix;\n\t\tlet converge = tol + 1;\n\t\t{\n\t\t\tconverge > tol\n\t\t}.whileTrue {\n\t\t\tconverge := 0;\n\t\t\t1.toDo(n - 1) { :i |\n\t\t\t\t(i + 1).toDo(n) { :j |\n\t\t\t\t\tlet alpha = u[i].sumOfSquares;\n\t\t\t\t\tlet beta = u[j].sumOfSquares;\n\t\t\t\t\tlet gamma = (u[i] * u[j]).sum;\n\t\t\t\t\tlet zeta = (beta - alpha) / (2 * gamma);\n\t\t\t\t\tlet t = zeta.sign / (zeta.abs + (1 + zeta.squared).sqrt);\n\t\t\t\t\tlet cs = 1 / (1 + t.squared).sqrt;\n\t\t\t\t\tlet sn = cs * t;\n\t\t\t\t\tlet tmp = nil;\n\t\t\t\t\tconverge := converge.max(gamma.abs / (alpha * beta).sqrt);\n\t\t\t\t\ttmp := u[i];\n\t\t\t\t\tu[i] := (cs * tmp) - (sn * u[j]);\n\t\t\t\t\tu[j] := (sn * tmp) + (cs * u[j]);\n\t\t\t\t\ttmp := v[i];\n\t\t\t\t\tv[i] := (cs * tmp) - (sn * v[j]);\n\t\t\t\t\tv[j] := (sn * tmp) + (cs * v[j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t1.toDo(n) { :j |\n\t\t\ts[j] := u[j].norm;\n\t\t\tu[j] := u[j] / s[j]\n\t\t};\n\t\ts := s.sorted(>).diagonalMatrix;\n\t\tu := u.conjugateTranspose; {- not sorted! -}\n\t\tv := v.conjugateTranspose; {- not sorted! -}\n\t\t[u, s, v]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "submatrix",
  ["self", "r", "c"],
  function (_self, _r, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _c";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
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
        return _at_2(_at_2(_self, _i), _j);
      },
      _r,
      _c,
    );
  },
  "{ :self :r :c |\n\t\t{ :i :j |\n\t\t\tself[i][j]\n\t\t}.table(r, c)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "sylvesterMatrix",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _hyphenMinus_2(_size_1(_p), 1);
    let _n = _hyphenMinus_2(_size_1(_q), 1);
    let _d = _plusSign_2(_m, _n);
    let _x = _hyphenMinus_2(_hyphenMinus_2(_d, _m), 1);
    let _y = _hyphenMinus_2(_hyphenMinus_2(_d, _n), 1);
    let _a = _plusSignPlusSign_2(_reversed_1(_p), _numberSign_2(0, _x));
    let _b = _plusSignPlusSign_2(_reversed_1(_q), _numberSign_2(0, _y));
    /* Statements */
    return _concatenation_1([
      _collect_2(_upOrDownTo_2(0, _x), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _rotatedRight_2(_a, _i);
      }),
      _collect_2(_upOrDownTo_2(0, _y), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _rotatedRight_2(_b, _i);
      }),
    ]);
  },
  "{ :p :q |\n\t\tlet m = p.size - 1;\n\t\tlet n = q.size - 1;\n\t\tlet d = m + n;\n\t\tlet x = d - m - 1;\n\t\tlet y = d - n - 1;\n\t\tlet a = p.reversed ++ (0 # x);\n\t\tlet b = q.reversed ++ (0 # y);\n\t\t[\n\t\t\t0:x.collect { :i | a.rotatedRight(i) },\n\t\t\t0:y.collect { :i | b.rotatedRight(i) }\n\t\t].concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "toeplitzMatrix",
  ["c", "r"],
  function (_c, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
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
        return _if_3(_greaterThanSignEqualsSign_2(_i, _j), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _at_2(_c, _plusSign_2(_hyphenMinus_2(_i, _j), 1));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _at_2(_r, _plusSign_2(_hyphenMinus_2(_j, _i), 1));
        });
      },
      _upOrDownTo_2(1, _size_1(_r)),
      _upOrDownTo_2(1, _size_1(_c)),
    );
  },
  "{ :c :r |\n\t\t{ :i :j |\n\t\t\t(i >= j).if {\n\t\t\t\tc[i - j + 1]\n\t\t\t} {\n\t\t\t\tr[j - i + 1]\n\t\t\t}\n\t\t}.table((1 .. r.size), (1 .. c.size))\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        /* Temporaries */
        let _rank = _rank_1(_self);
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
          return _atPath_2(_self, _numberSign_2(_each, _rank));
        }));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Sequence>>trace: not an Array");
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.isVector.if {\n\t\t\taBlock(self)\n\t\t} {\n\t\t\tself.isArray.if {\n\t\t\t\tlet rank = self.rank;\n\t\t\t\tlet limit = self.shape.min;\n\t\t\t\taBlock(\n\t\t\t\t\t1:limit.collect { :each |\n\t\t\t\t\t\tself.atPath(each # rank)\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>trace: not an Array')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
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
  "upperTriangularize",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "@Sequence>>upperTriangularize");
    let __genSym32 = _assertIsOfSize_2(_shape_1(_m), 2),
      _r = _at_2(__genSym32, 1),
      _c = _at_2(__genSym32, 2);
    /* Statements */
    _toDo_3(_hyphenMinus_2(2, _k), _r, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _plusSign_2(_hyphenMinus_2(_i, 1), _k), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_at_2(_m, _i), _j, 0);
      });
    });
    return _m;
  },
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('@Sequence>>upperTriangularize');\n\t\tlet [r, c] = m.shape;\n\t\t(2 - k).toDo(r) { :i |\n\t\t\t1.toDo(i - 1 + k) { :j |\n\t\t\t\tm[i][j] := 0\n\t\t\t}\n\t\t};\n\t\tm\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Matrix",
  "upperTriangularize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _upperTriangularize_2(_self, 0);
  },
  "{ :self |\n\t\tself.upperTriangularize(0)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "exchangeMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _zeroMatrix_2(_self, _self);
    /* Statements */
    _do_2(_upOrDownTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _at_2(_answer, _plusSign_2(_hyphenMinus_2(_self, _each), 1)),
        _each,
        1,
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.zeroMatrix(self);\n\t\t1:self.do { :each |\n\t\t\tanswer[self - each + 1][each] := 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "fourierMatrix",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _solidus_2(1, _sqrt_1(_n));
    let _omega = _circumflexAccent_2(
      _e,
      _solidus_2(
        _asterisk_2(
          _pi_1(2),
          _Complex_2(
            0,
            1,
          ),
        ),
        _n,
      ),
    );
    let _l = _upOrDownTo_2(0, _hyphenMinus_2(_n, 1));
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
        return _asterisk_2(
          _m,
          _circumflexAccent_2(_omega, _asterisk_2(_i, _j)),
        );
      },
      _l,
      _l,
    );
  },
  "{ :n |\n\t\tlet m = 1 / n.sqrt;\n\t\tlet omega = e ^ (2.pi * 0J1 / n);\n\t\tlet l = (0 .. n - 1);\n\t\t{ :i :j | m * (omega ^ (i * j)) }.table(l, l)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "hadamardMatrix",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [1];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [[1, 1], [1, -1]];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isPowerOfTwo_1(_n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _kroneckerProduct_2(
            [[1, 1], [1, -1]],
            _hadamardMatrix_1(_solidus_2(_n, 2)),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(_n, "@Integer>>hadamardMatrix: not power of two");
        });
      });
    });
  },
  "{ :n |\n\t\t(n = 0).if {\n\t\t\t[1]\n\t\t} {\n\t\t\t(n = 2).if {\n\t\t\t\t[1 1; 1 -1]\n\t\t\t} {\n\t\t\t\tn.isPowerOfTwo.if {\n\t\t\t\t\t[1 1; 1 -1].kroneckerProduct((n / 2).hadamardMatrix)\n\t\t\t\t} {\n\t\t\t\t\tn.error('@Integer>>hadamardMatrix: not power of two')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "hilbertMatrix",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
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
        return _solidus_2(1, _hyphenMinus_2(_plusSign_2(_i, _j), 1));
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :n |\n\t\t{ :i :j |\n\t\t\t1 / (i + j - 1)\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "identityMatrix",
  ["n", "m"],
  function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _zeroMatrix_2(_n, _m);
    /* Statements */
    _toDo_3(1, _min_2(_m, _n), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_at_2(_answer, _each), _each, 1);
    });
    return _answer;
  },
  "{ :n :m |\n\t\tlet answer = n.zeroMatrix(m);\n\t\t1.toDo(m.min(n)) { :each |\n\t\t\tanswer[each][each] := 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "identityMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _identityMatrix_2(_self, _self);
  },
  "{ :self |\n\t\tself.identityMatrix(self)\n\t}",
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

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "walshMatrix",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _h = _hadamardMatrix_1(_n);
    let _z = _collect_2(_h, _zeroCrossingCount_1);
    let _p = _ordering_1(_z);
    /* Statements */
    return _commercialAtAsterisk_2(_h, _p);
  },
  "{ :n |\n\t\tlet h = n.hadamardMatrix;\n\t\tlet z = h.collect(zeroCrossingCount:/1);\n\t\tlet p = z.ordering;\n\t\th @* p\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Matrix",
  "zeroMatrix",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _self), function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _List_2(_other, 0);
    });
  },
  "{ :self :other |\n\t\t1:self.collect { :unused |\n\t\t\tList(other, 0)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "boxMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
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
        return 1;
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\t{ :i :j | 1 }.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "crossMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
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
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _editDistance_2([_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)], _c),
            1,
          ),
        );
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].editDistance(c) <= 1).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "diamondMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
    let _l = _abs_1(_plusSign_2(_self, 0.5));
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
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _manhattanDistance_2(
              [_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)],
              _c,
            ),
            _l,
          ),
        );
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\tlet l = (self + 0.5).abs;\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].manhattanDistance(c) <= l).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "diskMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
    let _l = _abs_1(_plusSign_2(_self, 0.5));
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
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _euclideanDistance_2(
              [_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)],
              _c,
            ),
            _l,
          ),
        );
      },
      _upOrDownTo_2(1, _n),
      _upOrDownTo_2(1, _n),
    );
  },
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\tlet l = (self + 0.5).abs;\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].euclideanDistance(c) <= l).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "reflectionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _asterisk_2(2, _self);
    /* Statements */
    return [[_cos_1(_n), _sin_1(_n)], [_sin_1(_n), _negated_1(_cos_1(_n))]];
  },
  "{ :self |\n\t\tlet n = 2 * self;\n\t\t[\n\t\t\t[n.cos, n.sin],\n\t\t\t[n.sin, n.cos.negated]\n\t\t]\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "rotationMatrix",
  ["self", "vector"],
  function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_vector, [
      _hyphenMinusGreaterThanSign_2([1, 0, 0], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [
          [1, 0, 0],
          [0, _cos_1(_self), _hyphenMinus_2(0, _sin_1(_self))],
          [0, _sin_1(_self), _cos_1(_self)],
        ];
      }),
      _hyphenMinusGreaterThanSign_2([0, 1, 0], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [[_cos_1(_self), 0, _sin_1(_self)], [0, 1, 0], [
          _hyphenMinus_2(0, _sin_1(_self)),
          0,
          _cos_1(_self),
        ]];
      }),
      _hyphenMinusGreaterThanSign_2([0, 0, 1], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [[_cos_1(_self), _hyphenMinus_2(0, _sin_1(_self)), 0], [
          _sin_1(_self),
          _cos_1(_self),
          0,
        ], [0, 0, 1]];
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "rotationMatrix: vector not axis aligned");
    });
  },
  "{ :self :vector |\n\t\tvector.caseOfOtherwise([\n\t\t\t[1 0 0] -> {\n\t\t\t\t[[1,0,0],[0,self.cos,0 - self.sin],[0,self.sin,self.cos]]\n\t\t\t},\n\t\t\t[0 1 0] -> {\n\t\t\t\t[[self.cos,0,self.sin],[0,1,0],[0 - self.sin,0,self.cos]]\n\t\t\t},\n\t\t\t[0 0 1] -> {\n\t\t\t\t[[self.cos,0 - self.sin,0],[self.sin,self.cos,0],[0,0,1]]\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('rotationMatrix: vector not axis aligned')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix",
  "rotationMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [[_cos_1(_self), _negated_1(_sin_1(_self))], [
      _sin_1(_self),
      _cos_1(_self),
    ]];
  },
  "{ :self |\n\t\t[\n\t\t\t[self.cos, self.sin.negated],\n\t\t\t[self.sin, self.cos]\n\t\t]\n\t}",
);

sl.addMethod(
  "Block",
  "Matrix",
  "arrayReduce",
  ["self:/1", "anArray", "anInteger"],
  function (_self_1, _anArray, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anArray, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_anInteger, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_anArray, _self_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_anInteger, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _columnsCollect_2(_anArray, _self_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "Block>>arrayReduce: not implemented");
      });
    });
  },
  "{ :self:/1 :anArray :anInteger |\n\t\t(anInteger = 1).if {\n\t\t\tanArray.collect(self:/1)\n\t\t} {\n\t\t\t(anInteger = 2).if {\n\t\t\t\tanArray.columnsCollect(self:/1)\n\t\t\t} {\n\t\t\t\tself.error('Block>>arrayReduce: not implemented')\n\t\t\t}\n\t\t}\n\t}",
);
