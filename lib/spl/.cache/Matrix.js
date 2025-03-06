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
  "{ :self | &(isMatrix(self), { =(numberOfColumns(self), 1) }) }",
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
  "{ :self | &(isMatrix(self), { =(numberOfColumns(self), 1) }) }",
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
  "{ :self | &(isMatrix(self), { =(numberOfRows(self), 1) }) }",
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
  "{ :self | &(isMatrix(self), { =(numberOfRows(self), 1) }) }",
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
        let __SPL25 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL25, 1);
        let _n = _at_2(__SPL25, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { let __SPL25 = assertIsOfSize(shape(self), 2); let m = at(__SPL25, 1); let n = at(__SPL25, 2); =(m, n) }) }",
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
        let __SPL25 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL25, 1);
        let _n = _at_2(__SPL25, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { let __SPL25 = assertIsOfSize(shape(self), 2); let m = at(__SPL25, 1); let n = at(__SPL25, 2); =(m, n) }) }",
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
    let __SPL26 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL26, 1);
    let __genSym41 = _at_2(__SPL26, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self | let __SPL26 = assertIsOfSize(shape(self), 2); let m = at(__SPL26, 1); let _ = at(__SPL26, 2); m }",
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
    let __SPL26 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL26, 1);
    let __genSym41 = _at_2(__SPL26, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self | let __SPL26 = assertIsOfSize(shape(self), 2); let m = at(__SPL26, 1); let _ = at(__SPL26, 2); m }",
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
    let __SPL27 = _assertIsOfSize_2(_shape_1(_self), 2);
    let __genSym42 = _at_2(__SPL27, 1);
    let _n = _at_2(__SPL27, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self | let __SPL27 = assertIsOfSize(shape(self), 2); let _ = at(__SPL27, 1); let n = at(__SPL27, 2); n }",
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
    let __SPL27 = _assertIsOfSize_2(_shape_1(_self), 2);
    let __genSym42 = _at_2(__SPL27, 1);
    let _n = _at_2(__SPL27, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self | let __SPL27 = assertIsOfSize(shape(self), 2); let _ = at(__SPL27, 1); let n = at(__SPL27, 2); n }",
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
  "{ :self :k | let m = assertIsMatrix(self,'List>>antidiagonal'); let l = -(min(shape(m)), abs(k)); collect(upOrDownTo(l, 1), { :i | let r = -(+(-(l, i), 1), min(k,0)); let c = -(i, min(k,0)); at(at(m, r), c) }) }",
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
  "{ :self | antidiagonal(self,0) }",
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
  "{ :self :context | assert(self, context, { isMatrix(self) }) }",
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
  "{ :self :context | assert(self, context, { isSquareMatrix(self) }) }",
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
      _to_2(1, _l),
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
  "{ :self :k | let m = assertIsMatrix(self,'List>>diagonal'); let l = -(min(shape(m)), abs(k)); collect(to(1, l), { :i | at(m,-(i, min(k,0)), +(i, max(k,0))) }) }",
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
  "{ :self | diagonal(self,0) }",
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
            let __SPL28 = _assertIsOfSize_2(_index, 2);
            let _i = _at_2(__SPL28, 1);
            let _j = _at_2(__SPL28, 2);
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
  "{ :self :k | &((=(rank(self), 2)), { allSatisfy(deepIndices(self), { :index | let __SPL28 = assertIsOfSize(index, 2); let i = at(__SPL28, 1); let j = at(__SPL28, 2); |((=(+(i, k), j)), { isVeryCloseTo(at(at(self, i), j),0) }) }) }) }",
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
  "{ :self | isDiagonalMatrix(self,0) }",
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
        return _allSatisfy_2(
          _self,
          sl.annotateFunction(function (_row) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _row";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(_row, _isInteger_1);
          }, ["row"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { allSatisfy(self, { :row | allSatisfy(row,isInteger:/1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _equalsSign_2(_typeOf_1(_each), _type),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isVector_1(_each);
            }, []),
          );
        }, ["each"]),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _size_1(_asIdentitySet_1(_collect_2(_self, _size_1))),
          1,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let type = typeOf(self); &(allSatisfy(self, { :each | &(=(typeOf(each), type), { isVector(each) }) }), { =(size(asIdentitySet(collect(self,size:/1))), 1) }) }",
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
      _isMatrix_1(_self),
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
  "{ :self :elementType | &(isMatrix(self), { allSatisfy(self, { :each | =(elementType(each), elementType) }) }) }",
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
        return _equalsSign_2(_self, _transposed_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isSquareMatrix(self), { =(self, transposed(self)) }) }",
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
    let __SPL29 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL29, 1);
    let _n = _at_2(__SPL29, 2);
    /* Statements */
    return _collect_2(
      _to_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_matrixColumn_2(_self, _i));
      }, ["i"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let __SPL29 = assertIsOfSize(shape(self), 2); let m = at(__SPL29, 1); let n = at(__SPL29, 2); collect(to(1, n), { :i | aBlock(matrixColumn(self,i)) }) }",
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
  "{ :self | let n = size(self); let mu = /(*(n, (+(*(n, n), 1))), 2); let v = #(1, n); Record([['sum', mu], ['rowSums', dot(self,v)], ['columnSums', dot(v,self)], ['diagonalSum', sum(diagonal(self))], ['anitdiagonalSum', sum(antidiagonal(self))], ['rank', matrixRank(self)]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixColumn",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL30 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL30, 1);
    let _n = _at_2(__SPL30, 2);
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
        return _error_2(_self, "List>>matrixColumn: illegal index");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let __SPL30 = assertIsOfSize(shape(self), 2); let m = at(__SPL30, 1); let n = at(__SPL30, 2); if(betweenAnd(anInteger,1, n), { collect(upOrDownTo(1, m), { :i | at(at(self, i), anInteger) }) }, { error(self,'List>>matrixColumn: illegal index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixColumns",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL31 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL31, 1);
    let _n = _at_2(__SPL31, 2);
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
        return _error_2(_self, "List>>matrixColumns: illegal index");
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList | let __SPL31 = assertIsOfSize(shape(self), 2); let m = at(__SPL31, 1); let n = at(__SPL31, 2); if(allSatisfy(aList, { :each | betweenAnd(each,1, n) }), { collect(upOrDownTo(1, m), { :i | collect(aList, { :j | at(at(self, i), j) }) }) }, { error(self,'List>>matrixColumns: illegal index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRow",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL32 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL32, 1);
    let _n = _at_2(__SPL32, 2);
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
        return _error_2(_self, "List>>matrixRow: illegal index");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let __SPL32 = assertIsOfSize(shape(self), 2); let m = at(__SPL32, 1); let n = at(__SPL32, 2); if(betweenAnd(anInteger,1, m), { at(self, anInteger) }, { error(self,'List>>matrixRow: illegal index') }) }",
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
  "{ :self | matrixPrintString(self,4) }",
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
    let __SPL33 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL33, 1);
    let _n = _at_2(__SPL33, 2);
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
  "{ :self :decimalPlaces | let __SPL33 = assertIsOfSize(shape(self), 2); let m = at(__SPL33, 1); let n = at(__SPL33, 2); let print:/1 = if(isIntegerMatrix(self), { printString:/1 }, { { :n | printStringShowingDecimalPlaces(n,decimalPlaces) } }); let table = deepCollect(self,print:/1); let columnWidth = max(collect(flatten(table),size:/1)); let text = collect(table, { :row | ++('   ', stringJoin(collect(row, { :each | padLeft(each,[columnWidth], ' ') }),'   ')) }); unlines([stringJoin([m, '×', n]), '   ', unlines(text)]) }",
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
    return _caseOfOtherwise_3(
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
            return _transposed_1(_collect_2(_self, _reversed_1));
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
            return _reversed_1(_collect_2(_self, _reversed_1));
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
            return _collect_2(_transposed_1(_self), _reversed_1);
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
  "{ :self :k | caseOfOtherwise(k, [->(1, { transposed(collect(self,reversed:/1)) }), ->(2, { reversed(collect(self,reversed:/1)) }), ->(3, { collect(transposed(self),reversed:/1) })], { error(self,'List>>matrixRotate: k not 1,2,3') }) }",
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
  "{ :self | matrixRotate(self,1) }",
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
  "{ :self :r :c | table({ :i :j | at(at(self, i), j) },r, c) }",
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
    let _answer = _zeroMatrix_2(_k, _k);
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
  "{ :self | let k = size(self); let answer = zeroMatrix(k,k); toDo(1, k, { :each | atPut(at(answer, +(-(k, each), 1)), each, at(self, +(-(k, each), 1))) }); answer }",
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
              _gather_2(
                _to_2(1, _n),
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
  "{ :d | let n = size(d); let s = collect(d,shape:/1); let answer = []; toDo(1, n, { :i | toDo(1, size(at(d, i)), { :j | add(answer,gather(to(1, n), { :k | if((=(i, k)), { at(at(d, i), j) }, { #(0, at(at(s, k), 2)) }) })) }) }); answer }",
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
        return _rotatedRight_2(_self, _i);
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(1, size(self)), { :i | rotatedRight(self,i) }) }",
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
    let __SPL34 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SPL34, 1);
    let _n = _at_2(__SPL34, 2);
    let _r = _abs_1(_min_2(_k, 0));
    let _c = _max_2(_k, 0);
    let _answer = _zeroMatrix_2(_m, _n);
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
  "{ :self :k :shape | let __SPL34 = assertIsOfSize(shape, 2); let m = at(__SPL34, 1); let n = at(__SPL34, 2); let r = abs(min(k,0)); let c = max(k,0); let answer = zeroMatrix(m,n); toDo(1, size(self), { :each | atPut(at(answer, +(each, r)), +(each, c), at(self, each)) }); answer }",
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
  "{ :self :k | let n = +(size(self), abs(k)); diagonalMatrix(self,k, [n, n]) }",
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
  "{ :self | diagonalMatrix(self,0) }",
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
  "{ :u :v :aBlock:/2 | table(aBlock:/2,u, v) }",
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
  "{ :u :v | distanceMatrix(u, v, euclideanDistance:/2) }",
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
  "{ :u | distanceMatrix(u, u) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "identityMatrix",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _zeroMatrix_2(_m, _n);
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
  }, ["m", "n"]),
  "{ :m :n | let answer = zeroMatrix(m,n); toDo(1, min(n,m), { :each | atPut(at(answer, each), each, 1) }); answer }",
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
    return _identityMatrix_2(_self, _self);
  }, ["self"]),
  "{ :self | identityMatrix(self,self) }",
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
  "{ :self | let l = asList(upOrDownTo(1, self)); table({ :i :j | positiveResidue((*(i, j)),self) },l, l) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "zeroMatrix",
  ["numberOfRows", "numberOfColumns"],
  sl.annotateFunction(function (_numberOfRows, _numberOfColumns) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numberOfRows, _numberOfColumns";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _to_2(1, _numberOfRows),
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _List_2(_numberOfColumns, 0);
      }, ["unused"]),
    );
  }, ["numberOfRows", "numberOfColumns"]),
  "{ :numberOfRows :numberOfColumns | collect(to(1, numberOfRows), { :unused | List(numberOfColumns, 0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
      _to_2(1, _n),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); table({ :i :j | 1 },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
      _to_2(1, _n),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; table({ :i :j | boole((<=(editDistance([-(i, 1), -(j, 1)],c), 1))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
      _to_2(1, _n),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(manhattanDistance([-(i, 1), -(j, 1)],c), l))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
      _to_2(1, _n),
      _to_2(1, _n),
    );
  }, ["self"]),
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(euclideanDistance([-(i, 1), -(j, 1)],c), l))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
          let _j = _transposed_1([
            _take_2(_i, _k),
            _take_2(_reversed_1(_i), _k),
          ]);
          /* Statements */
          return _swapAllWith_2(_m, _j);
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
                _plusSign_2(_reversed_1(_z), _asterisk_2(2, _shift)),
                _n,
              );
              let _m = _ordering_1(
                _plusSign_2(_plusSign_2(_asterisk_2(_c, _n), _r), 1),
              );
              /* Statements */
              return _transposed_1(_reshape_2(_m, [_n, _n]));
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
  "{ :self | if((<(self, 3)), { error(self,'magicSquare: n < 3') }, { let n = self; let symmetricSwap = { :m :l | let i = tuples(l,2); let k = //(size(i), 2); let j = transposed([take(i,k), take(reversed(i),k)]); swapAllWith(m,j) }; let columnSwaps = { :m :i :j :c | withDo(i, j, { :p :q | swapPathWith(m,[p, c], [q, c]) }) }; which([->({ =(%(n, 2), 1) }, { let z = asList(upOrDownTo(1, *(n, n))); let shift = floor((/(-(z, 1), n))); let c = %((+(-(z, shift), (/((-(n, 3)), 2)))), n); let r = %((+(reversed(z), (*(2, shift)))), n); let m = ordering((+(+(*(c, n), r), 1))); transposed(reshape(m,[n, n])) }), ->({ =(%(n, 4), 0) }, { let z = asList(upOrDownTo(1, *(n, n))); let m = reshape(z,[n, n]); symmetricSwap(m,++(asList(thenTo(1, 5, n)), asList(thenTo(4, 8, n)))); symmetricSwap(m,++(asList(thenTo(2, 6, n)), asList(thenTo(3, 7, n)))); m }), ->({ =(%(n, 4), 2) }, { let l = //(n, 2); let z = magicSquare(l); let m = arrayFlatten([[z, +(z, (*(*(2, l), l)))], [+(z, (*(*(3, l), l))), +(z, (*(l, l)))]]); let k = //((-(l, 1)), 2); let i = ++(asList(upOrDownTo(1, k)), asList(upOrDownTo(+(k, 2), l))); ifTrue((>(k, 1)), { let p = asList(upOrDownTo(1, l)); let q = ++(asList(upOrDownTo(2, k)), asList(upOrDownTo(+(-(n, k), 2), n))); replaceSubarray(m,[++(p, (+(p, l))), q], submatrix(m,++((+(p, l)), p), q)) }); columnSwaps(m,i, +(i, l), 1); columnSwaps(m,[+(k, 1)], [+(+(k, 1), l)], +(k, 1)); m })]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "spiralMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL35 = _assertIsOfSize_2([1, 0], 2);
    let _dx = _at_2(__SPL35, 1);
    let _dy = _at_2(__SPL35, 2);
    let __SPL36 = _assertIsOfSize_2([1, 1], 2);
    let _x = _at_2(__SPL36, 1);
    let _y = _at_2(__SPL36, 2);
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
        let __SPL37 = _assertIsOfSize_2([
          _plusSign_2(_x, _dx),
          _plusSign_2(_y, _dy),
        ], 2);
        let _nx = _at_2(__SPL37, 1);
        let _ny = _at_2(__SPL37, 2);
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
              let __SPL38 = [_nx, _ny];
              /* Statements */
              _x = _at_2(__SPL38, 1);
              return _y = _at_2(__SPL38, 2);
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
              let __SPL39 = [_hyphenMinus_1(_dy), _dx];
              /* Statements */
              _dx = _at_2(__SPL39, 1);
              return _dy = _at_2(__SPL39, 2);
            }, [])();
            return (sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SPL40 = [_plusSign_2(_x, _dx), _plusSign_2(_y, _dy)];
              /* Statements */
              _x = _at_2(__SPL40, 1);
              return _y = _at_2(__SPL40, 2);
            }, [])());
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let __SPL35 = assertIsOfSize([1, 0], 2); let dx = at(__SPL35, 1); let dy = at(__SPL35, 2); let __SPL36 = assertIsOfSize([1, 1], 2); let x = at(__SPL36, 1); let y = at(__SPL36, 2); let answer = !({ !(nil, n) }, n); toDo(1, ^(n, 2), { :i | let __SPL37 = assertIsOfSize([+(x, dx), +(y, dy)], 2); let nx = at(__SPL37, 1); let ny = at(__SPL37, 2); atPut(at(answer, x), y, i); if(&([{ <=(1, nx) }, { <=(nx, n) }, { <=(1, ny) }, { <=(ny, n) }, { =(at(at(answer, nx), ny), nil) }]), { ({ let __SPL38 = [nx, ny]; x := at(__SPL38, 1); y := at(__SPL38, 2) } . ()) }, { ({ let __SPL39 = [-(dy), dx]; dx := at(__SPL39, 1); dy := at(__SPL39, 2) } . ()); ({ let __SPL40 = [+(x, dx), +(y, dy)]; x := at(__SPL40, 1); y := at(__SPL40, 2) } . ()) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "ulamSpiralMatrix",
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
                _to_2(1, _n),
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
  "{ :n | partition(permute(asList(upOrDownTo(1, ^(n, 2))),accumulate(take(flatten([/([+(^(n, 2), 1)], 2), table({ :j :i | #(*(^(-1, j), i), j) },to(1, n), [-1, n])]),^(n, 2)))),n) }",
);
