sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonal",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>antidiagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(_upOrDownTo_2(_l, 1), function (_i) {
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
    });
  },
  "{ :self :k | let m = assertIsMatrix(self,'List>>antidiagonal'); let l = -(min(shape(m)), abs(k)); collect(upOrDownTo(l, 1), { :i | let r = -(+(-(l, i), 1), min(k,0)); let c = -(i, min(k,0)); at(at(m, r), c) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _antidiagonal_2(_self, 0);
  },
  "{ :self | antidiagonal(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "assertIsMatrix",
  ["self", "context"],
  function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(_self, _context, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isMatrix_1(_self);
    });
  },
  "{ :self :context | assert(self, context, { isMatrix(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "assertIsSquareMatrix",
  ["self", "context"],
  function (_self, _context) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _context";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(_self, _context, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isSquareMatrix_1(_self);
    });
  },
  "{ :self :context | assert(self, context, { isSquareMatrix(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonal",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _assertIsMatrix_2(_self, "List>>diagonal");
    let _l = _hyphenMinus_2(_min_1(_shape_1(_m)), _abs_1(_k));
    /* Statements */
    return _collect_2(_to_2(1, _l), function (_i) {
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
    });
  },
  "{ :self :k | let m = assertIsMatrix(self,'List>>diagonal'); let l = -(min(shape(m)), abs(k)); collect(to(1, l), { :i | at(m,-(i, min(k,0)), +(i, max(k,0))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonal_2(_self, 0);
  },
  "{ :self | diagonal(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isColumnVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_anyOne_1(_self)), 1);
    });
  },
  "{ :self | &(isMatrix(self), { =(size(anyOne(self)), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isDiagonalMatrix",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_equalsSign_2(_rank_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _allSatisfy_2(_deepIndices_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL24 = _assertIsOfSize_2(_index, 2);
        let _i = _at_2(__SPL24, 1);
        let _j = _at_2(__SPL24, 2);
        /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_plusSign_2(_i, _k), _j),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isVeryCloseTo_2(_at_2(_at_2(_self, _i), _j), 0);
          },
        );
      });
    });
  },
  "{ :self :k | &((=(rank(self), 2)), { allSatisfy(deepIndices(self), { :index | let __SPL24 = assertIsOfSize(index, 2); let i = at(__SPL24, 1); let j = at(__SPL24, 2); |((=(+(i, k), j)), { isVeryCloseTo(at(at(self, i), j),0) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isDiagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDiagonalMatrix_2(_self, 0);
  },
  "{ :self | isDiagonalMatrix(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isIntegerMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _allSatisfy_2(_self, function (_row) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _row";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(_row, _isInteger_1);
      });
    });
  },
  "{ :self | &(isMatrix(self), { allSatisfy(self, { :row | allSatisfy(row,isInteger:/1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_typeOf_1(_each), _type),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isVector_1(_each);
          },
        );
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _size_1(_asIdentitySet_1(_collect_2(_self, _size_1))),
          1,
        );
      },
    );
  },
  "{ :self | let type = typeOf(self); &(allSatisfy(self, { :each | &(=(typeOf(each), type), { isVector(each) }) }), { =(size(asIdentitySet(collect(self,size:/1))), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isMatrixOf",
  ["self", "elementType"],
  function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_elementType_1(_each), _elementType);
      });
    });
  },
  "{ :self :elementType | &(isMatrix(self), { allSatisfy(self, { :each | =(elementType(each), elementType) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isRowVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_self), 1);
    });
  },
  "{ :self | &(isMatrix(self), { =(size(self), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isSquareMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_self), _size_1(_anyOne_1(_self)));
    });
  },
  "{ :self | &(isMatrix(self), { =(size(self), size(anyOne(self))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "isSymmetricMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isSquareMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_self, _transposed_1(_self));
    });
  },
  "{ :self | &(isSquareMatrix(self), { =(self, transposed(self)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "columnsCollect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL25 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL25, 1);
    let _n = _at_2(__SPL25, 2);
    /* Statements */
    return _collect_2(_to_2(1, _n), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_matrixColumn_2(_self, _i));
    });
  },
  "{ :self :aBlock:/1 | let __SPL25 = assertIsOfSize(shape(self), 2); let m = at(__SPL25, 1); let n = at(__SPL25, 2); collect(to(1, n), { :i | aBlock(matrixColumn(self,i)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixColumn",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL26 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL26, 1);
    let _n = _at_2(__SPL26, 2);
    /* Statements */
    return _if_3(_betweenAnd_3(_anInteger, 1, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_upOrDownTo_2(1, _m), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_at_2(_self, _i), _anInteger);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>matrixColumn: illegal index");
    });
  },
  "{ :self :anInteger | let __SPL26 = assertIsOfSize(shape(self), 2); let m = at(__SPL26, 1); let n = at(__SPL26, 2); if(betweenAnd(anInteger,1, n), { collect(upOrDownTo(1, m), { :i | at(at(self, i), anInteger) }) }, { error(self,'List>>matrixColumn: illegal index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixColumns",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL27 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL27, 1);
    let _n = _at_2(__SPL27, 2);
    /* Statements */
    return _if_3(
      _allSatisfy_2(_aList, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_each, 1, _n);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_upOrDownTo_2(1, _m), function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_aList, function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_at_2(_self, _i), _j);
          });
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>matrixColumns: illegal index");
      },
    );
  },
  "{ :self :aList | let __SPL27 = assertIsOfSize(shape(self), 2); let m = at(__SPL27, 1); let n = at(__SPL27, 2); if(allSatisfy(aList, { :each | betweenAnd(each,1, n) }), { collect(upOrDownTo(1, m), { :i | collect(aList, { :j | at(at(self, i), j) }) }) }, { error(self,'List>>matrixColumns: illegal index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRow",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL28 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL28, 1);
    let _n = _at_2(__SPL28, 2);
    /* Statements */
    return _if_3(_betweenAnd_3(_anInteger, 1, _m), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>matrixRow: illegal index");
    });
  },
  "{ :self :anInteger | let __SPL28 = assertIsOfSize(shape(self), 2); let m = at(__SPL28, 1); let n = at(__SPL28, 2); if(betweenAnd(anInteger,1, m), { at(self, anInteger) }, { error(self,'List>>matrixRow: illegal index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixPrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixPrintString_2(_self, 4);
  },
  "{ :self | matrixPrintString(self,4) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixPrintString",
  ["self", "decimalPlaces"],
  function (_self, _decimalPlaces) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _decimalPlaces";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL29 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL29, 1);
    let _n = _at_2(__SPL29, 2);
    let _print_1 = _if_3(_isIntegerMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _printString_1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return (function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _printStringShowingDecimalPlaces_2(_n, _decimalPlaces);
      });
    });
    let _table = _deepCollect_2(_self, _print_1);
    let _columnWidth = _max_1(_collect_2(_flatten_1(_table), _size_1));
    let _text = _collect_2(_table, function (_row) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _row";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(
        "   ",
        _stringJoin_2(
          _collect_2(_row, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _padLeft_3(_each, _columnWidth, " ");
          }),
          "   ",
        ),
      );
    });
    /* Statements */
    return _unlines_1([_stringJoin_1([_m, "×", _n]), "   ", _unlines_1(_text)]);
  },
  "{ :self :decimalPlaces | let __SPL29 = assertIsOfSize(shape(self), 2); let m = at(__SPL29, 1); let n = at(__SPL29, 2); let print:/1 = if(isIntegerMatrix(self), { printString:/1 }, { { :n | printStringShowingDecimalPlaces(n,decimalPlaces) } }); let table = deepCollect(self,print:/1); let columnWidth = max(collect(flatten(table),size:/1)); let text = collect(table, { :row | ++('   ', stringJoin(collect(row, { :each | padLeft(each,columnWidth, ' ') }),'   ')) }); unlines([stringJoin([m, '×', n]), '   ', unlines(text)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRotate",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_k, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _transposed_1(_collect_2(_self, _reversed_1));
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reversed_1(_collect_2(_self, _reversed_1));
      }),
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_transposed_1(_self), _reversed_1);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>matrixRotate: k not 1,2,3");
    });
  },
  "{ :self :k | caseOfOtherwise(k, [->(1, { transposed(collect(self,reversed:/1)) }), ->(2, { reversed(collect(self,reversed:/1)) }), ->(3, { collect(transposed(self),reversed:/1) })], { error(self,'List>>matrixRotate: k not 1,2,3') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "matrixRotate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrixRotate_2(_self, 1);
  },
  "{ :self | matrixRotate(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "numberOfRows",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isArray_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>numberOfRows: not an array");
    });
  },
  "{ :self | if(isArray(self), { size(self) }, { error(self,'List>>numberOfRows: not an array') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "numberOfColumns",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isArray_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _size_1(_anyOne_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>numberOfColumns: not an array");
    });
  },
  "{ :self | if(isArray(self), { size(anyOne(self)) }, { error(self,'List>>numberOfColumns: not an array') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "submatrix",
  ["self", "r", "c"],
  function (_self, _r, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_at_2(_self, _i), _j);
      },
      _r,
      _c,
    );
  },
  "{ :self :r :c | table({ :i :j | at(at(self, i), j) },r, c) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "antidiagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _answer = _zeroMatrix_2(_k, _k);
    /* Statements */
    _toDo_3(1, _k, function (_each) {
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
    });
    return _answer;
  },
  "{ :self | let k = size(self); let answer = zeroMatrix(k,k); toDo(1, k, { :each | atPut(at(answer, +(-(k, each), 1)), each, at(self, +(-(k, each), 1))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "blockDiagonalMatrix",
  ["d"],
  function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_d);
    let _s = _collect_2(_d, _shape_1);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _size_1(_at_2(_d, _i)), function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _gather_2(_to_2(1, _n), function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_equalsSign_2(_i, _k), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_at_2(_d, _i), _j);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _numberSign_2(0, _at_2(_at_2(_s, _k), 2));
            });
          }),
        );
      });
    });
    return _answer;
  },
  "{ :d | let n = size(d); let s = collect(d,shape:/1); let answer = []; toDo(1, n, { :i | toDo(1, size(at(d, i)), { :j | add(answer,gather(to(1, n), { :k | if((=(i, k)), { at(at(d, i), j) }, { #(0, at(at(s, k), 2)) }) })) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "circulantMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(1, _size_1(_self)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _rotatedRight_2(_self, _i);
    });
  },
  "{ :self | collect(upOrDownTo(1, size(self)), { :i | rotatedRight(self,i) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self", "k", "shape"],
  function (_self, _k, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL30 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SPL30, 1);
    let _n = _at_2(__SPL30, 2);
    let _r = _abs_1(_min_2(_k, 0));
    let _c = _max_2(_k, 0);
    let _answer = _zeroMatrix_2(_m, _n);
    /* Statements */
    _toDo_3(1, _size_1(_self), function (_each) {
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
    });
    return _answer;
  },
  "{ :self :k :shape | let __SPL30 = assertIsOfSize(shape, 2); let m = at(__SPL30, 1); let n = at(__SPL30, 2); let r = abs(min(k,0)); let c = max(k,0); let answer = zeroMatrix(m,n); toDo(1, size(self), { :each | atPut(at(answer, +(each, r)), +(each, c), at(self, each)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self", "k"],
  function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_size_1(_self), _abs_1(_k));
    /* Statements */
    return _diagonalMatrix_3(_self, _k, [_n, _n]);
  },
  "{ :self :k | let n = +(size(self), abs(k)); diagonalMatrix(self,k, [n, n]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "diagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonalMatrix_2(_self, 0);
  },
  "{ :self | diagonalMatrix(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u", "v", "aBlock:/2"],
  function (_u, _v, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _table_3(_aBlock_2, _u, _v);
  },
  "{ :u :v :aBlock:/2 | table(aBlock:/2,u, v) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _distanceMatrix_3(_u, _v, _euclideanDistance_2);
  },
  "{ :u :v | distanceMatrix(u, v, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix",
  "distanceMatrix",
  ["u"],
  function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _distanceMatrix_2(_u, _u);
  },
  "{ :u | distanceMatrix(u, u) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "identityMatrix",
  ["m", "n"],
  function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _zeroMatrix_2(_m, _n);
    /* Statements */
    _toDo_3(1, _min_2(_n, _m), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_at_2(_answer, _each), _each, 1);
    });
    return _answer;
  },
  "{ :m :n | let answer = zeroMatrix(m,n); toDo(1, min(n,m), { :each | atPut(at(answer, each), each, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "identityMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _identityMatrix_2(_self, _self);
  },
  "{ :self | identityMatrix(self,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "vedicSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _asList_1(_upOrDownTo_2(1, _self));
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _positiveResidue_2(_asterisk_2(_i, _j), _self);
      },
      _l,
      _l,
    );
  },
  "{ :self | let l = asList(upOrDownTo(1, self)); table({ :i :j | positiveResidue((*(i, j)),self) },l, l) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Matrix",
  "zeroMatrix",
  ["numberOfRows", "numberOfColumns"],
  function (_numberOfRows, _numberOfColumns) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numberOfRows, _numberOfColumns";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _numberOfRows), function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        throw new Error(errorMessage);
      } /* Statements */
      return _List_2(_numberOfColumns, 0);
    });
  },
  "{ :numberOfRows :numberOfColumns | collect(to(1, numberOfRows), { :unused | List(numberOfColumns, 0) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "boxMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _ceiling_1(_self);
    let _n = _plusSign_2(_asterisk_2(_r, 2), 1);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      },
      _to_2(1, _n),
      _to_2(1, _n),
    );
  },
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); table({ :i :j | 1 },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "crossMatrix",
  ["self"],
  function (_self) {
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
      function (_i, _j) {
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
      },
      _to_2(1, _n),
      _to_2(1, _n),
    );
  },
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; table({ :i :j | boole((<=(editDistance([-(i, 1), -(j, 1)],c), 1))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "diamondMatrix",
  ["self"],
  function (_self) {
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
      function (_i, _j) {
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
      },
      _to_2(1, _n),
      _to_2(1, _n),
    );
  },
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(manhattanDistance([-(i, 1), -(j, 1)],c), l))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "diskMatrix",
  ["self"],
  function (_self) {
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
      function (_i, _j) {
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
      },
      _to_2(1, _n),
      _to_2(1, _n),
    );
  },
  "{ :self | let r = ceiling(self); let n = +(*(r, 2), 1); let c = [r, r]; let l = abs((+(self, 0.5))); table({ :i :j | boole((<=(euclideanDistance([-(i, 1), -(j, 1)],c), l))) },to(1, n), to(1, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "spiralMatrix",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL31 = _assertIsOfSize_2([1, 0], 2);
    let _dx = _at_2(__SPL31, 1);
    let _dy = _at_2(__SPL31, 2);
    let __SPL32 = _assertIsOfSize_2([1, 1], 2);
    let _x = _at_2(__SPL32, 1);
    let _y = _at_2(__SPL32, 2);
    let _answer = _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _exclamationMark_2(null, _n);
    }, _n);
    /* Statements */
    _toDo_3(1, _circumflexAccent_2(_n, 2), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL33 = _assertIsOfSize_2([
        _plusSign_2(_x, _dx),
        _plusSign_2(_y, _dy),
      ], 2);
      let _nx = _at_2(__SPL33, 1);
      let _ny = _at_2(__SPL33, 2);
      /* Statements */
      _atPut_3(_at_2(_answer, _x), _y, _i);
      return _if_3(
        _ampersand_1([function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(1, _nx);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_nx, _n);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(1, _ny);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_ny, _n);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_at_2(_answer, _nx), _ny), null);
        }]),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return ((function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL34 = [_nx, _ny];
            /* Statements */
            _x = _at_2(__SPL34, 1);
            return _y = _at_2(__SPL34, 2);
          })());
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          (function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL35 = [_hyphenMinus_1(_dy), _dx];
            /* Statements */
            _dx = _at_2(__SPL35, 1);
            return _dy = _at_2(__SPL35, 2);
          })();
          return ((function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL36 = [_plusSign_2(_x, _dx), _plusSign_2(_y, _dy)];
            /* Statements */
            _x = _at_2(__SPL36, 1);
            return _y = _at_2(__SPL36, 2);
          })());
        },
      );
    });
    return _answer;
  },
  "{ :n | let __SPL31 = assertIsOfSize([1, 0], 2); let dx = at(__SPL31, 1); let dy = at(__SPL31, 2); let __SPL32 = assertIsOfSize([1, 1], 2); let x = at(__SPL32, 1); let y = at(__SPL32, 2); let answer = !({ !(nil, n) }, n); toDo(1, ^(n, 2), { :i | let __SPL33 = assertIsOfSize([+(x, dx), +(y, dy)], 2); let nx = at(__SPL33, 1); let ny = at(__SPL33, 2); atPut(at(answer, x), y, i); if(&([{ <=(1, nx) }, { <=(nx, n) }, { <=(1, ny) }, { <=(ny, n) }, { =(at(at(answer, nx), ny), nil) }]), { ({ let __SPL34 = [nx, ny]; x := at(__SPL34, 1); y := at(__SPL34, 2) } . ()) }, { ({ let __SPL35 = [-(dy), dx]; dx := at(__SPL35, 1); dy := at(__SPL35, 2) } . ()); ({ let __SPL36 = [+(x, dx), +(y, dy)]; x := at(__SPL36, 1); y := at(__SPL36, 2) } . ()) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix",
  "ulamSpiralMatrix",
  ["n"],
  function (_n) {
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
                function (_j, _i) {
                  /* ArityCheck */
                  if (arguments.length !== 2) {
                    const errorMessage = "Arity: expected 2, _j, _i";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _numberSign_2(
                    _asterisk_2(_circumflexAccent_2(-1, _j), _i),
                    _j,
                  );
                },
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
  },
  "{ :n | partition(permute(asList(upOrDownTo(1, ^(n, 2))),accumulate(take(flatten([/([+(^(n, 2), 1)], 2), table({ :j :i | #(*(^(-1, j), i), j) },to(1, n), [-1, n])]),^(n, 2)))),n) }",
);
