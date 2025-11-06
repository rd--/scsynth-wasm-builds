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
  "{ :u :v |\n\t\t(u != v).boole\n\t}",
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
  "{ :self :aList |\n\t\t(self - aList).abs.sum / (self + aList).abs.sum\n\t}",
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
  "{ :self :aList |\n\t\t((self - aList).abs / (self.abs + aList.abs)).sum\n\t}",
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
  "{ :self :aList |\n\t\t(self - aList).abs.max\n\t}",
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
  "{ :self :operand |\n\t\t(self - operand).abs.max\n\t}",
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
  "{ :u :v |\n\t\t1 - (u.dot(v) / (u.norm * v.norm))\n\t}",
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
  "{ :u :v |\n\t\tlet p = u.norm;\n\t\tlet q = v.norm;\n\t\tdotProduct(u, v) / (p * q)\n\t}",
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
  "{ :u :v |\n\t\t<primitive:\n\t\t/* https://github.com/olegskl/levenshtein */\n\t\tlet a = _u;\n\t\tlet b = _v;\n\t\tlet matrix = [];\n\t\tfor (let i = 0; i <= a.length; i += 1) {\n\t\t\tmatrix[i] = [i];\n\t\t}\n\t\tfor (let i = 1; i <= b.length; i += 1) {\n\t\t\tmatrix[0][i] = i;\n\t\t}\n\t\tfor (let i = 1; i <= a.length; i += 1) {\n\t\t\tfor (let j = 1; j <= b.length; j += 1) {\n\t\t\t\tlet cost = (a[i - 1] === b[j - 1]) ? 0 : 1;\n\t\t\t\tmatrix[i][j] = (\n\t\t\t\t\t(i > 1 && j > 1) &&\n\t\t\t\t\t(a[i - 1] === b[j - 2]) &&\n\t\t\t\t\t(a[i - 2] === b[j - 1])\n\t\t\t\t) ?\n\t\t\t\tMath.min(\n\t\t\t\t\tmatrix[i - 1][j] + 1,\n\t\t\t\t\tmatrix[i][j - 1] + 1,\n\t\t\t\t\tmatrix[i - 1][j - 1] + cost,\n\t\t\t\t\tmatrix[i - 2][j - 2] + cost\n\t\t\t\t) :\n\t\t\t\tMath.min(\n\t\t\t\t\tmatrix[i - 1][j] + 1,\n\t\t\t\t\tmatrix[i][j - 1] + 1,\n\t\t\t\t\tmatrix[i - 1][j - 1] + cost\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t\treturn matrix[a.length][b.length];\n\t\t>\n\t}",
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
  "{ :self :operand |\n\t\tself.asMultiset.diceSorensenCoefficient(operand.asMultiset)\n\t}",
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
  "{ :self :other |\n\t\tself.levenshteinDistance(other)\n\t}",
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
  "{ :self :aList |\n\t\t(self - aList).norm\n\t}",
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
  "{ :self :other |\n\t\tlet size = self.size.min(other.size);\n\t\tlet count = (self.size - other.size).abs;\n\t\t1.toDo(size) { :index |\n\t\t\t(self[index] != other[index]).ifTrue {\n\t\t\t\tcount := count + 1\n\t\t\t}\n\t\t};\n\t\tcount\n\t}",
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
  "{ :u :v |\n\t\tlet k = u.size;\n\t\t(v.size = k).if {\n\t\t\tlet a = 0;\n\t\t\tlet b = 0;\n\t\t\tu.withDo(v) { :i :j |\n\t\t\t\t(i != j).ifTrue {\n\t\t\t\t\ta := a + 1\n\t\t\t\t};\n\t\t\t\t(i.asBoolean.not & { j.asBoolean.not }).ifTrue {\n\t\t\t\t\tb := b + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\ta / (k - b)\n\t\t} {\n\t\t\tu.error('jaccardDissimilarity: size mismatch')\n\t\t}\n\t}",
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
      _to_2(1, _n),
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
  "{ :x :y :q |\n\t\tlet n = x.size;\n\t\t1.to(n).sum { :i |\n\t\t\tlet z = (x[i] - y[i]).abs;\n\t\t\tmin(z, q - z)\n\t\t}\n\t}",
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
  "{ :self :other |\n\t\tself.levenshteinDistance(other, =)\n\t}",
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
        let _matrix = _asList_1(_nonemptyRange_3(0, _size_1(_other), 1));
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
  "{ :self :other :equalityBlock:/2 |\n\t\t(self.isEmpty | {\n\t\t\tother.isEmpty\n\t\t}).if {\n\t\t\tself.size\n\t\t} {\n\t\t\tlet matrix = [0 .. other.size];\n\t\t\t1.toDo(self.size) { :xIndex |\n\t\t\t\tlet corner = xIndex - 1;\n\t\t\t\tmatrix[1] := xIndex - 1;\n\t\t\t\t1.toDo(other.size) { :yIndex |\n\t\t\t\t\tlet upper = matrix[yIndex + 1];\n\t\t\t\t\tmatrix[yIndex + 1] := equalityBlock(self[xIndex], other[yIndex]).if {\n\t\t\t\t\t\tcorner\n\t\t\t\t\t} {\n\t\t\t\t\t\t[upper, corner, matrix[yIndex]].min + 1\n\t\t\t\t\t};\n\t\t\t\t\tcorner := upper\n\t\t\t\t}\n\t\t\t};\n\t\t\tmatrix[other.size + 1]\n\t\t}\n\t}",
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
  "{ :u :v |\n\t\t(u.size = v.size).if {\n\t\t\tu.withCollect(v, =).occurrencesOf(false) / u.size\n\t\t} {\n\t\t\t[u, v].error('matchingDissimilarity: invalid input')\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\t(self - aList).abs.sum\n\t}",
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
  "{ :u :v |\n\t\tlet uu = (u - u.mean);\n\t\tlet vv = (v - v.mean);\n\t\t0.5 * (uu - vv).norm.square / (uu.norm.square + vv.norm.square)\n\t}",
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
  "{ :self :aList |\n\t\t(self - aList).norm.square\n\t}",
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
  "{ :self :operand |\n\t\t(self != operand).boole\n\t}",
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
  "{ :self :aNumber |\n\t\t(aNumber - self).abs\n\t}",
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
  "{ :p :u :v |\n\t\t((u - v).abs ^ p).sum ^ (1 / p)\n\t}",
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
  "{ :p |\n\t\t{ :u :v |\n\t\t\t((u - v).abs ^ p).sum ^ (1 / p)\n\t\t}\n\t}",
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
  "{ :self :operand |\n\t\t(2 * (self.intersection(operand).size)) / (self.size + operand.size)\n\t}",
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
  "{ :self :aString |\n\t\tself.characters.editDistance(aString.characters)\n\t}",
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
  "{ :self :aString |\n\t\tself.characters.hammingDistance(aString.characters)\n\t}",
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
  "{ :self :aString |\n\t\t<primitive:\n\t\tconst s = _self;\n\t\tconst t = _aString;\n\t\tconst sLength = s.length;\n\t\tconst tLength = t.length;\n\t\tif (sLength === 0 && tLength === 0) {\n\t\t\treturn 1;\n\t\t}\n\t\tconst matchDistance = Math.floor(Math.max(sLength, tLength) / 2) - 1;\n\t\tconst sMatches = new Array(sLength).fill(false);\n\t\tconst tMatches = new Array(tLength).fill(false);\n\t\tlet matches = 0;\n\t\tlet transpositions = 0;\n\t\tfor (let i = 0; i < sLength; i++) {\n\t\t\tconst start = Math.max(0, i - matchDistance);\n\t\t\tconst end = Math.min(i + matchDistance + 1, tLength);\n\t\t\tfor (let j = start; j < end; j++) {\n\t\t\t\tif (tMatches[j]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (s[i] !== t[j]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tsMatches[i] = true;\n\t\t\t\ttMatches[j] = true;\n\t\t\t\tmatches++;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tif (matches === 0) {\n\t\t\treturn 0;\n\t\t}\n\t\tlet k = 0;\n\t\tfor (let i = 0; i < sLength; i++) {\n\t\t\tif (!sMatches[i]) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\twhile (!tMatches[k]) {\n\t\t\t\tk++;\n\t\t\t}\n\t\t\tif (s[i] !== t[k]) {\n\t\t\t\ttranspositions++;\n\t\t\t}\n\t\t\tk++;\n\t\t}\n\t\ttranspositions = transpositions / 2;\n\t\treturn (\n\t\t\t(matches / sLength) +\n\t\t\t(matches / tLength) +\n\t\t\t((matches - transpositions) / matches)\n\t\t) / 3;\n\t\t>\n\t}",
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
  "{ :s :t :p |\n\t\tlet j = jaroDistance(s, t);\n\t\tlet k = s.size.min(t.size).min(4);\n\t\tlet l = 0;\n\t\t1.toDo(k) { :i |\n\t\t\t(s[i] = t[i]).ifTrue {\n\t\t\t\tl := l + 1\n\t\t\t}\n\t\t};\n\t\t1 - (j + (l * p * (1 - j)))\n\t}",
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
  "{ :self :aString |\n\t\tself.characters.levenshteinDistance(aString.characters)\n\t}",
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
  "{ :self :aString |\n\t\tself.characters.damerauLevenshteinDistance(aString.characters)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tlet distanceList = self.collect { :each |\n\t\t\taBlock(each, anObject)\n\t\t};\n\t\tlet leastDistance = distanceList.min;\n\t\tself.select { :each |\n\t\t\taBlock(each, anObject) = leastDistance\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.nearestBy(anObject, euclideanDistance:/2)\n\t}",
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
  "{ :self :anObject :anInteger |\n\t\tlet distanceList = self.collect { :each |\n\t\t\teuclideanDistance(each, anObject)\n\t\t};\n\t\tlet indexList = distanceList.ordering.first(anInteger);\n\t\tself.atAll(indexList)\n\t}",
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
  "{ :u :v :f:/2 |\n\t\tlet cMax  = 0;\n\t\tlet a = nil;\n\t\tlet b = nil;\n\t\tu.withIndexDo { :x :i |\n\t\t\tlet cMin = Infinity;\n\t\t\tlet k = nil;\n\t\t\tv.withIndexDo { :y :j |\n\t\t\t\tlet d = f(x, y);\n\t\t\t\t(d < cMin).ifTrue {\n\t\t\t\t\tcMin := d;\n\t\t\t\t\tk := j\n\t\t\t\t}\n\t\t\t};\n\t\t\t(cMin > cMax).ifTrue {\n\t\t\t\tcMax := cMin;\n\t\t\t\ta := i;\n\t\t\t\tb := k\n\t\t\t}\n\t\t};\n\t\t[cMax, a, b]\n\t}",
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
  "{ :u :v |\n\t\tdirectedHausdorffMetric(u, v, euclideanDistance:/2)\n\t}",
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
  "{ :u :v :f:/2 |\n\t\thausdorffMetric(u, v, f:/2).at(1)\n\t}",
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
  "{ :u :v |\n\t\thausdorffMetric(u, v).at(1)\n\t}",
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
  "{ :u :v :f:/2 |\n\t\tlet a = directedHausdorffMetric(u, v, f:/2);\n\t\tlet b = directedHausdorffMetric(v, u, f:/2);\n\t\t(a[1] > b[1]).if { a } { b }\n\t}",
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
  "{ :u :v |\n\t\thausdorffMetric(u, v, euclideanDistance:/2)\n\t}",
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
  "{ :self :initialIndex |\n\t\tlet distanceMatrix = self.distanceMatrix;\n\t\tlet visited = List(self.size, false);\n\t\tlet currentIndex = initialIndex;\n\t\tlet answer = [currentIndex];\n\t\tvisited[currentIndex] := true;\n\t\t{\n\t\t\tvisited.allTrue\n\t\t}.whileFalse {\n\t\t\tlet distanceList = distanceMatrix[currentIndex];\n\t\t\tlet o = distanceList.ordering;\n\t\t\tlet i = 1;\n\t\t\t{\n\t\t\t\tvisited[o[i]]\n\t\t\t}.whileTrue {\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\tvisited[o[i]] := true;\n\t\t\tanswer.add(o[i]);\n\t\t\tcurrentIndex := o[i]\n\t\t};\n\t\tanswer\n\t}",
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
    let _vertexList = _asList_1(_nonemptyRange_3(1, _vertexCount, 1));
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
  "{ :self |\n\t\tlet distanceMatrix = self.distanceMatrix;\n\t\tlet vertexCount = self.size;\n\t\tlet vertexList = [1 .. vertexCount];\n\t\tlet edgeList = [];\n\t\t1.toDo(vertexCount) { :i |\n\t\t\tlet distanceList = distanceMatrix[i];\n\t\t\tlet sortedDistances = distanceList.sorted;\n\t\t\tlet leastDistance = sortedDistances[2];\n\t\t\t1.toDo(vertexCount) { :j |\n\t\t\t\tlet distance = distanceList[j];\n\t\t\t\t(i != j & { distance <= leastDistance }).ifTrue {\n\t\t\t\t\tedgeList.addIfNotPresent(i --> j)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tGraph(vertexList, edgeList)\n\t}",
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
  "{ :u :f:/2 |\n\t\tlet k = u.size;\n\t\tlet answer = [];\n\t\t1.toDo(k) { :i |\n\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\tanswer.add(f(u[i], u[j]))\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :u |\n\t\tpairwiseDistances(u, euclideanDistance:/2)\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_self, 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _n = _size_1(_a);
    let _y = _solidus_2(_n, _goldenRatio_1(1));
    let _p = _collect_2(
      _to_2(1, _n),
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
      _to_2(1, _n),
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
      _to_2(1, _n),
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
  "{ :self |\n\t\tlet [a, b] = self;\n\t\tlet n = a.size;\n\t\tlet y = n / 1.goldenRatio;\n\t\tlet p = 1.to(n).collect { :i |\n\t\t\t[b[i], 0]\n\t\t};\n\t\tlet q = 1.to(n).collect { :i |\n\t\t\t[a[i], y]\n\t\t};\n\t\tlet r = 1.to(n).collect { :i |\n\t\t\tLine([p[i], q[i]])\n\t\t};\n\t\t[\n\t\t\tp.PointCloud,\n\t\t\tq.PointCloud,\n\t\t\tr\n\t\t].LineDrawing\n\t}",
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
      let __SplVar2 = _assertIsOfSize_2(_shape_1(_tracebackMatrix), 2);
      let _n = _at_2(__SplVar2, 1);
      let _m = _at_2(__SplVar2, 2);
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
    let __SplVar3 = _assertIsOfSize_2(_warpingMatrices_4(_x, _y, _w, _f_2), 2);
    let _tracebackMatrix = _at_2(__SplVar3, 1);
    let __SplUnused6 = _at_2(__SplVar3, 2);
    /* Statements */
    return _collect_2(
      _transpose_1(_derivePath_1(_tracebackMatrix)),
      _reverse_1,
    );
  }, ["x", "y", "w", "f:/2"]),
  "{ :x :y :w :f:/2 |\n\t\tlet derivePath = { :tracebackMatrix |\n\t\t\tlet [n, m] = tracebackMatrix.shape;\n\t\t\tlet i = n;\n\t\t\tlet j = m;\n\t\t\tlet path = [[i, j]];\n\t\t\t{ i > 1 | { j > 1 } }.whileTrue {\n\t\t\t\ttracebackMatrix[i][j].caseOf([\n\t\t\t\t\t1 -> {\n\t\t\t\t\t\ti := i - 1;\n\t\t\t\t\t\tj := j - 1\n\t\t\t\t\t},\n\t\t\t\t\t2 -> {\n\t\t\t\t\t\ti := (i - 1)\n\t\t\t\t\t},\n\t\t\t\t\t3 -> {\n\t\t\t\t\t\tj := j - 1\n\t\t\t\t\t}\n\t\t\t\t]);\n\t\t\t\tpath.addLast([i, j])\n\t\t\t};\n\t\t\tpath\n\t\t};\n\t\tlet [tracebackMatrix, _] = warpingMatrices(x, y, w, f:/2);\n\t\ttracebackMatrix.derivePath.transpose.collect(reverse:/1)\n\t}",
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
  "{ :x :y :w |\n\t\twarpingCorrespondence(x, y, w, euclideanDistance:/2)\n\t}",
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
  "{ :x :y |\n\t\twarpingCorrespondence(x, y, Infinity, euclideanDistance:/2)\n\t}",
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
    let __SplVar4 = _assertIsOfSize_2(_warpingMatrices_4(_x, _y, _w, _f_2), 2);
    let __SplUnused7 = _at_2(__SplVar4, 1);
    let _costMatrix = _at_2(__SplVar4, 2);
    /* Statements */
    return _at_2(_at_2(_costMatrix, _i), _j);
  }, ["x", "y", "w", "f:/2"]),
  "{ :x :y :w :f:/2 |\n\t\tlet i = x.size;\n\t\tlet j = y.size;\n\t\tlet [_, costMatrix] = warpingMatrices(x, y, w, f:/2);\n\t\tcostMatrix[i][j]\n\t}",
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
  "{ :x :y :w |\n\t\twarpingDistance(x, y, w, euclideanDistance:/2)\n\t}",
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
  "{ :x :y |\n\t\twarpingDistance(x, y, Infinity, euclideanDistance:/2)\n\t}",
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
  "{ :x :y :w :f:/2 |\n\t\tlet n = x.size;\n\t\tlet m = y.size;\n\t\tlet tracebackMatrix = [0].reshape([n, m]);\n\t\tlet costMatrix = [Infinity].reshape([n + 1, m + 1]);\n\t\tcostMatrix[1][1] := 0;\n\t\tw := w + 1;\n\t\t2.toDo(n + 1) { :i |\n\t\t\tlet a = max(2, i - w);\n\t\t\tlet b = min(m + 1, i + w);\n\t\t\ta.toDo(b) { :j |\n\t\t\t\tlet z = f(x[i - 1], y[j - 1]);\n\t\t\t\tlet h = [\n\t\t\t\t\tcostMatrix[i - 1][j - 1],\n\t\t\t\t\tcostMatrix[i - 1][j],\n\t\t\t\t\tcostMatrix[i][j - 1]\n\t\t\t\t];\n\t\t\t\tlet l = h.min;\n\t\t\t\tcostMatrix[i][j] := z + l;\n\t\t\t\ttracebackMatrix[i - 1][j - 1] := h.indexOf(l)\n\t\t\t}\n\t\t};\n\t\tcostMatrix.removeFirst;\n\t\tcostMatrix.do { :each |\n\t\t\teach.removeFirst\n\t\t};\n\t\t[tracebackMatrix, costMatrix]\n\t}",
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
  "{ :x :y |\n\t\twarpingMatrices(x, y, Infinity, euclideanDistance:/2)\n\t}",
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
    let __SplVar5 = _assertIsOfSize_2(_c, 2);
    let _a = _at_2(__SplVar5, 1);
    let _b = _at_2(__SplVar5, 2);
    let _o = _asterisk_2(_hyphenMinus_2(_range_1(_y), _min_1(_x)), 1.5);
    let _p = _transpose_1([
      _asList_1(_nonemptyRange_3(1, _size_1(_x), 1)),
      _plusSign_2(_x, _o),
    ]);
    let _q = _transpose_1([_asList_1(_nonemptyRange_3(1, _size_1(_y), 1)), _y]);
    let _r = _collect_2(
      _to_2(1, _size_1(_a)),
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
  "{ :x :y :c |\n\t\tlet [a, b] = c;\n\t\tlet o = (y.range - x.min) * 1.5;\n\t\tlet p = [[1 .. x.size], x + o].transpose;\n\t\tlet q = [[1 .. y.size], y].transpose;\n\t\tlet r = 1.to(a.size).collect { :i |\n\t\t\tLine([p[a[i]], q[b[i]]])\n\t\t};\n\t\t[\n\t\t\t(p ++ q).PointCloud,\n\t\t\tp.Line,\n\t\t\tq.Line,\n\t\t\tr\n\t\t].LineDrawing\n\t}",
);
