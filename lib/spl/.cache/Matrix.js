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
        let __SPL31 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL31, 1);
        let _n = _at_2(__SPL31, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { let __SPL31 = assertIsOfSize(shape(self), 2); let m = at(__SPL31, 1); let n = at(__SPL31, 2); =(m, n) }) }",
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
        let __SPL31 = _assertIsOfSize_2(_shape_1(_self), 2);
        let _m = _at_2(__SPL31, 1);
        let _n = _at_2(__SPL31, 2);
        /* Statements */
        return _equalsSign_2(_m, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { let __SPL31 = assertIsOfSize(shape(self), 2); let m = at(__SPL31, 1); let n = at(__SPL31, 2); =(m, n) }) }",
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
    let __SPL32 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SPL32, 1);
    let __genSym53 = _at_2(__SPL32, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self | let __SPL32 = assertIsOfSize(dimensions(self,2), 2); let m = at(__SPL32, 1); let _ = at(__SPL32, 2); m }",
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
    let __SPL32 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SPL32, 1);
    let __genSym53 = _at_2(__SPL32, 2);
    /* Statements */
    return _m;
  }, ["self"]),
  "{ :self | let __SPL32 = assertIsOfSize(dimensions(self,2), 2); let m = at(__SPL32, 1); let _ = at(__SPL32, 2); m }",
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
    let __SPL33 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let __genSym54 = _at_2(__SPL33, 1);
    let _n = _at_2(__SPL33, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self | let __SPL33 = assertIsOfSize(dimensions(self,2), 2); let _ = at(__SPL33, 1); let n = at(__SPL33, 2); n }",
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
    let __SPL33 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let __genSym54 = _at_2(__SPL33, 1);
    let _n = _at_2(__SPL33, 2);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self | let __SPL33 = assertIsOfSize(dimensions(self,2), 2); let _ = at(__SPL33, 1); let n = at(__SPL33, 2); n }",
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
  "{ :self | let n = -(size(self), 1); let z = /((^(-1, (+(n, 1)))), (*(square(factorial(n)), (^(2, n))))); sqrt(abs((*(z, determinant(cayleyMengerMatrix(self)))))) }",
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
  "{ :self | let m = arrayPad(distanceMatrix(self,self, squaredEuclideanDistance:/2),[[1, 0], [1, 0]], 1); atPut(at(m, 1), 1, 0); m }",
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
    let __SPL34 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL34, 1);
    let _n = _at_2(__SPL34, 2);
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
  "{ :self :anInteger | let __SPL34 = assertIsOfSize(shape(self), 2); let m = at(__SPL34, 1); let n = at(__SPL34, 2); if(betweenAnd(anInteger,1, n), { collect(upOrDownTo(1, m), { :i | at(at(self, i), anInteger) }) }, { error(self,'List>>column: illegal index') }) }",
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
    let __SPL35 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL35, 1);
    let _n = _at_2(__SPL35, 2);
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
  "{ :self :aList | let __SPL35 = assertIsOfSize(shape(self), 2); let m = at(__SPL35, 1); let n = at(__SPL35, 2); if(allSatisfy(aList, { :each | betweenAnd(each,1, n) }), { collect(upOrDownTo(1, m), { :i | collect(aList, { :j | at(at(self, i), j) }) }) }, { error(self,'List>>columns: illegal index') }) }",
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
  "{ :self :k | let m = assertIsMatrix(self,'List>>diagonal'); let l = -(min(shape(m)), abs(k)); collect(Span(1, l, 1), { :i | at(m,-(i, min(k,0)), +(i, max(k,0))) }) }",
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
            let __SPL36 = _assertIsOfSize_2(_index, 2);
            let _i = _at_2(__SPL36, 1);
            let _j = _at_2(__SPL36, 2);
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
  "{ :self :k | &((=(rank(self), 2)), { allSatisfy(deepIndices(self), { :index | let __SPL36 = assertIsOfSize(index, 2); let i = at(__SPL36, 1); let j = at(__SPL36, 2); |((=(+(i, k), j)), { isVeryCloseTo(at(at(self, i), j),0) }) }) }) }",
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
        return _deepAllSatisfy_2(_self, _isInteger_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isMatrix(self), { deepAllSatisfy(self,isInteger:/1) }) }",
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
  "{ :self | &(isSquareMatrix(self), { let x = at(self, 1); allSatisfy((++(self, transpose(self))), { :each | isPermutationOf(each,x) }) }) }",
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
  "{ :self :elementType | &((>=(arrayDepth(self), 2)), { allSatisfy(self, { :each | =(elementType(each), elementType) }) }) }",
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
  "{ :self | &(isSquareMatrix(self), { =(self, transpose(self)) }) }",
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
    let __SPL37 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL37, 1);
    let _n = _at_2(__SPL37, 2);
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
  "{ :self :aBlock:/1 | let __SPL37 = assertIsOfSize(shape(self), 2); let m = at(__SPL37, 1); let n = at(__SPL37, 2); collect(Span(1, n, 1), { :i | aBlock(column(self,i)) }) }",
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
    let __SPL38 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL38, 1);
    let _n = _at_2(__SPL38, 2);
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
  "{ :self :decimalPlaces | let __SPL38 = assertIsOfSize(shape(self), 2); let m = at(__SPL38, 1); let n = at(__SPL38, 2); let print:/1 = if(isIntegerMatrix(self), { printString:/1 }, { { :n | printStringShowingDecimalPlaces(n,decimalPlaces) } }); let table = deepCollect(self,print:/1); let columnWidth = max(collect(flatten(table),size:/1)); let text = collect(table, { :row | ++('   ', stringJoin(collect(row, { :each | padLeft(each,[columnWidth], ' ') }),'   ')) }); unlines([stringJoin([m, '×', n]), '   ', unlines(text)]) }",
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
  "{ :self :k | caseOf(k, [->(1, { transpose(collect(self,reverse:/1)) }), ->(2, { reverse(collect(self,reverse:/1)) }), ->(3, { collect(transpose(self),reverse:/1) })], { error(self,'List>>matrixRotate: k not 1,2,3') }) }",
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
  "{ :self :d | let k = size(d); let m = self; toDo(1, k, { :i | m := join((!(m, at(d, i))),i) }); m }",
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
    let __SPL39 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL39, 1);
    let _n = _at_2(__SPL39, 2);
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
  "{ :self :anInteger | let __SPL39 = assertIsOfSize(shape(self), 2); let m = at(__SPL39, 1); let n = at(__SPL39, 2); if(betweenAnd(anInteger,1, m), { at(self, anInteger) }, { error(self,'List>>row: illegal index') }) }",
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
    let __SPL40 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL40, 1);
    let _n = _at_2(__SPL40, 2);
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
  "{ :self :aList | let __SPL40 = assertIsOfSize(shape(self), 2); let m = at(__SPL40, 1); let n = at(__SPL40, 2); if(allSatisfy(aList, { :each | betweenAnd(each,1, m) }), { atAll(self,aList) }, { error(self,'List>>rows: illegal index') }) }",
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
  "{ :self | let k = size(self); let answer = zeroMatrix([k, k]); toDo(1, k, { :each | atPut(at(answer, +(-(k, each), 1)), each, at(self, +(-(k, each), 1))) }); answer }",
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
  "{ :d | let n = size(d); let s = collect(d,shape:/1); let answer = []; toDo(1, n, { :i | toDo(1, size(at(d, i)), { :j | add(answer,collectCatenate(Span(1, n, 1), { :k | if((=(i, k)), { at(at(d, i), j) }, { #(0, at(at(s, k), 2)) }) })) }) }); answer }",
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
  "{ :self | collect(upOrDownTo(1, size(self)), { :i | rotateRight(self,i) }) }",
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
  "{ :self :aBlock:/2 | let k = size(self); let answer = []; toDo(1, -(k, 1), { :i | let row = []; toDo((+(i, 1)), k, { :j | add(row,aBlock(at(self, i), at(self, j))) }); add(answer,row) }); answer }",
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
    let __SPL41 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SPL41, 1);
    let _n = _at_2(__SPL41, 2);
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
  "{ :self :k :shape | let __SPL41 = assertIsOfSize(shape, 2); let m = at(__SPL41, 1); let n = at(__SPL41, 2); let r = abs(min(k,0)); let c = max(k,0); let answer = zeroMatrix([m, n]); toDo(1, size(self), { :each | atPut(at(answer, +(each, r)), +(each, c), at(self, each)) }); answer }",
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
    let __SPL42 = _assertIsOfSize_2(_r, 2);
    let _r1 = _at_2(__SPL42, 1);
    let _r2 = _at_2(__SPL42, 2);
    let __SPL43 = _assertIsOfSize_2(_sigma, 2);
    let _sigma1 = _at_2(__SPL43, 1);
    let _sigma2 = _at_2(__SPL43, 2);
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
  "{ :r :sigma | let __SPL42 = assertIsOfSize(r, 2); let r1 = at(__SPL42, 1); let r2 = at(__SPL42, 2); let __SPL43 = assertIsOfSize(sigma, 2); let sigma1 = at(__SPL43, 1); let sigma2 = at(__SPL43, 2); let p = exp((/(*(-0.5, square(asList(upOrDownTo(-(r1), r1)))), square(sigma1)))); let q = exp((/(*(-0.5, square(asList(upOrDownTo(-(r2), r2)))), square(sigma2)))); let k = outerProduct(p,q); /(k, deepSum(k)) }",
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
    let __SPL44 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SPL44, 1);
    let _n = _at_2(__SPL44, 2);
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
  "{ :shape | let __SPL44 = assertIsOfSize(shape, 2); let m = at(__SPL44, 1); let n = at(__SPL44, 2); let answer = zeroMatrix([m, n]); toDo(1, min(n,m), { :each | atPut(at(answer, each), each, 1) }); answer }",
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
  "{ :shape :index :x | let m = zeroMatrix(shape); atPathPut(m,index, x); m }",
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
    let __SPL45 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SPL45, 1);
    let _n = _at_2(__SPL45, 2);
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
  "{ :shape | let __SPL45 = assertIsOfSize(shape, 2); let m = at(__SPL45, 1); let n = at(__SPL45, 2); collect(upOrDownTo(1, m), { :unused | List(n, 0) }) }",
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
    let __SPL46 = _assertIsOfSize_2(_shape, 2);
    let _r = _at_2(__SPL46, 1);
    let _c = _at_2(__SPL46, 2);
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
  "{ :shape | let __SPL46 = assertIsOfSize(shape, 2); let r = at(__SPL46, 1); let c = at(__SPL46, 2); let h = 0; let v = 0; let o = []; let step = { :a :b | add(o,[+(v, 1), +(h, 1)]); v := +(v, a); h := +(h, b) }; whileTrue({ &(<(v, r), { <(h, c) }) }, { if((=((%((+(h, v)), 2)), 0)), { if((=(v, 0)), { if((=(h, (-(c, 1)))), { step(1, 0) }, { step(0, 1) }) }, { if((&(=(h, (-(c, 1))), { <(v, r) })), { step(1, 0) }, { step(-1, 1) }) }) }, { if((&(=(v, (-(r, 1))), { <=(h, (-(c, 1))) })), { step(0, 1) }, { if((=(h, 0)), { if((=(v, (-(r, 1)))), { step(0, 1) }, { step(1, 0) }) }, { step(1, -1) }) }); ifTrue((&(=(v, (-(r, 1))), { =(h, (-(c, 1))) })), { step(1, 1) }) }) }); o }",
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
  "{ :shape | let i = 1; let answer = zeroMatrix(shape); do(zigzagIndices(shape), { :each | atPathPut(answer,each, i); i := +(i, 1) }); answer }",
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
  "{ :m | let answer = []; do(zigzagIndices(shape(m)), { :i | add(answer,atPath(m,i)) }); answer }",
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
  "{ :self | identityMatrix([self, self]) }",
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
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _zeroMatrix_1([_self, _self]);
  }, ["self"]),
  "{ :self | zeroMatrix([self, self]) }",
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
  "{ :k :aBlock:/2 | let m = 1; let n = 1; whileTrue({ >(k, 0) }, { aBlock(m, n); k := -(k, 1); if((=(n, 1)), { n := +(m, 1); m := 1 }, { m := +(m, 1); n := -(n, 1) }) }) }",
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
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); table({ :i :j | 1 },Span(1, n, 1), Span(1, n, 1)) }",
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
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; table({ :i :j | boole((<=(editDistance([-(i, 1), -(j, 1)],c), 1))) },Span(1, n, 1), Span(1, n, 1)) }",
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
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(manhattanDistance([-(i, 1), -(j, 1)],c), l))) },Span(1, n, 1), Span(1, n, 1)) }",
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
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(euclideanDistance([-(i, 1), -(j, 1)],c), l))) },Span(1, n, 1), Span(1, n, 1)) }",
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
  "{ :n | partition(permute(asList(upOrDownTo(1, ^(n, 2))),accumulate(take(flatten([/([+(^(n, 2), 1)], 2), table({ :j :i | #(*(^(-1, j), i), j) },Span(1, n, 1), [-1, n])]),^(n, 2)))),n) }",
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
  "{ :r :sigma | gaussianMatrix([r, r],[sigma, sigma]) }",
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
  "{ :r | gaussianMatrix(r,/(r, 2)) }",
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
  "{ :r :sigma | let k = exp((/(*(-0.5, square(asList(upOrDownTo(-(r), r)))), square(sigma)))); /(k, sum(k)) }",
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
  "{ :n | caseOf(n, [->(1, { [1] }), ->(3, { [[0, 0, 3, 17, 18], [0, 19, 7, 1, 11], [16, 2, 5, 6, 9], [12, 4, 8, 14, 0], [10, 13, 15, 0, 0]] })], { error(n,'magicHexagon') }) }",
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
  "{ :self | if((<(self, 3)), { error(self,'magicSquare: n < 3') }, { let n = self; let symmetricSwap = { :m :l | let i = tuples(l,2); let k = //(size(i), 2); let j = [take(i,k), take(reverse(i),k)]; swapAllWith(m,transpose(j)) }; let columnSwaps = { :m :i :j :c | withDo(i, j, { :p :q | swapPathWith(m,[p, c], [q, c]) }) }; which([->({ =(%(n, 2), 1) }, { let z = asList(upOrDownTo(1, *(n, n))); let shift = floor((/(-(z, 1), n))); let c = %((+(-(z, shift), (/((-(n, 3)), 2)))), n); let r = %((+(reverse(z), (*(2, shift)))), n); let m = ordering((+(+(*(c, n), r), 1))); transpose(reshape(m,[n, n])) }), ->({ =(%(n, 4), 0) }, { let z = asList(upOrDownTo(1, *(n, n))); let m = reshape(z,[n, n]); symmetricSwap(m,++(asList(thenTo(1, 5, n)), asList(thenTo(4, 8, n)))); symmetricSwap(m,++(asList(thenTo(2, 6, n)), asList(thenTo(3, 7, n)))); m }), ->({ =(%(n, 4), 2) }, { let l = //(n, 2); let z = magicSquare(l); let m = arrayFlatten([[z, +(z, (*(*(2, l), l)))], [+(z, (*(*(3, l), l))), +(z, (*(l, l)))]]); let k = //((-(l, 1)), 2); let i = ++(asList(upOrDownTo(1, k)), asList(upOrDownTo(+(k, 2), l))); ifTrue((>(k, 1)), { let p = asList(upOrDownTo(1, l)); let q = ++(asList(upOrDownTo(2, k)), asList(upOrDownTo(+(-(n, k), 2), n))); replaceSubarray(m,[++(p, (+(p, l))), q], submatrix(m,++((+(p, l)), p), q)) }); columnSwaps(m,i, +(i, l), 1); columnSwaps(m,[+(k, 1)], [+(+(k, 1), l)], +(k, 1)); m })]) }) }",
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
    let __SPL47 = _assertIsOfSize_2([1, 0], 2);
    let _dx = _at_2(__SPL47, 1);
    let _dy = _at_2(__SPL47, 2);
    let __SPL48 = _assertIsOfSize_2([1, 1], 2);
    let _x = _at_2(__SPL48, 1);
    let _y = _at_2(__SPL48, 2);
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
        let __SPL49 = _assertIsOfSize_2([
          _plusSign_2(_x, _dx),
          _plusSign_2(_y, _dy),
        ], 2);
        let _nx = _at_2(__SPL49, 1);
        let _ny = _at_2(__SPL49, 2);
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
              let __SPL50 = [_nx, _ny];
              /* Statements */
              _x = _at_2(__SPL50, 1);
              return _y = _at_2(__SPL50, 2);
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
              let __SPL51 = [_hyphenMinus_1(_dy), _dx];
              /* Statements */
              _dx = _at_2(__SPL51, 1);
              return _dy = _at_2(__SPL51, 2);
            }, [])();
            return (sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SPL52 = [_plusSign_2(_x, _dx), _plusSign_2(_y, _dy)];
              /* Statements */
              _x = _at_2(__SPL52, 1);
              return _y = _at_2(__SPL52, 2);
            }, [])());
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let __SPL47 = assertIsOfSize([1, 0], 2); let dx = at(__SPL47, 1); let dy = at(__SPL47, 2); let __SPL48 = assertIsOfSize([1, 1], 2); let x = at(__SPL48, 1); let y = at(__SPL48, 2); let answer = !({ !(nil, n) }, n); toDo(1, ^(n, 2), { :i | let __SPL49 = assertIsOfSize([+(x, dx), +(y, dy)], 2); let nx = at(__SPL49, 1); let ny = at(__SPL49, 2); atPut(at(answer, x), y, i); if(&([{ <=(1, nx) }, { <=(nx, n) }, { <=(1, ny) }, { <=(ny, n) }, { =(at(at(answer, nx), ny), nil) }]), { ({ let __SPL50 = [nx, ny]; x := at(__SPL50, 1); y := at(__SPL50, 2) } . ()) }, { ({ let __SPL51 = [-(dy), dx]; dx := at(__SPL51, 1); dy := at(__SPL51, 2) } . ()); ({ let __SPL52 = [+(x, dx), +(y, dy)]; x := at(__SPL52, 1); y := at(__SPL52, 2) } . ()) }) }); answer }",
);
