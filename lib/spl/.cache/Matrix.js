/*  Requires: NumericArray  */

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isColumnVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_numberOfColumns_1(_self), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.numberOfColumns = 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "NumericArray",
  "Matrix",
  "isColumnVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_numberOfColumns_1(_self), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.numberOfColumns = 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isRowVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_numberOfRows_1(_self), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.numberOfRows = 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "NumericArray",
  "Matrix",
  "isRowVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_numberOfRows_1(_self), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.numberOfRows = 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isSquareMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar1, 1);
        let _n = _at_2(__SplVar1, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tlet [m, n] = self.shape;\n\t\t\tm = n\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "NumericArray",
  "Matrix",
  "isSquareMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SplVar1, 1);
        let _n = _at_2(__SplVar1, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tlet [m, n] = self.shape;\n\t\t\tm = n\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "numberOfRows",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SplVar2, 1);
    let __SplUnused24 = _at_2(__SplVar2, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self |\n\t\tlet [m, _] = self.dimensions(2);\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "NumericArray",
  "Matrix",
  "numberOfRows",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SplVar2, 1);
    let __SplUnused24 = _at_2(__SplVar2, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self |\n\t\tlet [m, _] = self.dimensions(2);\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "numberOfColumns",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let __SplUnused25 = _at_2(__SplVar3, 1);
    let _n = _at_2(__SplVar3, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self |\n\t\tlet [_, n] = self.dimensions(2);\n\t\tn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "NumericArray",
  "Matrix",
  "numberOfColumns",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let __SplUnused25 = _at_2(__SplVar3, 1);
    let _n = _at_2(__SplVar3, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self |\n\t\tlet [_, n] = self.dimensions(2);\n\t\tn\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonal",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>antidiagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(_l, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _hyphenMinus_2(
          _plusSign_2(_hyphenMinus_2(_l, _i), 1),
          _min_2(_k, 0),
        );
        let _c = _hyphenMinus_2(_i, _min_2(_k, 0));
        /* Statements */
        return _at_2(_at_2(_m, _r), _c);
      }, ["i"]),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('List>>antidiagonal');\n\t\tlet l = m.shape.min - k.abs;\n\t\t(l .. 1).collect { :i |\n\t\t\tlet r = l - i + 1 - k.min(0);\n\t\t\tlet c = i - k.min(0);\n\t\t\tm[r][c]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _antidiagonal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.antidiagonal(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "assertIsMatrix",
  ["self", "context"],
  sl.annotateFunction(function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      _context,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isMatrix_1(_self);
      }, []),
    );
  }, ["self", "context"]),
  "{ :self :context |\n\t\tself.assert(context) {\n\t\t\tself.isMatrix\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "assertIsSquareMatrix",
  ["self", "context"],
  sl.annotateFunction(function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      _context,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSquareMatrix_1(_self);
      }, []),
    );
  }, ["self", "context"]),
  "{ :self :context |\n\t\tself.assert(context) {\n\t\t\tself.isSquareMatrix\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "cayleyMengerDeterminant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_self), 1);
    let _z = _solidus_2(
      _circumflexAccent_2(-1, _plusSign_2(_n, 1)),
      _asterisk_2(_square_1(_factorial_1(_n)), _circumflexAccent_2(2, _n)),
    );
    /* Statements */
    return _sqrt_1(
      _abs_1(_asterisk_2(_z, _determinant_1(_cayleyMengerMatrix_1(_self)))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size - 1;\n\t\tlet z = (-1 ^ (n + 1)) / (n.factorial.square * (2 ^ n));\n\t\t(z * self.cayleyMengerMatrix.determinant).abs.sqrt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "cayleyMengerMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _arrayPad_3(
      _distanceMatrix_3(_self, _self, _squaredEuclideanDistance_2),
      [[1, 0], [1, 0]],
      1,
    );
    /* Statements */
    _atPut_3(_at_2(_m, 1), 1, 0);
    return _m;
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.distanceMatrix(\n\t\t\tself,\n\t\t\tsquaredEuclideanDistance:/2\n\t\t).arrayPad([1 0; 1 0], 1);\n\t\tm[1][1] := 0;\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "column",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar4, 1);
    let _n = _at_2(__SplVar4, 2);
    /* Statements */
    return _if_3(
      _betweenAnd_3(_anInteger, 1, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _m),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_at_2(_self, _i), _anInteger);
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>column: illegal index");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet [m, n] = self.shape;\n\t\tanInteger.betweenAnd(1, n).if {\n\t\t\t(1 .. m).collect { :i |\n\t\t\t\tself[i][anInteger]\n\t\t\t}\n\t\t} {\n\t\t\tself.error('List>>column: illegal index')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "columns",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar5, 1);
    let _n = _at_2(__SplVar5, 2);
    /* Statements */
    return _if_3(
      _allSatisfy_2(
        _aList,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _betweenAnd_3(_each, 1, _n);
        }, ["each"]),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _m),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _aList,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_at_2(_self, _i), _j);
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
        } /* Statements */
        return _error_2(_self, "List>>columns: illegal index");
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet [m, n] = self.shape;\n\t\taList.allSatisfy { :each |\n\t\t\teach.betweenAnd(1, n)\n\t\t}.if {\n\t\t\t(1 .. m).collect { :i |\n\t\t\t\taList.collect { :j |\n\t\t\t\t\tself[i][j]\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('List>>columns: illegal index')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "designMatrix",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar6, 1);
    let _n = _at_2(__SplVar6, 2);
    /* Statements */
    return _collect_2(
      _submatrix_3(
        _self,
        _asList_1(_upOrDownTo_2(1, _m)),
        _asList_1(_upOrDownTo_2(1, _hyphenMinus_2(_n, 1))),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2([1], _aBlock_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet [m, n] = self.shape;\n\t\tself.submatrix(\n\t\t\t[1 .. m],\n\t\t\t[1 .. n - 1]\n\t\t).collect { :each |\n\t\t\t[1] ++ aBlock(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonal",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>diagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(
      _Span_3(1, _l, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_3(
          _m,
          _hyphenMinus_2(_i, _min_2(_k, 0)),
          _plusSign_2(_i, _max_2(_k, 0)),
        );
      }, ["i"]),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tlet m = self.assertIsMatrix('List>>diagonal');\n\t\tlet l = m.shape.min - k.abs;\n\t\t1:l.collect { :i |\n\t\t\tm.at(\n\t\t\t\ti - k.min(0),\n\t\t\t\ti + k.max(0)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.diagonal(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isAntisymmetricMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, _negate_1(_transpose_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix & {\n\t\t\tself = self.transpose.negate\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isBisymmetricMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSymmetricMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCentrosymmetricMatrix_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSymmetricMatrix & {\n\t\t\tself.isCentrosymmetricMatrix\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isCentrosymmetricMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _exchangeMatrix_1(_size_1(_self));
        /* Statements */
        return _equalsSign_2(_dot_2(_self, _e), _dot_2(_e, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix & {\n\t\t\tlet e = self.size.exchangeMatrix;\n\t\t\tself.dot(e) = e.dot(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isDiagonalMatrix",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _deepIndices_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar7 = _assertIsOfSize_2(_index, 2);
            let _i = _at_2(__SplVar7, 1);
            let _j = _at_2(__SplVar7, 2);
            /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_plusSign_2(_i, _k), _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
              }, []),
            );
          }, ["index"]),
        );
      }, []),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\t(self.rank = 2) & {\n\t\t\tself.deepIndices.allSatisfy { :index |\n\t\t\t\tlet [i, j] = index;\n\t\t\t\t(i + k = j) | {\n\t\t\t\t\tself[i][j].isVeryCloseTo(0)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isDiagonalMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDiagonalMatrix_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.isDiagonalMatrix(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isIntegerMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deepAllSatisfy_2(_self, _isInteger_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix & {\n\t\t\tself.deepAllSatisfy(isInteger:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isLatinSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _at_2(_self, 1);
        /* Statements */
        return _allSatisfy_2(
          _plusSignPlusSign_2(_self, _transpose_1(_self)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _isPermutationOf_2(_each, _x);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix & {\n\t\t\tlet x = self[1];\n\t\t\t(self ++ self.transpose).allSatisfy { :each |\n\t\t\t\teach.isPermutationOf(x)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isMatrixOf",
  ["self", "elementType"],
  sl.annotateFunction(function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_arrayDepth_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_elementType_1(_each), _elementType);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "elementType"]),
  "{ :self :elementType |\n\t\t(self.arrayDepth >= 2) & {\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.elementType = elementType\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isSymmetricMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSquareMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, _transpose_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSquareMatrix & {\n\t\t\tself = self.transpose\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "columnsCollect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar8, 1);
    let _n = _at_2(__SplVar8, 2);
    /* Statements */
    return _collect_2(
      _Span_3(1, _n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_column_2(_self, _i));
      }, ["i"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet [m, n] = self.shape;\n\t\t1:n.collect { :i |\n\t\t\taBlock(self.column(i))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "magicSquareSummary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _mu = _solidus_2(
      _asterisk_2(_n, _plusSign_2(_asterisk_2(_n, _n), 1)),
      2,
    );
    let _v = _numberSign_2(1, _n);
    /* Statements */
    return _Record_1([
      ["sum", _mu],
      ["rowSums", _dot_2(_self, _v)],
      ["columnSums", _dot_2(_v, _self)],
      ["diagonalSum", _sum_1(_diagonal_1(_self))],
      ["anitdiagonalSum", _sum_1(_antidiagonal_1(_self))],
      ["rank", _matrixRank_1(_self)],
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet mu = n * (n * n + 1) / 2;\n\t\tlet v = 1 # n;\n\t\t(\n\t\t\tsum: mu,\n\t\t\trowSums: self.dot(v),\n\t\t\tcolumnSums: v.dot(self),\n\t\t\tdiagonalSum: self.diagonal.sum,\n\t\t\tanitdiagonalSum: self.antidiagonal.sum,\n\t\t\trank: self.matrixRank\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixPrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPrintString_2(_self, 4);
  }, ["self"]),
  "{ :self |\n\t\tself.matrixPrintString(4)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixPrintString",
  ["self", "decimalPlaces"],
  sl.annotateFunction(function (_self, _decimalPlaces) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _decimalPlaces";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar9 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar9, 1);
    let _n = _at_2(__SplVar9, 2);
    let _print_1 = _if_3(
      _isIntegerMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _printString_1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_n) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _n";
            throw new Error(errorMessage);
          } /* Statements */
          return _printStringShowingDecimalPlaces_2(_n, _decimalPlaces);
        }, ["n"]);
      }, []),
    );
    let _table = _deepCollect_2(_self, _print_1);
    let _columnWidth = _max_1(_collect_2(_flatten_1(_table), _size_1));
    let _text = _collect_2(
      _table,
      sl.annotateFunction(function (_row) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _row";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          "   ",
          _stringJoin_2(
            _collect_2(
              _row,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _padLeft_3(_each, [_columnWidth], " ");
              }, ["each"]),
            ),
            "   ",
          ),
        );
      }, ["row"]),
    );
    /* Statements */
    return _unlines_1([_stringJoin_1([_m, "×", _n]), "   ", _unlines_1(_text)]);
  }, ["self", "decimalPlaces"]),
  "{ :self :decimalPlaces |\n\t\tlet [m, n] = self.shape;\n\t\tlet print:/1 = self.isIntegerMatrix.if {\n\t\t\tprintString:/1\n\t\t} {\n\t\t\t{ :n |\n\t\t\t\tn.printStringShowingDecimalPlaces(decimalPlaces)\n\t\t\t}\n\t\t};\n\t\tlet table = self.deepCollect(print:/1);\n\t\tlet columnWidth = table.flatten.collect(size:/1).max;\n\t\tlet text = table.collect { :row |\n\t\t\t'   ' ++ row.collect { :each |\n\t\t\t\teach.padLeft([columnWidth], ' ')\n\t\t\t}.stringJoin('   ')\n\t\t};\n\t\t[\n\t\t\t[m, '×', n].stringJoin,\n\t\t\t'   ',\n\t\t\ttext.unlines\n\t\t].unlines\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRotate",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _k,
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _transpose_1(_collect_2(_self, _reverse_1));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _reverse_1(_collect_2(_self, _reverse_1));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_transpose_1(_self), _reverse_1);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>matrixRotate: k not 1,2,3");
      }, []),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tk.caseOf([\n\t\t\t1 -> { self.collect(reverse:/1).transpose },\n\t\t\t2 -> { self.collect(reverse:/1).reverse },\n\t\t\t3 -> { self.transpose.collect(reverse:/1) }\n\t\t]) {\n\t\t\tself.error('List>>matrixRotate: k not 1,2,3')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRotate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixRotate_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.matrixRotate(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "repeatMatrix",
  ["self", "d"],
  sl.annotateFunction(function (_self, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_d);
    let _m = _self;
    /* Statements */
    _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _m = _join_2(_exclamationMark_2(_m, _at_2(_d, _i)), _i);
      }, ["i"]),
    );
    return _m;
  }, ["self", "d"]),
  "{ :self :d |\n\t\tlet k = d.size;\n\t\tlet m = self;\n\t\t1.toDo(k) { :i |\n\t\t\tm := (m ! d[i]).join(i)\n\t\t};\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "row",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar10, 1);
    let _n = _at_2(__SplVar10, 2);
    /* Statements */
    return _if_3(
      _betweenAnd_3(_anInteger, 1, _m),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _anInteger);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>row: illegal index");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet [m, n] = self.shape;\n\t\tanInteger.betweenAnd(1, m).if {\n\t\t\tself[anInteger]\n\t\t} {\n\t\t\tself.error('List>>row: illegal index')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "rows",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar11, 1);
    let _n = _at_2(__SplVar11, 2);
    /* Statements */
    return _if_3(
      _allSatisfy_2(
        _aList,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _betweenAnd_3(_each, 1, _m);
        }, ["each"]),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atAll_2(_self, _aList);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>rows: illegal index");
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tlet [m, n] = self.shape;\n\t\taList.allSatisfy { :each |\n\t\t\teach.betweenAnd(1, m)\n\t\t}.if {\n\t\t\tself.atAll(aList)\n\t\t} {\n\t\t\tself.error('List>>rows: illegal index')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "submatrix",
  ["self", "r", "c"],
  sl.annotateFunction(function (_self, _r, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_at_2(_self, _i), _j);
      }, ["i", "j"]),
      _r,
      _c,
    );
  }, ["self", "r", "c"]),
  "{ :self :r :c |\n\t\t{ :i :j |\n\t\t\tself[i][j]\n\t\t}.table(r, c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonalMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _answer = _zeroMatrix_1([_k, _k]);
    /* Statements */
    _toDo_3(
      1,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _at_2(_answer, _plusSign_2(_hyphenMinus_2(_k, _each), 1)),
          _each,
          _at_2(_self, _plusSign_2(_hyphenMinus_2(_k, _each), 1)),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size;\n\t\tlet answer = [k, k].zeroMatrix;\n\t\t1.toDo(k) { :each |\n\t\t\tanswer[k - each + 1][each] := self[k - each + 1]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "blockDiagonalMatrix",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_d);
    let _s = _collect_2(_d, _shape_1);
    let _answer = [];
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
          _size_1(_at_2(_d, _i)),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _collectCatenate_2(
                _Span_3(1, _n, 1),
                sl.annotateFunction(function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _equalsSign_2(_i, _k),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _at_2(_at_2(_d, _i), _j);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _numberSign_2(0, _at_2(_at_2(_s, _k), 2));
                    }, []),
                  );
                }, ["k"]),
              ),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["d"]),
  "{ :d |\n\t\tlet n = d.size;\n\t\tlet s = d.collect(shape:/1);\n\t\tlet answer = [];\n\t\t1.toDo(n) { :i |\n\t\t\t1.toDo(d[i].size) { :j |\n\t\t\t\tanswer.add(\n\t\t\t\t\t1:n.collectCatenate { :k |\n\t\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\t\td[i][j]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t0 # s[k][2]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "circulantMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _size_1(_self)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _rotateRight_2(_self, _i);
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t(1 .. self.size).collect { :i |\n\t\t\tself.rotateRight(i)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "condensedDistanceMatrix",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _row = [];
        /* Statements */
        _toDo_3(
          _plusSign_2(_i, 1),
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_row, _aBlock_2(_at_2(_self, _i), _at_2(_self, _j)));
          }, ["j"]),
        );
        return _add_2(_answer, _row);
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet k = self.size;\n\t\tlet answer = [];\n\t\t1.toDo(k - 1) { :i |\n\t\t\tlet row = [];\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\trow.add(aBlock(self[i], self[j]))\n\t\t\t};\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self", "k", "shape"],
  sl.annotateFunction(function (_self, _k, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar12 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SplVar12, 1);
    let _n = _at_2(__SplVar12, 2);
    let _r = _abs_1(_min_2(_k, 0));
    let _c = _max_2(_k, 0);
    let _answer = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _at_2(_answer, _plusSign_2(_each, _r)),
          _plusSign_2(_each, _c),
          _at_2(_self, _each),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "k", "shape"]),
  "{ :self :k :shape |\n\t\tlet [m, n] = shape;\n\t\tlet r = k.min(0).abs;\n\t\tlet c = k.max(0);\n\t\tlet answer = [m, n].zeroMatrix;\n\t\t1.toDo(self.size) { :each |\n\t\t\tanswer[each + r][each + c] := self[each]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_size_1(_self), _abs_1(_k));
    /* Statements */
    return _diagonalMatrix_3(_self, _k, [_n, _n]);
  }, ["self", "k"]),
  "{ :self :k |\n\t\tlet n = self.size + k.abs;\n\t\tself.diagonalMatrix(k, [n n])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonalMatrix_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.diagonalMatrix(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u", "v", "aBlock:/2"],
  sl.annotateFunction(function (_u, _v, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(_aBlock_2, _u, _v);
  }, ["u", "v", "aBlock:/2"]),
  "{ :u :v :aBlock:/2 |\n\t\taBlock:/2.table(u, v)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _distanceMatrix_3(_u, _v, _euclideanDistance_2);
  }, ["u", "v"]),
  "{ :u :v |\n\t\tdistanceMatrix(u, v, euclideanDistance:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _distanceMatrix_2(_u, _u);
  }, ["u"]),
  "{ :u |\n\t\tdistanceMatrix(u, u)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "gaussianMatrix",
  ["r", "sigma"],
  sl.annotateFunction(function (_r, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar13 = _assertIsOfSize_2(_r, 2);
    let _r1 = _at_2(__SplVar13, 1);
    let _r2 = _at_2(__SplVar13, 2);
    let __SplVar14 = _assertIsOfSize_2(_sigma, 2);
    let _sigma1 = _at_2(__SplVar14, 1);
    let _sigma2 = _at_2(__SplVar14, 2);
    let _p = _exp_1(
      _solidus_2(
        _asterisk_2(
          -0.5,
          _square_1(_asList_1(_upOrDownTo_2(_hyphenMinus_1(_r1), _r1))),
        ),
        _square_1(_sigma1),
      ),
    );
    let _q = _exp_1(
      _solidus_2(
        _asterisk_2(
          -0.5,
          _square_1(_asList_1(_upOrDownTo_2(_hyphenMinus_1(_r2), _r2))),
        ),
        _square_1(_sigma2),
      ),
    );
    let _k = _outerProduct_2(_p, _q);
    /* Statements */
    return _solidus_2(_k, _deepSum_1(_k));
  }, ["r", "sigma"]),
  "{ :r :sigma |\n\t\tlet [r1, r2] = r;\n\t\tlet [sigma1, sigma2] = sigma;\n\t\tlet p = (-0.5 * [r1.- ..  r1].square / sigma1.square).exp;\n\t\tlet q = (-0.5 * [r2.- ..  r2].square / sigma2.square).exp;\n\t\tlet k = p.outerProduct(q);\n\t\tk / k.deepSum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "identityMatrix",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar15 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SplVar15, 1);
    let _n = _at_2(__SplVar15, 2);
    let _answer = _zeroMatrix_1([_m, _n]);
    /* Statements */
    _toDo_3(
      1,
      _min_2(_n, _m),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_at_2(_answer, _each), _each, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["shape"]),
  "{ :shape |\n\t\tlet [m, n] = shape;\n\t\tlet answer = [m, n].zeroMatrix;\n\t\t1.toDo(n.min(m)) { :each |\n\t\t\tanswer[each][each] := 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "singleEntryMatrix",
  ["shape", "index", "x"],
  sl.annotateFunction(function (_shape, _index, _x) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _shape, _index, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _zeroMatrix_1(_shape);
    /* Statements */
    _atPathPut_3(_m, _index, _x);
    return _m;
  }, ["shape", "index", "x"]),
  "{ :shape :index :x |\n\t\tlet m = shape.zeroMatrix;\n\t\tm.atPathPut(index, x);\n\t\tm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "zeroMatrix",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar16 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SplVar16, 1);
    let _n = _at_2(__SplVar16, 2);
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _m),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_n, 0);
      }, ["unused"]),
    );
  }, ["shape"]),
  "{ :shape |\n\t\tlet [m, n] = shape;\n\t\t(1 .. m).collect { :unused |\n\t\t\tList(n, 0)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "zigzagIndices",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar17 = _assertIsOfSize_2(_shape, 2);
    let _r = _at_2(__SplVar17, 1);
    let _c = _at_2(__SplVar17, 2);
    let _h = 0;
    let _v = 0;
    let _o = [];
    let _step_2 = sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_o, [_plusSign_2(_v, 1), _plusSign_2(_h, 1)]);
      _v = _plusSign_2(_v, _a);
      return _h = _plusSign_2(_h, _b);
    }, ["a", "b"]);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_v, _r),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_h, _c);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_percentSign_2(_plusSign_2(_h, _v), 2), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_v, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_h, _hyphenMinus_2(_c, 1)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _step_2(1, 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _step_2(0, 1);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _ampersand_2(
                    _equalsSign_2(_h, _hyphenMinus_2(_c, 1)),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSign_2(_v, _r);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _step_2(1, 0);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _step_2(-1, 1);
                  }, []),
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(
              _ampersand_2(
                _equalsSign_2(_v, _hyphenMinus_2(_r, 1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSignEqualsSign_2(_h, _hyphenMinus_2(_c, 1));
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _step_2(0, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_h, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_v, _hyphenMinus_2(_r, 1)),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _step_2(0, 1);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _step_2(1, 0);
                      }, []),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _step_2(1, -1);
                  }, []),
                );
              }, []),
            );
            return _ifTrue_2(
              _ampersand_2(
                _equalsSign_2(_v, _hyphenMinus_2(_r, 1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_h, _hyphenMinus_2(_c, 1));
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _step_2(1, 1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _o;
  }, ["shape"]),
  "{ :shape |\n\t\tlet [r, c] = shape;\n\t\tlet h = 0;\n\t\tlet v = 0;\n\t\tlet o = [];\n\t\tlet step = { :a :b |\n\t\t\to.add([v + 1, h + 1]);\n\t\t\tv := v + a;\n\t\t\th := h + b\n\t\t};\n\t\t{ v < r & { h < c } }.whileTrue {\n\t\t\t(((h + v) % 2) = 0).if {\n\t\t\t\t(v = 0).if {\n\t\t\t\t\t(h = (c - 1)).if {\n\t\t\t\t\t\tstep(1, 0)\n\t\t\t\t\t} {\n\t\t\t\t\t\tstep(0, 1)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t(h = (c - 1) & { v < r }).if {\n\t\t\t\t\t\tstep(1, 0)\n\t\t\t\t\t} {\n\t\t\t\t\t\tstep(-1, 1)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(v = (r - 1) & { h <= (c - 1) }).if {\n\t\t\t\t\tstep(0, 1)\n\t\t\t\t} {\n\t\t\t\t\t(h = 0).if {\n\t\t\t\t\t\t(v = (r - 1)).if {\n\t\t\t\t\t\t\tstep(0, 1)\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tstep(1, 0)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tstep(1, -1)\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t(v = (r - 1) & { h = (c - 1) }).ifTrue {\n\t\t\t\t\tstep(1, 1)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\to\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "zigzagMatrix",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = 1;
    let _answer = _zeroMatrix_1(_shape);
    /* Statements */
    _do_2(
      _zigzagIndices_1(_shape),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPathPut_3(_answer, _each, _i);
        return _i = _plusSign_2(_i, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["shape"]),
  "{ :shape |\n\t\tlet i = 1;\n\t\tlet answer = shape.zeroMatrix;\n\t\tshape.zigzagIndices.do { :each |\n\t\t\tanswer.atPathPut(each, i);\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "zigzagScan",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _zigzagIndices_1(_shape_1(_m)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _atPath_2(_m, _i));
      }, ["i"]),
    );
    return _answer;
  }, ["m"]),
  "{ :m |\n\t\tlet answer = [];\n\t\tm.shape.zigzagIndices.do { :i |\n\t\t\tanswer.add(m.atPath(i))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "identityMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _identityMatrix_1([_self, _self]);
  }, ["self"]),
  "{ :self |\n\t\t[self, self].identityMatrix\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "vedicSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _asList_1(_upOrDownTo_2(1, _self));
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _positiveResidue_2(_asterisk_2(_i, _j), _self);
      }, ["i", "j"]),
      _l,
      _l,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet l = [1 .. self];\n\t\t{ :i :j |\n\t\t\t(i * j).positiveResidue(self)\n\t\t}.table(l, l)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "zeroMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _zeroMatrix_1([_self, _self]);
  }, ["self"]),
  "{ :self |\n\t\t[self self].zeroMatrix\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "antidiagonalIndicesDo",
  ["k", "aBlock:/2"],
  sl.annotateFunction(function (_k, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = 1;
    let _n = 1;
    /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_k, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_2(_m, _n);
        _k = _hyphenMinus_2(_k, 1);
        return _if_3(
          _equalsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _n = _plusSign_2(_m, 1);
            return _m = 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _m = _plusSign_2(_m, 1);
            return _n = _hyphenMinus_2(_n, 1);
          }, []),
        );
      }, []),
    );
  }, ["k", "aBlock:/2"]),
  "{ :k :aBlock:/2 |\n\t\tlet m = 1;\n\t\tlet n = 1;\n\t\t{\n\t\t\tk > 0\n\t\t}.whileTrue {\n\t\t\taBlock(m, n);\n\t\t\tk := k - 1;\n\t\t\t(n = 1).if {\n\t\t\t\tn := m + 1;\n\t\t\t\tm := 1\n\t\t\t} {\n\t\t\t\tm := m + 1;\n\t\t\t\tn := n - 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "boxMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\t{ :i :j | 1 }.table(1:n, 1:n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "crossMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _editDistance_2([_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)], _c),
            1,
          ),
        );
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].editDistance(c) <= 1).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "diamondMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
    let _l = _abs_1(_plusSign_2(_self, 0.5));
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _manhattanDistance_2(
              [_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)],
              _c,
            ),
            _l,
          ),
        );
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\tlet l = (self + 0.5).abs;\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].manhattanDistance(c) <= l).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "diskMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    let _c = [_r, _r];
    let _l = _abs_1(_plusSign_2(_self, 0.5));
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(
          _lessThanSignEqualsSign_2(
            _euclideanDistance_2(
              [_hyphenMinus_2(_i, 1), _hyphenMinus_2(_j, 1)],
              _c,
            ),
            _l,
          ),
        );
      }, ["i", "j"]),
      _Span_3(1, _n, 1),
      _Span_3(1, _n, 1),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.ceiling;\n\t\tlet n = r * 2 + 1;\n\t\tlet c = [r, r];\n\t\tlet l = (self + 0.5).abs;\n\t\t{ :i :j |\n\t\t\t([i - 1, j - 1].euclideanDistance(c) <= l).boole\n\t\t}.table(1:n, 1:n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "evoluteSpiralMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _partition_2(
      _permute_2(
        _asList_1(_upOrDownTo_2(1, _circumflexAccent_2(_n, 2))),
        _accumulate_1(
          _take_2(
            _flatten_1([
              _solidus_2([_plusSign_2(_circumflexAccent_2(_n, 2), 1)], 2),
              _table_3(
                sl.annotateFunction(function (_j, _i) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _j, _i";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _numberSign_2(
                    _asterisk_2(_circumflexAccent_2(-1, _j), _i),
                    _j,
                  );
                }, ["j", "i"]),
                _Span_3(1, _n, 1),
                [-1, _n],
              ),
            ]),
            _circumflexAccent_2(_n, 2),
          ),
        ),
      ),
      _n,
    );
  }, ["n"]),
  "{ :n |\n\t\t[1 .. n ^ 2].permute(\n\t\t\t[\n\t\t\t\t[n ^ 2 + 1] / 2,\n\t\t\t\t{ :j :i |\n\t\t\t\t\t-1 ^ j * i # j\n\t\t\t\t}.table(1:n, [-1, n])\n\t\t\t].flatten.take(n ^ 2).accumulate\n\t\t).partition(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "gaussianMatrix",
  ["r", "sigma"],
  sl.annotateFunction(function (_r, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _gaussianMatrix_2([_r, _r], [_sigma, _sigma]);
  }, ["r", "sigma"]),
  "{ :r :sigma |\n\t\t[r r].gaussianMatrix([sigma sigma])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "gaussianMatrix",
  ["r"],
  sl.annotateFunction(function (_r) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _gaussianMatrix_2(_r, _solidus_2(_r, 2));
  }, ["r"]),
  "{ :r |\n\t\tr.gaussianMatrix(r / 2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "gaussianVector",
  ["r", "sigma"],
  sl.annotateFunction(function (_r, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _exp_1(
      _solidus_2(
        _asterisk_2(
          -0.5,
          _square_1(_asList_1(_upOrDownTo_2(_hyphenMinus_1(_r), _r))),
        ),
        _square_1(_sigma),
      ),
    );
    /* Statements */
    return _solidus_2(_k, _sum_1(_k));
  }, ["r", "sigma"]),
  "{ :r :sigma |\n\t\tlet k = (-0.5 * [r.- ..  r].square / sigma.square).exp;\n\t\tk / k.sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "magicHexagon",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _n,
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [[0, 0, 3, 17, 18], [0, 19, 7, 1, 11], [16, 2, 5, 6, 9], [
              12,
              4,
              8,
              14,
              0,
            ], [10, 13, 15, 0, 0]];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "magicHexagon");
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.caseOf(\n\t\t\t[\n\t\t\t\t1 -> { [1] },\n\t\t\t\t3 -> {\n\t\t\t\t\t[\n\t\t\t\t\t\t0  0  3 17 18;\n\t\t\t\t\t\t0 19  7  1 11;\n\t\t\t\t\t\t16  2  5  6  9;\n\t\t\t\t\t\t12  4  8 14  0;\n\t\t\t\t\t\t10 13 15  0  0\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\tn.error('magicHexagon')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "magicSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "magicSquare: n < 3");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _self;
        let _symmetricSwap_2 = sl.annotateFunction(function (_m, _l) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _m, _l";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _tuples_2(_l, 2);
          let _k = _solidusSolidus_2(_size_1(_i), 2);
          let _j = [_take_2(_i, _k), _take_2(_reverse_1(_i), _k)];
          /* Statements */
          return _swapAllWith_2(_m, _transpose_1(_j));
        }, ["m", "l"]);
        let _columnSwaps_4 = sl.annotateFunction(function (_m, _i, _j, _c) {
          /* ArityCheck */
          if (arguments.length !== 4) {
            const errorMessage = "Arity: expected 4, _m, _i, _j, _c";
            throw new Error(errorMessage);
          } /* Statements */
          return _withDo_3(
            _i,
            _j,
            sl.annotateFunction(function (_p, _q) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _p, _q";
                throw new Error(errorMessage);
              } /* Statements */
              return _swapPathWith_3(_m, [_p, _c], [_q, _c]);
            }, ["p", "q"]),
          );
        }, ["m", "i", "j", "c"]);
        /* Statements */
        return _which_1([
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_percentSign_2(_n, 2), 1);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _z = _asList_1(_upOrDownTo_2(1, _asterisk_2(_n, _n)));
              let _shift = _floor_1(_solidus_2(_hyphenMinus_2(_z, 1), _n));
              let _c = _percentSign_2(
                _plusSign_2(
                  _hyphenMinus_2(_z, _shift),
                  _solidus_2(_hyphenMinus_2(_n, 3), 2),
                ),
                _n,
              );
              let _r = _percentSign_2(
                _plusSign_2(_reverse_1(_z), _asterisk_2(2, _shift)),
                _n,
              );
              let _m = _ordering_1(
                _plusSign_2(_plusSign_2(_asterisk_2(_c, _n), _r), 1),
              );
              /* Statements */
              return _transpose_1(_reshape_2(_m, [_n, _n]));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_percentSign_2(_n, 4), 0);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _z = _asList_1(_upOrDownTo_2(1, _asterisk_2(_n, _n)));
              let _m = _reshape_2(_z, [_n, _n]);
              /* Statements */
              _symmetricSwap_2(
                _m,
                _plusSignPlusSign_2(
                  _asList_1(_thenTo_3(1, 5, _n)),
                  _asList_1(_thenTo_3(4, 8, _n)),
                ),
              );
              _symmetricSwap_2(
                _m,
                _plusSignPlusSign_2(
                  _asList_1(_thenTo_3(2, 6, _n)),
                  _asList_1(_thenTo_3(3, 7, _n)),
                ),
              );
              return _m;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_percentSign_2(_n, 4), 2);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _l = _solidusSolidus_2(_n, 2);
              let _z = _magicSquare_1(_l);
              let _m = _arrayFlatten_1([[
                _z,
                _plusSign_2(_z, _asterisk_2(_asterisk_2(2, _l), _l)),
              ], [
                _plusSign_2(_z, _asterisk_2(_asterisk_2(3, _l), _l)),
                _plusSign_2(_z, _asterisk_2(_l, _l)),
              ]]);
              let _k = _solidusSolidus_2(_hyphenMinus_2(_l, 1), 2);
              let _i = _plusSignPlusSign_2(
                _asList_1(_upOrDownTo_2(1, _k)),
                _asList_1(_upOrDownTo_2(_plusSign_2(_k, 2), _l)),
              );
              /* Statements */
              _ifTrue_2(
                _greaterThanSign_2(_k, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _p = _asList_1(_upOrDownTo_2(1, _l));
                  let _q = _plusSignPlusSign_2(
                    _asList_1(_upOrDownTo_2(2, _k)),
                    _asList_1(
                      _upOrDownTo_2(_plusSign_2(_hyphenMinus_2(_n, _k), 2), _n),
                    ),
                  );
                  /* Statements */
                  return _replaceSubarray_3(
                    _m,
                    [_plusSignPlusSign_2(_p, _plusSign_2(_p, _l)), _q],
                    _submatrix_3(
                      _m,
                      _plusSignPlusSign_2(_plusSign_2(_p, _l), _p),
                      _q,
                    ),
                  );
                }, []),
              );
              _columnSwaps_4(_m, _i, _plusSign_2(_i, _l), 1);
              _columnSwaps_4(_m, [_plusSign_2(_k, 1)], [
                _plusSign_2(_plusSign_2(_k, 1), _l),
              ], _plusSign_2(_k, 1));
              return _m;
            }, []),
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 3).if {\n\t\t\tself.error ('magicSquare: n < 3')\n\t\t} {\n\t\t\tlet n = self;\n\t\t\tlet symmetricSwap = { :m :l |\n\t\t\t\tlet i = l.tuples(2);\n\t\t\t\tlet k = i.size // 2;\n\t\t\t\tlet j = [\n\t\t\t\t\ti.take(k),\n\t\t\t\t\ti.reverse.take(k)\n\t\t\t\t];\n\t\t\t\tm.swapAllWith(j.transpose)\n\t\t\t};\n\t\t\tlet columnSwaps = { :m :i :j :c |\n\t\t\t\ti.withDo(j) { :p :q |\n\t\t\t\t\tm.swapPathWith([p c], [q c])\n\t\t\t\t}\n\t\t\t};\n\t\t\t[\n\t\t\t\t{ n % 2 = 1 } -> {\n\t\t\t\t\tlet z = [1 .. n * n];\n\t\t\t\t\tlet shift = (z - 1 / n).floor;\n\t\t\t\t\tlet c = (z - shift + ((n - 3) / 2)) % n;\n\t\t\t\t\tlet r = (z.reverse + (2 * shift)) % n;\n\t\t\t\t\tlet m = (c * n + r + 1).ordering;\n\t\t\t\t\tm.reshape([n n]).transpose\n\t\t\t\t},\n\t\t\t\t{ n % 4 = 0 } -> {\n\t\t\t\t\tlet z = [1 .. n * n];\n\t\t\t\t\tlet m = z.reshape([n n]);\n\t\t\t\t\tm.symmetricSwap([1, 5 .. n] ++ [4, 8  .. n]);\n\t\t\t\t\tm.symmetricSwap([2, 6 .. n] ++ [3, 7  .. n]);\n\t\t\t\t\tm\n\t\t\t\t},\n\t\t\t\t{ n % 4 = 2 } -> {\n\t\t\t\t\tlet l = n // 2; /* m */\n\t\t\t\t\tlet z = l.magicSquare;\n\t\t\t\t\tlet m = [[z, z + (2 * l * l)], [z + (3 * l * l), z + (l * l)]].arrayFlatten;\n\t\t\t\t\tlet k = (l - 1) // 2;\n\t\t\t\t\tlet i = [1 .. k] ++ [k + 2 .. l];\n\t\t\t\t\t(k > 1).ifTrue {\n\t\t\t\t\t\tlet p = [1 .. l];\n\t\t\t\t\t\tlet q = [2 .. k] ++ [n - k + 2 .. n];\n\t\t\t\t\t\tm.replaceSubarray([p ++ (p + l), q], m.submatrix((p + l) ++ p, q))\n\t\t\t\t\t};\n\t\t\t\t\tm.columnSwaps(i, i + l, 1);\n\t\t\t\t\tm.columnSwaps([k + 1], [k + 1 + l], k + 1);\n\t\t\t\t\tm\n\t\t\t\t}\n\t\t\t].which\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Matrix",
  "spiralMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar18 = _assertIsOfSize_2([1, 0], 2);
    let _dx = _at_2(__SplVar18, 1);
    let _dy = _at_2(__SplVar18, 2);
    let __SplVar19 = _assertIsOfSize_2([1, 1], 2);
    let _x = _at_2(__SplVar19, 1);
    let _y = _at_2(__SplVar19, 2);
    let _answer = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMark_2(null, _n);
      }, []),
      _n,
    );
    /* Statements */
    _toDo_3(
      1,
      _circumflexAccent_2(_n, 2),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar20 = _assertIsOfSize_2([
          _plusSign_2(_x, _dx),
          _plusSign_2(_y, _dy),
        ], 2);
        let _nx = _at_2(__SplVar20, 1);
        let _ny = _at_2(__SplVar20, 2);
        /* Statements */
        _atPut_3(_at_2(_answer, _x), _y, _i);
        return _if_3(
          _ampersand_1([
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(1, _nx);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_nx, _n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(1, _ny);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_ny, _n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_at_2(_at_2(_answer, _nx), _ny), null);
            }, []),
          ]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return (sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar21 = [_nx, _ny];
              /* Statements */
              _x = _at_2(__SplVar21, 1);
              return _y = _at_2(__SplVar21, 2);
            }, [])());
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar22 = [_hyphenMinus_1(_dy), _dx];
              /* Statements */
              _dx = _at_2(__SplVar22, 1);
              return _dy = _at_2(__SplVar22, 2);
            }, [])();
            return (sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar23 = [_plusSign_2(_x, _dx), _plusSign_2(_y, _dy)];
              /* Statements */
              _x = _at_2(__SplVar23, 1);
              return _y = _at_2(__SplVar23, 2);
            }, [])());
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet [dx, dy] = [1, 0];\n\t\tlet [x, y] = [1, 1];\n\t\tlet answer = { nil ! n } ! n;\n\t\t1.toDo(n ^ 2) { :i |\n\t\t\tlet [nx, ny] = [x + dx, y + dy];\n\t\t\tanswer[x][y] := i;\n\t\t\t[\n\t\t\t\t{ 1 <= nx },\n\t\t\t\t{ nx <= n },\n\t\t\t\t{ 1 <= ny },\n\t\t\t\t{ ny <= n },\n\t\t\t\t{ answer[nx][ny] = nil }\n\t\t\t].&.if {\n\t\t\t\t[x, y] := [nx, ny]\n\t\t\t} {\n\t\t\t\t[dx, dy] := [dy.-, dx];\n\t\t\t\t[x, y] := [x + dx, y + dy]\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);
