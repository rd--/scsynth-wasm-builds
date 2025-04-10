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
    return _boole_1(_equalsSign_2(_u, _v));
  }, ["u", "v"]),
  "{ :u :v | boole((=(u, v))) }",
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
          _tildeEqualsSign_2(_at_2(_self, _index), _at_2(_other, _index)),
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
  "{ :self :other | let size = min(size(self),size(other)); let count = abs((-(size(self), size(other)))); toDo(1, size, { :index | ifTrue((~=(at(self, index), at(other, index))), { count := +(count, 1) }) }); count }",
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
              _tildeEqualsSign_2(_i, _j),
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
  "{ :u :v | let k = size(u); if((=(size(v), k)), { let a = 0; let b = 0; withDo(u, v, { :i :j | ifTrue((~=(i, j)), { a := +(a, 1) }); ifTrue((&(not(asBoolean(i)), { not(asBoolean(j)) })), { b := +(b, 1) }) }); /(a, (-(k, b))) }, { error(u,'jaccardDissimilarity: size mismatch') }) }",
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
      _asterisk_2(0.5, _squared_1(_norm_1(_hyphenMinus_2(_uu, _vv)))),
      _plusSign_2(_squared_1(_norm_1(_uu)), _squared_1(_norm_1(_vv))),
    );
  }, ["u", "v"]),
  "{ :u :v | let uu = (-(u, mean(u))); let vv = (-(v, mean(v))); /(*(0.5, squared(norm((-(uu, vv))))), (+(squared(norm(uu)), squared(norm(vv))))) }",
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
    return _squared_1(_norm_1(_hyphenMinus_2(_self, _aList)));
  }, ["self", "aList"]),
  "{ :self :aList | squared(norm((-(self, aList)))) }",
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
