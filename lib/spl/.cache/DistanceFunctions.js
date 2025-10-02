sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "binaryDistance",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_exclamationMarkEqualsSign_2(_u, _v));
  }, ["u", "v"]),
  "{ :u :v | boole((!=(u, v))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "brayCurtisDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_abs_1(_hyphenMinus_2(_self, _aList))),
      _sum_1(_abs_1(_plusSign_2(_self, _aList))),
    );
  }, ["self", "aList"]),
  "{ :self :aList | /(sum(abs((-(self, aList)))), sum(abs((+(self, aList))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "canberraDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _solidus_2(
        _abs_1(_hyphenMinus_2(_self, _aList)),
        _plusSign_2(_abs_1(_self), _abs_1(_aList)),
      ),
    );
  }, ["self", "aList"]),
  "{ :self :aList | sum((/(abs((-(self, aList))), (+(abs(self), abs(aList)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "chessboardDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_abs_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList | max(abs((-(self, aList)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "chebyshevDistance",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_abs_1(_hyphenMinus_2(_self, _operand)));
  }, ["self", "operand"]),
  "{ :self :operand | max(abs((-(self, operand)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "cosineDistance",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      1,
      _solidus_2(_dot_2(_u, _v), _asterisk_2(_norm_1(_u), _norm_1(_v))),
    );
  }, ["u", "v"]),
  "{ :u :v | -(1, (/(dot(u,v), (*(norm(u), norm(v)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "cosineSimilarity",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _norm_1(_u);
    let _q = _norm_1(_v);
    /* Statements */
    return _solidus_2(_dotProduct_2(_u, _v), _asterisk_2(_p, _q));
  }, ["u", "v"]),
  "{ :u :v | let p = norm(u); let q = norm(v); /(dotProduct(u, v), (*(p, q))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "damerauLevenshteinDistance",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Primitive */
    let a = _u;
    let b = _v;
    let matrix = [];
    for (let i = 0; i <= a.length; i += 1) {
      matrix[i] = [i];
    }
    for (let i = 1; i <= b.length; i += 1) {
      matrix[0][i] = i;
    }
    for (let i = 1; i <= a.length; i += 1) {
      for (let j = 1; j <= b.length; j += 1) {
        let cost = (a[i - 1] === b[j - 1]) ? 0 : 1;
        matrix[i][j] = (
            (i > 1 && j > 1) &&
            (a[i - 1] === b[j - 2]) &&
            (a[i - 2] === b[j - 1])
          )
          ? Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + cost,
            matrix[i - 2][j - 2] + cost,
          )
          : Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + cost,
          );
      }
    }
    return matrix[a.length][b.length];
  }, ["u", "v"]),
  "{ :u :v | <primitive: let a = _u;\n\t\tlet b = _v;\n\t\tlet matrix = [];\n\t\tfor (let i = 0; i <= a.length; i += 1) {\n\t\t\tmatrix[i] = [i];\n\t\t}\n\t\tfor (let i = 1; i <= b.length; i += 1) {\n\t\t\tmatrix[0][i] = i;\n\t\t}\n\t\tfor (let i = 1; i <= a.length; i += 1) {\n\t\t\tfor (let j = 1; j <= b.length; j += 1) {\n\t\t\t\tlet cost = (a[i - 1] === b[j - 1]) ? 0 : 1;\n\t\t\t\tmatrix[i][j] = (\n\t\t\t\t\t(i > 1 && j > 1) &&\n\t\t\t\t\t(a[i - 1] === b[j - 2]) &&\n\t\t\t\t\t(a[i - 2] === b[j - 1])\n\t\t\t\t) ?\n\t\t\t\tMath.min(\n\t\t\t\t\tmatrix[i - 1][j] + 1,\n\t\t\t\t\tmatrix[i][j - 1] + 1,\n\t\t\t\t\tmatrix[i - 1][j - 1] + cost,\n\t\t\t\t\tmatrix[i - 2][j - 2] + cost\n\t\t\t\t) :\n\t\t\t\tMath.min(\n\t\t\t\t\tmatrix[i - 1][j] + 1,\n\t\t\t\t\tmatrix[i][j - 1] + 1,\n\t\t\t\t\tmatrix[i - 1][j - 1] + cost\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t\treturn matrix[a.length][b.length];>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "diceSorensenCoefficient",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _diceSorensenCoefficient_2(
      _asMultiset_1(_self),
      _asMultiset_1(_operand),
    );
  }, ["self", "operand"]),
  "{ :self :operand | diceSorensenCoefficient(asMultiset(self),asMultiset(operand)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "editDistance",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _levenshteinDistance_2(_self, _other);
  }, ["self", "other"]),
  "{ :self :other | levenshteinDistance(self,other) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "euclideanDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _norm_1(_hyphenMinus_2(_self, _aList));
  }, ["self", "aList"]),
  "{ :self :aList | norm((-(self, aList))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "hammingDistance",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _min_2(_size_1(_self), _size_1(_other));
    let _count = _abs_1(_hyphenMinus_2(_size_1(_self), _size_1(_other)));
    /* Statements */
    _toDo_3(
      1,
      _size,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(
            _at_2(_self, _index),
            _at_2(_other, _index),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _count = _plusSign_2(_count, 1);
          }, []),
        );
      }, ["index"]),
    );
    return _count;
  }, ["self", "other"]),
  "{ :self :other | let size = min(size(self),size(other)); let count = abs((-(size(self), size(other)))); toDo(1, size, { :index | ifTrue((!=(at(self, index), at(other, index))), { count := +(count, 1) }) }); count }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "jaccardDissimilarity",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_u);
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_v), _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = 0;
        let _b = 0;
        /* Statements */
        _withDo_3(
          _u,
          _v,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _exclamationMarkEqualsSign_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _a = _plusSign_2(_a, 1);
              }, []),
            );
            return _ifTrue_2(
              _ampersand_2(
                _not_1(_asBoolean_1(_i)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _not_1(_asBoolean_1(_j));
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _b = _plusSign_2(_b, 1);
              }, []),
            );
          }, ["i", "j"]),
        );
        return _solidus_2(_a, _hyphenMinus_2(_k, _b));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_u, "jaccardDissimilarity: size mismatch");
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v | let k = size(u); if((=(size(v), k)), { let a = 0; let b = 0; withDo(u, v, { :i :j | ifTrue((!=(i, j)), { a := +(a, 1) }); ifTrue((&(not(asBoolean(i)), { not(asBoolean(j)) })), { b := +(b, 1) }) }); /(a, (-(k, b))) }, { error(u,'jaccardDissimilarity: size mismatch') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "leeDistance",
  ["x", "y", "q"],
  sl.annotateFunction(function (_x, _y, _q) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    /* Statements */
    return _sum_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _abs_1(_hyphenMinus_2(_at_2(_x, _i), _at_2(_y, _i)));
        /* Statements */
        return _min_2(_z, _hyphenMinus_2(_q, _z));
      }, ["i"]),
    );
  }, ["x", "y", "q"]),
  "{ :x :y :q | let n = size(x); sum(upOrDownTo(1, n), { :i | let z = abs((-(at(x, i), at(y, i)))); min(z, -(q, z)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "levenshteinDistance",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _levenshteinDistance_3(_self, _other, _equalsSign_2);
  }, ["self", "other"]),
  "{ :self :other | levenshteinDistance(self,other, =) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "levenshteinDistance",
  ["self", "other", "equalityBlock:/2"],
  sl.annotateFunction(function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isEmpty_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isEmpty_1(_other);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _matrix = _asList_1(_upOrDownTo_2(0, _size_1(_other)));
        /* Statements */
        _toDo_3(
          1,
          _size_1(_self),
          sl.annotateFunction(function (_xIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _xIndex";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _corner = _hyphenMinus_2(_xIndex, 1);
            /* Statements */
            _atPut_3(_matrix, 1, _hyphenMinus_2(_xIndex, 1));
            return _toDo_3(
              1,
              _size_1(_other),
              sl.annotateFunction(function (_yIndex) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _yIndex";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _upper = _at_2(_matrix, _plusSign_2(_yIndex, 1));
                /* Statements */
                _atPut_3(
                  _matrix,
                  _plusSign_2(_yIndex, 1),
                  _if_3(
                    _equalityBlock_2(
                      _at_2(_self, _xIndex),
                      _at_2(_other, _yIndex),
                    ),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _corner;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _plusSign_2(
                        _min_1([_upper, _corner, _at_2(_matrix, _yIndex)]),
                        1,
                      );
                    }, []),
                  ),
                );
                return _corner = _upper;
              }, ["yIndex"]),
            );
          }, ["xIndex"]),
        );
        return _at_2(_matrix, _plusSign_2(_size_1(_other), 1));
      }, []),
    );
  }, ["self", "other", "equalityBlock:/2"]),
  "{ :self :other :equalityBlock:/2 | if((|(isEmpty(self), { isEmpty(other) })), { size(self) }, { let matrix = asList(upOrDownTo(0, size(other))); toDo(1, size(self), { :xIndex | let corner = -(xIndex, 1); atPut(matrix, 1, -(xIndex, 1)); toDo(1, size(other), { :yIndex | let upper = at(matrix, +(yIndex, 1)); atPut(matrix, +(yIndex, 1), if(equalityBlock(at(self, xIndex), at(other, yIndex)), { corner }, { +(min([upper, corner, at(matrix, yIndex)]), 1) })); corner := upper }) }); at(matrix, +(size(other), 1)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "matchingDissimilarity",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_u), _size_1(_v)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _occurrencesOf_2(_withCollect_3(_u, _v, _equalsSign_2), false),
          _size_1(_u),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_u, _v], "matchingDissimilarity: invalid input");
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v | if((=(size(u), size(v))), { /(occurrencesOf(withCollect(u,v, =),false), size(u)) }, { error([u, v],'matchingDissimilarity: invalid input') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "manhattanDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_abs_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList | sum(abs((-(self, aList)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "normalizedSquaredEuclideanDistance",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _uu = _hyphenMinus_2(_u, _mean_1(_u));
    let _vv = _hyphenMinus_2(_v, _mean_1(_v));
    /* Statements */
    return _solidus_2(
      _asterisk_2(0.5, _square_1(_norm_1(_hyphenMinus_2(_uu, _vv)))),
      _plusSign_2(_square_1(_norm_1(_uu)), _square_1(_norm_1(_vv))),
    );
  }, ["u", "v"]),
  "{ :u :v | let uu = (-(u, mean(u))); let vv = (-(v, mean(v))); /(*(0.5, square(norm((-(uu, vv))))), (+(square(norm(uu)), square(norm(vv))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "DistanceFunctions",
  "squaredEuclideanDistance",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _square_1(_norm_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList | square(norm((-(self, aList)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "DistanceFunctions",
  "binaryDistance",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_exclamationMarkEqualsSign_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand | boole((!=(self, operand))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "DistanceFunctions",
  "euclideanDistance",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_hyphenMinus_2(_aNumber, _self));
  }, ["self", "aNumber"]),
  "{ :self :aNumber | abs((-(aNumber, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "DistanceFunctions",
  "minkowskiDistance",
  ["p", "u", "v"],
  sl.annotateFunction(function (_p, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _sum_1(_circumflexAccent_2(_abs_1(_hyphenMinus_2(_u, _v)), _p)),
      _solidus_2(1, _p),
    );
  }, ["p", "u", "v"]),
  "{ :p :u :v | ^(sum((^(abs((-(u, v))), p))), (/(1, p))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "DistanceFunctions",
  "minkowskiDistance",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return _circumflexAccent_2(
        _sum_1(_circumflexAccent_2(_abs_1(_hyphenMinus_2(_u, _v)), _p)),
        _solidus_2(1, _p),
      );
    }, ["u", "v"]);
  }, ["p"]),
  "{ :p | { :u :v | ^(sum((^(abs((-(u, v))), p))), (/(1, p))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Multiset",
  "DistanceFunctions",
  "diceSorensenCoefficient",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _asterisk_2(2, _size_1(_intersection_2(_self, _operand))),
      _plusSign_2(_size_1(_self), _size_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | /((*(2, (size(intersection(self,operand))))), (+(size(self), size(operand)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "editDistance",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _editDistance_2(_characters_1(_self), _characters_1(_aString));
  }, ["self", "aString"]),
  "{ :self :aString | editDistance(characters(self),characters(aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "hammingDistance",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _hammingDistance_2(_characters_1(_self), _characters_1(_aString));
  }, ["self", "aString"]),
  "{ :self :aString | hammingDistance(characters(self),characters(aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "jaroDistance",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    const s = _self;
    const t = _aString;
    const sLength = s.length;
    const tLength = t.length;
    if (sLength === 0 && tLength === 0) {
      return 1;
    }
    const matchDistance = Math.floor(Math.max(sLength, tLength) / 2) - 1;
    const sMatches = new Array(sLength).fill(false);
    const tMatches = new Array(tLength).fill(false);
    let matches = 0;
    let transpositions = 0;
    for (let i = 0; i < sLength; i++) {
      const start = Math.max(0, i - matchDistance);
      const end = Math.min(i + matchDistance + 1, tLength);
      for (let j = start; j < end; j++) {
        if (tMatches[j]) {
          continue;
        }
        if (s[i] !== t[j]) {
          continue;
        }
        sMatches[i] = true;
        tMatches[j] = true;
        matches++;
        break;
      }
    }
    if (matches === 0) {
      return 0;
    }
    let k = 0;
    for (let i = 0; i < sLength; i++) {
      if (!sMatches[i]) {
        continue;
      }
      while (!tMatches[k]) {
        k++;
      }
      if (s[i] !== t[k]) {
        transpositions++;
      }
      k++;
    }
    transpositions = transpositions / 2;
    return (
      (matches / sLength) +
      (matches / tLength) +
      ((matches - transpositions) / matches)
    ) / 3;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: const s = _self;\n\t\tconst t = _aString;\n\t\tconst sLength = s.length;\n\t\tconst tLength = t.length;\n\t\tif (sLength === 0 && tLength === 0) {\n\t\t\treturn 1;\n\t\t}\n\t\tconst matchDistance = Math.floor(Math.max(sLength, tLength) / 2) - 1;\n\t\tconst sMatches = new Array(sLength).fill(false);\n\t\tconst tMatches = new Array(tLength).fill(false);\n\t\tlet matches = 0;\n\t\tlet transpositions = 0;\n\t\tfor (let i = 0; i < sLength; i++) {\n\t\t\tconst start = Math.max(0, i - matchDistance);\n\t\t\tconst end = Math.min(i + matchDistance + 1, tLength);\n\t\t\tfor (let j = start; j < end; j++) {\n\t\t\t\tif (tMatches[j]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (s[i] !== t[j]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tsMatches[i] = true;\n\t\t\t\ttMatches[j] = true;\n\t\t\t\tmatches++;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tif (matches === 0) {\n\t\t\treturn 0;\n\t\t}\n\t\tlet k = 0;\n\t\tfor (let i = 0; i < sLength; i++) {\n\t\t\tif (!sMatches[i]) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\twhile (!tMatches[k]) {\n\t\t\t\tk++;\n\t\t\t}\n\t\t\tif (s[i] !== t[k]) {\n\t\t\t\ttranspositions++;\n\t\t\t}\n\t\t\tk++;\n\t\t}\n\t\ttranspositions = transpositions / 2;\n\t\treturn (\n\t\t\t(matches / sLength) +\n\t\t\t(matches / tLength) +\n\t\t\t((matches - transpositions) / matches)\n\t\t) / 3;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "jaroWinklerSimilarity",
  ["s", "t", "p"],
  sl.annotateFunction(function (_s, _t, _p) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _s, _t, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _j = _jaroDistance_2(_s, _t);
    let _k = _min_2(_min_2(_size_1(_s), _size_1(_t)), 4);
    let _l = 0;
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
        return _ifTrue_2(
          _equalsSign_2(_at_2(_s, _i), _at_2(_t, _i)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _l = _plusSign_2(_l, 1);
          }, []),
        );
      }, ["i"]),
    );
    return _hyphenMinus_2(
      1,
      _plusSign_2(_j, _asterisk_2(_asterisk_2(_l, _p), _hyphenMinus_2(1, _j))),
    );
  }, ["s", "t", "p"]),
  "{ :s :t :p | let j = jaroDistance(s, t); let k = min(min(size(s),size(t)),4); let l = 0; toDo(1, k, { :i | ifTrue((=(at(s, i), at(t, i))), { l := +(l, 1) }) }); -(1, (+(j, (*(*(l, p), (-(1, j))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "levenshteinDistance",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _levenshteinDistance_2(
      _characters_1(_self),
      _characters_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString | levenshteinDistance(characters(self),characters(aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DistanceFunctions",
  "damerauLevenshteinDistance",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _damerauLevenshteinDistance_2(
      _characters_1(_self),
      _characters_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString | damerauLevenshteinDistance(characters(self),characters(aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "DistanceFunctions",
  "nearestBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _distanceList = _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _anObject);
      }, ["each"]),
    );
    let _leastDistance = _min_1(_distanceList);
    /* Statements */
    return _select_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_aBlock_2(_each, _anObject), _leastDistance);
      }, ["each"]),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | let distanceList = collect(self, { :each | aBlock(each, anObject) }); let leastDistance = min(distanceList); select(self, { :each | =(aBlock(each, anObject), leastDistance) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "DistanceFunctions",
  "nearest",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _nearestBy_3(_self, _anObject, _euclideanDistance_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | nearestBy(self,anObject, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "DistanceFunctions",
  "nearest",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _distanceList = _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _euclideanDistance_2(_each, _anObject);
      }, ["each"]),
    );
    let _indexList = _first_2(_ordering_1(_distanceList), _anInteger);
    /* Statements */
    return _atAll_2(_self, _indexList);
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger | let distanceList = collect(self, { :each | euclideanDistance(each, anObject) }); let indexList = first(ordering(distanceList),anInteger); atAll(self,indexList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "directedHausdorffMetric",
  ["u", "v", "f:/2"],
  sl.annotateFunction(function (_u, _v, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cMax = 0;
    let _a = null;
    let _b = null;
    /* Statements */
    _withIndexDo_2(
      _u,
      sl.annotateFunction(function (_x, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _cMin = Infinity;
        let _k = null;
        /* Statements */
        _withIndexDo_2(
          _v,
          sl.annotateFunction(function (_y, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _y, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _f_2(_x, _y);
            /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_d, _cMin),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _cMin = _d;
                return _k = _j;
              }, []),
            );
          }, ["y", "j"]),
        );
        return _ifTrue_2(
          _greaterThanSign_2(_cMin, _cMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _cMax = _cMin;
            _a = _i;
            return _b = _k;
          }, []),
        );
      }, ["x", "i"]),
    );
    return [_cMax, _a, _b];
  }, ["u", "v", "f:/2"]),
  "{ :u :v :f:/2 | let cMax = 0; let a = nil; let b = nil; withIndexDo(u, { :x :i | let cMin = Infinity; let k = nil; withIndexDo(v, { :y :j | let d = f(x, y); ifTrue((<(d, cMin)), { cMin := d; k := j }) }); ifTrue((>(cMin, cMax)), { cMax := cMin; a := i; b := k }) }); [cMax, a, b] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "directedHausdorffMetric",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _directedHausdorffMetric_3(_u, _v, _euclideanDistance_2);
  }, ["u", "v"]),
  "{ :u :v | directedHausdorffMetric(u, v, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "hausdorffDistance",
  ["u", "v", "f:/2"],
  sl.annotateFunction(function (_u, _v, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _f_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_hausdorffMetric_3(_u, _v, _f_2), 1);
  }, ["u", "v", "f:/2"]),
  "{ :u :v :f:/2 | at(hausdorffMetric(u, v, f:/2),1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "hausdorffDistance",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_hausdorffMetric_2(_u, _v), 1);
  }, ["u", "v"]),
  "{ :u :v | at(hausdorffMetric(u, v),1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "hausdorffMetric",
  ["u", "v", "f:/2"],
  sl.annotateFunction(function (_u, _v, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _directedHausdorffMetric_3(_u, _v, _f_2);
    let _b = _directedHausdorffMetric_3(_v, _u, _f_2);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_at_2(_a, 1), _at_2(_b, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _b;
      }, []),
    );
  }, ["u", "v", "f:/2"]),
  "{ :u :v :f:/2 | let a = directedHausdorffMetric(u, v, f:/2); let b = directedHausdorffMetric(v, u, f:/2); if((>(at(a, 1), at(b, 1))), { a }, { b }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "hausdorffMetric",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _hausdorffMetric_3(_u, _v, _euclideanDistance_2);
  }, ["u", "v"]),
  "{ :u :v | hausdorffMetric(u, v, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "nearestNeighbourAlgorithm",
  ["self", "initialIndex"],
  sl.annotateFunction(function (_self, _initialIndex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _initialIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _distanceMatrix = _distanceMatrix_1(_self);
    let _visited = _List_2(_size_1(_self), false);
    let _currentIndex = _initialIndex;
    let _answer = [_currentIndex];
    /* Statements */
    _atPut_3(_visited, _currentIndex, true);
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allTrue_1(_visited);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _distanceList = _at_2(_distanceMatrix, _currentIndex);
        let _o = _ordering_1(_distanceList);
        let _i = 1;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_visited, _at_2(_o, _i));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        _atPut_3(_visited, _at_2(_o, _i), true);
        _add_2(_answer, _at_2(_o, _i));
        return _currentIndex = _at_2(_o, _i);
      }, []),
    );
    return _answer;
  }, ["self", "initialIndex"]),
  "{ :self :initialIndex | let distanceMatrix = distanceMatrix(self); let visited = List(size(self), false); let currentIndex = initialIndex; let answer = [currentIndex]; atPut(visited, currentIndex, true); whileFalse({ allTrue(visited) }, { let distanceList = at(distanceMatrix, currentIndex); let o = ordering(distanceList); let i = 1; whileTrue({ at(visited, at(o, i)) }, { i := +(i, 1) }); atPut(visited, at(o, i), true); add(answer,at(o, i)); currentIndex := at(o, i) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "nearestNeighbourGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _distanceMatrix = _distanceMatrix_1(_self);
    let _vertexCount = _size_1(_self);
    let _vertexList = _asList_1(_upOrDownTo_2(1, _vertexCount));
    let _edgeList = [];
    /* Statements */
    _toDo_3(
      1,
      _vertexCount,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _distanceList = _at_2(_distanceMatrix, _i);
        let _sortedDistances = _sorted_1(_distanceList);
        let _leastDistance = _at_2(_sortedDistances, 2);
        /* Statements */
        return _toDo_3(
          1,
          _vertexCount,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _distance = _at_2(_distanceList, _j);
            /* Statements */
            return _ifTrue_2(
              _ampersand_2(
                _exclamationMarkEqualsSign_2(_i, _j),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSignEqualsSign_2(_distance, _leastDistance);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addIfNotPresent_2(
                  _edgeList,
                  _hyphenMinusHyphenMinusGreaterThanSign_2(_i, _j),
                );
              }, []),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _Graph_2(_vertexList, _edgeList);
  }, ["self"]),
  "{ :self | let distanceMatrix = distanceMatrix(self); let vertexCount = size(self); let vertexList = asList(upOrDownTo(1, vertexCount)); let edgeList = []; toDo(1, vertexCount, { :i | let distanceList = at(distanceMatrix, i); let sortedDistances = sorted(distanceList); let leastDistance = at(sortedDistances, 2); toDo(1, vertexCount, { :j | let distance = at(distanceList, j); ifTrue((&(!=(i, j), { <=(distance, leastDistance) })), { addIfNotPresent(edgeList,-->(i, j)) }) }) }); Graph(vertexList, edgeList) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "pairwiseDistances",
  ["u", "f:/2"],
  sl.annotateFunction(function (_u, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_u);
    let _answer = [];
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
        return _toDo_3(
          _plusSign_2(_i, 1),
          _k,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _f_2(_at_2(_u, _i), _at_2(_u, _j)));
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["u", "f:/2"]),
  "{ :u :f:/2 | let k = size(u); let answer = []; toDo(1, k, { :i | toDo((+(i, 1)), k, { :j | add(answer,f(at(u, i), at(u, j))) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "pairwiseDistances",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _pairwiseDistances_2(_u, _euclideanDistance_2);
  }, ["u"]),
  "{ :u | pairwiseDistances(u, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "correspondancePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_self, 2);
    let _a = _at_2(__SPL1, 1);
    let _b = _at_2(__SPL1, 2);
    let _n = _size_1(_a);
    let _y = _solidus_2(_n, _goldenRatio_1(1));
    let _p = _collect_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return [_at_2(_b, _i), 0];
      }, ["i"]),
    );
    let _q = _collect_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return [_at_2(_a, _i), _y];
      }, ["i"]),
    );
    let _r = _collect_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1([_at_2(_p, _i), _at_2(_q, _i)]);
      }, ["i"]),
    );
    /* Statements */
    return _LineDrawing_1([_PointCloud_1(_p), _PointCloud_1(_q), _r]);
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(self, 2); let a = at(__SPL1, 1); let b = at(__SPL1, 2); let n = size(a); let y = /(n, goldenRatio(1)); let p = collect(upOrDownTo(1, n), { :i | [at(b, i), 0] }); let q = collect(upOrDownTo(1, n), { :i | [at(a, i), y] }); let r = collect(upOrDownTo(1, n), { :i | Line([at(p, i), at(q, i)]) }); LineDrawing([PointCloud(p), PointCloud(q), r]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingCorrespondence",
  ["x", "y", "w", "f:/2"],
  sl.annotateFunction(function (_x, _y, _w, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _w, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _derivePath_1 = sl.annotateFunction(function (_tracebackMatrix) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _tracebackMatrix";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL2 = _assertIsOfSize_2(_shape_1(_tracebackMatrix), 2);
      let _n = _at_2(__SPL2, 1);
      let _m = _at_2(__SPL2, 2);
      let _i = _n;
      let _j = _m;
      let _path = [[_i, _j]];
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _verticalLine_2(
            _greaterThanSign_2(_i, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSign_2(_j, 1);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _caseOf_2(_at_2(_at_2(_tracebackMatrix, _i), _j), [
            _hyphenMinusGreaterThanSign_2(
              1,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _i = _hyphenMinus_2(_i, 1);
                return _j = _hyphenMinus_2(_j, 1);
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
                return _i = _hyphenMinus_2(_i, 1);
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
                return _j = _hyphenMinus_2(_j, 1);
              }, []),
            ),
          ]);
          return _addLast_2(_path, [_i, _j]);
        }, []),
      );
      return _path;
    }, ["tracebackMatrix"]);
    let __SPL3 = _assertIsOfSize_2(_warpingMatrices_4(_x, _y, _w, _f_2), 2);
    let _tracebackMatrix = _at_2(__SPL3, 1);
    let __genSym6 = _at_2(__SPL3, 2);
    /* Statements */
    return _collect_2(
      _transpose_1(_derivePath_1(_tracebackMatrix)),
      _reverse_1,
    );
  }, ["x", "y", "w", "f:/2"]),
  "{ :x :y :w :f:/2 | let derivePath = { :tracebackMatrix | let __SPL2 = assertIsOfSize(shape(tracebackMatrix), 2); let n = at(__SPL2, 1); let m = at(__SPL2, 2); let i = n; let j = m; let path = [[i, j]]; whileTrue({ |(>(i, 1), { >(j, 1) }) }, { caseOf(at(at(tracebackMatrix, i), j),[->(1, { i := -(i, 1); j := -(j, 1) }), ->(2, { i := (-(i, 1)) }), ->(3, { j := -(j, 1) })]); addLast(path,[i, j]) }); path }; let __SPL3 = assertIsOfSize(warpingMatrices(x, y, w, f:/2), 2); let tracebackMatrix = at(__SPL3, 1); let _ = at(__SPL3, 2); collect(transpose(derivePath(tracebackMatrix)),reverse:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingCorrespondence",
  ["x", "y", "w"],
  sl.annotateFunction(function (_x, _y, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _warpingCorrespondence_4(_x, _y, _w, _euclideanDistance_2);
  }, ["x", "y", "w"]),
  "{ :x :y :w | warpingCorrespondence(x, y, w, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingCorrespondence",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _warpingCorrespondence_4(_x, _y, Infinity, _euclideanDistance_2);
  }, ["x", "y"]),
  "{ :x :y | warpingCorrespondence(x, y, Infinity, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingDistance",
  ["x", "y", "w", "f:/2"],
  sl.annotateFunction(function (_x, _y, _w, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _w, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _size_1(_x);
    let _j = _size_1(_y);
    let __SPL4 = _assertIsOfSize_2(_warpingMatrices_4(_x, _y, _w, _f_2), 2);
    let __genSym7 = _at_2(__SPL4, 1);
    let _costMatrix = _at_2(__SPL4, 2);
    /* Statements */
    return _at_2(_at_2(_costMatrix, _i), _j);
  }, ["x", "y", "w", "f:/2"]),
  "{ :x :y :w :f:/2 | let i = size(x); let j = size(y); let __SPL4 = assertIsOfSize(warpingMatrices(x, y, w, f:/2), 2); let _ = at(__SPL4, 1); let costMatrix = at(__SPL4, 2); at(at(costMatrix, i), j) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingDistance",
  ["x", "y", "w"],
  sl.annotateFunction(function (_x, _y, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _warpingDistance_4(_x, _y, _w, _euclideanDistance_2);
  }, ["x", "y", "w"]),
  "{ :x :y :w | warpingDistance(x, y, w, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingDistance",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _warpingDistance_4(_x, _y, Infinity, _euclideanDistance_2);
  }, ["x", "y"]),
  "{ :x :y | warpingDistance(x, y, Infinity, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingMatrices",
  ["x", "y", "w", "f:/2"],
  sl.annotateFunction(function (_x, _y, _w, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x, _y, _w, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _m = _size_1(_y);
    let _tracebackMatrix = _reshape_2([0], [_n, _m]);
    let _costMatrix = _reshape_2([Infinity], [
      _plusSign_2(_n, 1),
      _plusSign_2(_m, 1),
    ]);
    /* Statements */
    _atPut_3(_at_2(_costMatrix, 1), 1, 0);
    _w = _plusSign_2(_w, 1);
    _toDo_3(
      2,
      _plusSign_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _max_2(2, _hyphenMinus_2(_i, _w));
        let _b = _min_2(_plusSign_2(_m, 1), _plusSign_2(_i, _w));
        /* Statements */
        return _toDo_3(
          _a,
          _b,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _f_2(
              _at_2(_x, _hyphenMinus_2(_i, 1)),
              _at_2(_y, _hyphenMinus_2(_j, 1)),
            );
            let _h = [
              _at_2(
                _at_2(_costMatrix, _hyphenMinus_2(_i, 1)),
                _hyphenMinus_2(_j, 1),
              ),
              _at_2(_at_2(_costMatrix, _hyphenMinus_2(_i, 1)), _j),
              _at_2(_at_2(_costMatrix, _i), _hyphenMinus_2(_j, 1)),
            ];
            let _l = _min_1(_h);
            /* Statements */
            _atPut_3(_at_2(_costMatrix, _i), _j, _plusSign_2(_z, _l));
            return _atPut_3(
              _at_2(_tracebackMatrix, _hyphenMinus_2(_i, 1)),
              _hyphenMinus_2(_j, 1),
              _indexOf_2(_h, _l),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
    _removeFirst_1(_costMatrix);
    _do_2(
      _costMatrix,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeFirst_1(_each);
      }, ["each"]),
    );
    return [_tracebackMatrix, _costMatrix];
  }, ["x", "y", "w", "f:/2"]),
  "{ :x :y :w :f:/2 | let n = size(x); let m = size(y); let tracebackMatrix = reshape([0],[n, m]); let costMatrix = reshape([Infinity],[+(n, 1), +(m, 1)]); atPut(at(costMatrix, 1), 1, 0); w := +(w, 1); toDo(2, +(n, 1), { :i | let a = max(2, -(i, w)); let b = min(+(m, 1), +(i, w)); toDo(a, b, { :j | let z = f(at(x, -(i, 1)), at(y, -(j, 1))); let h = [at(at(costMatrix, -(i, 1)), -(j, 1)), at(at(costMatrix, -(i, 1)), j), at(at(costMatrix, i), -(j, 1))]; let l = min(h); atPut(at(costMatrix, i), j, +(z, l)); atPut(at(tracebackMatrix, -(i, 1)), -(j, 1), indexOf(h,l)) }) }); removeFirst(costMatrix); do(costMatrix, { :each | removeFirst(each) }); [tracebackMatrix, costMatrix] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingMatrices",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _warpingMatrices_4(_x, _y, Infinity, _euclideanDistance_2);
  }, ["x", "y"]),
  "{ :x :y | warpingMatrices(x, y, Infinity, euclideanDistance:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DistanceFunctions",
  "warpingPlot",
  ["x", "y", "c"],
  sl.annotateFunction(function (_x, _y, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2(_c, 2);
    let _a = _at_2(__SPL5, 1);
    let _b = _at_2(__SPL5, 2);
    let _o = _asterisk_2(_hyphenMinus_2(_range_1(_y), _min_1(_x)), 1.5);
    let _p = _transpose_1([
      _asList_1(_upOrDownTo_2(1, _size_1(_x))),
      _plusSign_2(_x, _o),
    ]);
    let _q = _transpose_1([_asList_1(_upOrDownTo_2(1, _size_1(_y))), _y]);
    let _r = _collect_2(
      _upOrDownTo_2(1, _size_1(_a)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1([_at_2(_p, _at_2(_a, _i)), _at_2(_q, _at_2(_b, _i))]);
      }, ["i"]),
    );
    /* Statements */
    return _LineDrawing_1([
      _PointCloud_1(_plusSignPlusSign_2(_p, _q)),
      _Line_1(_p),
      _Line_1(_q),
      _r,
    ]);
  }, ["x", "y", "c"]),
  "{ :x :y :c | let __SPL5 = assertIsOfSize(c, 2); let a = at(__SPL5, 1); let b = at(__SPL5, 2); let o = *((-(range(y), min(x))), 1.5); let p = transpose([asList(upOrDownTo(1, size(x))), +(x, o)]); let q = transpose([asList(upOrDownTo(1, size(y))), y]); let r = collect(upOrDownTo(1, size(a)), { :i | Line([at(p, at(a, i)), at(q, at(b, i))]) }); LineDrawing([PointCloud((++(p, q))), Line(p), Line(q), r]) }",
);
